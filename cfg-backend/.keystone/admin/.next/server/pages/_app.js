(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \*******************************************************************/
/***/ ((module) => {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/extends.js":
/*!************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/extends.js ***!
  \************************************************************/
/***/ ((module) => {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports.default = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectSpread2.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/objectSpread2.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(/*! ./defineProperty.js */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);

    if (enumerableOnly) {
      symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
    }

    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

module.exports = _objectSpread2;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var objectWithoutPropertiesLoose = __webpack_require__(/*! ./objectWithoutPropertiesLoose.js */ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js");

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/objectWithoutPropertiesLoose.js ***!
  \*********************************************************************************/
/***/ ((module) => {

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

module.exports = _objectWithoutPropertiesLoose;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!****************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js").default;

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js").default;

var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "../../node_modules/@babel/runtime/helpers/toPrimitive.js");

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!***********************************************************!*\
  !*** ../../node_modules/@babel/runtime/helpers/typeof.js ***!
  \***********************************************************/
/***/ ((module) => {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };

    module.exports.default = module.exports, module.exports.__esModule = true;
  }

  return _typeof(obj);
}

module.exports = _typeof;
module.exports.default = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.dev.js":
/*!*********************************************************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.dev.js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var CellContainer = __webpack_require__(/*! ../../../../dist/CellContainer-453254b5.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js");
var CellLink = __webpack_require__(/*! ../../../../dist/CellLink-509fb166.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
__webpack_require__(/*! react */ "react");
__webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
__webpack_require__(/*! @keystone-ui/icons/icons/AlertTriangleIcon */ "@keystone-ui/icons/icons/AlertTriangleIcon");
__webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
__webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
__webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
__webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
__webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
__webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
__webpack_require__(/*! @emotion/hash */ "@emotion/hash");
__webpack_require__(/*! ../../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! ../../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
__webpack_require__(/*! @apollo/client */ "@apollo/client");
__webpack_require__(/*! ../../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
__webpack_require__(/*! next/router */ "next/router");
__webpack_require__(/*! @keystone-ui/popover */ "@keystone-ui/popover");
__webpack_require__(/*! @keystone-ui/icons/icons/MoreHorizontalIcon */ "@keystone-ui/icons/icons/MoreHorizontalIcon");
__webpack_require__(/*! @keystone-ui/icons/icons/ChevronRightIcon */ "@keystone-ui/icons/icons/ChevronRightIcon");
__webpack_require__(/*! ../../../../dist/SignoutButton-acdb1554.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js");
__webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
__webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
__webpack_require__(/*! ../../../../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

/** @jsxRuntime classic */
const Field = () => null;
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, value) : core.jsx(CellContainer.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    idFieldKind: config.fieldMeta.kind,
    defaultValue: undefined,
    deserialize: () => {},
    serialize: () => ({}),
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        if (type === 'not') {
          return {
            [config.path]: {
              not: {
                equals: value
              }
            }
          };
        }

        const valueWithoutWhitespace = value.replace(/\s/g, '');
        const key = type === 'is' ? 'equals' : type === 'not_in' ? 'notIn' : type;
        return {
          [config.path]: {
            [key]: ['in', 'not_in'].includes(type) ? valueWithoutWhitespace.split(',') : valueWithoutWhitespace
          }
        };
      },

      Label({
        label,
        value,
        type
      }) {
        let renderedValue = value.replace(/\s/g, '');

        if (['in', 'not_in'].includes(type)) {
          renderedValue = value.split(',').join(', ');
        }

        return `${label.toLowerCase()}: ${renderedValue}`;
      },

      types: {
        is: {
          label: 'Is exactly',
          initialValue: ''
        },
        not: {
          label: 'Is not exactly',
          initialValue: ''
        },
        gt: {
          label: 'Is greater than',
          initialValue: ''
        },
        lt: {
          label: 'Is less than',
          initialValue: ''
        },
        gte: {
          label: 'Is greater than or equal to',
          initialValue: ''
        },
        lte: {
          label: 'Is less than or equal to',
          initialValue: ''
        },
        in: {
          label: 'Is one of',
          initialValue: ''
        },
        not_in: {
          label: 'Is not one of',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.js":
/*!*****************************************************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.js ***!
  \*****************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/admin-ui/context/dist/keystone.cjs.dev.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/admin-ui/context/dist/keystone.cjs.dev.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var React = __webpack_require__(/*! react */ "react");
var core$1 = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var apolloUploadClient = __webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var hashString = __webpack_require__(/*! @emotion/hash */ "@emotion/hash");
var core = __webpack_require__(/*! ../../../dist/core-c8ecce23.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/core-c8ecce23.cjs.dev.js");
__webpack_require__(/*! ../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! ../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");
var adminMetaGraphql = __webpack_require__(/*! ../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
var dataGetter = __webpack_require__(/*! ../../../dist/dataGetter-9fbe2f8e.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/dataGetter-9fbe2f8e.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);
var hashString__default = /*#__PURE__*/_interopDefault(hashString);

const expectedExports = new Set(['Cell', 'Field', 'controller', 'CardValue']);
const adminMetaLocalStorageKey = 'keystone.adminMeta';
let _mustRenderServerResult = true;

function useMustRenderServerResult() {
  let [, forceUpdate] = React.useState(0);
  React.useEffect(() => {
    _mustRenderServerResult = false;
    forceUpdate(1);
  }, []);

  if (typeof window === 'undefined') {
    return true;
  }

  return _mustRenderServerResult;
}

function useAdminMeta(adminMetaHash, fieldViews) {
  const adminMetaFromLocalStorage = React.useMemo(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const item = localStorage.getItem(adminMetaLocalStorageKey);

    if (item === null) {
      return;
    }

    try {
      let parsed = JSON.parse(item);

      if (parsed.hash === adminMetaHash) {
        return parsed.meta;
      }
    } catch (err) {
      return;
    }
  }, [adminMetaHash]); // it seems like Apollo doesn't skip the first fetch when using skip: true so we're using useLazyQuery instead

  const [fetchStaticAdminMeta, {
    data,
    error,
    called
  }] = client.useLazyQuery(adminMetaGraphql.staticAdminMetaQuery, {
    fetchPolicy: 'network-only'
  });
  let shouldFetchAdminMeta = adminMetaFromLocalStorage === undefined && !called;
  React.useEffect(() => {
    if (shouldFetchAdminMeta) {
      fetchStaticAdminMeta();
    }
  }, [shouldFetchAdminMeta, fetchStaticAdminMeta]);
  const runtimeAdminMeta = React.useMemo(() => {
    if ((!data || error) && !adminMetaFromLocalStorage) {
      return undefined;
    }

    const adminMeta = adminMetaFromLocalStorage ? adminMetaFromLocalStorage : data.keystone.adminMeta;
    const runtimeAdminMeta = {
      enableSessionItem: adminMeta.enableSessionItem,
      enableSignout: adminMeta.enableSignout,
      lists: {}
    };
    adminMeta.lists.forEach(list => {
      runtimeAdminMeta.lists[list.key] = _objectSpread(_objectSpread({}, list), {}, {
        gqlNames: core.getGqlNames({
          listKey: list.key,
          pluralGraphQLName: list.listQueryName
        }),
        fields: {}
      });
      list.fields.forEach(field => {
        var _field$itemView$field, _field$itemView;

        expectedExports.forEach(exportName => {
          if (fieldViews[field.viewsIndex][exportName] === undefined) {
            throw new Error(`The view for the field at ${list.key}.${field.path} is missing the ${exportName} export`);
          }
        });
        Object.keys(fieldViews[field.viewsIndex]).forEach(exportName => {
          if (!expectedExports.has(exportName) && exportName !== 'allowedExportsOnCustomViews') {
            throw new Error(`Unexpected export named ${exportName} from the view from the field at ${list.key}.${field.path}`);
          }
        });

        const views = _objectSpread({}, fieldViews[field.viewsIndex]);

        const customViews = {};

        if (field.customViewsIndex !== null) {
          const customViewsSource = fieldViews[field.customViewsIndex];
          const allowedExportsOnCustomViews = new Set(views.allowedExportsOnCustomViews);
          Object.keys(customViewsSource).forEach(exportName => {
            if (allowedExportsOnCustomViews.has(exportName)) {
              customViews[exportName] = customViewsSource[exportName];
            } else if (expectedExports.has(exportName)) {
              views[exportName] = customViewsSource[exportName];
            } else {
              throw new Error(`Unexpected export named ${exportName} from the custom view from field at ${list.key}.${field.path}`);
            }
          });
        }

        runtimeAdminMeta.lists[list.key].fields[field.path] = _objectSpread(_objectSpread({}, field), {}, {
          itemView: {
            fieldMode: (_field$itemView$field = (_field$itemView = field.itemView) === null || _field$itemView === void 0 ? void 0 : _field$itemView.fieldMode) !== null && _field$itemView$field !== void 0 ? _field$itemView$field : null
          },
          views,
          controller: fieldViews[field.viewsIndex].controller({
            listKey: list.key,
            fieldMeta: field.fieldMeta,
            label: field.label,
            path: field.path,
            customViews
          })
        });
      });
    });

    if (typeof window !== 'undefined' && !adminMetaFromLocalStorage) {
      localStorage.setItem(adminMetaLocalStorageKey, JSON.stringify({
        hash: hashString__default["default"](JSON.stringify(adminMeta)),
        meta: adminMeta
      }));
    }

    return runtimeAdminMeta;
  }, [data, error, adminMetaFromLocalStorage, fieldViews]);
  const mustRenderServerResult = useMustRenderServerResult();

  if (mustRenderServerResult) {
    return {
      state: 'loading'
    };
  }

  if (runtimeAdminMeta) {
    return {
      state: 'loaded',
      value: runtimeAdminMeta
    };
  }

  if (error) {
    return {
      state: 'error',
      error,
      refetch: () => {
        fetchStaticAdminMeta();
      }
    };
  }

  return {
    state: 'loading'
  };
}

function useLazyMetadata(query) {
  let result = client.useQuery(query, {
    errorPolicy: 'all',
    fetchPolicy: 'network-only'
  });
  return React.useMemo(() => {
    var _result$error, _result$error$network, _result$error2, _result$error$network2, _result$error3, _result$error$network3, _result$error4;

    let refetch = () => {
      result.refetch();
    };

    let dataGetter$1 = dataGetter.makeDataGetter(result.data, (_result$error = result.error) === null || _result$error === void 0 ? void 0 : _result$error.graphQLErrors);
    const authenticatedItemGetter = dataGetter$1.get('authenticatedItem');
    const keystoneMetaGetter = dataGetter$1.get('keystone');
    return {
      refetch,
      authenticatedItem: getAuthenticatedItem(result, authenticatedItemGetter.errors || ((_result$error$network = (_result$error2 = result.error) === null || _result$error2 === void 0 ? void 0 : _result$error2.networkError) !== null && _result$error$network !== void 0 ? _result$error$network : undefined)),
      visibleLists: getVisibleLists(result, keystoneMetaGetter.errors || ((_result$error$network2 = (_result$error3 = result.error) === null || _result$error3 === void 0 ? void 0 : _result$error3.networkError) !== null && _result$error$network2 !== void 0 ? _result$error$network2 : undefined)),
      createViewFieldModes: getCreateViewFieldModes(result, keystoneMetaGetter.errors || ((_result$error$network3 = (_result$error4 = result.error) === null || _result$error4 === void 0 ? void 0 : _result$error4.networkError) !== null && _result$error$network3 !== void 0 ? _result$error$network3 : undefined))
    };
  }, [result]);
}

function getCreateViewFieldModes({
  data
}, error) {
  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    const lists = {};
    data.keystone.adminMeta.lists.forEach(list => {
      lists[list.key] = {};
      list.fields.forEach(field => {
        lists[list.key][field.path] = field.createView.fieldMode;
      });
    });
    return {
      state: 'loaded',
      lists
    };
  }

  return {
    state: 'loading'
  };
}

function getVisibleLists({
  data
}, error) {
  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    const lists = new Set();
    data.keystone.adminMeta.lists.forEach(list => {
      if (!list.isHidden) {
        lists.add(list.key);
      }
    });
    return {
      state: 'loaded',
      lists
    };
  }

  return {
    state: 'loading'
  };
}

function getAuthenticatedItem({
  data
}, error) {
  if (error) {
    return {
      state: 'error',
      error
    };
  }

  if (data) {
    if (!data.authenticatedItem || // this is for the case where there is a new type
    // in the AuthenticatedItem union and the query
    // that the admin ui has doesn't get the id
    // (yes, undefined is very specific and very intentional, it should not be checking for null)
    data.authenticatedItem.id === undefined) {
      return {
        state: 'unauthenticated'
      };
    }

    const labelField = Object.keys(data.authenticatedItem).filter(x => x !== '__typename' && x !== 'id')[0];
    return {
      state: 'authenticated',
      id: data.authenticatedItem.id,
      label: data.authenticatedItem[labelField] || data.authenticatedItem.id,
      listKey: data.authenticatedItem.__typename
    };
  }

  return {
    state: 'loading'
  };
}

const KeystoneContext = /*#__PURE__*/React.createContext(undefined);

function InternalKeystoneProvider({
  adminConfig,
  fieldViews,
  adminMetaHash,
  children,
  lazyMetadataQuery,
  apiPath
}) {
  const adminMeta = useAdminMeta(adminMetaHash, fieldViews);
  const {
    authenticatedItem,
    visibleLists,
    createViewFieldModes,
    refetch
  } = useLazyMetadata(lazyMetadataQuery);

  const reinitContext = () => {
    var _adminMeta$refetch;

    adminMeta === null || adminMeta === void 0 ? void 0 : (_adminMeta$refetch = adminMeta.refetch) === null || _adminMeta$refetch === void 0 ? void 0 : _adminMeta$refetch.call(adminMeta);
    refetch();
  };

  if (adminMeta.state === 'loading') {
    return /*#__PURE__*/React__default["default"].createElement(core$1.Center, {
      fillView: true
    }, /*#__PURE__*/React__default["default"].createElement(loading.LoadingDots, {
      label: "Loading Admin Metadata",
      size: "large"
    }));
  }

  return /*#__PURE__*/React__default["default"].createElement(toast.ToastProvider, null, /*#__PURE__*/React__default["default"].createElement(modals.DrawerProvider, null, /*#__PURE__*/React__default["default"].createElement(KeystoneContext.Provider, {
    value: {
      adminConfig,
      adminMeta,
      fieldViews,
      authenticatedItem,
      reinitContext,
      visibleLists,
      createViewFieldModes,
      apiPath
    }
  }, children)));
}

const KeystoneProvider = props => {
  const apolloClient = React.useMemo(() => new client.ApolloClient({
    cache: new client.InMemoryCache(),
    link: apolloUploadClient.createUploadLink({
      uri: props.apiPath
    })
  }), [props.apiPath]);
  return /*#__PURE__*/React__default["default"].createElement(client.ApolloProvider, {
    client: apolloClient
  }, /*#__PURE__*/React__default["default"].createElement(InternalKeystoneProvider, props));
};
const useKeystone = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useKeystone must be called inside a KeystoneProvider component');
  }

  if (value.adminMeta.state === 'error') {
    // If we get an "Access denied" error, it probably means the user doesn't have access to the
    // adminMeta but has navigated (probably client-side) to a page that requires it. We reload
    // the page so the server-side access control can run which should bounce them to the right
    // place (or display the no-access page)
    if (value.adminMeta.error.message === 'Access denied') {
      window.location.reload();
    }

    throw new Error('An error occurred when loading Admin Metadata');
  }

  return {
    adminConfig: value.adminConfig,
    adminMeta: value.adminMeta.value,
    authenticatedItem: value.authenticatedItem,
    visibleLists: value.visibleLists,
    createViewFieldModes: value.createViewFieldModes,
    apiPath: value.apiPath
  };
};
const useReinitContext = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useReinitContext must be called inside a KeystoneProvider component');
  }

  return value.reinitContext;
};
const useRawKeystone = () => {
  const value = React.useContext(KeystoneContext);

  if (!value) {
    throw new Error('useRawKeystone must be called inside a KeystoneProvider component');
  }

  return value;
};
const useList = key => {
  const {
    adminMeta: {
      lists
    }
  } = useKeystone();

  if (lists[key]) {
    return lists[key];
  } else {
    throw new Error(`Invalid list key provided to useList: ${key}`);
  }
};

exports.KeystoneProvider = KeystoneProvider;
exports.useKeystone = useKeystone;
exports.useList = useList;
exports.useRawKeystone = useRawKeystone;
exports.useReinitContext = useReinitContext;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js":
/*!*******************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var router = __webpack_require__(/*! next/router */ "next/router");
var Link$1 = __webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
var React = __webpack_require__(/*! react */ "react");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var Link__default = /*#__PURE__*/_interopDefault(Link$1);
var React__default = /*#__PURE__*/_interopDefault(React);

const _excluded = ["href", "as", "replace", "scroll", "shallow", "prefetch"];
const Link = _ref => {
  let {
    href,
    as,
    replace,
    scroll,
    shallow,
    prefetch
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React__default["default"].createElement(Link__default["default"], {
    href: href,
    as: as,
    replace: replace,
    scroll: scroll,
    shallow: shallow,
    prefetch: prefetch
  }, /*#__PURE__*/React__default["default"].createElement("a", props));
};

Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () { return router.Router; }
}));
Object.defineProperty(exports, "createRouter", ({
  enumerable: true,
  get: function () { return router.createRouter; }
}));
Object.defineProperty(exports, "makePublicRouterInstance", ({
  enumerable: true,
  get: function () { return router.makePublicRouterInstance; }
}));
Object.defineProperty(exports, "useRouter", ({
  enumerable: true,
  get: function () { return router.useRouter; }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () { return router.withRouter; }
}));
exports.Link = Link;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");

const _excluded = ["children"];
/**
 * This is the component you should use when you want the standard padding around a cell value
 */

const CellContainer = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    spacing
  } = core.useTheme();
  return core.jsx("div", _extends({
    css: {
      padding: spacing.small
    }
  }, props), children);
};

exports.CellContainer = CellContainer;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js":
/*!************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var adminUi_router_dist_keystone = __webpack_require__(/*! ../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");

/**
 * This is the component you should use when linking a Cell to an item (i.e when the Cell supports
 * the linkTo prop)
 */

const CellLink = props => {
  const {
    colors,
    spacing
  } = core.useTheme();
  return core.jsx(adminUi_router_dist_keystone.Link, _extends({
    css: {
      color: colors.foreground,
      display: 'block',
      padding: spacing.small,
      textDecoration: 'none',
      ':hover': {
        textDecoration: 'underline'
      }
    }
  }, props));
};

exports.CellLink = CellLink;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/CreateItemDrawer-b4b0dd16.cjs.dev.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/CreateItemDrawer-b4b0dd16.cjs.dev.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(/*! react */ "react");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");
var adminUi_context_dist_keystone = __webpack_require__(/*! ../admin-ui/context/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/context/dist/keystone.cjs.dev.js");
var Fields = __webpack_require__(/*! ./Fields-4afb38f0.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/Fields-4afb38f0.cjs.dev.js");
var GraphQLErrorNotice = __webpack_require__(/*! ./GraphQLErrorNotice-76ff96dd.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/GraphQLErrorNotice-76ff96dd.cjs.dev.js");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

/** @jsxRuntime classic */
function CreateItemDrawer({
  listKey,
  onClose,
  onCreate
}) {
  const {
    createViewFieldModes
  } = adminUi_context_dist_keystone.useKeystone();
  const list = adminUi_context_dist_keystone.useList(listKey);
  const toasts = toast.useToasts();
  const [createItem, {
    loading: loading$1,
    error
  }] = client.useMutation(client.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        id
        label: ${list.labelField}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(list.fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: list.fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = React.useMemo(() => {
    const invalidFields = new Set();
    Object.keys(value).forEach(fieldPath => {
      const val = value[fieldPath].value;
      const validateFn = list.fields[fieldPath].controller.validate;

      if (validateFn) {
        const result = validateFn(val);

        if (result === false) {
          invalidFields.add(fieldPath);
        }
      }
    });
    return invalidFields;
  }, [list, value]);
  const [forceValidation, setForceValidation] = React.useState(false);
  return core.jsx(modals.Drawer, {
    title: `Create ${list.singular}`,
    width: "wide",
    actions: {
      confirm: {
        label: `Create ${list.singular}`,
        loading: loading$1,
        action: () => {
          const newForceValidation = invalidFields.size !== 0;
          setForceValidation(newForceValidation);
          if (newForceValidation) return;
          const data = {};
          Object.keys(list.fields).forEach(fieldPath => {
            const {
              controller
            } = list.fields[fieldPath];
            const serialized = controller.serialize(value[fieldPath].value);

            if (!isDeepEqual__default["default"](serialized, controller.serialize(controller.defaultValue))) {
              Object.assign(data, serialized);
            }
          });
          createItem({
            variables: {
              data
            }
          }).then(({
            data
          }) => {
            const label = data.item.label || data.item.id;
            onCreate({
              id: data.item.id,
              label
            });
            toasts.addToast({
              title: label,
              message: 'Created Successfully',
              tone: 'positive'
            });
          }).catch(() => {});
        }
      },
      cancel: {
        label: 'Cancel',
        action: onClose
      }
    }
  }, createViewFieldModes.state === 'error' && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: createViewFieldModes.error instanceof Error ? createViewFieldModes.error : undefined,
    errors: createViewFieldModes.error instanceof Error ? undefined : createViewFieldModes.error
  }), createViewFieldModes.state === 'loading' && core.jsx(loading.LoadingDots, {
    label: "Loading create form"
  }), error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(core.Box, {
    paddingY: "xlarge"
  }, core.jsx(Fields.Fields, {
    fields: list.fields,
    fieldModes: createViewFieldModes.state === 'loaded' ? createViewFieldModes.lists[list.key] : null,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    value: value,
    onChange: React.useCallback(getNewValue => {
      setValue(oldValues => getNewValue(oldValues));
    }, [])
  })));
}

exports.CreateItemDrawer = CreateItemDrawer;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/Fields-4afb38f0.cjs.dev.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/Fields-4afb38f0.cjs.dev.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var React = __webpack_require__(/*! react */ "react");

const RenderField = /*#__PURE__*/React.memo(function RenderField({
  field,
  value,
  autoFocus,
  forceValidation,
  onChange
}) {
  return core.jsx(field.views.Field, {
    field: field.controller,
    onChange: React.useMemo(() => {
      if (onChange === undefined) return undefined;
      return value => {
        onChange(val => _objectSpread(_objectSpread({}, val), {}, {
          [field.controller.path]: {
            kind: 'value',
            value
          }
        }));
      };
    }, [onChange, field.controller.path]),
    value: value,
    autoFocus: autoFocus,
    forceValidation: forceValidation
  });
});
function Fields({
  fields,
  value,
  fieldModes,
  forceValidation,
  invalidFields,
  onChange
}) {
  const renderedFields = Object.keys(fields).filter(fieldPath => fieldModes === null || fieldModes[fieldPath] !== 'hidden').map((fieldPath, index) => {
    const field = fields[fieldPath];
    const val = value[fieldPath];
    const fieldMode = fieldModes === null ? 'edit' : fieldModes[fieldPath];

    if (val.kind === 'error') {
      return core.jsx("div", null, field.label, ": ", core.jsx("span", {
        css: {
          color: 'red'
        }
      }, val.errors[0].message));
    }

    return core.jsx(RenderField, {
      key: fieldPath,
      field: field,
      value: val.value,
      forceValidation: forceValidation && invalidFields.has(fieldPath),
      onChange: fieldMode === 'edit' ? onChange : undefined,
      autoFocus: index === 0
    });
  });
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, renderedFields, renderedFields.length === 0 && 'There are no fields that you can read or edit');
}

exports.Fields = Fields;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/GraphQLErrorNotice-76ff96dd.cjs.dev.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/GraphQLErrorNotice-76ff96dd.cjs.dev.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var notice = __webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
var React = __webpack_require__(/*! react */ "react");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

function GraphQLErrorNotice({
  errors,
  networkError
}) {
  if (networkError) {
    return /*#__PURE__*/React__default["default"].createElement(notice.Notice, {
      tone: "negative",
      marginBottom: "large"
    }, networkError.message);
  }

  if (errors !== null && errors !== void 0 && errors.length) {
    return /*#__PURE__*/React__default["default"].createElement(core.Stack, {
      gap: "small",
      marginBottom: "large"
    }, errors.map(err => /*#__PURE__*/React__default["default"].createElement(notice.Notice, {
      tone: "negative"
    }, err.message)));
  }

  return null;
}

exports.GraphQLErrorNotice = GraphQLErrorNotice;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js":
/*!*****************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js ***!
  \*****************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var React = __webpack_require__(/*! react */ "react");
var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");

/** @jsxRuntime classic */
const END_SESSION = client.gql`
  mutation EndSession {
    endSession
  }
`;

const SignoutButton = ({
  children
}) => {
  const [endSession, {
    loading,
    data
  }] = client.useMutation(END_SESSION);
  React.useEffect(() => {
    if (data !== null && data !== void 0 && data.endSession) {
      window.location.reload();
    }
  }, [data]);
  return core.jsx(button.Button, {
    size: "small",
    isLoading: loading,
    onClick: () => endSession()
  }, children || 'Sign out');
};

exports.SignoutButton = SignoutButton;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js":
/*!**********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");

const staticAdminMetaQuery = client.gql`
  query StaticAdminMeta {
    keystone {
      __typename
      adminMeta {
        __typename
        enableSignout
        enableSessionItem
        lists {
          __typename
          key
          itemQueryName
          listQueryName
          initialSort {
            __typename
            field
            direction
          }
          path
          label
          singular
          plural
          description
          initialColumns
          pageSize
          labelField
          fields {
            __typename
            path
            label
            fieldMeta
            viewsIndex
            customViewsIndex
            search
            itemView {
              fieldMode
            }
          }
        }
      }
    }
  }
`; // generated by https://graphql-code-generator.com with these options:
// generates:
//   types.ts:
//     plugins:
//       - typescript-operations:
//           namingConvention: keep
//       - typescript:
//           enumsAsTypes: true
//           nonOptionalTypename: true
//           namingConvention: keep
//           noExport: true
//           avoidOptionals: true
//           scalars:
//             JSON: JSONValue

exports.staticAdminMetaQuery = staticAdminMetaQuery;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/core-c8ecce23.cjs.dev.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/core-c8ecce23.cjs.dev.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


// TODO: don't duplicate this between here and packages/keystone/ListTypes/list.js
function getGqlNames({
  listKey,
  pluralGraphQLName
}) {
  const lowerPluralName = pluralGraphQLName.slice(0, 1).toLowerCase() + pluralGraphQLName.slice(1);
  const lowerSingularName = listKey.slice(0, 1).toLowerCase() + listKey.slice(1);
  return {
    outputTypeName: listKey,
    itemQueryName: lowerSingularName,
    listQueryName: lowerPluralName,
    listQueryCountName: `${lowerPluralName}Count`,
    listOrderName: `${listKey}OrderByInput`,
    deleteMutationName: `delete${listKey}`,
    updateMutationName: `update${listKey}`,
    createMutationName: `create${listKey}`,
    deleteManyMutationName: `delete${pluralGraphQLName}`,
    updateManyMutationName: `update${pluralGraphQLName}`,
    createManyMutationName: `create${pluralGraphQLName}`,
    whereInputName: `${listKey}WhereInput`,
    whereUniqueInputName: `${listKey}WhereUniqueInput`,
    updateInputName: `${listKey}UpdateInput`,
    createInputName: `${listKey}CreateInput`,
    updateManyInputName: `${listKey}UpdateArgs`,
    relateToManyForCreateInputName: `${listKey}RelateToManyForCreateInput`,
    relateToManyForUpdateInputName: `${listKey}RelateToManyForUpdateInput`,
    relateToOneForCreateInputName: `${listKey}RelateToOneForCreateInput`,
    relateToOneForUpdateInputName: `${listKey}RelateToOneForUpdateInput`
  };
}

exports.getGqlNames = getGqlNames;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/dataGetter-9fbe2f8e.cjs.dev.js":
/*!**************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/dataGetter-9fbe2f8e.cjs.dev.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


function dataGetterWithNoErrors(data, path) {
  return {
    data,
    path,

    get(field) {
      var _data$field;

      return dataGetterWithNoErrors((_data$field = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field !== void 0 ? _data$field : null, path.concat(field));
    }

  };
}

function dataGetterWithErrors(data, errors, path) {
  return {
    data,
    errors,
    path,

    get(field) {
      var _data$field2;

      const newPath = path.concat(field);
      const newItem = (_data$field2 = data === null || data === void 0 ? void 0 : data[field]) !== null && _data$field2 !== void 0 ? _data$field2 : null;
      let errorsForField = errors.filter(error => {
        if (error.path === undefined) {
          return true;
        }

        const errorPath = error.path;
        return newPath.every((value, index) => errorPath[index] === undefined || errorPath[index] === value);
      });

      if (errorsForField.length) {
        return dataGetterWithErrors(newItem, errors, newPath);
      }

      return dataGetterWithNoErrors(newItem, newPath);
    }

  };
}

function makeDataGetter(data, errors) {
  if (errors !== null && errors !== void 0 && errors.length) {
    return dataGetterWithErrors(data, errors, []);
  }

  return dataGetterWithNoErrors(data, []);
}

exports.makeDataGetter = makeDataGetter;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js":
/*!*******************************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var weakMemoize = __webpack_require__(/*! @emotion/weak-memoize */ "@emotion/weak-memoize");
var graphql = __webpack_require__(/*! graphql */ "graphql");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var weakMemoize__default = /*#__PURE__*/_interopDefault(weakMemoize);

function extractRootFields(selectedFields, selectionSet) {
  selectionSet.selections.forEach(selection => {
    if (selection.kind === 'Field') {
      selectedFields.add(selection.alias ? selection.alias.value : selection.name.value);
    }

    if (selection.kind === 'InlineFragment') {
      extractRootFields(selectedFields, selection.selectionSet);
    } // FragmentSpread will never happen for the use cases of getRootFieldsFromSelection

  });
}

const getRootGraphQLFieldsFromFieldController = weakMemoize__default["default"](controller => {
  const ast = graphql.parse(`fragment X on Y {
  id
  ${controller.graphqlSelection}
  }`);
  const selectedFields = new Set();
  const fragmentNode = ast.definitions[0];
  extractRootFields(selectedFields, fragmentNode.selectionSet);
  return [...selectedFields];
});

exports.getRootGraphQLFieldsFromFieldController = getRootGraphQLFieldsFromFieldController;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js":
/*!*********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var graphqlTsSchema = __webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
var graphqlTypeJson = __webpack_require__(/*! graphql-type-json */ "graphql-type-json");
var GraphQLUpload = __webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
var graphql = __webpack_require__(/*! graphql */ "graphql");
var Decimal$1 = __webpack_require__(/*! decimal.js */ "decimal.js");
var apiWithoutContext = __webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
var apiWithContext = __webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

function _interopNamespace(e) {
  if (e && e.__esModule) return e;
  var n = Object.create(null);
  if (e) {
    Object.keys(e).forEach(function (k) {
      if (k !== 'default') {
        var d = Object.getOwnPropertyDescriptor(e, k);
        Object.defineProperty(n, k, d.get ? d : {
          enumerable: true,
          get: function () { return e[k]; }
        });
      }
    });
  }
  n["default"] = e;
  return Object.freeze(n);
}

var graphqlTsSchema__namespace = /*#__PURE__*/_interopNamespace(graphqlTsSchema);
var GraphQLUpload__default = /*#__PURE__*/_interopDefault(GraphQLUpload);

const JSON = graphqlTsSchema__namespace.graphql.scalar(graphqlTypeJson.GraphQLJSON);
const Upload = graphqlTsSchema__namespace.graphql.scalar(GraphQLUpload__default["default"]); // - Decimal.js throws on invalid inputs
// - Decimal.js can represent +Infinity and -Infinity, these aren't values in Postgres' decimal,
//   NaN is but Prisma doesn't support it
//   .isFinite refers to +Infinity, -Infinity and NaN

const Decimal = graphqlTsSchema__namespace.graphql.scalar(new graphql.GraphQLScalarType({
  name: 'Decimal',

  serialize(value) {
    if (!Decimal$1.Decimal.isDecimal(value)) {
      throw new graphql.GraphQLError(`unexpected value provided to Decimal scalar: ${value}`);
    }

    if (value.scaleToPrint !== undefined) {
      return value.toFixed(value.scaleToPrint);
    }

    return value.toString();
  },

  parseLiteral(value) {
    if (value.kind !== 'StringValue') {
      throw new graphql.GraphQLError('Decimal only accepts values as strings');
    }

    let decimal = new Decimal$1.Decimal(value.value);

    if (!decimal.isFinite()) {
      throw new graphql.GraphQLError('Decimal values must be finite');
    }

    return decimal;
  },

  parseValue(value) {
    if (Decimal$1.Decimal.isDecimal(value)) {
      if (!value.isFinite()) {
        throw new graphql.GraphQLError('Decimal values must be finite');
      }

      return value;
    }

    if (typeof value !== 'string') {
      throw new graphql.GraphQLError('Decimal only accepts values as strings');
    }

    let decimal = new Decimal$1.Decimal(value);

    if (!decimal.isFinite()) {
      throw new graphql.GraphQLError('Decimal values must be finite');
    }

    return decimal;
  }

})); // from https://github.com/excitement-engineer/graphql-iso-date/blob/master/src/utils/validator.js#L121
// this is also what prisma uses https://github.com/prisma/prisma/blob/20b58fe65d581bcb43c0d5c28d4b89cabc2d99b2/packages/client/src/runtime/utils/common.ts#L126-L128

const RFC_3339_REGEX = /^(\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])T([01][0-9]|2[0-3]):([0-5][0-9]):([0-5][0-9]|60))(\.\d{1,})?(([Z])|([+|-]([01][0-9]|2[0-3]):[0-5][0-9]))$/;

function parseDate(input) {
  if (!RFC_3339_REGEX.test(input)) {
    throw new graphql.GraphQLError('DateTime scalars must be in the form of a full ISO 8601 date-time stirng');
  }

  const parsed = new Date(input);

  if (isNaN(parsed.valueOf())) {
    throw new graphql.GraphQLError('DateTime scalars must be in the form of a full ISO 8601 date-time stirng');
  }

  return parsed;
}

const DateTime = graphqlTsSchema__namespace.graphql.scalar(new graphql.GraphQLScalarType({
  name: 'DateTime',
  specifiedByUrl: 'https://datatracker.ietf.org/doc/html/rfc3339#section-5.6',

  serialize(value) {
    if (!(value instanceof Date) || isNaN(value.valueOf())) {
      throw new graphql.GraphQLError(`unexpected value provided to DateTime scalar: ${value}`);
    }

    return value.toISOString();
  },

  parseLiteral(value) {
    if (value.kind !== 'StringValue') {
      throw new graphql.GraphQLError('DateTime only accepts values as strings');
    }

    return parseDate(value.value);
  },

  parseValue(value) {
    if (value instanceof Date) {
      return value;
    }

    if (typeof value !== 'string') {
      throw new graphql.GraphQLError('DateTime only accepts values as strings');
    }

    return parseDate(value);
  }

}));

var graphqlBoundToKeystoneContext = /*#__PURE__*/Object.freeze({
  __proto__: null,
  JSON: JSON,
  Upload: Upload,
  Decimal: Decimal,
  DateTime: DateTime,
  Boolean: apiWithoutContext.Boolean,
  Float: apiWithoutContext.Float,
  ID: apiWithoutContext.ID,
  Int: apiWithoutContext.Int,
  String: apiWithoutContext.String,
  'enum': apiWithoutContext["enum"],
  enumValues: apiWithoutContext.enumValues,
  arg: apiWithoutContext.arg,
  inputObject: apiWithoutContext.inputObject,
  list: apiWithoutContext.list,
  nonNull: apiWithoutContext.nonNull,
  scalar: apiWithoutContext.scalar,
  bindGraphQLSchemaAPIToContext: graphqlTsSchema.bindGraphQLSchemaAPIToContext,
  field: apiWithContext.field,
  fields: apiWithContext.fields,
  'interface': apiWithContext["interface"],
  interfaceField: apiWithContext.interfaceField,
  object: apiWithContext.object,
  union: apiWithContext.union
});

exports.DateTime = DateTime;
exports.Decimal = Decimal;
exports.JSON = JSON;
exports.Upload = Upload;
exports.graphqlBoundToKeystoneContext = graphqlBoundToKeystoneContext;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var graphqlTsSchema = __webpack_require__(/*! ./graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
var apiWithoutContext = __webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");

const orderDirectionEnum = apiWithoutContext["enum"]({
  name: 'OrderDirection',
  values: apiWithoutContext.enumValues(['asc', 'desc'])
});
const QueryMode = apiWithoutContext["enum"]({
  name: 'QueryMode',
  values: apiWithoutContext.enumValues(['default', 'insensitive'])
});
// fieldType(dbField)(fieldInfo) => { ...fieldInfo, dbField };
function fieldType(dbField) {
  return function (graphQLInfo) {
    return _objectSpread(_objectSpread({}, graphQLInfo), {}, {
      dbField
    });
  };
}

// (even though, yes, having EnumFilter by defined as EnumNullableFilter<Enum>, would be the same type but names would show up differently in editors for example)

function enumFilters(enumType) {
  const optional = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}NullableFilter`,
    fields: () => ({
      equals: apiWithoutContext.arg({
        type: enumType
      }),
      in: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      notIn: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      not: apiWithoutContext.arg({
        type: optional
      })
    })
  });
  const required = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}Filter`,
    fields: () => ({
      equals: apiWithoutContext.arg({
        type: enumType
      }),
      in: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      notIn: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      not: apiWithoutContext.arg({
        type: optional
      })
    })
  });
  const many = apiWithoutContext.inputObject({
    name: `${enumType.graphQLType.name}NullableListFilter`,
    fields: () => ({
      // can be null
      equals: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      // can be null
      has: apiWithoutContext.arg({
        type: enumType
      }),
      hasEvery: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      hasSome: apiWithoutContext.arg({
        type: apiWithoutContext.list(apiWithoutContext.nonNull(enumType))
      }),
      isEmpty: apiWithoutContext.arg({
        type: enumType
      })
    })
  });
  return {
    optional,
    required,
    many
  };
}

// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
const StringNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'StringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    mode: apiWithoutContext.arg({
      type: QueryMode
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter$1
    })
  })
});
const NestedStringNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter$1
    })
  })
});
const StringFilter$1 = apiWithoutContext.inputObject({
  name: 'StringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    mode: apiWithoutContext.arg({
      type: QueryMode
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter$1
    })
  })
});
const NestedStringFilter$1 = apiWithoutContext.inputObject({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter$1
    })
  })
});
const StringNullableListFilter = apiWithoutContext.inputObject({
  name: 'StringNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const BoolNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'BooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: BoolNullableFilter$1
    })
  })
});
const BoolFilter$1 = apiWithoutContext.inputObject({
  name: 'BooleanFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    not: apiWithoutContext.arg({
      type: BoolFilter$1
    })
  })
});
const BoolNullableListFilter = apiWithoutContext.inputObject({
  name: 'BooleanNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Boolean))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const IntNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'IntNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: IntNullableFilter$1
    })
  })
});
const IntFilter$1 = apiWithoutContext.inputObject({
  name: 'IntFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    not: apiWithoutContext.arg({
      type: IntFilter$1
    })
  })
});
const IntNullableListFilter = apiWithoutContext.inputObject({
  name: 'IntNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const FloatNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'FloatNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: FloatNullableFilter$1
    })
  })
});
const FloatFilter$1 = apiWithoutContext.inputObject({
  name: 'FloatFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    not: apiWithoutContext.arg({
      type: FloatFilter$1
    })
  })
});
const FloatNullableListFilter = apiWithoutContext.inputObject({
  name: 'FloatNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const DateTimeNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DateTimeNullableFilter$1
    })
  })
});
const DateTimeFilter$1 = apiWithoutContext.inputObject({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    not: apiWithoutContext.arg({
      type: DateTimeFilter$1
    })
  })
});
const DateTimeNullableListFilter = apiWithoutContext.inputObject({
  name: 'DateTimeNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const DecimalNullableFilter$1 = apiWithoutContext.inputObject({
  name: 'DecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DecimalNullableFilter$1
    })
  })
});
const DecimalFilter$1 = apiWithoutContext.inputObject({
  name: 'DecimalFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    not: apiWithoutContext.arg({
      type: DecimalFilter$1
    })
  })
});
const DecimalNullableListFilter = apiWithoutContext.inputObject({
  name: 'DecimalNullableListFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    has: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    hasEvery: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    hasSome: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    isEmpty: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    })
  })
});
const String$1 = {
  optional: StringNullableFilter$1,
  required: StringFilter$1,
  many: StringNullableListFilter
};
const Boolean$1 = {
  optional: BoolNullableFilter$1,
  required: BoolFilter$1,
  many: BoolNullableListFilter
};
const Int$1 = {
  optional: IntNullableFilter$1,
  required: IntFilter$1,
  many: IntNullableListFilter
};
const Float$1 = {
  optional: FloatNullableFilter$1,
  required: FloatFilter$1,
  many: FloatNullableListFilter
};
const DateTime$1 = {
  optional: DateTimeNullableFilter$1,
  required: DateTimeFilter$1,
  many: DateTimeNullableListFilter
};
const Decimal$1 = {
  optional: DecimalNullableFilter$1,
  required: DecimalFilter$1,
  many: DecimalNullableListFilter
};

var postgresql = /*#__PURE__*/Object.freeze({
  __proto__: null,
  String: String$1,
  Boolean: Boolean$1,
  Int: Int$1,
  Float: Float$1,
  DateTime: DateTime$1,
  Decimal: Decimal$1,
  'enum': enumFilters
});

// Do not manually modify this file, it is automatically generated by the package at /prisma-utils in this repo.
const StringNullableFilter = apiWithoutContext.inputObject({
  name: 'StringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter
    })
  })
});
const NestedStringNullableFilter = apiWithoutContext.inputObject({
  name: 'NestedStringNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: NestedStringNullableFilter
    })
  })
});
const StringFilter = apiWithoutContext.inputObject({
  name: 'StringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter
    })
  })
});
const NestedStringFilter = apiWithoutContext.inputObject({
  name: 'NestedStringFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.String))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    contains: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    startsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    endsWith: apiWithoutContext.arg({
      type: apiWithoutContext.String
    }),
    not: apiWithoutContext.arg({
      type: NestedStringFilter
    })
  })
});
const BoolNullableFilter = apiWithoutContext.inputObject({
  name: 'BooleanNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: BoolNullableFilter
    })
  })
});
const BoolFilter = apiWithoutContext.inputObject({
  name: 'BooleanFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Boolean
    }),
    not: apiWithoutContext.arg({
      type: BoolFilter
    })
  })
});
const IntNullableFilter = apiWithoutContext.inputObject({
  name: 'IntNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: IntNullableFilter
    })
  })
});
const IntFilter = apiWithoutContext.inputObject({
  name: 'IntFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Int))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Int
    }),
    not: apiWithoutContext.arg({
      type: IntFilter
    })
  })
});
const FloatNullableFilter = apiWithoutContext.inputObject({
  name: 'FloatNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: FloatNullableFilter
    })
  })
});
const FloatFilter = apiWithoutContext.inputObject({
  name: 'FloatFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(apiWithoutContext.Float))
    }),
    lt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    lte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gt: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    gte: apiWithoutContext.arg({
      type: apiWithoutContext.Float
    }),
    not: apiWithoutContext.arg({
      type: FloatFilter
    })
  })
});
const DateTimeNullableFilter = apiWithoutContext.inputObject({
  name: 'DateTimeNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DateTimeNullableFilter
    })
  })
});
const DateTimeFilter = apiWithoutContext.inputObject({
  name: 'DateTimeFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.DateTime))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.DateTime
    }),
    not: apiWithoutContext.arg({
      type: DateTimeFilter
    })
  })
});
const DecimalNullableFilter = apiWithoutContext.inputObject({
  name: 'DecimalNullableFilter',
  fields: () => ({
    // can be null
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    // can be null
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    // can be null
    not: apiWithoutContext.arg({
      type: DecimalNullableFilter
    })
  })
});
const DecimalFilter = apiWithoutContext.inputObject({
  name: 'DecimalFilter',
  fields: () => ({
    equals: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    in: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    notIn: apiWithoutContext.arg({
      type: apiWithoutContext.list(apiWithoutContext.nonNull(graphqlTsSchema.Decimal))
    }),
    lt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    lte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gt: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    gte: apiWithoutContext.arg({
      type: graphqlTsSchema.Decimal
    }),
    not: apiWithoutContext.arg({
      type: DecimalFilter
    })
  })
});
const String = {
  optional: StringNullableFilter,
  required: StringFilter
};
const Boolean = {
  optional: BoolNullableFilter,
  required: BoolFilter
};
const Int = {
  optional: IntNullableFilter,
  required: IntFilter
};
const Float = {
  optional: FloatNullableFilter,
  required: FloatFilter
};
const DateTime = {
  optional: DateTimeNullableFilter,
  required: DateTimeFilter
};
const Decimal = {
  optional: DecimalNullableFilter,
  required: DecimalFilter
};

var sqlite = /*#__PURE__*/Object.freeze({
  __proto__: null,
  String: String,
  Boolean: Boolean,
  Int: Int,
  Float: Float,
  DateTime: DateTime,
  Decimal: Decimal,
  'enum': enumFilters
});

exports.QueryMode = QueryMode;
exports.fieldType = fieldType;
exports.orderDirectionEnum = orderDirectionEnum;
exports.postgresql = postgresql;
exports.sqlite = sqlite;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/useInvalidFields-162d1b9c.cjs.dev.js":
/*!********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/useInvalidFields-162d1b9c.cjs.dev.js ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(/*! react */ "react");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var getRootGraphQLFieldsFromFieldController = __webpack_require__(/*! ./getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function deserializeValue(fields, itemGetter) {
  const value = {};
  Object.keys(fields).forEach(fieldKey => {
    const field = fields[fieldKey];
    const itemForField = {};
    const errors = new Set();

    for (const graphqlField of getRootGraphQLFieldsFromFieldController.getRootGraphQLFieldsFromFieldController(field.controller)) {
      const fieldGetter = itemGetter.get(graphqlField);

      if (fieldGetter.errors) {
        fieldGetter.errors.forEach(error => {
          errors.add(error);
        });
      }

      itemForField[graphqlField] = fieldGetter.data;
    }

    if (errors.size) {
      value[fieldKey] = {
        kind: 'error',
        errors: [...errors]
      };
    } else {
      value[fieldKey] = {
        kind: 'value',
        value: field.controller.deserialize(itemForField)
      };
    }
  });
  return value;
}
function serializeValueToObjByFieldKey(fields, value) {
  const obj = {};
  Object.keys(fields).map(fieldKey => {
    const val = value[fieldKey];

    if (val.kind === 'value') {
      obj[fieldKey] = fields[fieldKey].controller.serialize(val.value);
    }
  });
  return obj;
}

function useChangedFieldsAndDataForUpdate(fields, itemGetter, value) {
  const serializedValuesFromItem = React.useMemo(() => {
    const value = deserializeValue(fields, itemGetter);
    return serializeValueToObjByFieldKey(fields, value);
  }, [fields, itemGetter]);
  const serializedFieldValues = React.useMemo(() => {
    return serializeValueToObjByFieldKey(fields, value);
  }, [value, fields]);
  return React.useMemo(() => {
    let changedFields = new Set();
    Object.keys(serializedFieldValues).forEach(fieldKey => {
      let isEqual = isDeepEqual__default["default"](serializedFieldValues[fieldKey], serializedValuesFromItem[fieldKey]);

      if (!isEqual) {
        changedFields.add(fieldKey);
      }
    });
    const dataForUpdate = {};
    changedFields.forEach(fieldKey => {
      Object.assign(dataForUpdate, serializedFieldValues[fieldKey]);
    });
    return {
      changedFields: changedFields,
      dataForUpdate
    };
  }, [serializedFieldValues, serializedValuesFromItem]);
}

function useInvalidFields(fields, value) {
  return React.useMemo(() => {
    const invalidFields = new Set();
    Object.keys(value).forEach(fieldPath => {
      const val = value[fieldPath];

      if (val.kind === 'value') {
        const validateFn = fields[fieldPath].controller.validate;

        if (validateFn) {
          const result = validateFn(val.value);

          if (result === false) {
            invalidFields.add(fieldPath);
          }
        }
      }
    });
    return invalidFields;
  }, [fields, value]);
}

exports.deserializeValue = deserializeValue;
exports.serializeValueToObjByFieldKey = serializeValueToObjByFieldKey;
exports.useChangedFieldsAndDataForUpdate = useChangedFieldsAndDataForUpdate;
exports.useInvalidFields = useInvalidFields;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/dist/utils-eff1fd30.cjs.dev.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/dist/utils-eff1fd30.cjs.dev.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


var React = __webpack_require__(/*! react */ "react");

function useFormattedInput(config, {
  value,
  onChange,
  onBlur,
  onFocus
}) {
  // typeof value === 'string' implies the unparsed form
  // typeof value !== 'string' implies the parsed form
  if (typeof value === 'string' && typeof config.parse(value) !== 'string') {
    throw new Error(`Valid values must be passed in as a parsed value, not a raw value. The value you passed was \`${JSON.stringify(value)}\`, you should pass \`${JSON.stringify(config.parse(value))}\` instead`);
  }

  let [internalValueState, setInternalValueState] = React.useState(() => typeof value === 'string' ? value : config.format(value));
  const [isFocused, setIsFocused] = React.useState(false);

  if (typeof value === 'string' && value !== internalValueState) {
    setInternalValueState(value);
  } // If the value is not a string, we know it's in the parsed form


  if (typeof value !== 'string') {
    const formatted = config.format(value); // When the input is blurred, we want to show always show the formatted
    // version so if we're not focussed and the formatted version is different
    // to the current version, we need to update it.

    if (!isFocused && formatted !== internalValueState) {
      setInternalValueState(formatted);
    }

    const parsedInternal = config.parse(internalValueState); // We updating the internal value here because the
    // external value has changed.

    if (typeof parsedInternal !== 'string' && config.format(parsedInternal) !== formatted) {
      setInternalValueState(formatted);
    }
  }

  return {
    value: internalValueState,

    onChange(event) {
      const value = event.target.value;
      const parsed = config.parse(value);
      onChange(parsed);
      setInternalValueState(value);
    },

    onFocus(event) {
      onFocus === null || onFocus === void 0 ? void 0 : onFocus(event);
      setIsFocused(true);
    },

    onBlur(event) {
      onBlur === null || onBlur === void 0 ? void 0 : onBlur(event);
      setIsFocused(false); // this isn't strictly necessary since we already do this in render
      // this just saves another rerender after setIsFocused(false)

      if (typeof value !== 'string') {
        setInternalValueState(config.format(value));
      }
    }

  };
}

exports.useFormattedInput = useFormattedInput;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/RelationshipSelect/dist/keystone.cjs.dev.js":
/*!******************************************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/relationship/views/RelationshipSelect/dist/keystone.cjs.dev.js ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
var _toPropertyKey = __webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
var React = __webpack_require__(/*! react */ "react");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var uuid = __webpack_require__(/*! uuid */ "uuid");
var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");

const _excluded = ["children"];

function useIntersectionObserver(cb, ref) {
  React.useEffect(() => {
    let observer = new IntersectionObserver(cb, {});
    let node = ref.current;

    if (node !== null) {
      observer.observe(node);
      return () => observer.unobserve(node);
    }
  });
}

const idValidators = {
  uuid: uuid.validate,

  cuid(value) {
    return value.startsWith('c');
  },

  autoincrement(value) {
    return /^\d+$/.test(value);
  }

};

function useFilter(search, list) {
  return React.useMemo(() => {
    let conditions = [];

    if (search.length) {
      const idFieldKind = list.fields.id.controller.idFieldKind;
      const trimmedSearch = search.trim();
      const isValidId = idValidators[idFieldKind](trimmedSearch);

      if (isValidId) {
        conditions.push({
          id: trimmedSearch
        });
      }

      for (const field of Object.values(list.fields)) {
        if (field.search !== null) {
          conditions.push({
            [`${field.path}_contains${field.search === 'insensitive' ? '_i' : ''}`]: trimmedSearch
          });
        }
      }
    }

    return {
      OR: conditions
    };
  }, [search, list]);
}

const initialItemsToLoad = 10;
const subsequentItemsToLoad = 50;
const idField = '____id____';
const labelField = '____label____';
const LoadingIndicatorContext = /*#__PURE__*/React.createContext({
  count: 0,
  ref: () => {}
});
const RelationshipSelect = ({
  autoFocus,
  controlShouldRenderValue,
  isDisabled,
  isLoading,
  list,
  placeholder,
  portalMenu,
  state,
  extraSelection = ''
}) => {
  var _data$items;

  const [search, setSearch] = React.useState(''); // note it's important that this is in state rather than a ref
  // because we want a re-render if the element changes
  // so that we can register the intersection observer
  // on the right element

  const [loadingIndicatorElement, setLoadingIndicatorElement] = React.useState(null);
  const QUERY = client.gql`
    query RelationshipSelect($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
      items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
        ${idField}: id
        ${labelField}: ${list.labelField}
        ${extraSelection}
      }
      count: ${list.gqlNames.listQueryCountName}(where: $where)
    }
  `;
  const where = useFilter(search, list);
  const {
    data,
    error,
    loading,
    fetchMore
  } = client.useQuery(QUERY, {
    fetchPolicy: 'network-only',
    variables: {
      where,
      take: initialItemsToLoad,
      skip: 0
    }
  });
  const count = (data === null || data === void 0 ? void 0 : data.count) || 0;
  const options = (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(_ref => {
    let {
      [idField]: value,
      [labelField]: label
    } = _ref,
        data = _objectWithoutProperties(_ref, [idField, labelField].map(_toPropertyKey));

    return {
      value,
      label: label || value,
      data
    };
  })) || [];
  const loadingIndicatorContextVal = React.useMemo(() => ({
    count,
    ref: setLoadingIndicatorElement
  }), [count]);
  useIntersectionObserver(([{
    isIntersecting
  }]) => {
    if (!loading && isIntersecting && options.length < count) {
      const QUERY = client.gql`
              query RelationshipSelectMore($where: ${list.gqlNames.whereInputName}!, $take: Int!, $skip: Int!) {
                items: ${list.gqlNames.listQueryName}(where: $where, take: $take, skip: $skip) {
                  ${labelField}: ${list.labelField}
                  ${idField}: id
                  ${extraSelection}
                }
              }
            `;
      fetchMore({
        query: QUERY,
        variables: {
          where,
          take: subsequentItemsToLoad,
          skip: data.items.length
        },
        updateQuery: (prev, {
          fetchMoreResult
        }) => {
          if (!fetchMoreResult) return prev;
          return _objectSpread(_objectSpread({}, prev), {}, {
            items: [...prev.items, ...fetchMoreResult.items]
          });
        }
      });
    }
  }, {
    current: loadingIndicatorElement
  }); // TODO: better error UI
  // TODO: Handle permission errors
  // (ie; user has permission to read this relationship field, but
  // not the related list, or some items on the list)

  if (error) {
    return core.jsx("span", null, "Error");
  }

  if (state.kind === 'one') {
    return core.jsx(LoadingIndicatorContext.Provider, {
      value: loadingIndicatorContextVal
    }, core.jsx(fields.Select // this is necessary because react-select passes a second argument to onInputChange
    // and useState setters log a warning if a second argument is passed
    , {
      onInputChange: val => setSearch(val),
      isLoading: loading || isLoading,
      autoFocus: autoFocus,
      components: relationshipSelectComponents,
      portalMenu: portalMenu,
      value: state.value ? {
        value: state.value.id,
        label: state.value.label,
        // @ts-ignore
        data: state.value.data
      } : null,
      options: options,
      onChange: value => {
        state.onChange(value ? {
          id: value.value,
          label: value.label,
          data: value.data
        } : null);
      },
      placeholder: placeholder,
      controlShouldRenderValue: controlShouldRenderValue,
      isClearable: controlShouldRenderValue,
      isDisabled: isDisabled
    }));
  }

  return core.jsx(LoadingIndicatorContext.Provider, {
    value: loadingIndicatorContextVal
  }, core.jsx(fields.MultiSelect // this is necessary because react-select passes a second argument to onInputChange
  // and useState setters log a warning if a second argument is passed
  , {
    onInputChange: val => setSearch(val),
    isLoading: loading || isLoading,
    autoFocus: autoFocus,
    components: relationshipSelectComponents,
    portalMenu: portalMenu,
    value: state.value.map(value => ({
      value: value.id,
      label: value.label,
      data: value.data
    })),
    options: options,
    onChange: value => {
      state.onChange(value.map(x => ({
        id: x.value,
        label: x.label,
        data: x.data
      })));
    },
    placeholder: placeholder,
    controlShouldRenderValue: controlShouldRenderValue,
    isClearable: controlShouldRenderValue,
    isDisabled: isDisabled
  }));
};
const relationshipSelectComponents = {
  MenuList: _ref2 => {
    let {
      children
    } = _ref2,
        props = _objectWithoutProperties(_ref2, _excluded);

    const {
      count,
      ref
    } = React.useContext(LoadingIndicatorContext);
    return core.jsx(fields.selectComponents.MenuList, props, children, core.jsx("div", {
      css: {
        textAlign: 'center'
      },
      ref: ref
    }, props.options.length < count && core.jsx("span", {
      css: {
        padding: 8
      }
    }, "Loading...")));
  }
};

exports.RelationshipSelect = RelationshipSelect;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.dev.js":
/*!***********************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.dev.js ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var React = __webpack_require__(/*! react */ "react");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var modals = __webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
var adminUi_router_dist_keystone = __webpack_require__(/*! ../../../../../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");
var adminUi_context_dist_keystone = __webpack_require__(/*! ../../../../../admin-ui/context/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/context/dist/keystone.cjs.dev.js");
var client = __webpack_require__(/*! @apollo/client */ "@apollo/client");
var CellContainer = __webpack_require__(/*! ../../../../../dist/CellContainer-453254b5.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
__webpack_require__(/*! @keystone-ui/icons/icons/AlertTriangleIcon */ "@keystone-ui/icons/icons/AlertTriangleIcon");
__webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
var _objectWithoutProperties = __webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! next/router */ "next/router");
__webpack_require__(/*! @keystone-ui/popover */ "@keystone-ui/popover");
__webpack_require__(/*! @keystone-ui/icons/icons/MoreHorizontalIcon */ "@keystone-ui/icons/icons/MoreHorizontalIcon");
__webpack_require__(/*! @keystone-ui/icons/icons/ChevronRightIcon */ "@keystone-ui/icons/icons/ChevronRightIcon");
__webpack_require__(/*! ../../../../../dist/SignoutButton-acdb1554.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js");
var CreateItemDrawer = __webpack_require__(/*! ../../../../../dist/CreateItemDrawer-b4b0dd16.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CreateItemDrawer-b4b0dd16.cjs.dev.js");
__webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
var tooltip = __webpack_require__(/*! @keystone-ui/tooltip */ "@keystone-ui/tooltip");
var loading = __webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
var dataGetter = __webpack_require__(/*! ../../../../../dist/dataGetter-9fbe2f8e.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/dataGetter-9fbe2f8e.cjs.dev.js");
var getRootGraphQLFieldsFromFieldController = __webpack_require__(/*! ../../../../../dist/getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/getRootGraphQLFieldsFromFieldController-47699a0d.cjs.dev.js");
var isDeepEqual = __webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
var fields_types_relationship_views_RelationshipSelect_dist_keystone = __webpack_require__(/*! ../RelationshipSelect/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/RelationshipSelect/dist/keystone.cjs.dev.js");
var toast = __webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
var Fields = __webpack_require__(/*! ../../../../../dist/Fields-4afb38f0.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/Fields-4afb38f0.cjs.dev.js");
var useInvalidFields = __webpack_require__(/*! ../../../../../dist/useInvalidFields-162d1b9c.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/useInvalidFields-162d1b9c.cjs.dev.js");
__webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
__webpack_require__(/*! @emotion/hash */ "@emotion/hash");
__webpack_require__(/*! ../../../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! ../../../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
__webpack_require__(/*! ../../../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
var GraphQLErrorNotice = __webpack_require__(/*! ../../../../../dist/GraphQLErrorNotice-76ff96dd.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/GraphQLErrorNotice-76ff96dd.cjs.dev.js");
__webpack_require__(/*! ../../../../../dist/core-c8ecce23.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/core-c8ecce23.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");
__webpack_require__(/*! @emotion/weak-memoize */ "@emotion/weak-memoize");
__webpack_require__(/*! @babel/runtime/helpers/toPropertyKey */ "../../node_modules/@babel/runtime/helpers/toPropertyKey.js");
__webpack_require__(/*! intersection-observer */ "intersection-observer");
__webpack_require__(/*! uuid */ "uuid");

function _interopDefault (e) { return e && e.__esModule ? e : { 'default': e }; }

var isDeepEqual__default = /*#__PURE__*/_interopDefault(isDeepEqual);

function useItemState({
  selectedFields,
  localList,
  id,
  field
}) {
  const {
    data,
    error,
    loading
  } = client.useQuery(client.gql`query($id: ID!) {
  item: ${localList.gqlNames.itemQueryName}(where: {id: $id}) {
    id
    relationship: ${field.path} {
      ${selectedFields}
    }
  }
}`, {
    variables: {
      id
    },
    errorPolicy: 'all'
  });
  const {
    itemsArrFromData,
    relationshipGetter
  } = React.useMemo(() => {
    const dataGetter$1 = dataGetter.makeDataGetter(data, error === null || error === void 0 ? void 0 : error.graphQLErrors);
    const relationshipGetter = dataGetter$1.get('item').get('relationship');
    const isMany = Array.isArray(relationshipGetter.data);
    const itemsArrFromData = (isMany ? relationshipGetter.data.map((_, i) => relationshipGetter.get(i)) : [relationshipGetter]).filter(x => {
      var _x$data;

      return ((_x$data = x.data) === null || _x$data === void 0 ? void 0 : _x$data.id) != null;
    });
    return {
      relationshipGetter,
      itemsArrFromData
    };
  }, [data, error]);
  let [{
    items,
    itemsArrFromData: itemsArrFromDataState
  }, setItemsState] = React.useState({
    itemsArrFromData: [],
    items: {}
  });

  if (itemsArrFromDataState !== itemsArrFromData) {
    let newItems = {};
    itemsArrFromData.forEach(item => {
      var _items$item$data$id, _item$errors, _initialItemInState$e;

      const initialItemInState = (_items$item$data$id = items[item.data.id]) === null || _items$item$data$id === void 0 ? void 0 : _items$item$data$id.fromInitialQuery;

      if ((items[item.data.id] && initialItemInState || !items[item.data.id]) && (!initialItemInState || item.data !== initialItemInState.data || ((_item$errors = item.errors) === null || _item$errors === void 0 ? void 0 : _item$errors.length) !== ((_initialItemInState$e = initialItemInState.errors) === null || _initialItemInState$e === void 0 ? void 0 : _initialItemInState$e.length) || (item.errors || []).some((err, i) => {
        var _initialItemInState$e2;

        return err !== ((_initialItemInState$e2 = initialItemInState.errors) === null || _initialItemInState$e2 === void 0 ? void 0 : _initialItemInState$e2[i]);
      }))) {
        newItems[item.data.id] = {
          current: item,
          fromInitialQuery: item
        };
      } else {
        newItems[item.data.id] = items[item.data.id];
      }
    });
    items = newItems;
    setItemsState({
      items: newItems,
      itemsArrFromData
    });
  }

  return {
    items: React.useMemo(() => {
      const itemsToReturn = {};
      Object.keys(items).forEach(id => {
        itemsToReturn[id] = items[id].current;
      });
      return itemsToReturn;
    }, [items]),
    setItems: React.useCallback(items => {
      setItemsState(state => {
        let itemsForState = {};
        Object.keys(items).forEach(id => {
          var _state$items$id;

          if (items[id] === ((_state$items$id = state.items[id]) === null || _state$items$id === void 0 ? void 0 : _state$items$id.current)) {
            itemsForState[id] = state.items[id];
          } else {
            var _state$items$id2;

            itemsForState[id] = {
              current: items[id],
              fromInitialQuery: (_state$items$id2 = state.items[id]) === null || _state$items$id2 === void 0 ? void 0 : _state$items$id2.fromInitialQuery
            };
          }
        });
        return {
          itemsArrFromData: state.itemsArrFromData,
          items: itemsForState
        };
      });
    }, [setItemsState]),
    state: (() => {
      if (loading) {
        return {
          kind: 'loading'
        };
      }

      if (error !== null && error !== void 0 && error.networkError) {
        return {
          kind: 'error',
          message: error.networkError.message
        };
      }

      if (field.many && !relationshipGetter.data) {
        var _relationshipGetter$e;

        return {
          kind: 'error',
          message: ((_relationshipGetter$e = relationshipGetter.errors) === null || _relationshipGetter$e === void 0 ? void 0 : _relationshipGetter$e[0].message) || ''
        };
      }

      return {
        kind: 'loaded'
      };
    })()
  };
}
function useFieldsObj(list, fields) {
  return React.useMemo(() => {
    const editFields = {};
    fields === null || fields === void 0 ? void 0 : fields.forEach(fieldPath => {
      editFields[fieldPath] = list.fields[fieldPath];
    });
    return editFields;
  }, [fields, list.fields]);
}

function InlineEdit({
  fields,
  list,
  selectedFields,
  itemGetter,
  onCancel,
  onSave
}) {
  var _itemGetter$errors;

  const fieldsObj = useFieldsObj(list, fields);
  const [update, {
    loading,
    error
  }] = client.useMutation(client.gql`mutation ($data: ${list.gqlNames.updateInputName}!, $id: ID!) {
          item: ${list.gqlNames.updateMutationName}(where: { id: $id }, data: $data) {
            ${selectedFields}
          }
        }`, {
    errorPolicy: 'all'
  });
  const [state, setValue] = React.useState(() => {
    const value = useInvalidFields.deserializeValue(fieldsObj, itemGetter);
    return {
      value,
      item: itemGetter.data
    };
  });

  if (state.item !== itemGetter.data && (_itemGetter$errors = itemGetter.errors) !== null && _itemGetter$errors !== void 0 && _itemGetter$errors.every(x => {
    var _x$path;

    return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) !== 1;
  })) {
    const value = useInvalidFields.deserializeValue(fieldsObj, itemGetter);
    setValue({
      value,
      item: itemGetter.data
    });
  }

  const {
    changedFields,
    dataForUpdate
  } = useInvalidFields.useChangedFieldsAndDataForUpdate(fieldsObj, itemGetter, state.value);
  const invalidFields = useInvalidFields.useInvalidFields(fieldsObj, state.value);
  const [forceValidation, setForceValidation] = React.useState(false);
  const toasts = toast.useToasts();
  const saveButtonProps = {
    isLoading: loading,
    weight: 'bold',
    size: 'small',
    tone: 'active',
    onClick: () => {
      const newForceValidation = invalidFields.size !== 0;
      setForceValidation(newForceValidation);
      if (newForceValidation) return;
      update({
        variables: {
          data: dataForUpdate,
          id: itemGetter.get('id').data
        }
      }).then(({
        data,
        errors
      }) => {
        // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
        // which are handled seperately and do not indicate a failure to update the item
        const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
          var _x$path2;

          return ((_x$path2 = x.path) === null || _x$path2 === void 0 ? void 0 : _x$path2.length) === 1;
        });

        if (error) {
          toasts.addToast({
            title: 'Failed to update item',
            tone: 'negative',
            message: error.message
          });
        } else {
          toasts.addToast({
            title: data.item[list.labelField] || data.item.id,
            tone: 'positive',
            message: 'Saved successfully'
          });
          onSave(dataGetter.makeDataGetter(data, errors).get('item'));
        }
      }).catch(err => {
        toasts.addToast({
          title: 'Failed to update item',
          tone: 'negative',
          message: err.message
        });
      });
    },
    children: 'Save'
  };
  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
    // which are handled seperately and do not indicate a failure to update the item
    ,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors.filter(x => {
      var _x$path3;

      return ((_x$path3 = x.path) === null || _x$path3 === void 0 ? void 0 : _x$path3.length) === 1;
    })
  }), core.jsx(Fields.Fields, {
    fieldModes: null,
    fields: fieldsObj,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: React.useCallback(value => {
      setValue(state => ({
        item: state.item,
        value: value(state.value)
      }));
    }, [setValue]),
    value: state.value
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, changedFields.size ? core.jsx(button.Button, saveButtonProps) : core.jsx(tooltip.Tooltip, {
    content: "No fields have been modified so you cannot save changes"
  }, props => core.jsx(button.Button, _extends({}, props, saveButtonProps, {
    // making onClick undefined instead of making the button disabled so the button can be focussed so keyboard users can see the tooltip
    onClick: undefined
  }))), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

/** @jsxRuntime classic */
function InlineCreate({
  list,
  onCancel,
  onCreate,
  fields: fieldPaths,
  selectedFields
}) {
  const toasts = toast.useToasts();
  const fields = useFieldsObj(list, fieldPaths);
  const [createItem, {
    loading,
    error
  }] = client.useMutation(client.gql`mutation($data: ${list.gqlNames.createInputName}!) {
      item: ${list.gqlNames.createMutationName}(data: $data) {
        ${selectedFields}
    }
  }`);
  const [value, setValue] = React.useState(() => {
    const value = {};
    Object.keys(fields).forEach(fieldPath => {
      value[fieldPath] = {
        kind: 'value',
        value: fields[fieldPath].controller.defaultValue
      };
    });
    return value;
  });
  const invalidFields = useInvalidFields.useInvalidFields(fields, value);
  const [forceValidation, setForceValidation] = React.useState(false);

  const onCreateClick = () => {
    const newForceValidation = invalidFields.size !== 0;
    setForceValidation(newForceValidation);
    if (newForceValidation) return;
    const data = {};
    const allSerializedValues = useInvalidFields.serializeValueToObjByFieldKey(fields, value);
    Object.keys(allSerializedValues).forEach(fieldPath => {
      const {
        controller
      } = fields[fieldPath];
      const serialized = allSerializedValues[fieldPath];

      if (!isDeepEqual__default["default"](serialized, controller.serialize(controller.defaultValue))) {
        Object.assign(data, serialized);
      }
    });
    createItem({
      variables: {
        data
      }
    }).then(({
      data,
      errors
    }) => {
      // we're checking for path.length === 1 because errors with a path larger than 1 will be field level errors
      // which are handled seperately and do not indicate a failure to update the item
      const error = errors === null || errors === void 0 ? void 0 : errors.find(x => {
        var _x$path;

        return ((_x$path = x.path) === null || _x$path === void 0 ? void 0 : _x$path.length) === 1;
      });

      if (error) {
        toasts.addToast({
          title: 'Failed to create item',
          tone: 'negative',
          message: error.message
        });
      } else {
        toasts.addToast({
          title: data.item[list.labelField] || data.item.id,
          tone: 'positive',
          message: 'Saved successfully'
        });
        onCreate(dataGetter.makeDataGetter(data, errors).get('item'));
      }
    }).catch(err => {
      toasts.addToast({
        title: 'Failed to update item',
        tone: 'negative',
        message: err.message
      });
    });
  };

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, error && core.jsx(GraphQLErrorNotice.GraphQLErrorNotice, {
    networkError: error === null || error === void 0 ? void 0 : error.networkError,
    errors: error === null || error === void 0 ? void 0 : error.graphQLErrors
  }), core.jsx(Fields.Fields, {
    fieldModes: null,
    fields: fields,
    forceValidation: forceValidation,
    invalidFields: invalidFields,
    onChange: setValue,
    value: value
  }), core.jsx(core.Stack, {
    gap: "small",
    across: true
  }, core.jsx(button.Button, {
    isLoading: loading,
    size: "small",
    tone: "positive",
    weight: "bold",
    onClick: onCreateClick
  }, "Create ", list.singular), core.jsx(button.Button, {
    size: "small",
    weight: "none",
    onClick: onCancel
  }, "Cancel")));
}

const _excluded = ["mode"];
const CardContainer = core.forwardRefWithAs((_ref, ref) => {
  let {
    mode = 'view'
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const {
    tones
  } = core.useTheme();
  const tone = tones[mode === 'edit' ? 'active' : mode === 'create' ? 'positive' : 'passive'];
  return core.jsx(core.Box, _extends({
    ref: ref,
    paddingLeft: "xlarge",
    css: {
      position: 'relative',
      ':before': {
        content: '" "',
        backgroundColor: tone.border,
        borderRadius: 4,
        width: 4,
        position: 'absolute',
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
      }
    }
  }, props));
});
function Cards({
  localList,
  field,
  foreignList,
  id,
  value,
  onChange,
  forceValidation
}) {
  var _field$display$inline;

  let selectedFields = [...new Set([...field.display.cardFields, ...(((_field$display$inline = field.display.inlineEdit) === null || _field$display$inline === void 0 ? void 0 : _field$display$inline.fields) || [])])].map(fieldPath => {
    return foreignList.fields[fieldPath].controller.graphqlSelection;
  }).join('\n');

  if (!field.display.cardFields.includes('id')) {
    selectedFields += '\nid';
  }

  if (!field.display.cardFields.includes(foreignList.labelField) && foreignList.labelField !== 'id') {
    selectedFields += `\n${foreignList.labelField}`;
  }

  const {
    items,
    setItems,
    state: itemsState
  } = useItemState({
    selectedFields,
    localList,
    id,
    field
  });
  const client$1 = client.useApolloClient();
  const [isLoadingLazyItems, setIsLoadingLazyItems] = React.useState(false);
  const [showConnectItems, setShowConnectItems] = React.useState(false);
  const [hideConnectItemsLabel, setHideConnectItemsLabel] = React.useState('Cancel');
  const editRef = React.useRef(null);
  const isMountedRef = React.useRef(false);
  React.useEffect(() => {
    isMountedRef.current = true;
    return () => {
      isMountedRef.current = false;
    };
  });
  React.useEffect(() => {
    if (value.itemsBeingEdited) {
      var _editRef$current;

      editRef === null || editRef === void 0 ? void 0 : (_editRef$current = editRef.current) === null || _editRef$current === void 0 ? void 0 : _editRef$current.focus();
    }
  }, [value]);

  if (itemsState.kind === 'loading') {
    return core.jsx("div", null, core.jsx(loading.LoadingDots, {
      label: `Loading items for ${field.label} field`
    }));
  }

  if (itemsState.kind === 'error') {
    return core.jsx("span", {
      css: {
        color: 'red'
      }
    }, itemsState.message);
  }

  return core.jsx(core.Stack, {
    gap: "xlarge"
  }, core.jsx(core.Stack, {
    as: "ul",
    gap: "xlarge",
    css: {
      padding: 0,
      marginBottom: 0,
      li: {
        listStyle: 'none'
      }
    }
  }, [...value.currentIds].map((id, index) => {
    const itemGetter = items[id];
    const isEditMode = !!(onChange !== undefined) && value.itemsBeingEdited.has(id);
    return core.jsx(CardContainer, {
      role: "status",
      mode: isEditMode ? 'edit' : 'view'
    }, core.jsx(core.VisuallyHidden, {
      as: "h2"
    }, `${field.label} ${index + 1} ${isEditMode ? 'edit' : 'view'} mode`), isEditMode ? core.jsx(InlineEdit, {
      list: foreignList,
      fields: field.display.inlineEdit.fields,
      onSave: newItemGetter => {
        setItems(_objectSpread(_objectSpread({}, items), {}, {
          [id]: newItemGetter
        }));
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      },
      selectedFields: selectedFields,
      itemGetter: itemGetter,
      onCancel: () => {
        const itemsBeingEdited = new Set(value.itemsBeingEdited);
        itemsBeingEdited.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited
        }));
      }
    }) : core.jsx(React.Fragment, null, core.jsx(core.Stack, {
      gap: "xlarge"
    }, field.display.cardFields.map(fieldPath => {
      const field = foreignList.fields[fieldPath];
      const itemForField = {};

      for (const graphqlField of getRootGraphQLFieldsFromFieldController.getRootGraphQLFieldsFromFieldController(field.controller)) {
        const fieldGetter = itemGetter.get(graphqlField);

        if (fieldGetter.errors) {
          const errorMessage = fieldGetter.errors[0].message;
          return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), errorMessage);
        }

        itemForField[graphqlField] = fieldGetter.data;
      }

      return core.jsx(field.views.CardValue, {
        key: fieldPath,
        field: field.controller,
        item: itemForField
      });
    })), core.jsx(core.Stack, {
      across: true,
      gap: "small",
      marginTop: "xlarge"
    }, field.display.inlineEdit && onChange !== undefined && core.jsx(button.Button, {
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          itemsBeingEdited: new Set([...value.itemsBeingEdited, id])
        }));
      },
      tone: "active"
    }, "Edit"), field.display.removeMode === 'disconnect' && onChange !== undefined && core.jsx(tooltip.Tooltip, {
      content: "This item will not be deleted. It will only be removed from this field."
    }, props => core.jsx(button.Button, _extends({
      size: "small",
      disabled: onChange === undefined,
      onClick: () => {
        const currentIds = new Set(value.currentIds);
        currentIds.delete(id);
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          currentIds
        }));
      }
    }, props, {
      tone: "negative"
    }), "Remove")), field.display.linkToItem && core.jsx(button.Button, {
      size: "small",
      weight: "link",
      tone: "active",
      css: {
        textDecoration: 'none'
      },
      as: adminUi_router_dist_keystone.Link,
      href: `/${foreignList.path}/${id}`
    }, "View ", foreignList.singular, " details"))));
  })), onChange === undefined ? null : field.display.inlineConnect && showConnectItems ? core.jsx(CardContainer, {
    mode: "edit"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginY: "medium",
    across: true,
    css: {
      width: '100%',
      justifyContent: 'space-between',
      'div:first-of-type': {
        flex: '2'
      }
    }
  }, core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone.RelationshipSelect, {
    autoFocus: true,
    controlShouldRenderValue: isLoadingLazyItems,
    isDisabled: onChange === undefined,
    list: foreignList,
    isLoading: isLoadingLazyItems,
    placeholder: `Select a ${foreignList.singular}`,
    portalMenu: true,
    state: {
      kind: 'many',

      async onChange(options) {
        // TODO: maybe use the extraSelection prop on RelationshipSelect here
        const itemsToFetchAndConnect = [];
        options.forEach(item => {
          if (!value.currentIds.has(item.id)) {
            itemsToFetchAndConnect.push(item.id);
          }
        });

        if (itemsToFetchAndConnect.length) {
          try {
            const {
              data,
              errors
            } = await client$1.query({
              query: client.gql`query ($ids: [ID!]!) {
                      items: ${foreignList.gqlNames.listQueryName}(where: { id: { in: $ids }}) {
                        ${selectedFields}
                      }
                    }`,
              variables: {
                ids: itemsToFetchAndConnect
              }
            });

            if (isMountedRef.current) {
              const dataGetters = dataGetter.makeDataGetter(data, errors);
              const itemsDataGetter = dataGetters.get('items');

              let newItems = _objectSpread({}, items);

              let newCurrentIds = field.many ? new Set(value.currentIds) : new Set();

              if (Array.isArray(itemsDataGetter.data)) {
                itemsDataGetter.data.forEach((item, i) => {
                  if ((item === null || item === void 0 ? void 0 : item.id) != null) {
                    newCurrentIds.add(item.id);
                    newItems[item.id] = itemsDataGetter.get(i);
                  }
                });
              }

              if (newCurrentIds.size) {
                setItems(newItems);
                onChange(_objectSpread(_objectSpread({}, value), {}, {
                  currentIds: newCurrentIds
                }));
                setHideConnectItemsLabel('Done');
              }
            }
          } finally {
            if (isMountedRef.current) {
              setIsLoadingLazyItems(false);
            }
          }
        }
      },

      value: (() => {
        let options = [];
        Object.keys(items).forEach(id => {
          if (value.currentIds.has(id)) {
            options.push({
              id,
              label: id
            });
          }
        });
        return options;
      })()
    }
  }), core.jsx(button.Button, {
    onClick: () => setShowConnectItems(false)
  }, hideConnectItemsLabel))) : value.itemBeingCreated ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(InlineCreate, {
    selectedFields: selectedFields,
    fields: field.display.inlineCreate.fields,
    list: foreignList,
    onCancel: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false
      }));
    },
    onCreate: itemGetter => {
      const id = itemGetter.data.id;
      setItems(_objectSpread(_objectSpread({}, items), {}, {
        [id]: itemGetter
      }));
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: false,
        currentIds: field.many ? new Set([...value.currentIds, id]) : new Set([id])
      }));
    }
  })) : field.display.inlineCreate || field.display.inlineConnect ? core.jsx(CardContainer, {
    mode: "create"
  }, core.jsx(core.Stack, {
    gap: "small",
    marginTop: "medium",
    across: true
  }, field.display.inlineCreate && core.jsx(button.Button, {
    size: "small",
    disabled: onChange === undefined,
    tone: "positive",
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        itemBeingCreated: true
      }));
    }
  }, "Create ", foreignList.singular), field.display.inlineConnect && core.jsx(button.Button, {
    size: "small",
    weight: "none",
    tone: "passive",
    onClick: () => {
      setShowConnectItems(true);
      setHideConnectItemsLabel('Cancel');
    }
  }, "Link existing ", foreignList.singular))) : null, forceValidation && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, "You must finish creating and editing any related ", foreignList.label.toLowerCase(), " before saving the ", localList.singular.toLowerCase()));
}

function LinkToRelatedItems({
  itemId,
  isDoubleSided,
  value,
  list
}) {
  var _value$value;

  function constructQuery({
    isDoubleSided,
    itemId,
    value
  }) {
    if (isDoubleSided && itemId) {
      return `!assignedTo_matches="${itemId}"`;
    }

    return `!id_in="${(value === null || value === void 0 ? void 0 : value.value).slice(0, 100).map(({
      id
    }) => id).join(',')}"`;
  }

  const commonProps = {
    size: 'small',
    tone: 'active',
    weight: 'link'
  };

  if (value.kind === 'many') {
    const query = constructQuery({
      isDoubleSided,
      value,
      itemId
    });
    return core.jsx(button.Button, _extends({}, commonProps, {
      as: adminUi_router_dist_keystone.Link,
      href: `/${list.path}?${query}`
    }), "View related ", list.plural);
  }

  return core.jsx(button.Button, _extends({}, commonProps, {
    as: adminUi_router_dist_keystone.Link,
    href: `/${list.path}/${(_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.id}`
  }), "View ", list.singular, " details");
}

const RelationshipLinkButton = ({
  href,
  children
}) => core.jsx(button.Button, {
  css: {
    padding: 0,
    height: 'auto'
  },
  weight: "link",
  tone: "active",
  as: adminUi_router_dist_keystone.Link,
  href: href
}, children);

const RelationshipDisplay = ({
  list,
  value
}) => {
  if (value.kind === 'many') {
    if (value.value.length) {
      return core.jsx(core.Inline, {
        gap: "small"
      }, value.value.map(i => core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${i.id}`
      }, i.label)));
    } else {
      return core.jsx("div", null, "(No ", list.plural, ")");
    }
  } else {
    if (value.value) {
      return core.jsx(RelationshipLinkButton, {
        href: `/${list.path}/${value.value.id}`
      }, value.value.label);
    } else {
      return core.jsx("div", null, "(No ", list.singular, ")");
    }
  }
};

const Field = ({
  field,
  autoFocus,
  value,
  onChange,
  forceValidation
}) => {
  const keystone = adminUi_context_dist_keystone.useKeystone();
  const foreignList = adminUi_context_dist_keystone.useList(field.refListKey);
  const localList = adminUi_context_dist_keystone.useList(field.listKey);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  if (value.kind === 'cards-view') {
    return core.jsx(fields.FieldContainer, {
      as: "fieldset"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx(Cards, {
      forceValidation: forceValidation,
      field: field,
      id: value.id,
      value: value,
      onChange: onChange,
      foreignList: foreignList,
      localList: localList
    }));
  }

  if (value.kind === 'count') {
    return core.jsx(core.Stack, {
      as: "fieldset",
      gap: "medium"
    }, core.jsx(fields.FieldLegend, null, field.label), core.jsx("div", null, value.count === 1 ? `There is 1 ${foreignList.singular} ` : `There are ${value.count} ${foreignList.plural} `, "linked to this ", localList.singular));
  }

  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(React.Fragment, null, core.jsx(core.Stack, {
    gap: "medium"
  }, core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone.RelationshipSelect, {
    controlShouldRenderValue: true,
    autoFocus: autoFocus,
    isDisabled: onChange === undefined,
    list: foreignList,
    portalMenu: true,
    state: value.kind === 'many' ? {
      kind: 'many',
      value: value.value,

      onChange(newItems) {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: newItems
        }));
      }

    } : {
      kind: 'one',
      value: value.value,

      onChange(newVal) {
        if (value.kind === 'one') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: newVal
          }));
        }
      }

    }
  }), core.jsx(core.Stack, {
    across: true,
    gap: "small"
  }, !field.hideCreate && core.jsx(button.Button, {
    size: "small",
    disabled: isDrawerOpen,
    onClick: () => {
      setIsDrawerOpen(true);
    }
  }, "Create related ", foreignList.singular), keystone.authenticatedItem.state === 'authenticated' && keystone.authenticatedItem.listKey === field.refListKey && core.jsx(button.Button, {
    size: "small",
    isDisabled: onChange === undefined,
    onClick: () => {
      if (keystone.authenticatedItem.state === 'authenticated') {
        const val = {
          label: keystone.authenticatedItem.label,
          id: keystone.authenticatedItem.id
        };

        if (value.kind === 'many') {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: [...value.value, val]
          }));
        } else {
          onChange(_objectSpread(_objectSpread({}, value), {}, {
            value: val
          }));
        }
      }
    }
  }, value.kind === 'many' ? 'Add ' : 'Set as ', keystone.authenticatedItem.label), !!(value.kind === 'many' ? value.value.length : value.kind === 'one' && value.value) && core.jsx(LinkToRelatedItems, {
    itemId: value.id,
    isDoubleSided: !!field.refFieldKey,
    list: foreignList,
    value: value
  }))), core.jsx(modals.DrawerController, {
    isOpen: isDrawerOpen
  }, core.jsx(CreateItemDrawer.CreateItemDrawer, {
    listKey: foreignList.key,
    onClose: () => {
      setIsDrawerOpen(false);
    },
    onCreate: val => {
      setIsDrawerOpen(false);

      if (value.kind === 'many') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: [...value.value, val]
        }));
      } else if (value.kind === 'one') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          value: val
        }));
      }
    }
  }))) : core.jsx(RelationshipDisplay, {
    value: value,
    list: foreignList
  }));
};
const Cell = ({
  field,
  item
}) => {
  const list = adminUi_context_dist_keystone.useList(field.refListKey);
  const {
    colors
  } = core.useTheme();

  if (field.display.mode === 'count') {
    var _item$;

    const count = (_item$ = item[`${field.path}Count`]) !== null && _item$ !== void 0 ? _item$ : 0;
    return core.jsx(CellContainer.CellContainer, null, count, " ", count === 1 ? list.singular : list.plural);
  }

  const data = item[field.path];
  const items = (Array.isArray(data) ? data : [data]).filter(item => item);
  const displayItems = items.length < 5 ? items : items.slice(0, 3);
  const overflow = items.length < 5 ? 0 : items.length - 3;
  const styles = {
    color: colors.foreground,
    textDecoration: 'none',
    ':hover': {
      textDecoration: 'underline'
    }
  };
  return core.jsx(CellContainer.CellContainer, null, displayItems.map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(adminUi_router_dist_keystone.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`,
    css: styles
  }, item.label || item.id))), overflow ? `, and ${overflow} more` : null);
};
const CardValue = ({
  field,
  item
}) => {
  const list = adminUi_context_dist_keystone.useList(field.refListKey);
  const data = item[field.path];
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), (Array.isArray(data) ? data : [data]).filter(item => item).map((item, index) => core.jsx(React.Fragment, {
    key: item.id
  }, !!index ? ', ' : '', core.jsx(adminUi_router_dist_keystone.Link, {
    href: `/${list.path}/[id]`,
    as: `/${list.path}/${item.id}`
  }, item.label || item.id))));
};
const controller = config => {
  return {
    refFieldKey: config.fieldMeta.refFieldKey,
    many: config.fieldMeta.many,
    listKey: config.listKey,
    path: config.path,
    label: config.label,
    display: config.fieldMeta.displayMode === 'cards' ? {
      mode: 'cards',
      cardFields: config.fieldMeta.cardFields,
      inlineCreate: config.fieldMeta.inlineCreate,
      inlineEdit: config.fieldMeta.inlineEdit,
      linkToItem: config.fieldMeta.linkToItem,
      removeMode: config.fieldMeta.removeMode,
      inlineConnect: config.fieldMeta.inlineConnect
    } : config.fieldMeta.displayMode === 'count' ? {
      mode: 'count'
    } : {
      mode: 'select',
      refLabelField: config.fieldMeta.refLabelField
    },
    refListKey: config.fieldMeta.refListKey,
    graphqlSelection: config.fieldMeta.displayMode === 'cards' ? `${config.path} {
            id
            label: ${config.fieldMeta.refLabelField}
          }` : config.fieldMeta.displayMode === 'count' ? `${config.path}Count` : `${config.path} {
              id
              label: ${config.fieldMeta.refLabelField}
            }`,
    hideCreate: config.fieldMeta.hideCreate,
    defaultValue: config.fieldMeta.many ? {
      id: null,
      kind: 'many',
      initialValue: [],
      value: []
    } : {
      id: null,
      kind: 'one',
      value: null,
      initialValue: null
    },
    deserialize: data => {
      if (config.fieldMeta.displayMode === 'count') {
        var _data$;

        return {
          id: data.id,
          kind: 'count',
          count: (_data$ = data[`${config.path}Count`]) !== null && _data$ !== void 0 ? _data$ : 0
        };
      }

      if (config.fieldMeta.displayMode === 'cards') {
        const initialIds = new Set((Array.isArray(data[config.path]) ? data[config.path] : data[config.path] ? [data[config.path]] : []).map(x => x.id));
        return {
          kind: 'cards-view',
          id: data.id,
          itemsBeingEdited: new Set(),
          itemBeingCreated: false,
          initialIds,
          currentIds: initialIds
        };
      }

      if (config.fieldMeta.many) {
        let value = (data[config.path] || []).map(x => ({
          id: x.id,
          label: x.label || x.id
        }));
        return {
          kind: 'many',
          id: data.id,
          initialValue: value,
          value
        };
      }

      let value = data[config.path];

      if (value) {
        value = {
          id: value.id,
          label: value.label || value.id
        };
      }

      return {
        kind: 'one',
        id: data.id,
        value,
        initialValue: value
      };
    },
    filter: {
      Filter: ({
        onChange,
        value
      }) => {
        const foreignList = adminUi_context_dist_keystone.useList(config.fieldMeta.refListKey);
        const {
          filterValues,
          loading
        } = useRelationshipFilterValues({
          value,
          list: foreignList
        });
        const state = {
          kind: 'many',
          value: filterValues,

          onChange(newItems) {
            onChange(newItems.map(item => item.id).join(','));
          }

        };
        return core.jsx(fields_types_relationship_views_RelationshipSelect_dist_keystone.RelationshipSelect, {
          controlShouldRenderValue: true,
          list: foreignList,
          isLoading: loading,
          isDisabled: onChange === undefined,
          state: state
        });
      },
      graphql: ({
        value
      }) => {
        const foreignIds = getForeignIds(value);

        if (config.fieldMeta.many) {
          return {
            [config.path]: {
              some: {
                id: {
                  in: foreignIds
                }
              }
            }
          };
        }

        return {
          [config.path]: {
            id: {
              in: foreignIds
            }
          }
        };
      },

      Label({
        value
      }) {
        const foreignList = adminUi_context_dist_keystone.useList(config.fieldMeta.refListKey);
        const {
          filterValues
        } = useRelationshipFilterValues({
          value,
          list: foreignList
        });

        if (!filterValues.length) {
          return `has no value`;
        }

        if (filterValues.length > 1) {
          const values = filterValues.map(i => i.label).join(', ');
          return `is in [${values}]`;
        }

        const optionLabel = filterValues[0].label;
        return `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: ''
        }
      }
    },

    validate(value) {
      return value.kind !== 'cards-view' || value.itemsBeingEdited.size === 0 && !value.itemBeingCreated;
    },

    serialize: state => {
      if (state.kind === 'many') {
        const newAllIds = new Set(state.value.map(x => x.id));
        const initialIds = new Set(state.initialValue.map(x => x.id));
        let disconnect = state.initialValue.filter(x => !newAllIds.has(x.id)).map(x => ({
          id: x.id
        }));
        let connect = state.value.filter(x => !initialIds.has(x.id)).map(x => ({
          id: x.id
        }));

        if (disconnect.length || connect.length) {
          let output = {};

          if (disconnect.length) {
            output.disconnect = disconnect;
          }

          if (connect.length) {
            output.connect = connect;
          }

          return {
            [config.path]: output
          };
        }
      } else if (state.kind === 'one') {
        var _state$initialValue;

        if (state.initialValue && !state.value) {
          return {
            [config.path]: {
              disconnect: true
            }
          };
        } else if (state.value && state.value.id !== ((_state$initialValue = state.initialValue) === null || _state$initialValue === void 0 ? void 0 : _state$initialValue.id)) {
          return {
            [config.path]: {
              connect: {
                id: state.value.id
              }
            }
          };
        }
      } else if (state.kind === 'cards-view') {
        let disconnect = [...state.initialIds].filter(id => !state.currentIds.has(id)).map(id => ({
          id
        }));
        let connect = [...state.currentIds].filter(id => !state.initialIds.has(id)).map(id => ({
          id
        }));

        if (config.fieldMeta.many) {
          if (disconnect.length || connect.length) {
            return {
              [config.path]: {
                connect: connect.length ? connect : undefined,
                disconnect: disconnect.length ? disconnect : undefined
              }
            };
          }
        } else if (connect.length) {
          return {
            [config.path]: {
              connect: connect[0]
            }
          };
        } else if (disconnect.length) {
          return {
            [config.path]: {
              disconnect: true
            }
          };
        }
      }

      return {};
    }
  };
};

function useRelationshipFilterValues({
  value,
  list
}) {
  var _data$items;

  const foreignIds = getForeignIds(value);
  const where = {
    id: {
      in: foreignIds
    }
  };
  const query = client.gql`
    query FOREIGNLIST_QUERY($where: ${list.gqlNames.whereInputName}!) {
      items: ${list.gqlNames.listQueryName}(where: $where) {
        id 
        ${list.labelField}
      }
    }
  `;
  const {
    data,
    loading
  } = client.useQuery(query, {
    variables: {
      where
    }
  });
  return {
    filterValues: (data === null || data === void 0 ? void 0 : (_data$items = data.items) === null || _data$items === void 0 ? void 0 : _data$items.map(item => {
      return {
        id: item.id,
        label: item[list.labelField] || item.id
      };
    })) || foreignIds.map(f => ({
      label: f,
      id: f
    })),
    loading: loading
  };
}

function getForeignIds(value) {
  if (typeof value === 'string' && value.length > 0) {
    return value.split(',');
  }

  return [];
}

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.js":
/*!*******************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.js ***!
  \*******************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.dev.js":
/*!*****************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.dev.js ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var segmentedControl = __webpack_require__(/*! @keystone-ui/segmented-control */ "@keystone-ui/segmented-control");
var button = __webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
var CellContainer = __webpack_require__(/*! ../../../../../dist/CellContainer-453254b5.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js");
var CellLink = __webpack_require__(/*! ../../../../../dist/CellLink-509fb166.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
__webpack_require__(/*! @keystone-ui/icons/icons/AlertTriangleIcon */ "@keystone-ui/icons/icons/AlertTriangleIcon");
__webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
__webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
__webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
__webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
__webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
__webpack_require__(/*! @emotion/hash */ "@emotion/hash");
__webpack_require__(/*! ../../../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! ../../../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
__webpack_require__(/*! @apollo/client */ "@apollo/client");
__webpack_require__(/*! ../../../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
__webpack_require__(/*! next/router */ "next/router");
__webpack_require__(/*! @keystone-ui/popover */ "@keystone-ui/popover");
__webpack_require__(/*! @keystone-ui/icons/icons/MoreHorizontalIcon */ "@keystone-ui/icons/icons/MoreHorizontalIcon");
__webpack_require__(/*! @keystone-ui/icons/icons/ChevronRightIcon */ "@keystone-ui/icons/icons/ChevronRightIcon");
__webpack_require__(/*! ../../../../../dist/SignoutButton-acdb1554.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js");
__webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
__webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
__webpack_require__(/*! ../../../../../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

const Field = ({
  field,
  value,
  onChange,
  autoFocus,
  forceValidation
}) => {
  const [hasChanged, setHasChanged] = React.useState(false);
  const validationMessage = (hasChanged || forceValidation) && !validate(value, field.isRequired) ? core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, field.label, " is required") : null;
  return core.jsx(fields.FieldContainer, {
    as: field.displayMode === 'select' ? 'div' : 'fieldset'
  }, field.displayMode === 'select' ? core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
    htmlFor: field.path
  }, field.label), core.jsx(fields.Select, {
    id: field.path,
    isClearable: true,
    autoFocus: autoFocus,
    options: field.options,
    isDisabled: onChange === undefined,
    onChange: newVal => {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: newVal
      }));
      setHasChanged(true);
    },
    value: value.value,
    portalMenu: true
  }), validationMessage) : core.jsx(React.Fragment, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), core.jsx(core.Stack, {
    across: true,
    gap: "small",
    align: "center"
  }, core.jsx(segmentedControl.SegmentedControl, {
    segments: field.options.map(x => x.label),
    selectedIndex: value.value ? field.options.findIndex(x => x.value === value.value.value) : undefined,
    onChange: index => {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: field.options[index]
      }));
      setHasChanged(true);
    }
  }), value.value !== null && onChange !== undefined && core.jsx(button.Button, {
    onClick: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: null
      }));
      setHasChanged(true);
    }
  }, "Clear")), validationMessage));
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  var _field$options$find;

  let value = item[field.path] + '';
  const label = (_field$options$find = field.options.find(x => x.value === value)) === null || _field$options$find === void 0 ? void 0 : _field$options$find.label;
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, label) : core.jsx(CellContainer.CellContainer, null, label);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  var _field$options$find2;

  let value = item[field.path] + '';
  const label = (_field$options$find2 = field.options.find(x => x.value === value)) === null || _field$options$find2 === void 0 ? void 0 : _field$options$find2.label;
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), label);
};

function validate(value, isRequired) {
  if (isRequired) {
    // if you got null initially on the update screen, we want to allow saving
    // since the user probably doesn't have read access control
    if (value.kind === 'update' && value.initial === null) {
      return true;
    }

    return value.value !== null;
  }

  return true;
}

const controller = config => {
  var _config$fieldMeta$def, _optionsWithStringVal;

  const optionsWithStringValues = config.fieldMeta.options.map(x => ({
    label: x.label,
    value: x.value.toString()
  })); // Transform from string value to type appropriate value

  const t = v => v === null ? null : config.fieldMeta.type === 'integer' ? parseInt(v) : v;

  const stringifiedDefault = (_config$fieldMeta$def = config.fieldMeta.defaultValue) === null || _config$fieldMeta$def === void 0 ? void 0 : _config$fieldMeta$def.toString();
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      value: (_optionsWithStringVal = optionsWithStringValues.find(x => x.value === stringifiedDefault)) !== null && _optionsWithStringVal !== void 0 ? _optionsWithStringVal : null
    },
    type: config.fieldMeta.type,
    displayMode: config.fieldMeta.displayMode,
    isRequired: config.fieldMeta.isRequired,
    options: optionsWithStringValues,
    deserialize: data => {
      for (const option of config.fieldMeta.options) {
        if (option.value === data[config.path]) {
          const stringifiedOption = {
            label: option.label,
            value: option.value.toString()
          };
          return {
            kind: 'update',
            initial: stringifiedOption,
            value: stringifiedOption
          };
        }
      }

      return {
        kind: 'update',
        initial: null,
        value: null
      };
    },
    serialize: value => {
      var _value$value$value, _value$value;

      return {
        [config.path]: t((_value$value$value = (_value$value = value.value) === null || _value$value === void 0 ? void 0 : _value$value.value) !== null && _value$value$value !== void 0 ? _value$value$value : null)
      };
    },
    validate: value => validate(value, config.fieldMeta.isRequired),
    filter: {
      Filter(props) {
        return core.jsx(fields.MultiSelect, {
          onChange: props.onChange,
          options: optionsWithStringValues,
          value: props.value,
          autoFocus: true
        });
      },

      graphql: ({
        type,
        value: options
      }) => ({
        [config.path]: {
          [type === 'not_matches' ? 'notIn' : 'in']: options.map(x => t(x.value))
        }
      }),

      Label({
        type,
        value
      }) {
        if (!value.length) {
          return type === 'not_matches' ? `is set` : `has no value`;
        }

        if (value.length > 1) {
          const values = value.map(i => i.label).join(', ');
          return type === 'not_matches' ? `is not in [${values}]` : `is in [${values}]`;
        }

        const optionLabel = value[0].label;
        return type === 'not_matches' ? `is not ${optionLabel}` : `is ${optionLabel}`;
      },

      types: {
        matches: {
          label: 'Matches',
          initialValue: []
        },
        not_matches: {
          label: 'Does not match',
          initialValue: []
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.js":
/*!*************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.js ***!
  \*************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.dev.js":
/*!***************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.dev.js ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var React = __webpack_require__(/*! react */ "react");
var CellContainer = __webpack_require__(/*! ../../../../../dist/CellContainer-453254b5.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js");
var CellLink = __webpack_require__(/*! ../../../../../dist/CellLink-509fb166.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
__webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
__webpack_require__(/*! @keystone-ui/icons/icons/AlertTriangleIcon */ "@keystone-ui/icons/icons/AlertTriangleIcon");
__webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
__webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
__webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
__webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
__webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
__webpack_require__(/*! @emotion/hash */ "@emotion/hash");
__webpack_require__(/*! ../../../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! ../../../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
__webpack_require__(/*! @apollo/client */ "@apollo/client");
__webpack_require__(/*! ../../../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
__webpack_require__(/*! next/router */ "next/router");
__webpack_require__(/*! @keystone-ui/popover */ "@keystone-ui/popover");
__webpack_require__(/*! @keystone-ui/icons/icons/MoreHorizontalIcon */ "@keystone-ui/icons/icons/MoreHorizontalIcon");
__webpack_require__(/*! @keystone-ui/icons/icons/ChevronRightIcon */ "@keystone-ui/icons/icons/ChevronRightIcon");
__webpack_require__(/*! ../../../../../dist/SignoutButton-acdb1554.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js");
__webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
__webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
__webpack_require__(/*! ../../../../../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

const Field = ({
  field,
  value,
  onChange,
  autoFocus,
  forceValidation
}) => {
  const {
    typography,
    fields: fields$1
  } = core.useTheme();
  const [shouldShowErrors, setShouldShowErrors] = React.useState(false);
  const validationMessages = validate(value, field.validation, field.label);
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), onChange ? core.jsx(core.Stack, {
    gap: "small"
  }, field.displayMode === 'textarea' ? core.jsx(fields.TextArea, {
    id: field.path,
    autoFocus: autoFocus,
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      inner: {
        kind: 'value',
        value: event.target.value
      }
    })),
    value: value.inner.kind === 'null' ? '' : value.inner.value,
    disabled: value.inner.kind === 'null',
    onBlur: () => {
      setShouldShowErrors(true);
    }
  }) : core.jsx(fields.TextInput, {
    id: field.path,
    autoFocus: autoFocus,
    onChange: event => onChange(_objectSpread(_objectSpread({}, value), {}, {
      inner: {
        kind: 'value',
        value: event.target.value
      }
    })),
    value: value.inner.kind === 'null' ? '' : value.inner.value,
    disabled: value.inner.kind === 'null',
    onBlur: () => {
      setShouldShowErrors(true);
    }
  }), field.isNullable && core.jsx(fields.Checkbox, {
    autoFocus: autoFocus,
    disabled: onChange === undefined,
    onChange: () => {
      if (value.inner.kind === 'value') {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          inner: {
            kind: 'null',
            prev: value.inner.value
          }
        }));
      } else {
        onChange(_objectSpread(_objectSpread({}, value), {}, {
          inner: {
            kind: 'value',
            value: value.inner.prev
          }
        }));
      }
    },
    checked: value.inner.kind === 'null'
  }, core.jsx("span", {
    css: {
      fontWeight: typography.fontWeight.semibold,
      color: fields$1.labelColor
    }
  }, "Set field as null")), !!validationMessages.length && (shouldShowErrors || forceValidation) && validationMessages.map((message, i) => core.jsx("span", {
    key: i,
    css: {
      color: 'red'
    }
  }, message))) : value);
};
const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path] + '';
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, value) : core.jsx(CellContainer.CellContainer, null, value);
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), item[field.path]);
};

function validate(value, validation, fieldLabel) {
  // if the value is the same as the initial for an update, we don't want to block saving
  // since we're not gonna send it anyway if it's the same
  // and going "fix this thing that is unrelated to the thing you're doing" is bad
  // and also bc it could be null bc of read access control
  if (value.kind === 'update' && (value.initial.kind === 'null' && value.inner.kind === 'null' || value.initial.kind === 'value' && value.inner.kind === 'value' && value.inner.value === value.initial.value)) {
    return [];
  }

  if (value.inner.kind === 'null') {
    if (validation.isRequired) {
      return [`${fieldLabel} is required`];
    }

    return [];
  }

  const val = value.inner.value;
  let messages = [];

  if (validation.length.min !== null && val.length < validation.length.min) {
    if (validation.length.min === 1) {
      messages.push(`${fieldLabel} must not be empty`);
    } else {
      messages.push(`${fieldLabel} must be at least ${validation.length.min} characters long`);
    }
  }

  if (validation.length.max !== null && val.length > validation.length.max) {
    messages.push(`${fieldLabel} must be no longer than ${validation.length.min} characters`);
  }

  if (validation.match && !validation.match.regex.test(val)) {
    messages.push(validation.match.explanation || `${fieldLabel} must match ${validation.match.regex}`);
  }

  return messages;
}

function deserializeTextValue(value) {
  if (value === null) {
    return {
      kind: 'null',
      prev: ''
    };
  }

  return {
    kind: 'value',
    value
  };
}

const controller = config => {
  const validation = {
    isRequired: config.fieldMeta.validation.isRequired,
    length: config.fieldMeta.validation.length,
    match: config.fieldMeta.validation.match ? {
      regex: new RegExp(config.fieldMeta.validation.match.regex.source, config.fieldMeta.validation.match.regex.flags),
      explanation: config.fieldMeta.validation.match.explanation
    } : null
  };
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    defaultValue: {
      kind: 'create',
      inner: deserializeTextValue(config.fieldMeta.defaultValue)
    },
    displayMode: config.fieldMeta.displayMode,
    isNullable: config.fieldMeta.isNullable,
    deserialize: data => {
      const inner = deserializeTextValue(data[config.path]);
      return {
        kind: 'update',
        inner,
        initial: inner
      };
    },
    serialize: value => ({
      [config.path]: value.inner.kind === 'null' ? null : value.inner.value
    }),
    validation,
    validate: val => validate(val, validation, config.label).length === 0,
    filter: {
      Filter(props) {
        return core.jsx(fields.TextInput, {
          onChange: event => {
            props.onChange(event.target.value);
          },
          value: props.value,
          autoFocus: props.autoFocus
        });
      },

      graphql: ({
        type,
        value
      }) => {
        const isNot = type.startsWith('not_');
        const key = type === 'is_i' || type === 'not_i' ? 'equals' : type.replace(/_i$/, '').replace('not_', '').replace(/_([a-z])/g, (_, char) => char.toUpperCase());
        const filter = {
          [key]: value
        };
        return {
          [config.path]: _objectSpread(_objectSpread({}, isNot ? {
            not: filter
          } : filter), {}, {
            mode: config.fieldMeta.shouldUseModeInsensitive ? 'insensitive' : undefined
          })
        };
      },

      Label({
        label,
        value
      }) {
        return `${label.toLowerCase()}: "${value}"`;
      },

      types: {
        contains_i: {
          label: 'Contains',
          initialValue: ''
        },
        not_contains_i: {
          label: 'Does not contain',
          initialValue: ''
        },
        is_i: {
          label: 'Is exactly',
          initialValue: ''
        },
        not_i: {
          label: 'Is not exactly',
          initialValue: ''
        },
        starts_with_i: {
          label: 'Starts with',
          initialValue: ''
        },
        not_starts_with_i: {
          label: 'Does not start with',
          initialValue: ''
        },
        ends_with_i: {
          label: 'Ends with',
          initialValue: ''
        },
        not_ends_with_i: {
          label: 'Does not end with',
          initialValue: ''
        }
      }
    }
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.js":
/*!***********************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.js ***!
  \***********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.dev.js");
}


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.dev.js":
/*!********************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.dev.js ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var _extends = __webpack_require__(/*! @babel/runtime/helpers/extends */ "../../node_modules/@babel/runtime/helpers/extends.js");
var _objectSpread = __webpack_require__(/*! @babel/runtime/helpers/objectSpread2 */ "../../node_modules/@babel/runtime/helpers/objectSpread2.js");
var React = __webpack_require__(/*! react */ "react");
var core = __webpack_require__(/*! @keystone-ui/core */ "@keystone-ui/core");
var fields = __webpack_require__(/*! @keystone-ui/fields */ "@keystone-ui/fields");
var CellContainer = __webpack_require__(/*! ../../../../../dist/CellContainer-453254b5.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellContainer-453254b5.cjs.dev.js");
var CellLink = __webpack_require__(/*! ../../../../../dist/CellLink-509fb166.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/CellLink-509fb166.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js");
__webpack_require__(/*! @keystone-ui/button */ "@keystone-ui/button");
__webpack_require__(/*! @keystone-ui/icons/icons/AlertTriangleIcon */ "@keystone-ui/icons/icons/AlertTriangleIcon");
__webpack_require__(/*! next/link */ "../../node_modules/next/link.js");
__webpack_require__(/*! @keystone-ui/toast */ "@keystone-ui/toast");
__webpack_require__(/*! @keystone-ui/loading */ "@keystone-ui/loading");
__webpack_require__(/*! @keystone-ui/modals */ "@keystone-ui/modals");
__webpack_require__(/*! apollo-upload-client */ "apollo-upload-client");
__webpack_require__(/*! @emotion/hash */ "@emotion/hash");
__webpack_require__(/*! ../../../../../dist/sqlite-af9e5148.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/sqlite-af9e5148.cjs.dev.js");
__webpack_require__(/*! @babel/runtime/helpers/objectWithoutProperties */ "../../node_modules/@babel/runtime/helpers/objectWithoutProperties.js");
__webpack_require__(/*! ../../../../../dist/graphql-ts-schema-fce7a6a8.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/graphql-ts-schema-fce7a6a8.cjs.dev.js");
__webpack_require__(/*! @apollo/client */ "@apollo/client");
__webpack_require__(/*! ../../../../../dist/admin-meta-graphql-9f9a9c11.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/admin-meta-graphql-9f9a9c11.cjs.dev.js");
__webpack_require__(/*! next/router */ "next/router");
__webpack_require__(/*! @keystone-ui/popover */ "@keystone-ui/popover");
__webpack_require__(/*! @keystone-ui/icons/icons/MoreHorizontalIcon */ "@keystone-ui/icons/icons/MoreHorizontalIcon");
__webpack_require__(/*! @keystone-ui/icons/icons/ChevronRightIcon */ "@keystone-ui/icons/icons/ChevronRightIcon");
__webpack_require__(/*! ../../../../../dist/SignoutButton-acdb1554.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/SignoutButton-acdb1554.cjs.dev.js");
__webpack_require__(/*! fast-deep-equal */ "fast-deep-equal");
__webpack_require__(/*! @keystone-ui/notice */ "@keystone-ui/notice");
var utils = __webpack_require__(/*! ../../../../../dist/utils-eff1fd30.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/dist/utils-eff1fd30.cjs.dev.js");
var dateFns = __webpack_require__(/*! date-fns */ "date-fns");
__webpack_require__(/*! ../../../../../admin-ui/router/dist/keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/admin-ui/router/dist/keystone.cjs.dev.js");
__webpack_require__(/*! decimal.js */ "decimal.js");
__webpack_require__(/*! @graphql-tools/schema */ "@graphql-tools/schema");
__webpack_require__(/*! @graphql-ts/schema/api-without-context */ "@graphql-ts/schema/api-without-context");
__webpack_require__(/*! @graphql-ts/schema */ "@graphql-ts/schema");
__webpack_require__(/*! graphql-type-json */ "graphql-type-json");
__webpack_require__(/*! graphql-upload/public/GraphQLUpload.js */ "graphql-upload/public/GraphQLUpload.js");
__webpack_require__(/*! graphql */ "graphql");
__webpack_require__(/*! @graphql-ts/schema/api-with-context */ "@graphql-ts/schema/api-with-context");

const FULL_TIME_PATTERN = 'HH:mm:ss.SSS';

function formatFullTime(date) {
  return dateFns.format(date, FULL_TIME_PATTERN);
}

function formatTime(time) {
  const date = dateFns.parse(time, FULL_TIME_PATTERN, new Date());

  if (date.getMilliseconds() !== 0) {
    return dateFns.format(date, FULL_TIME_PATTERN);
  }

  if (date.getSeconds() !== 0) {
    return dateFns.format(date, 'HH:mm:ss');
  }

  return dateFns.format(date, 'HH:mm');
}
function parseTime(time) {
  for (const pattern of ['H:m:s.SSS', 'H:m:s', 'H:m', 'H']) {
    const parsed = dateFns.parse(time, pattern, new Date());

    if (dateFns.isValid(parsed)) {
      return dateFns.format(parsed, FULL_TIME_PATTERN);
    }
  }

  return undefined;
}
function constructTimestamp({
  dateValue,
  timeValue
}) {
  return new Date(`${dateValue}T${timeValue}`).toISOString();
}
function deconstructTimestamp(value) {
  return {
    dateValue: dateFns.formatISO(new Date(value), {
      representation: 'date'
    }),
    timeValue: {
      kind: 'parsed',
      value: formatFullTime(new Date(value))
    }
  };
}
function formatOutput(value) {
  if (!value) return '';
  const date = new Date(value);
  return date.toLocaleString();
}

const Field = ({
  field,
  value,
  onChange,
  forceValidation
}) => {
  var _value$value$dateValu, _field$fieldMeta$defa;

  const [touchedFirstInput, setTouchedFirstInput] = React.useState(false);
  const [touchedSecondInput, setTouchedSecondInput] = React.useState(false);
  const showValidation = touchedFirstInput && touchedSecondInput || forceValidation;
  const validationMessages = showValidation ? validate(value, field.fieldMeta, field.label) : undefined;
  const timeInputProps = utils.useFormattedInput({
    format({
      value
    }) {
      if (value === null) {
        return '';
      }

      return formatTime(value);
    },

    parse(value) {
      value = value.trim();

      if (value === '') {
        return {
          kind: 'parsed',
          value: null
        };
      }

      const parsed = parseTime(value);

      if (parsed !== undefined) {
        return {
          kind: 'parsed',
          value: parsed
        };
      }

      return value;
    }

  }, {
    value: value.value.timeValue,

    onChange(timeValue) {
      onChange === null || onChange === void 0 ? void 0 : onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: _objectSpread(_objectSpread({}, value.value), {}, {
          timeValue
        })
      }));
    },

    onBlur() {
      setTouchedSecondInput(true);
    }

  });
  return core.jsx(fields.FieldContainer, {
    as: "fieldset"
  }, core.jsx(core.Stack, null, core.jsx(fields.FieldLabel, {
    as: "legend"
  }, field.label), onChange ? core.jsx(core.Inline, {
    gap: "small"
  }, core.jsx(core.Stack, null, core.jsx(fields.DatePicker, {
    onUpdate: date => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: {
          dateValue: date,
          timeValue: typeof value.value.timeValue === 'object' && value.value.timeValue.value === null ? {
            kind: 'parsed',
            value: '00:00:00.000'
          } : value.value.timeValue
        }
      }));
    },
    onClear: () => {
      onChange(_objectSpread(_objectSpread({}, value), {}, {
        value: _objectSpread(_objectSpread({}, value.value), {}, {
          dateValue: null
        })
      }));
    },
    onBlur: () => setTouchedFirstInput(true),
    value: (_value$value$dateValu = value.value.dateValue) !== null && _value$value$dateValu !== void 0 ? _value$value$dateValu : ''
  }), (validationMessages === null || validationMessages === void 0 ? void 0 : validationMessages.date) && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validationMessages.date)), core.jsx(core.Stack, null, core.jsx(core.VisuallyHidden, {
    as: "label",
    htmlFor: `${field.path}--time-input`
  }, `${field.label} time field`), core.jsx(fields.TextInput, _extends({
    id: `${field.path}--time-input`
  }, timeInputProps, {
    disabled: onChange === undefined,
    placeholder: "00:00"
  })), (validationMessages === null || validationMessages === void 0 ? void 0 : validationMessages.time) && core.jsx(core.Text, {
    color: "red600",
    size: "small"
  }, validationMessages.time))) : value.value.dateValue !== null && typeof value.value.timeValue === 'object' && value.value.timeValue.value !== null && core.jsx(core.Text, null, formatOutput(constructTimestamp({
    dateValue: value.value.dateValue,
    timeValue: value.value.timeValue.value
  }))), (value.kind === 'create' && typeof field.fieldMeta.defaultValue !== 'string' && ((_field$fieldMeta$defa = field.fieldMeta.defaultValue) === null || _field$fieldMeta$defa === void 0 ? void 0 : _field$fieldMeta$defa.kind) === 'now' || field.fieldMeta.updatedAt) && core.jsx(core.Text, null, "When this item is saved, this field will be set to the current date and time")));
};

function validate(value, fieldMeta, label) {
  var _fieldMeta$defaultVal;

  const val = value.value;
  const hasDateValue = val.dateValue !== null;
  const hasTimeValue = typeof val.timeValue === 'string' || typeof val.timeValue.value === 'string';
  const isValueEmpty = !hasDateValue && !hasTimeValue; // if we recieve null initially on the item view and the current value is null,
  // we should always allow saving it because:
  // - the value might be null in the database and we don't want to prevent saving the whole item because of that
  // - we might have null because of an access control error

  if (value.kind === 'update' && value.initial === null && isValueEmpty) {
    return undefined;
  }

  if (value.kind === 'create' && isValueEmpty && (typeof fieldMeta.defaultValue === 'object' && ((_fieldMeta$defaultVal = fieldMeta.defaultValue) === null || _fieldMeta$defaultVal === void 0 ? void 0 : _fieldMeta$defaultVal.kind) === 'now' || fieldMeta.updatedAt)) {
    return undefined;
  }

  if (fieldMeta.isRequired && isValueEmpty) {
    return {
      date: `${label} is required`
    };
  }

  if (hasDateValue && !hasTimeValue) {
    return {
      time: `${label} requires a time to be provided`
    };
  }

  const timeError = typeof val.timeValue === 'string' ? `${label} requires a valid time in the format hh:mm` : undefined;

  if (hasTimeValue && !hasDateValue) {
    return {
      date: `${label} requires a date to be selected`,
      time: timeError
    };
  }

  if (timeError) {
    return {
      time: timeError
    };
  }

  return undefined;
}

const Cell = ({
  item,
  field,
  linkTo
}) => {
  let value = item[field.path];
  return linkTo ? core.jsx(CellLink.CellLink, linkTo, formatOutput(value)) : core.jsx(CellContainer.CellContainer, null, formatOutput(value));
};
Cell.supportsLinkTo = true;
const CardValue = ({
  item,
  field
}) => {
  return core.jsx(fields.FieldContainer, null, core.jsx(fields.FieldLabel, null, field.label), formatOutput(item[field.path]));
};
const controller = config => {
  return {
    path: config.path,
    label: config.label,
    graphqlSelection: config.path,
    fieldMeta: config.fieldMeta,
    defaultValue: {
      kind: 'create',
      value: typeof config.fieldMeta.defaultValue === 'string' ? deconstructTimestamp(config.fieldMeta.defaultValue) : {
        dateValue: null,
        timeValue: {
          kind: 'parsed',
          value: null
        }
      }
    },
    deserialize: data => {
      const value = data[config.path];
      return {
        kind: 'update',
        initial: data[config.path],
        value: value ? deconstructTimestamp(value) : {
          dateValue: null,
          timeValue: {
            kind: 'parsed',
            value: null
          }
        }
      };
    },
    serialize: ({
      value: {
        dateValue,
        timeValue
      }
    }) => {
      if (dateValue && typeof timeValue === 'object' && timeValue.value !== null) {
        let formattedDate = constructTimestamp({
          dateValue,
          timeValue: timeValue.value
        });
        return {
          [config.path]: formattedDate
        };
      }

      return {
        [config.path]: null
      };
    },
    validate: value => validate(value, config.fieldMeta, config.label) === undefined
  };
};

exports.CardValue = CardValue;
exports.Cell = Cell;
exports.Field = Field;
exports.controller = controller;


/***/ }),

/***/ "../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.js":
/*!****************************************************************************************************!*\
  !*** ../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.js ***!
  \****************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./keystone.cjs.dev.js */ "../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.dev.js");
}


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App */ "@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App");
/* harmony import */ var _keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view */ "../../node_modules/@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/id-field-view/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/text/views */ "../../node_modules/@keystone-next/keystone/fields/types/text/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_select_views__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/select/views */ "../../node_modules/@keystone-next/keystone/fields/types/select/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_select_views__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_select_views__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/relationship/views */ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/timestamp/views */ "../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_5__);






var adminConfig = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_pages_App__WEBPACK_IMPORTED_MODULE_0__.getApp)({
  lazyMetadataQuery: {
    kind: 'Document',
    definitions: [{
      kind: 'OperationDefinition',
      operation: 'query',
      selectionSet: {
        kind: 'SelectionSet',
        selections: [{
          kind: 'Field',
          name: {
            kind: 'Name',
            value: 'keystone',
            loc: {
              start: 22,
              end: 30
            }
          },
          arguments: [],
          directives: [],
          selectionSet: {
            kind: 'SelectionSet',
            selections: [{
              kind: 'Field',
              name: {
                kind: 'Name',
                value: 'adminMeta',
                loc: {
                  start: 39,
                  end: 48
                }
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: 'SelectionSet',
                selections: [{
                  kind: 'Field',
                  name: {
                    kind: 'Name',
                    value: 'lists',
                    loc: {
                      start: 59,
                      end: 64
                    }
                  },
                  arguments: [],
                  directives: [],
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [{
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'key',
                        loc: {
                          start: 77,
                          end: 80
                        }
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 77,
                        end: 80
                      }
                    }, {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'isHidden',
                        loc: {
                          start: 91,
                          end: 99
                        }
                      },
                      arguments: [],
                      directives: [],
                      loc: {
                        start: 91,
                        end: 99
                      }
                    }, {
                      kind: 'Field',
                      name: {
                        kind: 'Name',
                        value: 'fields',
                        loc: {
                          start: 110,
                          end: 116
                        }
                      },
                      arguments: [],
                      directives: [],
                      selectionSet: {
                        kind: 'SelectionSet',
                        selections: [{
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'path',
                            loc: {
                              start: 131,
                              end: 135
                            }
                          },
                          arguments: [],
                          directives: [],
                          loc: {
                            start: 131,
                            end: 135
                          }
                        }, {
                          kind: 'Field',
                          name: {
                            kind: 'Name',
                            value: 'createView',
                            loc: {
                              start: 148,
                              end: 158
                            }
                          },
                          arguments: [],
                          directives: [],
                          selectionSet: {
                            kind: 'SelectionSet',
                            selections: [{
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'fieldMode',
                                loc: {
                                  start: 175,
                                  end: 184
                                }
                              },
                              arguments: [],
                              directives: [],
                              loc: {
                                start: 175,
                                end: 184
                              }
                            }],
                            loc: {
                              start: 159,
                              end: 198
                            }
                          },
                          loc: {
                            start: 148,
                            end: 198
                          }
                        }],
                        loc: {
                          start: 117,
                          end: 210
                        }
                      },
                      loc: {
                        start: 110,
                        end: 210
                      }
                    }],
                    loc: {
                      start: 65,
                      end: 220
                    }
                  },
                  loc: {
                    start: 59,
                    end: 220
                  }
                }],
                loc: {
                  start: 49,
                  end: 228
                }
              },
              loc: {
                start: 39,
                end: 228
              }
            }],
            loc: {
              start: 31,
              end: 234
            }
          },
          loc: {
            start: 22,
            end: 234
          }
        }]
      }
    }]
  },
  fieldViews: [_node_modules_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view__WEBPACK_IMPORTED_MODULE_1__, _node_modules_keystone_next_keystone_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__, _node_modules_keystone_next_keystone_fields_types_select_views__WEBPACK_IMPORTED_MODULE_3__, _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_4__, _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_5__],
  adminMetaHash: '1grf1qj',
  adminConfig: adminConfig,
  apiPath: '/api/graphql'
}));

/***/ }),

/***/ "../../node_modules/next/dist/client/link.js":
/*!***************************************************!*\
  !*** ../../node_modules/next/dist/client/link.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../shared/lib/router/router */ "../../node_modules/next/dist/shared/lib/router/router.js");

var _router1 = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

var _useIntersection = __webpack_require__(/*! ./use-intersection */ "../../node_modules/next/dist/client/use-intersection.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const prefetched = {};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router).isLocalURL(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  });
  const curLocale = options && typeof options.locale !== 'undefined' ? options.locale : router && router.locale; // Join on an invalid URI character

  prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router).isLocalURL(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null && as.indexOf('#') >= 0) {
    scroll = false;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale,
    scroll
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + ( false ? 0 : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://nextjs.org/docs/messages/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router1).useRouter();

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router).resolveHref(router, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router).resolveHref(router, props.as) : resolvedAs || resolvedHref
    };
  }, [router, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  let child;

  if (true) {
    try {
      child = _react.default.Children.only(children);
    } catch (err) {
      throw new Error(`Multiple children were passed to <Link> with \`href\` of \`${props.href}\` but only one child is supported https://nextjs.org/docs/messages/link-multiple-children` + ( false ? 0 : ''));
    }
  } else {}

  const childRef = child && typeof child === 'object' && child.ref;
  const [setIntersectionRef, isVisible] = (0, _useIntersection).useIntersection({
    rootMargin: '200px'
  });

  const setRef = _react.default.useCallback(el => {
    setIntersectionRef(el);

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [childRef, setIntersectionRef]);

  _react.default.useEffect(() => {
    const shouldPrefetch = isVisible && p && (0, _router).isLocalURL(href);
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale;
    const isPrefetched = prefetched[href + '%' + as + (curLocale ? '%' + curLocale : '')];

    if (shouldPrefetch && !isPrefetched) {
      prefetch(router, href, as, {
        locale: curLocale
      });
    }
  }, [as, href, isVisible, locale, p, router]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  childProps.onMouseEnter = e => {
    if (!(0, _router).isLocalURL(href)) return;

    if (child.props && typeof child.props.onMouseEnter === 'function') {
      child.props.onMouseEnter(e);
    }

    prefetch(router, href, as, {
      priority: true
    });
  }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    const curLocale = typeof locale !== 'undefined' ? locale : router && router.locale; // we only render domain locales if we are currently on a domain locale
    // so that locale links are still visitable in development/preview envs

    const localeDomain = router && router.isLocaleDomain && (0, _router).getDomainLocale(as, curLocale, router && router.locales, router && router.domainLocales);
    childProps.href = localeDomain || (0, _router).addBasePath((0, _router).addLocale(as, curLocale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "../../node_modules/next/dist/client/normalize-trailing-slash.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}

const normalizePathTrailingSlash =  false ? 0 : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "../../node_modules/next/dist/client/request-idle-callback.js":
/*!********************************************************************!*\
  !*** ../../node_modules/next/dist/client/request-idle-callback.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.requestIdleCallback = exports.cancelIdleCallback = void 0;

const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function (cb) {
  let start = Date.now();
  return setTimeout(function () {
    cb({
      didTimeout: false,
      timeRemaining: function () {
        return Math.max(0, 50 - (Date.now() - start));
      }
    });
  }, 1);
};

exports.requestIdleCallback = requestIdleCallback;

const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function (id) {
  return clearTimeout(id);
};

exports.cancelIdleCallback = cancelIdleCallback;

/***/ }),

/***/ "../../node_modules/next/dist/client/route-loader.js":
/*!***********************************************************!*\
  !*** ../../node_modules/next/dist/client/route-loader.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.markAssetError = markAssetError;
exports.isAssetError = isAssetError;
exports.getClientBuildManifest = getClientBuildManifest;
exports.createRouteLoader = createRouteLoader;

var _getAssetPathFromRoute = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/utils/get-asset-path-from-route */ "../shared/lib/router/utils/get-asset-path-from-route"));

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../../node_modules/next/dist/client/request-idle-callback.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.


const MS_MAX_IDLE_DELAY = 3800;

function withFuture(key, map, generator) {
  let entry = map.get(key);

  if (entry) {
    if ('future' in entry) {
      return entry.future;
    }

    return Promise.resolve(entry);
  }

  let resolver;
  const prom = new Promise(resolve => {
    resolver = resolve;
  });
  map.set(key, entry = {
    resolve: resolver,
    future: prom
  });
  return generator ? generator().then(value => (resolver(value), value)) : prom;
}

function hasPrefetch(link) {
  try {
    link = document.createElement('link');
    return (// detect IE11 since it supports prefetch but isn't detected
      // with relList.support
      !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch')
    );
  } catch (e) {
    return false;
  }
}

const canPrefetch = hasPrefetch();

function prefetchViaDom(href, as, link) {
  return new Promise((res, rej) => {
    if (document.querySelector(`link[rel="prefetch"][href^="${href}"]`)) {
      return res();
    }

    link = document.createElement('link'); // The order of property assignment here is intentional:

    if (as) link.as = as;
    link.rel = `prefetch`;
    link.crossOrigin = undefined;
    link.onload = res;
    link.onerror = rej; // `href` should always be last:

    link.href = href;
    document.head.appendChild(link);
  });
}

const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');

function markAssetError(err) {
  return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}

function isAssetError(err) {
  return err && ASSET_LOAD_ERROR in err;
}

function appendScript(src, script) {
  return new Promise((resolve, reject) => {
    script = document.createElement('script'); // The order of property assignment here is intentional.
    // 1. Setup success/failure hooks in case the browser synchronously
    //    executes when `src` is set.

    script.onload = resolve;

    script.onerror = () => reject(markAssetError(new Error(`Failed to load script: ${src}`))); // 2. Configure the cross-origin attribute before setting `src` in case the
    //    browser begins to fetch.


    script.crossOrigin = undefined; // 3. Finally, set the source and inject into the DOM in case the child
    //    must be appended for fetching to start.

    script.src = src;
    document.body.appendChild(script);
  });
} // We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.


let devBuildPromise; // Resolve a promise that times out after given amount of milliseconds.

function resolvePromiseWithTimeout(p, ms, err) {
  return new Promise((resolve, reject) => {
    let cancelled = false;
    p.then(r => {
      // Resolved, cancel the timeout
      cancelled = true;
      resolve(r);
    }).catch(reject); // We wrap these checks separately for better dead-code elimination in
    // production bundles.

    if (true) {
      (devBuildPromise || Promise.resolve()).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => setTimeout(() => {
          if (!cancelled) {
            reject(err);
          }
        }, ms));
      });
    }

    if (false) {}
  });
}

function getClientBuildManifest() {
  if (self.__BUILD_MANIFEST) {
    return Promise.resolve(self.__BUILD_MANIFEST);
  }

  const onBuildManifest = new Promise(resolve => {
    // Mandatory because this is not concurrent safe:
    const cb = self.__BUILD_MANIFEST_CB;

    self.__BUILD_MANIFEST_CB = () => {
      resolve(self.__BUILD_MANIFEST);
      cb && cb();
    };
  });
  return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(new Error('Failed to load client build manifest')));
}

function getFilesForRoute(assetPrefix, route) {
  if (true) {
    return Promise.resolve({
      scripts: [assetPrefix + '/_next/static/chunks/pages' + encodeURI((0, _getAssetPathFromRoute).default(route, '.js'))],
      // Styles are handled by `style-loader` in development:
      css: []
    });
  }

  return getClientBuildManifest().then(manifest => {
    if (!(route in manifest)) {
      throw markAssetError(new Error(`Failed to lookup route: ${route}`));
    }

    const allFiles = manifest[route].map(entry => assetPrefix + '/_next/' + encodeURI(entry));
    return {
      scripts: allFiles.filter(v => v.endsWith('.js')),
      css: allFiles.filter(v => v.endsWith('.css'))
    };
  });
}

function createRouteLoader(assetPrefix) {
  const entrypoints = new Map();
  const loadedScripts = new Map();
  const styleSheets = new Map();
  const routes = new Map();

  function maybeExecuteScript(src) {
    let prom = loadedScripts.get(src);

    if (prom) {
      return prom;
    } // Skip executing script if it's already in the DOM:


    if (document.querySelector(`script[src^="${src}"]`)) {
      return Promise.resolve();
    }

    loadedScripts.set(src, prom = appendScript(src));
    return prom;
  }

  function fetchStyleSheet(href) {
    let prom = styleSheets.get(href);

    if (prom) {
      return prom;
    }

    styleSheets.set(href, prom = fetch(href).then(res => {
      if (!res.ok) {
        throw new Error(`Failed to load stylesheet: ${href}`);
      }

      return res.text().then(text => ({
        href: href,
        content: text
      }));
    }).catch(err => {
      throw markAssetError(err);
    }));
    return prom;
  }

  return {
    whenEntrypoint(route) {
      return withFuture(route, entrypoints);
    },

    onEntrypoint(route, execute) {
      Promise.resolve(execute).then(fn => fn()).then(exports => ({
        component: exports && exports.default || exports,
        exports: exports
      }), err => ({
        error: err
      })).then(input => {
        const old = entrypoints.get(route);
        entrypoints.set(route, input);
        if (old && 'resolve' in old) old.resolve(input);
      });
    },

    loadRoute(route, prefetch) {
      return withFuture(route, routes, () => {
        const routeFilesPromise = getFilesForRoute(assetPrefix, route).then(({
          scripts,
          css
        }) => {
          return Promise.all([entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)), Promise.all(css.map(fetchStyleSheet))]);
        }).then(res => {
          return this.whenEntrypoint(route).then(entrypoint => ({
            entrypoint,
            styles: res[1]
          }));
        });

        if (true) {
          devBuildPromise = new Promise(resolve => {
            if (routeFilesPromise) {
              return routeFilesPromise.finally(() => {
                resolve();
              });
            }
          });
        }

        return resolvePromiseWithTimeout(routeFilesPromise, MS_MAX_IDLE_DELAY, markAssetError(new Error(`Route did not complete loading: ${route}`))).then(({
          entrypoint,
          styles
        }) => {
          const res = Object.assign({
            styles: styles
          }, entrypoint);
          return 'error' in entrypoint ? entrypoint : res;
        }).catch(err => {
          if (prefetch) {
            // we don't want to cache errors during prefetch
            throw err;
          }

          return {
            error: err
          };
        });
      });
    },

    prefetch(route) {
      // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
      // License: Apache 2.0
      let cn;

      if (cn = navigator.connection) {
        // Don't prefetch if using 2G or if Save-Data is enabled.
        if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
      }

      return getFilesForRoute(assetPrefix, route).then(output => Promise.all(canPrefetch ? output.scripts.map(script => prefetchViaDom(script, 'script')) : [])).then(() => {
        (0, _requestIdleCallback).requestIdleCallback(() => this.loadRoute(route, true).catch(() => {}));
      }).catch( // swallow prefetch errors
      () => {});
    }

  };
}

/***/ }),

/***/ "../../node_modules/next/dist/client/router.js":
/*!*****************************************************!*\
  !*** ../../node_modules/next/dist/client/router.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "Router", ({
  enumerable: true,
  get: function () {
    return _router.default;
  }
}));
Object.defineProperty(exports, "withRouter", ({
  enumerable: true,
  get: function () {
    return _withRouter.default;
  }
}));
exports.useRouter = useRouter;
exports.createRouter = createRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = _interopRequireDefault(__webpack_require__(/*! ../shared/lib/router/router */ "../../node_modules/next/dist/shared/lib/router/router.js"));

var _routerContext = __webpack_require__(/*! ../shared/lib/router-context */ "../shared/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "../../node_modules/next/dist/client/with-router.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const singletonRouter = {
  router: null,
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale', 'isReady', 'isPreview', 'isLocaleDomain', 'domainLocales'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
}

var _default = singletonRouter;
exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
}

function createRouter(...args) {
  singletonRouter.router = new _router.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}

function makePublicRouterInstance(router) {
  const _router1 = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router1[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router1[property]) ? [] : {}, _router1[property]) // makes sure query is not stateful
      ;
      continue;
    }

    instance[property] = _router1[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router1[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/use-intersection.js":
/*!***************************************************************!*\
  !*** ../../node_modules/next/dist/client/use-intersection.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.useIntersection = useIntersection;

var _react = __webpack_require__(/*! react */ "react");

var _requestIdleCallback = __webpack_require__(/*! ./request-idle-callback */ "../../node_modules/next/dist/client/request-idle-callback.js");

const hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';

function useIntersection({
  rootMargin,
  disabled
}) {
  const isDisabled = disabled || !hasIntersectionObserver;
  const unobserve = (0, _react).useRef();
  const [visible, setVisible] = (0, _react).useState(false);
  const setRef = (0, _react).useCallback(el => {
    if (unobserve.current) {
      unobserve.current();
      unobserve.current = undefined;
    }

    if (isDisabled || visible) return;

    if (el && el.tagName) {
      unobserve.current = observe(el, isVisible => isVisible && setVisible(isVisible), {
        rootMargin
      });
    }
  }, [isDisabled, rootMargin, visible]);
  (0, _react).useEffect(() => {
    if (!hasIntersectionObserver) {
      if (!visible) {
        const idleCallback = (0, _requestIdleCallback).requestIdleCallback(() => setVisible(true));
        return () => (0, _requestIdleCallback).cancelIdleCallback(idleCallback);
      }
    }
  }, [visible]);
  return [setRef, visible];
}

function observe(element, callback, options) {
  const {
    id,
    observer,
    elements
  } = createObserver(options);
  elements.set(element, callback);
  observer.observe(element);
  return function unobserve() {
    elements.delete(element);
    observer.unobserve(element); // Destroy observer when there's nothing left to watch:

    if (elements.size === 0) {
      observer.disconnect();
      observers.delete(id);
    }
  };
}

const observers = new Map();

function createObserver(options) {
  const id = options.rootMargin || '';
  let instance = observers.get(id);

  if (instance) {
    return instance;
  }

  const elements = new Map();
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const callback = elements.get(entry.target);
      const isVisible = entry.isIntersecting || entry.intersectionRatio > 0;

      if (callback && isVisible) {
        callback(isVisible);
      }
    });
  }, options);
  observers.set(id, instance = {
    id,
    observer,
    elements
  });
  return instance;
}

/***/ }),

/***/ "../../node_modules/next/dist/client/with-router.js":
/*!**********************************************************!*\
  !*** ../../node_modules/next/dist/client/with-router.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "../../node_modules/next/dist/client/router.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router).useRouter()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "../../node_modules/next/dist/shared/lib/router/router.js":
/*!****************************************************************!*\
  !*** ../../node_modules/next/dist/shared/lib/router/router.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.getDomainLocale = getDomainLocale;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "../../node_modules/next/dist/client/normalize-trailing-slash.js");

var _routeLoader = __webpack_require__(/*! ../../../client/route-loader */ "../../node_modules/next/dist/client/route-loader.js");

var _denormalizePagePath = __webpack_require__(/*! ../../../server/denormalize-page-path */ "../../../server/denormalize-page-path");

var _normalizeLocalePath = __webpack_require__(/*! ../i18n/normalize-locale-path */ "../i18n/normalize-locale-path");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "../mitt"));

var _utils = __webpack_require__(/*! ../utils */ "../shared/lib/utils");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./utils/is-dynamic");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./utils/parse-relative-url");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./utils/querystring");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "?ba11"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./utils/route-matcher");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./utils/route-regex");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

let detectDomainLocale;

if (false) {}

const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash).normalizePathTrailingSlash(prefix) : `${prefix}${pathNoQueryHash(path) === '/' ? path.substring(1) : path}` : path;
}

function getDomainLocale(path, locale, locales, domainLocales) {
  if (false) {} else {
    return false;
  }
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function pathNoQueryHash(path) {
  const queryIndex = path.indexOf('?');
  const hashIndex = path.indexOf('#');

  if (queryIndex > -1 || hashIndex > -1) {
    path = path.substring(0, queryIndex > -1 ? queryIndex : hashIndex);
  }

  return path;
}

function hasBasePath(path) {
  path = pathNoQueryHash(path);
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  path = path.slice(basePath.length);
  if (!path.startsWith('/')) path = `/${path}`;
  return path;
}

function isLocalURL(url) {
  // prevent a hydration mismatch on href for url with anchor refs
  if (url.startsWith('/') || url.startsWith('#') || url.startsWith('?')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils).getLocationOrigin();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex).getRouteRegex(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher).getRouteMatcher(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && (interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map( // these values should be fully encoded instead of just
    // path delimiter escaped since they are being inserted
    // into the URL and we expect URL encoded segments
    // when parsing dynamic route params
    segment => encodeURIComponent(segment)).join('/') : encodeURIComponent(value)) || '/');
  })) {
    interpolatedRoute = '' // did not satisfy all requirements
    ; // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}

function resolveHref(router, href, resolveAs) {
  // we use a dummy base url for relative urls
  let base;
  let urlAsString = typeof href === 'string' ? href : (0, _utils).formatWithValidation(href); // repeated slashes and backslashes in the URL are considered
  // invalid and will never match a Next.js page/file

  const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
  const urlAsStringNoProto = urlProtoMatch ? urlAsString.substr(urlProtoMatch[0].length) : urlAsString;
  const urlParts = urlAsStringNoProto.split('?');

  if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
    console.error(`Invalid href passed to next/router: ${urlAsString}, repeated forward-slashes (//) or backslashes \\ are not valid in the href`);
    const normalizedUrl = (0, _utils).normalizeRepeatedSlashes(urlAsStringNoProto);
    urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
  } // Return because it cannot be routed by the Next.js router


  if (!isLocalURL(urlAsString)) {
    return resolveAs ? [urlAsString] : urlAsString;
  }

  try {
    base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
  } catch (_) {
    // fallback to / for invalid asPath values e.g. //
    base = new URL('/', 'http://n');
  }

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash).normalizePathTrailingSlash(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic).isDynamicRoute(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring).searchParamsToUrlQuery(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils).formatWithValidation({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

function stripOrigin(url) {
  const origin = (0, _utils).getLocationOrigin();
  return url.startsWith(origin) ? url.substring(origin.length) : url;
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  let [resolvedHref, resolvedAs] = resolveHref(router, url, true);
  const origin = (0, _utils).getLocationOrigin();
  const hrefHadOrigin = resolvedHref.startsWith(origin);
  const asHadOrigin = resolvedAs && resolvedAs.startsWith(origin);
  resolvedHref = stripOrigin(resolvedHref);
  resolvedAs = resolvedAs ? stripOrigin(resolvedAs) : resolvedAs;
  const preparedUrl = hrefHadOrigin ? resolvedHref : addBasePath(resolvedHref);
  const preparedAs = as ? stripOrigin(resolveHref(router, as)) : resolvedAs || resolvedHref;
  return {
    url: preparedUrl,
    as: asHadOrigin ? preparedAs : addBasePath(preparedAs)
  };
}

function resolveDynamicRoute(pathname, pages) {
  const cleanPathname = (0, _normalizeTrailingSlash).removePathTrailingSlash((0, _denormalizePagePath).denormalizePagePath(pathname));

  if (cleanPathname === '/404' || cleanPathname === '/_error') {
    return pathname;
  } // handle resolving href for dynamic routes


  if (!pages.includes(cleanPathname)) {
    // eslint-disable-next-line array-callback-return
    pages.some(page => {
      if ((0, _isDynamic).isDynamicRoute(page) && (0, _routeRegex).getRouteRegex(page).re.test(cleanPathname)) {
        pathname = page;
        return true;
      }
    });
  }

  return (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname);
}

const manualScrollRestoration =  false && 0;
const SSG_DATA_NOT_FOUND = Symbol('SSG_DATA_NOT_FOUND');

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        return res.json().then(data => {
          if (data.notFound) {
            return {
              notFound: SSG_DATA_NOT_FOUND
            };
          }

          throw new Error(`Failed to load static props`);
        });
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      (0, _routeLoader).markAssetError(err);
    }

    throw err;
  });
}

class Router {
  constructor(pathname1, query1, as1, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component: Component1,
    err: err1,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale,
    domainLocales,
    isPreview
  }) {
    // Static Data Cache
    this.sdc = {}; // In-flight Server Data Requests, for deduping

    this.sdr = {};
    this._idx = 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname: pathname1,
          query: query1
        } = this;
        this.changeState('replaceState', (0, _utils).formatWithValidation({
          pathname: addBasePath(pathname1),
          query: query1
        }), (0, _utils).getURL());
        return;
      }

      if (!state.__N) {
        return;
      }

      let forcedScroll;
      const {
        url,
        as: as1,
        options,
        idx
      } = state;

      if (false) {}

      this._idx = idx;
      const {
        pathname: pathname1
      } = (0, _parseRelativeUrl).parseRelativeUrl(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as1 === this.asPath && pathname1 === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as1, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }), forcedScroll);
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname1 !== '/_error') {
      this.components[this.route] = {
        Component: Component1,
        initial: true,
        props: initialProps,
        err: err1,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: []
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname1;
    this.query = query1; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    const autoExportDynamic = (0, _isDynamic).isDynamicRoute(pathname1) && self.__NEXT_DATA__.autoExport;

    this.asPath = autoExportDynamic ? pathname1 : as1;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;
    this.isReady = !!(self.__NEXT_DATA__.gssp || self.__NEXT_DATA__.gip || self.__NEXT_DATA__.appGip && !self.__NEXT_DATA__.gsp || !autoExportDynamic && !self.location.search && !false);
    this.isPreview = !!isPreview;
    this.isLocaleDomain = false;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as, options = {}) {
    if (false) {}

    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as, options = {}) {
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options, forcedScroll) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    const shouldResolveHref = url === as || options._h || options._shouldResolveHref; // for static pages with query params in the URL we delay
    // marking the router ready until after the query is updated

    if (options._h) {
      this.isReady = true;
    }

    const prevLocale = this.locale;

    if (false) { var ref; }

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    const {
      shallow = false
    } = options;
    const routeProps = {
      shallow
    };

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute, routeProps);
    }

    as = addBasePath(addLocale(hasBasePath(as) ? delBasePath(as) : as, options.locale, this.defaultLocale));
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as;
    let localeChange = prevLocale !== this.locale; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs) && !localeChange) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as, routeProps); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route], null);
      Router.events.emit('hashChangeComplete', as, routeProps);
      return true;
    }

    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname1,
      query: query1
    } = parsed; // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to

    let pages, rewrites;

    try {
      pages = await this.pageLoader.getPageList();
      ({
        __rewrites: rewrites
      } = await (0, _routeLoader).getClientBuildManifest());
    } catch (err1) {
      // If we fail to resolve the page list or client-build manifest, we must
      // do a server-side transition:
      window.location.href = as;
      return false;
    } // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url


    if (!this.urlIsNew(cleanedAs) && !localeChange) {
      method = 'replaceState';
    } // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly


    let resolvedAs = as; // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1

    pathname1 = pathname1 ? (0, _normalizeTrailingSlash).removePathTrailingSlash(delBasePath(pathname1)) : pathname1;

    if (shouldResolveHref && pathname1 !== '/_error') {
      options._shouldResolveHref = true;

      if (false) {} else {
        parsed.pathname = resolveDynamicRoute(pathname1, pages);

        if (parsed.pathname !== pathname1) {
          pathname1 = parsed.pathname;
          parsed.pathname = addBasePath(pathname1);
          url = (0, _utils).formatWithValidation(parsed);
        }
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname1);

    if (!isLocalURL(as)) {
      if (true) {
        throw new Error(`Invalid href: "${url}" and as: "${as}", received relative href and external as` + `\nSee more info: https://nextjs.org/docs/messages/invalid-relative-url-external-as`);
      }

      window.location.href = as;
      return false;
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic).isDynamicRoute(route)) {
      const parsedAs = (0, _parseRelativeUrl).parseRelativeUrl(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex).getRouteRegex(route);
      const routeMatch = (0, _routeMatcher).getRouteMatcher(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query1) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query1[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://nextjs.org/docs/messages/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils).formatWithValidation(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query1, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query1, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as, routeProps);

    try {
      var ref, ref1;
      let routeInfo = await this.getRouteInfo(route, pathname1, query1, as, resolvedAs, routeProps);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props) {
        if (props.pageProps && props.pageProps.__N_REDIRECT) {
          const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
          // client-navigation if it is falling back to hard navigation if
          // it's not

          if (destination.startsWith('/')) {
            const parsedHref = (0, _parseRelativeUrl).parseRelativeUrl(destination);
            parsedHref.pathname = resolveDynamicRoute(parsedHref.pathname, pages);
            const {
              url: newUrl,
              as: newAs
            } = prepareUrlAs(this, destination, destination);
            return this.change(method, newUrl, newAs, options);
          }

          window.location.href = destination;
          return new Promise(() => {});
        }

        this.isPreview = !!props.__N_PREVIEW; // handle SSG data 404

        if (props.notFound === SSG_DATA_NOT_FOUND) {
          let notFoundRoute;

          try {
            await this.fetchComponent('/404');
            notFoundRoute = '/404';
          } catch (_) {
            notFoundRoute = '/_error';
          }

          routeInfo = await this.getRouteInfo(notFoundRoute, notFoundRoute, query1, as, resolvedAs, {
            shallow: false
          });
        }
      }

      Router.events.emit('beforeHistoryChange', as, routeProps);
      this.changeState(method, url, as, options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      if (options._h && pathname1 === '/_error' && ((ref = self.__NEXT_DATA__.props) === null || ref === void 0 ? void 0 : (ref1 = ref.pageProps) === null || ref1 === void 0 ? void 0 : ref1.statusCode) === 500 && (props === null || props === void 0 ? void 0 : props.pageProps)) {
        // ensure statusCode is still correct for static 500 page
        // when updating query information
        props.pageProps.statusCode = 500;
      } // shallow routing is only allowed for same page URL changes.


      const isValidShallowRoute = options.shallow && this.route === route;

      var _scroll;

      const shouldScroll = (_scroll = options.scroll) !== null && _scroll !== void 0 ? _scroll : !isValidShallowRoute;
      const resetScroll = shouldScroll ? {
        x: 0,
        y: 0
      } : null;
      await this.set(route, pathname1, query1, cleanedAs, routeInfo, forcedScroll !== null && forcedScroll !== void 0 ? forcedScroll : resetScroll).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs, routeProps);
        throw error;
      }

      if (false) {}

      Router.events.emit('routeChangeComplete', as, routeProps);
      return true;
    } catch (err1) {
      if (err1.cancelled) {
        return false;
      }

      throw err1;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils).getURL() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true,
        idx: this._idx = method !== 'pushState' ? this._idx : this._idx + 1
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, routeProps, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if ((0, _routeLoader).isAssetError(err) || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as, routeProps); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component1;
      let styleSheets;
      let props;

      if (typeof Component1 === 'undefined' || typeof styleSheets === 'undefined') {
        ({
          page: Component1,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component: Component1,
        styleSheets,
        err,
        error: err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component1, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, routeProps, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, resolvedAs, routeProps) {
    try {
      const existingRouteInfo = this.components[route];

      if (routeProps.shallow && existingRouteInfo && this.route === route) {
        return existingRouteInfo;
      }

      const cachedRouteInfo = existingRouteInfo && 'initial' in existingRouteInfo ? undefined : existingRouteInfo;
      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component: Component1,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "../../node_modules/next/node_modules/react-is/index.js");

        if (!isValidElementType(Component1)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils).formatWithValidation({
          pathname,
          query
        }), resolvedAs, __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component1, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as,
        locale: this.locale,
        locales: this.locales,
        defaultLocale: this.defaultLocale
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err2) {
      return this.handleRouteInfoError(err2, pathname, query, as, routeProps);
    }
  }

  set(route, pathname, query, as, data, resetScroll) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data, resetScroll);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value or `#top`
    // To mirror browsers

    if (hash === '' || hash === 'top') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl).parseRelativeUrl(url);
    let {
      pathname: pathname2
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    let resolvedAs = asPath;

    if (false) {} else {
      parsed.pathname = resolveDynamicRoute(parsed.pathname, pages);

      if (parsed.pathname !== pathname2) {
        pathname2 = parsed.pathname;
        parsed.pathname = pathname2;
        url = (0, _utils).formatWithValidation(parsed);
      }
    }

    const route = (0, _normalizeTrailingSlash).removePathTrailingSlash(pathname2); // Prefetch is not supported in development mode because it would trigger on-demand-entries

    if (true) {
      return;
    }

    await Promise.all([this.pageLoader._isSsg(route).then(isSsg => {
      return isSsg ? this._getStaticData(this.pageLoader.getDataHref(url, resolvedAs, true, typeof options.locale !== 'undefined' ? options.locale : this.locale)) : false;
    }), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err2 = new Error('Loading initial props cancelled');
        err2.cancelled = true;
        throw err2;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    const {
      href: resourceKey
    } = new URL(dataHref, window.location.href);

    if (this.sdr[resourceKey]) {
      return this.sdr[resourceKey];
    }

    return this.sdr[resourceKey] = fetchNextData(dataHref, this.isSsr).then(data => {
      delete this.sdr[resourceKey];
      return data;
    }).catch(err2 => {
      delete this.sdr[resourceKey];
      throw err2;
    });
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App1
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App1);

    ctx.AppTree = AppTree;
    return (0, _utils).loadGetInitialProps(App1, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as, routeProps) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as, routeProps);
      this.clc();
      this.clc = null;
    }
  }

  notify(data, resetScroll) {
    return this.sub(data, this.components['/_app'].Component, resetScroll);
  }

}

Router.events = (0, _mitt).default();
exports.default = Router;

/***/ }),

/***/ "../../node_modules/next/link.js":
/*!***************************************!*\
  !*** ../../node_modules/next/link.js ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(/*! ./dist/client/link */ "../../node_modules/next/dist/client/link.js")


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/next/node_modules/react-is/cjs/react-is.development.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
/** @license React v17.0.2
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {
'use strict';

// ATTENTION
// When adding new symbols to this file,
// Please consider also adding to 'react-devtools-shared/src/backend/ReactSymbols'
// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE = 0xeac7;
var REACT_PORTAL_TYPE = 0xeaca;
var REACT_FRAGMENT_TYPE = 0xeacb;
var REACT_STRICT_MODE_TYPE = 0xeacc;
var REACT_PROFILER_TYPE = 0xead2;
var REACT_PROVIDER_TYPE = 0xeacd;
var REACT_CONTEXT_TYPE = 0xeace;
var REACT_FORWARD_REF_TYPE = 0xead0;
var REACT_SUSPENSE_TYPE = 0xead1;
var REACT_SUSPENSE_LIST_TYPE = 0xead8;
var REACT_MEMO_TYPE = 0xead3;
var REACT_LAZY_TYPE = 0xead4;
var REACT_BLOCK_TYPE = 0xead9;
var REACT_SERVER_BLOCK_TYPE = 0xeada;
var REACT_FUNDAMENTAL_TYPE = 0xead5;
var REACT_SCOPE_TYPE = 0xead7;
var REACT_OPAQUE_ID_TYPE = 0xeae0;
var REACT_DEBUG_TRACING_MODE_TYPE = 0xeae1;
var REACT_OFFSCREEN_TYPE = 0xeae2;
var REACT_LEGACY_HIDDEN_TYPE = 0xeae3;

if (typeof Symbol === 'function' && Symbol.for) {
  var symbolFor = Symbol.for;
  REACT_ELEMENT_TYPE = symbolFor('react.element');
  REACT_PORTAL_TYPE = symbolFor('react.portal');
  REACT_FRAGMENT_TYPE = symbolFor('react.fragment');
  REACT_STRICT_MODE_TYPE = symbolFor('react.strict_mode');
  REACT_PROFILER_TYPE = symbolFor('react.profiler');
  REACT_PROVIDER_TYPE = symbolFor('react.provider');
  REACT_CONTEXT_TYPE = symbolFor('react.context');
  REACT_FORWARD_REF_TYPE = symbolFor('react.forward_ref');
  REACT_SUSPENSE_TYPE = symbolFor('react.suspense');
  REACT_SUSPENSE_LIST_TYPE = symbolFor('react.suspense_list');
  REACT_MEMO_TYPE = symbolFor('react.memo');
  REACT_LAZY_TYPE = symbolFor('react.lazy');
  REACT_BLOCK_TYPE = symbolFor('react.block');
  REACT_SERVER_BLOCK_TYPE = symbolFor('react.server.block');
  REACT_FUNDAMENTAL_TYPE = symbolFor('react.fundamental');
  REACT_SCOPE_TYPE = symbolFor('react.scope');
  REACT_OPAQUE_ID_TYPE = symbolFor('react.opaque.id');
  REACT_DEBUG_TRACING_MODE_TYPE = symbolFor('react.debug_trace_mode');
  REACT_OFFSCREEN_TYPE = symbolFor('react.offscreen');
  REACT_LEGACY_HIDDEN_TYPE = symbolFor('react.legacy_hidden');
}

// Filter certain DOM attributes (e.g. src, href) if their values are empty strings.

var enableScopeAPI = false; // Experimental Create Event Handle API.

function isValidElementType(type) {
  if (typeof type === 'string' || typeof type === 'function') {
    return true;
  } // Note: typeof might be other than 'symbol' or 'number' (e.g. if it's a polyfill).


  if (type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_DEBUG_TRACING_MODE_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_LEGACY_HIDDEN_TYPE || enableScopeAPI ) {
    return true;
  }

  if (typeof type === 'object' && type !== null) {
    if (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_BLOCK_TYPE || type[0] === REACT_SERVER_BLOCK_TYPE) {
      return true;
    }
  }

  return false;
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
          case REACT_SUSPENSE_LIST_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
}
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false;
var hasWarnedAboutDeprecatedIsConcurrentMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isConcurrentMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsConcurrentMode) {
      hasWarnedAboutDeprecatedIsConcurrentMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isConcurrentMode() alias has been deprecated, ' + 'and will be removed in React 18+.');
    }
  }

  return false;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "../../node_modules/next/node_modules/react-is/index.js":
/*!**************************************************************!*\
  !*** ../../node_modules/next/node_modules/react-is/index.js ***!
  \**************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "../../node_modules/next/node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@apollo/client");

/***/ }),

/***/ "@emotion/hash":
/*!********************************!*\
  !*** external "@emotion/hash" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/hash");

/***/ }),

/***/ "@emotion/weak-memoize":
/*!****************************************!*\
  !*** external "@emotion/weak-memoize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/weak-memoize");

/***/ }),

/***/ "@graphql-tools/schema":
/*!****************************************!*\
  !*** external "@graphql-tools/schema" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-tools/schema");

/***/ }),

/***/ "@graphql-ts/schema":
/*!*************************************!*\
  !*** external "@graphql-ts/schema" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema");

/***/ }),

/***/ "@graphql-ts/schema/api-with-context":
/*!******************************************************!*\
  !*** external "@graphql-ts/schema/api-with-context" ***!
  \******************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema/api-with-context");

/***/ }),

/***/ "@graphql-ts/schema/api-without-context":
/*!*********************************************************!*\
  !*** external "@graphql-ts/schema/api-without-context" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@graphql-ts/schema/api-without-context");

/***/ }),

/***/ "@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App":
/*!********************************************************************************************************!*\
  !*** external "@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App" ***!
  \********************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-next/keystone/___internal-do-not-use-will-break-in-patch/admin-ui/pages/App");

/***/ }),

/***/ "@keystone-ui/button":
/*!**************************************!*\
  !*** external "@keystone-ui/button" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/button");

/***/ }),

/***/ "@keystone-ui/core":
/*!************************************!*\
  !*** external "@keystone-ui/core" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/core");

/***/ }),

/***/ "@keystone-ui/fields":
/*!**************************************!*\
  !*** external "@keystone-ui/fields" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/fields");

/***/ }),

/***/ "@keystone-ui/icons/icons/AlertTriangleIcon":
/*!*************************************************************!*\
  !*** external "@keystone-ui/icons/icons/AlertTriangleIcon" ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/AlertTriangleIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/ChevronRightIcon":
/*!************************************************************!*\
  !*** external "@keystone-ui/icons/icons/ChevronRightIcon" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/ChevronRightIcon");

/***/ }),

/***/ "@keystone-ui/icons/icons/MoreHorizontalIcon":
/*!**************************************************************!*\
  !*** external "@keystone-ui/icons/icons/MoreHorizontalIcon" ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/icons/icons/MoreHorizontalIcon");

/***/ }),

/***/ "@keystone-ui/loading":
/*!***************************************!*\
  !*** external "@keystone-ui/loading" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/loading");

/***/ }),

/***/ "@keystone-ui/modals":
/*!**************************************!*\
  !*** external "@keystone-ui/modals" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/modals");

/***/ }),

/***/ "@keystone-ui/notice":
/*!**************************************!*\
  !*** external "@keystone-ui/notice" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/notice");

/***/ }),

/***/ "@keystone-ui/popover":
/*!***************************************!*\
  !*** external "@keystone-ui/popover" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/popover");

/***/ }),

/***/ "@keystone-ui/segmented-control":
/*!*************************************************!*\
  !*** external "@keystone-ui/segmented-control" ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/segmented-control");

/***/ }),

/***/ "@keystone-ui/toast":
/*!*************************************!*\
  !*** external "@keystone-ui/toast" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/toast");

/***/ }),

/***/ "@keystone-ui/tooltip":
/*!***************************************!*\
  !*** external "@keystone-ui/tooltip" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@keystone-ui/tooltip");

/***/ }),

/***/ "apollo-upload-client":
/*!***************************************!*\
  !*** external "apollo-upload-client" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("apollo-upload-client");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("date-fns");

/***/ }),

/***/ "decimal.js":
/*!*****************************!*\
  !*** external "decimal.js" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("decimal.js");

/***/ }),

/***/ "fast-deep-equal":
/*!**********************************!*\
  !*** external "fast-deep-equal" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("fast-deep-equal");

/***/ }),

/***/ "graphql":
/*!**************************!*\
  !*** external "graphql" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql");

/***/ }),

/***/ "graphql-type-json":
/*!************************************!*\
  !*** external "graphql-type-json" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-type-json");

/***/ }),

/***/ "graphql-upload/public/GraphQLUpload.js":
/*!*********************************************************!*\
  !*** external "graphql-upload/public/GraphQLUpload.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("graphql-upload/public/GraphQLUpload.js");

/***/ }),

/***/ "intersection-observer":
/*!****************************************!*\
  !*** external "intersection-observer" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("intersection-observer");

/***/ }),

/***/ "../../../server/denormalize-page-path":
/*!************************************************************!*\
  !*** external "next/dist/server/denormalize-page-path.js" ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ "../i18n/normalize-locale-path":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/i18n/normalize-locale-path.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ "../mitt":
/*!***********************************************!*\
  !*** external "next/dist/shared/lib/mitt.js" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ "../shared/lib/router-context":
/*!*********************************************************!*\
  !*** external "next/dist/shared/lib/router-context.js" ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ "../shared/lib/router/utils/get-asset-path-from-route":
/*!*********************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/get-asset-path-from-route.js" ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ "./utils/is-dynamic":
/*!******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/is-dynamic.js" ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ "./utils/parse-relative-url":
/*!**************************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/parse-relative-url.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ "./utils/querystring":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/querystring.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ "./utils/route-matcher":
/*!*********************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-matcher.js" ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ "./utils/route-regex":
/*!*******************************************************************!*\
  !*** external "next/dist/shared/lib/router/utils/route-regex.js" ***!
  \*******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ "../shared/lib/utils":
/*!************************************************!*\
  !*** external "next/dist/shared/lib/utils.js" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("uuid");

/***/ }),

/***/ "?ba11":
/*!******************************************!*\
  !*** ./utils/resolve-rewrites (ignored) ***!
  \******************************************/
/***/ (() => {

/* (ignored) */

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLDZEQUE2RCxJQUFJO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0Qix3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QU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztB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QUFDQSx1QkFBdUI7QUFDdkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxZQUFZO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFD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Ozs7Ozs7O0FDTkE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9fX19pbnRlcm5hbC1kby1ub3QtdXNlLXdpbGwtYnJlYWstaW4tcGF0Y2gvYWRtaW4tdWkvaWQtZmllbGQtdmlldy9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9fX19pbnRlcm5hbC1kby1ub3QtdXNlLXdpbGwtYnJlYWstaW4tcGF0Y2gvYWRtaW4tdWkvaWQtZmllbGQtdmlldy9kaXN0L2tleXN0b25lLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2FkbWluLXVpL2NvbnRleHQvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvQ2VsbENvbnRhaW5lci00NTMyNTRiNS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9DZWxsTGluay01MDlmYjE2Ni5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9DcmVhdGVJdGVtRHJhd2VyLWI0YjBkZDE2LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L0ZpZWxkcy00YWZiMzhmMC5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9HcmFwaFFMRXJyb3JOb3RpY2UtNzZmZjk2ZGQuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvU2lnbm91dEJ1dHRvbi1hY2RiMTU1NC5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9hZG1pbi1tZXRhLWdyYXBocWwtOWY5YTljMTEuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvY29yZS1jOGVjY2UyMy5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9kYXRhR2V0dGVyLTlmYmUyZjhlLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L2dldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlci00NzY5OWEwZC5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9ncmFwaHFsLXRzLXNjaGVtYS1mY2U3YTZhOC5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9zcWxpdGUtYWY5ZTUxNDguY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvdXNlSW52YWxpZEZpZWxkcy0xNjJkMWI5Yy5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC91dGlscy1lZmYxZmQzMC5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvcmVsYXRpb25zaGlwL3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvc2VsZWN0L3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3RleHQvdmlld3MvZGlzdC9rZXlzdG9uZS5janMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy90aW1lc3RhbXAvdmlld3MvZGlzdC9rZXlzdG9uZS5janMuanMiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlLWxvYWRlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcm91dGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC91c2UtaW50ZXJzZWN0aW9uLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC93aXRoLXJvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L25vZGVfbW9kdWxlcy9yZWFjdC1pcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYXBvbGxvL2NsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBlbW90aW9uL2hhc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi93ZWFrLW1lbW9pemVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10cy9zY2hlbWFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLW5leHQva2V5c3RvbmUvX19faW50ZXJuYWwtZG8tbm90LXVzZS13aWxsLWJyZWFrLWluLXBhdGNoL2FkbWluLXVpL3BhZ2VzL0FwcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9idXR0b25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvY29yZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9maWVsZHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQWxlcnRUcmlhbmdsZUljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQ2hldnJvblJpZ2h0SWNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvbG9hZGluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9tb2RhbHNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvbm90aWNlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3BvcG92ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2xcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvdG9hc3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvdG9vbHRpcFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImFwb2xsby11cGxvYWQtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGF0ZS1mbnNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJkZWNpbWFsLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZmFzdC1kZWVwLWVxdWFsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdHlwZS1qc29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2VydmVyL2Rlbm9ybWFsaXplLXBhZ2UtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0LmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9yb3V0ZS1yZWdleC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInV1aWRcIiIsIndlYnBhY2s6Ly8vaWdub3JlZHxEOlxcY2hlZmRvZy5jb21cXGNoZWZkb2cuY29tXFxjZmctYmFja2VuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XHJcbiAgaWYgKGtleSBpbiBvYmopIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwge1xyXG4gICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXHJcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIG9iajtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XHJcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7XHJcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xyXG5cclxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xyXG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XHJcbiAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgfTtcclxuXHJcbiAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xyXG4gIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9leHRlbmRzO1xyXG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHkuanNcIik7XHJcblxyXG5mdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHtcclxuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XHJcblxyXG4gIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XHJcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcclxuXHJcbiAgICBpZiAoZW51bWVyYWJsZU9ubHkpIHtcclxuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGtleXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQyKHRhcmdldCkge1xyXG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldICE9IG51bGwgPyBhcmd1bWVudHNbaV0gOiB7fTtcclxuXHJcbiAgICBpZiAoaSAlIDIpIHtcclxuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSwgdHJ1ZSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKSB7XHJcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdGFyZ2V0O1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF9vYmplY3RTcHJlYWQyO1xyXG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIG9iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UgPSByZXF1aXJlKFwiLi9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHNvdXJjZSwgZXhjbHVkZWQpIHtcclxuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcclxuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcclxuICB2YXIga2V5LCBpO1xyXG5cclxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xyXG4gICAgdmFyIHNvdXJjZVN5bWJvbEtleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHNvdXJjZSk7XHJcblxyXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAga2V5ID0gc291cmNlU3ltYm9sS2V5c1tpXTtcclxuICAgICAgaWYgKGV4Y2x1ZGVkLmluZGV4T2Yoa2V5KSA+PSAwKSBjb250aW51ZTtcclxuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcclxuICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzO1xyXG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xyXG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xyXG4gIHZhciB0YXJnZXQgPSB7fTtcclxuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XHJcbiAgdmFyIGtleSwgaTtcclxuXHJcbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGtleSA9IHNvdXJjZUtleXNbaV07XHJcbiAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xyXG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcclxuICB9XHJcblxyXG4gIHJldHVybiB0YXJnZXQ7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XHJcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgX3R5cGVvZiA9IHJlcXVpcmUoXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZlwiKVtcImRlZmF1bHRcIl07XHJcblxyXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcclxuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcclxuICB2YXIgcHJpbSA9IGlucHV0W1N5bWJvbC50b1ByaW1pdGl2ZV07XHJcblxyXG4gIGlmIChwcmltICE9PSB1bmRlZmluZWQpIHtcclxuICAgIHZhciByZXMgPSBwcmltLmNhbGwoaW5wdXQsIGhpbnQgfHwgXCJkZWZhdWx0XCIpO1xyXG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoaGludCA9PT0gXCJzdHJpbmdcIiA/IFN0cmluZyA6IE51bWJlcikoaW5wdXQpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90b1ByaW1pdGl2ZTtcclxubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpW1wiZGVmYXVsdFwiXTtcclxuXHJcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoXCIuL3RvUHJpbWl0aXZlLmpzXCIpO1xyXG5cclxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XHJcbiAgdmFyIGtleSA9IHRvUHJpbWl0aXZlKGFyZywgXCJzdHJpbmdcIik7XHJcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IF90b1Byb3BlcnR5S2V5O1xyXG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XHJcblxyXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICB9IGVsc2Uge1xyXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcclxuICAgICAgcmV0dXJuIG9iaiAmJiB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfdHlwZW9mKG9iaik7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gX3R5cGVvZjtcclxubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XHJcblxyXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XHJcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XHJcbnZhciBDZWxsQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZGlzdC9DZWxsQ29udGFpbmVyLTQ1MzI1NGI1LmNqcy5kZXYuanMnKTtcclxudmFyIENlbGxMaW5rID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZGlzdC9DZWxsTGluay01MDlmYjE2Ni5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcclxucmVxdWlyZSgncmVhY3QnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQWxlcnRUcmlhbmdsZUljb24nKTtcclxucmVxdWlyZSgnbmV4dC9saW5rJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b2FzdCcpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbW9kYWxzJyk7XHJcbnJlcXVpcmUoJ2Fwb2xsby11cGxvYWQtY2xpZW50Jyk7XHJcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xyXG5yZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vZGlzdC9hZG1pbi1tZXRhLWdyYXBocWwtOWY5YTljMTEuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcclxucmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL3BvcG92ZXInKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL01vcmVIb3Jpem9udGFsSWNvbicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQ2hldnJvblJpZ2h0SWNvbicpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9kaXN0L1NpZ25vdXRCdXR0b24tYWNkYjE1NTQuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdmYXN0LWRlZXAtZXF1YWwnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9hZG1pbi11aS9yb3V0ZXIvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcclxucmVxdWlyZSgnQGdyYXBocWwtdG9vbHMvc2NoZW1hJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0Jyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xyXG5yZXF1aXJlKCdncmFwaHFsLXR5cGUtanNvbicpO1xyXG5yZXF1aXJlKCdncmFwaHFsLXVwbG9hZC9wdWJsaWMvR3JhcGhRTFVwbG9hZC5qcycpO1xyXG5yZXF1aXJlKCdncmFwaHFsJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0Jyk7XHJcblxyXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG5jb25zdCBGaWVsZCA9ICgpID0+IG51bGw7XHJcbmNvbnN0IENlbGwgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGQsXHJcbiAgbGlua1RvXHJcbn0pID0+IHtcclxuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XHJcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KENlbGxMaW5rLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KENlbGxDb250YWluZXIuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xyXG59O1xyXG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcclxufTtcclxuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxyXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcclxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxyXG4gICAgaWRGaWVsZEtpbmQ6IGNvbmZpZy5maWVsZE1ldGEua2luZCxcclxuICAgIGRlZmF1bHRWYWx1ZTogdW5kZWZpbmVkLFxyXG4gICAgZGVzZXJpYWxpemU6ICgpID0+IHt9LFxyXG4gICAgc2VyaWFsaXplOiAoKSA9PiAoe30pLFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIEZpbHRlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBncmFwaHFsOiAoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09PSAnbm90Jykge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgIG5vdDoge1xyXG4gICAgICAgICAgICAgICAgZXF1YWxzOiB2YWx1ZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHZhbHVlV2l0aG91dFdoaXRlc3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpO1xyXG4gICAgICAgIGNvbnN0IGtleSA9IHR5cGUgPT09ICdpcycgPyAnZXF1YWxzJyA6IHR5cGUgPT09ICdub3RfaW4nID8gJ25vdEluJyA6IHR5cGU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFtjb25maWcucGF0aF06IHtcclxuICAgICAgICAgICAgW2tleV06IFsnaW4nLCAnbm90X2luJ10uaW5jbHVkZXModHlwZSkgPyB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlLnNwbGl0KCcsJykgOiB2YWx1ZVdpdGhvdXRXaGl0ZXNwYWNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIExhYmVsKHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICB0eXBlXHJcbiAgICAgIH0pIHtcclxuICAgICAgICBsZXQgcmVuZGVyZWRWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1xccy9nLCAnJyk7XHJcblxyXG4gICAgICAgIGlmIChbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICByZW5kZXJlZFZhbHVlID0gdmFsdWUuc3BsaXQoJywnKS5qb2luKCcsICcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiAke3JlbmRlcmVkVmFsdWV9YDtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIHR5cGVzOiB7XHJcbiAgICAgICAgaXM6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZXhhY3RseScsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBub3Q6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgbm90IGV4YWN0bHknLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ3Q6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGx0OiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIGxlc3MgdGhhbicsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBndGU6IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGx0ZToge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaW46IHtcclxuICAgICAgICAgIGxhYmVsOiAnSXMgb25lIG9mJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdF9pbjoge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBub3Qgb25lIG9mJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcclxuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMuZGV2LmpzXCIpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XHJcblxyXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG52YXIgY29yZSQxID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIHRvYXN0ID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XHJcbnZhciBsb2FkaW5nID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2xvYWRpbmcnKTtcclxudmFyIG1vZGFscyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcclxudmFyIGFwb2xsb1VwbG9hZENsaWVudCA9IHJlcXVpcmUoJ2Fwb2xsby11cGxvYWQtY2xpZW50Jyk7XHJcbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XHJcbnZhciBoYXNoU3RyaW5nID0gcmVxdWlyZSgnQGVtb3Rpb24vaGFzaCcpO1xyXG52YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2Rpc3QvY29yZS1jOGVjY2UyMy5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcclxudmFyIGNsaWVudCA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XHJcbnZhciBhZG1pbk1ldGFHcmFwaHFsID0gcmVxdWlyZSgnLi4vLi4vLi4vZGlzdC9hZG1pbi1tZXRhLWdyYXBocWwtOWY5YTljMTEuY2pzLmRldi5qcycpO1xyXG52YXIgZGF0YUdldHRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2Rpc3QvZGF0YUdldHRlci05ZmJlMmY4ZS5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcclxucmVxdWlyZSgnQGdyYXBocWwtdG9vbHMvc2NoZW1hJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0Jyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xyXG5yZXF1aXJlKCdncmFwaHFsLXR5cGUtanNvbicpO1xyXG5yZXF1aXJlKCdncmFwaHFsLXVwbG9hZC9wdWJsaWMvR3JhcGhRTFVwbG9hZC5qcycpO1xyXG5yZXF1aXJlKCdncmFwaHFsJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0Jyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cclxuXHJcbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xyXG52YXIgaGFzaFN0cmluZ19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaGFzaFN0cmluZyk7XHJcblxyXG5jb25zdCBleHBlY3RlZEV4cG9ydHMgPSBuZXcgU2V0KFsnQ2VsbCcsICdGaWVsZCcsICdjb250cm9sbGVyJywgJ0NhcmRWYWx1ZSddKTtcclxuY29uc3QgYWRtaW5NZXRhTG9jYWxTdG9yYWdlS2V5ID0gJ2tleXN0b25lLmFkbWluTWV0YSc7XHJcbmxldCBfbXVzdFJlbmRlclNlcnZlclJlc3VsdCA9IHRydWU7XHJcblxyXG5mdW5jdGlvbiB1c2VNdXN0UmVuZGVyU2VydmVyUmVzdWx0KCkge1xyXG4gIGxldCBbLCBmb3JjZVVwZGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgX211c3RSZW5kZXJTZXJ2ZXJSZXN1bHQgPSBmYWxzZTtcclxuICAgIGZvcmNlVXBkYXRlKDEpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHJldHVybiBfbXVzdFJlbmRlclNlcnZlclJlc3VsdDtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlQWRtaW5NZXRhKGFkbWluTWV0YUhhc2gsIGZpZWxkVmlld3MpIHtcclxuICBjb25zdCBhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZG1pbk1ldGFMb2NhbFN0b3JhZ2VLZXkpO1xyXG5cclxuICAgIGlmIChpdGVtID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICBsZXQgcGFyc2VkID0gSlNPTi5wYXJzZShpdGVtKTtcclxuXHJcbiAgICAgIGlmIChwYXJzZWQuaGFzaCA9PT0gYWRtaW5NZXRhSGFzaCkge1xyXG4gICAgICAgIHJldHVybiBwYXJzZWQubWV0YTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICB9LCBbYWRtaW5NZXRhSGFzaF0pOyAvLyBpdCBzZWVtcyBsaWtlIEFwb2xsbyBkb2Vzbid0IHNraXAgdGhlIGZpcnN0IGZldGNoIHdoZW4gdXNpbmcgc2tpcDogdHJ1ZSBzbyB3ZSdyZSB1c2luZyB1c2VMYXp5UXVlcnkgaW5zdGVhZFxyXG5cclxuICBjb25zdCBbZmV0Y2hTdGF0aWNBZG1pbk1ldGEsIHtcclxuICAgIGRhdGEsXHJcbiAgICBlcnJvcixcclxuICAgIGNhbGxlZFxyXG4gIH1dID0gY2xpZW50LnVzZUxhenlRdWVyeShhZG1pbk1ldGFHcmFwaHFsLnN0YXRpY0FkbWluTWV0YVF1ZXJ5LCB7XHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcclxuICB9KTtcclxuICBsZXQgc2hvdWxkRmV0Y2hBZG1pbk1ldGEgPSBhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlID09PSB1bmRlZmluZWQgJiYgIWNhbGxlZDtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHNob3VsZEZldGNoQWRtaW5NZXRhKSB7XHJcbiAgICAgIGZldGNoU3RhdGljQWRtaW5NZXRhKCk7XHJcbiAgICB9XHJcbiAgfSwgW3Nob3VsZEZldGNoQWRtaW5NZXRhLCBmZXRjaFN0YXRpY0FkbWluTWV0YV0pO1xyXG4gIGNvbnN0IHJ1bnRpbWVBZG1pbk1ldGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGlmICgoIWRhdGEgfHwgZXJyb3IpICYmICFhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlKSB7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYWRtaW5NZXRhID0gYWRtaW5NZXRhRnJvbUxvY2FsU3RvcmFnZSA/IGFkbWluTWV0YUZyb21Mb2NhbFN0b3JhZ2UgOiBkYXRhLmtleXN0b25lLmFkbWluTWV0YTtcclxuICAgIGNvbnN0IHJ1bnRpbWVBZG1pbk1ldGEgPSB7XHJcbiAgICAgIGVuYWJsZVNlc3Npb25JdGVtOiBhZG1pbk1ldGEuZW5hYmxlU2Vzc2lvbkl0ZW0sXHJcbiAgICAgIGVuYWJsZVNpZ25vdXQ6IGFkbWluTWV0YS5lbmFibGVTaWdub3V0LFxyXG4gICAgICBsaXN0czoge31cclxuICAgIH07XHJcbiAgICBhZG1pbk1ldGEubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcclxuICAgICAgcnVudGltZUFkbWluTWV0YS5saXN0c1tsaXN0LmtleV0gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGxpc3QpLCB7fSwge1xyXG4gICAgICAgIGdxbE5hbWVzOiBjb3JlLmdldEdxbE5hbWVzKHtcclxuICAgICAgICAgIGxpc3RLZXk6IGxpc3Qua2V5LFxyXG4gICAgICAgICAgcGx1cmFsR3JhcGhRTE5hbWU6IGxpc3QubGlzdFF1ZXJ5TmFtZVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIGZpZWxkczoge31cclxuICAgICAgfSk7XHJcbiAgICAgIGxpc3QuZmllbGRzLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgIHZhciBfZmllbGQkaXRlbVZpZXckZmllbGQsIF9maWVsZCRpdGVtVmlldztcclxuXHJcbiAgICAgICAgZXhwZWN0ZWRFeHBvcnRzLmZvckVhY2goZXhwb3J0TmFtZSA9PiB7XHJcbiAgICAgICAgICBpZiAoZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XVtleHBvcnROYW1lXSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHZpZXcgZm9yIHRoZSBmaWVsZCBhdCAke2xpc3Qua2V5fS4ke2ZpZWxkLnBhdGh9IGlzIG1pc3NpbmcgdGhlICR7ZXhwb3J0TmFtZX0gZXhwb3J0YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XSkuZm9yRWFjaChleHBvcnROYW1lID0+IHtcclxuICAgICAgICAgIGlmICghZXhwZWN0ZWRFeHBvcnRzLmhhcyhleHBvcnROYW1lKSAmJiBleHBvcnROYW1lICE9PSAnYWxsb3dlZEV4cG9ydHNPbkN1c3RvbVZpZXdzJykge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgZXhwb3J0IG5hbWVkICR7ZXhwb3J0TmFtZX0gZnJvbSB0aGUgdmlldyBmcm9tIHRoZSBmaWVsZCBhdCAke2xpc3Qua2V5fS4ke2ZpZWxkLnBhdGh9YCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZpZXdzID0gX29iamVjdFNwcmVhZCh7fSwgZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XSk7XHJcblxyXG4gICAgICAgIGNvbnN0IGN1c3RvbVZpZXdzID0ge307XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5jdXN0b21WaWV3c0luZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgICAgICBjb25zdCBjdXN0b21WaWV3c1NvdXJjZSA9IGZpZWxkVmlld3NbZmllbGQuY3VzdG9tVmlld3NJbmRleF07XHJcbiAgICAgICAgICBjb25zdCBhbGxvd2VkRXhwb3J0c09uQ3VzdG9tVmlld3MgPSBuZXcgU2V0KHZpZXdzLmFsbG93ZWRFeHBvcnRzT25DdXN0b21WaWV3cyk7XHJcbiAgICAgICAgICBPYmplY3Qua2V5cyhjdXN0b21WaWV3c1NvdXJjZSkuZm9yRWFjaChleHBvcnROYW1lID0+IHtcclxuICAgICAgICAgICAgaWYgKGFsbG93ZWRFeHBvcnRzT25DdXN0b21WaWV3cy5oYXMoZXhwb3J0TmFtZSkpIHtcclxuICAgICAgICAgICAgICBjdXN0b21WaWV3c1tleHBvcnROYW1lXSA9IGN1c3RvbVZpZXdzU291cmNlW2V4cG9ydE5hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cGVjdGVkRXhwb3J0cy5oYXMoZXhwb3J0TmFtZSkpIHtcclxuICAgICAgICAgICAgICB2aWV3c1tleHBvcnROYW1lXSA9IGN1c3RvbVZpZXdzU291cmNlW2V4cG9ydE5hbWVdO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBleHBvcnQgbmFtZWQgJHtleHBvcnROYW1lfSBmcm9tIHRoZSBjdXN0b20gdmlldyBmcm9tIGZpZWxkIGF0ICR7bGlzdC5rZXl9LiR7ZmllbGQucGF0aH1gKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBydW50aW1lQWRtaW5NZXRhLmxpc3RzW2xpc3Qua2V5XS5maWVsZHNbZmllbGQucGF0aF0gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGZpZWxkKSwge30sIHtcclxuICAgICAgICAgIGl0ZW1WaWV3OiB7XHJcbiAgICAgICAgICAgIGZpZWxkTW9kZTogKF9maWVsZCRpdGVtVmlldyRmaWVsZCA9IChfZmllbGQkaXRlbVZpZXcgPSBmaWVsZC5pdGVtVmlldykgPT09IG51bGwgfHwgX2ZpZWxkJGl0ZW1WaWV3ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkaXRlbVZpZXcuZmllbGRNb2RlKSAhPT0gbnVsbCAmJiBfZmllbGQkaXRlbVZpZXckZmllbGQgIT09IHZvaWQgMCA/IF9maWVsZCRpdGVtVmlldyRmaWVsZCA6IG51bGxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB2aWV3cyxcclxuICAgICAgICAgIGNvbnRyb2xsZXI6IGZpZWxkVmlld3NbZmllbGQudmlld3NJbmRleF0uY29udHJvbGxlcih7XHJcbiAgICAgICAgICAgIGxpc3RLZXk6IGxpc3Qua2V5LFxyXG4gICAgICAgICAgICBmaWVsZE1ldGE6IGZpZWxkLmZpZWxkTWV0YSxcclxuICAgICAgICAgICAgbGFiZWw6IGZpZWxkLmxhYmVsLFxyXG4gICAgICAgICAgICBwYXRoOiBmaWVsZC5wYXRoLFxyXG4gICAgICAgICAgICBjdXN0b21WaWV3c1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgIWFkbWluTWV0YUZyb21Mb2NhbFN0b3JhZ2UpIHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oYWRtaW5NZXRhTG9jYWxTdG9yYWdlS2V5LCBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaGFzaDogaGFzaFN0cmluZ19fZGVmYXVsdFtcImRlZmF1bHRcIl0oSlNPTi5zdHJpbmdpZnkoYWRtaW5NZXRhKSksXHJcbiAgICAgICAgbWV0YTogYWRtaW5NZXRhXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcnVudGltZUFkbWluTWV0YTtcclxuICB9LCBbZGF0YSwgZXJyb3IsIGFkbWluTWV0YUZyb21Mb2NhbFN0b3JhZ2UsIGZpZWxkVmlld3NdKTtcclxuICBjb25zdCBtdXN0UmVuZGVyU2VydmVyUmVzdWx0ID0gdXNlTXVzdFJlbmRlclNlcnZlclJlc3VsdCgpO1xyXG5cclxuICBpZiAobXVzdFJlbmRlclNlcnZlclJlc3VsdCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdGU6ICdsb2FkaW5nJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChydW50aW1lQWRtaW5NZXRhKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0ZTogJ2xvYWRlZCcsXHJcbiAgICAgIHZhbHVlOiBydW50aW1lQWRtaW5NZXRhXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0ZTogJ2Vycm9yJyxcclxuICAgICAgZXJyb3IsXHJcbiAgICAgIHJlZmV0Y2g6ICgpID0+IHtcclxuICAgICAgICBmZXRjaFN0YXRpY0FkbWluTWV0YSgpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiAnbG9hZGluZydcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiB1c2VMYXp5TWV0YWRhdGEocXVlcnkpIHtcclxuICBsZXQgcmVzdWx0ID0gY2xpZW50LnVzZVF1ZXJ5KHF1ZXJ5LCB7XHJcbiAgICBlcnJvclBvbGljeTogJ2FsbCcsXHJcbiAgICBmZXRjaFBvbGljeTogJ25ldHdvcmstb25seSdcclxuICB9KTtcclxuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICB2YXIgX3Jlc3VsdCRlcnJvciwgX3Jlc3VsdCRlcnJvciRuZXR3b3JrLCBfcmVzdWx0JGVycm9yMiwgX3Jlc3VsdCRlcnJvciRuZXR3b3JrMiwgX3Jlc3VsdCRlcnJvcjMsIF9yZXN1bHQkZXJyb3IkbmV0d29yazMsIF9yZXN1bHQkZXJyb3I0O1xyXG5cclxuICAgIGxldCByZWZldGNoID0gKCkgPT4ge1xyXG4gICAgICByZXN1bHQucmVmZXRjaCgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBsZXQgZGF0YUdldHRlciQxID0gZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihyZXN1bHQuZGF0YSwgKF9yZXN1bHQkZXJyb3IgPSByZXN1bHQuZXJyb3IpID09PSBudWxsIHx8IF9yZXN1bHQkZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXN1bHQkZXJyb3IuZ3JhcGhRTEVycm9ycyk7XHJcbiAgICBjb25zdCBhdXRoZW50aWNhdGVkSXRlbUdldHRlciA9IGRhdGFHZXR0ZXIkMS5nZXQoJ2F1dGhlbnRpY2F0ZWRJdGVtJyk7XHJcbiAgICBjb25zdCBrZXlzdG9uZU1ldGFHZXR0ZXIgPSBkYXRhR2V0dGVyJDEuZ2V0KCdrZXlzdG9uZScpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcmVmZXRjaCxcclxuICAgICAgYXV0aGVudGljYXRlZEl0ZW06IGdldEF1dGhlbnRpY2F0ZWRJdGVtKHJlc3VsdCwgYXV0aGVudGljYXRlZEl0ZW1HZXR0ZXIuZXJyb3JzIHx8ICgoX3Jlc3VsdCRlcnJvciRuZXR3b3JrID0gKF9yZXN1bHQkZXJyb3IyID0gcmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfcmVzdWx0JGVycm9yMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Jlc3VsdCRlcnJvcjIubmV0d29ya0Vycm9yKSAhPT0gbnVsbCAmJiBfcmVzdWx0JGVycm9yJG5ldHdvcmsgIT09IHZvaWQgMCA/IF9yZXN1bHQkZXJyb3IkbmV0d29yayA6IHVuZGVmaW5lZCkpLFxyXG4gICAgICB2aXNpYmxlTGlzdHM6IGdldFZpc2libGVMaXN0cyhyZXN1bHQsIGtleXN0b25lTWV0YUdldHRlci5lcnJvcnMgfHwgKChfcmVzdWx0JGVycm9yJG5ldHdvcmsyID0gKF9yZXN1bHQkZXJyb3IzID0gcmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfcmVzdWx0JGVycm9yMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Jlc3VsdCRlcnJvcjMubmV0d29ya0Vycm9yKSAhPT0gbnVsbCAmJiBfcmVzdWx0JGVycm9yJG5ldHdvcmsyICE9PSB2b2lkIDAgPyBfcmVzdWx0JGVycm9yJG5ldHdvcmsyIDogdW5kZWZpbmVkKSksXHJcbiAgICAgIGNyZWF0ZVZpZXdGaWVsZE1vZGVzOiBnZXRDcmVhdGVWaWV3RmllbGRNb2RlcyhyZXN1bHQsIGtleXN0b25lTWV0YUdldHRlci5lcnJvcnMgfHwgKChfcmVzdWx0JGVycm9yJG5ldHdvcmszID0gKF9yZXN1bHQkZXJyb3I0ID0gcmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfcmVzdWx0JGVycm9yNCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Jlc3VsdCRlcnJvcjQubmV0d29ya0Vycm9yKSAhPT0gbnVsbCAmJiBfcmVzdWx0JGVycm9yJG5ldHdvcmszICE9PSB2b2lkIDAgPyBfcmVzdWx0JGVycm9yJG5ldHdvcmszIDogdW5kZWZpbmVkKSlcclxuICAgIH07XHJcbiAgfSwgW3Jlc3VsdF0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDcmVhdGVWaWV3RmllbGRNb2Rlcyh7XHJcbiAgZGF0YVxyXG59LCBlcnJvcikge1xyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdGU6ICdlcnJvcicsXHJcbiAgICAgIGVycm9yXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgaWYgKGRhdGEpIHtcclxuICAgIGNvbnN0IGxpc3RzID0ge307XHJcbiAgICBkYXRhLmtleXN0b25lLmFkbWluTWV0YS5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xyXG4gICAgICBsaXN0c1tsaXN0LmtleV0gPSB7fTtcclxuICAgICAgbGlzdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgbGlzdHNbbGlzdC5rZXldW2ZpZWxkLnBhdGhdID0gZmllbGQuY3JlYXRlVmlldy5maWVsZE1vZGU7XHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzdGF0ZTogJ2xvYWRlZCcsXHJcbiAgICAgIGxpc3RzXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHN0YXRlOiAnbG9hZGluZydcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlTGlzdHMoe1xyXG4gIGRhdGFcclxufSwgZXJyb3IpIHtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXRlOiAnZXJyb3InLFxyXG4gICAgICBlcnJvclxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICBjb25zdCBsaXN0cyA9IG5ldyBTZXQoKTtcclxuICAgIGRhdGEua2V5c3RvbmUuYWRtaW5NZXRhLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XHJcbiAgICAgIGlmICghbGlzdC5pc0hpZGRlbikge1xyXG4gICAgICAgIGxpc3RzLmFkZChsaXN0LmtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgc3RhdGU6ICdsb2FkZWQnLFxyXG4gICAgICBsaXN0c1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICBzdGF0ZTogJ2xvYWRpbmcnXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0QXV0aGVudGljYXRlZEl0ZW0oe1xyXG4gIGRhdGFcclxufSwgZXJyb3IpIHtcclxuICBpZiAoZXJyb3IpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXRlOiAnZXJyb3InLFxyXG4gICAgICBlcnJvclxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChkYXRhKSB7XHJcbiAgICBpZiAoIWRhdGEuYXV0aGVudGljYXRlZEl0ZW0gfHwgLy8gdGhpcyBpcyBmb3IgdGhlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgYSBuZXcgdHlwZVxyXG4gICAgLy8gaW4gdGhlIEF1dGhlbnRpY2F0ZWRJdGVtIHVuaW9uIGFuZCB0aGUgcXVlcnlcclxuICAgIC8vIHRoYXQgdGhlIGFkbWluIHVpIGhhcyBkb2Vzbid0IGdldCB0aGUgaWRcclxuICAgIC8vICh5ZXMsIHVuZGVmaW5lZCBpcyB2ZXJ5IHNwZWNpZmljIGFuZCB2ZXJ5IGludGVudGlvbmFsLCBpdCBzaG91bGQgbm90IGJlIGNoZWNraW5nIGZvciBudWxsKVxyXG4gICAgZGF0YS5hdXRoZW50aWNhdGVkSXRlbS5pZCA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc3RhdGU6ICd1bmF1dGhlbnRpY2F0ZWQnXHJcbiAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbGFiZWxGaWVsZCA9IE9iamVjdC5rZXlzKGRhdGEuYXV0aGVudGljYXRlZEl0ZW0pLmZpbHRlcih4ID0+IHggIT09ICdfX3R5cGVuYW1lJyAmJiB4ICE9PSAnaWQnKVswXTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHN0YXRlOiAnYXV0aGVudGljYXRlZCcsXHJcbiAgICAgIGlkOiBkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtLmlkLFxyXG4gICAgICBsYWJlbDogZGF0YS5hdXRoZW50aWNhdGVkSXRlbVtsYWJlbEZpZWxkXSB8fCBkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtLmlkLFxyXG4gICAgICBsaXN0S2V5OiBkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtLl9fdHlwZW5hbWVcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgc3RhdGU6ICdsb2FkaW5nJ1xyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IEtleXN0b25lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XHJcblxyXG5mdW5jdGlvbiBJbnRlcm5hbEtleXN0b25lUHJvdmlkZXIoe1xyXG4gIGFkbWluQ29uZmlnLFxyXG4gIGZpZWxkVmlld3MsXHJcbiAgYWRtaW5NZXRhSGFzaCxcclxuICBjaGlsZHJlbixcclxuICBsYXp5TWV0YWRhdGFRdWVyeSxcclxuICBhcGlQYXRoXHJcbn0pIHtcclxuICBjb25zdCBhZG1pbk1ldGEgPSB1c2VBZG1pbk1ldGEoYWRtaW5NZXRhSGFzaCwgZmllbGRWaWV3cyk7XHJcbiAgY29uc3Qge1xyXG4gICAgYXV0aGVudGljYXRlZEl0ZW0sXHJcbiAgICB2aXNpYmxlTGlzdHMsXHJcbiAgICBjcmVhdGVWaWV3RmllbGRNb2RlcyxcclxuICAgIHJlZmV0Y2hcclxuICB9ID0gdXNlTGF6eU1ldGFkYXRhKGxhenlNZXRhZGF0YVF1ZXJ5KTtcclxuXHJcbiAgY29uc3QgcmVpbml0Q29udGV4dCA9ICgpID0+IHtcclxuICAgIHZhciBfYWRtaW5NZXRhJHJlZmV0Y2g7XHJcblxyXG4gICAgYWRtaW5NZXRhID09PSBudWxsIHx8IGFkbWluTWV0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9hZG1pbk1ldGEkcmVmZXRjaCA9IGFkbWluTWV0YS5yZWZldGNoKSA9PT0gbnVsbCB8fCBfYWRtaW5NZXRhJHJlZmV0Y2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hZG1pbk1ldGEkcmVmZXRjaC5jYWxsKGFkbWluTWV0YSk7XHJcbiAgICByZWZldGNoKCk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKGFkbWluTWV0YS5zdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XHJcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGNvcmUkMS5DZW50ZXIsIHtcclxuICAgICAgZmlsbFZpZXc6IHRydWVcclxuICAgIH0sIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChsb2FkaW5nLkxvYWRpbmdEb3RzLCB7XHJcbiAgICAgIGxhYmVsOiBcIkxvYWRpbmcgQWRtaW4gTWV0YWRhdGFcIixcclxuICAgICAgc2l6ZTogXCJsYXJnZVwiXHJcbiAgICB9KSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KHRvYXN0LlRvYXN0UHJvdmlkZXIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChtb2RhbHMuRHJhd2VyUHJvdmlkZXIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChLZXlzdG9uZUNvbnRleHQuUHJvdmlkZXIsIHtcclxuICAgIHZhbHVlOiB7XHJcbiAgICAgIGFkbWluQ29uZmlnLFxyXG4gICAgICBhZG1pbk1ldGEsXHJcbiAgICAgIGZpZWxkVmlld3MsXHJcbiAgICAgIGF1dGhlbnRpY2F0ZWRJdGVtLFxyXG4gICAgICByZWluaXRDb250ZXh0LFxyXG4gICAgICB2aXNpYmxlTGlzdHMsXHJcbiAgICAgIGNyZWF0ZVZpZXdGaWVsZE1vZGVzLFxyXG4gICAgICBhcGlQYXRoXHJcbiAgICB9XHJcbiAgfSwgY2hpbGRyZW4pKSk7XHJcbn1cclxuXHJcbmNvbnN0IEtleXN0b25lUHJvdmlkZXIgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3QgYXBvbGxvQ2xpZW50ID0gUmVhY3QudXNlTWVtbygoKSA9PiBuZXcgY2xpZW50LkFwb2xsb0NsaWVudCh7XHJcbiAgICBjYWNoZTogbmV3IGNsaWVudC5Jbk1lbW9yeUNhY2hlKCksXHJcbiAgICBsaW5rOiBhcG9sbG9VcGxvYWRDbGllbnQuY3JlYXRlVXBsb2FkTGluayh7XHJcbiAgICAgIHVyaTogcHJvcHMuYXBpUGF0aFxyXG4gICAgfSlcclxuICB9KSwgW3Byb3BzLmFwaVBhdGhdKTtcclxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KGNsaWVudC5BcG9sbG9Qcm92aWRlciwge1xyXG4gICAgY2xpZW50OiBhcG9sbG9DbGllbnRcclxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxLZXlzdG9uZVByb3ZpZGVyLCBwcm9wcykpO1xyXG59O1xyXG5jb25zdCB1c2VLZXlzdG9uZSA9ICgpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoS2V5c3RvbmVDb250ZXh0KTtcclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VLZXlzdG9uZSBtdXN0IGJlIGNhbGxlZCBpbnNpZGUgYSBLZXlzdG9uZVByb3ZpZGVyIGNvbXBvbmVudCcpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlLmFkbWluTWV0YS5zdGF0ZSA9PT0gJ2Vycm9yJykge1xyXG4gICAgLy8gSWYgd2UgZ2V0IGFuIFwiQWNjZXNzIGRlbmllZFwiIGVycm9yLCBpdCBwcm9iYWJseSBtZWFucyB0aGUgdXNlciBkb2Vzbid0IGhhdmUgYWNjZXNzIHRvIHRoZVxyXG4gICAgLy8gYWRtaW5NZXRhIGJ1dCBoYXMgbmF2aWdhdGVkIChwcm9iYWJseSBjbGllbnQtc2lkZSkgdG8gYSBwYWdlIHRoYXQgcmVxdWlyZXMgaXQuIFdlIHJlbG9hZFxyXG4gICAgLy8gdGhlIHBhZ2Ugc28gdGhlIHNlcnZlci1zaWRlIGFjY2VzcyBjb250cm9sIGNhbiBydW4gd2hpY2ggc2hvdWxkIGJvdW5jZSB0aGVtIHRvIHRoZSByaWdodFxyXG4gICAgLy8gcGxhY2UgKG9yIGRpc3BsYXkgdGhlIG5vLWFjY2VzcyBwYWdlKVxyXG4gICAgaWYgKHZhbHVlLmFkbWluTWV0YS5lcnJvci5tZXNzYWdlID09PSAnQWNjZXNzIGRlbmllZCcpIHtcclxuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBsb2FkaW5nIEFkbWluIE1ldGFkYXRhJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4ge1xyXG4gICAgYWRtaW5Db25maWc6IHZhbHVlLmFkbWluQ29uZmlnLFxyXG4gICAgYWRtaW5NZXRhOiB2YWx1ZS5hZG1pbk1ldGEudmFsdWUsXHJcbiAgICBhdXRoZW50aWNhdGVkSXRlbTogdmFsdWUuYXV0aGVudGljYXRlZEl0ZW0sXHJcbiAgICB2aXNpYmxlTGlzdHM6IHZhbHVlLnZpc2libGVMaXN0cyxcclxuICAgIGNyZWF0ZVZpZXdGaWVsZE1vZGVzOiB2YWx1ZS5jcmVhdGVWaWV3RmllbGRNb2RlcyxcclxuICAgIGFwaVBhdGg6IHZhbHVlLmFwaVBhdGhcclxuICB9O1xyXG59O1xyXG5jb25zdCB1c2VSZWluaXRDb250ZXh0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IHZhbHVlID0gUmVhY3QudXNlQ29udGV4dChLZXlzdG9uZUNvbnRleHQpO1xyXG5cclxuICBpZiAoIXZhbHVlKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3VzZVJlaW5pdENvbnRleHQgbXVzdCBiZSBjYWxsZWQgaW5zaWRlIGEgS2V5c3RvbmVQcm92aWRlciBjb21wb25lbnQnKTtcclxuICB9XHJcblxyXG4gIHJldHVybiB2YWx1ZS5yZWluaXRDb250ZXh0O1xyXG59O1xyXG5jb25zdCB1c2VSYXdLZXlzdG9uZSA9ICgpID0+IHtcclxuICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoS2V5c3RvbmVDb250ZXh0KTtcclxuXHJcbiAgaWYgKCF2YWx1ZSkge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VSYXdLZXlzdG9uZSBtdXN0IGJlIGNhbGxlZCBpbnNpZGUgYSBLZXlzdG9uZVByb3ZpZGVyIGNvbXBvbmVudCcpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHZhbHVlO1xyXG59O1xyXG5jb25zdCB1c2VMaXN0ID0ga2V5ID0+IHtcclxuICBjb25zdCB7XHJcbiAgICBhZG1pbk1ldGE6IHtcclxuICAgICAgbGlzdHNcclxuICAgIH1cclxuICB9ID0gdXNlS2V5c3RvbmUoKTtcclxuXHJcbiAgaWYgKGxpc3RzW2tleV0pIHtcclxuICAgIHJldHVybiBsaXN0c1trZXldO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgbGlzdCBrZXkgcHJvdmlkZWQgdG8gdXNlTGlzdDogJHtrZXl9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0cy5LZXlzdG9uZVByb3ZpZGVyID0gS2V5c3RvbmVQcm92aWRlcjtcclxuZXhwb3J0cy51c2VLZXlzdG9uZSA9IHVzZUtleXN0b25lO1xyXG5leHBvcnRzLnVzZUxpc3QgPSB1c2VMaXN0O1xyXG5leHBvcnRzLnVzZVJhd0tleXN0b25lID0gdXNlUmF3S2V5c3RvbmU7XHJcbmV4cG9ydHMudXNlUmVpbml0Q29udGV4dCA9IHVzZVJlaW5pdENvbnRleHQ7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XHJcblxyXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG52YXIgcm91dGVyID0gcmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcclxudmFyIExpbmskMSA9IHJlcXVpcmUoJ25leHQvbGluaycpO1xyXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XHJcblxyXG52YXIgTGlua19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoTGluayQxKTtcclxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChSZWFjdCk7XHJcblxyXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJocmVmXCIsIFwiYXNcIiwgXCJyZXBsYWNlXCIsIFwic2Nyb2xsXCIsIFwic2hhbGxvd1wiLCBcInByZWZldGNoXCJdO1xyXG5jb25zdCBMaW5rID0gX3JlZiA9PiB7XHJcbiAgbGV0IHtcclxuICAgIGhyZWYsXHJcbiAgICBhcyxcclxuICAgIHJlcGxhY2UsXHJcbiAgICBzY3JvbGwsXHJcbiAgICBzaGFsbG93LFxyXG4gICAgcHJlZmV0Y2hcclxuICB9ID0gX3JlZixcclxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcclxuXHJcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChMaW5rX19kZWZhdWx0W1wiZGVmYXVsdFwiXSwge1xyXG4gICAgaHJlZjogaHJlZixcclxuICAgIGFzOiBhcyxcclxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXHJcbiAgICBzY3JvbGw6IHNjcm9sbCxcclxuICAgIHNoYWxsb3c6IHNoYWxsb3csXHJcbiAgICBwcmVmZXRjaDogcHJlZmV0Y2hcclxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoXCJhXCIsIHByb3BzKSk7XHJcbn07XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JvdXRlcicsIHtcclxuICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcm91dGVyLlJvdXRlcjsgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVSb3V0ZXInLCB7XHJcbiAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJvdXRlci5jcmVhdGVSb3V0ZXI7IH1cclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlJywge1xyXG4gIGVudW1lcmFibGU6IHRydWUsXHJcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByb3V0ZXIubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlOyB9XHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVJvdXRlcicsIHtcclxuICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcm91dGVyLnVzZVJvdXRlcjsgfVxyXG59KTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd3aXRoUm91dGVyJywge1xyXG4gIGVudW1lcmFibGU6IHRydWUsXHJcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByb3V0ZXIud2l0aFJvdXRlcjsgfVxyXG59KTtcclxuZXhwb3J0cy5MaW5rID0gTGluaztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxuXHJcbmNvbnN0IF9leGNsdWRlZCA9IFtcImNoaWxkcmVuXCJdO1xyXG4vKipcclxuICogVGhpcyBpcyB0aGUgY29tcG9uZW50IHlvdSBzaG91bGQgdXNlIHdoZW4geW91IHdhbnQgdGhlIHN0YW5kYXJkIHBhZGRpbmcgYXJvdW5kIGEgY2VsbCB2YWx1ZVxyXG4gKi9cclxuXHJcbmNvbnN0IENlbGxDb250YWluZXIgPSBfcmVmID0+IHtcclxuICBsZXQge1xyXG4gICAgY2hpbGRyZW5cclxuICB9ID0gX3JlZixcclxuICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMoX3JlZiwgX2V4Y2x1ZGVkKTtcclxuXHJcbiAgY29uc3Qge1xyXG4gICAgc3BhY2luZ1xyXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XHJcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIF9leHRlbmRzKHtcclxuICAgIGNzczoge1xyXG4gICAgICBwYWRkaW5nOiBzcGFjaW5nLnNtYWxsXHJcbiAgICB9XHJcbiAgfSwgcHJvcHMpLCBjaGlsZHJlbik7XHJcbn07XHJcblxyXG5leHBvcnRzLkNlbGxDb250YWluZXIgPSBDZWxsQ29udGFpbmVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZSA9IHJlcXVpcmUoJy4uL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGlzIHRoZSBjb21wb25lbnQgeW91IHNob3VsZCB1c2Ugd2hlbiBsaW5raW5nIGEgQ2VsbCB0byBhbiBpdGVtIChpLmUgd2hlbiB0aGUgQ2VsbCBzdXBwb3J0c1xyXG4gKiB0aGUgbGlua1RvIHByb3ApXHJcbiAqL1xyXG5cclxuY29uc3QgQ2VsbExpbmsgPSBwcm9wcyA9PiB7XHJcbiAgY29uc3Qge1xyXG4gICAgY29sb3JzLFxyXG4gICAgc3BhY2luZ1xyXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XHJcbiAgcmV0dXJuIGNvcmUuanN4KGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluaywgX2V4dGVuZHMoe1xyXG4gICAgY3NzOiB7XHJcbiAgICAgIGNvbG9yOiBjb2xvcnMuZm9yZWdyb3VuZCxcclxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgICAgcGFkZGluZzogc3BhY2luZy5zbWFsbCxcclxuICAgICAgdGV4dERlY29yYXRpb246ICdub25lJyxcclxuICAgICAgJzpob3Zlcic6IHtcclxuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ3VuZGVybGluZSdcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHByb3BzKSk7XHJcbn07XHJcblxyXG5leHBvcnRzLkNlbGxMaW5rID0gQ2VsbExpbms7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBpc0RlZXBFcXVhbCA9IHJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xyXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XHJcbnZhciBtb2RhbHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbW9kYWxzJyk7XHJcbnZhciB0b2FzdCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b2FzdCcpO1xyXG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XHJcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudCcpO1xyXG52YXIgYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUgPSByZXF1aXJlKCcuLi9hZG1pbi11aS9jb250ZXh0L2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xyXG52YXIgRmllbGRzID0gcmVxdWlyZSgnLi9GaWVsZHMtNGFmYjM4ZjAuY2pzLmRldi5qcycpO1xyXG52YXIgR3JhcGhRTEVycm9yTm90aWNlID0gcmVxdWlyZSgnLi9HcmFwaFFMRXJyb3JOb3RpY2UtNzZmZjk2ZGQuY2pzLmRldi5qcycpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XHJcblxyXG52YXIgaXNEZWVwRXF1YWxfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KGlzRGVlcEVxdWFsKTtcclxuXHJcbi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXHJcbmZ1bmN0aW9uIENyZWF0ZUl0ZW1EcmF3ZXIoe1xyXG4gIGxpc3RLZXksXHJcbiAgb25DbG9zZSxcclxuICBvbkNyZWF0ZVxyXG59KSB7XHJcbiAgY29uc3Qge1xyXG4gICAgY3JlYXRlVmlld0ZpZWxkTW9kZXNcclxuICB9ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlS2V5c3RvbmUoKTtcclxuICBjb25zdCBsaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChsaXN0S2V5KTtcclxuICBjb25zdCB0b2FzdHMgPSB0b2FzdC51c2VUb2FzdHMoKTtcclxuICBjb25zdCBbY3JlYXRlSXRlbSwge1xyXG4gICAgbG9hZGluZzogbG9hZGluZyQxLFxyXG4gICAgZXJyb3JcclxuICB9XSA9IGNsaWVudC51c2VNdXRhdGlvbihjbGllbnQuZ3FsYG11dGF0aW9uKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlSW5wdXROYW1lfSEpIHtcclxuICAgICAgaXRlbTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZU11dGF0aW9uTmFtZX0oZGF0YTogJGRhdGEpIHtcclxuICAgICAgICBpZFxyXG4gICAgICAgIGxhYmVsOiAke2xpc3QubGFiZWxGaWVsZH1cclxuICAgIH1cclxuICB9YCk7XHJcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xyXG4gICAgT2JqZWN0LmtleXMobGlzdC5maWVsZHMpLmZvckVhY2goZmllbGRQYXRoID0+IHtcclxuICAgICAgdmFsdWVbZmllbGRQYXRoXSA9IHtcclxuICAgICAgICBraW5kOiAndmFsdWUnLFxyXG4gICAgICAgIHZhbHVlOiBsaXN0LmZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZGVmYXVsdFZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9KTtcclxuICAgIHJldHVybiB2YWx1ZTtcclxuICB9KTtcclxuICBjb25zdCBpbnZhbGlkRmllbGRzID0gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBpbnZhbGlkRmllbGRzID0gbmV3IFNldCgpO1xyXG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZmllbGRQYXRoID0+IHtcclxuICAgICAgY29uc3QgdmFsID0gdmFsdWVbZmllbGRQYXRoXS52YWx1ZTtcclxuICAgICAgY29uc3QgdmFsaWRhdGVGbiA9IGxpc3QuZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci52YWxpZGF0ZTtcclxuXHJcbiAgICAgIGlmICh2YWxpZGF0ZUZuKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsaWRhdGVGbih2YWwpO1xyXG5cclxuICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgaW52YWxpZEZpZWxkcy5hZGQoZmllbGRQYXRoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIGludmFsaWRGaWVsZHM7XHJcbiAgfSwgW2xpc3QsIHZhbHVlXSk7XHJcbiAgY29uc3QgW2ZvcmNlVmFsaWRhdGlvbiwgc2V0Rm9yY2VWYWxpZGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICByZXR1cm4gY29yZS5qc3gobW9kYWxzLkRyYXdlciwge1xyXG4gICAgdGl0bGU6IGBDcmVhdGUgJHtsaXN0LnNpbmd1bGFyfWAsXHJcbiAgICB3aWR0aDogXCJ3aWRlXCIsXHJcbiAgICBhY3Rpb25zOiB7XHJcbiAgICAgIGNvbmZpcm06IHtcclxuICAgICAgICBsYWJlbDogYENyZWF0ZSAke2xpc3Quc2luZ3VsYXJ9YCxcclxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nJDEsXHJcbiAgICAgICAgYWN0aW9uOiAoKSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBuZXdGb3JjZVZhbGlkYXRpb24gPSBpbnZhbGlkRmllbGRzLnNpemUgIT09IDA7XHJcbiAgICAgICAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcclxuICAgICAgICAgIGlmIChuZXdGb3JjZVZhbGlkYXRpb24pIHJldHVybjtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QuZmllbGRzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICBjb250cm9sbGVyXHJcbiAgICAgICAgICAgIH0gPSBsaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkID0gY29udHJvbGxlci5zZXJpYWxpemUodmFsdWVbZmllbGRQYXRoXS52YWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWlzRGVlcEVxdWFsX19kZWZhdWx0W1wiZGVmYXVsdFwiXShzZXJpYWxpemVkLCBjb250cm9sbGVyLnNlcmlhbGl6ZShjb250cm9sbGVyLmRlZmF1bHRWYWx1ZSkpKSB7XHJcbiAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCBzZXJpYWxpemVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBjcmVhdGVJdGVtKHtcclxuICAgICAgICAgICAgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KS50aGVuKCh7XHJcbiAgICAgICAgICAgIGRhdGFcclxuICAgICAgICAgIH0pID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGFiZWwgPSBkYXRhLml0ZW0ubGFiZWwgfHwgZGF0YS5pdGVtLmlkO1xyXG4gICAgICAgICAgICBvbkNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgaWQ6IGRhdGEuaXRlbS5pZCxcclxuICAgICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogbGFiZWwsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0NyZWF0ZWQgU3VjY2Vzc2Z1bGx5JyxcclxuICAgICAgICAgICAgICB0b25lOiAncG9zaXRpdmUnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge30pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgY2FuY2VsOiB7XHJcbiAgICAgICAgbGFiZWw6ICdDYW5jZWwnLFxyXG4gICAgICAgIGFjdGlvbjogb25DbG9zZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgY3JlYXRlVmlld0ZpZWxkTW9kZXMuc3RhdGUgPT09ICdlcnJvcicgJiYgY29yZS5qc3goR3JhcGhRTEVycm9yTm90aWNlLkdyYXBoUUxFcnJvck5vdGljZSwge1xyXG4gICAgbmV0d29ya0Vycm9yOiBjcmVhdGVWaWV3RmllbGRNb2Rlcy5lcnJvciBpbnN0YW5jZW9mIEVycm9yID8gY3JlYXRlVmlld0ZpZWxkTW9kZXMuZXJyb3IgOiB1bmRlZmluZWQsXHJcbiAgICBlcnJvcnM6IGNyZWF0ZVZpZXdGaWVsZE1vZGVzLmVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyB1bmRlZmluZWQgOiBjcmVhdGVWaWV3RmllbGRNb2Rlcy5lcnJvclxyXG4gIH0pLCBjcmVhdGVWaWV3RmllbGRNb2Rlcy5zdGF0ZSA9PT0gJ2xvYWRpbmcnICYmIGNvcmUuanN4KGxvYWRpbmcuTG9hZGluZ0RvdHMsIHtcclxuICAgIGxhYmVsOiBcIkxvYWRpbmcgY3JlYXRlIGZvcm1cIlxyXG4gIH0pLCBlcnJvciAmJiBjb3JlLmpzeChHcmFwaFFMRXJyb3JOb3RpY2UuR3JhcGhRTEVycm9yTm90aWNlLCB7XHJcbiAgICBuZXR3b3JrRXJyb3I6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5uZXR3b3JrRXJyb3IsXHJcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXHJcbiAgfSksIGNvcmUuanN4KGNvcmUuQm94LCB7XHJcbiAgICBwYWRkaW5nWTogXCJ4bGFyZ2VcIlxyXG4gIH0sIGNvcmUuanN4KEZpZWxkcy5GaWVsZHMsIHtcclxuICAgIGZpZWxkczogbGlzdC5maWVsZHMsXHJcbiAgICBmaWVsZE1vZGVzOiBjcmVhdGVWaWV3RmllbGRNb2Rlcy5zdGF0ZSA9PT0gJ2xvYWRlZCcgPyBjcmVhdGVWaWV3RmllbGRNb2Rlcy5saXN0c1tsaXN0LmtleV0gOiBudWxsLFxyXG4gICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXHJcbiAgICBpbnZhbGlkRmllbGRzOiBpbnZhbGlkRmllbGRzLFxyXG4gICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKGdldE5ld1ZhbHVlID0+IHtcclxuICAgICAgc2V0VmFsdWUob2xkVmFsdWVzID0+IGdldE5ld1ZhbHVlKG9sZFZhbHVlcykpO1xyXG4gICAgfSwgW10pXHJcbiAgfSkpKTtcclxufVxyXG5cclxuZXhwb3J0cy5DcmVhdGVJdGVtRHJhd2VyID0gQ3JlYXRlSXRlbURyYXdlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5cclxuY29uc3QgUmVuZGVyRmllbGQgPSAvKiNfX1BVUkVfXyovUmVhY3QubWVtbyhmdW5jdGlvbiBSZW5kZXJGaWVsZCh7XHJcbiAgZmllbGQsXHJcbiAgdmFsdWUsXHJcbiAgYXV0b0ZvY3VzLFxyXG4gIGZvcmNlVmFsaWRhdGlvbixcclxuICBvbkNoYW5nZVxyXG59KSB7XHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkLnZpZXdzLkZpZWxkLCB7XHJcbiAgICBmaWVsZDogZmllbGQuY29udHJvbGxlcixcclxuICAgIG9uQ2hhbmdlOiBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgaWYgKG9uQ2hhbmdlID09PSB1bmRlZmluZWQpIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UodmFsID0+IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsKSwge30sIHtcclxuICAgICAgICAgIFtmaWVsZC5jb250cm9sbGVyLnBhdGhdOiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICd2YWx1ZScsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9O1xyXG4gICAgfSwgW29uQ2hhbmdlLCBmaWVsZC5jb250cm9sbGVyLnBhdGhdKSxcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb25cclxuICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIEZpZWxkcyh7XHJcbiAgZmllbGRzLFxyXG4gIHZhbHVlLFxyXG4gIGZpZWxkTW9kZXMsXHJcbiAgZm9yY2VWYWxpZGF0aW9uLFxyXG4gIGludmFsaWRGaWVsZHMsXHJcbiAgb25DaGFuZ2VcclxufSkge1xyXG4gIGNvbnN0IHJlbmRlcmVkRmllbGRzID0gT2JqZWN0LmtleXMoZmllbGRzKS5maWx0ZXIoZmllbGRQYXRoID0+IGZpZWxkTW9kZXMgPT09IG51bGwgfHwgZmllbGRNb2Rlc1tmaWVsZFBhdGhdICE9PSAnaGlkZGVuJykubWFwKChmaWVsZFBhdGgsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tmaWVsZFBhdGhdO1xyXG4gICAgY29uc3QgdmFsID0gdmFsdWVbZmllbGRQYXRoXTtcclxuICAgIGNvbnN0IGZpZWxkTW9kZSA9IGZpZWxkTW9kZXMgPT09IG51bGwgPyAnZWRpdCcgOiBmaWVsZE1vZGVzW2ZpZWxkUGF0aF07XHJcblxyXG4gICAgaWYgKHZhbC5raW5kID09PSAnZXJyb3InKSB7XHJcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCBudWxsLCBmaWVsZC5sYWJlbCwgXCI6IFwiLCBjb3JlLmpzeChcInNwYW5cIiwge1xyXG4gICAgICAgIGNzczoge1xyXG4gICAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICAgICAgfVxyXG4gICAgICB9LCB2YWwuZXJyb3JzWzBdLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY29yZS5qc3goUmVuZGVyRmllbGQsIHtcclxuICAgICAga2V5OiBmaWVsZFBhdGgsXHJcbiAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgdmFsdWU6IHZhbC52YWx1ZSxcclxuICAgICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24gJiYgaW52YWxpZEZpZWxkcy5oYXMoZmllbGRQYXRoKSxcclxuICAgICAgb25DaGFuZ2U6IGZpZWxkTW9kZSA9PT0gJ2VkaXQnID8gb25DaGFuZ2UgOiB1bmRlZmluZWQsXHJcbiAgICAgIGF1dG9Gb2N1czogaW5kZXggPT09IDBcclxuICAgIH0pO1xyXG4gIH0pO1xyXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwieGxhcmdlXCJcclxuICB9LCByZW5kZXJlZEZpZWxkcywgcmVuZGVyZWRGaWVsZHMubGVuZ3RoID09PSAwICYmICdUaGVyZSBhcmUgbm8gZmllbGRzIHRoYXQgeW91IGNhbiByZWFkIG9yIGVkaXQnKTtcclxufVxyXG5cclxuZXhwb3J0cy5GaWVsZHMgPSBGaWVsZHM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIG5vdGljZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9ub3RpY2UnKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxyXG5cclxudmFyIFJlYWN0X19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChSZWFjdCk7XHJcblxyXG5mdW5jdGlvbiBHcmFwaFFMRXJyb3JOb3RpY2Uoe1xyXG4gIGVycm9ycyxcclxuICBuZXR3b3JrRXJyb3JcclxufSkge1xyXG4gIGlmIChuZXR3b3JrRXJyb3IpIHtcclxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQobm90aWNlLk5vdGljZSwge1xyXG4gICAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogXCJsYXJnZVwiXHJcbiAgICB9LCBuZXR3b3JrRXJyb3IubWVzc2FnZSk7XHJcbiAgfVxyXG5cclxuICBpZiAoZXJyb3JzICE9PSBudWxsICYmIGVycm9ycyAhPT0gdm9pZCAwICYmIGVycm9ycy5sZW5ndGgpIHtcclxuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoY29yZS5TdGFjaywge1xyXG4gICAgICBnYXA6IFwic21hbGxcIixcclxuICAgICAgbWFyZ2luQm90dG9tOiBcImxhcmdlXCJcclxuICAgIH0sIGVycm9ycy5tYXAoZXJyID0+IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChub3RpY2UuTm90aWNlLCB7XHJcbiAgICAgIHRvbmU6IFwibmVnYXRpdmVcIlxyXG4gICAgfSwgZXJyLm1lc3NhZ2UpKSk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbnVsbDtcclxufVxyXG5cclxuZXhwb3J0cy5HcmFwaFFMRXJyb3JOb3RpY2UgPSBHcmFwaFFMRXJyb3JOb3RpY2U7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNsaWVudCA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XHJcblxyXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xyXG5jb25zdCBFTkRfU0VTU0lPTiA9IGNsaWVudC5ncWxgXHJcbiAgbXV0YXRpb24gRW5kU2Vzc2lvbiB7XHJcbiAgICBlbmRTZXNzaW9uXHJcbiAgfVxyXG5gO1xyXG5cclxuY29uc3QgU2lnbm91dEJ1dHRvbiA9ICh7XHJcbiAgY2hpbGRyZW5cclxufSkgPT4ge1xyXG4gIGNvbnN0IFtlbmRTZXNzaW9uLCB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZGF0YVxyXG4gIH1dID0gY2xpZW50LnVzZU11dGF0aW9uKEVORF9TRVNTSU9OKTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKGRhdGEgIT09IG51bGwgJiYgZGF0YSAhPT0gdm9pZCAwICYmIGRhdGEuZW5kU2Vzc2lvbikge1xyXG4gICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgfSwgW2RhdGFdKTtcclxuICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nLFxyXG4gICAgb25DbGljazogKCkgPT4gZW5kU2Vzc2lvbigpXHJcbiAgfSwgY2hpbGRyZW4gfHwgJ1NpZ24gb3V0Jyk7XHJcbn07XHJcblxyXG5leHBvcnRzLlNpZ25vdXRCdXR0b24gPSBTaWdub3V0QnV0dG9uO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcclxuXHJcbmNvbnN0IHN0YXRpY0FkbWluTWV0YVF1ZXJ5ID0gY2xpZW50LmdxbGBcclxuICBxdWVyeSBTdGF0aWNBZG1pbk1ldGEge1xyXG4gICAga2V5c3RvbmUge1xyXG4gICAgICBfX3R5cGVuYW1lXHJcbiAgICAgIGFkbWluTWV0YSB7XHJcbiAgICAgICAgX190eXBlbmFtZVxyXG4gICAgICAgIGVuYWJsZVNpZ25vdXRcclxuICAgICAgICBlbmFibGVTZXNzaW9uSXRlbVxyXG4gICAgICAgIGxpc3RzIHtcclxuICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgIGtleVxyXG4gICAgICAgICAgaXRlbVF1ZXJ5TmFtZVxyXG4gICAgICAgICAgbGlzdFF1ZXJ5TmFtZVxyXG4gICAgICAgICAgaW5pdGlhbFNvcnQge1xyXG4gICAgICAgICAgICBfX3R5cGVuYW1lXHJcbiAgICAgICAgICAgIGZpZWxkXHJcbiAgICAgICAgICAgIGRpcmVjdGlvblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgbGFiZWxcclxuICAgICAgICAgIHNpbmd1bGFyXHJcbiAgICAgICAgICBwbHVyYWxcclxuICAgICAgICAgIGRlc2NyaXB0aW9uXHJcbiAgICAgICAgICBpbml0aWFsQ29sdW1uc1xyXG4gICAgICAgICAgcGFnZVNpemVcclxuICAgICAgICAgIGxhYmVsRmllbGRcclxuICAgICAgICAgIGZpZWxkcyB7XHJcbiAgICAgICAgICAgIF9fdHlwZW5hbWVcclxuICAgICAgICAgICAgcGF0aFxyXG4gICAgICAgICAgICBsYWJlbFxyXG4gICAgICAgICAgICBmaWVsZE1ldGFcclxuICAgICAgICAgICAgdmlld3NJbmRleFxyXG4gICAgICAgICAgICBjdXN0b21WaWV3c0luZGV4XHJcbiAgICAgICAgICAgIHNlYXJjaFxyXG4gICAgICAgICAgICBpdGVtVmlldyB7XHJcbiAgICAgICAgICAgICAgZmllbGRNb2RlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbmA7IC8vIGdlbmVyYXRlZCBieSBodHRwczovL2dyYXBocWwtY29kZS1nZW5lcmF0b3IuY29tIHdpdGggdGhlc2Ugb3B0aW9uczpcclxuLy8gZ2VuZXJhdGVzOlxyXG4vLyAgIHR5cGVzLnRzOlxyXG4vLyAgICAgcGx1Z2luczpcclxuLy8gICAgICAgLSB0eXBlc2NyaXB0LW9wZXJhdGlvbnM6XHJcbi8vICAgICAgICAgICBuYW1pbmdDb252ZW50aW9uOiBrZWVwXHJcbi8vICAgICAgIC0gdHlwZXNjcmlwdDpcclxuLy8gICAgICAgICAgIGVudW1zQXNUeXBlczogdHJ1ZVxyXG4vLyAgICAgICAgICAgbm9uT3B0aW9uYWxUeXBlbmFtZTogdHJ1ZVxyXG4vLyAgICAgICAgICAgbmFtaW5nQ29udmVudGlvbjoga2VlcFxyXG4vLyAgICAgICAgICAgbm9FeHBvcnQ6IHRydWVcclxuLy8gICAgICAgICAgIGF2b2lkT3B0aW9uYWxzOiB0cnVlXHJcbi8vICAgICAgICAgICBzY2FsYXJzOlxyXG4vLyAgICAgICAgICAgICBKU09OOiBKU09OVmFsdWVcclxuXHJcbmV4cG9ydHMuc3RhdGljQWRtaW5NZXRhUXVlcnkgPSBzdGF0aWNBZG1pbk1ldGFRdWVyeTtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuLy8gVE9ETzogZG9uJ3QgZHVwbGljYXRlIHRoaXMgYmV0d2VlbiBoZXJlIGFuZCBwYWNrYWdlcy9rZXlzdG9uZS9MaXN0VHlwZXMvbGlzdC5qc1xyXG5mdW5jdGlvbiBnZXRHcWxOYW1lcyh7XHJcbiAgbGlzdEtleSxcclxuICBwbHVyYWxHcmFwaFFMTmFtZVxyXG59KSB7XHJcbiAgY29uc3QgbG93ZXJQbHVyYWxOYW1lID0gcGx1cmFsR3JhcGhRTE5hbWUuc2xpY2UoMCwgMSkudG9Mb3dlckNhc2UoKSArIHBsdXJhbEdyYXBoUUxOYW1lLnNsaWNlKDEpO1xyXG4gIGNvbnN0IGxvd2VyU2luZ3VsYXJOYW1lID0gbGlzdEtleS5zbGljZSgwLCAxKS50b0xvd2VyQ2FzZSgpICsgbGlzdEtleS5zbGljZSgxKTtcclxuICByZXR1cm4ge1xyXG4gICAgb3V0cHV0VHlwZU5hbWU6IGxpc3RLZXksXHJcbiAgICBpdGVtUXVlcnlOYW1lOiBsb3dlclNpbmd1bGFyTmFtZSxcclxuICAgIGxpc3RRdWVyeU5hbWU6IGxvd2VyUGx1cmFsTmFtZSxcclxuICAgIGxpc3RRdWVyeUNvdW50TmFtZTogYCR7bG93ZXJQbHVyYWxOYW1lfUNvdW50YCxcclxuICAgIGxpc3RPcmRlck5hbWU6IGAke2xpc3RLZXl9T3JkZXJCeUlucHV0YCxcclxuICAgIGRlbGV0ZU11dGF0aW9uTmFtZTogYGRlbGV0ZSR7bGlzdEtleX1gLFxyXG4gICAgdXBkYXRlTXV0YXRpb25OYW1lOiBgdXBkYXRlJHtsaXN0S2V5fWAsXHJcbiAgICBjcmVhdGVNdXRhdGlvbk5hbWU6IGBjcmVhdGUke2xpc3RLZXl9YCxcclxuICAgIGRlbGV0ZU1hbnlNdXRhdGlvbk5hbWU6IGBkZWxldGUke3BsdXJhbEdyYXBoUUxOYW1lfWAsXHJcbiAgICB1cGRhdGVNYW55TXV0YXRpb25OYW1lOiBgdXBkYXRlJHtwbHVyYWxHcmFwaFFMTmFtZX1gLFxyXG4gICAgY3JlYXRlTWFueU11dGF0aW9uTmFtZTogYGNyZWF0ZSR7cGx1cmFsR3JhcGhRTE5hbWV9YCxcclxuICAgIHdoZXJlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVdoZXJlSW5wdXRgLFxyXG4gICAgd2hlcmVVbmlxdWVJbnB1dE5hbWU6IGAke2xpc3RLZXl9V2hlcmVVbmlxdWVJbnB1dGAsXHJcbiAgICB1cGRhdGVJbnB1dE5hbWU6IGAke2xpc3RLZXl9VXBkYXRlSW5wdXRgLFxyXG4gICAgY3JlYXRlSW5wdXROYW1lOiBgJHtsaXN0S2V5fUNyZWF0ZUlucHV0YCxcclxuICAgIHVwZGF0ZU1hbnlJbnB1dE5hbWU6IGAke2xpc3RLZXl9VXBkYXRlQXJnc2AsXHJcbiAgICByZWxhdGVUb01hbnlGb3JDcmVhdGVJbnB1dE5hbWU6IGAke2xpc3RLZXl9UmVsYXRlVG9NYW55Rm9yQ3JlYXRlSW5wdXRgLFxyXG4gICAgcmVsYXRlVG9NYW55Rm9yVXBkYXRlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVJlbGF0ZVRvTWFueUZvclVwZGF0ZUlucHV0YCxcclxuICAgIHJlbGF0ZVRvT25lRm9yQ3JlYXRlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVJlbGF0ZVRvT25lRm9yQ3JlYXRlSW5wdXRgLFxyXG4gICAgcmVsYXRlVG9PbmVGb3JVcGRhdGVJbnB1dE5hbWU6IGAke2xpc3RLZXl9UmVsYXRlVG9PbmVGb3JVcGRhdGVJbnB1dGBcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnRzLmdldEdxbE5hbWVzID0gZ2V0R3FsTmFtZXM7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmZ1bmN0aW9uIGRhdGFHZXR0ZXJXaXRoTm9FcnJvcnMoZGF0YSwgcGF0aCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBkYXRhLFxyXG4gICAgcGF0aCxcclxuXHJcbiAgICBnZXQoZmllbGQpIHtcclxuICAgICAgdmFyIF9kYXRhJGZpZWxkO1xyXG5cclxuICAgICAgcmV0dXJuIGRhdGFHZXR0ZXJXaXRoTm9FcnJvcnMoKF9kYXRhJGZpZWxkID0gZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhW2ZpZWxkXSkgIT09IG51bGwgJiYgX2RhdGEkZmllbGQgIT09IHZvaWQgMCA/IF9kYXRhJGZpZWxkIDogbnVsbCwgcGF0aC5jb25jYXQoZmllbGQpKTtcclxuICAgIH1cclxuXHJcbiAgfTtcclxufVxyXG5cclxuZnVuY3Rpb24gZGF0YUdldHRlcldpdGhFcnJvcnMoZGF0YSwgZXJyb3JzLCBwYXRoKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGEsXHJcbiAgICBlcnJvcnMsXHJcbiAgICBwYXRoLFxyXG5cclxuICAgIGdldChmaWVsZCkge1xyXG4gICAgICB2YXIgX2RhdGEkZmllbGQyO1xyXG5cclxuICAgICAgY29uc3QgbmV3UGF0aCA9IHBhdGguY29uY2F0KGZpZWxkKTtcclxuICAgICAgY29uc3QgbmV3SXRlbSA9IChfZGF0YSRmaWVsZDIgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFbZmllbGRdKSAhPT0gbnVsbCAmJiBfZGF0YSRmaWVsZDIgIT09IHZvaWQgMCA/IF9kYXRhJGZpZWxkMiA6IG51bGw7XHJcbiAgICAgIGxldCBlcnJvcnNGb3JGaWVsZCA9IGVycm9ycy5maWx0ZXIoZXJyb3IgPT4ge1xyXG4gICAgICAgIGlmIChlcnJvci5wYXRoID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JQYXRoID0gZXJyb3IucGF0aDtcclxuICAgICAgICByZXR1cm4gbmV3UGF0aC5ldmVyeSgodmFsdWUsIGluZGV4KSA9PiBlcnJvclBhdGhbaW5kZXhdID09PSB1bmRlZmluZWQgfHwgZXJyb3JQYXRoW2luZGV4XSA9PT0gdmFsdWUpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcnNGb3JGaWVsZC5sZW5ndGgpIHtcclxuICAgICAgICByZXR1cm4gZGF0YUdldHRlcldpdGhFcnJvcnMobmV3SXRlbSwgZXJyb3JzLCBuZXdQYXRoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGFHZXR0ZXJXaXRoTm9FcnJvcnMobmV3SXRlbSwgbmV3UGF0aCk7XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1ha2VEYXRhR2V0dGVyKGRhdGEsIGVycm9ycykge1xyXG4gIGlmIChlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgJiYgZXJyb3JzLmxlbmd0aCkge1xyXG4gICAgcmV0dXJuIGRhdGFHZXR0ZXJXaXRoRXJyb3JzKGRhdGEsIGVycm9ycywgW10pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGFHZXR0ZXJXaXRoTm9FcnJvcnMoZGF0YSwgW10pO1xyXG59XHJcblxyXG5leHBvcnRzLm1ha2VEYXRhR2V0dGVyID0gbWFrZURhdGFHZXR0ZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciB3ZWFrTWVtb2l6ZSA9IHJlcXVpcmUoJ0BlbW90aW9uL3dlYWstbWVtb2l6ZScpO1xyXG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxyXG5cclxudmFyIHdlYWtNZW1vaXplX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdCh3ZWFrTWVtb2l6ZSk7XHJcblxyXG5mdW5jdGlvbiBleHRyYWN0Um9vdEZpZWxkcyhzZWxlY3RlZEZpZWxkcywgc2VsZWN0aW9uU2V0KSB7XHJcbiAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xyXG4gICAgaWYgKHNlbGVjdGlvbi5raW5kID09PSAnRmllbGQnKSB7XHJcbiAgICAgIHNlbGVjdGVkRmllbGRzLmFkZChzZWxlY3Rpb24uYWxpYXMgPyBzZWxlY3Rpb24uYWxpYXMudmFsdWUgOiBzZWxlY3Rpb24ubmFtZS52YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNlbGVjdGlvbi5raW5kID09PSAnSW5saW5lRnJhZ21lbnQnKSB7XHJcbiAgICAgIGV4dHJhY3RSb290RmllbGRzKHNlbGVjdGVkRmllbGRzLCBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KTtcclxuICAgIH0gLy8gRnJhZ21lbnRTcHJlYWQgd2lsbCBuZXZlciBoYXBwZW4gZm9yIHRoZSB1c2UgY2FzZXMgb2YgZ2V0Um9vdEZpZWxkc0Zyb21TZWxlY3Rpb25cclxuXHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlciA9IHdlYWtNZW1vaXplX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjb250cm9sbGVyID0+IHtcclxuICBjb25zdCBhc3QgPSBncmFwaHFsLnBhcnNlKGBmcmFnbWVudCBYIG9uIFkge1xyXG4gIGlkXHJcbiAgJHtjb250cm9sbGVyLmdyYXBocWxTZWxlY3Rpb259XHJcbiAgfWApO1xyXG4gIGNvbnN0IHNlbGVjdGVkRmllbGRzID0gbmV3IFNldCgpO1xyXG4gIGNvbnN0IGZyYWdtZW50Tm9kZSA9IGFzdC5kZWZpbml0aW9uc1swXTtcclxuICBleHRyYWN0Um9vdEZpZWxkcyhzZWxlY3RlZEZpZWxkcywgZnJhZ21lbnROb2RlLnNlbGVjdGlvblNldCk7XHJcbiAgcmV0dXJuIFsuLi5zZWxlY3RlZEZpZWxkc107XHJcbn0pO1xyXG5cclxuZXhwb3J0cy5nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXIgPSBnZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBncmFwaHFsVHNTY2hlbWEgPSByZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEnKTtcclxudmFyIGdyYXBocWxUeXBlSnNvbiA9IHJlcXVpcmUoJ2dyYXBocWwtdHlwZS1qc29uJyk7XHJcbnZhciBHcmFwaFFMVXBsb2FkID0gcmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcclxudmFyIGdyYXBocWwgPSByZXF1aXJlKCdncmFwaHFsJyk7XHJcbnZhciBEZWNpbWFsJDEgPSByZXF1aXJlKCdkZWNpbWFsLmpzJyk7XHJcbnZhciBhcGlXaXRob3V0Q29udGV4dCA9IHJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0Jyk7XHJcbnZhciBhcGlXaXRoQ29udGV4dCA9IHJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0Jyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cclxuXHJcbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcclxuICBpZiAoZSAmJiBlLl9fZXNNb2R1bGUpIHJldHVybiBlO1xyXG4gIHZhciBuID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcclxuICBpZiAoZSkge1xyXG4gICAgT2JqZWN0LmtleXMoZSkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xyXG4gICAgICBpZiAoayAhPT0gJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuLCBrLCBkLmdldCA/IGQgOiB7XHJcbiAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxyXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlW2tdOyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuICBuW1wiZGVmYXVsdFwiXSA9IGU7XHJcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XHJcbn1cclxuXHJcbnZhciBncmFwaHFsVHNTY2hlbWFfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShncmFwaHFsVHNTY2hlbWEpO1xyXG52YXIgR3JhcGhRTFVwbG9hZF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoR3JhcGhRTFVwbG9hZCk7XHJcblxyXG5jb25zdCBKU09OID0gZ3JhcGhxbFRzU2NoZW1hX19uYW1lc3BhY2UuZ3JhcGhxbC5zY2FsYXIoZ3JhcGhxbFR5cGVKc29uLkdyYXBoUUxKU09OKTtcclxuY29uc3QgVXBsb2FkID0gZ3JhcGhxbFRzU2NoZW1hX19uYW1lc3BhY2UuZ3JhcGhxbC5zY2FsYXIoR3JhcGhRTFVwbG9hZF9fZGVmYXVsdFtcImRlZmF1bHRcIl0pOyAvLyAtIERlY2ltYWwuanMgdGhyb3dzIG9uIGludmFsaWQgaW5wdXRzXHJcbi8vIC0gRGVjaW1hbC5qcyBjYW4gcmVwcmVzZW50ICtJbmZpbml0eSBhbmQgLUluZmluaXR5LCB0aGVzZSBhcmVuJ3QgdmFsdWVzIGluIFBvc3RncmVzJyBkZWNpbWFsLFxyXG4vLyAgIE5hTiBpcyBidXQgUHJpc21hIGRvZXNuJ3Qgc3VwcG9ydCBpdFxyXG4vLyAgIC5pc0Zpbml0ZSByZWZlcnMgdG8gK0luZmluaXR5LCAtSW5maW5pdHkgYW5kIE5hTlxyXG5cclxuY29uc3QgRGVjaW1hbCA9IGdyYXBocWxUc1NjaGVtYV9fbmFtZXNwYWNlLmdyYXBocWwuc2NhbGFyKG5ldyBncmFwaHFsLkdyYXBoUUxTY2FsYXJUeXBlKHtcclxuICBuYW1lOiAnRGVjaW1hbCcsXHJcblxyXG4gIHNlcmlhbGl6ZSh2YWx1ZSkge1xyXG4gICAgaWYgKCFEZWNpbWFsJDEuRGVjaW1hbC5pc0RlY2ltYWwodmFsdWUpKSB7XHJcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcihgdW5leHBlY3RlZCB2YWx1ZSBwcm92aWRlZCB0byBEZWNpbWFsIHNjYWxhcjogJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmFsdWUuc2NhbGVUb1ByaW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQodmFsdWUuc2NhbGVUb1ByaW50KTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcclxuICB9LFxyXG5cclxuICBwYXJzZUxpdGVyYWwodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5raW5kICE9PSAnU3RyaW5nVmFsdWUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGVjaW1hbCBvbmx5IGFjY2VwdHMgdmFsdWVzIGFzIHN0cmluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVjaW1hbCA9IG5ldyBEZWNpbWFsJDEuRGVjaW1hbCh2YWx1ZS52YWx1ZSk7XHJcblxyXG4gICAgaWYgKCFkZWNpbWFsLmlzRmluaXRlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEZWNpbWFsIHZhbHVlcyBtdXN0IGJlIGZpbml0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWNpbWFsO1xyXG4gIH0sXHJcblxyXG4gIHBhcnNlVmFsdWUodmFsdWUpIHtcclxuICAgIGlmIChEZWNpbWFsJDEuRGVjaW1hbC5pc0RlY2ltYWwodmFsdWUpKSB7XHJcbiAgICAgIGlmICghdmFsdWUuaXNGaW5pdGUoKSkge1xyXG4gICAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGVjaW1hbCB2YWx1ZXMgbXVzdCBiZSBmaW5pdGUnKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGVjaW1hbCBvbmx5IGFjY2VwdHMgdmFsdWVzIGFzIHN0cmluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZGVjaW1hbCA9IG5ldyBEZWNpbWFsJDEuRGVjaW1hbCh2YWx1ZSk7XHJcblxyXG4gICAgaWYgKCFkZWNpbWFsLmlzRmluaXRlKCkpIHtcclxuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEZWNpbWFsIHZhbHVlcyBtdXN0IGJlIGZpbml0ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBkZWNpbWFsO1xyXG4gIH1cclxuXHJcbn0pKTsgLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXhjaXRlbWVudC1lbmdpbmVlci9ncmFwaHFsLWlzby1kYXRlL2Jsb2IvbWFzdGVyL3NyYy91dGlscy92YWxpZGF0b3IuanMjTDEyMVxyXG4vLyB0aGlzIGlzIGFsc28gd2hhdCBwcmlzbWEgdXNlcyBodHRwczovL2dpdGh1Yi5jb20vcHJpc21hL3ByaXNtYS9ibG9iLzIwYjU4ZmU2NWQ1ODFiY2I0M2MwZDVjMjhkNGI4OWNhYmMyZDk5YjIvcGFja2FnZXMvY2xpZW50L3NyYy9ydW50aW1lL3V0aWxzL2NvbW1vbi50cyNMMTI2LUwxMjhcclxuXHJcbmNvbnN0IFJGQ18zMzM5X1JFR0VYID0gL14oXFxkezR9LSgwWzEtOV18MVswMTJdKS0oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFswMV1bMC05XXwyWzAtM10pOihbMC01XVswLTldKTooWzAtNV1bMC05XXw2MCkpKFxcLlxcZHsxLH0pPygoW1pdKXwoWyt8LV0oWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XSkpJC87XHJcblxyXG5mdW5jdGlvbiBwYXJzZURhdGUoaW5wdXQpIHtcclxuICBpZiAoIVJGQ18zMzM5X1JFR0VYLnRlc3QoaW5wdXQpKSB7XHJcbiAgICB0aHJvdyBuZXcgZ3JhcGhxbC5HcmFwaFFMRXJyb3IoJ0RhdGVUaW1lIHNjYWxhcnMgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZiBhIGZ1bGwgSVNPIDg2MDEgZGF0ZS10aW1lIHN0aXJuZycpO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgcGFyc2VkID0gbmV3IERhdGUoaW5wdXQpO1xyXG5cclxuICBpZiAoaXNOYU4ocGFyc2VkLnZhbHVlT2YoKSkpIHtcclxuICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGF0ZVRpbWUgc2NhbGFycyBtdXN0IGJlIGluIHRoZSBmb3JtIG9mIGEgZnVsbCBJU08gODYwMSBkYXRlLXRpbWUgc3Rpcm5nJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gcGFyc2VkO1xyXG59XHJcblxyXG5jb25zdCBEYXRlVGltZSA9IGdyYXBocWxUc1NjaGVtYV9fbmFtZXNwYWNlLmdyYXBocWwuc2NhbGFyKG5ldyBncmFwaHFsLkdyYXBoUUxTY2FsYXJUeXBlKHtcclxuICBuYW1lOiAnRGF0ZVRpbWUnLFxyXG4gIHNwZWNpZmllZEJ5VXJsOiAnaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42JyxcclxuXHJcbiAgc2VyaWFsaXplKHZhbHVlKSB7XHJcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHx8IGlzTmFOKHZhbHVlLnZhbHVlT2YoKSkpIHtcclxuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKGB1bmV4cGVjdGVkIHZhbHVlIHByb3ZpZGVkIHRvIERhdGVUaW1lIHNjYWxhcjogJHt2YWx1ZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdmFsdWUudG9JU09TdHJpbmcoKTtcclxuICB9LFxyXG5cclxuICBwYXJzZUxpdGVyYWwodmFsdWUpIHtcclxuICAgIGlmICh2YWx1ZS5raW5kICE9PSAnU3RyaW5nVmFsdWUnKSB7XHJcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGF0ZVRpbWUgb25seSBhY2NlcHRzIHZhbHVlcyBhcyBzdHJpbmdzJyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHBhcnNlRGF0ZSh2YWx1ZS52YWx1ZSk7XHJcbiAgfSxcclxuXHJcbiAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xyXG4gICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEYXRlVGltZSBvbmx5IGFjY2VwdHMgdmFsdWVzIGFzIHN0cmluZ3MnKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gcGFyc2VEYXRlKHZhbHVlKTtcclxuICB9XHJcblxyXG59KSk7XHJcblxyXG52YXIgZ3JhcGhxbEJvdW5kVG9LZXlzdG9uZUNvbnRleHQgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIEpTT046IEpTT04sXHJcbiAgVXBsb2FkOiBVcGxvYWQsXHJcbiAgRGVjaW1hbDogRGVjaW1hbCxcclxuICBEYXRlVGltZTogRGF0ZVRpbWUsXHJcbiAgQm9vbGVhbjogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhbixcclxuICBGbG9hdDogYXBpV2l0aG91dENvbnRleHQuRmxvYXQsXHJcbiAgSUQ6IGFwaVdpdGhvdXRDb250ZXh0LklELFxyXG4gIEludDogYXBpV2l0aG91dENvbnRleHQuSW50LFxyXG4gIFN0cmluZzogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nLFxyXG4gICdlbnVtJzogYXBpV2l0aG91dENvbnRleHRbXCJlbnVtXCJdLFxyXG4gIGVudW1WYWx1ZXM6IGFwaVdpdGhvdXRDb250ZXh0LmVudW1WYWx1ZXMsXHJcbiAgYXJnOiBhcGlXaXRob3V0Q29udGV4dC5hcmcsXHJcbiAgaW5wdXRPYmplY3Q6IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0LFxyXG4gIGxpc3Q6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QsXHJcbiAgbm9uTnVsbDogYXBpV2l0aG91dENvbnRleHQubm9uTnVsbCxcclxuICBzY2FsYXI6IGFwaVdpdGhvdXRDb250ZXh0LnNjYWxhcixcclxuICBiaW5kR3JhcGhRTFNjaGVtYUFQSVRvQ29udGV4dDogZ3JhcGhxbFRzU2NoZW1hLmJpbmRHcmFwaFFMU2NoZW1hQVBJVG9Db250ZXh0LFxyXG4gIGZpZWxkOiBhcGlXaXRoQ29udGV4dC5maWVsZCxcclxuICBmaWVsZHM6IGFwaVdpdGhDb250ZXh0LmZpZWxkcyxcclxuICAnaW50ZXJmYWNlJzogYXBpV2l0aENvbnRleHRbXCJpbnRlcmZhY2VcIl0sXHJcbiAgaW50ZXJmYWNlRmllbGQ6IGFwaVdpdGhDb250ZXh0LmludGVyZmFjZUZpZWxkLFxyXG4gIG9iamVjdDogYXBpV2l0aENvbnRleHQub2JqZWN0LFxyXG4gIHVuaW9uOiBhcGlXaXRoQ29udGV4dC51bmlvblxyXG59KTtcclxuXHJcbmV4cG9ydHMuRGF0ZVRpbWUgPSBEYXRlVGltZTtcclxuZXhwb3J0cy5EZWNpbWFsID0gRGVjaW1hbDtcclxuZXhwb3J0cy5KU09OID0gSlNPTjtcclxuZXhwb3J0cy5VcGxvYWQgPSBVcGxvYWQ7XHJcbmV4cG9ydHMuZ3JhcGhxbEJvdW5kVG9LZXlzdG9uZUNvbnRleHQgPSBncmFwaHFsQm91bmRUb0tleXN0b25lQ29udGV4dDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIGdyYXBocWxUc1NjaGVtYSA9IHJlcXVpcmUoJy4vZ3JhcGhxbC10cy1zY2hlbWEtZmNlN2E2YTguY2pzLmRldi5qcycpO1xyXG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xyXG5yZXF1aXJlKCdkZWNpbWFsLmpzJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xyXG52YXIgYXBpV2l0aG91dENvbnRleHQgPSByZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xyXG5cclxuY29uc3Qgb3JkZXJEaXJlY3Rpb25FbnVtID0gYXBpV2l0aG91dENvbnRleHRbXCJlbnVtXCJdKHtcclxuICBuYW1lOiAnT3JkZXJEaXJlY3Rpb24nLFxyXG4gIHZhbHVlczogYXBpV2l0aG91dENvbnRleHQuZW51bVZhbHVlcyhbJ2FzYycsICdkZXNjJ10pXHJcbn0pO1xyXG5jb25zdCBRdWVyeU1vZGUgPSBhcGlXaXRob3V0Q29udGV4dFtcImVudW1cIl0oe1xyXG4gIG5hbWU6ICdRdWVyeU1vZGUnLFxyXG4gIHZhbHVlczogYXBpV2l0aG91dENvbnRleHQuZW51bVZhbHVlcyhbJ2RlZmF1bHQnLCAnaW5zZW5zaXRpdmUnXSlcclxufSk7XHJcbi8vIGZpZWxkVHlwZShkYkZpZWxkKShmaWVsZEluZm8pID0+IHsgLi4uZmllbGRJbmZvLCBkYkZpZWxkIH07XHJcbmZ1bmN0aW9uIGZpZWxkVHlwZShkYkZpZWxkKSB7XHJcbiAgcmV0dXJuIGZ1bmN0aW9uIChncmFwaFFMSW5mbykge1xyXG4gICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgZ3JhcGhRTEluZm8pLCB7fSwge1xyXG4gICAgICBkYkZpZWxkXHJcbiAgICB9KTtcclxuICB9O1xyXG59XHJcblxyXG4vLyAoZXZlbiB0aG91Z2gsIHllcywgaGF2aW5nIEVudW1GaWx0ZXIgYnkgZGVmaW5lZCBhcyBFbnVtTnVsbGFibGVGaWx0ZXI8RW51bT4sIHdvdWxkIGJlIHRoZSBzYW1lIHR5cGUgYnV0IG5hbWVzIHdvdWxkIHNob3cgdXAgZGlmZmVyZW50bHkgaW4gZWRpdG9ycyBmb3IgZXhhbXBsZSlcclxuXHJcbmZ1bmN0aW9uIGVudW1GaWx0ZXJzKGVudW1UeXBlKSB7XHJcbiAgY29uc3Qgb3B0aW9uYWwgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgICBuYW1lOiBgJHtlbnVtVHlwZS5ncmFwaFFMVHlwZS5uYW1lfU51bGxhYmxlRmlsdGVyYCxcclxuICAgIGZpZWxkczogKCkgPT4gKHtcclxuICAgICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICAgIHR5cGU6IGVudW1UeXBlXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZW51bVR5cGUpKVxyXG4gICAgICB9KSxcclxuICAgICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcclxuICAgICAgfSksXHJcbiAgICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgICB0eXBlOiBvcHRpb25hbFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KTtcclxuICBjb25zdCByZXF1aXJlZCA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICAgIG5hbWU6IGAke2VudW1UeXBlLmdyYXBoUUxUeXBlLm5hbWV9RmlsdGVyYCxcclxuICAgIGZpZWxkczogKCkgPT4gKHtcclxuICAgICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICAgIHR5cGU6IGVudW1UeXBlXHJcbiAgICAgIH0pLFxyXG4gICAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZW51bVR5cGUpKVxyXG4gICAgICB9KSxcclxuICAgICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcclxuICAgICAgfSksXHJcbiAgICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgICB0eXBlOiBvcHRpb25hbFxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICB9KTtcclxuICBjb25zdCBtYW55ID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gICAgbmFtZTogYCR7ZW51bVR5cGUuZ3JhcGhRTFR5cGUubmFtZX1OdWxsYWJsZUxpc3RGaWx0ZXJgLFxyXG4gICAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcclxuICAgICAgfSksXHJcbiAgICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgICB0eXBlOiBlbnVtVHlwZVxyXG4gICAgICB9KSxcclxuICAgICAgaGFzRXZlcnk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcclxuICAgICAgfSksXHJcbiAgICAgIGhhc1NvbWU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcclxuICAgICAgfSksXHJcbiAgICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgICAgdHlwZTogZW51bVR5cGVcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSk7XHJcbiAgcmV0dXJuIHtcclxuICAgIG9wdGlvbmFsLFxyXG4gICAgcmVxdWlyZWQsXHJcbiAgICBtYW55XHJcbiAgfTtcclxufVxyXG5cclxuLy8gRG8gbm90IG1hbnVhbGx5IG1vZGlmeSB0aGlzIGZpbGUsIGl0IGlzIGF1dG9tYXRpY2FsbHkgZ2VuZXJhdGVkIGJ5IHRoZSBwYWNrYWdlIGF0IC9wcmlzbWEtdXRpbHMgaW4gdGhpcyByZXBvLlxyXG5jb25zdCBTdHJpbmdOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdTdHJpbmdOdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIG1vZGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IFF1ZXJ5TW9kZVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlciQxXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ051bGxhYmxlRmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IFN0cmluZ0ZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdTdHJpbmdGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcclxuICAgIH0pLFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBtb2RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBRdWVyeU1vZGVcclxuICAgIH0pLFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBOZXN0ZWRTdHJpbmdGaWx0ZXIkMVxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgTmVzdGVkU3RyaW5nRmlsdGVyJDEgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ05lc3RlZFN0cmluZ0ZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogTmVzdGVkU3RyaW5nRmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IFN0cmluZ051bGxhYmxlTGlzdEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnU3RyaW5nTnVsbGFibGVMaXN0RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcclxuICAgIH0pLFxyXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEJvb2xOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogQm9vbE51bGxhYmxlRmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEJvb2xGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnQm9vbGVhbkZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXHJcbiAgICB9KSxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogQm9vbEZpbHRlciQxXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBCb29sTnVsbGFibGVMaXN0RmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVMaXN0RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuQm9vbGVhbikpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBoYXM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pLFxyXG4gICAgaGFzRXZlcnk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuKSlcclxuICAgIH0pLFxyXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW4pKVxyXG4gICAgfSksXHJcbiAgICBpc0VtcHR5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBJbnROdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdJbnROdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBJbnROdWxsYWJsZUZpbHRlciQxXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBJbnRGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnSW50RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXHJcbiAgICB9KSxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogSW50RmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEludE51bGxhYmxlTGlzdEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnSW50TnVsbGFibGVMaXN0RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcclxuICAgIH0pLFxyXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXHJcbiAgICB9KSxcclxuICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEZsb2F0TnVsbGFibGVGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnRmxvYXROdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxyXG4gICAgfSksXHJcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IEZsb2F0TnVsbGFibGVGaWx0ZXIkMVxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRmxvYXRGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnRmxvYXRGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXHJcbiAgICB9KSxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxyXG4gICAgfSksXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IEZsb2F0RmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEZsb2F0TnVsbGFibGVMaXN0RmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdGbG9hdE51bGxhYmxlTGlzdEZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgaGFzRXZlcnk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXHJcbiAgICB9KSxcclxuICAgIGhhc1NvbWU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXHJcbiAgICB9KSxcclxuICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IERhdGVUaW1lTnVsbGFibGVGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnRGF0ZVRpbWVOdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEYXRlVGltZU51bGxhYmxlRmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IERhdGVUaW1lRmlsdGVyJDEgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ0RhdGVUaW1lRmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogRGF0ZVRpbWVGaWx0ZXIkMVxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRGF0ZVRpbWVOdWxsYWJsZUxpc3RGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ0RhdGVUaW1lTnVsbGFibGVMaXN0RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcclxuICAgIH0pLFxyXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IERlY2ltYWxOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdEZWNpbWFsTnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEZWNpbWFsTnVsbGFibGVGaWx0ZXIkMVxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRGVjaW1hbEZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdEZWNpbWFsRmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEZWNpbWFsRmlsdGVyJDFcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IERlY2ltYWxOdWxsYWJsZUxpc3RGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ0RlY2ltYWxOdWxsYWJsZUxpc3RGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBoYXM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBoYXNTb21lOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBpc0VtcHR5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBTdHJpbmckMSA9IHtcclxuICBvcHRpb25hbDogU3RyaW5nTnVsbGFibGVGaWx0ZXIkMSxcclxuICByZXF1aXJlZDogU3RyaW5nRmlsdGVyJDEsXHJcbiAgbWFueTogU3RyaW5nTnVsbGFibGVMaXN0RmlsdGVyXHJcbn07XHJcbmNvbnN0IEJvb2xlYW4kMSA9IHtcclxuICBvcHRpb25hbDogQm9vbE51bGxhYmxlRmlsdGVyJDEsXHJcbiAgcmVxdWlyZWQ6IEJvb2xGaWx0ZXIkMSxcclxuICBtYW55OiBCb29sTnVsbGFibGVMaXN0RmlsdGVyXHJcbn07XHJcbmNvbnN0IEludCQxID0ge1xyXG4gIG9wdGlvbmFsOiBJbnROdWxsYWJsZUZpbHRlciQxLFxyXG4gIHJlcXVpcmVkOiBJbnRGaWx0ZXIkMSxcclxuICBtYW55OiBJbnROdWxsYWJsZUxpc3RGaWx0ZXJcclxufTtcclxuY29uc3QgRmxvYXQkMSA9IHtcclxuICBvcHRpb25hbDogRmxvYXROdWxsYWJsZUZpbHRlciQxLFxyXG4gIHJlcXVpcmVkOiBGbG9hdEZpbHRlciQxLFxyXG4gIG1hbnk6IEZsb2F0TnVsbGFibGVMaXN0RmlsdGVyXHJcbn07XHJcbmNvbnN0IERhdGVUaW1lJDEgPSB7XHJcbiAgb3B0aW9uYWw6IERhdGVUaW1lTnVsbGFibGVGaWx0ZXIkMSxcclxuICByZXF1aXJlZDogRGF0ZVRpbWVGaWx0ZXIkMSxcclxuICBtYW55OiBEYXRlVGltZU51bGxhYmxlTGlzdEZpbHRlclxyXG59O1xyXG5jb25zdCBEZWNpbWFsJDEgPSB7XHJcbiAgb3B0aW9uYWw6IERlY2ltYWxOdWxsYWJsZUZpbHRlciQxLFxyXG4gIHJlcXVpcmVkOiBEZWNpbWFsRmlsdGVyJDEsXHJcbiAgbWFueTogRGVjaW1hbE51bGxhYmxlTGlzdEZpbHRlclxyXG59O1xyXG5cclxudmFyIHBvc3RncmVzcWwgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XHJcbiAgX19wcm90b19fOiBudWxsLFxyXG4gIFN0cmluZzogU3RyaW5nJDEsXHJcbiAgQm9vbGVhbjogQm9vbGVhbiQxLFxyXG4gIEludDogSW50JDEsXHJcbiAgRmxvYXQ6IEZsb2F0JDEsXHJcbiAgRGF0ZVRpbWU6IERhdGVUaW1lJDEsXHJcbiAgRGVjaW1hbDogRGVjaW1hbCQxLFxyXG4gICdlbnVtJzogZW51bUZpbHRlcnNcclxufSk7XHJcblxyXG4vLyBEbyBub3QgbWFudWFsbHkgbW9kaWZ5IHRoaXMgZmlsZSwgaXQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgdGhlIHBhY2thZ2UgYXQgL3ByaXNtYS11dGlscyBpbiB0aGlzIHJlcG8uXHJcbmNvbnN0IFN0cmluZ051bGxhYmxlRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdTdHJpbmdOdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ051bGxhYmxlRmlsdGVyXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnTmVzdGVkU3RyaW5nTnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgU3RyaW5nRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdTdHJpbmdGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcclxuICAgIH0pLFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ0ZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgTmVzdGVkU3RyaW5nRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdOZXN0ZWRTdHJpbmdGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcclxuICAgIH0pLFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcclxuICAgIH0pLFxyXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xyXG4gICAgfSksXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ0ZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgQm9vbE51bGxhYmxlRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogQm9vbE51bGxhYmxlRmlsdGVyXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBCb29sRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdCb29sZWFuRmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cclxuICAgIH0pLFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBCb29sRmlsdGVyXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBJbnROdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnSW50TnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogSW50TnVsbGFibGVGaWx0ZXJcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IEludEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnSW50RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXHJcbiAgICB9KSxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XHJcbiAgICB9KSxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogSW50RmlsdGVyXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBGbG9hdE51bGxhYmxlRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdGbG9hdE51bGxhYmxlRmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogRmxvYXROdWxsYWJsZUZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRmxvYXRGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ0Zsb2F0RmlsdGVyJyxcclxuICBmaWVsZHM6ICgpID0+ICh7XHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxyXG4gICAgfSksXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcclxuICAgIH0pLFxyXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XHJcbiAgICB9KSxcclxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcclxuICAgIH0pLFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBGbG9hdEZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRGF0ZVRpbWVOdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnRGF0ZVRpbWVOdWxsYWJsZUZpbHRlcicsXHJcbiAgZmllbGRzOiAoKSA9PiAoe1xyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXHJcbiAgICB9KSxcclxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEYXRlVGltZU51bGxhYmxlRmlsdGVyXHJcbiAgICB9KVxyXG4gIH0pXHJcbn0pO1xyXG5jb25zdCBEYXRlVGltZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcclxuICBuYW1lOiAnRGF0ZVRpbWVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcclxuICAgIH0pLFxyXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWUpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXHJcbiAgICB9KSxcclxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcclxuICAgIH0pLFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEYXRlVGltZUZpbHRlclxyXG4gICAgfSlcclxuICB9KVxyXG59KTtcclxuY29uc3QgRGVjaW1hbE51bGxhYmxlRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xyXG4gIG5hbWU6ICdEZWNpbWFsTnVsbGFibGVGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXHJcbiAgICB9KSxcclxuICAgIC8vIGNhbiBiZSBudWxsXHJcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcclxuICAgIH0pLFxyXG4gICAgLy8gY2FuIGJlIG51bGxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICAvLyBjYW4gYmUgbnVsbFxyXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBEZWNpbWFsTnVsbGFibGVGaWx0ZXJcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IERlY2ltYWxGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XHJcbiAgbmFtZTogJ0RlY2ltYWxGaWx0ZXInLFxyXG4gIGZpZWxkczogKCkgPT4gKHtcclxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXHJcbiAgICB9KSxcclxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxyXG4gICAgfSksXHJcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcclxuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcclxuICAgIH0pLFxyXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xyXG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxyXG4gICAgfSksXHJcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XHJcbiAgICAgIHR5cGU6IERlY2ltYWxGaWx0ZXJcclxuICAgIH0pXHJcbiAgfSlcclxufSk7XHJcbmNvbnN0IFN0cmluZyA9IHtcclxuICBvcHRpb25hbDogU3RyaW5nTnVsbGFibGVGaWx0ZXIsXHJcbiAgcmVxdWlyZWQ6IFN0cmluZ0ZpbHRlclxyXG59O1xyXG5jb25zdCBCb29sZWFuID0ge1xyXG4gIG9wdGlvbmFsOiBCb29sTnVsbGFibGVGaWx0ZXIsXHJcbiAgcmVxdWlyZWQ6IEJvb2xGaWx0ZXJcclxufTtcclxuY29uc3QgSW50ID0ge1xyXG4gIG9wdGlvbmFsOiBJbnROdWxsYWJsZUZpbHRlcixcclxuICByZXF1aXJlZDogSW50RmlsdGVyXHJcbn07XHJcbmNvbnN0IEZsb2F0ID0ge1xyXG4gIG9wdGlvbmFsOiBGbG9hdE51bGxhYmxlRmlsdGVyLFxyXG4gIHJlcXVpcmVkOiBGbG9hdEZpbHRlclxyXG59O1xyXG5jb25zdCBEYXRlVGltZSA9IHtcclxuICBvcHRpb25hbDogRGF0ZVRpbWVOdWxsYWJsZUZpbHRlcixcclxuICByZXF1aXJlZDogRGF0ZVRpbWVGaWx0ZXJcclxufTtcclxuY29uc3QgRGVjaW1hbCA9IHtcclxuICBvcHRpb25hbDogRGVjaW1hbE51bGxhYmxlRmlsdGVyLFxyXG4gIHJlcXVpcmVkOiBEZWNpbWFsRmlsdGVyXHJcbn07XHJcblxyXG52YXIgc3FsaXRlID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xyXG4gIF9fcHJvdG9fXzogbnVsbCxcclxuICBTdHJpbmc6IFN0cmluZyxcclxuICBCb29sZWFuOiBCb29sZWFuLFxyXG4gIEludDogSW50LFxyXG4gIEZsb2F0OiBGbG9hdCxcclxuICBEYXRlVGltZTogRGF0ZVRpbWUsXHJcbiAgRGVjaW1hbDogRGVjaW1hbCxcclxuICAnZW51bSc6IGVudW1GaWx0ZXJzXHJcbn0pO1xyXG5cclxuZXhwb3J0cy5RdWVyeU1vZGUgPSBRdWVyeU1vZGU7XHJcbmV4cG9ydHMuZmllbGRUeXBlID0gZmllbGRUeXBlO1xyXG5leHBvcnRzLm9yZGVyRGlyZWN0aW9uRW51bSA9IG9yZGVyRGlyZWN0aW9uRW51bTtcclxuZXhwb3J0cy5wb3N0Z3Jlc3FsID0gcG9zdGdyZXNxbDtcclxuZXhwb3J0cy5zcWxpdGUgPSBzcWxpdGU7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBpc0RlZXBFcXVhbCA9IHJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xyXG52YXIgZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyID0gcmVxdWlyZSgnLi9nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXItNDc2OTlhMGQuY2pzLmRldi5qcycpO1xyXG5cclxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XHJcblxyXG52YXIgaXNEZWVwRXF1YWxfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KGlzRGVlcEVxdWFsKTtcclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplVmFsdWUoZmllbGRzLCBpdGVtR2V0dGVyKSB7XHJcbiAgY29uc3QgdmFsdWUgPSB7fTtcclxuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xyXG4gICAgY29uc3QgZmllbGQgPSBmaWVsZHNbZmllbGRLZXldO1xyXG4gICAgY29uc3QgaXRlbUZvckZpZWxkID0ge307XHJcbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZm9yIChjb25zdCBncmFwaHFsRmllbGQgb2YgZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyLmdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlcihmaWVsZC5jb250cm9sbGVyKSkge1xyXG4gICAgICBjb25zdCBmaWVsZEdldHRlciA9IGl0ZW1HZXR0ZXIuZ2V0KGdyYXBocWxGaWVsZCk7XHJcblxyXG4gICAgICBpZiAoZmllbGRHZXR0ZXIuZXJyb3JzKSB7XHJcbiAgICAgICAgZmllbGRHZXR0ZXIuZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xyXG4gICAgICAgICAgZXJyb3JzLmFkZChlcnJvcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGl0ZW1Gb3JGaWVsZFtncmFwaHFsRmllbGRdID0gZmllbGRHZXR0ZXIuZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoZXJyb3JzLnNpemUpIHtcclxuICAgICAgdmFsdWVbZmllbGRLZXldID0ge1xyXG4gICAgICAgIGtpbmQ6ICdlcnJvcicsXHJcbiAgICAgICAgZXJyb3JzOiBbLi4uZXJyb3JzXVxyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdmFsdWVbZmllbGRLZXldID0ge1xyXG4gICAgICAgIGtpbmQ6ICd2YWx1ZScsXHJcbiAgICAgICAgdmFsdWU6IGZpZWxkLmNvbnRyb2xsZXIuZGVzZXJpYWxpemUoaXRlbUZvckZpZWxkKVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB2YWx1ZTtcclxufVxyXG5mdW5jdGlvbiBzZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKSB7XHJcbiAgY29uc3Qgb2JqID0ge307XHJcbiAgT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoZmllbGRLZXkgPT4ge1xyXG4gICAgY29uc3QgdmFsID0gdmFsdWVbZmllbGRLZXldO1xyXG5cclxuICAgIGlmICh2YWwua2luZCA9PT0gJ3ZhbHVlJykge1xyXG4gICAgICBvYmpbZmllbGRLZXldID0gZmllbGRzW2ZpZWxkS2V5XS5jb250cm9sbGVyLnNlcmlhbGl6ZSh2YWwudmFsdWUpO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVzZUNoYW5nZWRGaWVsZHNBbmREYXRhRm9yVXBkYXRlKGZpZWxkcywgaXRlbUdldHRlciwgdmFsdWUpIHtcclxuICBjb25zdCBzZXJpYWxpemVkVmFsdWVzRnJvbUl0ZW0gPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0gZGVzZXJpYWxpemVWYWx1ZShmaWVsZHMsIGl0ZW1HZXR0ZXIpO1xyXG4gICAgcmV0dXJuIHNlcmlhbGl6ZVZhbHVlVG9PYmpCeUZpZWxkS2V5KGZpZWxkcywgdmFsdWUpO1xyXG4gIH0sIFtmaWVsZHMsIGl0ZW1HZXR0ZXJdKTtcclxuICBjb25zdCBzZXJpYWxpemVkRmllbGRWYWx1ZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIHJldHVybiBzZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKTtcclxuICB9LCBbdmFsdWUsIGZpZWxkc10pO1xyXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBjaGFuZ2VkRmllbGRzID0gbmV3IFNldCgpO1xyXG4gICAgT2JqZWN0LmtleXMoc2VyaWFsaXplZEZpZWxkVmFsdWVzKS5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcclxuICAgICAgbGV0IGlzRXF1YWwgPSBpc0RlZXBFcXVhbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oc2VyaWFsaXplZEZpZWxkVmFsdWVzW2ZpZWxkS2V5XSwgc2VyaWFsaXplZFZhbHVlc0Zyb21JdGVtW2ZpZWxkS2V5XSk7XHJcblxyXG4gICAgICBpZiAoIWlzRXF1YWwpIHtcclxuICAgICAgICBjaGFuZ2VkRmllbGRzLmFkZChmaWVsZEtleSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY29uc3QgZGF0YUZvclVwZGF0ZSA9IHt9O1xyXG4gICAgY2hhbmdlZEZpZWxkcy5mb3JFYWNoKGZpZWxkS2V5ID0+IHtcclxuICAgICAgT2JqZWN0LmFzc2lnbihkYXRhRm9yVXBkYXRlLCBzZXJpYWxpemVkRmllbGRWYWx1ZXNbZmllbGRLZXldKTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2hhbmdlZEZpZWxkczogY2hhbmdlZEZpZWxkcyxcclxuICAgICAgZGF0YUZvclVwZGF0ZVxyXG4gICAgfTtcclxuICB9LCBbc2VyaWFsaXplZEZpZWxkVmFsdWVzLCBzZXJpYWxpemVkVmFsdWVzRnJvbUl0ZW1dKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXNlSW52YWxpZEZpZWxkcyhmaWVsZHMsIHZhbHVlKSB7XHJcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgaW52YWxpZEZpZWxkcyA9IG5ldyBTZXQoKTtcclxuICAgIE9iamVjdC5rZXlzKHZhbHVlKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbCA9IHZhbHVlW2ZpZWxkUGF0aF07XHJcblxyXG4gICAgICBpZiAodmFsLmtpbmQgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICBjb25zdCB2YWxpZGF0ZUZuID0gZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci52YWxpZGF0ZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbGlkYXRlRm4pIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlRm4odmFsLnZhbHVlKTtcclxuXHJcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLmFkZChmaWVsZFBhdGgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW52YWxpZEZpZWxkcztcclxuICB9LCBbZmllbGRzLCB2YWx1ZV0pO1xyXG59XHJcblxyXG5leHBvcnRzLmRlc2VyaWFsaXplVmFsdWUgPSBkZXNlcmlhbGl6ZVZhbHVlO1xyXG5leHBvcnRzLnNlcmlhbGl6ZVZhbHVlVG9PYmpCeUZpZWxkS2V5ID0gc2VyaWFsaXplVmFsdWVUb09iakJ5RmllbGRLZXk7XHJcbmV4cG9ydHMudXNlQ2hhbmdlZEZpZWxkc0FuZERhdGFGb3JVcGRhdGUgPSB1c2VDaGFuZ2VkRmllbGRzQW5kRGF0YUZvclVwZGF0ZTtcclxuZXhwb3J0cy51c2VJbnZhbGlkRmllbGRzID0gdXNlSW52YWxpZEZpZWxkcztcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxuXHJcbmZ1bmN0aW9uIHVzZUZvcm1hdHRlZElucHV0KGNvbmZpZywge1xyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIG9uQmx1cixcclxuICBvbkZvY3VzXHJcbn0pIHtcclxuICAvLyB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnIGltcGxpZXMgdGhlIHVucGFyc2VkIGZvcm1cclxuICAvLyB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIGltcGxpZXMgdGhlIHBhcnNlZCBmb3JtXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIGNvbmZpZy5wYXJzZSh2YWx1ZSkgIT09ICdzdHJpbmcnKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFZhbGlkIHZhbHVlcyBtdXN0IGJlIHBhc3NlZCBpbiBhcyBhIHBhcnNlZCB2YWx1ZSwgbm90IGEgcmF3IHZhbHVlLiBUaGUgdmFsdWUgeW91IHBhc3NlZCB3YXMgXFxgJHtKU09OLnN0cmluZ2lmeSh2YWx1ZSl9XFxgLCB5b3Ugc2hvdWxkIHBhc3MgXFxgJHtKU09OLnN0cmluZ2lmeShjb25maWcucGFyc2UodmFsdWUpKX1cXGAgaW5zdGVhZGApO1xyXG4gIH1cclxuXHJcbiAgbGV0IFtpbnRlcm5hbFZhbHVlU3RhdGUsIHNldEludGVybmFsVmFsdWVTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnID8gdmFsdWUgOiBjb25maWcuZm9ybWF0KHZhbHVlKSk7XHJcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUgIT09IGludGVybmFsVmFsdWVTdGF0ZSkge1xyXG4gICAgc2V0SW50ZXJuYWxWYWx1ZVN0YXRlKHZhbHVlKTtcclxuICB9IC8vIElmIHRoZSB2YWx1ZSBpcyBub3QgYSBzdHJpbmcsIHdlIGtub3cgaXQncyBpbiB0aGUgcGFyc2VkIGZvcm1cclxuXHJcblxyXG4gIGlmICh0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICBjb25zdCBmb3JtYXR0ZWQgPSBjb25maWcuZm9ybWF0KHZhbHVlKTsgLy8gV2hlbiB0aGUgaW5wdXQgaXMgYmx1cnJlZCwgd2Ugd2FudCB0byBzaG93IGFsd2F5cyBzaG93IHRoZSBmb3JtYXR0ZWRcclxuICAgIC8vIHZlcnNpb24gc28gaWYgd2UncmUgbm90IGZvY3Vzc2VkIGFuZCB0aGUgZm9ybWF0dGVkIHZlcnNpb24gaXMgZGlmZmVyZW50XHJcbiAgICAvLyB0byB0aGUgY3VycmVudCB2ZXJzaW9uLCB3ZSBuZWVkIHRvIHVwZGF0ZSBpdC5cclxuXHJcbiAgICBpZiAoIWlzRm9jdXNlZCAmJiBmb3JtYXR0ZWQgIT09IGludGVybmFsVmFsdWVTdGF0ZSkge1xyXG4gICAgICBzZXRJbnRlcm5hbFZhbHVlU3RhdGUoZm9ybWF0dGVkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBwYXJzZWRJbnRlcm5hbCA9IGNvbmZpZy5wYXJzZShpbnRlcm5hbFZhbHVlU3RhdGUpOyAvLyBXZSB1cGRhdGluZyB0aGUgaW50ZXJuYWwgdmFsdWUgaGVyZSBiZWNhdXNlIHRoZVxyXG4gICAgLy8gZXh0ZXJuYWwgdmFsdWUgaGFzIGNoYW5nZWQuXHJcblxyXG4gICAgaWYgKHR5cGVvZiBwYXJzZWRJbnRlcm5hbCAhPT0gJ3N0cmluZycgJiYgY29uZmlnLmZvcm1hdChwYXJzZWRJbnRlcm5hbCkgIT09IGZvcm1hdHRlZCkge1xyXG4gICAgICBzZXRJbnRlcm5hbFZhbHVlU3RhdGUoZm9ybWF0dGVkKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB7XHJcbiAgICB2YWx1ZTogaW50ZXJuYWxWYWx1ZVN0YXRlLFxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICBjb25zdCBwYXJzZWQgPSBjb25maWcucGFyc2UodmFsdWUpO1xyXG4gICAgICBvbkNoYW5nZShwYXJzZWQpO1xyXG4gICAgICBzZXRJbnRlcm5hbFZhbHVlU3RhdGUodmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50KSB7XHJcbiAgICAgIG9uRm9jdXMgPT09IG51bGwgfHwgb25Gb2N1cyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25Gb2N1cyhldmVudCk7XHJcbiAgICAgIHNldElzRm9jdXNlZCh0cnVlKTtcclxuICAgIH0sXHJcblxyXG4gICAgb25CbHVyKGV2ZW50KSB7XHJcbiAgICAgIG9uQmx1ciA9PT0gbnVsbCB8fCBvbkJsdXIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQmx1cihldmVudCk7XHJcbiAgICAgIHNldElzRm9jdXNlZChmYWxzZSk7IC8vIHRoaXMgaXNuJ3Qgc3RyaWN0bHkgbmVjZXNzYXJ5IHNpbmNlIHdlIGFscmVhZHkgZG8gdGhpcyBpbiByZW5kZXJcclxuICAgICAgLy8gdGhpcyBqdXN0IHNhdmVzIGFub3RoZXIgcmVyZW5kZXIgYWZ0ZXIgc2V0SXNGb2N1c2VkKGZhbHNlKVxyXG5cclxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICBzZXRJbnRlcm5hbFZhbHVlU3RhdGUoY29uZmlnLmZvcm1hdCh2YWx1ZSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH07XHJcbn1cclxuXHJcbmV4cG9ydHMudXNlRm9ybWF0dGVkSW5wdXQgPSB1c2VGb3JtYXR0ZWRJbnB1dDtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XHJcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XHJcbnZhciBfdG9Qcm9wZXJ0eUtleSA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleScpO1xyXG5yZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xyXG52YXIgdXVpZCA9IHJlcXVpcmUoJ3V1aWQnKTtcclxudmFyIGNsaWVudCA9IHJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XHJcblxyXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjaGlsZHJlblwiXTtcclxuXHJcbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGNiLCByZWYpIHtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGNiLCB7fSk7XHJcbiAgICBsZXQgbm9kZSA9IHJlZi5jdXJyZW50O1xyXG5cclxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XHJcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBvYnNlcnZlci51bm9ic2VydmUobm9kZSk7XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmNvbnN0IGlkVmFsaWRhdG9ycyA9IHtcclxuICB1dWlkOiB1dWlkLnZhbGlkYXRlLFxyXG5cclxuICBjdWlkKHZhbHVlKSB7XHJcbiAgICByZXR1cm4gdmFsdWUuc3RhcnRzV2l0aCgnYycpO1xyXG4gIH0sXHJcblxyXG4gIGF1dG9pbmNyZW1lbnQodmFsdWUpIHtcclxuICAgIHJldHVybiAvXlxcZCskLy50ZXN0KHZhbHVlKTtcclxuICB9XHJcblxyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlRmlsdGVyKHNlYXJjaCwgbGlzdCkge1xyXG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgIGxldCBjb25kaXRpb25zID0gW107XHJcblxyXG4gICAgaWYgKHNlYXJjaC5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgaWRGaWVsZEtpbmQgPSBsaXN0LmZpZWxkcy5pZC5jb250cm9sbGVyLmlkRmllbGRLaW5kO1xyXG4gICAgICBjb25zdCB0cmltbWVkU2VhcmNoID0gc2VhcmNoLnRyaW0oKTtcclxuICAgICAgY29uc3QgaXNWYWxpZElkID0gaWRWYWxpZGF0b3JzW2lkRmllbGRLaW5kXSh0cmltbWVkU2VhcmNoKTtcclxuXHJcbiAgICAgIGlmIChpc1ZhbGlkSWQpIHtcclxuICAgICAgICBjb25kaXRpb25zLnB1c2goe1xyXG4gICAgICAgICAgaWQ6IHRyaW1tZWRTZWFyY2hcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiBPYmplY3QudmFsdWVzKGxpc3QuZmllbGRzKSkge1xyXG4gICAgICAgIGlmIChmaWVsZC5zZWFyY2ggIT09IG51bGwpIHtcclxuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XHJcbiAgICAgICAgICAgIFtgJHtmaWVsZC5wYXRofV9jb250YWlucyR7ZmllbGQuc2VhcmNoID09PSAnaW5zZW5zaXRpdmUnID8gJ19pJyA6ICcnfWBdOiB0cmltbWVkU2VhcmNoXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBPUjogY29uZGl0aW9uc1xyXG4gICAgfTtcclxuICB9LCBbc2VhcmNoLCBsaXN0XSk7XHJcbn1cclxuXHJcbmNvbnN0IGluaXRpYWxJdGVtc1RvTG9hZCA9IDEwO1xyXG5jb25zdCBzdWJzZXF1ZW50SXRlbXNUb0xvYWQgPSA1MDtcclxuY29uc3QgaWRGaWVsZCA9ICdfX19faWRfX19fJztcclxuY29uc3QgbGFiZWxGaWVsZCA9ICdfX19fbGFiZWxfX19fJztcclxuY29uc3QgTG9hZGluZ0luZGljYXRvckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlQ29udGV4dCh7XHJcbiAgY291bnQ6IDAsXHJcbiAgcmVmOiAoKSA9PiB7fVxyXG59KTtcclxuY29uc3QgUmVsYXRpb25zaGlwU2VsZWN0ID0gKHtcclxuICBhdXRvRm9jdXMsXHJcbiAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxyXG4gIGlzRGlzYWJsZWQsXHJcbiAgaXNMb2FkaW5nLFxyXG4gIGxpc3QsXHJcbiAgcGxhY2Vob2xkZXIsXHJcbiAgcG9ydGFsTWVudSxcclxuICBzdGF0ZSxcclxuICBleHRyYVNlbGVjdGlvbiA9ICcnXHJcbn0pID0+IHtcclxuICB2YXIgX2RhdGEkaXRlbXM7XHJcblxyXG4gIGNvbnN0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSBSZWFjdC51c2VTdGF0ZSgnJyk7IC8vIG5vdGUgaXQncyBpbXBvcnRhbnQgdGhhdCB0aGlzIGlzIGluIHN0YXRlIHJhdGhlciB0aGFuIGEgcmVmXHJcbiAgLy8gYmVjYXVzZSB3ZSB3YW50IGEgcmUtcmVuZGVyIGlmIHRoZSBlbGVtZW50IGNoYW5nZXNcclxuICAvLyBzbyB0aGF0IHdlIGNhbiByZWdpc3RlciB0aGUgaW50ZXJzZWN0aW9uIG9ic2VydmVyXHJcbiAgLy8gb24gdGhlIHJpZ2h0IGVsZW1lbnRcclxuXHJcbiAgY29uc3QgW2xvYWRpbmdJbmRpY2F0b3JFbGVtZW50LCBzZXRMb2FkaW5nSW5kaWNhdG9yRWxlbWVudF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcclxuICBjb25zdCBRVUVSWSA9IGNsaWVudC5ncWxgXHJcbiAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3QoJHdoZXJlOiAke2xpc3QuZ3FsTmFtZXMud2hlcmVJbnB1dE5hbWV9ISwgJHRha2U6IEludCEsICRza2lwOiBJbnQhKSB7XHJcbiAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6ICR3aGVyZSwgdGFrZTogJHRha2UsIHNraXA6ICRza2lwKSB7XHJcbiAgICAgICAgJHtpZEZpZWxkfTogaWRcclxuICAgICAgICAke2xhYmVsRmllbGR9OiAke2xpc3QubGFiZWxGaWVsZH1cclxuICAgICAgICAke2V4dHJhU2VsZWN0aW9ufVxyXG4gICAgICB9XHJcbiAgICAgIGNvdW50OiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5Q291bnROYW1lfSh3aGVyZTogJHdoZXJlKVxyXG4gICAgfVxyXG4gIGA7XHJcbiAgY29uc3Qgd2hlcmUgPSB1c2VGaWx0ZXIoc2VhcmNoLCBsaXN0KTtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhLFxyXG4gICAgZXJyb3IsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZmV0Y2hNb3JlXHJcbiAgfSA9IGNsaWVudC51c2VRdWVyeShRVUVSWSwge1xyXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxyXG4gICAgdmFyaWFibGVzOiB7XHJcbiAgICAgIHdoZXJlLFxyXG4gICAgICB0YWtlOiBpbml0aWFsSXRlbXNUb0xvYWQsXHJcbiAgICAgIHNraXA6IDBcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBjb3VudCA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGEuY291bnQpIHx8IDA7XHJcbiAgY29uc3Qgb3B0aW9ucyA9IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGF0YSRpdGVtcyA9IGRhdGEuaXRlbXMpID09PSBudWxsIHx8IF9kYXRhJGl0ZW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGF0YSRpdGVtcy5tYXAoX3JlZiA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICBbaWRGaWVsZF06IHZhbHVlLFxyXG4gICAgICBbbGFiZWxGaWVsZF06IGxhYmVsXHJcbiAgICB9ID0gX3JlZixcclxuICAgICAgICBkYXRhID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIFtpZEZpZWxkLCBsYWJlbEZpZWxkXS5tYXAoX3RvUHJvcGVydHlLZXkpKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB2YWx1ZSxcclxuICAgICAgbGFiZWw6IGxhYmVsIHx8IHZhbHVlLFxyXG4gICAgICBkYXRhXHJcbiAgICB9O1xyXG4gIH0pKSB8fCBbXTtcclxuICBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ29udGV4dFZhbCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcclxuICAgIGNvdW50LFxyXG4gICAgcmVmOiBzZXRMb2FkaW5nSW5kaWNhdG9yRWxlbWVudFxyXG4gIH0pLCBbY291bnRdKTtcclxuICB1c2VJbnRlcnNlY3Rpb25PYnNlcnZlcigoW3tcclxuICAgIGlzSW50ZXJzZWN0aW5nXHJcbiAgfV0pID0+IHtcclxuICAgIGlmICghbG9hZGluZyAmJiBpc0ludGVyc2VjdGluZyAmJiBvcHRpb25zLmxlbmd0aCA8IGNvdW50KSB7XHJcbiAgICAgIGNvbnN0IFFVRVJZID0gY2xpZW50LmdxbGBcclxuICAgICAgICAgICAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3RNb3JlKCR3aGVyZTogJHtsaXN0LmdxbE5hbWVzLndoZXJlSW5wdXROYW1lfSEsICR0YWtlOiBJbnQhLCAkc2tpcDogSW50ISkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXM6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlOYW1lfSh3aGVyZTogJHdoZXJlLCB0YWtlOiAkdGFrZSwgc2tpcDogJHNraXApIHtcclxuICAgICAgICAgICAgICAgICAgJHtsYWJlbEZpZWxkfTogJHtsaXN0LmxhYmVsRmllbGR9XHJcbiAgICAgICAgICAgICAgICAgICR7aWRGaWVsZH06IGlkXHJcbiAgICAgICAgICAgICAgICAgICR7ZXh0cmFTZWxlY3Rpb259XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBgO1xyXG4gICAgICBmZXRjaE1vcmUoe1xyXG4gICAgICAgIHF1ZXJ5OiBRVUVSWSxcclxuICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgIHdoZXJlLFxyXG4gICAgICAgICAgdGFrZTogc3Vic2VxdWVudEl0ZW1zVG9Mb2FkLFxyXG4gICAgICAgICAgc2tpcDogZGF0YS5pdGVtcy5sZW5ndGhcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwge1xyXG4gICAgICAgICAgZmV0Y2hNb3JlUmVzdWx0XHJcbiAgICAgICAgfSkgPT4ge1xyXG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2O1xyXG4gICAgICAgICAgcmV0dXJuIF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcHJldiksIHt9LCB7XHJcbiAgICAgICAgICAgIGl0ZW1zOiBbLi4ucHJldi5pdGVtcywgLi4uZmV0Y2hNb3JlUmVzdWx0Lml0ZW1zXVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LCB7XHJcbiAgICBjdXJyZW50OiBsb2FkaW5nSW5kaWNhdG9yRWxlbWVudFxyXG4gIH0pOyAvLyBUT0RPOiBiZXR0ZXIgZXJyb3IgVUlcclxuICAvLyBUT0RPOiBIYW5kbGUgcGVybWlzc2lvbiBlcnJvcnNcclxuICAvLyAoaWU7IHVzZXIgaGFzIHBlcm1pc3Npb24gdG8gcmVhZCB0aGlzIHJlbGF0aW9uc2hpcCBmaWVsZCwgYnV0XHJcbiAgLy8gbm90IHRoZSByZWxhdGVkIGxpc3QsIG9yIHNvbWUgaXRlbXMgb24gdGhlIGxpc3QpXHJcblxyXG4gIGlmIChlcnJvcikge1xyXG4gICAgcmV0dXJuIGNvcmUuanN4KFwic3BhblwiLCBudWxsLCBcIkVycm9yXCIpO1xyXG4gIH1cclxuXHJcbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdvbmUnKSB7XHJcbiAgICByZXR1cm4gY29yZS5qc3goTG9hZGluZ0luZGljYXRvckNvbnRleHQuUHJvdmlkZXIsIHtcclxuICAgICAgdmFsdWU6IGxvYWRpbmdJbmRpY2F0b3JDb250ZXh0VmFsXHJcbiAgICB9LCBjb3JlLmpzeChmaWVsZHMuU2VsZWN0IC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhY3Qtc2VsZWN0IHBhc3NlcyBhIHNlY29uZCBhcmd1bWVudCB0byBvbklucHV0Q2hhbmdlXHJcbiAgICAvLyBhbmQgdXNlU3RhdGUgc2V0dGVycyBsb2cgYSB3YXJuaW5nIGlmIGEgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZFxyXG4gICAgLCB7XHJcbiAgICAgIG9uSW5wdXRDaGFuZ2U6IHZhbCA9PiBzZXRTZWFyY2godmFsKSxcclxuICAgICAgaXNMb2FkaW5nOiBsb2FkaW5nIHx8IGlzTG9hZGluZyxcclxuICAgICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXHJcbiAgICAgIGNvbXBvbmVudHM6IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMsXHJcbiAgICAgIHBvcnRhbE1lbnU6IHBvcnRhbE1lbnUsXHJcbiAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSA/IHtcclxuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUuaWQsXHJcbiAgICAgICAgbGFiZWw6IHN0YXRlLnZhbHVlLmxhYmVsLFxyXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcclxuICAgICAgICBkYXRhOiBzdGF0ZS52YWx1ZS5kYXRhXHJcbiAgICAgIH0gOiBudWxsLFxyXG4gICAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xyXG4gICAgICAgIHN0YXRlLm9uQ2hhbmdlKHZhbHVlID8ge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLnZhbHVlLFxyXG4gICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxyXG4gICAgICAgICAgZGF0YTogdmFsdWUuZGF0YVxyXG4gICAgICAgIH0gOiBudWxsKTtcclxuICAgICAgfSxcclxuICAgICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxyXG4gICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcclxuICAgICAgaXNDbGVhcmFibGU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcclxuICAgICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxyXG4gICAgfSkpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNvcmUuanN4KExvYWRpbmdJbmRpY2F0b3JDb250ZXh0LlByb3ZpZGVyLCB7XHJcbiAgICB2YWx1ZTogbG9hZGluZ0luZGljYXRvckNvbnRleHRWYWxcclxuICB9LCBjb3JlLmpzeChmaWVsZHMuTXVsdGlTZWxlY3QgLy8gdGhpcyBpcyBuZWNlc3NhcnkgYmVjYXVzZSByZWFjdC1zZWxlY3QgcGFzc2VzIGEgc2Vjb25kIGFyZ3VtZW50IHRvIG9uSW5wdXRDaGFuZ2VcclxuICAvLyBhbmQgdXNlU3RhdGUgc2V0dGVycyBsb2cgYSB3YXJuaW5nIGlmIGEgc2Vjb25kIGFyZ3VtZW50IGlzIHBhc3NlZFxyXG4gICwge1xyXG4gICAgb25JbnB1dENoYW5nZTogdmFsID0+IHNldFNlYXJjaCh2YWwpLFxyXG4gICAgaXNMb2FkaW5nOiBsb2FkaW5nIHx8IGlzTG9hZGluZyxcclxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxyXG4gICAgY29tcG9uZW50czogcmVsYXRpb25zaGlwU2VsZWN0Q29tcG9uZW50cyxcclxuICAgIHBvcnRhbE1lbnU6IHBvcnRhbE1lbnUsXHJcbiAgICB2YWx1ZTogc3RhdGUudmFsdWUubWFwKHZhbHVlID0+ICh7XHJcbiAgICAgIHZhbHVlOiB2YWx1ZS5pZCxcclxuICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxyXG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhXHJcbiAgICB9KSksXHJcbiAgICBvcHRpb25zOiBvcHRpb25zLFxyXG4gICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcclxuICAgICAgc3RhdGUub25DaGFuZ2UodmFsdWUubWFwKHggPT4gKHtcclxuICAgICAgICBpZDogeC52YWx1ZSxcclxuICAgICAgICBsYWJlbDogeC5sYWJlbCxcclxuICAgICAgICBkYXRhOiB4LmRhdGFcclxuICAgICAgfSkpKTtcclxuICAgIH0sXHJcbiAgICBwbGFjZWhvbGRlcjogcGxhY2Vob2xkZXIsXHJcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcclxuICAgIGlzQ2xlYXJhYmxlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXHJcbiAgICBpc0Rpc2FibGVkOiBpc0Rpc2FibGVkXHJcbiAgfSkpO1xyXG59O1xyXG5jb25zdCByZWxhdGlvbnNoaXBTZWxlY3RDb21wb25lbnRzID0ge1xyXG4gIE1lbnVMaXN0OiBfcmVmMiA9PiB7XHJcbiAgICBsZXQge1xyXG4gICAgICBjaGlsZHJlblxyXG4gICAgfSA9IF9yZWYyLFxyXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBfZXhjbHVkZWQpO1xyXG5cclxuICAgIGNvbnN0IHtcclxuICAgICAgY291bnQsXHJcbiAgICAgIHJlZlxyXG4gICAgfSA9IFJlYWN0LnVzZUNvbnRleHQoTG9hZGluZ0luZGljYXRvckNvbnRleHQpO1xyXG4gICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5zZWxlY3RDb21wb25lbnRzLk1lbnVMaXN0LCBwcm9wcywgY2hpbGRyZW4sIGNvcmUuanN4KFwiZGl2XCIsIHtcclxuICAgICAgY3NzOiB7XHJcbiAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gICAgICB9LFxyXG4gICAgICByZWY6IHJlZlxyXG4gICAgfSwgcHJvcHMub3B0aW9ucy5sZW5ndGggPCBjb3VudCAmJiBjb3JlLmpzeChcInNwYW5cIiwge1xyXG4gICAgICBjc3M6IHtcclxuICAgICAgICBwYWRkaW5nOiA4XHJcbiAgICAgIH1cclxuICAgIH0sIFwiTG9hZGluZy4uLlwiKSkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydHMuUmVsYXRpb25zaGlwU2VsZWN0ID0gUmVsYXRpb25zaGlwU2VsZWN0O1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIG1vZGFscyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcclxudmFyIGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9hZG1pbi11aS9yb3V0ZXIvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XHJcbnZhciBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZSA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2FkbWluLXVpL2NvbnRleHQvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XHJcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudCcpO1xyXG52YXIgQ2VsbENvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbENvbnRhaW5lci00NTMyNTRiNS5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHknKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uJyk7XHJcbnJlcXVpcmUoJ25leHQvbGluaycpO1xyXG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG5yZXF1aXJlKCduZXh0L3JvdXRlcicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvcG9wb3ZlcicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9DaGV2cm9uUmlnaHRJY29uJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvU2lnbm91dEJ1dHRvbi1hY2RiMTU1NC5janMuZGV2LmpzJyk7XHJcbnZhciBDcmVhdGVJdGVtRHJhd2VyID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9DcmVhdGVJdGVtRHJhd2VyLWI0YjBkZDE2LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xyXG52YXIgdG9vbHRpcCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b29sdGlwJyk7XHJcbnZhciBsb2FkaW5nID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2xvYWRpbmcnKTtcclxudmFyIGRhdGFHZXR0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2RhdGFHZXR0ZXItOWZiZTJmOGUuY2pzLmRldi5qcycpO1xyXG52YXIgZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXItNDc2OTlhMGQuY2pzLmRldi5qcycpO1xyXG52YXIgaXNEZWVwRXF1YWwgPSByZXF1aXJlKCdmYXN0LWRlZXAtZXF1YWwnKTtcclxudmFyIGZpZWxkc190eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3Rfa2V5c3RvbmUgPSByZXF1aXJlKCcuLi9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XHJcbnZhciB0b2FzdCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b2FzdCcpO1xyXG52YXIgRmllbGRzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9GaWVsZHMtNGFmYjM4ZjAuY2pzLmRldi5qcycpO1xyXG52YXIgdXNlSW52YWxpZEZpZWxkcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvdXNlSW52YWxpZEZpZWxkcy0xNjJkMWI5Yy5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ2Fwb2xsby11cGxvYWQtY2xpZW50Jyk7XHJcbnJlcXVpcmUoJ0BlbW90aW9uL2hhc2gnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9zcWxpdGUtYWY5ZTUxNDguY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9hZG1pbi1tZXRhLWdyYXBocWwtOWY5YTljMTEuY2pzLmRldi5qcycpO1xyXG52YXIgR3JhcGhRTEVycm9yTm90aWNlID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9HcmFwaFFMRXJyb3JOb3RpY2UtNzZmZjk2ZGQuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2NvcmUtYzhlY2NlMjMuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdkZWNpbWFsLmpzJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEnKTtcclxucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcclxucmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcclxucmVxdWlyZSgnZ3JhcGhxbCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xyXG5yZXF1aXJlKCdAZW1vdGlvbi93ZWFrLW1lbW9pemUnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5Jyk7XHJcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xyXG5yZXF1aXJlKCd1dWlkJyk7XHJcblxyXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cclxuXHJcbnZhciBpc0RlZXBFcXVhbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaXNEZWVwRXF1YWwpO1xyXG5cclxuZnVuY3Rpb24gdXNlSXRlbVN0YXRlKHtcclxuICBzZWxlY3RlZEZpZWxkcyxcclxuICBsb2NhbExpc3QsXHJcbiAgaWQsXHJcbiAgZmllbGRcclxufSkge1xyXG4gIGNvbnN0IHtcclxuICAgIGRhdGEsXHJcbiAgICBlcnJvcixcclxuICAgIGxvYWRpbmdcclxuICB9ID0gY2xpZW50LnVzZVF1ZXJ5KGNsaWVudC5ncWxgcXVlcnkoJGlkOiBJRCEpIHtcclxuICBpdGVtOiAke2xvY2FsTGlzdC5ncWxOYW1lcy5pdGVtUXVlcnlOYW1lfSh3aGVyZToge2lkOiAkaWR9KSB7XHJcbiAgICBpZFxyXG4gICAgcmVsYXRpb25zaGlwOiAke2ZpZWxkLnBhdGh9IHtcclxuICAgICAgJHtzZWxlY3RlZEZpZWxkc31cclxuICAgIH1cclxuICB9XHJcbn1gLCB7XHJcbiAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgaWRcclxuICAgIH0sXHJcbiAgICBlcnJvclBvbGljeTogJ2FsbCdcclxuICB9KTtcclxuICBjb25zdCB7XHJcbiAgICBpdGVtc0FyckZyb21EYXRhLFxyXG4gICAgcmVsYXRpb25zaGlwR2V0dGVyXHJcbiAgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xyXG4gICAgY29uc3QgZGF0YUdldHRlciQxID0gZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9ycyk7XHJcbiAgICBjb25zdCByZWxhdGlvbnNoaXBHZXR0ZXIgPSBkYXRhR2V0dGVyJDEuZ2V0KCdpdGVtJykuZ2V0KCdyZWxhdGlvbnNoaXAnKTtcclxuICAgIGNvbnN0IGlzTWFueSA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpO1xyXG4gICAgY29uc3QgaXRlbXNBcnJGcm9tRGF0YSA9IChpc01hbnkgPyByZWxhdGlvbnNoaXBHZXR0ZXIuZGF0YS5tYXAoKF8sIGkpID0+IHJlbGF0aW9uc2hpcEdldHRlci5nZXQoaSkpIDogW3JlbGF0aW9uc2hpcEdldHRlcl0pLmZpbHRlcih4ID0+IHtcclxuICAgICAgdmFyIF94JGRhdGE7XHJcblxyXG4gICAgICByZXR1cm4gKChfeCRkYXRhID0geC5kYXRhKSA9PT0gbnVsbCB8fCBfeCRkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRkYXRhLmlkKSAhPSBudWxsO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWxhdGlvbnNoaXBHZXR0ZXIsXHJcbiAgICAgIGl0ZW1zQXJyRnJvbURhdGFcclxuICAgIH07XHJcbiAgfSwgW2RhdGEsIGVycm9yXSk7XHJcbiAgbGV0IFt7XHJcbiAgICBpdGVtcyxcclxuICAgIGl0ZW1zQXJyRnJvbURhdGE6IGl0ZW1zQXJyRnJvbURhdGFTdGF0ZVxyXG4gIH0sIHNldEl0ZW1zU3RhdGVdID0gUmVhY3QudXNlU3RhdGUoe1xyXG4gICAgaXRlbXNBcnJGcm9tRGF0YTogW10sXHJcbiAgICBpdGVtczoge31cclxuICB9KTtcclxuXHJcbiAgaWYgKGl0ZW1zQXJyRnJvbURhdGFTdGF0ZSAhPT0gaXRlbXNBcnJGcm9tRGF0YSkge1xyXG4gICAgbGV0IG5ld0l0ZW1zID0ge307XHJcbiAgICBpdGVtc0FyckZyb21EYXRhLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHZhciBfaXRlbXMkaXRlbSRkYXRhJGlkLCBfaXRlbSRlcnJvcnMsIF9pbml0aWFsSXRlbUluU3RhdGUkZTtcclxuXHJcbiAgICAgIGNvbnN0IGluaXRpYWxJdGVtSW5TdGF0ZSA9IChfaXRlbXMkaXRlbSRkYXRhJGlkID0gaXRlbXNbaXRlbS5kYXRhLmlkXSkgPT09IG51bGwgfHwgX2l0ZW1zJGl0ZW0kZGF0YSRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW1zJGl0ZW0kZGF0YSRpZC5mcm9tSW5pdGlhbFF1ZXJ5O1xyXG5cclxuICAgICAgaWYgKChpdGVtc1tpdGVtLmRhdGEuaWRdICYmIGluaXRpYWxJdGVtSW5TdGF0ZSB8fCAhaXRlbXNbaXRlbS5kYXRhLmlkXSkgJiYgKCFpbml0aWFsSXRlbUluU3RhdGUgfHwgaXRlbS5kYXRhICE9PSBpbml0aWFsSXRlbUluU3RhdGUuZGF0YSB8fCAoKF9pdGVtJGVycm9ycyA9IGl0ZW0uZXJyb3JzKSA9PT0gbnVsbCB8fCBfaXRlbSRlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9pdGVtJGVycm9ycy5sZW5ndGgpICE9PSAoKF9pbml0aWFsSXRlbUluU3RhdGUkZSA9IGluaXRpYWxJdGVtSW5TdGF0ZS5lcnJvcnMpID09PSBudWxsIHx8IF9pbml0aWFsSXRlbUluU3RhdGUkZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2luaXRpYWxJdGVtSW5TdGF0ZSRlLmxlbmd0aCkgfHwgKGl0ZW0uZXJyb3JzIHx8IFtdKS5zb21lKChlcnIsIGkpID0+IHtcclxuICAgICAgICB2YXIgX2luaXRpYWxJdGVtSW5TdGF0ZSRlMjtcclxuXHJcbiAgICAgICAgcmV0dXJuIGVyciAhPT0gKChfaW5pdGlhbEl0ZW1JblN0YXRlJGUyID0gaW5pdGlhbEl0ZW1JblN0YXRlLmVycm9ycykgPT09IG51bGwgfHwgX2luaXRpYWxJdGVtSW5TdGF0ZSRlMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2luaXRpYWxJdGVtSW5TdGF0ZSRlMltpXSk7XHJcbiAgICAgIH0pKSkge1xyXG4gICAgICAgIG5ld0l0ZW1zW2l0ZW0uZGF0YS5pZF0gPSB7XHJcbiAgICAgICAgICBjdXJyZW50OiBpdGVtLFxyXG4gICAgICAgICAgZnJvbUluaXRpYWxRdWVyeTogaXRlbVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3SXRlbXNbaXRlbS5kYXRhLmlkXSA9IGl0ZW1zW2l0ZW0uZGF0YS5pZF07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgaXRlbXMgPSBuZXdJdGVtcztcclxuICAgIHNldEl0ZW1zU3RhdGUoe1xyXG4gICAgICBpdGVtczogbmV3SXRlbXMsXHJcbiAgICAgIGl0ZW1zQXJyRnJvbURhdGFcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGl0ZW1zOiBSZWFjdC51c2VNZW1vKCgpID0+IHtcclxuICAgICAgY29uc3QgaXRlbXNUb1JldHVybiA9IHt9O1xyXG4gICAgICBPYmplY3Qua2V5cyhpdGVtcykuZm9yRWFjaChpZCA9PiB7XHJcbiAgICAgICAgaXRlbXNUb1JldHVybltpZF0gPSBpdGVtc1tpZF0uY3VycmVudDtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiBpdGVtc1RvUmV0dXJuO1xyXG4gICAgfSwgW2l0ZW1zXSksXHJcbiAgICBzZXRJdGVtczogUmVhY3QudXNlQ2FsbGJhY2soaXRlbXMgPT4ge1xyXG4gICAgICBzZXRJdGVtc1N0YXRlKHN0YXRlID0+IHtcclxuICAgICAgICBsZXQgaXRlbXNGb3JTdGF0ZSA9IHt9O1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgIHZhciBfc3RhdGUkaXRlbXMkaWQ7XHJcblxyXG4gICAgICAgICAgaWYgKGl0ZW1zW2lkXSA9PT0gKChfc3RhdGUkaXRlbXMkaWQgPSBzdGF0ZS5pdGVtc1tpZF0pID09PSBudWxsIHx8IF9zdGF0ZSRpdGVtcyRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGl0ZW1zJGlkLmN1cnJlbnQpKSB7XHJcbiAgICAgICAgICAgIGl0ZW1zRm9yU3RhdGVbaWRdID0gc3RhdGUuaXRlbXNbaWRdO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFyIF9zdGF0ZSRpdGVtcyRpZDI7XHJcblxyXG4gICAgICAgICAgICBpdGVtc0ZvclN0YXRlW2lkXSA9IHtcclxuICAgICAgICAgICAgICBjdXJyZW50OiBpdGVtc1tpZF0sXHJcbiAgICAgICAgICAgICAgZnJvbUluaXRpYWxRdWVyeTogKF9zdGF0ZSRpdGVtcyRpZDIgPSBzdGF0ZS5pdGVtc1tpZF0pID09PSBudWxsIHx8IF9zdGF0ZSRpdGVtcyRpZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpdGVtcyRpZDIuZnJvbUluaXRpYWxRdWVyeVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtc0FyckZyb21EYXRhOiBzdGF0ZS5pdGVtc0FyckZyb21EYXRhLFxyXG4gICAgICAgICAgaXRlbXM6IGl0ZW1zRm9yU3RhdGVcclxuICAgICAgICB9O1xyXG4gICAgICB9KTtcclxuICAgIH0sIFtzZXRJdGVtc1N0YXRlXSksXHJcbiAgICBzdGF0ZTogKCgpID0+IHtcclxuICAgICAgaWYgKGxvYWRpbmcpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ2xvYWRpbmcnXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3IubmV0d29ya0Vycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGtpbmQ6ICdlcnJvcicsXHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5uZXR3b3JrRXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChmaWVsZC5tYW55ICYmICFyZWxhdGlvbnNoaXBHZXR0ZXIuZGF0YSkge1xyXG4gICAgICAgIHZhciBfcmVsYXRpb25zaGlwR2V0dGVyJGU7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBraW5kOiAnZXJyb3InLFxyXG4gICAgICAgICAgbWVzc2FnZTogKChfcmVsYXRpb25zaGlwR2V0dGVyJGUgPSByZWxhdGlvbnNoaXBHZXR0ZXIuZXJyb3JzKSA9PT0gbnVsbCB8fCBfcmVsYXRpb25zaGlwR2V0dGVyJGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZWxhdGlvbnNoaXBHZXR0ZXIkZVswXS5tZXNzYWdlKSB8fCAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogJ2xvYWRlZCdcclxuICAgICAgfTtcclxuICAgIH0pKClcclxuICB9O1xyXG59XHJcbmZ1bmN0aW9uIHVzZUZpZWxkc09iaihsaXN0LCBmaWVsZHMpIHtcclxuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XHJcbiAgICBjb25zdCBlZGl0RmllbGRzID0ge307XHJcbiAgICBmaWVsZHMgPT09IG51bGwgfHwgZmllbGRzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmaWVsZHMuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xyXG4gICAgICBlZGl0RmllbGRzW2ZpZWxkUGF0aF0gPSBsaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZWRpdEZpZWxkcztcclxuICB9LCBbZmllbGRzLCBsaXN0LmZpZWxkc10pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBJbmxpbmVFZGl0KHtcclxuICBmaWVsZHMsXHJcbiAgbGlzdCxcclxuICBzZWxlY3RlZEZpZWxkcyxcclxuICBpdGVtR2V0dGVyLFxyXG4gIG9uQ2FuY2VsLFxyXG4gIG9uU2F2ZVxyXG59KSB7XHJcbiAgdmFyIF9pdGVtR2V0dGVyJGVycm9ycztcclxuXHJcbiAgY29uc3QgZmllbGRzT2JqID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkcyk7XHJcbiAgY29uc3QgW3VwZGF0ZSwge1xyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yXHJcbiAgfV0gPSBjbGllbnQudXNlTXV0YXRpb24oY2xpZW50LmdxbGBtdXRhdGlvbiAoJGRhdGE6ICR7bGlzdC5ncWxOYW1lcy51cGRhdGVJbnB1dE5hbWV9ISwgJGlkOiBJRCEpIHtcclxuICAgICAgICAgIGl0ZW06ICR7bGlzdC5ncWxOYW1lcy51cGRhdGVNdXRhdGlvbk5hbWV9KHdoZXJlOiB7IGlkOiAkaWQgfSwgZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cclxuICAgICAgICAgIH1cclxuICAgICAgICB9YCwge1xyXG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXHJcbiAgfSk7XHJcbiAgY29uc3QgW3N0YXRlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUludmFsaWRGaWVsZHMuZGVzZXJpYWxpemVWYWx1ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHN0YXRlLml0ZW0gIT09IGl0ZW1HZXR0ZXIuZGF0YSAmJiAoX2l0ZW1HZXR0ZXIkZXJyb3JzID0gaXRlbUdldHRlci5lcnJvcnMpICE9PSBudWxsICYmIF9pdGVtR2V0dGVyJGVycm9ycyAhPT0gdm9pZCAwICYmIF9pdGVtR2V0dGVyJGVycm9ycy5ldmVyeSh4ID0+IHtcclxuICAgIHZhciBfeCRwYXRoO1xyXG5cclxuICAgIHJldHVybiAoKF94JHBhdGggPSB4LnBhdGgpID09PSBudWxsIHx8IF94JHBhdGggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgubGVuZ3RoKSAhPT0gMTtcclxuICB9KSkge1xyXG4gICAgY29uc3QgdmFsdWUgPSB1c2VJbnZhbGlkRmllbGRzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcclxuICAgIHNldFZhbHVlKHtcclxuICAgICAgdmFsdWUsXHJcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBjaGFuZ2VkRmllbGRzLFxyXG4gICAgZGF0YUZvclVwZGF0ZVxyXG4gIH0gPSB1c2VJbnZhbGlkRmllbGRzLnVzZUNoYW5nZWRGaWVsZHNBbmREYXRhRm9yVXBkYXRlKGZpZWxkc09iaiwgaXRlbUdldHRlciwgc3RhdGUudmFsdWUpO1xyXG4gIGNvbnN0IGludmFsaWRGaWVsZHMgPSB1c2VJbnZhbGlkRmllbGRzLnVzZUludmFsaWRGaWVsZHMoZmllbGRzT2JqLCBzdGF0ZS52YWx1ZSk7XHJcbiAgY29uc3QgW2ZvcmNlVmFsaWRhdGlvbiwgc2V0Rm9yY2VWYWxpZGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2FzdHMgPSB0b2FzdC51c2VUb2FzdHMoKTtcclxuICBjb25zdCBzYXZlQnV0dG9uUHJvcHMgPSB7XHJcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICB3ZWlnaHQ6ICdib2xkJyxcclxuICAgIHNpemU6ICdzbWFsbCcsXHJcbiAgICB0b25lOiAnYWN0aXZlJyxcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgY29uc3QgbmV3Rm9yY2VWYWxpZGF0aW9uID0gaW52YWxpZEZpZWxkcy5zaXplICE9PSAwO1xyXG4gICAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcclxuICAgICAgaWYgKG5ld0ZvcmNlVmFsaWRhdGlvbikgcmV0dXJuO1xyXG4gICAgICB1cGRhdGUoe1xyXG4gICAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgZGF0YTogZGF0YUZvclVwZGF0ZSxcclxuICAgICAgICAgIGlkOiBpdGVtR2V0dGVyLmdldCgnaWQnKS5kYXRhXHJcbiAgICAgICAgfVxyXG4gICAgICB9KS50aGVuKCh7XHJcbiAgICAgICAgZGF0YSxcclxuICAgICAgICBlcnJvcnNcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXHJcbiAgICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cclxuICAgICAgICBjb25zdCBlcnJvciA9IGVycm9ycyA9PT0gbnVsbCB8fCBlcnJvcnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9ycy5maW5kKHggPT4ge1xyXG4gICAgICAgICAgdmFyIF94JHBhdGgyO1xyXG5cclxuICAgICAgICAgIHJldHVybiAoKF94JHBhdGgyID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aDIubGVuZ3RoKSA9PT0gMTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXHJcbiAgICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xyXG4gICAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxyXG4gICAgICAgICAgICB0b25lOiAncG9zaXRpdmUnLFxyXG4gICAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5J1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBvblNhdmUoZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIHVwZGF0ZSBpdGVtJyxcclxuICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXHJcbiAgICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBjaGlsZHJlbjogJ1NhdmUnXHJcbiAgfTtcclxuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgZ2FwOiBcInhsYXJnZVwiXHJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goR3JhcGhRTEVycm9yTm90aWNlLkdyYXBoUUxFcnJvck5vdGljZSwge1xyXG4gICAgbmV0d29ya0Vycm9yOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IubmV0d29ya0Vycm9yIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXHJcbiAgICAvLyB3aGljaCBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBkbyBub3QgaW5kaWNhdGUgYSBmYWlsdXJlIHRvIHVwZGF0ZSB0aGUgaXRlbVxyXG4gICAgLFxyXG4gICAgZXJyb3JzOiBlcnJvciA9PT0gbnVsbCB8fCBlcnJvciA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXJyb3IuZ3JhcGhRTEVycm9ycy5maWx0ZXIoeCA9PiB7XHJcbiAgICAgIHZhciBfeCRwYXRoMztcclxuXHJcbiAgICAgIHJldHVybiAoKF94JHBhdGgzID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoMyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aDMubGVuZ3RoKSA9PT0gMTtcclxuICAgIH0pXHJcbiAgfSksIGNvcmUuanN4KEZpZWxkcy5GaWVsZHMsIHtcclxuICAgIGZpZWxkTW9kZXM6IG51bGwsXHJcbiAgICBmaWVsZHM6IGZpZWxkc09iaixcclxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxyXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcclxuICAgIG9uQ2hhbmdlOiBSZWFjdC51c2VDYWxsYmFjayh2YWx1ZSA9PiB7XHJcbiAgICAgIHNldFZhbHVlKHN0YXRlID0+ICh7XHJcbiAgICAgICAgaXRlbTogc3RhdGUuaXRlbSxcclxuICAgICAgICB2YWx1ZTogdmFsdWUoc3RhdGUudmFsdWUpXHJcbiAgICAgIH0pKTtcclxuICAgIH0sIFtzZXRWYWx1ZV0pLFxyXG4gICAgdmFsdWU6IHN0YXRlLnZhbHVlXHJcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGFjcm9zczogdHJ1ZSxcclxuICAgIGdhcDogXCJzbWFsbFwiXHJcbiAgfSwgY2hhbmdlZEZpZWxkcy5zaXplID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgc2F2ZUJ1dHRvblByb3BzKSA6IGNvcmUuanN4KHRvb2x0aXAuVG9vbHRpcCwge1xyXG4gICAgY29udGVudDogXCJObyBmaWVsZHMgaGF2ZSBiZWVuIG1vZGlmaWVkIHNvIHlvdSBjYW5ub3Qgc2F2ZSBjaGFuZ2VzXCJcclxuICB9LCBwcm9wcyA9PiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgcHJvcHMsIHNhdmVCdXR0b25Qcm9wcywge1xyXG4gICAgLy8gbWFraW5nIG9uQ2xpY2sgdW5kZWZpbmVkIGluc3RlYWQgb2YgbWFraW5nIHRoZSBidXR0b24gZGlzYWJsZWQgc28gdGhlIGJ1dHRvbiBjYW4gYmUgZm9jdXNzZWQgc28ga2V5Ym9hcmQgdXNlcnMgY2FuIHNlZSB0aGUgdG9vbHRpcFxyXG4gICAgb25DbGljazogdW5kZWZpbmVkXHJcbiAgfSkpKSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgd2VpZ2h0OiBcIm5vbmVcIixcclxuICAgIG9uQ2xpY2s6IG9uQ2FuY2VsXHJcbiAgfSwgXCJDYW5jZWxcIikpKTtcclxufVxyXG5cclxuLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cclxuZnVuY3Rpb24gSW5saW5lQ3JlYXRlKHtcclxuICBsaXN0LFxyXG4gIG9uQ2FuY2VsLFxyXG4gIG9uQ3JlYXRlLFxyXG4gIGZpZWxkczogZmllbGRQYXRocyxcclxuICBzZWxlY3RlZEZpZWxkc1xyXG59KSB7XHJcbiAgY29uc3QgdG9hc3RzID0gdG9hc3QudXNlVG9hc3RzKCk7XHJcbiAgY29uc3QgZmllbGRzID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkUGF0aHMpO1xyXG4gIGNvbnN0IFtjcmVhdGVJdGVtLCB7XHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3JcclxuICB9XSA9IGNsaWVudC51c2VNdXRhdGlvbihjbGllbnQuZ3FsYG11dGF0aW9uKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlSW5wdXROYW1lfSEpIHtcclxuICAgICAgaXRlbTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZU11dGF0aW9uTmFtZX0oZGF0YTogJGRhdGEpIHtcclxuICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxyXG4gICAgfVxyXG4gIH1gKTtcclxuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcclxuICAgIGNvbnN0IHZhbHVlID0ge307XHJcbiAgICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGRQYXRoID0+IHtcclxuICAgICAgdmFsdWVbZmllbGRQYXRoXSA9IHtcclxuICAgICAgICBraW5kOiAndmFsdWUnLFxyXG4gICAgICAgIHZhbHVlOiBmaWVsZHNbZmllbGRQYXRoXS5jb250cm9sbGVyLmRlZmF1bHRWYWx1ZVxyXG4gICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gdmFsdWU7XHJcbiAgfSk7XHJcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IHVzZUludmFsaWRGaWVsZHMudXNlSW52YWxpZEZpZWxkcyhmaWVsZHMsIHZhbHVlKTtcclxuICBjb25zdCBbZm9yY2VWYWxpZGF0aW9uLCBzZXRGb3JjZVZhbGlkYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuICBjb25zdCBvbkNyZWF0ZUNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9yY2VWYWxpZGF0aW9uID0gaW52YWxpZEZpZWxkcy5zaXplICE9PSAwO1xyXG4gICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XHJcbiAgICBpZiAobmV3Rm9yY2VWYWxpZGF0aW9uKSByZXR1cm47XHJcbiAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICBjb25zdCBhbGxTZXJpYWxpemVkVmFsdWVzID0gdXNlSW52YWxpZEZpZWxkcy5zZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKTtcclxuICAgIE9iamVjdC5rZXlzKGFsbFNlcmlhbGl6ZWRWYWx1ZXMpLmZvckVhY2goZmllbGRQYXRoID0+IHtcclxuICAgICAgY29uc3Qge1xyXG4gICAgICAgIGNvbnRyb2xsZXJcclxuICAgICAgfSA9IGZpZWxkc1tmaWVsZFBhdGhdO1xyXG4gICAgICBjb25zdCBzZXJpYWxpemVkID0gYWxsU2VyaWFsaXplZFZhbHVlc1tmaWVsZFBhdGhdO1xyXG5cclxuICAgICAgaWYgKCFpc0RlZXBFcXVhbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oc2VyaWFsaXplZCwgY29udHJvbGxlci5zZXJpYWxpemUoY29udHJvbGxlci5kZWZhdWx0VmFsdWUpKSkge1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgc2VyaWFsaXplZCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgY3JlYXRlSXRlbSh7XHJcbiAgICAgIHZhcmlhYmxlczoge1xyXG4gICAgICAgIGRhdGFcclxuICAgICAgfVxyXG4gICAgfSkudGhlbigoe1xyXG4gICAgICBkYXRhLFxyXG4gICAgICBlcnJvcnNcclxuICAgIH0pID0+IHtcclxuICAgICAgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcclxuICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cclxuICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcclxuICAgICAgICB2YXIgX3gkcGF0aDtcclxuXHJcbiAgICAgICAgcmV0dXJuICgoX3gkcGF0aCA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aC5sZW5ndGgpID09PSAxO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChlcnJvcikge1xyXG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byBjcmVhdGUgaXRlbScsXHJcbiAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxyXG4gICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XHJcbiAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxyXG4gICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcclxuICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHknXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb25DcmVhdGUoZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcclxuICAgICAgfVxyXG4gICAgfSkuY2F0Y2goZXJyID0+IHtcclxuICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcclxuICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXHJcbiAgICAgICAgdG9uZTogJ25lZ2F0aXZlJyxcclxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwieGxhcmdlXCJcclxuICB9LCBlcnJvciAmJiBjb3JlLmpzeChHcmFwaFFMRXJyb3JOb3RpY2UuR3JhcGhRTEVycm9yTm90aWNlLCB7XHJcbiAgICBuZXR3b3JrRXJyb3I6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5uZXR3b3JrRXJyb3IsXHJcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXHJcbiAgfSksIGNvcmUuanN4KEZpZWxkcy5GaWVsZHMsIHtcclxuICAgIGZpZWxkTW9kZXM6IG51bGwsXHJcbiAgICBmaWVsZHM6IGZpZWxkcyxcclxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxyXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcclxuICAgIG9uQ2hhbmdlOiBzZXRWYWx1ZSxcclxuICAgIHZhbHVlOiB2YWx1ZVxyXG4gIH0pLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwic21hbGxcIixcclxuICAgIGFjcm9zczogdHJ1ZVxyXG4gIH0sIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIGlzTG9hZGluZzogbG9hZGluZyxcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIHRvbmU6IFwicG9zaXRpdmVcIixcclxuICAgIHdlaWdodDogXCJib2xkXCIsXHJcbiAgICBvbkNsaWNrOiBvbkNyZWF0ZUNsaWNrXHJcbiAgfSwgXCJDcmVhdGUgXCIsIGxpc3Quc2luZ3VsYXIpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICB3ZWlnaHQ6IFwibm9uZVwiLFxyXG4gICAgb25DbGljazogb25DYW5jZWxcclxuICB9LCBcIkNhbmNlbFwiKSkpO1xyXG59XHJcblxyXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJtb2RlXCJdO1xyXG5jb25zdCBDYXJkQ29udGFpbmVyID0gY29yZS5mb3J3YXJkUmVmV2l0aEFzKChfcmVmLCByZWYpID0+IHtcclxuICBsZXQge1xyXG4gICAgbW9kZSA9ICd2aWV3J1xyXG4gIH0gPSBfcmVmLFxyXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBfZXhjbHVkZWQpO1xyXG5cclxuICBjb25zdCB7XHJcbiAgICB0b25lc1xyXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XHJcbiAgY29uc3QgdG9uZSA9IHRvbmVzW21vZGUgPT09ICdlZGl0JyA/ICdhY3RpdmUnIDogbW9kZSA9PT0gJ2NyZWF0ZScgPyAncG9zaXRpdmUnIDogJ3Bhc3NpdmUnXTtcclxuICByZXR1cm4gY29yZS5qc3goY29yZS5Cb3gsIF9leHRlbmRzKHtcclxuICAgIHJlZjogcmVmLFxyXG4gICAgcGFkZGluZ0xlZnQ6IFwieGxhcmdlXCIsXHJcbiAgICBjc3M6IHtcclxuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAgICc6YmVmb3JlJzoge1xyXG4gICAgICAgIGNvbnRlbnQ6ICdcIiBcIicsXHJcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b25lLmJvcmRlcixcclxuICAgICAgICBib3JkZXJSYWRpdXM6IDQsXHJcbiAgICAgICAgd2lkdGg6IDQsXHJcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgbGVmdDogMCxcclxuICAgICAgICB0b3A6IDAsXHJcbiAgICAgICAgYm90dG9tOiAwLFxyXG4gICAgICAgIHpJbmRleDogMVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgcHJvcHMpKTtcclxufSk7XHJcbmZ1bmN0aW9uIENhcmRzKHtcclxuICBsb2NhbExpc3QsXHJcbiAgZmllbGQsXHJcbiAgZm9yZWlnbkxpc3QsXHJcbiAgaWQsXHJcbiAgdmFsdWUsXHJcbiAgb25DaGFuZ2UsXHJcbiAgZm9yY2VWYWxpZGF0aW9uXHJcbn0pIHtcclxuICB2YXIgX2ZpZWxkJGRpc3BsYXkkaW5saW5lO1xyXG5cclxuICBsZXQgc2VsZWN0ZWRGaWVsZHMgPSBbLi4ubmV3IFNldChbLi4uZmllbGQuZGlzcGxheS5jYXJkRmllbGRzLCAuLi4oKChfZmllbGQkZGlzcGxheSRpbmxpbmUgPSBmaWVsZC5kaXNwbGF5LmlubGluZUVkaXQpID09PSBudWxsIHx8IF9maWVsZCRkaXNwbGF5JGlubGluZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2ZpZWxkJGRpc3BsYXkkaW5saW5lLmZpZWxkcykgfHwgW10pXSldLm1hcChmaWVsZFBhdGggPT4ge1xyXG4gICAgcmV0dXJuIGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZ3JhcGhxbFNlbGVjdGlvbjtcclxuICB9KS5qb2luKCdcXG4nKTtcclxuXHJcbiAgaWYgKCFmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMuaW5jbHVkZXMoJ2lkJykpIHtcclxuICAgIHNlbGVjdGVkRmllbGRzICs9ICdcXG5pZCc7XHJcbiAgfVxyXG5cclxuICBpZiAoIWZpZWxkLmRpc3BsYXkuY2FyZEZpZWxkcy5pbmNsdWRlcyhmb3JlaWduTGlzdC5sYWJlbEZpZWxkKSAmJiBmb3JlaWduTGlzdC5sYWJlbEZpZWxkICE9PSAnaWQnKSB7XHJcbiAgICBzZWxlY3RlZEZpZWxkcyArPSBgXFxuJHtmb3JlaWduTGlzdC5sYWJlbEZpZWxkfWA7XHJcbiAgfVxyXG5cclxuICBjb25zdCB7XHJcbiAgICBpdGVtcyxcclxuICAgIHNldEl0ZW1zLFxyXG4gICAgc3RhdGU6IGl0ZW1zU3RhdGVcclxuICB9ID0gdXNlSXRlbVN0YXRlKHtcclxuICAgIHNlbGVjdGVkRmllbGRzLFxyXG4gICAgbG9jYWxMaXN0LFxyXG4gICAgaWQsXHJcbiAgICBmaWVsZFxyXG4gIH0pO1xyXG4gIGNvbnN0IGNsaWVudCQxID0gY2xpZW50LnVzZUFwb2xsb0NsaWVudCgpO1xyXG4gIGNvbnN0IFtpc0xvYWRpbmdMYXp5SXRlbXMsIHNldElzTG9hZGluZ0xhenlJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3Nob3dDb25uZWN0SXRlbXMsIHNldFNob3dDb25uZWN0SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IFtoaWRlQ29ubmVjdEl0ZW1zTGFiZWwsIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZSgnQ2FuY2VsJyk7XHJcbiAgY29uc3QgZWRpdFJlZiA9IFJlYWN0LnVzZVJlZihudWxsKTtcclxuICBjb25zdCBpc01vdW50ZWRSZWYgPSBSZWFjdC51c2VSZWYoZmFsc2UpO1xyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IHRydWU7XHJcbiAgICByZXR1cm4gKCkgPT4ge1xyXG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xyXG4gICAgfTtcclxuICB9KTtcclxuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpIHtcclxuICAgICAgdmFyIF9lZGl0UmVmJGN1cnJlbnQ7XHJcblxyXG4gICAgICBlZGl0UmVmID09PSBudWxsIHx8IGVkaXRSZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZWRpdFJlZiRjdXJyZW50ID0gZWRpdFJlZi5jdXJyZW50KSA9PT0gbnVsbCB8fCBfZWRpdFJlZiRjdXJyZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZWRpdFJlZiRjdXJyZW50LmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfSwgW3ZhbHVlXSk7XHJcblxyXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdsb2FkaW5nJykge1xyXG4gICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIGNvcmUuanN4KGxvYWRpbmcuTG9hZGluZ0RvdHMsIHtcclxuICAgICAgbGFiZWw6IGBMb2FkaW5nIGl0ZW1zIGZvciAke2ZpZWxkLmxhYmVsfSBmaWVsZGBcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGlmIChpdGVtc1N0YXRlLmtpbmQgPT09ICdlcnJvcicpIHtcclxuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwge1xyXG4gICAgICBjc3M6IHtcclxuICAgICAgICBjb2xvcjogJ3JlZCdcclxuICAgICAgfVxyXG4gICAgfSwgaXRlbXNTdGF0ZS5tZXNzYWdlKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBnYXA6IFwieGxhcmdlXCJcclxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICBhczogXCJ1bFwiLFxyXG4gICAgZ2FwOiBcInhsYXJnZVwiLFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIHBhZGRpbmc6IDAsXHJcbiAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgbGk6IHtcclxuICAgICAgICBsaXN0U3R5bGU6ICdub25lJ1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSwgWy4uLnZhbHVlLmN1cnJlbnRJZHNdLm1hcCgoaWQsIGluZGV4KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtR2V0dGVyID0gaXRlbXNbaWRdO1xyXG4gICAgY29uc3QgaXNFZGl0TW9kZSA9ICEhKG9uQ2hhbmdlICE9PSB1bmRlZmluZWQpICYmIHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQuaGFzKGlkKTtcclxuICAgIHJldHVybiBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XHJcbiAgICAgIHJvbGU6IFwic3RhdHVzXCIsXHJcbiAgICAgIG1vZGU6IGlzRWRpdE1vZGUgPyAnZWRpdCcgOiAndmlldydcclxuICAgIH0sIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIHtcclxuICAgICAgYXM6IFwiaDJcIlxyXG4gICAgfSwgYCR7ZmllbGQubGFiZWx9ICR7aW5kZXggKyAxfSAke2lzRWRpdE1vZGUgPyAnZWRpdCcgOiAndmlldyd9IG1vZGVgKSwgaXNFZGl0TW9kZSA/IGNvcmUuanN4KElubGluZUVkaXQsIHtcclxuICAgICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICAgIGZpZWxkczogZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0LmZpZWxkcyxcclxuICAgICAgb25TYXZlOiBuZXdJdGVtR2V0dGVyID0+IHtcclxuICAgICAgICBzZXRJdGVtcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKSwge30sIHtcclxuICAgICAgICAgIFtpZF06IG5ld0l0ZW1HZXR0ZXJcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgY29uc3QgaXRlbXNCZWluZ0VkaXRlZCA9IG5ldyBTZXQodmFsdWUuaXRlbXNCZWluZ0VkaXRlZCk7XHJcbiAgICAgICAgaXRlbXNCZWluZ0VkaXRlZC5kZWxldGUoaWQpO1xyXG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgaXRlbXNCZWluZ0VkaXRlZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0ZWRGaWVsZHM6IHNlbGVjdGVkRmllbGRzLFxyXG4gICAgICBpdGVtR2V0dGVyOiBpdGVtR2V0dGVyLFxyXG4gICAgICBvbkNhbmNlbDogKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zQmVpbmdFZGl0ZWQgPSBuZXcgU2V0KHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpO1xyXG4gICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQuZGVsZXRlKGlkKTtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWRcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuICAgIH0pIDogY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgICAgZ2FwOiBcInhsYXJnZVwiXHJcbiAgICB9LCBmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMubWFwKGZpZWxkUGF0aCA9PiB7XHJcbiAgICAgIGNvbnN0IGZpZWxkID0gZm9yZWlnbkxpc3QuZmllbGRzW2ZpZWxkUGF0aF07XHJcbiAgICAgIGNvbnN0IGl0ZW1Gb3JGaWVsZCA9IHt9O1xyXG5cclxuICAgICAgZm9yIChjb25zdCBncmFwaHFsRmllbGQgb2YgZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyLmdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlcihmaWVsZC5jb250cm9sbGVyKSkge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkR2V0dGVyID0gaXRlbUdldHRlci5nZXQoZ3JhcGhxbEZpZWxkKTtcclxuXHJcbiAgICAgICAgaWYgKGZpZWxkR2V0dGVyLmVycm9ycykge1xyXG4gICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZmllbGRHZXR0ZXIuZXJyb3JzWzBdLm1lc3NhZ2U7XHJcbiAgICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBlcnJvck1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXRlbUZvckZpZWxkW2dyYXBocWxGaWVsZF0gPSBmaWVsZEdldHRlci5kYXRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gY29yZS5qc3goZmllbGQudmlld3MuQ2FyZFZhbHVlLCB7XHJcbiAgICAgICAga2V5OiBmaWVsZFBhdGgsXHJcbiAgICAgICAgZmllbGQ6IGZpZWxkLmNvbnRyb2xsZXIsXHJcbiAgICAgICAgaXRlbTogaXRlbUZvckZpZWxkXHJcbiAgICAgIH0pO1xyXG4gICAgfSkpLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XHJcbiAgICAgIGFjcm9zczogdHJ1ZSxcclxuICAgICAgZ2FwOiBcInNtYWxsXCIsXHJcbiAgICAgIG1hcmdpblRvcDogXCJ4bGFyZ2VcIlxyXG4gICAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0ICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KFsuLi52YWx1ZS5pdGVtc0JlaW5nRWRpdGVkLCBpZF0pXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b25lOiBcImFjdGl2ZVwiXHJcbiAgICB9LCBcIkVkaXRcIiksIGZpZWxkLmRpc3BsYXkucmVtb3ZlTW9kZSA9PT0gJ2Rpc2Nvbm5lY3QnICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3godG9vbHRpcC5Ub29sdGlwLCB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiVGhpcyBpdGVtIHdpbGwgbm90IGJlIGRlbGV0ZWQuIEl0IHdpbGwgb25seSBiZSByZW1vdmVkIGZyb20gdGhpcyBmaWVsZC5cIlxyXG4gICAgfSwgcHJvcHMgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe1xyXG4gICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudElkcyA9IG5ldyBTZXQodmFsdWUuY3VycmVudElkcyk7XHJcbiAgICAgICAgY3VycmVudElkcy5kZWxldGUoaWQpO1xyXG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgY3VycmVudElkc1xyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSwgcHJvcHMsIHtcclxuICAgICAgdG9uZTogXCJuZWdhdGl2ZVwiXHJcbiAgICB9KSwgXCJSZW1vdmVcIikpLCBmaWVsZC5kaXNwbGF5LmxpbmtUb0l0ZW0gJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICAgIHdlaWdodDogXCJsaW5rXCIsXHJcbiAgICAgIHRvbmU6IFwiYWN0aXZlXCIsXHJcbiAgICAgIGNzczoge1xyXG4gICAgICAgIHRleHREZWNvcmF0aW9uOiAnbm9uZSdcclxuICAgICAgfSxcclxuICAgICAgYXM6IGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluayxcclxuICAgICAgaHJlZjogYC8ke2ZvcmVpZ25MaXN0LnBhdGh9LyR7aWR9YFxyXG4gICAgfSwgXCJWaWV3IFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciwgXCIgZGV0YWlsc1wiKSkpKTtcclxuICB9KSksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyBudWxsIDogZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ICYmIHNob3dDb25uZWN0SXRlbXMgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XHJcbiAgICBtb2RlOiBcImVkaXRcIlxyXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJzbWFsbFwiLFxyXG4gICAgbWFyZ2luWTogXCJtZWRpdW1cIixcclxuICAgIGFjcm9zczogdHJ1ZSxcclxuICAgIGNzczoge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XHJcbiAgICAgICAgZmxleDogJzInXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LCBjb3JlLmpzeChmaWVsZHNfdHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2tleXN0b25lLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xyXG4gICAgYXV0b0ZvY3VzOiB0cnVlLFxyXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBpc0xvYWRpbmdMYXp5SXRlbXMsXHJcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ0xhenlJdGVtcyxcclxuICAgIHBsYWNlaG9sZGVyOiBgU2VsZWN0IGEgJHtmb3JlaWduTGlzdC5zaW5ndWxhcn1gLFxyXG4gICAgcG9ydGFsTWVudTogdHJ1ZSxcclxuICAgIHN0YXRlOiB7XHJcbiAgICAgIGtpbmQ6ICdtYW55JyxcclxuXHJcbiAgICAgIGFzeW5jIG9uQ2hhbmdlKG9wdGlvbnMpIHtcclxuICAgICAgICAvLyBUT0RPOiBtYXliZSB1c2UgdGhlIGV4dHJhU2VsZWN0aW9uIHByb3Agb24gUmVsYXRpb25zaGlwU2VsZWN0IGhlcmVcclxuICAgICAgICBjb25zdCBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0ID0gW107XHJcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgaWYgKCF2YWx1ZS5jdXJyZW50SWRzLmhhcyhpdGVtLmlkKSkge1xyXG4gICAgICAgICAgICBpdGVtc1RvRmV0Y2hBbmRDb25uZWN0LnB1c2goaXRlbS5pZCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmIChpdGVtc1RvRmV0Y2hBbmRDb25uZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgIGRhdGEsXHJcbiAgICAgICAgICAgICAgZXJyb3JzXHJcbiAgICAgICAgICAgIH0gPSBhd2FpdCBjbGllbnQkMS5xdWVyeSh7XHJcbiAgICAgICAgICAgICAgcXVlcnk6IGNsaWVudC5ncWxgcXVlcnkgKCRpZHM6IFtJRCFdISkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgaXRlbXM6ICR7Zm9yZWlnbkxpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6IHsgaWQ6IHsgaW46ICRpZHMgfX0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cclxuICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9YCxcclxuICAgICAgICAgICAgICB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlkczogaXRlbXNUb0ZldGNoQW5kQ29ubmVjdFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaXNNb3VudGVkUmVmLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgICBjb25zdCBkYXRhR2V0dGVycyA9IGRhdGFHZXR0ZXIubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKTtcclxuICAgICAgICAgICAgICBjb25zdCBpdGVtc0RhdGFHZXR0ZXIgPSBkYXRhR2V0dGVycy5nZXQoJ2l0ZW1zJyk7XHJcblxyXG4gICAgICAgICAgICAgIGxldCBuZXdJdGVtcyA9IF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKTtcclxuXHJcbiAgICAgICAgICAgICAgbGV0IG5ld0N1cnJlbnRJZHMgPSBmaWVsZC5tYW55ID8gbmV3IFNldCh2YWx1ZS5jdXJyZW50SWRzKSA6IG5ldyBTZXQoKTtcclxuXHJcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNEYXRhR2V0dGVyLmRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0RhdGFHZXR0ZXIuZGF0YS5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmICgoaXRlbSA9PT0gbnVsbCB8fCBpdGVtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpdGVtLmlkKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VycmVudElkcy5hZGQoaXRlbS5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3SXRlbXNbaXRlbS5pZF0gPSBpdGVtc0RhdGFHZXR0ZXIuZ2V0KGkpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIGlmIChuZXdDdXJyZW50SWRzLnNpemUpIHtcclxuICAgICAgICAgICAgICAgIHNldEl0ZW1zKG5ld0l0ZW1zKTtcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgICAgICAgICBjdXJyZW50SWRzOiBuZXdDdXJyZW50SWRzXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICBzZXRIaWRlQ29ubmVjdEl0ZW1zTGFiZWwoJ0RvbmUnKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xyXG4gICAgICAgICAgICAgIHNldElzTG9hZGluZ0xhenlJdGVtcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB2YWx1ZTogKCgpID0+IHtcclxuICAgICAgICBsZXQgb3B0aW9ucyA9IFtdO1xyXG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcclxuICAgICAgICAgIGlmICh2YWx1ZS5jdXJyZW50SWRzLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgb3B0aW9ucy5wdXNoKHtcclxuICAgICAgICAgICAgICBpZCxcclxuICAgICAgICAgICAgICBsYWJlbDogaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XHJcbiAgICAgIH0pKClcclxuICAgIH1cclxuICB9KSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgb25DbGljazogKCkgPT4gc2V0U2hvd0Nvbm5lY3RJdGVtcyhmYWxzZSlcclxuICB9LCBoaWRlQ29ubmVjdEl0ZW1zTGFiZWwpKSkgOiB2YWx1ZS5pdGVtQmVpbmdDcmVhdGVkID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xyXG4gICAgbW9kZTogXCJjcmVhdGVcIlxyXG4gIH0sIGNvcmUuanN4KElubGluZUNyZWF0ZSwge1xyXG4gICAgc2VsZWN0ZWRGaWVsZHM6IHNlbGVjdGVkRmllbGRzLFxyXG4gICAgZmllbGRzOiBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZS5maWVsZHMsXHJcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcclxuICAgIG9uQ2FuY2VsOiAoKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlXHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICBvbkNyZWF0ZTogaXRlbUdldHRlciA9PiB7XHJcbiAgICAgIGNvbnN0IGlkID0gaXRlbUdldHRlci5kYXRhLmlkO1xyXG4gICAgICBzZXRJdGVtcyhfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGl0ZW1zKSwge30sIHtcclxuICAgICAgICBbaWRdOiBpdGVtR2V0dGVyXHJcbiAgICAgIH0pKTtcclxuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudElkczogZmllbGQubWFueSA/IG5ldyBTZXQoWy4uLnZhbHVlLmN1cnJlbnRJZHMsIGlkXSkgOiBuZXcgU2V0KFtpZF0pXHJcbiAgICAgIH0pKTtcclxuICAgIH1cclxuICB9KSkgOiBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZSB8fCBmaWVsZC5kaXNwbGF5LmlubGluZUNvbm5lY3QgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XHJcbiAgICBtb2RlOiBcImNyZWF0ZVwiXHJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgZ2FwOiBcInNtYWxsXCIsXHJcbiAgICBtYXJnaW5Ub3A6IFwibWVkaXVtXCIsXHJcbiAgICBhY3Jvc3M6IHRydWVcclxuICB9LCBmaWVsZC5kaXNwbGF5LmlubGluZUNyZWF0ZSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgIHRvbmU6IFwicG9zaXRpdmVcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogdHJ1ZVxyXG4gICAgICB9KSk7XHJcbiAgICB9XHJcbiAgfSwgXCJDcmVhdGUgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSwgZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIHNpemU6IFwic21hbGxcIixcclxuICAgIHdlaWdodDogXCJub25lXCIsXHJcbiAgICB0b25lOiBcInBhc3NpdmVcIixcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgc2V0U2hvd0Nvbm5lY3RJdGVtcyh0cnVlKTtcclxuICAgICAgc2V0SGlkZUNvbm5lY3RJdGVtc0xhYmVsKCdDYW5jZWwnKTtcclxuICAgIH1cclxuICB9LCBcIkxpbmsgZXhpc3RpbmcgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSkpIDogbnVsbCwgZm9yY2VWYWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xyXG4gICAgY29sb3I6IFwicmVkNjAwXCIsXHJcbiAgICBzaXplOiBcInNtYWxsXCJcclxuICB9LCBcIllvdSBtdXN0IGZpbmlzaCBjcmVhdGluZyBhbmQgZWRpdGluZyBhbnkgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3QubGFiZWwudG9Mb3dlckNhc2UoKSwgXCIgYmVmb3JlIHNhdmluZyB0aGUgXCIsIGxvY2FsTGlzdC5zaW5ndWxhci50b0xvd2VyQ2FzZSgpKSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIExpbmtUb1JlbGF0ZWRJdGVtcyh7XHJcbiAgaXRlbUlkLFxyXG4gIGlzRG91YmxlU2lkZWQsXHJcbiAgdmFsdWUsXHJcbiAgbGlzdFxyXG59KSB7XHJcbiAgdmFyIF92YWx1ZSR2YWx1ZTtcclxuXHJcbiAgZnVuY3Rpb24gY29uc3RydWN0UXVlcnkoe1xyXG4gICAgaXNEb3VibGVTaWRlZCxcclxuICAgIGl0ZW1JZCxcclxuICAgIHZhbHVlXHJcbiAgfSkge1xyXG4gICAgaWYgKGlzRG91YmxlU2lkZWQgJiYgaXRlbUlkKSB7XHJcbiAgICAgIHJldHVybiBgIWFzc2lnbmVkVG9fbWF0Y2hlcz1cIiR7aXRlbUlkfVwiYDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYCFpZF9pbj1cIiR7KHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWx1ZS52YWx1ZSkuc2xpY2UoMCwgMTAwKS5tYXAoKHtcclxuICAgICAgaWRcclxuICAgIH0pID0+IGlkKS5qb2luKCcsJyl9XCJgO1xyXG4gIH1cclxuXHJcbiAgY29uc3QgY29tbW9uUHJvcHMgPSB7XHJcbiAgICBzaXplOiAnc21hbGwnLFxyXG4gICAgdG9uZTogJ2FjdGl2ZScsXHJcbiAgICB3ZWlnaHQ6ICdsaW5rJ1xyXG4gIH07XHJcblxyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcclxuICAgIGNvbnN0IHF1ZXJ5ID0gY29uc3RydWN0UXVlcnkoe1xyXG4gICAgICBpc0RvdWJsZVNpZGVkLFxyXG4gICAgICB2YWx1ZSxcclxuICAgICAgaXRlbUlkXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcclxuICAgICAgYXM6IGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluayxcclxuICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0/JHtxdWVyeX1gXHJcbiAgICB9KSwgXCJWaWV3IHJlbGF0ZWQgXCIsIGxpc3QucGx1cmFsKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7fSwgY29tbW9uUHJvcHMsIHtcclxuICAgIGFzOiBhZG1pblVpX3JvdXRlcl9kaXN0X2tleXN0b25lLkxpbmssXHJcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS8keyhfdmFsdWUkdmFsdWUgPSB2YWx1ZS52YWx1ZSkgPT09IG51bGwgfHwgX3ZhbHVlJHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkdmFsdWUuaWR9YFxyXG4gIH0pLCBcIlZpZXcgXCIsIGxpc3Quc2luZ3VsYXIsIFwiIGRldGFpbHNcIik7XHJcbn1cclxuXHJcbmNvbnN0IFJlbGF0aW9uc2hpcExpbmtCdXR0b24gPSAoe1xyXG4gIGhyZWYsXHJcbiAgY2hpbGRyZW5cclxufSkgPT4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gIGNzczoge1xyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGhlaWdodDogJ2F1dG8nXHJcbiAgfSxcclxuICB3ZWlnaHQ6IFwibGlua1wiLFxyXG4gIHRvbmU6IFwiYWN0aXZlXCIsXHJcbiAgYXM6IGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluayxcclxuICBocmVmOiBocmVmXHJcbn0sIGNoaWxkcmVuKTtcclxuXHJcbmNvbnN0IFJlbGF0aW9uc2hpcERpc3BsYXkgPSAoe1xyXG4gIGxpc3QsXHJcbiAgdmFsdWVcclxufSkgPT4ge1xyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnbWFueScpIHtcclxuICAgIGlmICh2YWx1ZS52YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XHJcbiAgICAgICAgZ2FwOiBcInNtYWxsXCJcclxuICAgICAgfSwgdmFsdWUudmFsdWUubWFwKGkgPT4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xyXG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7aS5pZH1gXHJcbiAgICAgIH0sIGkubGFiZWwpKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3QucGx1cmFsLCBcIilcIik7XHJcbiAgICB9XHJcbiAgfSBlbHNlIHtcclxuICAgIGlmICh2YWx1ZS52YWx1ZSkge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goUmVsYXRpb25zaGlwTGlua0J1dHRvbiwge1xyXG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7dmFsdWUudmFsdWUuaWR9YFxyXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5sYWJlbCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3Quc2luZ3VsYXIsIFwiKVwiKTtcclxuICAgIH1cclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBGaWVsZCA9ICh7XHJcbiAgZmllbGQsXHJcbiAgYXV0b0ZvY3VzLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGZvcmNlVmFsaWRhdGlvblxyXG59KSA9PiB7XHJcbiAgY29uc3Qga2V5c3RvbmUgPSBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZS51c2VLZXlzdG9uZSgpO1xyXG4gIGNvbnN0IGZvcmVpZ25MaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcclxuICBjb25zdCBsb2NhbExpc3QgPSBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZS51c2VMaXN0KGZpZWxkLmxpc3RLZXkpO1xyXG4gIGNvbnN0IFtpc0RyYXdlck9wZW4sIHNldElzRHJhd2VyT3Blbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnY2FyZHMtdmlldycpIHtcclxuICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIHtcclxuICAgICAgYXM6IFwiZmllbGRzZXRcIlxyXG4gICAgfSwgY29yZS5qc3goZmllbGRzLkZpZWxkTGVnZW5kLCBudWxsLCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KENhcmRzLCB7XHJcbiAgICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxyXG4gICAgICBmaWVsZDogZmllbGQsXHJcbiAgICAgIGlkOiB2YWx1ZS5pZCxcclxuICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXHJcbiAgICAgIGZvcmVpZ25MaXN0OiBmb3JlaWduTGlzdCxcclxuICAgICAgbG9jYWxMaXN0OiBsb2NhbExpc3RcclxuICAgIH0pKTtcclxuICB9XHJcblxyXG4gIGlmICh2YWx1ZS5raW5kID09PSAnY291bnQnKSB7XHJcbiAgICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgICBhczogXCJmaWVsZHNldFwiLFxyXG4gICAgICBnYXA6IFwibWVkaXVtXCJcclxuICAgIH0sIGNvcmUuanN4KGZpZWxkcy5GaWVsZExlZ2VuZCwgbnVsbCwgZmllbGQubGFiZWwpLCBjb3JlLmpzeChcImRpdlwiLCBudWxsLCB2YWx1ZS5jb3VudCA9PT0gMSA/IGBUaGVyZSBpcyAxICR7Zm9yZWlnbkxpc3Quc2luZ3VsYXJ9IGAgOiBgVGhlcmUgYXJlICR7dmFsdWUuY291bnR9ICR7Zm9yZWlnbkxpc3QucGx1cmFsfSBgLCBcImxpbmtlZCB0byB0aGlzIFwiLCBsb2NhbExpc3Quc2luZ3VsYXIpKTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIHtcclxuICAgIGFzOiBcImZpZWxkc2V0XCJcclxuICB9LCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwge1xyXG4gICAgYXM6IFwibGVnZW5kXCJcclxuICB9LCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJtZWRpdW1cIlxyXG4gIH0sIGNvcmUuanN4KGZpZWxkc190eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3Rfa2V5c3RvbmUuUmVsYXRpb25zaGlwU2VsZWN0LCB7XHJcbiAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXHJcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcclxuICAgIHBvcnRhbE1lbnU6IHRydWUsXHJcbiAgICBzdGF0ZTogdmFsdWUua2luZCA9PT0gJ21hbnknID8ge1xyXG4gICAgICBraW5kOiAnbWFueScsXHJcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcclxuXHJcbiAgICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKSB7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICB2YWx1ZTogbmV3SXRlbXNcclxuICAgICAgICB9KSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9IDoge1xyXG4gICAgICBraW5kOiAnb25lJyxcclxuICAgICAgdmFsdWU6IHZhbHVlLnZhbHVlLFxyXG5cclxuICAgICAgb25DaGFuZ2UobmV3VmFsKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdvbmUnKSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH1cclxuICB9KSwgY29yZS5qc3goY29yZS5TdGFjaywge1xyXG4gICAgYWNyb3NzOiB0cnVlLFxyXG4gICAgZ2FwOiBcInNtYWxsXCJcclxuICB9LCAhZmllbGQuaGlkZUNyZWF0ZSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XHJcbiAgICBzaXplOiBcInNtYWxsXCIsXHJcbiAgICBkaXNhYmxlZDogaXNEcmF3ZXJPcGVuLFxyXG4gICAgb25DbGljazogKCkgPT4ge1xyXG4gICAgICBzZXRJc0RyYXdlck9wZW4odHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSwgXCJDcmVhdGUgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIpLCBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxpc3RLZXkgPT09IGZpZWxkLnJlZkxpc3RLZXkgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xyXG4gICAgc2l6ZTogXCJzbWFsbFwiLFxyXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgaWYgKGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLnN0YXRlID09PSAnYXV0aGVudGljYXRlZCcpIHtcclxuICAgICAgICBjb25zdCB2YWwgPSB7XHJcbiAgICAgICAgICBsYWJlbDoga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwsXHJcbiAgICAgICAgICBpZDoga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0uaWRcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgICAgdmFsdWU6IFsuLi52YWx1ZS52YWx1ZSwgdmFsXVxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgICAgdmFsdWU6IHZhbFxyXG4gICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sIHZhbHVlLmtpbmQgPT09ICdtYW55JyA/ICdBZGQgJyA6ICdTZXQgYXMgJywga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwpLCAhISh2YWx1ZS5raW5kID09PSAnbWFueScgPyB2YWx1ZS52YWx1ZS5sZW5ndGggOiB2YWx1ZS5raW5kID09PSAnb25lJyAmJiB2YWx1ZS52YWx1ZSkgJiYgY29yZS5qc3goTGlua1RvUmVsYXRlZEl0ZW1zLCB7XHJcbiAgICBpdGVtSWQ6IHZhbHVlLmlkLFxyXG4gICAgaXNEb3VibGVTaWRlZDogISFmaWVsZC5yZWZGaWVsZEtleSxcclxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxyXG4gICAgdmFsdWU6IHZhbHVlXHJcbiAgfSkpKSwgY29yZS5qc3gobW9kYWxzLkRyYXdlckNvbnRyb2xsZXIsIHtcclxuICAgIGlzT3BlbjogaXNEcmF3ZXJPcGVuXHJcbiAgfSwgY29yZS5qc3goQ3JlYXRlSXRlbURyYXdlci5DcmVhdGVJdGVtRHJhd2VyLCB7XHJcbiAgICBsaXN0S2V5OiBmb3JlaWduTGlzdC5rZXksXHJcbiAgICBvbkNsb3NlOiAoKSA9PiB7XHJcbiAgICAgIHNldElzRHJhd2VyT3BlbihmYWxzZSk7XHJcbiAgICB9LFxyXG4gICAgb25DcmVhdGU6IHZhbCA9PiB7XHJcbiAgICAgIHNldElzRHJhd2VyT3BlbihmYWxzZSk7XHJcblxyXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICB2YWx1ZTogWy4uLnZhbHVlLnZhbHVlLCB2YWxdXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlLmtpbmQgPT09ICdvbmUnKSB7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICB2YWx1ZTogdmFsXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSkpKSA6IGNvcmUuanN4KFJlbGF0aW9uc2hpcERpc3BsYXksIHtcclxuICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0XHJcbiAgfSkpO1xyXG59O1xyXG5jb25zdCBDZWxsID0gKHtcclxuICBmaWVsZCxcclxuICBpdGVtXHJcbn0pID0+IHtcclxuICBjb25zdCBsaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcclxuICBjb25zdCB7XHJcbiAgICBjb2xvcnNcclxuICB9ID0gY29yZS51c2VUaGVtZSgpO1xyXG5cclxuICBpZiAoZmllbGQuZGlzcGxheS5tb2RlID09PSAnY291bnQnKSB7XHJcbiAgICB2YXIgX2l0ZW0kO1xyXG5cclxuICAgIGNvbnN0IGNvdW50ID0gKF9pdGVtJCA9IGl0ZW1bYCR7ZmllbGQucGF0aH1Db3VudGBdKSAhPT0gbnVsbCAmJiBfaXRlbSQgIT09IHZvaWQgMCA/IF9pdGVtJCA6IDA7XHJcbiAgICByZXR1cm4gY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCBjb3VudCwgXCIgXCIsIGNvdW50ID09PSAxID8gbGlzdC5zaW5ndWxhciA6IGxpc3QucGx1cmFsKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGRhdGEgPSBpdGVtW2ZpZWxkLnBhdGhdO1xyXG4gIGNvbnN0IGl0ZW1zID0gKEFycmF5LmlzQXJyYXkoZGF0YSkgPyBkYXRhIDogW2RhdGFdKS5maWx0ZXIoaXRlbSA9PiBpdGVtKTtcclxuICBjb25zdCBkaXNwbGF5SXRlbXMgPSBpdGVtcy5sZW5ndGggPCA1ID8gaXRlbXMgOiBpdGVtcy5zbGljZSgwLCAzKTtcclxuICBjb25zdCBvdmVyZmxvdyA9IGl0ZW1zLmxlbmd0aCA8IDUgPyAwIDogaXRlbXMubGVuZ3RoIC0gMztcclxuICBjb25zdCBzdHlsZXMgPSB7XHJcbiAgICBjb2xvcjogY29sb3JzLmZvcmVncm91bmQsXHJcbiAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxyXG4gICAgJzpob3Zlcic6IHtcclxuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCBkaXNwbGF5SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcclxuICAgIGtleTogaXRlbS5pZFxyXG4gIH0sICEhaW5kZXggPyAnLCAnIDogJycsIGNvcmUuanN4KGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluaywge1xyXG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXHJcbiAgICBhczogYC8ke2xpc3QucGF0aH0vJHtpdGVtLmlkfWAsXHJcbiAgICBjc3M6IHN0eWxlc1xyXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSwgb3ZlcmZsb3cgPyBgLCBhbmQgJHtvdmVyZmxvd30gbW9yZWAgOiBudWxsKTtcclxufTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBmaWVsZCxcclxuICBpdGVtXHJcbn0pID0+IHtcclxuICBjb25zdCBsaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcclxuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pLmZpbHRlcihpdGVtID0+IGl0ZW0pLm1hcCgoaXRlbSwgaW5kZXgpID0+IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCB7XHJcbiAgICBrZXk6IGl0ZW0uaWRcclxuICB9LCAhIWluZGV4ID8gJywgJyA6ICcnLCBjb3JlLmpzeChhZG1pblVpX3JvdXRlcl9kaXN0X2tleXN0b25lLkxpbmssIHtcclxuICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9L1tpZF1gLFxyXG4gICAgYXM6IGAvJHtsaXN0LnBhdGh9LyR7aXRlbS5pZH1gXHJcbiAgfSwgaXRlbS5sYWJlbCB8fCBpdGVtLmlkKSkpKTtcclxufTtcclxuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XHJcbiAgcmV0dXJuIHtcclxuICAgIHJlZkZpZWxkS2V5OiBjb25maWcuZmllbGRNZXRhLnJlZkZpZWxkS2V5LFxyXG4gICAgbWFueTogY29uZmlnLmZpZWxkTWV0YS5tYW55LFxyXG4gICAgbGlzdEtleTogY29uZmlnLmxpc3RLZXksXHJcbiAgICBwYXRoOiBjb25maWcucGF0aCxcclxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXHJcbiAgICBkaXNwbGF5OiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnID8ge1xyXG4gICAgICBtb2RlOiAnY2FyZHMnLFxyXG4gICAgICBjYXJkRmllbGRzOiBjb25maWcuZmllbGRNZXRhLmNhcmRGaWVsZHMsXHJcbiAgICAgIGlubGluZUNyZWF0ZTogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVDcmVhdGUsXHJcbiAgICAgIGlubGluZUVkaXQ6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lRWRpdCxcclxuICAgICAgbGlua1RvSXRlbTogY29uZmlnLmZpZWxkTWV0YS5saW5rVG9JdGVtLFxyXG4gICAgICByZW1vdmVNb2RlOiBjb25maWcuZmllbGRNZXRhLnJlbW92ZU1vZGUsXHJcbiAgICAgIGlubGluZUNvbm5lY3Q6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lQ29ubmVjdFxyXG4gICAgfSA6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjb3VudCcgPyB7XHJcbiAgICAgIG1vZGU6ICdjb3VudCdcclxuICAgIH0gOiB7XHJcbiAgICAgIG1vZGU6ICdzZWxlY3QnLFxyXG4gICAgICByZWZMYWJlbEZpZWxkOiBjb25maWcuZmllbGRNZXRhLnJlZkxhYmVsRmllbGRcclxuICAgIH0sXHJcbiAgICByZWZMaXN0S2V5OiBjb25maWcuZmllbGRNZXRhLnJlZkxpc3RLZXksXHJcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY2FyZHMnID8gYCR7Y29uZmlnLnBhdGh9IHtcclxuICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgbGFiZWw6ICR7Y29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkfVxyXG4gICAgICAgICAgfWAgOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY291bnQnID8gYCR7Y29uZmlnLnBhdGh9Q291bnRgIDogYCR7Y29uZmlnLnBhdGh9IHtcclxuICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgIGxhYmVsOiAke2NvbmZpZy5maWVsZE1ldGEucmVmTGFiZWxGaWVsZH1cclxuICAgICAgICAgICAgfWAsXHJcbiAgICBoaWRlQ3JlYXRlOiBjb25maWcuZmllbGRNZXRhLmhpZGVDcmVhdGUsXHJcbiAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZy5maWVsZE1ldGEubWFueSA/IHtcclxuICAgICAgaWQ6IG51bGwsXHJcbiAgICAgIGtpbmQ6ICdtYW55JyxcclxuICAgICAgaW5pdGlhbFZhbHVlOiBbXSxcclxuICAgICAgdmFsdWU6IFtdXHJcbiAgICB9IDoge1xyXG4gICAgICBpZDogbnVsbCxcclxuICAgICAga2luZDogJ29uZScsXHJcbiAgICAgIHZhbHVlOiBudWxsLFxyXG4gICAgICBpbml0aWFsVmFsdWU6IG51bGxcclxuICAgIH0sXHJcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XHJcbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY291bnQnKSB7XHJcbiAgICAgICAgdmFyIF9kYXRhJDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAga2luZDogJ2NvdW50JyxcclxuICAgICAgICAgIGNvdW50OiAoX2RhdGEkID0gZGF0YVtgJHtjb25maWcucGF0aH1Db3VudGBdKSAhPT0gbnVsbCAmJiBfZGF0YSQgIT09IHZvaWQgMCA/IF9kYXRhJCA6IDBcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJykge1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxJZHMgPSBuZXcgU2V0KChBcnJheS5pc0FycmF5KGRhdGFbY29uZmlnLnBhdGhdKSA/IGRhdGFbY29uZmlnLnBhdGhdIDogZGF0YVtjb25maWcucGF0aF0gPyBbZGF0YVtjb25maWcucGF0aF1dIDogW10pLm1hcCh4ID0+IHguaWQpKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ2NhcmRzLXZpZXcnLFxyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KCksXHJcbiAgICAgICAgICBpdGVtQmVpbmdDcmVhdGVkOiBmYWxzZSxcclxuICAgICAgICAgIGluaXRpYWxJZHMsXHJcbiAgICAgICAgICBjdXJyZW50SWRzOiBpbml0aWFsSWRzXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IChkYXRhW2NvbmZpZy5wYXRoXSB8fCBbXSkubWFwKHggPT4gKHtcclxuICAgICAgICAgIGlkOiB4LmlkLFxyXG4gICAgICAgICAgbGFiZWw6IHgubGFiZWwgfHwgeC5pZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ21hbnknLFxyXG4gICAgICAgICAgaWQ6IGRhdGEuaWQsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgdmFsdWUgPSBkYXRhW2NvbmZpZy5wYXRoXTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgIHZhbHVlID0ge1xyXG4gICAgICAgICAgaWQ6IHZhbHVlLmlkLFxyXG4gICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsIHx8IHZhbHVlLmlkXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBraW5kOiAnb25lJyxcclxuICAgICAgICBpZDogZGF0YS5pZCxcclxuICAgICAgICB2YWx1ZSxcclxuICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIEZpbHRlcjogKHtcclxuICAgICAgICBvbkNoYW5nZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSA9PiB7XHJcbiAgICAgICAgY29uc3QgZm9yZWlnbkxpc3QgPSBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZS51c2VMaXN0KGNvbmZpZy5maWVsZE1ldGEucmVmTGlzdEtleSk7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWVzLFxyXG4gICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgIH0gPSB1c2VSZWxhdGlvbnNoaXBGaWx0ZXJWYWx1ZXMoe1xyXG4gICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICBsaXN0OiBmb3JlaWduTGlzdFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0ge1xyXG4gICAgICAgICAga2luZDogJ21hbnknLFxyXG4gICAgICAgICAgdmFsdWU6IGZpbHRlclZhbHVlcyxcclxuXHJcbiAgICAgICAgICBvbkNoYW5nZShuZXdJdGVtcykge1xyXG4gICAgICAgICAgICBvbkNoYW5nZShuZXdJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKS5qb2luKCcsJykpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHNfdHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2tleXN0b25lLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xyXG4gICAgICAgICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiB0cnVlLFxyXG4gICAgICAgICAgbGlzdDogZm9yZWlnbkxpc3QsXHJcbiAgICAgICAgICBpc0xvYWRpbmc6IGxvYWRpbmcsXHJcbiAgICAgICAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdyYXBocWw6ICh7XHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZvcmVpZ25JZHMgPSBnZXRGb3JlaWduSWRzKHZhbHVlKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgIHNvbWU6IHtcclxuICAgICAgICAgICAgICAgIGlkOiB7XHJcbiAgICAgICAgICAgICAgICAgIGluOiBmb3JlaWduSWRzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIFtjb25maWcucGF0aF06IHtcclxuICAgICAgICAgICAgaWQ6IHtcclxuICAgICAgICAgICAgICBpbjogZm9yZWlnbklkc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIExhYmVsKHtcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgY29uc3QgZm9yZWlnbkxpc3QgPSBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZS51c2VMaXN0KGNvbmZpZy5maWVsZE1ldGEucmVmTGlzdEtleSk7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgZmlsdGVyVmFsdWVzXHJcbiAgICAgICAgfSA9IHVzZVJlbGF0aW9uc2hpcEZpbHRlclZhbHVlcyh7XHJcbiAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgIGxpc3Q6IGZvcmVpZ25MaXN0XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICghZmlsdGVyVmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIGBoYXMgbm8gdmFsdWVgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpbHRlclZhbHVlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJWYWx1ZXMubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcclxuICAgICAgICAgIHJldHVybiBgaXMgaW4gWyR7dmFsdWVzfV1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgb3B0aW9uTGFiZWwgPSBmaWx0ZXJWYWx1ZXNbMF0ubGFiZWw7XHJcbiAgICAgICAgcmV0dXJuIGBpcyAke29wdGlvbkxhYmVsfWA7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICB0eXBlczoge1xyXG4gICAgICAgIG1hdGNoZXM6IHtcclxuICAgICAgICAgIGxhYmVsOiAnTWF0Y2hlcycsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIHZhbGlkYXRlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiB2YWx1ZS5raW5kICE9PSAnY2FyZHMtdmlldycgfHwgdmFsdWUuaXRlbXNCZWluZ0VkaXRlZC5zaXplID09PSAwICYmICF2YWx1ZS5pdGVtQmVpbmdDcmVhdGVkO1xyXG4gICAgfSxcclxuXHJcbiAgICBzZXJpYWxpemU6IHN0YXRlID0+IHtcclxuICAgICAgaWYgKHN0YXRlLmtpbmQgPT09ICdtYW55Jykge1xyXG4gICAgICAgIGNvbnN0IG5ld0FsbElkcyA9IG5ldyBTZXQoc3RhdGUudmFsdWUubWFwKHggPT4geC5pZCkpO1xyXG4gICAgICAgIGNvbnN0IGluaXRpYWxJZHMgPSBuZXcgU2V0KHN0YXRlLmluaXRpYWxWYWx1ZS5tYXAoeCA9PiB4LmlkKSk7XHJcbiAgICAgICAgbGV0IGRpc2Nvbm5lY3QgPSBzdGF0ZS5pbml0aWFsVmFsdWUuZmlsdGVyKHggPT4gIW5ld0FsbElkcy5oYXMoeC5pZCkpLm1hcCh4ID0+ICh7XHJcbiAgICAgICAgICBpZDogeC5pZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsZXQgY29ubmVjdCA9IHN0YXRlLnZhbHVlLmZpbHRlcih4ID0+ICFpbml0aWFsSWRzLmhhcyh4LmlkKSkubWFwKHggPT4gKHtcclxuICAgICAgICAgIGlkOiB4LmlkXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGggfHwgY29ubmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgIGxldCBvdXRwdXQgPSB7fTtcclxuXHJcbiAgICAgICAgICBpZiAoZGlzY29ubmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgb3V0cHV0LmRpc2Nvbm5lY3QgPSBkaXNjb25uZWN0O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChjb25uZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCA9IGNvbm5lY3Q7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXTogb3V0cHV0XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5raW5kID09PSAnb25lJykge1xyXG4gICAgICAgIHZhciBfc3RhdGUkaW5pdGlhbFZhbHVlO1xyXG5cclxuICAgICAgICBpZiAoc3RhdGUuaW5pdGlhbFZhbHVlICYmICFzdGF0ZS52YWx1ZSkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2UgaWYgKHN0YXRlLnZhbHVlICYmIHN0YXRlLnZhbHVlLmlkICE9PSAoKF9zdGF0ZSRpbml0aWFsVmFsdWUgPSBzdGF0ZS5pbml0aWFsVmFsdWUpID09PSBudWxsIHx8IF9zdGF0ZSRpbml0aWFsVmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9zdGF0ZSRpbml0aWFsVmFsdWUuaWQpKSB7XHJcbiAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XHJcbiAgICAgICAgICAgICAgY29ubmVjdDoge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHN0YXRlLnZhbHVlLmlkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmIChzdGF0ZS5raW5kID09PSAnY2FyZHMtdmlldycpIHtcclxuICAgICAgICBsZXQgZGlzY29ubmVjdCA9IFsuLi5zdGF0ZS5pbml0aWFsSWRzXS5maWx0ZXIoaWQgPT4gIXN0YXRlLmN1cnJlbnRJZHMuaGFzKGlkKSkubWFwKGlkID0+ICh7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICBsZXQgY29ubmVjdCA9IFsuLi5zdGF0ZS5jdXJyZW50SWRzXS5maWx0ZXIoaWQgPT4gIXN0YXRlLmluaXRpYWxJZHMuaGFzKGlkKSkubWFwKGlkID0+ICh7XHJcbiAgICAgICAgICBpZFxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xyXG4gICAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoIHx8IGNvbm5lY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgICAgY29ubmVjdDogY29ubmVjdC5sZW5ndGggPyBjb25uZWN0IDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgICAgICAgZGlzY29ubmVjdDogZGlzY29ubmVjdC5sZW5ndGggPyBkaXNjb25uZWN0IDogdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29ubmVjdC5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcclxuICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0WzBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIGlmIChkaXNjb25uZWN0Lmxlbmd0aCkge1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xyXG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7fTtcclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZnVuY3Rpb24gdXNlUmVsYXRpb25zaGlwRmlsdGVyVmFsdWVzKHtcclxuICB2YWx1ZSxcclxuICBsaXN0XHJcbn0pIHtcclxuICB2YXIgX2RhdGEkaXRlbXM7XHJcblxyXG4gIGNvbnN0IGZvcmVpZ25JZHMgPSBnZXRGb3JlaWduSWRzKHZhbHVlKTtcclxuICBjb25zdCB3aGVyZSA9IHtcclxuICAgIGlkOiB7XHJcbiAgICAgIGluOiBmb3JlaWduSWRzXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBxdWVyeSA9IGNsaWVudC5ncWxgXHJcbiAgICBxdWVyeSBGT1JFSUdOTElTVF9RVUVSWSgkd2hlcmU6ICR7bGlzdC5ncWxOYW1lcy53aGVyZUlucHV0TmFtZX0hKSB7XHJcbiAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6ICR3aGVyZSkge1xyXG4gICAgICAgIGlkIFxyXG4gICAgICAgICR7bGlzdC5sYWJlbEZpZWxkfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgYDtcclxuICBjb25zdCB7XHJcbiAgICBkYXRhLFxyXG4gICAgbG9hZGluZ1xyXG4gIH0gPSBjbGllbnQudXNlUXVlcnkocXVlcnksIHtcclxuICAgIHZhcmlhYmxlczoge1xyXG4gICAgICB3aGVyZVxyXG4gICAgfVxyXG4gIH0pO1xyXG4gIHJldHVybiB7XHJcbiAgICBmaWx0ZXJWYWx1ZXM6IChkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGF0YSRpdGVtcyA9IGRhdGEuaXRlbXMpID09PSBudWxsIHx8IF9kYXRhJGl0ZW1zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZGF0YSRpdGVtcy5tYXAoaXRlbSA9PiB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgbGFiZWw6IGl0ZW1bbGlzdC5sYWJlbEZpZWxkXSB8fCBpdGVtLmlkXHJcbiAgICAgIH07XHJcbiAgICB9KSkgfHwgZm9yZWlnbklkcy5tYXAoZiA9PiAoe1xyXG4gICAgICBsYWJlbDogZixcclxuICAgICAgaWQ6IGZcclxuICAgIH0pKSxcclxuICAgIGxvYWRpbmc6IGxvYWRpbmdcclxuICB9O1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGb3JlaWduSWRzKHZhbHVlKSB7XHJcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xyXG4gICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcsJyk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gW107XHJcbn1cclxuXHJcbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xyXG5leHBvcnRzLkNlbGwgPSBDZWxsO1xyXG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XHJcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5wcm9kLmpzXCIpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5cclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xyXG52YXIgc2VnbWVudGVkQ29udHJvbCA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbCcpO1xyXG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xyXG52YXIgQ2VsbENvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbENvbnRhaW5lci00NTMyNTRiNS5janMuZGV2LmpzJyk7XHJcbnZhciBDZWxsTGluayA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbExpbmstNTA5ZmIxNjYuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9BbGVydFRyaWFuZ2xlSWNvbicpO1xyXG5yZXF1aXJlKCduZXh0L2xpbmsnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcclxucmVxdWlyZSgnYXBvbGxvLXVwbG9hZC1jbGllbnQnKTtcclxucmVxdWlyZSgnQGVtb3Rpb24vaGFzaCcpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L3NxbGl0ZS1hZjllNTE0OC5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9ncmFwaHFsLXRzLXNjaGVtYS1mY2U3YTZhOC5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvYWRtaW4tbWV0YS1ncmFwaHFsLTlmOWE5YzExLmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnJlcXVpcmUoJ25leHQvcm91dGVyJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9wb3BvdmVyJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb24nKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0NoZXZyb25SaWdodEljb24nKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9TaWdub3V0QnV0dG9uLWFjZGIxNTU0LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9ub3RpY2UnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdkZWNpbWFsLmpzJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEnKTtcclxucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcclxucmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcclxucmVxdWlyZSgnZ3JhcGhxbCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGF1dG9Gb2N1cyxcclxuICBmb3JjZVZhbGlkYXRpb25cclxufSkgPT4ge1xyXG4gIGNvbnN0IFtoYXNDaGFuZ2VkLCBzZXRIYXNDaGFuZ2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZSA9IChoYXNDaGFuZ2VkIHx8IGZvcmNlVmFsaWRhdGlvbikgJiYgIXZhbGlkYXRlKHZhbHVlLCBmaWVsZC5pc1JlcXVpcmVkKSA/IGNvcmUuanN4KGNvcmUuVGV4dCwge1xyXG4gICAgY29sb3I6IFwicmVkNjAwXCIsXHJcbiAgICBzaXplOiBcInNtYWxsXCJcclxuICB9LCBmaWVsZC5sYWJlbCwgXCIgaXMgcmVxdWlyZWRcIikgOiBudWxsO1xyXG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIHtcclxuICAgIGFzOiBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3NlbGVjdCcgPyAnZGl2JyA6ICdmaWVsZHNldCdcclxuICB9LCBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3NlbGVjdCcgPyBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIHtcclxuICAgIGh0bWxGb3I6IGZpZWxkLnBhdGhcclxuICB9LCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KGZpZWxkcy5TZWxlY3QsIHtcclxuICAgIGlkOiBmaWVsZC5wYXRoLFxyXG4gICAgaXNDbGVhcmFibGU6IHRydWUsXHJcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICAgIG9wdGlvbnM6IGZpZWxkLm9wdGlvbnMsXHJcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgb25DaGFuZ2U6IG5ld1ZhbCA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICB2YWx1ZTogbmV3VmFsXHJcbiAgICAgIH0pKTtcclxuICAgICAgc2V0SGFzQ2hhbmdlZCh0cnVlKTtcclxuICAgIH0sXHJcbiAgICB2YWx1ZTogdmFsdWUudmFsdWUsXHJcbiAgICBwb3J0YWxNZW51OiB0cnVlXHJcbiAgfSksIHZhbGlkYXRpb25NZXNzYWdlKSA6IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwge1xyXG4gICAgYXM6IFwibGVnZW5kXCJcclxuICB9LCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGFjcm9zczogdHJ1ZSxcclxuICAgIGdhcDogXCJzbWFsbFwiLFxyXG4gICAgYWxpZ246IFwiY2VudGVyXCJcclxuICB9LCBjb3JlLmpzeChzZWdtZW50ZWRDb250cm9sLlNlZ21lbnRlZENvbnRyb2wsIHtcclxuICAgIHNlZ21lbnRzOiBmaWVsZC5vcHRpb25zLm1hcCh4ID0+IHgubGFiZWwpLFxyXG4gICAgc2VsZWN0ZWRJbmRleDogdmFsdWUudmFsdWUgPyBmaWVsZC5vcHRpb25zLmZpbmRJbmRleCh4ID0+IHgudmFsdWUgPT09IHZhbHVlLnZhbHVlLnZhbHVlKSA6IHVuZGVmaW5lZCxcclxuICAgIG9uQ2hhbmdlOiBpbmRleCA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICB2YWx1ZTogZmllbGQub3B0aW9uc1tpbmRleF1cclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRIYXNDaGFuZ2VkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0pLCB2YWx1ZS52YWx1ZSAhPT0gbnVsbCAmJiBvbkNoYW5nZSAhPT0gdW5kZWZpbmVkICYmIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcclxuICAgIG9uQ2xpY2s6ICgpID0+IHtcclxuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgfSkpO1xyXG4gICAgICBzZXRIYXNDaGFuZ2VkKHRydWUpO1xyXG4gICAgfVxyXG4gIH0sIFwiQ2xlYXJcIikpLCB2YWxpZGF0aW9uTWVzc2FnZSkpO1xyXG59O1xyXG5jb25zdCBDZWxsID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkLFxyXG4gIGxpbmtUb1xyXG59KSA9PiB7XHJcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQ7XHJcblxyXG4gIGxldCB2YWx1ZSA9IGl0ZW1bZmllbGQucGF0aF0gKyAnJztcclxuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gdmFsdWUpKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kLmxhYmVsO1xyXG4gIHJldHVybiBsaW5rVG8gPyBjb3JlLmpzeChDZWxsTGluay5DZWxsTGluaywgbGlua1RvLCBsYWJlbCkgOiBjb3JlLmpzeChDZWxsQ29udGFpbmVyLkNlbGxDb250YWluZXIsIG51bGwsIGxhYmVsKTtcclxufTtcclxuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XHJcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XHJcbiAgaXRlbSxcclxuICBmaWVsZFxyXG59KSA9PiB7XHJcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQyO1xyXG5cclxuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XHJcbiAgY29uc3QgbGFiZWwgPSAoX2ZpZWxkJG9wdGlvbnMkZmluZDIgPSBmaWVsZC5vcHRpb25zLmZpbmQoeCA9PiB4LnZhbHVlID09PSB2YWx1ZSkpID09PSBudWxsIHx8IF9maWVsZCRvcHRpb25zJGZpbmQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kMi5sYWJlbDtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBsYWJlbCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgaXNSZXF1aXJlZCkge1xyXG4gIGlmIChpc1JlcXVpcmVkKSB7XHJcbiAgICAvLyBpZiB5b3UgZ290IG51bGwgaW5pdGlhbGx5IG9uIHRoZSB1cGRhdGUgc2NyZWVuLCB3ZSB3YW50IHRvIGFsbG93IHNhdmluZ1xyXG4gICAgLy8gc2luY2UgdGhlIHVzZXIgcHJvYmFibHkgZG9lc24ndCBoYXZlIHJlYWQgYWNjZXNzIGNvbnRyb2xcclxuICAgIGlmICh2YWx1ZS5raW5kID09PSAndXBkYXRlJyAmJiB2YWx1ZS5pbml0aWFsID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB2YWx1ZS52YWx1ZSAhPT0gbnVsbDtcclxuICB9XHJcblxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcblxyXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcclxuICB2YXIgX2NvbmZpZyRmaWVsZE1ldGEkZGVmLCBfb3B0aW9uc1dpdGhTdHJpbmdWYWw7XHJcblxyXG4gIGNvbnN0IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzID0gY29uZmlnLmZpZWxkTWV0YS5vcHRpb25zLm1hcCh4ID0+ICh7XHJcbiAgICBsYWJlbDogeC5sYWJlbCxcclxuICAgIHZhbHVlOiB4LnZhbHVlLnRvU3RyaW5nKClcclxuICB9KSk7IC8vIFRyYW5zZm9ybSBmcm9tIHN0cmluZyB2YWx1ZSB0byB0eXBlIGFwcHJvcHJpYXRlIHZhbHVlXHJcblxyXG4gIGNvbnN0IHQgPSB2ID0+IHYgPT09IG51bGwgPyBudWxsIDogY29uZmlnLmZpZWxkTWV0YS50eXBlID09PSAnaW50ZWdlcicgPyBwYXJzZUludCh2KSA6IHY7XHJcblxyXG4gIGNvbnN0IHN0cmluZ2lmaWVkRGVmYXVsdCA9IChfY29uZmlnJGZpZWxkTWV0YSRkZWYgPSBjb25maWcuZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2NvbmZpZyRmaWVsZE1ldGEkZGVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY29uZmlnJGZpZWxkTWV0YSRkZWYudG9TdHJpbmcoKTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHtcclxuICAgICAga2luZDogJ2NyZWF0ZScsXHJcbiAgICAgIHZhbHVlOiAoX29wdGlvbnNXaXRoU3RyaW5nVmFsID0gb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMuZmluZCh4ID0+IHgudmFsdWUgPT09IHN0cmluZ2lmaWVkRGVmYXVsdCkpICE9PSBudWxsICYmIF9vcHRpb25zV2l0aFN0cmluZ1ZhbCAhPT0gdm9pZCAwID8gX29wdGlvbnNXaXRoU3RyaW5nVmFsIDogbnVsbFxyXG4gICAgfSxcclxuICAgIHR5cGU6IGNvbmZpZy5maWVsZE1ldGEudHlwZSxcclxuICAgIGRpc3BsYXlNb2RlOiBjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlLFxyXG4gICAgaXNSZXF1aXJlZDogY29uZmlnLmZpZWxkTWV0YS5pc1JlcXVpcmVkLFxyXG4gICAgb3B0aW9uczogb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMsXHJcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XHJcbiAgICAgIGZvciAoY29uc3Qgb3B0aW9uIG9mIGNvbmZpZy5maWVsZE1ldGEub3B0aW9ucykge1xyXG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGRhdGFbY29uZmlnLnBhdGhdKSB7XHJcbiAgICAgICAgICBjb25zdCBzdHJpbmdpZmllZE9wdGlvbiA9IHtcclxuICAgICAgICAgICAgbGFiZWw6IG9wdGlvbi5sYWJlbCxcclxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZS50b1N0cmluZygpXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAga2luZDogJ3VwZGF0ZScsXHJcbiAgICAgICAgICAgIGluaXRpYWw6IHN0cmluZ2lmaWVkT3B0aW9uLFxyXG4gICAgICAgICAgICB2YWx1ZTogc3RyaW5naWZpZWRPcHRpb25cclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGtpbmQ6ICd1cGRhdGUnLFxyXG4gICAgICAgIGluaXRpYWw6IG51bGwsXHJcbiAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+IHtcclxuICAgICAgdmFyIF92YWx1ZSR2YWx1ZSR2YWx1ZSwgX3ZhbHVlJHZhbHVlO1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBbY29uZmlnLnBhdGhdOiB0KChfdmFsdWUkdmFsdWUkdmFsdWUgPSAoX3ZhbHVlJHZhbHVlID0gdmFsdWUudmFsdWUpID09PSBudWxsIHx8IF92YWx1ZSR2YWx1ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3ZhbHVlJHZhbHVlLnZhbHVlKSAhPT0gbnVsbCAmJiBfdmFsdWUkdmFsdWUkdmFsdWUgIT09IHZvaWQgMCA/IF92YWx1ZSR2YWx1ZSR2YWx1ZSA6IG51bGwpXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgdmFsaWRhdGU6IHZhbHVlID0+IHZhbGlkYXRlKHZhbHVlLCBjb25maWcuZmllbGRNZXRhLmlzUmVxdWlyZWQpLFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIEZpbHRlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuTXVsdGlTZWxlY3QsIHtcclxuICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSxcclxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzLFxyXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxyXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBncmFwaHFsOiAoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmFsdWU6IG9wdGlvbnNcclxuICAgICAgfSkgPT4gKHtcclxuICAgICAgICBbY29uZmlnLnBhdGhdOiB7XHJcbiAgICAgICAgICBbdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/ICdub3RJbicgOiAnaW4nXTogb3B0aW9ucy5tYXAoeCA9PiB0KHgudmFsdWUpKVxyXG4gICAgICAgIH1cclxuICAgICAgfSksXHJcblxyXG4gICAgICBMYWJlbCh7XHJcbiAgICAgICAgdHlwZSxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgaWYgKCF2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIHNldGAgOiBgaGFzIG5vIHZhbHVlYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB2YWx1ZS5tYXAoaSA9PiBpLmxhYmVsKS5qb2luKCcsICcpO1xyXG4gICAgICAgICAgcmV0dXJuIHR5cGUgPT09ICdub3RfbWF0Y2hlcycgPyBgaXMgbm90IGluIFske3ZhbHVlc31dYCA6IGBpcyBpbiBbJHt2YWx1ZXN9XWA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBvcHRpb25MYWJlbCA9IHZhbHVlWzBdLmxhYmVsO1xyXG4gICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCAke29wdGlvbkxhYmVsfWAgOiBgaXMgJHtvcHRpb25MYWJlbH1gO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgdHlwZXM6IHtcclxuICAgICAgICBtYXRjaGVzOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ01hdGNoZXMnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X21hdGNoZXM6IHtcclxuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgbWF0Y2gnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcclxuZXhwb3J0cy5DZWxsID0gQ2VsbDtcclxuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xyXG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xyXG4iLCIndXNlIHN0cmljdCc7XHJcblxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMucHJvZC5qc1wiKTtcclxufSBlbHNlIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5kZXYuanNcIik7XHJcbn1cclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuXHJcbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XHJcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcclxudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIENlbGxDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NlbGxDb250YWluZXItNDUzMjU0YjUuY2pzLmRldi5qcycpO1xyXG52YXIgQ2VsbExpbmsgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NlbGxMaW5rLTUwOWZiMTY2LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9BbGVydFRyaWFuZ2xlSWNvbicpO1xyXG5yZXF1aXJlKCduZXh0L2xpbmsnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcclxucmVxdWlyZSgnYXBvbGxvLXVwbG9hZC1jbGllbnQnKTtcclxucmVxdWlyZSgnQGVtb3Rpb24vaGFzaCcpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L3NxbGl0ZS1hZjllNTE0OC5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9ncmFwaHFsLXRzLXNjaGVtYS1mY2U3YTZhOC5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvYWRtaW4tbWV0YS1ncmFwaHFsLTlmOWE5YzExLmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XHJcbnJlcXVpcmUoJ25leHQvcm91dGVyJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9wb3BvdmVyJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb24nKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0NoZXZyb25SaWdodEljb24nKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9TaWdub3V0QnV0dG9uLWFjZGIxNTU0LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9ub3RpY2UnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdkZWNpbWFsLmpzJyk7XHJcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEnKTtcclxucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcclxucmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcclxucmVxdWlyZSgnZ3JhcGhxbCcpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGF1dG9Gb2N1cyxcclxuICBmb3JjZVZhbGlkYXRpb25cclxufSkgPT4ge1xyXG4gIGNvbnN0IHtcclxuICAgIHR5cG9ncmFwaHksXHJcbiAgICBmaWVsZHM6IGZpZWxkcyQxXHJcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcclxuICBjb25zdCBbc2hvdWxkU2hvd0Vycm9ycywgc2V0U2hvdWxkU2hvd0Vycm9yc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgdmFsaWRhdGlvbk1lc3NhZ2VzID0gdmFsaWRhdGUodmFsdWUsIGZpZWxkLnZhbGlkYXRpb24sIGZpZWxkLmxhYmVsKTtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcclxuICAgIGdhcDogXCJzbWFsbFwiXHJcbiAgfSwgZmllbGQuZGlzcGxheU1vZGUgPT09ICd0ZXh0YXJlYScgPyBjb3JlLmpzeChmaWVsZHMuVGV4dEFyZWEsIHtcclxuICAgIGlkOiBmaWVsZC5wYXRoLFxyXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXHJcbiAgICBvbkNoYW5nZTogZXZlbnQgPT4gb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgIGlubmVyOiB7XHJcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcclxuICAgICAgICB2YWx1ZTogZXZlbnQudGFyZ2V0LnZhbHVlXHJcbiAgICAgIH1cclxuICAgIH0pKSxcclxuICAgIHZhbHVlOiB2YWx1ZS5pbm5lci5raW5kID09PSAnbnVsbCcgPyAnJyA6IHZhbHVlLmlubmVyLnZhbHVlLFxyXG4gICAgZGlzYWJsZWQ6IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyxcclxuICAgIG9uQmx1cjogKCkgPT4ge1xyXG4gICAgICBzZXRTaG91bGRTaG93RXJyb3JzKHRydWUpO1xyXG4gICAgfVxyXG4gIH0pIDogY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xyXG4gICAgaWQ6IGZpZWxkLnBhdGgsXHJcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgaW5uZXI6IHtcclxuICAgICAgICBraW5kOiAndmFsdWUnLFxyXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcclxuICAgICAgfVxyXG4gICAgfSkpLFxyXG4gICAgdmFsdWU6IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyA/ICcnIDogdmFsdWUuaW5uZXIudmFsdWUsXHJcbiAgICBkaXNhYmxlZDogdmFsdWUuaW5uZXIua2luZCA9PT0gJ251bGwnLFxyXG4gICAgb25CbHVyOiAoKSA9PiB7XHJcbiAgICAgIHNldFNob3VsZFNob3dFcnJvcnModHJ1ZSk7XHJcbiAgICB9XHJcbiAgfSksIGZpZWxkLmlzTnVsbGFibGUgJiYgY29yZS5qc3goZmllbGRzLkNoZWNrYm94LCB7XHJcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcclxuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxyXG4gICAgb25DaGFuZ2U6ICgpID0+IHtcclxuICAgICAgaWYgKHZhbHVlLmlubmVyLmtpbmQgPT09ICd2YWx1ZScpIHtcclxuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICAgIGlubmVyOiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdudWxsJyxcclxuICAgICAgICAgICAgcHJldjogdmFsdWUuaW5uZXIudmFsdWVcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgICBpbm5lcjoge1xyXG4gICAgICAgICAgICBraW5kOiAndmFsdWUnLFxyXG4gICAgICAgICAgICB2YWx1ZTogdmFsdWUuaW5uZXIucHJldlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNoZWNrZWQ6IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJ1xyXG4gIH0sIGNvcmUuanN4KFwic3BhblwiLCB7XHJcbiAgICBjc3M6IHtcclxuICAgICAgZm9udFdlaWdodDogdHlwb2dyYXBoeS5mb250V2VpZ2h0LnNlbWlib2xkLFxyXG4gICAgICBjb2xvcjogZmllbGRzJDEubGFiZWxDb2xvclxyXG4gICAgfVxyXG4gIH0sIFwiU2V0IGZpZWxkIGFzIG51bGxcIikpLCAhIXZhbGlkYXRpb25NZXNzYWdlcy5sZW5ndGggJiYgKHNob3VsZFNob3dFcnJvcnMgfHwgZm9yY2VWYWxpZGF0aW9uKSAmJiB2YWxpZGF0aW9uTWVzc2FnZXMubWFwKChtZXNzYWdlLCBpKSA9PiBjb3JlLmpzeChcInNwYW5cIiwge1xyXG4gICAga2V5OiBpLFxyXG4gICAgY3NzOiB7XHJcbiAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfVxyXG4gIH0sIG1lc3NhZ2UpKSkgOiB2YWx1ZSk7XHJcbn07XHJcbmNvbnN0IENlbGwgPSAoe1xyXG4gIGl0ZW0sXHJcbiAgZmllbGQsXHJcbiAgbGlua1RvXHJcbn0pID0+IHtcclxuICBsZXQgdmFsdWUgPSBpdGVtW2ZpZWxkLnBhdGhdICsgJyc7XHJcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KENlbGxMaW5rLkNlbGxMaW5rLCBsaW5rVG8sIHZhbHVlKSA6IGNvcmUuanN4KENlbGxDb250YWluZXIuQ2VsbENvbnRhaW5lciwgbnVsbCwgdmFsdWUpO1xyXG59O1xyXG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCB2YWxpZGF0aW9uLCBmaWVsZExhYmVsKSB7XHJcbiAgLy8gaWYgdGhlIHZhbHVlIGlzIHRoZSBzYW1lIGFzIHRoZSBpbml0aWFsIGZvciBhbiB1cGRhdGUsIHdlIGRvbid0IHdhbnQgdG8gYmxvY2sgc2F2aW5nXHJcbiAgLy8gc2luY2Ugd2UncmUgbm90IGdvbm5hIHNlbmQgaXQgYW55d2F5IGlmIGl0J3MgdGhlIHNhbWVcclxuICAvLyBhbmQgZ29pbmcgXCJmaXggdGhpcyB0aGluZyB0aGF0IGlzIHVucmVsYXRlZCB0byB0aGUgdGhpbmcgeW91J3JlIGRvaW5nXCIgaXMgYmFkXHJcbiAgLy8gYW5kIGFsc28gYmMgaXQgY291bGQgYmUgbnVsbCBiYyBvZiByZWFkIGFjY2VzcyBjb250cm9sXHJcbiAgaWYgKHZhbHVlLmtpbmQgPT09ICd1cGRhdGUnICYmICh2YWx1ZS5pbml0aWFsLmtpbmQgPT09ICdudWxsJyAmJiB2YWx1ZS5pbm5lci5raW5kID09PSAnbnVsbCcgfHwgdmFsdWUuaW5pdGlhbC5raW5kID09PSAndmFsdWUnICYmIHZhbHVlLmlubmVyLmtpbmQgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5uZXIudmFsdWUgPT09IHZhbHVlLmluaXRpYWwudmFsdWUpKSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBpZiAodmFsdWUuaW5uZXIua2luZCA9PT0gJ251bGwnKSB7XHJcbiAgICBpZiAodmFsaWRhdGlvbi5pc1JlcXVpcmVkKSB7XHJcbiAgICAgIHJldHVybiBbYCR7ZmllbGRMYWJlbH0gaXMgcmVxdWlyZWRgXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG5cclxuICBjb25zdCB2YWwgPSB2YWx1ZS5pbm5lci52YWx1ZTtcclxuICBsZXQgbWVzc2FnZXMgPSBbXTtcclxuXHJcbiAgaWYgKHZhbGlkYXRpb24ubGVuZ3RoLm1pbiAhPT0gbnVsbCAmJiB2YWwubGVuZ3RoIDwgdmFsaWRhdGlvbi5sZW5ndGgubWluKSB7XHJcbiAgICBpZiAodmFsaWRhdGlvbi5sZW5ndGgubWluID09PSAxKSB7XHJcbiAgICAgIG1lc3NhZ2VzLnB1c2goYCR7ZmllbGRMYWJlbH0gbXVzdCBub3QgYmUgZW1wdHlgKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2VzLnB1c2goYCR7ZmllbGRMYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke3ZhbGlkYXRpb24ubGVuZ3RoLm1pbn0gY2hhcmFjdGVycyBsb25nYCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAodmFsaWRhdGlvbi5sZW5ndGgubWF4ICE9PSBudWxsICYmIHZhbC5sZW5ndGggPiB2YWxpZGF0aW9uLmxlbmd0aC5tYXgpIHtcclxuICAgIG1lc3NhZ2VzLnB1c2goYCR7ZmllbGRMYWJlbH0gbXVzdCBiZSBubyBsb25nZXIgdGhhbiAke3ZhbGlkYXRpb24ubGVuZ3RoLm1pbn0gY2hhcmFjdGVyc2ApO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbGlkYXRpb24ubWF0Y2ggJiYgIXZhbGlkYXRpb24ubWF0Y2gucmVnZXgudGVzdCh2YWwpKSB7XHJcbiAgICBtZXNzYWdlcy5wdXNoKHZhbGlkYXRpb24ubWF0Y2guZXhwbGFuYXRpb24gfHwgYCR7ZmllbGRMYWJlbH0gbXVzdCBtYXRjaCAke3ZhbGlkYXRpb24ubWF0Y2gucmVnZXh9YCk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gbWVzc2FnZXM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGRlc2VyaWFsaXplVGV4dFZhbHVlKHZhbHVlKSB7XHJcbiAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBraW5kOiAnbnVsbCcsXHJcbiAgICAgIHByZXY6ICcnXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIGtpbmQ6ICd2YWx1ZScsXHJcbiAgICB2YWx1ZVxyXG4gIH07XHJcbn1cclxuXHJcbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xyXG4gIGNvbnN0IHZhbGlkYXRpb24gPSB7XHJcbiAgICBpc1JlcXVpcmVkOiBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24uaXNSZXF1aXJlZCxcclxuICAgIGxlbmd0aDogY29uZmlnLmZpZWxkTWV0YS52YWxpZGF0aW9uLmxlbmd0aCxcclxuICAgIG1hdGNoOiBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubWF0Y2ggPyB7XHJcbiAgICAgIHJlZ2V4OiBuZXcgUmVnRXhwKGNvbmZpZy5maWVsZE1ldGEudmFsaWRhdGlvbi5tYXRjaC5yZWdleC5zb3VyY2UsIGNvbmZpZy5maWVsZE1ldGEudmFsaWRhdGlvbi5tYXRjaC5yZWdleC5mbGFncyksXHJcbiAgICAgIGV4cGxhbmF0aW9uOiBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubWF0Y2guZXhwbGFuYXRpb25cclxuICAgIH0gOiBudWxsXHJcbiAgfTtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHtcclxuICAgICAga2luZDogJ2NyZWF0ZScsXHJcbiAgICAgIGlubmVyOiBkZXNlcmlhbGl6ZVRleHRWYWx1ZShjb25maWcuZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSlcclxuICAgIH0sXHJcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcclxuICAgIGlzTnVsbGFibGU6IGNvbmZpZy5maWVsZE1ldGEuaXNOdWxsYWJsZSxcclxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcclxuICAgICAgY29uc3QgaW5uZXIgPSBkZXNlcmlhbGl6ZVRleHRWYWx1ZShkYXRhW2NvbmZpZy5wYXRoXSk7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogJ3VwZGF0ZScsXHJcbiAgICAgICAgaW5uZXIsXHJcbiAgICAgICAgaW5pdGlhbDogaW5uZXJcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZXJpYWxpemU6IHZhbHVlID0+ICh7XHJcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyA/IG51bGwgOiB2YWx1ZS5pbm5lci52YWx1ZVxyXG4gICAgfSksXHJcbiAgICB2YWxpZGF0aW9uLFxyXG4gICAgdmFsaWRhdGU6IHZhbCA9PiB2YWxpZGF0ZSh2YWwsIHZhbGlkYXRpb24sIGNvbmZpZy5sYWJlbCkubGVuZ3RoID09PSAwLFxyXG4gICAgZmlsdGVyOiB7XHJcbiAgICAgIEZpbHRlcihwcm9wcykge1xyXG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XHJcbiAgICAgICAgICBvbkNoYW5nZTogZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHZhbHVlOiBwcm9wcy52YWx1ZSxcclxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcblxyXG4gICAgICBncmFwaHFsOiAoe1xyXG4gICAgICAgIHR5cGUsXHJcbiAgICAgICAgdmFsdWVcclxuICAgICAgfSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGlzTm90ID0gdHlwZS5zdGFydHNXaXRoKCdub3RfJyk7XHJcbiAgICAgICAgY29uc3Qga2V5ID0gdHlwZSA9PT0gJ2lzX2knIHx8IHR5cGUgPT09ICdub3RfaScgPyAnZXF1YWxzJyA6IHR5cGUucmVwbGFjZSgvX2kkLywgJycpLnJlcGxhY2UoJ25vdF8nLCAnJykucmVwbGFjZSgvXyhbYS16XSkvZywgKF8sIGNoYXIpID0+IGNoYXIudG9VcHBlckNhc2UoKSk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyID0ge1xyXG4gICAgICAgICAgW2tleV06IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpc05vdCA/IHtcclxuICAgICAgICAgICAgbm90OiBmaWx0ZXJcclxuICAgICAgICAgIH0gOiBmaWx0ZXIpLCB7fSwge1xyXG4gICAgICAgICAgICBtb2RlOiBjb25maWcuZmllbGRNZXRhLnNob3VsZFVzZU1vZGVJbnNlbnNpdGl2ZSA/ICdpbnNlbnNpdGl2ZScgOiB1bmRlZmluZWRcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfTtcclxuICAgICAgfSxcclxuXHJcbiAgICAgIExhYmVsKHtcclxuICAgICAgICBsYWJlbCxcclxuICAgICAgICB2YWx1ZVxyXG4gICAgICB9KSB7XHJcbiAgICAgICAgcmV0dXJuIGAke2xhYmVsLnRvTG93ZXJDYXNlKCl9OiBcIiR7dmFsdWV9XCJgO1xyXG4gICAgICB9LFxyXG5cclxuICAgICAgdHlwZXM6IHtcclxuICAgICAgICBjb250YWluc19pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0NvbnRhaW5zJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdF9jb250YWluc19pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IGNvbnRhaW4nLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNfaToge1xyXG4gICAgICAgICAgbGFiZWw6ICdJcyBleGFjdGx5JyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIG5vdF9pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0c193aXRoX2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnU3RhcnRzIHdpdGgnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X3N0YXJ0c193aXRoX2k6IHtcclxuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3Qgc3RhcnQgd2l0aCcsXHJcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBlbmRzX3dpdGhfaToge1xyXG4gICAgICAgICAgbGFiZWw6ICdFbmRzIHdpdGgnLFxyXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbm90X2VuZHNfd2l0aF9pOiB7XHJcbiAgICAgICAgICBsYWJlbDogJ0RvZXMgbm90IGVuZCB3aXRoJyxcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XHJcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XHJcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcclxuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcclxuIiwiJ3VzZSBzdHJpY3QnO1xyXG5cclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLnByb2QuanNcIik7XHJcbn0gZWxzZSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMuZGV2LmpzXCIpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XHJcblxyXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcclxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcclxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcclxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xyXG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xyXG52YXIgQ2VsbENvbnRhaW5lciA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbENvbnRhaW5lci00NTMyNTRiNS5janMuZGV2LmpzJyk7XHJcbnZhciBDZWxsTGluayA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbExpbmstNTA5ZmIxNjYuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uJyk7XHJcbnJlcXVpcmUoJ25leHQvbGluaycpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9hc3QnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL2xvYWRpbmcnKTtcclxucmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xyXG5yZXF1aXJlKCdhcG9sbG8tdXBsb2FkLWNsaWVudCcpO1xyXG5yZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xyXG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcclxucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9hZG1pbi1tZXRhLWdyYXBocWwtOWY5YTljMTEuY2pzLmRldi5qcycpO1xyXG5yZXF1aXJlKCduZXh0L3JvdXRlcicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvcG9wb3ZlcicpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uJyk7XHJcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9DaGV2cm9uUmlnaHRJY29uJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvU2lnbm91dEJ1dHRvbi1hY2RiMTU1NC5janMuZGV2LmpzJyk7XHJcbnJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xyXG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbm90aWNlJyk7XHJcbnZhciB1dGlscyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvdXRpbHMtZWZmMWZkMzAuY2pzLmRldi5qcycpO1xyXG52YXIgZGF0ZUZucyA9IHJlcXVpcmUoJ2RhdGUtZm5zJyk7XHJcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcclxucmVxdWlyZSgnZGVjaW1hbC5qcycpO1xyXG5yZXF1aXJlKCdAZ3JhcGhxbC10b29scy9zY2hlbWEnKTtcclxucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHQnKTtcclxucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hJyk7XHJcbnJlcXVpcmUoJ2dyYXBocWwtdHlwZS1qc29uJyk7XHJcbnJlcXVpcmUoJ2dyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzJyk7XHJcbnJlcXVpcmUoJ2dyYXBocWwnKTtcclxucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRoLWNvbnRleHQnKTtcclxuXHJcbmNvbnN0IEZVTExfVElNRV9QQVRURVJOID0gJ0hIOm1tOnNzLlNTUyc7XHJcblxyXG5mdW5jdGlvbiBmb3JtYXRGdWxsVGltZShkYXRlKSB7XHJcbiAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsIEZVTExfVElNRV9QQVRURVJOKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZm9ybWF0VGltZSh0aW1lKSB7XHJcbiAgY29uc3QgZGF0ZSA9IGRhdGVGbnMucGFyc2UodGltZSwgRlVMTF9USU1FX1BBVFRFUk4sIG5ldyBEYXRlKCkpO1xyXG5cclxuICBpZiAoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsIEZVTExfVElNRV9QQVRURVJOKTtcclxuICB9XHJcblxyXG4gIGlmIChkYXRlLmdldFNlY29uZHMoKSAhPT0gMCkge1xyXG4gICAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsICdISDptbTpzcycpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsICdISDptbScpO1xyXG59XHJcbmZ1bmN0aW9uIHBhcnNlVGltZSh0aW1lKSB7XHJcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFsnSDptOnMuU1NTJywgJ0g6bTpzJywgJ0g6bScsICdIJ10pIHtcclxuICAgIGNvbnN0IHBhcnNlZCA9IGRhdGVGbnMucGFyc2UodGltZSwgcGF0dGVybiwgbmV3IERhdGUoKSk7XHJcblxyXG4gICAgaWYgKGRhdGVGbnMuaXNWYWxpZChwYXJzZWQpKSB7XHJcbiAgICAgIHJldHVybiBkYXRlRm5zLmZvcm1hdChwYXJzZWQsIEZVTExfVElNRV9QQVRURVJOKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gY29uc3RydWN0VGltZXN0YW1wKHtcclxuICBkYXRlVmFsdWUsXHJcbiAgdGltZVZhbHVlXHJcbn0pIHtcclxuICByZXR1cm4gbmV3IERhdGUoYCR7ZGF0ZVZhbHVlfVQke3RpbWVWYWx1ZX1gKS50b0lTT1N0cmluZygpO1xyXG59XHJcbmZ1bmN0aW9uIGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSB7XHJcbiAgcmV0dXJuIHtcclxuICAgIGRhdGVWYWx1ZTogZGF0ZUZucy5mb3JtYXRJU08obmV3IERhdGUodmFsdWUpLCB7XHJcbiAgICAgIHJlcHJlc2VudGF0aW9uOiAnZGF0ZSdcclxuICAgIH0pLFxyXG4gICAgdGltZVZhbHVlOiB7XHJcbiAgICAgIGtpbmQ6ICdwYXJzZWQnLFxyXG4gICAgICB2YWx1ZTogZm9ybWF0RnVsbFRpbWUobmV3IERhdGUodmFsdWUpKVxyXG4gICAgfVxyXG4gIH07XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KHZhbHVlKSB7XHJcbiAgaWYgKCF2YWx1ZSkgcmV0dXJuICcnO1xyXG4gIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoKTtcclxufVxyXG5cclxuY29uc3QgRmllbGQgPSAoe1xyXG4gIGZpZWxkLFxyXG4gIHZhbHVlLFxyXG4gIG9uQ2hhbmdlLFxyXG4gIGZvcmNlVmFsaWRhdGlvblxyXG59KSA9PiB7XHJcbiAgdmFyIF92YWx1ZSR2YWx1ZSRkYXRlVmFsdSwgX2ZpZWxkJGZpZWxkTWV0YSRkZWZhO1xyXG5cclxuICBjb25zdCBbdG91Y2hlZEZpcnN0SW5wdXQsIHNldFRvdWNoZWRGaXJzdElucHV0XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHNob3dWYWxpZGF0aW9uID0gdG91Y2hlZEZpcnN0SW5wdXQgJiYgdG91Y2hlZFNlY29uZElucHV0IHx8IGZvcmNlVmFsaWRhdGlvbjtcclxuICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZXMgPSBzaG93VmFsaWRhdGlvbiA/IHZhbGlkYXRlKHZhbHVlLCBmaWVsZC5maWVsZE1ldGEsIGZpZWxkLmxhYmVsKSA6IHVuZGVmaW5lZDtcclxuICBjb25zdCB0aW1lSW5wdXRQcm9wcyA9IHV0aWxzLnVzZUZvcm1hdHRlZElucHV0KHtcclxuICAgIGZvcm1hdCh7XHJcbiAgICAgIHZhbHVlXHJcbiAgICB9KSB7XHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZvcm1hdFRpbWUodmFsdWUpO1xyXG4gICAgfSxcclxuXHJcbiAgICBwYXJzZSh2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcclxuXHJcbiAgICAgIGlmICh2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ3BhcnNlZCcsXHJcbiAgICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVGltZSh2YWx1ZSk7XHJcblxyXG4gICAgICBpZiAocGFyc2VkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAga2luZDogJ3BhcnNlZCcsXHJcbiAgICAgICAgICB2YWx1ZTogcGFyc2VkXHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICB9LCB7XHJcbiAgICB2YWx1ZTogdmFsdWUudmFsdWUudGltZVZhbHVlLFxyXG5cclxuICAgIG9uQ2hhbmdlKHRpbWVWYWx1ZSkge1xyXG4gICAgICBvbkNoYW5nZSA9PT0gbnVsbCB8fCBvbkNoYW5nZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XHJcbiAgICAgICAgdmFsdWU6IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUudmFsdWUpLCB7fSwge1xyXG4gICAgICAgICAgdGltZVZhbHVlXHJcbiAgICAgICAgfSlcclxuICAgICAgfSkpO1xyXG4gICAgfSxcclxuXHJcbiAgICBvbkJsdXIoKSB7XHJcbiAgICAgIHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgfSk7XHJcbiAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwge1xyXG4gICAgYXM6IFwiZmllbGRzZXRcIlxyXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCB7XHJcbiAgICBhczogXCJsZWdlbmRcIlxyXG4gIH0sIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChjb3JlLklubGluZSwge1xyXG4gICAgZ2FwOiBcInNtYWxsXCJcclxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRGF0ZVBpY2tlciwge1xyXG4gICAgb25VcGRhdGU6IGRhdGUgPT4ge1xyXG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgZGF0ZVZhbHVlOiBkYXRlLFxyXG4gICAgICAgICAgdGltZVZhbHVlOiB0eXBlb2YgdmFsdWUudmFsdWUudGltZVZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS52YWx1ZS50aW1lVmFsdWUudmFsdWUgPT09IG51bGwgPyB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogJzAwOjAwOjAwLjAwMCdcclxuICAgICAgICAgIH0gOiB2YWx1ZS52YWx1ZS50aW1lVmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICBvbkNsZWFyOiAoKSA9PiB7XHJcbiAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xyXG4gICAgICAgIHZhbHVlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlLnZhbHVlKSwge30sIHtcclxuICAgICAgICAgIGRhdGVWYWx1ZTogbnVsbFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pKTtcclxuICAgIH0sXHJcbiAgICBvbkJsdXI6ICgpID0+IHNldFRvdWNoZWRGaXJzdElucHV0KHRydWUpLFxyXG4gICAgdmFsdWU6IChfdmFsdWUkdmFsdWUkZGF0ZVZhbHUgPSB2YWx1ZS52YWx1ZS5kYXRlVmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSRkYXRlVmFsdSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlJGRhdGVWYWx1IDogJydcclxuICB9KSwgKHZhbGlkYXRpb25NZXNzYWdlcyA9PT0gbnVsbCB8fCB2YWxpZGF0aW9uTWVzc2FnZXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbGlkYXRpb25NZXNzYWdlcy5kYXRlKSAmJiBjb3JlLmpzeChjb3JlLlRleHQsIHtcclxuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxyXG4gICAgc2l6ZTogXCJzbWFsbFwiXHJcbiAgfSwgdmFsaWRhdGlvbk1lc3NhZ2VzLmRhdGUpKSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goY29yZS5WaXN1YWxseUhpZGRlbiwge1xyXG4gICAgYXM6IFwibGFiZWxcIixcclxuICAgIGh0bWxGb3I6IGAke2ZpZWxkLnBhdGh9LS10aW1lLWlucHV0YFxyXG4gIH0sIGAke2ZpZWxkLmxhYmVsfSB0aW1lIGZpZWxkYCksIGNvcmUuanN4KGZpZWxkcy5UZXh0SW5wdXQsIF9leHRlbmRzKHtcclxuICAgIGlkOiBgJHtmaWVsZC5wYXRofS0tdGltZS1pbnB1dGBcclxuICB9LCB0aW1lSW5wdXRQcm9wcywge1xyXG4gICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXHJcbiAgICBwbGFjZWhvbGRlcjogXCIwMDowMFwiXHJcbiAgfSkpLCAodmFsaWRhdGlvbk1lc3NhZ2VzID09PSBudWxsIHx8IHZhbGlkYXRpb25NZXNzYWdlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGlvbk1lc3NhZ2VzLnRpbWUpICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xyXG4gICAgY29sb3I6IFwicmVkNjAwXCIsXHJcbiAgICBzaXplOiBcInNtYWxsXCJcclxuICB9LCB2YWxpZGF0aW9uTWVzc2FnZXMudGltZSkpKSA6IHZhbHVlLnZhbHVlLmRhdGVWYWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudmFsdWUudGltZVZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS52YWx1ZS50aW1lVmFsdWUudmFsdWUgIT09IG51bGwgJiYgY29yZS5qc3goY29yZS5UZXh0LCBudWxsLCBmb3JtYXRPdXRwdXQoY29uc3RydWN0VGltZXN0YW1wKHtcclxuICAgIGRhdGVWYWx1ZTogdmFsdWUudmFsdWUuZGF0ZVZhbHVlLFxyXG4gICAgdGltZVZhbHVlOiB2YWx1ZS52YWx1ZS50aW1lVmFsdWUudmFsdWVcclxuICB9KSkpLCAodmFsdWUua2luZCA9PT0gJ2NyZWF0ZScgJiYgdHlwZW9mIGZpZWxkLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgIT09ICdzdHJpbmcnICYmICgoX2ZpZWxkJGZpZWxkTWV0YSRkZWZhID0gZmllbGQuZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2ZpZWxkJGZpZWxkTWV0YSRkZWZhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkZmllbGRNZXRhJGRlZmEua2luZCkgPT09ICdub3cnIHx8IGZpZWxkLmZpZWxkTWV0YS51cGRhdGVkQXQpICYmIGNvcmUuanN4KGNvcmUuVGV4dCwgbnVsbCwgXCJXaGVuIHRoaXMgaXRlbSBpcyBzYXZlZCwgdGhpcyBmaWVsZCB3aWxsIGJlIHNldCB0byB0aGUgY3VycmVudCBkYXRlIGFuZCB0aW1lXCIpKSk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgZmllbGRNZXRhLCBsYWJlbCkge1xyXG4gIHZhciBfZmllbGRNZXRhJGRlZmF1bHRWYWw7XHJcblxyXG4gIGNvbnN0IHZhbCA9IHZhbHVlLnZhbHVlO1xyXG4gIGNvbnN0IGhhc0RhdGVWYWx1ZSA9IHZhbC5kYXRlVmFsdWUgIT09IG51bGw7XHJcbiAgY29uc3QgaGFzVGltZVZhbHVlID0gdHlwZW9mIHZhbC50aW1lVmFsdWUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB2YWwudGltZVZhbHVlLnZhbHVlID09PSAnc3RyaW5nJztcclxuICBjb25zdCBpc1ZhbHVlRW1wdHkgPSAhaGFzRGF0ZVZhbHVlICYmICFoYXNUaW1lVmFsdWU7IC8vIGlmIHdlIHJlY2lldmUgbnVsbCBpbml0aWFsbHkgb24gdGhlIGl0ZW0gdmlldyBhbmQgdGhlIGN1cnJlbnQgdmFsdWUgaXMgbnVsbCxcclxuICAvLyB3ZSBzaG91bGQgYWx3YXlzIGFsbG93IHNhdmluZyBpdCBiZWNhdXNlOlxyXG4gIC8vIC0gdGhlIHZhbHVlIG1pZ2h0IGJlIG51bGwgaW4gdGhlIGRhdGFiYXNlIGFuZCB3ZSBkb24ndCB3YW50IHRvIHByZXZlbnQgc2F2aW5nIHRoZSB3aG9sZSBpdGVtIGJlY2F1c2Ugb2YgdGhhdFxyXG4gIC8vIC0gd2UgbWlnaHQgaGF2ZSBudWxsIGJlY2F1c2Ugb2YgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3JcclxuXHJcbiAgaWYgKHZhbHVlLmtpbmQgPT09ICd1cGRhdGUnICYmIHZhbHVlLmluaXRpYWwgPT09IG51bGwgJiYgaXNWYWx1ZUVtcHR5KSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaWYgKHZhbHVlLmtpbmQgPT09ICdjcmVhdGUnICYmIGlzVmFsdWVFbXB0eSAmJiAodHlwZW9mIGZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgPT09ICdvYmplY3QnICYmICgoX2ZpZWxkTWV0YSRkZWZhdWx0VmFsID0gZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2ZpZWxkTWV0YSRkZWZhdWx0VmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGRNZXRhJGRlZmF1bHRWYWwua2luZCkgPT09ICdub3cnIHx8IGZpZWxkTWV0YS51cGRhdGVkQXQpKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH1cclxuXHJcbiAgaWYgKGZpZWxkTWV0YS5pc1JlcXVpcmVkICYmIGlzVmFsdWVFbXB0eSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgZGF0ZTogYCR7bGFiZWx9IGlzIHJlcXVpcmVkYFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGlmIChoYXNEYXRlVmFsdWUgJiYgIWhhc1RpbWVWYWx1ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdGltZTogYCR7bGFiZWx9IHJlcXVpcmVzIGEgdGltZSB0byBiZSBwcm92aWRlZGBcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjb25zdCB0aW1lRXJyb3IgPSB0eXBlb2YgdmFsLnRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgPyBgJHtsYWJlbH0gcmVxdWlyZXMgYSB2YWxpZCB0aW1lIGluIHRoZSBmb3JtYXQgaGg6bW1gIDogdW5kZWZpbmVkO1xyXG5cclxuICBpZiAoaGFzVGltZVZhbHVlICYmICFoYXNEYXRlVmFsdWUpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGRhdGU6IGAke2xhYmVsfSByZXF1aXJlcyBhIGRhdGUgdG8gYmUgc2VsZWN0ZWRgLFxyXG4gICAgICB0aW1lOiB0aW1lRXJyb3JcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBpZiAodGltZUVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICB0aW1lOiB0aW1lRXJyb3JcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5jb25zdCBDZWxsID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkLFxyXG4gIGxpbmtUb1xyXG59KSA9PiB7XHJcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcclxuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goQ2VsbExpbmsuQ2VsbExpbmssIGxpbmtUbywgZm9ybWF0T3V0cHV0KHZhbHVlKSkgOiBjb3JlLmpzeChDZWxsQ29udGFpbmVyLkNlbGxDb250YWluZXIsIG51bGwsIGZvcm1hdE91dHB1dCh2YWx1ZSkpO1xyXG59O1xyXG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcclxuY29uc3QgQ2FyZFZhbHVlID0gKHtcclxuICBpdGVtLFxyXG4gIGZpZWxkXHJcbn0pID0+IHtcclxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBmb3JtYXRPdXRwdXQoaXRlbVtmaWVsZC5wYXRoXSkpO1xyXG59O1xyXG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgcGF0aDogY29uZmlnLnBhdGgsXHJcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxyXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLnBhdGgsXHJcbiAgICBmaWVsZE1ldGE6IGNvbmZpZy5maWVsZE1ldGEsXHJcbiAgICBkZWZhdWx0VmFsdWU6IHtcclxuICAgICAga2luZDogJ2NyZWF0ZScsXHJcbiAgICAgIHZhbHVlOiB0eXBlb2YgY29uZmlnLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgPT09ICdzdHJpbmcnID8gZGVjb25zdHJ1Y3RUaW1lc3RhbXAoY29uZmlnLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUpIDoge1xyXG4gICAgICAgIGRhdGVWYWx1ZTogbnVsbCxcclxuICAgICAgICB0aW1lVmFsdWU6IHtcclxuICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxyXG4gICAgICAgICAgdmFsdWU6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkZXNlcmlhbGl6ZTogZGF0YSA9PiB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAga2luZDogJ3VwZGF0ZScsXHJcbiAgICAgICAgaW5pdGlhbDogZGF0YVtjb25maWcucGF0aF0sXHJcbiAgICAgICAgdmFsdWU6IHZhbHVlID8gZGVjb25zdHJ1Y3RUaW1lc3RhbXAodmFsdWUpIDoge1xyXG4gICAgICAgICAgZGF0ZVZhbHVlOiBudWxsLFxyXG4gICAgICAgICAgdGltZVZhbHVlOiB7XHJcbiAgICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxyXG4gICAgICAgICAgICB2YWx1ZTogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBzZXJpYWxpemU6ICh7XHJcbiAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgZGF0ZVZhbHVlLFxyXG4gICAgICAgIHRpbWVWYWx1ZVxyXG4gICAgICB9XHJcbiAgICB9KSA9PiB7XHJcbiAgICAgIGlmIChkYXRlVmFsdWUgJiYgdHlwZW9mIHRpbWVWYWx1ZSA9PT0gJ29iamVjdCcgJiYgdGltZVZhbHVlLnZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGZvcm1hdHRlZERhdGUgPSBjb25zdHJ1Y3RUaW1lc3RhbXAoe1xyXG4gICAgICAgICAgZGF0ZVZhbHVlLFxyXG4gICAgICAgICAgdGltZVZhbHVlOiB0aW1lVmFsdWUudmFsdWVcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgW2NvbmZpZy5wYXRoXTogZm9ybWF0dGVkRGF0ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHZhbGlkYXRlOiB2YWx1ZSA9PiB2YWxpZGF0ZSh2YWx1ZSwgY29uZmlnLmZpZWxkTWV0YSwgY29uZmlnLmxhYmVsKSA9PT0gdW5kZWZpbmVkXHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xyXG5leHBvcnRzLkNlbGwgPSBDZWxsO1xyXG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XHJcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5wcm9kLmpzXCIpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLmRldi5qc1wiKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnZXRBcHAgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9fX19pbnRlcm5hbC1kby1ub3QtdXNlLXdpbGwtYnJlYWstaW4tcGF0Y2gvYWRtaW4tdWkvcGFnZXMvQXBwJztcblxuaW1wb3J0ICogYXMgdmlldzAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL19fX2ludGVybmFsLWRvLW5vdC11c2Utd2lsbC1icmVhay1pbi1wYXRjaC9hZG1pbi11aS9pZC1maWVsZC12aWV3JztcbmltcG9ydCAqIGFzIHZpZXcxIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3NCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cyc7XG5cbnZhciBhZG1pbkNvbmZpZyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBcHAoe1xuICBsYXp5TWV0YWRhdGFRdWVyeToge1xuICAgIGtpbmQ6ICdEb2N1bWVudCcsXG4gICAgZGVmaW5pdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2tleXN0b25lJyxcbiAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDMwIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhZG1pbk1ldGEnLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogNDggfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdrZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdpc0hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NyZWF0ZVZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE1OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRNb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTU5LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExNywgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA2NSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDQ5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzEsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGZpZWxkVmlld3M6IFt2aWV3MCwgdmlldzEsIHZpZXcyLCB2aWV3MywgdmlldzRdLFxuICBhZG1pbk1ldGFIYXNoOiAnMWdyZjFxaicsXG4gIGFkbWluQ29uZmlnOiBhZG1pbkNvbmZpZyxcbiAgYXBpUGF0aDogJy9hcGkvZ3JhcGhxbCcsXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcclxudmFyIF9yb3V0ZXIxID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xyXG52YXIgX3VzZUludGVyc2VjdGlvbiA9IHJlcXVpcmUoXCIuL3VzZS1pbnRlcnNlY3Rpb25cIik7XHJcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XHJcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG9ialxyXG4gICAgfTtcclxufVxyXG5jb25zdCBwcmVmZXRjaGVkID0ge1xyXG59O1xyXG5mdW5jdGlvbiBwcmVmZXRjaChyb3V0ZXIsIGhyZWYsIGFzLCBvcHRpb25zKSB7XHJcbiAgICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcgfHwgIXJvdXRlcikgcmV0dXJuO1xyXG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xyXG4gICAgLy8gUHJlZmV0Y2ggdGhlIEpTT04gcGFnZSBpZiBhc2tlZCAob25seSBpbiB0aGUgY2xpZW50KVxyXG4gICAgLy8gV2UgbmVlZCB0byBoYW5kbGUgYSBwcmVmZXRjaCBlcnJvciBoZXJlIHNpbmNlIHdlIG1heSBiZVxyXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XHJcbiAgICAvLyB3YW50IHRvIGZvcmNlIG5hdmlnYXRpb24gc2luY2UgdGhpcyBpcyBvbmx5IGEgcHJlZmV0Y2hcclxuICAgIHJvdXRlci5wcmVmZXRjaChocmVmLCBhcywgb3B0aW9ucykuY2F0Y2goKGVycik9PntcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICAvLyByZXRocm93IHRvIHNob3cgaW52YWxpZCBVUkwgZXJyb3JzXHJcbiAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIGNvbnN0IGN1ckxvY2FsZSA9IG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGU7XHJcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxyXG4gICAgcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXSA9IHRydWU7XHJcbn1cclxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XHJcbiAgICBjb25zdCB7IHRhcmdldCAgfSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XHJcbiAgICByZXR1cm4gdGFyZ2V0ICYmIHRhcmdldCAhPT0gJ19zZWxmJyB8fCBldmVudC5tZXRhS2V5IHx8IGV2ZW50LmN0cmxLZXkgfHwgZXZlbnQuc2hpZnRLZXkgfHwgZXZlbnQuYWx0S2V5IHx8IGV2ZW50Lm5hdGl2ZUV2ZW50ICYmIGV2ZW50Lm5hdGl2ZUV2ZW50LndoaWNoID09PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKSB7XHJcbiAgICBjb25zdCB7IG5vZGVOYW1lICB9ID0gZS5jdXJyZW50VGFyZ2V0O1xyXG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XHJcbiAgICAgICAgLy8gaWdub3JlIGNsaWNrIGZvciBicm93c2Vy4oCZcyBkZWZhdWx0IGJlaGF2aW9yXHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gIGF2b2lkIHNjcm9sbCBmb3IgdXJscyB3aXRoIGFuY2hvciByZWZzXHJcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcclxuICAgICAgICBzY3JvbGwgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxyXG4gICAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7XHJcbiAgICAgICAgc2hhbGxvdyxcclxuICAgICAgICBsb2NhbGUsXHJcbiAgICAgICAgc2Nyb2xsXHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBMaW5rKHByb3BzKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRXJyb3IoYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCIgOiAnJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxyXG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHNHdWFyZCA9IHtcclxuICAgICAgICAgICAgaHJlZjogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgY29uc3QgcmVxdWlyZWRQcm9wcyA9IE9iamVjdC5rZXlzKHJlcXVpcmVkUHJvcHNHdWFyZCk7XHJcbiAgICAgICAgcmVxdWlyZWRQcm9wcy5mb3JFYWNoKChrZXkpPT57XHJcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gPT0gbnVsbCB8fCB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHByb3BzW2tleV0gIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiBwcm9wc1trZXldID09PSBudWxsID8gJ251bGwnIDogdHlwZW9mIHByb3BzW2tleV1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcclxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XHJcbiAgICAgICAgICAgIGFzOiB0cnVlLFxyXG4gICAgICAgICAgICByZXBsYWNlOiB0cnVlLFxyXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHNoYWxsb3c6IHRydWUsXHJcbiAgICAgICAgICAgIHBhc3NIcmVmOiB0cnVlLFxyXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcclxuICAgICAgICAgICAgbG9jYWxlOiB0cnVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcclxuICAgICAgICBvcHRpb25hbFByb3BzLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICAgICAgY29uc3QgdmFsVHlwZSA9IHR5cGVvZiBwcm9wc1trZXldO1xyXG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAncmVwbGFjZScgfHwga2V5ID09PSAnc2Nyb2xsJyB8fCBrZXkgPT09ICdzaGFsbG93JyB8fCBrZXkgPT09ICdwYXNzSHJlZicgfHwga2V5ID09PSAncHJlZmV0Y2gnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHNba2V5XSAhPSBudWxsICYmIHZhbFR5cGUgIT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XHJcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcclxuICAgICAgICBjb25zdCBoYXNXYXJuZWQgPSBfcmVhY3QuZGVmYXVsdC51c2VSZWYoZmFsc2UpO1xyXG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ05leHQuanMgYXV0by1wcmVmZXRjaGVzIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdmlld3BvcnQuIFRoZSBwcmVmZXRjaCBhdHRyaWJ1dGUgaXMgbm8gbG9uZ2VyIG5lZWRlZC4gTW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvcHJlZmV0Y2gtdHJ1ZS1kZXByZWNhdGVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZTtcclxuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XHJcbiAgICBjb25zdCB7IGhyZWYgLCBhcyAgfSA9IF9yZWFjdC5kZWZhdWx0LnVzZU1lbW8oKCk9PntcclxuICAgICAgICBjb25zdCBbcmVzb2x2ZWRIcmVmLCByZXNvbHZlZEFzXSA9ICgwLCBfcm91dGVyKS5yZXNvbHZlSHJlZihyb3V0ZXIsIHByb3BzLmhyZWYsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcclxuICAgICAgICAgICAgYXM6IHByb3BzLmFzID8gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuYXMpIDogcmVzb2x2ZWRBcyB8fCByZXNvbHZlZEhyZWZcclxuICAgICAgICB9O1xyXG4gICAgfSwgW1xyXG4gICAgICAgIHJvdXRlcixcclxuICAgICAgICBwcm9wcy5ocmVmLFxyXG4gICAgICAgIHByb3BzLmFzXHJcbiAgICBdKTtcclxuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcclxuICAgIC8vIERlcHJlY2F0ZWQuIFdhcm5pbmcgc2hvd24gYnkgcHJvcFR5cGUgY2hlY2suIElmIHRoZSBjaGlsZHJlbiBwcm92aWRlZCBpcyBhIHN0cmluZyAoPExpbms+ZXhhbXBsZTwvTGluaz4pIHdlIHdyYXAgaXQgaW4gYW4gPGE+IHRhZ1xyXG4gICAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgLy8gVGhpcyB3aWxsIHJldHVybiB0aGUgZmlyc3QgY2hpbGQsIGlmIG11bHRpcGxlIGFyZSBwcm92aWRlZCBpdCB3aWxsIHRocm93IGFuIGVycm9yXHJcbiAgICBsZXQgY2hpbGQ7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE11bHRpcGxlIGNoaWxkcmVuIHdlcmUgcGFzc2VkIHRvIDxMaW5rPiB3aXRoIFxcYGhyZWZcXGAgb2YgXFxgJHtwcm9wcy5ocmVmfVxcYCBidXQgb25seSBvbmUgY2hpbGQgaXMgc3VwcG9ydGVkIGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2xpbmstbXVsdGlwbGUtY2hpbGRyZW5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCIgXFxuT3BlbiB5b3VyIGJyb3dzZXIncyBjb25zb2xlIHRvIHZpZXcgdGhlIENvbXBvbmVudCBzdGFjayB0cmFjZS5cIiA6ICcnKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xyXG4gICAgfVxyXG4gICAgY29uc3QgY2hpbGRSZWYgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZjtcclxuICAgIGNvbnN0IFtzZXRJbnRlcnNlY3Rpb25SZWYsIGlzVmlzaWJsZV0gPSAoMCwgX3VzZUludGVyc2VjdGlvbikudXNlSW50ZXJzZWN0aW9uKHtcclxuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXHJcbiAgICB9KTtcclxuICAgIGNvbnN0IHNldFJlZiA9IF9yZWFjdC5kZWZhdWx0LnVzZUNhbGxiYWNrKChlbCk9PntcclxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xyXG4gICAgICAgIGlmIChjaGlsZFJlZikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNoaWxkUmVmID09PSAnZnVuY3Rpb24nKSBjaGlsZFJlZihlbCk7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkUmVmLmN1cnJlbnQgPSBlbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sIFtcclxuICAgICAgICBjaGlsZFJlZixcclxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcclxuICAgIF0pO1xyXG4gICAgX3JlYWN0LmRlZmF1bHQudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcclxuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGlzUHJlZmV0Y2hlZCA9IHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV07XHJcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcclxuICAgICAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBjdXJMb2NhbGVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIGFzLFxyXG4gICAgICAgIGhyZWYsXHJcbiAgICAgICAgaXNWaXNpYmxlLFxyXG4gICAgICAgIGxvY2FsZSxcclxuICAgICAgICBwLFxyXG4gICAgICAgIHJvdXRlclxyXG4gICAgXSk7XHJcbiAgICBjb25zdCBjaGlsZFByb3BzID0ge1xyXG4gICAgICAgIHJlZjogc2V0UmVmLFxyXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xyXG4gICAgICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uQ2xpY2sgPT09ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xyXG4gICAgICAgIGlmICghKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpIHJldHVybjtcclxuICAgICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcclxuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcclxuICAgIC8vIGRlZmluZWQsIHdlIHNwZWNpZnkgdGhlIGN1cnJlbnQgJ2hyZWYnLCBzbyB0aGF0IHJlcGV0aXRpb24gaXMgbm90IG5lZWRlZCBieSB0aGUgdXNlclxyXG4gICAgaWYgKHByb3BzLnBhc3NIcmVmIHx8IGNoaWxkLnR5cGUgPT09ICdhJyAmJiAhKCdocmVmJyBpbiBjaGlsZC5wcm9wcykpIHtcclxuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xyXG4gICAgICAgIC8vIHdlIG9ubHkgcmVuZGVyIGRvbWFpbiBsb2NhbGVzIGlmIHdlIGFyZSBjdXJyZW50bHkgb24gYSBkb21haW4gbG9jYWxlXHJcbiAgICAgICAgLy8gc28gdGhhdCBsb2NhbGUgbGlua3MgYXJlIHN0aWxsIHZpc2l0YWJsZSBpbiBkZXZlbG9wbWVudC9wcmV2aWV3IGVudnNcclxuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xyXG4gICAgICAgIGNoaWxkUHJvcHMuaHJlZiA9IGxvY2FsZURvbWFpbiB8fCAoMCwgX3JvdXRlcikuYWRkQmFzZVBhdGgoKDAsIF9yb3V0ZXIpLmFkZExvY2FsZShhcywgY3VyTG9jYWxlLCByb3V0ZXIgJiYgcm91dGVyLmRlZmF1bHRMb2NhbGUpKTtcclxuICAgIH1cclxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xyXG59XHJcbnZhciBfZGVmYXVsdCA9IExpbms7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGluay5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gdm9pZCAwO1xyXG5mdW5jdGlvbiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKSB7XHJcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcclxufVxyXG5jb25zdCBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9UUkFJTElOR19TTEFTSCA/IChwYXRoKT0+e1xyXG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpO1xyXG4gICAgfSBlbHNlIGlmIChwYXRoLmVuZHNXaXRoKCcvJykpIHtcclxuICAgICAgICByZXR1cm4gcGF0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGggKyAnLyc7XHJcbiAgICB9XHJcbn0gOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaDtcclxuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSBleHBvcnRzLmNhbmNlbElkbGVDYWxsYmFjayA9IHZvaWQgMDtcclxuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xyXG4gICAgbGV0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcclxuICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNiKHtcclxuICAgICAgICAgICAgZGlkVGltZW91dDogZmFsc2UsXHJcbiAgICAgICAgICAgIHRpbWVSZW1haW5pbmc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LCAxKTtcclxufTtcclxuZXhwb3J0cy5yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWVzdElkbGVDYWxsYmFjaztcclxuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xyXG4gICAgcmV0dXJuIGNsZWFyVGltZW91dChpZCk7XHJcbn07XHJcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XHJcbmV4cG9ydHMuaXNBc3NldEVycm9yID0gaXNBc3NldEVycm9yO1xyXG5leHBvcnRzLmdldENsaWVudEJ1aWxkTWFuaWZlc3QgPSBnZXRDbGllbnRCdWlsZE1hbmlmZXN0O1xyXG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XHJcbnZhciBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZVwiKSk7XHJcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbi8vIDMuOHMgd2FzIGFyYml0cmFyaWx5IGNob3NlbiBhcyBpdCdzIHdoYXQgaHR0cHM6Ly93ZWIuZGV2L2ludGVyYWN0aXZlXHJcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxyXG4vLyB3cm9uZyBiZXlvbmQgdGhpcyBwb2ludCwgYW5kIHRoZW4gZmFsbC1iYWNrIHRvIGEgZnVsbCBwYWdlIHRyYW5zaXRpb24gdG9cclxuLy8gc2hvdyB0aGUgdXNlciBzb21ldGhpbmcgb2YgdmFsdWUuXHJcbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcclxuZnVuY3Rpb24gd2l0aEZ1dHVyZShrZXksIG1hcCwgZ2VuZXJhdG9yKSB7XHJcbiAgICBsZXQgZW50cnkgPSBtYXAuZ2V0KGtleSk7XHJcbiAgICBpZiAoZW50cnkpIHtcclxuICAgICAgICBpZiAoJ2Z1dHVyZScgaW4gZW50cnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LmZ1dHVyZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShlbnRyeSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmVzb2x2ZXI7XHJcbiAgICBjb25zdCBwcm9tID0gbmV3IFByb21pc2UoKHJlc29sdmUpPT57XHJcbiAgICAgICAgcmVzb2x2ZXIgPSByZXNvbHZlO1xyXG4gICAgfSk7XHJcbiAgICBtYXAuc2V0KGtleSwgZW50cnkgPSB7XHJcbiAgICAgICAgcmVzb2x2ZTogcmVzb2x2ZXIsXHJcbiAgICAgICAgZnV0dXJlOiBwcm9tXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBnZW5lcmF0b3IgPyBnZW5lcmF0b3IoKS50aGVuKCh2YWx1ZSk9PihyZXNvbHZlcih2YWx1ZSksIHZhbHVlKVxyXG4gICAgKSA6IHByb207XHJcbn1cclxuZnVuY3Rpb24gaGFzUHJlZmV0Y2gobGluaykge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xyXG4gICAgICAgIHJldHVybigvLyBkZXRlY3QgSUUxMSBzaW5jZSBpdCBzdXBwb3J0cyBwcmVmZXRjaCBidXQgaXNuJ3QgZGV0ZWN0ZWRcclxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxyXG4gICAgICAgICghIXdpbmRvdy5NU0lucHV0TWV0aG9kQ29udGV4dCAmJiAhIWRvY3VtZW50LmRvY3VtZW50TW9kZSkgfHwgbGluay5yZWxMaXN0LnN1cHBvcnRzKCdwcmVmZXRjaCcpKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xyXG5mdW5jdGlvbiBwcmVmZXRjaFZpYURvbShocmVmLCBhcywgbGluaykge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaik9PntcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XHJcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbDpcclxuICAgICAgICBpZiAoYXMpIGxpbmsuYXMgPSBhcztcclxuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XHJcbiAgICAgICAgbGluay5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XHJcbiAgICAgICAgbGluay5vbmxvYWQgPSByZXM7XHJcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xyXG4gICAgICAgIC8vIGBocmVmYCBzaG91bGQgYWx3YXlzIGJlIGxhc3Q6XHJcbiAgICAgICAgbGluay5ocmVmID0gaHJlZjtcclxuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xyXG4gICAgfSk7XHJcbn1cclxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xyXG5mdW5jdGlvbiBtYXJrQXNzZXRFcnJvcihlcnIpIHtcclxuICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXJyLCBBU1NFVF9MT0FEX0VSUk9SLCB7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBpc0Fzc2V0RXJyb3IoZXJyKSB7XHJcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xyXG59XHJcbmZ1bmN0aW9uIGFwcGVuZFNjcmlwdChzcmMsIHNjcmlwdCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgLy8gVGhlIG9yZGVyIG9mIHByb3BlcnR5IGFzc2lnbm1lbnQgaGVyZSBpcyBpbnRlbnRpb25hbC5cclxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XHJcbiAgICAgICAgLy8gICAgZXhlY3V0ZXMgd2hlbiBgc3JjYCBpcyBzZXQuXHJcbiAgICAgICAgc2NyaXB0Lm9ubG9hZCA9IHJlc29sdmU7XHJcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXHJcbiAgICAgICAgO1xyXG4gICAgICAgIC8vIDIuIENvbmZpZ3VyZSB0aGUgY3Jvc3Mtb3JpZ2luIGF0dHJpYnV0ZSBiZWZvcmUgc2V0dGluZyBgc3JjYCBpbiBjYXNlIHRoZVxyXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxyXG4gICAgICAgIHNjcmlwdC5jcm9zc09yaWdpbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9DUk9TU19PUklHSU47XHJcbiAgICAgICAgLy8gMy4gRmluYWxseSwgc2V0IHRoZSBzb3VyY2UgYW5kIGluamVjdCBpbnRvIHRoZSBET00gaW4gY2FzZSB0aGUgY2hpbGRcclxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cclxuICAgICAgICBzY3JpcHQuc3JjID0gc3JjO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcclxuICAgIH0pO1xyXG59XHJcbi8vIFdlIHdhaXQgZm9yIHBhZ2VzIHRvIGJlIGJ1aWx0IGluIGRldiBiZWZvcmUgd2Ugc3RhcnQgdGhlIHJvdXRlIHRyYW5zaXRpb25cclxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXHJcbmxldCBkZXZCdWlsZFByb21pc2U7XHJcbi8vIFJlc29sdmUgYSBwcm9taXNlIHRoYXQgdGltZXMgb3V0IGFmdGVyIGdpdmVuIGFtb3VudCBvZiBtaWxsaXNlY29uZHMuXHJcbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XHJcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHAudGhlbigocik9PntcclxuICAgICAgICAgICAgLy8gUmVzb2x2ZWQsIGNhbmNlbCB0aGUgdGltZW91dFxyXG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXNvbHZlKHIpO1xyXG4gICAgICAgIH0pLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgLy8gV2Ugd3JhcCB0aGVzZSBjaGVja3Mgc2VwYXJhdGVseSBmb3IgYmV0dGVyIGRlYWQtY29kZSBlbGltaW5hdGlvbiBpblxyXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgKGRldkJ1aWxkUHJvbWlzZSB8fCBQcm9taXNlLnJlc29sdmUoKSkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY2FuY2VsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIG1zKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ2RldmVsb3BtZW50Jykge1xyXG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LCBtcylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xyXG4gICAgaWYgKHNlbGYuX19CVUlMRF9NQU5JRkVTVCkge1xyXG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uQnVpbGRNYW5pZmVzdCA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xyXG4gICAgICAgIC8vIE1hbmRhdG9yeSBiZWNhdXNlIHRoaXMgaXMgbm90IGNvbmN1cnJlbnQgc2FmZTpcclxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcclxuICAgICAgICBzZWxmLl9fQlVJTERfTUFOSUZFU1RfQ0IgPSAoKT0+e1xyXG4gICAgICAgICAgICByZXNvbHZlKHNlbGYuX19CVUlMRF9NQU5JRkVTVCk7XHJcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xyXG59XHJcbmZ1bmN0aW9uIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHtcclxuICAgICAgICAgICAgc2NyaXB0czogW1xyXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgLy8gU3R5bGVzIGFyZSBoYW5kbGVkIGJ5IGBzdHlsZS1sb2FkZXJgIGluIGRldmVsb3BtZW50OlxyXG4gICAgICAgICAgICBjc3M6IFtdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xyXG4gICAgICAgIGlmICghKHJvdXRlIGluIG1hbmlmZXN0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihuZXcgRXJyb3IoYEZhaWxlZCB0byBsb29rdXAgcm91dGU6ICR7cm91dGV9YCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhbGxGaWxlcyA9IG1hbmlmZXN0W3JvdXRlXS5tYXAoKGVudHJ5KT0+YXNzZXRQcmVmaXggKyAnL19uZXh0LycgKyBlbmNvZGVVUkkoZW50cnkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBzY3JpcHRzOiBhbGxGaWxlcy5maWx0ZXIoKHYpPT52LmVuZHNXaXRoKCcuanMnKVxyXG4gICAgICAgICAgICApLFxyXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfTtcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlTG9hZGVyKGFzc2V0UHJlZml4KSB7XHJcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IGxvYWRlZFNjcmlwdHMgPSBuZXcgTWFwKCk7XHJcbiAgICBjb25zdCBzdHlsZVNoZWV0cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcclxuICAgIGZ1bmN0aW9uIG1heWJlRXhlY3V0ZVNjcmlwdChzcmMpIHtcclxuICAgICAgICBsZXQgcHJvbSA9IGxvYWRlZFNjcmlwdHMuZ2V0KHNyYyk7XHJcbiAgICAgICAgaWYgKHByb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcclxuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3Rvcihgc2NyaXB0W3NyY149XCIke3NyY31cIl1gKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRlZFNjcmlwdHMuc2V0KHNyYywgcHJvbSA9IGFwcGVuZFNjcmlwdChzcmMpKTtcclxuICAgICAgICByZXR1cm4gcHJvbTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZldGNoU3R5bGVTaGVldChocmVmKSB7XHJcbiAgICAgICAgbGV0IHByb20gPSBzdHlsZVNoZWV0cy5nZXQoaHJlZik7XHJcbiAgICAgICAgaWYgKHByb20pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHByb207XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xyXG4gICAgICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdHlsZXNoZWV0OiAke2hyZWZ9YCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlcy50ZXh0KCkudGhlbigodGV4dCk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogaHJlZixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKGVycik7XHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHJldHVybiBwcm9tO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIGVudHJ5cG9pbnRzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKGV4ZWN1dGUpLnRoZW4oKGZuKT0+Zm4oKVxyXG4gICAgICAgICAgICApLnRoZW4oKGV4cG9ydHMpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcclxuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiBleHBvcnRzXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGQgPSBlbnRyeXBvaW50cy5nZXQocm91dGUpO1xyXG4gICAgICAgICAgICAgICAgZW50cnlwb2ludHMuc2V0KHJvdXRlLCBpbnB1dCk7XHJcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2l0aEZ1dHVyZShyb3V0ZSwgcm91dGVzLCAoKT0+e1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVGaWxlc1Byb21pc2UgPSBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigoeyBzY3JpcHRzICwgY3NzICB9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5cG9pbnRzLmhhcyhyb3V0ZSkgPyBbXSA6IFByb21pc2UuYWxsKHNjcmlwdHMubWFwKG1heWJlRXhlY3V0ZVNjcmlwdCkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChjc3MubWFwKGZldGNoU3R5bGVTaGVldCkpLCBcclxuICAgICAgICAgICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy53aGVuRW50cnlwb2ludChyb3V0ZSkudGhlbigoZW50cnlwb2ludCk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiByZXNbMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJvdXRlRmlsZXNQcm9taXNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGVGaWxlc1Byb21pc2UuZmluYWxseSgoKT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVByb21pc2VXaXRoVGltZW91dChyb3V0ZUZpbGVzUHJvbWlzZSwgTVNfTUFYX0lETEVfREVMQVksIG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgUm91dGUgZGlkIG5vdCBjb21wbGV0ZSBsb2FkaW5nOiAke3JvdXRlfWApKSkudGhlbigoeyBlbnRyeXBvaW50ICwgc3R5bGVzICB9KT0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXM6IHN0eWxlc1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIGVudHJ5cG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKGVycik9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJlZmV0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IGVycjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZUxhYnMvcXVpY2tsaW5rL2Jsb2IvNDUzYTY2MWZhMWZhOTQwZTJkMmUwNDQ0NTIzOThlMzhjNjdhOThmYi9zcmMvaW5kZXgubWpzI0wxMTUtTDExOFxyXG4gICAgICAgICAgICAvLyBMaWNlbnNlOiBBcGFjaGUgMi4wXHJcbiAgICAgICAgICAgIGxldCBjbjtcclxuICAgICAgICAgICAgaWYgKGNuID0gbmF2aWdhdG9yLmNvbm5lY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIERvbid0IHByZWZldGNoIGlmIHVzaW5nIDJHIG9yIGlmIFNhdmUtRGF0YSBpcyBlbmFibGVkLlxyXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBnZXRGaWxlc0ZvclJvdXRlKGFzc2V0UHJlZml4LCByb3V0ZSkudGhlbigob3V0cHV0KT0+UHJvbWlzZS5hbGwoY2FuUHJlZmV0Y2ggPyBvdXRwdXQuc2NyaXB0cy5tYXAoKHNjcmlwdCk9PnByZWZldGNoVmlhRG9tKHNjcmlwdCwgJ3NjcmlwdCcpXHJcbiAgICAgICAgICAgICAgICApIDogW10pXHJcbiAgICAgICAgICAgICkudGhlbigoKT0+e1xyXG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT50aGlzLmxvYWRSb3V0ZShyb3V0ZSwgdHJ1ZSkuY2F0Y2goKCk9PntcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goLy8gc3dhbGxvdyBwcmVmZXRjaCBlcnJvcnNcclxuICAgICAgICAgICAgKCk9PntcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJSb3V0ZXJcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdDtcclxuICAgIH1cclxufSk7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIndpdGhSb3V0ZXJcIiwge1xyXG4gICAgZW51bWVyYWJsZTogdHJ1ZSxcclxuICAgIGdldDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIF93aXRoUm91dGVyLmRlZmF1bHQ7XHJcbiAgICB9XHJcbn0pO1xyXG5leHBvcnRzLnVzZVJvdXRlciA9IHVzZVJvdXRlcjtcclxuZXhwb3J0cy5jcmVhdGVSb3V0ZXIgPSBjcmVhdGVSb3V0ZXI7XHJcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xyXG5leHBvcnRzLmRlZmF1bHQgPSB2b2lkIDA7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcclxudmFyIF9yb3V0ZXJDb250ZXh0ID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHRcIik7XHJcbnZhciBfd2l0aFJvdXRlciA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vd2l0aC1yb3V0ZXJcIikpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuY29uc3Qgc2luZ2xldG9uUm91dGVyID0ge1xyXG4gICAgcm91dGVyOiBudWxsLFxyXG4gICAgcmVhZHlDYWxsYmFja3M6IFtdLFxyXG4gICAgcmVhZHkgKGNiKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcclxuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWFkeUNhbGxiYWNrcy5wdXNoKGNiKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcclxuY29uc3QgdXJsUHJvcGVydHlGaWVsZHMgPSBbXHJcbiAgICAncGF0aG5hbWUnLFxyXG4gICAgJ3JvdXRlJyxcclxuICAgICdxdWVyeScsXHJcbiAgICAnYXNQYXRoJyxcclxuICAgICdjb21wb25lbnRzJyxcclxuICAgICdpc0ZhbGxiYWNrJyxcclxuICAgICdiYXNlUGF0aCcsXHJcbiAgICAnbG9jYWxlJyxcclxuICAgICdsb2NhbGVzJyxcclxuICAgICdkZWZhdWx0TG9jYWxlJyxcclxuICAgICdpc1JlYWR5JyxcclxuICAgICdpc1ByZXZpZXcnLFxyXG4gICAgJ2lzTG9jYWxlRG9tYWluJyxcclxuICAgICdkb21haW5Mb2NhbGVzJywgXHJcbl07XHJcbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcclxuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcclxuICAgICdiZWZvcmVIaXN0b3J5Q2hhbmdlJyxcclxuICAgICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcclxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcclxuICAgICdoYXNoQ2hhbmdlU3RhcnQnLFxyXG4gICAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsIFxyXG5dO1xyXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xyXG4gICAgJ3B1c2gnLFxyXG4gICAgJ3JlcGxhY2UnLFxyXG4gICAgJ3JlbG9hZCcsXHJcbiAgICAnYmFjaycsXHJcbiAgICAncHJlZmV0Y2gnLFxyXG4gICAgJ2JlZm9yZVBvcFN0YXRlJywgXHJcbl07XHJcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcclxuICAgIGdldCAoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XHJcbiAgICB9XHJcbn0pO1xyXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcclxuICAgIC8vIEhlcmUgd2UgbmVlZCB0byB1c2UgT2JqZWN0LmRlZmluZVByb3BlcnR5IGJlY2F1c2Ugd2UgbmVlZCB0byByZXR1cm5cclxuICAgIC8vIHRoZSBwcm9wZXJ0eSBhc3NpZ25lZCB0byB0aGUgYWN0dWFsIHJvdXRlclxyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXHJcbiAgICAvLyBwcm9wZXIgd2F5IHRvIGFjY2VzcyBpdFxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgZmllbGQsIHtcclxuICAgICAgICBnZXQgKCkge1xyXG4gICAgICAgICAgICBjb25zdCByb3V0ZXIgPSBnZXRSb3V0ZXIoKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlcltmaWVsZF07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xyXG4gICAgc2luZ2xldG9uUm91dGVyW2ZpZWxkXSA9ICguLi5hcmdzKT0+e1xyXG4gICAgICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpO1xyXG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgfTtcclxufSk7XHJcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcclxuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeSgoKT0+e1xyXG4gICAgICAgIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKT0+e1xyXG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xyXG4gICAgICAgICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyO1xyXG4gICAgICAgICAgICBpZiAoX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSkge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufSk7XHJcbmZ1bmN0aW9uIGdldFJvdXRlcigpIHtcclxuICAgIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XHJcbn1cclxudmFyIF9kZWZhdWx0ID0gc2luZ2xldG9uUm91dGVyO1xyXG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcclxuZnVuY3Rpb24gdXNlUm91dGVyKCkge1xyXG4gICAgcmV0dXJuIF9yZWFjdC5kZWZhdWx0LnVzZUNvbnRleHQoX3JvdXRlckNvbnRleHQuUm91dGVyQ29udGV4dCk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlUm91dGVyKC4uLmFyZ3MpIHtcclxuICAgIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgX3JvdXRlci5kZWZhdWx0KC4uLmFyZ3MpO1xyXG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxyXG4gICAgKTtcclxuICAgIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcyA9IFtdO1xyXG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XHJcbn1cclxuZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcikge1xyXG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XHJcbiAgICBjb25zdCBpbnN0YW5jZSA9IHtcclxuICAgIH07XHJcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcclxuICAgICAgICBpZiAodHlwZW9mIF9yb3V0ZXIxW3Byb3BlcnR5XSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gT2JqZWN0LmFzc2lnbihBcnJheS5pc0FycmF5KF9yb3V0ZXIxW3Byb3BlcnR5XSkgPyBbXSA6IHtcclxuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxyXG4gICAgICAgICAgICA7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBfcm91dGVyMVtwcm9wZXJ0eV07XHJcbiAgICB9XHJcbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XHJcbiAgICBpbnN0YW5jZS5ldmVudHMgPSBfcm91dGVyLmRlZmF1bHQuZXZlbnRzO1xyXG4gICAgY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcclxuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcclxuICAgICAgICAgICAgcmV0dXJuIF9yb3V0ZXIxW2ZpZWxkXSguLi5hcmdzKTtcclxuICAgICAgICB9O1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XHJcbiAgICB2YWx1ZTogdHJ1ZVxyXG59KTtcclxuZXhwb3J0cy51c2VJbnRlcnNlY3Rpb24gPSB1c2VJbnRlcnNlY3Rpb247XHJcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XHJcbnZhciBfcmVxdWVzdElkbGVDYWxsYmFjayA9IHJlcXVpcmUoXCIuL3JlcXVlc3QtaWRsZS1jYWxsYmFja1wiKTtcclxuY29uc3QgaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgPSB0eXBlb2YgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgIT09ICd1bmRlZmluZWQnO1xyXG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcclxuICAgIGNvbnN0IGlzRGlzYWJsZWQgPSBkaXNhYmxlZCB8fCAhaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXI7XHJcbiAgICBjb25zdCB1bm9ic2VydmUgPSAoMCwgX3JlYWN0KS51c2VSZWYoKTtcclxuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IHNldFJlZiA9ICgwLCBfcmVhY3QpLnVzZUNhbGxiYWNrKChlbCk9PntcclxuICAgICAgICBpZiAodW5vYnNlcnZlLmN1cnJlbnQpIHtcclxuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcclxuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcclxuICAgICAgICBpZiAoZWwgJiYgZWwudGFnTmFtZSkge1xyXG4gICAgICAgICAgICB1bm9ic2VydmUuY3VycmVudCA9IG9ic2VydmUoZWwsIChpc1Zpc2libGUpPT5pc1Zpc2libGUgJiYgc2V0VmlzaWJsZShpc1Zpc2libGUpXHJcbiAgICAgICAgICAgICwge1xyXG4gICAgICAgICAgICAgICAgcm9vdE1hcmdpblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9LCBbXHJcbiAgICAgICAgaXNEaXNhYmxlZCxcclxuICAgICAgICByb290TWFyZ2luLFxyXG4gICAgICAgIHZpc2libGVcclxuICAgIF0pO1xyXG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XHJcbiAgICAgICAgaWYgKCFoYXNJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xyXG4gICAgICAgICAgICBpZiAoIXZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAoKT0+KDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5jYW5jZWxJZGxlQ2FsbGJhY2soaWRsZUNhbGxiYWNrKVxyXG4gICAgICAgICAgICAgICAgO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSwgW1xyXG4gICAgICAgIHZpc2libGVcclxuICAgIF0pO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBzZXRSZWYsXHJcbiAgICAgICAgdmlzaWJsZVxyXG4gICAgXTtcclxufVxyXG5mdW5jdGlvbiBvYnNlcnZlKGVsZW1lbnQsIGNhbGxiYWNrLCBvcHRpb25zKSB7XHJcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xyXG4gICAgZWxlbWVudHMuc2V0KGVsZW1lbnQsIGNhbGxiYWNrKTtcclxuICAgIG9ic2VydmVyLm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xyXG4gICAgICAgIGVsZW1lbnRzLmRlbGV0ZShlbGVtZW50KTtcclxuICAgICAgICBvYnNlcnZlci51bm9ic2VydmUoZWxlbWVudCk7XHJcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxyXG4gICAgICAgIGlmIChlbGVtZW50cy5zaXplID09PSAwKSB7XHJcbiAgICAgICAgICAgIG9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcclxuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5jb25zdCBvYnNlcnZlcnMgPSBuZXcgTWFwKCk7XHJcbmZ1bmN0aW9uIGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpIHtcclxuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xyXG4gICAgbGV0IGluc3RhbmNlID0gb2JzZXJ2ZXJzLmdldChpZCk7XHJcbiAgICBpZiAoaW5zdGFuY2UpIHtcclxuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCBlbGVtZW50cyA9IG5ldyBNYXAoKTtcclxuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xyXG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZWxlbWVudHMuZ2V0KGVudHJ5LnRhcmdldCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soaXNWaXNpYmxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcclxuICAgICAgICBpZCxcclxuICAgICAgICBvYnNlcnZlcixcclxuICAgICAgICBlbGVtZW50c1xyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gaW5zdGFuY2U7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVzZS1pbnRlcnNlY3Rpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xyXG4gICAgdmFsdWU6IHRydWVcclxufSk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XHJcbnZhciBfcmVhY3QgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7XHJcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4vcm91dGVyXCIpO1xyXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcclxuICAgICAgICBkZWZhdWx0OiBvYmpcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gd2l0aFJvdXRlcihDb21wb3NlZENvbXBvbmVudCkge1xyXG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcclxuICAgICAgICByZXR1cm4oLyojX19QVVJFX18qLyBfcmVhY3QuZGVmYXVsdC5jcmVhdGVFbGVtZW50KENvbXBvc2VkQ29tcG9uZW50LCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgcm91dGVyOiAoMCwgX3JvdXRlcikudXNlUm91dGVyKClcclxuICAgICAgICB9LCBwcm9wcykpKTtcclxuICAgIH1cclxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmdldEluaXRpYWxQcm9wcyA9IENvbXBvc2VkQ29tcG9uZW50LmdldEluaXRpYWxQcm9wcztcclxuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gQ29tcG9zZWRDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9zZWRDb21wb25lbnQubmFtZSB8fCAnVW5rbm93bic7XHJcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXI7XHJcbn1cclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXdpdGgtcm91dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcclxuICAgIHZhbHVlOiB0cnVlXHJcbn0pO1xyXG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcclxuZXhwb3J0cy5hZGRMb2NhbGUgPSBhZGRMb2NhbGU7XHJcbmV4cG9ydHMuZGVsTG9jYWxlID0gZGVsTG9jYWxlO1xyXG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XHJcbmV4cG9ydHMuYWRkQmFzZVBhdGggPSBhZGRCYXNlUGF0aDtcclxuZXhwb3J0cy5kZWxCYXNlUGF0aCA9IGRlbEJhc2VQYXRoO1xyXG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xyXG5leHBvcnRzLmludGVycG9sYXRlQXMgPSBpbnRlcnBvbGF0ZUFzO1xyXG5leHBvcnRzLnJlc29sdmVIcmVmID0gcmVzb2x2ZUhyZWY7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcclxudmFyIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoID0gcmVxdWlyZShcIi4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2hcIik7XHJcbnZhciBfcm91dGVMb2FkZXIgPSByZXF1aXJlKFwiLi4vLi4vLi4vY2xpZW50L3JvdXRlLWxvYWRlclwiKTtcclxudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XHJcbnZhciBfbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoXCIuLi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aFwiKTtcclxudmFyIF9taXR0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vbWl0dFwiKSk7XHJcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XHJcbnZhciBfaXNEeW5hbWljID0gcmVxdWlyZShcIi4vdXRpbHMvaXMtZHluYW1pY1wiKTtcclxudmFyIF9wYXJzZVJlbGF0aXZlVXJsID0gcmVxdWlyZShcIi4vdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsXCIpO1xyXG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XHJcbnZhciBfcmVzb2x2ZVJld3JpdGVzID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi91dGlscy9yZXNvbHZlLXJld3JpdGVzXCIpKTtcclxudmFyIF9yb3V0ZU1hdGNoZXIgPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1tYXRjaGVyXCIpO1xyXG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcclxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcclxuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XHJcbiAgICAgICAgZGVmYXVsdDogb2JqXHJcbiAgICB9O1xyXG59XHJcbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XHJcbmlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICBkZXRlY3REb21haW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9pMThuL2RldGVjdC1kb21haW4tbG9jYWxlJykuZGV0ZWN0RG9tYWluTG9jYWxlO1xyXG59XHJcbmNvbnN0IGJhc2VQYXRoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1JPVVRFUl9CQVNFUEFUSCB8fCAnJztcclxuZnVuY3Rpb24gYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpIHtcclxuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcclxuICAgICAgICBjYW5jZWxsZWQ6IHRydWVcclxuICAgIH0pO1xyXG59XHJcbmZ1bmN0aW9uIGFkZFBhdGhQcmVmaXgocGF0aCwgcHJlZml4KSB7XHJcbiAgICByZXR1cm4gcHJlZml4ICYmIHBhdGguc3RhcnRzV2l0aCgnLycpID8gcGF0aCA9PT0gJy8nID8gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpIDogYCR7cHJlZml4fSR7cGF0aE5vUXVlcnlIYXNoKHBhdGgpID09PSAnLycgPyBwYXRoLnN1YnN0cmluZygxKSA6IHBhdGh9YCA6IHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RG9tYWluTG9jYWxlKHBhdGgsIGxvY2FsZSwgbG9jYWxlcywgZG9tYWluTG9jYWxlcykge1xyXG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcclxuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xyXG4gICAgICAgIGNvbnN0IGRldGVjdGVkRG9tYWluID0gZGV0ZWN0RG9tYWluTG9jYWxlKGRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgbG9jYWxlKTtcclxuICAgICAgICBpZiAoZGV0ZWN0ZWREb21haW4pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRMb2NhbGUocGF0aCwgbG9jYWxlLCBkZWZhdWx0TG9jYWxlKSB7XHJcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xyXG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgY29uc3QgbG9jYWxlTG93ZXIgPSBsb2NhbGUgJiYgbG9jYWxlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG59XHJcbmZ1bmN0aW9uIGRlbExvY2FsZShwYXRoLCBsb2NhbGUpIHtcclxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XHJcbiAgICAgICAgY29uc3QgcGF0aExvd2VyID0gcGF0aG5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5mdW5jdGlvbiBwYXRoTm9RdWVyeUhhc2gocGF0aCkge1xyXG4gICAgY29uc3QgcXVlcnlJbmRleCA9IHBhdGguaW5kZXhPZignPycpO1xyXG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XHJcbiAgICBpZiAocXVlcnlJbmRleCA+IC0xIHx8IGhhc2hJbmRleCA+IC0xKSB7XHJcbiAgICAgICAgcGF0aCA9IHBhdGguc3Vic3RyaW5nKDAsIHF1ZXJ5SW5kZXggPiAtMSA/IHF1ZXJ5SW5kZXggOiBoYXNoSW5kZXgpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGhOb1F1ZXJ5SGFzaChwYXRoKTtcclxuICAgIHJldHVybiBwYXRoID09PSBiYXNlUGF0aCB8fCBwYXRoLnN0YXJ0c1dpdGgoYmFzZVBhdGggKyAnLycpO1xyXG59XHJcbmZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGgpIHtcclxuICAgIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXHJcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XHJcbn1cclxuZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aCkge1xyXG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcclxuICAgIGlmICghcGF0aC5zdGFydHNXaXRoKCcvJykpIHBhdGggPSBgLyR7cGF0aH1gO1xyXG4gICAgcmV0dXJuIHBhdGg7XHJcbn1cclxuZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmwpIHtcclxuICAgIC8vIHByZXZlbnQgYSBoeWRyYXRpb24gbWlzbWF0Y2ggb24gaHJlZiBmb3IgdXJsIHdpdGggYW5jaG9yIHJlZnNcclxuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIC8vIGFic29sdXRlIHVybHMgY2FuIGJlIGxvY2FsIGlmIHRoZXkgYXJlIG9uIHRoZSBzYW1lIG9yaWdpblxyXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbik7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkLm9yaWdpbiA9PT0gbG9jYXRpb25PcmlnaW4gJiYgaGFzQmFzZVBhdGgocmVzb2x2ZWQucGF0aG5hbWUpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeSkge1xyXG4gICAgbGV0IGludGVycG9sYXRlZFJvdXRlID0gJyc7XHJcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xyXG4gICAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHM7XHJcbiAgICBjb25zdCBkeW5hbWljTWF0Y2hlcyA9IC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcclxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcclxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cclxuICAgIHF1ZXJ5O1xyXG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcclxuICAgIGNvbnN0IHBhcmFtcyA9IE9iamVjdC5rZXlzKGR5bmFtaWNHcm91cHMpO1xyXG4gICAgaWYgKCFwYXJhbXMuZXZlcnkoKHBhcmFtKT0+e1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcclxuICAgICAgICBjb25zdCB7IHJlcGVhdCAsIG9wdGlvbmFsICB9ID0gZHluYW1pY0dyb3Vwc1twYXJhbV07XHJcbiAgICAgICAgLy8gc3VwcG9ydCBzaW5nbGUtbGV2ZWwgY2F0Y2gtYWxsXHJcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxyXG4gICAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWA7XHJcbiAgICAgICAgaWYgKG9wdGlvbmFsKSB7XHJcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZXBlYXQgJiYgIUFycmF5LmlzQXJyYXkodmFsdWUpKSB2YWx1ZSA9IFtcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICBdO1xyXG4gICAgICAgIHJldHVybiAob3B0aW9uYWwgfHwgcGFyYW0gaW4gZHluYW1pY01hdGNoZXMpICYmIC8vIEludGVycG9sYXRlIGdyb3VwIGludG8gZGF0YSBVUkwgaWYgcHJlc2VudFxyXG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XHJcbiAgICAgICAgLy8gcGF0aCBkZWxpbWl0ZXIgZXNjYXBlZCBzaW5jZSB0aGV5IGFyZSBiZWluZyBpbnNlcnRlZFxyXG4gICAgICAgIC8vIGludG8gdGhlIFVSTCBhbmQgd2UgZXhwZWN0IFVSTCBlbmNvZGVkIHNlZ21lbnRzXHJcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXHJcbiAgICAgICAgKHNlZ21lbnQpPT5lbmNvZGVVUklDb21wb25lbnQoc2VnbWVudClcclxuICAgICAgICApLmpvaW4oJy8nKSA6IGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpIHx8ICcvJyk7XHJcbiAgICB9KSkge1xyXG4gICAgICAgIGludGVycG9sYXRlZFJvdXRlID0gJycgLy8gZGlkIG5vdCBzYXRpc2Z5IGFsbCByZXF1aXJlbWVudHNcclxuICAgICAgICA7XHJcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxyXG4gICAgLy8gZGV2ZWxvcG1lbnQgaW4gdGhlIGA8TGluaz5gIGNvbXBvbmVudCBkaXJlY3RseS5cclxuICAgIH1cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGVcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpIHtcclxuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XHJcbiAgICB9O1xyXG4gICAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSk9PntcclxuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV07XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gZmlsdGVyZWRRdWVyeTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xyXG4gICAgLy8gd2UgdXNlIGEgZHVtbXkgYmFzZSB1cmwgZm9yIHJlbGF0aXZlIHVybHNcclxuICAgIGxldCBiYXNlO1xyXG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xyXG4gICAgLy8gcmVwZWF0ZWQgc2xhc2hlcyBhbmQgYmFja3NsYXNoZXMgaW4gdGhlIFVSTCBhcmUgY29uc2lkZXJlZFxyXG4gICAgLy8gaW52YWxpZCBhbmQgd2lsbCBuZXZlciBtYXRjaCBhIE5leHQuanMgcGFnZS9maWxlXHJcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XHJcbiAgICBjb25zdCB1cmxBc1N0cmluZ05vUHJvdG8gPSB1cmxQcm90b01hdGNoID8gdXJsQXNTdHJpbmcuc3Vic3RyKHVybFByb3RvTWF0Y2hbMF0ubGVuZ3RoKSA6IHVybEFzU3RyaW5nO1xyXG4gICAgY29uc3QgdXJsUGFydHMgPSB1cmxBc1N0cmluZ05vUHJvdG8uc3BsaXQoJz8nKTtcclxuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIGhyZWYgcGFzc2VkIHRvIG5leHQvcm91dGVyOiAke3VybEFzU3RyaW5nfSwgcmVwZWF0ZWQgZm9yd2FyZC1zbGFzaGVzICgvLykgb3IgYmFja3NsYXNoZXMgXFxcXCBhcmUgbm90IHZhbGlkIGluIHRoZSBocmVmYCk7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFVybCA9ICgwLCBfdXRpbHMpLm5vcm1hbGl6ZVJlcGVhdGVkU2xhc2hlcyh1cmxBc1N0cmluZ05vUHJvdG8pO1xyXG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcclxuICAgIH1cclxuICAgIC8vIFJldHVybiBiZWNhdXNlIGl0IGNhbm5vdCBiZSByb3V0ZWQgYnkgdGhlIE5leHQuanMgcm91dGVyXHJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XHJcbiAgICAgICAgcmV0dXJuIHJlc29sdmVBcyA/IFtcclxuICAgICAgICAgICAgdXJsQXNTdHJpbmdcclxuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xyXG4gICAgfSBjYXRjaCAoXykge1xyXG4gICAgICAgIC8vIGZhbGxiYWNrIHRvIC8gZm9yIGludmFsaWQgYXNQYXRoIHZhbHVlcyBlLmcuIC8vXHJcbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcclxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkubm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2goZmluYWxVcmwucGF0aG5hbWUpO1xyXG4gICAgICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnO1xyXG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcclxuICAgICAgICAgICAgY29uc3QgcXVlcnkgPSAoMCwgX3F1ZXJ5c3RyaW5nKS5zZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KGZpbmFsVXJsLnNlYXJjaFBhcmFtcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcmVzdWx0ICwgcGFyYW1zICB9ID0gaW50ZXJwb2xhdGVBcyhmaW5hbFVybC5wYXRobmFtZSwgZmluYWxVcmwucGF0aG5hbWUsIHF1ZXJ5KTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbih7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcclxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmIHRoZSBvcmlnaW4gZGlkbid0IGNoYW5nZSwgaXQgbWVhbnMgd2UgcmVjZWl2ZWQgYSByZWxhdGl2ZSBocmVmXHJcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xyXG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXHJcbiAgICAgICAgICAgIHJlc29sdmVkSHJlZixcclxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXHJcbiAgICAgICAgXSA6IHJlc29sdmVkSHJlZjtcclxuICAgIH0gY2F0Y2ggKF8pIHtcclxuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xyXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xyXG4gICAgICAgIF0gOiB1cmxBc1N0cmluZztcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHJpcE9yaWdpbih1cmwpIHtcclxuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XHJcbiAgICByZXR1cm4gdXJsLnN0YXJ0c1dpdGgob3JpZ2luKSA/IHVybC5zdWJzdHJpbmcob3JpZ2luLmxlbmd0aCkgOiB1cmw7XHJcbn1cclxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xyXG4gICAgLy8gSWYgdXJsIGFuZCBhcyBwcm92aWRlZCBhcyBhbiBvYmplY3QgcmVwcmVzZW50YXRpb24sXHJcbiAgICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxyXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xyXG4gICAgY29uc3Qgb3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcclxuICAgIGNvbnN0IGhyZWZIYWRPcmlnaW4gPSByZXNvbHZlZEhyZWYuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xyXG4gICAgcmVzb2x2ZWRIcmVmID0gc3RyaXBPcmlnaW4ocmVzb2x2ZWRIcmVmKTtcclxuICAgIHJlc29sdmVkQXMgPSByZXNvbHZlZEFzID8gc3RyaXBPcmlnaW4ocmVzb2x2ZWRBcykgOiByZXNvbHZlZEFzO1xyXG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcclxuICAgIGNvbnN0IHByZXBhcmVkQXMgPSBhcyA/IHN0cmlwT3JpZ2luKHJlc29sdmVIcmVmKHJvdXRlciwgYXMpKSA6IHJlc29sdmVkQXMgfHwgcmVzb2x2ZWRIcmVmO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxyXG4gICAgICAgIGFzOiBhc0hhZE9yaWdpbiA/IHByZXBhcmVkQXMgOiBhZGRCYXNlUGF0aChwcmVwYXJlZEFzKVxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lLCBwYWdlcykge1xyXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goKDAsIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoKS5kZW5vcm1hbGl6ZVBhZ2VQYXRoKHBhdGhuYW1lKSk7XHJcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgIHJldHVybiBwYXRobmFtZTtcclxuICAgIH1cclxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcclxuICAgIGlmICghcGFnZXMuaW5jbHVkZXMoY2xlYW5QYXRobmFtZSkpIHtcclxuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXHJcbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcclxuICAgICAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShwYWdlKSAmJiAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocGFnZSkucmUudGVzdChjbGVhblBhdGhuYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUgPSBwYWdlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKTtcclxufVxyXG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBsZXQgdiA9ICdfX25leHQnO1xyXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcclxuICAgICAgICByZXR1cm4gc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbSh2LCB2KSwgc2Vzc2lvblN0b3JhZ2UucmVtb3ZlSXRlbSh2KSwgdHJ1ZTtcclxuICAgIH0gY2F0Y2ggKG4pIHtcclxuICAgIH1cclxufSgpO1xyXG5jb25zdCBTU0dfREFUQV9OT1RfRk9VTkQgPSBTeW1ib2woJ1NTR19EQVRBX05PVF9GT1VORCcpO1xyXG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcclxuICAgIHJldHVybiBmZXRjaCh1cmwsIHtcclxuICAgICAgICAvLyBDb29raWVzIGFyZSByZXF1aXJlZCB0byBiZSBwcmVzZW50IGZvciBOZXh0LmpzJyBTU0cgXCJQcmV2aWV3IE1vZGVcIi5cclxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cclxuICAgICAgICAvL1xyXG4gICAgICAgIC8vID4gYGZldGNoYCB3b27igJl0IHNlbmQgY29va2llcywgdW5sZXNzIHlvdSBzZXQgdGhlIGNyZWRlbnRpYWxzIGluaXRcclxuICAgICAgICAvLyA+IG9wdGlvbi5cclxuICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRmV0Y2hfQVBJL1VzaW5nX0ZldGNoXHJcbiAgICAgICAgLy9cclxuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxyXG4gICAgICAgIC8vID4gcmVjZWl2aW5nIGNvb2tpZXMsIGFsd2F5cyBzdXBwbHkgdGhlIGBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJ2BcclxuICAgICAgICAvLyA+IG9wdGlvbiBpbnN0ZWFkIG9mIHJlbHlpbmcgb24gdGhlIGRlZmF1bHQuXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXHJcbiAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcclxuICAgIH0pLnRoZW4oKHJlcyk9PntcclxuICAgICAgICBpZiAoIXJlcy5vaykge1xyXG4gICAgICAgICAgICBpZiAoYXR0ZW1wdHMgPiAxICYmIHJlcy5zdGF0dXMgPj0gNTAwKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwNCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKCkudGhlbigoZGF0YSk9PntcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmQ6IFNTR19EQVRBX05PVF9GT1VORFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBGYWlsZWQgdG8gbG9hZCBzdGF0aWMgcHJvcHNgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlcy5qc29uKCk7XHJcbiAgICB9KTtcclxufVxyXG5mdW5jdGlvbiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCBpc1NlcnZlclJlbmRlcikge1xyXG4gICAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnIpPT57XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXHJcbiAgICAgICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcclxuICAgICAgICAvLyBsb29wLlxyXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcclxuICAgICAgICAgICAgKDAsIF9yb3V0ZUxvYWRlcikubWFya0Fzc2V0RXJyb3IoZXJyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgfSk7XHJcbn1cclxuY2xhc3MgUm91dGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKHBhdGhuYW1lMSwgcXVlcnkxLCBhczEsIHsgaW5pdGlhbFByb3BzICwgcGFnZUxvYWRlciAsIEFwcCAsIHdyYXBBcHAgLCBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBlcnI6IGVycjEgLCBzdWJzY3JpcHRpb24gLCBpc0ZhbGxiYWNrICwgbG9jYWxlICwgbG9jYWxlcyAsIGRlZmF1bHRMb2NhbGUgLCBkb21haW5Mb2NhbGVzICwgaXNQcmV2aWV3ICB9KXtcclxuICAgICAgICAvLyBTdGF0aWMgRGF0YSBDYWNoZVxyXG4gICAgICAgIHRoaXMuc2RjID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gSW4tZmxpZ2h0IFNlcnZlciBEYXRhIFJlcXVlc3RzLCBmb3IgZGVkdXBpbmdcclxuICAgICAgICB0aGlzLnNkciA9IHtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuX2lkeCA9IDA7XHJcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZTtcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXHJcbiAgICAgICAgICAgICAgICAvLyAgMS4gV2l0aCBvbGRlciBzYWZhcmkgKDwgOCkgYW5kIG9sZGVyIGNocm9tZSAoPCAzNClcclxuICAgICAgICAgICAgICAgIC8vICAyLiBXaGVuIHRoZSBVUkwgY2hhbmdlZCB3aXRoICNcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICAvLyBJbiB0aGUgYm90aCBjYXNlcywgd2UgZG9uJ3QgbmVlZCB0byBwcm9jZWVkIGFuZCBjaGFuZ2UgdGhlIHJvdXRlLlxyXG4gICAgICAgICAgICAgICAgLy8gKGFzIGl0J3MgYWxyZWFkeSBjaGFuZ2VkKVxyXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXHJcbiAgICAgICAgICAgICAgICAvLyBBY3R1YWxseSwgZm9yICgxKSB3ZSBkb24ndCBuZWVkIHRvIG5vdGhpbmcuIEJ1dCBpdCdzIGhhcmQgdG8gZGV0ZWN0IHRoYXQgZXZlbnQuXHJcbiAgICAgICAgICAgICAgICAvLyBTbywgZG9pbmcgdGhlIGZvbGxvd2luZyBmb3IgKDEpIGRvZXMgbm8gaGFybS5cclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5fX04pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZm9yY2VkU2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCB7IHVybCAsIGFzOiBhczEgLCBvcHRpb25zICwgaWR4ICB9ID0gc3RhdGU7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faWR4ICE9PSBpZHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyB0aGlzLl9pZHgsIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlc3RvcmUgb2xkIHNjcm9sbCBwb3NpdGlvbjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdfX25leHRfc2Nyb2xsXycgKyBpZHgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0gSlNPTi5wYXJzZSh2KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yY2VkU2Nyb2xsID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHg6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAgfSA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xyXG4gICAgICAgICAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcclxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU3NyICYmIGFzMSA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUxID09PSB0aGlzLnBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gSWYgdGhlIGRvd25zdHJlYW0gYXBwbGljYXRpb24gcmV0dXJucyBmYWxzeSwgcmV0dXJuLlxyXG4gICAgICAgICAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgfSwgb3B0aW9ucywge1xyXG4gICAgICAgICAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxyXG4gICAgICAgICAgICB9KSwgZm9yY2VkU2Nyb2xsKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxyXG4gICAgICAgIHRoaXMucm91dGUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLnJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBrZWVwIHRoZSBjYWNoZSwgaWYgdGhlcmUncyBhbiBlcnJvclxyXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXHJcbiAgICAgICAgLy8gY29tZSBhZ2FpbiB0byB0aGUgZXJyb3JlZCBwYWdlLlxyXG4gICAgICAgIGlmIChwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XHJcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXHJcbiAgICAgICAgICAgICAgICBpbml0aWFsOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcclxuICAgICAgICAgICAgICAgIGVycjogZXJyMSxcclxuICAgICAgICAgICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XHJcbiAgICAgICAgICAgIENvbXBvbmVudDogQXBwLFxyXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXHJcbiAgICAgICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcclxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XHJcbiAgICAgICAgdGhpcy5wYWdlTG9hZGVyID0gcGFnZUxvYWRlcjtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWUxO1xyXG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XHJcbiAgICAgICAgLy8gaWYgYXV0byBwcmVyZW5kZXJlZCBhbmQgZHluYW1pYyByb3V0ZSB3YWl0IHRvIHVwZGF0ZSBhc1BhdGhcclxuICAgICAgICAvLyB1bnRpbCBhZnRlciBtb3VudCB0byBwcmV2ZW50IGh5ZHJhdGlvbiBtaXNtYXRjaFxyXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XHJcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhdXRvRXhwb3J0RHluYW1pYyA/IHBhdGhuYW1lMSA6IGFzMTtcclxuICAgICAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGg7XHJcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XHJcbiAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwO1xyXG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcclxuICAgICAgICAvLyBiYWNrIGZyb20gZXh0ZXJuYWwgc2l0ZVxyXG4gICAgICAgIHRoaXMuaXNTc3IgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XHJcbiAgICAgICAgdGhpcy5pc1JlYWR5ID0gISEoc2VsZi5fX05FWFRfREFUQV9fLmdzc3AgfHwgc2VsZi5fX05FWFRfREFUQV9fLmdpcCB8fCBzZWxmLl9fTkVYVF9EQVRBX18uYXBwR2lwICYmICFzZWxmLl9fTkVYVF9EQVRBX18uZ3NwIHx8ICFhdXRvRXhwb3J0RHluYW1pYyAmJiAhc2VsZi5sb2NhdGlvbi5zZWFyY2ggJiYgIXByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMpO1xyXG4gICAgICAgIHRoaXMuaXNQcmV2aWV3ID0gISFpc1ByZXZpZXc7XHJcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMb2NhbGUgPSBkZWZhdWx0TG9jYWxlO1xyXG4gICAgICAgICAgICB0aGlzLmRvbWFpbkxvY2FsZXMgPSBkb21haW5Mb2NhbGVzO1xyXG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxyXG4gICAgICAgICAgICAvLyB0aHJvdyBhbiBlcnJvciBhcyBpdCdzIGNvbnNpZGVyZWQgaW52YWxpZFxyXG4gICAgICAgICAgICBpZiAoYXMxLnN1YnN0cigwLCAyKSAhPT0gJy8vJykge1xyXG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcclxuICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZiA9IGFzMSAhPT0gcGF0aG5hbWUxO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBhZGRCYXNlUGF0aChwYXRobmFtZTEpLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcclxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgdGhpcy5vblBvcFN0YXRlKTtcclxuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcclxuICAgICAgICAgICAgLy8gb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGJyb3dzZXIncyBkZWZhdWx0IGhhbmRsaW5nXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5zY3JvbGxSZXN0b3JhdGlvbiA9ICdtYW51YWwnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVsb2FkKCkge1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIEdvIGJhY2sgaW4gaGlzdG9yeVxyXG4gICAqLyBiYWNrKCkge1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcclxuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxyXG4gICAqIEBwYXJhbSBhcyBtYXNrcyBgdXJsYCBmb3IgdGhlIGJyb3dzZXJcclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXHJcbiAgICovIHB1c2godXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiByZW1vdmUgaW4gdGhlIGZ1dHVyZSB3aGVuIHdlIHVwZGF0ZSBoaXN0b3J5IGJlZm9yZSByb3V0ZSBjaGFuZ2VcclxuICAgICAgICAgICAgLy8gaXMgY29tcGxldGUsIGFzIHRoZSBwb3BzdGF0ZSBldmVudCBzaG91bGQgaGFuZGxlIHRoaXMgY2FwdHVyZS5cclxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIFNuYXBzaG90IHNjcm9sbCBwb3NpdGlvbiByaWdodCBiZWZvcmUgbmF2aWdhdGluZyB0byBhIG5ldyBwYWdlOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAge1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xyXG4gICAqIEBwYXJhbSB1cmwgb2YgdGhlIHJvdXRlXHJcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcclxuICAgKi8gcmVwbGFjZSh1cmwsIGFzLCBvcHRpb25zID0ge1xyXG4gICAgfSkge1xyXG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XHJcbiAgICAgICAgaWYgKCFpc0xvY2FsVVJMKHVybCkpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmw7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3Qgc2hvdWxkUmVzb2x2ZUhyZWYgPSB1cmwgPT09IGFzIHx8IG9wdGlvbnMuX2ggfHwgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWY7XHJcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XHJcbiAgICAgICAgLy8gbWFya2luZyB0aGUgcm91dGVyIHJlYWR5IHVudGlsIGFmdGVyIHRoZSBxdWVyeSBpcyB1cGRhdGVkXHJcbiAgICAgICAgaWYgKG9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJldkxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9jYWxlID0gb3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlID8gdGhpcy5kZWZhdWx0TG9jYWxlIDogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5sb2NhbGU7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZEFzID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzKTtcclxuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgaWYgKGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSBhZGRCYXNlUGF0aCgoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgoaGFzQmFzZVBhdGgodXJsKSA/IGRlbEJhc2VQYXRoKHVybCkgOiB1cmwsIHRoaXMubG9jYWxlcykucGF0aG5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBkaWROYXZpZ2F0ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVmO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxyXG4gICAgICAgICAgICAgICAgaWYgKCEoKHJlZiA9IHRoaXMubG9jYWxlcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWYuaW5jbHVkZXModGhpcy5sb2NhbGUpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkTG9jYWxlKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcyB3YXMgcHJldmlvdXNseSBhIHJldHVybiBidXQgd2FzIHJlbW92ZWQgaW4gZmF2b3JcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxyXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xyXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIHdyYXAgdGhpcyBpbiB0aGUgZW52IGNoZWNrIGFnYWluIHNpbmNlIHJlZ2VuZXJhdG9yIHJ1bnRpbWVcclxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB3ZSBhcmUgbmF2aWdhdGluZyB0byBhIGRvbWFpbiBsb2NhbGUgZW5zdXJlIHdlIHJlZGlyZWN0IHRvIHRoZVxyXG4gICAgICAgICAgICAgICAgLy8gY29ycmVjdCBkb21haW5cclxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhc05vQmFzZVBhdGggPSBkZWxCYXNlUGF0aChhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgaHR0cCR7ZGV0ZWN0ZWREb21haW4uaHR0cCA/ICcnIDogJ3MnfTovLyR7ZGV0ZWN0ZWREb21haW4uZG9tYWlufSR7YWRkQmFzZVBhdGgoYCR7dGhpcy5sb2NhbGUgPT09IGRldGVjdGVkRG9tYWluLmRlZmF1bHRMb2NhbGUgPyAnJyA6IGAvJHt0aGlzLmxvY2FsZX1gfSR7YXNOb0Jhc2VQYXRoID09PSAnLycgPyAnJyA6IGFzTm9CYXNlUGF0aH1gIHx8ICcvJyl9YDtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxyXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXHJcbiAgICAgICAgICAgICAgICAgICAgZGlkTmF2aWdhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkaWROYXZpZ2F0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIW9wdGlvbnMuX2gpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NzciA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBtYXJraW5nIHJvdXRlIGNoYW5nZXMgYXMgYSBuYXZpZ2F0aW9uIHN0YXJ0IGVudHJ5XHJcbiAgICAgICAgaWYgKF91dGlscy5TVCkge1xyXG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7IHNoYWxsb3cgPWZhbHNlICB9ID0gb3B0aW9ucztcclxuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xyXG4gICAgICAgICAgICBzaGFsbG93XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFib3J0Q29tcG9uZW50TG9hZCh0aGlzLl9pbkZsaWdodFJvdXRlLCByb3V0ZVByb3BzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcclxuICAgICAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIHRoaXMubG9jYWxlKTtcclxuICAgICAgICB0aGlzLl9pbkZsaWdodFJvdXRlID0gYXM7XHJcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xyXG4gICAgICAgIC8vIElmIHRoZSB1cmwgY2hhbmdlIGlzIG9ubHkgcmVsYXRlZCB0byBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG5vdCBwcm9jZWVkLiBXZSBzaG91bGQgb25seSBjaGFuZ2UgdGhlIHN0YXRlLlxyXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcclxuICAgICAgICAvLyBoeWRyYXRpb24uIFlvdXIgYXBwIHNob3VsZCBfbmV2ZXJfIHVzZSB0aGlzIHByb3BlcnR5LiBJdCBtYXkgY2hhbmdlIGF0XHJcbiAgICAgICAgLy8gYW55IHRpbWUgd2l0aG91dCBub3RpY2UuXHJcbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBcztcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUb0hhc2goY2xlYW5lZEFzKTtcclxuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcclxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlQ29tcGxldGUnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSBwYXJzZWQ7XHJcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xyXG4gICAgICAgIC8vIGdldCB0aGVpciBxdWVyeSBwYXJhbWV0ZXJzIHRvIGFsbG93IGVuc3VyaW5nIHRoZXkgY2FuIGJlIHBhcnNlZCBwcm9wZXJseVxyXG4gICAgICAgIC8vIHdoZW4gcmV3cml0dGVuIHRvXHJcbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xyXG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICAvLyBJZiB3ZSBmYWlsIHRvIHJlc29sdmUgdGhlIHBhZ2UgbGlzdCBvciBjbGllbnQtYnVpbGQgbWFuaWZlc3QsIHdlIG11c3RcclxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIElmIGFza2VkIHRvIGNoYW5nZSB0aGUgY3VycmVudCBVUkwgd2Ugc2hvdWxkIHJlbG9hZCB0aGUgY3VycmVudCBwYWdlXHJcbiAgICAgICAgLy8gKG5vdCBsb2NhdGlvbi5yZWxvYWQoKSBidXQgcmVsb2FkIGdldEluaXRpYWxQcm9wcyBhbmQgb3RoZXIgTmV4dC5qcyBzdHVmZnMpXHJcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xyXG4gICAgICAgIC8vIGFzIHRoaXMgc2hvdWxkIG5vdCBnbyBpbnRvIHRoZSBoaXN0b3J5IChUaGF0J3MgaG93IGJyb3dzZXJzIHdvcmspXHJcbiAgICAgICAgLy8gV2Ugc2hvdWxkIGNvbXBhcmUgdGhlIG5ldyBhc1BhdGggdG8gdGhlIGN1cnJlbnQgYXNQYXRoLCBub3QgdGhlIHVybFxyXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcclxuICAgICAgICAgICAgbWV0aG9kID0gJ3JlcGxhY2VTdGF0ZSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXHJcbiAgICAgICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxyXG4gICAgICAgIGxldCByZXNvbHZlZEFzID0gYXM7XHJcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xyXG4gICAgICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcclxuICAgICAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxyXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XHJcbiAgICAgICAgaWYgKHNob3VsZFJlc29sdmVIcmVmICYmIHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShjbGVhbmVkQXMsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcXVlcnkxLCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICAgICAsIHRoaXMubG9jYWxlcyk7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJld3JpdGVzUmVzdWx0Lm1hdGNoZWRQYWdlICYmIHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lMSA9IHJld3JpdGVzUmVzdWx0LnJlc29sdmVkSHJlZjtcclxuICAgICAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBhZGRCYXNlUGF0aChwYXRobmFtZTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUxID0gcGFyc2VkLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUxKTtcclxuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEludmFsaWQgaHJlZjogXCIke3VybH1cIiBhbmQgYXM6IFwiJHthc31cIiwgcmVjZWl2ZWQgcmVsYXRpdmUgaHJlZiBhbmQgZXh0ZXJuYWwgYXNgICsgYFxcblNlZSBtb3JlIGluZm86IGh0dHBzOi8vbmV4dGpzLm9yZy9kb2NzL21lc3NhZ2VzL2ludmFsaWQtcmVsYXRpdmUtdXJsLWV4dGVybmFsLWFzYCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXNvbHZlZEFzID0gZGVsTG9jYWxlKGRlbEJhc2VQYXRoKHJlc29sdmVkQXMpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgaWYgKCgwLCBfaXNEeW5hbWljKS5pc0R5bmFtaWNSb3V0ZShyb3V0ZSkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFzUGF0aG5hbWUgPSBwYXJzZWRBcy5wYXRobmFtZTtcclxuICAgICAgICAgICAgY29uc3Qgcm91dGVSZWdleCA9ICgwLCBfcm91dGVSZWdleCkuZ2V0Um91dGVSZWdleChyb3V0ZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lO1xyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkxKSA6IHtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKCFyb3V0ZU1hdGNoIHx8IHNob3VsZEludGVycG9sYXRlICYmICFpbnRlcnBvbGF0ZWRBcy5yZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1pc3NpbmdQYXJhbXMgPSBPYmplY3Qua2V5cyhyb3V0ZVJlZ2V4Lmdyb3VwcykuZmlsdGVyKChwYXJhbSk9PiFxdWVyeTFbcGFyYW1dXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1pc3NpbmdQYXJhbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKHNob3VsZEludGVycG9sYXRlID8gYFRoZSBwcm92aWRlZCBcXGBocmVmXFxgICgke3VybH0pIHZhbHVlIGlzIG1pc3NpbmcgcXVlcnkgdmFsdWVzICgke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYCA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICsgYFJlYWQgbW9yZTogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvJHtzaG91bGRJbnRlcnBvbGF0ZSA/ICdocmVmLWludGVycG9sYXRpb24tZmFpbGVkJyA6ICdpbmNvbXBhdGlibGUtaHJlZi1hcyd9YCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc2hvdWxkSW50ZXJwb2xhdGUpIHtcclxuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oT2JqZWN0LmFzc2lnbih7XHJcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lOiBpbnRlcnBvbGF0ZWRBcy5yZXN1bHQsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeTEsIGludGVycG9sYXRlZEFzLnBhcmFtcylcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIE1lcmdlIHBhcmFtcyBpbnRvIGBxdWVyeWAsIG92ZXJ3cml0aW5nIGFueSBzcGVjaWZpZWQgaW4gc2VhcmNoXHJcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHZhciByZWYsIHJlZjE7XHJcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgbGV0IHsgZXJyb3IgLCBwcm9wcyAsIF9fTl9TU0cgLCBfX05fU1NQICB9ID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICAvLyBoYW5kbGUgcmVkaXJlY3Qgb24gY2xpZW50LXRyYW5zaXRpb25cclxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMucGFnZVByb3BzICYmIHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1QpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXN0aW5hdGlvbiA9IHByb3BzLnBhZ2VQcm9wcy5fX05fUkVESVJFQ1Q7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjbGllbnQtbmF2aWdhdGlvbiBpZiBpdCBpcyBmYWxsaW5nIGJhY2sgdG8gaGFyZCBuYXZpZ2F0aW9uIGlmXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaXQncyBub3RcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWRIcmVmLnBhdGhuYW1lLCBwYWdlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKG1ldGhvZCwgbmV3VXJsLCBuZXdBcywgb3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUHJldmlldyA9ICEhcHJvcHMuX19OX1BSRVZJRVc7XHJcbiAgICAgICAgICAgICAgICAvLyBoYW5kbGUgU1NHIGRhdGEgNDA0XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBub3RGb3VuZFJvdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbm90Rm91bmRSb3V0ZSA9ICcvNDA0JztcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChfKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mbyA9IGF3YWl0IHRoaXMuZ2V0Um91dGVJbmZvKG5vdEZvdW5kUm91dGUsIG5vdEZvdW5kUm91dGUsIHF1ZXJ5MSwgYXMsIHJlc29sdmVkQXMsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2JlZm9yZUhpc3RvcnlDaGFuZ2UnLCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUobWV0aG9kLCB1cmwsIGFzLCBvcHRpb25zKTtcclxuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwcENvbXAgPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50O1xyXG4gICAgICAgICAgICAgICAgd2luZG93Lm5leHQuaXNQcmVyZW5kZXJlZCA9IGFwcENvbXAuZ2V0SW5pdGlhbFByb3BzID09PSBhcHBDb21wLm9yaWdHZXRJbml0aWFsUHJvcHMgJiYgIXJvdXRlSW5mby5Db21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChvcHRpb25zLl9oICYmIHBhdGhuYW1lMSA9PT0gJy9fZXJyb3InICYmICgocmVmID0gc2VsZi5fX05FWFRfREFUQV9fLnByb3BzKSA9PT0gbnVsbCB8fCByZWYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChyZWYxID0gcmVmLnBhZ2VQcm9wcykgPT09IG51bGwgfHwgcmVmMSA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmMS5zdGF0dXNDb2RlKSA9PT0gNTAwICYmIChwcm9wcyA9PT0gbnVsbCB8fCBwcm9wcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogcHJvcHMucGFnZVByb3BzKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZW5zdXJlIHN0YXR1c0NvZGUgaXMgc3RpbGwgY29ycmVjdCBmb3Igc3RhdGljIDUwMCBwYWdlXHJcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wYWdlUHJvcHMuc3RhdHVzQ29kZSA9IDUwMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWRTaGFsbG93Um91dGUgPSBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5yb3V0ZSA9PT0gcm91dGU7XHJcbiAgICAgICAgICAgIHZhciBfc2Nyb2xsO1xyXG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc2V0U2Nyb2xsID0gc2hvdWxkU2Nyb2xsID8ge1xyXG4gICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgIHk6IDBcclxuICAgICAgICAgICAgfSA6IG51bGw7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0KHJvdXRlLCBwYXRobmFtZTEsIHF1ZXJ5MSwgY2xlYW5lZEFzLCByb3V0ZUluZm8sIGZvcmNlZFNjcm9sbCAhPT0gbnVsbCAmJiBmb3JjZWRTY3JvbGwgIT09IHZvaWQgMCA/IGZvcmNlZFNjcm9sbCA6IHJlc2V0U2Nyb2xsKS5jYXRjaCgoZSk9PntcclxuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aHJvdyBlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnJvciwgY2xlYW5lZEFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyMSkge1xyXG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgV2FybmluZzogd2luZG93Lmhpc3RvcnkgaXMgbm90IGF2YWlsYWJsZS5gKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeS4ke21ldGhvZH0gaXMgbm90IGF2YWlsYWJsZWApO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93O1xyXG4gICAgICAgICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKHtcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIGFzLFxyXG4gICAgICAgICAgICAgICAgb3B0aW9ucyxcclxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGlkeDogdGhpcy5faWR4ID0gbWV0aG9kICE9PSAncHVzaFN0YXRlJyA/IHRoaXMuX2lkeCA6IHRoaXMuX2lkeCArIDFcclxuICAgICAgICAgICAgfSwgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXHJcbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXHJcbiAgICAgICAgICAgICcnLCBhcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzLCByb3V0ZVByb3BzLCBsb2FkRXJyb3JGYWlsKSB7XHJcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcclxuICAgICAgICAgICAgdGhyb3cgZXJyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoKDAsIF9yb3V0ZUxvYWRlcikuaXNBc3NldEVycm9yKGVycikgfHwgbG9hZEVycm9yRmFpbCkge1xyXG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlRXJyb3InLCBlcnIsIGFzLCByb3V0ZVByb3BzKTtcclxuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcclxuICAgICAgICAgICAgLy8gIDEuIFBhZ2UgZG9lc24ndCBleGlzdHNcclxuICAgICAgICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXHJcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXHJcbiAgICAgICAgICAgIC8vIFNvLCBkb2luZyBhIGhhcmQgcmVsb2FkIGlzIHRoZSBwcm9wZXIgd2F5IHRvIGRlYWwgd2l0aCB0aGlzLlxyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFzO1xyXG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cclxuICAgICAgICAgICAgLy8gU28gbGV0J3MgdGhyb3cgYSBjYW5jZWxsYXRpb24gZXJyb3Igc3RvcCB0aGUgcm91dGluZyBsb2dpYy5cclxuICAgICAgICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgQ29tcG9uZW50MTtcclxuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xyXG4gICAgICAgICAgICBsZXQgcHJvcHM7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgQ29tcG9uZW50MSA9PT0gJ3VuZGVmaW5lZCcgfHwgdHlwZW9mIHN0eWxlU2hlZXRzID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgICAgIENvbXBvbmVudDogQ29tcG9uZW50MSxcclxuICAgICAgICAgICAgICAgIHN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgZXJyLFxyXG4gICAgICAgICAgICAgICAgZXJyb3I6IGVyclxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZUluZm8ucHJvcHMgPSBhd2FpdCB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByb3V0ZUluZm87XHJcbiAgICAgICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdO1xyXG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mbyA/IGNhY2hlZFJvdXRlSW5mbyA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcyk9Pih7XHJcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9uZW50OiByZXMucGFnZSxcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU0c6IHJlcy5tb2QuX19OX1NTRyxcclxuICAgICAgICAgICAgICAgICAgICBfX05fU1NQOiByZXMubW9kLl9fTl9TU1BcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgQ29tcG9uZW50OiBDb21wb25lbnQxICwgX19OX1NTRyAsIF9fTl9TU1AgIH0gPSByb3V0ZUluZm87XHJcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IGlzVmFsaWRFbGVtZW50VHlwZSAgfSA9IHJlcXVpcmUoJ3JlYWN0LWlzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVmFsaWRFbGVtZW50VHlwZShDb21wb25lbnQxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XHJcbiAgICAgICAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcclxuICAgICAgICAgICAgICAgIGRhdGFIcmVmID0gdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVxyXG4gICAgICAgICAgICAgICAgfSksIHJlc29sdmVkQXMsIF9fTl9TU0csIHRoaXMubG9jYWxlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGEoKCk9Pl9fTl9TU0cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSA6IF9fTl9TU1AgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmKSA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnksXHJcbiAgICAgICAgICAgICAgICAgICAgYXNQYXRoOiBhcyxcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsZXM6IHRoaXMubG9jYWxlcyxcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0TG9jYWxlOiB0aGlzLmRlZmF1bHRMb2NhbGVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xyXG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycjIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xyXG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucm91dGUgPSByb3V0ZTtcclxuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XHJcbiAgICAgICAgdGhpcy5xdWVyeSA9IHF1ZXJ5O1xyXG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXM7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcclxuICAgKiBAcGFyYW0gY2IgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWRcclxuICAgKi8gYmVmb3JlUG9wU3RhdGUoY2IpIHtcclxuICAgICAgICB0aGlzLl9icHMgPSBjYjtcclxuICAgIH1cclxuICAgIG9ubHlBSGFzaENoYW5nZShhcykge1xyXG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgICBjb25zdCBbb2xkVXJsTm9IYXNoLCBvbGRIYXNoXSA9IHRoaXMuYXNQYXRoLnNwbGl0KCcjJyk7XHJcbiAgICAgICAgY29uc3QgW25ld1VybE5vSGFzaCwgbmV3SGFzaF0gPSBhcy5zcGxpdCgnIycpO1xyXG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcclxuICAgICAgICBpZiAobmV3SGFzaCAmJiBvbGRVcmxOb0hhc2ggPT09IG5ld1VybE5vSGFzaCAmJiBvbGRIYXNoID09PSBuZXdIYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBJZiB0aGUgdXJscyBhcmUgY2hhbmdlLCB0aGVyZSdzIG1vcmUgdGhhbiBhIGhhc2ggY2hhbmdlXHJcbiAgICAgICAgaWYgKG9sZFVybE5vSGFzaCAhPT0gbmV3VXJsTm9IYXNoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXHJcbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxyXG4gICAgICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXHJcbiAgICAgICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cclxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcclxuICAgIH1cclxuICAgIHNjcm9sbFRvSGFzaChhcykge1xyXG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcclxuICAgICAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWUgb3IgYCN0b3BgXHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBGaXJzdCB3ZSBjaGVjayBpZiB0aGUgZWxlbWVudCBieSBpZCBpcyBmb3VuZFxyXG4gICAgICAgIGNvbnN0IGlkRWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChoYXNoKTtcclxuICAgICAgICBpZiAoaWRFbCkge1xyXG4gICAgICAgICAgICBpZEVsLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XHJcbiAgICAgICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXHJcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XHJcbiAgICAgICAgaWYgKG5hbWVFbCkge1xyXG4gICAgICAgICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1cmxJc05ldyhhc1BhdGgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXHJcbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcclxuICAgKiBAcGFyYW0gdXJsIHRoZSBocmVmIG9mIHByZWZldGNoZWQgcGFnZVxyXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxyXG4gICAqLyBhc3luYyBwcmVmZXRjaCh1cmwsIGFzUGF0aCA9IHVybCwgb3B0aW9ucyA9IHtcclxuICAgIH0pIHtcclxuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XHJcbiAgICAgICAgbGV0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMiAgfSA9IHBhcnNlZDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xyXG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSAoMCwgX25vcm1hbGl6ZUxvY2FsZVBhdGgpLm5vcm1hbGl6ZUxvY2FsZVBhdGgocGF0aG5hbWUyLCB0aGlzLmxvY2FsZXMpLnBhdGhuYW1lO1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcGF0aG5hbWUyO1xyXG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJzZWRBcyA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnMubG9jYWxlID0gbG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSB8fCB0aGlzLmRlZmF1bHRMb2NhbGU7XHJcbiAgICAgICAgICAgICAgICBhc1BhdGggPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcGFnZXMgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIuZ2V0UGFnZUxpc3QoKTtcclxuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0hBU19SRVdSSVRFUyAmJiBhc1BhdGguc3RhcnRzV2l0aCgnLycpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXdyaXRlcztcclxuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xyXG4gICAgICAgICAgICBjb25zdCByZXdyaXRlc1Jlc3VsdCA9ICgwLCBfcmVzb2x2ZVJld3JpdGVzKS5kZWZhdWx0KGFkZEJhc2VQYXRoKGFkZExvY2FsZShhc1BhdGgsIHRoaXMubG9jYWxlKSksIHBhZ2VzLCByZXdyaXRlcywgcGFyc2VkLnF1ZXJ5LCAocCk9PnJlc29sdmVEeW5hbWljUm91dGUocCwgcGFnZXMpXHJcbiAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcclxuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XHJcbiAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgZGlyZWN0bHkgbWF0Y2hlcyBhIHBhZ2Ugd2UgbmVlZCB0byB1cGRhdGUgdGhlIGhyZWYgdG9cclxuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcclxuICAgICAgICAgICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUyKSB7XHJcbiAgICAgICAgICAgICAgICBwYXRobmFtZTIgPSBwYXJzZWQucGF0aG5hbWU7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XHJcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTIpO1xyXG4gICAgICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLl9pc1NzZyhyb3V0ZSkudGhlbigoaXNTc2cpPT57XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXNTc2cgPyB0aGlzLl9nZXRTdGF0aWNEYXRhKHRoaXMucGFnZUxvYWRlci5nZXREYXRhSHJlZih1cmwsIHJlc29sdmVkQXMsIHRydWUsIHR5cGVvZiBvcHRpb25zLmxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBvcHRpb25zLmxvY2FsZSA6IHRoaXMubG9jYWxlKSkgOiBmYWxzZTtcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSwgXHJcbiAgICAgICAgXSk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBmZXRjaENvbXBvbmVudChyb3V0ZSkge1xyXG4gICAgICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZTtcclxuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XHJcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xyXG4gICAgICAgIGlmIChjYW5jZWxsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImApO1xyXG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xyXG4gICAgfVxyXG4gICAgX2dldERhdGEoZm4pIHtcclxuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XHJcbiAgICAgICAgY29uc3QgY2FuY2VsID0gKCk9PntcclxuICAgICAgICAgICAgY2FuY2VsbGVkID0gdHJ1ZTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuY2xjID0gY2FuY2VsO1xyXG4gICAgICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyMiA9IG5ldyBFcnJvcignTG9hZGluZyBpbml0aWFsIHByb3BzIGNhbmNlbGxlZCcpO1xyXG4gICAgICAgICAgICAgICAgZXJyMi5jYW5jZWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmKSB7XHJcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJyAmJiAhdGhpcy5pc1ByZXZpZXcgJiYgdGhpcy5zZGNbY2FjaGVLZXldKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUodGhpcy5zZGNbY2FjaGVLZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIHRoaXMuc2RjW2NhY2hlS2V5XSA9IGRhdGE7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcclxuICAgICAgICBjb25zdCB7IGhyZWY6IHJlc291cmNlS2V5ICB9ID0gbmV3IFVSTChkYXRhSHJlZiwgd2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIGlmICh0aGlzLnNkcltyZXNvdXJjZUtleV0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XSA9IGZldGNoTmV4dERhdGEoZGF0YUhyZWYsIHRoaXMuaXNTc3IpLnRoZW4oKGRhdGEpPT57XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH0pLmNhdGNoKChlcnIyKT0+e1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xyXG4gICAgICAgICAgICB0aHJvdyBlcnIyO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudCwgY3R4KSB7XHJcbiAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IEFwcDEgIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ107XHJcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XHJcbiAgICAgICAgY3R4LkFwcFRyZWUgPSBBcHBUcmVlO1xyXG4gICAgICAgIHJldHVybiAoMCwgX3V0aWxzKS5sb2FkR2V0SW5pdGlhbFByb3BzKEFwcDEsIHtcclxuICAgICAgICAgICAgQXBwVHJlZSxcclxuICAgICAgICAgICAgQ29tcG9uZW50LFxyXG4gICAgICAgICAgICByb3V0ZXI6IHRoaXMsXHJcbiAgICAgICAgICAgIGN0eFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2xjKSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMsIHJvdXRlUHJvcHMpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYygpO1xyXG4gICAgICAgICAgICB0aGlzLmNsYyA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3ViKGRhdGEsIHRoaXMuY29tcG9uZW50c1snL19hcHAnXS5Db21wb25lbnQsIHJlc2V0U2Nyb2xsKTtcclxuICAgIH1cclxufVxyXG5Sb3V0ZXIuZXZlbnRzID0gKDAsIF9taXR0KS5kZWZhdWx0KCk7XHJcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcclxuXHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdXRlci5qcy5tYXAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vZGlzdC9jbGllbnQvbGluaycpXHJcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXHJcbiAqIHJlYWN0LWlzLmRldmVsb3BtZW50LmpzXHJcbiAqXHJcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxyXG4gKlxyXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcclxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxyXG4gKi9cclxuXHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcclxuICAoZnVuY3Rpb24oKSB7XHJcbid1c2Ugc3RyaWN0JztcclxuXHJcbi8vIEFUVEVOVElPTlxyXG4vLyBXaGVuIGFkZGluZyBuZXcgc3ltYm9scyB0byB0aGlzIGZpbGUsXHJcbi8vIFBsZWFzZSBjb25zaWRlciBhbHNvIGFkZGluZyB0byAncmVhY3QtZGV2dG9vbHMtc2hhcmVkL3NyYy9iYWNrZW5kL1JlYWN0U3ltYm9scydcclxuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcclxuLy8gbm9yIHBvbHlmaWxsLCB0aGVuIGEgcGxhaW4gbnVtYmVyIGlzIHVzZWQgZm9yIHBlcmZvcm1hbmNlLlxyXG52YXIgUkVBQ1RfRUxFTUVOVF9UWVBFID0gMHhlYWM3O1xyXG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XHJcbnZhciBSRUFDVF9GUkFHTUVOVF9UWVBFID0gMHhlYWNiO1xyXG52YXIgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IDB4ZWFjYztcclxudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XHJcbnZhciBSRUFDVF9QUk9WSURFUl9UWVBFID0gMHhlYWNkO1xyXG52YXIgUkVBQ1RfQ09OVEVYVF9UWVBFID0gMHhlYWNlO1xyXG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcclxudmFyIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSAweGVhZDE7XHJcbnZhciBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgPSAweGVhZDg7XHJcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XHJcbnZhciBSRUFDVF9MQVpZX1RZUEUgPSAweGVhZDQ7XHJcbnZhciBSRUFDVF9CTE9DS19UWVBFID0gMHhlYWQ5O1xyXG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XHJcbnZhciBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFID0gMHhlYWQ1O1xyXG52YXIgUkVBQ1RfU0NPUEVfVFlQRSA9IDB4ZWFkNztcclxudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xyXG52YXIgUkVBQ1RfREVCVUdfVFJBQ0lOR19NT0RFX1RZUEUgPSAweGVhZTE7XHJcbnZhciBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IDB4ZWFlMjtcclxudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcclxuXHJcbmlmICh0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbC5mb3IpIHtcclxuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcclxuICBSRUFDVF9FTEVNRU5UX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmVsZW1lbnQnKTtcclxuICBSRUFDVF9QT1JUQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucG9ydGFsJyk7XHJcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcclxuICBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdHJpY3RfbW9kZScpO1xyXG4gIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnByb2ZpbGVyJyk7XHJcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcclxuICBSRUFDVF9DT05URVhUX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmNvbnRleHQnKTtcclxuICBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5mb3J3YXJkX3JlZicpO1xyXG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XHJcbiAgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zdXNwZW5zZV9saXN0Jyk7XHJcbiAgUkVBQ1RfTUVNT19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5tZW1vJyk7XHJcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XHJcbiAgUkVBQ1RfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuYmxvY2snKTtcclxuICBSRUFDVF9TRVJWRVJfQkxPQ0tfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2VydmVyLmJsb2NrJyk7XHJcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcclxuICBSRUFDVF9TQ09QRV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zY29wZScpO1xyXG4gIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vcGFxdWUuaWQnKTtcclxuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xyXG4gIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5vZmZzY3JlZW4nKTtcclxuICBSRUFDVF9MRUdBQ1lfSElEREVOX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmxlZ2FjeV9oaWRkZW4nKTtcclxufVxyXG5cclxuLy8gRmlsdGVyIGNlcnRhaW4gRE9NIGF0dHJpYnV0ZXMgKGUuZy4gc3JjLCBocmVmKSBpZiB0aGVpciB2YWx1ZXMgYXJlIGVtcHR5IHN0cmluZ3MuXHJcblxyXG52YXIgZW5hYmxlU2NvcGVBUEkgPSBmYWxzZTsgLy8gRXhwZXJpbWVudGFsIENyZWF0ZSBFdmVudCBIYW5kbGUgQVBJLlxyXG5cclxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdzdHJpbmcnIHx8IHR5cGVvZiB0eXBlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICByZXR1cm4gdHJ1ZTtcclxuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXHJcblxyXG5cclxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodHlwZW9mIHR5cGUgPT09ICdvYmplY3QnICYmIHR5cGUgIT09IG51bGwpIHtcclxuICAgIGlmICh0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9MQVpZX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfTUVNT19UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX1BST1ZJREVSX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfQ09OVEVYVF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9CTE9DS19UWVBFIHx8IHR5cGVbMF0gPT09IFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFKSB7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcblxyXG5mdW5jdGlvbiB0eXBlT2Yob2JqZWN0KSB7XHJcbiAgaWYgKHR5cGVvZiBvYmplY3QgPT09ICdvYmplY3QnICYmIG9iamVjdCAhPT0gbnVsbCkge1xyXG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xyXG5cclxuICAgIHN3aXRjaCAoJCR0eXBlb2YpIHtcclxuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XHJcbiAgICAgICAgdmFyIHR5cGUgPSBvYmplY3QudHlwZTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX0ZSQUdNRU5UX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX1BST0ZJTEVSX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX1RZUEU6XHJcbiAgICAgICAgICBjYXNlIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRTpcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XHJcblxyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoJCR0eXBlb2ZUeXBlKSB7XHJcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XHJcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFOlxyXG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTEFaWV9UWVBFOlxyXG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxyXG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPVklERVJfVFlQRTpcclxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZlR5cGU7XHJcblxyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgY2FzZSBSRUFDVF9QT1JUQUxfVFlQRTpcclxuICAgICAgICByZXR1cm4gJCR0eXBlb2Y7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbnZhciBDb250ZXh0Q29uc3VtZXIgPSBSRUFDVF9DT05URVhUX1RZUEU7XHJcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xyXG52YXIgRWxlbWVudCA9IFJFQUNUX0VMRU1FTlRfVFlQRTtcclxudmFyIEZvcndhcmRSZWYgPSBSRUFDVF9GT1JXQVJEX1JFRl9UWVBFO1xyXG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xyXG52YXIgTGF6eSA9IFJFQUNUX0xBWllfVFlQRTtcclxudmFyIE1lbW8gPSBSRUFDVF9NRU1PX1RZUEU7XHJcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcclxudmFyIFByb2ZpbGVyID0gUkVBQ1RfUFJPRklMRVJfVFlQRTtcclxudmFyIFN0cmljdE1vZGUgPSBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFO1xyXG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xyXG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNBc3luY01vZGUgPSBmYWxzZTtcclxudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSBmYWxzZTsgLy8gQXN5bmNNb2RlIHNob3VsZCBiZSBkZXByZWNhdGVkXHJcblxyXG5mdW5jdGlvbiBpc0FzeW5jTW9kZShvYmplY3QpIHtcclxuICB7XHJcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XHJcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gdHJ1ZTsgLy8gVXNpbmcgY29uc29sZVsnd2FybiddIHRvIGV2YWRlIEJhYmVsIGFuZCBFU0xpbnRcclxuXHJcbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XHJcbiAge1xyXG4gICAgaWYgKCFoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0NvbmN1cnJlbnRNb2RlKSB7XHJcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxyXG5cclxuICAgICAgY29uc29sZVsnd2FybiddKCdUaGUgUmVhY3RJcy5pc0NvbmN1cnJlbnRNb2RlKCkgYWxpYXMgaGFzIGJlZW4gZGVwcmVjYXRlZCwgJyArICdhbmQgd2lsbCBiZSByZW1vdmVkIGluIFJlYWN0IDE4Ky4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBpc0NvbnRleHRDb25zdW1lcihvYmplY3QpIHtcclxuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc0NvbnRleHRQcm92aWRlcihvYmplY3QpIHtcclxuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNFbGVtZW50KG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNGb3J3YXJkUmVmKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc0ZyYWdtZW50KG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc0xhenkob2JqZWN0KSB7XHJcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNNZW1vKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xyXG59XHJcbmZ1bmN0aW9uIGlzUG9ydGFsKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNQcm9maWxlcihvYmplY3QpIHtcclxuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XHJcbn1cclxuZnVuY3Rpb24gaXNTdHJpY3RNb2RlKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcclxufVxyXG5mdW5jdGlvbiBpc1N1c3BlbnNlKG9iamVjdCkge1xyXG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcclxufVxyXG5cclxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XHJcbmV4cG9ydHMuQ29udGV4dFByb3ZpZGVyID0gQ29udGV4dFByb3ZpZGVyO1xyXG5leHBvcnRzLkVsZW1lbnQgPSBFbGVtZW50O1xyXG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xyXG5leHBvcnRzLkZyYWdtZW50ID0gRnJhZ21lbnQ7XHJcbmV4cG9ydHMuTGF6eSA9IExhenk7XHJcbmV4cG9ydHMuTWVtbyA9IE1lbW87XHJcbmV4cG9ydHMuUG9ydGFsID0gUG9ydGFsO1xyXG5leHBvcnRzLlByb2ZpbGVyID0gUHJvZmlsZXI7XHJcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XHJcbmV4cG9ydHMuU3VzcGVuc2UgPSBTdXNwZW5zZTtcclxuZXhwb3J0cy5pc0FzeW5jTW9kZSA9IGlzQXN5bmNNb2RlO1xyXG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xyXG5leHBvcnRzLmlzQ29udGV4dENvbnN1bWVyID0gaXNDb250ZXh0Q29uc3VtZXI7XHJcbmV4cG9ydHMuaXNDb250ZXh0UHJvdmlkZXIgPSBpc0NvbnRleHRQcm92aWRlcjtcclxuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XHJcbmV4cG9ydHMuaXNGb3J3YXJkUmVmID0gaXNGb3J3YXJkUmVmO1xyXG5leHBvcnRzLmlzRnJhZ21lbnQgPSBpc0ZyYWdtZW50O1xyXG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcclxuZXhwb3J0cy5pc01lbW8gPSBpc01lbW87XHJcbmV4cG9ydHMuaXNQb3J0YWwgPSBpc1BvcnRhbDtcclxuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcclxuZXhwb3J0cy5pc1N0cmljdE1vZGUgPSBpc1N0cmljdE1vZGU7XHJcbmV4cG9ydHMuaXNTdXNwZW5zZSA9IGlzU3VzcGVuc2U7XHJcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xyXG5leHBvcnRzLnR5cGVPZiA9IHR5cGVPZjtcclxuICB9KSgpO1xyXG59XHJcbiIsIid1c2Ugc3RyaWN0JztcclxuXHJcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XHJcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Nqcy9yZWFjdC1pcy5wcm9kdWN0aW9uLm1pbi5qcycpO1xyXG59IGVsc2Uge1xyXG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAYXBvbGxvL2NsaWVudFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZW1vdGlvbi9oYXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL3dlYWstbWVtb2l6ZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10b29scy9zY2hlbWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdHMvc2NoZW1hXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS1uZXh0L2tleXN0b25lL19fX2ludGVybmFsLWRvLW5vdC11c2Utd2lsbC1icmVhay1pbi1wYXRjaC9hZG1pbi11aS9wYWdlcy9BcHBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2J1dHRvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9BbGVydFRyaWFuZ2xlSWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQ2hldnJvblJpZ2h0SWNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9sb2FkaW5nXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9tb2RhbHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL25vdGljZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvcG9wb3ZlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvc2VnbWVudGVkLWNvbnRyb2xcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3RvYXN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS90b29sdGlwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFwb2xsby11cGxvYWQtY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRhdGUtZm5zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImRlY2ltYWwuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZmFzdC1kZWVwLWVxdWFsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXBocWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC10eXBlLWpzb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zZXJ2ZXIvZGVub3JtYWxpemUtcGFnZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyLWNvbnRleHQuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGUuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3BhcnNlLXJlbGF0aXZlLXVybC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcXVlcnlzdHJpbmcuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLXJlZ2V4LmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3V0aWxzLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV1aWRcIik7IiwiLyogKGlnbm9yZWQpICovIl0sIm5hbWVzIjpbImdldEFwcCIsInZpZXcwIiwidmlldzEiLCJ2aWV3MiIsInZpZXczIiwidmlldzQiLCJhZG1pbkNvbmZpZyIsImxhenlNZXRhZGF0YVF1ZXJ5Iiwia2luZCIsImRlZmluaXRpb25zIiwib3BlcmF0aW9uIiwic2VsZWN0aW9uU2V0Iiwic2VsZWN0aW9ucyIsIm5hbWUiLCJ2YWx1ZSIsImxvYyIsInN0YXJ0IiwiZW5kIiwiYXJndW1lbnRzIiwiZGlyZWN0aXZlcyIsImZpZWxkVmlld3MiLCJhZG1pbk1ldGFIYXNoIiwiYXBpUGF0aCIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZXhwb3J0cyIsImRlZmF1bHQiLCJfcmVhY3QiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9yb3V0ZXIiLCJfcm91dGVyMSIsIl91c2VJbnRlcnNlY3Rpb24iLCJvYmoiLCJfX2VzTW9kdWxlIiwicHJlZmV0Y2hlZCIsInByZWZldGNoIiwicm91dGVyIiwiaHJlZiIsImFzIiwib3B0aW9ucyIsImlzTG9jYWxVUkwiLCJjYXRjaCIsImVyciIsImN1ckxvY2FsZSIsImxvY2FsZSIsImlzTW9kaWZpZWRFdmVudCIsImV2ZW50IiwidGFyZ2V0IiwiY3VycmVudFRhcmdldCIsIm1ldGFLZXkiLCJjdHJsS2V5Iiwic2hpZnRLZXkiLCJhbHRLZXkiLCJuYXRpdmVFdmVudCIsIndoaWNoIiwibGlua0NsaWNrZWQiLCJlIiwicmVwbGFjZSIsInNoYWxsb3ciLCJzY3JvbGwiLCJub2RlTmFtZSIsInByZXZlbnREZWZhdWx0IiwiaW5kZXhPZiIsIkxpbmsiLCJwcm9wcyIsImNyZWF0ZVByb3BFcnJvciIsImFyZ3MiLCJFcnJvciIsImtleSIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsImtleXMiLCJmb3JFYWNoIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInBhc3NIcmVmIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY29uc29sZSIsIndhcm4iLCJwIiwidXNlUm91dGVyIiwidXNlTWVtbyIsInJlc29sdmVkSHJlZiIsInJlc29sdmVkQXMiLCJyZXNvbHZlSHJlZiIsImNoaWxkcmVuIiwiY3JlYXRlRWxlbWVudCIsImNoaWxkIiwiQ2hpbGRyZW4iLCJvbmx5IiwiY2hpbGRSZWYiLCJyZWYiLCJzZXRJbnRlcnNlY3Rpb25SZWYiLCJpc1Zpc2libGUiLCJ1c2VJbnRlcnNlY3Rpb24iLCJyb290TWFyZ2luIiwic2V0UmVmIiwidXNlQ2FsbGJhY2siLCJlbCIsInVzZUVmZmVjdCIsInNob3VsZFByZWZldGNoIiwiaXNQcmVmZXRjaGVkIiwiY2hpbGRQcm9wcyIsIm9uQ2xpY2siLCJkZWZhdWx0UHJldmVudGVkIiwib25Nb3VzZUVudGVyIiwicHJpb3JpdHkiLCJ0eXBlIiwibG9jYWxlRG9tYWluIiwiaXNMb2NhbGVEb21haW4iLCJnZXREb21haW5Mb2NhbGUiLCJsb2NhbGVzIiwiZG9tYWluTG9jYWxlcyIsImFkZEJhc2VQYXRoIiwiYWRkTG9jYWxlIiwiZGVmYXVsdExvY2FsZSIsImNsb25lRWxlbWVudCIsIl9kZWZhdWx0IiwicmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2giLCJub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCIsInBhdGgiLCJlbmRzV2l0aCIsInNsaWNlIiwicHJvY2VzcyIsImVudiIsIl9fTkVYVF9UUkFJTElOR19TTEFTSCIsInRlc3QiLCJyZXF1ZXN0SWRsZUNhbGxiYWNrIiwiY2FuY2VsSWRsZUNhbGxiYWNrIiwic2VsZiIsImJpbmQiLCJ3aW5kb3ciLCJjYiIsIkRhdGUiLCJub3ciLCJzZXRUaW1lb3V0IiwiZGlkVGltZW91dCIsInRpbWVSZW1haW5pbmciLCJNYXRoIiwibWF4IiwiaWQiLCJjbGVhclRpbWVvdXQiLCJtYXJrQXNzZXRFcnJvciIsImlzQXNzZXRFcnJvciIsImdldENsaWVudEJ1aWxkTWFuaWZlc3QiLCJjcmVhdGVSb3V0ZUxvYWRlciIsIl9nZXRBc3NldFBhdGhGcm9tUm91dGUiLCJfcmVxdWVzdElkbGVDYWxsYmFjayIsIk1TX01BWF9JRExFX0RFTEFZIiwid2l0aEZ1dHVyZSIsIm1hcCIsImdlbmVyYXRvciIsImVudHJ5IiwiZ2V0IiwiZnV0dXJlIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZXNvbHZlciIsInByb20iLCJzZXQiLCJ0aGVuIiwiaGFzUHJlZmV0Y2giLCJsaW5rIiwiZG9jdW1lbnQiLCJNU0lucHV0TWV0aG9kQ29udGV4dCIsImRvY3VtZW50TW9kZSIsInJlbExpc3QiLCJzdXBwb3J0cyIsImNhblByZWZldGNoIiwicHJlZmV0Y2hWaWFEb20iLCJyZXMiLCJyZWoiLCJxdWVyeVNlbGVjdG9yIiwicmVsIiwiY3Jvc3NPcmlnaW4iLCJfX05FWFRfQ1JPU1NfT1JJR0lOIiwib25sb2FkIiwib25lcnJvciIsImhlYWQiLCJhcHBlbmRDaGlsZCIsIkFTU0VUX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhcHBlbmRTY3JpcHQiLCJzcmMiLCJzY3JpcHQiLCJyZWplY3QiLCJib2R5IiwiZGV2QnVpbGRQcm9taXNlIiwicmVzb2x2ZVByb21pc2VXaXRoVGltZW91dCIsIm1zIiwiY2FuY2VsbGVkIiwiciIsIl9fQlVJTERfTUFOSUZFU1QiLCJvbkJ1aWxkTWFuaWZlc3QiLCJfX0JVSUxEX01BTklGRVNUX0NCIiwiZ2V0RmlsZXNGb3JSb3V0ZSIsImFzc2V0UHJlZml4Iiwicm91dGUiLCJzY3JpcHRzIiwiZW5jb2RlVVJJIiwiY3NzIiwibWFuaWZlc3QiLCJhbGxGaWxlcyIsImZpbHRlciIsInYiLCJlbnRyeXBvaW50cyIsIk1hcCIsImxvYWRlZFNjcmlwdHMiLCJzdHlsZVNoZWV0cyIsInJvdXRlcyIsIm1heWJlRXhlY3V0ZVNjcmlwdCIsImZldGNoU3R5bGVTaGVldCIsImZldGNoIiwib2siLCJ0ZXh0IiwiY29udGVudCIsIndoZW5FbnRyeXBvaW50Iiwib25FbnRyeXBvaW50IiwiZXhlY3V0ZSIsImZuIiwiY29tcG9uZW50IiwiZXJyb3IiLCJpbnB1dCIsIm9sZCIsImxvYWRSb3V0ZSIsInJvdXRlRmlsZXNQcm9taXNlIiwiYWxsIiwiaGFzIiwiZW50cnlwb2ludCIsInN0eWxlcyIsImZpbmFsbHkiLCJhc3NpZ24iLCJjbiIsIm5hdmlnYXRvciIsImNvbm5lY3Rpb24iLCJzYXZlRGF0YSIsImVmZmVjdGl2ZVR5cGUiLCJvdXRwdXQiLCJlbnVtZXJhYmxlIiwiX3dpdGhSb3V0ZXIiLCJjcmVhdGVSb3V0ZXIiLCJtYWtlUHVibGljUm91dGVySW5zdGFuY2UiLCJfcm91dGVyQ29udGV4dCIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJwdXNoIiwidXJsUHJvcGVydHlGaWVsZHMiLCJyb3V0ZXJFdmVudHMiLCJjb3JlTWV0aG9kRmllbGRzIiwiZXZlbnRzIiwiZmllbGQiLCJnZXRSb3V0ZXIiLCJvbiIsImV2ZW50RmllbGQiLCJjaGFyQXQiLCJ0b1VwcGVyQ2FzZSIsInN1YnN0cmluZyIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJtZXNzYWdlIiwic3RhY2siLCJ1c2VDb250ZXh0IiwiUm91dGVyQ29udGV4dCIsImluc3RhbmNlIiwicHJvcGVydHkiLCJBcnJheSIsImlzQXJyYXkiLCJoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZGlzYWJsZWQiLCJpc0Rpc2FibGVkIiwidW5vYnNlcnZlIiwidmlzaWJsZSIsInNldFZpc2libGUiLCJ1c2VTdGF0ZSIsInVuZGVmaW5lZCIsInRhZ05hbWUiLCJvYnNlcnZlIiwiaWRsZUNhbGxiYWNrIiwiZWxlbWVudCIsImNhbGxiYWNrIiwib2JzZXJ2ZXIiLCJlbGVtZW50cyIsImNyZWF0ZU9ic2VydmVyIiwiZGVsZXRlIiwic2l6ZSIsImRpc2Nvbm5lY3QiLCJvYnNlcnZlcnMiLCJlbnRyaWVzIiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsIndpdGhSb3V0ZXIiLCJDb21wb3NlZENvbXBvbmVudCIsIldpdGhSb3V0ZXJXcmFwcGVyIiwiZ2V0SW5pdGlhbFByb3BzIiwib3JpZ0dldEluaXRpYWxQcm9wcyIsImRpc3BsYXlOYW1lIiwiZGVsTG9jYWxlIiwiaGFzQmFzZVBhdGgiLCJkZWxCYXNlUGF0aCIsImludGVycG9sYXRlQXMiLCJfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCIsIl9yb3V0ZUxvYWRlciIsIl9kZW5vcm1hbGl6ZVBhZ2VQYXRoIiwiX25vcm1hbGl6ZUxvY2FsZVBhdGgiLCJfbWl0dCIsIl91dGlscyIsIl9pc0R5bmFtaWMiLCJfcGFyc2VSZWxhdGl2ZVVybCIsIl9xdWVyeXN0cmluZyIsIl9yZXNvbHZlUmV3cml0ZXMiLCJfcm91dGVNYXRjaGVyIiwiX3JvdXRlUmVnZXgiLCJkZXRlY3REb21haW5Mb2NhbGUiLCJfX05FWFRfSTE4Tl9TVVBQT1JUIiwiYmFzZVBhdGgiLCJfX05FWFRfUk9VVEVSX0JBU0VQQVRIIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsImFkZFBhdGhQcmVmaXgiLCJwcmVmaXgiLCJzdGFydHNXaXRoIiwicGF0aE5vUXVlcnlIYXNoIiwibm9ybWFsaXplTG9jYWxlUGF0aCIsImRldGVjdGVkTG9jYWxlIiwiZGV0ZWN0ZWREb21haW4iLCJodHRwIiwiZG9tYWluIiwicGF0aG5hbWUiLCJwYXRoTG93ZXIiLCJ0b0xvd2VyQ2FzZSIsImxvY2FsZUxvd2VyIiwibGVuZ3RoIiwic3Vic3RyIiwicXVlcnlJbmRleCIsImhhc2hJbmRleCIsInVybCIsImxvY2F0aW9uT3JpZ2luIiwiZ2V0TG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsIlVSTCIsIm9yaWdpbiIsImFzUGF0aG5hbWUiLCJxdWVyeSIsImludGVycG9sYXRlZFJvdXRlIiwiZHluYW1pY1JlZ2V4IiwiZ2V0Um91dGVSZWdleCIsImR5bmFtaWNHcm91cHMiLCJncm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImdldFJvdXRlTWF0Y2hlciIsInBhcmFtcyIsImV2ZXJ5IiwicGFyYW0iLCJyZXBlYXQiLCJvcHRpb25hbCIsInJlcGxhY2VkIiwic2VnbWVudCIsImVuY29kZVVSSUNvbXBvbmVudCIsImpvaW4iLCJyZXN1bHQiLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJmaWx0ZXJlZFF1ZXJ5IiwiaW5jbHVkZXMiLCJyZXNvbHZlQXMiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmb3JtYXRXaXRoVmFsaWRhdGlvbiIsInVybFByb3RvTWF0Y2giLCJtYXRjaCIsInVybEFzU3RyaW5nTm9Qcm90byIsInVybFBhcnRzIiwic3BsaXQiLCJub3JtYWxpemVkVXJsIiwibm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzIiwiYXNQYXRoIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImlzRHluYW1pY1JvdXRlIiwic2VhcmNoUGFyYW1zIiwic2VhcmNoUGFyYW1zVG9VcmxRdWVyeSIsImhhc2giLCJzdHJpcE9yaWdpbiIsInByZXBhcmVVcmxBcyIsImhyZWZIYWRPcmlnaW4iLCJhc0hhZE9yaWdpbiIsInByZXBhcmVkVXJsIiwicHJlcGFyZWRBcyIsInJlc29sdmVEeW5hbWljUm91dGUiLCJwYWdlcyIsImNsZWFuUGF0aG5hbWUiLCJkZW5vcm1hbGl6ZVBhZ2VQYXRoIiwic29tZSIsInBhZ2UiLCJyZSIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiIsImhpc3RvcnkiLCJzZXNzaW9uU3RvcmFnZSIsInNldEl0ZW0iLCJyZW1vdmVJdGVtIiwibiIsIlNTR19EQVRBX05PVF9GT1VORCIsImZldGNoUmV0cnkiLCJhdHRlbXB0cyIsImNyZWRlbnRpYWxzIiwic3RhdHVzIiwianNvbiIsImRhdGEiLCJub3RGb3VuZCIsImZldGNoTmV4dERhdGEiLCJkYXRhSHJlZiIsImlzU2VydmVyUmVuZGVyIiwiUm91dGVyIiwiY29uc3RydWN0b3IiLCJwYXRobmFtZTEiLCJxdWVyeTEiLCJhczEiLCJpbml0aWFsUHJvcHMiLCJwYWdlTG9hZGVyIiwiQXBwIiwid3JhcEFwcCIsIkNvbXBvbmVudCIsIkNvbXBvbmVudDEiLCJlcnIxIiwic3Vic2NyaXB0aW9uIiwiaXNGYWxsYmFjayIsImlzUHJldmlldyIsInNkYyIsInNkciIsIl9pZHgiLCJvblBvcFN0YXRlIiwic3RhdGUiLCJjaGFuZ2VTdGF0ZSIsImdldFVSTCIsIl9fTiIsImZvcmNlZFNjcm9sbCIsImlkeCIsIkpTT04iLCJzdHJpbmdpZnkiLCJ4IiwicGFnZVhPZmZzZXQiLCJ5IiwicGFnZVlPZmZzZXQiLCJnZXRJdGVtIiwicGFyc2UiLCJwYXJzZVJlbGF0aXZlVXJsIiwiaXNTc3IiLCJfYnBzIiwiY2hhbmdlIiwiX3NoYWxsb3ciLCJjb21wb25lbnRzIiwiaW5pdGlhbCIsIl9fTl9TU0ciLCJfX05fU1NQIiwiYXV0b0V4cG9ydER5bmFtaWMiLCJfX05FWFRfREFUQV9fIiwiYXV0b0V4cG9ydCIsInN1YiIsImNsYyIsIl93cmFwQXBwIiwiaXNSZWFkeSIsImdzc3AiLCJnaXAiLCJhcHBHaXAiLCJnc3AiLCJsb2NhdGlvbiIsInNlYXJjaCIsIl9fTkVYVF9IQVNfUkVXUklURVMiLCJob3N0bmFtZSIsIl9zaG91bGRSZXNvbHZlSHJlZiIsImFkZEV2ZW50TGlzdGVuZXIiLCJzY3JvbGxSZXN0b3JhdGlvbiIsInJlbG9hZCIsImJhY2siLCJtZXRob2QiLCJzaG91bGRSZXNvbHZlSHJlZiIsIl9oIiwicHJldkxvY2FsZSIsInBhcnNlZEFzIiwibG9jYWxlUGF0aFJlc3VsdCIsImRpZE5hdmlnYXRlIiwiYXNOb0Jhc2VQYXRoIiwiU1QiLCJwZXJmb3JtYW5jZSIsIm1hcmsiLCJyb3V0ZVByb3BzIiwiX2luRmxpZ2h0Um91dGUiLCJhYm9ydENvbXBvbmVudExvYWQiLCJjbGVhbmVkQXMiLCJsb2NhbGVDaGFuZ2UiLCJvbmx5QUhhc2hDaGFuZ2UiLCJlbWl0Iiwic2Nyb2xsVG9IYXNoIiwibm90aWZ5IiwicGFyc2VkIiwicmV3cml0ZXMiLCJnZXRQYWdlTGlzdCIsIl9fcmV3cml0ZXMiLCJ1cmxJc05ldyIsInJld3JpdGVzUmVzdWx0IiwibWF0Y2hlZFBhZ2UiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJlZjEiLCJyb3V0ZUluZm8iLCJnZXRSb3V0ZUluZm8iLCJwYWdlUHJvcHMiLCJfX05fUkVESVJFQ1QiLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJuZXdVcmwiLCJuZXdBcyIsIl9fTl9QUkVWSUVXIiwibm90Rm91bmRSb3V0ZSIsImZldGNoQ29tcG9uZW50IiwiYXBwQ29tcCIsIm5leHQiLCJpc1ByZXJlbmRlcmVkIiwic3RhdHVzQ29kZSIsImlzVmFsaWRTaGFsbG93Um91dGUiLCJfc2Nyb2xsIiwic2hvdWxkU2Nyb2xsIiwicmVzZXRTY3JvbGwiLCJkb2N1bWVudEVsZW1lbnQiLCJsYW5nIiwiaGFuZGxlUm91dGVJbmZvRXJyb3IiLCJsb2FkRXJyb3JGYWlsIiwiZ2lwRXJyIiwicm91dGVJbmZvRXJyIiwiZXhpc3RpbmdSb3V0ZUluZm8iLCJjYWNoZWRSb3V0ZUluZm8iLCJtb2QiLCJpc1ZhbGlkRWxlbWVudFR5cGUiLCJnZXREYXRhSHJlZiIsIl9nZXREYXRhIiwiX2dldFN0YXRpY0RhdGEiLCJfZ2V0U2VydmVyRGF0YSIsImVycjIiLCJiZWZvcmVQb3BTdGF0ZSIsIm9sZFVybE5vSGFzaCIsIm9sZEhhc2giLCJuZXdVcmxOb0hhc2giLCJuZXdIYXNoIiwic2Nyb2xsVG8iLCJpZEVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJzY3JvbGxJbnRvVmlldyIsIm5hbWVFbCIsImdldEVsZW1lbnRzQnlOYW1lIiwicGF0aG5hbWUyIiwiX2lzU3NnIiwiaXNTc2ciLCJjYW5jZWwiLCJjb21wb25lbnRSZXN1bHQiLCJsb2FkUGFnZSIsImNhY2hlS2V5IiwicmVzb3VyY2VLZXkiLCJjdHgiLCJBcHAxIiwiQXBwVHJlZSIsImxvYWRHZXRJbml0aWFsUHJvcHMiXSwic291cmNlUm9vdCI6IiJ9