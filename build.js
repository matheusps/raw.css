const fs = require('fs')

const files = [
  './src/native/root.css',
  './src/native/general.css',
  './src/native/typo.css',
  './src/native/form.css',
  './src/native/media.css',
  './src/native/misc.css',
  './src/patterns/sidebar.css',
]

process.stdout.write("🔥Putting files together \n")

const reducer = (acc, file) => 
  `${acc}\n\n${fs.readFileSync(file, { encoding: "utf8" })}`

fs.writeFileSync('./raw.css', files.reduce(reducer, '/** Raw.css by @matheusps */') )

process.stdout.write("📦 Created raw.css \n")
