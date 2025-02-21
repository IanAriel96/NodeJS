const inquirer = require ('inquirer');
require('colors');

const input = [
    {
        type: 'input',
    }
]
const questions = [
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: 
        [
            {
                value: '1',
                name: '1. Create task'
            },
            {
                value: '2',
                name: '2. List task'
            },
            {
                value: '3',
                name: '3. List completed tasks'
            },
            {
                value: '4',
                name: '4. List pending tasks'
            },
            {
                value: '5',
                name: '5. Complete task(s)'
            },
            {
                value: '6',
                name: '6. Delete task'
            },
            {
                value: '0',
                name: '0. Exit'
            }
        ]
    }
];


const inquirerMenu = async() => {
    console.clear()
    console.log('=========================='.green);
    console.log('     Select an option'.green);
    console.log('==========================\n'.green);
    const { option } = await inquirer.prompt(questions);
    return option;
}

pause = () => {
    const x = await inquirer.prompt();
}

module.exports = {inquirerMenu, pause}