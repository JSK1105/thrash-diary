// title from text input

/*
$('input[name=titleInput]').keyup(function(){
  $('.clipped').hide().show(0);
  $('#title').text(this.value);
});

$('.clipped').hide().show(0); starts an animation with duration 0 and uses requestAnimationFrame which triggers a redraw. To be sure that an update of jQuery won't break it, the code should be written like this:
*/

$('input[name=titleInput]').keyup(function(){
    if( window.requestAnimationFrame ) {
      $('.clipped').hide();
    }
    $('#title').text(this.value);
    if( window.requestAnimationFrame ) {
      window.requestAnimationFrame(function() {
        $('.clipped').show();
      })
    }
  });
  
  // image upload
  
  $("#uploadButton").click(function(){
    $("#uploadFile").click();
  });
  
  $(document).ready(function(){
    ImageUpload.init();
  });
  
  var ImageUpload = {
    init:function() {
      $("#uploadFile").change(function(){
          ImageUpload.readURL(this);
      });
    },
    readURL:function(input) {
      if (input.files && input.files[0]) {
          var reader = new FileReader();
          reader.onload = function (e) {
            $('.header').css(
                "background-image",
                "url(" + e.target.result + ")"
              );
            $(".clipped").css(
              "background-image",
              "url(" + e.target.result + ")"
            );
          }
          reader.readAsDataURL(input.files[0]);
      }
    },
  }
/*----------------------------------------------------------- bot ---------------------------------------------*/
  