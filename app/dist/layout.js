"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var components_1 = require("@/components");
require("./globals.css");
exports.metadata = {
    title: 'Car Hub',
    description: 'Discover the best cars in the world.'
};
function RootLayout(_a) {
    var children = _a.children;
    return (React.createElement("html", { lang: "en" },
        React.createElement("body", { className: '/' },
            React.createElement(components_1.Navbar, null),
            children,
            React.createElement(components_1.Footer, null))));
}
exports["default"] = RootLayout;
