const fs = require('fs')
const path = require('path')
const Koa = require('koa')
const compilerSfc = require('@vue/compiler-sfc')
const compilerDom = require('@vue/compiler-dom')

const app = new Koa()
const port = 3001

function rewriteImports(content) {
  return content.replace(/ from ['|"]([^'"]+)['|"]/g, function (s0, s1) {
    // console.log({ s0, s1 })
    if (s1[0] !== '.' && s1[1] !== '/') {
      return ` from '/@modules/${s1}'`
    } else {
      return s0
    }
  })
}

app.use(async ctx => {
  const {
    request: { url, query },
  } = ctx

  // root
  if (url == '/') {
    ctx.type = 'text/html'
    const content = fs.readFileSync('./src/index.html', 'utf-8').replace(
      '<script',
      `
      <script>
        window.process = {
          env: { NODE_EV:'dev' }
				}
				function updateStyle(content) {
					// 方法1 
					let style = new CSSStyleSheet();
					style.replaceSync(content);
					document.adoptedStyleSheets = [
						...document.adoptedStyleSheets,
						style,
					];
	
					// 方法2
					// let style = document.createElement('style')
					// style.setAttribute('type', 'text/css')
					// style.innerHTML = content
					// document.head.appendChild(style)
				}

      </script>
      <script
    `
    )
    ctx.body = content
  }

  // .js
  if (url.endsWith('.js')) {
    const file = path.resolve(__dirname, url.slice(1))
    const content = fs.readFileSync(file, 'utf-8')
    ctx.type = 'application/javascript'
    ctx.body = rewriteImports(content)
  }

  // .css
  if (url.endsWith('.css')) {
    const p = path.resolve(__dirname, url.slice(1))
  	const file = fs.readFileSync(p, 'utf-8')
  	console.log(file)
    const content = `
  		const css = "${file.replace(/\r\n/g, '')}"
  		const link = document.createElement('style')
  		link.setAttribute('type', 'text/css')
  		link.innerHTML = css
  		document.head.appendChild(link)
  		export default css
  	`
    ctx.type = 'application/javascript'
    ctx.body = content
  }

  // modules
  if (url.startsWith('/@modules/')) {
    const lib = url.replace('/@modules/', '')
    const { module } = require(path.resolve(
      __dirname,
      'node_modules',
      lib,
      'package.json'
    ))
    const fileContent = fs.readFileSync(
      path.resolve(__dirname, 'node_modules', lib, module),
      'utf-8'
    )
    ctx.type = 'application/javascript'
    ctx.body = rewriteImports(fileContent)
  }

  // .vue
  if (url.includes('.vue')) {
    const p = path.resolve(__dirname, url.split('?')[0].slice(1))
    const { descriptor } = compilerSfc.parse(fs.readFileSync(p, 'utf-8'))
    if (!query.type) {
      ctx.type = 'application/javascript'
      ctx.body = `
        const __script = ${descriptor.script.content.replace(
          'export default ',
          ''
        )}
        ${descriptor.styles.length ? `import "${url}?type=style"` : ''}
        import { render as __render } from "${url}?type=template"
        __script.render = __render;
        export default __script;
			`
    } else if (query.type === 'template') {
      const template = descriptor.template
      const render = compilerDom.compile(template.content, {
        mode: 'module',
      }).code
      ctx.type = 'application/javascript'
      ctx.body = rewriteImports(render)
    } else if (query.type === 'style') {
      const styleBlock = descriptor.styles[0]
      ctx.type = 'application/javascript'
      ctx.body = `
        const css = ${JSON.stringify(styleBlock.content)};
        updateStyle(css);
        export default css;
    	`
    }
  }
})

app.listen(port, () => {
  console.log(`success listen http://localhost:${port}`)
})
