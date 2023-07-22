const process = require('process');


// process.stdout.write('Qual o seu nome?');

process.stdin.on('data', (KeyboardEvent) =>{
       process.stdout.write(`Texto do usuario: ${KeyboardEvent}`);
       process.exit();
})

// console.log(process.argv);
