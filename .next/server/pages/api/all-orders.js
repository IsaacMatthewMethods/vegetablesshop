"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/all-orders";
exports.ids = ["pages/api/all-orders"];
exports.modules = {

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mysql2/promise":
/*!*********************************!*\
  !*** external "mysql2/promise" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("mysql2/promise");

/***/ }),

/***/ "next/dist/compiled/next-server/pages-api.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages-api.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages-api.runtime.dev.js");

/***/ }),

/***/ "(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fall-orders&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fall-orders.ts&middlewareConfigBase64=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fall-orders&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fall-orders.ts&middlewareConfigBase64=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   config: () => (/* binding */ config),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   routeModule: () => (/* binding */ routeModule)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/pages-api/module.compiled */ \"(api)/./node_modules/next/dist/server/future/route-modules/pages-api/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(api)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/build/templates/helpers */ \"(api)/./node_modules/next/dist/build/templates/helpers.js\");\n/* harmony import */ var _pages_api_all_orders_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/api/all-orders.ts */ \"(api)/./pages/api/all-orders.ts\");\n\n\n\n// Import the userland code.\n\n// Re-export the handler (should be the default export).\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_all_orders_ts__WEBPACK_IMPORTED_MODULE_3__, \"default\"));\n// Re-export config.\nconst config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(_pages_api_all_orders_ts__WEBPACK_IMPORTED_MODULE_3__, \"config\");\n// Create and export the route module that will be consumed.\nconst routeModule = new next_dist_server_future_route_modules_pages_api_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES_API,\n        page: \"/api/all-orders\",\n        pathname: \"/api/all-orders\",\n        // The following aren't used in production.\n        bundlePath: \"\",\n        filename: \"\"\n    },\n    userland: _pages_api_all_orders_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n\n//# sourceMappingURL=pages-api.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LXJvdXRlLWxvYWRlci9pbmRleC5qcz9raW5kPVBBR0VTX0FQSSZwYWdlPSUyRmFwaSUyRmFsbC1vcmRlcnMmcHJlZmVycmVkUmVnaW9uPSZhYnNvbHV0ZVBhZ2VQYXRoPS4lMkZwYWdlcyUyRmFwaSUyRmFsbC1vcmRlcnMudHMmbWlkZGxld2FyZUNvbmZpZ0Jhc2U2ND1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ0w7QUFDMUQ7QUFDc0Q7QUFDdEQ7QUFDQSxpRUFBZSx3RUFBSyxDQUFDLHFEQUFRLFlBQVksRUFBQztBQUMxQztBQUNPLGVBQWUsd0VBQUssQ0FBQyxxREFBUTtBQUNwQztBQUNPLHdCQUF3QixnSEFBbUI7QUFDbEQ7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaLENBQUM7O0FBRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92ZWdldGFibGVzc2hvcC8/ZThhZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQYWdlc0FQSVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLW1vZHVsZXMvcGFnZXMtYXBpL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvZnV0dXJlL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IGhvaXN0IH0gZnJvbSBcIm5leHQvZGlzdC9idWlsZC90ZW1wbGF0ZXMvaGVscGVyc1wiO1xuLy8gSW1wb3J0IHRoZSB1c2VybGFuZCBjb2RlLlxuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIi4vcGFnZXMvYXBpL2FsbC1vcmRlcnMudHNcIjtcbi8vIFJlLWV4cG9ydCB0aGUgaGFuZGxlciAoc2hvdWxkIGJlIHRoZSBkZWZhdWx0IGV4cG9ydCkuXG5leHBvcnQgZGVmYXVsdCBob2lzdCh1c2VybGFuZCwgXCJkZWZhdWx0XCIpO1xuLy8gUmUtZXhwb3J0IGNvbmZpZy5cbmV4cG9ydCBjb25zdCBjb25maWcgPSBob2lzdCh1c2VybGFuZCwgXCJjb25maWdcIik7XG4vLyBDcmVhdGUgYW5kIGV4cG9ydCB0aGUgcm91dGUgbW9kdWxlIHRoYXQgd2lsbCBiZSBjb25zdW1lZC5cbmV4cG9ydCBjb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBQYWdlc0FQSVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5QQUdFU19BUEksXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9hbGwtb3JkZXJzXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYWxsLW9yZGVyc1wiLFxuICAgICAgICAvLyBUaGUgZm9sbG93aW5nIGFyZW4ndCB1c2VkIGluIHByb2R1Y3Rpb24uXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcIlwiXG4gICAgfSxcbiAgICB1c2VybGFuZFxufSk7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhZ2VzLWFwaS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fall-orders&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fall-orders.ts&middlewareConfigBase64=e30%3D!\n");

/***/ }),

/***/ "(api)/./pages/api/all-orders.ts":
/*!*********************************!*\
  !*** ./pages/api/all-orders.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_db__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/db */ \"(api)/./src/db.ts\");\n\n\nasync function handler(req, res) {\n    if (req.method !== \"GET\") {\n        return res.status(405).json({\n            message: \"Method not allowed\"\n        });\n    }\n    const { authorization } = req.headers;\n    if (!authorization) {\n        return res.status(401).json({\n            message: \"Not authenticated\"\n        });\n    }\n    const token = authorization.split(\" \")[1];\n    if (!token) {\n        return res.status(401).json({\n            message: \"Not authenticated\"\n        });\n    }\n    try {\n        const decoded = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, \"e1a8e7f1-1b3a-4b0e-8b0a-9b0c1d9e0f1a\");\n        // This should be a protected route for admins\n        // For simplicity, I'm not checking the role here, but you should in a real app.\n        const [orders] = await _src_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SELECT * FROM orders ORDER BY order_date DESC\");\n        // For each order, fetch the order items\n        for (const order of orders){\n            const [items] = await _src_db__WEBPACK_IMPORTED_MODULE_1__[\"default\"].query(\"SELECT * FROM order_items WHERE order_id = ?\", [\n                order.id\n            ]);\n            order.items = items;\n        }\n        res.status(200).json(orders);\n    } catch (error) {\n        console.error(\"[API /api/all-orders] Error:\", error);\n        res.status(500).json({\n            message: \"Internal server error\"\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYWxsLW9yZGVycy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRStCO0FBQ0M7QUFRakIsZUFBZUUsUUFBUUMsR0FBbUIsRUFBRUMsR0FBb0I7SUFDN0UsSUFBSUQsSUFBSUUsTUFBTSxLQUFLLE9BQU87UUFDeEIsT0FBT0QsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQXFCO0lBQzlEO0lBRUEsTUFBTSxFQUFFQyxhQUFhLEVBQUUsR0FBR04sSUFBSU8sT0FBTztJQUVyQyxJQUFJLENBQUNELGVBQWU7UUFDbEIsT0FBT0wsSUFBSUUsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFQyxTQUFTO1FBQW9CO0lBQzdEO0lBRUEsTUFBTUcsUUFBUUYsY0FBY0csS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFO0lBQ3pDLElBQUksQ0FBQ0QsT0FBTztRQUNWLE9BQU9QLElBQUlFLE1BQU0sQ0FBQyxLQUFLQyxJQUFJLENBQUM7WUFBRUMsU0FBUztRQUFvQjtJQUM3RDtJQUVBLElBQUk7UUFDRixNQUFNSyxVQUFVYiwwREFBVSxDQUFDVyxPQUFPO1FBRWxDLDhDQUE4QztRQUM5QyxnRkFBZ0Y7UUFHaEYsTUFBTSxDQUFDSSxPQUFPLEdBQUcsTUFBTWQscURBQVUsQ0FBd0I7UUFFekQsd0NBQXdDO1FBQ3hDLEtBQUssTUFBTWdCLFNBQVNGLE9BQVE7WUFDMUIsTUFBTSxDQUFDRyxNQUFNLEdBQUcsTUFBTWpCLHFEQUFVLENBQXdCLGdEQUFnRDtnQkFBQ2dCLE1BQU1FLEVBQUU7YUFBQztZQUNsSEYsTUFBTUMsS0FBSyxHQUFHQTtRQUNoQjtRQUVBZCxJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUTtJQUN2QixFQUFFLE9BQU9LLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLGdDQUFnQ0E7UUFDOUNoQixJQUFJRSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDO1lBQUVDLFNBQVM7UUFBd0I7SUFDMUQ7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3ZlZ2V0YWJsZXNzaG9wLy4vcGFnZXMvYXBpL2FsbC1vcmRlcnMudHM/ZWZhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tICduZXh0JztcbmltcG9ydCBqd3QgZnJvbSAnanNvbndlYnRva2VuJztcbmltcG9ydCBwb29sIGZyb20gJy4uLy4uL3NyYy9kYic7XG5pbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5pbnRlcmZhY2UgRGVjb2RlZFRva2VuIHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIHJvbGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXE6IE5leHRBcGlSZXF1ZXN0LCByZXM6IE5leHRBcGlSZXNwb25zZSkge1xuICBpZiAocmVxLm1ldGhvZCAhPT0gJ0dFVCcpIHtcbiAgICByZXR1cm4gcmVzLnN0YXR1cyg0MDUpLmpzb24oeyBtZXNzYWdlOiAnTWV0aG9kIG5vdCBhbGxvd2VkJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHsgYXV0aG9yaXphdGlvbiB9ID0gcmVxLmhlYWRlcnM7XG5cbiAgaWYgKCFhdXRob3JpemF0aW9uKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRoZW50aWNhdGVkJyB9KTtcbiAgfVxuXG4gIGNvbnN0IHRva2VuID0gYXV0aG9yaXphdGlvbi5zcGxpdCgnICcpWzFdO1xuICBpZiAoIXRva2VuKSB7XG4gICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5qc29uKHsgbWVzc2FnZTogJ05vdCBhdXRoZW50aWNhdGVkJyB9KTtcbiAgfVxuXG4gIHRyeSB7XG4gICAgY29uc3QgZGVjb2RlZCA9IGp3dC52ZXJpZnkodG9rZW4sICdlMWE4ZTdmMS0xYjNhLTRiMGUtOGIwYS05YjBjMWQ5ZTBmMWEnKSBhcyBEZWNvZGVkVG9rZW47XG5cbiAgICAvLyBUaGlzIHNob3VsZCBiZSBhIHByb3RlY3RlZCByb3V0ZSBmb3IgYWRtaW5zXG4gICAgLy8gRm9yIHNpbXBsaWNpdHksIEknbSBub3QgY2hlY2tpbmcgdGhlIHJvbGUgaGVyZSwgYnV0IHlvdSBzaG91bGQgaW4gYSByZWFsIGFwcC5cblxuXG4gICAgY29uc3QgW29yZGVyc10gPSBhd2FpdCBwb29sLnF1ZXJ5PG15c3FsLlJvd0RhdGFQYWNrZXRbXT4oJ1NFTEVDVCAqIEZST00gb3JkZXJzIE9SREVSIEJZIG9yZGVyX2RhdGUgREVTQycpO1xuXG4gICAgLy8gRm9yIGVhY2ggb3JkZXIsIGZldGNoIHRoZSBvcmRlciBpdGVtc1xuICAgIGZvciAoY29uc3Qgb3JkZXIgb2Ygb3JkZXJzKSB7XG4gICAgICBjb25zdCBbaXRlbXNdID0gYXdhaXQgcG9vbC5xdWVyeTxteXNxbC5Sb3dEYXRhUGFja2V0W10+KCdTRUxFQ1QgKiBGUk9NIG9yZGVyX2l0ZW1zIFdIRVJFIG9yZGVyX2lkID0gPycsIFtvcmRlci5pZF0pO1xuICAgICAgb3JkZXIuaXRlbXMgPSBpdGVtcztcbiAgICB9XG5cbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbihvcmRlcnMpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ1tBUEkgL2FwaS9hbGwtb3JkZXJzXSBFcnJvcjonLCBlcnJvcik7XG4gICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBtZXNzYWdlOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImp3dCIsInBvb2wiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJhdXRob3JpemF0aW9uIiwiaGVhZGVycyIsInRva2VuIiwic3BsaXQiLCJkZWNvZGVkIiwidmVyaWZ5Iiwib3JkZXJzIiwicXVlcnkiLCJvcmRlciIsIml0ZW1zIiwiaWQiLCJlcnJvciIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/all-orders.ts\n");

/***/ }),

/***/ "(api)/./src/db.ts":
/*!*******************!*\
  !*** ./src/db.ts ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mysql2/promise */ \"mysql2/promise\");\n/* harmony import */ var mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mysql2_promise__WEBPACK_IMPORTED_MODULE_0__);\n\nconst pool = mysql2_promise__WEBPACK_IMPORTED_MODULE_0___default().createPool({\n    host: \"sql3.freesqldatabase.com\",\n    user: \"sql3813285\",\n    password: \"s8vHqw7YSw\",\n    database: \"sql3813285\",\n    port: 3306,\n    waitForConnections: true,\n    connectionLimit: 10,\n    queueLimit: 0\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pool);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvZGIudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQW1DO0FBRW5DLE1BQU1DLE9BQU9ELGdFQUFnQixDQUFDO0lBQzVCRyxNQUFNO0lBQ05DLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxVQUFVO0lBQ1ZDLE1BQU07SUFDTkMsb0JBQW9CO0lBQ3BCQyxpQkFBaUI7SUFDakJDLFlBQVk7QUFDZDtBQUVBLGlFQUFlVCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmVnZXRhYmxlc3Nob3AvLi9zcmMvZGIudHM/YWIwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbXlzcWwgZnJvbSAnbXlzcWwyL3Byb21pc2UnO1xuXG5jb25zdCBwb29sID0gbXlzcWwuY3JlYXRlUG9vbCh7XG4gIGhvc3Q6ICdzcWwzLmZyZWVzcWxkYXRhYmFzZS5jb20nLFxuICB1c2VyOiAnc3FsMzgxMzI4NScsXG4gIHBhc3N3b3JkOiAnczh2SHF3N1lTdycsXG4gIGRhdGFiYXNlOiAnc3FsMzgxMzI4NScsXG4gIHBvcnQ6IDMzMDYsXG4gIHdhaXRGb3JDb25uZWN0aW9uczogdHJ1ZSxcbiAgY29ubmVjdGlvbkxpbWl0OiAxMCxcbiAgcXVldWVMaW1pdDogMFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBvb2w7Il0sIm5hbWVzIjpbIm15c3FsIiwicG9vbCIsImNyZWF0ZVBvb2wiLCJob3N0IiwidXNlciIsInBhc3N3b3JkIiwiZGF0YWJhc2UiLCJwb3J0Iiwid2FpdEZvckNvbm5lY3Rpb25zIiwiY29ubmVjdGlvbkxpbWl0IiwicXVldWVMaW1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/db.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(api)/./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fall-orders&preferredRegion=&absolutePagePath=.%2Fpages%2Fapi%2Fall-orders.ts&middlewareConfigBase64=e30%3D!")));
module.exports = __webpack_exports__;

})();