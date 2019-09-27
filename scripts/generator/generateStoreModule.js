const lib = require("../lib")
const inquirer = require('inquirer')
const lodash = require('lodash')
const path = require('path')

const MODULES_PATH = path.resolve(__dirname, "../../src/store/modules")
const STORE_PATH = path.resolve(__dirname, "../../src/store/Store.tsx")

const MODULE_TEMPLATE_PATH = path.resolve(__dirname, "./templates/storeModule/template.tsx")
const STORE_TEMPLATE_PATH = path.resolve(__dirname, "./templates/store/template.tsx")

const CHOICES = {
    NEW_MODULE: "New Module",
    EXIT: "<- Back"
}

function spacing(times = 1) {
    const tabs = (times) => {
        const spaces = `    `
        if (times <= 1) {
            return spaces
        }
        return spaces + tabs(times - 1)
    }

    return `\n${tabs(times)}`
}

function generateMasterStoreFile() {
    const modulesFileNames = lib.filesInDirectory(MODULES_PATH, false)
    const moduleClassNames = modulesFileNames.map(m => lodash.last(m.split(path.sep)).replace('.tsx', '')).filter(n => n !== 'Base')
    const modulePropNames = moduleClassNames.map(lodash.camelCase)

    const params = {
        imports: moduleClassNames.map(n => `import ${n} from "./modules/${n}"`).join('\n'),

        properties: modulePropNames.map((prop, idx) => {
            const className = moduleClassNames[idx]
            return `${prop}: ${className}`
        }).join(spacing(1)),

        constructor: modulePropNames.map((prop, idx) => {
            const className = moduleClassNames[idx]
            return `this.${prop} = new ${className}()`
        }).join(spacing(2)),

        init: modulePropNames.map(prop => `this.${prop}.init(this)`).join(`,${spacing(3)}`)
    }

    const dest = STORE_PATH
    const data = lib.getTemplate(STORE_TEMPLATE_PATH, params)
    lib.writeFile({ dest, data })
}

function generate(name) {
    console.log(`Create ${name}`)
    const fileName = `${name}.tsx`
    const dest = path.resolve(MODULES_PATH, fileName)
    const data = lib.getTemplate(MODULE_TEMPLATE_PATH, { name })
    lib.writeFile({ dest, data })

    /* now re-generate the store/Store.tsx file! */
    generateMasterStoreFile();
}

async function generator(firstRun = true) {
    const { name, type } = await inquirer.prompt([
        {
            name: "type",
            message: "Do you want to create another store module?",
            type: "list",
            choices: lodash.values(CHOICES),
            when: () => !firstRun
        },
        {
            name: "name",
            message: "What is the name of your store module?",
            when: answers => firstRun || answers.type === CHOICES.NEW_MODULE,
            validate: (v) => {
                const files = lib.filesInDirectory(MODULES_PATH)
                const names = files.map(f => lodash.last(f.split(path.sep)).replace('.tsx', '')).map(lodash.toLower)
                if (names.includes(v.toLowerCase())) {
                    return `A module with name: ${v} already exists!`
                }
                return true
            }
        }
    ])

    if (type === CHOICES.EXIT) {
        return
    }

    if (!name) {
        throw new Error(`Cannot create a store module without a name!!`)
    }

    generate(name)
    await generator(false)
}

module.exports = generator