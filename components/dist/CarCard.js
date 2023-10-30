"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var image_1 = require("next/image");
var CustomButton_1 = require("./CustomButton");
var utils_1 = require("@/utils");
var CarDetails_1 = require("./CarDetails");
var CarCard = function (_a) {
    var car = _a.car;
    var city_mpg = car.city_mpg, year = car.year, make = car.make, model = car.model, transmission = car.transmission, drive = car.drive;
    var _b = react_1.useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var carRent = utils_1.calculateCarRent(city_mpg, year);
    return (React.createElement("div", { className: 'car-card group' },
        React.createElement("div", { className: 'car-car__content' },
            React.createElement("h2", { className: 'car-card__content-title' },
                make,
                " ",
                model)),
        React.createElement("p", { className: 'flex mt-6 text-[32px]\r\n      font-extrabold ' },
            React.createElement("span", { className: 'self-start text-[14px]\r\n        font-semibold' }, "$"),
            carRent,
            React.createElement("span", { className: 'self-end text-[14px]\r\n        font-medium' }, "/day")),
        React.createElement("div", { className: 'relative w-full h-40 my-3 object-contain' },
            React.createElement(image_1["default"], { src: utils_1.generateCarImageUrl(car), alt: 'car model', fill: true, priority: true, className: 'object-contain' })),
        React.createElement("div", { className: 'relative flex w-full mt-2' },
            React.createElement("div", { className: 'flex group-hover:invisible w-full justify-between text-gray' },
                React.createElement("div", { className: 'flex flex-col justify-center items-center gap-2' },
                    React.createElement(image_1["default"], { src: "/steering-wheel.svg", width: 20, height: 20, alt: 'steering wheel' }),
                    React.createElement("p", { className: 'text-[14px]' }, transmission === 'a' ? 'Automatic' :
                        'Manual')),
                React.createElement("div", { className: 'flex flex-col justify-center items-center gap-2' },
                    React.createElement(image_1["default"], { src: "/tire.svg", width: 20, height: 20, alt: 'steering wheel' }),
                    React.createElement("p", { className: 'text-[14px]' }, drive.toUpperCase())),
                React.createElement("div", { className: 'flex flex-col justify-center items-center gap-2' },
                    React.createElement(image_1["default"], { src: "/gas.svg", width: 20, height: 20, alt: 'steering wheel' }),
                    React.createElement("p", { className: 'text-[14px]' },
                        city_mpg,
                        " MPG"))),
            React.createElement("div", { className: 'car-card__btn-container' },
                React.createElement(CustomButton_1["default"], { title: 'View More', containerStyles: 'w-full py-[16px]\r\n            rounded-full bg-primary-blue', textStyles: 'text-white text-[14px]\r\n            leading-[17px] font-bold', rightIcon: "/right-arrow.svg", handleClick: function () { return setIsOpen(true); } }))),
        React.createElement(CarDetails_1["default"], { isOpen: isOpen, closeModal: function () {
                return setIsOpen(false);
            }, car: car })));
};
exports["default"] = CarCard;
