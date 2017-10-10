/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (process.env.NODE_ENV !== 'production') {
  module.exports = __webpack_require__(10);
} else {
  module.exports = {
    MONGODB_URI: process.env.MONGODB_URI,
    urlBase: 'https://warm-anchorage-56608.herokuapp.com'
  };
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(0);
module.exports = __webpack_require__(4);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
__webpack_require__(5)({
  presets: ['env']
});
__webpack_require__(6);

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-register");

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(7);

var _express2 = _interopRequireDefault(_express);

var _bodyParser = __webpack_require__(8);

var _bodyParser2 = _interopRequireDefault(_bodyParser);

__webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var PORT = process.env.PORT || 3000;

app.use(_bodyParser2.default.urlencoded({ extended: false }));
app.use(_bodyParser2.default.json());

__webpack_require__(11)(app);

app.listen(PORT, function () {
  console.log('server on PORT: ' + PORT);
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _Config = __webpack_require__(2);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.Promise = global.Promise;

_mongoose2.default.connect(_Config2.default.MONGODB_URI, { useMongoClient: true }).then(function () {
  return console.log('connected to mLAB');
}).catch(function (e) {
  return console.log('Error connecting to mLAB', e);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  MONGODB_URI: 'mongodb://wali:wali@ds113785.mlab.com:13785/react_native_todos',
  urlBase: 'http://localhost:3000'
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _todos = __webpack_require__(12);

var _todos2 = _interopRequireDefault(_todos);

var _Config = __webpack_require__(2);

var _Config2 = _interopRequireDefault(_Config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

console.log(_Config2.default.urlBase);
module.exports = function (app) {

  app.get('/api/todos', function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
      var allTodos;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _todos2.default.find({});

            case 2:
              allTodos = _context.sent;
              _context.prev = 3;
              return _context.abrupt('return', res.status(200).json({ allTodos: allTodos }));

            case 7:
              _context.prev = 7;
              _context.t0 = _context['catch'](3);
              return _context.abrupt('return', res.status(_context.t0.status).json({ error: 'Could not find todos list or access database' }));

            case 10:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined, [[3, 7]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }());

  app.post('/api/todos/new', function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
      var item, newTodo;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              item = req.body.item;
              newTodo = new _todos2.default({ item: item, date: Date.now() });
              _context2.prev = 2;
              _context2.t0 = res.status(200);
              _context2.next = 6;
              return newTodo.save();

            case 6:
              _context2.t1 = _context2.sent;
              _context2.t2 = {
                todo: _context2.t1
              };
              return _context2.abrupt('return', _context2.t0.json.call(_context2.t0, _context2.t2));

            case 11:
              _context2.prev = 11;
              _context2.t3 = _context2['catch'](2);
              return _context2.abrupt('return', res.status(_context2.t3.status).json({ error: 'Error with creating todo' }));

            case 14:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined, [[2, 11]]);
    }));

    return function (_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }());

  app.post('/api/todos/delete', function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
      var _id, deletedItem, newTodosWithItemDelete;

      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _id = req.body._id;
              _context3.next = 3;
              return _todos2.default.deleteOne({ _id: _id });

            case 3:
              deletedItem = _context3.sent;
              _context3.next = 6;
              return _todos2.default.find({});

            case 6:
              newTodosWithItemDelete = _context3.sent;
              _context3.prev = 7;
              return _context3.abrupt('return', res.status(200).json({ deletedItem: deletedItem }));

            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3['catch'](7);
              return _context3.abrupt('return', res.status(_context3.t0.status).json({ message: 'Issue with deleting item ' }));

            case 14:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined, [[7, 11]]);
    }));

    return function (_x5, _x6) {
      return _ref3.apply(this, arguments);
    };
  }());
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoSchema = new _mongoose.Schema({
  item: String,
  date: Number
});

var Todos = _mongoose2.default.model('todos', todoSchema);

exports.default = Todos;

/***/ })
/******/ ]);