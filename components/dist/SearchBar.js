"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var navigation_1 = require("next/navigation");
var SearchManufacturer_1 = require("./SearchManufacturer");
var SearchButton = function (_a) {
    var otherClasses = _a.otherClasses;
    return (react_1["default"].createElement("button", { type: 'submit', className: "-ml-3 z-10 " + otherClasses },
        react_1["default"].createElement(image_1["default"], { src: "/magnifying-glass.svg", alt: "magnifying glass", width: 40, height: 40, className: 'object-contain' })));
};
var SearchBar = function () {
    var _a = react_1.useState(""), manufacturer = _a[0], setManuFacturer = _a[1];
    var _b = react_1.useState(""), model = _b[0], setModel = _b[1];
    var router = navigation_1.useRouter();
    var handleSearch = function (e) {
        e.preventDefault();
        if (manufacturer.trim() === "" && model.trim() === "") {
            return alert("Please provide some input");
        }
        updateSearchParams(model.toLowerCase(), manufacturer.toLowerCase());
    };
    var updateSearchParams = function (model, manufacturer) {
        var searchParams = new URLSearchParams(window.location.search);
        if (model) {
            searchParams.set("model", model);
        }
        else {
            searchParams["delete"]("model");
        }
        if (manufacturer) {
            searchParams.set("manufacturer", manufacturer);
        }
        else {
            searchParams["delete"]("manufacturer");
        }
        var newPathname = window.location.pathname + "?" + searchParams.toString();
        router.push(newPathname);
    };
    return (react_1["default"].createElement("form", { className: 'searchbar', onSubmit: handleSearch },
        react_1["default"].createElement("div", { className: 'searchbar__item' },
            react_1["default"].createElement(SearchManufacturer_1["default"], { manufacturer: manufacturer, setManufacturer: setManuFacturer }),
            react_1["default"].createElement(SearchButton, { otherClasses: 'sm:hidden' })),
        react_1["default"].createElement("div", { className: 'searchbar__item' },
            react_1["default"].createElement(image_1["default"], { src: '/model-icon.png', width: 25, height: 25, className: 'absolute w-[20px] h-[20px] ml-4', alt: 'car model' }),
            react_1["default"].createElement("input", { type: 'text', name: 'model', value: model, onChange: function (e) { return setModel(e.target.value); }, placeholder: 'Tiguan...', className: 'searchbar__input' }),
            react_1["default"].createElement(SearchButton, { otherClasses: 'sm:hidden' })),
        react_1["default"].createElement(SearchButton, { otherClasses: 'max-sm:hidden' })));
};
exports["default"] = SearchBar;
