"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var CustomButton = function (_a) {
    var title = _a.title, containerStyles = _a.containerStyles, handleClick = _a.handleClick, btnType = _a.btnType, textStyles = _a.textStyles, rightIcon = _a.rightIcon;
    return (React.createElement("button", { disabled: false, type: btnType || "button", className: "custom-btn " + containerStyles, onClick: handleClick },
        React.createElement("span", { className: 'flex-1 ${textStyles}' }, title),
        rightIcon && (React.createElement(image_1["default"], { src: rightIcon, width: 20, height: 20, alt: "right icon" }))));
};
exports["default"] = CustomButton;
