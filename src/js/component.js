$(document).ready(function () {

  $(window).resize(function () {
    if ($(window).width() < 1200) {
      $('body').append('<div class="mobile">Please login from your computer</div>')
    } else {
      $('.mobile').remove();
    }
  })


  if ($(window).width() < 1200) {
    $('body').append('<div class="mobile">Please login from your computer</div>')
  } else {
    $('.mobile').remove();
  }

  var audio = {};

  function startAudio(url) {
    if ("pause" in audio) audio.pause();

    audio = new Audio(url);
    audio.play();
    audio.loop = true;
  }
/*
  var countHover = 0;
  $('body').hover(function () {
    console.log(countHover);
    if (countHover == 0) {
      countHover++;
      startAudio('audio/a2.mp3');
    }

  })
*/

  var instance2
  var instance = new TypeIt(".content", {
      speed: 10,
      cursorChar: '_',
      deleteSpeed: '0',
      html: true,
      cursor: false,
      waitUntilVisible: true,
      afterComplete: function (step, instance) {
        $('#pass').show();
        $('#pass').focus();

        instance2 = new TypeIt("#pass", {
          speed: 10,
          cursorChar: '_',
          waitUntilVisible: true
        }).go();
      }
    })
    .type("Designers Test")
    .type(".............", {
      speed: 200
    })
    .type("PASS")

    .break({
      delay: 500
    })
    .type("Programmers Test")
    .type("...........", {
      speed: 200
    })
    .type("PASS")

    .break({
      delay: 500
    })
    .type("Managers Test")
    .type("..............", {
      speed: 200
    })
    .type("PASS")

    .break({
      delay: 500
    })
    .type("Oranges Test")
    .type("..............", {
      speed: 200
    })
    .type("READY", {
      delay: 1000
    })


    .empty()

    .type("C:/\OrangeBooster.bat")
    .break({
      delay: 500
    })
    .type("Loading", {
      delay: 500
    })
    .type("......................", {
      speed: 300
    })
    .type("DONE", {
      delay: 1500
    })

    .empty()

    .type("Please enter password:")
    .break({
      delay: 500,

    })
    .go();



  function changeRow(dir) {
    var currentRow = $("#frame-btn li.active");
    var nextRow;
    if (dir == "up" && !currentRow.is(":first-child")) {
      nextRow = currentRow.prev();
    } else if (dir == "down" && !currentRow.is(":last-child")) {
      nextRow = currentRow.next();
    }
    nextRow.addClass("active");
    currentRow.removeClass("active");



  }

  function changeRow2(dir) {
    var currentRow = $("#confirm-btn li.active");
    var nextRow;
    if (dir == "up" && !currentRow.is(":first-child")) {
      nextRow = currentRow.prev();
    } else if (dir == "down" && !currentRow.is(":last-child")) {
      nextRow = currentRow.next();
    }
    nextRow.addClass("active");
    currentRow.removeClass("active");
  }

  function pressEnter() {
    var pointPress = 0;

    if ($('#btn').hasClass('show')) {
      $('.frame-item').hide();
      $('#btn').removeClass('show')
      $('#confirmation').show().addClass('show');
      $('#next').attr('data-open', $("#frame-btn li.active").data('open'));
      pointPress = 1;
    }

    if ($('.show #next').hasClass('active') && pointPress == 0) {
      console.log('pointPress', pointPress);
      $('#content').show();
      $('#confirmation').removeClass('show').hide();

      instance = new TypeIt(".content", {
          speed: 10,
          cursorChar: '_',
          deleteSpeed: '0',
          html: true,
          cursor: false,
          waitUntilVisible: true,
          afterComplete: function (step, instance) {

            $('.content').text(' ');
            $('#content').hide();
            $('' + $('#next').data('open')).show();

            $('.head-title').addClass('boom animate__animated animate__zoomIn').text('Booo-o-om!!!!')

          }
        })
        .type("C:/\OrangeBooster.bat")
        .break({
          delay: 500
        })
        .type("Calculating")
        .type(".....................", {
          speed: 200
        })
        .go();
    }

    if ($('.show #back').hasClass('active') && pointPress == 0) {
      $('#confirmation').removeClass('show').hide();
      $('#btn').addClass('show').show();
    }

  }



  $('#pass').keydown(function (e) {
    if (e.keyCode === 13) {

      if ($(this).val() == 'test') {
        /*если пароль ок*/



        /*ssssssssssssssssss*/
        $('.content').text(' ');
        $('#content, #pass').hide()
        $('.frame-display').append('<div class="load"><img src="images/load.svg" alt=""></div>');
        setTimeout(function () {
          $('.load').css({
            'top': '-470%'
          })

        }, 500)

        setTimeout(function () {
          $('.load').remove();
          $('#pass').remove();
          $('.life-point').show()
          $('.frame-alert').show()


          $(document).keydown(function (e) {
            if (e.keyCode === 73) {
              console.log(73);
              $('#frame-btn li').removeClass('active');
              $('#frame-btn li[data-open="#open1"]').addClass('active');
              pressEnter();
            }
            if (e.keyCode === 72) {
              console.log(72);
              $('#frame-btn li').removeClass('active');
              $('#frame-btn li[data-open="#open2"]').addClass('active');
              pressEnter();
            }
            if (e.keyCode === 86) {
              console.log(86);
              $('#frame-btn li').removeClass('active');
              $('#frame-btn li[data-open="#open3"]').addClass('active');
              pressEnter();
            }
            if (e.keyCode === 89) {
              console.log(89);
              $('#confirm-btn li').removeClass('active');
              $('#next').addClass('active');
              pressEnter();

            }
            if (e.keyCode === 78) {
              console.log(78);
              $('#confirm-btn li').removeClass('active');
              $('#back').addClass('active');
              pressEnter();

            }

            switch (e.which) {
              case 38: // up
                changeRow("up");
                changeRow2("up");
                break;

              case 40: // down
                changeRow("down");
                changeRow2("down");
                break;

              case 13: // down
                pressEnter();
                break;

              default:
                return; // exit this handler for other keys
            }
            e.preventDefault(); // prevent the default action (scroll / move caret)
          });


//          audio.pause();
          startAudio('audio/a1.mp3');

        }, 4000)

        setTimeout(function () {
          $('.frame-alert').hide()
          $('#btn').show().addClass('show');
          $('.frame-display').css({
            'overflow': 'visible'
          })

        }, 7000)


      } else {
        alert('Wrong password');
        $('#pass').val('');
      }



    }
  });


});