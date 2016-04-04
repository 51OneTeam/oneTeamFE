import '../vendor/nunjucks.js'
import '../vendor/zepto.js'
import '../vendor/sm.js'

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
        
        $.config = {
            // 路由功能开关过滤器，返回 false 表示当前点击链接不使用路由
            routerFilter: function($link) {
                // 某个区域的 a 链接不想使用路由功能
                if ($link.is('.disable-router a')) {
                    return false;
                }
                return true;
            }
        }

        $.init()
    }
}

export default new Base()