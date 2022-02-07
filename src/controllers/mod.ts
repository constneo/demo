const { cwd } = Deno

class Controller {
  static getData(ctx: any) {
    //cwd获取当前工程目录
    //注意 ' ！== `

    console.log(cwd())

    ctx.render(`${cwd()}/src/views/index.html`, {
      title: 'Testing',
      data: { name: 'deepincoding.com' }
    })
  }
}

export default Controller
