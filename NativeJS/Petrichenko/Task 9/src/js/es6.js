"use strict";

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

window.addEventListener('DOMContentLoaded', function () {
  var Options =
  /*#__PURE__*/
  function () {
    function Options(height, width, bg, fontSize, textAlign) {
      _classCallCheck(this, Options);

      this.height = height;
      this.width = width;
      this.bg = bg;
      this.fontSize = fontSize;
      this.textAlign = textAlign;
    }

    _createClass(Options, [{
      key: "createNewDiv",
      value: function createNewDiv(anytext) {
        var newDiv = document.createElement('div');
        newDiv.innerHTML = "<p>".concat(anytext, "</p>");
        newDiv.style.cssText = "height: ".concat(this.height, "px; width: ").concat(this.width, "px; background: ").concat(this.bg, "; font-size: ").concat(this.fontSize, "px; text-align: ").concat(this.textAlign, ";");
        document.body.prepend(newDiv);
      }
    }]);

    return Options;
  }();

  var obj = new Options(50, 75, 'red', 15, 'center');
  var obj2 = new Options(50, 1154, 'green', 15, 'center');
  obj.createNewDiv('Привет');
  obj2.createNewDiv('Пр234ивет');
});