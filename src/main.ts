// import { serve } from 'server'

const port = 8888
const { cwd } = Deno

class Controller {
  static getData(ctx: any) {
    console.log('%c [ ctx ]-8', 'font-size: px; color:#bf2c9f;', JSON.stringify(ctx))
    //cwd获取当前工程目录
    // ctx.render(`${cwd()}/src/views/index.ejs`, {
    //   title: 'Testing',
    //   data: { name: 'deepincoding.com' }
    // })
    ctx.response.body = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body>
        测试
      </body>
    </html>
    `
  }
}
// function handler(req: any) {
//   return new Response('my first deno project aaaad!')
// }

// console.log(`Listening on http://localhost:${port}`)
// await serve(handler, { addr: `localhost:${port}` })

import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
// import { viewEngine, engineFactory, adapterFactory } from 'https://deno.land/x/view_engine/mod.ts'

const router = new Router()

router.get('/', Controller.getData)

// const ejsEngine = engineFactory.getEjsEngine()
// const oakAdapter = adapterFactory.getOakAdapter()

const app = new Application()

// app.use(viewEngine(oakAdapter, ejsEngine))
app.use(router.routes())
app.use(router.allowedMethods())

console.log(`Listening on http://localhost:${port}`)

await app.listen({ port })
