const fs = require('fs-extra')
const path = require('path')
const mkdirp = require('mkdirp')
const lodash = require('lodash')
const stringFuncs = require('./string')

function filesInDirectory(dir, recursive = true, acc = []) {
    try {
        const files = fs.readdirSync(dir);
        for (const i in files){
            const name = [dir, files[i]].join(path.sep)
            if (fs.statSync(name).isDirectory()){
                if (recursive) {
                    filesInDirectory(name, recursive, acc);
                }
            } else {
                acc.push(name);
            }
        }
        return acc;
    } catch(e) {
        return acc
    }
}

function dirsInDirectory(dir, recursive = true, acc = []) {
    try {
        const dirs = fs.readdirSync(dir);
        for (const i in dirs){
            const name = [dir, dirs[i]].join(path.sep)
            if (fs.statSync(name).isDirectory()){
                acc.push(name)
                if (recursive) {
                    dirsInDirectory(name, true, acc);
                }
            }
        }
        return acc;
    } catch(e) {
        return acc
    }
}

function writeFile(params = { srcFile: "", data: "", dest: "" }) {
    try {
        const { srcFile, data, dest } = params
        const raw = srcFile ? fs.readFileSync(srcFile, 'utf8') : data
        const output = typeof raw === 'string' ? raw : JSON.stringify(raw, null, 4)
        mkdirp.sync(path.dirname(dest))
        fs.writeFileSync(dest, output)
    } catch(e) {
        throw e
    }
}

function createDir(dir) {
    mkdirp.sync(dir)
}


function copyDir(srcDir, destDir, keepExisingInDest = false) {
    const filesInDir = filesInDirectory(srcDir)

    if(!keepExisingInDest) {
        removeDir(destDir)
    }

    const outFiles = filesInDir.map((n) => {
        const f = [destDir, n.slice(srcDir.length)].join(path.sep)
        return path.normalize(f)
    })
    return outFiles.map((dest, idx) => {
        const srcFile = filesInDir[idx]
        return writeFile({ srcFile, dest })
    })
}

function copyFile(src, dest) {
    const data = fs.readFileSync(src, { encoding: 'utf8' })
    return writeFile({ data, dest })
}

function removeDir(dir) {
    if (!fs.existsSync(dir)) {
        return
    }
    
    try {
        fs.readdirSync(dir).forEach((file) => {
            const curPath = [dir, file].join(path.sep)
            if (fs.lstatSync(curPath).isDirectory()) { // recurse
                removeDir(curPath);
            } else { // delete file
                fs.unlinkSync(curPath);
            }
        });
        fs.rmdirSync(dir);
    } catch(e) {
        throw e
    }
}

function removeFile(location) {
    if (!fs.existsSync(location)) {
        return
    }

    if(fs.lstatSync(location).isFile()) {
        fs.unlinkSync(location)
    } else {
        throw new Error(`${location} is not a file`)
    }
}

function readFile(filePath) {
    return fs.readFileSync(filePath, 'utf8')
}

function getFileOrFolderName(location) {
    const arr = location.split(path.sep)
    const last = lodash.last(arr)
    return lodash.first(lodash.compact(last.split('.')))
}

function getTemplate(templatePath, withParams) {
    let file = readFile(templatePath)

    if (withParams) {
        lodash.each(withParams, (replacement, k) => {
            const find = `%${k}%`
            file = stringFuncs.replace(file, find, replacement)
            file = stringFuncs.replace(file, find.toLowerCase(), replacement)
            file = stringFuncs.replace(file, find.toUpperCase(), replacement)
        })
    }

    return file
}


function dirExists(dir) {
    try {
        return fs.statSync(dir).isDirectory()
    } catch(e) {
        return false
    }
}

function fileExists(file) {
    try {
        return fs.statSync(file).isFile()
    } catch(e) {
        return false
    }
}

function onProcessExit(fn) {
    if (process.platform === "win32") {
        const rl = require('readline').createInterface({ input: process.stdin, output: process.stdout })
        rl.on('SIGINT', () => process.emit('SIGINT'))
    }
    process.on("SIGINT", fn)
}

module.exports = {
    filesInDirectory,
    dirsInDirectory,
    dirExists,
    fileExists,
    writeFile,
    copyDir,
    copyFile,
    removeDir,
    createDir,
    removeFile,
    readFile,
    getFileOrFolderName,
    getTemplate,
    onProcessExit
}
