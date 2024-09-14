"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/users/@more/user-more/[id]/page",{

/***/ "(app-pages-browser)/./src/app/users/@more/user-more/[id]/page.tsx":
/*!*****************************************************!*\
  !*** ./src/app/users/@more/user-more/[id]/page.tsx ***!
  \*****************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ UserMorePage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"(app-pages-browser)/./node_modules/flowbite-react/dist/esm/index.mjs\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction UserMorePage() {\n    _s();\n    const { id } = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams)();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        // Fetch user data based on ID\n        if (id) {\n            fetch(\"https://fakestoreapi.com/users/\".concat(id)).then((response)=>response.json()).then((data)=>setUser(data)).catch((error)=>console.error(\"Error fetching user data:\", error));\n        }\n    }, [\n        id\n    ]);\n    if (!user) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n            lineNumber: 53,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Card, {\n                className: \"max-w-sm\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                        className: \"text-2xl font-bold tracking-tight text-gray-900 dark:text-white\",\n                        children: [\n                            user.name.firstname,\n                            \" \",\n                            user.name.lastname\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-gray-700 dark:text-gray-400\",\n                        children: [\n                            \"Email: \",\n                            user.email\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 63,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-gray-700 dark:text-gray-400\",\n                        children: [\n                            \"Phone: \",\n                            user.phone\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-gray-700 dark:text-gray-400\",\n                        children: [\n                            \"City: \",\n                            user.address.city\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 69,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-gray-700 dark:text-gray-400\",\n                        children: [\n                            \"Street: \",\n                            user.address.street,\n                            \", \",\n                            user.address.number\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 72,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"font-normal text-gray-700 dark:text-gray-400\",\n                        children: [\n                            \"Zipcode: \",\n                            user.address.zipcode\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                        lineNumber: 75,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, user.id, true, {\n                fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n                lineNumber: 59,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n            lineNumber: 58,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\E-MaxPCShop\\\\Desktop\\\\next-start-tempo-main\\\\src\\\\app\\\\users\\\\@more\\\\user-more\\\\[id]\\\\page.tsx\",\n        lineNumber: 57,\n        columnNumber: 5\n    }, this);\n}\n_s(UserMorePage, \"VWElcMs1vkSwodA3eWjy91I095c=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_2__.useParams\n    ];\n});\n_c = UserMorePage;\nvar _c;\n$RefreshReg$(_c, \"UserMorePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvdXNlcnMvQG1vcmUvdXNlci1tb3JlL1tpZF0vcGFnZS50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDc0M7QUFFTTtBQUNPO0FBZ0NwQyxTQUFTSzs7SUFDdEIsTUFBTSxFQUFDQyxFQUFFLEVBQUMsR0FBR0wsMERBQVNBO0lBRXRCLE1BQU0sQ0FBQ00sTUFBTUMsUUFBUSxHQUFHSiwrQ0FBUUEsQ0FBYztJQUU5Q0QsZ0RBQVNBLENBQUM7UUFDUiw4QkFBOEI7UUFDOUIsSUFBSUcsSUFBSTtZQUNORyxNQUFNLGtDQUFxQyxPQUFISCxLQUNyQ0ksSUFBSSxDQUFDLENBQUNDLFdBQWFBLFNBQVNDLElBQUksSUFDaENGLElBQUksQ0FBQyxDQUFDRyxPQUFTTCxRQUFRSyxPQUN2QkMsS0FBSyxDQUFDLENBQUNDLFFBQVVDLFFBQVFELEtBQUssQ0FBQyw2QkFBNkJBO1FBQ2pFO0lBQ0YsR0FBRztRQUFDVDtLQUFHO0lBRVAsSUFBSSxDQUFDQyxNQUFNO1FBQ1QscUJBQU8sOERBQUNVO3NCQUFJOzs7Ozs7SUFDZDtJQUVBLHFCQUNFLDhEQUFDQTtrQkFDQyw0RUFBQ0E7WUFBSUMsV0FBVTtzQkFDYiw0RUFBQ2xCLGdEQUFJQTtnQkFBZWtCLFdBQVU7O2tDQUM1Qiw4REFBQ0M7d0JBQUdELFdBQVU7OzRCQUNYWCxLQUFLYSxJQUFJLENBQUNDLFNBQVM7NEJBQUM7NEJBQUVkLEtBQUthLElBQUksQ0FBQ0UsUUFBUTs7Ozs7OztrQ0FFM0MsOERBQUNDO3dCQUFFTCxXQUFVOzs0QkFBK0M7NEJBQ2xEWCxLQUFLaUIsS0FBSzs7Ozs7OztrQ0FFcEIsOERBQUNEO3dCQUFFTCxXQUFVOzs0QkFBK0M7NEJBQ2xEWCxLQUFLa0IsS0FBSzs7Ozs7OztrQ0FFcEIsOERBQUNGO3dCQUFFTCxXQUFVOzs0QkFBK0M7NEJBQ25EWCxLQUFLbUIsT0FBTyxDQUFDQyxJQUFJOzs7Ozs7O2tDQUUxQiw4REFBQ0o7d0JBQUVMLFdBQVU7OzRCQUErQzs0QkFDakRYLEtBQUttQixPQUFPLENBQUNFLE1BQU07NEJBQUM7NEJBQUdyQixLQUFLbUIsT0FBTyxDQUFDRyxNQUFNOzs7Ozs7O2tDQUVyRCw4REFBQ047d0JBQUVMLFdBQVU7OzRCQUErQzs0QkFDaERYLEtBQUttQixPQUFPLENBQUNJLE9BQU87Ozs7Ozs7O2VBakJ2QnZCLEtBQUtELEVBQUU7Ozs7Ozs7Ozs7Ozs7OztBQXVCMUI7R0E3Q3dCRDs7UUFDVEosc0RBQVNBOzs7S0FEQUkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC91c2Vycy9AbW9yZS91c2VyLW1vcmUvW2lkXS9wYWdlLnRzeD8yMmEyIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXHJcbmltcG9ydCB7IENhcmQgfSBmcm9tICdmbG93Yml0ZS1yZWFjdCc7XHJcbmltcG9ydCB7IEdldFNlcnZlclNpZGVQcm9wcyB9IGZyb20gJ25leHQnO1xyXG5pbXBvcnQgeyB1c2VQYXJhbXMgfSBmcm9tICduZXh0L25hdmlnYXRpb24nO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExvYWRpbmcgZnJvbSBcIi4uLy4uLy4uLy4uLy4uL2NvbXBvbmVudHNcIlxyXG5cclxuaW50ZXJmYWNlIEdlb2xvY2F0aW9uIHtcclxuICBsYXQ6IHN0cmluZztcclxuICBsb25nOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBBZGRyZXNzIHtcclxuICBnZW9sb2NhdGlvbjogR2VvbG9jYXRpb247XHJcbiAgY2l0eTogc3RyaW5nO1xyXG4gIHN0cmVldDogc3RyaW5nO1xyXG4gIG51bWJlcjogbnVtYmVyO1xyXG4gIHppcGNvZGU6IHN0cmluZztcclxufVxyXG5cclxuaW50ZXJmYWNlIE5hbWUge1xyXG4gIGZpcnN0bmFtZTogc3RyaW5nO1xyXG4gIGxhc3RuYW1lOiBzdHJpbmc7XHJcbn1cclxuXHJcbmludGVyZmFjZSBVc2VyIHtcclxuICBhZGRyZXNzOiBBZGRyZXNzO1xyXG4gIGlkOiBudW1iZXI7XHJcbiAgZW1haWw6IHN0cmluZztcclxuICB1c2VybmFtZTogc3RyaW5nO1xyXG4gIHBhc3N3b3JkOiBzdHJpbmc7XHJcbiAgbmFtZTogTmFtZTtcclxuICBwaG9uZTogc3RyaW5nO1xyXG4gIF9fdjogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBVc2VyTW9yZVBhZ2UoKSB7XHJcbiAgY29uc3Qge2lkfSA9IHVzZVBhcmFtcygpO1xyXG5cclxuICBjb25zdCBbdXNlciwgc2V0VXNlcl0gPSB1c2VTdGF0ZTxVc2VyIHwgbnVsbD4obnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBGZXRjaCB1c2VyIGRhdGEgYmFzZWQgb24gSURcclxuICAgIGlmIChpZCkge1xyXG4gICAgICBmZXRjaChgaHR0cHM6Ly9mYWtlc3RvcmVhcGkuY29tL3VzZXJzLyR7aWR9YClcclxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcclxuICAgICAgICAudGhlbigoZGF0YSkgPT4gc2V0VXNlcihkYXRhKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyB1c2VyIGRhdGE6JywgZXJyb3IpKTtcclxuICAgIH1cclxuICB9LCBbaWRdKTtcclxuXHJcbiAgaWYgKCF1c2VyKSB7XHJcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSBnYXAtNiBzbTpncmlkLWNvbHMtMiBsZzpncmlkLWNvbHMtM1wiPlxyXG4gICAgICAgIDxDYXJkIGtleT17dXNlci5pZH0gY2xhc3NOYW1lPVwibWF4LXctc21cIj5cclxuICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBkYXJrOnRleHQtd2hpdGVcIj5cclxuICAgICAgICAgICAge3VzZXIubmFtZS5maXJzdG5hbWV9IHt1c2VyLm5hbWUubGFzdG5hbWV9XHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgRW1haWw6IHt1c2VyLmVtYWlsfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgUGhvbmU6IHt1c2VyLnBob25lfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgQ2l0eToge3VzZXIuYWRkcmVzcy5jaXR5fVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgU3RyZWV0OiB7dXNlci5hZGRyZXNzLnN0cmVldH0sIHt1c2VyLmFkZHJlc3MubnVtYmVyfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ub3JtYWwgdGV4dC1ncmF5LTcwMCBkYXJrOnRleHQtZ3JheS00MDBcIj5cclxuICAgICAgICAgICAgWmlwY29kZToge3VzZXIuYWRkcmVzcy56aXBjb2RlfVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiQ2FyZCIsInVzZVBhcmFtcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJVc2VyTW9yZVBhZ2UiLCJpZCIsInVzZXIiLCJzZXRVc2VyIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJqc29uIiwiZGF0YSIsImNhdGNoIiwiZXJyb3IiLCJjb25zb2xlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDUiLCJuYW1lIiwiZmlyc3RuYW1lIiwibGFzdG5hbWUiLCJwIiwiZW1haWwiLCJwaG9uZSIsImFkZHJlc3MiLCJjaXR5Iiwic3RyZWV0IiwibnVtYmVyIiwiemlwY29kZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/users/@more/user-more/[id]/page.tsx\n"));

/***/ })

});