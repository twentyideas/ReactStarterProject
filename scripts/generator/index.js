const inquirer = require('inquirer')
const lodash = require('lodash')
const generateComponent = require('./generateComponent')
const generateStoreModule = require('./generateStoreModule')

const TYPES = {
    COMPONENT: "Generate Component (atom, molecule, organism, page)",
    STORE_MODULE: "Generate Store Module",
    EXIT: "Quit"
}

async function start(firstRun = true) {
    const questions = [
        {
            type: "list",
            choices: lodash.values(TYPES),
            name: "answer",
            message: firstRun ? "What would you like to do?" : "Would you like to generate more?"
        },
    ]
    
    const { answer } = await inquirer.prompt(questions)
    if (answer === TYPES.COMPONENT) {
        await generateComponent();
        await start(false);
    } else if (answer === TYPES.STORE_MODULE) {
        await generateStoreModule();
        await start(false);
    } else {
        console.log(`\nTy for using the generator!`)
    }
}

start()
