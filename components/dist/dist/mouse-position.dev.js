"use strict";

exports.__esModule = true;

var react_1 = require("react");

function useMousePosition() {
  var _a = react_1.useState({
    x: 0,
    y: 0
  }),
      mousePosition = _a[0],
      setMousePosition = _a[1];

  react_1.useEffect(function () {
    var handleMouseMove = function handleMouseMove(event) {
      setMousePosition({
        x: event.clientX,
        y: event.clientY
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return function () {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return mousePosition;
}

exports["default"] = useMousePosition;