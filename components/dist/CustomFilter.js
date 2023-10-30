"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var navigation_1 = require("next/navigation");
var react_2 = require("@headlessui/react");
var utils_1 = require("@/utils");
function CustomFilter(_a) {
    var title = _a.title, options = _a.options;
    var router = navigation_1.useRouter();
    var _b = react_1.useState(options[0]), selected = _b[0], setSelected = _b[1]; // State for storing the selected option
    var handleUpdateParams = function (e) {
        var newPathName = utils_1.updateSearchParams(title, e.value.toLowerCase());
        router.push(newPathName);
    };
    return (React.createElement("div", { className: 'w-fit' },
        React.createElement(react_2.Listbox, { value: selected, onChange: function (e) {
                setSelected(e);
                handleUpdateParams(e);
            } },
            React.createElement("div", { className: 'relative w-fit z-10' },
                React.createElement(react_2.Listbox.Button, { className: 'custom-filter__btn' },
                    React.createElement("span", { className: 'block truncate' }, selected.title),
                    React.createElement(image_1["default"], { src: '/chevron-up-down.svg', width: 20, height: 20, className: 'ml-4 object-contain', alt: 'chevron_up-down' })),
                React.createElement(react_2.Transition, { as: react_1.Fragment, leave: 'transition ease-in duration-100', leaveFrom: 'opacity-100', leaveTo: 'opacity-0' },
                    React.createElement(react_2.Listbox.Options, { className: 'custom-filter__options' }, options.map(function (option) { return (React.createElement(react_2.Listbox.Option, { key: option.title, className: function (_a) {
                            var active = _a.active;
                            return "relative cursor-default select-none py-2 px-4 " + (active ? "bg-primary-blue text-white" : "text-gray-900");
                        }, value: option }, function (_a) {
                        var selected = _a.selected;
                        return (React.createElement(React.Fragment, null,
                            React.createElement("span", { className: "block truncate " + (selected ? "font-medium" : "font-normal") }, option.title)));
                    })); })))))));
}
exports["default"] = CustomFilter;
