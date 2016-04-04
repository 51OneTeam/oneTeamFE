import '../vendor/nunjucks.js'
import '../vendor/jquery.js'

class Base {
    constructor () {
        var env = nunjucks.configure('/templates', {
          tags: {
            blockStart: '<%',
            blockEnd: '%>',
            variableStart: '<$',
            variableEnd: '$>',
            commentStart: '<#',
            commentEnd: '#>'
          }
        })
        
    }
}

export default new Base()