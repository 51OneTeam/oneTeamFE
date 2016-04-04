import './common/base'
//import './vendor/jquery.fullpage'
import './vendor/jquery.fullPage'

class Index {
  constructor () {      
    this.bindEvents()
  }

  bindEvents () {

    $('#fullpage').fullpage({
        anchors: ['page1', 'page2', 'page3', 'page4'],
        afterRender: function(){
            $(".section1 h2").addClass("col");
            $(".section1 p").addClass("col");
            $(".section1 a").addClass("col")
            
        },
        afterLoad:function(anchorLink,index){
            if((index=="2")){
            }
        }
    });

    $('#open_contact').click(function() {
        $('.n_contact').show();
    })

    $('#close').click(function() {
        $('.n_contact').hide();
    })

  }
}

export default new Index()
