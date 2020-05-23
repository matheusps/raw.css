const fs = require('fs')

const files = [
  './src/root.css',
  './src/general.css',
  './src/typo.css',
  './src/form.css',
  './src/media.css',
  './src/misc.css',
]

process.stdout.write("🔥Putting files together \n")

const reducer = (acc, file) => 
  `${acc}\n\n${fs.readFileSync(file, { encoding: "utf8" })}`

fs.writeFileSync('./raw.css', files.reduce(reducer, '/** Raw.css by @matheusps */') )

process.stdout.write("📦 Created raw.css \n")
