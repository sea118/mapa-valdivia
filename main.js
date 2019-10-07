// $("path, circle").click(function(e) {
//   $('#info-box').css('display','block');
//   $('#info-box').html($(this).data('info'));
// });

// $("path, circle").mouseleave(function(e) {
//   $('#info-box').css('display','none');
// });

// $(document).mouseover(function(e) {
//   $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
//   $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
// })

// var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
// if(ios) {
//   $('a').on('click touchend', function() {
//     var link = $(this).attr('href');
//     window.open(link,'_blank');
//     return false;
//   });
// }



var countryElements = document.getElementById('g5').childNodes;
var countryCount = countryElements.length;
for (var i = 0; i < countryCount; i++) {
 countryElements[i].onclick = function(e) {
    $('#info-box').css('display','block');
    $('#info-box').html($(this).data('info'));
    $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
    $('#info-box').css('left',e.pageX-($('#info-box').width())/2);

 }
}


