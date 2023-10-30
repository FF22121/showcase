"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
// import { footerLinks } from "@/constants"
var Footer = function () {
    return (React.createElement("footer", { className: "flex flex-col\r\n    text-black-100 mt-5 border-t\r\n    border-gray-100" },
        React.createElement("div", { className: "flex max-md:flex-col\r\n        flex-wrap justify-between gap-5 sm:px-16\r\n        px-6 py-10" },
            React.createElement("div", { className: "flex flex-col\r\n            justify-start items-stars gap-6" },
                React.createElement(image_1["default"], { src: "/logo.svg", alt: "logo", width: 118, height: 18, className: "object-contain" }),
                React.createElement("p", { className: "text-base\r\n              text-gray-700" },
                    "CarDag 2023 ",
                    React.createElement("br", null),
                    "All rights reserved \u00A9")))));
};
exports["default"] = Footer;
