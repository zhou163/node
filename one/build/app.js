/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(39);

	var _service = __webpack_require__(15);

	var _service2 = _interopRequireDefault(_service);

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _logger = __webpack_require__(24);

	var _logger2 = _interopRequireDefault(_logger);

	var _padStart = __webpack_require__(46);

	var _padStart2 = _interopRequireDefault(_padStart);

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var outline = (0, _padStart2.default)('', 20, '-');
	_logger2.default.debug('\n' + outline + '\nOne Status\n' + outline);

	// onnect mongoose
	if (!_config2.default.db) {
	    throw new Error('DB: Configuration for MongoDB required');
	}
	_mongoose2.default.Promise = global.Promise; // Use native promises
	_mongoose2.default.connect(_config2.default.db.uri, _config2.default.db, function (err) {
	    if (err) {
	        _logger2.default.debug('DB: Not Connected');
	    } else {
	        _logger2.default.debug('DB: Connected');
	    }
	});

	//run service
	var server = _service2.default.listen(_config2.default.port, function () {
	    var port = server.address().port;
	    _logger2.default.debug('URL: http://localhost:%s', port);
	    _logger2.default.debug('PORT: %s', port);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var BaseComponent = function (_React$Component) {
	  _inherits(BaseComponent, _React$Component);

	  function BaseComponent(props, context) {
	    _classCallCheck(this, BaseComponent);

	    var _this = _possibleConstructorReturn(this, (BaseComponent.__proto__ || Object.getPrototypeOf(BaseComponent)).call(this, props, context));

	    _this.state = _this.getInitState ? _this.getInitState() : {};
	    _this.init && _this.init();
	    _this.constructor.displayName = _this.constructor.name;
	    return _this;
	  }

	  _createClass(BaseComponent, [{
	    key: 'isClient',
	    value: function isClient() {
	      return typeof document !== 'undefined';
	    }
	  }]);

	  return BaseComponent;
	}(_react2.default.Component);

	exports.default = BaseComponent;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("express");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("mongoose");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("passport");

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var rc = __webpack_require__(50);

	module.exports = rc('one', {
	  port: ({"NODE_ENV":"production"}).PORT || 8080,
	  devPort: ({"NODE_ENV":"production"}).DEV_PORT || 8181,
	  db: {
	    uri: ({"NODE_ENV":"production"}).RELAX_MONGO_URI || 'mongodb://localhost/one'
	  },
	  session: {
	    secret: ({"NODE_ENV":"production"}).RELAX_SESSION_SECRET || 'Is very secret'
	  },
	  logger: {
	    transports: {
	      Console: {
	        level: 'debug',
	        handleExceptions: true,
	        json: false,
	        colorize: true
	      }
	    },
	    exitOnError: false
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _passport = __webpack_require__(5);

	var _passport2 = _interopRequireDefault(_passport);

	var _passportLocalMongoose = __webpack_require__(48);

	var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

	var _passportLocal = __webpack_require__(11);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var userSchema = new _mongoose2.default.Schema({
	    username: {
	        type: String,
	        required: true,
	        unique: true
	    },
	    name: {
	        type: String,
	        required: true
	    },
	    password: {
	        type: String
	    },
	    email: {
	        type: String,
	        unique: true,
	        trim: true,
	        required: true
	    },
	    date: {
	        type: Date,
	        default: Date.now
	    }
	});

	userSchema.plugin(_passportLocalMongoose2.default);

	var UserModel = _mongoose2.default.model('User', userSchema);

	// passport.use(new Strategy(UserModel.authenticate()));
	// passport.serializeUser(UserModel.serializeUser());
	// passport.deserializeUser(UserModel.deserializeUser());

	exports.default = UserModel;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _classnames = __webpack_require__(41);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _forEach = __webpack_require__(45);

	var _forEach2 = _interopRequireDefault(_forEach);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(34);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Button = (_temp = _class = function (_Component) {
	  _inherits(Button, _Component);

	  function Button() {
	    _classCallCheck(this, Button);

	    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).apply(this, arguments));
	  }

	  _createClass(Button, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props,
	          onClick = _props.onClick,
	          className = _props.className,
	          classes = _objectWithoutProperties(_props, ['onClick', 'className']);

	      var resultClassName = (0, _classnames2.default)(_index2.default.button, className);
	      (0, _forEach2.default)(classes, function (value, key) {
	        if (_index2.default[key] && value) {
	          resultClassName = (0, _classnames2.default)(resultClassName, _index2.default[key]);
	        }
	      });

	      return _jsx('button', {
	        className: resultClassName,
	        onClick: onClick,
	        style: this.props.style
	      }, void 0, this.props.children);
	    }
	  }]);

	  return Button;
	}(_component2.default), _class.propTypes = {
	  children: _react.PropTypes.node.isRequired,
	  onClick: _react.PropTypes.func,
	  className: _react.PropTypes.string,
	  style: _react.PropTypes.object,
	  primary: _react.PropTypes.bool,
	  full: _react.PropTypes.bool,
	  big: _react.PropTypes.bool,
	  noBackground: _react.PropTypes.bool,
	  bordered: _react.PropTypes.bool,
	  grey: _react.PropTypes.bool,
	  small: _react.PropTypes.bool,
	  thin: _react.PropTypes.bool,
	  smallFont: _react.PropTypes.bool,
	  disabled: _react.PropTypes.bool
	}, _class.defaultProps = {
	  primary: true,
	  full: false,
	  big: false,
	  noBackground: false,
	  bordered: false,
	  smallFont: false,
	  disabled: false
	}, _temp);
	exports.default = Button;

/***/ },
/* 9 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bind;
	function bind(target, key, _ref) {
	  var fn = _ref.value;

	  return {
	    configurable: true,
	    get: function get() {
	      var value = fn.bind(this);
	      Object.defineProperty(this, key, {
	        value: value,
	        configurable: true,
	        writable: true
	      });
	      return value;
	    }
	  };
	}

/***/ },
/* 10 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"title":"_1AGoA","subTitle":"_1tR60","form":"_13g_K","error":"_5gTfa"};

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("passport-local");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("redux");

/***/ },
/* 13 */
/***/ function(module, exports) {

	module.exports = require("redux-router");

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _express = __webpack_require__(3);

	var _express2 = _interopRequireDefault(_express);

	var _morgan = __webpack_require__(47);

	var _morgan2 = _interopRequireDefault(_morgan);

	var _bodyParser = __webpack_require__(40);

	var _bodyParser2 = _interopRequireDefault(_bodyParser);

	var _path = __webpack_require__(49);

	var _path2 = _interopRequireDefault(_path);

	var _auth = __webpack_require__(16);

	var _auth2 = _interopRequireDefault(_auth);

	var _connectMongo = __webpack_require__(42);

	var _connectMongo2 = _interopRequireDefault(_connectMongo);

	var _expressSession = __webpack_require__(43);

	var _expressSession2 = _interopRequireDefault(_expressSession);

	var _mongoose = __webpack_require__(4);

	var _mongoose2 = _interopRequireDefault(_mongoose);

	var _config = __webpack_require__(6);

	var _config2 = _interopRequireDefault(_config);

	var _passport = __webpack_require__(5);

	var _passport2 = _interopRequireDefault(_passport);

	var _auth3 = __webpack_require__(17);

	var _auth4 = _interopRequireDefault(_auth3);

	var _user = __webpack_require__(7);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	var app = (0, _express2.default)();
	var LocalStrategy = __webpack_require__(11).Strategy;

	app.use((0, _morgan2.default)('short')); //http 请求 日志中间件 
	app.use(_bodyParser2.default.urlencoded({ extended: false })); //  处理form表单数据。设置可扩展  可以接受对象类型数据结构。如果不设置 只能接受 string | array 
	app.use(_bodyParser2.default.json({ limit: 100000000 })); //处理json 格式数据


	// View engine
	app.set('views', _path2.default.join(__dirname, 'components'));

	// session
	var MongoStore = (0, _connectMongo2.default)(_expressSession2.default);
	app.use((0, _expressSession2.default)({
	    secret: _config2.default.session.secret,
	    resave: true, // 每次请求都重置session的保存时间
	    saveUninitialized: false, // 设置 false 才能修改 session的时间状态
	    store: new MongoStore({ mongooseConnection: _mongoose2.default.connection }) //设置session 存储到mongodb 数据库 持久化
	}));

	app.use(_express2.default.static(_path2.default.resolve('public')));
	// Passport
	app.use(_passport2.default.initialize()); //初始化 passport  认证中间件
	app.use(_passport2.default.session()); // 使用 passport   管理session
	_passport2.default.use(new LocalStrategy(function (username, password, done) {
	    //这个被称为验证回调函数.
	    _user2.default.findOne({ username: username }, function (err, user) {
	        if (user != null) {
	            if (user.password == password) {
	                return done(null, user);
	            } else {
	                return done(null, false, { message: '密码错误' });
	            }
	        } else {
	            return done(null, false, { message: '用户不存在' });
	        }
	    });
	}));

	// serializeUser 用户登录验证成功以后将会把用户的数据存储到 session 中

	_passport2.default.serializeUser(function (user, done) {
	    done(null, user);
	});

	// deserializeUser 每次请求的时将从 session 中读取用户对象，并将其封装到 req.user

	_passport2.default.deserializeUser(function (user, done) {
	    return done(null, user);
	});

	app.use(function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(req, res, next) {
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	            while (1) {
	                switch (_context.prev = _context.next) {
	                    case 0:
	                        res.locals.header = [{
	                            tag: 'title',
	                            content: 'one'
	                        }];

	                        if (false) {
	                            res.baseScriptsURL = 'http://localhost:' + _config2.default.devPort;
	                            res.locals.header.push({
	                                tag: 'script',
	                                props: {
	                                    src: res.baseScriptsURL + '/webpack-dev-server.js'
	                                }
	                            });
	                        } else {
	                            res.baseScriptsURL = '';
	                        }

	                        // footer
	                        res.locals.footer = [{
	                            tag: 'script',
	                            props: {
	                                src: res.baseScriptsURL + '/assets/common.js'
	                            }
	                        }];

	                        next();

	                    case 4:
	                    case 'end':
	                        return _context.stop();
	                }
	            }
	        }, _callee, undefined);
	    }));

	    return function (_x, _x2, _x3) {
	        return _ref.apply(this, arguments);
	    };
	}());

	app.use(_auth2.default);
	app.use(_auth4.default);

	// catch 404 and forward to error handler
	app.use(function (req, res, next) {
	    var err = new Error('Not Found');
	    err.status = 404;
	    next(err);
	});

	// error handler
	app.use(function (err, req, res, next) {
	    // set locals, only providing error in development
	    res.locals.message = err.message;
	    res.locals.error = req.app.get('env') === 'development' ? err : {};

	    // render the error page
	    res.status(err.status || 500);
	    res.send('error');
	});

	exports.default = app;

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _express = __webpack_require__(3);

	var authRouterApp = new _express.Router();

	var responseLogin = {

	    success: 'true',
	    data: {}
	};

	authRouterApp.get('/app/login', function (req, res) {

	    res.status(200).json(responseLogin);
	});

	exports.default = authRouterApp;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _express = __webpack_require__(3);

	var _routeHandler = __webpack_require__(23);

	var _routeHandler2 = _interopRequireDefault(_routeHandler);

	var _getMarkup = __webpack_require__(22);

	var _getMarkup2 = _interopRequireDefault(_getMarkup);

	var _auth = __webpack_require__(27);

	var _auth2 = _interopRequireDefault(_auth);

	var _reducers = __webpack_require__(25);

	var _reducers2 = _interopRequireDefault(_reducers);

	var _defaultFavicon = __webpack_require__(21);

	var _defaultFavicon2 = _interopRequireDefault(_defaultFavicon);

	var _user = __webpack_require__(7);

	var _user2 = _interopRequireDefault(_user);

	var _passport = __webpack_require__(5);

	var _passport2 = _interopRequireDefault(_passport);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var authRouterWeb = new _express.Router();

	function injectScript(req, res, next) {

	    res.locals.header.push({
	        tag: 'link',
	        props: {
	            rel: 'stylesheet',
	            type: 'text/css',
	            href: 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700'
	        }
	    });
	    res.locals.header.push({
	        tag: 'link',
	        props: {
	            rel: 'stylesheet',
	            type: 'text/css',
	            href: '/assets/auth.css'
	        }
	    });
	    res.locals.header.push((0, _defaultFavicon2.default)(res));

	    res.locals.footer.push({
	        tag: 'script',
	        props: {
	            src: res.baseScriptsURL + '/assets/auth.js'
	        }
	    });
	    next();
	}

	authRouterWeb.get('/web*', function (req, res, next) {
	    if (req.isAuthenticated()) {
	        res.status(200).json('{success:true}');
	    } else {
	        (0, _routeHandler2.default)(_auth2.default, _reducers2.default, req, res, next);
	    }
	});

	authRouterWeb.get('/web/login', injectScript, function (req, res) {

	    return res.status(200).send((0, _getMarkup2.default)(req.store, res));
	});

	authRouterWeb.post('/web/login', function (req, res, next) {
	    _passport2.default.authenticate('local', function (err, user) {
	        if (err) {
	            res.status(500).send({
	                error: 500,
	                message: err.message
	            });
	        } else if (!user) {
	            res.status(403).send({
	                error: 403,
	                message: 'Invalid username and password combination'
	            });
	        } else {
	            req.logIn(user, function (error) {
	                if (error) {
	                    res.status(500).send({
	                        error: 500,
	                        message: error.message
	                    });
	                } else {
	                    res.status(200).end();
	                }
	            });
	        }
	    })(req, res, next);
	});

	authRouterWeb.get('/web/register', injectScript, function (req, res) {

	    return res.status(200).send((0, _getMarkup2.default)(req.store, res));
	});

	authRouterWeb.post('/web/register', injectScript, function (req, res) {
	    var username = req.body.username;
	    var password = req.body.password;
	    var reconfirmPassword = req.body.reconfirmPassword;
	    var name = req.body.name;
	    var email = req.body.email;

	    if (!password || !username) {
	        return res.status(500).send({ error: 500,
	            message: '输入不能为空' });
	    }
	    if (password !== reconfirmPassword) {
	        return res.status(500).send({ error: 500,
	            message: '两次密码输入不同' });
	    }

	    _user2.default.create({
	        username: username,
	        password: password,
	        name: name,
	        email: email
	    }, function (err, user) {

	        if (err) {

	            return res.status(500).send({ error: 500,
	                message: err });
	        } else {
	            return res.status(200).end;
	        }
	    });
	});

	exports.default = authRouterWeb;

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  // Admin menu
	  openAdminMenu: 'OPEN_ADMIN_MENU',
	  closeAdminMenu: 'CLOSE_ADMIN_MENU',
	  // Display
	  changeDisplay: 'CHANGE_DISPLAY',
	  // DND
	  startDragging: 'START_DRAGGING',
	  onDroppable: 'ON_DROPPABLE',
	  outDroppable: 'OUT_DROPPABLE',
	  stopDragging: 'STOP_DRAGGING',
	  // Fonts
	  changeFontsPreviewText: 'CHANGE_FONTS_PREVIEW_TEXT',
	  changeFontsDisplay: 'CHANGE_FONTS_DISPLAY',
	  changeFontInput: 'CHANGE_FONT_INPUT',
	  openFontsManage: 'OPEN_FONTS_MANAGE',
	  closeFontsManage: 'CLOSE_FONTS_MANAGE',
	  changeFontsTab: 'CHANGE_FONTS_TAB',
	  loadingFonts: 'LOADING_FONTS',
	  loadFonts: 'LOAD_FONTS',
	  addCustomFonts: 'ADD_CUSTOM_FONTS',
	  removeCustomTempFont: 'REMOVE_CUSTOM_TEMP_FONT',
	  customFontsUploaded: 'CUSTOM_FONTS_UPLOADED',
	  removeCustomFont: 'REMOVE_CUSTOM_FONT',
	  savingFonts: 'SAVING_FONTS',
	  // Media
	  changeMediaDisplay: 'CHANGE_MEDIA_DISPLAY',
	  addFilesToUpload: 'ADD_MEDIA_FILES_TO_UPLOAD',
	  uploadingMedia: 'UPLOADING_MEDIA',
	  mediaUploadSuccess: 'UPLOAD_MEDIA_SUCCESS',
	  mediaUploadError: 'UPLOAD_MEDIA_ERROR',
	  // Menu
	  addMenuItem: 'ADD_MENU_ITEM',
	  removeMenuItem: 'REMOVE_MENU_ITEM',
	  moveMenuItem: 'MOVE_MENU_ITEM',
	  // Color
	  openNewColor: 'OPEN_NEW_COLOR',
	  closeNewColor: 'CLOSE_NEW_COLOR',
	  openEditColor: 'OPEN_EDIT_COLOR',
	  changeColorProperty: 'CHANGE_COLOR_PROPERTY',
	  colorLoading: 'COLOR_LOADING',
	  colorSuccess: 'COLOR_SUCCESS',
	  openRemoveColor: 'OPEN_REMOVE_COLOR',
	  closeRemoveColor: 'CLOSE_REMOVE_COLOR',
	  // Page
	  validatePageSlug: 'VALIDATE_PAGE_SLUG',
	  // Template
	  openNewTemplate: 'OPEN_NEW_TEMPLATE',
	  closeNewTemplate: 'CLOSE_NEW_TEMPLATE',
	  changeTemplateTitle: 'CHANGE_TEMPLATE_TITLE',
	  templateLoading: 'TEMPLATE_LOADING',
	  templateSuccess: 'TEMPLATE_SUCCCESS',
	  // Schema
	  changeSchemaType: 'CHANGE_SCHEMA_TYPE',
	  changeSchemaTitle: 'CHANGE_SCHEMA_TITLE',
	  changeSchemaProperty: 'CHANGE_SCHEMA_PROPERTY',
	  changeSchemaPermission: 'CHANGE_SCHEMA_PERMISSION',
	  changeSchemaTemplate: 'CHANGE_SCHEMA_TEMPLATE',
	  changeSchemaPropertyProp: 'CHANGE_SCHEMA_PROPERTY_PROP',
	  schemaStepBack: 'SCHEMA_STEP_BACK',
	  schemaStepForward: 'SCHEMA_STEP_FORWARD',
	  schemaAddProperty: 'SCHEMA_ADD_PROPERTY',
	  schemaRemoveProperty: 'SCHEMA_REMOVE_PROPERTY',
	  schemaToggleProperty: 'SCHEMA_TOGGLE_PROPERTY',
	  schemaChangePropertySetting: 'SCHEMA_CHANGE_PROPERTY_SETTING',
	  changeSchemaToDefault: 'CHANGE_SCHEMA_TO_DEFAULT',
	  updateSchema: 'UPDATE_SCHEMA',
	  addSchema: 'ADD_SCHEMA',
	  restoreSchema: 'RESTORE_SCHEMA',
	  validateSchemaSlug: 'VALIDATE_SCHEMA_SLUG',
	  editSchema: 'EDIT_SCHEMA',
	  removingSchema: 'REMOVING_SCHEMA',
	  removedSchema: 'REMOVED_SCHEMA',
	  savingSchema: 'SAVING_SCHEMA',
	  savedSchema: 'SAVED_SCHEMA',
	  // Schema entry
	  changeSchemaEntryToDefaults: 'CHANGE_SCHEMA_ENTRY_TO_DEFAULTS',
	  addSchemaEntry: 'ADD_SCHEMA_ENTRY',
	  schemaEntrySaving: 'SCHEMA_ENTRY_SAVING',
	  schemaEntrySaved: 'SCHEMA_ENTRY_SAVED',
	  schemaEntrySavedOut: 'SCHEMA_ENTRY_SAVED_OUT',
	  removingSchemaEntry: 'REMOVING_SCHEMA_ENTRY',
	  removedSchemaEntry: 'REMOVED_SCHEMA_ENTRY',
	  updateSchemaEntry: 'UPDATE_SCHEMA_ENTRY',
	  validateSchemaEntrySlug: 'VALIDATE_SCHEMA_ENTRY_SLUG',
	  changeSchemaEntryFields: 'CHANGE_SCHEMA_ENTRY_FIELDS',
	  changeSchemaEntryProperty: 'CHANGE_SCHEMA_ENTRY_PROPERTY',
	  // Settings
	  changeSettingValue: 'CHANGE_SETTING_VALUE',
	  saveSettings: 'SAVE_SETTINGS',
	  savingSettings: 'SAVING_SETTINGS',
	  savedSettings: 'SAVED_SETTINGS',
	  savedSettingsOut: 'SAVED_SETTINGS_OUT',
	  // Page builder
	  openDropDraftConfirmation: 'OPEN_DROP_DRAFT_CONFIRMATION',
	  closeDropDraftConfirmation: 'CLOSE_DROP_DRAFT_CONFIRMATION',
	  openPushChangesConfirmation: 'OPEN_PUSH_CHANGES_CONFIRMATION',
	  closePushChangesConfirmation: 'CLOSE_PUSH_CHANGES_CONFIRMATION',
	  openUnpublishConfirmation: 'OPEN_UNPUBLISH_CONFIRMATION',
	  closeUnpublishConfirmation: 'CLOSE_UNPUBLISH_CONFIRMATION',
	  pbChangeState: 'PB_CHANGE_STATE',
	  pbToggleEditing: 'PB_TOGGLE_EDITING',
	  pbSetMenuOpened: 'PB_SET_MENU_OPENED',
	  pbSetMenuSide: 'PB_SET_MENU_SIDE',
	  pbSetMenuTab: 'PB_SET_MENU_TAB',
	  pbOpenElementsMenu: 'PB_OPEN_ELEMENTS_MENU',
	  pbCloseElementsMenu: 'PB_CLOSE_ELEMENTS_MENU',
	  pbToggleExpandElement: 'PB_TOGGLE_EXPAND_ELEMENT',
	  pbExpandAll: 'PB_EXPAND_ALL',
	  pbCollapseAll: 'PB_COLLAPSE_ALL',
	  pbToggleCategory: 'PB_TOGGLE_CATEGORY',
	  pbOverElement: 'PB_OVER_ELEMENT',
	  pbOutElement: 'PB_OUT_ELEMENT',
	  pbSelectElement: 'PB_SELECT_ELEMENT',
	  pbDoAction: 'PB_DO_ACTION',
	  doActionNoHistory: 'PB_DO_ACTION_NO_HISTORY',
	  pbUndoAction: 'PB_UNDO_ACTION',
	  pbRedoAction: 'PB_REDO_ACTION',
	  pbLinkDataMode: 'PB_LINK_DATA_MODE',
	  pbCloseLinkDataMode: 'PB_CLOSE_LINK_DATA_MODE',
	  makeElementSymbol: 'MAKE_ELEMENT_SYMBOL',
	  pbEditSymbol: 'PB_EDIT_SYMBOL',
	  pbCloseEditSymbol: 'PB_CLOSE_EDIT_SYMBOL',
	  pbChangeLinkTabSchemaId: 'PB_CHANGE_LINK_TAB_SCHEMAID',
	  setPageBuilderTemplate: 'PB_SET_TEMPLATE',
	  // User
	  toggleRemoveUser: 'TOGGLE_REMOVE_USER',
	  removingUser: 'REMOVING_USER',
	  removedUser: 'REMOVED_USER',
	  toggleUserChangingPassword: 'TOGGLE_USER_CHANGING_PASSWORD',
	  changeUserPasswordValue: 'CHANGE_USER_PASSWORD_VALUE',
	  updatingUserPassword: 'UPDATING_USER_PASSWORD',
	  updatedUserPassword: 'UPDATED_USER_PASSWORD',
	  // Symbols
	  savingSymbol: 'SAVING_SYMBOL',
	  savedSymbol: 'SAVED_SYMBOL',
	  // styles
	  saveStyle: 'SAVE_STYLE',
	  updateStyle: 'UPDATE_STYLE',
	  changeStyleProp: 'CHANGE_STYLE_PROP',
	  removeStyle: 'REMOVE_STYLE',
	  // styles map
	  updateStylesMap: 'UPDATE_STYLES_MAP'
	};

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('meta', {
	  name: 'viewport',
	  content: 'width=device-width, initial-scale=1.0'
	});

	var Html = (_temp = _class = function (_React$Component) {
	  _inherits(Html, _React$Component);

	  function Html() {
	    _classCallCheck(this, Html);

	    return _possibleConstructorReturn(this, (Html.__proto__ || Object.getPrototypeOf(Html)).apply(this, arguments));
	  }

	  _createClass(Html, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('html', {}, void 0, _jsx('head', {}, void 0, this.renderHeader(), _ref), _jsx('body', {}, void 0, _jsx('div', {
	        id: 'view',
	        dangerouslySetInnerHTML: { __html: this.props.body }
	      }), _jsx('script', {
	        dangerouslySetInnerHTML: { __html: 'window.__initialState = ' + this.props.props + ';' }
	      }), this.renderFooter()));
	    }
	  }, {
	    key: 'renderHeader',
	    value: function renderHeader() {
	      if (this.props.locals && this.props.locals.header) {
	        return this.props.locals.header.map(this.renderTag, this);
	      }
	    }
	  }, {
	    key: 'renderFooter',
	    value: function renderFooter() {
	      if (this.props.locals && this.props.locals.footer) {
	        return this.props.locals.footer.map(this.renderTag, this);
	      }
	    }
	  }, {
	    key: 'renderTag',
	    value: function renderTag(tag, key) {
	      var tagProps = Object.assign({}, tag.props || {});
	      if (tag.content) {
	        tagProps.dangerouslySetInnerHTML = { __html: tag.content };
	      }
	      return _react2.default.createElement(tag.tag, _extends({ key: tag.tag + '_' + key }, tagProps));
	    }
	  }]);

	  return Html;
	}(_react2.default.Component), _class.propTypes = {
	  locals: _react.PropTypes.object,
	  props: _react.PropTypes.any,
	  body: _react.PropTypes.any
	}, _temp);
	exports.default = Html;

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = configureStore;

	var _reduxCombineActions = __webpack_require__(54);

	var _reduxCombineActions2 = _interopRequireDefault(_reduxCombineActions);

	var _reduxThunk = __webpack_require__(56);

	var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

	var _redux = __webpack_require__(12);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//这是一个Redux中间件，允许您轻松地组合异步动作并按顺序或并行分派它们。
	var middleware = []; // 改造store.dispatch,使得后者可以接受函数作为参数。


	middleware.push(_reduxCombineActions2.default);
	middleware.push(_reduxThunk2.default);

	if (false) {
	  var createLogger = require('redux-logger');
	  var logger = createLogger();
	  middleware.push(logger);
	}

	function configureStore(routerMiddleware, reducers, initialState) {
	  var store = (0, _redux.compose)(_redux.applyMiddleware.apply(undefined, middleware), routerMiddleware)(_redux.createStore)(reducers, initialState);

	  if (false) {
	    // Enable Webpack hot module replacement for reducers
	    module.hot.accept('../reducers', function () {
	      var nextReducer = require('../reducers');
	      store.replaceReducer(nextReducer);
	    });
	  }

	  return store;
	}

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = getDefaultIcon;
	function getDefaultIcon(res) {
	  return {
	    tag: 'link',
	    props: {
	      rel: 'shortcut icon',
	      type: 'image/vnd.microsoft.icon',
	      href: res.baseScriptsURL + '/images/login/favicon.ico'
	    }
	  };
	}

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	exports.default = getMarkup;

	var _serializeJavascript = __webpack_require__(57);

	var _serializeJavascript2 = _interopRequireDefault(_serializeJavascript);

	var _html = __webpack_require__(19);

	var _html2 = _interopRequireDefault(_html);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _server = __webpack_require__(51);

	var _reactRedux = __webpack_require__(52);

	var _reduxRouter = __webpack_require__(13);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var _ref = _jsx(_reduxRouter.ReduxRouter, {});

	function getMarkup(store, res) {
	  var state = store.getState();

	  var initialState = (0, _serializeJavascript2.default)(state);

	  var markup = (0, _server.renderToString)(_jsx(_reactRedux.Provider, {
	    store: store
	  }, void 0, _ref));

	  // console.log(`initialState----${JSON.stringify(initialState)}`);
	  // console.log(`locals----${JSON.stringify(res.locals)}`);

	  var htmlMarkup = (0, _server.renderToString)(_jsx(_html2.default, {
	    body: markup,
	    props: initialState,
	    locals: res.locals
	  }));

	  // console.log(`htmlMarkup----${JSON.stringify(htmlMarkup)}`);

	  return htmlMarkup;
	}

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = routeHandler;

	var _configureStore = __webpack_require__(20);

	var _configureStore2 = _interopRequireDefault(_configureStore);

	var _history = __webpack_require__(44);

	var _server = __webpack_require__(55);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

	function routeHandler(routes, reducers, req, res, next) {
	  var _this = this;

	  var store = (0, _configureStore2.default)((0, _server.reduxReactRouter)({
	    createHistory: _history.createMemoryHistory,
	    routes: routes
	  }), reducers);
	  var url = req.originalUrl;

	  store.dispatch((0, _server.match)(url, function () {
	    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(error, redirectLocation, routerState) {
	      return regeneratorRuntime.wrap(function _callee$(_context) {
	        while (1) {
	          switch (_context.prev = _context.next) {
	            case 0:
	              if (error) {
	                next(error);
	              } else if (redirectLocation) {
	                res.redirect(302, redirectLocation.pathname + redirectLocation.search);
	              } else if (routerState) {
	                req.routerState = routerState;
	                req.store = store;
	                next();
	              } else {
	                res.status(404).send('Not found from route-handler');
	              }

	            case 1:
	            case 'end':
	              return _context.stop();
	          }
	        }
	      }, _callee, _this);
	    }));

	    return function (_x, _x2, _x3) {
	      return _ref.apply(this, arguments);
	    };
	  }()));
	}

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _winston = __webpack_require__(58);

	var _winston2 = _interopRequireDefault(_winston);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// 异步日志库
	var build = {

	  level: 'debug',
	  transports: [new _winston2.default.transports.Console(), new _winston2.default.transports.File({
	    name: 'error-file',
	    filename: 'filelog-error.log',
	    level: 'error'
	  })]
	};

	exports.default = new _winston2.default.Logger(build);

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.reducersToCombine = undefined;

	var _redux = __webpack_require__(12);

	var _reduxRouter = __webpack_require__(13);

	var _user = __webpack_require__(26);

	var _user2 = _interopRequireDefault(_user);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var reducersToCombine = exports.reducersToCombine = {
	  router: _reduxRouter.routerStateReducer,
	  user: _user2.default
	};
	var rootReducer = (0, _redux.combineReducers)(reducersToCombine);

	exports.default = rootReducer;

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = userReducer;

	var _actions = __webpack_require__(18);

	var _actions2 = _interopRequireDefault(_actions);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var defaultState = {
	  removeConfirm: false,
	  removing: false,
	  changingPassword: false,
	  updatingPassword: false,
	  password: '',
	  passwordConfirm: ''
	};

	function userReducer() {
	  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	  var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

	  switch (action.type) {
	    case _actions2.default.toggleRemoveUser:
	      return Object.assign({}, state, {
	        removeConfirm: !state.removeConfirm
	      });
	    case _actions2.default.removingUser:
	      return Object.assign({}, state, {
	        removing: true
	      });
	    case _actions2.default.removedUser:
	      return Object.assign({}, state, {
	        removeConfirm: false,
	        removing: false
	      });
	    case _actions2.default.toggleUserChangingPassword:
	      return Object.assign({}, state, {
	        changingPassword: !state.changingPassword
	      });
	    case _actions2.default.changeUserPasswordValue:
	      return Object.assign({}, state, _defineProperty({}, action.key, action.value));
	    case _actions2.default.updatingUserPassword:
	      return Object.assign({}, state, {
	        updatingPassword: true
	      });
	    case _actions2.default.updatedUserPassword:
	      return Object.assign({}, state, {
	        changingPassword: false,
	        updatingPassword: false,
	        password: '',
	        passwordConfirm: ''
	      });
	    default:
	      return state;
	  }
	}

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _auth = __webpack_require__(29);

	var _auth2 = _interopRequireDefault(_auth);

	var _login = __webpack_require__(31);

	var _login2 = _interopRequireDefault(_login);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _reactRouter = __webpack_require__(53);

	var _regis = __webpack_require__(33);

	var _regis2 = _interopRequireDefault(_regis);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = [_jsx(_reactRouter.Route, {
	  component: _auth2.default
	}, void 0, _jsx(_reactRouter.Route, {
	  path: '/web/login',
	  component: _login2.default
	}), _jsx(_reactRouter.Route, {
	  path: '/web/register',
	  component: _regis2.default
	}))];

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _index = __webpack_require__(35);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx('img', {
	  src: '/images/login/logo_big.png',
	  width: '150',
	  role: 'presentation'
	});

	var Logo = function (_Component) {
	  _inherits(Logo, _Component);

	  function Logo() {
	    _classCallCheck(this, Logo);

	    return _possibleConstructorReturn(this, (Logo.__proto__ || Object.getPrototypeOf(Logo)).apply(this, arguments));
	  }

	  _createClass(Logo, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _index2.default.logo
	      }, void 0, _ref, _jsx('div', {
	        className: _index2.default.version
	      }, void 0, 'beta'));
	    }
	  }]);

	  return Logo;
	}(_component2.default);

	exports.default = Logo;

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	__webpack_require__(37);

	__webpack_require__(38);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _index = __webpack_require__(36);

	var _index2 = _interopRequireDefault(_index);

	var _logo = __webpack_require__(28);

	var _logo2 = _interopRequireDefault(_logo);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _ref = _jsx(_logo2.default, {});

	var Auth = (_temp = _class = function (_Component) {
	  _inherits(Auth, _Component);

	  function Auth() {
	    _classCallCheck(this, Auth);

	    return _possibleConstructorReturn(this, (Auth.__proto__ || Object.getPrototypeOf(Auth)).apply(this, arguments));
	  }

	  _createClass(Auth, [{
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {
	        className: _index2.default.content
	      }, void 0, _ref, this.props.children);
	    }
	  }]);

	  return Auth;
	}(_component2.default), _class.propTypes = {
	  children: _react.PropTypes.node.isRequired
	}, _temp);
	exports.default = Auth;

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _class2, _temp;

	var _auth = __webpack_require__(10);

	var _auth2 = _interopRequireDefault(_auth);

	var _button = __webpack_require__(8);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _bind = __webpack_require__(9);

	var _bind2 = _interopRequireDefault(_bind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var _ref = _jsx('i', {
	  className: 'nc-icon-outline users_single-03'
	});

	var _ref2 = _jsx('i', {
	  className: 'nc-icon-outline ui-1_lock'
	});

	var _ref3 = _jsx('input', {
	  type: 'submit',
	  hidden: true
	});

	var Login = (_class = (_temp = _class2 = function (_Component) {
	  _inherits(Login, _Component);

	  function Login() {
	    _classCallCheck(this, Login);

	    return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
	  }

	  _createClass(Login, [{
	    key: 'changeUsername',
	    value: function changeUsername(event) {
	      this.props.fieldChange('username', event.target.value);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(event) {
	      this.props.fieldChange('password', event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {
	        className: _auth2.default.title
	      }, void 0, 'Welcome back!'), _jsx('div', {
	        className: _auth2.default.subTitle
	      }, void 0, 'Login with your account below to get started'), _jsx('form', {
	        className: _auth2.default.form,
	        onSubmit: this.props.onSubmit
	      }, void 0, _jsx('label', {}, void 0, _ref, _jsx('input', {
	        type: 'text',
	        name: 'username',
	        placeholder: 'Username',
	        value: this.props.username,
	        onChange: this.changeUsername
	      })), _jsx('label', {}, void 0, _ref2, _jsx('input', {
	        type: 'password',
	        name: 'password',
	        placeholder: 'Password',
	        value: this.props.password,
	        onChange: this.changePassword
	      })), _jsx(_button2.default, {
	        primary: true,
	        full: true,
	        big: true,
	        onClick: this.props.onSubmit,
	        style: { marginTop: 40 }
	      }, void 0, 'Let\'s get started'), _jsx('div', {
	        className: _auth2.default.error
	      }, void 0, this.props.error && this.props.error || ' '), _ref3));
	    }
	  }]);

	  return Login;
	}(_component2.default), _class2.propTypes = {
	  onSubmit: _react.PropTypes.func.isRequired,
	  fieldChange: _react.PropTypes.func.isRequired,
	  username: _react.PropTypes.string.isRequired,
	  password: _react.PropTypes.string.isRequired,
	  error: _react.PropTypes.string
	}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'changeUsername', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeUsername'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changePassword', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changePassword'), _class.prototype)), _class);
	exports.default = Login;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _login = __webpack_require__(30);

	var _login2 = _interopRequireDefault(_login);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LoginContainer = (_temp = _class = function (_Component) {
	  _inherits(LoginContainer, _Component);

	  function LoginContainer() {
	    _classCallCheck(this, LoginContainer);

	    return _possibleConstructorReturn(this, (LoginContainer.__proto__ || Object.getPrototypeOf(LoginContainer)).apply(this, arguments));
	  }

	  _createClass(LoginContainer, [{
	    key: 'getInitState',
	    value: function getInitState() {
	      return {
	        username: '',
	        password: ''
	      };
	    }
	  }, {
	    key: 'onSubmit',
	    value: function onSubmit(event) {
	      var _this2 = this;

	      event.preventDefault();
	      var _state = this.state,
	          username = _state.username,
	          password = _state.password;


	      _superagent2.default.post('/web/login').set('Content-Type', 'application/json').set('Accept', 'application/json').send({ username: username, password: password }).end(function (error, res) {
	        if (error) {
	          _this2.setState({
	            error: res.body.message
	          });
	        } else {
	          window.location.href = '/web/success';
	        }
	      });
	    }
	  }, {
	    key: 'fieldChange',
	    value: function fieldChange(id, value) {
	      this.setState(_defineProperty({}, id, value));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_login2.default, _extends({
	        ref: 'login'
	      }, this.props, this.state, {
	        onSubmit: this.onSubmit.bind(this),
	        fieldChange: this.fieldChange.bind(this)
	      }));
	    }
	  }]);

	  return LoginContainer;
	}(_component2.default), _class.propTypes = {
	  history: _react.PropTypes.object.isRequired
	}, _temp);
	exports.default = LoginContainer;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = undefined;

	var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _desc, _value, _class, _class2, _temp;

	var _auth = __webpack_require__(10);

	var _auth2 = _interopRequireDefault(_auth);

	var _button = __webpack_require__(8);

	var _button2 = _interopRequireDefault(_button);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _bind = __webpack_require__(9);

	var _bind2 = _interopRequireDefault(_bind);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
	  var desc = {};
	  Object['ke' + 'ys'](descriptor).forEach(function (key) {
	    desc[key] = descriptor[key];
	  });
	  desc.enumerable = !!desc.enumerable;
	  desc.configurable = !!desc.configurable;

	  if ('value' in desc || desc.initializer) {
	    desc.writable = true;
	  }

	  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
	    return decorator(target, property, desc) || desc;
	  }, desc);

	  if (context && desc.initializer !== void 0) {
	    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
	    desc.initializer = undefined;
	  }

	  if (desc.initializer === void 0) {
	    Object['define' + 'Property'](target, property, desc);
	    desc = null;
	  }

	  return desc;
	}

	var _ref = _jsx('i', {
	  className: 'nc-icon-outline users_single-01'
	});

	var _ref2 = _jsx('i', {
	  className: 'nc-icon-outline users_single-02'
	});

	var _ref3 = _jsx('i', {
	  className: 'nc-icon-outline ui-1_lock'
	});

	var _ref4 = _jsx('i', {
	  className: 'nc-icon-outline ui-1_lock'
	});

	var _ref5 = _jsx('i', {
	  className: 'nc-icon-outline ui-1_lock'
	});

	var _ref6 = _jsx('input', {
	  type: 'submit',
	  hidden: true
	});

	var register = (_class = (_temp = _class2 = function (_Component) {
	  _inherits(register, _Component);

	  function register() {
	    _classCallCheck(this, register);

	    return _possibleConstructorReturn(this, (register.__proto__ || Object.getPrototypeOf(register)).apply(this, arguments));
	  }

	  _createClass(register, [{
	    key: 'changeUsername',
	    value: function changeUsername(event) {
	      this.props.fieldChange('username', event.target.value);
	    }
	  }, {
	    key: 'changePassword',
	    value: function changePassword(event) {
	      this.props.fieldChange('password', event.target.value);
	    }
	  }, {
	    key: 'changeReconfirmPassword',
	    value: function changeReconfirmPassword(event) {
	      this.props.fieldChange('reconfirmPassword', event.target.value);
	    }
	  }, {
	    key: 'changeName',
	    value: function changeName(event) {
	      this.props.fieldChange('name', event.target.value);
	    }
	  }, {
	    key: 'changeEmail',
	    value: function changeEmail(event) {
	      this.props.fieldChange('email', event.target.value);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      return _jsx('div', {}, void 0, _jsx('div', {
	        className: _auth2.default.title
	      }, void 0, 'Welcome back!'), _jsx('div', {
	        className: _auth2.default.subTitle
	      }, void 0, 'Login with your account below to get started'), _jsx('form', {
	        className: _auth2.default.form,
	        onSubmit: this.props.onSubmit
	      }, void 0, _jsx('label', {}, void 0, _ref, _jsx('input', {
	        type: 'text',
	        name: 'username',
	        placeholder: 'Username',
	        value: this.props.username,
	        onChange: this.changeUsername
	      })), _jsx('label', {}, void 0, _ref2, _jsx('input', {
	        type: 'text',
	        name: 'name',
	        placeholder: 'name',
	        value: this.props.name,
	        onChange: this.changeName
	      })), _jsx('label', {}, void 0, _ref3, _jsx('input', {
	        type: 'password',
	        name: 'password',
	        placeholder: 'Password',
	        value: this.props.password,
	        onChange: this.changePassword
	      })), _jsx('label', {}, void 0, _ref4, _jsx('input', {
	        type: 'password',
	        name: 'reconfirmPassword',
	        placeholder: 'reconfirmPassword',
	        value: this.props.reconfirmPassword,
	        onChange: this.changeReconfirmPassword
	      })), _jsx('label', {}, void 0, _ref5, _jsx('input', {
	        type: 'email',
	        name: 'email',
	        placeholder: 'email',
	        value: this.props.email,
	        onChange: this.changeEmail
	      })), _jsx(_button2.default, {
	        primary: true,
	        full: true,
	        big: true,
	        onClick: this.props.onSubmit,
	        style: { marginTop: 40 }
	      }, void 0, 'Let\'s get started'), _jsx('div', {
	        className: _auth2.default.error
	      }, void 0, this.props.error && this.props.error || ' '), _ref6));
	    }
	  }]);

	  return register;
	}(_component2.default), _class2.propTypes = {
	  onSubmit: _react.PropTypes.func.isRequired,
	  fieldChange: _react.PropTypes.func.isRequired,
	  username: _react.PropTypes.string.isRequired,
	  password: _react.PropTypes.string.isRequired,
	  name: _react.PropTypes.string.isRequired,
	  reconfirmPassword: _react.PropTypes.string.isRequired,
	  email: _react.PropTypes.string.isRequired,
	  error: _react.PropTypes.string
	}, _temp), (_applyDecoratedDescriptor(_class.prototype, 'changeUsername', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeUsername'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changePassword', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changePassword'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeReconfirmPassword', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeReconfirmPassword'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeName', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeName'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'changeEmail', [_bind2.default], Object.getOwnPropertyDescriptor(_class.prototype, 'changeEmail'), _class.prototype)), _class);
	exports.default = register;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = undefined;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _class, _temp;

	var _superagent = __webpack_require__(14);

	var _superagent2 = _interopRequireDefault(_superagent);

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _component = __webpack_require__(2);

	var _component2 = _interopRequireDefault(_component);

	var _register = __webpack_require__(32);

	var _register2 = _interopRequireDefault(_register);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var registerContainer = (_temp = _class = function (_Component) {
	    _inherits(registerContainer, _Component);

	    function registerContainer() {
	        _classCallCheck(this, registerContainer);

	        return _possibleConstructorReturn(this, (registerContainer.__proto__ || Object.getPrototypeOf(registerContainer)).apply(this, arguments));
	    }

	    _createClass(registerContainer, [{
	        key: 'getInitState',
	        value: function getInitState() {
	            return {
	                username: '',
	                password: '',
	                reconfirmPassword: '',
	                name: '',
	                email: ''
	            };
	        }
	    }, {
	        key: 'onSubmit',
	        value: function onSubmit(event) {
	            var _this2 = this;

	            event.preventDefault();
	            var _state = this.state,
	                username = _state.username,
	                password = _state.password,
	                reconfirmPassword = _state.reconfirmPassword,
	                name = _state.name,
	                email = _state.email;


	            _superagent2.default.post('/web/register').set('Content-Type', 'application/json').set('Accept', 'application/json').send({ username: username, password: password, reconfirmPassword: reconfirmPassword, name: name, email: email }).end(function (error, res) {
	                if (error) {
	                    _this2.setState({
	                        error: JSON.stringify(res.body.message)

	                    });
	                } else {
	                    window.location.href = '/web/login';
	                }
	            });
	        }
	    }, {
	        key: 'fieldChange',
	        value: function fieldChange(id, value) {
	            this.setState(_defineProperty({}, id, value));
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            return _react2.default.createElement(_register2.default, _extends({
	                ref: 'register'
	            }, this.props, this.state, {
	                onSubmit: this.onSubmit.bind(this),
	                fieldChange: this.fieldChange.bind(this)
	            }));
	        }
	    }]);

	    return registerContainer;
	}(_component2.default), _class.propTypes = {
	    history: _react.PropTypes.object.isRequired
	}, _temp);
	exports.default = registerContainer;

/***/ },
/* 34 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"button":"_1sdtn","full":"_1QL8g","primary":"_2A6Gk","alert":"_1FLr3","big":"_3FLN3","thin":"_3qeUg","bordered":"_2AYUU","grey":"_2mP_f","noBackground":"lmrM7","small":"_1QgA0","smallFont":"_3aUjE","disabled":"_1rcUB"};

/***/ },
/* 35 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"logo":"_1qiHH","version":"LmtCV"};

/***/ },
/* 36 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"content":"_3YTiN"};

/***/ },
/* 37 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 38 */
37,
/* 39 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 40 */
/***/ function(module, exports) {

	module.exports = require("body-parser");

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 42 */
/***/ function(module, exports) {

	module.exports = require("connect-mongo");

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = require("express-session");

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = require("history");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("lodash/forEach");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("lodash/padStart");

/***/ },
/* 47 */
/***/ function(module, exports) {

	module.exports = require("morgan");

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = require("passport-local-mongoose");

/***/ },
/* 49 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("rc");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("react-redux");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("react-router");

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = require("redux-combine-actions");

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("redux-router/server");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = require("redux-thunk");

/***/ },
/* 57 */
/***/ function(module, exports) {

	module.exports = require("serialize-javascript");

/***/ },
/* 58 */
/***/ function(module, exports) {

	module.exports = require("winston");

/***/ }
/******/ ])));