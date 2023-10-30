"use client";
"use strict";

exports.__esModule = true;

var CustomButton = function CustomButton(_a) {
  var title = _a.title,
      containerStyles = _a.containerStyles,
      handleClick = _a.handleClick,
      btnType = _a.btnType;
  return React.createElement("button", {
    disabled: false,
    type: btnType || "button",
    className: "custom-btn " + containerStyles,
    onClick: handleClick
  }, React.createElement("span", {
    className: 'flex-1'
  }, title));
};

exports["default"] = CustomButton;