"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var image_1 = require("next/image");
var MetaMaskButton_1 = require("./MetaMaskButton");
var Navbar = function () {
    return (React.createElement("header", { className: "w-full absolute z-10" },
        React.createElement("nav", { className: "max-w-[auto] mx-auto\r\n        flex justify-between items-center\r\n        sm:px-16 px-6 py-4" },
            React.createElement(link_1["default"], { href: "/", className: 'flex justify-center items-center' },
                React.createElement(image_1["default"], { src: "/logo.svg", alt: "Car Hub Logo", width: 118, height: 18, className: 'object-scale-down' })),
            React.createElement(MetaMaskButton_1["default"], null))));
};
exports["default"] = Navbar;
