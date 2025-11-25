import { build } from 'esbuild'
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { resolve } from 'node:path'

async function main() {
  const result = await build({
    entryPoints: [resolve('src/main.jsx')],
    bundle: true,
    write: false,
    jsx: 'transform',
    jsxFactory: 'React.createElement',
    jsxFragment: 'React.Fragment',
    format: 'iife',
    target: ['es2017'],
    logLevel: 'silent',
    legalComments: 'none',
  })

  const bundle = result.outputFiles[0].text
  mkdirSync('dist-esbuild', { recursive: true })
  const css = readFileSync('src/index.css', 'utf8')
  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Esbuild Preview</title>
    <style>${css}</style>
  </head>
  <body>
    <div id="root"></div>
    <script>${bundle}</script>
  </body>
</html>`
  writeFileSync('dist-esbuild/index.html', html)
  writeFileSync('dist-esbuild/bundle.js', bundle)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
