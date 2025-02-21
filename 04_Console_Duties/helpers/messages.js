require('colors');


const mostrarMenu = () =>{
    console.clear();
    console.log('=========================='.green);
    console.log('     Select an option'.green);
    console.log('==========================\n'.green);

    console.log(`${'1.'.green} Create task`);
    console.log(`${'2.'.green} List task`);
    console.log(`${'3.'.green} List completed tasks`);
    console.log(`${'4.'.green} List pending tasks`);
    console.log(`${'5.'.green} Complete task(S)`);
    console.log(`${'6.'.green} Delete task`);
    console.log(`${'0.'.green} Exist \n`);

    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question('Select an option: ',(opt)=>{
        readline.close();
    })

}

const pause = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    readline.question(`Press ${'Enter'.green} to continue \n`,(opt)=>{
        readline.close();
    })

}

module.exports = {mostrarMenu, pause}