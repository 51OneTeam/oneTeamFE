import '../vendor/nunjucks'
import '../vendor/jquery'

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