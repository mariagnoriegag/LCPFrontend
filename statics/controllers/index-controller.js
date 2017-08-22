Vue.component('page', {
    template: '#page'
})
new Vue({
    el: '#app',
    data: {
        title: 'Lima City Pass',
        imagesSlider: [{
            src: 'statics/images/carousel/a1.jpg'
        }, {
            src: 'statics/images/carousel/a2.jpg'
        }, {
            src: 'statics/images/carousel/a3.jpg'
        }, {
            src: 'statics/images/carousel/a4.jpg'
        }]
    }
})

function getPrice () {
    var total = 0;
    $(".ntarjetas").each(function() {

    if (isNaN(parseFloat($(this).val()))) {
      total = 5 * 0;
  } else if (parseFloat($(this).val())<0) {
      total = console.error();
  } else {
      total = 5 * parseFloat($(this).val());
    }
    });
    //alert(total);
    document.getElementById("soles").innerHTML = total;
}
