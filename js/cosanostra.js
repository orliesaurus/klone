jQuery.fn.extend({
    img_load: function () {
      $(this).attr("test","yes");
    }
          });

//on Document Ready
  $(function() {
    $('.yolocount').countdown({
          date: +(new Date) + 31000,
          render: function(data) {
        if (data.sec >= 1) {
          $(this.el).text(this.leadingZeros(data.sec-1, 2) + " sec")
        }
        },
        onEnd: function() {
          pic = sketcher.toDataURL1('black')
          //reset the screen and go to next level
        }
      });
  });
