/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/navButtonAction.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var NavButtonAction = /*#__PURE__*/function () {
  function NavButtonAction() {
    _classCallCheck(this, NavButtonAction);
    this.isActive = false;
    this.handleNavButtonClick = this.handleNavButtonClick.bind(this);
  }
  _createClass(NavButtonAction, [{
    key: "handleNavButtonClick",
    value: function handleNavButtonClick(event) {
      if (this.isActive) {
        event.target.classList.remove("head__nav-button_active");
        this.isActive = false;
      } else {
        event.target.classList.add("head__nav-button_active");
        this.isActive = true;
      }
    }
  }]);
  return NavButtonAction;
}();
/* harmony default export */ const navButtonAction = (new NavButtonAction());
;// CONCATENATED MODULE: ./src/scripts/letsTalkAction.js
function letsTalkAction_typeof(obj) { "@babel/helpers - typeof"; return letsTalkAction_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, letsTalkAction_typeof(obj); }
function letsTalkAction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function letsTalkAction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, letsTalkAction_toPropertyKey(descriptor.key), descriptor); } }
function letsTalkAction_createClass(Constructor, protoProps, staticProps) { if (protoProps) letsTalkAction_defineProperties(Constructor.prototype, protoProps); if (staticProps) letsTalkAction_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function letsTalkAction_toPropertyKey(arg) { var key = letsTalkAction_toPrimitive(arg, "string"); return letsTalkAction_typeof(key) === "symbol" ? key : String(key); }
function letsTalkAction_toPrimitive(input, hint) { if (letsTalkAction_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (letsTalkAction_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var LetsTalkAction = /*#__PURE__*/function () {
  function LetsTalkAction() {
    letsTalkAction_classCallCheck(this, LetsTalkAction);
    this.isActive = false;
    this.modal = document.getElementById("letsTalkModal");
    this.handleLetsTalkButtonClick = this.handleLetsTalkButtonClick.bind(this);
  }
  letsTalkAction_createClass(LetsTalkAction, [{
    key: "handleLetsTalkButtonClick",
    value: function handleLetsTalkButtonClick() {
      if (this.isActive) {
        this.modal.classList.remove("modal_active");
        this.modal.classList.add("modal_nonactive");
        document.body.style.overflowY = "auto";
        this.isActive = false;
      } else {
        this.modal.classList.add("modal_active");
        this.modal.classList.remove("modal_nonactive");
        document.body.style.overflowY = "hidden";
        this.isActive = true;
      }
    }
  }]);
  return LetsTalkAction;
}();
/* harmony default export */ const letsTalkAction = (new LetsTalkAction());
;// CONCATENATED MODULE: ./src/scripts/modalAction.js
function modalAction_typeof(obj) { "@babel/helpers - typeof"; return modalAction_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, modalAction_typeof(obj); }
function modalAction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function modalAction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, modalAction_toPropertyKey(descriptor.key), descriptor); } }
function modalAction_createClass(Constructor, protoProps, staticProps) { if (protoProps) modalAction_defineProperties(Constructor.prototype, protoProps); if (staticProps) modalAction_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function modalAction_toPropertyKey(arg) { var key = modalAction_toPrimitive(arg, "string"); return modalAction_typeof(key) === "symbol" ? key : String(key); }
function modalAction_toPrimitive(input, hint) { if (modalAction_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (modalAction_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

var ModalAction = /*#__PURE__*/function () {
  function ModalAction() {
    modalAction_classCallCheck(this, ModalAction);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  // eslint-disable-next-line class-methods-use-this
  modalAction_createClass(ModalAction, [{
    key: "handleCloseModal",
    value: function handleCloseModal(event) {
      if (event.target === event.currentTarget) {
        letsTalkAction.handleLetsTalkButtonClick();
      }
    }
  }]);
  return ModalAction;
}();
/* harmony default export */ const modalAction = (new ModalAction());
;// CONCATENATED MODULE: ./src/scripts/formValidation.js
function formValidation_typeof(obj) { "@babel/helpers - typeof"; return formValidation_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, formValidation_typeof(obj); }
function formValidation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function formValidation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, formValidation_toPropertyKey(descriptor.key), descriptor); } }
function formValidation_createClass(Constructor, protoProps, staticProps) { if (protoProps) formValidation_defineProperties(Constructor.prototype, protoProps); if (staticProps) formValidation_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function formValidation_toPropertyKey(arg) { var key = formValidation_toPrimitive(arg, "string"); return formValidation_typeof(key) === "symbol" ? key : String(key); }
function formValidation_toPrimitive(input, hint) { if (formValidation_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (formValidation_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var FormValidation = /*#__PURE__*/function () {
  function FormValidation() {
    formValidation_classCallCheck(this, FormValidation);
    this.email = /^\w+@\w+.\w{1,4}$/;
    this.required = /^\w+/;
  }
  formValidation_createClass(FormValidation, [{
    key: "checkRule",
    value: function checkRule(rules, value) {
      var _this = this;
      return rules.reduce(function (isValid, rule) {
        return isValid && _this[rule].test(value);
      }, true);
    }
  }]);
  return FormValidation;
}();
/* harmony default export */ const formValidation = (new FormValidation());
;// CONCATENATED MODULE: ./src/scripts/popupAction.js
function popupAction_typeof(obj) { "@babel/helpers - typeof"; return popupAction_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, popupAction_typeof(obj); }
function popupAction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function popupAction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, popupAction_toPropertyKey(descriptor.key), descriptor); } }
function popupAction_createClass(Constructor, protoProps, staticProps) { if (protoProps) popupAction_defineProperties(Constructor.prototype, protoProps); if (staticProps) popupAction_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function popupAction_toPropertyKey(arg) { var key = popupAction_toPrimitive(arg, "string"); return popupAction_typeof(key) === "symbol" ? key : String(key); }
function popupAction_toPrimitive(input, hint) { if (popupAction_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (popupAction_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
var PopupAction = /*#__PURE__*/function () {
  function PopupAction() {
    popupAction_classCallCheck(this, PopupAction);
    this.popup = undefined;
  }
  popupAction_createClass(PopupAction, [{
    key: "popupElement",
    set: function set(newPopup) {
      this.popup = newPopup;
    }
  }, {
    key: "showSuccessPopup",
    value: function showSuccessPopup(message) {
      var _this = this;
      this.popup.innerText = message;
      this.popup.classList.remove("popup_error");
      this.popup.classList.replace("popup_nonactive", "popup_active");
      this.popup.classList.add("popup_success");
      setTimeout(function () {
        return _this.hidePopup();
      }, 3000);
    }
  }, {
    key: "showErrorPopup",
    value: function showErrorPopup(message) {
      var _this2 = this;
      this.popup.innerText = message;
      this.popup.classList.remove("popup_success");
      this.popup.classList.replace("popup_nonactive", "popup_active");
      this.popup.classList.add("popup_error");
      setTimeout(function () {
        return _this2.hidePopup();
      }, 3000);
    }
  }, {
    key: "hidePopup",
    value: function hidePopup() {
      this.popup.classList.replace("popup_active", "popup_nonactive");
    }
  }]);
  return PopupAction;
}();
/* harmony default export */ const popupAction = (new PopupAction());
;// CONCATENATED MODULE: ./src/scripts/modalFormAction.js
function modalFormAction_typeof(obj) { "@babel/helpers - typeof"; return modalFormAction_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, modalFormAction_typeof(obj); }
function modalFormAction_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function modalFormAction_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, modalFormAction_toPropertyKey(descriptor.key), descriptor); } }
function modalFormAction_createClass(Constructor, protoProps, staticProps) { if (protoProps) modalFormAction_defineProperties(Constructor.prototype, protoProps); if (staticProps) modalFormAction_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function modalFormAction_toPropertyKey(arg) { var key = modalFormAction_toPrimitive(arg, "string"); return modalFormAction_typeof(key) === "symbol" ? key : String(key); }
function modalFormAction_toPrimitive(input, hint) { if (modalFormAction_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (modalFormAction_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }



var ModalFormAction = /*#__PURE__*/function () {
  function ModalFormAction() {
    modalFormAction_classCallCheck(this, ModalFormAction);
    this.form = undefined;
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  modalFormAction_createClass(ModalFormAction, [{
    key: "formElement",
    set: function set(newForm) {
      this.form = newForm;
    }
  }, {
    key: "handleFormSubmit",
    value: function handleFormSubmit(event) {
      event.preventDefault();
      var children = this.form.elements;
      var hasError = false;
      Array.from(children).forEach(function (child) {
        var _child$dataset$rule;
        var rulesList = (_child$dataset$rule = child.dataset.rule) === null || _child$dataset$rule === void 0 ? void 0 : _child$dataset$rule.split(" ");
        if (!(rulesList !== null && rulesList !== void 0 && rulesList.length)) {
          return;
        }
        var isValid = formValidation.checkRule(rulesList, child.value);
        if (!isValid) {
          hasError = true;
          child.classList.add("error-field");
          return;
        }
        child.classList.remove("error-field");
      });
      if (!hasError) {
        this.sendForm();
      }
    }
  }, {
    key: "sendForm",
    value: function sendForm() {
      var _this = this;
      var formData = new FormData(this.form);
      fetch(this.form.action, {
        method: "POST",
        body: formData
      }).then(function (response) {
        if (!response.ok) {
          throw new Error("server error");
        }
        popupAction.showSuccessPopup("Your message successfully sent");
      }).then(function () {
        _this.form.reset();
        letsTalkAction.handleLetsTalkButtonClick();
      })["catch"](function (err) {
        return popupAction.showErrorPopup("Oops, ".concat(err.message));
      });
    }
  }]);
  return ModalFormAction;
}();
/* harmony default export */ const modalFormAction = (new ModalFormAction());
;// CONCATENATED MODULE: ./src/index.js






var navButton = document.getElementById("nav-button");
navButton.addEventListener("click", navButtonAction.handleNavButtonClick);
var letsTalkButtons = document.getElementsByClassName("footer__lets-talk--button");
Array.from(letsTalkButtons).forEach(function (btn) {
  btn.addEventListener("click", letsTalkAction.handleLetsTalkButtonClick);
});
var modalForm = document.getElementById("letsTalkModal");
modalForm.addEventListener("click", modalAction.handleCloseModal);
var src_form = modalForm.getElementsByTagName("form")[0];
modalFormAction.formElement = src_form;
src_form.addEventListener("submit", modalFormAction.handleFormSubmit);
var popup = document.getElementsByClassName("popup")[0];
popupAction.popupElement = popup;
/******/ })()
;