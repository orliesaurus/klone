jQuery.fn.extend({
    img_load: function () {
      $(this).attr("test","yes");
    }
});

function immagineACaso() {
  var immagini = new Array("C", "S", "T");
  return immagini[Math.floor(Math.random()*immagini.length)];
}

function presentaImmagine() {
  var picID = immagineACaso()
  
  $('#sketch').css("background-color","#222");
  $('#imgappr').fadeIn(1);
  $('#imgappr').html('<img src=\"images/'+ picID +'D.png\" height=\"'+dimens.toString()+'px\"/>');
  $('#imgappr').fadeOut(4000, function(){ $('#sketch').css('background-color','black') });

  if($('.yolocount').data('countdown') !== null && $('.yolocount').data('countdown') !== undefined ) {
    $('.yolocount').data('countdown').update(+(new Date) + 16000);
  } else {
    $('.yolocount').countdown({
          date: +(new Date) + 16000,
          render: function(data) {
        if (data.sec >= 1) {
          $(this.el).text(this.leadingZeros(data.sec-1, 2) + " sec")
        }
        },
        onEnd: function() {
          confrontaCon('images/'+ picID +'.png');
          //reset the screen and go to next level
        }
    });
  }  

}
