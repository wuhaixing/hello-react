(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProductTable = require('./ProductTable');

var _ProductTable2 = _interopRequireDefault(_ProductTable);

var _SearchBar = require('./SearchBar');

var _SearchBar2 = _interopRequireDefault(_SearchBar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FilterableProductTable = function (_React$Component) {
  _inherits(FilterableProductTable, _React$Component);

  function FilterableProductTable(props) {
    _classCallCheck(this, FilterableProductTable);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(FilterableProductTable).call(this, props));

    _this.state = {
      filterText: '',
      inStockOnly: false
    };
    _this.handleUserInput = _this.handleUserInput.bind(_this);
    return _this;
  }

  _createClass(FilterableProductTable, [{
    key: 'handleUserInput',
    value: function handleUserInput(filterText, inStockOnly) {
      this.setState({
        filterText: filterText,
        inStockOnly: inStockOnly
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_SearchBar2.default, { filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          onUserInput: this.handleUserInput }),
        _react2.default.createElement(_ProductTable2.default, { filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          products: this.props.products })
      );
    }
  }]);

  return FilterableProductTable;
}(_react2.default.Component);

exports.default = FilterableProductTable;

},{"./ProductTable":5,"./SearchBar":6,"react":"react"}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hello = function (_React$Component) {
	_inherits(Hello, _React$Component);

	function Hello(props) {
		_classCallCheck(this, Hello);

		var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Hello).call(this, props));

		_this.clickHandler = _this.clickHandler.bind(_this);
		_this.handleChange = _this.handleChange.bind(_this);
		_this.state = { value: '' };
		return _this;
	}

	_createClass(Hello, [{
		key: 'clickHandler',
		value: function clickHandler(event) {
			// console.log(event); // => nullified object.
			// console.log(event.type); // => "click"
			// var eventType = event.type; // => "click"

			// setTimeout(function() {
			//   console.log(event.type); // => null
			//   console.log(eventType); // => "click"
			// }, 0);

			// this.setState({clickEvent: event}); // Won't work. this.state.clickEvent will only contain null values.
			// this.setState({eventType: event.type});
			if (this.props.onButtonClick) {
				if (this._nameInput) {
					this.props.onButtonClick(this._nameInput.value);
				} else {
					this.props.onButtonClick();
				}
			}
		}
	}, {
		key: 'handleChange',
		value: function handleChange(event) {
			this.state.value = event.target.value;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			var date = this.props.date;

			return _react2.default.createElement(
				'div',
				{ className: 'hello' },
				_react2.default.createElement(
					'p',
					null,
					'Hello, ',
					_react2.default.createElement('input', { type: 'text', placeholder: 'Your name here',
						value: this.state.value,
						ref: function ref(_ref) {
							return _this2._nameInput = _ref;
						},
						onChange: this.handleChange }),
					'!'
				),
				_react2.default.createElement(
					'p',
					null,
					(0, _moment2.default)(date).format('YYYY年MM月DD日 HH:mm:ss')
				),
				_react2.default.createElement(
					'button',
					{ onClick: this.clickHandler },
					'Click!'
				)
			);
		}
	}]);

	return Hello;
}(_react2.default.Component);

exports.default = Hello;

},{"moment":"moment","react":"react"}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCategoryRow = function (_React$Component) {
  _inherits(ProductCategoryRow, _React$Component);

  function ProductCategoryRow() {
    _classCallCheck(this, ProductCategoryRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductCategoryRow).apply(this, arguments));
  }

  _createClass(ProductCategoryRow, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "tr",
        null,
        _react2.default.createElement(
          "th",
          { colSpan: "2" },
          this.props.category
        )
      );
    }
  }]);

  return ProductCategoryRow;
}(_react2.default.Component);

exports.default = ProductCategoryRow;

},{"react":"react"}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductRow = function (_React$Component) {
  _inherits(ProductRow, _React$Component);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductRow).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: 'render',
    value: function render() {
      var name = this.props.product.stocked ? this.props.product.name : _react2.default.createElement(
        'span',
        { style: { color: 'red' } },
        this.props.product.name
      );
      return _react2.default.createElement(
        'tr',
        null,
        _react2.default.createElement(
          'td',
          null,
          name
        ),
        _react2.default.createElement(
          'td',
          null,
          this.props.product.price
        )
      );
    }
  }]);

  return ProductRow;
}(_react2.default.Component);

exports.default = ProductRow;

},{"react":"react"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ProductCategoryRow = require('./ProductCategoryRow');

var _ProductCategoryRow2 = _interopRequireDefault(_ProductCategoryRow);

var _ProductRow = require('./ProductRow');

var _ProductRow2 = _interopRequireDefault(_ProductRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductTable = function (_React$Component) {
  _inherits(ProductTable, _React$Component);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ProductTable).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rows = [];
      var lastCategory = null;
      this.props.products.forEach(function (product) {
        if (product.name.indexOf(_this2.props.filterText) === -1 || !product.stocked && _this2.props.inStockOnly) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(_react2.default.createElement(_ProductCategoryRow2.default, { category: product.category, key: product.category }));
        }
        rows.push(_react2.default.createElement(_ProductRow2.default, { product: product, key: product.name }));
        lastCategory = product.category;
      });

      return _react2.default.createElement(
        'table',
        null,
        _react2.default.createElement(
          'thead',
          null,
          _react2.default.createElement(
            'tr',
            null,
            _react2.default.createElement(
              'th',
              null,
              'Name'
            ),
            _react2.default.createElement(
              'th',
              null,
              'Price'
            )
          )
        ),
        _react2.default.createElement(
          'tbody',
          null,
          rows
        )
      );
    }
  }]);

  return ProductTable;
}(_react2.default.Component);

exports.default = ProductTable;

},{"./ProductCategoryRow":3,"./ProductRow":4,"react":"react"}],6:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchBar = function (_React$Component) {
  _inherits(SearchBar, _React$Component);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SearchBar).call(this, props));

    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(SearchBar, [{
    key: "handleChange",
    value: function handleChange() {
      this.props.onUserInput(this.refs.filterTextInput.value, this.refs.inStockOnlyInput.checked);
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "form",
        null,
        _react2.default.createElement("input", { type: "text", placeholder: "Search...",
          value: this.props.filterText,
          ref: "filterTextInput",
          onChange: this.handleChange }),
        _react2.default.createElement(
          "p",
          null,
          _react2.default.createElement("input", { type: "checkbox", checked: this.props.inStockOnly,
            ref: "inStockOnlyInput",
            onChange: this.handleChange }),
          ' ',
          "Only show products in stock"
        )
      );
    }
  }]);

  return SearchBar;
}(_react2.default.Component);

exports.default = SearchBar;

},{"react":"react"}],7:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Hello = require('./components/Hello');

var _Hello2 = _interopRequireDefault(_Hello);

var _FilterableProductTable = require('./components/FilterableProductTable');

var _FilterableProductTable2 = _interopRequireDefault(_FilterableProductTable);

var _reactDom = require('react-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

(0, _reactDom.render)(_react2.default.createElement(_FilterableProductTable2.default, { products: PRODUCTS }), document.getElementById('app'));
// setInterval( () => {
// 	render(<Hello date = {new Date()}/>,document.getElementById('app'));
// },500)

},{"./components/FilterableProductTable":1,"./components/Hello":2,"react":"react","react-dom":"react-dom"}]},{},[7]);
