import './common/base.js'

class App {
  constructor () {
    //nunjucks.configure('html', { autoescape: true });
    var res = nunjucks.render('components/test.html', { username: 'James' });
    console.log('res:', res)
    this.bindEvents()
  }

  bindEvents () {
    
  }
}

export default new App()
