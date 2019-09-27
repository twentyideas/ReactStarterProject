const lib = require("../lib")
const inquirer = require('inquirer')
const lodash = require('lodash')
const path = require('path')

const CHOICES = {
    ATOM: "Atom",
    MOLECULE: "Molecule",
    ORGANISM: "Organism",
    PAGE: "Page",
    EXIT: "<- Back"
}

const PATHS = {
    [CHOICES.ATOM]: path.resolve(__dirname, "../../src/components/atoms"),
    [CHOICES.MOLECULE]: path.resolve(__dirname, "../../src/components/molecules"),
    [CHOICES.ORGANISM]: path.resolve(__dirname, "../../src/components/organisms"),
    [CHOICES.PAGE]: path.resolve(__dirname, "../../src/components/pages"),
}

const TEMPLATES = {
    [CHOICES.ATOM]: [path.resolve(__dirname, "./templates/component/template.tsx")],
    [CHOICES.MOLECULE]: [path.resolve(__dirname, "./templates/component/template.tsx")],
    [CHOICES.ORGANISM]: [path.resolve(__dirname, "./templates/organism/template.tsx")],
    [CHOICES.PAGE]: [path.resolve(__dirname, "./templates/page/template.tsx")],
}


function generate(name, type, directory) {
    // read all the template files.
    let subcategory = lodash.last(directory.split(path.sep))
    if (subcategory.toLowerCase().slice(0, -1) === type.toLowerCase()) {
        subcategory = ""
    }

    const className = lodash.camelCase([subcategory, name, type].filter(Boolean).join("-"))

    const params = { name, className }

    const writeFiles = TEMPLATES[type].map((templatePath) => {
        const outFileName = lodash.last(templatePath.split(path.sep)).replace('template', name)
        const dest = path.resolve(directory, outFileName)

        const data = lib.getTemplate(templatePath, params)
        return { dest, data }
    })

    writeFiles.forEach(({ dest, data }) => {
        lib.writeFile({ dest, data })
        console.log(`Successfully created file: ${dest}`)
    })
}


async function generator(firstRun = true) {
    const questions = [
        {
            type: "list",
            choices: lodash.values(CHOICES),
            name: "type",
            message: firstRun ? "What type of component you like to generate?" : "Generate more components?"
        },
        {
            type: "list",
            message: "Does this have a category?",
            name: "category",
            when: prevAnswers => prevAnswers.type !== CHOICES.EXIT,
            choices: (prevAnswers) => {
                const { type } = prevAnswers
                const foldersInDir = lib.dirsInDirectory(PATHS[type]).map(dir => {
                    return { name: lodash.last(dir.split(path.sep)), value: dir }
                })
                return [
                    ...foldersInDir,
                    { name: "+ Create", value: null },
                    { name: "No", value: PATHS[type] }
                ]
            }
        },
        {
            name: "category2",
            message: "Enter name of new category",
            type: "input",
            validate: v => !!v && v.length >= 3,
            when: prevAnswers => !prevAnswers.category && prevAnswers.type !== CHOICES.EXIT
        },
        {
            name: "name",
            message: "Enter name of component",
            type: "input",
            when: prevAnswers => prevAnswers.type !== CHOICES.EXIT,
            validate(v) {
                if (!v || !v.length) {
                    return `Must have length`
                }
                if (v[0] !== v[0].toUpperCase()) {
                    return `Name must start with uppercase!!`
                }
                return true
            }
        }
    ]

    const { name, type, category, category2 } = await inquirer.prompt(questions)

    if (type === CHOICES.EXIT) {
        return
    }


    // generate it
    // console.log(`answers`, { name, type, category, category2 })
    let dir = category
    if (!dir) {
        dir = path.resolve(PATHS[type], category2)
    }

    generate(name, type, dir)
    await generator(false)
}

module.exports = generator