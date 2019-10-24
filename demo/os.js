const os = require('os')

console.log(
    `OS ${os.platform()}\n`,
    `Archi ${os.arch()}\n`,
)
console.log(os.cpus())

console.log('Free memory', os.freemem())

console.log(os.homedir())
console.log(os.uptime())