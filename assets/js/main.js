var win = window,
    docEl = document.documentElement,
    $logo = document.getElementById('mainNav');

win.onscroll = function(){
   var sTop = (this.pageYOffset || docEl.scrollTop)  - (docEl.clientTop || 0);
   $logo.style.backgroundColor =  sTop < 300 ? "rgba(255,255,255,1)":"rgba(255,255,255,0.5)" ;
};

$('.scroll').click(function() {
    $('body').animate({
        scrollTop: eval($('#' + $(this).attr('target')).offset().top - 70)
    }, 1000);
});