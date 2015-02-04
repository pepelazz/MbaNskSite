(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');

require('./calc-sqr-block');

require('./scroll');

require('./map');

require('./simple-func/loader');

require('./simple-func/toggle-menu');

require('./gallery');



},{"./calc-sqr-block":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/calc-sqr-block.coffee","./gallery":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/gallery.coffee","./map":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/map.coffee","./scroll":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/scroll.coffee","./simple-func/loader":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/simple-func/loader.coffee","./simple-func/toggle-menu":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/simple-func/toggle-menu.coffee","./util":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/calc-sqr-block.coffee":[function(require,module,exports){
$(function() {
  var arrangePictures;
  arrangePictures = (function() {
    var areaWidth, areaWidthFunc, columnNums, delta, maxY, preLastEl;
    areaWidthFunc = function() {
      return $('.slide2 .container').innerWidth();
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



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/gallery.coffee":[function(require,module,exports){
$(function() {
  var openPhotoSwipe, pictures;
  pictures = [];
  $('.gallery figure').each(function(index) {
    var linkEl;
    linkEl = $('a', this);
    pictures.push({
      src: linkEl.attr('href'),
      w: linkEl.attr('data-width'),
      h: linkEl.attr('data-height')
    });
    return linkEl.on('click', function(e) {
      console.log($(this).attr('data-index'));
      e.preventDefault();
      return openPhotoSwipe($(this).attr('data-index'));
    });
  });
  return openPhotoSwipe = (function(index) {
    var gallery, options, pswpElement;
    pswpElement = document.querySelectorAll('.pswp')[0];
    options = {
      index: +index,
      history: false,
      focus: false,
      showAnimationDuration: 0,
      hideAnimationDuration: 0
    };
    gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, pictures, options);
    gallery.init();
  });
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/map.coffee":[function(require,module,exports){
var init;

init = (function() {
  var HintLayout, myMap, myPlacemark;
  myMap = new ymaps.Map("map", {
    center: [54.845214, 83.092394],
    zoom: 13,
    controls: ['smallMapDefaultSet']
  });
  myMap.behaviors.disable('scrollZoom');
  HintLayout = ymaps.templateLayoutFactory.createClass("<div class='my-hint'>" + "<b>{{ properties.title }}</b><br />" + "{{ properties.address }}<br />" + "{{ properties.phone1 }}<br />" + "{{ properties.phone2 }}<br />" + "</div>", {
    getShape: function() {
      var el, firstChild, result;
      el = this.getElement();
      result = null;
      if (el) {
        firstChild = el.firstChild;
        result = new ymaps.shape.Rectangle(new ymaps.geometry.pixel.Rectangle([[0, 0], [firstChild.offsetWidth, firstChild.offsetHeight]]));
      }
      return result;
    }
  });
  myPlacemark = new ymaps.Placemark([54.845214, 83.092394], {
    title: "Центр дополнительного образования",
    address: "ул. Пирогова, 4",
    phone1: "+7 383 363 4018",
    phone2: "+7 383 363 4110"
  }, {
    hintLayout: HintLayout
  });
  myMap.geoObjects.add(myPlacemark);
});

ymaps.ready(init);



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
  $('.link-mentions').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide5'));
  });
  $('.link-contacts').on('click', function() {
    return myScroll.scrollToElement(document.querySelector('.slide6'));
  });
  myScroll.on('scrollEnd', function() {
    if (this.y * (-1) > window.innerHeight) {
      return $('.link-to-cne').addClass('show');
    } else {
      return $('.link-to-cne').removeClass('show');
    }
  });
  return $('.btn-further').on('click', function() {
    $(this).html($(this).text() === 'далее' ? 'скрыть' : 'далее');
    $(this).next('.mention-further').toggleClass('show');
    return myScroll.refresh();
  });
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/simple-func/loader.coffee":[function(require,module,exports){
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



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/simple-func/toggle-menu.coffee":[function(require,module,exports){
$(function() {
  $('.menu-icon').on('click', function() {
    return $('.menu-wrapper .menu').toggleClass('show');
  });
  return $('.menu > li').on('click', function() {
    return $('.menu-wrapper .menu').removeClass('show');
  });
});



},{}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee":[function(require,module,exports){
var calcHandiImg, calcWidthOrHeight, fixSize;

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
  calcHandiImg();
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

calcHandiImg = (function() {
  var $img, $leftTitle, $topTitle, leftTitleRight, topTitleBottom;
  $topTitle = $('.slide1 .row1 .col2 h3');
  $leftTitle = $('.slide1 .row3 .col1');
  topTitleBottom = $topTitle.offset().top + $topTitle.height();
  leftTitleRight = $leftTitle.offset().left + $leftTitle.width();
  $img = $('.img-handi img');
  $($img).css({
    height: window.innerHeight - topTitleBottom
  }).css({
    width: 'auto'
  });
});



},{}]},{},["./src/javascript/app.coffee"]);
