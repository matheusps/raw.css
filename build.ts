import { readFileStrSync, writeFileStrSync } from "https://deno.land/std/fs/mod.ts"

const files = [
  './src/root.css',
  './src/general.css',
  './src/typo.css',
  './src/form.css',
  './src/media.css',
  './src/misc.css',
]

const reducer = (acc: string, file: string) => 
  `${acc}\n\n${readFileStrSync(file, { encoding: "utf8" })}`

writeFileStrSync('./raw.css', files.reduce(reducer, '/** Raw.css by @matheusps */') )
