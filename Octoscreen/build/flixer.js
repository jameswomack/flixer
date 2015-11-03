(function () {

  var slides = {
    marcopolo: [{
      background: {
        image: 'marcopolo-1.jpg'
      },
      foreground: {
        image: 'marcopolo-2.jpg',
        startPercentage: 50,
        endPercentage: 90
      },
      focus: {
        image: 'marcopolo-3.jpg'
      },
      logo: {
        image: 'marcopolo-4.jpg'
      }
    }]
  }

  function tweenBackground () {
    var selector = '[data-layer=background]'

    var layer = document.querySelector(selector)

    var windowWidth  = window.innerWidth

    var desiredWidth = windowWidth * 1.2

    var startX = desiredWidth - windowWidth

    layer.style.width  = desiredWidth
    layer.style.height = 'auto'
    layer.style.left   = -startX

    move(selector)
      .set('left', 0)
      .duration('5s')
      .end(function(){
        console.log('end', this,  arguments)
      });
  }

  function tweenForeground () {
    var selector = '[data-layer=foreground]'

    var layer = document.querySelector(selector)

    var windowWidth  = window.innerWidth

    var desiredWidth = windowWidth * 1.1

    var startX = desiredWidth - windowWidth

    layer.style.width  = desiredWidth
    layer.style.height = 'auto'
    layer.style.left   = -startX

    move(selector)
      .set('left', 0)
      .duration('5s')
      .end(function(){
        console.log('end', this,  arguments)
      });
  }

  function tweenFocus (startPercentage, endPercentage) {
    var selector = '[data-layer=focus]'

    var layer = document.querySelector(selector)

    var windowWidth  = window.innerWidth

    var desiredStart = windowWidth * startPercentage
    var desiredEnd = windowWidth * endPercentage

    layer.style.left   = desiredStart

    move(selector)
      .set('left', desiredEnd)
      .duration('5s')
      .end(function(){
        console.log('end', this,  arguments)
      });
  }

  document.addEventListener('DOMContentLoaded', function () {
    tweenBackground()
    tweenForeground()
    tweenFocus(.50, .90)
  })

}).call(this);
