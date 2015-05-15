(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"./src/javascript/util.coffee":[function(require,module,exports){
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



},{}]},{},["./src/javascript/util.coffee"]);
