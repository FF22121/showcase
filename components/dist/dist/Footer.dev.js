"use strict";

exports.__esModule = true;

var image_1 = require("next/image");

var link_1 = require("next/link");

var constants_1 = require("@/constants");

var Footer = function Footer() {
  return React.createElement("footer", {
    className: "flex flex-col\r\n    text-black-100 mt-5 border-t\r\n    border-gray-100"
  }, React.createElement("div", {
    className: "flex max-md:flex-col\r\n        flex-wrap justify-between gap-5 sm:px-16\r\n        px-6 py-10"
  }, React.createElement("div", {
    className: "flex flex-col\r\n            justify-start items-stars gap-6"
  }, React.createElement(image_1["default"], {
    src: "/logo.svg",
    alt: "logo",
    width: 118,
    height: 18,
    className: "object-contain"
  }), React.createElement("p", {
    className: "text-base\r\n              text-gray-700"
  }, "CarHub 2023 ", React.createElement("br", null), "All rights reserved \xA9")), React.createElement("div", {
    className: "footer__links"
  }, constants_1.footerLinks.map(function (link) {
    return React.createElement("div", {
      key: link.title,
      className: "footer__link"
    }, React.createElement("h3", {
      className: "font-bold"
    }, link.title), link.links.map(function (item) {
      return React.createElement(link_1["default"], {
        key: item.title,
        href: item.url,
        className: "text-gray-500"
      }, item.title);
    }));
  }))), React.createElement("div", {
    className: "flex justify-between items-center flex-warp mt-10 border-t\r\n            border-gray-100 sm:px-16 px-6 py-10"
  }, React.createElement("p", null, "@2023 CarHub. All Rights Reserved"), React.createElement("div", {
    className: "footer__copyrights-link"
  }, React.createElement(link_1["default"], {
    href: "/",
    className: "text-gray-500"
  }, "Privacy Policy"), React.createElement(link_1["default"], {
    href: "/",
    className: "text-gray-500"
  }, "Terms of Use"))));
};

exports["default"] = Footer;