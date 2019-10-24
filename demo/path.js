const path = require('path')

console.log(`Filename: ${path.basename(__filename)}\n`,
            `Dirname: ${path.dirname(__dirname)}\n`,
            `Extensions name: ${path.extname(__filename)}\n`,
            `Parse: ${path.parse(__filename).name}\n`,
            path.join(__dirname, 'server','index.html')
)