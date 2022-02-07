// import { serve } from 'server'

// const port = 8888

// function handler(req: any) {
//   return new Response('my first deno project aaaad!')
// }

// console.log(`Listening on http://localhost:${port}`)
// await serve(handler, { addr: `localhost:${port}` })

import { Application } from 'oka'
import { viewEngine, engineFactory, adapterFactory } from 'view_engine'
import router from './routes/mod.ts'

const ejsEngine = engineFactory.getEjsEngine()
const oakAdapter = adapterFactory.getOakAdapter()

const app = new Application()
app.use(viewEngine(oakAdapter, ejsEngine))
app.use(router.routes())
app.use(router.allowedMethods())

await app.listen({ port: 8000 })
