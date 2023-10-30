"use client";
"use strict";

exports.__esModule = true;

var react_1 = require("react");

var _1 = require("./");

var SearchBar = function SearchBar() {
  var _a = react_1.useState(''),
      manufacturer = _a[0],
      setManufacturer = _a[1];

  var handleSearch = function handleSearch() {};

  return React.createElement("form", {
    className: 'searchbar',
    onSubmit: handleSearch
  }, React.createElement("div", {
    className: "searchbar__item"
  }, React.createElement(_1.SearchManufacturer, {
    manufacturer: manufacturer,
    setManufacturer: setManufacturer
  })));
};

exports["default"] = SearchBar;