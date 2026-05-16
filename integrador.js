const readline = require('readline');
const { spawnSync } = require('child_process');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

let inputLines = [];
let numberOfCommands = 0;

const DEFAULT_STATUS = process.env.DEFAULT_STATUS || 'pending';

let adoptions = [
  {
    id: 1, petId: 111, userId: 222, status: 'adopted'
  }
]

rl.on('line', (line) => {
  if (numberOfCommands === 0) {
    numberOfCommands = parseInt(line);
  } else {
    inputLines.push(line);
    if (inputLines.length === numberOfCommands) {
      processCommands(inputLines);
      rl.close();
    }
  }
});

function validateUser(userId){
  
}

function processCommands(commands) {
  // TODO: Implementar lógica para procesar cada comando y simular respuestas
  // Debe usar process.env para configuración
  // Debe usar child_process para simular validaciones externas
  // Imprimir resultado JSON por línea

  commands.forEach(cmdLine => {
    const cmd = JSON.parse(cmdLine);
    // Ejemplo simple de respuesta
    if (cmd.method === 'GET' && cmd.endpoint === '/adoptions') {
      console.log(JSON.stringify([{ id: 1, petId: 123, userId: 456, status: 'adopted' }]));
    } else {
      console.log('{}');
    }
  });
}