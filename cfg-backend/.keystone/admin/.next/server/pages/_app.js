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
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/timestamp/views */ "../../node_modules/@keystone-next/keystone/fields/types/timestamp/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../node_modules/@keystone-next/keystone/fields/types/relationship/views */ "../../node_modules/@keystone-next/keystone/fields/types/relationship/views/dist/keystone.cjs.js");
/* harmony import */ var _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_5__);






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
  fieldViews: [_node_modules_keystone_next_keystone_internal_do_not_use_will_break_in_patch_admin_ui_id_field_view__WEBPACK_IMPORTED_MODULE_1__, _node_modules_keystone_next_keystone_fields_types_text_views__WEBPACK_IMPORTED_MODULE_2__, _node_modules_keystone_next_keystone_fields_types_select_views__WEBPACK_IMPORTED_MODULE_3__, _node_modules_keystone_next_keystone_fields_types_timestamp_views__WEBPACK_IMPORTED_MODULE_4__, _node_modules_keystone_next_keystone_fields_types_relationship_views__WEBPACK_IMPORTED_MODULE_5__],
  adminMetaHash: '15vp1i4',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBLElBQUk7QUFDSiw2REFBNkQsSUFBSTtBQUNqRTtBQUNBOztBQUVBLHdCQUF3QjtBQUN4QixtQkFBbUI7QUFDbkIsZUFBZTtBQUNmLHNCQUFzQjtBQUN0Qix3QkFBd0I7Ozs7Ozs7Ozs7OztBQ2hiWDs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELCtCQUErQixtQkFBTyxDQUFDLDRIQUFnRDtBQUN2RixhQUFhLG1CQUFPLENBQUMsZ0NBQWE7QUFDbEMsYUFBYSxtQkFBTyxDQUFDLGtEQUFXO0FBQ2hDLFlBQVksbUJBQU8sQ0FBQyxvQkFBTzs7QUFFM0IsK0JBQStCLGlDQUFpQzs7QUFFaEU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsMENBQXlDO0FBQ3pDO0FBQ0EscUJBQXFCO0FBQ3JCLENBQUMsRUFBQztBQUNGLGdEQUErQztBQUMvQztBQUNBLHFCQUFxQjtBQUNyQixDQUFDLEVBQUM7QUFDRiw0REFBMkQ7QUFDM0Q7QUFDQSxxQkFBcUI7QUFDckIsQ0FBQyxFQUFDO0FBQ0YsNkNBQTRDO0FBQzVDO0FBQ0EscUJBQXFCO0FBQ3JCLENBQUMsRUFBQztBQUNGLDhDQUE2QztBQUM3QztBQUNBLHFCQUFxQjtBQUNyQixDQUFDLEVBQUM7QUFDRixZQUFZOzs7Ozs7Ozs7Ozs7QUN4REM7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDRGQUFnQztBQUN2RCwrQkFBK0IsbUJBQU8sQ0FBQyw0SEFBZ0Q7QUFDdkYsV0FBVyxtQkFBTyxDQUFDLDRDQUFtQjs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEscUJBQXFCOzs7Ozs7Ozs7Ozs7QUMzQlI7O0FBRWIsZUFBZSxtQkFBTyxDQUFDLDRGQUFnQztBQUN2RCxXQUFXLG1CQUFPLENBQUMsNENBQW1CO0FBQ3RDLG1DQUFtQyxtQkFBTyxDQUFDLHdJQUE2Qzs7QUFFeEY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsZ0JBQWdCOzs7Ozs7Ozs7Ozs7QUM3Qkg7O0FBRWIsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLGtCQUFrQixtQkFBTyxDQUFDLHdDQUFpQjtBQUMzQyxXQUFXLG1CQUFPLENBQUMsNENBQW1CO0FBQ3RDLGFBQWEsbUJBQU8sQ0FBQyxnREFBcUI7QUFDMUMsWUFBWSxtQkFBTyxDQUFDLDhDQUFvQjtBQUN4QyxjQUFjLG1CQUFPLENBQUMsa0RBQXNCO0FBQzVDLGFBQWEsbUJBQU8sQ0FBQyxzQ0FBZ0I7QUFDckMsb0NBQW9DLG1CQUFPLENBQUMsMElBQThDO0FBQzFGLGFBQWEsbUJBQU8sQ0FBQyxnSEFBOEI7QUFDbkQseUJBQXlCLG1CQUFPLENBQUMsd0lBQTBDOztBQUUzRSwrQkFBK0IsaUNBQWlDOztBQUVoRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsb0RBQW9ELDhCQUE4QjtBQUNyRixjQUFjLGlDQUFpQztBQUMvQztBQUNBLGlCQUFpQjtBQUNqQjtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixjQUFjO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVyxnQkFBZ0I7QUFDM0I7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIOztBQUVBLHdCQUF3Qjs7Ozs7Ozs7Ozs7O0FDcklYOztBQUViLG9CQUFvQixtQkFBTyxDQUFDLHdHQUFzQztBQUNsRSxXQUFXLG1CQUFPLENBQUMsNENBQW1CO0FBQ3RDLFlBQVksbUJBQU8sQ0FBQyxvQkFBTzs7QUFFM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzREFBc0QsVUFBVTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUEsY0FBYzs7Ozs7Ozs7Ozs7O0FDbEVEOztBQUViLFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsb0JBQU87O0FBRTNCLCtCQUErQixpQ0FBaUM7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBOztBQUVBLDBCQUEwQjs7Ozs7Ozs7Ozs7O0FDakNiOztBQUViLFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsYUFBYSxtQkFBTyxDQUFDLHNDQUFnQjs7QUFFckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBLHFCQUFxQjs7Ozs7Ozs7Ozs7O0FDakNSOztBQUViLGFBQWEsbUJBQU8sQ0FBQyxzQ0FBZ0I7O0FBRXJDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw0QkFBNEI7Ozs7Ozs7Ozs7OztBQzdEZjs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0JBQWdCO0FBQzNDLHNCQUFzQixRQUFRO0FBQzlCLGlDQUFpQyxRQUFRO0FBQ3pDLGlDQUFpQyxRQUFRO0FBQ3pDLGlDQUFpQyxRQUFRO0FBQ3pDLHFDQUFxQyxrQkFBa0I7QUFDdkQscUNBQXFDLGtCQUFrQjtBQUN2RCxxQ0FBcUMsa0JBQWtCO0FBQ3ZELHVCQUF1QixRQUFRO0FBQy9CLDZCQUE2QixRQUFRO0FBQ3JDLHdCQUF3QixRQUFRO0FBQ2hDLHdCQUF3QixRQUFRO0FBQ2hDLDRCQUE0QixRQUFRO0FBQ3BDLHVDQUF1QyxRQUFRO0FBQy9DLHVDQUF1QyxRQUFRO0FBQy9DLHNDQUFzQyxRQUFRO0FBQzlDLHNDQUFzQyxRQUFRO0FBQzlDO0FBQ0E7O0FBRUEsbUJBQW1COzs7Ozs7Ozs7Ozs7QUNqQ047O0FBRWI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsc0JBQXNCOzs7Ozs7Ozs7Ozs7QUN0RFQ7O0FBRWIsa0JBQWtCLG1CQUFPLENBQUMsb0RBQXVCO0FBQ2pELGNBQWMsbUJBQU8sQ0FBQyx3QkFBUzs7QUFFL0IsK0JBQStCLGlDQUFpQzs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTs7QUFFTixHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsK0NBQStDOzs7Ozs7Ozs7Ozs7QUNqQ2xDOztBQUViLHNCQUFzQixtQkFBTyxDQUFDLDhDQUFvQjtBQUNsRCxzQkFBc0IsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDakQsb0JBQW9CLG1CQUFPLENBQUMsc0ZBQXdDO0FBQ3BFLGNBQWMsbUJBQU8sQ0FBQyx3QkFBUztBQUMvQixnQkFBZ0IsbUJBQU8sQ0FBQyw4QkFBWTtBQUNwQyx3QkFBd0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDeEUscUJBQXFCLG1CQUFPLENBQUMsZ0ZBQXFDOztBQUVsRSwrQkFBK0IsaUNBQWlDOztBQUVoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0IsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw2RkFBNkY7QUFDN0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFGQUFxRixNQUFNO0FBQzNGOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLENBQUMsSUFBSTtBQUNMOztBQUVBLDZCQUE2QixFQUFFLGdHQUFnRyxHQUFHOztBQUVsSTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNGQUFzRixNQUFNO0FBQzVGOztBQUVBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsZ0JBQWdCO0FBQ2hCLGVBQWU7QUFDZixZQUFZO0FBQ1osY0FBYztBQUNkLHFDQUFxQzs7Ozs7Ozs7Ozs7O0FDOUt4Qjs7QUFFYixzQkFBc0IsbUJBQU8sQ0FBQyxzSUFBeUM7QUFDdkUsb0JBQW9CLG1CQUFPLENBQUMsd0dBQXNDO0FBQ2xFLG1CQUFPLENBQUMsOEJBQVk7QUFDcEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDL0Isd0JBQXdCLG1CQUFPLENBQUMsc0ZBQXdDOztBQUV4RTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELHNDQUFzQztBQUN0QztBQUNBO0FBQ0EseUNBQXlDLGtCQUFrQjtBQUMzRDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxhQUFhLDBCQUEwQjtBQUN2QztBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0EsYUFBYSwwQkFBMEI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNILENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRCxpQkFBaUI7QUFDakIsaUJBQWlCO0FBQ2pCLDBCQUEwQjtBQUMxQixrQkFBa0I7QUFDbEIsY0FBYzs7Ozs7Ozs7Ozs7O0FDenBDRDs7QUFFYixZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0Isa0JBQWtCLG1CQUFPLENBQUMsd0NBQWlCO0FBQzNDLDhDQUE4QyxtQkFBTyxDQUFDLGtMQUErRDs7QUFFckgsK0JBQStCLGlDQUFpQzs7QUFFaEU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEdBQUc7QUFDSDs7QUFFQSx3QkFBd0I7QUFDeEIscUNBQXFDO0FBQ3JDLHdDQUF3QztBQUN4Qyx3QkFBd0I7Ozs7Ozs7Ozs7OztBQzVHWDs7QUFFYixZQUFZLG1CQUFPLENBQUMsb0JBQU87O0FBRTNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EscUhBQXFILHNCQUFzQix3QkFBd0Isb0NBQW9DO0FBQ3ZNOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLDZEQUE2RDtBQUM3RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHlCQUF5Qjs7Ozs7Ozs7Ozs7O0FDckVaOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Qsb0JBQW9CLG1CQUFPLENBQUMsd0dBQXNDO0FBQ2xFLCtCQUErQixtQkFBTyxDQUFDLDRIQUFnRDtBQUN2RixxQkFBcUIsbUJBQU8sQ0FBQyx3R0FBc0M7QUFDbkUsbUJBQU8sQ0FBQyxvREFBdUI7QUFDL0IsWUFBWSxtQkFBTyxDQUFDLG9CQUFPO0FBQzNCLFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxXQUFXLG1CQUFPLENBQUMsa0JBQU07QUFDekIsYUFBYSxtQkFBTyxDQUFDLHNDQUFnQjs7QUFFckM7O0FBRUE7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixXQUFXLFdBQVcsMkNBQTJDO0FBQ2pGLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVDQUF1Qyw2QkFBNkI7QUFDcEUsZUFBZSw0QkFBNEI7QUFDM0MsVUFBVSxRQUFRO0FBQ2xCLFVBQVUsV0FBVyxJQUFJO0FBQ3pCLFVBQVU7QUFDVjtBQUNBLGVBQWUsaUNBQWlDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EscURBQXFELDZCQUE2QjtBQUNsRix5QkFBeUIsNEJBQTRCO0FBQ3JELG9CQUFvQixXQUFXLElBQUk7QUFDbkMsb0JBQW9CLFFBQVE7QUFDNUIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsK0NBQStDLFdBQVc7QUFDMUQ7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHLEdBQUc7QUFDTjtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1YsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQSwwQkFBMEI7Ozs7Ozs7Ozs7OztBQzFRYjs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELG9CQUFvQixtQkFBTyxDQUFDLHdHQUFzQztBQUNsRSxlQUFlLG1CQUFPLENBQUMsNEZBQWdDO0FBQ3ZELFlBQVksbUJBQU8sQ0FBQyxvQkFBTztBQUMzQixhQUFhLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxhQUFhLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzFDLG1DQUFtQyxtQkFBTyxDQUFDLG9KQUF5RDtBQUNwRyxvQ0FBb0MsbUJBQU8sQ0FBQyxzSkFBMEQ7QUFDdEcsYUFBYSxtQkFBTyxDQUFDLHNDQUFnQjtBQUNyQyxvQkFBb0IsbUJBQU8sQ0FBQyxnSkFBdUQ7QUFDbkYsbUJBQU8sQ0FBQywwR0FBdUM7QUFDL0MsbUJBQU8sQ0FBQyw4RkFBNEM7QUFDcEQsbUJBQU8sQ0FBQyxrREFBVztBQUNuQiwrQkFBK0IsbUJBQU8sQ0FBQyw0SEFBZ0Q7QUFDdkYsbUJBQU8sQ0FBQyxnQ0FBYTtBQUNyQixtQkFBTyxDQUFDLGtEQUFzQjtBQUM5QixtQkFBTyxDQUFDLGdHQUE2QztBQUNyRCxtQkFBTyxDQUFDLDRGQUEyQztBQUNuRCxtQkFBTyxDQUFDLGdKQUF1RDtBQUMvRCx1QkFBdUIsbUJBQU8sQ0FBQyxzSkFBMEQ7QUFDekYsbUJBQU8sQ0FBQyxnREFBcUI7QUFDN0IsY0FBYyxtQkFBTyxDQUFDLGtEQUFzQjtBQUM1QyxjQUFjLG1CQUFPLENBQUMsa0RBQXNCO0FBQzVDLGlCQUFpQixtQkFBTyxDQUFDLDBJQUFvRDtBQUM3RSw4Q0FBOEMsbUJBQU8sQ0FBQyxvTUFBaUY7QUFDdkksa0JBQWtCLG1CQUFPLENBQUMsd0NBQWlCO0FBQzNDLHVFQUF1RSxtQkFBTyxDQUFDLDhLQUFnRDtBQUMvSCxZQUFZLG1CQUFPLENBQUMsOENBQW9CO0FBQ3hDLGFBQWEsbUJBQU8sQ0FBQyxrSUFBZ0Q7QUFDckUsdUJBQXVCLG1CQUFPLENBQUMsc0pBQTBEO0FBQ3pGLG1CQUFPLENBQUMsa0RBQXNCO0FBQzlCLG1CQUFPLENBQUMsb0NBQWU7QUFDdkIsbUJBQU8sQ0FBQyxrSUFBZ0Q7QUFDeEQsbUJBQU8sQ0FBQyx3SkFBMkQ7QUFDbkUsbUJBQU8sQ0FBQywwSkFBNEQ7QUFDcEUseUJBQXlCLG1CQUFPLENBQUMsMEpBQTREO0FBQzdGLG1CQUFPLENBQUMsOEhBQThDO0FBQ3RELG1CQUFPLENBQUMsOEJBQVk7QUFDcEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDL0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDNUIsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDM0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQixtQkFBTyxDQUFDLGdGQUFxQztBQUM3QyxtQkFBTyxDQUFDLG9EQUF1QjtBQUMvQixtQkFBTyxDQUFDLHdHQUFzQztBQUM5QyxtQkFBTyxDQUFDLG9EQUF1QjtBQUMvQixtQkFBTyxDQUFDLGtCQUFNOztBQUVkLCtCQUErQixpQ0FBaUM7O0FBRWhFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osVUFBVSxpQ0FBaUMsU0FBUyxRQUFRO0FBQzVEO0FBQ0Esb0JBQW9CO0FBQ3BCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLHFEQUFxRCw4QkFBOEI7QUFDdEYsa0JBQWtCLGlDQUFpQyxVQUFVLFNBQVM7QUFDdEUsY0FBYztBQUNkO0FBQ0EsU0FBUztBQUNUO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUcsOENBQThDO0FBQ2pEO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHLG9EQUFvRCw4QkFBOEI7QUFDckYsY0FBYyxpQ0FBaUM7QUFDL0MsVUFBVTtBQUNWO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLHVCQUF1QjtBQUNsRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0Esa0NBQWtDLGFBQWE7QUFDL0MsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUssS0FBSyxhQUFhLEVBQUUsV0FBVyxFQUFFLDhCQUE4QjtBQUNwRTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLGdCQUFnQixpQkFBaUIsR0FBRyxHQUFHO0FBQ3ZDLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixxQkFBcUI7QUFDbEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsK0JBQStCLG1DQUFtQyxVQUFVLE1BQU0sV0FBVztBQUM3RiwwQkFBMEI7QUFDMUI7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EsYUFBYTs7QUFFYjtBQUNBO0FBQ0E7O0FBRUEsNkNBQTZDOztBQUU3Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBLHVEQUF1RCxZQUFZO0FBQ25FO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQSxPQUFPO0FBQ1AsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBLE9BQU87QUFDUDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxxQ0FBcUMsT0FBTztBQUM1Qzs7QUFFQSxzQkFBc0I7QUFDdEI7QUFDQSxLQUFLLG1CQUFtQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsOENBQThDO0FBQzlDO0FBQ0EsZ0JBQWdCLFVBQVUsR0FBRyxNQUFNO0FBQ25DLEtBQUs7QUFDTDs7QUFFQSw0Q0FBNEM7QUFDNUM7QUFDQSxjQUFjLFVBQVUsR0FBRyw0RkFBNEY7QUFDdkgsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQkFBa0IsVUFBVSxHQUFHLEtBQUs7QUFDcEMsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxrQkFBa0IsVUFBVSxHQUFHLGVBQWU7QUFDOUMsT0FBTztBQUNQLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSywyR0FBMkcsc0JBQXNCLGlCQUFpQixhQUFhLEVBQUUsb0JBQW9CO0FBQzFMOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNUOztBQUVBLE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsWUFBWTtBQUM3RDtBQUNBLFdBQVc7QUFDWDtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQSxXQUFXO0FBQ1gsVUFBVTtBQUNWLGlEQUFpRCxZQUFZO0FBQzdEO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0EsU0FBUztBQUNULFFBQVE7QUFDUiwrQ0FBK0MsWUFBWTtBQUMzRDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTs7QUFFSjtBQUNBOztBQUVBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsY0FBYyxVQUFVO0FBQ3hCLFlBQVksVUFBVSxHQUFHLFFBQVE7QUFDakM7QUFDQSxHQUFHLGdEQUFnRCxVQUFVO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGNBQWMsVUFBVTtBQUN4QixZQUFZLFVBQVUsR0FBRyxRQUFRO0FBQ2pDLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0VBQW9FO0FBQ3BFO0FBQ0EscUJBQXFCO0FBQ3JCLFdBQVcsa0RBQWtELFlBQVksWUFBWTtBQUNyRjtBQUNBLHVCQUF1QjtBQUN2QixhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsWUFBWTtBQUMvQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsT0FBTztBQUNsQzs7QUFFQTtBQUNBLHFCQUFxQixZQUFZO0FBQ2pDLE9BQU87O0FBRVA7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLDZCQUE2QjtBQUNuRSxlQUFlLDRCQUE0QjtBQUMzQztBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osYUFBYTtBQUNiLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDbjJDTDs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUsd0tBQWlEO0FBQ25EOzs7Ozs7Ozs7Ozs7QUNOYTs7QUFFYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7O0FBRTdELG9CQUFvQixtQkFBTyxDQUFDLHdHQUFzQztBQUNsRSxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsV0FBVyxtQkFBTyxDQUFDLDRDQUFtQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzFDLHVCQUF1QixtQkFBTyxDQUFDLHNFQUFnQztBQUMvRCxhQUFhLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLGdKQUF1RDtBQUNuRixlQUFlLG1CQUFPLENBQUMsc0lBQWtEO0FBQ3pFLG1CQUFPLENBQUMsMEdBQXVDO0FBQy9DLG1CQUFPLENBQUMsOEZBQTRDO0FBQ3BELG1CQUFPLENBQUMsa0RBQVc7QUFDbkIsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDNUIsbUJBQU8sQ0FBQyxrREFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxnREFBcUI7QUFDN0IsbUJBQU8sQ0FBQyxrREFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxvQ0FBZTtBQUN2QixtQkFBTyxDQUFDLGtJQUFnRDtBQUN4RCxtQkFBTyxDQUFDLDRIQUFnRDtBQUN4RCxtQkFBTyxDQUFDLHdKQUEyRDtBQUNuRSxtQkFBTyxDQUFDLHNDQUFnQjtBQUN4QixtQkFBTyxDQUFDLDBKQUE0RDtBQUNwRSxtQkFBTyxDQUFDLDRGQUFnQztBQUN4QyxtQkFBTyxDQUFDLGdDQUFhO0FBQ3JCLG1CQUFPLENBQUMsa0RBQXNCO0FBQzlCLG1CQUFPLENBQUMsZ0dBQTZDO0FBQ3JELG1CQUFPLENBQUMsNEZBQTJDO0FBQ25ELG1CQUFPLENBQUMsZ0pBQXVEO0FBQy9ELG1CQUFPLENBQUMsd0NBQWlCO0FBQ3pCLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzdCLG1CQUFPLENBQUMsb0pBQXlEO0FBQ2pFLG1CQUFPLENBQUMsOEJBQVk7QUFDcEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDL0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDNUIsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDM0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQixtQkFBTyxDQUFDLGdGQUFxQzs7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLFlBQVk7QUFDN0c7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUdBQWlHLFlBQVk7QUFDN0c7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pEO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsSUFBSTs7QUFFUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx3REFBd0QsT0FBTyxlQUFlLE9BQU87QUFDckY7O0FBRUE7QUFDQSxrREFBa0QsWUFBWSxVQUFVLFlBQVk7QUFDcEYsT0FBTzs7QUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlCQUFpQjtBQUNqQixZQUFZO0FBQ1osYUFBYTtBQUNiLGtCQUFrQjs7Ozs7Ozs7Ozs7O0FDL09MOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxrS0FBaUQ7QUFDbkQ7Ozs7Ozs7Ozs7OztBQ05hOztBQUViLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7QUFFN0Qsb0JBQW9CLG1CQUFPLENBQUMsd0dBQXNDO0FBQ2xFLFdBQVcsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDdEMsYUFBYSxtQkFBTyxDQUFDLGdEQUFxQjtBQUMxQyxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0Isb0JBQW9CLG1CQUFPLENBQUMsZ0pBQXVEO0FBQ25GLGVBQWUsbUJBQU8sQ0FBQyxzSUFBa0Q7QUFDekUsbUJBQU8sQ0FBQywwR0FBdUM7QUFDL0MsbUJBQU8sQ0FBQyxnREFBcUI7QUFDN0IsbUJBQU8sQ0FBQyw4RkFBNEM7QUFDcEQsbUJBQU8sQ0FBQyxrREFBVztBQUNuQixtQkFBTyxDQUFDLDhDQUFvQjtBQUM1QixtQkFBTyxDQUFDLGtEQUFzQjtBQUM5QixtQkFBTyxDQUFDLGdEQUFxQjtBQUM3QixtQkFBTyxDQUFDLGtEQUFzQjtBQUM5QixtQkFBTyxDQUFDLG9DQUFlO0FBQ3ZCLG1CQUFPLENBQUMsa0lBQWdEO0FBQ3hELG1CQUFPLENBQUMsNEhBQWdEO0FBQ3hELG1CQUFPLENBQUMsd0pBQTJEO0FBQ25FLG1CQUFPLENBQUMsc0NBQWdCO0FBQ3hCLG1CQUFPLENBQUMsMEpBQTREO0FBQ3BFLG1CQUFPLENBQUMsNEZBQWdDO0FBQ3hDLG1CQUFPLENBQUMsZ0NBQWE7QUFDckIsbUJBQU8sQ0FBQyxrREFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxnR0FBNkM7QUFDckQsbUJBQU8sQ0FBQyw0RkFBMkM7QUFDbkQsbUJBQU8sQ0FBQyxnSkFBdUQ7QUFDL0QsbUJBQU8sQ0FBQyx3Q0FBaUI7QUFDekIsbUJBQU8sQ0FBQyxnREFBcUI7QUFDN0IsbUJBQU8sQ0FBQyxvSkFBeUQ7QUFDakUsbUJBQU8sQ0FBQyw4QkFBWTtBQUNwQixtQkFBTyxDQUFDLG9EQUF1QjtBQUMvQixtQkFBTyxDQUFDLHNGQUF3QztBQUNoRCxtQkFBTyxDQUFDLDhDQUFvQjtBQUM1QixtQkFBTyxDQUFDLDRDQUFtQjtBQUMzQixtQkFBTyxDQUFDLHNGQUF3QztBQUNoRCxtQkFBTyxDQUFDLHdCQUFTO0FBQ2pCLG1CQUFPLENBQUMsZ0ZBQXFDOztBQUU3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSw4REFBOEQsWUFBWTtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsUUFBUTtBQUNSLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpQkFBaUIsWUFBWTtBQUM3Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUF1QixZQUFZO0FBQ25DLE1BQU07QUFDTix1QkFBdUIsWUFBWSxtQkFBbUIsdUJBQXVCO0FBQzdFO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsWUFBWSx5QkFBeUIsdUJBQXVCO0FBQ2pGOztBQUVBO0FBQ0EscURBQXFELFlBQVksYUFBYSx1QkFBdUI7QUFDckc7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQSxZQUFZLGFBQWE7QUFDekI7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxrQkFBa0Isb0JBQW9CLEtBQUssTUFBTTtBQUNqRCxPQUFPOztBQUVQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCO0FBQ2pCLFlBQVk7QUFDWixhQUFhO0FBQ2Isa0JBQWtCOzs7Ozs7Ozs7Ozs7QUN4U0w7O0FBRWIsSUFBSSxLQUFxQyxFQUFFLEVBRTFDLENBQUM7QUFDRixFQUFFLGdLQUFpRDtBQUNuRDs7Ozs7Ozs7Ozs7O0FDTmE7O0FBRWIsOENBQTZDLEVBQUUsYUFBYSxFQUFDOztBQUU3RCxlQUFlLG1CQUFPLENBQUMsNEZBQWdDO0FBQ3ZELG9CQUFvQixtQkFBTyxDQUFDLHdHQUFzQztBQUNsRSxZQUFZLG1CQUFPLENBQUMsb0JBQU87QUFDM0IsV0FBVyxtQkFBTyxDQUFDLDRDQUFtQjtBQUN0QyxhQUFhLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzFDLG9CQUFvQixtQkFBTyxDQUFDLGdKQUF1RDtBQUNuRixlQUFlLG1CQUFPLENBQUMsc0lBQWtEO0FBQ3pFLG1CQUFPLENBQUMsMEdBQXVDO0FBQy9DLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzdCLG1CQUFPLENBQUMsOEZBQTRDO0FBQ3BELG1CQUFPLENBQUMsa0RBQVc7QUFDbkIsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDNUIsbUJBQU8sQ0FBQyxrREFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxnREFBcUI7QUFDN0IsbUJBQU8sQ0FBQyxrREFBc0I7QUFDOUIsbUJBQU8sQ0FBQyxvQ0FBZTtBQUN2QixtQkFBTyxDQUFDLGtJQUFnRDtBQUN4RCxtQkFBTyxDQUFDLDRIQUFnRDtBQUN4RCxtQkFBTyxDQUFDLHdKQUEyRDtBQUNuRSxtQkFBTyxDQUFDLHNDQUFnQjtBQUN4QixtQkFBTyxDQUFDLDBKQUE0RDtBQUNwRSxtQkFBTyxDQUFDLGdDQUFhO0FBQ3JCLG1CQUFPLENBQUMsa0RBQXNCO0FBQzlCLG1CQUFPLENBQUMsZ0dBQTZDO0FBQ3JELG1CQUFPLENBQUMsNEZBQTJDO0FBQ25ELG1CQUFPLENBQUMsZ0pBQXVEO0FBQy9ELG1CQUFPLENBQUMsd0NBQWlCO0FBQ3pCLG1CQUFPLENBQUMsZ0RBQXFCO0FBQzdCLFlBQVksbUJBQU8sQ0FBQyxnSUFBK0M7QUFDbkUsY0FBYyxtQkFBTyxDQUFDLDBCQUFVO0FBQ2hDLG1CQUFPLENBQUMsb0pBQXlEO0FBQ2pFLG1CQUFPLENBQUMsOEJBQVk7QUFDcEIsbUJBQU8sQ0FBQyxvREFBdUI7QUFDL0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyw4Q0FBb0I7QUFDNUIsbUJBQU8sQ0FBQyw0Q0FBbUI7QUFDM0IsbUJBQU8sQ0FBQyxzRkFBd0M7QUFDaEQsbUJBQU8sQ0FBQyx3QkFBUztBQUNqQixtQkFBTyxDQUFDLGdGQUFxQzs7QUFFN0M7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QscUJBQXFCLFVBQVUsR0FBRyxVQUFVO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsR0FBRztBQUNIOztBQUVBO0FBQ0EsaUdBQWlHLFlBQVk7QUFDN0csNkNBQTZDLGtCQUFrQjtBQUMvRDtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1AsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7O0FBRUEsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSw2Q0FBNkMsWUFBWTtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBLDZDQUE2QyxZQUFZO0FBQ3pELDZDQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQSxTQUFTO0FBQ1QsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxnQkFBZ0IsV0FBVztBQUMzQixHQUFHLEtBQUssYUFBYTtBQUNyQixXQUFXLFdBQVc7QUFDdEIsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCO0FBQ0E7O0FBRUEsMkRBQTJELE9BQU87O0FBRWxFO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQSxpQkFBaUI7QUFDakIsWUFBWTtBQUNaLGFBQWE7QUFDYixrQkFBa0I7Ozs7Ozs7Ozs7OztBQ3RVTDs7QUFFYixJQUFJLEtBQXFDLEVBQUUsRUFFMUMsQ0FBQztBQUNGLEVBQUUscUtBQWlEO0FBQ25EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBSU0sV0FBVyxHQUFHLEVBQWxCO0FBRUEsaUVBQWVOLDBIQUFNLENBQUM7QUFDcEJPLEVBQUFBLGlCQUFpQixFQUFFO0FBQ2pCQyxJQUFBQSxJQUFJLEVBQUUsVUFEVztBQUVqQkMsSUFBQUEsV0FBVyxFQUFFLENBQ1g7QUFDRUQsTUFBQUEsSUFBSSxFQUFFLHFCQURSO0FBRUVFLE1BQUFBLFNBQVMsRUFBRSxPQUZiO0FBR0VDLE1BQUFBLFlBQVksRUFBRTtBQUNaSCxRQUFBQSxJQUFJLEVBQUUsY0FETTtBQUVaSSxRQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFSixVQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFSyxVQUFBQSxJQUFJLEVBQUU7QUFDSkwsWUFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSk0sWUFBQUEsS0FBSyxFQUFFLFVBRkg7QUFHSkMsWUFBQUEsR0FBRyxFQUFFO0FBQUVDLGNBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLGNBQUFBLEdBQUcsRUFBRTtBQUFsQjtBQUhELFdBRlI7QUFPRUMsVUFBQUEsU0FBUyxFQUFFLEVBUGI7QUFRRUMsVUFBQUEsVUFBVSxFQUFFLEVBUmQ7QUFTRVIsVUFBQUEsWUFBWSxFQUFFO0FBQ1pILFlBQUFBLElBQUksRUFBRSxjQURNO0FBRVpJLFlBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VKLGNBQUFBLElBQUksRUFBRSxPQURSO0FBRUVLLGNBQUFBLElBQUksRUFBRTtBQUNKTCxnQkFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSk0sZ0JBQUFBLEtBQUssRUFBRSxXQUZIO0FBR0pDLGdCQUFBQSxHQUFHLEVBQUU7QUFBRUMsa0JBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLGtCQUFBQSxHQUFHLEVBQUU7QUFBbEI7QUFIRCxlQUZSO0FBT0VDLGNBQUFBLFNBQVMsRUFBRSxFQVBiO0FBUUVDLGNBQUFBLFVBQVUsRUFBRSxFQVJkO0FBU0VSLGNBQUFBLFlBQVksRUFBRTtBQUNaSCxnQkFBQUEsSUFBSSxFQUFFLGNBRE07QUFFWkksZ0JBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VKLGtCQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFSyxrQkFBQUEsSUFBSSxFQUFFO0FBQ0pMLG9CQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKTSxvQkFBQUEsS0FBSyxFQUFFLE9BRkg7QUFHSkMsb0JBQUFBLEdBQUcsRUFBRTtBQUFFQyxzQkFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsc0JBQUFBLEdBQUcsRUFBRTtBQUFsQjtBQUhELG1CQUZSO0FBT0VDLGtCQUFBQSxTQUFTLEVBQUUsRUFQYjtBQVFFQyxrQkFBQUEsVUFBVSxFQUFFLEVBUmQ7QUFTRVIsa0JBQUFBLFlBQVksRUFBRTtBQUNaSCxvQkFBQUEsSUFBSSxFQUFFLGNBRE07QUFFWkksb0JBQUFBLFVBQVUsRUFBRSxDQUNWO0FBQ0VKLHNCQUFBQSxJQUFJLEVBQUUsT0FEUjtBQUVFSyxzQkFBQUEsSUFBSSxFQUFFO0FBQ0pMLHdCQUFBQSxJQUFJLEVBQUUsTUFERjtBQUVKTSx3QkFBQUEsS0FBSyxFQUFFLEtBRkg7QUFHSkMsd0JBQUFBLEdBQUcsRUFBRTtBQUFFQywwQkFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsMEJBQUFBLEdBQUcsRUFBRTtBQUFsQjtBQUhELHVCQUZSO0FBT0VDLHNCQUFBQSxTQUFTLEVBQUUsRUFQYjtBQVFFQyxzQkFBQUEsVUFBVSxFQUFFLEVBUmQ7QUFTRUosc0JBQUFBLEdBQUcsRUFBRTtBQUFFQyx3QkFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsd0JBQUFBLEdBQUcsRUFBRTtBQUFsQjtBQVRQLHFCQURVLEVBWVY7QUFDRVQsc0JBQUFBLElBQUksRUFBRSxPQURSO0FBRUVLLHNCQUFBQSxJQUFJLEVBQUU7QUFDSkwsd0JBQUFBLElBQUksRUFBRSxNQURGO0FBRUpNLHdCQUFBQSxLQUFLLEVBQUUsVUFGSDtBQUdKQyx3QkFBQUEsR0FBRyxFQUFFO0FBQUVDLDBCQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQywwQkFBQUEsR0FBRyxFQUFFO0FBQWxCO0FBSEQsdUJBRlI7QUFPRUMsc0JBQUFBLFNBQVMsRUFBRSxFQVBiO0FBUUVDLHNCQUFBQSxVQUFVLEVBQUUsRUFSZDtBQVNFSixzQkFBQUEsR0FBRyxFQUFFO0FBQUVDLHdCQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyx3QkFBQUEsR0FBRyxFQUFFO0FBQWxCO0FBVFAscUJBWlUsRUF1QlY7QUFDRVQsc0JBQUFBLElBQUksRUFBRSxPQURSO0FBRUVLLHNCQUFBQSxJQUFJLEVBQUU7QUFDSkwsd0JBQUFBLElBQUksRUFBRSxNQURGO0FBRUpNLHdCQUFBQSxLQUFLLEVBQUUsUUFGSDtBQUdKQyx3QkFBQUEsR0FBRyxFQUFFO0FBQUVDLDBCQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQywwQkFBQUEsR0FBRyxFQUFFO0FBQW5CO0FBSEQsdUJBRlI7QUFPRUMsc0JBQUFBLFNBQVMsRUFBRSxFQVBiO0FBUUVDLHNCQUFBQSxVQUFVLEVBQUUsRUFSZDtBQVNFUixzQkFBQUEsWUFBWSxFQUFFO0FBQ1pILHdCQUFBQSxJQUFJLEVBQUUsY0FETTtBQUVaSSx3QkFBQUEsVUFBVSxFQUFFLENBQ1Y7QUFDRUosMEJBQUFBLElBQUksRUFBRSxPQURSO0FBRUVLLDBCQUFBQSxJQUFJLEVBQUU7QUFDSkwsNEJBQUFBLElBQUksRUFBRSxNQURGO0FBRUpNLDRCQUFBQSxLQUFLLEVBQUUsTUFGSDtBQUdKQyw0QkFBQUEsR0FBRyxFQUFFO0FBQUVDLDhCQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyw4QkFBQUEsR0FBRyxFQUFFO0FBQW5CO0FBSEQsMkJBRlI7QUFPRUMsMEJBQUFBLFNBQVMsRUFBRSxFQVBiO0FBUUVDLDBCQUFBQSxVQUFVLEVBQUUsRUFSZDtBQVNFSiwwQkFBQUEsR0FBRyxFQUFFO0FBQUVDLDRCQUFBQSxLQUFLLEVBQUUsR0FBVDtBQUFjQyw0QkFBQUEsR0FBRyxFQUFFO0FBQW5CO0FBVFAseUJBRFUsRUFZVjtBQUNFVCwwQkFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUssMEJBQUFBLElBQUksRUFBRTtBQUNKTCw0QkFBQUEsSUFBSSxFQUFFLE1BREY7QUFFSk0sNEJBQUFBLEtBQUssRUFBRSxZQUZIO0FBR0pDLDRCQUFBQSxHQUFHLEVBQUU7QUFBRUMsOEJBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLDhCQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUFIRCwyQkFGUjtBQU9FQywwQkFBQUEsU0FBUyxFQUFFLEVBUGI7QUFRRUMsMEJBQUFBLFVBQVUsRUFBRSxFQVJkO0FBU0VSLDBCQUFBQSxZQUFZLEVBQUU7QUFDWkgsNEJBQUFBLElBQUksRUFBRSxjQURNO0FBRVpJLDRCQUFBQSxVQUFVLEVBQUUsQ0FDVjtBQUNFSiw4QkFBQUEsSUFBSSxFQUFFLE9BRFI7QUFFRUssOEJBQUFBLElBQUksRUFBRTtBQUNKTCxnQ0FBQUEsSUFBSSxFQUFFLE1BREY7QUFFSk0sZ0NBQUFBLEtBQUssRUFBRSxXQUZIO0FBR0pDLGdDQUFBQSxHQUFHLEVBQUU7QUFBRUMsa0NBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLGtDQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUFIRCwrQkFGUjtBQU9FQyw4QkFBQUEsU0FBUyxFQUFFLEVBUGI7QUFRRUMsOEJBQUFBLFVBQVUsRUFBRSxFQVJkO0FBU0VKLDhCQUFBQSxHQUFHLEVBQUU7QUFBRUMsZ0NBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLGdDQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUFUUCw2QkFEVSxDQUZBO0FBZVpGLDRCQUFBQSxHQUFHLEVBQUU7QUFBRUMsOEJBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLDhCQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUFmTywyQkFUaEI7QUEwQkVGLDBCQUFBQSxHQUFHLEVBQUU7QUFBRUMsNEJBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLDRCQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUExQlAseUJBWlUsQ0FGQTtBQTJDWkYsd0JBQUFBLEdBQUcsRUFBRTtBQUFFQywwQkFBQUEsS0FBSyxFQUFFLEdBQVQ7QUFBY0MsMEJBQUFBLEdBQUcsRUFBRTtBQUFuQjtBQTNDTyx1QkFUaEI7QUFzREVGLHNCQUFBQSxHQUFHLEVBQUU7QUFBRUMsd0JBQUFBLEtBQUssRUFBRSxHQUFUO0FBQWNDLHdCQUFBQSxHQUFHLEVBQUU7QUFBbkI7QUF0RFAscUJBdkJVLENBRkE7QUFrRlpGLG9CQUFBQSxHQUFHLEVBQUU7QUFBRUMsc0JBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLHNCQUFBQSxHQUFHLEVBQUU7QUFBbEI7QUFsRk8sbUJBVGhCO0FBNkZFRixrQkFBQUEsR0FBRyxFQUFFO0FBQUVDLG9CQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxvQkFBQUEsR0FBRyxFQUFFO0FBQWxCO0FBN0ZQLGlCQURVLENBRkE7QUFtR1pGLGdCQUFBQSxHQUFHLEVBQUU7QUFBRUMsa0JBQUFBLEtBQUssRUFBRSxFQUFUO0FBQWFDLGtCQUFBQSxHQUFHLEVBQUU7QUFBbEI7QUFuR08sZUFUaEI7QUE4R0VGLGNBQUFBLEdBQUcsRUFBRTtBQUFFQyxnQkFBQUEsS0FBSyxFQUFFLEVBQVQ7QUFBYUMsZ0JBQUFBLEdBQUcsRUFBRTtBQUFsQjtBQTlHUCxhQURVLENBRkE7QUFvSFpGLFlBQUFBLEdBQUcsRUFBRTtBQUFFQyxjQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxjQUFBQSxHQUFHLEVBQUU7QUFBbEI7QUFwSE8sV0FUaEI7QUErSEVGLFVBQUFBLEdBQUcsRUFBRTtBQUFFQyxZQUFBQSxLQUFLLEVBQUUsRUFBVDtBQUFhQyxZQUFBQSxHQUFHLEVBQUU7QUFBbEI7QUEvSFAsU0FEVTtBQUZBO0FBSGhCLEtBRFc7QUFGSSxHQURDO0FBZ0pwQkcsRUFBQUEsVUFBVSxFQUFFLENBQUNuQixnSUFBRCxFQUFRQyx5RkFBUixFQUFlQywyRkFBZixFQUFzQkMsOEZBQXRCLEVBQTZCQyxpR0FBN0IsQ0FoSlE7QUFpSnBCZ0IsRUFBQUEsYUFBYSxFQUFFLFNBakpLO0FBa0pwQmYsRUFBQUEsV0FBVyxFQUFFQSxXQWxKTztBQW1KcEJnQixFQUFBQSxPQUFPLEVBQUU7QUFuSlcsQ0FBRCxDQUFyQjs7Ozs7Ozs7Ozs7QUNWYTs7QUFDYkMsOENBQTZDO0FBQ3pDVCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQVcsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlFLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdELG1CQUFPLENBQUMsNkZBQUQsQ0FBckI7O0FBQ0EsSUFBSUUsUUFBUSxHQUFHRixtQkFBTyxDQUFDLCtEQUFELENBQXRCOztBQUNBLElBQUlHLGdCQUFnQixHQUFHSCxtQkFBTyxDQUFDLG1GQUFELENBQTlCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxNQUFNRSxVQUFVLEdBQUcsRUFBbkI7O0FBRUEsU0FBU0MsUUFBVCxDQUFrQkMsTUFBbEIsRUFBMEJDLElBQTFCLEVBQWdDQyxFQUFoQyxFQUFvQ0MsT0FBcEMsRUFBNkM7QUFDekMsTUFBSSxJQUFKLEVBQThDO0FBQzlDLE1BQUksQ0FBQyxDQUFDLEdBQUdWLE9BQUosRUFBYVcsVUFBYixDQUF3QkgsSUFBeEIsQ0FBTCxFQUFvQyxPQUZLLENBR3pDO0FBQ0E7QUFDQTtBQUNBOztBQUNBRCxFQUFBQSxNQUFNLENBQUNELFFBQVAsQ0FBZ0JFLElBQWhCLEVBQXNCQyxFQUF0QixFQUEwQkMsT0FBMUIsRUFBbUNFLEtBQW5DLENBQTBDQyxHQUFELElBQU87QUFDNUMsY0FBMkM7QUFDdkM7QUFDQSxZQUFNQSxHQUFOO0FBQ0g7QUFDSixHQUxEO0FBTUEsUUFBTUMsU0FBUyxHQUFHSixPQUFPLElBQUksT0FBT0EsT0FBTyxDQUFDSyxNQUFmLEtBQTBCLFdBQXJDLEdBQW1ETCxPQUFPLENBQUNLLE1BQTNELEdBQW9FUixNQUFNLElBQUlBLE1BQU0sQ0FBQ1EsTUFBdkcsQ0FieUMsQ0FjekM7O0FBQ0FWLEVBQUFBLFVBQVUsQ0FBQ0csSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkssU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUFWLEdBQW1FLElBQW5FO0FBQ0g7O0FBQ0QsU0FBU0UsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDNUIsUUFBTTtBQUFFQyxJQUFBQTtBQUFGLE1BQWNELEtBQUssQ0FBQ0UsYUFBMUI7QUFDQSxTQUFPRCxNQUFNLElBQUlBLE1BQU0sS0FBSyxPQUFyQixJQUFnQ0QsS0FBSyxDQUFDRyxPQUF0QyxJQUFpREgsS0FBSyxDQUFDSSxPQUF2RCxJQUFrRUosS0FBSyxDQUFDSyxRQUF4RSxJQUFvRkwsS0FBSyxDQUFDTSxNQUExRixJQUFvR04sS0FBSyxDQUFDTyxXQUFOLElBQXFCUCxLQUFLLENBQUNPLFdBQU4sQ0FBa0JDLEtBQWxCLEtBQTRCLENBQTVKO0FBQ0g7O0FBQ0QsU0FBU0MsV0FBVCxDQUFxQkMsQ0FBckIsRUFBd0JwQixNQUF4QixFQUFnQ0MsSUFBaEMsRUFBc0NDLEVBQXRDLEVBQTBDbUIsT0FBMUMsRUFBbURDLE9BQW5ELEVBQTREQyxNQUE1RCxFQUFvRWYsTUFBcEUsRUFBNEU7QUFDeEUsUUFBTTtBQUFFZ0IsSUFBQUE7QUFBRixNQUFnQkosQ0FBQyxDQUFDUixhQUF4Qjs7QUFDQSxNQUFJWSxRQUFRLEtBQUssR0FBYixLQUFxQmYsZUFBZSxDQUFDVyxDQUFELENBQWYsSUFBc0IsQ0FBQyxDQUFDLEdBQUczQixPQUFKLEVBQWFXLFVBQWIsQ0FBd0JILElBQXhCLENBQTVDLENBQUosRUFBZ0Y7QUFDNUU7QUFDQTtBQUNIOztBQUNEbUIsRUFBQUEsQ0FBQyxDQUFDSyxjQUFGLEdBTndFLENBT3hFOztBQUNBLE1BQUlGLE1BQU0sSUFBSSxJQUFWLElBQWtCckIsRUFBRSxDQUFDd0IsT0FBSCxDQUFXLEdBQVgsS0FBbUIsQ0FBekMsRUFBNEM7QUFDeENILElBQUFBLE1BQU0sR0FBRyxLQUFUO0FBQ0gsR0FWdUUsQ0FXeEU7OztBQUNBdkIsRUFBQUEsTUFBTSxDQUFDcUIsT0FBTyxHQUFHLFNBQUgsR0FBZSxNQUF2QixDQUFOLENBQXFDcEIsSUFBckMsRUFBMkNDLEVBQTNDLEVBQStDO0FBQzNDb0IsSUFBQUEsT0FEMkM7QUFFM0NkLElBQUFBLE1BRjJDO0FBRzNDZSxJQUFBQTtBQUgyQyxHQUEvQztBQUtIOztBQUNELFNBQVNJLElBQVQsQ0FBY0MsS0FBZCxFQUFxQjtBQUNqQixZQUEyQztBQUN2QyxhQUFTQyxlQUFULENBQXlCQyxJQUF6QixFQUErQjtBQUMzQixhQUFPLElBQUlDLEtBQUosQ0FBVyxnQ0FBK0JELElBQUksQ0FBQ0UsR0FBSSxnQkFBZUYsSUFBSSxDQUFDRyxRQUFTLDZCQUE0QkgsSUFBSSxDQUFDSSxNQUFPLGFBQTlHLElBQThILFNBQWdDLENBQWhDLEdBQXFHLEVBQW5PLENBQVYsQ0FBUDtBQUNILEtBSHNDLENBSXZDOzs7QUFDQSxVQUFNQyxrQkFBa0IsR0FBRztBQUN2QmxDLE1BQUFBLElBQUksRUFBRTtBQURpQixLQUEzQjtBQUdBLFVBQU1tQyxhQUFhLEdBQUdsRCxNQUFNLENBQUNtRCxJQUFQLENBQVlGLGtCQUFaLENBQXRCO0FBQ0FDLElBQUFBLGFBQWEsQ0FBQ0UsT0FBZCxDQUF1Qk4sR0FBRCxJQUFPO0FBQ3pCLFVBQUlBLEdBQUcsS0FBSyxNQUFaLEVBQW9CO0FBQ2hCLFlBQUlKLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLElBQWMsSUFBZCxJQUFzQixPQUFPSixLQUFLLENBQUNJLEdBQUQsQ0FBWixLQUFzQixRQUF0QixJQUFrQyxPQUFPSixLQUFLLENBQUNJLEdBQUQsQ0FBWixLQUFzQixRQUFsRixFQUE0RjtBQUN4RixnQkFBTUgsZUFBZSxDQUFDO0FBQ2xCRyxZQUFBQSxHQURrQjtBQUVsQkMsWUFBQUEsUUFBUSxFQUFFLHNCQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVOLEtBQUssQ0FBQ0ksR0FBRCxDQUFMLEtBQWUsSUFBZixHQUFzQixNQUF0QixHQUErQixPQUFPSixLQUFLLENBQUNJLEdBQUQ7QUFIakMsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSRCxNQVFPO0FBQ0g7QUFDQTtBQUNBLGNBQU1PLENBQUMsR0FBR1AsR0FBVjtBQUNIO0FBQ0osS0FkRCxFQVR1QyxDQXdCdkM7O0FBQ0EsVUFBTVEsa0JBQWtCLEdBQUc7QUFDdkJ0QyxNQUFBQSxFQUFFLEVBQUUsSUFEbUI7QUFFdkJtQixNQUFBQSxPQUFPLEVBQUUsSUFGYztBQUd2QkUsTUFBQUEsTUFBTSxFQUFFLElBSGU7QUFJdkJELE1BQUFBLE9BQU8sRUFBRSxJQUpjO0FBS3ZCbUIsTUFBQUEsUUFBUSxFQUFFLElBTGE7QUFNdkIxQyxNQUFBQSxRQUFRLEVBQUUsSUFOYTtBQU92QlMsTUFBQUEsTUFBTSxFQUFFO0FBUGUsS0FBM0I7QUFTQSxVQUFNa0MsYUFBYSxHQUFHeEQsTUFBTSxDQUFDbUQsSUFBUCxDQUFZRyxrQkFBWixDQUF0QjtBQUNBRSxJQUFBQSxhQUFhLENBQUNKLE9BQWQsQ0FBdUJOLEdBQUQsSUFBTztBQUN6QixZQUFNVyxPQUFPLEdBQUcsT0FBT2YsS0FBSyxDQUFDSSxHQUFELENBQTVCOztBQUNBLFVBQUlBLEdBQUcsS0FBSyxJQUFaLEVBQWtCO0FBQ2QsWUFBSUosS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBY1csT0FBTyxLQUFLLFFBQTFCLElBQXNDQSxPQUFPLEtBQUssUUFBdEQsRUFBZ0U7QUFDNUQsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxzQkFGUTtBQUdsQkMsWUFBQUEsTUFBTSxFQUFFUztBQUhVLFdBQUQsQ0FBckI7QUFLSDtBQUNKLE9BUkQsTUFRTyxJQUFJWCxHQUFHLEtBQUssUUFBWixFQUFzQjtBQUN6QixZQUFJSixLQUFLLENBQUNJLEdBQUQsQ0FBTCxJQUFjVyxPQUFPLEtBQUssUUFBOUIsRUFBd0M7QUFDcEMsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxVQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBLElBQUlYLEdBQUcsS0FBSyxTQUFSLElBQXFCQSxHQUFHLEtBQUssUUFBN0IsSUFBeUNBLEdBQUcsS0FBSyxTQUFqRCxJQUE4REEsR0FBRyxLQUFLLFVBQXRFLElBQW9GQSxHQUFHLEtBQUssVUFBaEcsRUFBNEc7QUFDL0csWUFBSUosS0FBSyxDQUFDSSxHQUFELENBQUwsSUFBYyxJQUFkLElBQXNCVyxPQUFPLEtBQUssU0FBdEMsRUFBaUQ7QUFDN0MsZ0JBQU1kLGVBQWUsQ0FBQztBQUNsQkcsWUFBQUEsR0FEa0I7QUFFbEJDLFlBQUFBLFFBQVEsRUFBRSxXQUZRO0FBR2xCQyxZQUFBQSxNQUFNLEVBQUVTO0FBSFUsV0FBRCxDQUFyQjtBQUtIO0FBQ0osT0FSTSxNQVFBO0FBQ0g7QUFDQTtBQUNBLGNBQU1KLENBQUMsR0FBR1AsR0FBVjtBQUNIO0FBQ0osS0EvQkQsRUFuQ3VDLENBbUV2QztBQUNBOztBQUNBLFVBQU1ZLFNBQVMsR0FBR3RELE1BQU0sQ0FBQ0QsT0FBUCxDQUFld0QsTUFBZixDQUFzQixLQUF0QixDQUFsQjs7QUFDQSxRQUFJakIsS0FBSyxDQUFDN0IsUUFBTixJQUFrQixDQUFDNkMsU0FBUyxDQUFDRSxPQUFqQyxFQUEwQztBQUN0Q0YsTUFBQUEsU0FBUyxDQUFDRSxPQUFWLEdBQW9CLElBQXBCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhLHNLQUFiO0FBQ0g7QUFDSjs7QUFDRCxRQUFNQyxDQUFDLEdBQUdyQixLQUFLLENBQUM3QixRQUFOLEtBQW1CLEtBQTdCO0FBQ0EsUUFBTUMsTUFBTSxHQUFHLENBQUMsR0FBR04sUUFBSixFQUFjd0QsU0FBZCxFQUFmOztBQUNBLFFBQU07QUFBRWpELElBQUFBLElBQUY7QUFBU0MsSUFBQUE7QUFBVCxNQUFpQlosTUFBTSxDQUFDRCxPQUFQLENBQWU4RCxPQUFmLENBQXVCLE1BQUk7QUFDOUMsVUFBTSxDQUFDQyxZQUFELEVBQWVDLFVBQWYsSUFBNkIsQ0FBQyxHQUFHNUQsT0FBSixFQUFhNkQsV0FBYixDQUF5QnRELE1BQXpCLEVBQWlDNEIsS0FBSyxDQUFDM0IsSUFBdkMsRUFBNkMsSUFBN0MsQ0FBbkM7QUFDQSxXQUFPO0FBQ0hBLE1BQUFBLElBQUksRUFBRW1ELFlBREg7QUFFSGxELE1BQUFBLEVBQUUsRUFBRTBCLEtBQUssQ0FBQzFCLEVBQU4sR0FBVyxDQUFDLEdBQUdULE9BQUosRUFBYTZELFdBQWIsQ0FBeUJ0RCxNQUF6QixFQUFpQzRCLEtBQUssQ0FBQzFCLEVBQXZDLENBQVgsR0FBd0RtRCxVQUFVLElBQUlEO0FBRnZFLEtBQVA7QUFJSCxHQU5zQixFQU1wQixDQUNDcEQsTUFERCxFQUVDNEIsS0FBSyxDQUFDM0IsSUFGUCxFQUdDMkIsS0FBSyxDQUFDMUIsRUFIUCxDQU5vQixDQUF2Qjs7QUFXQSxNQUFJO0FBQUVxRCxJQUFBQSxRQUFGO0FBQWFsQyxJQUFBQSxPQUFiO0FBQXVCQyxJQUFBQSxPQUF2QjtBQUFpQ0MsSUFBQUEsTUFBakM7QUFBMENmLElBQUFBO0FBQTFDLE1BQXNEb0IsS0FBMUQsQ0F6RmlCLENBMEZqQjs7QUFDQSxNQUFJLE9BQU8yQixRQUFQLEtBQW9CLFFBQXhCLEVBQWtDO0FBQzlCQSxJQUFBQSxRQUFRLEdBQUcsYUFBY2pFLE1BQU0sQ0FBQ0QsT0FBUCxDQUFlbUUsYUFBZixDQUE2QixHQUE3QixFQUFrQyxJQUFsQyxFQUF3Q0QsUUFBeEMsQ0FBekI7QUFDSCxHQTdGZ0IsQ0E4RmpCOzs7QUFDQSxNQUFJRSxLQUFKOztBQUNBLFlBQTRDO0FBQ3hDLFFBQUk7QUFDQUEsTUFBQUEsS0FBSyxHQUFHbkUsTUFBTSxDQUFDRCxPQUFQLENBQWVxRSxRQUFmLENBQXdCQyxJQUF4QixDQUE2QkosUUFBN0IsQ0FBUjtBQUNILEtBRkQsQ0FFRSxPQUFPakQsR0FBUCxFQUFZO0FBQ1YsWUFBTSxJQUFJeUIsS0FBSixDQUFXLDhEQUE2REgsS0FBSyxDQUFDM0IsSUFBSyw0RkFBekUsSUFBd0ssU0FBZ0MsQ0FBaEMsR0FBc0csRUFBOVEsQ0FBVixDQUFOO0FBQ0g7QUFDSixHQU5ELE1BTU8sRUFFTjs7QUFDRCxRQUFNMkQsUUFBUSxHQUFHSCxLQUFLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUExQixJQUFzQ0EsS0FBSyxDQUFDSSxHQUE3RDtBQUNBLFFBQU0sQ0FBQ0Msa0JBQUQsRUFBcUJDLFNBQXJCLElBQWtDLENBQUMsR0FBR3BFLGdCQUFKLEVBQXNCcUUsZUFBdEIsQ0FBc0M7QUFDMUVDLElBQUFBLFVBQVUsRUFBRTtBQUQ4RCxHQUF0QyxDQUF4Qzs7QUFHQSxRQUFNQyxNQUFNLEdBQUc1RSxNQUFNLENBQUNELE9BQVAsQ0FBZThFLFdBQWYsQ0FBNEJDLEVBQUQsSUFBTTtBQUM1Q04sSUFBQUEsa0JBQWtCLENBQUNNLEVBQUQsQ0FBbEI7O0FBQ0EsUUFBSVIsUUFBSixFQUFjO0FBQ1YsVUFBSSxPQUFPQSxRQUFQLEtBQW9CLFVBQXhCLEVBQW9DQSxRQUFRLENBQUNRLEVBQUQsQ0FBUixDQUFwQyxLQUNLLElBQUksT0FBT1IsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNuQ0EsUUFBQUEsUUFBUSxDQUFDZCxPQUFULEdBQW1Cc0IsRUFBbkI7QUFDSDtBQUNKO0FBQ0osR0FSYyxFQVFaLENBQ0NSLFFBREQsRUFFQ0Usa0JBRkQsQ0FSWSxDQUFmOztBQVlBeEUsRUFBQUEsTUFBTSxDQUFDRCxPQUFQLENBQWVnRixTQUFmLENBQXlCLE1BQUk7QUFDekIsVUFBTUMsY0FBYyxHQUFHUCxTQUFTLElBQUlkLENBQWIsSUFBa0IsQ0FBQyxHQUFHeEQsT0FBSixFQUFhVyxVQUFiLENBQXdCSCxJQUF4QixDQUF6QztBQUNBLFVBQU1NLFNBQVMsR0FBRyxPQUFPQyxNQUFQLEtBQWtCLFdBQWxCLEdBQWdDQSxNQUFoQyxHQUF5Q1IsTUFBTSxJQUFJQSxNQUFNLENBQUNRLE1BQTVFO0FBQ0EsVUFBTStELFlBQVksR0FBR3pFLFVBQVUsQ0FBQ0csSUFBSSxHQUFHLEdBQVAsR0FBYUMsRUFBYixJQUFtQkssU0FBUyxHQUFHLE1BQU1BLFNBQVQsR0FBcUIsRUFBakQsQ0FBRCxDQUEvQjs7QUFDQSxRQUFJK0QsY0FBYyxJQUFJLENBQUNDLFlBQXZCLEVBQXFDO0FBQ2pDeEUsTUFBQUEsUUFBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2Qk0sUUFBQUEsTUFBTSxFQUFFRDtBQURlLE9BQW5CLENBQVI7QUFHSDtBQUNKLEdBVEQsRUFTRyxDQUNDTCxFQURELEVBRUNELElBRkQsRUFHQzhELFNBSEQsRUFJQ3ZELE1BSkQsRUFLQ3lDLENBTEQsRUFNQ2pELE1BTkQsQ0FUSDs7QUFpQkEsUUFBTXdFLFVBQVUsR0FBRztBQUNmWCxJQUFBQSxHQUFHLEVBQUVLLE1BRFU7QUFFZk8sSUFBQUEsT0FBTyxFQUFHckQsQ0FBRCxJQUFLO0FBQ1YsVUFBSXFDLEtBQUssQ0FBQzdCLEtBQU4sSUFBZSxPQUFPNkIsS0FBSyxDQUFDN0IsS0FBTixDQUFZNkMsT0FBbkIsS0FBK0IsVUFBbEQsRUFBOEQ7QUFDMURoQixRQUFBQSxLQUFLLENBQUM3QixLQUFOLENBQVk2QyxPQUFaLENBQW9CckQsQ0FBcEI7QUFDSDs7QUFDRCxVQUFJLENBQUNBLENBQUMsQ0FBQ3NELGdCQUFQLEVBQXlCO0FBQ3JCdkQsUUFBQUEsV0FBVyxDQUFDQyxDQUFELEVBQUlwQixNQUFKLEVBQVlDLElBQVosRUFBa0JDLEVBQWxCLEVBQXNCbUIsT0FBdEIsRUFBK0JDLE9BQS9CLEVBQXdDQyxNQUF4QyxFQUFnRGYsTUFBaEQsQ0FBWDtBQUNIO0FBQ0o7QUFUYyxHQUFuQjs7QUFXQWdFLEVBQUFBLFVBQVUsQ0FBQ0csWUFBWCxHQUEyQnZELENBQUQsSUFBSztBQUMzQixRQUFJLENBQUMsQ0FBQyxHQUFHM0IsT0FBSixFQUFhVyxVQUFiLENBQXdCSCxJQUF4QixDQUFMLEVBQW9DOztBQUNwQyxRQUFJd0QsS0FBSyxDQUFDN0IsS0FBTixJQUFlLE9BQU82QixLQUFLLENBQUM3QixLQUFOLENBQVkrQyxZQUFuQixLQUFvQyxVQUF2RCxFQUFtRTtBQUMvRGxCLE1BQUFBLEtBQUssQ0FBQzdCLEtBQU4sQ0FBWStDLFlBQVosQ0FBeUJ2RCxDQUF6QjtBQUNIOztBQUNEckIsSUFBQUEsUUFBUSxDQUFDQyxNQUFELEVBQVNDLElBQVQsRUFBZUMsRUFBZixFQUFtQjtBQUN2QjBFLE1BQUFBLFFBQVEsRUFBRTtBQURhLEtBQW5CLENBQVI7QUFHSCxHQVJELENBckppQixDQThKakI7QUFDQTs7O0FBQ0EsTUFBSWhELEtBQUssQ0FBQ2EsUUFBTixJQUFrQmdCLEtBQUssQ0FBQ29CLElBQU4sS0FBZSxHQUFmLElBQXNCLEVBQUUsVUFBVXBCLEtBQUssQ0FBQzdCLEtBQWxCLENBQTVDLEVBQXNFO0FBQ2xFLFVBQU1yQixTQUFTLEdBQUcsT0FBT0MsTUFBUCxLQUFrQixXQUFsQixHQUFnQ0EsTUFBaEMsR0FBeUNSLE1BQU0sSUFBSUEsTUFBTSxDQUFDUSxNQUE1RSxDQURrRSxDQUVsRTtBQUNBOztBQUNBLFVBQU1zRSxZQUFZLEdBQUc5RSxNQUFNLElBQUlBLE1BQU0sQ0FBQytFLGNBQWpCLElBQW1DLENBQUMsR0FBR3RGLE9BQUosRUFBYXVGLGVBQWIsQ0FBNkI5RSxFQUE3QixFQUFpQ0ssU0FBakMsRUFBNENQLE1BQU0sSUFBSUEsTUFBTSxDQUFDaUYsT0FBN0QsRUFBc0VqRixNQUFNLElBQUlBLE1BQU0sQ0FBQ2tGLGFBQXZGLENBQXhEO0FBQ0FWLElBQUFBLFVBQVUsQ0FBQ3ZFLElBQVgsR0FBa0I2RSxZQUFZLElBQUksQ0FBQyxHQUFHckYsT0FBSixFQUFhMEYsV0FBYixDQUF5QixDQUFDLEdBQUcxRixPQUFKLEVBQWEyRixTQUFiLENBQXVCbEYsRUFBdkIsRUFBMkJLLFNBQTNCLEVBQXNDUCxNQUFNLElBQUlBLE1BQU0sQ0FBQ3FGLGFBQXZELENBQXpCLENBQWxDO0FBQ0g7O0FBQ0QsU0FBTyxhQUFjL0YsTUFBTSxDQUFDRCxPQUFQLENBQWVpRyxZQUFmLENBQTRCN0IsS0FBNUIsRUFBbUNlLFVBQW5DLENBQXJCO0FBQ0g7O0FBQ0QsSUFBSWUsUUFBUSxHQUFHNUQsSUFBZjtBQUNBdkMsZUFBQSxHQUFrQm1HLFFBQWxCOzs7Ozs7Ozs7OztBQ2pPYTs7QUFDYnJHLDhDQUE2QztBQUN6Q1QsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FXLCtCQUFBLEdBQWtDb0csdUJBQWxDO0FBQ0FwRyxrQ0FBQSxHQUFxQyxLQUFLLENBQTFDOztBQUNBLFNBQVNvRyx1QkFBVCxDQUFpQ0UsSUFBakMsRUFBdUM7QUFDbkMsU0FBT0EsSUFBSSxDQUFDQyxRQUFMLENBQWMsR0FBZCxLQUFzQkQsSUFBSSxLQUFLLEdBQS9CLEdBQXFDQSxJQUFJLENBQUNFLEtBQUwsQ0FBVyxDQUFYLEVBQWMsQ0FBQyxDQUFmLENBQXJDLEdBQXlERixJQUFoRTtBQUNIOztBQUNELE1BQU1ELDBCQUEwQixHQUFHSSxNQUFBLEdBQXFDSCxDQUFyQyxHQVEvQkYsdUJBUko7QUFTQXBHLGtDQUFBLEdBQXFDcUcsMEJBQXJDOzs7Ozs7Ozs7OztBQ2xCYTs7QUFDYnZHLDhDQUE2QztBQUN6Q1QsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FXLDJCQUFBLEdBQThCQSwwQkFBQSxHQUE2QixLQUFLLENBQWhFOztBQUNBLE1BQU02RyxtQkFBbUIsR0FBRyxPQUFPRSxJQUFQLEtBQWdCLFdBQWhCLElBQStCQSxJQUFJLENBQUNGLG1CQUFwQyxJQUEyREUsSUFBSSxDQUFDRixtQkFBTCxDQUF5QkcsSUFBekIsQ0FBOEJDLE1BQTlCLENBQTNELElBQW9HLFVBQVNDLEVBQVQsRUFBYTtBQUN6SSxNQUFJM0gsS0FBSyxHQUFHNEgsSUFBSSxDQUFDQyxHQUFMLEVBQVo7QUFDQSxTQUFPQyxVQUFVLENBQUMsWUFBVztBQUN6QkgsSUFBQUEsRUFBRSxDQUFDO0FBQ0NJLE1BQUFBLFVBQVUsRUFBRSxLQURiO0FBRUNDLE1BQUFBLGFBQWEsRUFBRSxZQUFXO0FBQ3RCLGVBQU9DLElBQUksQ0FBQ0MsR0FBTCxDQUFTLENBQVQsRUFBWSxNQUFNTixJQUFJLENBQUNDLEdBQUwsS0FBYTdILEtBQW5CLENBQVosQ0FBUDtBQUNIO0FBSkYsS0FBRCxDQUFGO0FBTUgsR0FQZ0IsRUFPZCxDQVBjLENBQWpCO0FBUUgsQ0FWRDs7QUFXQVMsMkJBQUEsR0FBOEI2RyxtQkFBOUI7O0FBQ0EsTUFBTUMsa0JBQWtCLEdBQUcsT0FBT0MsSUFBUCxLQUFnQixXQUFoQixJQUErQkEsSUFBSSxDQUFDRCxrQkFBcEMsSUFBMERDLElBQUksQ0FBQ0Qsa0JBQUwsQ0FBd0JFLElBQXhCLENBQTZCQyxNQUE3QixDQUExRCxJQUFrRyxVQUFTUyxFQUFULEVBQWE7QUFDdEksU0FBT0MsWUFBWSxDQUFDRCxFQUFELENBQW5CO0FBQ0gsQ0FGRDs7QUFHQTFILDBCQUFBLEdBQTZCOEcsa0JBQTdCOzs7Ozs7Ozs7OztBQ3BCYTs7QUFDYmhILDhDQUE2QztBQUN6Q1QsRUFBQUEsS0FBSyxFQUFFO0FBRGtDLENBQTdDO0FBR0FXLHNCQUFBLEdBQXlCNEgsY0FBekI7QUFDQTVILG9CQUFBLEdBQXVCNkgsWUFBdkI7QUFDQTdILDhCQUFBLEdBQWlDOEgsc0JBQWpDO0FBQ0E5SCx5QkFBQSxHQUE0QitILGlCQUE1Qjs7QUFDQSxJQUFJQyxzQkFBc0IsR0FBRzdILHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLGtIQUFELENBQVIsQ0FBbkQ7O0FBQ0EsSUFBSTZILG9CQUFvQixHQUFHN0gsbUJBQU8sQ0FBQyw2RkFBRCxDQUFsQzs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0gsRUFDRDtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTTBILGlCQUFpQixHQUFHLElBQTFCOztBQUNBLFNBQVNDLFVBQVQsQ0FBb0J2RixHQUFwQixFQUF5QndGLEdBQXpCLEVBQThCQyxTQUE5QixFQUF5QztBQUNyQyxNQUFJQyxLQUFLLEdBQUdGLEdBQUcsQ0FBQ0csR0FBSixDQUFRM0YsR0FBUixDQUFaOztBQUNBLE1BQUkwRixLQUFKLEVBQVc7QUFDUCxRQUFJLFlBQVlBLEtBQWhCLEVBQXVCO0FBQ25CLGFBQU9BLEtBQUssQ0FBQ0UsTUFBYjtBQUNIOztBQUNELFdBQU9DLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkosS0FBaEIsQ0FBUDtBQUNIOztBQUNELE1BQUlLLFFBQUo7QUFDQSxRQUFNQyxJQUFJLEdBQUcsSUFBSUgsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDaENDLElBQUFBLFFBQVEsR0FBR0QsT0FBWDtBQUNILEdBRlksQ0FBYjtBQUdBTixFQUFBQSxHQUFHLENBQUNTLEdBQUosQ0FBUWpHLEdBQVIsRUFBYTBGLEtBQUssR0FBRztBQUNqQkksSUFBQUEsT0FBTyxFQUFFQyxRQURRO0FBRWpCSCxJQUFBQSxNQUFNLEVBQUVJO0FBRlMsR0FBckI7QUFJQSxTQUFPUCxTQUFTLEdBQUdBLFNBQVMsR0FBR1MsSUFBWixDQUFrQnpKLEtBQUQsS0FBVXNKLFFBQVEsQ0FBQ3RKLEtBQUQsQ0FBUixFQUFpQkEsS0FBM0IsQ0FBakIsQ0FBSCxHQUNadUosSUFESjtBQUVIOztBQUNELFNBQVNHLFdBQVQsQ0FBcUJDLElBQXJCLEVBQTJCO0FBQ3ZCLE1BQUk7QUFDQUEsSUFBQUEsSUFBSSxHQUFHQyxRQUFRLENBQUM3RSxhQUFULENBQXVCLE1BQXZCLENBQVA7QUFDQSxXQUFPO0FBQ1A7QUFDQyxPQUFDLENBQUM2QyxNQUFNLENBQUNpQyxvQkFBVCxJQUFpQyxDQUFDLENBQUNELFFBQVEsQ0FBQ0UsWUFBN0MsSUFBOERILElBQUksQ0FBQ0ksT0FBTCxDQUFhQyxRQUFiLENBQXNCLFVBQXRCO0FBRjlEO0FBR0gsR0FMRCxDQUtFLE9BQU9ySCxDQUFQLEVBQVU7QUFDUixXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELE1BQU1zSCxXQUFXLEdBQUdQLFdBQVcsRUFBL0I7O0FBQ0EsU0FBU1EsY0FBVCxDQUF3QjFJLElBQXhCLEVBQThCQyxFQUE5QixFQUFrQ2tJLElBQWxDLEVBQXdDO0FBQ3BDLFNBQU8sSUFBSVAsT0FBSixDQUFZLENBQUNlLEdBQUQsRUFBTUMsR0FBTixLQUFZO0FBQzNCLFFBQUlSLFFBQVEsQ0FBQ1MsYUFBVCxDQUF3QiwrQkFBOEI3SSxJQUFLLElBQTNELENBQUosRUFBcUU7QUFDakUsYUFBTzJJLEdBQUcsRUFBVjtBQUNIOztBQUNEUixJQUFBQSxJQUFJLEdBQUdDLFFBQVEsQ0FBQzdFLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBUCxDQUoyQixDQUszQjs7QUFDQSxRQUFJdEQsRUFBSixFQUFRa0ksSUFBSSxDQUFDbEksRUFBTCxHQUFVQSxFQUFWO0FBQ1JrSSxJQUFBQSxJQUFJLENBQUNXLEdBQUwsR0FBWSxVQUFaO0FBQ0FYLElBQUFBLElBQUksQ0FBQ1ksV0FBTCxHQUFtQm5ELFNBQW5CO0FBQ0F1QyxJQUFBQSxJQUFJLENBQUNjLE1BQUwsR0FBY04sR0FBZDtBQUNBUixJQUFBQSxJQUFJLENBQUNlLE9BQUwsR0FBZU4sR0FBZixDQVYyQixDQVczQjs7QUFDQVQsSUFBQUEsSUFBSSxDQUFDbkksSUFBTCxHQUFZQSxJQUFaO0FBQ0FvSSxJQUFBQSxRQUFRLENBQUNlLElBQVQsQ0FBY0MsV0FBZCxDQUEwQmpCLElBQTFCO0FBQ0gsR0FkTSxDQUFQO0FBZUg7O0FBQ0QsTUFBTWtCLGdCQUFnQixHQUFHQyxNQUFNLENBQUMsa0JBQUQsQ0FBL0I7O0FBQ0EsU0FBU3ZDLGNBQVQsQ0FBd0IxRyxHQUF4QixFQUE2QjtBQUN6QixTQUFPcEIsTUFBTSxDQUFDQyxjQUFQLENBQXNCbUIsR0FBdEIsRUFBMkJnSixnQkFBM0IsRUFBNkMsRUFBN0MsQ0FBUDtBQUVIOztBQUNELFNBQVNyQyxZQUFULENBQXNCM0csR0FBdEIsRUFBMkI7QUFDdkIsU0FBT0EsR0FBRyxJQUFJZ0osZ0JBQWdCLElBQUloSixHQUFsQztBQUNIOztBQUNELFNBQVNrSixZQUFULENBQXNCQyxHQUF0QixFQUEyQkMsTUFBM0IsRUFBbUM7QUFDL0IsU0FBTyxJQUFJN0IsT0FBSixDQUFZLENBQUNDLE9BQUQsRUFBVTZCLE1BQVYsS0FBbUI7QUFDbENELElBQUFBLE1BQU0sR0FBR3JCLFFBQVEsQ0FBQzdFLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBVCxDQURrQyxDQUVsQztBQUNBO0FBQ0E7O0FBQ0FrRyxJQUFBQSxNQUFNLENBQUNSLE1BQVAsR0FBZ0JwQixPQUFoQjs7QUFDQTRCLElBQUFBLE1BQU0sQ0FBQ1AsT0FBUCxHQUFpQixNQUFJUSxNQUFNLENBQUMzQyxjQUFjLENBQUMsSUFBSWpGLEtBQUosQ0FBVywwQkFBeUIwSCxHQUFJLEVBQXhDLENBQUQsQ0FBZixDQUEzQixDQU5rQyxDQVFsQztBQUNBOzs7QUFDQUMsSUFBQUEsTUFBTSxDQUFDVixXQUFQLEdBQXFCbkQsU0FBckIsQ0FWa0MsQ0FXbEM7QUFDQTs7QUFDQTZELElBQUFBLE1BQU0sQ0FBQ0QsR0FBUCxHQUFhQSxHQUFiO0FBQ0FwQixJQUFBQSxRQUFRLENBQUN1QixJQUFULENBQWNQLFdBQWQsQ0FBMEJLLE1BQTFCO0FBQ0gsR0FmTSxDQUFQO0FBZ0JILEVBQ0Q7QUFDQTs7O0FBQ0EsSUFBSUcsZUFBSixFQUNBOztBQUNBLFNBQVNDLHlCQUFULENBQW1DN0csQ0FBbkMsRUFBc0M4RyxFQUF0QyxFQUEwQ3pKLEdBQTFDLEVBQStDO0FBQzNDLFNBQU8sSUFBSXVILE9BQUosQ0FBWSxDQUFDQyxPQUFELEVBQVU2QixNQUFWLEtBQW1CO0FBQ2xDLFFBQUlLLFNBQVMsR0FBRyxLQUFoQjtBQUNBL0csSUFBQUEsQ0FBQyxDQUFDaUYsSUFBRixDQUFRK0IsQ0FBRCxJQUFLO0FBQ1I7QUFDQUQsTUFBQUEsU0FBUyxHQUFHLElBQVo7QUFDQWxDLE1BQUFBLE9BQU8sQ0FBQ21DLENBQUQsQ0FBUDtBQUNILEtBSkQsRUFJRzVKLEtBSkgsQ0FJU3NKLE1BSlQsRUFGa0MsQ0FPbEM7QUFDQTs7QUFDQSxjQUE0QztBQUN4QyxPQUFDRSxlQUFlLElBQUloQyxPQUFPLENBQUNDLE9BQVIsRUFBcEIsRUFBdUNJLElBQXZDLENBQTRDLE1BQUk7QUFDNUMsU0FBQyxHQUFHYixvQkFBSixFQUEwQnBCLG1CQUExQixDQUE4QyxNQUFJUSxVQUFVLENBQUMsTUFBSTtBQUN6RCxjQUFJLENBQUN1RCxTQUFMLEVBQWdCO0FBQ1pMLFlBQUFBLE1BQU0sQ0FBQ3JKLEdBQUQsQ0FBTjtBQUNIO0FBQ0osU0FKdUQsRUFJckR5SixFQUpxRCxDQUE1RDtBQU1ILE9BUEQ7QUFRSDs7QUFDRCxlQUE0QyxFQU8zQztBQUNKLEdBM0JNLENBQVA7QUE0Qkg7O0FBQ0QsU0FBUzdDLHNCQUFULEdBQWtDO0FBQzlCLE1BQUlmLElBQUksQ0FBQytELGdCQUFULEVBQTJCO0FBQ3ZCLFdBQU9yQyxPQUFPLENBQUNDLE9BQVIsQ0FBZ0IzQixJQUFJLENBQUMrRCxnQkFBckIsQ0FBUDtBQUNIOztBQUNELFFBQU1DLGVBQWUsR0FBRyxJQUFJdEMsT0FBSixDQUFhQyxPQUFELElBQVc7QUFDM0M7QUFDQSxVQUFNeEIsRUFBRSxHQUFHSCxJQUFJLENBQUNpRSxtQkFBaEI7O0FBQ0FqRSxJQUFBQSxJQUFJLENBQUNpRSxtQkFBTCxHQUEyQixNQUFJO0FBQzNCdEMsTUFBQUEsT0FBTyxDQUFDM0IsSUFBSSxDQUFDK0QsZ0JBQU4sQ0FBUDtBQUNBNUQsTUFBQUEsRUFBRSxJQUFJQSxFQUFFLEVBQVI7QUFDSCxLQUhEO0FBSUgsR0FQdUIsQ0FBeEI7QUFRQSxTQUFPd0QseUJBQXlCLENBQUNLLGVBQUQsRUFBa0I3QyxpQkFBbEIsRUFBcUNOLGNBQWMsQ0FBQyxJQUFJakYsS0FBSixDQUFVLHNDQUFWLENBQUQsQ0FBbkQsQ0FBaEM7QUFDSDs7QUFDRCxTQUFTc0ksZ0JBQVQsQ0FBMEJDLFdBQTFCLEVBQXVDQyxLQUF2QyxFQUE4QztBQUMxQyxZQUE0QztBQUN4QyxXQUFPMUMsT0FBTyxDQUFDQyxPQUFSLENBQWdCO0FBQ25CMEMsTUFBQUEsT0FBTyxFQUFFLENBQ0xGLFdBQVcsR0FBRyw0QkFBZCxHQUE2Q0csU0FBUyxDQUFDLENBQUMsR0FBR3JELHNCQUFKLEVBQTRCL0gsT0FBNUIsQ0FBb0NrTCxLQUFwQyxFQUEyQyxLQUEzQyxDQUFELENBRGpELENBRFU7QUFJbkI7QUFDQUcsTUFBQUEsR0FBRyxFQUFFO0FBTGMsS0FBaEIsQ0FBUDtBQU9IOztBQUNELFNBQU94RCxzQkFBc0IsR0FBR2dCLElBQXpCLENBQStCeUMsUUFBRCxJQUFZO0FBQzdDLFFBQUksRUFBRUosS0FBSyxJQUFJSSxRQUFYLENBQUosRUFBMEI7QUFDdEIsWUFBTTNELGNBQWMsQ0FBQyxJQUFJakYsS0FBSixDQUFXLDJCQUEwQndJLEtBQU0sRUFBM0MsQ0FBRCxDQUFwQjtBQUNIOztBQUNELFVBQU1LLFFBQVEsR0FBR0QsUUFBUSxDQUFDSixLQUFELENBQVIsQ0FBZ0IvQyxHQUFoQixDQUFxQkUsS0FBRCxJQUFTNEMsV0FBVyxHQUFHLFNBQWQsR0FBMEJHLFNBQVMsQ0FBQy9DLEtBQUQsQ0FBaEUsQ0FBakI7QUFFQSxXQUFPO0FBQ0g4QyxNQUFBQSxPQUFPLEVBQUVJLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUNuRixRQUFGLENBQVcsS0FBWCxDQUFyQixDQUROO0FBR0grRSxNQUFBQSxHQUFHLEVBQUVFLFFBQVEsQ0FBQ0MsTUFBVCxDQUFpQkMsQ0FBRCxJQUFLQSxDQUFDLENBQUNuRixRQUFGLENBQVcsTUFBWCxDQUFyQjtBQUhGLEtBQVA7QUFNSCxHQVpNLENBQVA7QUFhSDs7QUFDRCxTQUFTd0IsaUJBQVQsQ0FBMkJtRCxXQUEzQixFQUF3QztBQUNwQyxRQUFNUyxXQUFXLEdBQUcsSUFBSUMsR0FBSixFQUFwQjtBQUNBLFFBQU1DLGFBQWEsR0FBRyxJQUFJRCxHQUFKLEVBQXRCO0FBQ0EsUUFBTUUsV0FBVyxHQUFHLElBQUlGLEdBQUosRUFBcEI7QUFDQSxRQUFNRyxNQUFNLEdBQUcsSUFBSUgsR0FBSixFQUFmOztBQUNBLFdBQVNJLGtCQUFULENBQTRCM0IsR0FBNUIsRUFBaUM7QUFDN0IsUUFBSXpCLElBQUksR0FBR2lELGFBQWEsQ0FBQ3RELEdBQWQsQ0FBa0I4QixHQUFsQixDQUFYOztBQUNBLFFBQUl6QixJQUFKLEVBQVU7QUFDTixhQUFPQSxJQUFQO0FBQ0gsS0FKNEIsQ0FLN0I7OztBQUNBLFFBQUlLLFFBQVEsQ0FBQ1MsYUFBVCxDQUF3QixnQkFBZVcsR0FBSSxJQUEzQyxDQUFKLEVBQXFEO0FBQ2pELGFBQU81QixPQUFPLENBQUNDLE9BQVIsRUFBUDtBQUNIOztBQUNEbUQsSUFBQUEsYUFBYSxDQUFDaEQsR0FBZCxDQUFrQndCLEdBQWxCLEVBQXVCekIsSUFBSSxHQUFHd0IsWUFBWSxDQUFDQyxHQUFELENBQTFDO0FBQ0EsV0FBT3pCLElBQVA7QUFDSDs7QUFDRCxXQUFTcUQsZUFBVCxDQUF5QnBMLElBQXpCLEVBQStCO0FBQzNCLFFBQUkrSCxJQUFJLEdBQUdrRCxXQUFXLENBQUN2RCxHQUFaLENBQWdCMUgsSUFBaEIsQ0FBWDs7QUFDQSxRQUFJK0gsSUFBSixFQUFVO0FBQ04sYUFBT0EsSUFBUDtBQUNIOztBQUNEa0QsSUFBQUEsV0FBVyxDQUFDakQsR0FBWixDQUFnQmhJLElBQWhCLEVBQXNCK0gsSUFBSSxHQUFHc0QsS0FBSyxDQUFDckwsSUFBRCxDQUFMLENBQVlpSSxJQUFaLENBQWtCVSxHQUFELElBQU87QUFDakQsVUFBSSxDQUFDQSxHQUFHLENBQUMyQyxFQUFULEVBQWE7QUFDVCxjQUFNLElBQUl4SixLQUFKLENBQVcsOEJBQTZCOUIsSUFBSyxFQUE3QyxDQUFOO0FBQ0g7O0FBQ0QsYUFBTzJJLEdBQUcsQ0FBQzRDLElBQUosR0FBV3RELElBQVgsQ0FBaUJzRCxJQUFELEtBQVM7QUFDeEJ2TCxRQUFBQSxJQUFJLEVBQUVBLElBRGtCO0FBRXhCd0wsUUFBQUEsT0FBTyxFQUFFRDtBQUZlLE9BQVQsQ0FBaEIsQ0FBUDtBQUtILEtBVDRCLEVBUzFCbkwsS0FUMEIsQ0FTbkJDLEdBQUQsSUFBTztBQUNaLFlBQU0wRyxjQUFjLENBQUMxRyxHQUFELENBQXBCO0FBQ0gsS0FYNEIsQ0FBN0I7QUFZQSxXQUFPMEgsSUFBUDtBQUNIOztBQUNELFNBQU87QUFDSDBELElBQUFBLGNBQWMsQ0FBRW5CLEtBQUYsRUFBUztBQUNuQixhQUFPaEQsVUFBVSxDQUFDZ0QsS0FBRCxFQUFRUSxXQUFSLENBQWpCO0FBQ0gsS0FIRTs7QUFJSFksSUFBQUEsWUFBWSxDQUFFcEIsS0FBRixFQUFTcUIsT0FBVCxFQUFrQjtBQUMxQi9ELE1BQUFBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQjhELE9BQWhCLEVBQXlCMUQsSUFBekIsQ0FBK0IyRCxFQUFELElBQU1BLEVBQUUsRUFBdEMsRUFDRTNELElBREYsQ0FDUTlJLE9BQUQsS0FBWTtBQUNYME0sUUFBQUEsU0FBUyxFQUFFMU0sT0FBTyxJQUFJQSxPQUFPLENBQUNDLE9BQW5CLElBQThCRCxPQUQ5QjtBQUVYQSxRQUFBQSxPQUFPLEVBQUVBO0FBRkUsT0FBWixDQURQLEVBS0drQixHQUFELEtBQVE7QUFDRnlMLFFBQUFBLEtBQUssRUFBRXpMO0FBREwsT0FBUixDQUxGLEVBUUU0SCxJQVJGLENBUVE4RCxLQUFELElBQVM7QUFDWixjQUFNQyxHQUFHLEdBQUdsQixXQUFXLENBQUNwRCxHQUFaLENBQWdCNEMsS0FBaEIsQ0FBWjtBQUNBUSxRQUFBQSxXQUFXLENBQUM5QyxHQUFaLENBQWdCc0MsS0FBaEIsRUFBdUJ5QixLQUF2QjtBQUNBLFlBQUlDLEdBQUcsSUFBSSxhQUFhQSxHQUF4QixFQUE2QkEsR0FBRyxDQUFDbkUsT0FBSixDQUFZa0UsS0FBWjtBQUNoQyxPQVpEO0FBYUgsS0FsQkU7O0FBbUJIRSxJQUFBQSxTQUFTLENBQUUzQixLQUFGLEVBQVN4SyxRQUFULEVBQW1CO0FBQ3hCLGFBQU93SCxVQUFVLENBQUNnRCxLQUFELEVBQVFZLE1BQVIsRUFBZ0IsTUFBSTtBQUNqQyxjQUFNZ0IsaUJBQWlCLEdBQUc5QixnQkFBZ0IsQ0FBQ0MsV0FBRCxFQUFjQyxLQUFkLENBQWhCLENBQXFDckMsSUFBckMsQ0FBMEMsQ0FBQztBQUFFc0MsVUFBQUEsT0FBRjtBQUFZRSxVQUFBQTtBQUFaLFNBQUQsS0FBc0I7QUFDdEYsaUJBQU83QyxPQUFPLENBQUN1RSxHQUFSLENBQVksQ0FDZnJCLFdBQVcsQ0FBQ3NCLEdBQVosQ0FBZ0I5QixLQUFoQixJQUF5QixFQUF6QixHQUE4QjFDLE9BQU8sQ0FBQ3VFLEdBQVIsQ0FBWTVCLE9BQU8sQ0FBQ2hELEdBQVIsQ0FBWTRELGtCQUFaLENBQVosQ0FEZixFQUVmdkQsT0FBTyxDQUFDdUUsR0FBUixDQUFZMUIsR0FBRyxDQUFDbEQsR0FBSixDQUFRNkQsZUFBUixDQUFaLENBRmUsQ0FBWixDQUFQO0FBSUgsU0FMeUIsRUFLdkJuRCxJQUx1QixDQUtqQlUsR0FBRCxJQUFPO0FBQ1gsaUJBQU8sS0FBSzhDLGNBQUwsQ0FBb0JuQixLQUFwQixFQUEyQnJDLElBQTNCLENBQWlDb0UsVUFBRCxLQUFlO0FBQzlDQSxZQUFBQSxVQUQ4QztBQUU5Q0MsWUFBQUEsTUFBTSxFQUFFM0QsR0FBRyxDQUFDLENBQUQ7QUFGbUMsV0FBZixDQUFoQyxDQUFQO0FBS0gsU0FYeUIsQ0FBMUI7O0FBWUEsa0JBQTRDO0FBQ3hDaUIsVUFBQUEsZUFBZSxHQUFHLElBQUloQyxPQUFKLENBQWFDLE9BQUQsSUFBVztBQUNyQyxnQkFBSXFFLGlCQUFKLEVBQXVCO0FBQ25CLHFCQUFPQSxpQkFBaUIsQ0FBQ0ssT0FBbEIsQ0FBMEIsTUFBSTtBQUNqQzFFLGdCQUFBQSxPQUFPO0FBQ1YsZUFGTSxDQUFQO0FBR0g7QUFDSixXQU5pQixDQUFsQjtBQU9IOztBQUNELGVBQU9nQyx5QkFBeUIsQ0FBQ3FDLGlCQUFELEVBQW9CN0UsaUJBQXBCLEVBQXVDTixjQUFjLENBQUMsSUFBSWpGLEtBQUosQ0FBVyxtQ0FBa0N3SSxLQUFNLEVBQW5ELENBQUQsQ0FBckQsQ0FBekIsQ0FBdUlyQyxJQUF2SSxDQUE0SSxDQUFDO0FBQUVvRSxVQUFBQSxVQUFGO0FBQWVDLFVBQUFBO0FBQWYsU0FBRCxLQUE0QjtBQUMzSyxnQkFBTTNELEdBQUcsR0FBRzFKLE1BQU0sQ0FBQ3VOLE1BQVAsQ0FBYztBQUN0QkYsWUFBQUEsTUFBTSxFQUFFQTtBQURjLFdBQWQsRUFFVEQsVUFGUyxDQUFaO0FBR0EsaUJBQU8sV0FBV0EsVUFBWCxHQUF3QkEsVUFBeEIsR0FBcUMxRCxHQUE1QztBQUNILFNBTE0sRUFLSnZJLEtBTEksQ0FLR0MsR0FBRCxJQUFPO0FBQ1osY0FBSVAsUUFBSixFQUFjO0FBQ1Y7QUFDQSxrQkFBTU8sR0FBTjtBQUNIOztBQUNELGlCQUFPO0FBQ0h5TCxZQUFBQSxLQUFLLEVBQUV6TDtBQURKLFdBQVA7QUFHSCxTQWJNLENBQVA7QUFjSCxPQXBDZ0IsQ0FBakI7QUFxQ0gsS0F6REU7O0FBMERIUCxJQUFBQSxRQUFRLENBQUV3SyxLQUFGLEVBQVM7QUFDYjtBQUNBO0FBQ0EsVUFBSW1DLEVBQUo7O0FBQ0EsVUFBSUEsRUFBRSxHQUFHQyxTQUFTLENBQUNDLFVBQW5CLEVBQStCO0FBQzNCO0FBQ0EsWUFBSUYsRUFBRSxDQUFDRyxRQUFILElBQWUsS0FBSzdHLElBQUwsQ0FBVTBHLEVBQUUsQ0FBQ0ksYUFBYixDQUFuQixFQUFnRCxPQUFPakYsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDbkQ7O0FBQ0QsYUFBT3VDLGdCQUFnQixDQUFDQyxXQUFELEVBQWNDLEtBQWQsQ0FBaEIsQ0FBcUNyQyxJQUFyQyxDQUEyQzZFLE1BQUQsSUFBVWxGLE9BQU8sQ0FBQ3VFLEdBQVIsQ0FBWTFELFdBQVcsR0FBR3FFLE1BQU0sQ0FBQ3ZDLE9BQVAsQ0FBZWhELEdBQWYsQ0FBb0JrQyxNQUFELElBQVVmLGNBQWMsQ0FBQ2UsTUFBRCxFQUFTLFFBQVQsQ0FBM0MsQ0FBSCxHQUMxRSxFQURtRCxDQUFwRCxFQUVMeEIsSUFGSyxDQUVBLE1BQUk7QUFDUCxTQUFDLEdBQUdiLG9CQUFKLEVBQTBCcEIsbUJBQTFCLENBQThDLE1BQUksS0FBS2lHLFNBQUwsQ0FBZTNCLEtBQWYsRUFBc0IsSUFBdEIsRUFBNEJsSyxLQUE1QixDQUFrQyxNQUFJLENBQ25GLENBRDZDLENBQWxEO0FBR0gsT0FOTSxFQU1KQSxLQU5JLEVBTUU7QUFDVCxZQUFJLENBQ0gsQ0FSTSxDQUFQO0FBU0g7O0FBM0VFLEdBQVA7QUE2RUg7Ozs7Ozs7Ozs7O0FDdFJZOztBQUNibkIsOENBQTZDO0FBQ3pDVCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQVMsMENBQXlDO0FBQ3JDOE4sRUFBQUEsVUFBVSxFQUFFLElBRHlCO0FBRXJDckYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPbEksT0FBTyxDQUFDSixPQUFmO0FBQ0g7QUFKb0MsQ0FBekM7QUFNQUgsOENBQTZDO0FBQ3pDOE4sRUFBQUEsVUFBVSxFQUFFLElBRDZCO0FBRXpDckYsRUFBQUEsR0FBRyxFQUFFLFlBQVc7QUFDWixXQUFPc0YsV0FBVyxDQUFDNU4sT0FBbkI7QUFDSDtBQUp3QyxDQUE3QztBQU1BRCxpQkFBQSxHQUFvQjhELFNBQXBCO0FBQ0E5RCxvQkFBQSxHQUF1QjhOLFlBQXZCO0FBQ0E5TixnQ0FBQSxHQUFtQytOLHdCQUFuQztBQUNBL04sZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUlFLE1BQU0sR0FBR0Msc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsb0JBQUQsQ0FBUixDQUFuQzs7QUFDQSxJQUFJQyxPQUFPLEdBQUdGLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLDZGQUFELENBQVIsQ0FBcEM7O0FBQ0EsSUFBSTROLGNBQWMsR0FBRzVOLG1CQUFPLENBQUMsa0VBQUQsQ0FBNUI7O0FBQ0EsSUFBSXlOLFdBQVcsR0FBRzFOLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLHlFQUFELENBQVIsQ0FBeEM7O0FBQ0EsU0FBU0Qsc0JBQVQsQ0FBZ0NLLEdBQWhDLEVBQXFDO0FBQ2pDLFNBQU9BLEdBQUcsSUFBSUEsR0FBRyxDQUFDQyxVQUFYLEdBQXdCRCxHQUF4QixHQUE4QjtBQUNqQ1AsSUFBQUEsT0FBTyxFQUFFTztBQUR3QixHQUFyQztBQUdIOztBQUNELE1BQU15TixlQUFlLEdBQUc7QUFDcEJyTixFQUFBQSxNQUFNLEVBQUUsSUFEWTtBQUVwQnNOLEVBQUFBLGNBQWMsRUFBRSxFQUZJOztBQUdwQkMsRUFBQUEsS0FBSyxDQUFFakgsRUFBRixFQUFNO0FBQ1AsUUFBSSxLQUFLdEcsTUFBVCxFQUFpQixPQUFPc0csRUFBRSxFQUFUOztBQUNqQixlQUFtQyxFQUVsQztBQUNKOztBQVJtQixDQUF4QixFQVVBOztBQUNBLE1BQU1tSCxpQkFBaUIsR0FBRyxDQUN0QixVQURzQixFQUV0QixPQUZzQixFQUd0QixPQUhzQixFQUl0QixRQUpzQixFQUt0QixZQUxzQixFQU10QixZQU5zQixFQU90QixVQVBzQixFQVF0QixRQVJzQixFQVN0QixTQVRzQixFQVV0QixlQVZzQixFQVd0QixTQVhzQixFQVl0QixXQVpzQixFQWF0QixnQkFic0IsRUFjdEIsZUFkc0IsQ0FBMUI7QUFnQkEsTUFBTUMsWUFBWSxHQUFHLENBQ2pCLGtCQURpQixFQUVqQixxQkFGaUIsRUFHakIscUJBSGlCLEVBSWpCLGtCQUppQixFQUtqQixpQkFMaUIsRUFNakIsb0JBTmlCLENBQXJCO0FBUUEsTUFBTUMsZ0JBQWdCLEdBQUcsQ0FDckIsTUFEcUIsRUFFckIsU0FGcUIsRUFHckIsUUFIcUIsRUFJckIsTUFKcUIsRUFLckIsVUFMcUIsRUFNckIsZ0JBTnFCLENBQXpCLEVBUUE7O0FBQ0F6TyxNQUFNLENBQUNDLGNBQVAsQ0FBc0JrTyxlQUF0QixFQUF1QyxRQUF2QyxFQUFpRDtBQUM3QzFGLEVBQUFBLEdBQUcsR0FBSTtBQUNILFdBQU9sSSxPQUFPLENBQUNKLE9BQVIsQ0FBZ0J1TyxNQUF2QjtBQUNIOztBQUg0QyxDQUFqRDtBQUtBSCxpQkFBaUIsQ0FBQ25MLE9BQWxCLENBQTJCdUwsS0FBRCxJQUFTO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EzTyxFQUFBQSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JrTyxlQUF0QixFQUF1Q1EsS0FBdkMsRUFBOEM7QUFDMUNsRyxJQUFBQSxHQUFHLEdBQUk7QUFDSCxZQUFNM0gsTUFBTSxHQUFHOE4sU0FBUyxFQUF4QjtBQUNBLGFBQU85TixNQUFNLENBQUM2TixLQUFELENBQWI7QUFDSDs7QUFKeUMsR0FBOUM7QUFNSCxDQVhEO0FBWUFGLGdCQUFnQixDQUFDckwsT0FBakIsQ0FBMEJ1TCxLQUFELElBQVM7QUFDOUJSLEVBQUFBLGVBQWUsQ0FBQ1EsS0FBRCxDQUFmLEdBQXlCLENBQUMsR0FBRy9MLElBQUosS0FBVztBQUNoQyxVQUFNOUIsTUFBTSxHQUFHOE4sU0FBUyxFQUF4QjtBQUNBLFdBQU85TixNQUFNLENBQUM2TixLQUFELENBQU4sQ0FBYyxHQUFHL0wsSUFBakIsQ0FBUDtBQUNILEdBSEQ7QUFJSCxDQUxEO0FBTUE0TCxZQUFZLENBQUNwTCxPQUFiLENBQXNCNUIsS0FBRCxJQUFTO0FBQzFCMk0sRUFBQUEsZUFBZSxDQUFDRSxLQUFoQixDQUFzQixNQUFJO0FBQ3RCOU4sSUFBQUEsT0FBTyxDQUFDSixPQUFSLENBQWdCdU8sTUFBaEIsQ0FBdUJHLEVBQXZCLENBQTBCck4sS0FBMUIsRUFBaUMsQ0FBQyxHQUFHb0IsSUFBSixLQUFXO0FBQ3hDLFlBQU1rTSxVQUFVLEdBQUksS0FBSXROLEtBQUssQ0FBQ3VOLE1BQU4sQ0FBYSxDQUFiLEVBQWdCQyxXQUFoQixFQUE4QixHQUFFeE4sS0FBSyxDQUFDeU4sU0FBTixDQUFnQixDQUFoQixDQUFtQixFQUEzRTtBQUNBLFlBQU1DLGdCQUFnQixHQUFHZixlQUF6Qjs7QUFDQSxVQUFJZSxnQkFBZ0IsQ0FBQ0osVUFBRCxDQUFwQixFQUFrQztBQUM5QixZQUFJO0FBQ0FJLFVBQUFBLGdCQUFnQixDQUFDSixVQUFELENBQWhCLENBQTZCLEdBQUdsTSxJQUFoQztBQUNILFNBRkQsQ0FFRSxPQUFPeEIsR0FBUCxFQUFZO0FBQ1Z5QyxVQUFBQSxPQUFPLENBQUNnSixLQUFSLENBQWUsd0NBQXVDaUMsVUFBVyxFQUFqRTtBQUNBakwsVUFBQUEsT0FBTyxDQUFDZ0osS0FBUixDQUFlLEdBQUV6TCxHQUFHLENBQUMrTixPQUFRLEtBQUkvTixHQUFHLENBQUNnTyxLQUFNLEVBQTNDO0FBQ0g7QUFDSjtBQUNKLEtBWEQ7QUFZSCxHQWJEO0FBY0gsQ0FmRDs7QUFnQkEsU0FBU1IsU0FBVCxHQUFxQjtBQUNqQixNQUFJLENBQUNULGVBQWUsQ0FBQ3JOLE1BQXJCLEVBQTZCO0FBQ3pCLFVBQU1xTyxPQUFPLEdBQUcsZ0NBQWdDLHFFQUFoRDtBQUNBLFVBQU0sSUFBSXRNLEtBQUosQ0FBVXNNLE9BQVYsQ0FBTjtBQUNIOztBQUNELFNBQU9oQixlQUFlLENBQUNyTixNQUF2QjtBQUNIOztBQUNELElBQUl1RixRQUFRLEdBQUc4SCxlQUFmO0FBQ0FqTyxlQUFBLEdBQWtCbUcsUUFBbEI7O0FBQ0EsU0FBU3JDLFNBQVQsR0FBcUI7QUFDakIsU0FBTzVELE1BQU0sQ0FBQ0QsT0FBUCxDQUFla1AsVUFBZixDQUEwQm5CLGNBQWMsQ0FBQ29CLGFBQXpDLENBQVA7QUFDSDs7QUFDRCxTQUFTdEIsWUFBVCxDQUFzQixHQUFHcEwsSUFBekIsRUFBK0I7QUFDM0J1TCxFQUFBQSxlQUFlLENBQUNyTixNQUFoQixHQUF5QixJQUFJUCxPQUFPLENBQUNKLE9BQVosQ0FBb0IsR0FBR3lDLElBQXZCLENBQXpCO0FBQ0F1TCxFQUFBQSxlQUFlLENBQUNDLGNBQWhCLENBQStCaEwsT0FBL0IsQ0FBd0NnRSxFQUFELElBQU1BLEVBQUUsRUFBL0M7QUFFQStHLEVBQUFBLGVBQWUsQ0FBQ0MsY0FBaEIsR0FBaUMsRUFBakM7QUFDQSxTQUFPRCxlQUFlLENBQUNyTixNQUF2QjtBQUNIOztBQUNELFNBQVNtTix3QkFBVCxDQUFrQ25OLE1BQWxDLEVBQTBDO0FBQ3RDLFFBQU1OLFFBQVEsR0FBR00sTUFBakI7QUFDQSxRQUFNeU8sUUFBUSxHQUFHLEVBQWpCOztBQUVBLE9BQUssTUFBTUMsUUFBWCxJQUF1QmpCLGlCQUF2QixFQUF5QztBQUNyQyxRQUFJLE9BQU8vTixRQUFRLENBQUNnUCxRQUFELENBQWYsS0FBOEIsUUFBbEMsRUFBNEM7QUFDeENELE1BQUFBLFFBQVEsQ0FBQ0MsUUFBRCxDQUFSLEdBQXFCeFAsTUFBTSxDQUFDdU4sTUFBUCxDQUFja0MsS0FBSyxDQUFDQyxPQUFOLENBQWNsUCxRQUFRLENBQUNnUCxRQUFELENBQXRCLElBQW9DLEVBQXBDLEdBQXlDLEVBQXZELEVBQ2xCaFAsUUFBUSxDQUFDZ1AsUUFBRCxDQURVLENBQXJCLENBQ3VCO0FBRHZCO0FBR0E7QUFDSDs7QUFDREQsSUFBQUEsUUFBUSxDQUFDQyxRQUFELENBQVIsR0FBcUJoUCxRQUFRLENBQUNnUCxRQUFELENBQTdCO0FBQ0gsR0FacUMsQ0FhdEM7OztBQUNBRCxFQUFBQSxRQUFRLENBQUNiLE1BQVQsR0FBa0JuTyxPQUFPLENBQUNKLE9BQVIsQ0FBZ0J1TyxNQUFsQztBQUNBRCxFQUFBQSxnQkFBZ0IsQ0FBQ3JMLE9BQWpCLENBQTBCdUwsS0FBRCxJQUFTO0FBQzlCWSxJQUFBQSxRQUFRLENBQUNaLEtBQUQsQ0FBUixHQUFrQixDQUFDLEdBQUcvTCxJQUFKLEtBQVc7QUFDekIsYUFBT3BDLFFBQVEsQ0FBQ21PLEtBQUQsQ0FBUixDQUFnQixHQUFHL0wsSUFBbkIsQ0FBUDtBQUNILEtBRkQ7QUFHSCxHQUpEO0FBS0EsU0FBTzJNLFFBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUN4Slk7O0FBQ2J2UCw4Q0FBNkM7QUFDekNULEVBQUFBLEtBQUssRUFBRTtBQURrQyxDQUE3QztBQUdBVyx1QkFBQSxHQUEwQjRFLGVBQTFCOztBQUNBLElBQUkxRSxNQUFNLEdBQUdFLG1CQUFPLENBQUMsb0JBQUQsQ0FBcEI7O0FBQ0EsSUFBSTZILG9CQUFvQixHQUFHN0gsbUJBQU8sQ0FBQyw2RkFBRCxDQUFsQzs7QUFDQSxNQUFNcVAsdUJBQXVCLEdBQUcsT0FBT0Msb0JBQVAsS0FBZ0MsV0FBaEU7O0FBQ0EsU0FBUzlLLGVBQVQsQ0FBeUI7QUFBRUMsRUFBQUEsVUFBRjtBQUFlOEssRUFBQUE7QUFBZixDQUF6QixFQUFxRDtBQUNqRCxRQUFNQyxVQUFVLEdBQUdELFFBQVEsSUFBSSxDQUFDRix1QkFBaEM7QUFDQSxRQUFNSSxTQUFTLEdBQUcsQ0FBQyxHQUFHM1AsTUFBSixFQUFZdUQsTUFBWixFQUFsQjtBQUNBLFFBQU0sQ0FBQ3FNLE9BQUQsRUFBVUMsVUFBVixJQUF3QixDQUFDLEdBQUc3UCxNQUFKLEVBQVk4UCxRQUFaLENBQXFCLEtBQXJCLENBQTlCO0FBQ0EsUUFBTWxMLE1BQU0sR0FBRyxDQUFDLEdBQUc1RSxNQUFKLEVBQVk2RSxXQUFaLENBQXlCQyxFQUFELElBQU07QUFDekMsUUFBSTZLLFNBQVMsQ0FBQ25NLE9BQWQsRUFBdUI7QUFDbkJtTSxNQUFBQSxTQUFTLENBQUNuTSxPQUFWO0FBQ0FtTSxNQUFBQSxTQUFTLENBQUNuTSxPQUFWLEdBQW9CdU0sU0FBcEI7QUFDSDs7QUFDRCxRQUFJTCxVQUFVLElBQUlFLE9BQWxCLEVBQTJCOztBQUMzQixRQUFJOUssRUFBRSxJQUFJQSxFQUFFLENBQUNrTCxPQUFiLEVBQXNCO0FBQ2xCTCxNQUFBQSxTQUFTLENBQUNuTSxPQUFWLEdBQW9CeU0sT0FBTyxDQUFDbkwsRUFBRCxFQUFNTCxTQUFELElBQWFBLFNBQVMsSUFBSW9MLFVBQVUsQ0FBQ3BMLFNBQUQsQ0FBekMsRUFDekI7QUFDRUUsUUFBQUE7QUFERixPQUR5QixDQUEzQjtBQUlIO0FBQ0osR0FaYyxFQVlaLENBQ0MrSyxVQURELEVBRUMvSyxVQUZELEVBR0NpTCxPQUhELENBWlksQ0FBZjtBQWlCQSxHQUFDLEdBQUc1UCxNQUFKLEVBQVkrRSxTQUFaLENBQXNCLE1BQUk7QUFDdEIsUUFBSSxDQUFDd0ssdUJBQUwsRUFBOEI7QUFDMUIsVUFBSSxDQUFDSyxPQUFMLEVBQWM7QUFDVixjQUFNTSxZQUFZLEdBQUcsQ0FBQyxHQUFHbkksb0JBQUosRUFBMEJwQixtQkFBMUIsQ0FBOEMsTUFBSWtKLFVBQVUsQ0FBQyxJQUFELENBQTVELENBQXJCO0FBRUEsZUFBTyxNQUFJLENBQUMsR0FBRzlILG9CQUFKLEVBQTBCbkIsa0JBQTFCLENBQTZDc0osWUFBN0MsQ0FBWDtBQUVIO0FBQ0o7QUFDSixHQVRELEVBU0csQ0FDQ04sT0FERCxDQVRIO0FBWUEsU0FBTyxDQUNIaEwsTUFERyxFQUVIZ0wsT0FGRyxDQUFQO0FBSUg7O0FBQ0QsU0FBU0ssT0FBVCxDQUFpQkUsT0FBakIsRUFBMEJDLFFBQTFCLEVBQW9DdlAsT0FBcEMsRUFBNkM7QUFDekMsUUFBTTtBQUFFMkcsSUFBQUEsRUFBRjtBQUFPNkksSUFBQUEsUUFBUDtBQUFrQkMsSUFBQUE7QUFBbEIsTUFBZ0NDLGNBQWMsQ0FBQzFQLE9BQUQsQ0FBcEQ7QUFDQXlQLEVBQUFBLFFBQVEsQ0FBQzNILEdBQVQsQ0FBYXdILE9BQWIsRUFBc0JDLFFBQXRCO0FBQ0FDLEVBQUFBLFFBQVEsQ0FBQ0osT0FBVCxDQUFpQkUsT0FBakI7QUFDQSxTQUFPLFNBQVNSLFNBQVQsR0FBcUI7QUFDeEJXLElBQUFBLFFBQVEsQ0FBQ0UsTUFBVCxDQUFnQkwsT0FBaEI7QUFDQUUsSUFBQUEsUUFBUSxDQUFDVixTQUFULENBQW1CUSxPQUFuQixFQUZ3QixDQUd4Qjs7QUFDQSxRQUFJRyxRQUFRLENBQUNHLElBQVQsS0FBa0IsQ0FBdEIsRUFBeUI7QUFDckJKLE1BQUFBLFFBQVEsQ0FBQ0ssVUFBVDtBQUNBQyxNQUFBQSxTQUFTLENBQUNILE1BQVYsQ0FBaUJoSixFQUFqQjtBQUNIO0FBQ0osR0FSRDtBQVNIOztBQUNELE1BQU1tSixTQUFTLEdBQUcsSUFBSWpGLEdBQUosRUFBbEI7O0FBQ0EsU0FBUzZFLGNBQVQsQ0FBd0IxUCxPQUF4QixFQUFpQztBQUM3QixRQUFNMkcsRUFBRSxHQUFHM0csT0FBTyxDQUFDOEQsVUFBUixJQUFzQixFQUFqQztBQUNBLE1BQUl3SyxRQUFRLEdBQUd3QixTQUFTLENBQUN0SSxHQUFWLENBQWNiLEVBQWQsQ0FBZjs7QUFDQSxNQUFJMkgsUUFBSixFQUFjO0FBQ1YsV0FBT0EsUUFBUDtBQUNIOztBQUNELFFBQU1tQixRQUFRLEdBQUcsSUFBSTVFLEdBQUosRUFBakI7QUFDQSxRQUFNMkUsUUFBUSxHQUFHLElBQUliLG9CQUFKLENBQTBCb0IsT0FBRCxJQUFXO0FBQ2pEQSxJQUFBQSxPQUFPLENBQUM1TixPQUFSLENBQWlCb0YsS0FBRCxJQUFTO0FBQ3JCLFlBQU1nSSxRQUFRLEdBQUdFLFFBQVEsQ0FBQ2pJLEdBQVQsQ0FBYUQsS0FBSyxDQUFDL0csTUFBbkIsQ0FBakI7QUFDQSxZQUFNb0QsU0FBUyxHQUFHMkQsS0FBSyxDQUFDeUksY0FBTixJQUF3QnpJLEtBQUssQ0FBQzBJLGlCQUFOLEdBQTBCLENBQXBFOztBQUNBLFVBQUlWLFFBQVEsSUFBSTNMLFNBQWhCLEVBQTJCO0FBQ3ZCMkwsUUFBQUEsUUFBUSxDQUFDM0wsU0FBRCxDQUFSO0FBQ0g7QUFDSixLQU5EO0FBT0gsR0FSZ0IsRUFRZDVELE9BUmMsQ0FBakI7QUFTQThQLEVBQUFBLFNBQVMsQ0FBQ2hJLEdBQVYsQ0FBY25CLEVBQWQsRUFBa0IySCxRQUFRLEdBQUc7QUFDekIzSCxJQUFBQSxFQUR5QjtBQUV6QjZJLElBQUFBLFFBRnlCO0FBR3pCQyxJQUFBQTtBQUh5QixHQUE3QjtBQUtBLFNBQU9uQixRQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDbkZZOztBQUNidlAsOENBQTZDO0FBQ3pDVCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQVcsZUFBQSxHQUFrQmlSLFVBQWxCOztBQUNBLElBQUkvUSxNQUFNLEdBQUdDLHNCQUFzQixDQUFDQyxtQkFBTyxDQUFDLG9CQUFELENBQVIsQ0FBbkM7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHRCxtQkFBTyxDQUFDLCtEQUFELENBQXJCOztBQUNBLFNBQVNELHNCQUFULENBQWdDSyxHQUFoQyxFQUFxQztBQUNqQyxTQUFPQSxHQUFHLElBQUlBLEdBQUcsQ0FBQ0MsVUFBWCxHQUF3QkQsR0FBeEIsR0FBOEI7QUFDakNQLElBQUFBLE9BQU8sRUFBRU87QUFEd0IsR0FBckM7QUFHSDs7QUFDRCxTQUFTeVEsVUFBVCxDQUFvQkMsaUJBQXBCLEVBQXVDO0FBQ25DLFdBQVNDLGlCQUFULENBQTJCM08sS0FBM0IsRUFBa0M7QUFDOUIsV0FBTyxhQUFjdEMsTUFBTSxDQUFDRCxPQUFQLENBQWVtRSxhQUFmLENBQTZCOE0saUJBQTdCLEVBQWdEcFIsTUFBTSxDQUFDdU4sTUFBUCxDQUFjO0FBQy9Fek0sTUFBQUEsTUFBTSxFQUFFLENBQUMsR0FBR1AsT0FBSixFQUFheUQsU0FBYjtBQUR1RSxLQUFkLEVBRWxFdEIsS0FGa0UsQ0FBaEQsQ0FBckI7QUFHSDs7QUFDRDJPLEVBQUFBLGlCQUFpQixDQUFDQyxlQUFsQixHQUFvQ0YsaUJBQWlCLENBQUNFLGVBQXREO0FBQ0FELEVBQUFBLGlCQUFpQixDQUFDRSxtQkFBbEIsR0FBd0NILGlCQUFpQixDQUFDRyxtQkFBMUQ7O0FBQ0EsWUFBMkM7QUFDdkMsVUFBTWpTLElBQUksR0FBRzhSLGlCQUFpQixDQUFDSSxXQUFsQixJQUFpQ0osaUJBQWlCLENBQUM5UixJQUFuRCxJQUEyRCxTQUF4RTtBQUNBK1IsSUFBQUEsaUJBQWlCLENBQUNHLFdBQWxCLEdBQWlDLGNBQWFsUyxJQUFLLEdBQW5EO0FBQ0g7O0FBQ0QsU0FBTytSLGlCQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDekJZOztBQUNiclIsOENBQTZDO0FBQ3pDVCxFQUFBQSxLQUFLLEVBQUU7QUFEa0MsQ0FBN0M7QUFHQVcsdUJBQUEsR0FBMEI0RixlQUExQjtBQUNBNUYsaUJBQUEsR0FBb0JnRyxTQUFwQjtBQUNBaEcsaUJBQUEsR0FBb0J1UixTQUFwQjtBQUNBdlIsbUJBQUEsR0FBc0J3UixXQUF0QjtBQUNBeFIsbUJBQUEsR0FBc0IrRixXQUF0QjtBQUNBL0YsbUJBQUEsR0FBc0J5UixXQUF0QjtBQUNBelIsa0JBQUEsR0FBcUJnQixVQUFyQjtBQUNBaEIscUJBQUEsR0FBd0IwUixhQUF4QjtBQUNBMVIsbUJBQUEsR0FBc0JrRSxXQUF0QjtBQUNBbEUsZUFBQSxHQUFrQixLQUFLLENBQXZCOztBQUNBLElBQUkyUix1QkFBdUIsR0FBR3ZSLG1CQUFPLENBQUMsaUhBQUQsQ0FBckM7O0FBQ0EsSUFBSXdSLFlBQVksR0FBR3hSLG1CQUFPLENBQUMseUZBQUQsQ0FBMUI7O0FBQ0EsSUFBSXlSLG9CQUFvQixHQUFHelIsbUJBQU8sQ0FBQyxvRkFBRCxDQUFsQzs7QUFDQSxJQUFJMFIsb0JBQW9CLEdBQUcxUixtQkFBTyxDQUFDLG9FQUFELENBQWxDOztBQUNBLElBQUkyUixLQUFLLEdBQUc1UixzQkFBc0IsQ0FBQ0MsbUJBQU8sQ0FBQyx3QkFBRCxDQUFSLENBQWxDOztBQUNBLElBQUk0UixNQUFNLEdBQUc1UixtQkFBTyxDQUFDLHFDQUFELENBQXBCOztBQUNBLElBQUk2UixVQUFVLEdBQUc3UixtQkFBTyxDQUFDLDhDQUFELENBQXhCOztBQUNBLElBQUk4UixpQkFBaUIsR0FBRzlSLG1CQUFPLENBQUMsOERBQUQsQ0FBL0I7O0FBQ0EsSUFBSStSLFlBQVksR0FBRy9SLG1CQUFPLENBQUMsZ0RBQUQsQ0FBMUI7O0FBQ0EsSUFBSWdTLGdCQUFnQixHQUFHalMsc0JBQXNCLENBQUNDLG1CQUFPLENBQUMsdUNBQUQsQ0FBUixDQUE3Qzs7QUFDQSxJQUFJaVMsYUFBYSxHQUFHalMsbUJBQU8sQ0FBQyxvREFBRCxDQUEzQjs7QUFDQSxJQUFJa1MsV0FBVyxHQUFHbFMsbUJBQU8sQ0FBQyxnREFBRCxDQUF6Qjs7QUFDQSxTQUFTRCxzQkFBVCxDQUFnQ0ssR0FBaEMsRUFBcUM7QUFDakMsU0FBT0EsR0FBRyxJQUFJQSxHQUFHLENBQUNDLFVBQVgsR0FBd0JELEdBQXhCLEdBQThCO0FBQ2pDUCxJQUFBQSxPQUFPLEVBQUVPO0FBRHdCLEdBQXJDO0FBR0g7O0FBQ0QsSUFBSStSLGtCQUFKOztBQUNBLElBQUk5TCxLQUFKLEVBQXFDLEVBRXBDOztBQUNELE1BQU1nTSxRQUFRLEdBQUdoTSxNQUFBLElBQXNDLEVBQXZEOztBQUNBLFNBQVNrTSxzQkFBVCxHQUFrQztBQUM5QixTQUFPN1MsTUFBTSxDQUFDdU4sTUFBUCxDQUFjLElBQUkxSyxLQUFKLENBQVUsaUJBQVYsQ0FBZCxFQUE0QztBQUMvQ2lJLElBQUFBLFNBQVMsRUFBRTtBQURvQyxHQUE1QyxDQUFQO0FBR0g7O0FBQ0QsU0FBU2dJLGFBQVQsQ0FBdUJ0TSxJQUF2QixFQUE2QnVNLE1BQTdCLEVBQXFDO0FBQ2pDLFNBQU9BLE1BQU0sSUFBSXZNLElBQUksQ0FBQ3dNLFVBQUwsQ0FBZ0IsR0FBaEIsQ0FBVixHQUFpQ3hNLElBQUksS0FBSyxHQUFULEdBQWUsQ0FBQyxHQUFHcUwsdUJBQUosRUFBNkJ0TCwwQkFBN0IsQ0FBd0R3TSxNQUF4RCxDQUFmLEdBQWtGLEdBQUVBLE1BQU8sR0FBRUUsZUFBZSxDQUFDek0sSUFBRCxDQUFmLEtBQTBCLEdBQTFCLEdBQWdDQSxJQUFJLENBQUN5SSxTQUFMLENBQWUsQ0FBZixDQUFoQyxHQUFvRHpJLElBQUssRUFBdkwsR0FBMkxBLElBQWxNO0FBQ0g7O0FBQ0QsU0FBU1YsZUFBVCxDQUF5QlUsSUFBekIsRUFBK0JsRixNQUEvQixFQUF1Q3lFLE9BQXZDLEVBQWdEQyxhQUFoRCxFQUErRDtBQUMzRCxNQUFJVyxLQUFKLEVBQXFDLEVBQXJDLE1BT087QUFDSCxXQUFPLEtBQVA7QUFDSDtBQUNKOztBQUNELFNBQVNULFNBQVQsQ0FBbUJNLElBQW5CLEVBQXlCbEYsTUFBekIsRUFBaUM2RSxhQUFqQyxFQUFnRDtBQUM1QyxNQUFJUSxLQUFKLEVBQXFDLEVBS3BDOztBQUNELFNBQU9ILElBQVA7QUFDSDs7QUFDRCxTQUFTaUwsU0FBVCxDQUFtQmpMLElBQW5CLEVBQXlCbEYsTUFBekIsRUFBaUM7QUFDN0IsTUFBSXFGLEtBQUosRUFBcUMsRUFLcEM7O0FBQ0QsU0FBT0gsSUFBUDtBQUNIOztBQUNELFNBQVN5TSxlQUFULENBQXlCek0sSUFBekIsRUFBK0I7QUFDM0IsUUFBTXFOLFVBQVUsR0FBR3JOLElBQUksQ0FBQ2hFLE9BQUwsQ0FBYSxHQUFiLENBQW5CO0FBQ0EsUUFBTXNSLFNBQVMsR0FBR3ROLElBQUksQ0FBQ2hFLE9BQUwsQ0FBYSxHQUFiLENBQWxCOztBQUNBLE1BQUlxUixVQUFVLEdBQUcsQ0FBQyxDQUFkLElBQW1CQyxTQUFTLEdBQUcsQ0FBQyxDQUFwQyxFQUF1QztBQUNuQ3ROLElBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDeUksU0FBTCxDQUFlLENBQWYsRUFBa0I0RSxVQUFVLEdBQUcsQ0FBQyxDQUFkLEdBQWtCQSxVQUFsQixHQUErQkMsU0FBakQsQ0FBUDtBQUNIOztBQUNELFNBQU90TixJQUFQO0FBQ0g7O0FBQ0QsU0FBU2tMLFdBQVQsQ0FBcUJsTCxJQUFyQixFQUEyQjtBQUN2QkEsRUFBQUEsSUFBSSxHQUFHeU0sZUFBZSxDQUFDek0sSUFBRCxDQUF0QjtBQUNBLFNBQU9BLElBQUksS0FBS21NLFFBQVQsSUFBcUJuTSxJQUFJLENBQUN3TSxVQUFMLENBQWdCTCxRQUFRLEdBQUcsR0FBM0IsQ0FBNUI7QUFDSDs7QUFDRCxTQUFTMU0sV0FBVCxDQUFxQk8sSUFBckIsRUFBMkI7QUFDdkI7QUFDQSxTQUFPc00sYUFBYSxDQUFDdE0sSUFBRCxFQUFPbU0sUUFBUCxDQUFwQjtBQUNIOztBQUNELFNBQVNoQixXQUFULENBQXFCbkwsSUFBckIsRUFBMkI7QUFDdkJBLEVBQUFBLElBQUksR0FBR0EsSUFBSSxDQUFDRSxLQUFMLENBQVdpTSxRQUFRLENBQUNnQixNQUFwQixDQUFQO0FBQ0EsTUFBSSxDQUFDbk4sSUFBSSxDQUFDd00sVUFBTCxDQUFnQixHQUFoQixDQUFMLEVBQTJCeE0sSUFBSSxHQUFJLElBQUdBLElBQUssRUFBaEI7QUFDM0IsU0FBT0EsSUFBUDtBQUNIOztBQUNELFNBQVN0RixVQUFULENBQW9CNlMsR0FBcEIsRUFBeUI7QUFDckI7QUFDQSxNQUFJQSxHQUFHLENBQUNmLFVBQUosQ0FBZSxHQUFmLEtBQXVCZSxHQUFHLENBQUNmLFVBQUosQ0FBZSxHQUFmLENBQXZCLElBQThDZSxHQUFHLENBQUNmLFVBQUosQ0FBZSxHQUFmLENBQWxELEVBQXVFLE9BQU8sSUFBUDs7QUFDdkUsTUFBSTtBQUNBO0FBQ0EsVUFBTWdCLGNBQWMsR0FBRyxDQUFDLEdBQUc5QixNQUFKLEVBQVkrQixpQkFBWixFQUF2QjtBQUNBLFVBQU1DLFFBQVEsR0FBRyxJQUFJQyxHQUFKLENBQVFKLEdBQVIsRUFBYUMsY0FBYixDQUFqQjtBQUNBLFdBQU9FLFFBQVEsQ0FBQ0UsTUFBVCxLQUFvQkosY0FBcEIsSUFBc0N0QyxXQUFXLENBQUN3QyxRQUFRLENBQUNYLFFBQVYsQ0FBeEQ7QUFDSCxHQUxELENBS0UsT0FBT2xRLENBQVAsRUFBVTtBQUNSLFdBQU8sS0FBUDtBQUNIO0FBQ0o7O0FBQ0QsU0FBU3VPLGFBQVQsQ0FBdUJ2RyxLQUF2QixFQUE4QmdKLFVBQTlCLEVBQTBDQyxLQUExQyxFQUFpRDtBQUM3QyxNQUFJQyxpQkFBaUIsR0FBRyxFQUF4QjtBQUNBLFFBQU1DLFlBQVksR0FBRyxDQUFDLEdBQUdoQyxXQUFKLEVBQWlCaUMsYUFBakIsQ0FBK0JwSixLQUEvQixDQUFyQjtBQUNBLFFBQU1xSixhQUFhLEdBQUdGLFlBQVksQ0FBQ0csTUFBbkM7QUFDQSxRQUFNQyxjQUFjLEdBQUc7QUFDdkIsR0FBQ1AsVUFBVSxLQUFLaEosS0FBZixHQUF1QixDQUFDLEdBQUdrSCxhQUFKLEVBQW1Cc0MsZUFBbkIsQ0FBbUNMLFlBQW5DLEVBQWlESCxVQUFqRCxDQUF2QixHQUFzRixFQUF2RixLQUE4RjtBQUM5RjtBQUNBQyxFQUFBQSxLQUhBO0FBSUFDLEVBQUFBLGlCQUFpQixHQUFHbEosS0FBcEI7QUFDQSxRQUFNeUosTUFBTSxHQUFHOVUsTUFBTSxDQUFDbUQsSUFBUCxDQUFZdVIsYUFBWixDQUFmOztBQUNBLE1BQUksQ0FBQ0ksTUFBTSxDQUFDQyxLQUFQLENBQWNDLEtBQUQsSUFBUztBQUN2QixRQUFJelYsS0FBSyxHQUFHcVYsY0FBYyxDQUFDSSxLQUFELENBQWQsSUFBeUIsRUFBckM7QUFDQSxVQUFNO0FBQUVDLE1BQUFBLE1BQUY7QUFBV0MsTUFBQUE7QUFBWCxRQUF5QlIsYUFBYSxDQUFDTSxLQUFELENBQTVDLENBRnVCLENBR3ZCO0FBQ0E7O0FBQ0EsUUFBSUcsUUFBUSxHQUFJLElBQUdGLE1BQU0sR0FBRyxLQUFILEdBQVcsRUFBRyxHQUFFRCxLQUFNLEdBQS9DOztBQUNBLFFBQUlFLFFBQUosRUFBYztBQUNWQyxNQUFBQSxRQUFRLEdBQUksR0FBRSxDQUFDNVYsS0FBRCxHQUFTLEdBQVQsR0FBZSxFQUFHLElBQUc0VixRQUFTLEdBQTVDO0FBQ0g7O0FBQ0QsUUFBSUYsTUFBTSxJQUFJLENBQUN4RixLQUFLLENBQUNDLE9BQU4sQ0FBY25RLEtBQWQsQ0FBZixFQUFxQ0EsS0FBSyxHQUFHLENBQ3pDQSxLQUR5QyxDQUFSO0FBR3JDLFdBQU8sQ0FBQzJWLFFBQVEsSUFBSUYsS0FBSyxJQUFJSixjQUF0QixNQUNOTCxpQkFBaUIsR0FBR0EsaUJBQWlCLENBQUNwUyxPQUFsQixDQUEwQmdULFFBQTFCLEVBQW9DRixNQUFNLEdBQUcxVixLQUFLLENBQUMrSSxHQUFOLEVBQVU7QUFDNUU7QUFDQTtBQUNBO0FBQ0M4TSxJQUFBQSxPQUFELElBQVdDLGtCQUFrQixDQUFDRCxPQUFELENBSnFDLEVBS2hFRSxJQUxnRSxDQUszRCxHQUwyRCxDQUFILEdBS2pERCxrQkFBa0IsQ0FBQzlWLEtBQUQsQ0FMWCxLQUt1QixHQU5yQyxDQUFQO0FBT0gsR0FuQkksQ0FBTCxFQW1CSTtBQUNBZ1YsSUFBQUEsaUJBQWlCLEdBQUcsRUFBcEIsQ0FBdUI7QUFBdkIsS0FEQSxDQUdKO0FBQ0E7QUFDQzs7QUFDRCxTQUFPO0FBQ0hPLElBQUFBLE1BREc7QUFFSFMsSUFBQUEsTUFBTSxFQUFFaEI7QUFGTCxHQUFQO0FBSUg7O0FBQ0QsU0FBU2lCLGtCQUFULENBQTRCbEIsS0FBNUIsRUFBbUNRLE1BQW5DLEVBQTJDO0FBQ3ZDLFFBQU1XLGFBQWEsR0FBRyxFQUF0QjtBQUVBelYsRUFBQUEsTUFBTSxDQUFDbUQsSUFBUCxDQUFZbVIsS0FBWixFQUFtQmxSLE9BQW5CLENBQTRCTixHQUFELElBQU87QUFDOUIsUUFBSSxDQUFDZ1MsTUFBTSxDQUFDWSxRQUFQLENBQWdCNVMsR0FBaEIsQ0FBTCxFQUEyQjtBQUN2QjJTLE1BQUFBLGFBQWEsQ0FBQzNTLEdBQUQsQ0FBYixHQUFxQndSLEtBQUssQ0FBQ3hSLEdBQUQsQ0FBMUI7QUFDSDtBQUNKLEdBSkQ7QUFLQSxTQUFPMlMsYUFBUDtBQUNIOztBQUNELFNBQVNyUixXQUFULENBQXFCdEQsTUFBckIsRUFBNkJDLElBQTdCLEVBQW1DNFUsU0FBbkMsRUFBOEM7QUFDMUM7QUFDQSxNQUFJQyxJQUFKO0FBQ0EsTUFBSUMsV0FBVyxHQUFHLE9BQU85VSxJQUFQLEtBQWdCLFFBQWhCLEdBQTJCQSxJQUEzQixHQUFrQyxDQUFDLEdBQUdtUixNQUFKLEVBQVk0RCxvQkFBWixDQUFpQy9VLElBQWpDLENBQXBELENBSDBDLENBSTFDO0FBQ0E7O0FBQ0EsUUFBTWdWLGFBQWEsR0FBR0YsV0FBVyxDQUFDRyxLQUFaLENBQWtCLG9CQUFsQixDQUF0QjtBQUNBLFFBQU1DLGtCQUFrQixHQUFHRixhQUFhLEdBQUdGLFdBQVcsQ0FBQ2pDLE1BQVosQ0FBbUJtQyxhQUFhLENBQUMsQ0FBRCxDQUFiLENBQWlCcEMsTUFBcEMsQ0FBSCxHQUFpRGtDLFdBQXpGO0FBQ0EsUUFBTUssUUFBUSxHQUFHRCxrQkFBa0IsQ0FBQ0UsS0FBbkIsQ0FBeUIsR0FBekIsQ0FBakI7O0FBQ0EsTUFBSSxDQUFDRCxRQUFRLENBQUMsQ0FBRCxDQUFSLElBQWUsRUFBaEIsRUFBb0JGLEtBQXBCLENBQTBCLFdBQTFCLENBQUosRUFBNEM7QUFDeENuUyxJQUFBQSxPQUFPLENBQUNnSixLQUFSLENBQWUsdUNBQXNDZ0osV0FBWSw2RUFBakU7QUFDQSxVQUFNTyxhQUFhLEdBQUcsQ0FBQyxHQUFHbEUsTUFBSixFQUFZbUUsd0JBQVosQ0FBcUNKLGtCQUFyQyxDQUF0QjtBQUNBSixJQUFBQSxXQUFXLEdBQUcsQ0FBQ0UsYUFBYSxHQUFHQSxhQUFhLENBQUMsQ0FBRCxDQUFoQixHQUFzQixFQUFwQyxJQUEwQ0ssYUFBeEQ7QUFDSCxHQWJ5QyxDQWMxQzs7O0FBQ0EsTUFBSSxDQUFDbFYsVUFBVSxDQUFDMlUsV0FBRCxDQUFmLEVBQThCO0FBQzFCLFdBQU9GLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIOztBQUNELE1BQUk7QUFDQUQsSUFBQUEsSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVEwQixXQUFXLENBQUM3QyxVQUFaLENBQXVCLEdBQXZCLElBQThCbFMsTUFBTSxDQUFDd1YsTUFBckMsR0FBOEN4VixNQUFNLENBQUN5UyxRQUE3RCxFQUF1RSxVQUF2RSxDQUFQO0FBQ0gsR0FGRCxDQUVFLE9BQU9sUSxDQUFQLEVBQVU7QUFDUjtBQUNBdVMsSUFBQUEsSUFBSSxHQUFHLElBQUl6QixHQUFKLENBQVEsR0FBUixFQUFhLFVBQWIsQ0FBUDtBQUNIOztBQUNELE1BQUk7QUFDQSxVQUFNb0MsUUFBUSxHQUFHLElBQUlwQyxHQUFKLENBQVEwQixXQUFSLEVBQXFCRCxJQUFyQixDQUFqQjtBQUNBVyxJQUFBQSxRQUFRLENBQUNoRCxRQUFULEdBQW9CLENBQUMsR0FBRzFCLHVCQUFKLEVBQTZCdEwsMEJBQTdCLENBQXdEZ1EsUUFBUSxDQUFDaEQsUUFBakUsQ0FBcEI7QUFDQSxRQUFJaUQsY0FBYyxHQUFHLEVBQXJCOztBQUNBLFFBQUksQ0FBQyxHQUFHckUsVUFBSixFQUFnQnNFLGNBQWhCLENBQStCRixRQUFRLENBQUNoRCxRQUF4QyxLQUFxRGdELFFBQVEsQ0FBQ0csWUFBOUQsSUFBOEVmLFNBQWxGLEVBQTZGO0FBQ3pGLFlBQU1yQixLQUFLLEdBQUcsQ0FBQyxHQUFHakMsWUFBSixFQUFrQnNFLHNCQUFsQixDQUF5Q0osUUFBUSxDQUFDRyxZQUFsRCxDQUFkO0FBQ0EsWUFBTTtBQUFFbkIsUUFBQUEsTUFBRjtBQUFXVCxRQUFBQTtBQUFYLFVBQXVCbEQsYUFBYSxDQUFDMkUsUUFBUSxDQUFDaEQsUUFBVixFQUFvQmdELFFBQVEsQ0FBQ2hELFFBQTdCLEVBQXVDZSxLQUF2QyxDQUExQzs7QUFDQSxVQUFJaUIsTUFBSixFQUFZO0FBQ1JpQixRQUFBQSxjQUFjLEdBQUcsQ0FBQyxHQUFHdEUsTUFBSixFQUFZNEQsb0JBQVosQ0FBaUM7QUFDOUN2QyxVQUFBQSxRQUFRLEVBQUVnQyxNQURvQztBQUU5Q3FCLFVBQUFBLElBQUksRUFBRUwsUUFBUSxDQUFDSyxJQUYrQjtBQUc5Q3RDLFVBQUFBLEtBQUssRUFBRWtCLGtCQUFrQixDQUFDbEIsS0FBRCxFQUFRUSxNQUFSO0FBSHFCLFNBQWpDLENBQWpCO0FBS0g7QUFDSixLQWRELENBZUE7OztBQUNBLFVBQU01USxZQUFZLEdBQUdxUyxRQUFRLENBQUNuQyxNQUFULEtBQW9Cd0IsSUFBSSxDQUFDeEIsTUFBekIsR0FBa0NtQyxRQUFRLENBQUN4VixJQUFULENBQWMyRixLQUFkLENBQW9CNlAsUUFBUSxDQUFDbkMsTUFBVCxDQUFnQlQsTUFBcEMsQ0FBbEMsR0FBZ0Y0QyxRQUFRLENBQUN4VixJQUE5RztBQUNBLFdBQU80VSxTQUFTLEdBQUcsQ0FDZnpSLFlBRGUsRUFFZnNTLGNBQWMsSUFBSXRTLFlBRkgsQ0FBSCxHQUdaQSxZQUhKO0FBSUgsR0FyQkQsQ0FxQkUsT0FBT2IsQ0FBUCxFQUFVO0FBQ1IsV0FBT3NTLFNBQVMsR0FBRyxDQUNmRSxXQURlLENBQUgsR0FFWkEsV0FGSjtBQUdIO0FBQ0o7O0FBQ0QsU0FBU2dCLFdBQVQsQ0FBcUI5QyxHQUFyQixFQUEwQjtBQUN0QixRQUFNSyxNQUFNLEdBQUcsQ0FBQyxHQUFHbEMsTUFBSixFQUFZK0IsaUJBQVosRUFBZjtBQUNBLFNBQU9GLEdBQUcsQ0FBQ2YsVUFBSixDQUFlb0IsTUFBZixJQUF5QkwsR0FBRyxDQUFDOUUsU0FBSixDQUFjbUYsTUFBTSxDQUFDVCxNQUFyQixDQUF6QixHQUF3REksR0FBL0Q7QUFDSDs7QUFDRCxTQUFTK0MsWUFBVCxDQUFzQmhXLE1BQXRCLEVBQThCaVQsR0FBOUIsRUFBbUMvUyxFQUFuQyxFQUF1QztBQUNuQztBQUNBO0FBQ0EsTUFBSSxDQUFDa0QsWUFBRCxFQUFlQyxVQUFmLElBQTZCQyxXQUFXLENBQUN0RCxNQUFELEVBQVNpVCxHQUFULEVBQWMsSUFBZCxDQUE1QztBQUNBLFFBQU1LLE1BQU0sR0FBRyxDQUFDLEdBQUdsQyxNQUFKLEVBQVkrQixpQkFBWixFQUFmO0FBQ0EsUUFBTThDLGFBQWEsR0FBRzdTLFlBQVksQ0FBQzhPLFVBQWIsQ0FBd0JvQixNQUF4QixDQUF0QjtBQUNBLFFBQU00QyxXQUFXLEdBQUc3UyxVQUFVLElBQUlBLFVBQVUsQ0FBQzZPLFVBQVgsQ0FBc0JvQixNQUF0QixDQUFsQztBQUNBbFEsRUFBQUEsWUFBWSxHQUFHMlMsV0FBVyxDQUFDM1MsWUFBRCxDQUExQjtBQUNBQyxFQUFBQSxVQUFVLEdBQUdBLFVBQVUsR0FBRzBTLFdBQVcsQ0FBQzFTLFVBQUQsQ0FBZCxHQUE2QkEsVUFBcEQ7QUFDQSxRQUFNOFMsV0FBVyxHQUFHRixhQUFhLEdBQUc3UyxZQUFILEdBQWtCK0IsV0FBVyxDQUFDL0IsWUFBRCxDQUE5RDtBQUNBLFFBQU1nVCxVQUFVLEdBQUdsVyxFQUFFLEdBQUc2VixXQUFXLENBQUN6UyxXQUFXLENBQUN0RCxNQUFELEVBQVNFLEVBQVQsQ0FBWixDQUFkLEdBQTBDbUQsVUFBVSxJQUFJRCxZQUE3RTtBQUNBLFNBQU87QUFDSDZQLElBQUFBLEdBQUcsRUFBRWtELFdBREY7QUFFSGpXLElBQUFBLEVBQUUsRUFBRWdXLFdBQVcsR0FBR0UsVUFBSCxHQUFnQmpSLFdBQVcsQ0FBQ2lSLFVBQUQ7QUFGdkMsR0FBUDtBQUlIOztBQUNELFNBQVNDLG1CQUFULENBQTZCNUQsUUFBN0IsRUFBdUM2RCxLQUF2QyxFQUE4QztBQUMxQyxRQUFNQyxhQUFhLEdBQUcsQ0FBQyxHQUFHeEYsdUJBQUosRUFBNkJ2TCx1QkFBN0IsQ0FBcUQsQ0FBQyxHQUFHeUwsb0JBQUosRUFBMEJ1RixtQkFBMUIsQ0FBOEMvRCxRQUE5QyxDQUFyRCxDQUF0Qjs7QUFDQSxNQUFJOEQsYUFBYSxLQUFLLE1BQWxCLElBQTRCQSxhQUFhLEtBQUssU0FBbEQsRUFBNkQ7QUFDekQsV0FBTzlELFFBQVA7QUFDSCxHQUp5QyxDQUsxQzs7O0FBQ0EsTUFBSSxDQUFDNkQsS0FBSyxDQUFDMUIsUUFBTixDQUFlMkIsYUFBZixDQUFMLEVBQW9DO0FBQ2hDO0FBQ0FELElBQUFBLEtBQUssQ0FBQ0csSUFBTixDQUFZQyxJQUFELElBQVE7QUFDZixVQUFJLENBQUMsR0FBR3JGLFVBQUosRUFBZ0JzRSxjQUFoQixDQUErQmUsSUFBL0IsS0FBd0MsQ0FBQyxHQUFHaEYsV0FBSixFQUFpQmlDLGFBQWpCLENBQStCK0MsSUFBL0IsRUFBcUNDLEVBQXJDLENBQXdDM1EsSUFBeEMsQ0FBNkN1USxhQUE3QyxDQUE1QyxFQUF5RztBQUNyRzlELFFBQUFBLFFBQVEsR0FBR2lFLElBQVg7QUFDQSxlQUFPLElBQVA7QUFDSDtBQUNKLEtBTEQ7QUFNSDs7QUFDRCxTQUFPLENBQUMsR0FBRzNGLHVCQUFKLEVBQTZCdkwsdUJBQTdCLENBQXFEaU4sUUFBckQsQ0FBUDtBQUNIOztBQUNELE1BQU1tRSx1QkFBdUIsR0FBRy9RLE1BQUEsSUFBbUgsQ0FBbko7QUFRQSxNQUFNc1Isa0JBQWtCLEdBQUc1TixNQUFNLENBQUMsb0JBQUQsQ0FBakM7O0FBQ0EsU0FBUzZOLFVBQVQsQ0FBb0JuRSxHQUFwQixFQUF5Qm9FLFFBQXpCLEVBQW1DO0FBQy9CLFNBQU8vTCxLQUFLLENBQUMySCxHQUFELEVBQU07QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FxRSxJQUFBQSxXQUFXLEVBQUU7QUFaQyxHQUFOLENBQUwsQ0FhSnBQLElBYkksQ0FhRVUsR0FBRCxJQUFPO0FBQ1gsUUFBSSxDQUFDQSxHQUFHLENBQUMyQyxFQUFULEVBQWE7QUFDVCxVQUFJOEwsUUFBUSxHQUFHLENBQVgsSUFBZ0J6TyxHQUFHLENBQUMyTyxNQUFKLElBQWMsR0FBbEMsRUFBdUM7QUFDbkMsZUFBT0gsVUFBVSxDQUFDbkUsR0FBRCxFQUFNb0UsUUFBUSxHQUFHLENBQWpCLENBQWpCO0FBQ0g7O0FBQ0QsVUFBSXpPLEdBQUcsQ0FBQzJPLE1BQUosS0FBZSxHQUFuQixFQUF3QjtBQUNwQixlQUFPM08sR0FBRyxDQUFDNE8sSUFBSixHQUFXdFAsSUFBWCxDQUFpQnVQLElBQUQsSUFBUTtBQUMzQixjQUFJQSxJQUFJLENBQUNDLFFBQVQsRUFBbUI7QUFDZixtQkFBTztBQUNIQSxjQUFBQSxRQUFRLEVBQUVQO0FBRFAsYUFBUDtBQUdIOztBQUNELGdCQUFNLElBQUlwVixLQUFKLENBQVcsNkJBQVgsQ0FBTjtBQUNILFNBUE0sQ0FBUDtBQVFIOztBQUNELFlBQU0sSUFBSUEsS0FBSixDQUFXLDZCQUFYLENBQU47QUFDSDs7QUFDRCxXQUFPNkcsR0FBRyxDQUFDNE8sSUFBSixFQUFQO0FBQ0gsR0EvQk0sQ0FBUDtBQWdDSDs7QUFDRCxTQUFTRyxhQUFULENBQXVCQyxRQUF2QixFQUFpQ0MsY0FBakMsRUFBaUQ7QUFDN0MsU0FBT1QsVUFBVSxDQUFDUSxRQUFELEVBQVdDLGNBQWMsR0FBRyxDQUFILEdBQU8sQ0FBaEMsQ0FBVixDQUE2Q3hYLEtBQTdDLENBQW9EQyxHQUFELElBQU87QUFDN0Q7QUFDQTtBQUNBO0FBQ0EsUUFBSSxDQUFDdVgsY0FBTCxFQUFxQjtBQUNqQixPQUFDLEdBQUc3RyxZQUFKLEVBQWtCaEssY0FBbEIsQ0FBaUMxRyxHQUFqQztBQUNIOztBQUNELFVBQU1BLEdBQU47QUFDSCxHQVJNLENBQVA7QUFTSDs7QUFDRCxNQUFNd1gsTUFBTixDQUFhO0FBQ1RDLEVBQUFBLFdBQVcsQ0FBQ0MsU0FBRCxFQUFZQyxNQUFaLEVBQW9CQyxHQUFwQixFQUF5QjtBQUFFQyxJQUFBQSxZQUFGO0FBQWlCQyxJQUFBQSxVQUFqQjtBQUE4QkMsSUFBQUEsR0FBOUI7QUFBb0NDLElBQUFBLE9BQXBDO0FBQThDQyxJQUFBQSxTQUFTLEVBQUVDLFVBQXpEO0FBQXNFbFksSUFBQUEsR0FBRyxFQUFFbVksSUFBM0U7QUFBa0ZDLElBQUFBLFlBQWxGO0FBQWlHQyxJQUFBQSxVQUFqRztBQUE4R25ZLElBQUFBLE1BQTlHO0FBQXVIeUUsSUFBQUEsT0FBdkg7QUFBaUlJLElBQUFBLGFBQWpJO0FBQWlKSCxJQUFBQSxhQUFqSjtBQUFpSzBULElBQUFBO0FBQWpLLEdBQXpCLEVBQXVNO0FBQzlNO0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVgsQ0FGOE0sQ0FJOU07O0FBQ0EsU0FBS0MsR0FBTCxHQUFXLEVBQVg7QUFFQSxTQUFLQyxJQUFMLEdBQVksQ0FBWjs7QUFDQSxTQUFLQyxVQUFMLEdBQW1CNVgsQ0FBRCxJQUFLO0FBQ25CLFlBQU02WCxLQUFLLEdBQUc3WCxDQUFDLENBQUM2WCxLQUFoQjs7QUFDQSxVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBRXhHLFVBQUFBLFFBQVEsRUFBRXVGLFNBQVo7QUFBd0J4RSxVQUFBQSxLQUFLLEVBQUV5RTtBQUEvQixZQUEyQyxJQUFqRDtBQUNBLGFBQUtpQixXQUFMLENBQWlCLGNBQWpCLEVBQWlDLENBQUMsR0FBRzlILE1BQUosRUFBWTRELG9CQUFaLENBQWlDO0FBQzlEdkMsVUFBQUEsUUFBUSxFQUFFdE4sV0FBVyxDQUFDNlMsU0FBRCxDQUR5QztBQUU5RHhFLFVBQUFBLEtBQUssRUFBRXlFO0FBRnVELFNBQWpDLENBQWpDLEVBR0ksQ0FBQyxHQUFHN0csTUFBSixFQUFZK0gsTUFBWixFQUhKO0FBSUE7QUFDSDs7QUFDRCxVQUFJLENBQUNGLEtBQUssQ0FBQ0csR0FBWCxFQUFnQjtBQUNaO0FBQ0g7O0FBQ0QsVUFBSUMsWUFBSjtBQUNBLFlBQU07QUFBRXBHLFFBQUFBLEdBQUY7QUFBUS9TLFFBQUFBLEVBQUUsRUFBRWdZLEdBQVo7QUFBa0IvWCxRQUFBQSxPQUFsQjtBQUE0Qm1aLFFBQUFBO0FBQTVCLFVBQXFDTCxLQUEzQzs7QUFDQSxVQUFJcFQsS0FBSixFQUEyQyxFQXVCMUM7O0FBQ0QsV0FBS2tULElBQUwsR0FBWU8sR0FBWjtBQUNBLFlBQU07QUFBRTdHLFFBQUFBLFFBQVEsRUFBRXVGO0FBQVosVUFBMkIsQ0FBQyxHQUFHMUcsaUJBQUosRUFBdUJ5SSxnQkFBdkIsQ0FBd0M5RyxHQUF4QyxDQUFqQyxDQWpEbUIsQ0FrRG5CO0FBQ0E7O0FBQ0EsVUFBSSxLQUFLK0csS0FBTCxJQUFjOUIsR0FBRyxLQUFLLEtBQUsxQyxNQUEzQixJQUFxQ3dDLFNBQVMsS0FBSyxLQUFLdkYsUUFBNUQsRUFBc0U7QUFDbEU7QUFDSCxPQXREa0IsQ0F1RG5CO0FBQ0E7OztBQUNBLFVBQUksS0FBS3dILElBQUwsSUFBYSxDQUFDLEtBQUtBLElBQUwsQ0FBVWhCLEtBQVYsQ0FBbEIsRUFBb0M7QUFDaEM7QUFDSDs7QUFDRCxXQUFLaUIsTUFBTCxDQUFZLGNBQVosRUFBNEJqSCxHQUE1QixFQUFpQ2lGLEdBQWpDLEVBQXNDaFosTUFBTSxDQUFDdU4sTUFBUCxDQUFjLEVBQWQsRUFDbkN0TSxPQURtQyxFQUMxQjtBQUNSbUIsUUFBQUEsT0FBTyxFQUFFbkIsT0FBTyxDQUFDbUIsT0FBUixJQUFtQixLQUFLNlksUUFEekI7QUFFUjNaLFFBQUFBLE1BQU0sRUFBRUwsT0FBTyxDQUFDSyxNQUFSLElBQWtCLEtBQUs2RTtBQUZ2QixPQUQwQixDQUF0QyxFQUlJZ1UsWUFKSjtBQUtILEtBakVELENBUjhNLENBMEU5TTs7O0FBQ0EsU0FBSzlPLEtBQUwsR0FBYSxDQUFDLEdBQUd3Ryx1QkFBSixFQUE2QnZMLHVCQUE3QixDQUFxRHdTLFNBQXJELENBQWIsQ0EzRThNLENBNEU5TTs7QUFDQSxTQUFLb0MsVUFBTCxHQUFrQixFQUFsQixDQTdFOE0sQ0ErRTlNO0FBQ0E7QUFDQTs7QUFDQSxRQUFJcEMsU0FBUyxLQUFLLFNBQWxCLEVBQTZCO0FBQ3pCLFdBQUtvQyxVQUFMLENBQWdCLEtBQUs3UCxLQUFyQixJQUE4QjtBQUMxQmdPLFFBQUFBLFNBQVMsRUFBRUMsVUFEZTtBQUUxQjZCLFFBQUFBLE9BQU8sRUFBRSxJQUZpQjtBQUcxQnpZLFFBQUFBLEtBQUssRUFBRXVXLFlBSG1CO0FBSTFCN1gsUUFBQUEsR0FBRyxFQUFFbVksSUFKcUI7QUFLMUI2QixRQUFBQSxPQUFPLEVBQUVuQyxZQUFZLElBQUlBLFlBQVksQ0FBQ21DLE9BTFo7QUFNMUJDLFFBQUFBLE9BQU8sRUFBRXBDLFlBQVksSUFBSUEsWUFBWSxDQUFDb0M7QUFOWixPQUE5QjtBQVFIOztBQUNELFNBQUtILFVBQUwsQ0FBZ0IsT0FBaEIsSUFBMkI7QUFDdkI3QixNQUFBQSxTQUFTLEVBQUVGLEdBRFk7QUFFdkJuTixNQUFBQSxXQUFXLEVBQUU7QUFGVSxLQUEzQixDQTVGOE0sQ0FnRzlNO0FBQ0E7O0FBQ0EsU0FBSzBDLE1BQUwsR0FBY2tLLE1BQU0sQ0FBQ2xLLE1BQXJCO0FBQ0EsU0FBS3dLLFVBQUwsR0FBa0JBLFVBQWxCO0FBQ0EsU0FBSzNGLFFBQUwsR0FBZ0J1RixTQUFoQjtBQUNBLFNBQUt4RSxLQUFMLEdBQWF5RSxNQUFiLENBckc4TSxDQXNHOU07QUFDQTs7QUFDQSxVQUFNdUMsaUJBQWlCLEdBQUcsQ0FBQyxHQUFHbkosVUFBSixFQUFnQnNFLGNBQWhCLENBQStCcUMsU0FBL0IsS0FBNkM3UixJQUFJLENBQUNzVSxhQUFMLENBQW1CQyxVQUExRjs7QUFDQSxTQUFLbEYsTUFBTCxHQUFjZ0YsaUJBQWlCLEdBQUd4QyxTQUFILEdBQWVFLEdBQTlDO0FBQ0EsU0FBS3JHLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBSzhJLEdBQUwsR0FBV2pDLFlBQVg7QUFDQSxTQUFLa0MsR0FBTCxHQUFXLElBQVg7QUFDQSxTQUFLQyxRQUFMLEdBQWdCdkMsT0FBaEIsQ0E3RzhNLENBOEc5TTtBQUNBOztBQUNBLFNBQUswQixLQUFMLEdBQWEsSUFBYjtBQUNBLFNBQUtyQixVQUFMLEdBQWtCQSxVQUFsQjtBQUNBLFNBQUttQyxPQUFMLEdBQWUsQ0FBQyxFQUFFM1UsSUFBSSxDQUFDc1UsYUFBTCxDQUFtQk0sSUFBbkIsSUFBMkI1VSxJQUFJLENBQUNzVSxhQUFMLENBQW1CTyxHQUE5QyxJQUFxRDdVLElBQUksQ0FBQ3NVLGFBQUwsQ0FBbUJRLE1BQW5CLElBQTZCLENBQUM5VSxJQUFJLENBQUNzVSxhQUFMLENBQW1CUyxHQUF0RyxJQUE2RyxDQUFDVixpQkFBRCxJQUFzQixDQUFDclUsSUFBSSxDQUFDZ1YsUUFBTCxDQUFjQyxNQUFyQyxJQUErQyxDQUFDdlYsS0FBL0osQ0FBaEI7QUFDQSxTQUFLK1MsU0FBTCxHQUFpQixDQUFDLENBQUNBLFNBQW5CO0FBQ0EsU0FBSzdULGNBQUwsR0FBc0IsS0FBdEI7O0FBQ0EsUUFBSWMsS0FBSixFQUFxQyxFQU1wQzs7QUFDRCxlQUFtQyxFQXVCbEM7QUFDSjs7QUFDRDZWLEVBQUFBLE1BQU0sR0FBRztBQUNMclYsSUFBQUEsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQk8sTUFBaEI7QUFDSDtBQUNEO0FBQ0o7QUFDQTs7O0FBQU1DLEVBQUFBLElBQUksR0FBRztBQUNMdFYsSUFBQUEsTUFBTSxDQUFDeVEsT0FBUCxDQUFlNkUsSUFBZjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBTW5PLEVBQUFBLElBQUksQ0FBQ3lGLEdBQUQsRUFBTS9TLEVBQU4sRUFBVUMsT0FBTyxHQUFHLEVBQXBCLEVBQ0g7QUFDQyxRQUFJMEYsS0FBSixFQUEyQyxFQWExQzs7QUFDRCxLQUFDO0FBQUVvTixNQUFBQSxHQUFGO0FBQVEvUyxNQUFBQTtBQUFSLFFBQWdCOFYsWUFBWSxDQUFDLElBQUQsRUFBTy9DLEdBQVAsRUFBWS9TLEVBQVosQ0FBN0I7QUFDQSxXQUFPLEtBQUtnYSxNQUFMLENBQVksV0FBWixFQUF5QmpILEdBQXpCLEVBQThCL1MsRUFBOUIsRUFBa0NDLE9BQWxDLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQU1rQixFQUFBQSxPQUFPLENBQUM0UixHQUFELEVBQU0vUyxFQUFOLEVBQVVDLE9BQU8sR0FBRyxFQUFwQixFQUNOO0FBQ0MsS0FBQztBQUFFOFMsTUFBQUEsR0FBRjtBQUFRL1MsTUFBQUE7QUFBUixRQUFnQjhWLFlBQVksQ0FBQyxJQUFELEVBQU8vQyxHQUFQLEVBQVkvUyxFQUFaLENBQTdCO0FBQ0EsV0FBTyxLQUFLZ2EsTUFBTCxDQUFZLGNBQVosRUFBNEJqSCxHQUE1QixFQUFpQy9TLEVBQWpDLEVBQXFDQyxPQUFyQyxDQUFQO0FBQ0g7O0FBQ1csUUFBTitaLE1BQU0sQ0FBQzBCLE1BQUQsRUFBUzNJLEdBQVQsRUFBYy9TLEVBQWQsRUFBa0JDLE9BQWxCLEVBQTJCa1osWUFBM0IsRUFBeUM7QUFDakQsUUFBSSxDQUFDalosVUFBVSxDQUFDNlMsR0FBRCxDQUFmLEVBQXNCO0FBQ2xCNU0sTUFBQUEsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQmxiLElBQWhCLEdBQXVCZ1QsR0FBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxVQUFNNEksaUJBQWlCLEdBQUc1SSxHQUFHLEtBQUsvUyxFQUFSLElBQWNDLE9BQU8sQ0FBQzJiLEVBQXRCLElBQTRCM2IsT0FBTyxDQUFDb2Isa0JBQTlELENBTGlELENBTWpEO0FBQ0E7O0FBQ0EsUUFBSXBiLE9BQU8sQ0FBQzJiLEVBQVosRUFBZ0I7QUFDWixXQUFLaEIsT0FBTCxHQUFlLElBQWY7QUFDSDs7QUFDRCxVQUFNaUIsVUFBVSxHQUFHLEtBQUt2YixNQUF4Qjs7QUFDQSxRQUFJcUYsS0FBSixFQUFxQyxZQTZDcEM7O0FBQ0QsUUFBSSxDQUFDMUYsT0FBTyxDQUFDMmIsRUFBYixFQUFpQjtBQUNiLFdBQUs5QixLQUFMLEdBQWEsS0FBYjtBQUNILEtBNURnRCxDQTZEakQ7OztBQUNBLFFBQUk1SSxNQUFNLENBQUNnTCxFQUFYLEVBQWU7QUFDWEMsTUFBQUEsV0FBVyxDQUFDQyxJQUFaLENBQWlCLGFBQWpCO0FBQ0g7O0FBQ0QsVUFBTTtBQUFFaGIsTUFBQUEsT0FBTyxHQUFFO0FBQVgsUUFBc0JuQixPQUE1QjtBQUNBLFVBQU1vYyxVQUFVLEdBQUc7QUFDZmpiLE1BQUFBO0FBRGUsS0FBbkI7O0FBR0EsUUFBSSxLQUFLa2IsY0FBVCxFQUF5QjtBQUNyQixXQUFLQyxrQkFBTCxDQUF3QixLQUFLRCxjQUE3QixFQUE2Q0QsVUFBN0M7QUFDSDs7QUFDRHJjLElBQUFBLEVBQUUsR0FBR2lGLFdBQVcsQ0FBQ0MsU0FBUyxDQUFDd0wsV0FBVyxDQUFDMVEsRUFBRCxDQUFYLEdBQWtCMlEsV0FBVyxDQUFDM1EsRUFBRCxDQUE3QixHQUFvQ0EsRUFBckMsRUFBeUNDLE9BQU8sQ0FBQ0ssTUFBakQsRUFBeUQsS0FBSzZFLGFBQTlELENBQVYsQ0FBaEI7QUFDQSxVQUFNcVgsU0FBUyxHQUFHL0wsU0FBUyxDQUFDQyxXQUFXLENBQUMxUSxFQUFELENBQVgsR0FBa0IyUSxXQUFXLENBQUMzUSxFQUFELENBQTdCLEdBQW9DQSxFQUFyQyxFQUF5QyxLQUFLTSxNQUE5QyxDQUEzQjtBQUNBLFNBQUtnYyxjQUFMLEdBQXNCdGMsRUFBdEI7QUFDQSxRQUFJeWMsWUFBWSxHQUFHWixVQUFVLEtBQUssS0FBS3ZiLE1BQXZDLENBM0VpRCxDQTRFakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxRQUFJLENBQUNMLE9BQU8sQ0FBQzJiLEVBQVQsSUFBZSxLQUFLYyxlQUFMLENBQXFCRixTQUFyQixDQUFmLElBQWtELENBQUNDLFlBQXZELEVBQXFFO0FBQ2pFLFdBQUtuSCxNQUFMLEdBQWNrSCxTQUFkO0FBQ0E1RSxNQUFBQSxNQUFNLENBQUNsSyxNQUFQLENBQWNpUCxJQUFkLENBQW1CLGlCQUFuQixFQUFzQzNjLEVBQXRDLEVBQTBDcWMsVUFBMUMsRUFGaUUsQ0FHakU7O0FBQ0EsV0FBS3JELFdBQUwsQ0FBaUIwQyxNQUFqQixFQUF5QjNJLEdBQXpCLEVBQThCL1MsRUFBOUIsRUFBa0NDLE9BQWxDO0FBQ0EsV0FBSzJjLFlBQUwsQ0FBa0JKLFNBQWxCO0FBQ0EsV0FBS0ssTUFBTCxDQUFZLEtBQUszQyxVQUFMLENBQWdCLEtBQUs3UCxLQUFyQixDQUFaLEVBQXlDLElBQXpDO0FBQ0F1TixNQUFBQSxNQUFNLENBQUNsSyxNQUFQLENBQWNpUCxJQUFkLENBQW1CLG9CQUFuQixFQUF5QzNjLEVBQXpDLEVBQTZDcWMsVUFBN0M7QUFDQSxhQUFPLElBQVA7QUFDSDs7QUFDRCxRQUFJUyxNQUFNLEdBQUcsQ0FBQyxHQUFHMUwsaUJBQUosRUFBdUJ5SSxnQkFBdkIsQ0FBd0M5RyxHQUF4QyxDQUFiO0FBQ0EsUUFBSTtBQUFFUixNQUFBQSxRQUFRLEVBQUV1RixTQUFaO0FBQXdCeEUsTUFBQUEsS0FBSyxFQUFFeUU7QUFBL0IsUUFBMkMrRSxNQUEvQyxDQTVGaUQsQ0E2RmpEO0FBQ0E7QUFDQTs7QUFDQSxRQUFJMUcsS0FBSixFQUFXMkcsUUFBWDs7QUFDQSxRQUFJO0FBQ0EzRyxNQUFBQSxLQUFLLEdBQUcsTUFBTSxLQUFLOEIsVUFBTCxDQUFnQjhFLFdBQWhCLEVBQWQ7QUFDQSxPQUFDO0FBQUVDLFFBQUFBLFVBQVUsRUFBRUY7QUFBZCxVQUE0QixNQUFNLENBQUMsR0FBR2pNLFlBQUosRUFBa0I5SixzQkFBbEIsRUFBbkM7QUFDSCxLQUhELENBR0UsT0FBT3VSLElBQVAsRUFBYTtBQUNYO0FBQ0E7QUFDQXBTLE1BQUFBLE1BQU0sQ0FBQzhVLFFBQVAsQ0FBZ0JsYixJQUFoQixHQUF1QkMsRUFBdkI7QUFDQSxhQUFPLEtBQVA7QUFDSCxLQXpHZ0QsQ0EwR2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFFBQUksQ0FBQyxLQUFLa2QsUUFBTCxDQUFjVixTQUFkLENBQUQsSUFBNkIsQ0FBQ0MsWUFBbEMsRUFBZ0Q7QUFDNUNmLE1BQUFBLE1BQU0sR0FBRyxjQUFUO0FBQ0gsS0FqSGdELENBa0hqRDtBQUNBOzs7QUFDQSxRQUFJdlksVUFBVSxHQUFHbkQsRUFBakIsQ0FwSGlELENBcUhqRDtBQUNBO0FBQ0E7O0FBQ0E4WCxJQUFBQSxTQUFTLEdBQUdBLFNBQVMsR0FBRyxDQUFDLEdBQUdqSCx1QkFBSixFQUE2QnZMLHVCQUE3QixDQUFxRHFMLFdBQVcsQ0FBQ21ILFNBQUQsQ0FBaEUsQ0FBSCxHQUFrRkEsU0FBdkc7O0FBQ0EsUUFBSTZELGlCQUFpQixJQUFJN0QsU0FBUyxLQUFLLFNBQXZDLEVBQWtEO0FBQzlDN1gsTUFBQUEsT0FBTyxDQUFDb2Isa0JBQVIsR0FBNkIsSUFBN0I7O0FBQ0EsVUFBSTFWLEtBQUosRUFBMkQsRUFBM0QsTUFXTztBQUNIbVgsUUFBQUEsTUFBTSxDQUFDdkssUUFBUCxHQUFrQjRELG1CQUFtQixDQUFDMkIsU0FBRCxFQUFZMUIsS0FBWixDQUFyQzs7QUFDQSxZQUFJMEcsTUFBTSxDQUFDdkssUUFBUCxLQUFvQnVGLFNBQXhCLEVBQW1DO0FBQy9CQSxVQUFBQSxTQUFTLEdBQUdnRixNQUFNLENBQUN2SyxRQUFuQjtBQUNBdUssVUFBQUEsTUFBTSxDQUFDdkssUUFBUCxHQUFrQnROLFdBQVcsQ0FBQzZTLFNBQUQsQ0FBN0I7QUFDQS9FLFVBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUc3QixNQUFKLEVBQVk0RCxvQkFBWixDQUFpQ2dJLE1BQWpDLENBQU47QUFDSDtBQUNKO0FBQ0o7O0FBQ0QsVUFBTXpTLEtBQUssR0FBRyxDQUFDLEdBQUd3Ryx1QkFBSixFQUE2QnZMLHVCQUE3QixDQUFxRHdTLFNBQXJELENBQWQ7O0FBQ0EsUUFBSSxDQUFDNVgsVUFBVSxDQUFDRixFQUFELENBQWYsRUFBcUI7QUFDakIsZ0JBQTJDO0FBQ3ZDLGNBQU0sSUFBSTZCLEtBQUosQ0FBVyxrQkFBaUJrUixHQUFJLGNBQWEvUyxFQUFHLDJDQUF0QyxHQUFvRixvRkFBOUYsQ0FBTjtBQUNIOztBQUNEbUcsTUFBQUEsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQmxiLElBQWhCLEdBQXVCQyxFQUF2QjtBQUNBLGFBQU8sS0FBUDtBQUNIOztBQUNEbUQsSUFBQUEsVUFBVSxHQUFHc04sU0FBUyxDQUFDRSxXQUFXLENBQUN4TixVQUFELENBQVosRUFBMEIsS0FBSzdDLE1BQS9CLENBQXRCOztBQUNBLFFBQUksQ0FBQyxHQUFHNlEsVUFBSixFQUFnQnNFLGNBQWhCLENBQStCcEwsS0FBL0IsQ0FBSixFQUEyQztBQUN2QyxZQUFNeVIsUUFBUSxHQUFHLENBQUMsR0FBRzFLLGlCQUFKLEVBQXVCeUksZ0JBQXZCLENBQXdDMVcsVUFBeEMsQ0FBakI7QUFDQSxZQUFNa1EsVUFBVSxHQUFHeUksUUFBUSxDQUFDdkosUUFBNUI7QUFDQSxZQUFNOEssVUFBVSxHQUFHLENBQUMsR0FBRzdMLFdBQUosRUFBaUJpQyxhQUFqQixDQUErQnBKLEtBQS9CLENBQW5CO0FBQ0EsWUFBTWlULFVBQVUsR0FBRyxDQUFDLEdBQUcvTCxhQUFKLEVBQW1Cc0MsZUFBbkIsQ0FBbUN3SixVQUFuQyxFQUErQ2hLLFVBQS9DLENBQW5CO0FBQ0EsWUFBTWtLLGlCQUFpQixHQUFHbFQsS0FBSyxLQUFLZ0osVUFBcEM7QUFDQSxZQUFNbUMsY0FBYyxHQUFHK0gsaUJBQWlCLEdBQUczTSxhQUFhLENBQUN2RyxLQUFELEVBQVFnSixVQUFSLEVBQW9CMEUsTUFBcEIsQ0FBaEIsR0FBOEMsRUFBdEY7O0FBRUEsVUFBSSxDQUFDdUYsVUFBRCxJQUFlQyxpQkFBaUIsSUFBSSxDQUFDL0gsY0FBYyxDQUFDakIsTUFBeEQsRUFBZ0U7QUFDNUQsY0FBTWlKLGFBQWEsR0FBR3hlLE1BQU0sQ0FBQ21ELElBQVAsQ0FBWWtiLFVBQVUsQ0FBQzFKLE1BQXZCLEVBQStCaEosTUFBL0IsQ0FBdUNxSixLQUFELElBQVMsQ0FBQytELE1BQU0sQ0FBQy9ELEtBQUQsQ0FBdEQsQ0FBdEI7O0FBRUEsWUFBSXdKLGFBQWEsQ0FBQzdLLE1BQWQsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUIsb0JBQTJDO0FBQ3ZDOVAsWUFBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWMsR0FBRXlhLGlCQUFpQixHQUFJLG9CQUFKLEdBQTJCLGlDQUFpQyw4QkFBaEYsR0FBaUgsZUFBY0MsYUFBYSxDQUFDbEosSUFBZCxDQUFtQixJQUFuQixDQUF5Qiw4QkFBcks7QUFDSDs7QUFDRCxnQkFBTSxJQUFJelMsS0FBSixDQUFVLENBQUMwYixpQkFBaUIsR0FBSSwwQkFBeUJ4SyxHQUFJLG9DQUFtQ3lLLGFBQWEsQ0FBQ2xKLElBQWQsQ0FBbUIsSUFBbkIsQ0FBeUIsaUNBQTdGLEdBQWlJLDhCQUE2QmpCLFVBQVcsOENBQTZDaEosS0FBTSxLQUE5TyxJQUF1UCwrQ0FBOENrVCxpQkFBaUIsR0FBRywyQkFBSCxHQUFpQyxzQkFBdUIsRUFBeFgsQ0FBTjtBQUNIO0FBQ0osT0FURCxNQVNPLElBQUlBLGlCQUFKLEVBQXVCO0FBQzFCdmQsUUFBQUEsRUFBRSxHQUFHLENBQUMsR0FBR2tSLE1BQUosRUFBWTRELG9CQUFaLENBQWlDOVYsTUFBTSxDQUFDdU4sTUFBUCxDQUFjLEVBQWQsRUFDbkN1UCxRQURtQyxFQUN6QjtBQUNUdkosVUFBQUEsUUFBUSxFQUFFaUQsY0FBYyxDQUFDakIsTUFEaEI7QUFFVGpCLFVBQUFBLEtBQUssRUFBRWtCLGtCQUFrQixDQUFDdUQsTUFBRCxFQUFTdkMsY0FBYyxDQUFDMUIsTUFBeEI7QUFGaEIsU0FEeUIsQ0FBakMsQ0FBTDtBQUtILE9BTk0sTUFNQTtBQUNIO0FBQ0E5VSxRQUFBQSxNQUFNLENBQUN1TixNQUFQLENBQWN3TCxNQUFkLEVBQXNCdUYsVUFBdEI7QUFDSDtBQUNKOztBQUNEMUYsSUFBQUEsTUFBTSxDQUFDbEssTUFBUCxDQUFjaVAsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUMzYyxFQUF2QyxFQUEyQ3FjLFVBQTNDOztBQUNBLFFBQUk7QUFDQSxVQUFJMVksR0FBSixFQUFTOFosSUFBVDtBQUNBLFVBQUlDLFNBQVMsR0FBRyxNQUFNLEtBQUtDLFlBQUwsQ0FBa0J0VCxLQUFsQixFQUF5QnlOLFNBQXpCLEVBQW9DQyxNQUFwQyxFQUE0Qy9YLEVBQTVDLEVBQWdEbUQsVUFBaEQsRUFBNERrWixVQUE1RCxDQUF0QjtBQUNBLFVBQUk7QUFBRXhRLFFBQUFBLEtBQUY7QUFBVW5LLFFBQUFBLEtBQVY7QUFBa0IwWSxRQUFBQSxPQUFsQjtBQUE0QkMsUUFBQUE7QUFBNUIsVUFBeUNxRCxTQUE3QyxDQUhBLENBSUE7O0FBQ0EsVUFBSSxDQUFDdEQsT0FBTyxJQUFJQyxPQUFaLEtBQXdCM1ksS0FBNUIsRUFBbUM7QUFDL0IsWUFBSUEsS0FBSyxDQUFDa2MsU0FBTixJQUFtQmxjLEtBQUssQ0FBQ2tjLFNBQU4sQ0FBZ0JDLFlBQXZDLEVBQXFEO0FBQ2pELGdCQUFNQyxXQUFXLEdBQUdwYyxLQUFLLENBQUNrYyxTQUFOLENBQWdCQyxZQUFwQyxDQURpRCxDQUVqRDtBQUNBO0FBQ0E7O0FBQ0EsY0FBSUMsV0FBVyxDQUFDOUwsVUFBWixDQUF1QixHQUF2QixDQUFKLEVBQWlDO0FBQzdCLGtCQUFNK0wsVUFBVSxHQUFHLENBQUMsR0FBRzNNLGlCQUFKLEVBQXVCeUksZ0JBQXZCLENBQXdDaUUsV0FBeEMsQ0FBbkI7QUFDQUMsWUFBQUEsVUFBVSxDQUFDeEwsUUFBWCxHQUFzQjRELG1CQUFtQixDQUFDNEgsVUFBVSxDQUFDeEwsUUFBWixFQUFzQjZELEtBQXRCLENBQXpDO0FBQ0Esa0JBQU07QUFBRXJELGNBQUFBLEdBQUcsRUFBRWlMLE1BQVA7QUFBZ0JoZSxjQUFBQSxFQUFFLEVBQUVpZTtBQUFwQixnQkFBK0JuSSxZQUFZLENBQUMsSUFBRCxFQUFPZ0ksV0FBUCxFQUFvQkEsV0FBcEIsQ0FBakQ7QUFDQSxtQkFBTyxLQUFLOUQsTUFBTCxDQUFZMEIsTUFBWixFQUFvQnNDLE1BQXBCLEVBQTRCQyxLQUE1QixFQUFtQ2hlLE9BQW5DLENBQVA7QUFDSDs7QUFDRGtHLFVBQUFBLE1BQU0sQ0FBQzhVLFFBQVAsQ0FBZ0JsYixJQUFoQixHQUF1QitkLFdBQXZCO0FBQ0EsaUJBQU8sSUFBSW5XLE9BQUosQ0FBWSxNQUFJLENBQ3RCLENBRE0sQ0FBUDtBQUVIOztBQUNELGFBQUsrUSxTQUFMLEdBQWlCLENBQUMsQ0FBQ2hYLEtBQUssQ0FBQ3djLFdBQXpCLENBaEIrQixDQWlCL0I7O0FBQ0EsWUFBSXhjLEtBQUssQ0FBQzhWLFFBQU4sS0FBbUJQLGtCQUF2QixFQUEyQztBQUN2QyxjQUFJa0gsYUFBSjs7QUFDQSxjQUFJO0FBQ0Esa0JBQU0sS0FBS0MsY0FBTCxDQUFvQixNQUFwQixDQUFOO0FBQ0FELFlBQUFBLGFBQWEsR0FBRyxNQUFoQjtBQUNILFdBSEQsQ0FHRSxPQUFPOWIsQ0FBUCxFQUFVO0FBQ1I4YixZQUFBQSxhQUFhLEdBQUcsU0FBaEI7QUFDSDs7QUFDRFQsVUFBQUEsU0FBUyxHQUFHLE1BQU0sS0FBS0MsWUFBTCxDQUFrQlEsYUFBbEIsRUFBaUNBLGFBQWpDLEVBQWdEcEcsTUFBaEQsRUFBd0QvWCxFQUF4RCxFQUE0RG1ELFVBQTVELEVBQXdFO0FBQ3RGL0IsWUFBQUEsT0FBTyxFQUFFO0FBRDZFLFdBQXhFLENBQWxCO0FBR0g7QUFDSjs7QUFDRHdXLE1BQUFBLE1BQU0sQ0FBQ2xLLE1BQVAsQ0FBY2lQLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDM2MsRUFBMUMsRUFBOENxYyxVQUE5QztBQUNBLFdBQUtyRCxXQUFMLENBQWlCMEMsTUFBakIsRUFBeUIzSSxHQUF6QixFQUE4Qi9TLEVBQTlCLEVBQWtDQyxPQUFsQzs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTW9lLE9BQU8sR0FBRyxLQUFLbkUsVUFBTCxDQUFnQixPQUFoQixFQUF5QjdCLFNBQXpDO0FBQ0FsUyxRQUFBQSxNQUFNLENBQUNtWSxJQUFQLENBQVlDLGFBQVosR0FBNEJGLE9BQU8sQ0FBQy9OLGVBQVIsS0FBNEIrTixPQUFPLENBQUM5TixtQkFBcEMsSUFBMkQsQ0FBQ21OLFNBQVMsQ0FBQ3JGLFNBQVYsQ0FBb0IvSCxlQUE1RztBQUNIOztBQUNELFVBQUlyUSxPQUFPLENBQUMyYixFQUFSLElBQWM5RCxTQUFTLEtBQUssU0FBNUIsSUFBeUMsQ0FBQyxDQUFDblUsR0FBRyxHQUFHc0MsSUFBSSxDQUFDc1UsYUFBTCxDQUFtQjdZLEtBQTFCLE1BQXFDLElBQXJDLElBQTZDaUMsR0FBRyxLQUFLLEtBQUssQ0FBMUQsR0FBOEQsS0FBSyxDQUFuRSxHQUF1RSxDQUFDOFosSUFBSSxHQUFHOVosR0FBRyxDQUFDaWEsU0FBWixNQUEyQixJQUEzQixJQUFtQ0gsSUFBSSxLQUFLLEtBQUssQ0FBakQsR0FBcUQsS0FBSyxDQUExRCxHQUE4REEsSUFBSSxDQUFDZSxVQUEzSSxNQUEySixHQUFwTSxLQUE0TTljLEtBQUssS0FBSyxJQUFWLElBQWtCQSxLQUFLLEtBQUssS0FBSyxDQUFqQyxHQUFxQyxLQUFLLENBQTFDLEdBQThDQSxLQUFLLENBQUNrYyxTQUFoUSxDQUFKLEVBQWdSO0FBQzVRO0FBQ0E7QUFDQWxjLFFBQUFBLEtBQUssQ0FBQ2tjLFNBQU4sQ0FBZ0JZLFVBQWhCLEdBQTZCLEdBQTdCO0FBQ0gsT0E5Q0QsQ0ErQ0E7OztBQUNBLFlBQU1DLG1CQUFtQixHQUFHeGUsT0FBTyxDQUFDbUIsT0FBUixJQUFtQixLQUFLaUosS0FBTCxLQUFlQSxLQUE5RDs7QUFDQSxVQUFJcVUsT0FBSjs7QUFDQSxZQUFNQyxZQUFZLEdBQUcsQ0FBQ0QsT0FBTyxHQUFHemUsT0FBTyxDQUFDb0IsTUFBbkIsTUFBK0IsSUFBL0IsSUFBdUNxZCxPQUFPLEtBQUssS0FBSyxDQUF4RCxHQUE0REEsT0FBNUQsR0FBc0UsQ0FBQ0QsbUJBQTVGO0FBQ0EsWUFBTUcsV0FBVyxHQUFHRCxZQUFZLEdBQUc7QUFDL0JwRixRQUFBQSxDQUFDLEVBQUUsQ0FENEI7QUFFL0JFLFFBQUFBLENBQUMsRUFBRTtBQUY0QixPQUFILEdBRzVCLElBSEo7QUFJQSxZQUFNLEtBQUsxUixHQUFMLENBQVNzQyxLQUFULEVBQWdCeU4sU0FBaEIsRUFBMkJDLE1BQTNCLEVBQW1DeUUsU0FBbkMsRUFBOENrQixTQUE5QyxFQUF5RHZFLFlBQVksS0FBSyxJQUFqQixJQUF5QkEsWUFBWSxLQUFLLEtBQUssQ0FBL0MsR0FBbURBLFlBQW5ELEdBQWtFeUYsV0FBM0gsRUFBd0l6ZSxLQUF4SSxDQUErSWUsQ0FBRCxJQUFLO0FBQ3JKLFlBQUlBLENBQUMsQ0FBQzRJLFNBQU4sRUFBaUIrQixLQUFLLEdBQUdBLEtBQUssSUFBSTNLLENBQWpCLENBQWpCLEtBQ0ssTUFBTUEsQ0FBTjtBQUNSLE9BSEssQ0FBTjs7QUFJQSxVQUFJMkssS0FBSixFQUFXO0FBQ1ArTCxRQUFBQSxNQUFNLENBQUNsSyxNQUFQLENBQWNpUCxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzlRLEtBQXZDLEVBQThDMlEsU0FBOUMsRUFBeURILFVBQXpEO0FBQ0EsY0FBTXhRLEtBQU47QUFDSDs7QUFDRCxVQUFJbEcsS0FBSixFQUFxQyxFQUlwQzs7QUFDRGlTLE1BQUFBLE1BQU0sQ0FBQ2xLLE1BQVAsQ0FBY2lQLElBQWQsQ0FBbUIscUJBQW5CLEVBQTBDM2MsRUFBMUMsRUFBOENxYyxVQUE5QztBQUNBLGFBQU8sSUFBUDtBQUNILEtBdEVELENBc0VFLE9BQU85RCxJQUFQLEVBQWE7QUFDWCxVQUFJQSxJQUFJLENBQUN6TyxTQUFULEVBQW9CO0FBQ2hCLGVBQU8sS0FBUDtBQUNIOztBQUNELFlBQU15TyxJQUFOO0FBQ0g7QUFDSjs7QUFDRFMsRUFBQUEsV0FBVyxDQUFDMEMsTUFBRCxFQUFTM0ksR0FBVCxFQUFjL1MsRUFBZCxFQUFrQkMsT0FBTyxHQUFHLEVBQTVCLEVBQ1I7QUFDQyxjQUEyQztBQUN2QyxVQUFJLE9BQU9rRyxNQUFNLENBQUN5USxPQUFkLEtBQTBCLFdBQTlCLEVBQTJDO0FBQ3ZDL1QsUUFBQUEsT0FBTyxDQUFDZ0osS0FBUixDQUFlLDJDQUFmO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLE9BQU8xRixNQUFNLENBQUN5USxPQUFQLENBQWU4RSxNQUFmLENBQVAsS0FBa0MsV0FBdEMsRUFBbUQ7QUFDL0M3WSxRQUFBQSxPQUFPLENBQUNnSixLQUFSLENBQWUsMkJBQTBCNlAsTUFBTyxtQkFBaEQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsUUFBSUEsTUFBTSxLQUFLLFdBQVgsSUFBMEIsQ0FBQyxHQUFHeEssTUFBSixFQUFZK0gsTUFBWixPQUF5QmpaLEVBQXZELEVBQTJEO0FBQ3ZELFdBQUtpYSxRQUFMLEdBQWdCaGEsT0FBTyxDQUFDbUIsT0FBeEI7QUFDQStFLE1BQUFBLE1BQU0sQ0FBQ3lRLE9BQVAsQ0FBZThFLE1BQWYsRUFBdUI7QUFDbkIzSSxRQUFBQSxHQURtQjtBQUVuQi9TLFFBQUFBLEVBRm1CO0FBR25CQyxRQUFBQSxPQUhtQjtBQUluQmlaLFFBQUFBLEdBQUcsRUFBRSxJQUpjO0FBS25CRSxRQUFBQSxHQUFHLEVBQUUsS0FBS1AsSUFBTCxHQUFZNkMsTUFBTSxLQUFLLFdBQVgsR0FBeUIsS0FBSzdDLElBQTlCLEdBQXFDLEtBQUtBLElBQUwsR0FBWTtBQUwvQyxPQUF2QixFQU1HO0FBQ0g7QUFDQTtBQUNBLFFBVEEsRUFTSTdZLEVBVEo7QUFVSDtBQUNKOztBQUN5QixRQUFwQitlLG9CQUFvQixDQUFDM2UsR0FBRCxFQUFNbVMsUUFBTixFQUFnQmUsS0FBaEIsRUFBdUJ0VCxFQUF2QixFQUEyQnFjLFVBQTNCLEVBQXVDMkMsYUFBdkMsRUFBc0Q7QUFDNUUsUUFBSTVlLEdBQUcsQ0FBQzBKLFNBQVIsRUFBbUI7QUFDZjtBQUNBLFlBQU0xSixHQUFOO0FBQ0g7O0FBQ0QsUUFBSSxDQUFDLEdBQUcwUSxZQUFKLEVBQWtCL0osWUFBbEIsQ0FBK0IzRyxHQUEvQixLQUF1QzRlLGFBQTNDLEVBQTBEO0FBQ3REcEgsTUFBQUEsTUFBTSxDQUFDbEssTUFBUCxDQUFjaVAsSUFBZCxDQUFtQixrQkFBbkIsRUFBdUN2YyxHQUF2QyxFQUE0Q0osRUFBNUMsRUFBZ0RxYyxVQUFoRCxFQURzRCxDQUV0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBbFcsTUFBQUEsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQmxiLElBQWhCLEdBQXVCQyxFQUF2QixDQVBzRCxDQVF0RDtBQUNBOztBQUNBLFlBQU02UixzQkFBc0IsRUFBNUI7QUFDSDs7QUFDRCxRQUFJO0FBQ0EsVUFBSXlHLFVBQUo7QUFDQSxVQUFJdE4sV0FBSjtBQUNBLFVBQUl0SixLQUFKOztBQUNBLFVBQUksT0FBTzRXLFVBQVAsS0FBc0IsV0FBdEIsSUFBcUMsT0FBT3ROLFdBQVAsS0FBdUIsV0FBaEUsRUFBNkU7QUFDekUsU0FBQztBQUFFd0wsVUFBQUEsSUFBSSxFQUFFOEIsVUFBUjtBQUFxQnROLFVBQUFBO0FBQXJCLFlBQXNDLE1BQU0sS0FBS29ULGNBQUwsQ0FBb0IsU0FBcEIsQ0FBN0M7QUFDSDs7QUFDRCxZQUFNVixTQUFTLEdBQUc7QUFDZGhjLFFBQUFBLEtBRGM7QUFFZDJXLFFBQUFBLFNBQVMsRUFBRUMsVUFGRztBQUdkdE4sUUFBQUEsV0FIYztBQUlkNUssUUFBQUEsR0FKYztBQUtkeUwsUUFBQUEsS0FBSyxFQUFFekw7QUFMTyxPQUFsQjs7QUFPQSxVQUFJLENBQUNzZCxTQUFTLENBQUNoYyxLQUFmLEVBQXNCO0FBQ2xCLFlBQUk7QUFDQWdjLFVBQUFBLFNBQVMsQ0FBQ2hjLEtBQVYsR0FBa0IsTUFBTSxLQUFLNE8sZUFBTCxDQUFxQmdJLFVBQXJCLEVBQWlDO0FBQ3JEbFksWUFBQUEsR0FEcUQ7QUFFckRtUyxZQUFBQSxRQUZxRDtBQUdyRGUsWUFBQUE7QUFIcUQsV0FBakMsQ0FBeEI7QUFLSCxTQU5ELENBTUUsT0FBTzJMLE1BQVAsRUFBZTtBQUNicGMsVUFBQUEsT0FBTyxDQUFDZ0osS0FBUixDQUFjLHlDQUFkLEVBQXlEb1QsTUFBekQ7QUFDQXZCLFVBQUFBLFNBQVMsQ0FBQ2hjLEtBQVYsR0FBa0IsRUFBbEI7QUFFSDtBQUNKOztBQUNELGFBQU9nYyxTQUFQO0FBQ0gsS0E1QkQsQ0E0QkUsT0FBT3dCLFlBQVAsRUFBcUI7QUFDbkIsYUFBTyxLQUFLSCxvQkFBTCxDQUEwQkcsWUFBMUIsRUFBd0MzTSxRQUF4QyxFQUFrRGUsS0FBbEQsRUFBeUR0VCxFQUF6RCxFQUE2RHFjLFVBQTdELEVBQXlFLElBQXpFLENBQVA7QUFDSDtBQUNKOztBQUNpQixRQUFac0IsWUFBWSxDQUFDdFQsS0FBRCxFQUFRa0ksUUFBUixFQUFrQmUsS0FBbEIsRUFBeUJ0VCxFQUF6QixFQUE2Qm1ELFVBQTdCLEVBQXlDa1osVUFBekMsRUFBcUQ7QUFDbkUsUUFBSTtBQUNBLFlBQU04QyxpQkFBaUIsR0FBRyxLQUFLakYsVUFBTCxDQUFnQjdQLEtBQWhCLENBQTFCOztBQUNBLFVBQUlnUyxVQUFVLENBQUNqYixPQUFYLElBQXNCK2QsaUJBQXRCLElBQTJDLEtBQUs5VSxLQUFMLEtBQWVBLEtBQTlELEVBQXFFO0FBQ2pFLGVBQU84VSxpQkFBUDtBQUNIOztBQUNELFlBQU1DLGVBQWUsR0FBR0QsaUJBQWlCLElBQUksYUFBYUEsaUJBQWxDLEdBQXNEaFEsU0FBdEQsR0FBa0VnUSxpQkFBMUY7QUFDQSxZQUFNekIsU0FBUyxHQUFHMEIsZUFBZSxHQUFHQSxlQUFILEdBQXFCLE1BQU0sS0FBS2hCLGNBQUwsQ0FBb0IvVCxLQUFwQixFQUEyQnJDLElBQTNCLENBQWlDVSxHQUFELEtBQVE7QUFDNUYyUCxRQUFBQSxTQUFTLEVBQUUzUCxHQUFHLENBQUM4TixJQUQ2RTtBQUU1RnhMLFFBQUFBLFdBQVcsRUFBRXRDLEdBQUcsQ0FBQ3NDLFdBRjJFO0FBRzVGb1AsUUFBQUEsT0FBTyxFQUFFMVIsR0FBRyxDQUFDMlcsR0FBSixDQUFRakYsT0FIMkU7QUFJNUZDLFFBQUFBLE9BQU8sRUFBRTNSLEdBQUcsQ0FBQzJXLEdBQUosQ0FBUWhGO0FBSjJFLE9BQVIsQ0FBaEMsQ0FBNUQ7QUFPQSxZQUFNO0FBQUVoQyxRQUFBQSxTQUFTLEVBQUVDLFVBQWI7QUFBMEI4QixRQUFBQSxPQUExQjtBQUFvQ0MsUUFBQUE7QUFBcEMsVUFBaURxRCxTQUF2RDs7QUFDQSxnQkFBMkM7QUFDdkMsY0FBTTtBQUFFNEIsVUFBQUE7QUFBRixZQUEwQmhnQixtQkFBTyxDQUFDLHdFQUFELENBQXZDOztBQUNBLFlBQUksQ0FBQ2dnQixrQkFBa0IsQ0FBQ2hILFVBQUQsQ0FBdkIsRUFBcUM7QUFDakMsZ0JBQU0sSUFBSXpXLEtBQUosQ0FBVyx5REFBd0QwUSxRQUFTLEdBQTVFLENBQU47QUFDSDtBQUNKOztBQUNELFVBQUltRixRQUFKOztBQUNBLFVBQUkwQyxPQUFPLElBQUlDLE9BQWYsRUFBd0I7QUFDcEIzQyxRQUFBQSxRQUFRLEdBQUcsS0FBS1EsVUFBTCxDQUFnQnFILFdBQWhCLENBQTRCLENBQUMsR0FBR3JPLE1BQUosRUFBWTRELG9CQUFaLENBQWlDO0FBQ3BFdkMsVUFBQUEsUUFEb0U7QUFFcEVlLFVBQUFBO0FBRm9FLFNBQWpDLENBQTVCLEVBR1BuUSxVQUhPLEVBR0tpWCxPQUhMLEVBR2MsS0FBSzlaLE1BSG5CLENBQVg7QUFJSDs7QUFDRCxZQUFNb0IsS0FBSyxHQUFHLE1BQU0sS0FBSzhkLFFBQUwsQ0FBYyxNQUFJcEYsT0FBTyxHQUFHLEtBQUtxRixjQUFMLENBQW9CL0gsUUFBcEIsQ0FBSCxHQUFtQzJDLE9BQU8sR0FBRyxLQUFLcUYsY0FBTCxDQUFvQmhJLFFBQXBCLENBQUgsR0FBbUMsS0FBS3BILGVBQUwsQ0FBcUJnSSxVQUFyQixFQUFpQztBQUN2SjtBQUNJL0YsUUFBQUEsUUFESjtBQUVJZSxRQUFBQSxLQUZKO0FBR0lnQyxRQUFBQSxNQUFNLEVBQUV0VixFQUhaO0FBSUlNLFFBQUFBLE1BQU0sRUFBRSxLQUFLQSxNQUpqQjtBQUtJeUUsUUFBQUEsT0FBTyxFQUFFLEtBQUtBLE9BTGxCO0FBTUlJLFFBQUFBLGFBQWEsRUFBRSxLQUFLQTtBQU54QixPQURzSCxDQUF0RyxDQUFwQjtBQVVBdVksTUFBQUEsU0FBUyxDQUFDaGMsS0FBVixHQUFrQkEsS0FBbEI7QUFDQSxXQUFLd1ksVUFBTCxDQUFnQjdQLEtBQWhCLElBQXlCcVQsU0FBekI7QUFDQSxhQUFPQSxTQUFQO0FBQ0gsS0F4Q0QsQ0F3Q0UsT0FBT2lDLElBQVAsRUFBYTtBQUNYLGFBQU8sS0FBS1osb0JBQUwsQ0FBMEJZLElBQTFCLEVBQWdDcE4sUUFBaEMsRUFBMENlLEtBQTFDLEVBQWlEdFQsRUFBakQsRUFBcURxYyxVQUFyRCxDQUFQO0FBQ0g7QUFDSjs7QUFDRHRVLEVBQUFBLEdBQUcsQ0FBQ3NDLEtBQUQsRUFBUWtJLFFBQVIsRUFBa0JlLEtBQWxCLEVBQXlCdFQsRUFBekIsRUFBNkJ1WCxJQUE3QixFQUFtQ3FILFdBQW5DLEVBQWdEO0FBQy9DLFNBQUtuRyxVQUFMLEdBQWtCLEtBQWxCO0FBQ0EsU0FBS3BPLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtrSSxRQUFMLEdBQWdCQSxRQUFoQjtBQUNBLFNBQUtlLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFNBQUtnQyxNQUFMLEdBQWN0VixFQUFkO0FBQ0EsV0FBTyxLQUFLNmMsTUFBTCxDQUFZdEYsSUFBWixFQUFrQnFILFdBQWxCLENBQVA7QUFDSDtBQUNEO0FBQ0o7QUFDQTtBQUNBOzs7QUFBTWdCLEVBQUFBLGNBQWMsQ0FBQ3haLEVBQUQsRUFBSztBQUNqQixTQUFLMlQsSUFBTCxHQUFZM1QsRUFBWjtBQUNIOztBQUNEc1csRUFBQUEsZUFBZSxDQUFDMWMsRUFBRCxFQUFLO0FBQ2hCLFFBQUksQ0FBQyxLQUFLc1YsTUFBVixFQUFrQixPQUFPLEtBQVA7QUFDbEIsVUFBTSxDQUFDdUssWUFBRCxFQUFlQyxPQUFmLElBQTBCLEtBQUt4SyxNQUFMLENBQVlILEtBQVosQ0FBa0IsR0FBbEIsQ0FBaEM7QUFDQSxVQUFNLENBQUM0SyxZQUFELEVBQWVDLE9BQWYsSUFBMEJoZ0IsRUFBRSxDQUFDbVYsS0FBSCxDQUFTLEdBQVQsQ0FBaEMsQ0FIZ0IsQ0FJaEI7O0FBQ0EsUUFBSTZLLE9BQU8sSUFBSUgsWUFBWSxLQUFLRSxZQUE1QixJQUE0Q0QsT0FBTyxLQUFLRSxPQUE1RCxFQUFxRTtBQUNqRSxhQUFPLElBQVA7QUFDSCxLQVBlLENBUWhCOzs7QUFDQSxRQUFJSCxZQUFZLEtBQUtFLFlBQXJCLEVBQW1DO0FBQy9CLGFBQU8sS0FBUDtBQUNILEtBWGUsQ0FZaEI7QUFDQTtBQUNBO0FBQ0E7OztBQUNBLFdBQU9ELE9BQU8sS0FBS0UsT0FBbkI7QUFDSDs7QUFDRHBELEVBQUFBLFlBQVksQ0FBQzVjLEVBQUQsRUFBSztBQUNiLFVBQU0sR0FBRzRWLElBQUgsSUFBVzVWLEVBQUUsQ0FBQ21WLEtBQUgsQ0FBUyxHQUFULENBQWpCLENBRGEsQ0FFYjtBQUNBOztBQUNBLFFBQUlTLElBQUksS0FBSyxFQUFULElBQWVBLElBQUksS0FBSyxLQUE1QixFQUFtQztBQUMvQnpQLE1BQUFBLE1BQU0sQ0FBQzhaLFFBQVAsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDQTtBQUNILEtBUFksQ0FRYjs7O0FBQ0EsVUFBTUMsSUFBSSxHQUFHL1gsUUFBUSxDQUFDZ1ksY0FBVCxDQUF3QnZLLElBQXhCLENBQWI7O0FBQ0EsUUFBSXNLLElBQUosRUFBVTtBQUNOQSxNQUFBQSxJQUFJLENBQUNFLGNBQUw7QUFDQTtBQUNILEtBYlksQ0FjYjtBQUNBOzs7QUFDQSxVQUFNQyxNQUFNLEdBQUdsWSxRQUFRLENBQUNtWSxpQkFBVCxDQUEyQjFLLElBQTNCLEVBQWlDLENBQWpDLENBQWY7O0FBQ0EsUUFBSXlLLE1BQUosRUFBWTtBQUNSQSxNQUFBQSxNQUFNLENBQUNELGNBQVA7QUFDSDtBQUNKOztBQUNEbEQsRUFBQUEsUUFBUSxDQUFDNUgsTUFBRCxFQUFTO0FBQ2IsV0FBTyxLQUFLQSxNQUFMLEtBQWdCQSxNQUF2QjtBQUNIO0FBQ0Q7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFBb0IsUUFBUnpWLFFBQVEsQ0FBQ2tULEdBQUQsRUFBTXVDLE1BQU0sR0FBR3ZDLEdBQWYsRUFBb0I5UyxPQUFPLEdBQUcsRUFBOUIsRUFDYjtBQUNDLFFBQUk2YyxNQUFNLEdBQUcsQ0FBQyxHQUFHMUwsaUJBQUosRUFBdUJ5SSxnQkFBdkIsQ0FBd0M5RyxHQUF4QyxDQUFiO0FBQ0EsUUFBSTtBQUFFUixNQUFBQSxRQUFRLEVBQUVnTztBQUFaLFFBQTJCekQsTUFBL0I7O0FBQ0EsUUFBSW5YLEtBQUosRUFBcUMsRUFXcEM7O0FBQ0QsVUFBTXlRLEtBQUssR0FBRyxNQUFNLEtBQUs4QixVQUFMLENBQWdCOEUsV0FBaEIsRUFBcEI7QUFDQSxRQUFJN1osVUFBVSxHQUFHbVMsTUFBakI7O0FBQ0EsUUFBSTNQLEtBQUosRUFBK0QsRUFBL0QsTUFhTztBQUNIbVgsTUFBQUEsTUFBTSxDQUFDdkssUUFBUCxHQUFrQjRELG1CQUFtQixDQUFDMkcsTUFBTSxDQUFDdkssUUFBUixFQUFrQjZELEtBQWxCLENBQXJDOztBQUNBLFVBQUkwRyxNQUFNLENBQUN2SyxRQUFQLEtBQW9CZ08sU0FBeEIsRUFBbUM7QUFDL0JBLFFBQUFBLFNBQVMsR0FBR3pELE1BQU0sQ0FBQ3ZLLFFBQW5CO0FBQ0F1SyxRQUFBQSxNQUFNLENBQUN2SyxRQUFQLEdBQWtCZ08sU0FBbEI7QUFDQXhOLFFBQUFBLEdBQUcsR0FBRyxDQUFDLEdBQUc3QixNQUFKLEVBQVk0RCxvQkFBWixDQUFpQ2dJLE1BQWpDLENBQU47QUFDSDtBQUNKOztBQUNELFVBQU16UyxLQUFLLEdBQUcsQ0FBQyxHQUFHd0csdUJBQUosRUFBNkJ2TCx1QkFBN0IsQ0FBcURpYixTQUFyRCxDQUFkLENBdENELENBdUNDOztBQUNBLGNBQTJDO0FBQ3ZDO0FBQ0g7O0FBQ0QsVUFBTTVZLE9BQU8sQ0FBQ3VFLEdBQVIsQ0FBWSxDQUNkLEtBQUtnTSxVQUFMLENBQWdCc0ksTUFBaEIsQ0FBdUJuVyxLQUF2QixFQUE4QnJDLElBQTlCLENBQW9DeVksS0FBRCxJQUFTO0FBQ3hDLGFBQU9BLEtBQUssR0FBRyxLQUFLaEIsY0FBTCxDQUFvQixLQUFLdkgsVUFBTCxDQUFnQnFILFdBQWhCLENBQTRCeE0sR0FBNUIsRUFBaUM1UCxVQUFqQyxFQUE2QyxJQUE3QyxFQUFtRCxPQUFPbEQsT0FBTyxDQUFDSyxNQUFmLEtBQTBCLFdBQTFCLEdBQXdDTCxPQUFPLENBQUNLLE1BQWhELEdBQXlELEtBQUtBLE1BQWpILENBQXBCLENBQUgsR0FBbUosS0FBL0o7QUFDSCxLQUZELENBRGMsRUFJZCxLQUFLNFgsVUFBTCxDQUFnQmpZLE9BQU8sQ0FBQ3lFLFFBQVIsR0FBbUIsVUFBbkIsR0FBZ0MsVUFBaEQsRUFBNEQyRixLQUE1RCxDQUpjLENBQVosQ0FBTjtBQU1IOztBQUNtQixRQUFkK1QsY0FBYyxDQUFDL1QsS0FBRCxFQUFRO0FBQ3hCLFFBQUlQLFNBQVMsR0FBRyxLQUFoQjs7QUFDQSxVQUFNNFcsTUFBTSxHQUFHLEtBQUtoRyxHQUFMLEdBQVcsTUFBSTtBQUMxQjVRLE1BQUFBLFNBQVMsR0FBRyxJQUFaO0FBQ0gsS0FGRDs7QUFHQSxVQUFNNlcsZUFBZSxHQUFHLE1BQU0sS0FBS3pJLFVBQUwsQ0FBZ0IwSSxRQUFoQixDQUF5QnZXLEtBQXpCLENBQTlCOztBQUNBLFFBQUlQLFNBQUosRUFBZTtBQUNYLFlBQU0rQixLQUFLLEdBQUcsSUFBSWhLLEtBQUosQ0FBVyx3Q0FBdUN3SSxLQUFNLEdBQXhELENBQWQ7QUFDQXdCLE1BQUFBLEtBQUssQ0FBQy9CLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxZQUFNK0IsS0FBTjtBQUNIOztBQUNELFFBQUk2VSxNQUFNLEtBQUssS0FBS2hHLEdBQXBCLEVBQXlCO0FBQ3JCLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsV0FBT2lHLGVBQVA7QUFDSDs7QUFDRG5CLEVBQUFBLFFBQVEsQ0FBQzdULEVBQUQsRUFBSztBQUNULFFBQUk3QixTQUFTLEdBQUcsS0FBaEI7O0FBQ0EsVUFBTTRXLE1BQU0sR0FBRyxNQUFJO0FBQ2Y1VyxNQUFBQSxTQUFTLEdBQUcsSUFBWjtBQUNILEtBRkQ7O0FBR0EsU0FBSzRRLEdBQUwsR0FBV2dHLE1BQVg7QUFDQSxXQUFPL1UsRUFBRSxHQUFHM0QsSUFBTCxDQUFXdVAsSUFBRCxJQUFRO0FBQ3JCLFVBQUltSixNQUFNLEtBQUssS0FBS2hHLEdBQXBCLEVBQXlCO0FBQ3JCLGFBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7O0FBQ0QsVUFBSTVRLFNBQUosRUFBZTtBQUNYLGNBQU02VixJQUFJLEdBQUcsSUFBSTlkLEtBQUosQ0FBVSxpQ0FBVixDQUFiO0FBQ0E4ZCxRQUFBQSxJQUFJLENBQUM3VixTQUFMLEdBQWlCLElBQWpCO0FBQ0EsY0FBTTZWLElBQU47QUFDSDs7QUFDRCxhQUFPcEksSUFBUDtBQUNILEtBVk0sQ0FBUDtBQVdIOztBQUNEa0ksRUFBQUEsY0FBYyxDQUFDL0gsUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRTNYLE1BQUFBLElBQUksRUFBRThnQjtBQUFSLFFBQXNCLElBQUkxTixHQUFKLENBQVF1RSxRQUFSLEVBQWtCdlIsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQmxiLElBQWxDLENBQTVCOztBQUNBLFFBQUksS0FBSixFQUFvRixFQUVuRjs7QUFDRCxXQUFPMFgsYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS29DLEtBQWhCLENBQWIsQ0FBb0M5UixJQUFwQyxDQUEwQ3VQLElBQUQsSUFBUTtBQUNwRCxXQUFLb0IsR0FBTCxDQUFTa0ksUUFBVCxJQUFxQnRKLElBQXJCO0FBQ0EsYUFBT0EsSUFBUDtBQUNILEtBSE0sQ0FBUDtBQUlIOztBQUNEbUksRUFBQUEsY0FBYyxDQUFDaEksUUFBRCxFQUFXO0FBQ3JCLFVBQU07QUFBRTNYLE1BQUFBLElBQUksRUFBRStnQjtBQUFSLFFBQXlCLElBQUkzTixHQUFKLENBQVF1RSxRQUFSLEVBQWtCdlIsTUFBTSxDQUFDOFUsUUFBUCxDQUFnQmxiLElBQWxDLENBQS9COztBQUNBLFFBQUksS0FBSzZZLEdBQUwsQ0FBU2tJLFdBQVQsQ0FBSixFQUEyQjtBQUN2QixhQUFPLEtBQUtsSSxHQUFMLENBQVNrSSxXQUFULENBQVA7QUFDSDs7QUFDRCxXQUFPLEtBQUtsSSxHQUFMLENBQVNrSSxXQUFULElBQXdCckosYUFBYSxDQUFDQyxRQUFELEVBQVcsS0FBS29DLEtBQWhCLENBQWIsQ0FBb0M5UixJQUFwQyxDQUEwQ3VQLElBQUQsSUFBUTtBQUM1RSxhQUFPLEtBQUtxQixHQUFMLENBQVNrSSxXQUFULENBQVA7QUFDQSxhQUFPdkosSUFBUDtBQUNILEtBSDhCLEVBRzVCcFgsS0FINEIsQ0FHckJ3ZixJQUFELElBQVE7QUFDYixhQUFPLEtBQUsvRyxHQUFMLENBQVNrSSxXQUFULENBQVA7QUFDQSxZQUFNbkIsSUFBTjtBQUNILEtBTjhCLENBQS9CO0FBT0g7O0FBQ0RyUCxFQUFBQSxlQUFlLENBQUMrSCxTQUFELEVBQVkwSSxHQUFaLEVBQWlCO0FBQzVCLFVBQU07QUFBRTFJLE1BQUFBLFNBQVMsRUFBRTJJO0FBQWIsUUFBdUIsS0FBSzlHLFVBQUwsQ0FBZ0IsT0FBaEIsQ0FBN0I7O0FBQ0EsVUFBTStHLE9BQU8sR0FBRyxLQUFLdEcsUUFBTCxDQUFjcUcsSUFBZCxDQUFoQjs7QUFDQUQsSUFBQUEsR0FBRyxDQUFDRSxPQUFKLEdBQWNBLE9BQWQ7QUFDQSxXQUFPLENBQUMsR0FBRy9QLE1BQUosRUFBWWdRLG1CQUFaLENBQWdDRixJQUFoQyxFQUFzQztBQUN6Q0MsTUFBQUEsT0FEeUM7QUFFekM1SSxNQUFBQSxTQUZ5QztBQUd6Q3ZZLE1BQUFBLE1BQU0sRUFBRSxJQUhpQztBQUl6Q2loQixNQUFBQTtBQUp5QyxLQUF0QyxDQUFQO0FBTUg7O0FBQ0R4RSxFQUFBQSxrQkFBa0IsQ0FBQ3ZjLEVBQUQsRUFBS3FjLFVBQUwsRUFBaUI7QUFDL0IsUUFBSSxLQUFLM0IsR0FBVCxFQUFjO0FBQ1Y5QyxNQUFBQSxNQUFNLENBQUNsSyxNQUFQLENBQWNpUCxJQUFkLENBQW1CLGtCQUFuQixFQUF1QzlLLHNCQUFzQixFQUE3RCxFQUFpRTdSLEVBQWpFLEVBQXFFcWMsVUFBckU7QUFDQSxXQUFLM0IsR0FBTDtBQUNBLFdBQUtBLEdBQUwsR0FBVyxJQUFYO0FBQ0g7QUFDSjs7QUFDRG1DLEVBQUFBLE1BQU0sQ0FBQ3RGLElBQUQsRUFBT3FILFdBQVAsRUFBb0I7QUFDdEIsV0FBTyxLQUFLbkUsR0FBTCxDQUFTbEQsSUFBVCxFQUFlLEtBQUsyQyxVQUFMLENBQWdCLE9BQWhCLEVBQXlCN0IsU0FBeEMsRUFBbUR1RyxXQUFuRCxDQUFQO0FBQ0g7O0FBdnZCUTs7QUF5dkJiaEgsTUFBTSxDQUFDbEssTUFBUCxHQUFnQixDQUFDLEdBQUd1RCxLQUFKLEVBQVc5UixPQUFYLEVBQWhCO0FBQ0FELGVBQUEsR0FBa0IwWSxNQUFsQjs7Ozs7Ozs7OztBQ3ZpQ0EsNkdBQThDOzs7Ozs7Ozs7Ozs7QUNBOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFYTs7QUFFYixJQUFJLElBQXFDO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEI7O0FBRTVCO0FBQ0E7QUFDQTtBQUNBLElBQUk7OztBQUdKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0RBQXNEOztBQUV0RDtBQUNBO0FBQ0E7QUFDQSxrREFBa0Q7O0FBRWxEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx1QkFBdUI7QUFDdkIsdUJBQXVCO0FBQ3ZCLGVBQWU7QUFDZixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixZQUFZO0FBQ1osY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsZ0JBQWdCO0FBQ2hCLG1CQUFtQjtBQUNuQix3QkFBd0I7QUFDeEIseUJBQXlCO0FBQ3pCLHlCQUF5QjtBQUN6QixpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQixjQUFjO0FBQ2QsY0FBYztBQUNkLGdCQUFnQjtBQUNoQixrQkFBa0I7QUFDbEIsb0JBQW9CO0FBQ3BCLGtCQUFrQjtBQUNsQiwwQkFBMEI7QUFDMUIsY0FBYztBQUNkLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7O0FDak9hOztBQUViLElBQUksS0FBcUMsRUFBRSxFQUUxQyxDQUFDO0FBQ0YsRUFBRSxzSkFBeUQ7QUFDM0Q7Ozs7Ozs7Ozs7OztBQ05BOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvX19faW50ZXJuYWwtZG8tbm90LXVzZS13aWxsLWJyZWFrLWluLXBhdGNoL2FkbWluLXVpL2lkLWZpZWxkLXZpZXcvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvX19faW50ZXJuYWwtZG8tbm90LXVzZS13aWxsLWJyZWFrLWluLXBhdGNoL2FkbWluLXVpL2lkLWZpZWxkLXZpZXcvZGlzdC9rZXlzdG9uZS5janMuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9hZG1pbi11aS9jb250ZXh0L2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L0NlbGxDb250YWluZXItNDUzMjU0YjUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvQ2VsbExpbmstNTA5ZmIxNjYuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvQ3JlYXRlSXRlbURyYXdlci1iNGIwZGQxNi5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9GaWVsZHMtNGFmYjM4ZjAuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvR3JhcGhRTEVycm9yTm90aWNlLTc2ZmY5NmRkLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L1NpZ25vdXRCdXR0b24tYWNkYjE1NTQuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvYWRtaW4tbWV0YS1ncmFwaHFsLTlmOWE5YzExLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L2NvcmUtYzhlY2NlMjMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvZGF0YUdldHRlci05ZmJlMmY4ZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZGlzdC9nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXItNDc2OTlhMGQuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvZ3JhcGhxbC10cy1zY2hlbWEtZmNlN2E2YTguY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9kaXN0L3VzZUludmFsaWRGaWVsZHMtMTYyZDFiOWMuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2Rpc3QvdXRpbHMtZWZmMWZkMzAuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy9yZWxhdGlvbnNoaXAvdmlld3MvUmVsYXRpb25zaGlwU2VsZWN0L2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy9yZWxhdGlvbnNoaXAvdmlld3MvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cy9kaXN0L2tleXN0b25lLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy9zZWxlY3Qvdmlld3MvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cy9kaXN0L2tleXN0b25lLmNqcy5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL2ZpZWxkcy90eXBlcy90ZXh0L3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cy9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvdGltZXN0YW1wL3ZpZXdzL2Rpc3Qva2V5c3RvbmUuY2pzLmpzIiwid2VicGFjazovLy8uL3BhZ2VzL19hcHAuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2xpbmsuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvcmVxdWVzdC1pZGxlLWNhbGxiYWNrLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9yb3V0ZS1sb2FkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L3JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvdXNlLWludGVyc2VjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi4vLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvd2l0aC1yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9saW5rLmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvY2pzL3JlYWN0LWlzLmRldmVsb3BtZW50LmpzIiwid2VicGFjazovLy8uLi8uLi9ub2RlX21vZHVsZXMvbmV4dC9ub2RlX21vZHVsZXMvcmVhY3QtaXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGFwb2xsby9jbGllbnRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZW1vdGlvbi9oYXNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdG9vbHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdHMvc2NoZW1hXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRoLWNvbnRleHRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS1uZXh0L2tleXN0b25lL19fX2ludGVybmFsLWRvLW5vdC11c2Utd2lsbC1icmVhay1pbi1wYXRjaC9hZG1pbi11aS9wYWdlcy9BcHBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2NvcmVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvZmllbGRzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0NoZXZyb25SaWdodEljb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL2xvYWRpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAa2V5c3RvbmUtdWkvbW9kYWxzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL25vdGljZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBrZXlzdG9uZS11aS9wb3BvdmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3RvYXN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQGtleXN0b25lLXVpL3Rvb2x0aXBcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJhcG9sbG8tdXBsb2FkLWNsaWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImRhdGUtZm5zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZGVjaW1hbC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcImZhc3QtZGVlcC1lcXVhbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJncmFwaHFsLXR5cGUtanNvblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImdyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaW50ZXJzZWN0aW9uLW9ic2VydmVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9pMThuL25vcm1hbGl6ZS1sb2NhbGUtcGF0aC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL21pdHQuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9nZXQtYXNzZXQtcGF0aC1mcm9tLXJvdXRlLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3F1ZXJ5c3RyaW5nLmpzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIuanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi91dGlscy5qc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vL2lnbm9yZWR8STpcXFNvdXJjZXNcXFJlcG9zXFxDaGVmZG9nXFxjZmctYmFja2VuZFxcbm9kZV9tb2R1bGVzXFxuZXh0XFxkaXN0XFxzaGFyZWRcXGxpYlxccm91dGVyfC4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgZm9yICh2YXIga2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkge1xuICAgICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdGFyZ2V0O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2V4dGVuZHM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZShcIi4vZGVmaW5lUHJvcGVydHkuanNcIik7XG5cbmZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7XG5cbiAgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTtcblxuICAgIGlmIChlbnVtZXJhYmxlT25seSkge1xuICAgICAgc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7XG4gIH1cblxuICByZXR1cm4ga2V5cztcbn1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZDIodGFyZ2V0KSB7XG4gIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXSAhPSBudWxsID8gYXJndW1lbnRzW2ldIDoge307XG5cbiAgICBpZiAoaSAlIDIpIHtcbiAgICAgIG93bktleXMoT2JqZWN0KHNvdXJjZSksIHRydWUpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycykge1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0U3ByZWFkMjtcbm1vZHVsZS5leHBvcnRzW1wiZGVmYXVsdFwiXSA9IG1vZHVsZS5leHBvcnRzLCBtb2R1bGUuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTsiLCJ2YXIgb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZSA9IHJlcXVpcmUoXCIuL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UuanNcIik7XG5cbmZ1bmN0aW9uIF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gIGlmIChzb3VyY2UgPT0gbnVsbCkgcmV0dXJuIHt9O1xuICB2YXIgdGFyZ2V0ID0gb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShzb3VyY2UsIGV4Y2x1ZGVkKTtcbiAgdmFyIGtleSwgaTtcblxuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBzb3VyY2VTeW1ib2xLZXlzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhzb3VyY2UpO1xuXG4gICAgZm9yIChpID0gMDsgaSA8IHNvdXJjZVN5bWJvbEtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGtleSA9IHNvdXJjZVN5bWJvbEtleXNbaV07XG4gICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoc291cmNlLCBrZXkpKSBjb250aW51ZTtcbiAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXM7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2U7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG5mdW5jdGlvbiBfdG9QcmltaXRpdmUoaW5wdXQsIGhpbnQpIHtcbiAgaWYgKF90eXBlb2YoaW5wdXQpICE9PSBcIm9iamVjdFwiIHx8IGlucHV0ID09PSBudWxsKSByZXR1cm4gaW5wdXQ7XG4gIHZhciBwcmltID0gaW5wdXRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcblxuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cblxuICByZXR1cm4gKGhpbnQgPT09IFwic3RyaW5nXCIgPyBTdHJpbmcgOiBOdW1iZXIpKGlucHV0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdG9QcmltaXRpdmU7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2ZcIilbXCJkZWZhdWx0XCJdO1xuXG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKFwiLi90b1ByaW1pdGl2ZS5qc1wiKTtcblxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkoYXJnKSB7XG4gIHZhciBrZXkgPSB0b1ByaW1pdGl2ZShhcmcsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gX3R5cGVvZihrZXkpID09PSBcInN5bWJvbFwiID8ga2V5IDogU3RyaW5nKGtleSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3RvUHJvcGVydHlLZXk7XG5tb2R1bGUuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBtb2R1bGUuZXhwb3J0cywgbW9kdWxlLmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuXG4gICAgbW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mO1xubW9kdWxlLmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gbW9kdWxlLmV4cG9ydHMsIG1vZHVsZS5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBDZWxsQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vZGlzdC9DZWxsQ29udGFpbmVyLTQ1MzI1NGI1LmNqcy5kZXYuanMnKTtcbnZhciBDZWxsTGluayA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbExpbmstNTA5ZmIxNjYuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xucmVxdWlyZSgncmVhY3QnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9BbGVydFRyaWFuZ2xlSWNvbicpO1xucmVxdWlyZSgnbmV4dC9saW5rJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9hc3QnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbW9kYWxzJyk7XG5yZXF1aXJlKCdhcG9sbG8tdXBsb2FkLWNsaWVudCcpO1xucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG5yZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9kaXN0L3NxbGl0ZS1hZjllNTE0OC5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi9kaXN0L2FkbWluLW1ldGEtZ3JhcGhxbC05ZjlhOWMxMS5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnJlcXVpcmUoJ25leHQvcm91dGVyJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvcG9wb3ZlcicpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL01vcmVIb3Jpem9udGFsSWNvbicpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0NoZXZyb25SaWdodEljb24nKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uL2Rpc3QvU2lnbm91dEJ1dHRvbi1hY2RiMTU1NC5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdmYXN0LWRlZXAtZXF1YWwnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9ub3RpY2UnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHQnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcbnJlcXVpcmUoJ2dyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzJyk7XG5yZXF1aXJlKCdncmFwaHFsJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xuXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuY29uc3QgRmllbGQgPSAoKSA9PiBudWxsO1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goQ2VsbExpbmsuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5jb25zdCBjb250cm9sbGVyID0gY29uZmlnID0+IHtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGlkRmllbGRLaW5kOiBjb25maWcuZmllbGRNZXRhLmtpbmQsXG4gICAgZGVmYXVsdFZhbHVlOiB1bmRlZmluZWQsXG4gICAgZGVzZXJpYWxpemU6ICgpID0+IHt9LFxuICAgIHNlcmlhbGl6ZTogKCkgPT4gKHt9KSxcbiAgICBmaWx0ZXI6IHtcbiAgICAgIEZpbHRlcihwcm9wcykge1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBldmVudCA9PiB7XG4gICAgICAgICAgICBwcm9wcy5vbkNoYW5nZShldmVudC50YXJnZXQudmFsdWUpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgdmFsdWU6IHByb3BzLnZhbHVlLFxuICAgICAgICAgIGF1dG9Gb2N1czogcHJvcHMuYXV0b0ZvY3VzXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWVcbiAgICAgIH0pID0+IHtcbiAgICAgICAgaWYgKHR5cGUgPT09ICdub3QnKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgbm90OiB7XG4gICAgICAgICAgICAgICAgZXF1YWxzOiB2YWx1ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHZhbHVlV2l0aG91dFdoaXRlc3BhY2UgPSB2YWx1ZS5yZXBsYWNlKC9cXHMvZywgJycpO1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXMnID8gJ2VxdWFscycgOiB0eXBlID09PSAnbm90X2luJyA/ICdub3RJbicgOiB0eXBlO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgIFtrZXldOiBbJ2luJywgJ25vdF9pbiddLmluY2x1ZGVzKHR5cGUpID8gdmFsdWVXaXRob3V0V2hpdGVzcGFjZS5zcGxpdCgnLCcpIDogdmFsdWVXaXRob3V0V2hpdGVzcGFjZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICB0eXBlXG4gICAgICB9KSB7XG4gICAgICAgIGxldCByZW5kZXJlZFZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzL2csICcnKTtcblxuICAgICAgICBpZiAoWydpbicsICdub3RfaW4nXS5pbmNsdWRlcyh0eXBlKSkge1xuICAgICAgICAgIHJlbmRlcmVkVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLCcpLmpvaW4oJywgJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYCR7bGFiZWwudG9Mb3dlckNhc2UoKX06ICR7cmVuZGVyZWRWYWx1ZX1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgaXM6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBub3QgZXhhY3RseScsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBndDoge1xuICAgICAgICAgIGxhYmVsOiAnSXMgZ3JlYXRlciB0aGFuJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGx0OiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgZ3RlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbHRlOiB7XG4gICAgICAgICAgbGFiZWw6ICdJcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG9uZSBvZicsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9LFxuICAgICAgICBub3RfaW46IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBvbmUgb2YnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBjb3JlJDEgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIHRvYXN0ID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XG52YXIgbW9kYWxzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xudmFyIGFwb2xsb1VwbG9hZENsaWVudCA9IHJlcXVpcmUoJ2Fwb2xsby11cGxvYWQtY2xpZW50Jyk7XG52YXIgX29iamVjdFNwcmVhZCA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0U3ByZWFkMicpO1xudmFyIGhhc2hTdHJpbmcgPSByZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4uLy4uLy4uL2Rpc3QvY29yZS1jOGVjY2UyMy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi9kaXN0L3NxbGl0ZS1hZjllNTE0OC5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudCcpO1xudmFyIGFkbWluTWV0YUdyYXBocWwgPSByZXF1aXJlKCcuLi8uLi8uLi9kaXN0L2FkbWluLW1ldGEtZ3JhcGhxbC05ZjlhOWMxMS5janMuZGV2LmpzJyk7XG52YXIgZGF0YUdldHRlciA9IHJlcXVpcmUoJy4uLy4uLy4uL2Rpc3QvZGF0YUdldHRlci05ZmJlMmY4ZS5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdkZWNpbWFsLmpzJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10b29scy9zY2hlbWEnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aG91dC1jb250ZXh0Jyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEnKTtcbnJlcXVpcmUoJ2dyYXBocWwtdHlwZS1qc29uJyk7XG5yZXF1aXJlKCdncmFwaHFsLXVwbG9hZC9wdWJsaWMvR3JhcGhRTFVwbG9hZC5qcycpO1xucmVxdWlyZSgnZ3JhcGhxbCcpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRoLWNvbnRleHQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xudmFyIGhhc2hTdHJpbmdfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KGhhc2hTdHJpbmcpO1xuXG5jb25zdCBleHBlY3RlZEV4cG9ydHMgPSBuZXcgU2V0KFsnQ2VsbCcsICdGaWVsZCcsICdjb250cm9sbGVyJywgJ0NhcmRWYWx1ZSddKTtcbmNvbnN0IGFkbWluTWV0YUxvY2FsU3RvcmFnZUtleSA9ICdrZXlzdG9uZS5hZG1pbk1ldGEnO1xubGV0IF9tdXN0UmVuZGVyU2VydmVyUmVzdWx0ID0gdHJ1ZTtcblxuZnVuY3Rpb24gdXNlTXVzdFJlbmRlclNlcnZlclJlc3VsdCgpIHtcbiAgbGV0IFssIGZvcmNlVXBkYXRlXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIF9tdXN0UmVuZGVyU2VydmVyUmVzdWx0ID0gZmFsc2U7XG4gICAgZm9yY2VVcGRhdGUoMSk7XG4gIH0sIFtdKTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBfbXVzdFJlbmRlclNlcnZlclJlc3VsdDtcbn1cblxuZnVuY3Rpb24gdXNlQWRtaW5NZXRhKGFkbWluTWV0YUhhc2gsIGZpZWxkVmlld3MpIHtcbiAgY29uc3QgYWRtaW5NZXRhRnJvbUxvY2FsU3RvcmFnZSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGl0ZW0gPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShhZG1pbk1ldGFMb2NhbFN0b3JhZ2VLZXkpO1xuXG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgbGV0IHBhcnNlZCA9IEpTT04ucGFyc2UoaXRlbSk7XG5cbiAgICAgIGlmIChwYXJzZWQuaGFzaCA9PT0gYWRtaW5NZXRhSGFzaCkge1xuICAgICAgICByZXR1cm4gcGFyc2VkLm1ldGE7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9LCBbYWRtaW5NZXRhSGFzaF0pOyAvLyBpdCBzZWVtcyBsaWtlIEFwb2xsbyBkb2Vzbid0IHNraXAgdGhlIGZpcnN0IGZldGNoIHdoZW4gdXNpbmcgc2tpcDogdHJ1ZSBzbyB3ZSdyZSB1c2luZyB1c2VMYXp5UXVlcnkgaW5zdGVhZFxuXG4gIGNvbnN0IFtmZXRjaFN0YXRpY0FkbWluTWV0YSwge1xuICAgIGRhdGEsXG4gICAgZXJyb3IsXG4gICAgY2FsbGVkXG4gIH1dID0gY2xpZW50LnVzZUxhenlRdWVyeShhZG1pbk1ldGFHcmFwaHFsLnN0YXRpY0FkbWluTWV0YVF1ZXJ5LCB7XG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gIH0pO1xuICBsZXQgc2hvdWxkRmV0Y2hBZG1pbk1ldGEgPSBhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlID09PSB1bmRlZmluZWQgJiYgIWNhbGxlZDtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2hvdWxkRmV0Y2hBZG1pbk1ldGEpIHtcbiAgICAgIGZldGNoU3RhdGljQWRtaW5NZXRhKCk7XG4gICAgfVxuICB9LCBbc2hvdWxkRmV0Y2hBZG1pbk1ldGEsIGZldGNoU3RhdGljQWRtaW5NZXRhXSk7XG4gIGNvbnN0IHJ1bnRpbWVBZG1pbk1ldGEgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBpZiAoKCFkYXRhIHx8IGVycm9yKSAmJiAhYWRtaW5NZXRhRnJvbUxvY2FsU3RvcmFnZSkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBhZG1pbk1ldGEgPSBhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlID8gYWRtaW5NZXRhRnJvbUxvY2FsU3RvcmFnZSA6IGRhdGEua2V5c3RvbmUuYWRtaW5NZXRhO1xuICAgIGNvbnN0IHJ1bnRpbWVBZG1pbk1ldGEgPSB7XG4gICAgICBlbmFibGVTZXNzaW9uSXRlbTogYWRtaW5NZXRhLmVuYWJsZVNlc3Npb25JdGVtLFxuICAgICAgZW5hYmxlU2lnbm91dDogYWRtaW5NZXRhLmVuYWJsZVNpZ25vdXQsXG4gICAgICBsaXN0czoge31cbiAgICB9O1xuICAgIGFkbWluTWV0YS5saXN0cy5mb3JFYWNoKGxpc3QgPT4ge1xuICAgICAgcnVudGltZUFkbWluTWV0YS5saXN0c1tsaXN0LmtleV0gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGxpc3QpLCB7fSwge1xuICAgICAgICBncWxOYW1lczogY29yZS5nZXRHcWxOYW1lcyh7XG4gICAgICAgICAgbGlzdEtleTogbGlzdC5rZXksXG4gICAgICAgICAgcGx1cmFsR3JhcGhRTE5hbWU6IGxpc3QubGlzdFF1ZXJ5TmFtZVxuICAgICAgICB9KSxcbiAgICAgICAgZmllbGRzOiB7fVxuICAgICAgfSk7XG4gICAgICBsaXN0LmZpZWxkcy5mb3JFYWNoKGZpZWxkID0+IHtcbiAgICAgICAgdmFyIF9maWVsZCRpdGVtVmlldyRmaWVsZCwgX2ZpZWxkJGl0ZW1WaWV3O1xuXG4gICAgICAgIGV4cGVjdGVkRXhwb3J0cy5mb3JFYWNoKGV4cG9ydE5hbWUgPT4ge1xuICAgICAgICAgIGlmIChmaWVsZFZpZXdzW2ZpZWxkLnZpZXdzSW5kZXhdW2V4cG9ydE5hbWVdID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHZpZXcgZm9yIHRoZSBmaWVsZCBhdCAke2xpc3Qua2V5fS4ke2ZpZWxkLnBhdGh9IGlzIG1pc3NpbmcgdGhlICR7ZXhwb3J0TmFtZX0gZXhwb3J0YCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgT2JqZWN0LmtleXMoZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XSkuZm9yRWFjaChleHBvcnROYW1lID0+IHtcbiAgICAgICAgICBpZiAoIWV4cGVjdGVkRXhwb3J0cy5oYXMoZXhwb3J0TmFtZSkgJiYgZXhwb3J0TmFtZSAhPT0gJ2FsbG93ZWRFeHBvcnRzT25DdXN0b21WaWV3cycpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVW5leHBlY3RlZCBleHBvcnQgbmFtZWQgJHtleHBvcnROYW1lfSBmcm9tIHRoZSB2aWV3IGZyb20gdGhlIGZpZWxkIGF0ICR7bGlzdC5rZXl9LiR7ZmllbGQucGF0aH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHZpZXdzID0gX29iamVjdFNwcmVhZCh7fSwgZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XSk7XG5cbiAgICAgICAgY29uc3QgY3VzdG9tVmlld3MgPSB7fTtcblxuICAgICAgICBpZiAoZmllbGQuY3VzdG9tVmlld3NJbmRleCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbVZpZXdzU291cmNlID0gZmllbGRWaWV3c1tmaWVsZC5jdXN0b21WaWV3c0luZGV4XTtcbiAgICAgICAgICBjb25zdCBhbGxvd2VkRXhwb3J0c09uQ3VzdG9tVmlld3MgPSBuZXcgU2V0KHZpZXdzLmFsbG93ZWRFeHBvcnRzT25DdXN0b21WaWV3cyk7XG4gICAgICAgICAgT2JqZWN0LmtleXMoY3VzdG9tVmlld3NTb3VyY2UpLmZvckVhY2goZXhwb3J0TmFtZSA9PiB7XG4gICAgICAgICAgICBpZiAoYWxsb3dlZEV4cG9ydHNPbkN1c3RvbVZpZXdzLmhhcyhleHBvcnROYW1lKSkge1xuICAgICAgICAgICAgICBjdXN0b21WaWV3c1tleHBvcnROYW1lXSA9IGN1c3RvbVZpZXdzU291cmNlW2V4cG9ydE5hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChleHBlY3RlZEV4cG9ydHMuaGFzKGV4cG9ydE5hbWUpKSB7XG4gICAgICAgICAgICAgIHZpZXdzW2V4cG9ydE5hbWVdID0gY3VzdG9tVmlld3NTb3VyY2VbZXhwb3J0TmFtZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgZXhwb3J0IG5hbWVkICR7ZXhwb3J0TmFtZX0gZnJvbSB0aGUgY3VzdG9tIHZpZXcgZnJvbSBmaWVsZCBhdCAke2xpc3Qua2V5fS4ke2ZpZWxkLnBhdGh9YCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBydW50aW1lQWRtaW5NZXRhLmxpc3RzW2xpc3Qua2V5XS5maWVsZHNbZmllbGQucGF0aF0gPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGZpZWxkKSwge30sIHtcbiAgICAgICAgICBpdGVtVmlldzoge1xuICAgICAgICAgICAgZmllbGRNb2RlOiAoX2ZpZWxkJGl0ZW1WaWV3JGZpZWxkID0gKF9maWVsZCRpdGVtVmlldyA9IGZpZWxkLml0ZW1WaWV3KSA9PT0gbnVsbCB8fCBfZmllbGQkaXRlbVZpZXcgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWVsZCRpdGVtVmlldy5maWVsZE1vZGUpICE9PSBudWxsICYmIF9maWVsZCRpdGVtVmlldyRmaWVsZCAhPT0gdm9pZCAwID8gX2ZpZWxkJGl0ZW1WaWV3JGZpZWxkIDogbnVsbFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmlld3MsXG4gICAgICAgICAgY29udHJvbGxlcjogZmllbGRWaWV3c1tmaWVsZC52aWV3c0luZGV4XS5jb250cm9sbGVyKHtcbiAgICAgICAgICAgIGxpc3RLZXk6IGxpc3Qua2V5LFxuICAgICAgICAgICAgZmllbGRNZXRhOiBmaWVsZC5maWVsZE1ldGEsXG4gICAgICAgICAgICBsYWJlbDogZmllbGQubGFiZWwsXG4gICAgICAgICAgICBwYXRoOiBmaWVsZC5wYXRoLFxuICAgICAgICAgICAgY3VzdG9tVmlld3NcbiAgICAgICAgICB9KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICFhZG1pbk1ldGFGcm9tTG9jYWxTdG9yYWdlKSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShhZG1pbk1ldGFMb2NhbFN0b3JhZ2VLZXksIEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgaGFzaDogaGFzaFN0cmluZ19fZGVmYXVsdFtcImRlZmF1bHRcIl0oSlNPTi5zdHJpbmdpZnkoYWRtaW5NZXRhKSksXG4gICAgICAgIG1ldGE6IGFkbWluTWV0YVxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIHJldHVybiBydW50aW1lQWRtaW5NZXRhO1xuICB9LCBbZGF0YSwgZXJyb3IsIGFkbWluTWV0YUZyb21Mb2NhbFN0b3JhZ2UsIGZpZWxkVmlld3NdKTtcbiAgY29uc3QgbXVzdFJlbmRlclNlcnZlclJlc3VsdCA9IHVzZU11c3RSZW5kZXJTZXJ2ZXJSZXN1bHQoKTtcblxuICBpZiAobXVzdFJlbmRlclNlcnZlclJlc3VsdCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogJ2xvYWRpbmcnXG4gICAgfTtcbiAgfVxuXG4gIGlmIChydW50aW1lQWRtaW5NZXRhKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiAnbG9hZGVkJyxcbiAgICAgIHZhbHVlOiBydW50aW1lQWRtaW5NZXRhXG4gICAgfTtcbiAgfVxuXG4gIGlmIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZTogJ2Vycm9yJyxcbiAgICAgIGVycm9yLFxuICAgICAgcmVmZXRjaDogKCkgPT4ge1xuICAgICAgICBmZXRjaFN0YXRpY0FkbWluTWV0YSgpO1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHN0YXRlOiAnbG9hZGluZydcbiAgfTtcbn1cblxuZnVuY3Rpb24gdXNlTGF6eU1ldGFkYXRhKHF1ZXJ5KSB7XG4gIGxldCByZXN1bHQgPSBjbGllbnQudXNlUXVlcnkocXVlcnksIHtcbiAgICBlcnJvclBvbGljeTogJ2FsbCcsXG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknXG4gIH0pO1xuICByZXR1cm4gUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgdmFyIF9yZXN1bHQkZXJyb3IsIF9yZXN1bHQkZXJyb3IkbmV0d29yaywgX3Jlc3VsdCRlcnJvcjIsIF9yZXN1bHQkZXJyb3IkbmV0d29yazIsIF9yZXN1bHQkZXJyb3IzLCBfcmVzdWx0JGVycm9yJG5ldHdvcmszLCBfcmVzdWx0JGVycm9yNDtcblxuICAgIGxldCByZWZldGNoID0gKCkgPT4ge1xuICAgICAgcmVzdWx0LnJlZmV0Y2goKTtcbiAgICB9O1xuXG4gICAgbGV0IGRhdGFHZXR0ZXIkMSA9IGRhdGFHZXR0ZXIubWFrZURhdGFHZXR0ZXIocmVzdWx0LmRhdGEsIChfcmVzdWx0JGVycm9yID0gcmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfcmVzdWx0JGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVzdWx0JGVycm9yLmdyYXBoUUxFcnJvcnMpO1xuICAgIGNvbnN0IGF1dGhlbnRpY2F0ZWRJdGVtR2V0dGVyID0gZGF0YUdldHRlciQxLmdldCgnYXV0aGVudGljYXRlZEl0ZW0nKTtcbiAgICBjb25zdCBrZXlzdG9uZU1ldGFHZXR0ZXIgPSBkYXRhR2V0dGVyJDEuZ2V0KCdrZXlzdG9uZScpO1xuICAgIHJldHVybiB7XG4gICAgICByZWZldGNoLFxuICAgICAgYXV0aGVudGljYXRlZEl0ZW06IGdldEF1dGhlbnRpY2F0ZWRJdGVtKHJlc3VsdCwgYXV0aGVudGljYXRlZEl0ZW1HZXR0ZXIuZXJyb3JzIHx8ICgoX3Jlc3VsdCRlcnJvciRuZXR3b3JrID0gKF9yZXN1bHQkZXJyb3IyID0gcmVzdWx0LmVycm9yKSA9PT0gbnVsbCB8fCBfcmVzdWx0JGVycm9yMiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3Jlc3VsdCRlcnJvcjIubmV0d29ya0Vycm9yKSAhPT0gbnVsbCAmJiBfcmVzdWx0JGVycm9yJG5ldHdvcmsgIT09IHZvaWQgMCA/IF9yZXN1bHQkZXJyb3IkbmV0d29yayA6IHVuZGVmaW5lZCkpLFxuICAgICAgdmlzaWJsZUxpc3RzOiBnZXRWaXNpYmxlTGlzdHMocmVzdWx0LCBrZXlzdG9uZU1ldGFHZXR0ZXIuZXJyb3JzIHx8ICgoX3Jlc3VsdCRlcnJvciRuZXR3b3JrMiA9IChfcmVzdWx0JGVycm9yMyA9IHJlc3VsdC5lcnJvcikgPT09IG51bGwgfHwgX3Jlc3VsdCRlcnJvcjMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZXN1bHQkZXJyb3IzLm5ldHdvcmtFcnJvcikgIT09IG51bGwgJiYgX3Jlc3VsdCRlcnJvciRuZXR3b3JrMiAhPT0gdm9pZCAwID8gX3Jlc3VsdCRlcnJvciRuZXR3b3JrMiA6IHVuZGVmaW5lZCkpLFxuICAgICAgY3JlYXRlVmlld0ZpZWxkTW9kZXM6IGdldENyZWF0ZVZpZXdGaWVsZE1vZGVzKHJlc3VsdCwga2V5c3RvbmVNZXRhR2V0dGVyLmVycm9ycyB8fCAoKF9yZXN1bHQkZXJyb3IkbmV0d29yazMgPSAoX3Jlc3VsdCRlcnJvcjQgPSByZXN1bHQuZXJyb3IpID09PSBudWxsIHx8IF9yZXN1bHQkZXJyb3I0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfcmVzdWx0JGVycm9yNC5uZXR3b3JrRXJyb3IpICE9PSBudWxsICYmIF9yZXN1bHQkZXJyb3IkbmV0d29yazMgIT09IHZvaWQgMCA/IF9yZXN1bHQkZXJyb3IkbmV0d29yazMgOiB1bmRlZmluZWQpKVxuICAgIH07XG4gIH0sIFtyZXN1bHRdKTtcbn1cblxuZnVuY3Rpb24gZ2V0Q3JlYXRlVmlld0ZpZWxkTW9kZXMoe1xuICBkYXRhXG59LCBlcnJvcikge1xuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6ICdlcnJvcicsXG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IGxpc3RzID0ge307XG4gICAgZGF0YS5rZXlzdG9uZS5hZG1pbk1ldGEubGlzdHMuZm9yRWFjaChsaXN0ID0+IHtcbiAgICAgIGxpc3RzW2xpc3Qua2V5XSA9IHt9O1xuICAgICAgbGlzdC5maWVsZHMuZm9yRWFjaChmaWVsZCA9PiB7XG4gICAgICAgIGxpc3RzW2xpc3Qua2V5XVtmaWVsZC5wYXRoXSA9IGZpZWxkLmNyZWF0ZVZpZXcuZmllbGRNb2RlO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiAnbG9hZGVkJyxcbiAgICAgIGxpc3RzXG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc3RhdGU6ICdsb2FkaW5nJ1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRWaXNpYmxlTGlzdHMoe1xuICBkYXRhXG59LCBlcnJvcikge1xuICBpZiAoZXJyb3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6ICdlcnJvcicsXG4gICAgICBlcnJvclxuICAgIH07XG4gIH1cblxuICBpZiAoZGF0YSkge1xuICAgIGNvbnN0IGxpc3RzID0gbmV3IFNldCgpO1xuICAgIGRhdGEua2V5c3RvbmUuYWRtaW5NZXRhLmxpc3RzLmZvckVhY2gobGlzdCA9PiB7XG4gICAgICBpZiAoIWxpc3QuaXNIaWRkZW4pIHtcbiAgICAgICAgbGlzdHMuYWRkKGxpc3Qua2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgc3RhdGU6ICdsb2FkZWQnLFxuICAgICAgbGlzdHNcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogJ2xvYWRpbmcnXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEF1dGhlbnRpY2F0ZWRJdGVtKHtcbiAgZGF0YVxufSwgZXJyb3IpIHtcbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiAnZXJyb3InLFxuICAgICAgZXJyb3JcbiAgICB9O1xuICB9XG5cbiAgaWYgKGRhdGEpIHtcbiAgICBpZiAoIWRhdGEuYXV0aGVudGljYXRlZEl0ZW0gfHwgLy8gdGhpcyBpcyBmb3IgdGhlIGNhc2Ugd2hlcmUgdGhlcmUgaXMgYSBuZXcgdHlwZVxuICAgIC8vIGluIHRoZSBBdXRoZW50aWNhdGVkSXRlbSB1bmlvbiBhbmQgdGhlIHF1ZXJ5XG4gICAgLy8gdGhhdCB0aGUgYWRtaW4gdWkgaGFzIGRvZXNuJ3QgZ2V0IHRoZSBpZFxuICAgIC8vICh5ZXMsIHVuZGVmaW5lZCBpcyB2ZXJ5IHNwZWNpZmljIGFuZCB2ZXJ5IGludGVudGlvbmFsLCBpdCBzaG91bGQgbm90IGJlIGNoZWNraW5nIGZvciBudWxsKVxuICAgIGRhdGEuYXV0aGVudGljYXRlZEl0ZW0uaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc3RhdGU6ICd1bmF1dGhlbnRpY2F0ZWQnXG4gICAgICB9O1xuICAgIH1cblxuICAgIGNvbnN0IGxhYmVsRmllbGQgPSBPYmplY3Qua2V5cyhkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtKS5maWx0ZXIoeCA9PiB4ICE9PSAnX190eXBlbmFtZScgJiYgeCAhPT0gJ2lkJylbMF07XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlOiAnYXV0aGVudGljYXRlZCcsXG4gICAgICBpZDogZGF0YS5hdXRoZW50aWNhdGVkSXRlbS5pZCxcbiAgICAgIGxhYmVsOiBkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtW2xhYmVsRmllbGRdIHx8IGRhdGEuYXV0aGVudGljYXRlZEl0ZW0uaWQsXG4gICAgICBsaXN0S2V5OiBkYXRhLmF1dGhlbnRpY2F0ZWRJdGVtLl9fdHlwZW5hbWVcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzdGF0ZTogJ2xvYWRpbmcnXG4gIH07XG59XG5cbmNvbnN0IEtleXN0b25lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHVuZGVmaW5lZCk7XG5cbmZ1bmN0aW9uIEludGVybmFsS2V5c3RvbmVQcm92aWRlcih7XG4gIGFkbWluQ29uZmlnLFxuICBmaWVsZFZpZXdzLFxuICBhZG1pbk1ldGFIYXNoLFxuICBjaGlsZHJlbixcbiAgbGF6eU1ldGFkYXRhUXVlcnksXG4gIGFwaVBhdGhcbn0pIHtcbiAgY29uc3QgYWRtaW5NZXRhID0gdXNlQWRtaW5NZXRhKGFkbWluTWV0YUhhc2gsIGZpZWxkVmlld3MpO1xuICBjb25zdCB7XG4gICAgYXV0aGVudGljYXRlZEl0ZW0sXG4gICAgdmlzaWJsZUxpc3RzLFxuICAgIGNyZWF0ZVZpZXdGaWVsZE1vZGVzLFxuICAgIHJlZmV0Y2hcbiAgfSA9IHVzZUxhenlNZXRhZGF0YShsYXp5TWV0YWRhdGFRdWVyeSk7XG5cbiAgY29uc3QgcmVpbml0Q29udGV4dCA9ICgpID0+IHtcbiAgICB2YXIgX2FkbWluTWV0YSRyZWZldGNoO1xuXG4gICAgYWRtaW5NZXRhID09PSBudWxsIHx8IGFkbWluTWV0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9hZG1pbk1ldGEkcmVmZXRjaCA9IGFkbWluTWV0YS5yZWZldGNoKSA9PT0gbnVsbCB8fCBfYWRtaW5NZXRhJHJlZmV0Y2ggPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hZG1pbk1ldGEkcmVmZXRjaC5jYWxsKGFkbWluTWV0YSk7XG4gICAgcmVmZXRjaCgpO1xuICB9O1xuXG4gIGlmIChhZG1pbk1ldGEuc3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoY29yZSQxLkNlbnRlciwge1xuICAgICAgZmlsbFZpZXc6IHRydWVcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQobG9hZGluZy5Mb2FkaW5nRG90cywge1xuICAgICAgbGFiZWw6IFwiTG9hZGluZyBBZG1pbiBNZXRhZGF0YVwiLFxuICAgICAgc2l6ZTogXCJsYXJnZVwiXG4gICAgfSkpO1xuICB9XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudCh0b2FzdC5Ub2FzdFByb3ZpZGVyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQobW9kYWxzLkRyYXdlclByb3ZpZGVyLCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoS2V5c3RvbmVDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgdmFsdWU6IHtcbiAgICAgIGFkbWluQ29uZmlnLFxuICAgICAgYWRtaW5NZXRhLFxuICAgICAgZmllbGRWaWV3cyxcbiAgICAgIGF1dGhlbnRpY2F0ZWRJdGVtLFxuICAgICAgcmVpbml0Q29udGV4dCxcbiAgICAgIHZpc2libGVMaXN0cyxcbiAgICAgIGNyZWF0ZVZpZXdGaWVsZE1vZGVzLFxuICAgICAgYXBpUGF0aFxuICAgIH1cbiAgfSwgY2hpbGRyZW4pKSk7XG59XG5cbmNvbnN0IEtleXN0b25lUHJvdmlkZXIgPSBwcm9wcyA9PiB7XG4gIGNvbnN0IGFwb2xsb0NsaWVudCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gbmV3IGNsaWVudC5BcG9sbG9DbGllbnQoe1xuICAgIGNhY2hlOiBuZXcgY2xpZW50LkluTWVtb3J5Q2FjaGUoKSxcbiAgICBsaW5rOiBhcG9sbG9VcGxvYWRDbGllbnQuY3JlYXRlVXBsb2FkTGluayh7XG4gICAgICB1cmk6IHByb3BzLmFwaVBhdGhcbiAgICB9KVxuICB9KSwgW3Byb3BzLmFwaVBhdGhdKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChjbGllbnQuQXBvbGxvUHJvdmlkZXIsIHtcbiAgICBjbGllbnQ6IGFwb2xsb0NsaWVudFxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoSW50ZXJuYWxLZXlzdG9uZVByb3ZpZGVyLCBwcm9wcykpO1xufTtcbmNvbnN0IHVzZUtleXN0b25lID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoS2V5c3RvbmVDb250ZXh0KTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VLZXlzdG9uZSBtdXN0IGJlIGNhbGxlZCBpbnNpZGUgYSBLZXlzdG9uZVByb3ZpZGVyIGNvbXBvbmVudCcpO1xuICB9XG5cbiAgaWYgKHZhbHVlLmFkbWluTWV0YS5zdGF0ZSA9PT0gJ2Vycm9yJykge1xuICAgIC8vIElmIHdlIGdldCBhbiBcIkFjY2VzcyBkZW5pZWRcIiBlcnJvciwgaXQgcHJvYmFibHkgbWVhbnMgdGhlIHVzZXIgZG9lc24ndCBoYXZlIGFjY2VzcyB0byB0aGVcbiAgICAvLyBhZG1pbk1ldGEgYnV0IGhhcyBuYXZpZ2F0ZWQgKHByb2JhYmx5IGNsaWVudC1zaWRlKSB0byBhIHBhZ2UgdGhhdCByZXF1aXJlcyBpdC4gV2UgcmVsb2FkXG4gICAgLy8gdGhlIHBhZ2Ugc28gdGhlIHNlcnZlci1zaWRlIGFjY2VzcyBjb250cm9sIGNhbiBydW4gd2hpY2ggc2hvdWxkIGJvdW5jZSB0aGVtIHRvIHRoZSByaWdodFxuICAgIC8vIHBsYWNlIChvciBkaXNwbGF5IHRoZSBuby1hY2Nlc3MgcGFnZSlcbiAgICBpZiAodmFsdWUuYWRtaW5NZXRhLmVycm9yLm1lc3NhZ2UgPT09ICdBY2Nlc3MgZGVuaWVkJykge1xuICAgICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuICAgIH1cblxuICAgIHRocm93IG5ldyBFcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgd2hlbiBsb2FkaW5nIEFkbWluIE1ldGFkYXRhJyk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGFkbWluQ29uZmlnOiB2YWx1ZS5hZG1pbkNvbmZpZyxcbiAgICBhZG1pbk1ldGE6IHZhbHVlLmFkbWluTWV0YS52YWx1ZSxcbiAgICBhdXRoZW50aWNhdGVkSXRlbTogdmFsdWUuYXV0aGVudGljYXRlZEl0ZW0sXG4gICAgdmlzaWJsZUxpc3RzOiB2YWx1ZS52aXNpYmxlTGlzdHMsXG4gICAgY3JlYXRlVmlld0ZpZWxkTW9kZXM6IHZhbHVlLmNyZWF0ZVZpZXdGaWVsZE1vZGVzLFxuICAgIGFwaVBhdGg6IHZhbHVlLmFwaVBhdGhcbiAgfTtcbn07XG5jb25zdCB1c2VSZWluaXRDb250ZXh0ID0gKCkgPT4ge1xuICBjb25zdCB2YWx1ZSA9IFJlYWN0LnVzZUNvbnRleHQoS2V5c3RvbmVDb250ZXh0KTtcblxuICBpZiAoIXZhbHVlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCd1c2VSZWluaXRDb250ZXh0IG11c3QgYmUgY2FsbGVkIGluc2lkZSBhIEtleXN0b25lUHJvdmlkZXIgY29tcG9uZW50Jyk7XG4gIH1cblxuICByZXR1cm4gdmFsdWUucmVpbml0Q29udGV4dDtcbn07XG5jb25zdCB1c2VSYXdLZXlzdG9uZSA9ICgpID0+IHtcbiAgY29uc3QgdmFsdWUgPSBSZWFjdC51c2VDb250ZXh0KEtleXN0b25lQ29udGV4dCk7XG5cbiAgaWYgKCF2YWx1ZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigndXNlUmF3S2V5c3RvbmUgbXVzdCBiZSBjYWxsZWQgaW5zaWRlIGEgS2V5c3RvbmVQcm92aWRlciBjb21wb25lbnQnKTtcbiAgfVxuXG4gIHJldHVybiB2YWx1ZTtcbn07XG5jb25zdCB1c2VMaXN0ID0ga2V5ID0+IHtcbiAgY29uc3Qge1xuICAgIGFkbWluTWV0YToge1xuICAgICAgbGlzdHNcbiAgICB9XG4gIH0gPSB1c2VLZXlzdG9uZSgpO1xuXG4gIGlmIChsaXN0c1trZXldKSB7XG4gICAgcmV0dXJuIGxpc3RzW2tleV07XG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGxpc3Qga2V5IHByb3ZpZGVkIHRvIHVzZUxpc3Q6ICR7a2V5fWApO1xuICB9XG59O1xuXG5leHBvcnRzLktleXN0b25lUHJvdmlkZXIgPSBLZXlzdG9uZVByb3ZpZGVyO1xuZXhwb3J0cy51c2VLZXlzdG9uZSA9IHVzZUtleXN0b25lO1xuZXhwb3J0cy51c2VMaXN0ID0gdXNlTGlzdDtcbmV4cG9ydHMudXNlUmF3S2V5c3RvbmUgPSB1c2VSYXdLZXlzdG9uZTtcbmV4cG9ydHMudXNlUmVpbml0Q29udGV4dCA9IHVzZVJlaW5pdENvbnRleHQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG52YXIgcm91dGVyID0gcmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcbnZhciBMaW5rJDEgPSByZXF1aXJlKCduZXh0L2xpbmsnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wRGVmYXVsdCAoZSkgeyByZXR1cm4gZSAmJiBlLl9fZXNNb2R1bGUgPyBlIDogeyAnZGVmYXVsdCc6IGUgfTsgfVxuXG52YXIgTGlua19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoTGluayQxKTtcbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJocmVmXCIsIFwiYXNcIiwgXCJyZXBsYWNlXCIsIFwic2Nyb2xsXCIsIFwic2hhbGxvd1wiLCBcInByZWZldGNoXCJdO1xuY29uc3QgTGluayA9IF9yZWYgPT4ge1xuICBsZXQge1xuICAgIGhyZWYsXG4gICAgYXMsXG4gICAgcmVwbGFjZSxcbiAgICBzY3JvbGwsXG4gICAgc2hhbGxvdyxcbiAgICBwcmVmZXRjaFxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChMaW5rX19kZWZhdWx0W1wiZGVmYXVsdFwiXSwge1xuICAgIGhyZWY6IGhyZWYsXG4gICAgYXM6IGFzLFxuICAgIHJlcGxhY2U6IHJlcGxhY2UsXG4gICAgc2Nyb2xsOiBzY3JvbGwsXG4gICAgc2hhbGxvdzogc2hhbGxvdyxcbiAgICBwcmVmZXRjaDogcHJlZmV0Y2hcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0W1wiZGVmYXVsdFwiXS5jcmVhdGVFbGVtZW50KFwiYVwiLCBwcm9wcykpO1xufTtcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdSb3V0ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcm91dGVyLlJvdXRlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZVJvdXRlcicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByb3V0ZXIuY3JlYXRlUm91dGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJvdXRlci5tYWtlUHVibGljUm91dGVySW5zdGFuY2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VSb3V0ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcm91dGVyLnVzZVJvdXRlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3dpdGhSb3V0ZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcm91dGVyLndpdGhSb3V0ZXI7IH1cbn0pO1xuZXhwb3J0cy5MaW5rID0gTGluaztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJjaGlsZHJlblwiXTtcbi8qKlxuICogVGhpcyBpcyB0aGUgY29tcG9uZW50IHlvdSBzaG91bGQgdXNlIHdoZW4geW91IHdhbnQgdGhlIHN0YW5kYXJkIHBhZGRpbmcgYXJvdW5kIGEgY2VsbCB2YWx1ZVxuICovXG5cbmNvbnN0IENlbGxDb250YWluZXIgPSBfcmVmID0+IHtcbiAgbGV0IHtcbiAgICBjaGlsZHJlblxuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qge1xuICAgIHNwYWNpbmdcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjc3M6IHtcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcuc21hbGxcbiAgICB9XG4gIH0sIHByb3BzKSwgY2hpbGRyZW4pO1xufTtcblxuZXhwb3J0cy5DZWxsQ29udGFpbmVyID0gQ2VsbENvbnRhaW5lcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9leHRlbmRzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9leHRlbmRzJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZSA9IHJlcXVpcmUoJy4uL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcblxuLyoqXG4gKiBUaGlzIGlzIHRoZSBjb21wb25lbnQgeW91IHNob3VsZCB1c2Ugd2hlbiBsaW5raW5nIGEgQ2VsbCB0byBhbiBpdGVtIChpLmUgd2hlbiB0aGUgQ2VsbCBzdXBwb3J0c1xuICogdGhlIGxpbmtUbyBwcm9wKVxuICovXG5cbmNvbnN0IENlbGxMaW5rID0gcHJvcHMgPT4ge1xuICBjb25zdCB7XG4gICAgY29sb3JzLFxuICAgIHNwYWNpbmdcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcbiAgcmV0dXJuIGNvcmUuanN4KGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluaywgX2V4dGVuZHMoe1xuICAgIGNzczoge1xuICAgICAgY29sb3I6IGNvbG9ycy5mb3JlZ3JvdW5kLFxuICAgICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICAgIHBhZGRpbmc6IHNwYWNpbmcuc21hbGwsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnLFxuICAgICAgJzpob3Zlcic6IHtcbiAgICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgICB9XG4gICAgfVxuICB9LCBwcm9wcykpO1xufTtcblxuZXhwb3J0cy5DZWxsTGluayA9IENlbGxMaW5rO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGlzRGVlcEVxdWFsID0gcmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgbW9kYWxzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xudmFyIHRvYXN0ID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XG52YXIgbG9hZGluZyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9sb2FkaW5nJyk7XG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcbnZhciBhZG1pblVpX2NvbnRleHRfZGlzdF9rZXlzdG9uZSA9IHJlcXVpcmUoJy4uL2FkbWluLXVpL2NvbnRleHQvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XG52YXIgRmllbGRzID0gcmVxdWlyZSgnLi9GaWVsZHMtNGFmYjM4ZjAuY2pzLmRldi5qcycpO1xudmFyIEdyYXBoUUxFcnJvck5vdGljZSA9IHJlcXVpcmUoJy4vR3JhcGhRTEVycm9yTm90aWNlLTc2ZmY5NmRkLmNqcy5kZXYuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBpc0RlZXBFcXVhbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaXNEZWVwRXF1YWwpO1xuXG4vKiogQGpzeFJ1bnRpbWUgY2xhc3NpYyAqL1xuZnVuY3Rpb24gQ3JlYXRlSXRlbURyYXdlcih7XG4gIGxpc3RLZXksXG4gIG9uQ2xvc2UsXG4gIG9uQ3JlYXRlXG59KSB7XG4gIGNvbnN0IHtcbiAgICBjcmVhdGVWaWV3RmllbGRNb2Rlc1xuICB9ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlS2V5c3RvbmUoKTtcbiAgY29uc3QgbGlzdCA9IGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lLnVzZUxpc3QobGlzdEtleSk7XG4gIGNvbnN0IHRvYXN0cyA9IHRvYXN0LnVzZVRvYXN0cygpO1xuICBjb25zdCBbY3JlYXRlSXRlbSwge1xuICAgIGxvYWRpbmc6IGxvYWRpbmckMSxcbiAgICBlcnJvclxuICB9XSA9IGNsaWVudC51c2VNdXRhdGlvbihjbGllbnQuZ3FsYG11dGF0aW9uKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlSW5wdXROYW1lfSEpIHtcbiAgICAgIGl0ZW06ICR7bGlzdC5ncWxOYW1lcy5jcmVhdGVNdXRhdGlvbk5hbWV9KGRhdGE6ICRkYXRhKSB7XG4gICAgICAgIGlkXG4gICAgICAgIGxhYmVsOiAke2xpc3QubGFiZWxGaWVsZH1cbiAgICB9XG4gIH1gKTtcbiAgY29uc3QgW3ZhbHVlLCBzZXRWYWx1ZV0gPSBSZWFjdC51c2VTdGF0ZSgoKSA9PiB7XG4gICAgY29uc3QgdmFsdWUgPSB7fTtcbiAgICBPYmplY3Qua2V5cyhsaXN0LmZpZWxkcykuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xuICAgICAgdmFsdWVbZmllbGRQYXRoXSA9IHtcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGxpc3QuZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci5kZWZhdWx0VmFsdWVcbiAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHZhbHVlO1xuICB9KTtcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGludmFsaWRGaWVsZHMgPSBuZXcgU2V0KCk7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHZhbHVlW2ZpZWxkUGF0aF0udmFsdWU7XG4gICAgICBjb25zdCB2YWxpZGF0ZUZuID0gbGlzdC5maWVsZHNbZmllbGRQYXRoXS5jb250cm9sbGVyLnZhbGlkYXRlO1xuXG4gICAgICBpZiAodmFsaWRhdGVGbikge1xuICAgICAgICBjb25zdCByZXN1bHQgPSB2YWxpZGF0ZUZuKHZhbCk7XG5cbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBpbnZhbGlkRmllbGRzLmFkZChmaWVsZFBhdGgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGludmFsaWRGaWVsZHM7XG4gIH0sIFtsaXN0LCB2YWx1ZV0pO1xuICBjb25zdCBbZm9yY2VWYWxpZGF0aW9uLCBzZXRGb3JjZVZhbGlkYXRpb25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICByZXR1cm4gY29yZS5qc3gobW9kYWxzLkRyYXdlciwge1xuICAgIHRpdGxlOiBgQ3JlYXRlICR7bGlzdC5zaW5ndWxhcn1gLFxuICAgIHdpZHRoOiBcIndpZGVcIixcbiAgICBhY3Rpb25zOiB7XG4gICAgICBjb25maXJtOiB7XG4gICAgICAgIGxhYmVsOiBgQ3JlYXRlICR7bGlzdC5zaW5ndWxhcn1gLFxuICAgICAgICBsb2FkaW5nOiBsb2FkaW5nJDEsXG4gICAgICAgIGFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgIGNvbnN0IG5ld0ZvcmNlVmFsaWRhdGlvbiA9IGludmFsaWRGaWVsZHMuc2l6ZSAhPT0gMDtcbiAgICAgICAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcbiAgICAgICAgICBpZiAobmV3Rm9yY2VWYWxpZGF0aW9uKSByZXR1cm47XG4gICAgICAgICAgY29uc3QgZGF0YSA9IHt9O1xuICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QuZmllbGRzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGNvbnRyb2xsZXJcbiAgICAgICAgICAgIH0gPSBsaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xuICAgICAgICAgICAgY29uc3Qgc2VyaWFsaXplZCA9IGNvbnRyb2xsZXIuc2VyaWFsaXplKHZhbHVlW2ZpZWxkUGF0aF0udmFsdWUpO1xuXG4gICAgICAgICAgICBpZiAoIWlzRGVlcEVxdWFsX19kZWZhdWx0W1wiZGVmYXVsdFwiXShzZXJpYWxpemVkLCBjb250cm9sbGVyLnNlcmlhbGl6ZShjb250cm9sbGVyLmRlZmF1bHRWYWx1ZSkpKSB7XG4gICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oZGF0YSwgc2VyaWFsaXplZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgY3JlYXRlSXRlbSh7XG4gICAgICAgICAgICB2YXJpYWJsZXM6IHtcbiAgICAgICAgICAgICAgZGF0YVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLnRoZW4oKHtcbiAgICAgICAgICAgIGRhdGFcbiAgICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBsYWJlbCA9IGRhdGEuaXRlbS5sYWJlbCB8fCBkYXRhLml0ZW0uaWQ7XG4gICAgICAgICAgICBvbkNyZWF0ZSh7XG4gICAgICAgICAgICAgIGlkOiBkYXRhLml0ZW0uaWQsXG4gICAgICAgICAgICAgIGxhYmVsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgICAgIHRpdGxlOiBsYWJlbCxcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ0NyZWF0ZWQgU3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge30pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2FuY2VsOiB7XG4gICAgICAgIGxhYmVsOiAnQ2FuY2VsJyxcbiAgICAgICAgYWN0aW9uOiBvbkNsb3NlXG4gICAgICB9XG4gICAgfVxuICB9LCBjcmVhdGVWaWV3RmllbGRNb2Rlcy5zdGF0ZSA9PT0gJ2Vycm9yJyAmJiBjb3JlLmpzeChHcmFwaFFMRXJyb3JOb3RpY2UuR3JhcGhRTEVycm9yTm90aWNlLCB7XG4gICAgbmV0d29ya0Vycm9yOiBjcmVhdGVWaWV3RmllbGRNb2Rlcy5lcnJvciBpbnN0YW5jZW9mIEVycm9yID8gY3JlYXRlVmlld0ZpZWxkTW9kZXMuZXJyb3IgOiB1bmRlZmluZWQsXG4gICAgZXJyb3JzOiBjcmVhdGVWaWV3RmllbGRNb2Rlcy5lcnJvciBpbnN0YW5jZW9mIEVycm9yID8gdW5kZWZpbmVkIDogY3JlYXRlVmlld0ZpZWxkTW9kZXMuZXJyb3JcbiAgfSksIGNyZWF0ZVZpZXdGaWVsZE1vZGVzLnN0YXRlID09PSAnbG9hZGluZycgJiYgY29yZS5qc3gobG9hZGluZy5Mb2FkaW5nRG90cywge1xuICAgIGxhYmVsOiBcIkxvYWRpbmcgY3JlYXRlIGZvcm1cIlxuICB9KSwgZXJyb3IgJiYgY29yZS5qc3goR3JhcGhRTEVycm9yTm90aWNlLkdyYXBoUUxFcnJvck5vdGljZSwge1xuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvcixcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXG4gIH0pLCBjb3JlLmpzeChjb3JlLkJveCwge1xuICAgIHBhZGRpbmdZOiBcInhsYXJnZVwiXG4gIH0sIGNvcmUuanN4KEZpZWxkcy5GaWVsZHMsIHtcbiAgICBmaWVsZHM6IGxpc3QuZmllbGRzLFxuICAgIGZpZWxkTW9kZXM6IGNyZWF0ZVZpZXdGaWVsZE1vZGVzLnN0YXRlID09PSAnbG9hZGVkJyA/IGNyZWF0ZVZpZXdGaWVsZE1vZGVzLmxpc3RzW2xpc3Qua2V5XSA6IG51bGwsXG4gICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXG4gICAgaW52YWxpZEZpZWxkczogaW52YWxpZEZpZWxkcyxcbiAgICB2YWx1ZTogdmFsdWUsXG4gICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKGdldE5ld1ZhbHVlID0+IHtcbiAgICAgIHNldFZhbHVlKG9sZFZhbHVlcyA9PiBnZXROZXdWYWx1ZShvbGRWYWx1ZXMpKTtcbiAgICB9LCBbXSlcbiAgfSkpKTtcbn1cblxuZXhwb3J0cy5DcmVhdGVJdGVtRHJhd2VyID0gQ3JlYXRlSXRlbURyYXdlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbmNvbnN0IFJlbmRlckZpZWxkID0gLyojX19QVVJFX18qL1JlYWN0Lm1lbW8oZnVuY3Rpb24gUmVuZGVyRmllbGQoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIGF1dG9Gb2N1cyxcbiAgZm9yY2VWYWxpZGF0aW9uLFxuICBvbkNoYW5nZVxufSkge1xuICByZXR1cm4gY29yZS5qc3goZmllbGQudmlld3MuRmllbGQsIHtcbiAgICBmaWVsZDogZmllbGQuY29udHJvbGxlcixcbiAgICBvbkNoYW5nZTogUmVhY3QudXNlTWVtbygoKSA9PiB7XG4gICAgICBpZiAob25DaGFuZ2UgPT09IHVuZGVmaW5lZCkgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgIHJldHVybiB2YWx1ZSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKHZhbCA9PiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbCksIHt9LCB7XG4gICAgICAgICAgW2ZpZWxkLmNvbnRyb2xsZXIucGF0aF06IHtcbiAgICAgICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgICAgICB2YWx1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuICAgICAgfTtcbiAgICB9LCBbb25DaGFuZ2UsIGZpZWxkLmNvbnRyb2xsZXIucGF0aF0pLFxuICAgIHZhbHVlOiB2YWx1ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvblxuICB9KTtcbn0pO1xuZnVuY3Rpb24gRmllbGRzKHtcbiAgZmllbGRzLFxuICB2YWx1ZSxcbiAgZmllbGRNb2RlcyxcbiAgZm9yY2VWYWxpZGF0aW9uLFxuICBpbnZhbGlkRmllbGRzLFxuICBvbkNoYW5nZVxufSkge1xuICBjb25zdCByZW5kZXJlZEZpZWxkcyA9IE9iamVjdC5rZXlzKGZpZWxkcykuZmlsdGVyKGZpZWxkUGF0aCA9PiBmaWVsZE1vZGVzID09PSBudWxsIHx8IGZpZWxkTW9kZXNbZmllbGRQYXRoXSAhPT0gJ2hpZGRlbicpLm1hcCgoZmllbGRQYXRoLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2ZpZWxkUGF0aF07XG4gICAgY29uc3QgdmFsID0gdmFsdWVbZmllbGRQYXRoXTtcbiAgICBjb25zdCBmaWVsZE1vZGUgPSBmaWVsZE1vZGVzID09PSBudWxsID8gJ2VkaXQnIDogZmllbGRNb2Rlc1tmaWVsZFBhdGhdO1xuXG4gICAgaWYgKHZhbC5raW5kID09PSAnZXJyb3InKSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgZmllbGQubGFiZWwsIFwiOiBcIiwgY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICAgICAgY3NzOiB7XG4gICAgICAgICAgY29sb3I6ICdyZWQnXG4gICAgICAgIH1cbiAgICAgIH0sIHZhbC5lcnJvcnNbMF0ubWVzc2FnZSkpO1xuICAgIH1cblxuICAgIHJldHVybiBjb3JlLmpzeChSZW5kZXJGaWVsZCwge1xuICAgICAga2V5OiBmaWVsZFBhdGgsXG4gICAgICBmaWVsZDogZmllbGQsXG4gICAgICB2YWx1ZTogdmFsLnZhbHVlLFxuICAgICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24gJiYgaW52YWxpZEZpZWxkcy5oYXMoZmllbGRQYXRoKSxcbiAgICAgIG9uQ2hhbmdlOiBmaWVsZE1vZGUgPT09ICdlZGl0JyA/IG9uQ2hhbmdlIDogdW5kZWZpbmVkLFxuICAgICAgYXV0b0ZvY3VzOiBpbmRleCA9PT0gMFxuICAgIH0pO1xuICB9KTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgcmVuZGVyZWRGaWVsZHMsIHJlbmRlcmVkRmllbGRzLmxlbmd0aCA9PT0gMCAmJiAnVGhlcmUgYXJlIG5vIGZpZWxkcyB0aGF0IHlvdSBjYW4gcmVhZCBvciBlZGl0Jyk7XG59XG5cbmV4cG9ydHMuRmllbGRzID0gRmllbGRzO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgbm90aWNlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBSZWFjdF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoUmVhY3QpO1xuXG5mdW5jdGlvbiBHcmFwaFFMRXJyb3JOb3RpY2Uoe1xuICBlcnJvcnMsXG4gIG5ldHdvcmtFcnJvclxufSkge1xuICBpZiAobmV0d29ya0Vycm9yKSB7XG4gICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChub3RpY2UuTm90aWNlLCB7XG4gICAgICB0b25lOiBcIm5lZ2F0aXZlXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IFwibGFyZ2VcIlxuICAgIH0sIG5ldHdvcmtFcnJvci5tZXNzYWdlKTtcbiAgfVxuXG4gIGlmIChlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHRbXCJkZWZhdWx0XCJdLmNyZWF0ZUVsZW1lbnQoY29yZS5TdGFjaywge1xuICAgICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgICBtYXJnaW5Cb3R0b206IFwibGFyZ2VcIlxuICAgIH0sIGVycm9ycy5tYXAoZXJyID0+IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdFtcImRlZmF1bHRcIl0uY3JlYXRlRWxlbWVudChub3RpY2UuTm90aWNlLCB7XG4gICAgICB0b25lOiBcIm5lZ2F0aXZlXCJcbiAgICB9LCBlcnIubWVzc2FnZSkpKTtcbiAgfVxuXG4gIHJldHVybiBudWxsO1xufVxuXG5leHBvcnRzLkdyYXBoUUxFcnJvck5vdGljZSA9IEdyYXBoUUxFcnJvck5vdGljZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGJ1dHRvbiA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9idXR0b24nKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcblxuLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbmNvbnN0IEVORF9TRVNTSU9OID0gY2xpZW50LmdxbGBcbiAgbXV0YXRpb24gRW5kU2Vzc2lvbiB7XG4gICAgZW5kU2Vzc2lvblxuICB9XG5gO1xuXG5jb25zdCBTaWdub3V0QnV0dG9uID0gKHtcbiAgY2hpbGRyZW5cbn0pID0+IHtcbiAgY29uc3QgW2VuZFNlc3Npb24sIHtcbiAgICBsb2FkaW5nLFxuICAgIGRhdGFcbiAgfV0gPSBjbGllbnQudXNlTXV0YXRpb24oRU5EX1NFU1NJT04pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChkYXRhICE9PSBudWxsICYmIGRhdGEgIT09IHZvaWQgMCAmJiBkYXRhLmVuZFNlc3Npb24pIHtcbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICB9XG4gIH0sIFtkYXRhXSk7XG4gIHJldHVybiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGlzTG9hZGluZzogbG9hZGluZyxcbiAgICBvbkNsaWNrOiAoKSA9PiBlbmRTZXNzaW9uKClcbiAgfSwgY2hpbGRyZW4gfHwgJ1NpZ24gb3V0Jyk7XG59O1xuXG5leHBvcnRzLlNpZ25vdXRCdXR0b24gPSBTaWdub3V0QnV0dG9uO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcblxuY29uc3Qgc3RhdGljQWRtaW5NZXRhUXVlcnkgPSBjbGllbnQuZ3FsYFxuICBxdWVyeSBTdGF0aWNBZG1pbk1ldGEge1xuICAgIGtleXN0b25lIHtcbiAgICAgIF9fdHlwZW5hbWVcbiAgICAgIGFkbWluTWV0YSB7XG4gICAgICAgIF9fdHlwZW5hbWVcbiAgICAgICAgZW5hYmxlU2lnbm91dFxuICAgICAgICBlbmFibGVTZXNzaW9uSXRlbVxuICAgICAgICBsaXN0cyB7XG4gICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgIGtleVxuICAgICAgICAgIGl0ZW1RdWVyeU5hbWVcbiAgICAgICAgICBsaXN0UXVlcnlOYW1lXG4gICAgICAgICAgaW5pdGlhbFNvcnQge1xuICAgICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgICAgZmllbGRcbiAgICAgICAgICAgIGRpcmVjdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgICBwYXRoXG4gICAgICAgICAgbGFiZWxcbiAgICAgICAgICBzaW5ndWxhclxuICAgICAgICAgIHBsdXJhbFxuICAgICAgICAgIGRlc2NyaXB0aW9uXG4gICAgICAgICAgaW5pdGlhbENvbHVtbnNcbiAgICAgICAgICBwYWdlU2l6ZVxuICAgICAgICAgIGxhYmVsRmllbGRcbiAgICAgICAgICBmaWVsZHMge1xuICAgICAgICAgICAgX190eXBlbmFtZVxuICAgICAgICAgICAgcGF0aFxuICAgICAgICAgICAgbGFiZWxcbiAgICAgICAgICAgIGZpZWxkTWV0YVxuICAgICAgICAgICAgdmlld3NJbmRleFxuICAgICAgICAgICAgY3VzdG9tVmlld3NJbmRleFxuICAgICAgICAgICAgc2VhcmNoXG4gICAgICAgICAgICBpdGVtVmlldyB7XG4gICAgICAgICAgICAgIGZpZWxkTW9kZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYDsgLy8gZ2VuZXJhdGVkIGJ5IGh0dHBzOi8vZ3JhcGhxbC1jb2RlLWdlbmVyYXRvci5jb20gd2l0aCB0aGVzZSBvcHRpb25zOlxuLy8gZ2VuZXJhdGVzOlxuLy8gICB0eXBlcy50czpcbi8vICAgICBwbHVnaW5zOlxuLy8gICAgICAgLSB0eXBlc2NyaXB0LW9wZXJhdGlvbnM6XG4vLyAgICAgICAgICAgbmFtaW5nQ29udmVudGlvbjoga2VlcFxuLy8gICAgICAgLSB0eXBlc2NyaXB0OlxuLy8gICAgICAgICAgIGVudW1zQXNUeXBlczogdHJ1ZVxuLy8gICAgICAgICAgIG5vbk9wdGlvbmFsVHlwZW5hbWU6IHRydWVcbi8vICAgICAgICAgICBuYW1pbmdDb252ZW50aW9uOiBrZWVwXG4vLyAgICAgICAgICAgbm9FeHBvcnQ6IHRydWVcbi8vICAgICAgICAgICBhdm9pZE9wdGlvbmFsczogdHJ1ZVxuLy8gICAgICAgICAgIHNjYWxhcnM6XG4vLyAgICAgICAgICAgICBKU09OOiBKU09OVmFsdWVcblxuZXhwb3J0cy5zdGF0aWNBZG1pbk1ldGFRdWVyeSA9IHN0YXRpY0FkbWluTWV0YVF1ZXJ5O1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG4vLyBUT0RPOiBkb24ndCBkdXBsaWNhdGUgdGhpcyBiZXR3ZWVuIGhlcmUgYW5kIHBhY2thZ2VzL2tleXN0b25lL0xpc3RUeXBlcy9saXN0LmpzXG5mdW5jdGlvbiBnZXRHcWxOYW1lcyh7XG4gIGxpc3RLZXksXG4gIHBsdXJhbEdyYXBoUUxOYW1lXG59KSB7XG4gIGNvbnN0IGxvd2VyUGx1cmFsTmFtZSA9IHBsdXJhbEdyYXBoUUxOYW1lLnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBwbHVyYWxHcmFwaFFMTmFtZS5zbGljZSgxKTtcbiAgY29uc3QgbG93ZXJTaW5ndWxhck5hbWUgPSBsaXN0S2V5LnNsaWNlKDAsIDEpLnRvTG93ZXJDYXNlKCkgKyBsaXN0S2V5LnNsaWNlKDEpO1xuICByZXR1cm4ge1xuICAgIG91dHB1dFR5cGVOYW1lOiBsaXN0S2V5LFxuICAgIGl0ZW1RdWVyeU5hbWU6IGxvd2VyU2luZ3VsYXJOYW1lLFxuICAgIGxpc3RRdWVyeU5hbWU6IGxvd2VyUGx1cmFsTmFtZSxcbiAgICBsaXN0UXVlcnlDb3VudE5hbWU6IGAke2xvd2VyUGx1cmFsTmFtZX1Db3VudGAsXG4gICAgbGlzdE9yZGVyTmFtZTogYCR7bGlzdEtleX1PcmRlckJ5SW5wdXRgLFxuICAgIGRlbGV0ZU11dGF0aW9uTmFtZTogYGRlbGV0ZSR7bGlzdEtleX1gLFxuICAgIHVwZGF0ZU11dGF0aW9uTmFtZTogYHVwZGF0ZSR7bGlzdEtleX1gLFxuICAgIGNyZWF0ZU11dGF0aW9uTmFtZTogYGNyZWF0ZSR7bGlzdEtleX1gLFxuICAgIGRlbGV0ZU1hbnlNdXRhdGlvbk5hbWU6IGBkZWxldGUke3BsdXJhbEdyYXBoUUxOYW1lfWAsXG4gICAgdXBkYXRlTWFueU11dGF0aW9uTmFtZTogYHVwZGF0ZSR7cGx1cmFsR3JhcGhRTE5hbWV9YCxcbiAgICBjcmVhdGVNYW55TXV0YXRpb25OYW1lOiBgY3JlYXRlJHtwbHVyYWxHcmFwaFFMTmFtZX1gLFxuICAgIHdoZXJlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVdoZXJlSW5wdXRgLFxuICAgIHdoZXJlVW5pcXVlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVdoZXJlVW5pcXVlSW5wdXRgLFxuICAgIHVwZGF0ZUlucHV0TmFtZTogYCR7bGlzdEtleX1VcGRhdGVJbnB1dGAsXG4gICAgY3JlYXRlSW5wdXROYW1lOiBgJHtsaXN0S2V5fUNyZWF0ZUlucHV0YCxcbiAgICB1cGRhdGVNYW55SW5wdXROYW1lOiBgJHtsaXN0S2V5fVVwZGF0ZUFyZ3NgLFxuICAgIHJlbGF0ZVRvTWFueUZvckNyZWF0ZUlucHV0TmFtZTogYCR7bGlzdEtleX1SZWxhdGVUb01hbnlGb3JDcmVhdGVJbnB1dGAsXG4gICAgcmVsYXRlVG9NYW55Rm9yVXBkYXRlSW5wdXROYW1lOiBgJHtsaXN0S2V5fVJlbGF0ZVRvTWFueUZvclVwZGF0ZUlucHV0YCxcbiAgICByZWxhdGVUb09uZUZvckNyZWF0ZUlucHV0TmFtZTogYCR7bGlzdEtleX1SZWxhdGVUb09uZUZvckNyZWF0ZUlucHV0YCxcbiAgICByZWxhdGVUb09uZUZvclVwZGF0ZUlucHV0TmFtZTogYCR7bGlzdEtleX1SZWxhdGVUb09uZUZvclVwZGF0ZUlucHV0YFxuICB9O1xufVxuXG5leHBvcnRzLmdldEdxbE5hbWVzID0gZ2V0R3FsTmFtZXM7XG4iLCIndXNlIHN0cmljdCc7XG5cbmZ1bmN0aW9uIGRhdGFHZXR0ZXJXaXRoTm9FcnJvcnMoZGF0YSwgcGF0aCkge1xuICByZXR1cm4ge1xuICAgIGRhdGEsXG4gICAgcGF0aCxcblxuICAgIGdldChmaWVsZCkge1xuICAgICAgdmFyIF9kYXRhJGZpZWxkO1xuXG4gICAgICByZXR1cm4gZGF0YUdldHRlcldpdGhOb0Vycm9ycygoX2RhdGEkZmllbGQgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFbZmllbGRdKSAhPT0gbnVsbCAmJiBfZGF0YSRmaWVsZCAhPT0gdm9pZCAwID8gX2RhdGEkZmllbGQgOiBudWxsLCBwYXRoLmNvbmNhdChmaWVsZCkpO1xuICAgIH1cblxuICB9O1xufVxuXG5mdW5jdGlvbiBkYXRhR2V0dGVyV2l0aEVycm9ycyhkYXRhLCBlcnJvcnMsIHBhdGgpIHtcbiAgcmV0dXJuIHtcbiAgICBkYXRhLFxuICAgIGVycm9ycyxcbiAgICBwYXRoLFxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICB2YXIgX2RhdGEkZmllbGQyO1xuXG4gICAgICBjb25zdCBuZXdQYXRoID0gcGF0aC5jb25jYXQoZmllbGQpO1xuICAgICAgY29uc3QgbmV3SXRlbSA9IChfZGF0YSRmaWVsZDIgPSBkYXRhID09PSBudWxsIHx8IGRhdGEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRhdGFbZmllbGRdKSAhPT0gbnVsbCAmJiBfZGF0YSRmaWVsZDIgIT09IHZvaWQgMCA/IF9kYXRhJGZpZWxkMiA6IG51bGw7XG4gICAgICBsZXQgZXJyb3JzRm9yRmllbGQgPSBlcnJvcnMuZmlsdGVyKGVycm9yID0+IHtcbiAgICAgICAgaWYgKGVycm9yLnBhdGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZXJyb3JQYXRoID0gZXJyb3IucGF0aDtcbiAgICAgICAgcmV0dXJuIG5ld1BhdGguZXZlcnkoKHZhbHVlLCBpbmRleCkgPT4gZXJyb3JQYXRoW2luZGV4XSA9PT0gdW5kZWZpbmVkIHx8IGVycm9yUGF0aFtpbmRleF0gPT09IHZhbHVlKTtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoZXJyb3JzRm9yRmllbGQubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBkYXRhR2V0dGVyV2l0aEVycm9ycyhuZXdJdGVtLCBlcnJvcnMsIG5ld1BhdGgpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGF0YUdldHRlcldpdGhOb0Vycm9ycyhuZXdJdGVtLCBuZXdQYXRoKTtcbiAgICB9XG5cbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKSB7XG4gIGlmIChlcnJvcnMgIT09IG51bGwgJiYgZXJyb3JzICE9PSB2b2lkIDAgJiYgZXJyb3JzLmxlbmd0aCkge1xuICAgIHJldHVybiBkYXRhR2V0dGVyV2l0aEVycm9ycyhkYXRhLCBlcnJvcnMsIFtdKTtcbiAgfVxuXG4gIHJldHVybiBkYXRhR2V0dGVyV2l0aE5vRXJyb3JzKGRhdGEsIFtdKTtcbn1cblxuZXhwb3J0cy5tYWtlRGF0YUdldHRlciA9IG1ha2VEYXRhR2V0dGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG52YXIgd2Vha01lbW9pemUgPSByZXF1aXJlKCdAZW1vdGlvbi93ZWFrLW1lbW9pemUnKTtcbnZhciBncmFwaHFsID0gcmVxdWlyZSgnZ3JhcGhxbCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIHdlYWtNZW1vaXplX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdCh3ZWFrTWVtb2l6ZSk7XG5cbmZ1bmN0aW9uIGV4dHJhY3RSb290RmllbGRzKHNlbGVjdGVkRmllbGRzLCBzZWxlY3Rpb25TZXQpIHtcbiAgc2VsZWN0aW9uU2V0LnNlbGVjdGlvbnMuZm9yRWFjaChzZWxlY3Rpb24gPT4ge1xuICAgIGlmIChzZWxlY3Rpb24ua2luZCA9PT0gJ0ZpZWxkJykge1xuICAgICAgc2VsZWN0ZWRGaWVsZHMuYWRkKHNlbGVjdGlvbi5hbGlhcyA/IHNlbGVjdGlvbi5hbGlhcy52YWx1ZSA6IHNlbGVjdGlvbi5uYW1lLnZhbHVlKTtcbiAgICB9XG5cbiAgICBpZiAoc2VsZWN0aW9uLmtpbmQgPT09ICdJbmxpbmVGcmFnbWVudCcpIHtcbiAgICAgIGV4dHJhY3RSb290RmllbGRzKHNlbGVjdGVkRmllbGRzLCBzZWxlY3Rpb24uc2VsZWN0aW9uU2V0KTtcbiAgICB9IC8vIEZyYWdtZW50U3ByZWFkIHdpbGwgbmV2ZXIgaGFwcGVuIGZvciB0aGUgdXNlIGNhc2VzIG9mIGdldFJvb3RGaWVsZHNGcm9tU2VsZWN0aW9uXG5cbiAgfSk7XG59XG5cbmNvbnN0IGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlciA9IHdlYWtNZW1vaXplX19kZWZhdWx0W1wiZGVmYXVsdFwiXShjb250cm9sbGVyID0+IHtcbiAgY29uc3QgYXN0ID0gZ3JhcGhxbC5wYXJzZShgZnJhZ21lbnQgWCBvbiBZIHtcbiAgaWRcbiAgJHtjb250cm9sbGVyLmdyYXBocWxTZWxlY3Rpb259XG4gIH1gKTtcbiAgY29uc3Qgc2VsZWN0ZWRGaWVsZHMgPSBuZXcgU2V0KCk7XG4gIGNvbnN0IGZyYWdtZW50Tm9kZSA9IGFzdC5kZWZpbml0aW9uc1swXTtcbiAgZXh0cmFjdFJvb3RGaWVsZHMoc2VsZWN0ZWRGaWVsZHMsIGZyYWdtZW50Tm9kZS5zZWxlY3Rpb25TZXQpO1xuICByZXR1cm4gWy4uLnNlbGVjdGVkRmllbGRzXTtcbn0pO1xuXG5leHBvcnRzLmdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlciA9IGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYXBocWxUc1NjaGVtYSA9IHJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xudmFyIGdyYXBocWxUeXBlSnNvbiA9IHJlcXVpcmUoJ2dyYXBocWwtdHlwZS1qc29uJyk7XG52YXIgR3JhcGhRTFVwbG9hZCA9IHJlcXVpcmUoJ2dyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzJyk7XG52YXIgZ3JhcGhxbCA9IHJlcXVpcmUoJ2dyYXBocWwnKTtcbnZhciBEZWNpbWFsJDEgPSByZXF1aXJlKCdkZWNpbWFsLmpzJyk7XG52YXIgYXBpV2l0aG91dENvbnRleHQgPSByZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xudmFyIGFwaVdpdGhDb250ZXh0ID0gcmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRoLWNvbnRleHQnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbmZ1bmN0aW9uIF9pbnRlcm9wTmFtZXNwYWNlKGUpIHtcbiAgaWYgKGUgJiYgZS5fX2VzTW9kdWxlKSByZXR1cm4gZTtcbiAgdmFyIG4gPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICBpZiAoZSkge1xuICAgIE9iamVjdC5rZXlzKGUpLmZvckVhY2goZnVuY3Rpb24gKGspIHtcbiAgICAgIGlmIChrICE9PSAnZGVmYXVsdCcpIHtcbiAgICAgICAgdmFyIGQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIGspO1xuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkobiwgaywgZC5nZXQgPyBkIDoge1xuICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBlW2tdOyB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIG5bXCJkZWZhdWx0XCJdID0gZTtcbiAgcmV0dXJuIE9iamVjdC5mcmVlemUobik7XG59XG5cbnZhciBncmFwaHFsVHNTY2hlbWFfX25hbWVzcGFjZSA9IC8qI19fUFVSRV9fKi9faW50ZXJvcE5hbWVzcGFjZShncmFwaHFsVHNTY2hlbWEpO1xudmFyIEdyYXBoUUxVcGxvYWRfX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX2ludGVyb3BEZWZhdWx0KEdyYXBoUUxVcGxvYWQpO1xuXG5jb25zdCBKU09OID0gZ3JhcGhxbFRzU2NoZW1hX19uYW1lc3BhY2UuZ3JhcGhxbC5zY2FsYXIoZ3JhcGhxbFR5cGVKc29uLkdyYXBoUUxKU09OKTtcbmNvbnN0IFVwbG9hZCA9IGdyYXBocWxUc1NjaGVtYV9fbmFtZXNwYWNlLmdyYXBocWwuc2NhbGFyKEdyYXBoUUxVcGxvYWRfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKTsgLy8gLSBEZWNpbWFsLmpzIHRocm93cyBvbiBpbnZhbGlkIGlucHV0c1xuLy8gLSBEZWNpbWFsLmpzIGNhbiByZXByZXNlbnQgK0luZmluaXR5IGFuZCAtSW5maW5pdHksIHRoZXNlIGFyZW4ndCB2YWx1ZXMgaW4gUG9zdGdyZXMnIGRlY2ltYWwsXG4vLyAgIE5hTiBpcyBidXQgUHJpc21hIGRvZXNuJ3Qgc3VwcG9ydCBpdFxuLy8gICAuaXNGaW5pdGUgcmVmZXJzIHRvICtJbmZpbml0eSwgLUluZmluaXR5IGFuZCBOYU5cblxuY29uc3QgRGVjaW1hbCA9IGdyYXBocWxUc1NjaGVtYV9fbmFtZXNwYWNlLmdyYXBocWwuc2NhbGFyKG5ldyBncmFwaHFsLkdyYXBoUUxTY2FsYXJUeXBlKHtcbiAgbmFtZTogJ0RlY2ltYWwnLFxuXG4gIHNlcmlhbGl6ZSh2YWx1ZSkge1xuICAgIGlmICghRGVjaW1hbCQxLkRlY2ltYWwuaXNEZWNpbWFsKHZhbHVlKSkge1xuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKGB1bmV4cGVjdGVkIHZhbHVlIHByb3ZpZGVkIHRvIERlY2ltYWwgc2NhbGFyOiAke3ZhbHVlfWApO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZS5zY2FsZVRvUHJpbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHZhbHVlLnRvRml4ZWQodmFsdWUuc2NhbGVUb1ByaW50KTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWUudG9TdHJpbmcoKTtcbiAgfSxcblxuICBwYXJzZUxpdGVyYWwodmFsdWUpIHtcbiAgICBpZiAodmFsdWUua2luZCAhPT0gJ1N0cmluZ1ZhbHVlJykge1xuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEZWNpbWFsIG9ubHkgYWNjZXB0cyB2YWx1ZXMgYXMgc3RyaW5ncycpO1xuICAgIH1cblxuICAgIGxldCBkZWNpbWFsID0gbmV3IERlY2ltYWwkMS5EZWNpbWFsKHZhbHVlLnZhbHVlKTtcblxuICAgIGlmICghZGVjaW1hbC5pc0Zpbml0ZSgpKSB7XG4gICAgICB0aHJvdyBuZXcgZ3JhcGhxbC5HcmFwaFFMRXJyb3IoJ0RlY2ltYWwgdmFsdWVzIG11c3QgYmUgZmluaXRlJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGRlY2ltYWw7XG4gIH0sXG5cbiAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmIChEZWNpbWFsJDEuRGVjaW1hbC5pc0RlY2ltYWwodmFsdWUpKSB7XG4gICAgICBpZiAoIXZhbHVlLmlzRmluaXRlKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEZWNpbWFsIHZhbHVlcyBtdXN0IGJlIGZpbml0ZScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmFsdWU7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGVjaW1hbCBvbmx5IGFjY2VwdHMgdmFsdWVzIGFzIHN0cmluZ3MnKTtcbiAgICB9XG5cbiAgICBsZXQgZGVjaW1hbCA9IG5ldyBEZWNpbWFsJDEuRGVjaW1hbCh2YWx1ZSk7XG5cbiAgICBpZiAoIWRlY2ltYWwuaXNGaW5pdGUoKSkge1xuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEZWNpbWFsIHZhbHVlcyBtdXN0IGJlIGZpbml0ZScpO1xuICAgIH1cblxuICAgIHJldHVybiBkZWNpbWFsO1xuICB9XG5cbn0pKTsgLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vZXhjaXRlbWVudC1lbmdpbmVlci9ncmFwaHFsLWlzby1kYXRlL2Jsb2IvbWFzdGVyL3NyYy91dGlscy92YWxpZGF0b3IuanMjTDEyMVxuLy8gdGhpcyBpcyBhbHNvIHdoYXQgcHJpc21hIHVzZXMgaHR0cHM6Ly9naXRodWIuY29tL3ByaXNtYS9wcmlzbWEvYmxvYi8yMGI1OGZlNjVkNTgxYmNiNDNjMGQ1YzI4ZDRiODljYWJjMmQ5OWIyL3BhY2thZ2VzL2NsaWVudC9zcmMvcnVudGltZS91dGlscy9jb21tb24udHMjTDEyNi1MMTI4XG5cbmNvbnN0IFJGQ18zMzM5X1JFR0VYID0gL14oXFxkezR9LSgwWzEtOV18MVswMTJdKS0oMFsxLTldfFsxMl1bMC05XXwzWzAxXSlUKFswMV1bMC05XXwyWzAtM10pOihbMC01XVswLTldKTooWzAtNV1bMC05XXw2MCkpKFxcLlxcZHsxLH0pPygoW1pdKXwoWyt8LV0oWzAxXVswLTldfDJbMC0zXSk6WzAtNV1bMC05XSkpJC87XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZShpbnB1dCkge1xuICBpZiAoIVJGQ18zMzM5X1JFR0VYLnRlc3QoaW5wdXQpKSB7XG4gICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEYXRlVGltZSBzY2FsYXJzIG11c3QgYmUgaW4gdGhlIGZvcm0gb2YgYSBmdWxsIElTTyA4NjAxIGRhdGUtdGltZSBzdGlybmcnKTtcbiAgfVxuXG4gIGNvbnN0IHBhcnNlZCA9IG5ldyBEYXRlKGlucHV0KTtcblxuICBpZiAoaXNOYU4ocGFyc2VkLnZhbHVlT2YoKSkpIHtcbiAgICB0aHJvdyBuZXcgZ3JhcGhxbC5HcmFwaFFMRXJyb3IoJ0RhdGVUaW1lIHNjYWxhcnMgbXVzdCBiZSBpbiB0aGUgZm9ybSBvZiBhIGZ1bGwgSVNPIDg2MDEgZGF0ZS10aW1lIHN0aXJuZycpO1xuICB9XG5cbiAgcmV0dXJuIHBhcnNlZDtcbn1cblxuY29uc3QgRGF0ZVRpbWUgPSBncmFwaHFsVHNTY2hlbWFfX25hbWVzcGFjZS5ncmFwaHFsLnNjYWxhcihuZXcgZ3JhcGhxbC5HcmFwaFFMU2NhbGFyVHlwZSh7XG4gIG5hbWU6ICdEYXRlVGltZScsXG4gIHNwZWNpZmllZEJ5VXJsOiAnaHR0cHM6Ly9kYXRhdHJhY2tlci5pZXRmLm9yZy9kb2MvaHRtbC9yZmMzMzM5I3NlY3Rpb24tNS42JyxcblxuICBzZXJpYWxpemUodmFsdWUpIHtcbiAgICBpZiAoISh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHx8IGlzTmFOKHZhbHVlLnZhbHVlT2YoKSkpIHtcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcihgdW5leHBlY3RlZCB2YWx1ZSBwcm92aWRlZCB0byBEYXRlVGltZSBzY2FsYXI6ICR7dmFsdWV9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnRvSVNPU3RyaW5nKCk7XG4gIH0sXG5cbiAgcGFyc2VMaXRlcmFsKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlLmtpbmQgIT09ICdTdHJpbmdWYWx1ZScpIHtcbiAgICAgIHRocm93IG5ldyBncmFwaHFsLkdyYXBoUUxFcnJvcignRGF0ZVRpbWUgb25seSBhY2NlcHRzIHZhbHVlcyBhcyBzdHJpbmdzJyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlRGF0ZSh2YWx1ZS52YWx1ZSk7XG4gIH0sXG5cbiAgcGFyc2VWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IGdyYXBocWwuR3JhcGhRTEVycm9yKCdEYXRlVGltZSBvbmx5IGFjY2VwdHMgdmFsdWVzIGFzIHN0cmluZ3MnKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VEYXRlKHZhbHVlKTtcbiAgfVxuXG59KSk7XG5cbnZhciBncmFwaHFsQm91bmRUb0tleXN0b25lQ29udGV4dCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgX19wcm90b19fOiBudWxsLFxuICBKU09OOiBKU09OLFxuICBVcGxvYWQ6IFVwbG9hZCxcbiAgRGVjaW1hbDogRGVjaW1hbCxcbiAgRGF0ZVRpbWU6IERhdGVUaW1lLFxuICBCb29sZWFuOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuLFxuICBGbG9hdDogYXBpV2l0aG91dENvbnRleHQuRmxvYXQsXG4gIElEOiBhcGlXaXRob3V0Q29udGV4dC5JRCxcbiAgSW50OiBhcGlXaXRob3V0Q29udGV4dC5JbnQsXG4gIFN0cmluZzogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nLFxuICAnZW51bSc6IGFwaVdpdGhvdXRDb250ZXh0W1wiZW51bVwiXSxcbiAgZW51bVZhbHVlczogYXBpV2l0aG91dENvbnRleHQuZW51bVZhbHVlcyxcbiAgYXJnOiBhcGlXaXRob3V0Q29udGV4dC5hcmcsXG4gIGlucHV0T2JqZWN0OiBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCxcbiAgbGlzdDogYXBpV2l0aG91dENvbnRleHQubGlzdCxcbiAgbm9uTnVsbDogYXBpV2l0aG91dENvbnRleHQubm9uTnVsbCxcbiAgc2NhbGFyOiBhcGlXaXRob3V0Q29udGV4dC5zY2FsYXIsXG4gIGJpbmRHcmFwaFFMU2NoZW1hQVBJVG9Db250ZXh0OiBncmFwaHFsVHNTY2hlbWEuYmluZEdyYXBoUUxTY2hlbWFBUElUb0NvbnRleHQsXG4gIGZpZWxkOiBhcGlXaXRoQ29udGV4dC5maWVsZCxcbiAgZmllbGRzOiBhcGlXaXRoQ29udGV4dC5maWVsZHMsXG4gICdpbnRlcmZhY2UnOiBhcGlXaXRoQ29udGV4dFtcImludGVyZmFjZVwiXSxcbiAgaW50ZXJmYWNlRmllbGQ6IGFwaVdpdGhDb250ZXh0LmludGVyZmFjZUZpZWxkLFxuICBvYmplY3Q6IGFwaVdpdGhDb250ZXh0Lm9iamVjdCxcbiAgdW5pb246IGFwaVdpdGhDb250ZXh0LnVuaW9uXG59KTtcblxuZXhwb3J0cy5EYXRlVGltZSA9IERhdGVUaW1lO1xuZXhwb3J0cy5EZWNpbWFsID0gRGVjaW1hbDtcbmV4cG9ydHMuSlNPTiA9IEpTT047XG5leHBvcnRzLlVwbG9hZCA9IFVwbG9hZDtcbmV4cG9ydHMuZ3JhcGhxbEJvdW5kVG9LZXlzdG9uZUNvbnRleHQgPSBncmFwaHFsQm91bmRUb0tleXN0b25lQ29udGV4dDtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIGdyYXBocWxUc1NjaGVtYSA9IHJlcXVpcmUoJy4vZ3JhcGhxbC10cy1zY2hlbWEtZmNlN2E2YTguY2pzLmRldi5qcycpO1xudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xudmFyIGFwaVdpdGhvdXRDb250ZXh0ID0gcmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHQnKTtcblxuY29uc3Qgb3JkZXJEaXJlY3Rpb25FbnVtID0gYXBpV2l0aG91dENvbnRleHRbXCJlbnVtXCJdKHtcbiAgbmFtZTogJ09yZGVyRGlyZWN0aW9uJyxcbiAgdmFsdWVzOiBhcGlXaXRob3V0Q29udGV4dC5lbnVtVmFsdWVzKFsnYXNjJywgJ2Rlc2MnXSlcbn0pO1xuY29uc3QgUXVlcnlNb2RlID0gYXBpV2l0aG91dENvbnRleHRbXCJlbnVtXCJdKHtcbiAgbmFtZTogJ1F1ZXJ5TW9kZScsXG4gIHZhbHVlczogYXBpV2l0aG91dENvbnRleHQuZW51bVZhbHVlcyhbJ2RlZmF1bHQnLCAnaW5zZW5zaXRpdmUnXSlcbn0pO1xuLy8gZmllbGRUeXBlKGRiRmllbGQpKGZpZWxkSW5mbykgPT4geyAuLi5maWVsZEluZm8sIGRiRmllbGQgfTtcbmZ1bmN0aW9uIGZpZWxkVHlwZShkYkZpZWxkKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoZ3JhcGhRTEluZm8pIHtcbiAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBncmFwaFFMSW5mbyksIHt9LCB7XG4gICAgICBkYkZpZWxkXG4gICAgfSk7XG4gIH07XG59XG5cbi8vIChldmVuIHRob3VnaCwgeWVzLCBoYXZpbmcgRW51bUZpbHRlciBieSBkZWZpbmVkIGFzIEVudW1OdWxsYWJsZUZpbHRlcjxFbnVtPiwgd291bGQgYmUgdGhlIHNhbWUgdHlwZSBidXQgbmFtZXMgd291bGQgc2hvdyB1cCBkaWZmZXJlbnRseSBpbiBlZGl0b3JzIGZvciBleGFtcGxlKVxuXG5mdW5jdGlvbiBlbnVtRmlsdGVycyhlbnVtVHlwZSkge1xuICBjb25zdCBvcHRpb25hbCA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgICBuYW1lOiBgJHtlbnVtVHlwZS5ncmFwaFFMVHlwZS5uYW1lfU51bGxhYmxlRmlsdGVyYCxcbiAgICBmaWVsZHM6ICgpID0+ICh7XG4gICAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICAgIHR5cGU6IGVudW1UeXBlXG4gICAgICB9KSxcbiAgICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZW51bVR5cGUpKVxuICAgICAgfSksXG4gICAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcbiAgICAgIH0pLFxuICAgICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgICB0eXBlOiBvcHRpb25hbFxuICAgICAgfSlcbiAgICB9KVxuICB9KTtcbiAgY29uc3QgcmVxdWlyZWQgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gICAgbmFtZTogYCR7ZW51bVR5cGUuZ3JhcGhRTFR5cGUubmFtZX1GaWx0ZXJgLFxuICAgIGZpZWxkczogKCkgPT4gKHtcbiAgICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgICAgdHlwZTogZW51bVR5cGVcbiAgICAgIH0pLFxuICAgICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChlbnVtVHlwZSkpXG4gICAgICB9KSxcbiAgICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZW51bVR5cGUpKVxuICAgICAgfSksXG4gICAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICAgIHR5cGU6IG9wdGlvbmFsXG4gICAgICB9KVxuICAgIH0pXG4gIH0pO1xuICBjb25zdCBtYW55ID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICAgIG5hbWU6IGAke2VudW1UeXBlLmdyYXBoUUxUeXBlLm5hbWV9TnVsbGFibGVMaXN0RmlsdGVyYCxcbiAgICBmaWVsZHM6ICgpID0+ICh7XG4gICAgICAvLyBjYW4gYmUgbnVsbFxuICAgICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZW51bVR5cGUpKVxuICAgICAgfSksXG4gICAgICAvLyBjYW4gYmUgbnVsbFxuICAgICAgaGFzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgICB0eXBlOiBlbnVtVHlwZVxuICAgICAgfSksXG4gICAgICBoYXNFdmVyeTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcbiAgICAgIH0pLFxuICAgICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGVudW1UeXBlKSlcbiAgICAgIH0pLFxuICAgICAgaXNFbXB0eTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgICAgdHlwZTogZW51bVR5cGVcbiAgICAgIH0pXG4gICAgfSlcbiAgfSk7XG4gIHJldHVybiB7XG4gICAgb3B0aW9uYWwsXG4gICAgcmVxdWlyZWQsXG4gICAgbWFueVxuICB9O1xufVxuXG4vLyBEbyBub3QgbWFudWFsbHkgbW9kaWZ5IHRoaXMgZmlsZSwgaXQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgdGhlIHBhY2thZ2UgYXQgL3ByaXNtYS11dGlscyBpbiB0aGlzIHJlcG8uXG5jb25zdCBTdHJpbmdOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnU3RyaW5nTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIG1vZGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBRdWVyeU1vZGVcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ051bGxhYmxlRmlsdGVyJDFcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnTmVzdGVkU3RyaW5nTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBjb250YWluczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIHN0YXJ0c1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBlbmRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogTmVzdGVkU3RyaW5nTnVsbGFibGVGaWx0ZXIkMVxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IFN0cmluZ0ZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnU3RyaW5nRmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBtb2RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogUXVlcnlNb2RlXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogTmVzdGVkU3RyaW5nRmlsdGVyJDFcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBOZXN0ZWRTdHJpbmdGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ05lc3RlZFN0cmluZ0ZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGNvbnRhaW5zOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgc3RhcnRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGVuZHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogTmVzdGVkU3RyaW5nRmlsdGVyJDFcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBTdHJpbmdOdWxsYWJsZUxpc3RGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdTdHJpbmdOdWxsYWJsZUxpc3RGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGhhczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIGlzRW1wdHk6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgQm9vbE51bGxhYmxlRmlsdGVyJDEgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBCb29sTnVsbGFibGVGaWx0ZXIkMVxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IEJvb2xGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0Jvb2xlYW5GaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhblxuICAgIH0pLFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IEJvb2xGaWx0ZXIkMVxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IEJvb2xOdWxsYWJsZUxpc3RGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVMaXN0RmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW4pKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaGFzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhblxuICAgIH0pLFxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW4pKVxuICAgIH0pLFxuICAgIGhhc1NvbWU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuQm9vbGVhbikpXG4gICAgfSksXG4gICAgaXNFbXB0eTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBJbnROdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnSW50TnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IEludE51bGxhYmxlRmlsdGVyJDFcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBJbnRGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0ludEZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxuICAgIH0pLFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxuICAgIH0pLFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IEludEZpbHRlciQxXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgSW50TnVsbGFibGVMaXN0RmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnSW50TnVsbGFibGVMaXN0RmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBoYXM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBoYXNFdmVyeTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxuICAgIH0pLFxuICAgIGhhc1NvbWU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcbiAgICB9KSxcbiAgICBpc0VtcHR5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhblxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IEZsb2F0TnVsbGFibGVGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0Zsb2F0TnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogRmxvYXROdWxsYWJsZUZpbHRlciQxXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRmxvYXRGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0Zsb2F0RmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XG4gICAgfSksXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0XG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBGbG9hdEZpbHRlciQxXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRmxvYXROdWxsYWJsZUxpc3RGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdGbG9hdE51bGxhYmxlTGlzdEZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBoYXM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIGhhc0V2ZXJ5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcbiAgICB9KSxcbiAgICBoYXNTb21lOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkZsb2F0KSlcbiAgICB9KSxcbiAgICBpc0VtcHR5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhblxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IERhdGVUaW1lTnVsbGFibGVGaWx0ZXIkMSA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RhdGVUaW1lTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWUpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IERhdGVUaW1lTnVsbGFibGVGaWx0ZXIkMVxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IERhdGVUaW1lRmlsdGVyJDEgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdEYXRlVGltZUZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWUpKVxuICAgIH0pLFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxuICAgIH0pLFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IERhdGVUaW1lRmlsdGVyJDFcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBEYXRlVGltZU51bGxhYmxlTGlzdEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RhdGVUaW1lTnVsbGFibGVMaXN0RmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBoYXM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBoYXNFdmVyeTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWUpKVxuICAgIH0pLFxuICAgIGhhc1NvbWU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcbiAgICB9KSxcbiAgICBpc0VtcHR5OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuQm9vbGVhblxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IERlY2ltYWxOdWxsYWJsZUZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnRGVjaW1hbE51bGxhYmxlRmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IERlY2ltYWxOdWxsYWJsZUZpbHRlciQxXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRGVjaW1hbEZpbHRlciQxID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnRGVjaW1hbEZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsKSlcbiAgICB9KSxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EZWNpbWFsXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogRGVjaW1hbEZpbHRlciQxXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRGVjaW1hbE51bGxhYmxlTGlzdEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RlY2ltYWxOdWxsYWJsZUxpc3RGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaGFzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBoYXNFdmVyeTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXG4gICAgfSksXG4gICAgaGFzU29tZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXG4gICAgfSksXG4gICAgaXNFbXB0eTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkJvb2xlYW5cbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBTdHJpbmckMSA9IHtcbiAgb3B0aW9uYWw6IFN0cmluZ051bGxhYmxlRmlsdGVyJDEsXG4gIHJlcXVpcmVkOiBTdHJpbmdGaWx0ZXIkMSxcbiAgbWFueTogU3RyaW5nTnVsbGFibGVMaXN0RmlsdGVyXG59O1xuY29uc3QgQm9vbGVhbiQxID0ge1xuICBvcHRpb25hbDogQm9vbE51bGxhYmxlRmlsdGVyJDEsXG4gIHJlcXVpcmVkOiBCb29sRmlsdGVyJDEsXG4gIG1hbnk6IEJvb2xOdWxsYWJsZUxpc3RGaWx0ZXJcbn07XG5jb25zdCBJbnQkMSA9IHtcbiAgb3B0aW9uYWw6IEludE51bGxhYmxlRmlsdGVyJDEsXG4gIHJlcXVpcmVkOiBJbnRGaWx0ZXIkMSxcbiAgbWFueTogSW50TnVsbGFibGVMaXN0RmlsdGVyXG59O1xuY29uc3QgRmxvYXQkMSA9IHtcbiAgb3B0aW9uYWw6IEZsb2F0TnVsbGFibGVGaWx0ZXIkMSxcbiAgcmVxdWlyZWQ6IEZsb2F0RmlsdGVyJDEsXG4gIG1hbnk6IEZsb2F0TnVsbGFibGVMaXN0RmlsdGVyXG59O1xuY29uc3QgRGF0ZVRpbWUkMSA9IHtcbiAgb3B0aW9uYWw6IERhdGVUaW1lTnVsbGFibGVGaWx0ZXIkMSxcbiAgcmVxdWlyZWQ6IERhdGVUaW1lRmlsdGVyJDEsXG4gIG1hbnk6IERhdGVUaW1lTnVsbGFibGVMaXN0RmlsdGVyXG59O1xuY29uc3QgRGVjaW1hbCQxID0ge1xuICBvcHRpb25hbDogRGVjaW1hbE51bGxhYmxlRmlsdGVyJDEsXG4gIHJlcXVpcmVkOiBEZWNpbWFsRmlsdGVyJDEsXG4gIG1hbnk6IERlY2ltYWxOdWxsYWJsZUxpc3RGaWx0ZXJcbn07XG5cbnZhciBwb3N0Z3Jlc3FsID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICBfX3Byb3RvX186IG51bGwsXG4gIFN0cmluZzogU3RyaW5nJDEsXG4gIEJvb2xlYW46IEJvb2xlYW4kMSxcbiAgSW50OiBJbnQkMSxcbiAgRmxvYXQ6IEZsb2F0JDEsXG4gIERhdGVUaW1lOiBEYXRlVGltZSQxLFxuICBEZWNpbWFsOiBEZWNpbWFsJDEsXG4gICdlbnVtJzogZW51bUZpbHRlcnNcbn0pO1xuXG4vLyBEbyBub3QgbWFudWFsbHkgbW9kaWZ5IHRoaXMgZmlsZSwgaXQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgdGhlIHBhY2thZ2UgYXQgL3ByaXNtYS11dGlscyBpbiB0aGlzIHJlcG8uXG5jb25zdCBTdHJpbmdOdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ1N0cmluZ051bGxhYmxlRmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IE5lc3RlZFN0cmluZ051bGxhYmxlRmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgTmVzdGVkU3RyaW5nTnVsbGFibGVGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGNvbnRhaW5zOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgc3RhcnRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGVuZHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBOZXN0ZWRTdHJpbmdOdWxsYWJsZUZpbHRlclxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IFN0cmluZ0ZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ1N0cmluZ0ZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5TdHJpbmcpKVxuICAgIH0pLFxuICAgIG5vdEluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgbHQ6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBndDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGNvbnRhaW5zOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgc3RhcnRzV2l0aDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGVuZHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogTmVzdGVkU3RyaW5nRmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgTmVzdGVkU3RyaW5nRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnTmVzdGVkU3RyaW5nRmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZykpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuU3RyaW5nKSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LlN0cmluZ1xuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgY29udGFpbnM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBzdGFydHNXaXRoOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuU3RyaW5nXG4gICAgfSksXG4gICAgZW5kc1dpdGg6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5TdHJpbmdcbiAgICB9KSxcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBOZXN0ZWRTdHJpbmdGaWx0ZXJcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBCb29sTnVsbGFibGVGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdCb29sZWFuTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBCb29sTnVsbGFibGVGaWx0ZXJcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBCb29sRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnQm9vbGVhbkZpbHRlcicsXG4gIGZpZWxkczogKCkgPT4gKHtcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5Cb29sZWFuXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogQm9vbEZpbHRlclxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IEludE51bGxhYmxlRmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnSW50TnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5JbnQpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5JbnRcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IEludE51bGxhYmxlRmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgSW50RmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnSW50RmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxuICAgIH0pLFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGFwaVdpdGhvdXRDb250ZXh0LkludCkpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuSW50KSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0LkludFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuSW50XG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogSW50RmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRmxvYXROdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0Zsb2F0TnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogRmxvYXROdWxsYWJsZUZpbHRlclxuICAgIH0pXG4gIH0pXG59KTtcbmNvbnN0IEZsb2F0RmlsdGVyID0gYXBpV2l0aG91dENvbnRleHQuaW5wdXRPYmplY3Qoe1xuICBuYW1lOiAnRmxvYXRGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChhcGlXaXRob3V0Q29udGV4dC5GbG9hdCkpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoYXBpV2l0aG91dENvbnRleHQuRmxvYXQpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQuRmxvYXRcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5GbG9hdFxuICAgIH0pLFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IEZsb2F0RmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRGF0ZVRpbWVOdWxsYWJsZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RhdGVUaW1lTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXG4gICAgfSksXG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBub3RJbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWUpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgbHRlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgZ3Q6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGF0ZVRpbWVcbiAgICB9KSxcbiAgICAvLyBjYW4gYmUgbnVsbFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IERhdGVUaW1lTnVsbGFibGVGaWx0ZXJcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBEYXRlVGltZUZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RhdGVUaW1lRmlsdGVyJyxcbiAgZmllbGRzOiAoKSA9PiAoe1xuICAgIGVxdWFsczogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxuICAgIH0pLFxuICAgIGluOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogYXBpV2l0aG91dENvbnRleHQubGlzdChhcGlXaXRob3V0Q29udGV4dC5ub25OdWxsKGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZSkpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lKSlcbiAgICB9KSxcbiAgICBsdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxuICAgIH0pLFxuICAgIGx0ZTogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGdyYXBocWxUc1NjaGVtYS5EYXRlVGltZVxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgZ3RlOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRhdGVUaW1lXG4gICAgfSksXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogRGF0ZVRpbWVGaWx0ZXJcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBEZWNpbWFsTnVsbGFibGVGaWx0ZXIgPSBhcGlXaXRob3V0Q29udGV4dC5pbnB1dE9iamVjdCh7XG4gIG5hbWU6ICdEZWNpbWFsTnVsbGFibGVGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgLy8gY2FuIGJlIG51bGxcbiAgICBlcXVhbHM6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgaW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIC8vIGNhbiBiZSBudWxsXG4gICAgbm90OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogRGVjaW1hbE51bGxhYmxlRmlsdGVyXG4gICAgfSlcbiAgfSlcbn0pO1xuY29uc3QgRGVjaW1hbEZpbHRlciA9IGFwaVdpdGhvdXRDb250ZXh0LmlucHV0T2JqZWN0KHtcbiAgbmFtZTogJ0RlY2ltYWxGaWx0ZXInLFxuICBmaWVsZHM6ICgpID0+ICh7XG4gICAgZXF1YWxzOiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBpbjogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IGFwaVdpdGhvdXRDb250ZXh0Lmxpc3QoYXBpV2l0aG91dENvbnRleHQubm9uTnVsbChncmFwaHFsVHNTY2hlbWEuRGVjaW1hbCkpXG4gICAgfSksXG4gICAgbm90SW46IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBhcGlXaXRob3V0Q29udGV4dC5saXN0KGFwaVdpdGhvdXRDb250ZXh0Lm5vbk51bGwoZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWwpKVxuICAgIH0pLFxuICAgIGx0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBsdGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIGd0OiBhcGlXaXRob3V0Q29udGV4dC5hcmcoe1xuICAgICAgdHlwZTogZ3JhcGhxbFRzU2NoZW1hLkRlY2ltYWxcbiAgICB9KSxcbiAgICBndGU6IGFwaVdpdGhvdXRDb250ZXh0LmFyZyh7XG4gICAgICB0eXBlOiBncmFwaHFsVHNTY2hlbWEuRGVjaW1hbFxuICAgIH0pLFxuICAgIG5vdDogYXBpV2l0aG91dENvbnRleHQuYXJnKHtcbiAgICAgIHR5cGU6IERlY2ltYWxGaWx0ZXJcbiAgICB9KVxuICB9KVxufSk7XG5jb25zdCBTdHJpbmcgPSB7XG4gIG9wdGlvbmFsOiBTdHJpbmdOdWxsYWJsZUZpbHRlcixcbiAgcmVxdWlyZWQ6IFN0cmluZ0ZpbHRlclxufTtcbmNvbnN0IEJvb2xlYW4gPSB7XG4gIG9wdGlvbmFsOiBCb29sTnVsbGFibGVGaWx0ZXIsXG4gIHJlcXVpcmVkOiBCb29sRmlsdGVyXG59O1xuY29uc3QgSW50ID0ge1xuICBvcHRpb25hbDogSW50TnVsbGFibGVGaWx0ZXIsXG4gIHJlcXVpcmVkOiBJbnRGaWx0ZXJcbn07XG5jb25zdCBGbG9hdCA9IHtcbiAgb3B0aW9uYWw6IEZsb2F0TnVsbGFibGVGaWx0ZXIsXG4gIHJlcXVpcmVkOiBGbG9hdEZpbHRlclxufTtcbmNvbnN0IERhdGVUaW1lID0ge1xuICBvcHRpb25hbDogRGF0ZVRpbWVOdWxsYWJsZUZpbHRlcixcbiAgcmVxdWlyZWQ6IERhdGVUaW1lRmlsdGVyXG59O1xuY29uc3QgRGVjaW1hbCA9IHtcbiAgb3B0aW9uYWw6IERlY2ltYWxOdWxsYWJsZUZpbHRlcixcbiAgcmVxdWlyZWQ6IERlY2ltYWxGaWx0ZXJcbn07XG5cbnZhciBzcWxpdGUgPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gIF9fcHJvdG9fXzogbnVsbCxcbiAgU3RyaW5nOiBTdHJpbmcsXG4gIEJvb2xlYW46IEJvb2xlYW4sXG4gIEludDogSW50LFxuICBGbG9hdDogRmxvYXQsXG4gIERhdGVUaW1lOiBEYXRlVGltZSxcbiAgRGVjaW1hbDogRGVjaW1hbCxcbiAgJ2VudW0nOiBlbnVtRmlsdGVyc1xufSk7XG5cbmV4cG9ydHMuUXVlcnlNb2RlID0gUXVlcnlNb2RlO1xuZXhwb3J0cy5maWVsZFR5cGUgPSBmaWVsZFR5cGU7XG5leHBvcnRzLm9yZGVyRGlyZWN0aW9uRW51bSA9IG9yZGVyRGlyZWN0aW9uRW51bTtcbmV4cG9ydHMucG9zdGdyZXNxbCA9IHBvc3RncmVzcWw7XG5leHBvcnRzLnNxbGl0ZSA9IHNxbGl0ZTtcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBpc0RlZXBFcXVhbCA9IHJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xudmFyIGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlciA9IHJlcXVpcmUoJy4vZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyLTQ3Njk5YTBkLmNqcy5kZXYuanMnKTtcblxuZnVuY3Rpb24gX2ludGVyb3BEZWZhdWx0IChlKSB7IHJldHVybiBlICYmIGUuX19lc01vZHVsZSA/IGUgOiB7ICdkZWZhdWx0JzogZSB9OyB9XG5cbnZhciBpc0RlZXBFcXVhbF9fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9faW50ZXJvcERlZmF1bHQoaXNEZWVwRXF1YWwpO1xuXG5mdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKGZpZWxkcywgaXRlbUdldHRlcikge1xuICBjb25zdCB2YWx1ZSA9IHt9O1xuICBPYmplY3Qua2V5cyhmaWVsZHMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2ZpZWxkS2V5XTtcbiAgICBjb25zdCBpdGVtRm9yRmllbGQgPSB7fTtcbiAgICBjb25zdCBlcnJvcnMgPSBuZXcgU2V0KCk7XG5cbiAgICBmb3IgKGNvbnN0IGdyYXBocWxGaWVsZCBvZiBnZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXIuZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyKGZpZWxkLmNvbnRyb2xsZXIpKSB7XG4gICAgICBjb25zdCBmaWVsZEdldHRlciA9IGl0ZW1HZXR0ZXIuZ2V0KGdyYXBocWxGaWVsZCk7XG5cbiAgICAgIGlmIChmaWVsZEdldHRlci5lcnJvcnMpIHtcbiAgICAgICAgZmllbGRHZXR0ZXIuZXJyb3JzLmZvckVhY2goZXJyb3IgPT4ge1xuICAgICAgICAgIGVycm9ycy5hZGQoZXJyb3IpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaXRlbUZvckZpZWxkW2dyYXBocWxGaWVsZF0gPSBmaWVsZEdldHRlci5kYXRhO1xuICAgIH1cblxuICAgIGlmIChlcnJvcnMuc2l6ZSkge1xuICAgICAgdmFsdWVbZmllbGRLZXldID0ge1xuICAgICAgICBraW5kOiAnZXJyb3InLFxuICAgICAgICBlcnJvcnM6IFsuLi5lcnJvcnNdXG4gICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZVtmaWVsZEtleV0gPSB7XG4gICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgIHZhbHVlOiBmaWVsZC5jb250cm9sbGVyLmRlc2VyaWFsaXplKGl0ZW1Gb3JGaWVsZClcbiAgICAgIH07XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHZhbHVlO1xufVxuZnVuY3Rpb24gc2VyaWFsaXplVmFsdWVUb09iakJ5RmllbGRLZXkoZmllbGRzLCB2YWx1ZSkge1xuICBjb25zdCBvYmogPSB7fTtcbiAgT2JqZWN0LmtleXMoZmllbGRzKS5tYXAoZmllbGRLZXkgPT4ge1xuICAgIGNvbnN0IHZhbCA9IHZhbHVlW2ZpZWxkS2V5XTtcblxuICAgIGlmICh2YWwua2luZCA9PT0gJ3ZhbHVlJykge1xuICAgICAgb2JqW2ZpZWxkS2V5XSA9IGZpZWxkc1tmaWVsZEtleV0uY29udHJvbGxlci5zZXJpYWxpemUodmFsLnZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb2JqO1xufVxuXG5mdW5jdGlvbiB1c2VDaGFuZ2VkRmllbGRzQW5kRGF0YUZvclVwZGF0ZShmaWVsZHMsIGl0ZW1HZXR0ZXIsIHZhbHVlKSB7XG4gIGNvbnN0IHNlcmlhbGl6ZWRWYWx1ZXNGcm9tSXRlbSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IHZhbHVlID0gZGVzZXJpYWxpemVWYWx1ZShmaWVsZHMsIGl0ZW1HZXR0ZXIpO1xuICAgIHJldHVybiBzZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKTtcbiAgfSwgW2ZpZWxkcywgaXRlbUdldHRlcl0pO1xuICBjb25zdCBzZXJpYWxpemVkRmllbGRWYWx1ZXMgPSBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICByZXR1cm4gc2VyaWFsaXplVmFsdWVUb09iakJ5RmllbGRLZXkoZmllbGRzLCB2YWx1ZSk7XG4gIH0sIFt2YWx1ZSwgZmllbGRzXSk7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBsZXQgY2hhbmdlZEZpZWxkcyA9IG5ldyBTZXQoKTtcbiAgICBPYmplY3Qua2V5cyhzZXJpYWxpemVkRmllbGRWYWx1ZXMpLmZvckVhY2goZmllbGRLZXkgPT4ge1xuICAgICAgbGV0IGlzRXF1YWwgPSBpc0RlZXBFcXVhbF9fZGVmYXVsdFtcImRlZmF1bHRcIl0oc2VyaWFsaXplZEZpZWxkVmFsdWVzW2ZpZWxkS2V5XSwgc2VyaWFsaXplZFZhbHVlc0Zyb21JdGVtW2ZpZWxkS2V5XSk7XG5cbiAgICAgIGlmICghaXNFcXVhbCkge1xuICAgICAgICBjaGFuZ2VkRmllbGRzLmFkZChmaWVsZEtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgZGF0YUZvclVwZGF0ZSA9IHt9O1xuICAgIGNoYW5nZWRGaWVsZHMuZm9yRWFjaChmaWVsZEtleSA9PiB7XG4gICAgICBPYmplY3QuYXNzaWduKGRhdGFGb3JVcGRhdGUsIHNlcmlhbGl6ZWRGaWVsZFZhbHVlc1tmaWVsZEtleV0pO1xuICAgIH0pO1xuICAgIHJldHVybiB7XG4gICAgICBjaGFuZ2VkRmllbGRzOiBjaGFuZ2VkRmllbGRzLFxuICAgICAgZGF0YUZvclVwZGF0ZVxuICAgIH07XG4gIH0sIFtzZXJpYWxpemVkRmllbGRWYWx1ZXMsIHNlcmlhbGl6ZWRWYWx1ZXNGcm9tSXRlbV0pO1xufVxuXG5mdW5jdGlvbiB1c2VJbnZhbGlkRmllbGRzKGZpZWxkcywgdmFsdWUpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGludmFsaWRGaWVsZHMgPSBuZXcgU2V0KCk7XG4gICAgT2JqZWN0LmtleXModmFsdWUpLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIGNvbnN0IHZhbCA9IHZhbHVlW2ZpZWxkUGF0aF07XG5cbiAgICAgIGlmICh2YWwua2luZCA9PT0gJ3ZhbHVlJykge1xuICAgICAgICBjb25zdCB2YWxpZGF0ZUZuID0gZmllbGRzW2ZpZWxkUGF0aF0uY29udHJvbGxlci52YWxpZGF0ZTtcblxuICAgICAgICBpZiAodmFsaWRhdGVGbikge1xuICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbGlkYXRlRm4odmFsLnZhbHVlKTtcblxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBpbnZhbGlkRmllbGRzLmFkZChmaWVsZFBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBpbnZhbGlkRmllbGRzO1xuICB9LCBbZmllbGRzLCB2YWx1ZV0pO1xufVxuXG5leHBvcnRzLmRlc2VyaWFsaXplVmFsdWUgPSBkZXNlcmlhbGl6ZVZhbHVlO1xuZXhwb3J0cy5zZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleSA9IHNlcmlhbGl6ZVZhbHVlVG9PYmpCeUZpZWxkS2V5O1xuZXhwb3J0cy51c2VDaGFuZ2VkRmllbGRzQW5kRGF0YUZvclVwZGF0ZSA9IHVzZUNoYW5nZWRGaWVsZHNBbmREYXRhRm9yVXBkYXRlO1xuZXhwb3J0cy51c2VJbnZhbGlkRmllbGRzID0gdXNlSW52YWxpZEZpZWxkcztcbiIsIid1c2Ugc3RyaWN0JztcblxudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcblxuZnVuY3Rpb24gdXNlRm9ybWF0dGVkSW5wdXQoY29uZmlnLCB7XG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgb25CbHVyLFxuICBvbkZvY3VzXG59KSB7XG4gIC8vIHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgaW1wbGllcyB0aGUgdW5wYXJzZWQgZm9ybVxuICAvLyB0eXBlb2YgdmFsdWUgIT09ICdzdHJpbmcnIGltcGxpZXMgdGhlIHBhcnNlZCBmb3JtXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHR5cGVvZiBjb25maWcucGFyc2UodmFsdWUpICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcihgVmFsaWQgdmFsdWVzIG11c3QgYmUgcGFzc2VkIGluIGFzIGEgcGFyc2VkIHZhbHVlLCBub3QgYSByYXcgdmFsdWUuIFRoZSB2YWx1ZSB5b3UgcGFzc2VkIHdhcyBcXGAke0pTT04uc3RyaW5naWZ5KHZhbHVlKX1cXGAsIHlvdSBzaG91bGQgcGFzcyBcXGAke0pTT04uc3RyaW5naWZ5KGNvbmZpZy5wYXJzZSh2YWx1ZSkpfVxcYCBpbnN0ZWFkYCk7XG4gIH1cblxuICBsZXQgW2ludGVybmFsVmFsdWVTdGF0ZSwgc2V0SW50ZXJuYWxWYWx1ZVN0YXRlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgPyB2YWx1ZSA6IGNvbmZpZy5mb3JtYXQodmFsdWUpKTtcbiAgY29uc3QgW2lzRm9jdXNlZCwgc2V0SXNGb2N1c2VkXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZSAhPT0gaW50ZXJuYWxWYWx1ZVN0YXRlKSB7XG4gICAgc2V0SW50ZXJuYWxWYWx1ZVN0YXRlKHZhbHVlKTtcbiAgfSAvLyBJZiB0aGUgdmFsdWUgaXMgbm90IGEgc3RyaW5nLCB3ZSBrbm93IGl0J3MgaW4gdGhlIHBhcnNlZCBmb3JtXG5cblxuICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgIGNvbnN0IGZvcm1hdHRlZCA9IGNvbmZpZy5mb3JtYXQodmFsdWUpOyAvLyBXaGVuIHRoZSBpbnB1dCBpcyBibHVycmVkLCB3ZSB3YW50IHRvIHNob3cgYWx3YXlzIHNob3cgdGhlIGZvcm1hdHRlZFxuICAgIC8vIHZlcnNpb24gc28gaWYgd2UncmUgbm90IGZvY3Vzc2VkIGFuZCB0aGUgZm9ybWF0dGVkIHZlcnNpb24gaXMgZGlmZmVyZW50XG4gICAgLy8gdG8gdGhlIGN1cnJlbnQgdmVyc2lvbiwgd2UgbmVlZCB0byB1cGRhdGUgaXQuXG5cbiAgICBpZiAoIWlzRm9jdXNlZCAmJiBmb3JtYXR0ZWQgIT09IGludGVybmFsVmFsdWVTdGF0ZSkge1xuICAgICAgc2V0SW50ZXJuYWxWYWx1ZVN0YXRlKGZvcm1hdHRlZCk7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyc2VkSW50ZXJuYWwgPSBjb25maWcucGFyc2UoaW50ZXJuYWxWYWx1ZVN0YXRlKTsgLy8gV2UgdXBkYXRpbmcgdGhlIGludGVybmFsIHZhbHVlIGhlcmUgYmVjYXVzZSB0aGVcbiAgICAvLyBleHRlcm5hbCB2YWx1ZSBoYXMgY2hhbmdlZC5cblxuICAgIGlmICh0eXBlb2YgcGFyc2VkSW50ZXJuYWwgIT09ICdzdHJpbmcnICYmIGNvbmZpZy5mb3JtYXQocGFyc2VkSW50ZXJuYWwpICE9PSBmb3JtYXR0ZWQpIHtcbiAgICAgIHNldEludGVybmFsVmFsdWVTdGF0ZShmb3JtYXR0ZWQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdmFsdWU6IGludGVybmFsVmFsdWVTdGF0ZSxcblxuICAgIG9uQ2hhbmdlKGV2ZW50KSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcbiAgICAgIGNvbnN0IHBhcnNlZCA9IGNvbmZpZy5wYXJzZSh2YWx1ZSk7XG4gICAgICBvbkNoYW5nZShwYXJzZWQpO1xuICAgICAgc2V0SW50ZXJuYWxWYWx1ZVN0YXRlKHZhbHVlKTtcbiAgICB9LFxuXG4gICAgb25Gb2N1cyhldmVudCkge1xuICAgICAgb25Gb2N1cyA9PT0gbnVsbCB8fCBvbkZvY3VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkZvY3VzKGV2ZW50KTtcbiAgICAgIHNldElzRm9jdXNlZCh0cnVlKTtcbiAgICB9LFxuXG4gICAgb25CbHVyKGV2ZW50KSB7XG4gICAgICBvbkJsdXIgPT09IG51bGwgfHwgb25CbHVyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkJsdXIoZXZlbnQpO1xuICAgICAgc2V0SXNGb2N1c2VkKGZhbHNlKTsgLy8gdGhpcyBpc24ndCBzdHJpY3RseSBuZWNlc3Nhcnkgc2luY2Ugd2UgYWxyZWFkeSBkbyB0aGlzIGluIHJlbmRlclxuICAgICAgLy8gdGhpcyBqdXN0IHNhdmVzIGFub3RoZXIgcmVyZW5kZXIgYWZ0ZXIgc2V0SXNGb2N1c2VkKGZhbHNlKVxuXG4gICAgICBpZiAodHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJykge1xuICAgICAgICBzZXRJbnRlcm5hbFZhbHVlU3RhdGUoY29uZmlnLmZvcm1hdCh2YWx1ZSkpO1xuICAgICAgfVxuICAgIH1cblxuICB9O1xufVxuXG5leHBvcnRzLnVzZUZvcm1hdHRlZElucHV0ID0gdXNlRm9ybWF0dGVkSW5wdXQ7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RXaXRob3V0UHJvcGVydGllcycpO1xudmFyIF90b1Byb3BlcnR5S2V5ID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy90b1Byb3BlcnR5S2V5Jyk7XG5yZXF1aXJlKCdpbnRlcnNlY3Rpb24tb2JzZXJ2ZXInKTtcbnZhciBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIHV1aWQgPSByZXF1aXJlKCd1dWlkJyk7XG52YXIgY2xpZW50ID0gcmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcblxuY29uc3QgX2V4Y2x1ZGVkID0gW1wiY2hpbGRyZW5cIl07XG5cbmZ1bmN0aW9uIHVzZUludGVyc2VjdGlvbk9ic2VydmVyKGNiLCByZWYpIHtcbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoY2IsIHt9KTtcbiAgICBsZXQgbm9kZSA9IHJlZi5jdXJyZW50O1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSk7XG4gICAgICByZXR1cm4gKCkgPT4gb2JzZXJ2ZXIudW5vYnNlcnZlKG5vZGUpO1xuICAgIH1cbiAgfSk7XG59XG5cbmNvbnN0IGlkVmFsaWRhdG9ycyA9IHtcbiAgdXVpZDogdXVpZC52YWxpZGF0ZSxcblxuICBjdWlkKHZhbHVlKSB7XG4gICAgcmV0dXJuIHZhbHVlLnN0YXJ0c1dpdGgoJ2MnKTtcbiAgfSxcblxuICBhdXRvaW5jcmVtZW50KHZhbHVlKSB7XG4gICAgcmV0dXJuIC9eXFxkKyQvLnRlc3QodmFsdWUpO1xuICB9XG5cbn07XG5cbmZ1bmN0aW9uIHVzZUZpbHRlcihzZWFyY2gsIGxpc3QpIHtcbiAgcmV0dXJuIFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGxldCBjb25kaXRpb25zID0gW107XG5cbiAgICBpZiAoc2VhcmNoLmxlbmd0aCkge1xuICAgICAgY29uc3QgaWRGaWVsZEtpbmQgPSBsaXN0LmZpZWxkcy5pZC5jb250cm9sbGVyLmlkRmllbGRLaW5kO1xuICAgICAgY29uc3QgdHJpbW1lZFNlYXJjaCA9IHNlYXJjaC50cmltKCk7XG4gICAgICBjb25zdCBpc1ZhbGlkSWQgPSBpZFZhbGlkYXRvcnNbaWRGaWVsZEtpbmRdKHRyaW1tZWRTZWFyY2gpO1xuXG4gICAgICBpZiAoaXNWYWxpZElkKSB7XG4gICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgaWQ6IHRyaW1tZWRTZWFyY2hcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgT2JqZWN0LnZhbHVlcyhsaXN0LmZpZWxkcykpIHtcbiAgICAgICAgaWYgKGZpZWxkLnNlYXJjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIGNvbmRpdGlvbnMucHVzaCh7XG4gICAgICAgICAgICBbYCR7ZmllbGQucGF0aH1fY29udGFpbnMke2ZpZWxkLnNlYXJjaCA9PT0gJ2luc2Vuc2l0aXZlJyA/ICdfaScgOiAnJ31gXTogdHJpbW1lZFNlYXJjaFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIE9SOiBjb25kaXRpb25zXG4gICAgfTtcbiAgfSwgW3NlYXJjaCwgbGlzdF0pO1xufVxuXG5jb25zdCBpbml0aWFsSXRlbXNUb0xvYWQgPSAxMDtcbmNvbnN0IHN1YnNlcXVlbnRJdGVtc1RvTG9hZCA9IDUwO1xuY29uc3QgaWRGaWVsZCA9ICdfX19faWRfX19fJztcbmNvbnN0IGxhYmVsRmllbGQgPSAnX19fX2xhYmVsX19fXyc7XG5jb25zdCBMb2FkaW5nSW5kaWNhdG9yQ29udGV4dCA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVDb250ZXh0KHtcbiAgY291bnQ6IDAsXG4gIHJlZjogKCkgPT4ge31cbn0pO1xuY29uc3QgUmVsYXRpb25zaGlwU2VsZWN0ID0gKHtcbiAgYXV0b0ZvY3VzLFxuICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gIGlzRGlzYWJsZWQsXG4gIGlzTG9hZGluZyxcbiAgbGlzdCxcbiAgcGxhY2Vob2xkZXIsXG4gIHBvcnRhbE1lbnUsXG4gIHN0YXRlLFxuICBleHRyYVNlbGVjdGlvbiA9ICcnXG59KSA9PiB7XG4gIHZhciBfZGF0YSRpdGVtcztcblxuICBjb25zdCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gUmVhY3QudXNlU3RhdGUoJycpOyAvLyBub3RlIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhpcyBpcyBpbiBzdGF0ZSByYXRoZXIgdGhhbiBhIHJlZlxuICAvLyBiZWNhdXNlIHdlIHdhbnQgYSByZS1yZW5kZXIgaWYgdGhlIGVsZW1lbnQgY2hhbmdlc1xuICAvLyBzbyB0aGF0IHdlIGNhbiByZWdpc3RlciB0aGUgaW50ZXJzZWN0aW9uIG9ic2VydmVyXG4gIC8vIG9uIHRoZSByaWdodCBlbGVtZW50XG5cbiAgY29uc3QgW2xvYWRpbmdJbmRpY2F0b3JFbGVtZW50LCBzZXRMb2FkaW5nSW5kaWNhdG9yRWxlbWVudF0gPSBSZWFjdC51c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgUVVFUlkgPSBjbGllbnQuZ3FsYFxuICAgIHF1ZXJ5IFJlbGF0aW9uc2hpcFNlbGVjdCgkd2hlcmU6ICR7bGlzdC5ncWxOYW1lcy53aGVyZUlucHV0TmFtZX0hLCAkdGFrZTogSW50ISwgJHNraXA6IEludCEpIHtcbiAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6ICR3aGVyZSwgdGFrZTogJHRha2UsIHNraXA6ICRza2lwKSB7XG4gICAgICAgICR7aWRGaWVsZH06IGlkXG4gICAgICAgICR7bGFiZWxGaWVsZH06ICR7bGlzdC5sYWJlbEZpZWxkfVxuICAgICAgICAke2V4dHJhU2VsZWN0aW9ufVxuICAgICAgfVxuICAgICAgY291bnQ6ICR7bGlzdC5ncWxOYW1lcy5saXN0UXVlcnlDb3VudE5hbWV9KHdoZXJlOiAkd2hlcmUpXG4gICAgfVxuICBgO1xuICBjb25zdCB3aGVyZSA9IHVzZUZpbHRlcihzZWFyY2gsIGxpc3QpO1xuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nLFxuICAgIGZldGNoTW9yZVxuICB9ID0gY2xpZW50LnVzZVF1ZXJ5KFFVRVJZLCB7XG4gICAgZmV0Y2hQb2xpY3k6ICduZXR3b3JrLW9ubHknLFxuICAgIHZhcmlhYmxlczoge1xuICAgICAgd2hlcmUsXG4gICAgICB0YWtlOiBpbml0aWFsSXRlbXNUb0xvYWQsXG4gICAgICBza2lwOiAwXG4gICAgfVxuICB9KTtcbiAgY29uc3QgY291bnQgPSAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkYXRhLmNvdW50KSB8fCAwO1xuICBjb25zdCBvcHRpb25zID0gKGRhdGEgPT09IG51bGwgfHwgZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogKF9kYXRhJGl0ZW1zID0gZGF0YS5pdGVtcykgPT09IG51bGwgfHwgX2RhdGEkaXRlbXMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kYXRhJGl0ZW1zLm1hcChfcmVmID0+IHtcbiAgICBsZXQge1xuICAgICAgW2lkRmllbGRdOiB2YWx1ZSxcbiAgICAgIFtsYWJlbEZpZWxkXTogbGFiZWxcbiAgICB9ID0gX3JlZixcbiAgICAgICAgZGF0YSA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhfcmVmLCBbaWRGaWVsZCwgbGFiZWxGaWVsZF0ubWFwKF90b1Byb3BlcnR5S2V5KSk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgdmFsdWUsXG4gICAgICBsYWJlbDogbGFiZWwgfHwgdmFsdWUsXG4gICAgICBkYXRhXG4gICAgfTtcbiAgfSkpIHx8IFtdO1xuICBjb25zdCBsb2FkaW5nSW5kaWNhdG9yQ29udGV4dFZhbCA9IFJlYWN0LnVzZU1lbW8oKCkgPT4gKHtcbiAgICBjb3VudCxcbiAgICByZWY6IHNldExvYWRpbmdJbmRpY2F0b3JFbGVtZW50XG4gIH0pLCBbY291bnRdKTtcbiAgdXNlSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKFt7XG4gICAgaXNJbnRlcnNlY3RpbmdcbiAgfV0pID0+IHtcbiAgICBpZiAoIWxvYWRpbmcgJiYgaXNJbnRlcnNlY3RpbmcgJiYgb3B0aW9ucy5sZW5ndGggPCBjb3VudCkge1xuICAgICAgY29uc3QgUVVFUlkgPSBjbGllbnQuZ3FsYFxuICAgICAgICAgICAgICBxdWVyeSBSZWxhdGlvbnNoaXBTZWxlY3RNb3JlKCR3aGVyZTogJHtsaXN0LmdxbE5hbWVzLndoZXJlSW5wdXROYW1lfSEsICR0YWtlOiBJbnQhLCAkc2tpcDogSW50ISkge1xuICAgICAgICAgICAgICAgIGl0ZW1zOiAke2xpc3QuZ3FsTmFtZXMubGlzdFF1ZXJ5TmFtZX0od2hlcmU6ICR3aGVyZSwgdGFrZTogJHRha2UsIHNraXA6ICRza2lwKSB7XG4gICAgICAgICAgICAgICAgICAke2xhYmVsRmllbGR9OiAke2xpc3QubGFiZWxGaWVsZH1cbiAgICAgICAgICAgICAgICAgICR7aWRGaWVsZH06IGlkXG4gICAgICAgICAgICAgICAgICAke2V4dHJhU2VsZWN0aW9ufVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgYDtcbiAgICAgIGZldGNoTW9yZSh7XG4gICAgICAgIHF1ZXJ5OiBRVUVSWSxcbiAgICAgICAgdmFyaWFibGVzOiB7XG4gICAgICAgICAgd2hlcmUsXG4gICAgICAgICAgdGFrZTogc3Vic2VxdWVudEl0ZW1zVG9Mb2FkLFxuICAgICAgICAgIHNraXA6IGRhdGEuaXRlbXMubGVuZ3RoXG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZVF1ZXJ5OiAocHJldiwge1xuICAgICAgICAgIGZldGNoTW9yZVJlc3VsdFxuICAgICAgICB9KSA9PiB7XG4gICAgICAgICAgaWYgKCFmZXRjaE1vcmVSZXN1bHQpIHJldHVybiBwcmV2O1xuICAgICAgICAgIHJldHVybiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHByZXYpLCB7fSwge1xuICAgICAgICAgICAgaXRlbXM6IFsuLi5wcmV2Lml0ZW1zLCAuLi5mZXRjaE1vcmVSZXN1bHQuaXRlbXNdXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGN1cnJlbnQ6IGxvYWRpbmdJbmRpY2F0b3JFbGVtZW50XG4gIH0pOyAvLyBUT0RPOiBiZXR0ZXIgZXJyb3IgVUlcbiAgLy8gVE9ETzogSGFuZGxlIHBlcm1pc3Npb24gZXJyb3JzXG4gIC8vIChpZTsgdXNlciBoYXMgcGVybWlzc2lvbiB0byByZWFkIHRoaXMgcmVsYXRpb25zaGlwIGZpZWxkLCBidXRcbiAgLy8gbm90IHRoZSByZWxhdGVkIGxpc3QsIG9yIHNvbWUgaXRlbXMgb24gdGhlIGxpc3QpXG5cbiAgaWYgKGVycm9yKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KFwic3BhblwiLCBudWxsLCBcIkVycm9yXCIpO1xuICB9XG5cbiAgaWYgKHN0YXRlLmtpbmQgPT09ICdvbmUnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KExvYWRpbmdJbmRpY2F0b3JDb250ZXh0LlByb3ZpZGVyLCB7XG4gICAgICB2YWx1ZTogbG9hZGluZ0luZGljYXRvckNvbnRleHRWYWxcbiAgICB9LCBjb3JlLmpzeChmaWVsZHMuU2VsZWN0IC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhY3Qtc2VsZWN0IHBhc3NlcyBhIHNlY29uZCBhcmd1bWVudCB0byBvbklucHV0Q2hhbmdlXG4gICAgLy8gYW5kIHVzZVN0YXRlIHNldHRlcnMgbG9nIGEgd2FybmluZyBpZiBhIHNlY29uZCBhcmd1bWVudCBpcyBwYXNzZWRcbiAgICAsIHtcbiAgICAgIG9uSW5wdXRDaGFuZ2U6IHZhbCA9PiBzZXRTZWFyY2godmFsKSxcbiAgICAgIGlzTG9hZGluZzogbG9hZGluZyB8fCBpc0xvYWRpbmcsXG4gICAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICAgIGNvbXBvbmVudHM6IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMsXG4gICAgICBwb3J0YWxNZW51OiBwb3J0YWxNZW51LFxuICAgICAgdmFsdWU6IHN0YXRlLnZhbHVlID8ge1xuICAgICAgICB2YWx1ZTogc3RhdGUudmFsdWUuaWQsXG4gICAgICAgIGxhYmVsOiBzdGF0ZS52YWx1ZS5sYWJlbCxcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBkYXRhOiBzdGF0ZS52YWx1ZS5kYXRhXG4gICAgICB9IDogbnVsbCxcbiAgICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgICBvbkNoYW5nZTogdmFsdWUgPT4ge1xuICAgICAgICBzdGF0ZS5vbkNoYW5nZSh2YWx1ZSA/IHtcbiAgICAgICAgICBpZDogdmFsdWUudmFsdWUsXG4gICAgICAgICAgbGFiZWw6IHZhbHVlLmxhYmVsLFxuICAgICAgICAgIGRhdGE6IHZhbHVlLmRhdGFcbiAgICAgICAgfSA6IG51bGwpO1xuICAgICAgfSxcbiAgICAgIHBsYWNlaG9sZGVyOiBwbGFjZWhvbGRlcixcbiAgICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgICAgaXNDbGVhcmFibGU6IGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZSxcbiAgICAgIGlzRGlzYWJsZWQ6IGlzRGlzYWJsZWRcbiAgICB9KSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goTG9hZGluZ0luZGljYXRvckNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZTogbG9hZGluZ0luZGljYXRvckNvbnRleHRWYWxcbiAgfSwgY29yZS5qc3goZmllbGRzLk11bHRpU2VsZWN0IC8vIHRoaXMgaXMgbmVjZXNzYXJ5IGJlY2F1c2UgcmVhY3Qtc2VsZWN0IHBhc3NlcyBhIHNlY29uZCBhcmd1bWVudCB0byBvbklucHV0Q2hhbmdlXG4gIC8vIGFuZCB1c2VTdGF0ZSBzZXR0ZXJzIGxvZyBhIHdhcm5pbmcgaWYgYSBzZWNvbmQgYXJndW1lbnQgaXMgcGFzc2VkXG4gICwge1xuICAgIG9uSW5wdXRDaGFuZ2U6IHZhbCA9PiBzZXRTZWFyY2godmFsKSxcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcgfHwgaXNMb2FkaW5nLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIGNvbXBvbmVudHM6IHJlbGF0aW9uc2hpcFNlbGVjdENvbXBvbmVudHMsXG4gICAgcG9ydGFsTWVudTogcG9ydGFsTWVudSxcbiAgICB2YWx1ZTogc3RhdGUudmFsdWUubWFwKHZhbHVlID0+ICh7XG4gICAgICB2YWx1ZTogdmFsdWUuaWQsXG4gICAgICBsYWJlbDogdmFsdWUubGFiZWwsXG4gICAgICBkYXRhOiB2YWx1ZS5kYXRhXG4gICAgfSkpLFxuICAgIG9wdGlvbnM6IG9wdGlvbnMsXG4gICAgb25DaGFuZ2U6IHZhbHVlID0+IHtcbiAgICAgIHN0YXRlLm9uQ2hhbmdlKHZhbHVlLm1hcCh4ID0+ICh7XG4gICAgICAgIGlkOiB4LnZhbHVlLFxuICAgICAgICBsYWJlbDogeC5sYWJlbCxcbiAgICAgICAgZGF0YTogeC5kYXRhXG4gICAgICB9KSkpO1xuICAgIH0sXG4gICAgcGxhY2Vob2xkZXI6IHBsYWNlaG9sZGVyLFxuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogY29udHJvbFNob3VsZFJlbmRlclZhbHVlLFxuICAgIGlzQ2xlYXJhYmxlOiBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWUsXG4gICAgaXNEaXNhYmxlZDogaXNEaXNhYmxlZFxuICB9KSk7XG59O1xuY29uc3QgcmVsYXRpb25zaGlwU2VsZWN0Q29tcG9uZW50cyA9IHtcbiAgTWVudUxpc3Q6IF9yZWYyID0+IHtcbiAgICBsZXQge1xuICAgICAgY2hpbGRyZW5cbiAgICB9ID0gX3JlZjIsXG4gICAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYyLCBfZXhjbHVkZWQpO1xuXG4gICAgY29uc3Qge1xuICAgICAgY291bnQsXG4gICAgICByZWZcbiAgICB9ID0gUmVhY3QudXNlQ29udGV4dChMb2FkaW5nSW5kaWNhdG9yQ29udGV4dCk7XG4gICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5zZWxlY3RDb21wb25lbnRzLk1lbnVMaXN0LCBwcm9wcywgY2hpbGRyZW4sIGNvcmUuanN4KFwiZGl2XCIsIHtcbiAgICAgIGNzczoge1xuICAgICAgICB0ZXh0QWxpZ246ICdjZW50ZXInXG4gICAgICB9LFxuICAgICAgcmVmOiByZWZcbiAgICB9LCBwcm9wcy5vcHRpb25zLmxlbmd0aCA8IGNvdW50ICYmIGNvcmUuanN4KFwic3BhblwiLCB7XG4gICAgICBjc3M6IHtcbiAgICAgICAgcGFkZGluZzogOFxuICAgICAgfVxuICAgIH0sIFwiTG9hZGluZy4uLlwiKSkpO1xuICB9XG59O1xuXG5leHBvcnRzLlJlbGF0aW9uc2hpcFNlbGVjdCA9IFJlbGF0aW9uc2hpcFNlbGVjdDtcbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBfZXh0ZW5kcyA9IHJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xudmFyIFJlYWN0ID0gcmVxdWlyZSgncmVhY3QnKTtcbnZhciBidXR0b24gPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9jb3JlJyk7XG52YXIgZmllbGRzID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2ZpZWxkcycpO1xudmFyIG1vZGFscyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcbnZhciBhZG1pblVpX3JvdXRlcl9kaXN0X2tleXN0b25lID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xudmFyIGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvY29udGV4dC9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcbnZhciBjbGllbnQgPSByZXF1aXJlKCdAYXBvbGxvL2NsaWVudCcpO1xudmFyIENlbGxDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NlbGxDb250YWluZXItNDUzMjU0YjUuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uJyk7XG5yZXF1aXJlKCduZXh0L2xpbmsnKTtcbnZhciBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCduZXh0L3JvdXRlcicpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL3BvcG92ZXInKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb24nKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9DaGV2cm9uUmlnaHRJY29uJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L1NpZ25vdXRCdXR0b24tYWNkYjE1NTQuY2pzLmRldi5qcycpO1xudmFyIENyZWF0ZUl0ZW1EcmF3ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NyZWF0ZUl0ZW1EcmF3ZXItYjRiMGRkMTYuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xudmFyIHRvb2x0aXAgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9vbHRpcCcpO1xudmFyIGxvYWRpbmcgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xudmFyIGRhdGFHZXR0ZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2RhdGFHZXR0ZXItOWZiZTJmOGUuY2pzLmRldi5qcycpO1xudmFyIGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlciA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvZ2V0Um9vdEdyYXBoUUxGaWVsZHNGcm9tRmllbGRDb250cm9sbGVyLTQ3Njk5YTBkLmNqcy5kZXYuanMnKTtcbnZhciBpc0RlZXBFcXVhbCA9IHJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xudmFyIGZpZWxkc190eXBlc19yZWxhdGlvbnNoaXBfdmlld3NfUmVsYXRpb25zaGlwU2VsZWN0X2Rpc3Rfa2V5c3RvbmUgPSByZXF1aXJlKCcuLi9SZWxhdGlvbnNoaXBTZWxlY3QvZGlzdC9rZXlzdG9uZS5janMuZGV2LmpzJyk7XG52YXIgdG9hc3QgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvdG9hc3QnKTtcbnZhciBGaWVsZHMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0ZpZWxkcy00YWZiMzhmMC5janMuZGV2LmpzJyk7XG52YXIgdXNlSW52YWxpZEZpZWxkcyA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvdXNlSW52YWxpZEZpZWxkcy0xNjJkMWI5Yy5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdhcG9sbG8tdXBsb2FkLWNsaWVudCcpO1xucmVxdWlyZSgnQGVtb3Rpb24vaGFzaCcpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9zcWxpdGUtYWY5ZTUxNDguY2pzLmRldi5qcycpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9ncmFwaHFsLXRzLXNjaGVtYS1mY2U3YTZhOC5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2FkbWluLW1ldGEtZ3JhcGhxbC05ZjlhOWMxMS5janMuZGV2LmpzJyk7XG52YXIgR3JhcGhRTEVycm9yTm90aWNlID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9HcmFwaFFMRXJyb3JOb3RpY2UtNzZmZjk2ZGQuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9jb3JlLWM4ZWNjZTIzLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHQnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcbnJlcXVpcmUoJ2dyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzJyk7XG5yZXF1aXJlKCdncmFwaHFsJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xucmVxdWlyZSgnQGVtb3Rpb24vd2Vhay1tZW1vaXplJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL3RvUHJvcGVydHlLZXknKTtcbnJlcXVpcmUoJ2ludGVyc2VjdGlvbi1vYnNlcnZlcicpO1xucmVxdWlyZSgndXVpZCcpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcERlZmF1bHQgKGUpIHsgcmV0dXJuIGUgJiYgZS5fX2VzTW9kdWxlID8gZSA6IHsgJ2RlZmF1bHQnOiBlIH07IH1cblxudmFyIGlzRGVlcEVxdWFsX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19pbnRlcm9wRGVmYXVsdChpc0RlZXBFcXVhbCk7XG5cbmZ1bmN0aW9uIHVzZUl0ZW1TdGF0ZSh7XG4gIHNlbGVjdGVkRmllbGRzLFxuICBsb2NhbExpc3QsXG4gIGlkLFxuICBmaWVsZFxufSkge1xuICBjb25zdCB7XG4gICAgZGF0YSxcbiAgICBlcnJvcixcbiAgICBsb2FkaW5nXG4gIH0gPSBjbGllbnQudXNlUXVlcnkoY2xpZW50LmdxbGBxdWVyeSgkaWQ6IElEISkge1xuICBpdGVtOiAke2xvY2FsTGlzdC5ncWxOYW1lcy5pdGVtUXVlcnlOYW1lfSh3aGVyZToge2lkOiAkaWR9KSB7XG4gICAgaWRcbiAgICByZWxhdGlvbnNoaXA6ICR7ZmllbGQucGF0aH0ge1xuICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICB9XG4gIH1cbn1gLCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICBpZFxuICAgIH0sXG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH0pO1xuICBjb25zdCB7XG4gICAgaXRlbXNBcnJGcm9tRGF0YSxcbiAgICByZWxhdGlvbnNoaXBHZXR0ZXJcbiAgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGRhdGFHZXR0ZXIkMSA9IGRhdGFHZXR0ZXIubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnMpO1xuICAgIGNvbnN0IHJlbGF0aW9uc2hpcEdldHRlciA9IGRhdGFHZXR0ZXIkMS5nZXQoJ2l0ZW0nKS5nZXQoJ3JlbGF0aW9uc2hpcCcpO1xuICAgIGNvbnN0IGlzTWFueSA9IEFycmF5LmlzQXJyYXkocmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpO1xuICAgIGNvbnN0IGl0ZW1zQXJyRnJvbURhdGEgPSAoaXNNYW55ID8gcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEubWFwKChfLCBpKSA9PiByZWxhdGlvbnNoaXBHZXR0ZXIuZ2V0KGkpKSA6IFtyZWxhdGlvbnNoaXBHZXR0ZXJdKS5maWx0ZXIoeCA9PiB7XG4gICAgICB2YXIgX3gkZGF0YTtcblxuICAgICAgcmV0dXJuICgoX3gkZGF0YSA9IHguZGF0YSkgPT09IG51bGwgfHwgX3gkZGF0YSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkZGF0YS5pZCkgIT0gbnVsbDtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgcmVsYXRpb25zaGlwR2V0dGVyLFxuICAgICAgaXRlbXNBcnJGcm9tRGF0YVxuICAgIH07XG4gIH0sIFtkYXRhLCBlcnJvcl0pO1xuICBsZXQgW3tcbiAgICBpdGVtcyxcbiAgICBpdGVtc0FyckZyb21EYXRhOiBpdGVtc0FyckZyb21EYXRhU3RhdGVcbiAgfSwgc2V0SXRlbXNTdGF0ZV0gPSBSZWFjdC51c2VTdGF0ZSh7XG4gICAgaXRlbXNBcnJGcm9tRGF0YTogW10sXG4gICAgaXRlbXM6IHt9XG4gIH0pO1xuXG4gIGlmIChpdGVtc0FyckZyb21EYXRhU3RhdGUgIT09IGl0ZW1zQXJyRnJvbURhdGEpIHtcbiAgICBsZXQgbmV3SXRlbXMgPSB7fTtcbiAgICBpdGVtc0FyckZyb21EYXRhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICB2YXIgX2l0ZW1zJGl0ZW0kZGF0YSRpZCwgX2l0ZW0kZXJyb3JzLCBfaW5pdGlhbEl0ZW1JblN0YXRlJGU7XG5cbiAgICAgIGNvbnN0IGluaXRpYWxJdGVtSW5TdGF0ZSA9IChfaXRlbXMkaXRlbSRkYXRhJGlkID0gaXRlbXNbaXRlbS5kYXRhLmlkXSkgPT09IG51bGwgfHwgX2l0ZW1zJGl0ZW0kZGF0YSRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW1zJGl0ZW0kZGF0YSRpZC5mcm9tSW5pdGlhbFF1ZXJ5O1xuXG4gICAgICBpZiAoKGl0ZW1zW2l0ZW0uZGF0YS5pZF0gJiYgaW5pdGlhbEl0ZW1JblN0YXRlIHx8ICFpdGVtc1tpdGVtLmRhdGEuaWRdKSAmJiAoIWluaXRpYWxJdGVtSW5TdGF0ZSB8fCBpdGVtLmRhdGEgIT09IGluaXRpYWxJdGVtSW5TdGF0ZS5kYXRhIHx8ICgoX2l0ZW0kZXJyb3JzID0gaXRlbS5lcnJvcnMpID09PSBudWxsIHx8IF9pdGVtJGVycm9ycyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2l0ZW0kZXJyb3JzLmxlbmd0aCkgIT09ICgoX2luaXRpYWxJdGVtSW5TdGF0ZSRlID0gaW5pdGlhbEl0ZW1JblN0YXRlLmVycm9ycykgPT09IG51bGwgfHwgX2luaXRpYWxJdGVtSW5TdGF0ZSRlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5pdGlhbEl0ZW1JblN0YXRlJGUubGVuZ3RoKSB8fCAoaXRlbS5lcnJvcnMgfHwgW10pLnNvbWUoKGVyciwgaSkgPT4ge1xuICAgICAgICB2YXIgX2luaXRpYWxJdGVtSW5TdGF0ZSRlMjtcblxuICAgICAgICByZXR1cm4gZXJyICE9PSAoKF9pbml0aWFsSXRlbUluU3RhdGUkZTIgPSBpbml0aWFsSXRlbUluU3RhdGUuZXJyb3JzKSA9PT0gbnVsbCB8fCBfaW5pdGlhbEl0ZW1JblN0YXRlJGUyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfaW5pdGlhbEl0ZW1JblN0YXRlJGUyW2ldKTtcbiAgICAgIH0pKSkge1xuICAgICAgICBuZXdJdGVtc1tpdGVtLmRhdGEuaWRdID0ge1xuICAgICAgICAgIGN1cnJlbnQ6IGl0ZW0sXG4gICAgICAgICAgZnJvbUluaXRpYWxRdWVyeTogaXRlbVxuICAgICAgICB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbmV3SXRlbXNbaXRlbS5kYXRhLmlkXSA9IGl0ZW1zW2l0ZW0uZGF0YS5pZF07XG4gICAgICB9XG4gICAgfSk7XG4gICAgaXRlbXMgPSBuZXdJdGVtcztcbiAgICBzZXRJdGVtc1N0YXRlKHtcbiAgICAgIGl0ZW1zOiBuZXdJdGVtcyxcbiAgICAgIGl0ZW1zQXJyRnJvbURhdGFcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgaXRlbXM6IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgICAgY29uc3QgaXRlbXNUb1JldHVybiA9IHt9O1xuICAgICAgT2JqZWN0LmtleXMoaXRlbXMpLmZvckVhY2goaWQgPT4ge1xuICAgICAgICBpdGVtc1RvUmV0dXJuW2lkXSA9IGl0ZW1zW2lkXS5jdXJyZW50O1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gaXRlbXNUb1JldHVybjtcbiAgICB9LCBbaXRlbXNdKSxcbiAgICBzZXRJdGVtczogUmVhY3QudXNlQ2FsbGJhY2soaXRlbXMgPT4ge1xuICAgICAgc2V0SXRlbXNTdGF0ZShzdGF0ZSA9PiB7XG4gICAgICAgIGxldCBpdGVtc0ZvclN0YXRlID0ge307XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICB2YXIgX3N0YXRlJGl0ZW1zJGlkO1xuXG4gICAgICAgICAgaWYgKGl0ZW1zW2lkXSA9PT0gKChfc3RhdGUkaXRlbXMkaWQgPSBzdGF0ZS5pdGVtc1tpZF0pID09PSBudWxsIHx8IF9zdGF0ZSRpdGVtcyRpZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3N0YXRlJGl0ZW1zJGlkLmN1cnJlbnQpKSB7XG4gICAgICAgICAgICBpdGVtc0ZvclN0YXRlW2lkXSA9IHN0YXRlLml0ZW1zW2lkXTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9zdGF0ZSRpdGVtcyRpZDI7XG5cbiAgICAgICAgICAgIGl0ZW1zRm9yU3RhdGVbaWRdID0ge1xuICAgICAgICAgICAgICBjdXJyZW50OiBpdGVtc1tpZF0sXG4gICAgICAgICAgICAgIGZyb21Jbml0aWFsUXVlcnk6IChfc3RhdGUkaXRlbXMkaWQyID0gc3RhdGUuaXRlbXNbaWRdKSA9PT0gbnVsbCB8fCBfc3RhdGUkaXRlbXMkaWQyID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaXRlbXMkaWQyLmZyb21Jbml0aWFsUXVlcnlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpdGVtc0FyckZyb21EYXRhOiBzdGF0ZS5pdGVtc0FyckZyb21EYXRhLFxuICAgICAgICAgIGl0ZW1zOiBpdGVtc0ZvclN0YXRlXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9LCBbc2V0SXRlbXNTdGF0ZV0pLFxuICAgIHN0YXRlOiAoKCkgPT4ge1xuICAgICAgaWYgKGxvYWRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBraW5kOiAnbG9hZGluZydcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVycm9yICE9PSBudWxsICYmIGVycm9yICE9PSB2b2lkIDAgJiYgZXJyb3IubmV0d29ya0Vycm9yKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAga2luZDogJ2Vycm9yJyxcbiAgICAgICAgICBtZXNzYWdlOiBlcnJvci5uZXR3b3JrRXJyb3IubWVzc2FnZVxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICBpZiAoZmllbGQubWFueSAmJiAhcmVsYXRpb25zaGlwR2V0dGVyLmRhdGEpIHtcbiAgICAgICAgdmFyIF9yZWxhdGlvbnNoaXBHZXR0ZXIkZTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdlcnJvcicsXG4gICAgICAgICAgbWVzc2FnZTogKChfcmVsYXRpb25zaGlwR2V0dGVyJGUgPSByZWxhdGlvbnNoaXBHZXR0ZXIuZXJyb3JzKSA9PT0gbnVsbCB8fCBfcmVsYXRpb25zaGlwR2V0dGVyJGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9yZWxhdGlvbnNoaXBHZXR0ZXIkZVswXS5tZXNzYWdlKSB8fCAnJ1xuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnbG9hZGVkJ1xuICAgICAgfTtcbiAgICB9KSgpXG4gIH07XG59XG5mdW5jdGlvbiB1c2VGaWVsZHNPYmoobGlzdCwgZmllbGRzKSB7XG4gIHJldHVybiBSZWFjdC51c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBlZGl0RmllbGRzID0ge307XG4gICAgZmllbGRzID09PSBudWxsIHx8IGZpZWxkcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZmllbGRzLmZvckVhY2goZmllbGRQYXRoID0+IHtcbiAgICAgIGVkaXRGaWVsZHNbZmllbGRQYXRoXSA9IGxpc3QuZmllbGRzW2ZpZWxkUGF0aF07XG4gICAgfSk7XG4gICAgcmV0dXJuIGVkaXRGaWVsZHM7XG4gIH0sIFtmaWVsZHMsIGxpc3QuZmllbGRzXSk7XG59XG5cbmZ1bmN0aW9uIElubGluZUVkaXQoe1xuICBmaWVsZHMsXG4gIGxpc3QsXG4gIHNlbGVjdGVkRmllbGRzLFxuICBpdGVtR2V0dGVyLFxuICBvbkNhbmNlbCxcbiAgb25TYXZlXG59KSB7XG4gIHZhciBfaXRlbUdldHRlciRlcnJvcnM7XG5cbiAgY29uc3QgZmllbGRzT2JqID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkcyk7XG4gIGNvbnN0IFt1cGRhdGUsIHtcbiAgICBsb2FkaW5nLFxuICAgIGVycm9yXG4gIH1dID0gY2xpZW50LnVzZU11dGF0aW9uKGNsaWVudC5ncWxgbXV0YXRpb24gKCRkYXRhOiAke2xpc3QuZ3FsTmFtZXMudXBkYXRlSW5wdXROYW1lfSEsICRpZDogSUQhKSB7XG4gICAgICAgICAgaXRlbTogJHtsaXN0LmdxbE5hbWVzLnVwZGF0ZU11dGF0aW9uTmFtZX0od2hlcmU6IHsgaWQ6ICRpZCB9LCBkYXRhOiAkZGF0YSkge1xuICAgICAgICAgICAgJHtzZWxlY3RlZEZpZWxkc31cbiAgICAgICAgICB9XG4gICAgICAgIH1gLCB7XG4gICAgZXJyb3JQb2xpY3k6ICdhbGwnXG4gIH0pO1xuICBjb25zdCBbc3RhdGUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHVzZUludmFsaWRGaWVsZHMuZGVzZXJpYWxpemVWYWx1ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIpO1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZSxcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxuICAgIH07XG4gIH0pO1xuXG4gIGlmIChzdGF0ZS5pdGVtICE9PSBpdGVtR2V0dGVyLmRhdGEgJiYgKF9pdGVtR2V0dGVyJGVycm9ycyA9IGl0ZW1HZXR0ZXIuZXJyb3JzKSAhPT0gbnVsbCAmJiBfaXRlbUdldHRlciRlcnJvcnMgIT09IHZvaWQgMCAmJiBfaXRlbUdldHRlciRlcnJvcnMuZXZlcnkoeCA9PiB7XG4gICAgdmFyIF94JHBhdGg7XG5cbiAgICByZXR1cm4gKChfeCRwYXRoID0geC5wYXRoKSA9PT0gbnVsbCB8fCBfeCRwYXRoID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfeCRwYXRoLmxlbmd0aCkgIT09IDE7XG4gIH0pKSB7XG4gICAgY29uc3QgdmFsdWUgPSB1c2VJbnZhbGlkRmllbGRzLmRlc2VyaWFsaXplVmFsdWUoZmllbGRzT2JqLCBpdGVtR2V0dGVyKTtcbiAgICBzZXRWYWx1ZSh7XG4gICAgICB2YWx1ZSxcbiAgICAgIGl0ZW06IGl0ZW1HZXR0ZXIuZGF0YVxuICAgIH0pO1xuICB9XG5cbiAgY29uc3Qge1xuICAgIGNoYW5nZWRGaWVsZHMsXG4gICAgZGF0YUZvclVwZGF0ZVxuICB9ID0gdXNlSW52YWxpZEZpZWxkcy51c2VDaGFuZ2VkRmllbGRzQW5kRGF0YUZvclVwZGF0ZShmaWVsZHNPYmosIGl0ZW1HZXR0ZXIsIHN0YXRlLnZhbHVlKTtcbiAgY29uc3QgaW52YWxpZEZpZWxkcyA9IHVzZUludmFsaWRGaWVsZHMudXNlSW52YWxpZEZpZWxkcyhmaWVsZHNPYmosIHN0YXRlLnZhbHVlKTtcbiAgY29uc3QgW2ZvcmNlVmFsaWRhdGlvbiwgc2V0Rm9yY2VWYWxpZGF0aW9uXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgdG9hc3RzID0gdG9hc3QudXNlVG9hc3RzKCk7XG4gIGNvbnN0IHNhdmVCdXR0b25Qcm9wcyA9IHtcbiAgICBpc0xvYWRpbmc6IGxvYWRpbmcsXG4gICAgd2VpZ2h0OiAnYm9sZCcsXG4gICAgc2l6ZTogJ3NtYWxsJyxcbiAgICB0b25lOiAnYWN0aXZlJyxcbiAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICBjb25zdCBuZXdGb3JjZVZhbGlkYXRpb24gPSBpbnZhbGlkRmllbGRzLnNpemUgIT09IDA7XG4gICAgICBzZXRGb3JjZVZhbGlkYXRpb24obmV3Rm9yY2VWYWxpZGF0aW9uKTtcbiAgICAgIGlmIChuZXdGb3JjZVZhbGlkYXRpb24pIHJldHVybjtcbiAgICAgIHVwZGF0ZSh7XG4gICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgIGRhdGE6IGRhdGFGb3JVcGRhdGUsXG4gICAgICAgICAgaWQ6IGl0ZW1HZXR0ZXIuZ2V0KCdpZCcpLmRhdGFcbiAgICAgICAgfVxuICAgICAgfSkudGhlbigoe1xuICAgICAgICBkYXRhLFxuICAgICAgICBlcnJvcnNcbiAgICAgIH0pID0+IHtcbiAgICAgICAgLy8gd2UncmUgY2hlY2tpbmcgZm9yIHBhdGgubGVuZ3RoID09PSAxIGJlY2F1c2UgZXJyb3JzIHdpdGggYSBwYXRoIGxhcmdlciB0aGFuIDEgd2lsbCBiZSBmaWVsZCBsZXZlbCBlcnJvcnNcbiAgICAgICAgLy8gd2hpY2ggYXJlIGhhbmRsZWQgc2VwZXJhdGVseSBhbmQgZG8gbm90IGluZGljYXRlIGEgZmFpbHVyZSB0byB1cGRhdGUgdGhlIGl0ZW1cbiAgICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcbiAgICAgICAgICB2YXIgX3gkcGF0aDI7XG5cbiAgICAgICAgICByZXR1cm4gKChfeCRwYXRoMiA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgyLmxlbmd0aCkgPT09IDE7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogJ0ZhaWxlZCB0byB1cGRhdGUgaXRlbScsXG4gICAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3IubWVzc2FnZVxuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgICB0aXRsZTogZGF0YS5pdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgZGF0YS5pdGVtLmlkLFxuICAgICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcbiAgICAgICAgICAgIG1lc3NhZ2U6ICdTYXZlZCBzdWNjZXNzZnVsbHknXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25TYXZlKGRhdGFHZXR0ZXIubWFrZURhdGFHZXR0ZXIoZGF0YSwgZXJyb3JzKS5nZXQoJ2l0ZW0nKSk7XG4gICAgICAgIH1cbiAgICAgIH0pLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIHRvYXN0cy5hZGRUb2FzdCh7XG4gICAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxuICAgICAgICAgIHRvbmU6ICduZWdhdGl2ZScsXG4gICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGNoaWxkcmVuOiAnU2F2ZSdcbiAgfTtcbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goR3JhcGhRTEVycm9yTm90aWNlLkdyYXBoUUxFcnJvck5vdGljZSwge1xuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvciAvLyB3ZSdyZSBjaGVja2luZyBmb3IgcGF0aC5sZW5ndGggPT09IDEgYmVjYXVzZSBlcnJvcnMgd2l0aCBhIHBhdGggbGFyZ2VyIHRoYW4gMSB3aWxsIGJlIGZpZWxkIGxldmVsIGVycm9yc1xuICAgIC8vIHdoaWNoIGFyZSBoYW5kbGVkIHNlcGVyYXRlbHkgYW5kIGRvIG5vdCBpbmRpY2F0ZSBhIGZhaWx1cmUgdG8gdXBkYXRlIHRoZSBpdGVtXG4gICAgLFxuICAgIGVycm9yczogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLmdyYXBoUUxFcnJvcnMuZmlsdGVyKHggPT4ge1xuICAgICAgdmFyIF94JHBhdGgzO1xuXG4gICAgICByZXR1cm4gKChfeCRwYXRoMyA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aDMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF94JHBhdGgzLmxlbmd0aCkgPT09IDE7XG4gICAgfSlcbiAgfSksIGNvcmUuanN4KEZpZWxkcy5GaWVsZHMsIHtcbiAgICBmaWVsZE1vZGVzOiBudWxsLFxuICAgIGZpZWxkczogZmllbGRzT2JqLFxuICAgIGZvcmNlVmFsaWRhdGlvbjogZm9yY2VWYWxpZGF0aW9uLFxuICAgIGludmFsaWRGaWVsZHM6IGludmFsaWRGaWVsZHMsXG4gICAgb25DaGFuZ2U6IFJlYWN0LnVzZUNhbGxiYWNrKHZhbHVlID0+IHtcbiAgICAgIHNldFZhbHVlKHN0YXRlID0+ICh7XG4gICAgICAgIGl0ZW06IHN0YXRlLml0ZW0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZShzdGF0ZS52YWx1ZSlcbiAgICAgIH0pKTtcbiAgICB9LCBbc2V0VmFsdWVdKSxcbiAgICB2YWx1ZTogc3RhdGUudmFsdWVcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgY2hhbmdlZEZpZWxkcy5zaXplID8gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgc2F2ZUJ1dHRvblByb3BzKSA6IGNvcmUuanN4KHRvb2x0aXAuVG9vbHRpcCwge1xuICAgIGNvbnRlbnQ6IFwiTm8gZmllbGRzIGhhdmUgYmVlbiBtb2RpZmllZCBzbyB5b3UgY2Fubm90IHNhdmUgY2hhbmdlc1wiXG4gIH0sIHByb3BzID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIF9leHRlbmRzKHt9LCBwcm9wcywgc2F2ZUJ1dHRvblByb3BzLCB7XG4gICAgLy8gbWFraW5nIG9uQ2xpY2sgdW5kZWZpbmVkIGluc3RlYWQgb2YgbWFraW5nIHRoZSBidXR0b24gZGlzYWJsZWQgc28gdGhlIGJ1dHRvbiBjYW4gYmUgZm9jdXNzZWQgc28ga2V5Ym9hcmQgdXNlcnMgY2FuIHNlZSB0aGUgdG9vbHRpcFxuICAgIG9uQ2xpY2s6IHVuZGVmaW5lZFxuICB9KSkpLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHdlaWdodDogXCJub25lXCIsXG4gICAgb25DbGljazogb25DYW5jZWxcbiAgfSwgXCJDYW5jZWxcIikpKTtcbn1cblxuLyoqIEBqc3hSdW50aW1lIGNsYXNzaWMgKi9cbmZ1bmN0aW9uIElubGluZUNyZWF0ZSh7XG4gIGxpc3QsXG4gIG9uQ2FuY2VsLFxuICBvbkNyZWF0ZSxcbiAgZmllbGRzOiBmaWVsZFBhdGhzLFxuICBzZWxlY3RlZEZpZWxkc1xufSkge1xuICBjb25zdCB0b2FzdHMgPSB0b2FzdC51c2VUb2FzdHMoKTtcbiAgY29uc3QgZmllbGRzID0gdXNlRmllbGRzT2JqKGxpc3QsIGZpZWxkUGF0aHMpO1xuICBjb25zdCBbY3JlYXRlSXRlbSwge1xuICAgIGxvYWRpbmcsXG4gICAgZXJyb3JcbiAgfV0gPSBjbGllbnQudXNlTXV0YXRpb24oY2xpZW50LmdxbGBtdXRhdGlvbigkZGF0YTogJHtsaXN0LmdxbE5hbWVzLmNyZWF0ZUlucHV0TmFtZX0hKSB7XG4gICAgICBpdGVtOiAke2xpc3QuZ3FsTmFtZXMuY3JlYXRlTXV0YXRpb25OYW1lfShkYXRhOiAkZGF0YSkge1xuICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgIH1cbiAgfWApO1xuICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IFJlYWN0LnVzZVN0YXRlKCgpID0+IHtcbiAgICBjb25zdCB2YWx1ZSA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGZpZWxkcykuZm9yRWFjaChmaWVsZFBhdGggPT4ge1xuICAgICAgdmFsdWVbZmllbGRQYXRoXSA9IHtcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZGVmYXVsdFZhbHVlXG4gICAgICB9O1xuICAgIH0pO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG4gIGNvbnN0IGludmFsaWRGaWVsZHMgPSB1c2VJbnZhbGlkRmllbGRzLnVzZUludmFsaWRGaWVsZHMoZmllbGRzLCB2YWx1ZSk7XG4gIGNvbnN0IFtmb3JjZVZhbGlkYXRpb24sIHNldEZvcmNlVmFsaWRhdGlvbl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3Qgb25DcmVhdGVDbGljayA9ICgpID0+IHtcbiAgICBjb25zdCBuZXdGb3JjZVZhbGlkYXRpb24gPSBpbnZhbGlkRmllbGRzLnNpemUgIT09IDA7XG4gICAgc2V0Rm9yY2VWYWxpZGF0aW9uKG5ld0ZvcmNlVmFsaWRhdGlvbik7XG4gICAgaWYgKG5ld0ZvcmNlVmFsaWRhdGlvbikgcmV0dXJuO1xuICAgIGNvbnN0IGRhdGEgPSB7fTtcbiAgICBjb25zdCBhbGxTZXJpYWxpemVkVmFsdWVzID0gdXNlSW52YWxpZEZpZWxkcy5zZXJpYWxpemVWYWx1ZVRvT2JqQnlGaWVsZEtleShmaWVsZHMsIHZhbHVlKTtcbiAgICBPYmplY3Qua2V5cyhhbGxTZXJpYWxpemVkVmFsdWVzKS5mb3JFYWNoKGZpZWxkUGF0aCA9PiB7XG4gICAgICBjb25zdCB7XG4gICAgICAgIGNvbnRyb2xsZXJcbiAgICAgIH0gPSBmaWVsZHNbZmllbGRQYXRoXTtcbiAgICAgIGNvbnN0IHNlcmlhbGl6ZWQgPSBhbGxTZXJpYWxpemVkVmFsdWVzW2ZpZWxkUGF0aF07XG5cbiAgICAgIGlmICghaXNEZWVwRXF1YWxfX2RlZmF1bHRbXCJkZWZhdWx0XCJdKHNlcmlhbGl6ZWQsIGNvbnRyb2xsZXIuc2VyaWFsaXplKGNvbnRyb2xsZXIuZGVmYXVsdFZhbHVlKSkpIHtcbiAgICAgICAgT2JqZWN0LmFzc2lnbihkYXRhLCBzZXJpYWxpemVkKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjcmVhdGVJdGVtKHtcbiAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICBkYXRhXG4gICAgICB9XG4gICAgfSkudGhlbigoe1xuICAgICAgZGF0YSxcbiAgICAgIGVycm9yc1xuICAgIH0pID0+IHtcbiAgICAgIC8vIHdlJ3JlIGNoZWNraW5nIGZvciBwYXRoLmxlbmd0aCA9PT0gMSBiZWNhdXNlIGVycm9ycyB3aXRoIGEgcGF0aCBsYXJnZXIgdGhhbiAxIHdpbGwgYmUgZmllbGQgbGV2ZWwgZXJyb3JzXG4gICAgICAvLyB3aGljaCBhcmUgaGFuZGxlZCBzZXBlcmF0ZWx5IGFuZCBkbyBub3QgaW5kaWNhdGUgYSBmYWlsdXJlIHRvIHVwZGF0ZSB0aGUgaXRlbVxuICAgICAgY29uc3QgZXJyb3IgPSBlcnJvcnMgPT09IG51bGwgfHwgZXJyb3JzID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvcnMuZmluZCh4ID0+IHtcbiAgICAgICAgdmFyIF94JHBhdGg7XG5cbiAgICAgICAgcmV0dXJuICgoX3gkcGF0aCA9IHgucGF0aCkgPT09IG51bGwgfHwgX3gkcGF0aCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3gkcGF0aC5sZW5ndGgpID09PSAxO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChlcnJvcikge1xuICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiAnRmFpbGVkIHRvIGNyZWF0ZSBpdGVtJyxcbiAgICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0b2FzdHMuYWRkVG9hc3Qoe1xuICAgICAgICAgIHRpdGxlOiBkYXRhLml0ZW1bbGlzdC5sYWJlbEZpZWxkXSB8fCBkYXRhLml0ZW0uaWQsXG4gICAgICAgICAgdG9uZTogJ3Bvc2l0aXZlJyxcbiAgICAgICAgICBtZXNzYWdlOiAnU2F2ZWQgc3VjY2Vzc2Z1bGx5J1xuICAgICAgICB9KTtcbiAgICAgICAgb25DcmVhdGUoZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpLmdldCgnaXRlbScpKTtcbiAgICAgIH1cbiAgICB9KS5jYXRjaChlcnIgPT4ge1xuICAgICAgdG9hc3RzLmFkZFRvYXN0KHtcbiAgICAgICAgdGl0bGU6ICdGYWlsZWQgdG8gdXBkYXRlIGl0ZW0nLFxuICAgICAgICB0b25lOiAnbmVnYXRpdmUnLFxuICAgICAgICBtZXNzYWdlOiBlcnIubWVzc2FnZVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwieGxhcmdlXCJcbiAgfSwgZXJyb3IgJiYgY29yZS5qc3goR3JhcGhRTEVycm9yTm90aWNlLkdyYXBoUUxFcnJvck5vdGljZSwge1xuICAgIG5ldHdvcmtFcnJvcjogZXJyb3IgPT09IG51bGwgfHwgZXJyb3IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGVycm9yLm5ldHdvcmtFcnJvcixcbiAgICBlcnJvcnM6IGVycm9yID09PSBudWxsIHx8IGVycm9yID09PSB2b2lkIDAgPyB2b2lkIDAgOiBlcnJvci5ncmFwaFFMRXJyb3JzXG4gIH0pLCBjb3JlLmpzeChGaWVsZHMuRmllbGRzLCB7XG4gICAgZmllbGRNb2RlczogbnVsbCxcbiAgICBmaWVsZHM6IGZpZWxkcyxcbiAgICBmb3JjZVZhbGlkYXRpb246IGZvcmNlVmFsaWRhdGlvbixcbiAgICBpbnZhbGlkRmllbGRzOiBpbnZhbGlkRmllbGRzLFxuICAgIG9uQ2hhbmdlOiBzZXRWYWx1ZSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBnYXA6IFwic21hbGxcIixcbiAgICBhY3Jvc3M6IHRydWVcbiAgfSwgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIGlzTG9hZGluZzogbG9hZGluZyxcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgdG9uZTogXCJwb3NpdGl2ZVwiLFxuICAgIHdlaWdodDogXCJib2xkXCIsXG4gICAgb25DbGljazogb25DcmVhdGVDbGlja1xuICB9LCBcIkNyZWF0ZSBcIiwgbGlzdC5zaW5ndWxhciksIGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgd2VpZ2h0OiBcIm5vbmVcIixcbiAgICBvbkNsaWNrOiBvbkNhbmNlbFxuICB9LCBcIkNhbmNlbFwiKSkpO1xufVxuXG5jb25zdCBfZXhjbHVkZWQgPSBbXCJtb2RlXCJdO1xuY29uc3QgQ2FyZENvbnRhaW5lciA9IGNvcmUuZm9yd2FyZFJlZldpdGhBcygoX3JlZiwgcmVmKSA9PiB7XG4gIGxldCB7XG4gICAgbW9kZSA9ICd2aWV3J1xuICB9ID0gX3JlZixcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9yZWYsIF9leGNsdWRlZCk7XG5cbiAgY29uc3Qge1xuICAgIHRvbmVzXG4gIH0gPSBjb3JlLnVzZVRoZW1lKCk7XG4gIGNvbnN0IHRvbmUgPSB0b25lc1ttb2RlID09PSAnZWRpdCcgPyAnYWN0aXZlJyA6IG1vZGUgPT09ICdjcmVhdGUnID8gJ3Bvc2l0aXZlJyA6ICdwYXNzaXZlJ107XG4gIHJldHVybiBjb3JlLmpzeChjb3JlLkJveCwgX2V4dGVuZHMoe1xuICAgIHJlZjogcmVmLFxuICAgIHBhZGRpbmdMZWZ0OiBcInhsYXJnZVwiLFxuICAgIGNzczoge1xuICAgICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXG4gICAgICAnOmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiIFwiJyxcbiAgICAgICAgYmFja2dyb3VuZENvbG9yOiB0b25lLmJvcmRlcixcbiAgICAgICAgYm9yZGVyUmFkaXVzOiA0LFxuICAgICAgICB3aWR0aDogNCxcbiAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICAgIGxlZnQ6IDAsXG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgYm90dG9tOiAwLFxuICAgICAgICB6SW5kZXg6IDFcbiAgICAgIH1cbiAgICB9XG4gIH0sIHByb3BzKSk7XG59KTtcbmZ1bmN0aW9uIENhcmRzKHtcbiAgbG9jYWxMaXN0LFxuICBmaWVsZCxcbiAgZm9yZWlnbkxpc3QsXG4gIGlkLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvblxufSkge1xuICB2YXIgX2ZpZWxkJGRpc3BsYXkkaW5saW5lO1xuXG4gIGxldCBzZWxlY3RlZEZpZWxkcyA9IFsuLi5uZXcgU2V0KFsuLi5maWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMsIC4uLigoKF9maWVsZCRkaXNwbGF5JGlubGluZSA9IGZpZWxkLmRpc3BsYXkuaW5saW5lRWRpdCkgPT09IG51bGwgfHwgX2ZpZWxkJGRpc3BsYXkkaW5saW5lID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkZGlzcGxheSRpbmxpbmUuZmllbGRzKSB8fCBbXSldKV0ubWFwKGZpZWxkUGF0aCA9PiB7XG4gICAgcmV0dXJuIGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdLmNvbnRyb2xsZXIuZ3JhcGhxbFNlbGVjdGlvbjtcbiAgfSkuam9pbignXFxuJyk7XG5cbiAgaWYgKCFmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMuaW5jbHVkZXMoJ2lkJykpIHtcbiAgICBzZWxlY3RlZEZpZWxkcyArPSAnXFxuaWQnO1xuICB9XG5cbiAgaWYgKCFmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMuaW5jbHVkZXMoZm9yZWlnbkxpc3QubGFiZWxGaWVsZCkgJiYgZm9yZWlnbkxpc3QubGFiZWxGaWVsZCAhPT0gJ2lkJykge1xuICAgIHNlbGVjdGVkRmllbGRzICs9IGBcXG4ke2ZvcmVpZ25MaXN0LmxhYmVsRmllbGR9YDtcbiAgfVxuXG4gIGNvbnN0IHtcbiAgICBpdGVtcyxcbiAgICBzZXRJdGVtcyxcbiAgICBzdGF0ZTogaXRlbXNTdGF0ZVxuICB9ID0gdXNlSXRlbVN0YXRlKHtcbiAgICBzZWxlY3RlZEZpZWxkcyxcbiAgICBsb2NhbExpc3QsXG4gICAgaWQsXG4gICAgZmllbGRcbiAgfSk7XG4gIGNvbnN0IGNsaWVudCQxID0gY2xpZW50LnVzZUFwb2xsb0NsaWVudCgpO1xuICBjb25zdCBbaXNMb2FkaW5nTGF6eUl0ZW1zLCBzZXRJc0xvYWRpbmdMYXp5SXRlbXNdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbc2hvd0Nvbm5lY3RJdGVtcywgc2V0U2hvd0Nvbm5lY3RJdGVtc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IFtoaWRlQ29ubmVjdEl0ZW1zTGFiZWwsIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbF0gPSBSZWFjdC51c2VTdGF0ZSgnQ2FuY2VsJyk7XG4gIGNvbnN0IGVkaXRSZWYgPSBSZWFjdC51c2VSZWYobnVsbCk7XG4gIGNvbnN0IGlzTW91bnRlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaXNNb3VudGVkUmVmLmN1cnJlbnQgPSB0cnVlO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICBpc01vdW50ZWRSZWYuY3VycmVudCA9IGZhbHNlO1xuICAgIH07XG4gIH0pO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmICh2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkKSB7XG4gICAgICB2YXIgX2VkaXRSZWYkY3VycmVudDtcblxuICAgICAgZWRpdFJlZiA9PT0gbnVsbCB8fCBlZGl0UmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2VkaXRSZWYkY3VycmVudCA9IGVkaXRSZWYuY3VycmVudCkgPT09IG51bGwgfHwgX2VkaXRSZWYkY3VycmVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2VkaXRSZWYkY3VycmVudC5mb2N1cygpO1xuICAgIH1cbiAgfSwgW3ZhbHVlXSk7XG5cbiAgaWYgKGl0ZW1zU3RhdGUua2luZCA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KFwiZGl2XCIsIG51bGwsIGNvcmUuanN4KGxvYWRpbmcuTG9hZGluZ0RvdHMsIHtcbiAgICAgIGxhYmVsOiBgTG9hZGluZyBpdGVtcyBmb3IgJHtmaWVsZC5sYWJlbH0gZmllbGRgXG4gICAgfSkpO1xuICB9XG5cbiAgaWYgKGl0ZW1zU3RhdGUua2luZCA9PT0gJ2Vycm9yJykge1xuICAgIHJldHVybiBjb3JlLmpzeChcInNwYW5cIiwge1xuICAgICAgY3NzOiB7XG4gICAgICAgIGNvbG9yOiAncmVkJ1xuICAgICAgfVxuICAgIH0sIGl0ZW1zU3RhdGUubWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJ4bGFyZ2VcIlxuICB9LCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgYXM6IFwidWxcIixcbiAgICBnYXA6IFwieGxhcmdlXCIsXG4gICAgY3NzOiB7XG4gICAgICBwYWRkaW5nOiAwLFxuICAgICAgbWFyZ2luQm90dG9tOiAwLFxuICAgICAgbGk6IHtcbiAgICAgICAgbGlzdFN0eWxlOiAnbm9uZSdcbiAgICAgIH1cbiAgICB9XG4gIH0sIFsuLi52YWx1ZS5jdXJyZW50SWRzXS5tYXAoKGlkLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGl0ZW1HZXR0ZXIgPSBpdGVtc1tpZF07XG4gICAgY29uc3QgaXNFZGl0TW9kZSA9ICEhKG9uQ2hhbmdlICE9PSB1bmRlZmluZWQpICYmIHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQuaGFzKGlkKTtcbiAgICByZXR1cm4gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgICAgcm9sZTogXCJzdGF0dXNcIixcbiAgICAgIG1vZGU6IGlzRWRpdE1vZGUgPyAnZWRpdCcgOiAndmlldydcbiAgICB9LCBjb3JlLmpzeChjb3JlLlZpc3VhbGx5SGlkZGVuLCB7XG4gICAgICBhczogXCJoMlwiXG4gICAgfSwgYCR7ZmllbGQubGFiZWx9ICR7aW5kZXggKyAxfSAke2lzRWRpdE1vZGUgPyAnZWRpdCcgOiAndmlldyd9IG1vZGVgKSwgaXNFZGl0TW9kZSA/IGNvcmUuanN4KElubGluZUVkaXQsIHtcbiAgICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgICAgZmllbGRzOiBmaWVsZC5kaXNwbGF5LmlubGluZUVkaXQuZmllbGRzLFxuICAgICAgb25TYXZlOiBuZXdJdGVtR2V0dGVyID0+IHtcbiAgICAgICAgc2V0SXRlbXMoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBpdGVtcyksIHt9LCB7XG4gICAgICAgICAgW2lkXTogbmV3SXRlbUdldHRlclxuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGl0ZW1zQmVpbmdFZGl0ZWQgPSBuZXcgU2V0KHZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQpO1xuICAgICAgICBpdGVtc0JlaW5nRWRpdGVkLmRlbGV0ZShpZCk7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWRcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcbiAgICAgIGl0ZW1HZXR0ZXI6IGl0ZW1HZXR0ZXIsXG4gICAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgICBjb25zdCBpdGVtc0JlaW5nRWRpdGVkID0gbmV3IFNldCh2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkKTtcbiAgICAgICAgaXRlbXNCZWluZ0VkaXRlZC5kZWxldGUoaWQpO1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9KSA6IGNvcmUuanN4KFJlYWN0LkZyYWdtZW50LCBudWxsLCBjb3JlLmpzeChjb3JlLlN0YWNrLCB7XG4gICAgICBnYXA6IFwieGxhcmdlXCJcbiAgICB9LCBmaWVsZC5kaXNwbGF5LmNhcmRGaWVsZHMubWFwKGZpZWxkUGF0aCA9PiB7XG4gICAgICBjb25zdCBmaWVsZCA9IGZvcmVpZ25MaXN0LmZpZWxkc1tmaWVsZFBhdGhdO1xuICAgICAgY29uc3QgaXRlbUZvckZpZWxkID0ge307XG5cbiAgICAgIGZvciAoY29uc3QgZ3JhcGhxbEZpZWxkIG9mIGdldFJvb3RHcmFwaFFMRmllbGRzRnJvbUZpZWxkQ29udHJvbGxlci5nZXRSb290R3JhcGhRTEZpZWxkc0Zyb21GaWVsZENvbnRyb2xsZXIoZmllbGQuY29udHJvbGxlcikpIHtcbiAgICAgICAgY29uc3QgZmllbGRHZXR0ZXIgPSBpdGVtR2V0dGVyLmdldChncmFwaHFsRmllbGQpO1xuXG4gICAgICAgIGlmIChmaWVsZEdldHRlci5lcnJvcnMpIHtcbiAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBmaWVsZEdldHRlci5lcnJvcnNbMF0ubWVzc2FnZTtcbiAgICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBlcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbUZvckZpZWxkW2dyYXBocWxGaWVsZF0gPSBmaWVsZEdldHRlci5kYXRhO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29yZS5qc3goZmllbGQudmlld3MuQ2FyZFZhbHVlLCB7XG4gICAgICAgIGtleTogZmllbGRQYXRoLFxuICAgICAgICBmaWVsZDogZmllbGQuY29udHJvbGxlcixcbiAgICAgICAgaXRlbTogaXRlbUZvckZpZWxkXG4gICAgICB9KTtcbiAgICB9KSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICAgIGFjcm9zczogdHJ1ZSxcbiAgICAgIGdhcDogXCJzbWFsbFwiLFxuICAgICAgbWFyZ2luVG9wOiBcInhsYXJnZVwiXG4gICAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVFZGl0ICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgICAgZGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgICBvbkNsaWNrOiAoKSA9PiB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIGl0ZW1zQmVpbmdFZGl0ZWQ6IG5ldyBTZXQoWy4uLnZhbHVlLml0ZW1zQmVpbmdFZGl0ZWQsIGlkXSlcbiAgICAgICAgfSkpO1xuICAgICAgfSxcbiAgICAgIHRvbmU6IFwiYWN0aXZlXCJcbiAgICB9LCBcIkVkaXRcIiksIGZpZWxkLmRpc3BsYXkucmVtb3ZlTW9kZSA9PT0gJ2Rpc2Nvbm5lY3QnICYmIG9uQ2hhbmdlICE9PSB1bmRlZmluZWQgJiYgY29yZS5qc3godG9vbHRpcC5Ub29sdGlwLCB7XG4gICAgICBjb250ZW50OiBcIlRoaXMgaXRlbSB3aWxsIG5vdCBiZSBkZWxldGVkLiBJdCB3aWxsIG9ubHkgYmUgcmVtb3ZlZCBmcm9tIHRoaXMgZmllbGQuXCJcbiAgICB9LCBwcm9wcyA9PiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCBfZXh0ZW5kcyh7XG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgICAgY29uc3QgY3VycmVudElkcyA9IG5ldyBTZXQodmFsdWUuY3VycmVudElkcyk7XG4gICAgICAgIGN1cnJlbnRJZHMuZGVsZXRlKGlkKTtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgY3VycmVudElkc1xuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSwgcHJvcHMsIHtcbiAgICAgIHRvbmU6IFwibmVnYXRpdmVcIlxuICAgIH0pLCBcIlJlbW92ZVwiKSksIGZpZWxkLmRpc3BsYXkubGlua1RvSXRlbSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgICBzaXplOiBcInNtYWxsXCIsXG4gICAgICB3ZWlnaHQ6IFwibGlua1wiLFxuICAgICAgdG9uZTogXCJhY3RpdmVcIixcbiAgICAgIGNzczoge1xuICAgICAgICB0ZXh0RGVjb3JhdGlvbjogJ25vbmUnXG4gICAgICB9LFxuICAgICAgYXM6IGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluayxcbiAgICAgIGhyZWY6IGAvJHtmb3JlaWduTGlzdC5wYXRofS8ke2lkfWBcbiAgICB9LCBcIlZpZXcgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyLCBcIiBkZXRhaWxzXCIpKSkpO1xuICB9KSksIG9uQ2hhbmdlID09PSB1bmRlZmluZWQgPyBudWxsIDogZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ICYmIHNob3dDb25uZWN0SXRlbXMgPyBjb3JlLmpzeChDYXJkQ29udGFpbmVyLCB7XG4gICAgbW9kZTogXCJlZGl0XCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIG1hcmdpblk6IFwibWVkaXVtXCIsXG4gICAgYWNyb3NzOiB0cnVlLFxuICAgIGNzczoge1xuICAgICAgd2lkdGg6ICcxMDAlJyxcbiAgICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXG4gICAgICAnZGl2OmZpcnN0LW9mLXR5cGUnOiB7XG4gICAgICAgIGZsZXg6ICcyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgY29yZS5qc3goZmllbGRzX3R5cGVzX3JlbGF0aW9uc2hpcF92aWV3c19SZWxhdGlvbnNoaXBTZWxlY3RfZGlzdF9rZXlzdG9uZS5SZWxhdGlvbnNoaXBTZWxlY3QsIHtcbiAgICBhdXRvRm9jdXM6IHRydWUsXG4gICAgY29udHJvbFNob3VsZFJlbmRlclZhbHVlOiBpc0xvYWRpbmdMYXp5SXRlbXMsXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICBpc0xvYWRpbmc6IGlzTG9hZGluZ0xhenlJdGVtcyxcbiAgICBwbGFjZWhvbGRlcjogYFNlbGVjdCBhICR7Zm9yZWlnbkxpc3Quc2luZ3VsYXJ9YCxcbiAgICBwb3J0YWxNZW51OiB0cnVlLFxuICAgIHN0YXRlOiB7XG4gICAgICBraW5kOiAnbWFueScsXG5cbiAgICAgIGFzeW5jIG9uQ2hhbmdlKG9wdGlvbnMpIHtcbiAgICAgICAgLy8gVE9ETzogbWF5YmUgdXNlIHRoZSBleHRyYVNlbGVjdGlvbiBwcm9wIG9uIFJlbGF0aW9uc2hpcFNlbGVjdCBoZXJlXG4gICAgICAgIGNvbnN0IGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QgPSBbXTtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgIGlmICghdmFsdWUuY3VycmVudElkcy5oYXMoaXRlbS5pZCkpIHtcbiAgICAgICAgICAgIGl0ZW1zVG9GZXRjaEFuZENvbm5lY3QucHVzaChpdGVtLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpdGVtc1RvRmV0Y2hBbmRDb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7XG4gICAgICAgICAgICAgIGRhdGEsXG4gICAgICAgICAgICAgIGVycm9yc1xuICAgICAgICAgICAgfSA9IGF3YWl0IGNsaWVudCQxLnF1ZXJ5KHtcbiAgICAgICAgICAgICAgcXVlcnk6IGNsaWVudC5ncWxgcXVlcnkgKCRpZHM6IFtJRCFdISkge1xuICAgICAgICAgICAgICAgICAgICAgIGl0ZW1zOiAke2ZvcmVpZ25MaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHdoZXJlOiB7IGlkOiB7IGluOiAkaWRzIH19KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAke3NlbGVjdGVkRmllbGRzfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfWAsXG4gICAgICAgICAgICAgIHZhcmlhYmxlczoge1xuICAgICAgICAgICAgICAgIGlkczogaXRlbXNUb0ZldGNoQW5kQ29ubmVjdFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGlzTW91bnRlZFJlZi5jdXJyZW50KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRhdGFHZXR0ZXJzID0gZGF0YUdldHRlci5tYWtlRGF0YUdldHRlcihkYXRhLCBlcnJvcnMpO1xuICAgICAgICAgICAgICBjb25zdCBpdGVtc0RhdGFHZXR0ZXIgPSBkYXRhR2V0dGVycy5nZXQoJ2l0ZW1zJyk7XG5cbiAgICAgICAgICAgICAgbGV0IG5ld0l0ZW1zID0gX29iamVjdFNwcmVhZCh7fSwgaXRlbXMpO1xuXG4gICAgICAgICAgICAgIGxldCBuZXdDdXJyZW50SWRzID0gZmllbGQubWFueSA/IG5ldyBTZXQodmFsdWUuY3VycmVudElkcykgOiBuZXcgU2V0KCk7XG5cbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbXNEYXRhR2V0dGVyLmRhdGEpKSB7XG4gICAgICAgICAgICAgICAgaXRlbXNEYXRhR2V0dGVyLmRhdGEuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYgKChpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0uaWQpICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3Q3VycmVudElkcy5hZGQoaXRlbS5pZCk7XG4gICAgICAgICAgICAgICAgICAgIG5ld0l0ZW1zW2l0ZW0uaWRdID0gaXRlbXNEYXRhR2V0dGVyLmdldChpKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChuZXdDdXJyZW50SWRzLnNpemUpIHtcbiAgICAgICAgICAgICAgICBzZXRJdGVtcyhuZXdJdGVtcyk7XG4gICAgICAgICAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgICAgICAgICBjdXJyZW50SWRzOiBuZXdDdXJyZW50SWRzXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbCgnRG9uZScpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICAgIGlmIChpc01vdW50ZWRSZWYuY3VycmVudCkge1xuICAgICAgICAgICAgICBzZXRJc0xvYWRpbmdMYXp5SXRlbXMoZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgdmFsdWU6ICgoKSA9PiB7XG4gICAgICAgIGxldCBvcHRpb25zID0gW107XG4gICAgICAgIE9iamVjdC5rZXlzKGl0ZW1zKS5mb3JFYWNoKGlkID0+IHtcbiAgICAgICAgICBpZiAodmFsdWUuY3VycmVudElkcy5oYXMoaWQpKSB7XG4gICAgICAgICAgICBvcHRpb25zLnB1c2goe1xuICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgbGFiZWw6IGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICAgIH0pKClcbiAgICB9XG4gIH0pLCBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4gc2V0U2hvd0Nvbm5lY3RJdGVtcyhmYWxzZSlcbiAgfSwgaGlkZUNvbm5lY3RJdGVtc0xhYmVsKSkpIDogdmFsdWUuaXRlbUJlaW5nQ3JlYXRlZCA/IGNvcmUuanN4KENhcmRDb250YWluZXIsIHtcbiAgICBtb2RlOiBcImNyZWF0ZVwiXG4gIH0sIGNvcmUuanN4KElubGluZUNyZWF0ZSwge1xuICAgIHNlbGVjdGVkRmllbGRzOiBzZWxlY3RlZEZpZWxkcyxcbiAgICBmaWVsZHM6IGZpZWxkLmRpc3BsYXkuaW5saW5lQ3JlYXRlLmZpZWxkcyxcbiAgICBsaXN0OiBmb3JlaWduTGlzdCxcbiAgICBvbkNhbmNlbDogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IGZhbHNlXG4gICAgICB9KSk7XG4gICAgfSxcbiAgICBvbkNyZWF0ZTogaXRlbUdldHRlciA9PiB7XG4gICAgICBjb25zdCBpZCA9IGl0ZW1HZXR0ZXIuZGF0YS5pZDtcbiAgICAgIHNldEl0ZW1zKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXRlbXMpLCB7fSwge1xuICAgICAgICBbaWRdOiBpdGVtR2V0dGVyXG4gICAgICB9KSk7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgIGN1cnJlbnRJZHM6IGZpZWxkLm1hbnkgPyBuZXcgU2V0KFsuLi52YWx1ZS5jdXJyZW50SWRzLCBpZF0pIDogbmV3IFNldChbaWRdKVxuICAgICAgfSkpO1xuICAgIH1cbiAgfSkpIDogZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgfHwgZmllbGQuZGlzcGxheS5pbmxpbmVDb25uZWN0ID8gY29yZS5qc3goQ2FyZENvbnRhaW5lciwge1xuICAgIG1vZGU6IFwiY3JlYXRlXCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiLFxuICAgIG1hcmdpblRvcDogXCJtZWRpdW1cIixcbiAgICBhY3Jvc3M6IHRydWVcbiAgfSwgZmllbGQuZGlzcGxheS5pbmxpbmVDcmVhdGUgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICB0b25lOiBcInBvc2l0aXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIGl0ZW1CZWluZ0NyZWF0ZWQ6IHRydWVcbiAgICAgIH0pKTtcbiAgICB9XG4gIH0sIFwiQ3JlYXRlIFwiLCBmb3JlaWduTGlzdC5zaW5ndWxhciksIGZpZWxkLmRpc3BsYXkuaW5saW5lQ29ubmVjdCAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIHdlaWdodDogXCJub25lXCIsXG4gICAgdG9uZTogXCJwYXNzaXZlXCIsXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0U2hvd0Nvbm5lY3RJdGVtcyh0cnVlKTtcbiAgICAgIHNldEhpZGVDb25uZWN0SXRlbXNMYWJlbCgnQ2FuY2VsJyk7XG4gICAgfVxuICB9LCBcIkxpbmsgZXhpc3RpbmcgXCIsIGZvcmVpZ25MaXN0LnNpbmd1bGFyKSkpIDogbnVsbCwgZm9yY2VWYWxpZGF0aW9uICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCBcIllvdSBtdXN0IGZpbmlzaCBjcmVhdGluZyBhbmQgZWRpdGluZyBhbnkgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3QubGFiZWwudG9Mb3dlckNhc2UoKSwgXCIgYmVmb3JlIHNhdmluZyB0aGUgXCIsIGxvY2FsTGlzdC5zaW5ndWxhci50b0xvd2VyQ2FzZSgpKSk7XG59XG5cbmZ1bmN0aW9uIExpbmtUb1JlbGF0ZWRJdGVtcyh7XG4gIGl0ZW1JZCxcbiAgaXNEb3VibGVTaWRlZCxcbiAgdmFsdWUsXG4gIGxpc3Rcbn0pIHtcbiAgdmFyIF92YWx1ZSR2YWx1ZTtcblxuICBmdW5jdGlvbiBjb25zdHJ1Y3RRdWVyeSh7XG4gICAgaXNEb3VibGVTaWRlZCxcbiAgICBpdGVtSWQsXG4gICAgdmFsdWVcbiAgfSkge1xuICAgIGlmIChpc0RvdWJsZVNpZGVkICYmIGl0ZW1JZCkge1xuICAgICAgcmV0dXJuIGAhYXNzaWduZWRUb19tYXRjaGVzPVwiJHtpdGVtSWR9XCJgO1xuICAgIH1cblxuICAgIHJldHVybiBgIWlkX2luPVwiJHsodmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhbHVlLnZhbHVlKS5zbGljZSgwLCAxMDApLm1hcCgoe1xuICAgICAgaWRcbiAgICB9KSA9PiBpZCkuam9pbignLCcpfVwiYDtcbiAgfVxuXG4gIGNvbnN0IGNvbW1vblByb3BzID0ge1xuICAgIHNpemU6ICdzbWFsbCcsXG4gICAgdG9uZTogJ2FjdGl2ZScsXG4gICAgd2VpZ2h0OiAnbGluaydcbiAgfTtcblxuICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgY29uc3QgcXVlcnkgPSBjb25zdHJ1Y3RRdWVyeSh7XG4gICAgICBpc0RvdWJsZVNpZGVkLFxuICAgICAgdmFsdWUsXG4gICAgICBpdGVtSWRcbiAgICB9KTtcbiAgICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgICBhczogYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZS5MaW5rLFxuICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0/JHtxdWVyeX1gXG4gICAgfSksIFwiVmlldyByZWxhdGVkIFwiLCBsaXN0LnBsdXJhbCk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwgX2V4dGVuZHMoe30sIGNvbW1vblByb3BzLCB7XG4gICAgYXM6IGFkbWluVWlfcm91dGVyX2Rpc3Rfa2V5c3RvbmUuTGluayxcbiAgICBocmVmOiBgLyR7bGlzdC5wYXRofS8keyhfdmFsdWUkdmFsdWUgPSB2YWx1ZS52YWx1ZSkgPT09IG51bGwgfHwgX3ZhbHVlJHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkdmFsdWUuaWR9YFxuICB9KSwgXCJWaWV3IFwiLCBsaXN0LnNpbmd1bGFyLCBcIiBkZXRhaWxzXCIpO1xufVxuXG5jb25zdCBSZWxhdGlvbnNoaXBMaW5rQnV0dG9uID0gKHtcbiAgaHJlZixcbiAgY2hpbGRyZW5cbn0pID0+IGNvcmUuanN4KGJ1dHRvbi5CdXR0b24sIHtcbiAgY3NzOiB7XG4gICAgcGFkZGluZzogMCxcbiAgICBoZWlnaHQ6ICdhdXRvJ1xuICB9LFxuICB3ZWlnaHQ6IFwibGlua1wiLFxuICB0b25lOiBcImFjdGl2ZVwiLFxuICBhczogYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZS5MaW5rLFxuICBocmVmOiBocmVmXG59LCBjaGlsZHJlbik7XG5cbmNvbnN0IFJlbGF0aW9uc2hpcERpc3BsYXkgPSAoe1xuICBsaXN0LFxuICB2YWx1ZVxufSkgPT4ge1xuICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgaWYgKHZhbHVlLnZhbHVlLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XG4gICAgICAgIGdhcDogXCJzbWFsbFwiXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5tYXAoaSA9PiBjb3JlLmpzeChSZWxhdGlvbnNoaXBMaW5rQnV0dG9uLCB7XG4gICAgICAgIGhyZWY6IGAvJHtsaXN0LnBhdGh9LyR7aS5pZH1gXG4gICAgICB9LCBpLmxhYmVsKSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgXCIoTm8gXCIsIGxpc3QucGx1cmFsLCBcIilcIik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGlmICh2YWx1ZS52YWx1ZSkge1xuICAgICAgcmV0dXJuIGNvcmUuanN4KFJlbGF0aW9uc2hpcExpbmtCdXR0b24sIHtcbiAgICAgICAgaHJlZjogYC8ke2xpc3QucGF0aH0vJHt2YWx1ZS52YWx1ZS5pZH1gXG4gICAgICB9LCB2YWx1ZS52YWx1ZS5sYWJlbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjb3JlLmpzeChcImRpdlwiLCBudWxsLCBcIihObyBcIiwgbGlzdC5zaW5ndWxhciwgXCIpXCIpO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgYXV0b0ZvY3VzLFxuICB2YWx1ZSxcbiAgb25DaGFuZ2UsXG4gIGZvcmNlVmFsaWRhdGlvblxufSkgPT4ge1xuICBjb25zdCBrZXlzdG9uZSA9IGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lLnVzZUtleXN0b25lKCk7XG4gIGNvbnN0IGZvcmVpZ25MaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcbiAgY29uc3QgbG9jYWxMaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5saXN0S2V5KTtcbiAgY29uc3QgW2lzRHJhd2VyT3Blbiwgc2V0SXNEcmF3ZXJPcGVuXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBpZiAodmFsdWUua2luZCA9PT0gJ2NhcmRzLXZpZXcnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5GaWVsZENvbnRhaW5lciwge1xuICAgICAgYXM6IFwiZmllbGRzZXRcIlxuICAgIH0sIGNvcmUuanN4KGZpZWxkcy5GaWVsZExlZ2VuZCwgbnVsbCwgZmllbGQubGFiZWwpLCBjb3JlLmpzeChDYXJkcywge1xuICAgICAgZm9yY2VWYWxpZGF0aW9uOiBmb3JjZVZhbGlkYXRpb24sXG4gICAgICBmaWVsZDogZmllbGQsXG4gICAgICBpZDogdmFsdWUuaWQsXG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBvbkNoYW5nZTogb25DaGFuZ2UsXG4gICAgICBmb3JlaWduTGlzdDogZm9yZWlnbkxpc3QsXG4gICAgICBsb2NhbExpc3Q6IGxvY2FsTGlzdFxuICAgIH0pKTtcbiAgfVxuXG4gIGlmICh2YWx1ZS5raW5kID09PSAnY291bnQnKSB7XG4gICAgcmV0dXJuIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICAgIGFzOiBcImZpZWxkc2V0XCIsXG4gICAgICBnYXA6IFwibWVkaXVtXCJcbiAgICB9LCBjb3JlLmpzeChmaWVsZHMuRmllbGRMZWdlbmQsIG51bGwsIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goXCJkaXZcIiwgbnVsbCwgdmFsdWUuY291bnQgPT09IDEgPyBgVGhlcmUgaXMgMSAke2ZvcmVpZ25MaXN0LnNpbmd1bGFyfSBgIDogYFRoZXJlIGFyZSAke3ZhbHVlLmNvdW50fSAke2ZvcmVpZ25MaXN0LnBsdXJhbH0gYCwgXCJsaW5rZWQgdG8gdGhpcyBcIiwgbG9jYWxMaXN0LnNpbmd1bGFyKSk7XG4gIH1cblxuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCB7XG4gICAgYXM6IFwiZmllbGRzZXRcIlxuICB9LCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwge1xuICAgIGFzOiBcImxlZ2VuZFwiXG4gIH0sIGZpZWxkLmxhYmVsKSwgb25DaGFuZ2UgPyBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJtZWRpdW1cIlxuICB9LCBjb3JlLmpzeChmaWVsZHNfdHlwZXNfcmVsYXRpb25zaGlwX3ZpZXdzX1JlbGF0aW9uc2hpcFNlbGVjdF9kaXN0X2tleXN0b25lLlJlbGF0aW9uc2hpcFNlbGVjdCwge1xuICAgIGNvbnRyb2xTaG91bGRSZW5kZXJWYWx1ZTogdHJ1ZSxcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIHBvcnRhbE1lbnU6IHRydWUsXG4gICAgc3RhdGU6IHZhbHVlLmtpbmQgPT09ICdtYW55JyA/IHtcbiAgICAgIGtpbmQ6ICdtYW55JyxcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcblxuICAgICAgb25DaGFuZ2UobmV3SXRlbXMpIHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgdmFsdWU6IG5ld0l0ZW1zXG4gICAgICAgIH0pKTtcbiAgICAgIH1cblxuICAgIH0gOiB7XG4gICAgICBraW5kOiAnb25lJyxcbiAgICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcblxuICAgICAgb25DaGFuZ2UobmV3VmFsKSB7XG4gICAgICAgIGlmICh2YWx1ZS5raW5kID09PSAnb25lJykge1xuICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWU6IG5ld1ZhbFxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgfVxuICB9KSwgY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGFjcm9zczogdHJ1ZSxcbiAgICBnYXA6IFwic21hbGxcIlxuICB9LCAhZmllbGQuaGlkZUNyZWF0ZSAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgc2l6ZTogXCJzbWFsbFwiLFxuICAgIGRpc2FibGVkOiBpc0RyYXdlck9wZW4sXG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgc2V0SXNEcmF3ZXJPcGVuKHRydWUpO1xuICAgIH1cbiAgfSwgXCJDcmVhdGUgcmVsYXRlZCBcIiwgZm9yZWlnbkxpc3Quc2luZ3VsYXIpLCBrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnICYmIGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmxpc3RLZXkgPT09IGZpZWxkLnJlZkxpc3RLZXkgJiYgY29yZS5qc3goYnV0dG9uLkJ1dHRvbiwge1xuICAgIHNpemU6IFwic21hbGxcIixcbiAgICBpc0Rpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIG9uQ2xpY2s6ICgpID0+IHtcbiAgICAgIGlmIChrZXlzdG9uZS5hdXRoZW50aWNhdGVkSXRlbS5zdGF0ZSA9PT0gJ2F1dGhlbnRpY2F0ZWQnKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IHtcbiAgICAgICAgICBsYWJlbDoga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwsXG4gICAgICAgICAgaWQ6IGtleXN0b25lLmF1dGhlbnRpY2F0ZWRJdGVtLmlkXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZhbHVlLmtpbmQgPT09ICdtYW55Jykge1xuICAgICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgICAgdmFsdWU6IFsuLi52YWx1ZS52YWx1ZSwgdmFsXVxuICAgICAgICAgIH0pKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICAgIHZhbHVlOiB2YWxcbiAgICAgICAgICB9KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHZhbHVlLmtpbmQgPT09ICdtYW55JyA/ICdBZGQgJyA6ICdTZXQgYXMgJywga2V5c3RvbmUuYXV0aGVudGljYXRlZEl0ZW0ubGFiZWwpLCAhISh2YWx1ZS5raW5kID09PSAnbWFueScgPyB2YWx1ZS52YWx1ZS5sZW5ndGggOiB2YWx1ZS5raW5kID09PSAnb25lJyAmJiB2YWx1ZS52YWx1ZSkgJiYgY29yZS5qc3goTGlua1RvUmVsYXRlZEl0ZW1zLCB7XG4gICAgaXRlbUlkOiB2YWx1ZS5pZCxcbiAgICBpc0RvdWJsZVNpZGVkOiAhIWZpZWxkLnJlZkZpZWxkS2V5LFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0LFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KSkpLCBjb3JlLmpzeChtb2RhbHMuRHJhd2VyQ29udHJvbGxlciwge1xuICAgIGlzT3BlbjogaXNEcmF3ZXJPcGVuXG4gIH0sIGNvcmUuanN4KENyZWF0ZUl0ZW1EcmF3ZXIuQ3JlYXRlSXRlbURyYXdlciwge1xuICAgIGxpc3RLZXk6IGZvcmVpZ25MaXN0LmtleSxcbiAgICBvbkNsb3NlOiAoKSA9PiB7XG4gICAgICBzZXRJc0RyYXdlck9wZW4oZmFsc2UpO1xuICAgIH0sXG4gICAgb25DcmVhdGU6IHZhbCA9PiB7XG4gICAgICBzZXRJc0RyYXdlck9wZW4oZmFsc2UpO1xuXG4gICAgICBpZiAodmFsdWUua2luZCA9PT0gJ21hbnknKSB7XG4gICAgICAgIG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICAgIHZhbHVlOiBbLi4udmFsdWUudmFsdWUsIHZhbF1cbiAgICAgICAgfSkpO1xuICAgICAgfSBlbHNlIGlmICh2YWx1ZS5raW5kID09PSAnb25lJykge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICB2YWx1ZTogdmFsXG4gICAgICAgIH0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKSkgOiBjb3JlLmpzeChSZWxhdGlvbnNoaXBEaXNwbGF5LCB7XG4gICAgdmFsdWU6IHZhbHVlLFxuICAgIGxpc3Q6IGZvcmVpZ25MaXN0XG4gIH0pKTtcbn07XG5jb25zdCBDZWxsID0gKHtcbiAgZmllbGQsXG4gIGl0ZW1cbn0pID0+IHtcbiAgY29uc3QgbGlzdCA9IGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lLnVzZUxpc3QoZmllbGQucmVmTGlzdEtleSk7XG4gIGNvbnN0IHtcbiAgICBjb2xvcnNcbiAgfSA9IGNvcmUudXNlVGhlbWUoKTtcblxuICBpZiAoZmllbGQuZGlzcGxheS5tb2RlID09PSAnY291bnQnKSB7XG4gICAgdmFyIF9pdGVtJDtcblxuICAgIGNvbnN0IGNvdW50ID0gKF9pdGVtJCA9IGl0ZW1bYCR7ZmllbGQucGF0aH1Db3VudGBdKSAhPT0gbnVsbCAmJiBfaXRlbSQgIT09IHZvaWQgMCA/IF9pdGVtJCA6IDA7XG4gICAgcmV0dXJuIGNvcmUuanN4KENlbGxDb250YWluZXIuQ2VsbENvbnRhaW5lciwgbnVsbCwgY291bnQsIFwiIFwiLCBjb3VudCA9PT0gMSA/IGxpc3Quc2luZ3VsYXIgOiBsaXN0LnBsdXJhbCk7XG4gIH1cblxuICBjb25zdCBkYXRhID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgY29uc3QgaXRlbXMgPSAoQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0pLmZpbHRlcihpdGVtID0+IGl0ZW0pO1xuICBjb25zdCBkaXNwbGF5SXRlbXMgPSBpdGVtcy5sZW5ndGggPCA1ID8gaXRlbXMgOiBpdGVtcy5zbGljZSgwLCAzKTtcbiAgY29uc3Qgb3ZlcmZsb3cgPSBpdGVtcy5sZW5ndGggPCA1ID8gMCA6IGl0ZW1zLmxlbmd0aCAtIDM7XG4gIGNvbnN0IHN0eWxlcyA9IHtcbiAgICBjb2xvcjogY29sb3JzLmZvcmVncm91bmQsXG4gICAgdGV4dERlY29yYXRpb246ICdub25lJyxcbiAgICAnOmhvdmVyJzoge1xuICAgICAgdGV4dERlY29yYXRpb246ICd1bmRlcmxpbmUnXG4gICAgfVxuICB9O1xuICByZXR1cm4gY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCBkaXNwbGF5SXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcbiAgICBrZXk6IGl0ZW0uaWRcbiAgfSwgISFpbmRleCA/ICcsICcgOiAnJywgY29yZS5qc3goYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZS5MaW5rLCB7XG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXG4gICAgYXM6IGAvJHtsaXN0LnBhdGh9LyR7aXRlbS5pZH1gLFxuICAgIGNzczogc3R5bGVzXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSwgb3ZlcmZsb3cgPyBgLCBhbmQgJHtvdmVyZmxvd30gbW9yZWAgOiBudWxsKTtcbn07XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBmaWVsZCxcbiAgaXRlbVxufSkgPT4ge1xuICBjb25zdCBsaXN0ID0gYWRtaW5VaV9jb250ZXh0X2Rpc3Rfa2V5c3RvbmUudXNlTGlzdChmaWVsZC5yZWZMaXN0S2V5KTtcbiAgY29uc3QgZGF0YSA9IGl0ZW1bZmllbGQucGF0aF07XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIChBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSkuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubWFwKChpdGVtLCBpbmRleCkgPT4gY29yZS5qc3goUmVhY3QuRnJhZ21lbnQsIHtcbiAgICBrZXk6IGl0ZW0uaWRcbiAgfSwgISFpbmRleCA/ICcsICcgOiAnJywgY29yZS5qc3goYWRtaW5VaV9yb3V0ZXJfZGlzdF9rZXlzdG9uZS5MaW5rLCB7XG4gICAgaHJlZjogYC8ke2xpc3QucGF0aH0vW2lkXWAsXG4gICAgYXM6IGAvJHtsaXN0LnBhdGh9LyR7aXRlbS5pZH1gXG4gIH0sIGl0ZW0ubGFiZWwgfHwgaXRlbS5pZCkpKSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcmVmRmllbGRLZXk6IGNvbmZpZy5maWVsZE1ldGEucmVmRmllbGRLZXksXG4gICAgbWFueTogY29uZmlnLmZpZWxkTWV0YS5tYW55LFxuICAgIGxpc3RLZXk6IGNvbmZpZy5saXN0S2V5LFxuICAgIHBhdGg6IGNvbmZpZy5wYXRoLFxuICAgIGxhYmVsOiBjb25maWcubGFiZWwsXG4gICAgZGlzcGxheTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJyA/IHtcbiAgICAgIG1vZGU6ICdjYXJkcycsXG4gICAgICBjYXJkRmllbGRzOiBjb25maWcuZmllbGRNZXRhLmNhcmRGaWVsZHMsXG4gICAgICBpbmxpbmVDcmVhdGU6IGNvbmZpZy5maWVsZE1ldGEuaW5saW5lQ3JlYXRlLFxuICAgICAgaW5saW5lRWRpdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVFZGl0LFxuICAgICAgbGlua1RvSXRlbTogY29uZmlnLmZpZWxkTWV0YS5saW5rVG9JdGVtLFxuICAgICAgcmVtb3ZlTW9kZTogY29uZmlnLmZpZWxkTWV0YS5yZW1vdmVNb2RlLFxuICAgICAgaW5saW5lQ29ubmVjdDogY29uZmlnLmZpZWxkTWV0YS5pbmxpbmVDb25uZWN0XG4gICAgfSA6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjb3VudCcgPyB7XG4gICAgICBtb2RlOiAnY291bnQnXG4gICAgfSA6IHtcbiAgICAgIG1vZGU6ICdzZWxlY3QnLFxuICAgICAgcmVmTGFiZWxGaWVsZDogY29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkXG4gICAgfSxcbiAgICByZWZMaXN0S2V5OiBjb25maWcuZmllbGRNZXRhLnJlZkxpc3RLZXksXG4gICAgZ3JhcGhxbFNlbGVjdGlvbjogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NhcmRzJyA/IGAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgICAgbGFiZWw6ICR7Y29uZmlnLmZpZWxkTWV0YS5yZWZMYWJlbEZpZWxkfVxuICAgICAgICAgIH1gIDogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSA9PT0gJ2NvdW50JyA/IGAke2NvbmZpZy5wYXRofUNvdW50YCA6IGAke2NvbmZpZy5wYXRofSB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgIGxhYmVsOiAke2NvbmZpZy5maWVsZE1ldGEucmVmTGFiZWxGaWVsZH1cbiAgICAgICAgICAgIH1gLFxuICAgIGhpZGVDcmVhdGU6IGNvbmZpZy5maWVsZE1ldGEuaGlkZUNyZWF0ZSxcbiAgICBkZWZhdWx0VmFsdWU6IGNvbmZpZy5maWVsZE1ldGEubWFueSA/IHtcbiAgICAgIGlkOiBudWxsLFxuICAgICAga2luZDogJ21hbnknLFxuICAgICAgaW5pdGlhbFZhbHVlOiBbXSxcbiAgICAgIHZhbHVlOiBbXVxuICAgIH0gOiB7XG4gICAgICBpZDogbnVsbCxcbiAgICAgIGtpbmQ6ICdvbmUnLFxuICAgICAgdmFsdWU6IG51bGwsXG4gICAgICBpbml0aWFsVmFsdWU6IG51bGxcbiAgICB9LFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLmRpc3BsYXlNb2RlID09PSAnY291bnQnKSB7XG4gICAgICAgIHZhciBfZGF0YSQ7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICBraW5kOiAnY291bnQnLFxuICAgICAgICAgIGNvdW50OiAoX2RhdGEkID0gZGF0YVtgJHtjb25maWcucGF0aH1Db3VudGBdKSAhPT0gbnVsbCAmJiBfZGF0YSQgIT09IHZvaWQgMCA/IF9kYXRhJCA6IDBcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUgPT09ICdjYXJkcycpIHtcbiAgICAgICAgY29uc3QgaW5pdGlhbElkcyA9IG5ldyBTZXQoKEFycmF5LmlzQXJyYXkoZGF0YVtjb25maWcucGF0aF0pID8gZGF0YVtjb25maWcucGF0aF0gOiBkYXRhW2NvbmZpZy5wYXRoXSA/IFtkYXRhW2NvbmZpZy5wYXRoXV0gOiBbXSkubWFwKHggPT4geC5pZCkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdjYXJkcy12aWV3JyxcbiAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICBpdGVtc0JlaW5nRWRpdGVkOiBuZXcgU2V0KCksXG4gICAgICAgICAgaXRlbUJlaW5nQ3JlYXRlZDogZmFsc2UsXG4gICAgICAgICAgaW5pdGlhbElkcyxcbiAgICAgICAgICBjdXJyZW50SWRzOiBpbml0aWFsSWRzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGlmIChjb25maWcuZmllbGRNZXRhLm1hbnkpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gKGRhdGFbY29uZmlnLnBhdGhdIHx8IFtdKS5tYXAoeCA9PiAoe1xuICAgICAgICAgIGlkOiB4LmlkLFxuICAgICAgICAgIGxhYmVsOiB4LmxhYmVsIHx8IHguaWRcbiAgICAgICAgfSkpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdtYW55JyxcbiAgICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlLFxuICAgICAgICAgIHZhbHVlXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGxldCB2YWx1ZSA9IGRhdGFbY29uZmlnLnBhdGhdO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgdmFsdWUgPSB7XG4gICAgICAgICAgaWQ6IHZhbHVlLmlkLFxuICAgICAgICAgIGxhYmVsOiB2YWx1ZS5sYWJlbCB8fCB2YWx1ZS5pZFxuICAgICAgICB9O1xuICAgICAgfVxuXG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAnb25lJyxcbiAgICAgICAgaWQ6IGRhdGEuaWQsXG4gICAgICAgIHZhbHVlLFxuICAgICAgICBpbml0aWFsVmFsdWU6IHZhbHVlXG4gICAgICB9O1xuICAgIH0sXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXI6ICh7XG4gICAgICAgIG9uQ2hhbmdlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBmb3JlaWduTGlzdCA9IGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lLnVzZUxpc3QoY29uZmlnLmZpZWxkTWV0YS5yZWZMaXN0S2V5KTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGZpbHRlclZhbHVlcyxcbiAgICAgICAgICBsb2FkaW5nXG4gICAgICAgIH0gPSB1c2VSZWxhdGlvbnNoaXBGaWx0ZXJWYWx1ZXMoe1xuICAgICAgICAgIHZhbHVlLFxuICAgICAgICAgIGxpc3Q6IGZvcmVpZ25MaXN0XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IHtcbiAgICAgICAgICBraW5kOiAnbWFueScsXG4gICAgICAgICAgdmFsdWU6IGZpbHRlclZhbHVlcyxcblxuICAgICAgICAgIG9uQ2hhbmdlKG5ld0l0ZW1zKSB7XG4gICAgICAgICAgICBvbkNoYW5nZShuZXdJdGVtcy5tYXAoaXRlbSA9PiBpdGVtLmlkKS5qb2luKCcsJykpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gY29yZS5qc3goZmllbGRzX3R5cGVzX3JlbGF0aW9uc2hpcF92aWV3c19SZWxhdGlvbnNoaXBTZWxlY3RfZGlzdF9rZXlzdG9uZS5SZWxhdGlvbnNoaXBTZWxlY3QsIHtcbiAgICAgICAgICBjb250cm9sU2hvdWxkUmVuZGVyVmFsdWU6IHRydWUsXG4gICAgICAgICAgbGlzdDogZm9yZWlnbkxpc3QsXG4gICAgICAgICAgaXNMb2FkaW5nOiBsb2FkaW5nLFxuICAgICAgICAgIGlzRGlzYWJsZWQ6IG9uQ2hhbmdlID09PSB1bmRlZmluZWQsXG4gICAgICAgICAgc3RhdGU6IHN0YXRlXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGdyYXBocWw6ICh7XG4gICAgICAgIHZhbHVlXG4gICAgICB9KSA9PiB7XG4gICAgICAgIGNvbnN0IGZvcmVpZ25JZHMgPSBnZXRGb3JlaWduSWRzKHZhbHVlKTtcblxuICAgICAgICBpZiAoY29uZmlnLmZpZWxkTWV0YS5tYW55KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgICAgc29tZToge1xuICAgICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgICBpbjogZm9yZWlnbklkc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgIGluOiBmb3JlaWduSWRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBjb25zdCBmb3JlaWduTGlzdCA9IGFkbWluVWlfY29udGV4dF9kaXN0X2tleXN0b25lLnVzZUxpc3QoY29uZmlnLmZpZWxkTWV0YS5yZWZMaXN0S2V5KTtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgIGZpbHRlclZhbHVlc1xuICAgICAgICB9ID0gdXNlUmVsYXRpb25zaGlwRmlsdGVyVmFsdWVzKHtcbiAgICAgICAgICB2YWx1ZSxcbiAgICAgICAgICBsaXN0OiBmb3JlaWduTGlzdFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoIWZpbHRlclZhbHVlcy5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4gYGhhcyBubyB2YWx1ZWA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmlsdGVyVmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBmaWx0ZXJWYWx1ZXMubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcbiAgICAgICAgICByZXR1cm4gYGlzIGluIFske3ZhbHVlc31dYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gZmlsdGVyVmFsdWVzWzBdLmxhYmVsO1xuICAgICAgICByZXR1cm4gYGlzICR7b3B0aW9uTGFiZWx9YDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIG1hdGNoZXM6IHtcbiAgICAgICAgICBsYWJlbDogJ01hdGNoZXMnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmtpbmQgIT09ICdjYXJkcy12aWV3JyB8fCB2YWx1ZS5pdGVtc0JlaW5nRWRpdGVkLnNpemUgPT09IDAgJiYgIXZhbHVlLml0ZW1CZWluZ0NyZWF0ZWQ7XG4gICAgfSxcblxuICAgIHNlcmlhbGl6ZTogc3RhdGUgPT4ge1xuICAgICAgaWYgKHN0YXRlLmtpbmQgPT09ICdtYW55Jykge1xuICAgICAgICBjb25zdCBuZXdBbGxJZHMgPSBuZXcgU2V0KHN0YXRlLnZhbHVlLm1hcCh4ID0+IHguaWQpKTtcbiAgICAgICAgY29uc3QgaW5pdGlhbElkcyA9IG5ldyBTZXQoc3RhdGUuaW5pdGlhbFZhbHVlLm1hcCh4ID0+IHguaWQpKTtcbiAgICAgICAgbGV0IGRpc2Nvbm5lY3QgPSBzdGF0ZS5pbml0aWFsVmFsdWUuZmlsdGVyKHggPT4gIW5ld0FsbElkcy5oYXMoeC5pZCkpLm1hcCh4ID0+ICh7XG4gICAgICAgICAgaWQ6IHguaWRcbiAgICAgICAgfSkpO1xuICAgICAgICBsZXQgY29ubmVjdCA9IHN0YXRlLnZhbHVlLmZpbHRlcih4ID0+ICFpbml0aWFsSWRzLmhhcyh4LmlkKSkubWFwKHggPT4gKHtcbiAgICAgICAgICBpZDogeC5pZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoIHx8IGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgbGV0IG91dHB1dCA9IHt9O1xuXG4gICAgICAgICAgaWYgKGRpc2Nvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQuZGlzY29ubmVjdCA9IGRpc2Nvbm5lY3Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbm5lY3QubGVuZ3RoKSB7XG4gICAgICAgICAgICBvdXRwdXQuY29ubmVjdCA9IGNvbm5lY3Q7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFtjb25maWcucGF0aF06IG91dHB1dFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUua2luZCA9PT0gJ29uZScpIHtcbiAgICAgICAgdmFyIF9zdGF0ZSRpbml0aWFsVmFsdWU7XG5cbiAgICAgICAgaWYgKHN0YXRlLmluaXRpYWxWYWx1ZSAmJiAhc3RhdGUudmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBkaXNjb25uZWN0OiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChzdGF0ZS52YWx1ZSAmJiBzdGF0ZS52YWx1ZS5pZCAhPT0gKChfc3RhdGUkaW5pdGlhbFZhbHVlID0gc3RhdGUuaW5pdGlhbFZhbHVlKSA9PT0gbnVsbCB8fCBfc3RhdGUkaW5pdGlhbFZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfc3RhdGUkaW5pdGlhbFZhbHVlLmlkKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGNvbm5lY3Q6IHtcbiAgICAgICAgICAgICAgICBpZDogc3RhdGUudmFsdWUuaWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoc3RhdGUua2luZCA9PT0gJ2NhcmRzLXZpZXcnKSB7XG4gICAgICAgIGxldCBkaXNjb25uZWN0ID0gWy4uLnN0YXRlLmluaXRpYWxJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuY3VycmVudElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcbiAgICAgICAgICBpZFxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBjb25uZWN0ID0gWy4uLnN0YXRlLmN1cnJlbnRJZHNdLmZpbHRlcihpZCA9PiAhc3RhdGUuaW5pdGlhbElkcy5oYXMoaWQpKS5tYXAoaWQgPT4gKHtcbiAgICAgICAgICBpZFxuICAgICAgICB9KSk7XG5cbiAgICAgICAgaWYgKGNvbmZpZy5maWVsZE1ldGEubWFueSkge1xuICAgICAgICAgIGlmIChkaXNjb25uZWN0Lmxlbmd0aCB8fCBjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICAgIGNvbm5lY3Q6IGNvbm5lY3QubGVuZ3RoID8gY29ubmVjdCA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBkaXNjb25uZWN0OiBkaXNjb25uZWN0Lmxlbmd0aCA/IGRpc2Nvbm5lY3QgOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoY29ubmVjdC5sZW5ndGgpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgW2NvbmZpZy5wYXRoXToge1xuICAgICAgICAgICAgICBjb25uZWN0OiBjb25uZWN0WzBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmIChkaXNjb25uZWN0Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBbY29uZmlnLnBhdGhdOiB7XG4gICAgICAgICAgICAgIGRpc2Nvbm5lY3Q6IHRydWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH07XG59O1xuXG5mdW5jdGlvbiB1c2VSZWxhdGlvbnNoaXBGaWx0ZXJWYWx1ZXMoe1xuICB2YWx1ZSxcbiAgbGlzdFxufSkge1xuICB2YXIgX2RhdGEkaXRlbXM7XG5cbiAgY29uc3QgZm9yZWlnbklkcyA9IGdldEZvcmVpZ25JZHModmFsdWUpO1xuICBjb25zdCB3aGVyZSA9IHtcbiAgICBpZDoge1xuICAgICAgaW46IGZvcmVpZ25JZHNcbiAgICB9XG4gIH07XG4gIGNvbnN0IHF1ZXJ5ID0gY2xpZW50LmdxbGBcbiAgICBxdWVyeSBGT1JFSUdOTElTVF9RVUVSWSgkd2hlcmU6ICR7bGlzdC5ncWxOYW1lcy53aGVyZUlucHV0TmFtZX0hKSB7XG4gICAgICBpdGVtczogJHtsaXN0LmdxbE5hbWVzLmxpc3RRdWVyeU5hbWV9KHdoZXJlOiAkd2hlcmUpIHtcbiAgICAgICAgaWQgXG4gICAgICAgICR7bGlzdC5sYWJlbEZpZWxkfVxuICAgICAgfVxuICAgIH1cbiAgYDtcbiAgY29uc3Qge1xuICAgIGRhdGEsXG4gICAgbG9hZGluZ1xuICB9ID0gY2xpZW50LnVzZVF1ZXJ5KHF1ZXJ5LCB7XG4gICAgdmFyaWFibGVzOiB7XG4gICAgICB3aGVyZVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiB7XG4gICAgZmlsdGVyVmFsdWVzOiAoZGF0YSA9PT0gbnVsbCB8fCBkYXRhID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX2RhdGEkaXRlbXMgPSBkYXRhLml0ZW1zKSA9PT0gbnVsbCB8fCBfZGF0YSRpdGVtcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2RhdGEkaXRlbXMubWFwKGl0ZW0gPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgaWQ6IGl0ZW0uaWQsXG4gICAgICAgIGxhYmVsOiBpdGVtW2xpc3QubGFiZWxGaWVsZF0gfHwgaXRlbS5pZFxuICAgICAgfTtcbiAgICB9KSkgfHwgZm9yZWlnbklkcy5tYXAoZiA9PiAoe1xuICAgICAgbGFiZWw6IGYsXG4gICAgICBpZDogZlxuICAgIH0pKSxcbiAgICBsb2FkaW5nOiBsb2FkaW5nXG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEZvcmVpZ25JZHModmFsdWUpIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycgJiYgdmFsdWUubGVuZ3RoID4gMCkge1xuICAgIHJldHVybiB2YWx1ZS5zcGxpdCgnLCcpO1xuICB9XG5cbiAgcmV0dXJuIFtdO1xufVxuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5kZXYuanNcIik7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG5cbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBzZWdtZW50ZWRDb250cm9sID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL3NlZ21lbnRlZC1jb250cm9sJyk7XG52YXIgYnV0dG9uID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xudmFyIENlbGxDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NlbGxDb250YWluZXItNDUzMjU0YjUuY2pzLmRldi5qcycpO1xudmFyIENlbGxMaW5rID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9DZWxsTGluay01MDlmYjE2Ni5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQWxlcnRUcmlhbmdsZUljb24nKTtcbnJlcXVpcmUoJ25leHQvbGluaycpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xucmVxdWlyZSgnYXBvbGxvLXVwbG9hZC1jbGllbnQnKTtcbnJlcXVpcmUoJ0BlbW90aW9uL2hhc2gnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvZ3JhcGhxbC10cy1zY2hlbWEtZmNlN2E2YTguY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvYWRtaW4tbWV0YS1ncmFwaHFsLTlmOWE5YzExLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xucmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9wb3BvdmVyJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQ2hldnJvblJpZ2h0SWNvbicpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9TaWdub3V0QnV0dG9uLWFjZGIxNTU0LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnZGVjaW1hbC5qcycpO1xucmVxdWlyZSgnQGdyYXBocWwtdG9vbHMvc2NoZW1hJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hJyk7XG5yZXF1aXJlKCdncmFwaHFsLXR5cGUtanNvbicpO1xucmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcbnJlcXVpcmUoJ2dyYXBocWwnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0Jyk7XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3QgW2hhc0NoYW5nZWQsIHNldEhhc0NoYW5nZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZSA9IChoYXNDaGFuZ2VkIHx8IGZvcmNlVmFsaWRhdGlvbikgJiYgIXZhbGlkYXRlKHZhbHVlLCBmaWVsZC5pc1JlcXVpcmVkKSA/IGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCBmaWVsZC5sYWJlbCwgXCIgaXMgcmVxdWlyZWRcIikgOiBudWxsO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCB7XG4gICAgYXM6IGZpZWxkLmRpc3BsYXlNb2RlID09PSAnc2VsZWN0JyA/ICdkaXYnIDogJ2ZpZWxkc2V0J1xuICB9LCBmaWVsZC5kaXNwbGF5TW9kZSA9PT0gJ3NlbGVjdCcgPyBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIHtcbiAgICBodG1sRm9yOiBmaWVsZC5wYXRoXG4gIH0sIGZpZWxkLmxhYmVsKSwgY29yZS5qc3goZmllbGRzLlNlbGVjdCwge1xuICAgIGlkOiBmaWVsZC5wYXRoLFxuICAgIGlzQ2xlYXJhYmxlOiB0cnVlLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG9wdGlvbnM6IGZpZWxkLm9wdGlvbnMsXG4gICAgaXNEaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBvbkNoYW5nZTogbmV3VmFsID0+IHtcbiAgICAgIG9uQ2hhbmdlID09PSBudWxsIHx8IG9uQ2hhbmdlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgdmFsdWU6IG5ld1ZhbFxuICAgICAgfSkpO1xuICAgICAgc2V0SGFzQ2hhbmdlZCh0cnVlKTtcbiAgICB9LFxuICAgIHZhbHVlOiB2YWx1ZS52YWx1ZSxcbiAgICBwb3J0YWxNZW51OiB0cnVlXG4gIH0pLCB2YWxpZGF0aW9uTWVzc2FnZSkgOiBjb3JlLmpzeChSZWFjdC5GcmFnbWVudCwgbnVsbCwgY29yZS5qc3goZmllbGRzLkZpZWxkTGFiZWwsIHtcbiAgICBhczogXCJsZWdlbmRcIlxuICB9LCBmaWVsZC5sYWJlbCksIGNvcmUuanN4KGNvcmUuU3RhY2ssIHtcbiAgICBhY3Jvc3M6IHRydWUsXG4gICAgZ2FwOiBcInNtYWxsXCIsXG4gICAgYWxpZ246IFwiY2VudGVyXCJcbiAgfSwgY29yZS5qc3goc2VnbWVudGVkQ29udHJvbC5TZWdtZW50ZWRDb250cm9sLCB7XG4gICAgc2VnbWVudHM6IGZpZWxkLm9wdGlvbnMubWFwKHggPT4geC5sYWJlbCksXG4gICAgc2VsZWN0ZWRJbmRleDogdmFsdWUudmFsdWUgPyBmaWVsZC5vcHRpb25zLmZpbmRJbmRleCh4ID0+IHgudmFsdWUgPT09IHZhbHVlLnZhbHVlLnZhbHVlKSA6IHVuZGVmaW5lZCxcbiAgICBvbkNoYW5nZTogaW5kZXggPT4ge1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogZmllbGQub3B0aW9uc1tpbmRleF1cbiAgICAgIH0pKTtcbiAgICAgIHNldEhhc0NoYW5nZWQodHJ1ZSk7XG4gICAgfVxuICB9KSwgdmFsdWUudmFsdWUgIT09IG51bGwgJiYgb25DaGFuZ2UgIT09IHVuZGVmaW5lZCAmJiBjb3JlLmpzeChidXR0b24uQnV0dG9uLCB7XG4gICAgb25DbGljazogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9KSk7XG4gICAgICBzZXRIYXNDaGFuZ2VkKHRydWUpO1xuICAgIH1cbiAgfSwgXCJDbGVhclwiKSksIHZhbGlkYXRpb25NZXNzYWdlKSk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgdmFyIF9maWVsZCRvcHRpb25zJGZpbmQ7XG5cbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kID0gZmllbGQub3B0aW9ucy5maW5kKHggPT4geC52YWx1ZSA9PT0gdmFsdWUpKSA9PT0gbnVsbCB8fCBfZmllbGQkb3B0aW9ucyRmaW5kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkb3B0aW9ucyRmaW5kLmxhYmVsO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goQ2VsbExpbmsuQ2VsbExpbmssIGxpbmtUbywgbGFiZWwpIDogY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCBsYWJlbCk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICB2YXIgX2ZpZWxkJG9wdGlvbnMkZmluZDI7XG5cbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICBjb25zdCBsYWJlbCA9IChfZmllbGQkb3B0aW9ucyRmaW5kMiA9IGZpZWxkLm9wdGlvbnMuZmluZCh4ID0+IHgudmFsdWUgPT09IHZhbHVlKSkgPT09IG51bGwgfHwgX2ZpZWxkJG9wdGlvbnMkZmluZDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9maWVsZCRvcHRpb25zJGZpbmQyLmxhYmVsO1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBsYWJlbCk7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgaXNSZXF1aXJlZCkge1xuICBpZiAoaXNSZXF1aXJlZCkge1xuICAgIC8vIGlmIHlvdSBnb3QgbnVsbCBpbml0aWFsbHkgb24gdGhlIHVwZGF0ZSBzY3JlZW4sIHdlIHdhbnQgdG8gYWxsb3cgc2F2aW5nXG4gICAgLy8gc2luY2UgdGhlIHVzZXIgcHJvYmFibHkgZG9lc24ndCBoYXZlIHJlYWQgYWNjZXNzIGNvbnRyb2xcbiAgICBpZiAodmFsdWUua2luZCA9PT0gJ3VwZGF0ZScgJiYgdmFsdWUuaW5pdGlhbCA9PT0gbnVsbCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlLnZhbHVlICE9PSBudWxsO1xuICB9XG5cbiAgcmV0dXJuIHRydWU7XG59XG5cbmNvbnN0IGNvbnRyb2xsZXIgPSBjb25maWcgPT4ge1xuICB2YXIgX2NvbmZpZyRmaWVsZE1ldGEkZGVmLCBfb3B0aW9uc1dpdGhTdHJpbmdWYWw7XG5cbiAgY29uc3Qgb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMgPSBjb25maWcuZmllbGRNZXRhLm9wdGlvbnMubWFwKHggPT4gKHtcbiAgICBsYWJlbDogeC5sYWJlbCxcbiAgICB2YWx1ZTogeC52YWx1ZS50b1N0cmluZygpXG4gIH0pKTsgLy8gVHJhbnNmb3JtIGZyb20gc3RyaW5nIHZhbHVlIHRvIHR5cGUgYXBwcm9wcmlhdGUgdmFsdWVcblxuICBjb25zdCB0ID0gdiA9PiB2ID09PSBudWxsID8gbnVsbCA6IGNvbmZpZy5maWVsZE1ldGEudHlwZSA9PT0gJ2ludGVnZXInID8gcGFyc2VJbnQodikgOiB2O1xuXG4gIGNvbnN0IHN0cmluZ2lmaWVkRGVmYXVsdCA9IChfY29uZmlnJGZpZWxkTWV0YSRkZWYgPSBjb25maWcuZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2NvbmZpZyRmaWVsZE1ldGEkZGVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfY29uZmlnJGZpZWxkTWV0YSRkZWYudG9TdHJpbmcoKTtcbiAgcmV0dXJuIHtcbiAgICBwYXRoOiBjb25maWcucGF0aCxcbiAgICBsYWJlbDogY29uZmlnLmxhYmVsLFxuICAgIGdyYXBocWxTZWxlY3Rpb246IGNvbmZpZy5wYXRoLFxuICAgIGRlZmF1bHRWYWx1ZToge1xuICAgICAga2luZDogJ2NyZWF0ZScsXG4gICAgICB2YWx1ZTogKF9vcHRpb25zV2l0aFN0cmluZ1ZhbCA9IG9wdGlvbnNXaXRoU3RyaW5nVmFsdWVzLmZpbmQoeCA9PiB4LnZhbHVlID09PSBzdHJpbmdpZmllZERlZmF1bHQpKSAhPT0gbnVsbCAmJiBfb3B0aW9uc1dpdGhTdHJpbmdWYWwgIT09IHZvaWQgMCA/IF9vcHRpb25zV2l0aFN0cmluZ1ZhbCA6IG51bGxcbiAgICB9LFxuICAgIHR5cGU6IGNvbmZpZy5maWVsZE1ldGEudHlwZSxcbiAgICBkaXNwbGF5TW9kZTogY29uZmlnLmZpZWxkTWV0YS5kaXNwbGF5TW9kZSxcbiAgICBpc1JlcXVpcmVkOiBjb25maWcuZmllbGRNZXRhLmlzUmVxdWlyZWQsXG4gICAgb3B0aW9uczogb3B0aW9uc1dpdGhTdHJpbmdWYWx1ZXMsXG4gICAgZGVzZXJpYWxpemU6IGRhdGEgPT4ge1xuICAgICAgZm9yIChjb25zdCBvcHRpb24gb2YgY29uZmlnLmZpZWxkTWV0YS5vcHRpb25zKSB7XG4gICAgICAgIGlmIChvcHRpb24udmFsdWUgPT09IGRhdGFbY29uZmlnLnBhdGhdKSB7XG4gICAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRPcHRpb24gPSB7XG4gICAgICAgICAgICBsYWJlbDogb3B0aW9uLmxhYmVsLFxuICAgICAgICAgICAgdmFsdWU6IG9wdGlvbi52YWx1ZS50b1N0cmluZygpXG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAga2luZDogJ3VwZGF0ZScsXG4gICAgICAgICAgICBpbml0aWFsOiBzdHJpbmdpZmllZE9wdGlvbixcbiAgICAgICAgICAgIHZhbHVlOiBzdHJpbmdpZmllZE9wdGlvblxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ3VwZGF0ZScsXG4gICAgICAgIGluaXRpYWw6IG51bGwsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9O1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiB2YWx1ZSA9PiB7XG4gICAgICB2YXIgX3ZhbHVlJHZhbHVlJHZhbHVlLCBfdmFsdWUkdmFsdWU7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIFtjb25maWcucGF0aF06IHQoKF92YWx1ZSR2YWx1ZSR2YWx1ZSA9IChfdmFsdWUkdmFsdWUgPSB2YWx1ZS52YWx1ZSkgPT09IG51bGwgfHwgX3ZhbHVlJHZhbHVlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfdmFsdWUkdmFsdWUudmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSR2YWx1ZSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlJHZhbHVlIDogbnVsbClcbiAgICAgIH07XG4gICAgfSxcbiAgICB2YWxpZGF0ZTogdmFsdWUgPT4gdmFsaWRhdGUodmFsdWUsIGNvbmZpZy5maWVsZE1ldGEuaXNSZXF1aXJlZCksXG4gICAgZmlsdGVyOiB7XG4gICAgICBGaWx0ZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuIGNvcmUuanN4KGZpZWxkcy5NdWx0aVNlbGVjdCwge1xuICAgICAgICAgIG9uQ2hhbmdlOiBwcm9wcy5vbkNoYW5nZSxcbiAgICAgICAgICBvcHRpb25zOiBvcHRpb25zV2l0aFN0cmluZ1ZhbHVlcyxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiB0cnVlXG4gICAgICAgIH0pO1xuICAgICAgfSxcblxuICAgICAgZ3JhcGhxbDogKHtcbiAgICAgICAgdHlwZSxcbiAgICAgICAgdmFsdWU6IG9wdGlvbnNcbiAgICAgIH0pID0+ICh7XG4gICAgICAgIFtjb25maWcucGF0aF06IHtcbiAgICAgICAgICBbdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/ICdub3RJbicgOiAnaW4nXTogb3B0aW9ucy5tYXAoeCA9PiB0KHgudmFsdWUpKVxuICAgICAgICB9XG4gICAgICB9KSxcblxuICAgICAgTGFiZWwoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkge1xuICAgICAgICBpZiAoIXZhbHVlLmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIHNldGAgOiBgaGFzIG5vIHZhbHVlYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgY29uc3QgdmFsdWVzID0gdmFsdWUubWFwKGkgPT4gaS5sYWJlbCkuam9pbignLCAnKTtcbiAgICAgICAgICByZXR1cm4gdHlwZSA9PT0gJ25vdF9tYXRjaGVzJyA/IGBpcyBub3QgaW4gWyR7dmFsdWVzfV1gIDogYGlzIGluIFske3ZhbHVlc31dYDtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG9wdGlvbkxhYmVsID0gdmFsdWVbMF0ubGFiZWw7XG4gICAgICAgIHJldHVybiB0eXBlID09PSAnbm90X21hdGNoZXMnID8gYGlzIG5vdCAke29wdGlvbkxhYmVsfWAgOiBgaXMgJHtvcHRpb25MYWJlbH1gO1xuICAgICAgfSxcblxuICAgICAgdHlwZXM6IHtcbiAgICAgICAgbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnTWF0Y2hlcycsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiBbXVxuICAgICAgICB9LFxuICAgICAgICBub3RfbWF0Y2hlczoge1xuICAgICAgICAgIGxhYmVsOiAnRG9lcyBub3QgbWF0Y2gnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogW11cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcbn07XG5cbmV4cG9ydHMuQ2FyZFZhbHVlID0gQ2FyZFZhbHVlO1xuZXhwb3J0cy5DZWxsID0gQ2VsbDtcbmV4cG9ydHMuRmllbGQgPSBGaWVsZDtcbmV4cG9ydHMuY29udHJvbGxlciA9IGNvbnRyb2xsZXI7XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMucHJvZC5qc1wiKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLmRldi5qc1wiKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIF9vYmplY3RTcHJlYWQgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFNwcmVhZDInKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnQGtleXN0b25lLXVpL2NvcmUnKTtcbnZhciBmaWVsZHMgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvZmllbGRzJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIENlbGxDb250YWluZXIgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L0NlbGxDb250YWluZXItNDUzMjU0YjUuY2pzLmRldi5qcycpO1xudmFyIENlbGxMaW5rID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9DZWxsTGluay01MDlmYjE2Ni5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2RlZmluZVByb3BlcnR5Jyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvYnV0dG9uJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQWxlcnRUcmlhbmdsZUljb24nKTtcbnJlcXVpcmUoJ25leHQvbGluaycpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL3RvYXN0Jyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbG9hZGluZycpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL21vZGFscycpO1xucmVxdWlyZSgnYXBvbGxvLXVwbG9hZC1jbGllbnQnKTtcbnJlcXVpcmUoJ0BlbW90aW9uL2hhc2gnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3Qvc3FsaXRlLWFmOWU1MTQ4LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvb2JqZWN0V2l0aG91dFByb3BlcnRpZXMnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvZ3JhcGhxbC10cy1zY2hlbWEtZmNlN2E2YTguY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGFwb2xsby9jbGllbnQnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvYWRtaW4tbWV0YS1ncmFwaHFsLTlmOWE5YzExLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kcycpO1xucmVxdWlyZSgnbmV4dC9yb3V0ZXInKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9wb3BvdmVyJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvTW9yZUhvcml6b250YWxJY29uJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvaWNvbnMvaWNvbnMvQ2hldnJvblJpZ2h0SWNvbicpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9TaWdub3V0QnV0dG9uLWFjZGIxNTU0LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ2Zhc3QtZGVlcC1lcXVhbCcpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL25vdGljZScpO1xucmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vYWRtaW4tdWkvcm91dGVyL2Rpc3Qva2V5c3RvbmUuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnZGVjaW1hbC5qcycpO1xucmVxdWlyZSgnQGdyYXBocWwtdG9vbHMvc2NoZW1hJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGhvdXQtY29udGV4dCcpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hJyk7XG5yZXF1aXJlKCdncmFwaHFsLXR5cGUtanNvbicpO1xucmVxdWlyZSgnZ3JhcGhxbC11cGxvYWQvcHVibGljL0dyYXBoUUxVcGxvYWQuanMnKTtcbnJlcXVpcmUoJ2dyYXBocWwnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYS9hcGktd2l0aC1jb250ZXh0Jyk7XG5cbmNvbnN0IEZpZWxkID0gKHtcbiAgZmllbGQsXG4gIHZhbHVlLFxuICBvbkNoYW5nZSxcbiAgYXV0b0ZvY3VzLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgY29uc3Qge1xuICAgIHR5cG9ncmFwaHksXG4gICAgZmllbGRzOiBmaWVsZHMkMVxuICB9ID0gY29yZS51c2VUaGVtZSgpO1xuICBjb25zdCBbc2hvdWxkU2hvd0Vycm9ycywgc2V0U2hvdWxkU2hvd0Vycm9yc10gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG4gIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlcyA9IHZhbGlkYXRlKHZhbHVlLCBmaWVsZC52YWxpZGF0aW9uLCBmaWVsZC5sYWJlbCk7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIG9uQ2hhbmdlID8gY29yZS5qc3goY29yZS5TdGFjaywge1xuICAgIGdhcDogXCJzbWFsbFwiXG4gIH0sIGZpZWxkLmRpc3BsYXlNb2RlID09PSAndGV4dGFyZWEnID8gY29yZS5qc3goZmllbGRzLlRleHRBcmVhLCB7XG4gICAgaWQ6IGZpZWxkLnBhdGgsXG4gICAgYXV0b0ZvY3VzOiBhdXRvRm9jdXMsXG4gICAgb25DaGFuZ2U6IGV2ZW50ID0+IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgaW5uZXI6IHtcbiAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgdmFsdWU6IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH0pKSxcbiAgICB2YWx1ZTogdmFsdWUuaW5uZXIua2luZCA9PT0gJ251bGwnID8gJycgOiB2YWx1ZS5pbm5lci52YWx1ZSxcbiAgICBkaXNhYmxlZDogdmFsdWUuaW5uZXIua2luZCA9PT0gJ251bGwnLFxuICAgIG9uQmx1cjogKCkgPT4ge1xuICAgICAgc2V0U2hvdWxkU2hvd0Vycm9ycyh0cnVlKTtcbiAgICB9XG4gIH0pIDogY29yZS5qc3goZmllbGRzLlRleHRJbnB1dCwge1xuICAgIGlkOiBmaWVsZC5wYXRoLFxuICAgIGF1dG9Gb2N1czogYXV0b0ZvY3VzLFxuICAgIG9uQ2hhbmdlOiBldmVudCA9PiBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgIGlubmVyOiB7XG4gICAgICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgICAgIHZhbHVlOiBldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9KSksXG4gICAgdmFsdWU6IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyA/ICcnIDogdmFsdWUuaW5uZXIudmFsdWUsXG4gICAgZGlzYWJsZWQ6IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyxcbiAgICBvbkJsdXI6ICgpID0+IHtcbiAgICAgIHNldFNob3VsZFNob3dFcnJvcnModHJ1ZSk7XG4gICAgfVxuICB9KSwgZmllbGQuaXNOdWxsYWJsZSAmJiBjb3JlLmpzeChmaWVsZHMuQ2hlY2tib3gsIHtcbiAgICBhdXRvRm9jdXM6IGF1dG9Gb2N1cyxcbiAgICBkaXNhYmxlZDogb25DaGFuZ2UgPT09IHVuZGVmaW5lZCxcbiAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgaWYgKHZhbHVlLmlubmVyLmtpbmQgPT09ICd2YWx1ZScpIHtcbiAgICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgICAgaW5uZXI6IHtcbiAgICAgICAgICAgIGtpbmQ6ICdudWxsJyxcbiAgICAgICAgICAgIHByZXY6IHZhbHVlLmlubmVyLnZhbHVlXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgICBpbm5lcjoge1xuICAgICAgICAgICAga2luZDogJ3ZhbHVlJyxcbiAgICAgICAgICAgIHZhbHVlOiB2YWx1ZS5pbm5lci5wcmV2XG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfSxcbiAgICBjaGVja2VkOiB2YWx1ZS5pbm5lci5raW5kID09PSAnbnVsbCdcbiAgfSwgY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICBjc3M6IHtcbiAgICAgIGZvbnRXZWlnaHQ6IHR5cG9ncmFwaHkuZm9udFdlaWdodC5zZW1pYm9sZCxcbiAgICAgIGNvbG9yOiBmaWVsZHMkMS5sYWJlbENvbG9yXG4gICAgfVxuICB9LCBcIlNldCBmaWVsZCBhcyBudWxsXCIpKSwgISF2YWxpZGF0aW9uTWVzc2FnZXMubGVuZ3RoICYmIChzaG91bGRTaG93RXJyb3JzIHx8IGZvcmNlVmFsaWRhdGlvbikgJiYgdmFsaWRhdGlvbk1lc3NhZ2VzLm1hcCgobWVzc2FnZSwgaSkgPT4gY29yZS5qc3goXCJzcGFuXCIsIHtcbiAgICBrZXk6IGksXG4gICAgY3NzOiB7XG4gICAgICBjb2xvcjogJ3JlZCdcbiAgICB9XG4gIH0sIG1lc3NhZ2UpKSkgOiB2YWx1ZSk7XG59O1xuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXSArICcnO1xuICByZXR1cm4gbGlua1RvID8gY29yZS5qc3goQ2VsbExpbmsuQ2VsbExpbmssIGxpbmtUbywgdmFsdWUpIDogY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCB2YWx1ZSk7XG59O1xuQ2VsbC5zdXBwb3J0c0xpbmtUbyA9IHRydWU7XG5jb25zdCBDYXJkVmFsdWUgPSAoe1xuICBpdGVtLFxuICBmaWVsZFxufSkgPT4ge1xuICByZXR1cm4gY29yZS5qc3goZmllbGRzLkZpZWxkQ29udGFpbmVyLCBudWxsLCBjb3JlLmpzeChmaWVsZHMuRmllbGRMYWJlbCwgbnVsbCwgZmllbGQubGFiZWwpLCBpdGVtW2ZpZWxkLnBhdGhdKTtcbn07XG5cbmZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCB2YWxpZGF0aW9uLCBmaWVsZExhYmVsKSB7XG4gIC8vIGlmIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZSBhcyB0aGUgaW5pdGlhbCBmb3IgYW4gdXBkYXRlLCB3ZSBkb24ndCB3YW50IHRvIGJsb2NrIHNhdmluZ1xuICAvLyBzaW5jZSB3ZSdyZSBub3QgZ29ubmEgc2VuZCBpdCBhbnl3YXkgaWYgaXQncyB0aGUgc2FtZVxuICAvLyBhbmQgZ29pbmcgXCJmaXggdGhpcyB0aGluZyB0aGF0IGlzIHVucmVsYXRlZCB0byB0aGUgdGhpbmcgeW91J3JlIGRvaW5nXCIgaXMgYmFkXG4gIC8vIGFuZCBhbHNvIGJjIGl0IGNvdWxkIGJlIG51bGwgYmMgb2YgcmVhZCBhY2Nlc3MgY29udHJvbFxuICBpZiAodmFsdWUua2luZCA9PT0gJ3VwZGF0ZScgJiYgKHZhbHVlLmluaXRpYWwua2luZCA9PT0gJ251bGwnICYmIHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyB8fCB2YWx1ZS5pbml0aWFsLmtpbmQgPT09ICd2YWx1ZScgJiYgdmFsdWUuaW5uZXIua2luZCA9PT0gJ3ZhbHVlJyAmJiB2YWx1ZS5pbm5lci52YWx1ZSA9PT0gdmFsdWUuaW5pdGlhbC52YWx1ZSkpIHtcbiAgICByZXR1cm4gW107XG4gIH1cblxuICBpZiAodmFsdWUuaW5uZXIua2luZCA9PT0gJ251bGwnKSB7XG4gICAgaWYgKHZhbGlkYXRpb24uaXNSZXF1aXJlZCkge1xuICAgICAgcmV0dXJuIFtgJHtmaWVsZExhYmVsfSBpcyByZXF1aXJlZGBdO1xuICAgIH1cblxuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIGNvbnN0IHZhbCA9IHZhbHVlLmlubmVyLnZhbHVlO1xuICBsZXQgbWVzc2FnZXMgPSBbXTtcblxuICBpZiAodmFsaWRhdGlvbi5sZW5ndGgubWluICE9PSBudWxsICYmIHZhbC5sZW5ndGggPCB2YWxpZGF0aW9uLmxlbmd0aC5taW4pIHtcbiAgICBpZiAodmFsaWRhdGlvbi5sZW5ndGgubWluID09PSAxKSB7XG4gICAgICBtZXNzYWdlcy5wdXNoKGAke2ZpZWxkTGFiZWx9IG11c3Qgbm90IGJlIGVtcHR5YCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1lc3NhZ2VzLnB1c2goYCR7ZmllbGRMYWJlbH0gbXVzdCBiZSBhdCBsZWFzdCAke3ZhbGlkYXRpb24ubGVuZ3RoLm1pbn0gY2hhcmFjdGVycyBsb25nYCk7XG4gICAgfVxuICB9XG5cbiAgaWYgKHZhbGlkYXRpb24ubGVuZ3RoLm1heCAhPT0gbnVsbCAmJiB2YWwubGVuZ3RoID4gdmFsaWRhdGlvbi5sZW5ndGgubWF4KSB7XG4gICAgbWVzc2FnZXMucHVzaChgJHtmaWVsZExhYmVsfSBtdXN0IGJlIG5vIGxvbmdlciB0aGFuICR7dmFsaWRhdGlvbi5sZW5ndGgubWlufSBjaGFyYWN0ZXJzYCk7XG4gIH1cblxuICBpZiAodmFsaWRhdGlvbi5tYXRjaCAmJiAhdmFsaWRhdGlvbi5tYXRjaC5yZWdleC50ZXN0KHZhbCkpIHtcbiAgICBtZXNzYWdlcy5wdXNoKHZhbGlkYXRpb24ubWF0Y2guZXhwbGFuYXRpb24gfHwgYCR7ZmllbGRMYWJlbH0gbXVzdCBtYXRjaCAke3ZhbGlkYXRpb24ubWF0Y2gucmVnZXh9YCk7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZXM7XG59XG5cbmZ1bmN0aW9uIGRlc2VyaWFsaXplVGV4dFZhbHVlKHZhbHVlKSB7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiB7XG4gICAgICBraW5kOiAnbnVsbCcsXG4gICAgICBwcmV2OiAnJ1xuICAgIH07XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGtpbmQ6ICd2YWx1ZScsXG4gICAgdmFsdWVcbiAgfTtcbn1cblxuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIGNvbnN0IHZhbGlkYXRpb24gPSB7XG4gICAgaXNSZXF1aXJlZDogY29uZmlnLmZpZWxkTWV0YS52YWxpZGF0aW9uLmlzUmVxdWlyZWQsXG4gICAgbGVuZ3RoOiBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubGVuZ3RoLFxuICAgIG1hdGNoOiBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubWF0Y2ggPyB7XG4gICAgICByZWdleDogbmV3IFJlZ0V4cChjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubWF0Y2gucmVnZXguc291cmNlLCBjb25maWcuZmllbGRNZXRhLnZhbGlkYXRpb24ubWF0Y2gucmVnZXguZmxhZ3MpLFxuICAgICAgZXhwbGFuYXRpb246IGNvbmZpZy5maWVsZE1ldGEudmFsaWRhdGlvbi5tYXRjaC5leHBsYW5hdGlvblxuICAgIH0gOiBudWxsXG4gIH07XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBkZWZhdWx0VmFsdWU6IHtcbiAgICAgIGtpbmQ6ICdjcmVhdGUnLFxuICAgICAgaW5uZXI6IGRlc2VyaWFsaXplVGV4dFZhbHVlKGNvbmZpZy5maWVsZE1ldGEuZGVmYXVsdFZhbHVlKVxuICAgIH0sXG4gICAgZGlzcGxheU1vZGU6IGNvbmZpZy5maWVsZE1ldGEuZGlzcGxheU1vZGUsXG4gICAgaXNOdWxsYWJsZTogY29uZmlnLmZpZWxkTWV0YS5pc051bGxhYmxlLFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IGlubmVyID0gZGVzZXJpYWxpemVUZXh0VmFsdWUoZGF0YVtjb25maWcucGF0aF0pO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAga2luZDogJ3VwZGF0ZScsXG4gICAgICAgIGlubmVyLFxuICAgICAgICBpbml0aWFsOiBpbm5lclxuICAgICAgfTtcbiAgICB9LFxuICAgIHNlcmlhbGl6ZTogdmFsdWUgPT4gKHtcbiAgICAgIFtjb25maWcucGF0aF06IHZhbHVlLmlubmVyLmtpbmQgPT09ICdudWxsJyA/IG51bGwgOiB2YWx1ZS5pbm5lci52YWx1ZVxuICAgIH0pLFxuICAgIHZhbGlkYXRpb24sXG4gICAgdmFsaWRhdGU6IHZhbCA9PiB2YWxpZGF0ZSh2YWwsIHZhbGlkYXRpb24sIGNvbmZpZy5sYWJlbCkubGVuZ3RoID09PSAwLFxuICAgIGZpbHRlcjoge1xuICAgICAgRmlsdGVyKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCB7XG4gICAgICAgICAgb25DaGFuZ2U6IGV2ZW50ID0+IHtcbiAgICAgICAgICAgIHByb3BzLm9uQ2hhbmdlKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICB2YWx1ZTogcHJvcHMudmFsdWUsXG4gICAgICAgICAgYXV0b0ZvY3VzOiBwcm9wcy5hdXRvRm9jdXNcbiAgICAgICAgfSk7XG4gICAgICB9LFxuXG4gICAgICBncmFwaHFsOiAoe1xuICAgICAgICB0eXBlLFxuICAgICAgICB2YWx1ZVxuICAgICAgfSkgPT4ge1xuICAgICAgICBjb25zdCBpc05vdCA9IHR5cGUuc3RhcnRzV2l0aCgnbm90XycpO1xuICAgICAgICBjb25zdCBrZXkgPSB0eXBlID09PSAnaXNfaScgfHwgdHlwZSA9PT0gJ25vdF9pJyA/ICdlcXVhbHMnIDogdHlwZS5yZXBsYWNlKC9faSQvLCAnJykucmVwbGFjZSgnbm90XycsICcnKS5yZXBsYWNlKC9fKFthLXpdKS9nLCAoXywgY2hhcikgPT4gY2hhci50b1VwcGVyQ2FzZSgpKTtcbiAgICAgICAgY29uc3QgZmlsdGVyID0ge1xuICAgICAgICAgIFtrZXldOiB2YWx1ZVxuICAgICAgICB9O1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgaXNOb3QgPyB7XG4gICAgICAgICAgICBub3Q6IGZpbHRlclxuICAgICAgICAgIH0gOiBmaWx0ZXIpLCB7fSwge1xuICAgICAgICAgICAgbW9kZTogY29uZmlnLmZpZWxkTWV0YS5zaG91bGRVc2VNb2RlSW5zZW5zaXRpdmUgPyAnaW5zZW5zaXRpdmUnIDogdW5kZWZpbmVkXG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG5cbiAgICAgIExhYmVsKHtcbiAgICAgICAgbGFiZWwsXG4gICAgICAgIHZhbHVlXG4gICAgICB9KSB7XG4gICAgICAgIHJldHVybiBgJHtsYWJlbC50b0xvd2VyQ2FzZSgpfTogXCIke3ZhbHVlfVwiYDtcbiAgICAgIH0sXG5cbiAgICAgIHR5cGVzOiB7XG4gICAgICAgIGNvbnRhaW5zX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0NvbnRhaW5zJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9jb250YWluc19pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBjb250YWluJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGlzX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIGV4YWN0bHknLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2k6IHtcbiAgICAgICAgICBsYWJlbDogJ0lzIG5vdCBleGFjdGx5JyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0c193aXRoX2k6IHtcbiAgICAgICAgICBsYWJlbDogJ1N0YXJ0cyB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIG5vdF9zdGFydHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBzdGFydCB3aXRoJyxcbiAgICAgICAgICBpbml0aWFsVmFsdWU6ICcnXG4gICAgICAgIH0sXG4gICAgICAgIGVuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdFbmRzIHdpdGgnLFxuICAgICAgICAgIGluaXRpYWxWYWx1ZTogJydcbiAgICAgICAgfSxcbiAgICAgICAgbm90X2VuZHNfd2l0aF9pOiB7XG4gICAgICAgICAgbGFiZWw6ICdEb2VzIG5vdCBlbmQgd2l0aCcsXG4gICAgICAgICAgaW5pdGlhbFZhbHVlOiAnJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufTtcblxuZXhwb3J0cy5DYXJkVmFsdWUgPSBDYXJkVmFsdWU7XG5leHBvcnRzLkNlbGwgPSBDZWxsO1xuZXhwb3J0cy5GaWVsZCA9IEZpZWxkO1xuZXhwb3J0cy5jb250cm9sbGVyID0gY29udHJvbGxlcjtcbiIsIid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIikge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5wcm9kLmpzXCIpO1xufSBlbHNlIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi9rZXlzdG9uZS5janMuZGV2LmpzXCIpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgX2V4dGVuZHMgPSByZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2V4dGVuZHMnKTtcbnZhciBfb2JqZWN0U3ByZWFkID0gcmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9vYmplY3RTcHJlYWQyJyk7XG52YXIgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCdAa2V5c3RvbmUtdWkvY29yZScpO1xudmFyIGZpZWxkcyA9IHJlcXVpcmUoJ0BrZXlzdG9uZS11aS9maWVsZHMnKTtcbnZhciBDZWxsQ29udGFpbmVyID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vLi4vZGlzdC9DZWxsQ29udGFpbmVyLTQ1MzI1NGI1LmNqcy5kZXYuanMnKTtcbnZhciBDZWxsTGluayA9IHJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2Rpc3QvQ2VsbExpbmstNTA5ZmIxNjYuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eScpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2J1dHRvbicpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uJyk7XG5yZXF1aXJlKCduZXh0L2xpbmsnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS90b2FzdCcpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL2xvYWRpbmcnKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9tb2RhbHMnKTtcbnJlcXVpcmUoJ2Fwb2xsby11cGxvYWQtY2xpZW50Jyk7XG5yZXF1aXJlKCdAZW1vdGlvbi9oYXNoJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L3NxbGl0ZS1hZjllNTE0OC5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCdAYmFiZWwvcnVudGltZS9oZWxwZXJzL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2dyYXBocWwtdHMtc2NoZW1hLWZjZTdhNmE4LmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ0BhcG9sbG8vY2xpZW50Jyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L2FkbWluLW1ldGEtZ3JhcGhxbC05ZjlhOWMxMS5janMuZGV2LmpzJyk7XG5yZXF1aXJlKCduZXh0L3JvdXRlcicpO1xucmVxdWlyZSgnQGtleXN0b25lLXVpL3BvcG92ZXInKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb24nKTtcbnJlcXVpcmUoJ0BrZXlzdG9uZS11aS9pY29ucy9pY29ucy9DaGV2cm9uUmlnaHRJY29uJyk7XG5yZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L1NpZ25vdXRCdXR0b24tYWNkYjE1NTQuY2pzLmRldi5qcycpO1xucmVxdWlyZSgnZmFzdC1kZWVwLWVxdWFsJyk7XG5yZXF1aXJlKCdAa2V5c3RvbmUtdWkvbm90aWNlJyk7XG52YXIgdXRpbHMgPSByZXF1aXJlKCcuLi8uLi8uLi8uLi8uLi9kaXN0L3V0aWxzLWVmZjFmZDMwLmNqcy5kZXYuanMnKTtcbnZhciBkYXRlRm5zID0gcmVxdWlyZSgnZGF0ZS1mbnMnKTtcbnJlcXVpcmUoJy4uLy4uLy4uLy4uLy4uL2FkbWluLXVpL3JvdXRlci9kaXN0L2tleXN0b25lLmNqcy5kZXYuanMnKTtcbnJlcXVpcmUoJ2RlY2ltYWwuanMnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRvb2xzL3NjaGVtYScpO1xucmVxdWlyZSgnQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHQnKTtcbnJlcXVpcmUoJ0BncmFwaHFsLXRzL3NjaGVtYScpO1xucmVxdWlyZSgnZ3JhcGhxbC10eXBlLWpzb24nKTtcbnJlcXVpcmUoJ2dyYXBocWwtdXBsb2FkL3B1YmxpYy9HcmFwaFFMVXBsb2FkLmpzJyk7XG5yZXF1aXJlKCdncmFwaHFsJyk7XG5yZXF1aXJlKCdAZ3JhcGhxbC10cy9zY2hlbWEvYXBpLXdpdGgtY29udGV4dCcpO1xuXG5jb25zdCBGVUxMX1RJTUVfUEFUVEVSTiA9ICdISDptbTpzcy5TU1MnO1xuXG5mdW5jdGlvbiBmb3JtYXRGdWxsVGltZShkYXRlKSB7XG4gIHJldHVybiBkYXRlRm5zLmZvcm1hdChkYXRlLCBGVUxMX1RJTUVfUEFUVEVSTik7XG59XG5cbmZ1bmN0aW9uIGZvcm1hdFRpbWUodGltZSkge1xuICBjb25zdCBkYXRlID0gZGF0ZUZucy5wYXJzZSh0aW1lLCBGVUxMX1RJTUVfUEFUVEVSTiwgbmV3IERhdGUoKSk7XG5cbiAgaWYgKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgIT09IDApIHtcbiAgICByZXR1cm4gZGF0ZUZucy5mb3JtYXQoZGF0ZSwgRlVMTF9USU1FX1BBVFRFUk4pO1xuICB9XG5cbiAgaWYgKGRhdGUuZ2V0U2Vjb25kcygpICE9PSAwKSB7XG4gICAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsICdISDptbTpzcycpO1xuICB9XG5cbiAgcmV0dXJuIGRhdGVGbnMuZm9ybWF0KGRhdGUsICdISDptbScpO1xufVxuZnVuY3Rpb24gcGFyc2VUaW1lKHRpbWUpIHtcbiAgZm9yIChjb25zdCBwYXR0ZXJuIG9mIFsnSDptOnMuU1NTJywgJ0g6bTpzJywgJ0g6bScsICdIJ10pIHtcbiAgICBjb25zdCBwYXJzZWQgPSBkYXRlRm5zLnBhcnNlKHRpbWUsIHBhdHRlcm4sIG5ldyBEYXRlKCkpO1xuXG4gICAgaWYgKGRhdGVGbnMuaXNWYWxpZChwYXJzZWQpKSB7XG4gICAgICByZXR1cm4gZGF0ZUZucy5mb3JtYXQocGFyc2VkLCBGVUxMX1RJTUVfUEFUVEVSTik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cbmZ1bmN0aW9uIGNvbnN0cnVjdFRpbWVzdGFtcCh7XG4gIGRhdGVWYWx1ZSxcbiAgdGltZVZhbHVlXG59KSB7XG4gIHJldHVybiBuZXcgRGF0ZShgJHtkYXRlVmFsdWV9VCR7dGltZVZhbHVlfWApLnRvSVNPU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBkZWNvbnN0cnVjdFRpbWVzdGFtcCh2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGRhdGVWYWx1ZTogZGF0ZUZucy5mb3JtYXRJU08obmV3IERhdGUodmFsdWUpLCB7XG4gICAgICByZXByZXNlbnRhdGlvbjogJ2RhdGUnXG4gICAgfSksXG4gICAgdGltZVZhbHVlOiB7XG4gICAgICBraW5kOiAncGFyc2VkJyxcbiAgICAgIHZhbHVlOiBmb3JtYXRGdWxsVGltZShuZXcgRGF0ZSh2YWx1ZSkpXG4gICAgfVxuICB9O1xufVxuZnVuY3Rpb24gZm9ybWF0T3V0cHV0KHZhbHVlKSB7XG4gIGlmICghdmFsdWUpIHJldHVybiAnJztcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlKTtcbiAgcmV0dXJuIGRhdGUudG9Mb2NhbGVTdHJpbmcoKTtcbn1cblxuY29uc3QgRmllbGQgPSAoe1xuICBmaWVsZCxcbiAgdmFsdWUsXG4gIG9uQ2hhbmdlLFxuICBmb3JjZVZhbGlkYXRpb25cbn0pID0+IHtcbiAgdmFyIF92YWx1ZSR2YWx1ZSRkYXRlVmFsdSwgX2ZpZWxkJGZpZWxkTWV0YSRkZWZhO1xuXG4gIGNvbnN0IFt0b3VjaGVkRmlyc3RJbnB1dCwgc2V0VG91Y2hlZEZpcnN0SW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdG91Y2hlZFNlY29uZElucHV0LCBzZXRUb3VjaGVkU2Vjb25kSW5wdXRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBzaG93VmFsaWRhdGlvbiA9IHRvdWNoZWRGaXJzdElucHV0ICYmIHRvdWNoZWRTZWNvbmRJbnB1dCB8fCBmb3JjZVZhbGlkYXRpb247XG4gIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlcyA9IHNob3dWYWxpZGF0aW9uID8gdmFsaWRhdGUodmFsdWUsIGZpZWxkLmZpZWxkTWV0YSwgZmllbGQubGFiZWwpIDogdW5kZWZpbmVkO1xuICBjb25zdCB0aW1lSW5wdXRQcm9wcyA9IHV0aWxzLnVzZUZvcm1hdHRlZElucHV0KHtcbiAgICBmb3JtYXQoe1xuICAgICAgdmFsdWVcbiAgICB9KSB7XG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZm9ybWF0VGltZSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIHBhcnNlKHZhbHVlKSB7XG4gICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKTtcblxuICAgICAgaWYgKHZhbHVlID09PSAnJykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHBhcnNlZCA9IHBhcnNlVGltZSh2YWx1ZSk7XG5cbiAgICAgIGlmIChwYXJzZWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxuICAgICAgICAgIHZhbHVlOiBwYXJzZWRcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICB9LCB7XG4gICAgdmFsdWU6IHZhbHVlLnZhbHVlLnRpbWVWYWx1ZSxcblxuICAgIG9uQ2hhbmdlKHRpbWVWYWx1ZSkge1xuICAgICAgb25DaGFuZ2UgPT09IG51bGwgfHwgb25DaGFuZ2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9uQ2hhbmdlKF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdmFsdWUpLCB7fSwge1xuICAgICAgICB2YWx1ZTogX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZS52YWx1ZSksIHt9LCB7XG4gICAgICAgICAgdGltZVZhbHVlXG4gICAgICAgIH0pXG4gICAgICB9KSk7XG4gICAgfSxcblxuICAgIG9uQmx1cigpIHtcbiAgICAgIHNldFRvdWNoZWRTZWNvbmRJbnB1dCh0cnVlKTtcbiAgICB9XG5cbiAgfSk7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIHtcbiAgICBhczogXCJmaWVsZHNldFwiXG4gIH0sIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCB7XG4gICAgYXM6IFwibGVnZW5kXCJcbiAgfSwgZmllbGQubGFiZWwpLCBvbkNoYW5nZSA/IGNvcmUuanN4KGNvcmUuSW5saW5lLCB7XG4gICAgZ2FwOiBcInNtYWxsXCJcbiAgfSwgY29yZS5qc3goY29yZS5TdGFjaywgbnVsbCwgY29yZS5qc3goZmllbGRzLkRhdGVQaWNrZXIsIHtcbiAgICBvblVwZGF0ZTogZGF0ZSA9PiB7XG4gICAgICBvbkNoYW5nZShfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlKSwge30sIHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICBkYXRlVmFsdWU6IGRhdGUsXG4gICAgICAgICAgdGltZVZhbHVlOiB0eXBlb2YgdmFsdWUudmFsdWUudGltZVZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS52YWx1ZS50aW1lVmFsdWUudmFsdWUgPT09IG51bGwgPyB7XG4gICAgICAgICAgICBraW5kOiAncGFyc2VkJyxcbiAgICAgICAgICAgIHZhbHVlOiAnMDA6MDA6MDAuMDAwJ1xuICAgICAgICAgIH0gOiB2YWx1ZS52YWx1ZS50aW1lVmFsdWVcbiAgICAgICAgfVxuICAgICAgfSkpO1xuICAgIH0sXG4gICAgb25DbGVhcjogKCkgPT4ge1xuICAgICAgb25DaGFuZ2UoX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB2YWx1ZSksIHt9LCB7XG4gICAgICAgIHZhbHVlOiBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIHZhbHVlLnZhbHVlKSwge30sIHtcbiAgICAgICAgICBkYXRlVmFsdWU6IG51bGxcbiAgICAgICAgfSlcbiAgICAgIH0pKTtcbiAgICB9LFxuICAgIG9uQmx1cjogKCkgPT4gc2V0VG91Y2hlZEZpcnN0SW5wdXQodHJ1ZSksXG4gICAgdmFsdWU6IChfdmFsdWUkdmFsdWUkZGF0ZVZhbHUgPSB2YWx1ZS52YWx1ZS5kYXRlVmFsdWUpICE9PSBudWxsICYmIF92YWx1ZSR2YWx1ZSRkYXRlVmFsdSAhPT0gdm9pZCAwID8gX3ZhbHVlJHZhbHVlJGRhdGVWYWx1IDogJydcbiAgfSksICh2YWxpZGF0aW9uTWVzc2FnZXMgPT09IG51bGwgfHwgdmFsaWRhdGlvbk1lc3NhZ2VzID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YWxpZGF0aW9uTWVzc2FnZXMuZGF0ZSkgJiYgY29yZS5qc3goY29yZS5UZXh0LCB7XG4gICAgY29sb3I6IFwicmVkNjAwXCIsXG4gICAgc2l6ZTogXCJzbWFsbFwiXG4gIH0sIHZhbGlkYXRpb25NZXNzYWdlcy5kYXRlKSksIGNvcmUuanN4KGNvcmUuU3RhY2ssIG51bGwsIGNvcmUuanN4KGNvcmUuVmlzdWFsbHlIaWRkZW4sIHtcbiAgICBhczogXCJsYWJlbFwiLFxuICAgIGh0bWxGb3I6IGAke2ZpZWxkLnBhdGh9LS10aW1lLWlucHV0YFxuICB9LCBgJHtmaWVsZC5sYWJlbH0gdGltZSBmaWVsZGApLCBjb3JlLmpzeChmaWVsZHMuVGV4dElucHV0LCBfZXh0ZW5kcyh7XG4gICAgaWQ6IGAke2ZpZWxkLnBhdGh9LS10aW1lLWlucHV0YFxuICB9LCB0aW1lSW5wdXRQcm9wcywge1xuICAgIGRpc2FibGVkOiBvbkNoYW5nZSA9PT0gdW5kZWZpbmVkLFxuICAgIHBsYWNlaG9sZGVyOiBcIjAwOjAwXCJcbiAgfSkpLCAodmFsaWRhdGlvbk1lc3NhZ2VzID09PSBudWxsIHx8IHZhbGlkYXRpb25NZXNzYWdlcyA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFsaWRhdGlvbk1lc3NhZ2VzLnRpbWUpICYmIGNvcmUuanN4KGNvcmUuVGV4dCwge1xuICAgIGNvbG9yOiBcInJlZDYwMFwiLFxuICAgIHNpemU6IFwic21hbGxcIlxuICB9LCB2YWxpZGF0aW9uTWVzc2FnZXMudGltZSkpKSA6IHZhbHVlLnZhbHVlLmRhdGVWYWx1ZSAhPT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUudmFsdWUudGltZVZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZS52YWx1ZS50aW1lVmFsdWUudmFsdWUgIT09IG51bGwgJiYgY29yZS5qc3goY29yZS5UZXh0LCBudWxsLCBmb3JtYXRPdXRwdXQoY29uc3RydWN0VGltZXN0YW1wKHtcbiAgICBkYXRlVmFsdWU6IHZhbHVlLnZhbHVlLmRhdGVWYWx1ZSxcbiAgICB0aW1lVmFsdWU6IHZhbHVlLnZhbHVlLnRpbWVWYWx1ZS52YWx1ZVxuICB9KSkpLCAodmFsdWUua2luZCA9PT0gJ2NyZWF0ZScgJiYgdHlwZW9mIGZpZWxkLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgIT09ICdzdHJpbmcnICYmICgoX2ZpZWxkJGZpZWxkTWV0YSRkZWZhID0gZmllbGQuZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2ZpZWxkJGZpZWxkTWV0YSRkZWZhID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGQkZmllbGRNZXRhJGRlZmEua2luZCkgPT09ICdub3cnIHx8IGZpZWxkLmZpZWxkTWV0YS51cGRhdGVkQXQpICYmIGNvcmUuanN4KGNvcmUuVGV4dCwgbnVsbCwgXCJXaGVuIHRoaXMgaXRlbSBpcyBzYXZlZCwgdGhpcyBmaWVsZCB3aWxsIGJlIHNldCB0byB0aGUgY3VycmVudCBkYXRlIGFuZCB0aW1lXCIpKSk7XG59O1xuXG5mdW5jdGlvbiB2YWxpZGF0ZSh2YWx1ZSwgZmllbGRNZXRhLCBsYWJlbCkge1xuICB2YXIgX2ZpZWxkTWV0YSRkZWZhdWx0VmFsO1xuXG4gIGNvbnN0IHZhbCA9IHZhbHVlLnZhbHVlO1xuICBjb25zdCBoYXNEYXRlVmFsdWUgPSB2YWwuZGF0ZVZhbHVlICE9PSBudWxsO1xuICBjb25zdCBoYXNUaW1lVmFsdWUgPSB0eXBlb2YgdmFsLnRpbWVWYWx1ZSA9PT0gJ3N0cmluZycgfHwgdHlwZW9mIHZhbC50aW1lVmFsdWUudmFsdWUgPT09ICdzdHJpbmcnO1xuICBjb25zdCBpc1ZhbHVlRW1wdHkgPSAhaGFzRGF0ZVZhbHVlICYmICFoYXNUaW1lVmFsdWU7IC8vIGlmIHdlIHJlY2lldmUgbnVsbCBpbml0aWFsbHkgb24gdGhlIGl0ZW0gdmlldyBhbmQgdGhlIGN1cnJlbnQgdmFsdWUgaXMgbnVsbCxcbiAgLy8gd2Ugc2hvdWxkIGFsd2F5cyBhbGxvdyBzYXZpbmcgaXQgYmVjYXVzZTpcbiAgLy8gLSB0aGUgdmFsdWUgbWlnaHQgYmUgbnVsbCBpbiB0aGUgZGF0YWJhc2UgYW5kIHdlIGRvbid0IHdhbnQgdG8gcHJldmVudCBzYXZpbmcgdGhlIHdob2xlIGl0ZW0gYmVjYXVzZSBvZiB0aGF0XG4gIC8vIC0gd2UgbWlnaHQgaGF2ZSBudWxsIGJlY2F1c2Ugb2YgYW4gYWNjZXNzIGNvbnRyb2wgZXJyb3JcblxuICBpZiAodmFsdWUua2luZCA9PT0gJ3VwZGF0ZScgJiYgdmFsdWUuaW5pdGlhbCA9PT0gbnVsbCAmJiBpc1ZhbHVlRW1wdHkpIHtcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgaWYgKHZhbHVlLmtpbmQgPT09ICdjcmVhdGUnICYmIGlzVmFsdWVFbXB0eSAmJiAodHlwZW9mIGZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgPT09ICdvYmplY3QnICYmICgoX2ZpZWxkTWV0YSRkZWZhdWx0VmFsID0gZmllbGRNZXRhLmRlZmF1bHRWYWx1ZSkgPT09IG51bGwgfHwgX2ZpZWxkTWV0YSRkZWZhdWx0VmFsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZmllbGRNZXRhJGRlZmF1bHRWYWwua2luZCkgPT09ICdub3cnIHx8IGZpZWxkTWV0YS51cGRhdGVkQXQpKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmIChmaWVsZE1ldGEuaXNSZXF1aXJlZCAmJiBpc1ZhbHVlRW1wdHkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogYCR7bGFiZWx9IGlzIHJlcXVpcmVkYFxuICAgIH07XG4gIH1cblxuICBpZiAoaGFzRGF0ZVZhbHVlICYmICFoYXNUaW1lVmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdGltZTogYCR7bGFiZWx9IHJlcXVpcmVzIGEgdGltZSB0byBiZSBwcm92aWRlZGBcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgdGltZUVycm9yID0gdHlwZW9mIHZhbC50aW1lVmFsdWUgPT09ICdzdHJpbmcnID8gYCR7bGFiZWx9IHJlcXVpcmVzIGEgdmFsaWQgdGltZSBpbiB0aGUgZm9ybWF0IGhoOm1tYCA6IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzVGltZVZhbHVlICYmICFoYXNEYXRlVmFsdWUpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0ZTogYCR7bGFiZWx9IHJlcXVpcmVzIGEgZGF0ZSB0byBiZSBzZWxlY3RlZGAsXG4gICAgICB0aW1lOiB0aW1lRXJyb3JcbiAgICB9O1xuICB9XG5cbiAgaWYgKHRpbWVFcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICB0aW1lOiB0aW1lRXJyb3JcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn1cblxuY29uc3QgQ2VsbCA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkLFxuICBsaW5rVG9cbn0pID0+IHtcbiAgbGV0IHZhbHVlID0gaXRlbVtmaWVsZC5wYXRoXTtcbiAgcmV0dXJuIGxpbmtUbyA/IGNvcmUuanN4KENlbGxMaW5rLkNlbGxMaW5rLCBsaW5rVG8sIGZvcm1hdE91dHB1dCh2YWx1ZSkpIDogY29yZS5qc3goQ2VsbENvbnRhaW5lci5DZWxsQ29udGFpbmVyLCBudWxsLCBmb3JtYXRPdXRwdXQodmFsdWUpKTtcbn07XG5DZWxsLnN1cHBvcnRzTGlua1RvID0gdHJ1ZTtcbmNvbnN0IENhcmRWYWx1ZSA9ICh7XG4gIGl0ZW0sXG4gIGZpZWxkXG59KSA9PiB7XG4gIHJldHVybiBjb3JlLmpzeChmaWVsZHMuRmllbGRDb250YWluZXIsIG51bGwsIGNvcmUuanN4KGZpZWxkcy5GaWVsZExhYmVsLCBudWxsLCBmaWVsZC5sYWJlbCksIGZvcm1hdE91dHB1dChpdGVtW2ZpZWxkLnBhdGhdKSk7XG59O1xuY29uc3QgY29udHJvbGxlciA9IGNvbmZpZyA9PiB7XG4gIHJldHVybiB7XG4gICAgcGF0aDogY29uZmlnLnBhdGgsXG4gICAgbGFiZWw6IGNvbmZpZy5sYWJlbCxcbiAgICBncmFwaHFsU2VsZWN0aW9uOiBjb25maWcucGF0aCxcbiAgICBmaWVsZE1ldGE6IGNvbmZpZy5maWVsZE1ldGEsXG4gICAgZGVmYXVsdFZhbHVlOiB7XG4gICAgICBraW5kOiAnY3JlYXRlJyxcbiAgICAgIHZhbHVlOiB0eXBlb2YgY29uZmlnLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUgPT09ICdzdHJpbmcnID8gZGVjb25zdHJ1Y3RUaW1lc3RhbXAoY29uZmlnLmZpZWxkTWV0YS5kZWZhdWx0VmFsdWUpIDoge1xuICAgICAgICBkYXRlVmFsdWU6IG51bGwsXG4gICAgICAgIHRpbWVWYWx1ZToge1xuICAgICAgICAgIGtpbmQ6ICdwYXJzZWQnLFxuICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIGRlc2VyaWFsaXplOiBkYXRhID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVtjb25maWcucGF0aF07XG4gICAgICByZXR1cm4ge1xuICAgICAgICBraW5kOiAndXBkYXRlJyxcbiAgICAgICAgaW5pdGlhbDogZGF0YVtjb25maWcucGF0aF0sXG4gICAgICAgIHZhbHVlOiB2YWx1ZSA/IGRlY29uc3RydWN0VGltZXN0YW1wKHZhbHVlKSA6IHtcbiAgICAgICAgICBkYXRlVmFsdWU6IG51bGwsXG4gICAgICAgICAgdGltZVZhbHVlOiB7XG4gICAgICAgICAgICBraW5kOiAncGFyc2VkJyxcbiAgICAgICAgICAgIHZhbHVlOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG4gICAgc2VyaWFsaXplOiAoe1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICB0aW1lVmFsdWVcbiAgICAgIH1cbiAgICB9KSA9PiB7XG4gICAgICBpZiAoZGF0ZVZhbHVlICYmIHR5cGVvZiB0aW1lVmFsdWUgPT09ICdvYmplY3QnICYmIHRpbWVWYWx1ZS52YWx1ZSAhPT0gbnVsbCkge1xuICAgICAgICBsZXQgZm9ybWF0dGVkRGF0ZSA9IGNvbnN0cnVjdFRpbWVzdGFtcCh7XG4gICAgICAgICAgZGF0ZVZhbHVlLFxuICAgICAgICAgIHRpbWVWYWx1ZTogdGltZVZhbHVlLnZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIFtjb25maWcucGF0aF06IGZvcm1hdHRlZERhdGVcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgW2NvbmZpZy5wYXRoXTogbnVsbFxuICAgICAgfTtcbiAgICB9LFxuICAgIHZhbGlkYXRlOiB2YWx1ZSA9PiB2YWxpZGF0ZSh2YWx1ZSwgY29uZmlnLmZpZWxkTWV0YSwgY29uZmlnLmxhYmVsKSA9PT0gdW5kZWZpbmVkXG4gIH07XG59O1xuXG5leHBvcnRzLkNhcmRWYWx1ZSA9IENhcmRWYWx1ZTtcbmV4cG9ydHMuQ2VsbCA9IENlbGw7XG5leHBvcnRzLkZpZWxkID0gRmllbGQ7XG5leHBvcnRzLmNvbnRyb2xsZXIgPSBjb250cm9sbGVyO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4va2V5c3RvbmUuY2pzLnByb2QuanNcIik7XG59IGVsc2Uge1xuICBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2tleXN0b25lLmNqcy5kZXYuanNcIik7XG59XG4iLCJpbXBvcnQgeyBnZXRBcHAgfSBmcm9tICdAa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9fX19pbnRlcm5hbC1kby1ub3QtdXNlLXdpbGwtYnJlYWstaW4tcGF0Y2gvYWRtaW4tdWkvcGFnZXMvQXBwJztcblxuaW1wb3J0ICogYXMgdmlldzAgZnJvbSAnLi4vLi4vLi4vbm9kZV9tb2R1bGVzL0BrZXlzdG9uZS1uZXh0L2tleXN0b25lL19fX2ludGVybmFsLWRvLW5vdC11c2Utd2lsbC1icmVhay1pbi1wYXRjaC9hZG1pbi11aS9pZC1maWVsZC12aWV3JztcbmltcG9ydCAqIGFzIHZpZXcxIGZyb20gJy4uLy4uLy4uL25vZGVfbW9kdWxlcy9Aa2V5c3RvbmUtbmV4dC9rZXlzdG9uZS9maWVsZHMvdHlwZXMvdGV4dC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MiBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3NlbGVjdC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3MyBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3RpbWVzdGFtcC92aWV3cyc7XG5pbXBvcnQgKiBhcyB2aWV3NCBmcm9tICcuLi8uLi8uLi9ub2RlX21vZHVsZXMvQGtleXN0b25lLW5leHQva2V5c3RvbmUvZmllbGRzL3R5cGVzL3JlbGF0aW9uc2hpcC92aWV3cyc7XG5cbnZhciBhZG1pbkNvbmZpZyA9IHt9O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRBcHAoe1xuICBsYXp5TWV0YWRhdGFRdWVyeToge1xuICAgIGtpbmQ6ICdEb2N1bWVudCcsXG4gICAgZGVmaW5pdGlvbnM6IFtcbiAgICAgIHtcbiAgICAgICAga2luZDogJ09wZXJhdGlvbkRlZmluaXRpb24nLFxuICAgICAgICBvcGVyYXRpb246ICdxdWVyeScsXG4gICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICB2YWx1ZTogJ2tleXN0b25lJyxcbiAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDIyLCBlbmQ6IDMwIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdhZG1pbk1ldGEnLFxuICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzksIGVuZDogNDggfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvblNldDoge1xuICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdTZWxlY3Rpb25TZXQnLFxuICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGlvbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xpc3RzJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDU5LCBlbmQ6IDY0IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdrZXknLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogNzcsIGVuZDogODAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdpc0hpZGRlbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA5MSwgZW5kOiA5OSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2ZpZWxkcycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMTE2IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3VtZW50czogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25TZXQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnU2VsZWN0aW9uU2V0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3Rpb25zOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdGaWVsZCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnTmFtZScsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdwYXRoJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDEzMSwgZW5kOiAxMzUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTMxLCBlbmQ6IDEzNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ0ZpZWxkJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtpbmQ6ICdOYW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2NyZWF0ZVZpZXcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTQ4LCBlbmQ6IDE1OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmd1bWVudHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uU2V0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ1NlbGVjdGlvblNldCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0aW9uczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBraW5kOiAnRmllbGQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2luZDogJ05hbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnZmllbGRNb2RlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE3NSwgZW5kOiAxODQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJndW1lbnRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTc1LCBlbmQ6IDE4NCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMTU5LCBlbmQ6IDE5OCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDE0OCwgZW5kOiAxOTggfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDExNywgZW5kOiAyMTAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiAxMTAsIGVuZDogMjEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA2NSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jOiB7IHN0YXJ0OiA1OSwgZW5kOiAyMjAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDQ5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBsb2M6IHsgc3RhcnQ6IDM5LCBlbmQ6IDIyOCB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMzEsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGxvYzogeyBzdGFydDogMjIsIGVuZDogMjM0IH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gIH0sXG4gIGZpZWxkVmlld3M6IFt2aWV3MCwgdmlldzEsIHZpZXcyLCB2aWV3MywgdmlldzRdLFxuICBhZG1pbk1ldGFIYXNoOiAnMTV2cDFpNCcsXG4gIGFkbWluQ29uZmlnOiBhZG1pbkNvbmZpZyxcbiAgYXBpUGF0aDogJy9hcGkvZ3JhcGhxbCcsXG59KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gcmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3JvdXRlclwiKTtcbnZhciBfcm91dGVyMSA9IHJlcXVpcmUoXCIuL3JvdXRlclwiKTtcbnZhciBfdXNlSW50ZXJzZWN0aW9uID0gcmVxdWlyZShcIi4vdXNlLWludGVyc2VjdGlvblwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmNvbnN0IHByZWZldGNoZWQgPSB7XG59O1xuZnVuY3Rpb24gcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywgb3B0aW9ucykge1xuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyB8fCAhcm91dGVyKSByZXR1cm47XG4gICAgaWYgKCEoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuO1xuICAgIC8vIFByZWZldGNoIHRoZSBKU09OIHBhZ2UgaWYgYXNrZWQgKG9ubHkgaW4gdGhlIGNsaWVudClcbiAgICAvLyBXZSBuZWVkIHRvIGhhbmRsZSBhIHByZWZldGNoIGVycm9yIGhlcmUgc2luY2Ugd2UgbWF5IGJlXG4gICAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gICAgLy8gd2FudCB0byBmb3JjZSBuYXZpZ2F0aW9uIHNpbmNlIHRoaXMgaXMgb25seSBhIHByZWZldGNoXG4gICAgcm91dGVyLnByZWZldGNoKGhyZWYsIGFzLCBvcHRpb25zKS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgY29uc3QgY3VyTG9jYWxlID0gb3B0aW9ucyAmJiB0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgIT09ICd1bmRlZmluZWQnID8gb3B0aW9ucy5sb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgIHByZWZldGNoZWRbaHJlZiArICclJyArIGFzICsgKGN1ckxvY2FsZSA/ICclJyArIGN1ckxvY2FsZSA6ICcnKV0gPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNNb2RpZmllZEV2ZW50KGV2ZW50KSB7XG4gICAgY29uc3QgeyB0YXJnZXQgIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICAgIHJldHVybiB0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnIHx8IGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDI7XG59XG5mdW5jdGlvbiBsaW5rQ2xpY2tlZChlLCByb3V0ZXIsIGhyZWYsIGFzLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSkge1xuICAgIGNvbnN0IHsgbm9kZU5hbWUgIH0gPSBlLmN1cnJlbnRUYXJnZXQ7XG4gICAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhKDAsIF9yb3V0ZXIpLmlzTG9jYWxVUkwoaHJlZikpKSB7XG4gICAgICAgIC8vIGlnbm9yZSBjbGljayBmb3IgYnJvd3NlcuKAmXMgZGVmYXVsdCBiZWhhdmlvclxuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyAgYXZvaWQgc2Nyb2xsIGZvciB1cmxzIHdpdGggYW5jaG9yIHJlZnNcbiAgICBpZiAoc2Nyb2xsID09IG51bGwgJiYgYXMuaW5kZXhPZignIycpID49IDApIHtcbiAgICAgICAgc2Nyb2xsID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIHJlcGxhY2Ugc3RhdGUgaW5zdGVhZCBvZiBwdXNoIGlmIHByb3AgaXMgcHJlc2VudFxuICAgIHJvdXRlcltyZXBsYWNlID8gJ3JlcGxhY2UnIDogJ3B1c2gnXShocmVmLCBhcywge1xuICAgICAgICBzaGFsbG93LFxuICAgICAgICBsb2NhbGUsXG4gICAgICAgIHNjcm9sbFxuICAgIH0pO1xufVxuZnVuY3Rpb24gTGluayhwcm9wcykge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGZ1bmN0aW9uIGNyZWF0ZVByb3BFcnJvcihhcmdzKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IEVycm9yKGBGYWlsZWQgcHJvcCB0eXBlOiBUaGUgcHJvcCBcXGAke2FyZ3Mua2V5fVxcYCBleHBlY3RzIGEgJHthcmdzLmV4cGVjdGVkfSBpbiBcXGA8TGluaz5cXGAsIGJ1dCBnb3QgXFxgJHthcmdzLmFjdHVhbH1cXGAgaW5zdGVhZC5gICsgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gXCJcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBocmVmOiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVpcmVkUHJvcHMgPSBPYmplY3Qua2V5cyhyZXF1aXJlZFByb3BzR3VhcmQpO1xuICAgICAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldID09IG51bGwgfHwgdHlwZW9mIHByb3BzW2tleV0gIT09ICdzdHJpbmcnICYmIHR5cGVvZiBwcm9wc1trZXldICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCBvciBgb2JqZWN0YCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHByb3BzW2tleV0gPT09IG51bGwgPyAnbnVsbCcgOiB0eXBlb2YgcHJvcHNba2V5XVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby11bnVzZWQtdmFyc1xuICAgICAgICAgICAgICAgIGNvbnN0IF8gPSBrZXk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQgPSB7XG4gICAgICAgICAgICBhczogdHJ1ZSxcbiAgICAgICAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICAgICAgICBzY3JvbGw6IHRydWUsXG4gICAgICAgICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICAgICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgICAgICAgIGxvY2FsZTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBvcHRpb25hbFByb3BzID0gT2JqZWN0LmtleXMob3B0aW9uYWxQcm9wc0d1YXJkKTtcbiAgICAgICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnYXMnKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycgJiYgdmFsVHlwZSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgY3JlYXRlUHJvcEVycm9yKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cGVjdGVkOiAnYHN0cmluZ2Agb3IgYG9iamVjdGAnLFxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAnbG9jYWxlJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICYmIHZhbFR5cGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ3JlcGxhY2UnIHx8IGtleSA9PT0gJ3Njcm9sbCcgfHwga2V5ID09PSAnc2hhbGxvdycgfHwga2V5ID09PSAncGFzc0hyZWYnIHx8IGtleSA9PT0gJ3ByZWZldGNoJykge1xuICAgICAgICAgICAgICAgIGlmIChwcm9wc1trZXldICE9IG51bGwgJiYgdmFsVHlwZSAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBlY3RlZDogJ2Bib29sZWFuYCcsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBUeXBlU2NyaXB0IHRyaWNrIGZvciB0eXBlLWd1YXJkaW5nOlxuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgICAgICAgICBjb25zdCBfID0ga2V5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlYWN0LWhvb2tzL3J1bGVzLW9mLWhvb2tzXG4gICAgICAgIGNvbnN0IGhhc1dhcm5lZCA9IF9yZWFjdC5kZWZhdWx0LnVzZVJlZihmYWxzZSk7XG4gICAgICAgIGlmIChwcm9wcy5wcmVmZXRjaCAmJiAhaGFzV2FybmVkLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIGhhc1dhcm5lZC5jdXJyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybignTmV4dC5qcyBhdXRvLXByZWZldGNoZXMgYXV0b21hdGljYWxseSBiYXNlZCBvbiB2aWV3cG9ydC4gVGhlIHByZWZldGNoIGF0dHJpYnV0ZSBpcyBubyBsb25nZXIgbmVlZGVkLiBNb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy9wcmVmZXRjaC10cnVlLWRlcHJlY2F0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwID0gcHJvcHMucHJlZmV0Y2ggIT09IGZhbHNlO1xuICAgIGNvbnN0IHJvdXRlciA9ICgwLCBfcm91dGVyMSkudXNlUm91dGVyKCk7XG4gICAgY29uc3QgeyBocmVmICwgYXMgIH0gPSBfcmVhY3QuZGVmYXVsdC51c2VNZW1vKCgpPT57XG4gICAgICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gKDAsIF9yb3V0ZXIpLnJlc29sdmVIcmVmKHJvdXRlciwgcHJvcHMuaHJlZiwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBocmVmOiByZXNvbHZlZEhyZWYsXG4gICAgICAgICAgICBhczogcHJvcHMuYXMgPyAoMCwgX3JvdXRlcikucmVzb2x2ZUhyZWYocm91dGVyLCBwcm9wcy5hcykgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZlxuICAgICAgICB9O1xuICAgIH0sIFtcbiAgICAgICAgcm91dGVyLFxuICAgICAgICBwcm9wcy5ocmVmLFxuICAgICAgICBwcm9wcy5hc1xuICAgIF0pO1xuICAgIGxldCB7IGNoaWxkcmVuICwgcmVwbGFjZSAsIHNoYWxsb3cgLCBzY3JvbGwgLCBsb2NhbGUgIH0gPSBwcm9wcztcbiAgICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09PSAnc3RyaW5nJykge1xuICAgICAgICBjaGlsZHJlbiA9IC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcImFcIiwgbnVsbCwgY2hpbGRyZW4pO1xuICAgIH1cbiAgICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgICBsZXQgY2hpbGQ7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZCA9IF9yZWFjdC5kZWZhdWx0LkNoaWxkcmVuLm9ubHkoY2hpbGRyZW4pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTXVsdGlwbGUgY2hpbGRyZW4gd2VyZSBwYXNzZWQgdG8gPExpbms+IHdpdGggXFxgaHJlZlxcYCBvZiBcXGAke3Byb3BzLmhyZWZ9XFxgIGJ1dCBvbmx5IG9uZSBjaGlsZCBpcyBzdXBwb3J0ZWQgaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvbGluay1tdWx0aXBsZS1jaGlsZHJlbmAgKyAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyBcIiBcXG5PcGVuIHlvdXIgYnJvd3NlcidzIGNvbnNvbGUgdG8gdmlldyB0aGUgQ29tcG9uZW50IHN0YWNrIHRyYWNlLlwiIDogJycpKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGNoaWxkID0gX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4ub25seShjaGlsZHJlbik7XG4gICAgfVxuICAgIGNvbnN0IGNoaWxkUmVmID0gY2hpbGQgJiYgdHlwZW9mIGNoaWxkID09PSAnb2JqZWN0JyAmJiBjaGlsZC5yZWY7XG4gICAgY29uc3QgW3NldEludGVyc2VjdGlvblJlZiwgaXNWaXNpYmxlXSA9ICgwLCBfdXNlSW50ZXJzZWN0aW9uKS51c2VJbnRlcnNlY3Rpb24oe1xuICAgICAgICByb290TWFyZ2luOiAnMjAwcHgnXG4gICAgfSk7XG4gICAgY29uc3Qgc2V0UmVmID0gX3JlYWN0LmRlZmF1bHQudXNlQ2FsbGJhY2soKGVsKT0+e1xuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWYoZWwpO1xuICAgICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2hpbGRSZWYgPT09ICdmdW5jdGlvbicpIGNoaWxkUmVmKGVsKTtcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGNoaWxkUmVmLFxuICAgICAgICBzZXRJbnRlcnNlY3Rpb25SZWZcbiAgICBdKTtcbiAgICBfcmVhY3QuZGVmYXVsdC51c2VFZmZlY3QoKCk9PntcbiAgICAgICAgY29uc3Qgc2hvdWxkUHJlZmV0Y2ggPSBpc1Zpc2libGUgJiYgcCAmJiAoMCwgX3JvdXRlcikuaXNMb2NhbFVSTChocmVmKTtcbiAgICAgICAgY29uc3QgY3VyTG9jYWxlID0gdHlwZW9mIGxvY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBsb2NhbGUgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZTtcbiAgICAgICAgY29uc3QgaXNQcmVmZXRjaGVkID0gcHJlZmV0Y2hlZFtocmVmICsgJyUnICsgYXMgKyAoY3VyTG9jYWxlID8gJyUnICsgY3VyTG9jYWxlIDogJycpXTtcbiAgICAgICAgaWYgKHNob3VsZFByZWZldGNoICYmICFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGN1ckxvY2FsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LCBbXG4gICAgICAgIGFzLFxuICAgICAgICBocmVmLFxuICAgICAgICBpc1Zpc2libGUsXG4gICAgICAgIGxvY2FsZSxcbiAgICAgICAgcCxcbiAgICAgICAgcm91dGVyXG4gICAgXSk7XG4gICAgY29uc3QgY2hpbGRQcm9wcyA9IHtcbiAgICAgICAgcmVmOiBzZXRSZWYsXG4gICAgICAgIG9uQ2xpY2s6IChlKT0+e1xuICAgICAgICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY2hpbGQucHJvcHMub25DbGljayhlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgICAgICAgICAgbGlua0NsaWNrZWQoZSwgcm91dGVyLCBocmVmLCBhcywgcmVwbGFjZSwgc2hhbGxvdywgc2Nyb2xsLCBsb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICBjaGlsZFByb3BzLm9uTW91c2VFbnRlciA9IChlKT0+e1xuICAgICAgICBpZiAoISgwLCBfcm91dGVyKS5pc0xvY2FsVVJMKGhyZWYpKSByZXR1cm47XG4gICAgICAgIGlmIChjaGlsZC5wcm9wcyAmJiB0eXBlb2YgY2hpbGQucHJvcHMub25Nb3VzZUVudGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSk7XG4gICAgICAgIH1cbiAgICAgICAgcHJlZmV0Y2gocm91dGVyLCBocmVmLCBhcywge1xuICAgICAgICAgICAgcHJpb3JpdHk6IHRydWVcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgICAvLyBkZWZpbmVkLCB3ZSBzcGVjaWZ5IHRoZSBjdXJyZW50ICdocmVmJywgc28gdGhhdCByZXBldGl0aW9uIGlzIG5vdCBuZWVkZWQgYnkgdGhlIHVzZXJcbiAgICBpZiAocHJvcHMucGFzc0hyZWYgfHwgY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkge1xuICAgICAgICBjb25zdCBjdXJMb2NhbGUgPSB0eXBlb2YgbG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IGxvY2FsZSA6IHJvdXRlciAmJiByb3V0ZXIubG9jYWxlO1xuICAgICAgICAvLyB3ZSBvbmx5IHJlbmRlciBkb21haW4gbG9jYWxlcyBpZiB3ZSBhcmUgY3VycmVudGx5IG9uIGEgZG9tYWluIGxvY2FsZVxuICAgICAgICAvLyBzbyB0aGF0IGxvY2FsZSBsaW5rcyBhcmUgc3RpbGwgdmlzaXRhYmxlIGluIGRldmVsb3BtZW50L3ByZXZpZXcgZW52c1xuICAgICAgICBjb25zdCBsb2NhbGVEb21haW4gPSByb3V0ZXIgJiYgcm91dGVyLmlzTG9jYWxlRG9tYWluICYmICgwLCBfcm91dGVyKS5nZXREb21haW5Mb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5sb2NhbGVzLCByb3V0ZXIgJiYgcm91dGVyLmRvbWFpbkxvY2FsZXMpO1xuICAgICAgICBjaGlsZFByb3BzLmhyZWYgPSBsb2NhbGVEb21haW4gfHwgKDAsIF9yb3V0ZXIpLmFkZEJhc2VQYXRoKCgwLCBfcm91dGVyKS5hZGRMb2NhbGUoYXMsIGN1ckxvY2FsZSwgcm91dGVyICYmIHJvdXRlci5kZWZhdWx0TG9jYWxlKSk7XG4gICAgfVxuICAgIHJldHVybigvKiNfX1BVUkVfXyovIF9yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjaGlsZCwgY2hpbGRQcm9wcykpO1xufVxudmFyIF9kZWZhdWx0ID0gTGluaztcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1saW5rLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoO1xuZXhwb3J0cy5ub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaCA9IHZvaWQgMDtcbmZ1bmN0aW9uIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGgpIHtcbiAgICByZXR1cm4gcGF0aC5lbmRzV2l0aCgnLycpICYmIHBhdGggIT09ICcvJyA/IHBhdGguc2xpY2UoMCwgLTEpIDogcGF0aDtcbn1cbmNvbnN0IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gcHJvY2Vzcy5lbnYuX19ORVhUX1RSQUlMSU5HX1NMQVNIID8gKHBhdGgpPT57XG4gICAgaWYgKC9cXC5bXi9dK1xcLz8kLy50ZXN0KHBhdGgpKSB7XG4gICAgICAgIHJldHVybiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJztcbiAgICB9XG59IDogcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2g7XG5leHBvcnRzLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoID0gbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2g7XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW5vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucmVxdWVzdElkbGVDYWxsYmFjayA9IGV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gdm9pZCAwO1xuY29uc3QgcmVxdWVzdElkbGVDYWxsYmFjayA9IHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJyAmJiBzZWxmLnJlcXVlc3RJZGxlQ2FsbGJhY2sgJiYgc2VsZi5yZXF1ZXN0SWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihjYikge1xuICAgIGxldCBzdGFydCA9IERhdGUubm93KCk7XG4gICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgIGNiKHtcbiAgICAgICAgICAgIGRpZFRpbWVvdXQ6IGZhbHNlLFxuICAgICAgICAgICAgdGltZVJlbWFpbmluZzogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgubWF4KDAsIDUwIC0gKERhdGUubm93KCkgLSBzdGFydCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCAxKTtcbn07XG5leHBvcnRzLnJlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrO1xuY29uc3QgY2FuY2VsSWRsZUNhbGxiYWNrID0gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrICYmIHNlbGYuY2FuY2VsSWRsZUNhbGxiYWNrLmJpbmQod2luZG93KSB8fCBmdW5jdGlvbihpZCkge1xuICAgIHJldHVybiBjbGVhclRpbWVvdXQoaWQpO1xufTtcbmV4cG9ydHMuY2FuY2VsSWRsZUNhbGxiYWNrID0gY2FuY2VsSWRsZUNhbGxiYWNrO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXF1ZXN0LWlkbGUtY2FsbGJhY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLm1hcmtBc3NldEVycm9yID0gbWFya0Fzc2V0RXJyb3I7XG5leHBvcnRzLmlzQXNzZXRFcnJvciA9IGlzQXNzZXRFcnJvcjtcbmV4cG9ydHMuZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCA9IGdldENsaWVudEJ1aWxkTWFuaWZlc3Q7XG5leHBvcnRzLmNyZWF0ZVJvdXRlTG9hZGVyID0gY3JlYXRlUm91dGVMb2FkZXI7XG52YXIgX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4uL3NoYXJlZC9saWIvcm91dGVyL3V0aWxzL2dldC1hc3NldC1wYXRoLWZyb20tcm91dGVcIikpO1xudmFyIF9yZXF1ZXN0SWRsZUNhbGxiYWNrID0gcmVxdWlyZShcIi4vcmVxdWVzdC1pZGxlLWNhbGxiYWNrXCIpO1xuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuLy8gMy44cyB3YXMgYXJiaXRyYXJpbHkgY2hvc2VuIGFzIGl0J3Mgd2hhdCBodHRwczovL3dlYi5kZXYvaW50ZXJhY3RpdmVcbi8vIGNvbnNpZGVycyBhcyBcIkdvb2RcIiB0aW1lLXRvLWludGVyYWN0aXZlLiBXZSBtdXN0IGFzc3VtZSBzb21ldGhpbmcgd2VudFxuLy8gd3JvbmcgYmV5b25kIHRoaXMgcG9pbnQsIGFuZCB0aGVuIGZhbGwtYmFjayB0byBhIGZ1bGwgcGFnZSB0cmFuc2l0aW9uIHRvXG4vLyBzaG93IHRoZSB1c2VyIHNvbWV0aGluZyBvZiB2YWx1ZS5cbmNvbnN0IE1TX01BWF9JRExFX0RFTEFZID0gMzgwMDtcbmZ1bmN0aW9uIHdpdGhGdXR1cmUoa2V5LCBtYXAsIGdlbmVyYXRvcikge1xuICAgIGxldCBlbnRyeSA9IG1hcC5nZXQoa2V5KTtcbiAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgaWYgKCdmdXR1cmUnIGluIGVudHJ5KSB7XG4gICAgICAgICAgICByZXR1cm4gZW50cnkuZnV0dXJlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoZW50cnkpO1xuICAgIH1cbiAgICBsZXQgcmVzb2x2ZXI7XG4gICAgY29uc3QgcHJvbSA9IG5ldyBQcm9taXNlKChyZXNvbHZlKT0+e1xuICAgICAgICByZXNvbHZlciA9IHJlc29sdmU7XG4gICAgfSk7XG4gICAgbWFwLnNldChrZXksIGVudHJ5ID0ge1xuICAgICAgICByZXNvbHZlOiByZXNvbHZlcixcbiAgICAgICAgZnV0dXJlOiBwcm9tXG4gICAgfSk7XG4gICAgcmV0dXJuIGdlbmVyYXRvciA/IGdlbmVyYXRvcigpLnRoZW4oKHZhbHVlKT0+KHJlc29sdmVyKHZhbHVlKSwgdmFsdWUpXG4gICAgKSA6IHByb207XG59XG5mdW5jdGlvbiBoYXNQcmVmZXRjaChsaW5rKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgcmV0dXJuKC8vIGRldGVjdCBJRTExIHNpbmNlIGl0IHN1cHBvcnRzIHByZWZldGNoIGJ1dCBpc24ndCBkZXRlY3RlZFxuICAgICAgICAvLyB3aXRoIHJlbExpc3Quc3VwcG9ydFxuICAgICAgICAoISF3aW5kb3cuTVNJbnB1dE1ldGhvZENvbnRleHQgJiYgISFkb2N1bWVudC5kb2N1bWVudE1vZGUpIHx8IGxpbmsucmVsTGlzdC5zdXBwb3J0cygncHJlZmV0Y2gnKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgY2FuUHJlZmV0Y2ggPSBoYXNQcmVmZXRjaCgpO1xuZnVuY3Rpb24gcHJlZmV0Y2hWaWFEb20oaHJlZiwgYXMsIGxpbmspIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlcywgcmVqKT0+e1xuICAgICAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgbGlua1tyZWw9XCJwcmVmZXRjaFwiXVtocmVmXj1cIiR7aHJlZn1cIl1gKSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlcygpO1xuICAgICAgICB9XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIC8vIFRoZSBvcmRlciBvZiBwcm9wZXJ0eSBhc3NpZ25tZW50IGhlcmUgaXMgaW50ZW50aW9uYWw6XG4gICAgICAgIGlmIChhcykgbGluay5hcyA9IGFzO1xuICAgICAgICBsaW5rLnJlbCA9IGBwcmVmZXRjaGA7XG4gICAgICAgIGxpbmsuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICBsaW5rLm9ubG9hZCA9IHJlcztcbiAgICAgICAgbGluay5vbmVycm9yID0gcmVqO1xuICAgICAgICAvLyBgaHJlZmAgc2hvdWxkIGFsd2F5cyBiZSBsYXN0OlxuICAgICAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmspO1xuICAgIH0pO1xufVxuY29uc3QgQVNTRVRfTE9BRF9FUlJPUiA9IFN5bWJvbCgnQVNTRVRfTE9BRF9FUlJPUicpO1xuZnVuY3Rpb24gbWFya0Fzc2V0RXJyb3IoZXJyKSB7XG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIEFTU0VUX0xPQURfRVJST1IsIHtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGlzQXNzZXRFcnJvcihlcnIpIHtcbiAgICByZXR1cm4gZXJyICYmIEFTU0VUX0xPQURfRVJST1IgaW4gZXJyO1xufVxuZnVuY3Rpb24gYXBwZW5kU2NyaXB0KHNyYywgc2NyaXB0KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICAvLyBUaGUgb3JkZXIgb2YgcHJvcGVydHkgYXNzaWdubWVudCBoZXJlIGlzIGludGVudGlvbmFsLlxuICAgICAgICAvLyAxLiBTZXR1cCBzdWNjZXNzL2ZhaWx1cmUgaG9va3MgaW4gY2FzZSB0aGUgYnJvd3NlciBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vICAgIGV4ZWN1dGVzIHdoZW4gYHNyY2AgaXMgc2V0LlxuICAgICAgICBzY3JpcHQub25sb2FkID0gcmVzb2x2ZTtcbiAgICAgICAgc2NyaXB0Lm9uZXJyb3IgPSAoKT0+cmVqZWN0KG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc2NyaXB0OiAke3NyY31gKSkpXG4gICAgICAgIDtcbiAgICAgICAgLy8gMi4gQ29uZmlndXJlIHRoZSBjcm9zcy1vcmlnaW4gYXR0cmlidXRlIGJlZm9yZSBzZXR0aW5nIGBzcmNgIGluIGNhc2UgdGhlXG4gICAgICAgIC8vICAgIGJyb3dzZXIgYmVnaW5zIHRvIGZldGNoLlxuICAgICAgICBzY3JpcHQuY3Jvc3NPcmlnaW4gPSBwcm9jZXNzLmVudi5fX05FWFRfQ1JPU1NfT1JJR0lOO1xuICAgICAgICAvLyAzLiBGaW5hbGx5LCBzZXQgdGhlIHNvdXJjZSBhbmQgaW5qZWN0IGludG8gdGhlIERPTSBpbiBjYXNlIHRoZSBjaGlsZFxuICAgICAgICAvLyAgICBtdXN0IGJlIGFwcGVuZGVkIGZvciBmZXRjaGluZyB0byBzdGFydC5cbiAgICAgICAgc2NyaXB0LnNyYyA9IHNyYztcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuLy8gV2Ugd2FpdCBmb3IgcGFnZXMgdG8gYmUgYnVpbHQgaW4gZGV2IGJlZm9yZSB3ZSBzdGFydCB0aGUgcm91dGUgdHJhbnNpdGlvblxuLy8gdGltZW91dCB0byBwcmV2ZW50IGFuIHVuLW5lY2Vzc2FyeSBoYXJkIG5hdmlnYXRpb24gaW4gZGV2ZWxvcG1lbnQuXG5sZXQgZGV2QnVpbGRQcm9taXNlO1xuLy8gUmVzb2x2ZSBhIHByb21pc2UgdGhhdCB0aW1lcyBvdXQgYWZ0ZXIgZ2l2ZW4gYW1vdW50IG9mIG1pbGxpc2Vjb25kcy5cbmZ1bmN0aW9uIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQocCwgbXMsIGVycikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIHAudGhlbigocik9PntcbiAgICAgICAgICAgIC8vIFJlc29sdmVkLCBjYW5jZWwgdGhlIHRpbWVvdXRcbiAgICAgICAgICAgIGNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICByZXNvbHZlKHIpO1xuICAgICAgICB9KS5jYXRjaChyZWplY3QpO1xuICAgICAgICAvLyBXZSB3cmFwIHRoZXNlIGNoZWNrcyBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgZGVhZC1jb2RlIGVsaW1pbmF0aW9uIGluXG4gICAgICAgIC8vIHByb2R1Y3Rpb24gYnVuZGxlcy5cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoZGV2QnVpbGRQcm9taXNlIHx8IFByb21pc2UucmVzb2x2ZSgpKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgKDAsIF9yZXF1ZXN0SWRsZUNhbGxiYWNrKS5yZXF1ZXN0SWRsZUNhbGxiYWNrKCgpPT5zZXRUaW1lb3V0KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LCBtcylcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAnZGV2ZWxvcG1lbnQnKSB7XG4gICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgbXMpXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkge1xuICAgIGlmIChzZWxmLl9fQlVJTERfTUFOSUZFU1QpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShzZWxmLl9fQlVJTERfTUFOSUZFU1QpO1xuICAgIH1cbiAgICBjb25zdCBvbkJ1aWxkTWFuaWZlc3QgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgLy8gTWFuZGF0b3J5IGJlY2F1c2UgdGhpcyBpcyBub3QgY29uY3VycmVudCBzYWZlOlxuICAgICAgICBjb25zdCBjYiA9IHNlbGYuX19CVUlMRF9NQU5JRkVTVF9DQjtcbiAgICAgICAgc2VsZi5fX0JVSUxEX01BTklGRVNUX0NCID0gKCk9PntcbiAgICAgICAgICAgIHJlc29sdmUoc2VsZi5fX0JVSUxEX01BTklGRVNUKTtcbiAgICAgICAgICAgIGNiICYmIGNiKCk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIHJlc29sdmVQcm9taXNlV2l0aFRpbWVvdXQob25CdWlsZE1hbmlmZXN0LCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKCdGYWlsZWQgdG8gbG9hZCBjbGllbnQgYnVpbGQgbWFuaWZlc3QnKSkpO1xufVxuZnVuY3Rpb24gZ2V0RmlsZXNGb3JSb3V0ZShhc3NldFByZWZpeCwgcm91dGUpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICBzY3JpcHRzOiBbXG4gICAgICAgICAgICAgICAgYXNzZXRQcmVmaXggKyAnL19uZXh0L3N0YXRpYy9jaHVua3MvcGFnZXMnICsgZW5jb2RlVVJJKCgwLCBfZ2V0QXNzZXRQYXRoRnJvbVJvdXRlKS5kZWZhdWx0KHJvdXRlLCAnLmpzJykpLCBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAvLyBTdHlsZXMgYXJlIGhhbmRsZWQgYnkgYHN0eWxlLWxvYWRlcmAgaW4gZGV2ZWxvcG1lbnQ6XG4gICAgICAgICAgICBjc3M6IFtdXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCgpLnRoZW4oKG1hbmlmZXN0KT0+e1xuICAgICAgICBpZiAoIShyb3V0ZSBpbiBtYW5pZmVzdCkpIHtcbiAgICAgICAgICAgIHRocm93IG1hcmtBc3NldEVycm9yKG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvb2t1cCByb3V0ZTogJHtyb3V0ZX1gKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWxsRmlsZXMgPSBtYW5pZmVzdFtyb3V0ZV0ubWFwKChlbnRyeSk9PmFzc2V0UHJlZml4ICsgJy9fbmV4dC8nICsgZW5jb2RlVVJJKGVudHJ5KVxuICAgICAgICApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2NyaXB0czogYWxsRmlsZXMuZmlsdGVyKCh2KT0+di5lbmRzV2l0aCgnLmpzJylcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBjc3M6IGFsbEZpbGVzLmZpbHRlcigodik9PnYuZW5kc1dpdGgoJy5jc3MnKVxuICAgICAgICAgICAgKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gY3JlYXRlUm91dGVMb2FkZXIoYXNzZXRQcmVmaXgpIHtcbiAgICBjb25zdCBlbnRyeXBvaW50cyA9IG5ldyBNYXAoKTtcbiAgICBjb25zdCBsb2FkZWRTY3JpcHRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHN0eWxlU2hlZXRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IHJvdXRlcyA9IG5ldyBNYXAoKTtcbiAgICBmdW5jdGlvbiBtYXliZUV4ZWN1dGVTY3JpcHQoc3JjKSB7XG4gICAgICAgIGxldCBwcm9tID0gbG9hZGVkU2NyaXB0cy5nZXQoc3JjKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIC8vIFNraXAgZXhlY3V0aW5nIHNjcmlwdCBpZiBpdCdzIGFscmVhZHkgaW4gdGhlIERPTTpcbiAgICAgICAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYHNjcmlwdFtzcmNePVwiJHtzcmN9XCJdYCkpIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgICBsb2FkZWRTY3JpcHRzLnNldChzcmMsIHByb20gPSBhcHBlbmRTY3JpcHQoc3JjKSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICBmdW5jdGlvbiBmZXRjaFN0eWxlU2hlZXQoaHJlZikge1xuICAgICAgICBsZXQgcHJvbSA9IHN0eWxlU2hlZXRzLmdldChocmVmKTtcbiAgICAgICAgaWYgKHByb20pIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9tO1xuICAgICAgICB9XG4gICAgICAgIHN0eWxlU2hlZXRzLnNldChocmVmLCBwcm9tID0gZmV0Y2goaHJlZikudGhlbigocmVzKT0+e1xuICAgICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0eWxlc2hlZXQ6ICR7aHJlZn1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXMudGV4dCgpLnRoZW4oKHRleHQpPT4oe1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBocmVmLFxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB0ZXh0XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICB0aHJvdyBtYXJrQXNzZXRFcnJvcihlcnIpO1xuICAgICAgICB9KSk7XG4gICAgICAgIHJldHVybiBwcm9tO1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICB3aGVuRW50cnlwb2ludCAocm91dGUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aXRoRnV0dXJlKHJvdXRlLCBlbnRyeXBvaW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIG9uRW50cnlwb2ludCAocm91dGUsIGV4ZWN1dGUpIHtcbiAgICAgICAgICAgIFByb21pc2UucmVzb2x2ZShleGVjdXRlKS50aGVuKChmbik9PmZuKClcbiAgICAgICAgICAgICkudGhlbigoZXhwb3J0cyk9Pih7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZXhwb3J0cyAmJiBleHBvcnRzLmRlZmF1bHQgfHwgZXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3J0czogZXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAsIChlcnIpPT4oe1xuICAgICAgICAgICAgICAgICAgICBlcnJvcjogZXJyXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkudGhlbigoaW5wdXQpPT57XG4gICAgICAgICAgICAgICAgY29uc3Qgb2xkID0gZW50cnlwb2ludHMuZ2V0KHJvdXRlKTtcbiAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5zZXQocm91dGUsIGlucHV0KTtcbiAgICAgICAgICAgICAgICBpZiAob2xkICYmICdyZXNvbHZlJyBpbiBvbGQpIG9sZC5yZXNvbHZlKGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsb2FkUm91dGUgKHJvdXRlLCBwcmVmZXRjaCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpdGhGdXR1cmUocm91dGUsIHJvdXRlcywgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByb3V0ZUZpbGVzUHJvbWlzZSA9IGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKCh7IHNjcmlwdHMgLCBjc3MgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50cy5oYXMocm91dGUpID8gW10gOiBQcm9taXNlLmFsbChzY3JpcHRzLm1hcChtYXliZUV4ZWN1dGVTY3JpcHQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGNzcy5tYXAoZmV0Y2hTdHlsZVNoZWV0KSksIFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLndoZW5FbnRyeXBvaW50KHJvdXRlKS50aGVuKChlbnRyeXBvaW50KT0+KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeXBvaW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlczogcmVzWzFdXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgICAgICAgICAgICAgICAgICBkZXZCdWlsZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyb3V0ZUZpbGVzUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZUZpbGVzUHJvbWlzZS5maW5hbGx5KCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0KHJvdXRlRmlsZXNQcm9taXNlLCBNU19NQVhfSURMRV9ERUxBWSwgbWFya0Fzc2V0RXJyb3IobmV3IEVycm9yKGBSb3V0ZSBkaWQgbm90IGNvbXBsZXRlIGxvYWRpbmc6ICR7cm91dGV9YCkpKS50aGVuKCh7IGVudHJ5cG9pbnQgLCBzdHlsZXMgIH0pPT57XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IE9iamVjdC5hc3NpZ24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVzOiBzdHlsZXNcbiAgICAgICAgICAgICAgICAgICAgfSwgZW50cnlwb2ludCk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnZXJyb3InIGluIGVudHJ5cG9pbnQgPyBlbnRyeXBvaW50IDogcmVzO1xuICAgICAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcmVmZXRjaCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2UgZG9uJ3Qgd2FudCB0byBjYWNoZSBlcnJvcnMgZHVyaW5nIHByZWZldGNoXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXRjaCAocm91dGUpIHtcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9Hb29nbGVDaHJvbWVMYWJzL3F1aWNrbGluay9ibG9iLzQ1M2E2NjFmYTFmYTk0MGUyZDJlMDQ0NDUyMzk4ZTM4YzY3YTk4ZmIvc3JjL2luZGV4Lm1qcyNMMTE1LUwxMThcbiAgICAgICAgICAgIC8vIExpY2Vuc2U6IEFwYWNoZSAyLjBcbiAgICAgICAgICAgIGxldCBjbjtcbiAgICAgICAgICAgIGlmIChjbiA9IG5hdmlnYXRvci5jb25uZWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgLy8gRG9uJ3QgcHJlZmV0Y2ggaWYgdXNpbmcgMkcgb3IgaWYgU2F2ZS1EYXRhIGlzIGVuYWJsZWQuXG4gICAgICAgICAgICAgICAgaWYgKGNuLnNhdmVEYXRhIHx8IC8yZy8udGVzdChjbi5lZmZlY3RpdmVUeXBlKSkgcmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGdldEZpbGVzRm9yUm91dGUoYXNzZXRQcmVmaXgsIHJvdXRlKS50aGVuKChvdXRwdXQpPT5Qcm9taXNlLmFsbChjYW5QcmVmZXRjaCA/IG91dHB1dC5zY3JpcHRzLm1hcCgoc2NyaXB0KT0+cHJlZmV0Y2hWaWFEb20oc2NyaXB0LCAnc2NyaXB0JylcbiAgICAgICAgICAgICAgICApIDogW10pXG4gICAgICAgICAgICApLnRoZW4oKCk9PntcbiAgICAgICAgICAgICAgICAoMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLnJlcXVlc3RJZGxlQ2FsbGJhY2soKCk9PnRoaXMubG9hZFJvdXRlKHJvdXRlLCB0cnVlKS5jYXRjaCgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KS5jYXRjaCgvLyBzd2FsbG93IHByZWZldGNoIGVycm9yc1xuICAgICAgICAgICAgKCk9PntcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGUtbG9hZGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfcm91dGVyLmRlZmF1bHQ7XG4gICAgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJ3aXRoUm91dGVyXCIsIHtcbiAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBfd2l0aFJvdXRlci5kZWZhdWx0O1xuICAgIH1cbn0pO1xuZXhwb3J0cy51c2VSb3V0ZXIgPSB1c2VSb3V0ZXI7XG5leHBvcnRzLmNyZWF0ZVJvdXRlciA9IGNyZWF0ZVJvdXRlcjtcbmV4cG9ydHMubWFrZVB1YmxpY1JvdXRlckluc3RhbmNlID0gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlO1xuZXhwb3J0cy5kZWZhdWx0ID0gdm9pZCAwO1xudmFyIF9yZWFjdCA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcInJlYWN0XCIpKTtcbnZhciBfcm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi4vc2hhcmVkL2xpYi9yb3V0ZXIvcm91dGVyXCIpKTtcbnZhciBfcm91dGVyQ29udGV4dCA9IHJlcXVpcmUoXCIuLi9zaGFyZWQvbGliL3JvdXRlci1jb250ZXh0XCIpO1xudmFyIF93aXRoUm91dGVyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwiLi93aXRoLXJvdXRlclwiKSk7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5jb25zdCBzaW5nbGV0b25Sb3V0ZXIgPSB7XG4gICAgcm91dGVyOiBudWxsLFxuICAgIHJlYWR5Q2FsbGJhY2tzOiBbXSxcbiAgICByZWFkeSAoY2IpIHtcbiAgICAgICAgaWYgKHRoaXMucm91dGVyKSByZXR1cm4gY2IoKTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICB0aGlzLnJlYWR5Q2FsbGJhY2tzLnB1c2goY2IpO1xuICAgICAgICB9XG4gICAgfVxufTtcbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAgICdwYXRobmFtZScsXG4gICAgJ3JvdXRlJyxcbiAgICAncXVlcnknLFxuICAgICdhc1BhdGgnLFxuICAgICdjb21wb25lbnRzJyxcbiAgICAnaXNGYWxsYmFjaycsXG4gICAgJ2Jhc2VQYXRoJyxcbiAgICAnbG9jYWxlJyxcbiAgICAnbG9jYWxlcycsXG4gICAgJ2RlZmF1bHRMb2NhbGUnLFxuICAgICdpc1JlYWR5JyxcbiAgICAnaXNQcmV2aWV3JyxcbiAgICAnaXNMb2NhbGVEb21haW4nLFxuICAgICdkb21haW5Mb2NhbGVzJywgXG5dO1xuY29uc3Qgcm91dGVyRXZlbnRzID0gW1xuICAgICdyb3V0ZUNoYW5nZVN0YXJ0JyxcbiAgICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICAgJ3JvdXRlQ2hhbmdlQ29tcGxldGUnLFxuICAgICdyb3V0ZUNoYW5nZUVycm9yJyxcbiAgICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgICAnaGFzaENoYW5nZUNvbXBsZXRlJywgXG5dO1xuY29uc3QgY29yZU1ldGhvZEZpZWxkcyA9IFtcbiAgICAncHVzaCcsXG4gICAgJ3JlcGxhY2UnLFxuICAgICdyZWxvYWQnLFxuICAgICdiYWNrJyxcbiAgICAncHJlZmV0Y2gnLFxuICAgICdiZWZvcmVQb3BTdGF0ZScsIFxuXTtcbi8vIEV2ZW50cyBpcyBhIHN0YXRpYyBwcm9wZXJ0eSBvbiB0aGUgcm91dGVyLCB0aGUgcm91dGVyIGRvZXNuJ3QgaGF2ZSB0byBiZSBpbml0aWFsaXplZCB0byB1c2UgaXRcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsICdldmVudHMnLCB7XG4gICAgZ2V0ICgpIHtcbiAgICAgICAgcmV0dXJuIF9yb3V0ZXIuZGVmYXVsdC5ldmVudHM7XG4gICAgfVxufSk7XG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCk9PntcbiAgICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlIHdlIG5lZWQgdG8gcmV0dXJuXG4gICAgLy8gdGhlIHByb3BlcnR5IGFzc2lnbmVkIHRvIHRoZSBhY3R1YWwgcm91dGVyXG4gICAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gICAgLy8gcHJvcGVyIHdheSB0byBhY2Nlc3MgaXRcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2luZ2xldG9uUm91dGVyLCBmaWVsZCwge1xuICAgICAgICBnZXQgKCkge1xuICAgICAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG5jb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgIHNpbmdsZXRvblJvdXRlcltmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCk7XG4gICAgICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpO1xuICAgIH07XG59KTtcbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCk9PntcbiAgICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCk9PntcbiAgICAgICAgX3JvdXRlci5kZWZhdWx0LmV2ZW50cy5vbihldmVudCwgKC4uLmFyZ3MpPT57XG4gICAgICAgICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZygxKX1gO1xuICAgICAgICAgICAgY29uc3QgX3NpbmdsZXRvblJvdXRlciA9IHNpbmdsZXRvblJvdXRlcjtcbiAgICAgICAgICAgIGlmIChfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgX3NpbmdsZXRvblJvdXRlcltldmVudEZpZWxkXSguLi5hcmdzKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igd2hlbiBydW5uaW5nIHRoZSBSb3V0ZXIgZXZlbnQ6ICR7ZXZlbnRGaWVsZH1gKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgJHtlcnIubWVzc2FnZX1cXG4ke2Vyci5zdGFja31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pO1xufSk7XG5mdW5jdGlvbiBnZXRSb3V0ZXIoKSB7XG4gICAgaWYgKCFzaW5nbGV0b25Sb3V0ZXIucm91dGVyKSB7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnTm8gcm91dGVyIGluc3RhbmNlIGZvdW5kLlxcbicgKyAnWW91IHNob3VsZCBvbmx5IHVzZSBcIm5leHQvcm91dGVyXCIgb24gdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbic7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICB9XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG52YXIgX2RlZmF1bHQgPSBzaW5nbGV0b25Sb3V0ZXI7XG5leHBvcnRzLmRlZmF1bHQgPSBfZGVmYXVsdDtcbmZ1bmN0aW9uIHVzZVJvdXRlcigpIHtcbiAgICByZXR1cm4gX3JlYWN0LmRlZmF1bHQudXNlQ29udGV4dChfcm91dGVyQ29udGV4dC5Sb3V0ZXJDb250ZXh0KTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVJvdXRlciguLi5hcmdzKSB7XG4gICAgc2luZ2xldG9uUm91dGVyLnJvdXRlciA9IG5ldyBfcm91dGVyLmRlZmF1bHQoLi4uYXJncyk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzLmZvckVhY2goKGNiKT0+Y2IoKVxuICAgICk7XG4gICAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW107XG4gICAgcmV0dXJuIHNpbmdsZXRvblJvdXRlci5yb3V0ZXI7XG59XG5mdW5jdGlvbiBtYWtlUHVibGljUm91dGVySW5zdGFuY2Uocm91dGVyKSB7XG4gICAgY29uc3QgX3JvdXRlcjEgPSByb3V0ZXI7XG4gICAgY29uc3QgaW5zdGFuY2UgPSB7XG4gICAgfTtcbiAgICBmb3IgKGNvbnN0IHByb3BlcnR5IG9mIHVybFByb3BlcnR5RmllbGRzKXtcbiAgICAgICAgaWYgKHR5cGVvZiBfcm91dGVyMVtwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKEFycmF5LmlzQXJyYXkoX3JvdXRlcjFbcHJvcGVydHldKSA/IFtdIDoge1xuICAgICAgICAgICAgfSwgX3JvdXRlcjFbcHJvcGVydHldKSAvLyBtYWtlcyBzdXJlIHF1ZXJ5IGlzIG5vdCBzdGF0ZWZ1bFxuICAgICAgICAgICAgO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2VbcHJvcGVydHldID0gX3JvdXRlcjFbcHJvcGVydHldO1xuICAgIH1cbiAgICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gICAgaW5zdGFuY2UuZXZlbnRzID0gX3JvdXRlci5kZWZhdWx0LmV2ZW50cztcbiAgICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKT0+e1xuICAgICAgICBpbnN0YW5jZVtmaWVsZF0gPSAoLi4uYXJncyk9PntcbiAgICAgICAgICAgIHJldHVybiBfcm91dGVyMVtmaWVsZF0oLi4uYXJncyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLnVzZUludGVyc2VjdGlvbiA9IHVzZUludGVyc2VjdGlvbjtcbnZhciBfcmVhY3QgPSByZXF1aXJlKFwicmVhY3RcIik7XG52YXIgX3JlcXVlc3RJZGxlQ2FsbGJhY2sgPSByZXF1aXJlKFwiLi9yZXF1ZXN0LWlkbGUtY2FsbGJhY2tcIik7XG5jb25zdCBoYXNJbnRlcnNlY3Rpb25PYnNlcnZlciA9IHR5cGVvZiBJbnRlcnNlY3Rpb25PYnNlcnZlciAhPT0gJ3VuZGVmaW5lZCc7XG5mdW5jdGlvbiB1c2VJbnRlcnNlY3Rpb24oeyByb290TWFyZ2luICwgZGlzYWJsZWQgIH0pIHtcbiAgICBjb25zdCBpc0Rpc2FibGVkID0gZGlzYWJsZWQgfHwgIWhhc0ludGVyc2VjdGlvbk9ic2VydmVyO1xuICAgIGNvbnN0IHVub2JzZXJ2ZSA9ICgwLCBfcmVhY3QpLnVzZVJlZigpO1xuICAgIGNvbnN0IFt2aXNpYmxlLCBzZXRWaXNpYmxlXSA9ICgwLCBfcmVhY3QpLnVzZVN0YXRlKGZhbHNlKTtcbiAgICBjb25zdCBzZXRSZWYgPSAoMCwgX3JlYWN0KS51c2VDYWxsYmFjaygoZWwpPT57XG4gICAgICAgIGlmICh1bm9ic2VydmUuY3VycmVudCkge1xuICAgICAgICAgICAgdW5vYnNlcnZlLmN1cnJlbnQoKTtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpc0Rpc2FibGVkIHx8IHZpc2libGUpIHJldHVybjtcbiAgICAgICAgaWYgKGVsICYmIGVsLnRhZ05hbWUpIHtcbiAgICAgICAgICAgIHVub2JzZXJ2ZS5jdXJyZW50ID0gb2JzZXJ2ZShlbCwgKGlzVmlzaWJsZSk9PmlzVmlzaWJsZSAmJiBzZXRWaXNpYmxlKGlzVmlzaWJsZSlcbiAgICAgICAgICAgICwge1xuICAgICAgICAgICAgICAgIHJvb3RNYXJnaW5cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0Rpc2FibGVkLFxuICAgICAgICByb290TWFyZ2luLFxuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgKDAsIF9yZWFjdCkudXNlRWZmZWN0KCgpPT57XG4gICAgICAgIGlmICghaGFzSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgICAgIGlmICghdmlzaWJsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkbGVDYWxsYmFjayA9ICgwLCBfcmVxdWVzdElkbGVDYWxsYmFjaykucmVxdWVzdElkbGVDYWxsYmFjaygoKT0+c2V0VmlzaWJsZSh0cnVlKVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgcmV0dXJuICgpPT4oMCwgX3JlcXVlc3RJZGxlQ2FsbGJhY2spLmNhbmNlbElkbGVDYWxsYmFjayhpZGxlQ2FsbGJhY2spXG4gICAgICAgICAgICAgICAgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICB2aXNpYmxlXG4gICAgXSk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgc2V0UmVmLFxuICAgICAgICB2aXNpYmxlXG4gICAgXTtcbn1cbmZ1bmN0aW9uIG9ic2VydmUoZWxlbWVudCwgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGlkICwgb2JzZXJ2ZXIgLCBlbGVtZW50cyAgfSA9IGNyZWF0ZU9ic2VydmVyKG9wdGlvbnMpO1xuICAgIGVsZW1lbnRzLnNldChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgb2JzZXJ2ZXIub2JzZXJ2ZShlbGVtZW50KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gdW5vYnNlcnZlKCkge1xuICAgICAgICBlbGVtZW50cy5kZWxldGUoZWxlbWVudCk7XG4gICAgICAgIG9ic2VydmVyLnVub2JzZXJ2ZShlbGVtZW50KTtcbiAgICAgICAgLy8gRGVzdHJveSBvYnNlcnZlciB3aGVuIHRoZXJlJ3Mgbm90aGluZyBsZWZ0IHRvIHdhdGNoOlxuICAgICAgICBpZiAoZWxlbWVudHMuc2l6ZSA9PT0gMCkge1xuICAgICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgb2JzZXJ2ZXJzLmRlbGV0ZShpZCk7XG4gICAgICAgIH1cbiAgICB9O1xufVxuY29uc3Qgb2JzZXJ2ZXJzID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gY3JlYXRlT2JzZXJ2ZXIob3B0aW9ucykge1xuICAgIGNvbnN0IGlkID0gb3B0aW9ucy5yb290TWFyZ2luIHx8ICcnO1xuICAgIGxldCBpbnN0YW5jZSA9IG9ic2VydmVycy5nZXQoaWQpO1xuICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGNvbnN0IGVsZW1lbnRzID0gbmV3IE1hcCgpO1xuICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKT0+e1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KT0+e1xuICAgICAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBlbGVtZW50cy5nZXQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlzVmlzaWJsZSA9IGVudHJ5LmlzSW50ZXJzZWN0aW5nIHx8IGVudHJ5LmludGVyc2VjdGlvblJhdGlvID4gMDtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjayAmJiBpc1Zpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhpc1Zpc2libGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LCBvcHRpb25zKTtcbiAgICBvYnNlcnZlcnMuc2V0KGlkLCBpbnN0YW5jZSA9IHtcbiAgICAgICAgaWQsXG4gICAgICAgIG9ic2VydmVyLFxuICAgICAgICBlbGVtZW50c1xuICAgIH0pO1xuICAgIHJldHVybiBpbnN0YW5jZTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dXNlLWludGVyc2VjdGlvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHdpdGhSb3V0ZXI7XG52YXIgX3JlYWN0ID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO1xudmFyIF9yb3V0ZXIgPSByZXF1aXJlKFwiLi9yb3V0ZXJcIik7XG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgICAgIGRlZmF1bHQ6IG9ialxuICAgIH07XG59XG5mdW5jdGlvbiB3aXRoUm91dGVyKENvbXBvc2VkQ29tcG9uZW50KSB7XG4gICAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHMpIHtcbiAgICAgICAgcmV0dXJuKC8qI19fUFVSRV9fKi8gX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb3NlZENvbXBvbmVudCwgT2JqZWN0LmFzc2lnbih7XG4gICAgICAgICAgICByb3V0ZXI6ICgwLCBfcm91dGVyKS51c2VSb3V0ZXIoKVxuICAgICAgICB9LCBwcm9wcykpKTtcbiAgICB9XG4gICAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzO1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLm9yaWdHZXRJbml0aWFsUHJvcHMgPSBDb21wb3NlZENvbXBvbmVudC5vcmlnR2V0SW5pdGlhbFByb3BzO1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJztcbiAgICAgICAgV2l0aFJvdXRlcldyYXBwZXIuZGlzcGxheU5hbWUgPSBgd2l0aFJvdXRlcigke25hbWV9KWA7XG4gICAgfVxuICAgIHJldHVybiBXaXRoUm91dGVyV3JhcHBlcjtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2l0aC1yb3V0ZXIuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmdldERvbWFpbkxvY2FsZSA9IGdldERvbWFpbkxvY2FsZTtcbmV4cG9ydHMuYWRkTG9jYWxlID0gYWRkTG9jYWxlO1xuZXhwb3J0cy5kZWxMb2NhbGUgPSBkZWxMb2NhbGU7XG5leHBvcnRzLmhhc0Jhc2VQYXRoID0gaGFzQmFzZVBhdGg7XG5leHBvcnRzLmFkZEJhc2VQYXRoID0gYWRkQmFzZVBhdGg7XG5leHBvcnRzLmRlbEJhc2VQYXRoID0gZGVsQmFzZVBhdGg7XG5leHBvcnRzLmlzTG9jYWxVUkwgPSBpc0xvY2FsVVJMO1xuZXhwb3J0cy5pbnRlcnBvbGF0ZUFzID0gaW50ZXJwb2xhdGVBcztcbmV4cG9ydHMucmVzb2x2ZUhyZWYgPSByZXNvbHZlSHJlZjtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbnZhciBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoXCIpO1xudmFyIF9yb3V0ZUxvYWRlciA9IHJlcXVpcmUoXCIuLi8uLi8uLi9jbGllbnQvcm91dGUtbG9hZGVyXCIpO1xudmFyIF9kZW5vcm1hbGl6ZVBhZ2VQYXRoID0gcmVxdWlyZShcIi4uLy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGhcIik7XG52YXIgX25vcm1hbGl6ZUxvY2FsZVBhdGggPSByZXF1aXJlKFwiLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGhcIik7XG52YXIgX21pdHQgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuLi9taXR0XCIpKTtcbnZhciBfdXRpbHMgPSByZXF1aXJlKFwiLi4vdXRpbHNcIik7XG52YXIgX2lzRHluYW1pYyA9IHJlcXVpcmUoXCIuL3V0aWxzL2lzLWR5bmFtaWNcIik7XG52YXIgX3BhcnNlUmVsYXRpdmVVcmwgPSByZXF1aXJlKFwiLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmxcIik7XG52YXIgX3F1ZXJ5c3RyaW5nID0gcmVxdWlyZShcIi4vdXRpbHMvcXVlcnlzdHJpbmdcIik7XG52YXIgX3Jlc29sdmVSZXdyaXRlcyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vdXRpbHMvcmVzb2x2ZS1yZXdyaXRlc1wiKSk7XG52YXIgX3JvdXRlTWF0Y2hlciA9IHJlcXVpcmUoXCIuL3V0aWxzL3JvdXRlLW1hdGNoZXJcIik7XG52YXIgX3JvdXRlUmVnZXggPSByZXF1aXJlKFwiLi91dGlscy9yb3V0ZS1yZWdleFwiKTtcbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHtcbiAgICAgICAgZGVmYXVsdDogb2JqXG4gICAgfTtcbn1cbmxldCBkZXRlY3REb21haW5Mb2NhbGU7XG5pZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIGRldGVjdERvbWFpbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2kxOG4vZGV0ZWN0LWRvbWFpbi1sb2NhbGUnKS5kZXRlY3REb21haW5Mb2NhbGU7XG59XG5jb25zdCBiYXNlUGF0aCA9IHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggfHwgJyc7XG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICAgIHJldHVybiBPYmplY3QuYXNzaWduKG5ldyBFcnJvcignUm91dGUgQ2FuY2VsbGVkJyksIHtcbiAgICAgICAgY2FuY2VsbGVkOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGgsIHByZWZpeCkge1xuICAgIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJykgPyBwYXRoID09PSAnLycgPyAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKHByZWZpeCkgOiBgJHtwcmVmaXh9JHtwYXRoTm9RdWVyeUhhc2gocGF0aCkgPT09ICcvJyA/IHBhdGguc3Vic3RyaW5nKDEpIDogcGF0aH1gIDogcGF0aDtcbn1cbmZ1bmN0aW9uIGdldERvbWFpbkxvY2FsZShwYXRoLCBsb2NhbGUsIGxvY2FsZXMsIGRvbWFpbkxvY2FsZXMpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBsb2NhbGUgPSBsb2NhbGUgfHwgKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGgsIGxvY2FsZXMpLmRldGVjdGVkTG9jYWxlO1xuICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZShkb21haW5Mb2NhbGVzLCB1bmRlZmluZWQsIGxvY2FsZSk7XG4gICAgICAgIGlmIChkZXRlY3RlZERvbWFpbikge1xuICAgICAgICAgICAgcmV0dXJuIGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHtiYXNlUGF0aCB8fCAnJ30ke2xvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke2xvY2FsZX1gfSR7cGF0aH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gYWRkTG9jYWxlKHBhdGgsIGxvY2FsZSwgZGVmYXVsdExvY2FsZSkge1xuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgIGNvbnN0IHBhdGhuYW1lID0gcGF0aE5vUXVlcnlIYXNoKHBhdGgpO1xuICAgICAgICBjb25zdCBwYXRoTG93ZXIgPSBwYXRobmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCBsb2NhbGVMb3dlciA9IGxvY2FsZSAmJiBsb2NhbGUudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGxvY2FsZSAmJiBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiYgIXBhdGhMb3dlci5zdGFydHNXaXRoKCcvJyArIGxvY2FsZUxvd2VyICsgJy8nKSAmJiBwYXRoTG93ZXIgIT09ICcvJyArIGxvY2FsZUxvd2VyID8gYWRkUGF0aFByZWZpeChwYXRoLCAnLycgKyBsb2NhbGUpIDogcGF0aDtcbiAgICB9XG4gICAgcmV0dXJuIHBhdGg7XG59XG5mdW5jdGlvbiBkZWxMb2NhbGUocGF0aCwgbG9jYWxlKSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICAgICAgY29uc3QgcGF0aG5hbWUgPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgICAgIGNvbnN0IHBhdGhMb3dlciA9IHBhdGhuYW1lLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IGxvY2FsZUxvd2VyID0gbG9jYWxlICYmIGxvY2FsZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICByZXR1cm4gbG9jYWxlICYmIChwYXRoTG93ZXIuc3RhcnRzV2l0aCgnLycgKyBsb2NhbGVMb3dlciArICcvJykgfHwgcGF0aExvd2VyID09PSAnLycgKyBsb2NhbGVMb3dlcikgPyAocGF0aG5hbWUubGVuZ3RoID09PSBsb2NhbGUubGVuZ3RoICsgMSA/ICcvJyA6ICcnKSArIHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSA6IHBhdGg7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gcGF0aE5vUXVlcnlIYXNoKHBhdGgpIHtcbiAgICBjb25zdCBxdWVyeUluZGV4ID0gcGF0aC5pbmRleE9mKCc/Jyk7XG4gICAgY29uc3QgaGFzaEluZGV4ID0gcGF0aC5pbmRleE9mKCcjJyk7XG4gICAgaWYgKHF1ZXJ5SW5kZXggPiAtMSB8fCBoYXNoSW5kZXggPiAtMSkge1xuICAgICAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoMCwgcXVlcnlJbmRleCA+IC0xID8gcXVlcnlJbmRleCA6IGhhc2hJbmRleCk7XG4gICAgfVxuICAgIHJldHVybiBwYXRoO1xufVxuZnVuY3Rpb24gaGFzQmFzZVBhdGgocGF0aCkge1xuICAgIHBhdGggPSBwYXRoTm9RdWVyeUhhc2gocGF0aCk7XG4gICAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJyk7XG59XG5mdW5jdGlvbiBhZGRCYXNlUGF0aChwYXRoKSB7XG4gICAgLy8gd2Ugb25seSBhZGQgdGhlIGJhc2VwYXRoIG9uIHJlbGF0aXZlIHVybHNcbiAgICByZXR1cm4gYWRkUGF0aFByZWZpeChwYXRoLCBiYXNlUGF0aCk7XG59XG5mdW5jdGlvbiBkZWxCYXNlUGF0aChwYXRoKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKTtcbiAgICBpZiAoIXBhdGguc3RhcnRzV2l0aCgnLycpKSBwYXRoID0gYC8ke3BhdGh9YDtcbiAgICByZXR1cm4gcGF0aDtcbn1cbmZ1bmN0aW9uIGlzTG9jYWxVUkwodXJsKSB7XG4gICAgLy8gcHJldmVudCBhIGh5ZHJhdGlvbiBtaXNtYXRjaCBvbiBocmVmIGZvciB1cmwgd2l0aCBhbmNob3IgcmVmc1xuICAgIGlmICh1cmwuc3RhcnRzV2l0aCgnLycpIHx8IHVybC5zdGFydHNXaXRoKCcjJykgfHwgdXJsLnN0YXJ0c1dpdGgoJz8nKSkgcmV0dXJuIHRydWU7XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gYWJzb2x1dGUgdXJscyBjYW4gYmUgbG9jYWwgaWYgdGhleSBhcmUgb24gdGhlIHNhbWUgb3JpZ2luXG4gICAgICAgIGNvbnN0IGxvY2F0aW9uT3JpZ2luID0gKDAsIF91dGlscykuZ2V0TG9jYXRpb25PcmlnaW4oKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSBuZXcgVVJMKHVybCwgbG9jYXRpb25PcmlnaW4pO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSk7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZnVuY3Rpb24gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpIHtcbiAgICBsZXQgaW50ZXJwb2xhdGVkUm91dGUgPSAnJztcbiAgICBjb25zdCBkeW5hbWljUmVnZXggPSAoMCwgX3JvdXRlUmVnZXgpLmdldFJvdXRlUmVnZXgocm91dGUpO1xuICAgIGNvbnN0IGR5bmFtaWNHcm91cHMgPSBkeW5hbWljUmVnZXguZ3JvdXBzO1xuICAgIGNvbnN0IGR5bmFtaWNNYXRjaGVzID0gLy8gVHJ5IHRvIG1hdGNoIHRoZSBkeW5hbWljIHJvdXRlIGFnYWluc3QgdGhlIGFzUGF0aFxuICAgIChhc1BhdGhuYW1lICE9PSByb3V0ZSA/ICgwLCBfcm91dGVNYXRjaGVyKS5nZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fCAvLyBGYWxsIGJhY2sgdG8gcmVhZGluZyB0aGUgdmFsdWVzIGZyb20gdGhlIGhyZWZcbiAgICAvLyBUT0RPOiBzaG91bGQgdGhpcyB0YWtlIHByaW9yaXR5OyBhbHNvIG5lZWQgdG8gY2hhbmdlIGluIHRoZSByb3V0ZXIuXG4gICAgcXVlcnk7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSByb3V0ZTtcbiAgICBjb25zdCBwYXJhbXMgPSBPYmplY3Qua2V5cyhkeW5hbWljR3JvdXBzKTtcbiAgICBpZiAoIXBhcmFtcy5ldmVyeSgocGFyYW0pPT57XG4gICAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJztcbiAgICAgICAgY29uc3QgeyByZXBlYXQgLCBvcHRpb25hbCAgfSA9IGR5bmFtaWNHcm91cHNbcGFyYW1dO1xuICAgICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgICAgLy8gVE9ETzogbW9yZSByb2J1c3QgaGFuZGxpbmcgZm9yIHVzZXItZXJyb3IgKHBhc3NpbmcgYC9gKVxuICAgICAgICBsZXQgcmVwbGFjZWQgPSBgWyR7cmVwZWF0ID8gJy4uLicgOiAnJ30ke3BhcmFtfV1gO1xuICAgICAgICBpZiAob3B0aW9uYWwpIHtcbiAgICAgICAgICAgIHJlcGxhY2VkID0gYCR7IXZhbHVlID8gJy8nIDogJyd9WyR7cmVwbGFjZWR9XWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlcGVhdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gW1xuICAgICAgICAgICAgdmFsdWVcbiAgICAgICAgXTtcbiAgICAgICAgcmV0dXJuIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiYgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9IGludGVycG9sYXRlZFJvdXRlLnJlcGxhY2UocmVwbGFjZWQsIHJlcGVhdCA/IHZhbHVlLm1hcCgvLyB0aGVzZSB2YWx1ZXMgc2hvdWxkIGJlIGZ1bGx5IGVuY29kZWQgaW5zdGVhZCBvZiBqdXN0XG4gICAgICAgIC8vIHBhdGggZGVsaW1pdGVyIGVzY2FwZWQgc2luY2UgdGhleSBhcmUgYmVpbmcgaW5zZXJ0ZWRcbiAgICAgICAgLy8gaW50byB0aGUgVVJMIGFuZCB3ZSBleHBlY3QgVVJMIGVuY29kZWQgc2VnbWVudHNcbiAgICAgICAgLy8gd2hlbiBwYXJzaW5nIGR5bmFtaWMgcm91dGUgcGFyYW1zXG4gICAgICAgIChzZWdtZW50KT0+ZW5jb2RlVVJJQ29tcG9uZW50KHNlZ21lbnQpXG4gICAgICAgICkuam9pbignLycpIDogZW5jb2RlVVJJQ29tcG9uZW50KHZhbHVlKSkgfHwgJy8nKTtcbiAgICB9KSkge1xuICAgICAgICBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnIC8vIGRpZCBub3Qgc2F0aXNmeSBhbGwgcmVxdWlyZW1lbnRzXG4gICAgICAgIDtcbiAgICAvLyBuLmIuIFdlIGlnbm9yZSB0aGlzIGVycm9yIGJlY2F1c2Ugd2UgaGFuZGxlIHdhcm5pbmcgZm9yIHRoaXMgY2FzZSBpblxuICAgIC8vIGRldmVsb3BtZW50IGluIHRoZSBgPExpbms+YCBjb21wb25lbnQgZGlyZWN0bHkuXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIHBhcmFtcyxcbiAgICAgICAgcmVzdWx0OiBpbnRlcnBvbGF0ZWRSb3V0ZVxuICAgIH07XG59XG5mdW5jdGlvbiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcykge1xuICAgIGNvbnN0IGZpbHRlcmVkUXVlcnkgPSB7XG4gICAgfTtcbiAgICBPYmplY3Qua2V5cyhxdWVyeSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpZiAoIXBhcmFtcy5pbmNsdWRlcyhrZXkpKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFF1ZXJ5W2tleV0gPSBxdWVyeVtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIGZpbHRlcmVkUXVlcnk7XG59XG5mdW5jdGlvbiByZXNvbHZlSHJlZihyb3V0ZXIsIGhyZWYsIHJlc29sdmVBcykge1xuICAgIC8vIHdlIHVzZSBhIGR1bW15IGJhc2UgdXJsIGZvciByZWxhdGl2ZSB1cmxzXG4gICAgbGV0IGJhc2U7XG4gICAgbGV0IHVybEFzU3RyaW5nID0gdHlwZW9mIGhyZWYgPT09ICdzdHJpbmcnID8gaHJlZiA6ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKGhyZWYpO1xuICAgIC8vIHJlcGVhdGVkIHNsYXNoZXMgYW5kIGJhY2tzbGFzaGVzIGluIHRoZSBVUkwgYXJlIGNvbnNpZGVyZWRcbiAgICAvLyBpbnZhbGlkIGFuZCB3aWxsIG5ldmVyIG1hdGNoIGEgTmV4dC5qcyBwYWdlL2ZpbGVcbiAgICBjb25zdCB1cmxQcm90b01hdGNoID0gdXJsQXNTdHJpbmcubWF0Y2goL15bYS16QS1aXXsxLH06XFwvXFwvLyk7XG4gICAgY29uc3QgdXJsQXNTdHJpbmdOb1Byb3RvID0gdXJsUHJvdG9NYXRjaCA/IHVybEFzU3RyaW5nLnN1YnN0cih1cmxQcm90b01hdGNoWzBdLmxlbmd0aCkgOiB1cmxBc1N0cmluZztcbiAgICBjb25zdCB1cmxQYXJ0cyA9IHVybEFzU3RyaW5nTm9Qcm90by5zcGxpdCgnPycpO1xuICAgIGlmICgodXJsUGFydHNbMF0gfHwgJycpLm1hdGNoKC8oXFwvXFwvfFxcXFwpLykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgSW52YWxpZCBocmVmIHBhc3NlZCB0byBuZXh0L3JvdXRlcjogJHt1cmxBc1N0cmluZ30sIHJlcGVhdGVkIGZvcndhcmQtc2xhc2hlcyAoLy8pIG9yIGJhY2tzbGFzaGVzIFxcXFwgYXJlIG5vdCB2YWxpZCBpbiB0aGUgaHJlZmApO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkVXJsID0gKDAsIF91dGlscykubm9ybWFsaXplUmVwZWF0ZWRTbGFzaGVzKHVybEFzU3RyaW5nTm9Qcm90byk7XG4gICAgICAgIHVybEFzU3RyaW5nID0gKHVybFByb3RvTWF0Y2ggPyB1cmxQcm90b01hdGNoWzBdIDogJycpICsgbm9ybWFsaXplZFVybDtcbiAgICB9XG4gICAgLy8gUmV0dXJuIGJlY2F1c2UgaXQgY2Fubm90IGJlIHJvdXRlZCBieSB0aGUgTmV4dC5qcyByb3V0ZXJcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsQXNTdHJpbmcpKSB7XG4gICAgICAgIHJldHVybiByZXNvbHZlQXMgPyBbXG4gICAgICAgICAgICB1cmxBc1N0cmluZ1xuICAgICAgICBdIDogdXJsQXNTdHJpbmc7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIGJhc2UgPSBuZXcgVVJMKHVybEFzU3RyaW5nLnN0YXJ0c1dpdGgoJyMnKSA/IHJvdXRlci5hc1BhdGggOiByb3V0ZXIucGF0aG5hbWUsICdodHRwOi8vbicpO1xuICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgLy8gZmFsbGJhY2sgdG8gLyBmb3IgaW52YWxpZCBhc1BhdGggdmFsdWVzIGUuZy4gLy9cbiAgICAgICAgYmFzZSA9IG5ldyBVUkwoJy8nLCAnaHR0cDovL24nKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZmluYWxVcmwgPSBuZXcgVVJMKHVybEFzU3RyaW5nLCBiYXNlKTtcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUgPSAoMCwgX25vcm1hbGl6ZVRyYWlsaW5nU2xhc2gpLm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKTtcbiAgICAgICAgbGV0IGludGVycG9sYXRlZEFzID0gJyc7XG4gICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUoZmluYWxVcmwucGF0aG5hbWUpICYmIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJiByZXNvbHZlQXMpIHtcbiAgICAgICAgICAgIGNvbnN0IHF1ZXJ5ID0gKDAsIF9xdWVyeXN0cmluZykuc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShmaW5hbFVybC5zZWFyY2hQYXJhbXMpO1xuICAgICAgICAgICAgY29uc3QgeyByZXN1bHQgLCBwYXJhbXMgIH0gPSBpbnRlcnBvbGF0ZUFzKGZpbmFsVXJsLnBhdGhuYW1lLCBmaW5hbFVybC5wYXRobmFtZSwgcXVlcnkpO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIGludGVycG9sYXRlZEFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogcmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5LCBwYXJhbXMpXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRIcmVmID0gZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpbiA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aCkgOiBmaW5hbFVybC5ocmVmO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgcmVzb2x2ZWRIcmVmLFxuICAgICAgICAgICAgaW50ZXJwb2xhdGVkQXMgfHwgcmVzb2x2ZWRIcmVmXG4gICAgICAgIF0gOiByZXNvbHZlZEhyZWY7XG4gICAgfSBjYXRjaCAoXykge1xuICAgICAgICByZXR1cm4gcmVzb2x2ZUFzID8gW1xuICAgICAgICAgICAgdXJsQXNTdHJpbmdcbiAgICAgICAgXSA6IHVybEFzU3RyaW5nO1xuICAgIH1cbn1cbmZ1bmN0aW9uIHN0cmlwT3JpZ2luKHVybCkge1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgcmV0dXJuIHVybC5zdGFydHNXaXRoKG9yaWdpbikgPyB1cmwuc3Vic3RyaW5nKG9yaWdpbi5sZW5ndGgpIDogdXJsO1xufVxuZnVuY3Rpb24gcHJlcGFyZVVybEFzKHJvdXRlciwgdXJsLCBhcykge1xuICAgIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAgIC8vIHdlJ2xsIGZvcm1hdCB0aGVtIGludG8gdGhlIHN0cmluZyB2ZXJzaW9uIGhlcmUuXG4gICAgbGV0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocm91dGVyLCB1cmwsIHRydWUpO1xuICAgIGNvbnN0IG9yaWdpbiA9ICgwLCBfdXRpbHMpLmdldExvY2F0aW9uT3JpZ2luKCk7XG4gICAgY29uc3QgaHJlZkhhZE9yaWdpbiA9IHJlc29sdmVkSHJlZi5zdGFydHNXaXRoKG9yaWdpbik7XG4gICAgY29uc3QgYXNIYWRPcmlnaW4gPSByZXNvbHZlZEFzICYmIHJlc29sdmVkQXMuc3RhcnRzV2l0aChvcmlnaW4pO1xuICAgIHJlc29sdmVkSHJlZiA9IHN0cmlwT3JpZ2luKHJlc29sdmVkSHJlZik7XG4gICAgcmVzb2x2ZWRBcyA9IHJlc29sdmVkQXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlZEFzKSA6IHJlc29sdmVkQXM7XG4gICAgY29uc3QgcHJlcGFyZWRVcmwgPSBocmVmSGFkT3JpZ2luID8gcmVzb2x2ZWRIcmVmIDogYWRkQmFzZVBhdGgocmVzb2x2ZWRIcmVmKTtcbiAgICBjb25zdCBwcmVwYXJlZEFzID0gYXMgPyBzdHJpcE9yaWdpbihyZXNvbHZlSHJlZihyb3V0ZXIsIGFzKSkgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZjtcbiAgICByZXR1cm4ge1xuICAgICAgICB1cmw6IHByZXBhcmVkVXJsLFxuICAgICAgICBhczogYXNIYWRPcmlnaW4gPyBwcmVwYXJlZEFzIDogYWRkQmFzZVBhdGgocHJlcGFyZWRBcylcbiAgICB9O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXRobmFtZSwgcGFnZXMpIHtcbiAgICBjb25zdCBjbGVhblBhdGhuYW1lID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCgoMCwgX2Rlbm9ybWFsaXplUGFnZVBhdGgpLmRlbm9ybWFsaXplUGFnZVBhdGgocGF0aG5hbWUpKTtcbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgICByZXR1cm4gcGF0aG5hbWU7XG4gICAgfVxuICAgIC8vIGhhbmRsZSByZXNvbHZpbmcgaHJlZiBmb3IgZHluYW1pYyByb3V0ZXNcbiAgICBpZiAoIXBhZ2VzLmluY2x1ZGVzKGNsZWFuUGF0aG5hbWUpKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgICAgcGFnZXMuc29tZSgocGFnZSk9PntcbiAgICAgICAgICAgIGlmICgoMCwgX2lzRHluYW1pYykuaXNEeW5hbWljUm91dGUocGFnZSkgJiYgKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHBhZ2UpLnJlLnRlc3QoY2xlYW5QYXRobmFtZSkpIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSA9IHBhZ2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSk7XG59XG5jb25zdCBtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiA9IHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04gJiYgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgJ3Njcm9sbFJlc3RvcmF0aW9uJyBpbiB3aW5kb3cuaGlzdG9yeSAmJiAhIWZ1bmN0aW9uKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCB2ID0gJ19fbmV4dCc7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZXF1ZW5jZXNcbiAgICAgICAgcmV0dXJuIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0odiwgdiksIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0odiksIHRydWU7XG4gICAgfSBjYXRjaCAobikge1xuICAgIH1cbn0oKTtcbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORCA9IFN5bWJvbCgnU1NHX0RBVEFfTk9UX0ZPVU5EJyk7XG5mdW5jdGlvbiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMpIHtcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgICAgIC8vIENvb2tpZXMgYXJlIHJlcXVpcmVkIHRvIGJlIHByZXNlbnQgZm9yIE5leHQuanMnIFNTRyBcIlByZXZpZXcgTW9kZVwiLlxuICAgICAgICAvLyBDb29raWVzIG1heSBhbHNvIGJlIHJlcXVpcmVkIGZvciBgZ2V0U2VydmVyU2lkZVByb3BzYC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gPiBgZmV0Y2hgIHdvbuKAmXQgc2VuZCBjb29raWVzLCB1bmxlc3MgeW91IHNldCB0aGUgY3JlZGVudGlhbHMgaW5pdFxuICAgICAgICAvLyA+IG9wdGlvbi5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgICAgICAvL1xuICAgICAgICAvLyA+IEZvciBtYXhpbXVtIGJyb3dzZXIgY29tcGF0aWJpbGl0eSB3aGVuIGl0IGNvbWVzIHRvIHNlbmRpbmcgJlxuICAgICAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgICAgIC8vID4gb3B0aW9uIGluc3RlYWQgb2YgcmVseWluZyBvbiB0aGUgZGVmYXVsdC5cbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2dpdGh1Yi9mZXRjaCNjYXZlYXRzXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nXG4gICAgfSkudGhlbigocmVzKT0+e1xuICAgICAgICBpZiAoIXJlcy5vaykge1xuICAgICAgICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmZXRjaFJldHJ5KHVybCwgYXR0ZW1wdHMgLSAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5ub3RGb3VuZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBub3RGb3VuZDogU1NHX0RBVEFfTk9UX0ZPVU5EXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGxvYWQgc3RhdGljIHByb3BzYCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICByZXR1cm4gZmV0Y2hSZXRyeShkYXRhSHJlZiwgaXNTZXJ2ZXJSZW5kZXIgPyAzIDogMSkuY2F0Y2goKGVycik9PntcbiAgICAgICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgICAgIC8vIG9uIGEgY2xpZW50LXNpZGUgdHJhbnNpdGlvbi4gT3RoZXJ3aXNlLCB3ZSdkIGdldCBpbnRvIGFuIGluZmluaXRlXG4gICAgICAgIC8vIGxvb3AuXG4gICAgICAgIGlmICghaXNTZXJ2ZXJSZW5kZXIpIHtcbiAgICAgICAgICAgICgwLCBfcm91dGVMb2FkZXIpLm1hcmtBc3NldEVycm9yKGVycik7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xufVxuY2xhc3MgUm91dGVyIHtcbiAgICBjb25zdHJ1Y3RvcihwYXRobmFtZTEsIHF1ZXJ5MSwgYXMxLCB7IGluaXRpYWxQcm9wcyAsIHBhZ2VMb2FkZXIgLCBBcHAgLCB3cmFwQXBwICwgQ29tcG9uZW50OiBDb21wb25lbnQxICwgZXJyOiBlcnIxICwgc3Vic2NyaXB0aW9uICwgaXNGYWxsYmFjayAsIGxvY2FsZSAsIGxvY2FsZXMgLCBkZWZhdWx0TG9jYWxlICwgZG9tYWluTG9jYWxlcyAsIGlzUHJldmlldyAgfSl7XG4gICAgICAgIC8vIFN0YXRpYyBEYXRhIENhY2hlXG4gICAgICAgIHRoaXMuc2RjID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBJbi1mbGlnaHQgU2VydmVyIERhdGEgUmVxdWVzdHMsIGZvciBkZWR1cGluZ1xuICAgICAgICB0aGlzLnNkciA9IHtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5faWR4ID0gMDtcbiAgICAgICAgdGhpcy5vblBvcFN0YXRlID0gKGUpPT57XG4gICAgICAgICAgICBjb25zdCBzdGF0ZSA9IGUuc3RhdGU7XG4gICAgICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAgICAgLy8gV2UgZ2V0IHN0YXRlIGFzIHVuZGVmaW5lZCBmb3IgdHdvIHJlYXNvbnMuXG4gICAgICAgICAgICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAgICAgICAgICAgLy8gIDIuIFdoZW4gdGhlIFVSTCBjaGFuZ2VkIHdpdGggI1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgICAgICAgICAgICAvLyAoYXMgaXQncyBhbHJlYWR5IGNoYW5nZWQpXG4gICAgICAgICAgICAgICAgLy8gQnV0IHdlIGNhbiBzaW1wbHkgcmVwbGFjZSB0aGUgc3RhdGUgd2l0aCB0aGUgbmV3IGNoYW5nZXMuXG4gICAgICAgICAgICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgICAgICAgICAgIC8vIFNvLCBkb2luZyB0aGUgZm9sbG93aW5nIGZvciAoMSkgZG9lcyBubyBoYXJtLlxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcGF0aG5hbWU6IHBhdGhuYW1lMSAsIHF1ZXJ5OiBxdWVyeTEgIH0gPSB0aGlzO1xuICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlU3RhdGUoJ3JlcGxhY2VTdGF0ZScsICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSksXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5OiBxdWVyeTFcbiAgICAgICAgICAgICAgICB9KSwgKDAsIF91dGlscykuZ2V0VVJMKCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghc3RhdGUuX19OKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGZvcmNlZFNjcm9sbDtcbiAgICAgICAgICAgIGNvbnN0IHsgdXJsICwgYXM6IGFzMSAsIG9wdGlvbnMgLCBpZHggIH0gPSBzdGF0ZTtcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pZHggIT09IGlkeCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3QgY3VycmVudCBzY3JvbGwgcG9zaXRpb246XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4OiBzZWxmLnBhZ2VYT2Zmc2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB5OiBzZWxmLnBhZ2VZT2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gUmVzdG9yZSBvbGQgc2Nyb2xsIHBvc2l0aW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2ID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnX19uZXh0X3Njcm9sbF8nICsgaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JjZWRTY3JvbGwgPSBKU09OLnBhcnNlKHYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcmNlZFNjcm9sbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHggPSBpZHg7XG4gICAgICAgICAgICBjb25zdCB7IHBhdGhuYW1lOiBwYXRobmFtZTEgIH0gPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwodXJsKTtcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBkb24ndCByZS1yZW5kZXIgb24gaW5pdGlhbCBsb2FkLFxuICAgICAgICAgICAgLy8gY2FuIGJlIGNhdXNlZCBieSBuYXZpZ2F0aW5nIGJhY2sgZnJvbSBhbiBleHRlcm5hbCBzaXRlXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NzciAmJiBhczEgPT09IHRoaXMuYXNQYXRoICYmIHBhdGhuYW1lMSA9PT0gdGhpcy5wYXRobmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAgICAgICAgIC8vIFRoZXkgd2lsbCB0aGVuIGJlIHJlc3BvbnNpYmxlIGZvciBoYW5kbGluZyB0aGUgZXZlbnQuXG4gICAgICAgICAgICBpZiAodGhpcy5fYnBzICYmICF0aGlzLl9icHMoc3RhdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2UoJ3JlcGxhY2VTdGF0ZScsIHVybCwgYXMxLCBPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBzaGFsbG93OiBvcHRpb25zLnNoYWxsb3cgJiYgdGhpcy5fc2hhbGxvdyxcbiAgICAgICAgICAgICAgICBsb2NhbGU6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgfSksIGZvcmNlZFNjcm9sbCk7XG4gICAgICAgIH07XG4gICAgICAgIC8vIHJlcHJlc2VudHMgdGhlIGN1cnJlbnQgY29tcG9uZW50IGtleVxuICAgICAgICB0aGlzLnJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICAvLyBzZXQgdXAgdGhlIGNvbXBvbmVudCBjYWNoZSAoYnkgcm91dGUga2V5cylcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0ge1xuICAgICAgICB9O1xuICAgICAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgICAgIC8vIE90aGVyd2lzZSwgdGhpcyBjYXVzZSBpc3N1ZXMgd2hlbiB3aGVuIGdvaW5nIGJhY2sgYW5kXG4gICAgICAgIC8vIGNvbWUgYWdhaW4gdG8gdGhlIGVycm9yZWQgcGFnZS5cbiAgICAgICAgaWYgKHBhdGhuYW1lMSAhPT0gJy9fZXJyb3InKSB7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbdGhpcy5yb3V0ZV0gPSB7XG4gICAgICAgICAgICAgICAgQ29tcG9uZW50OiBDb21wb25lbnQxLFxuICAgICAgICAgICAgICAgIGluaXRpYWw6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJvcHM6IGluaXRpYWxQcm9wcyxcbiAgICAgICAgICAgICAgICBlcnI6IGVycjEsXG4gICAgICAgICAgICAgICAgX19OX1NTRzogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NHLFxuICAgICAgICAgICAgICAgIF9fTl9TU1A6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTUFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10gPSB7XG4gICAgICAgICAgICBDb21wb25lbnQ6IEFwcCxcbiAgICAgICAgICAgIHN0eWxlU2hlZXRzOiBbXVxuICAgICAgICB9O1xuICAgICAgICAvLyBCYWNrd2FyZHMgY29tcGF0IGZvciBSb3V0ZXIucm91dGVyLmV2ZW50c1xuICAgICAgICAvLyBUT0RPOiBTaG91bGQgYmUgcmVtb3ZlIHRoZSBmb2xsb3dpbmcgbWFqb3IgdmVyc2lvbiBhcyBpdCB3YXMgbmV2ZXIgZG9jdW1lbnRlZFxuICAgICAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHM7XG4gICAgICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXI7XG4gICAgICAgIHRoaXMucGF0aG5hbWUgPSBwYXRobmFtZTE7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTE7XG4gICAgICAgIC8vIGlmIGF1dG8gcHJlcmVuZGVyZWQgYW5kIGR5bmFtaWMgcm91dGUgd2FpdCB0byB1cGRhdGUgYXNQYXRoXG4gICAgICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgICAgIGNvbnN0IGF1dG9FeHBvcnREeW5hbWljID0gKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHBhdGhuYW1lMSkgJiYgc2VsZi5fX05FWFRfREFUQV9fLmF1dG9FeHBvcnQ7XG4gICAgICAgIHRoaXMuYXNQYXRoID0gYXV0b0V4cG9ydER5bmFtaWMgPyBwYXRobmFtZTEgOiBhczE7XG4gICAgICAgIHRoaXMuYmFzZVBhdGggPSBiYXNlUGF0aDtcbiAgICAgICAgdGhpcy5zdWIgPSBzdWJzY3JpcHRpb247XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgdGhpcy5fd3JhcEFwcCA9IHdyYXBBcHA7XG4gICAgICAgIC8vIG1ha2Ugc3VyZSB0byBpZ25vcmUgZXh0cmEgcG9wU3RhdGUgaW4gc2FmYXJpIG9uIG5hdmlnYXRpbmdcbiAgICAgICAgLy8gYmFjayBmcm9tIGV4dGVybmFsIHNpdGVcbiAgICAgICAgdGhpcy5pc1NzciA9IHRydWU7XG4gICAgICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2s7XG4gICAgICAgIHRoaXMuaXNSZWFkeSA9ICEhKHNlbGYuX19ORVhUX0RBVEFfXy5nc3NwIHx8IHNlbGYuX19ORVhUX0RBVEFfXy5naXAgfHwgc2VsZi5fX05FWFRfREFUQV9fLmFwcEdpcCAmJiAhc2VsZi5fX05FWFRfREFUQV9fLmdzcCB8fCAhYXV0b0V4cG9ydER5bmFtaWMgJiYgIXNlbGYubG9jYXRpb24uc2VhcmNoICYmICFwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKTtcbiAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIWlzUHJldmlldztcbiAgICAgICAgdGhpcy5pc0xvY2FsZURvbWFpbiA9IGZhbHNlO1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGU7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZXMgPSBsb2NhbGVzO1xuICAgICAgICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZTtcbiAgICAgICAgICAgIHRoaXMuZG9tYWluTG9jYWxlcyA9IGRvbWFpbkxvY2FsZXM7XG4gICAgICAgICAgICB0aGlzLmlzTG9jYWxlRG9tYWluID0gISFkZXRlY3REb21haW5Mb2NhbGUoZG9tYWluTG9jYWxlcywgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgXCJhc1wiIGRvZXNuJ3Qgc3RhcnQgd2l0aCBkb3VibGUgc2xhc2hlcyBvciBlbHNlIGl0IGNhblxuICAgICAgICAgICAgLy8gdGhyb3cgYW4gZXJyb3IgYXMgaXQncyBjb25zaWRlcmVkIGludmFsaWRcbiAgICAgICAgICAgIGlmIChhczEuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgICAgICAgICAgLy8gaW4gb3JkZXIgZm9yIGBlLnN0YXRlYCB0byB3b3JrIG9uIHRoZSBgb25wb3BzdGF0ZWAgZXZlbnRcbiAgICAgICAgICAgICAgICAvLyB3ZSBoYXZlIHRvIHJlZ2lzdGVyIHRoZSBpbml0aWFsIHJvdXRlIHVwb24gaW5pdGlhbGl6YXRpb25cbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMuX3Nob3VsZFJlc29sdmVIcmVmID0gYXMxICE9PSBwYXRobmFtZTE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZSgncmVwbGFjZVN0YXRlJywgKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogYWRkQmFzZVBhdGgocGF0aG5hbWUxKSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHF1ZXJ5MVxuICAgICAgICAgICAgICAgIH0pLCAoMCwgX3V0aWxzKS5nZXRVUkwoKSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpO1xuICAgICAgICAgICAgLy8gZW5hYmxlIGN1c3RvbSBzY3JvbGwgcmVzdG9yYXRpb24gaGFuZGxpbmcgd2hlbiBhdmFpbGFibGVcbiAgICAgICAgICAgIC8vIG90aGVyd2lzZSBmYWxsYmFjayB0byBicm93c2VyJ3MgZGVmYXVsdCBoYW5kbGluZ1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9TQ1JPTExfUkVTVE9SQVRJT04pIHtcbiAgICAgICAgICAgICAgICBpZiAobWFudWFsU2Nyb2xsUmVzdG9yYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93Lmhpc3Rvcnkuc2Nyb2xsUmVzdG9yYXRpb24gPSAnbWFudWFsJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVsb2FkKCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgKiBHbyBiYWNrIGluIGhpc3RvcnlcbiAgICovIGJhY2soKSB7XG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqLyBwdXNoKHVybCwgYXMsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTikge1xuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIGluIHRoZSBmdXR1cmUgd2hlbiB3ZSB1cGRhdGUgaGlzdG9yeSBiZWZvcmUgcm91dGUgY2hhbmdlXG4gICAgICAgICAgICAvLyBpcyBjb21wbGV0ZSwgYXMgdGhlIHBvcHN0YXRlIGV2ZW50IHNob3VsZCBoYW5kbGUgdGhpcyBjYXB0dXJlLlxuICAgICAgICAgICAgaWYgKG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gU25hcHNob3Qgc2Nyb2xsIHBvc2l0aW9uIHJpZ2h0IGJlZm9yZSBuYXZpZ2F0aW5nIHRvIGEgbmV3IHBhZ2U6XG4gICAgICAgICAgICAgICAgICAgIHNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ19fbmV4dF9zY3JvbGxfJyArIHRoaXMuX2lkeCwgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogc2VsZi5wYWdlWE9mZnNldCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHk6IHNlbGYucGFnZVlPZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgKHsgdXJsICwgYXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgdXJsLCBhcykpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovIHJlcGxhY2UodXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgICh7IHVybCAsIGFzICB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hhbmdlKCdyZXBsYWNlU3RhdGUnLCB1cmwsIGFzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgYXN5bmMgY2hhbmdlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucywgZm9yY2VkU2Nyb2xsKSB7XG4gICAgICAgIGlmICghaXNMb2NhbFVSTCh1cmwpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybDtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaG91bGRSZXNvbHZlSHJlZiA9IHVybCA9PT0gYXMgfHwgb3B0aW9ucy5faCB8fCBvcHRpb25zLl9zaG91bGRSZXNvbHZlSHJlZjtcbiAgICAgICAgLy8gZm9yIHN0YXRpYyBwYWdlcyB3aXRoIHF1ZXJ5IHBhcmFtcyBpbiB0aGUgVVJMIHdlIGRlbGF5XG4gICAgICAgIC8vIG1hcmtpbmcgdGhlIHJvdXRlciByZWFkeSB1bnRpbCBhZnRlciB0aGUgcXVlcnkgaXMgdXBkYXRlZFxuICAgICAgICBpZiAob3B0aW9ucy5faCkge1xuICAgICAgICAgICAgdGhpcy5pc1JlYWR5ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmV2TG9jYWxlID0gdGhpcy5sb2NhbGU7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlID09PSBmYWxzZSA/IHRoaXMuZGVmYXVsdExvY2FsZSA6IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLmxvY2FsZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMpO1xuICAgICAgICAgICAgY29uc3QgbG9jYWxlUGF0aFJlc3VsdCA9ICgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChwYXJzZWRBcy5wYXRobmFtZSwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgIGlmIChsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gYWRkQmFzZVBhdGgocGFyc2VkQXMucGF0aG5hbWUpO1xuICAgICAgICAgICAgICAgIGFzID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkQXMpO1xuICAgICAgICAgICAgICAgIHVybCA9IGFkZEJhc2VQYXRoKCgwLCBfbm9ybWFsaXplTG9jYWxlUGF0aCkubm9ybWFsaXplTG9jYWxlUGF0aChoYXNCYXNlUGF0aCh1cmwpID8gZGVsQmFzZVBhdGgodXJsKSA6IHVybCwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGlkTmF2aWdhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gd3JhcCB0aGlzIGluIHRoZSBlbnYgY2hlY2sgYWdhaW4gc2luY2UgcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgLy8gbW92ZXMgdGhpcyBvbiBpdHMgb3duIGR1ZSB0byB0aGUgcmV0dXJuXG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIHZhciByZWY7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIGxvY2FsZSBpc24ndCBjb25maWd1cmVkIGhhcmQgbmF2aWdhdGUgdG8gc2hvdyA0MDQgcGFnZVxuICAgICAgICAgICAgICAgIGlmICghKChyZWYgPSB0aGlzLmxvY2FsZXMpID09PSBudWxsIHx8IHJlZiA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmLmluY2x1ZGVzKHRoaXMubG9jYWxlKSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VkQXMucGF0aG5hbWUgPSBhZGRMb2NhbGUocGFyc2VkQXMucGF0aG5hbWUsIHRoaXMubG9jYWxlKTtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWRBcyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMgd2FzIHByZXZpb3VzbHkgYSByZXR1cm4gYnV0IHdhcyByZW1vdmVkIGluIGZhdm9yXG4gICAgICAgICAgICAgICAgICAgIC8vIG9mIGJldHRlciBkZWFkIGNvZGUgZWxpbWluYXRpb24gd2l0aCByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAgICAgICAgIGRpZE5hdmlnYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkZXRlY3RlZERvbWFpbiA9IGRldGVjdERvbWFpbkxvY2FsZSh0aGlzLmRvbWFpbkxvY2FsZXMsIHVuZGVmaW5lZCwgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byB3cmFwIHRoaXMgaW4gdGhlIGVudiBjaGVjayBhZ2FpbiBzaW5jZSByZWdlbmVyYXRvciBydW50aW1lXG4gICAgICAgICAgICAvLyBtb3ZlcyB0aGlzIG9uIGl0cyBvd24gZHVlIHRvIHRoZSByZXR1cm5cbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgd2UgYXJlIG5hdmlnYXRpbmcgdG8gYSBkb21haW4gbG9jYWxlIGVuc3VyZSB3ZSByZWRpcmVjdCB0byB0aGVcbiAgICAgICAgICAgICAgICAvLyBjb3JyZWN0IGRvbWFpblxuICAgICAgICAgICAgICAgIGlmICghZGlkTmF2aWdhdGUgJiYgZGV0ZWN0ZWREb21haW4gJiYgdGhpcy5pc0xvY2FsZURvbWFpbiAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICE9PSBkZXRlY3RlZERvbWFpbi5kb21haW4pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXNOb0Jhc2VQYXRoID0gZGVsQmFzZVBhdGgoYXMpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGBodHRwJHtkZXRlY3RlZERvbWFpbi5odHRwID8gJycgOiAncyd9Oi8vJHtkZXRlY3RlZERvbWFpbi5kb21haW59JHthZGRCYXNlUGF0aChgJHt0aGlzLmxvY2FsZSA9PT0gZGV0ZWN0ZWREb21haW4uZGVmYXVsdExvY2FsZSA/ICcnIDogYC8ke3RoaXMubG9jYWxlfWB9JHthc05vQmFzZVBhdGggPT09ICcvJyA/ICcnIDogYXNOb0Jhc2VQYXRofWAgfHwgJy8nKX1gO1xuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzIHdhcyBwcmV2aW91c2x5IGEgcmV0dXJuIGJ1dCB3YXMgcmVtb3ZlZCBpbiBmYXZvclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiBiZXR0ZXIgZGVhZCBjb2RlIGVsaW1pbmF0aW9uIHdpdGggcmVnZW5lcmF0b3IgcnVudGltZVxuICAgICAgICAgICAgICAgICAgICBkaWROYXZpZ2F0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRpZE5hdmlnYXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgpPT57XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oKSB7XG4gICAgICAgICAgICB0aGlzLmlzU3NyID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gbWFya2luZyByb3V0ZSBjaGFuZ2VzIGFzIGEgbmF2aWdhdGlvbiBzdGFydCBlbnRyeVxuICAgICAgICBpZiAoX3V0aWxzLlNUKSB7XG4gICAgICAgICAgICBwZXJmb3JtYW5jZS5tYXJrKCdyb3V0ZUNoYW5nZScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgc2hhbGxvdyA9ZmFsc2UgIH0gPSBvcHRpb25zO1xuICAgICAgICBjb25zdCByb3V0ZVByb3BzID0ge1xuICAgICAgICAgICAgc2hhbGxvd1xuICAgICAgICB9O1xuICAgICAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSwgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgYXMgPSBhZGRCYXNlUGF0aChhZGRMb2NhbGUoaGFzQmFzZVBhdGgoYXMpID8gZGVsQmFzZVBhdGgoYXMpIDogYXMsIG9wdGlvbnMubG9jYWxlLCB0aGlzLmRlZmF1bHRMb2NhbGUpKTtcbiAgICAgICAgY29uc3QgY2xlYW5lZEFzID0gZGVsTG9jYWxlKGhhc0Jhc2VQYXRoKGFzKSA/IGRlbEJhc2VQYXRoKGFzKSA6IGFzLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhcztcbiAgICAgICAgbGV0IGxvY2FsZUNoYW5nZSA9IHByZXZMb2NhbGUgIT09IHRoaXMubG9jYWxlO1xuICAgICAgICAvLyBJZiB0aGUgdXJsIGNoYW5nZSBpcyBvbmx5IHJlbGF0ZWQgdG8gYSBoYXNoIGNoYW5nZVxuICAgICAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG4gICAgICAgIC8vIFdBUk5JTkc6IGBfaGAgaXMgYW4gaW50ZXJuYWwgb3B0aW9uIGZvciBoYW5kaW5nIE5leHQuanMgY2xpZW50LXNpZGVcbiAgICAgICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgICAgICAvLyBhbnkgdGltZSB3aXRob3V0IG5vdGljZS5cbiAgICAgICAgaWYgKCFvcHRpb25zLl9oICYmIHRoaXMub25seUFIYXNoQ2hhbmdlKGNsZWFuZWRBcykgJiYgIWxvY2FsZUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5hc1BhdGggPSBjbGVhbmVkQXM7XG4gICAgICAgICAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ2hhc2hDaGFuZ2VTdGFydCcsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyk7XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvSGFzaChjbGVhbmVkQXMpO1xuICAgICAgICAgICAgdGhpcy5ub3RpZnkodGhpcy5jb21wb25lbnRzW3RoaXMucm91dGVdLCBudWxsKTtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBhcnNlZCA9ICgwLCBfcGFyc2VSZWxhdGl2ZVVybCkucGFyc2VSZWxhdGl2ZVVybCh1cmwpO1xuICAgICAgICBsZXQgeyBwYXRobmFtZTogcGF0aG5hbWUxICwgcXVlcnk6IHF1ZXJ5MSAgfSA9IHBhcnNlZDtcbiAgICAgICAgLy8gVGhlIGJ1aWxkIG1hbmlmZXN0IG5lZWRzIHRvIGJlIGxvYWRlZCBiZWZvcmUgYXV0by1zdGF0aWMgZHluYW1pYyBwYWdlc1xuICAgICAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAgICAgLy8gd2hlbiByZXdyaXR0ZW4gdG9cbiAgICAgICAgbGV0IHBhZ2VzLCByZXdyaXRlcztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KCk7XG4gICAgICAgICAgICAoeyBfX3Jld3JpdGVzOiByZXdyaXRlcyAgfSA9IGF3YWl0ICgwLCBfcm91dGVMb2FkZXIpLmdldENsaWVudEJ1aWxkTWFuaWZlc3QoKSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycjEpIHtcbiAgICAgICAgICAgIC8vIElmIHdlIGZhaWwgdG8gcmVzb2x2ZSB0aGUgcGFnZSBsaXN0IG9yIGNsaWVudC1idWlsZCBtYW5pZmVzdCwgd2UgbXVzdFxuICAgICAgICAgICAgLy8gZG8gYSBzZXJ2ZXItc2lkZSB0cmFuc2l0aW9uOlxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhcztcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhc2tlZCB0byBjaGFuZ2UgdGhlIGN1cnJlbnQgVVJMIHdlIHNob3VsZCByZWxvYWQgdGhlIGN1cnJlbnQgcGFnZVxuICAgICAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAgICAgLy8gV2UgYWxzbyBuZWVkIHRvIHNldCB0aGUgbWV0aG9kID0gcmVwbGFjZVN0YXRlIGFsd2F5c1xuICAgICAgICAvLyBhcyB0aGlzIHNob3VsZCBub3QgZ28gaW50byB0aGUgaGlzdG9yeSAoVGhhdCdzIGhvdyBicm93c2VycyB3b3JrKVxuICAgICAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgICAgIGlmICghdGhpcy51cmxJc05ldyhjbGVhbmVkQXMpICYmICFsb2NhbGVDaGFuZ2UpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnO1xuICAgICAgICB9XG4gICAgICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgICAgIC8vIHBhZ2VzIHRvIGFsbG93IGJ1aWxkaW5nIHRoZSBkYXRhIFVSTCBjb3JyZWN0bHlcbiAgICAgICAgbGV0IHJlc29sdmVkQXMgPSBhcztcbiAgICAgICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgICAgICAvLyBwb2ludCBieSBlaXRoZXIgbmV4dC9saW5rIG9yIHJvdXRlci5wdXNoL3JlcGxhY2Ugc28gc3RyaXAgdGhlXG4gICAgICAgIC8vIGJhc2VQYXRoIGZyb20gdGhlIHBhdGhuYW1lIHRvIG1hdGNoIHRoZSBwYWdlcyBkaXIgMS10by0xXG4gICAgICAgIHBhdGhuYW1lMSA9IHBhdGhuYW1lMSA/ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUxKSkgOiBwYXRobmFtZTE7XG4gICAgICAgIGlmIChzaG91bGRSZXNvbHZlSHJlZiAmJiBwYXRobmFtZTEgIT09ICcvX2Vycm9yJykge1xuICAgICAgICAgICAgb3B0aW9ucy5fc2hvdWxkUmVzb2x2ZUhyZWYgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoY2xlYW5lZEFzLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHF1ZXJ5MSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgICAgICwgdGhpcy5sb2NhbGVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlZEFzID0gcmV3cml0ZXNSZXN1bHQuYXNQYXRoO1xuICAgICAgICAgICAgICAgIGlmIChyZXdyaXRlc1Jlc3VsdC5tYXRjaGVkUGFnZSAmJiByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgICAgICAvLyBhbGxvdyB0aGUgY29ycmVjdCBwYWdlIGNodW5rIHRvIGJlIGxvYWRlZFxuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSByZXdyaXRlc1Jlc3VsdC5yZXNvbHZlZEhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhdGhuYW1lMSwgcGFnZXMpO1xuICAgICAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMSkge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTEgPSBwYXJzZWQucGF0aG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IGFkZEJhc2VQYXRoKHBhdGhuYW1lMSk7XG4gICAgICAgICAgICAgICAgICAgIHVybCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJvdXRlID0gKDAsIF9ub3JtYWxpemVUcmFpbGluZ1NsYXNoKS5yZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZTEpO1xuICAgICAgICBpZiAoIWlzTG9jYWxVUkwoYXMpKSB7XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSW52YWxpZCBocmVmOiBcIiR7dXJsfVwiIGFuZCBhczogXCIke2FzfVwiLCByZWNlaXZlZCByZWxhdGl2ZSBocmVmIGFuZCBleHRlcm5hbCBhc2AgKyBgXFxuU2VlIG1vcmUgaW5mbzogaHR0cHM6Ly9uZXh0anMub3JnL2RvY3MvbWVzc2FnZXMvaW52YWxpZC1yZWxhdGl2ZS11cmwtZXh0ZXJuYWwtYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXNvbHZlZEFzKSwgdGhpcy5sb2NhbGUpO1xuICAgICAgICBpZiAoKDAsIF9pc0R5bmFtaWMpLmlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgICAgICAgY29uc3QgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwocmVzb2x2ZWRBcyk7XG4gICAgICAgICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWU7XG4gICAgICAgICAgICBjb25zdCByb3V0ZVJlZ2V4ID0gKDAsIF9yb3V0ZVJlZ2V4KS5nZXRSb3V0ZVJlZ2V4KHJvdXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHJvdXRlTWF0Y2ggPSAoMCwgX3JvdXRlTWF0Y2hlcikuZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpO1xuICAgICAgICAgICAgY29uc3Qgc2hvdWxkSW50ZXJwb2xhdGUgPSByb3V0ZSA9PT0gYXNQYXRobmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGludGVycG9sYXRlZEFzID0gc2hvdWxkSW50ZXJwb2xhdGUgPyBpbnRlcnBvbGF0ZUFzKHJvdXRlLCBhc1BhdGhuYW1lLCBxdWVyeTEpIDoge1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmICghcm91dGVNYXRjaCB8fCBzaG91bGRJbnRlcnBvbGF0ZSAmJiAhaW50ZXJwb2xhdGVkQXMucmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoKHBhcmFtKT0+IXF1ZXJ5MVtwYXJhbV1cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nUGFyYW1zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihgJHtzaG91bGRJbnRlcnBvbGF0ZSA/IGBJbnRlcnBvbGF0aW5nIGhyZWZgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYH0gZmFpbGVkIHRvIG1hbnVhbGx5IHByb3ZpZGUgYCArIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbignLCAnKX0gaW4gdGhlIFxcYGhyZWZcXGAncyBcXGBxdWVyeVxcYGApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcigoc2hvdWxkSW50ZXJwb2xhdGUgPyBgVGhlIHByb3ZpZGVkIFxcYGhyZWZcXGAgKCR7dXJsfSkgdmFsdWUgaXMgbWlzc2luZyBxdWVyeSB2YWx1ZXMgKCR7bWlzc2luZ1BhcmFtcy5qb2luKCcsICcpfSkgdG8gYmUgaW50ZXJwb2xhdGVkIHByb3Blcmx5LiBgIDogYFRoZSBwcm92aWRlZCBcXGBhc1xcYCB2YWx1ZSAoJHthc1BhdGhuYW1lfSkgaXMgaW5jb21wYXRpYmxlIHdpdGggdGhlIFxcYGhyZWZcXGAgdmFsdWUgKCR7cm91dGV9KS4gYCkgKyBgUmVhZCBtb3JlOiBodHRwczovL25leHRqcy5vcmcvZG9jcy9tZXNzYWdlcy8ke3Nob3VsZEludGVycG9sYXRlID8gJ2hyZWYtaW50ZXJwb2xhdGlvbi1mYWlsZWQnIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ31gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHNob3VsZEludGVycG9sYXRlKSB7XG4gICAgICAgICAgICAgICAgYXMgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihPYmplY3QuYXNzaWduKHtcbiAgICAgICAgICAgICAgICB9LCBwYXJzZWRBcywge1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgICAgICAgICBxdWVyeTogb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5MSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKHF1ZXJ5MSwgcm91dGVNYXRjaCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZVN0YXJ0JywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIHJlZiwgcmVmMTtcbiAgICAgICAgICAgIGxldCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhyb3V0ZSwgcGF0aG5hbWUxLCBxdWVyeTEsIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIGxldCB7IGVycm9yICwgcHJvcHMgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgICAgICAgaWYgKChfX05fU1NHIHx8IF9fTl9TU1ApICYmIHByb3BzKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BzLnBhZ2VQcm9wcyAmJiBwcm9wcy5wYWdlUHJvcHMuX19OX1JFRElSRUNUKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gcHJvcHMucGFnZVByb3BzLl9fTl9SRURJUkVDVDtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgZGVzdGluYXRpb24gaXMgaW50ZXJuYWwgKHJlc29sdmVzIHRvIGEgcGFnZSkgYW5kIGF0dGVtcHRcbiAgICAgICAgICAgICAgICAgICAgLy8gY2xpZW50LW5hdmlnYXRpb24gaWYgaXQgaXMgZmFsbGluZyBiYWNrIHRvIGhhcmQgbmF2aWdhdGlvbiBpZlxuICAgICAgICAgICAgICAgICAgICAvLyBpdCdzIG5vdFxuICAgICAgICAgICAgICAgICAgICBpZiAoZGVzdGluYXRpb24uc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJzZWRIcmVmID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcnNlZEhyZWYucGF0aG5hbWUgPSByZXNvbHZlRHluYW1pY1JvdXRlKHBhcnNlZEhyZWYucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgdXJsOiBuZXdVcmwgLCBhczogbmV3QXMgIH0gPSBwcmVwYXJlVXJsQXModGhpcywgZGVzdGluYXRpb24sIGRlc3RpbmF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoYW5nZShtZXRob2QsIG5ld1VybCwgbmV3QXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZGVzdGluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgoKT0+e1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5pc1ByZXZpZXcgPSAhIXByb3BzLl9fTl9QUkVWSUVXO1xuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBTU0cgZGF0YSA0MDRcbiAgICAgICAgICAgICAgICBpZiAocHJvcHMubm90Rm91bmQgPT09IFNTR19EQVRBX05PVF9GT1VORCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm90Rm91bmRSb3V0ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQoJy80MDQnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnLzQwNCc7XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vdEZvdW5kUm91dGUgPSAnL19lcnJvcic7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcm91dGVJbmZvID0gYXdhaXQgdGhpcy5nZXRSb3V0ZUluZm8obm90Rm91bmRSb3V0ZSwgbm90Rm91bmRSb3V0ZSwgcXVlcnkxLCBhcywgcmVzb2x2ZWRBcywge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhbGxvdzogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdiZWZvcmVIaXN0b3J5Q2hhbmdlJywgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShtZXRob2QsIHVybCwgYXMsIG9wdGlvbnMpO1xuICAgICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBhcHBDb21wID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudDtcbiAgICAgICAgICAgICAgICB3aW5kb3cubmV4dC5pc1ByZXJlbmRlcmVkID0gYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJiAhcm91dGVJbmZvLkNvbXBvbmVudC5nZXRJbml0aWFsUHJvcHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5faCAmJiBwYXRobmFtZTEgPT09ICcvX2Vycm9yJyAmJiAoKHJlZiA9IHNlbGYuX19ORVhUX0RBVEFfXy5wcm9wcykgPT09IG51bGwgfHwgcmVmID09PSB2b2lkIDAgPyB2b2lkIDAgOiAocmVmMSA9IHJlZi5wYWdlUHJvcHMpID09PSBudWxsIHx8IHJlZjEgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZjEuc3RhdHVzQ29kZSkgPT09IDUwMCAmJiAocHJvcHMgPT09IG51bGwgfHwgcHJvcHMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHByb3BzLnBhZ2VQcm9wcykpIHtcbiAgICAgICAgICAgICAgICAvLyBlbnN1cmUgc3RhdHVzQ29kZSBpcyBzdGlsbCBjb3JyZWN0IGZvciBzdGF0aWMgNTAwIHBhZ2VcbiAgICAgICAgICAgICAgICAvLyB3aGVuIHVwZGF0aW5nIHF1ZXJ5IGluZm9ybWF0aW9uXG4gICAgICAgICAgICAgICAgcHJvcHMucGFnZVByb3BzLnN0YXR1c0NvZGUgPSA1MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBzaGFsbG93IHJvdXRpbmcgaXMgb25seSBhbGxvd2VkIGZvciBzYW1lIHBhZ2UgVVJMIGNoYW5nZXMuXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkU2hhbGxvd1JvdXRlID0gb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMucm91dGUgPT09IHJvdXRlO1xuICAgICAgICAgICAgdmFyIF9zY3JvbGw7XG4gICAgICAgICAgICBjb25zdCBzaG91bGRTY3JvbGwgPSAoX3Njcm9sbCA9IG9wdGlvbnMuc2Nyb2xsKSAhPT0gbnVsbCAmJiBfc2Nyb2xsICE9PSB2b2lkIDAgPyBfc2Nyb2xsIDogIWlzVmFsaWRTaGFsbG93Um91dGU7XG4gICAgICAgICAgICBjb25zdCByZXNldFNjcm9sbCA9IHNob3VsZFNjcm9sbCA/IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDBcbiAgICAgICAgICAgIH0gOiBudWxsO1xuICAgICAgICAgICAgYXdhaXQgdGhpcy5zZXQocm91dGUsIHBhdGhuYW1lMSwgcXVlcnkxLCBjbGVhbmVkQXMsIHJvdXRlSW5mbywgZm9yY2VkU2Nyb2xsICE9PSBudWxsICYmIGZvcmNlZFNjcm9sbCAhPT0gdm9pZCAwID8gZm9yY2VkU2Nyb2xsIDogcmVzZXRTY3JvbGwpLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlO1xuICAgICAgICAgICAgICAgIGVsc2UgdGhyb3cgZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgZXJyb3IsIGNsZWFuZWRBcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxvY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzLCByb3V0ZVByb3BzKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGNhdGNoIChlcnIxKSB7XG4gICAgICAgICAgICBpZiAoZXJyMS5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aHJvdyBlcnIxO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucyA9IHtcbiAgICB9KSB7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5IGlzIG5vdCBhdmFpbGFibGUuYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cuaGlzdG9yeVttZXRob2RdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtZXRob2QgIT09ICdwdXNoU3RhdGUnIHx8ICgwLCBfdXRpbHMpLmdldFVSTCgpICE9PSBhcykge1xuICAgICAgICAgICAgdGhpcy5fc2hhbGxvdyA9IG9wdGlvbnMuc2hhbGxvdztcbiAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0oe1xuICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICBhcyxcbiAgICAgICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgICAgIF9fTjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBpZHg6IHRoaXMuX2lkeCA9IG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgPyB0aGlzLl9pZHggOiB0aGlzLl9pZHggKyAxXG4gICAgICAgICAgICB9LCAvLyBNb3N0IGJyb3dzZXJzIGN1cnJlbnRseSBpZ25vcmVzIHRoaXMgcGFyYW1ldGVyLCBhbHRob3VnaCB0aGV5IG1heSB1c2UgaXQgaW4gdGhlIGZ1dHVyZS5cbiAgICAgICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9IaXN0b3J5L3JlcGxhY2VTdGF0ZVxuICAgICAgICAgICAgJycsIGFzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBhc3luYyBoYW5kbGVSb3V0ZUluZm9FcnJvcihlcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHJvdXRlUHJvcHMsIGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgICAgIC8vIGJ1YmJsZSB1cCBjYW5jZWxsYXRpb24gZXJyb3JzXG4gICAgICAgICAgICB0aHJvdyBlcnI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCgwLCBfcm91dGVMb2FkZXIpLmlzQXNzZXRFcnJvcihlcnIpIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMsIHJvdXRlUHJvcHMpO1xuICAgICAgICAgICAgLy8gSWYgd2UgY2FuJ3QgbG9hZCB0aGUgcGFnZSBpdCBjb3VsZCBiZSBvbmUgb2YgZm9sbG93aW5nIHJlYXNvbnNcbiAgICAgICAgICAgIC8vICAxLiBQYWdlIGRvZXNuJ3QgZXhpc3RzXG4gICAgICAgICAgICAvLyAgMi4gUGFnZSBkb2VzIGV4aXN0IGluIGEgZGlmZmVyZW50IHpvbmVcbiAgICAgICAgICAgIC8vICAzLiBJbnRlcm5hbCBlcnJvciB3aGlsZSBsb2FkaW5nIHRoZSBwYWdlXG4gICAgICAgICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXM7XG4gICAgICAgICAgICAvLyBDaGFuZ2luZyB0aGUgVVJMIGRvZXNuJ3QgYmxvY2sgZXhlY3V0aW5nIHRoZSBjdXJyZW50IGNvZGUgcGF0aC5cbiAgICAgICAgICAgIC8vIFNvIGxldCdzIHRocm93IGEgY2FuY2VsbGF0aW9uIGVycm9yIHN0b3AgdGhlIHJvdXRpbmcgbG9naWMuXG4gICAgICAgICAgICB0aHJvdyBidWlsZENhbmNlbGxhdGlvbkVycm9yKCk7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxldCBDb21wb25lbnQxO1xuICAgICAgICAgICAgbGV0IHN0eWxlU2hlZXRzO1xuICAgICAgICAgICAgbGV0IHByb3BzO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBDb21wb25lbnQxID09PSAndW5kZWZpbmVkJyB8fCB0eXBlb2Ygc3R5bGVTaGVldHMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgKHsgcGFnZTogQ29tcG9uZW50MSAsIHN0eWxlU2hlZXRzICB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudCgnL19lcnJvcicpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJvdXRlSW5mbyA9IHtcbiAgICAgICAgICAgICAgICBwcm9wcyxcbiAgICAgICAgICAgICAgICBDb21wb25lbnQ6IENvbXBvbmVudDEsXG4gICAgICAgICAgICAgICAgc3R5bGVTaGVldHMsXG4gICAgICAgICAgICAgICAgZXJyLFxuICAgICAgICAgICAgICAgIGVycm9yOiBlcnJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoIXJvdXRlSW5mby5wcm9wcykge1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IGF3YWl0IHRoaXMuZ2V0SW5pdGlhbFByb3BzKENvbXBvbmVudDEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGhuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZ2lwRXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGluIGVycm9yIHBhZ2UgYGdldEluaXRpYWxQcm9wc2A6ICcsIGdpcEVycik7XG4gICAgICAgICAgICAgICAgICAgIHJvdXRlSW5mby5wcm9wcyA9IHtcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcm91dGVJbmZvO1xuICAgICAgICB9IGNhdGNoIChyb3V0ZUluZm9FcnIpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhhbmRsZVJvdXRlSW5mb0Vycm9yKHJvdXRlSW5mb0VyciwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYXN5bmMgZ2V0Um91dGVJbmZvKHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCByZXNvbHZlZEFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBleGlzdGluZ1JvdXRlSW5mbyA9IHRoaXMuY29tcG9uZW50c1tyb3V0ZV07XG4gICAgICAgICAgICBpZiAocm91dGVQcm9wcy5zaGFsbG93ICYmIGV4aXN0aW5nUm91dGVJbmZvICYmIHRoaXMucm91dGUgPT09IHJvdXRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV4aXN0aW5nUm91dGVJbmZvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2FjaGVkUm91dGVJbmZvID0gZXhpc3RpbmdSb3V0ZUluZm8gJiYgJ2luaXRpYWwnIGluIGV4aXN0aW5nUm91dGVJbmZvID8gdW5kZWZpbmVkIDogZXhpc3RpbmdSb3V0ZUluZm87XG4gICAgICAgICAgICBjb25zdCByb3V0ZUluZm8gPSBjYWNoZWRSb3V0ZUluZm8gPyBjYWNoZWRSb3V0ZUluZm8gOiBhd2FpdCB0aGlzLmZldGNoQ29tcG9uZW50KHJvdXRlKS50aGVuKChyZXMpPT4oe1xuICAgICAgICAgICAgICAgICAgICBDb21wb25lbnQ6IHJlcy5wYWdlLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgICAgICAgICBfX05fU1NHOiByZXMubW9kLl9fTl9TU0csXG4gICAgICAgICAgICAgICAgICAgIF9fTl9TU1A6IHJlcy5tb2QuX19OX1NTUFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgeyBDb21wb25lbnQ6IENvbXBvbmVudDEgLCBfX05fU1NHICwgX19OX1NTUCAgfSA9IHJvdXRlSW5mbztcbiAgICAgICAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc1ZhbGlkRWxlbWVudFR5cGUgIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpO1xuICAgICAgICAgICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudDEpKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YUhyZWY7XG4gICAgICAgICAgICBpZiAoX19OX1NTRyB8fCBfX05fU1NQKSB7XG4gICAgICAgICAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24oe1xuICAgICAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlcbiAgICAgICAgICAgICAgICB9KSwgcmVzb2x2ZWRBcywgX19OX1NTRywgdGhpcy5sb2NhbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBhd2FpdCB0aGlzLl9nZXREYXRhKCgpPT5fX05fU1NHID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZikgOiBfX05fU1NQID8gdGhpcy5fZ2V0U2VydmVyRGF0YShkYXRhSHJlZikgOiB0aGlzLmdldEluaXRpYWxQcm9wcyhDb21wb25lbnQxLCAvLyB3ZSBwcm92aWRlIEFwcFRyZWUgbGF0ZXIgc28gdGhpcyBuZWVkcyB0byBiZSBgYW55YFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0aG5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICAgICAgICAgICAgICBsb2NhbGVzOiB0aGlzLmxvY2FsZXMsXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMb2NhbGU6IHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gcHJvcHM7XG4gICAgICAgICAgICB0aGlzLmNvbXBvbmVudHNbcm91dGVdID0gcm91dGVJbmZvO1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlSW5mbztcbiAgICAgICAgfSBjYXRjaCAoZXJyMikge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyMiwgcGF0aG5hbWUsIHF1ZXJ5LCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0KHJvdXRlLCBwYXRobmFtZSwgcXVlcnksIGFzLCBkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5yb3V0ZSA9IHJvdXRlO1xuICAgICAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWU7XG4gICAgICAgIHRoaXMucXVlcnkgPSBxdWVyeTtcbiAgICAgICAgdGhpcy5hc1BhdGggPSBhcztcbiAgICAgICAgcmV0dXJuIHRoaXMubm90aWZ5KGRhdGEsIHJlc2V0U2Nyb2xsKTtcbiAgICB9XG4gICAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqLyBiZWZvcmVQb3BTdGF0ZShjYikge1xuICAgICAgICB0aGlzLl9icHMgPSBjYjtcbiAgICB9XG4gICAgb25seUFIYXNoQ2hhbmdlKGFzKSB7XG4gICAgICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZTtcbiAgICAgICAgY29uc3QgW29sZFVybE5vSGFzaCwgb2xkSGFzaF0gPSB0aGlzLmFzUGF0aC5zcGxpdCgnIycpO1xuICAgICAgICBjb25zdCBbbmV3VXJsTm9IYXNoLCBuZXdIYXNoXSA9IGFzLnNwbGl0KCcjJyk7XG4gICAgICAgIC8vIE1ha2VzIHN1cmUgd2Ugc2Nyb2xsIHRvIHRoZSBwcm92aWRlZCBoYXNoIGlmIHRoZSB1cmwvaGFzaCBhcmUgdGhlIHNhbWVcbiAgICAgICAgaWYgKG5ld0hhc2ggJiYgb2xkVXJsTm9IYXNoID09PSBuZXdVcmxOb0hhc2ggJiYgb2xkSGFzaCA9PT0gbmV3SGFzaCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgICAgICBpZiAob2xkVXJsTm9IYXNoICE9PSBuZXdVcmxOb0hhc2gpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB0aGUgaGFzaCBoYXMgY2hhbmdlZCwgdGhlbiBpdCdzIGEgaGFzaCBvbmx5IGNoYW5nZS5cbiAgICAgICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgICAgICAvLyBsZWF2ZSBoYXNoID09PSAnJyBjYXNlcy4gVGhlIGlkZW50aXR5IGNhc2UgZmFsbHMgdGhyb3VnaFxuICAgICAgICAvLyBhbmQgaXMgdHJlYXRlZCBhcyBhIG5leHQgcmVsb2FkLlxuICAgICAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaDtcbiAgICB9XG4gICAgc2Nyb2xsVG9IYXNoKGFzKSB7XG4gICAgICAgIGNvbnN0IFssIGhhc2hdID0gYXMuc3BsaXQoJyMnKTtcbiAgICAgICAgLy8gU2Nyb2xsIHRvIHRvcCBpZiB0aGUgaGFzaCBpcyBqdXN0IGAjYCB3aXRoIG5vIHZhbHVlIG9yIGAjdG9wYFxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgaWYgKGhhc2ggPT09ICcnIHx8IGhhc2ggPT09ICd0b3AnKSB7XG4gICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICAgICAgY29uc3QgaWRFbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGhhc2gpO1xuICAgICAgICBpZiAoaWRFbCkge1xuICAgICAgICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gZWxlbWVudCB3aXRoIHRoZSBpZCwgd2UgY2hlY2sgdGhlIGBuYW1lYCBwcm9wZXJ0eVxuICAgICAgICAvLyBUbyBtaXJyb3IgYnJvd3NlcnNcbiAgICAgICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF07XG4gICAgICAgIGlmIChuYW1lRWwpIHtcbiAgICAgICAgICAgIG5hbWVFbC5zY3JvbGxJbnRvVmlldygpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHVybElzTmV3KGFzUGF0aCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hc1BhdGggIT09IGFzUGF0aDtcbiAgICB9XG4gICAgLyoqXG4gICAqIFByZWZldGNoIHBhZ2UgY29kZSwgeW91IG1heSB3YWl0IGZvciB0aGUgZGF0YSBkdXJpbmcgcGFnZSByZW5kZXJpbmcuXG4gICAqIFRoaXMgZmVhdHVyZSBvbmx5IHdvcmtzIGluIHByb2R1Y3Rpb24hXG4gICAqIEBwYXJhbSB1cmwgdGhlIGhyZWYgb2YgcHJlZmV0Y2hlZCBwYWdlXG4gICAqIEBwYXJhbSBhc1BhdGggdGhlIGFzIHBhdGggb2YgdGhlIHByZWZldGNoZWQgcGFnZVxuICAgKi8gYXN5bmMgcHJlZmV0Y2godXJsLCBhc1BhdGggPSB1cmwsIG9wdGlvbnMgPSB7XG4gICAgfSkge1xuICAgICAgICBsZXQgcGFyc2VkID0gKDAsIF9wYXJzZVJlbGF0aXZlVXJsKS5wYXJzZVJlbGF0aXZlVXJsKHVybCk7XG4gICAgICAgIGxldCB7IHBhdGhuYW1lOiBwYXRobmFtZTIgIH0gPSBwYXJzZWQ7XG4gICAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5sb2NhbGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhdGhuYW1lMiwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgICAgICBsZXQgcGFyc2VkQXMgPSAoMCwgX3BhcnNlUmVsYXRpdmVVcmwpLnBhcnNlUmVsYXRpdmVVcmwoYXNQYXRoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gKDAsIF9ub3JtYWxpemVMb2NhbGVQYXRoKS5ub3JtYWxpemVMb2NhbGVQYXRoKHBhcnNlZEFzLnBhdGhuYW1lLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgICAgIHBhcnNlZEFzLnBhdGhuYW1lID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlO1xuICAgICAgICAgICAgICAgIGFzUGF0aCA9ICgwLCBfdXRpbHMpLmZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYWdlcyA9IGF3YWl0IHRoaXMucGFnZUxvYWRlci5nZXRQYWdlTGlzdCgpO1xuICAgICAgICBsZXQgcmVzb2x2ZWRBcyA9IGFzUGF0aDtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9IQVNfUkVXUklURVMgJiYgYXNQYXRoLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgbGV0IHJld3JpdGVzO1xuICAgICAgICAgICAgKHsgX19yZXdyaXRlczogcmV3cml0ZXMgIH0gPSBhd2FpdCAoMCwgX3JvdXRlTG9hZGVyKS5nZXRDbGllbnRCdWlsZE1hbmlmZXN0KCkpO1xuICAgICAgICAgICAgY29uc3QgcmV3cml0ZXNSZXN1bHQgPSAoMCwgX3Jlc29sdmVSZXdyaXRlcykuZGVmYXVsdChhZGRCYXNlUGF0aChhZGRMb2NhbGUoYXNQYXRoLCB0aGlzLmxvY2FsZSkpLCBwYWdlcywgcmV3cml0ZXMsIHBhcnNlZC5xdWVyeSwgKHApPT5yZXNvbHZlRHluYW1pY1JvdXRlKHAsIHBhZ2VzKVxuICAgICAgICAgICAgLCB0aGlzLmxvY2FsZXMpO1xuICAgICAgICAgICAgcmVzb2x2ZWRBcyA9IGRlbExvY2FsZShkZWxCYXNlUGF0aChyZXdyaXRlc1Jlc3VsdC5hc1BhdGgpLCB0aGlzLmxvY2FsZSk7XG4gICAgICAgICAgICBpZiAocmV3cml0ZXNSZXN1bHQubWF0Y2hlZFBhZ2UgJiYgcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBkaXJlY3RseSBtYXRjaGVzIGEgcGFnZSB3ZSBuZWVkIHRvIHVwZGF0ZSB0aGUgaHJlZiB0b1xuICAgICAgICAgICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgICAgICAgICAgcGF0aG5hbWUyID0gcmV3cml0ZXNSZXN1bHQucmVzb2x2ZWRIcmVmO1xuICAgICAgICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lMjtcbiAgICAgICAgICAgICAgICB1cmwgPSAoMCwgX3V0aWxzKS5mb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcGFyc2VkLnBhdGhuYW1lID0gcmVzb2x2ZUR5bmFtaWNSb3V0ZShwYXJzZWQucGF0aG5hbWUsIHBhZ2VzKTtcbiAgICAgICAgICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lMikge1xuICAgICAgICAgICAgICAgIHBhdGhuYW1lMiA9IHBhcnNlZC5wYXRobmFtZTtcbiAgICAgICAgICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZTI7XG4gICAgICAgICAgICAgICAgdXJsID0gKDAsIF91dGlscykuZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByb3V0ZSA9ICgwLCBfbm9ybWFsaXplVHJhaWxpbmdTbGFzaCkucmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUyKTtcbiAgICAgICAgLy8gUHJlZmV0Y2ggaXMgbm90IHN1cHBvcnRlZCBpbiBkZXZlbG9wbWVudCBtb2RlIGJlY2F1c2UgaXQgd291bGQgdHJpZ2dlciBvbi1kZW1hbmQtZW50cmllc1xuICAgICAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgIHRoaXMucGFnZUxvYWRlci5faXNTc2cocm91dGUpLnRoZW4oKGlzU3NnKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBpc1NzZyA/IHRoaXMuX2dldFN0YXRpY0RhdGEodGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKHVybCwgcmVzb2x2ZWRBcywgdHJ1ZSwgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUpKSA6IGZhbHNlO1xuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICB0aGlzLnBhZ2VMb2FkZXJbb3B0aW9ucy5wcmlvcml0eSA/ICdsb2FkUGFnZScgOiAncHJlZmV0Y2gnXShyb3V0ZSksIFxuICAgICAgICBdKTtcbiAgICB9XG4gICAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGUpIHtcbiAgICAgICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlO1xuICAgICAgICBjb25zdCBjYW5jZWwgPSB0aGlzLmNsYyA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBjb21wb25lbnRSZXN1bHQgPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIubG9hZFBhZ2Uocm91dGUpO1xuICAgICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgICAgICBjb25zdCBlcnJvciA9IG5ldyBFcnJvcihgQWJvcnQgZmV0Y2hpbmcgY29tcG9uZW50IGZvciByb3V0ZTogXCIke3JvdXRlfVwiYCk7XG4gICAgICAgICAgICBlcnJvci5jYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgICAgICAgIHRoaXMuY2xjID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50UmVzdWx0O1xuICAgIH1cbiAgICBfZ2V0RGF0YShmbikge1xuICAgICAgICBsZXQgY2FuY2VsbGVkID0gZmFsc2U7XG4gICAgICAgIGNvbnN0IGNhbmNlbCA9ICgpPT57XG4gICAgICAgICAgICBjYW5jZWxsZWQgPSB0cnVlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmNsYyA9IGNhbmNlbDtcbiAgICAgICAgcmV0dXJuIGZuKCkudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycjIgPSBuZXcgRXJyb3IoJ0xvYWRpbmcgaW5pdGlhbCBwcm9wcyBjYW5jZWxsZWQnKTtcbiAgICAgICAgICAgICAgICBlcnIyLmNhbmNlbGxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFN0YXRpY0RhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiBjYWNoZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicgJiYgIXRoaXMuaXNQcmV2aWV3ICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKT0+e1xuICAgICAgICAgICAgdGhpcy5zZGNbY2FjaGVLZXldID0gZGF0YTtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgX2dldFNlcnZlckRhdGEoZGF0YUhyZWYpIHtcbiAgICAgICAgY29uc3QgeyBocmVmOiByZXNvdXJjZUtleSAgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHRoaXMuc2RyW3Jlc291cmNlS2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2RyW3Jlc291cmNlS2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5zZHJbcmVzb3VyY2VLZXldID0gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcikudGhlbigoZGF0YSk9PntcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNkcltyZXNvdXJjZUtleV07XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfSkuY2F0Y2goKGVycjIpPT57XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5zZHJbcmVzb3VyY2VLZXldO1xuICAgICAgICAgICAgdGhyb3cgZXJyMjtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEluaXRpYWxQcm9wcyhDb21wb25lbnQsIGN0eCkge1xuICAgICAgICBjb25zdCB7IENvbXBvbmVudDogQXBwMSAgfSA9IHRoaXMuY29tcG9uZW50c1snL19hcHAnXTtcbiAgICAgICAgY29uc3QgQXBwVHJlZSA9IHRoaXMuX3dyYXBBcHAoQXBwMSk7XG4gICAgICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZTtcbiAgICAgICAgcmV0dXJuICgwLCBfdXRpbHMpLmxvYWRHZXRJbml0aWFsUHJvcHMoQXBwMSwge1xuICAgICAgICAgICAgQXBwVHJlZSxcbiAgICAgICAgICAgIENvbXBvbmVudCxcbiAgICAgICAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgICAgICAgIGN0eFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgYWJvcnRDb21wb25lbnRMb2FkKGFzLCByb3V0ZVByb3BzKSB7XG4gICAgICAgIGlmICh0aGlzLmNsYykge1xuICAgICAgICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdyb3V0ZUNoYW5nZUVycm9yJywgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpLCBhcywgcm91dGVQcm9wcyk7XG4gICAgICAgICAgICB0aGlzLmNsYygpO1xuICAgICAgICAgICAgdGhpcy5jbGMgPSBudWxsO1xuICAgICAgICB9XG4gICAgfVxuICAgIG5vdGlmeShkYXRhLCByZXNldFNjcm9sbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdWIoZGF0YSwgdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudCwgcmVzZXRTY3JvbGwpO1xuICAgIH1cbn1cblJvdXRlci5ldmVudHMgPSAoMCwgX21pdHQpLmRlZmF1bHQoKTtcbmV4cG9ydHMuZGVmYXVsdCA9IFJvdXRlcjtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91dGVyLmpzLm1hcCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9kaXN0L2NsaWVudC9saW5rJylcbiIsIi8qKiBAbGljZW5zZSBSZWFjdCB2MTcuMC4yXG4gKiByZWFjdC1pcy5kZXZlbG9wbWVudC5qc1xuICpcbiAqIENvcHlyaWdodCAoYykgRmFjZWJvb2ssIEluYy4gYW5kIGl0cyBhZmZpbGlhdGVzLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLlxuICovXG5cbid1c2Ugc3RyaWN0JztcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAoZnVuY3Rpb24oKSB7XG4ndXNlIHN0cmljdCc7XG5cbi8vIEFUVEVOVElPTlxuLy8gV2hlbiBhZGRpbmcgbmV3IHN5bWJvbHMgdG8gdGhpcyBmaWxlLFxuLy8gUGxlYXNlIGNvbnNpZGVyIGFsc28gYWRkaW5nIHRvICdyZWFjdC1kZXZ0b29scy1zaGFyZWQvc3JjL2JhY2tlbmQvUmVhY3RTeW1ib2xzJ1xuLy8gVGhlIFN5bWJvbCB1c2VkIHRvIHRhZyB0aGUgUmVhY3RFbGVtZW50LWxpa2UgdHlwZXMuIElmIHRoZXJlIGlzIG5vIG5hdGl2ZSBTeW1ib2xcbi8vIG5vciBwb2x5ZmlsbCwgdGhlbiBhIHBsYWluIG51bWJlciBpcyB1c2VkIGZvciBwZXJmb3JtYW5jZS5cbnZhciBSRUFDVF9FTEVNRU5UX1RZUEUgPSAweGVhYzc7XG52YXIgUkVBQ1RfUE9SVEFMX1RZUEUgPSAweGVhY2E7XG52YXIgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IDB4ZWFjYjtcbnZhciBSRUFDVF9TVFJJQ1RfTU9ERV9UWVBFID0gMHhlYWNjO1xudmFyIFJFQUNUX1BST0ZJTEVSX1RZUEUgPSAweGVhZDI7XG52YXIgUkVBQ1RfUFJPVklERVJfVFlQRSA9IDB4ZWFjZDtcbnZhciBSRUFDVF9DT05URVhUX1RZUEUgPSAweGVhY2U7XG52YXIgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSA9IDB4ZWFkMDtcbnZhciBSRUFDVF9TVVNQRU5TRV9UWVBFID0gMHhlYWQxO1xudmFyIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IDB4ZWFkODtcbnZhciBSRUFDVF9NRU1PX1RZUEUgPSAweGVhZDM7XG52YXIgUkVBQ1RfTEFaWV9UWVBFID0gMHhlYWQ0O1xudmFyIFJFQUNUX0JMT0NLX1RZUEUgPSAweGVhZDk7XG52YXIgUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUgPSAweGVhZGE7XG52YXIgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IDB4ZWFkNTtcbnZhciBSRUFDVF9TQ09QRV9UWVBFID0gMHhlYWQ3O1xudmFyIFJFQUNUX09QQVFVRV9JRF9UWVBFID0gMHhlYWUwO1xudmFyIFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFID0gMHhlYWUxO1xudmFyIFJFQUNUX09GRlNDUkVFTl9UWVBFID0gMHhlYWUyO1xudmFyIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IDB4ZWFlMztcblxuaWYgKHR5cGVvZiBTeW1ib2wgPT09ICdmdW5jdGlvbicgJiYgU3ltYm9sLmZvcikge1xuICB2YXIgc3ltYm9sRm9yID0gU3ltYm9sLmZvcjtcbiAgUkVBQ1RfRUxFTUVOVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5lbGVtZW50Jyk7XG4gIFJFQUNUX1BPUlRBTF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5wb3J0YWwnKTtcbiAgUkVBQ1RfRlJBR01FTlRfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnJhZ21lbnQnKTtcbiAgUkVBQ1RfU1RSSUNUX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3RyaWN0X21vZGUnKTtcbiAgUkVBQ1RfUFJPRklMRVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvZmlsZXInKTtcbiAgUkVBQ1RfUFJPVklERVJfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QucHJvdmlkZXInKTtcbiAgUkVBQ1RfQ09OVEVYVF9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5jb250ZXh0Jyk7XG4gIFJFQUNUX0ZPUldBUkRfUkVGX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmZvcndhcmRfcmVmJyk7XG4gIFJFQUNUX1NVU1BFTlNFX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LnN1c3BlbnNlJyk7XG4gIFJFQUNUX1NVU1BFTlNFX0xJU1RfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc3VzcGVuc2VfbGlzdCcpO1xuICBSRUFDVF9NRU1PX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm1lbW8nKTtcbiAgUkVBQ1RfTEFaWV9UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5sYXp5Jyk7XG4gIFJFQUNUX0JMT0NLX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0LmJsb2NrJyk7XG4gIFJFQUNUX1NFUlZFUl9CTE9DS19UWVBFID0gc3ltYm9sRm9yKCdyZWFjdC5zZXJ2ZXIuYmxvY2snKTtcbiAgUkVBQ1RfRlVOREFNRU5UQUxfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZnVuZGFtZW50YWwnKTtcbiAgUkVBQ1RfU0NPUEVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3Quc2NvcGUnKTtcbiAgUkVBQ1RfT1BBUVVFX0lEX1RZUEUgPSBzeW1ib2xGb3IoJ3JlYWN0Lm9wYXF1ZS5pZCcpO1xuICBSRUFDVF9ERUJVR19UUkFDSU5HX01PREVfVFlQRSA9IHN5bWJvbEZvcigncmVhY3QuZGVidWdfdHJhY2VfbW9kZScpO1xuICBSRUFDVF9PRkZTQ1JFRU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3Qub2Zmc2NyZWVuJyk7XG4gIFJFQUNUX0xFR0FDWV9ISURERU5fVFlQRSA9IHN5bWJvbEZvcigncmVhY3QubGVnYWN5X2hpZGRlbicpO1xufVxuXG4vLyBGaWx0ZXIgY2VydGFpbiBET00gYXR0cmlidXRlcyAoZS5nLiBzcmMsIGhyZWYpIGlmIHRoZWlyIHZhbHVlcyBhcmUgZW1wdHkgc3RyaW5ncy5cblxudmFyIGVuYWJsZVNjb3BlQVBJID0gZmFsc2U7IC8vIEV4cGVyaW1lbnRhbCBDcmVhdGUgRXZlbnQgSGFuZGxlIEFQSS5cblxuZnVuY3Rpb24gaXNWYWxpZEVsZW1lbnRUeXBlKHR5cGUpIHtcbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyB8fCB0eXBlb2YgdHlwZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiB0cnVlO1xuICB9IC8vIE5vdGU6IHR5cGVvZiBtaWdodCBiZSBvdGhlciB0aGFuICdzeW1ib2wnIG9yICdudW1iZXInIChlLmcuIGlmIGl0J3MgYSBwb2x5ZmlsbCkuXG5cblxuICBpZiAodHlwZSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9QUk9GSUxFUl9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX0RFQlVHX1RSQUNJTkdfTU9ERV9UWVBFIHx8IHR5cGUgPT09IFJFQUNUX1NUUklDVF9NT0RFX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRSB8fCB0eXBlID09PSBSRUFDVF9TVVNQRU5TRV9MSVNUX1RZUEUgfHwgdHlwZSA9PT0gUkVBQ1RfTEVHQUNZX0hJRERFTl9UWVBFIHx8IGVuYWJsZVNjb3BlQVBJICkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB0eXBlID09PSAnb2JqZWN0JyAmJiB0eXBlICE9PSBudWxsKSB7XG4gICAgaWYgKHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0xBWllfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9NRU1PX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfUFJPVklERVJfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9DT05URVhUX1RZUEUgfHwgdHlwZS4kJHR5cGVvZiA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRSB8fCB0eXBlLiQkdHlwZW9mID09PSBSRUFDVF9GVU5EQU1FTlRBTF9UWVBFIHx8IHR5cGUuJCR0eXBlb2YgPT09IFJFQUNUX0JMT0NLX1RZUEUgfHwgdHlwZVswXSA9PT0gUkVBQ1RfU0VSVkVSX0JMT0NLX1RZUEUpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gdHlwZU9mKG9iamVjdCkge1xuICBpZiAodHlwZW9mIG9iamVjdCA9PT0gJ29iamVjdCcgJiYgb2JqZWN0ICE9PSBudWxsKSB7XG4gICAgdmFyICQkdHlwZW9mID0gb2JqZWN0LiQkdHlwZW9mO1xuXG4gICAgc3dpdGNoICgkJHR5cGVvZikge1xuICAgICAgY2FzZSBSRUFDVF9FTEVNRU5UX1RZUEU6XG4gICAgICAgIHZhciB0eXBlID0gb2JqZWN0LnR5cGU7XG5cbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgY2FzZSBSRUFDVF9GUkFHTUVOVF9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfUFJPRklMRVJfVFlQRTpcbiAgICAgICAgICBjYXNlIFJFQUNUX1NUUklDVF9NT0RFX1RZUEU6XG4gICAgICAgICAgY2FzZSBSRUFDVF9TVVNQRU5TRV9UWVBFOlxuICAgICAgICAgIGNhc2UgUkVBQ1RfU1VTUEVOU0VfTElTVF9UWVBFOlxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XG5cbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgdmFyICQkdHlwZW9mVHlwZSA9IHR5cGUgJiYgdHlwZS4kJHR5cGVvZjtcblxuICAgICAgICAgICAgc3dpdGNoICgkJHR5cGVvZlR5cGUpIHtcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9DT05URVhUX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTpcbiAgICAgICAgICAgICAgY2FzZSBSRUFDVF9MQVpZX1RZUEU6XG4gICAgICAgICAgICAgIGNhc2UgUkVBQ1RfTUVNT19UWVBFOlxuICAgICAgICAgICAgICBjYXNlIFJFQUNUX1BST1ZJREVSX1RZUEU6XG4gICAgICAgICAgICAgICAgcmV0dXJuICQkdHlwZW9mVHlwZTtcblxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgIGNhc2UgUkVBQ1RfUE9SVEFMX1RZUEU6XG4gICAgICAgIHJldHVybiAkJHR5cGVvZjtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdW5kZWZpbmVkO1xufVxudmFyIENvbnRleHRDb25zdW1lciA9IFJFQUNUX0NPTlRFWFRfVFlQRTtcbnZhciBDb250ZXh0UHJvdmlkZXIgPSBSRUFDVF9QUk9WSURFUl9UWVBFO1xudmFyIEVsZW1lbnQgPSBSRUFDVF9FTEVNRU5UX1RZUEU7XG52YXIgRm9yd2FyZFJlZiA9IFJFQUNUX0ZPUldBUkRfUkVGX1RZUEU7XG52YXIgRnJhZ21lbnQgPSBSRUFDVF9GUkFHTUVOVF9UWVBFO1xudmFyIExhenkgPSBSRUFDVF9MQVpZX1RZUEU7XG52YXIgTWVtbyA9IFJFQUNUX01FTU9fVFlQRTtcbnZhciBQb3J0YWwgPSBSRUFDVF9QT1JUQUxfVFlQRTtcbnZhciBQcm9maWxlciA9IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG52YXIgU3RyaWN0TW9kZSA9IFJFQUNUX1NUUklDVF9NT0RFX1RZUEU7XG52YXIgU3VzcGVuc2UgPSBSRUFDVF9TVVNQRU5TRV9UWVBFO1xudmFyIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlID0gZmFsc2U7XG52YXIgaGFzV2FybmVkQWJvdXREZXByZWNhdGVkSXNDb25jdXJyZW50TW9kZSA9IGZhbHNlOyAvLyBBc3luY01vZGUgc2hvdWxkIGJlIGRlcHJlY2F0ZWRcblxuZnVuY3Rpb24gaXNBc3luY01vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQXN5bmNNb2RlKSB7XG4gICAgICBoYXNXYXJuZWRBYm91dERlcHJlY2F0ZWRJc0FzeW5jTW9kZSA9IHRydWU7IC8vIFVzaW5nIGNvbnNvbGVbJ3dhcm4nXSB0byBldmFkZSBCYWJlbCBhbmQgRVNMaW50XG5cbiAgICAgIGNvbnNvbGVbJ3dhcm4nXSgnVGhlIFJlYWN0SXMuaXNBc3luY01vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29uY3VycmVudE1vZGUob2JqZWN0KSB7XG4gIHtcbiAgICBpZiAoIWhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUpIHtcbiAgICAgIGhhc1dhcm5lZEFib3V0RGVwcmVjYXRlZElzQ29uY3VycmVudE1vZGUgPSB0cnVlOyAvLyBVc2luZyBjb25zb2xlWyd3YXJuJ10gdG8gZXZhZGUgQmFiZWwgYW5kIEVTTGludFxuXG4gICAgICBjb25zb2xlWyd3YXJuJ10oJ1RoZSBSZWFjdElzLmlzQ29uY3VycmVudE1vZGUoKSBhbGlhcyBoYXMgYmVlbiBkZXByZWNhdGVkLCAnICsgJ2FuZCB3aWxsIGJlIHJlbW92ZWQgaW4gUmVhY3QgMTgrLicpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dENvbnN1bWVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX0NPTlRFWFRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzQ29udGV4dFByb3ZpZGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST1ZJREVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QgIT09IG51bGwgJiYgb2JqZWN0LiQkdHlwZW9mID09PSBSRUFDVF9FTEVNRU5UX1RZUEU7XG59XG5mdW5jdGlvbiBpc0ZvcndhcmRSZWYob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRk9SV0FSRF9SRUZfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzRnJhZ21lbnQob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfRlJBR01FTlRfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzTGF6eShvYmplY3QpIHtcbiAgcmV0dXJuIHR5cGVPZihvYmplY3QpID09PSBSRUFDVF9MQVpZX1RZUEU7XG59XG5mdW5jdGlvbiBpc01lbW8ob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfTUVNT19UWVBFO1xufVxuZnVuY3Rpb24gaXNQb3J0YWwob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfUE9SVEFMX1RZUEU7XG59XG5mdW5jdGlvbiBpc1Byb2ZpbGVyKG9iamVjdCkge1xuICByZXR1cm4gdHlwZU9mKG9iamVjdCkgPT09IFJFQUNUX1BST0ZJTEVSX1RZUEU7XG59XG5mdW5jdGlvbiBpc1N0cmljdE1vZGUob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1RSSUNUX01PREVfVFlQRTtcbn1cbmZ1bmN0aW9uIGlzU3VzcGVuc2Uob2JqZWN0KSB7XG4gIHJldHVybiB0eXBlT2Yob2JqZWN0KSA9PT0gUkVBQ1RfU1VTUEVOU0VfVFlQRTtcbn1cblxuZXhwb3J0cy5Db250ZXh0Q29uc3VtZXIgPSBDb250ZXh0Q29uc3VtZXI7XG5leHBvcnRzLkNvbnRleHRQcm92aWRlciA9IENvbnRleHRQcm92aWRlcjtcbmV4cG9ydHMuRWxlbWVudCA9IEVsZW1lbnQ7XG5leHBvcnRzLkZvcndhcmRSZWYgPSBGb3J3YXJkUmVmO1xuZXhwb3J0cy5GcmFnbWVudCA9IEZyYWdtZW50O1xuZXhwb3J0cy5MYXp5ID0gTGF6eTtcbmV4cG9ydHMuTWVtbyA9IE1lbW87XG5leHBvcnRzLlBvcnRhbCA9IFBvcnRhbDtcbmV4cG9ydHMuUHJvZmlsZXIgPSBQcm9maWxlcjtcbmV4cG9ydHMuU3RyaWN0TW9kZSA9IFN0cmljdE1vZGU7XG5leHBvcnRzLlN1c3BlbnNlID0gU3VzcGVuc2U7XG5leHBvcnRzLmlzQXN5bmNNb2RlID0gaXNBc3luY01vZGU7XG5leHBvcnRzLmlzQ29uY3VycmVudE1vZGUgPSBpc0NvbmN1cnJlbnRNb2RlO1xuZXhwb3J0cy5pc0NvbnRleHRDb25zdW1lciA9IGlzQ29udGV4dENvbnN1bWVyO1xuZXhwb3J0cy5pc0NvbnRleHRQcm92aWRlciA9IGlzQ29udGV4dFByb3ZpZGVyO1xuZXhwb3J0cy5pc0VsZW1lbnQgPSBpc0VsZW1lbnQ7XG5leHBvcnRzLmlzRm9yd2FyZFJlZiA9IGlzRm9yd2FyZFJlZjtcbmV4cG9ydHMuaXNGcmFnbWVudCA9IGlzRnJhZ21lbnQ7XG5leHBvcnRzLmlzTGF6eSA9IGlzTGF6eTtcbmV4cG9ydHMuaXNNZW1vID0gaXNNZW1vO1xuZXhwb3J0cy5pc1BvcnRhbCA9IGlzUG9ydGFsO1xuZXhwb3J0cy5pc1Byb2ZpbGVyID0gaXNQcm9maWxlcjtcbmV4cG9ydHMuaXNTdHJpY3RNb2RlID0gaXNTdHJpY3RNb2RlO1xuZXhwb3J0cy5pc1N1c3BlbnNlID0gaXNTdXNwZW5zZTtcbmV4cG9ydHMuaXNWYWxpZEVsZW1lbnRUeXBlID0gaXNWYWxpZEVsZW1lbnRUeXBlO1xuZXhwb3J0cy50eXBlT2YgPSB0eXBlT2Y7XG4gIH0pKCk7XG59XG4iLCIndXNlIHN0cmljdCc7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMucHJvZHVjdGlvbi5taW4uanMnKTtcbn0gZWxzZSB7XG4gIG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9janMvcmVhY3QtaXMuZGV2ZWxvcG1lbnQuanMnKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBlbW90aW9uL2hhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGVtb3Rpb24vd2Vhay1tZW1vaXplXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBncmFwaHFsLXRvb2xzL3NjaGVtYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAZ3JhcGhxbC10cy9zY2hlbWFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRoLWNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGdyYXBocWwtdHMvc2NoZW1hL2FwaS13aXRob3V0LWNvbnRleHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLW5leHQva2V5c3RvbmUvX19faW50ZXJuYWwtZG8tbm90LXVzZS13aWxsLWJyZWFrLWluLXBhdGNoL2FkbWluLXVpL3BhZ2VzL0FwcFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvYnV0dG9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9jb3JlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9maWVsZHNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2ljb25zL2ljb25zL0FsZXJ0VHJpYW5nbGVJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9DaGV2cm9uUmlnaHRJY29uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9pY29ucy9pY29ucy9Nb3JlSG9yaXpvbnRhbEljb25cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL2xvYWRpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL21vZGFsc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvbm90aWNlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9wb3BvdmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBrZXlzdG9uZS11aS9zZWdtZW50ZWQtY29udHJvbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAa2V5c3RvbmUtdWkvdG9hc3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGtleXN0b25lLXVpL3Rvb2x0aXBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXBvbGxvLXVwbG9hZC1jbGllbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGF0ZS1mbnNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZGVjaW1hbC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmYXN0LWRlZXAtZXF1YWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZ3JhcGhxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXR5cGUtanNvblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJncmFwaHFsLXVwbG9hZC9wdWJsaWMvR3JhcGhRTFVwbG9hZC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpbnRlcnNlY3Rpb24tb2JzZXJ2ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvbWl0dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvZ2V0LWFzc2V0LXBhdGgtZnJvbS1yb3V0ZS5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvaXMtZHluYW1pYy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLmpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvZGlzdC9zaGFyZWQvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtbWF0Y2hlci5qc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L2Rpc3Qvc2hhcmVkL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXguanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L3NoYXJlZC9saWIvdXRpbHMuanNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXVpZFwiKTsiLCIvKiAoaWdub3JlZCkgKi8iXSwibmFtZXMiOlsiZ2V0QXBwIiwidmlldzAiLCJ2aWV3MSIsInZpZXcyIiwidmlldzMiLCJ2aWV3NCIsImFkbWluQ29uZmlnIiwibGF6eU1ldGFkYXRhUXVlcnkiLCJraW5kIiwiZGVmaW5pdGlvbnMiLCJvcGVyYXRpb24iLCJzZWxlY3Rpb25TZXQiLCJzZWxlY3Rpb25zIiwibmFtZSIsInZhbHVlIiwibG9jIiwic3RhcnQiLCJlbmQiLCJhcmd1bWVudHMiLCJkaXJlY3RpdmVzIiwiZmllbGRWaWV3cyIsImFkbWluTWV0YUhhc2giLCJhcGlQYXRoIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJleHBvcnRzIiwiZGVmYXVsdCIsIl9yZWFjdCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX3JvdXRlciIsIl9yb3V0ZXIxIiwiX3VzZUludGVyc2VjdGlvbiIsIm9iaiIsIl9fZXNNb2R1bGUiLCJwcmVmZXRjaGVkIiwicHJlZmV0Y2giLCJyb3V0ZXIiLCJocmVmIiwiYXMiLCJvcHRpb25zIiwiaXNMb2NhbFVSTCIsImNhdGNoIiwiZXJyIiwiY3VyTG9jYWxlIiwibG9jYWxlIiwiaXNNb2RpZmllZEV2ZW50IiwiZXZlbnQiLCJ0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwibWV0YUtleSIsImN0cmxLZXkiLCJzaGlmdEtleSIsImFsdEtleSIsIm5hdGl2ZUV2ZW50Iiwid2hpY2giLCJsaW5rQ2xpY2tlZCIsImUiLCJyZXBsYWNlIiwic2hhbGxvdyIsInNjcm9sbCIsIm5vZGVOYW1lIiwicHJldmVudERlZmF1bHQiLCJpbmRleE9mIiwiTGluayIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiYXJncyIsIkVycm9yIiwia2V5IiwiZXhwZWN0ZWQiLCJhY3R1YWwiLCJyZXF1aXJlZFByb3BzR3VhcmQiLCJyZXF1aXJlZFByb3BzIiwia2V5cyIsImZvckVhY2giLCJfIiwib3B0aW9uYWxQcm9wc0d1YXJkIiwicGFzc0hyZWYiLCJvcHRpb25hbFByb3BzIiwidmFsVHlwZSIsImhhc1dhcm5lZCIsInVzZVJlZiIsImN1cnJlbnQiLCJjb25zb2xlIiwid2FybiIsInAiLCJ1c2VSb3V0ZXIiLCJ1c2VNZW1vIiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZWRBcyIsInJlc29sdmVIcmVmIiwiY2hpbGRyZW4iLCJjcmVhdGVFbGVtZW50IiwiY2hpbGQiLCJDaGlsZHJlbiIsIm9ubHkiLCJjaGlsZFJlZiIsInJlZiIsInNldEludGVyc2VjdGlvblJlZiIsImlzVmlzaWJsZSIsInVzZUludGVyc2VjdGlvbiIsInJvb3RNYXJnaW4iLCJzZXRSZWYiLCJ1c2VDYWxsYmFjayIsImVsIiwidXNlRWZmZWN0Iiwic2hvdWxkUHJlZmV0Y2giLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwib25DbGljayIsImRlZmF1bHRQcmV2ZW50ZWQiLCJvbk1vdXNlRW50ZXIiLCJwcmlvcml0eSIsInR5cGUiLCJsb2NhbGVEb21haW4iLCJpc0xvY2FsZURvbWFpbiIsImdldERvbWFpbkxvY2FsZSIsImxvY2FsZXMiLCJkb21haW5Mb2NhbGVzIiwiYWRkQmFzZVBhdGgiLCJhZGRMb2NhbGUiLCJkZWZhdWx0TG9jYWxlIiwiY2xvbmVFbGVtZW50IiwiX2RlZmF1bHQiLCJyZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicGF0aCIsImVuZHNXaXRoIiwic2xpY2UiLCJwcm9jZXNzIiwiZW52IiwiX19ORVhUX1RSQUlMSU5HX1NMQVNIIiwidGVzdCIsInJlcXVlc3RJZGxlQ2FsbGJhY2siLCJjYW5jZWxJZGxlQ2FsbGJhY2siLCJzZWxmIiwiYmluZCIsIndpbmRvdyIsImNiIiwiRGF0ZSIsIm5vdyIsInNldFRpbWVvdXQiLCJkaWRUaW1lb3V0IiwidGltZVJlbWFpbmluZyIsIk1hdGgiLCJtYXgiLCJpZCIsImNsZWFyVGltZW91dCIsIm1hcmtBc3NldEVycm9yIiwiaXNBc3NldEVycm9yIiwiZ2V0Q2xpZW50QnVpbGRNYW5pZmVzdCIsImNyZWF0ZVJvdXRlTG9hZGVyIiwiX2dldEFzc2V0UGF0aEZyb21Sb3V0ZSIsIl9yZXF1ZXN0SWRsZUNhbGxiYWNrIiwiTVNfTUFYX0lETEVfREVMQVkiLCJ3aXRoRnV0dXJlIiwibWFwIiwiZ2VuZXJhdG9yIiwiZW50cnkiLCJnZXQiLCJmdXR1cmUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlc29sdmVyIiwicHJvbSIsInNldCIsInRoZW4iLCJoYXNQcmVmZXRjaCIsImxpbmsiLCJkb2N1bWVudCIsIk1TSW5wdXRNZXRob2RDb250ZXh0IiwiZG9jdW1lbnRNb2RlIiwicmVsTGlzdCIsInN1cHBvcnRzIiwiY2FuUHJlZmV0Y2giLCJwcmVmZXRjaFZpYURvbSIsInJlcyIsInJlaiIsInF1ZXJ5U2VsZWN0b3IiLCJyZWwiLCJjcm9zc09yaWdpbiIsIl9fTkVYVF9DUk9TU19PUklHSU4iLCJvbmxvYWQiLCJvbmVycm9yIiwiaGVhZCIsImFwcGVuZENoaWxkIiwiQVNTRVRfTE9BRF9FUlJPUiIsIlN5bWJvbCIsImFwcGVuZFNjcmlwdCIsInNyYyIsInNjcmlwdCIsInJlamVjdCIsImJvZHkiLCJkZXZCdWlsZFByb21pc2UiLCJyZXNvbHZlUHJvbWlzZVdpdGhUaW1lb3V0IiwibXMiLCJjYW5jZWxsZWQiLCJyIiwiX19CVUlMRF9NQU5JRkVTVCIsIm9uQnVpbGRNYW5pZmVzdCIsIl9fQlVJTERfTUFOSUZFU1RfQ0IiLCJnZXRGaWxlc0ZvclJvdXRlIiwiYXNzZXRQcmVmaXgiLCJyb3V0ZSIsInNjcmlwdHMiLCJlbmNvZGVVUkkiLCJjc3MiLCJtYW5pZmVzdCIsImFsbEZpbGVzIiwiZmlsdGVyIiwidiIsImVudHJ5cG9pbnRzIiwiTWFwIiwibG9hZGVkU2NyaXB0cyIsInN0eWxlU2hlZXRzIiwicm91dGVzIiwibWF5YmVFeGVjdXRlU2NyaXB0IiwiZmV0Y2hTdHlsZVNoZWV0IiwiZmV0Y2giLCJvayIsInRleHQiLCJjb250ZW50Iiwid2hlbkVudHJ5cG9pbnQiLCJvbkVudHJ5cG9pbnQiLCJleGVjdXRlIiwiZm4iLCJjb21wb25lbnQiLCJlcnJvciIsImlucHV0Iiwib2xkIiwibG9hZFJvdXRlIiwicm91dGVGaWxlc1Byb21pc2UiLCJhbGwiLCJoYXMiLCJlbnRyeXBvaW50Iiwic3R5bGVzIiwiZmluYWxseSIsImFzc2lnbiIsImNuIiwibmF2aWdhdG9yIiwiY29ubmVjdGlvbiIsInNhdmVEYXRhIiwiZWZmZWN0aXZlVHlwZSIsIm91dHB1dCIsImVudW1lcmFibGUiLCJfd2l0aFJvdXRlciIsImNyZWF0ZVJvdXRlciIsIm1ha2VQdWJsaWNSb3V0ZXJJbnN0YW5jZSIsIl9yb3V0ZXJDb250ZXh0Iiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInB1c2giLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJldmVudHMiLCJmaWVsZCIsImdldFJvdXRlciIsIm9uIiwiZXZlbnRGaWVsZCIsImNoYXJBdCIsInRvVXBwZXJDYXNlIiwic3Vic3RyaW5nIiwiX3NpbmdsZXRvblJvdXRlciIsIm1lc3NhZ2UiLCJzdGFjayIsInVzZUNvbnRleHQiLCJSb3V0ZXJDb250ZXh0IiwiaW5zdGFuY2UiLCJwcm9wZXJ0eSIsIkFycmF5IiwiaXNBcnJheSIsImhhc0ludGVyc2VjdGlvbk9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJkaXNhYmxlZCIsImlzRGlzYWJsZWQiLCJ1bm9ic2VydmUiLCJ2aXNpYmxlIiwic2V0VmlzaWJsZSIsInVzZVN0YXRlIiwidW5kZWZpbmVkIiwidGFnTmFtZSIsIm9ic2VydmUiLCJpZGxlQ2FsbGJhY2siLCJlbGVtZW50IiwiY2FsbGJhY2siLCJvYnNlcnZlciIsImVsZW1lbnRzIiwiY3JlYXRlT2JzZXJ2ZXIiLCJkZWxldGUiLCJzaXplIiwiZGlzY29ubmVjdCIsIm9ic2VydmVycyIsImVudHJpZXMiLCJpc0ludGVyc2VjdGluZyIsImludGVyc2VjdGlvblJhdGlvIiwid2l0aFJvdXRlciIsIkNvbXBvc2VkQ29tcG9uZW50IiwiV2l0aFJvdXRlcldyYXBwZXIiLCJnZXRJbml0aWFsUHJvcHMiLCJvcmlnR2V0SW5pdGlhbFByb3BzIiwiZGlzcGxheU5hbWUiLCJkZWxMb2NhbGUiLCJoYXNCYXNlUGF0aCIsImRlbEJhc2VQYXRoIiwiaW50ZXJwb2xhdGVBcyIsIl9ub3JtYWxpemVUcmFpbGluZ1NsYXNoIiwiX3JvdXRlTG9hZGVyIiwiX2Rlbm9ybWFsaXplUGFnZVBhdGgiLCJfbm9ybWFsaXplTG9jYWxlUGF0aCIsIl9taXR0IiwiX3V0aWxzIiwiX2lzRHluYW1pYyIsIl9wYXJzZVJlbGF0aXZlVXJsIiwiX3F1ZXJ5c3RyaW5nIiwiX3Jlc29sdmVSZXdyaXRlcyIsIl9yb3V0ZU1hdGNoZXIiLCJfcm91dGVSZWdleCIsImRldGVjdERvbWFpbkxvY2FsZSIsIl9fTkVYVF9JMThOX1NVUFBPUlQiLCJiYXNlUGF0aCIsIl9fTkVYVF9ST1VURVJfQkFTRVBBVEgiLCJidWlsZENhbmNlbGxhdGlvbkVycm9yIiwiYWRkUGF0aFByZWZpeCIsInByZWZpeCIsInN0YXJ0c1dpdGgiLCJwYXRoTm9RdWVyeUhhc2giLCJub3JtYWxpemVMb2NhbGVQYXRoIiwiZGV0ZWN0ZWRMb2NhbGUiLCJkZXRlY3RlZERvbWFpbiIsImh0dHAiLCJkb21haW4iLCJwYXRobmFtZSIsInBhdGhMb3dlciIsInRvTG93ZXJDYXNlIiwibG9jYWxlTG93ZXIiLCJsZW5ndGgiLCJzdWJzdHIiLCJxdWVyeUluZGV4IiwiaGFzaEluZGV4IiwidXJsIiwibG9jYXRpb25PcmlnaW4iLCJnZXRMb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiVVJMIiwib3JpZ2luIiwiYXNQYXRobmFtZSIsInF1ZXJ5IiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJnZXRSb3V0ZVJlZ2V4IiwiZHluYW1pY0dyb3VwcyIsImdyb3VwcyIsImR5bmFtaWNNYXRjaGVzIiwiZ2V0Um91dGVNYXRjaGVyIiwicGFyYW1zIiwiZXZlcnkiLCJwYXJhbSIsInJlcGVhdCIsIm9wdGlvbmFsIiwicmVwbGFjZWQiLCJzZWdtZW50IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwiam9pbiIsInJlc3VsdCIsIm9taXRQYXJtc0Zyb21RdWVyeSIsImZpbHRlcmVkUXVlcnkiLCJpbmNsdWRlcyIsInJlc29sdmVBcyIsImJhc2UiLCJ1cmxBc1N0cmluZyIsImZvcm1hdFdpdGhWYWxpZGF0aW9uIiwidXJsUHJvdG9NYXRjaCIsIm1hdGNoIiwidXJsQXNTdHJpbmdOb1Byb3RvIiwidXJsUGFydHMiLCJzcGxpdCIsIm5vcm1hbGl6ZWRVcmwiLCJub3JtYWxpemVSZXBlYXRlZFNsYXNoZXMiLCJhc1BhdGgiLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaXNEeW5hbWljUm91dGUiLCJzZWFyY2hQYXJhbXMiLCJzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IiwiaGFzaCIsInN0cmlwT3JpZ2luIiwicHJlcGFyZVVybEFzIiwiaHJlZkhhZE9yaWdpbiIsImFzSGFkT3JpZ2luIiwicHJlcGFyZWRVcmwiLCJwcmVwYXJlZEFzIiwicmVzb2x2ZUR5bmFtaWNSb3V0ZSIsInBhZ2VzIiwiY2xlYW5QYXRobmFtZSIsImRlbm9ybWFsaXplUGFnZVBhdGgiLCJzb21lIiwicGFnZSIsInJlIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJfX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OIiwiaGlzdG9yeSIsInNlc3Npb25TdG9yYWdlIiwic2V0SXRlbSIsInJlbW92ZUl0ZW0iLCJuIiwiU1NHX0RBVEFfTk9UX0ZPVU5EIiwiZmV0Y2hSZXRyeSIsImF0dGVtcHRzIiwiY3JlZGVudGlhbHMiLCJzdGF0dXMiLCJqc29uIiwiZGF0YSIsIm5vdEZvdW5kIiwiZmV0Y2hOZXh0RGF0YSIsImRhdGFIcmVmIiwiaXNTZXJ2ZXJSZW5kZXIiLCJSb3V0ZXIiLCJjb25zdHJ1Y3RvciIsInBhdGhuYW1lMSIsInF1ZXJ5MSIsImFzMSIsImluaXRpYWxQcm9wcyIsInBhZ2VMb2FkZXIiLCJBcHAiLCJ3cmFwQXBwIiwiQ29tcG9uZW50IiwiQ29tcG9uZW50MSIsImVycjEiLCJzdWJzY3JpcHRpb24iLCJpc0ZhbGxiYWNrIiwiaXNQcmV2aWV3Iiwic2RjIiwic2RyIiwiX2lkeCIsIm9uUG9wU3RhdGUiLCJzdGF0ZSIsImNoYW5nZVN0YXRlIiwiZ2V0VVJMIiwiX19OIiwiZm9yY2VkU2Nyb2xsIiwiaWR4IiwiSlNPTiIsInN0cmluZ2lmeSIsIngiLCJwYWdlWE9mZnNldCIsInkiLCJwYWdlWU9mZnNldCIsImdldEl0ZW0iLCJwYXJzZSIsInBhcnNlUmVsYXRpdmVVcmwiLCJpc1NzciIsIl9icHMiLCJjaGFuZ2UiLCJfc2hhbGxvdyIsImNvbXBvbmVudHMiLCJpbml0aWFsIiwiX19OX1NTRyIsIl9fTl9TU1AiLCJhdXRvRXhwb3J0RHluYW1pYyIsIl9fTkVYVF9EQVRBX18iLCJhdXRvRXhwb3J0Iiwic3ViIiwiY2xjIiwiX3dyYXBBcHAiLCJpc1JlYWR5IiwiZ3NzcCIsImdpcCIsImFwcEdpcCIsImdzcCIsImxvY2F0aW9uIiwic2VhcmNoIiwiX19ORVhUX0hBU19SRVdSSVRFUyIsImhvc3RuYW1lIiwiX3Nob3VsZFJlc29sdmVIcmVmIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNjcm9sbFJlc3RvcmF0aW9uIiwicmVsb2FkIiwiYmFjayIsIm1ldGhvZCIsInNob3VsZFJlc29sdmVIcmVmIiwiX2giLCJwcmV2TG9jYWxlIiwicGFyc2VkQXMiLCJsb2NhbGVQYXRoUmVzdWx0IiwiZGlkTmF2aWdhdGUiLCJhc05vQmFzZVBhdGgiLCJTVCIsInBlcmZvcm1hbmNlIiwibWFyayIsInJvdXRlUHJvcHMiLCJfaW5GbGlnaHRSb3V0ZSIsImFib3J0Q29tcG9uZW50TG9hZCIsImNsZWFuZWRBcyIsImxvY2FsZUNoYW5nZSIsIm9ubHlBSGFzaENoYW5nZSIsImVtaXQiLCJzY3JvbGxUb0hhc2giLCJub3RpZnkiLCJwYXJzZWQiLCJyZXdyaXRlcyIsImdldFBhZ2VMaXN0IiwiX19yZXdyaXRlcyIsInVybElzTmV3IiwicmV3cml0ZXNSZXN1bHQiLCJtYXRjaGVkUGFnZSIsInJvdXRlUmVnZXgiLCJyb3V0ZU1hdGNoIiwic2hvdWxkSW50ZXJwb2xhdGUiLCJtaXNzaW5nUGFyYW1zIiwicmVmMSIsInJvdXRlSW5mbyIsImdldFJvdXRlSW5mbyIsInBhZ2VQcm9wcyIsIl9fTl9SRURJUkVDVCIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsIm5ld1VybCIsIm5ld0FzIiwiX19OX1BSRVZJRVciLCJub3RGb3VuZFJvdXRlIiwiZmV0Y2hDb21wb25lbnQiLCJhcHBDb21wIiwibmV4dCIsImlzUHJlcmVuZGVyZWQiLCJzdGF0dXNDb2RlIiwiaXNWYWxpZFNoYWxsb3dSb3V0ZSIsIl9zY3JvbGwiLCJzaG91bGRTY3JvbGwiLCJyZXNldFNjcm9sbCIsImRvY3VtZW50RWxlbWVudCIsImxhbmciLCJoYW5kbGVSb3V0ZUluZm9FcnJvciIsImxvYWRFcnJvckZhaWwiLCJnaXBFcnIiLCJyb3V0ZUluZm9FcnIiLCJleGlzdGluZ1JvdXRlSW5mbyIsImNhY2hlZFJvdXRlSW5mbyIsIm1vZCIsImlzVmFsaWRFbGVtZW50VHlwZSIsImdldERhdGFIcmVmIiwiX2dldERhdGEiLCJfZ2V0U3RhdGljRGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiZXJyMiIsImJlZm9yZVBvcFN0YXRlIiwib2xkVXJsTm9IYXNoIiwib2xkSGFzaCIsIm5ld1VybE5vSGFzaCIsIm5ld0hhc2giLCJzY3JvbGxUbyIsImlkRWwiLCJnZXRFbGVtZW50QnlJZCIsInNjcm9sbEludG9WaWV3IiwibmFtZUVsIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJwYXRobmFtZTIiLCJfaXNTc2ciLCJpc1NzZyIsImNhbmNlbCIsImNvbXBvbmVudFJlc3VsdCIsImxvYWRQYWdlIiwiY2FjaGVLZXkiLCJyZXNvdXJjZUtleSIsImN0eCIsIkFwcDEiLCJBcHBUcmVlIiwibG9hZEdldEluaXRpYWxQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=