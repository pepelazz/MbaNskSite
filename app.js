(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/app.coffee":[function(require,module,exports){
require('./util');



},{"./util":"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee"}],"/Users/Trikster/static_sites/MbaNsk/_MbaNsk/src/javascript/util.coffee":[function(require,module,exports){
var calcWidthOrHeight, fixSize;

$(function() {
  fixSize();
  return $(window).on('resize', (function() {
    fixSize();
  }));
});

fixSize = (function() {
  var sidebarWidth, wh;
  wh = window.innerHeight;
  sidebarWidth = wh * 264 / 420;
  $('.img-interior').css({
    height: wh
  });
  $('.main-area').css({
    'margin-left': sidebarWidth + 'px'
  });
  $('.nav').css({
    left: sidebarWidth
  });
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
