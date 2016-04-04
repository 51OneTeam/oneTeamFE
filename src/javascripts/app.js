import './common/base.js'

class App {
  constructor () {
    var res = nunjucks.render('test.html', { username: 'James' });
    console.log('res:', res)
    this.bindEvents()
  }

  bindEvents () {
    
  }
}

export default new App()
