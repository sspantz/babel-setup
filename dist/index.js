"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.random = exports.all = exports["default"] = void 0;
var all = [1, 2, 3, 4, 5];
exports.all = all;

var random = function random() {
  return Math.random();
};

exports.random = random;
var numbers = {
  all: all,
  random: random
};
exports["default"] = numbers;
x;