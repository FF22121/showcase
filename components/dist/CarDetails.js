'use client';
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var utils_1 = require("@/utils");
var CarDetails = function (_a) {
    var isOpen = _a.isOpen, closeModal = _a.closeModal, car = _a.car;
    return (React.createElement(React.Fragment, null,
        React.createElement(react_2.Transition, { appear: true, show: isOpen, as: react_1.Fragment },
            React.createElement(react_2.Dialog, { as: "div", className: "relative z-10", onClose: closeModal },
                React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: 'ease-out duration-300', enterFrom: 'opacity-0', enterTo: 'opacity-100', leave: 'easy-in duration-200', leaveFrom: 'opacity-100', leaveTo: 'opacity-0' },
                    React.createElement("div", { className: 'fixed inset-0 bg-black\r\n          bg-opacity-25' })),
                React.createElement("div", { className: 'fixed inset-0 overflow-y-auto' },
                    React.createElement("div", { className: 'flex min-h-full items-center \r\n          justify-center p-4 text-center' },
                        React.createElement(react_2.Transition.Child, { as: react_1.Fragment, enter: 'ease-out duration-300', enterFrom: 'opacity-0 scale-95', enterTo: 'opacity-100 scale-100', leave: 'easy-in duration-200 duration-200', leaveFrom: 'opacity-100 scale-100', leaveTo: 'opacity-0 scale-95' },
                            React.createElement(react_2.Dialog.Panel, { className: "relative w-full max-w-lg max-h-[90vh] overflow-y-auto\r\n          transform rounded-2xl bg-white p-6 text-left\r\n          shadow-xl transition-all flex flex-col gap-5" },
                                React.createElement("button", { type: 'button', className: 'absolute top-2 right-2 z-10\r\n             w-fit p-2 bg-primary-blue-100\r\n             rounded-full', onClick: closeModal },
                                    React.createElement(image_1["default"], { src: "/close.svg", alt: 'close', width: 20, height: 20, className: 'object-contain' })),
                                React.createElement("div", { className: 'flex-1 flex flex-col gap-3' },
                                    React.createElement("div", { className: 'relative w-full h-40 \r\n              bg-pattern \r\n              bg-cover\r\n              bg-center \r\n              rounded-lg' },
                                        React.createElement(image_1["default"], { src: utils_1.generateCarImageUrl(car), alt: 'car model', fill: true, priority: true, className: 'object-contain' })),
                                    React.createElement("div", { className: 'flex gap-3' },
                                        React.createElement("div", { className: 'flex-1 relative w-full h-24 border-r-primary-blue-100\r\n                rounded-lg' },
                                            React.createElement(image_1["default"], { src: utils_1.generateCarImageUrl(car, '29'), alt: 'car model', fill: true, priority: true, className: 'object-contain' })),
                                        React.createElement("div", { className: 'flex-1 relative w-full h-24 border-r-primary-blue-100\r\n                rounded-lg' },
                                            React.createElement(image_1["default"], { src: utils_1.generateCarImageUrl(car, '33'), alt: 'car model', fill: true, priority: true, className: 'object-contain' })),
                                        React.createElement("div", { className: 'flex-1 relative w-full h-24 border-r-primary-blue-100\r\n                rounded-lg' },
                                            React.createElement(image_1["default"], { src: utils_1.generateCarImageUrl(car, '13'), alt: 'car model', fill: true, priority: true, className: 'object-contain' })))),
                                React.createElement("div", { className: 'flex-1 flex flex-col gap-2' },
                                    React.createElement("h2", { className: 'font-semibold text-xl capitalize' },
                                        car.make,
                                        car.model),
                                    React.createElement("div", { className: 'mt-3 flex flex-wrap\r\n              gap-4' }, Object.entries(car).map(function (_a) {
                                        var key = _a[0], value = _a[1];
                                        return (React.createElement("div", { className: 'flex\r\n                   justify-between gap-5 w-full \r\n                  text-right', key: key },
                                            React.createElement("h4", { className: 'text-grey capitalize' }, key.split("_mpg").join("")),
                                            React.createElement("p", { className: 'text-black-100\r\n                    font-semibold' }, value)));
                                    })))))))))));
};
exports["default"] = CarDetails;
