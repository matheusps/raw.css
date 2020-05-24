const fs = require('fs')

const files = [
  './src/core/root.css',
  './src/core/general.css',
  './src/core/typo.css',
  './src/core/form.css',
  './src/core/media.css',
  './src/core/misc.css',
  './src/patterns/sidebar.css',
  './src/patterns/breadcrumb.css'
]

process.stdout.write("🔥Putting files together \n")

const reducer = (acc, file) => 
  `${acc}\n\n${fs.readFileSync(file, { encoding: "utf8" })}`

fs.writeFileSync('./raw.css', files.reduce(reducer, '/** Raw.css by @matheusps */') )

process.stdout.write("📦 Created raw.css \n")
