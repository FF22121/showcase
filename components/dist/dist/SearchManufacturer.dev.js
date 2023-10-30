"use client";
"use strict";

exports.__esModule = true;

var react_1 = require("react");

var image_1 = require("next/image");

var react_2 = require("@headlessui/react");

var constants_1 = require("@/constants");

var SearchManufacturer = function SearchManufacturer(_a) {
  var manufacturer = _a.manufacturer,
      setManufacturer = _a.setManufacturer;

  var _b = react_1.useState(''),
      query = _b[0],
      setQuery = _b[1];

  var filteredManufacturers = query === "" ? constants_1.manufacturers : constants_1.manufacturers.filter(function (item) {
    return item.toLowerCase().replace(/\s=/g, "").includes(query.toLowerCase().replace(/\s+/g, ""));
  });
  return React.createElement("div", {
    className: 'search-manufacturer'
  }, React.createElement(react_2.Combobox, {
    value: manufacturer,
    onChange: setManufacturer
  }, React.createElement("div", {
    className: 'relative w-full'
  }, React.createElement(react_2.Combobox.Button, {
    className: "absolute top-[14px]"
  }, React.createElement(image_1["default"], {
    src: "/car-logo.svg",
    width: 20,
    height: 20,
    className: "ml-4",
    alt: "Car Logo"
  })), React.createElement(react_2.Combobox.Input, {
    className: "search-manufacturer__input",
    placeholder: 'Volkswagen',
    displayValue: function displayValue(manufacturer) {
      return manufacturer;
    },
    onChange: function onChange(e) {
      return setQuery(e.target.value);
    }
  }), React.createElement(react_2.Transition, {
    as: react_1.Fragment,
    leave: "transition ease-in duration-100",
    leaveFrom: 'opacity-100',
    leaveTo: 'opacity-0',
    afterLeave: function afterLeave() {
      return setQuery('');
    }
  }, React.createElement(react_2.Combobox.Options, null, filteredManufacturers.map(function (item) {
    return React.createElement(react_2.Combobox.Option, {
      key: item,
      className: function className(_a) {
        var active = _a.active;
        return "\n                    relative search-manufacturer__option\n                    " + (active ? 'bg-primary-blue text-white' : 'text-gray-900') + "\n                  ";
      },
      value: item
    }, function (_a) {
      var selected = _a.selected,
          active = _a.active;
      return React.createElement(React.Fragment, null, React.createElement("span", {
        className: "block truncate " + (selected ? 'font-medium' : 'font-normal')
      }, item), selected ? React.createElement("span", {
        className: "absolute inset-y-0 left-0 flex items-center pl-3 " + (active ? 'text-white' : 'text-teal-600')
      }) : null);
    });
  }))))));
};

exports["default"] = SearchManufacturer;