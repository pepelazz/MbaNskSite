(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');

require('./loader');

require('./calc-sqr-block');

require('./scroll');

require('./test-guestlistmodel');



},{"./calc-sqr-block":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/calc-sqr-block.coffee","./loader":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/loader.coffee","./scroll":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/scroll.coffee","./test-guestlistmodel":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/test-guestlistmodel.coffee","./util":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/calc-sqr-block.coffee":[function(require,module,exports){
$(function() {
  var arrangePictures;
  arrangePictures = (function() {
    var areaWidth, areaWidthFunc, columnNums, delta, maxY, preLastEl;
    areaWidthFunc = function() {
      return $('.slide2 .container').width();
    };
    areaWidth = areaWidthFunc();
    columnNums = (function() {
      switch (false) {
        case !(window.innerWidth >= 700):
          return 2;
        default:
          return 1;
      }
    })();
    maxY = 0;
    preLastEl = $('.slide2 .sqr-block')[4];
    $(preLastEl).css({
      height: 'auto'
    });
    $('.slide2 .sqr-block').each(function(index, el) {
      var col, picWidth, row, upperEl, upperElBottom;
      picWidth = areaWidth / columnNums;
      row = Math.floor(index / columnNums);
      col = index - row * columnNums;
      if (index > columnNums - 1) {
        upperEl = $('.slide2 .sqr-block').eq(index - columnNums);
        upperElBottom = upperEl.position().top + upperEl.innerHeight();
      } else {
        upperElBottom = 0;
      }
      $(el).css({
        width: picWidth
      }).css('left', picWidth * col).css('top', upperElBottom);
      maxY = Math.max(maxY, $(el).position().top + $(el).innerHeight());
    });
    $('.slide2 .container').css('height', maxY + 50);
    preLastEl = $('.slide2 .sqr-block')[4];
    delta = maxY - ($(preLastEl).position().top + $(preLastEl).innerHeight());
    $(preLastEl).css({
      height: $(preLastEl).innerHeight() + delta
    });
  });
  arrangePictures();
  return $(window).on('resize', (function() {
    arrangePictures();
  }));
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/loader.coffee":[function(require,module,exports){
$(function() {
  $('#hideAll .loader').css({
    marginTop: window.innerHeight * 0.4
  });
  return $(window).load(function() {
    return $('#hideAll').css({
      display: 'none'
    });
  });
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/scroll.coffee":[function(require,module,exports){
$(function() {
  var myScroll;
  myScroll = new IScroll('#scroller-body', {
    mouseWheel: true,
    keyBindings: true,
    click: true
  });
  $('.link-home').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.logo'));
  });
  $('.link-programm').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide2'));
  });
  $('.link-teacher').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide3'));
  });
  $('.link-facts').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide4'));
  });
  return $('.link-mention').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide5'));
  });
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/test-guestlistmodel.coffee":[function(require,module,exports){
var api;

api = {
  load: function() {
    return ['Alex', 'John', 'Mary'];
  }
};

console.log(api.load());



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee":[function(require,module,exports){
var calcWidthOrHeight, fixSize;

$(function() {
  fixSize();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {
  var lowerSignPos, wh;
  wh = window.innerHeight;
  lowerSignPos = $('.row3 h3').position().top + $('.row3').height();
  if (lowerSignPos + 60 < wh) {
    $('.slide1').css({
      height: wh
    });
  } else {
    $('.slide1').css({
      height: 'auto'
    });
  }
  calcWidthOrHeight();
});

calcWidthOrHeight = (function() {
  var height, heightFunc, width, widthFunc;
  heightFunc = function() {
    return window.innerHeight;
  };
  widthFunc = function() {
    return window.innerWidth - height * 264 / 420;
  };
  height = heightFunc();
  width = widthFunc();
  if (height >= width) {
    $('.img-painter').css({
      width: width
    }).css({
      height: 'auto'
    }).css({
      marginTop: height - width
    });
  } else {
    $('.img-painter').css({
      height: height
    }).css({
      width: 'auto'
    });
  }
});



},{}]},{},["./src/javascript/app.coffee"]);
