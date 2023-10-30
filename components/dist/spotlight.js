'use client';
"use strict";
exports.__esModule = true;
exports.SpotlightCard = void 0;
var react_1 = require("react");
var mouse_position_1 = require("./mouse-position");
function Spotlight(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    var containerRef = react_1.useRef(null);
    var mousePosition = mouse_position_1["default"]();
    var mouse = react_1.useRef({ x: 0, y: 0 });
    var containerSize = react_1.useRef({ w: 0, h: 0 });
    var _c = react_1.useState([]), boxes = _c[0], setBoxes = _c[1];
    react_1.useEffect(function () {
        containerRef.current && setBoxes(Array.from(containerRef.current.children).map(function (el) { return el; }));
    }, []);
    react_1.useEffect(function () {
        initContainer();
        window.addEventListener('resize', initContainer);
        return function () {
            window.removeEventListener('resize', initContainer);
        };
    }, [setBoxes]);
    react_1.useEffect(function () {
        onMouseMove();
    }, [mousePosition]);
    var initContainer = function () {
        if (containerRef.current) {
            containerSize.current.w = containerRef.current.offsetWidth;
            containerSize.current.h = containerRef.current.offsetHeight;
        }
    };
    var onMouseMove = function () {
        if (containerRef.current) {
            var rect_1 = containerRef.current.getBoundingClientRect();
            var _a = containerSize.current, w = _a.w, h = _a.h;
            var x = mousePosition.x - rect_1.left;
            var y = mousePosition.y - rect_1.top;
            var inside = x < w && x > 0 && y < h && y > 0;
            if (inside) {
                mouse.current.x = x;
                mouse.current.y = y;
                boxes.forEach(function (box) {
                    var boxX = -(box.getBoundingClientRect().left - rect_1.left) + mouse.current.x;
                    var boxY = -(box.getBoundingClientRect().top - rect_1.top) + mouse.current.y;
                    box.style.setProperty('--mouse-x', boxX + "px");
                    box.style.setProperty('--mouse-y', boxY + "px");
                });
            }
        }
    };
    return (react_1["default"].createElement("div", { className: className, ref: containerRef }, children));
}
exports["default"] = Spotlight;
function SpotlightCard(_a) {
    var children = _a.children, _b = _a.className, className = _b === void 0 ? '' : _b;
    return react_1["default"].createElement("div", { className: "relative h-full bg-slate-800 rounded-3xl p-px before:absolute before:w-80 before:h-80 before:-left-40 before:-top-40 before:bg-slate-400 before:rounded-full before:opacity-0 before:pointer-events-none before:transition-opacity before:duration-500 before:translate-x-[var(--mouse-x)] before:translate-y-[var(--mouse-y)] before:group-hover:opacity-100 before:z-10 before:blur-[100px] after:absolute after:w-96 after:h-96 after:-left-48 after:-top-48 after:bg-indigo-500 after:rounded-full after:opacity-0 after:pointer-events-none after:transition-opacity after:duration-500 after:translate-x-[var(--mouse-x)] after:translate-y-[var(--mouse-y)] after:hover:opacity-10 after:z-30 after:blur-[100px] overflow-hidden " + className }, children);
}
exports.SpotlightCard = SpotlightCard;
