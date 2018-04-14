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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar storage = window.localStorage;\nvar renderContacts = function renderContacts() {\n  var contacts = JSON.parse(window.localStorage.getItem('contacts'));\n  var div = document.querySelector('.contact-list');\n  div.innerHTML = '';\n\n  if (contacts) {\n    var ul = document.createElement('ul');\n\n    var items = contacts.map(function (contact) {\n      var li = document.createElement('li');\n      li.innerHTML = '\\n        <span>' + contact.name + '</span>  |\\n        <span>' + contact.email + '</span> |\\n        <span>' + contact.phone + '</span>\\n        ';\n      return li;\n    });\n\n    items.forEach(function (li) {\n      return ul.appendChild(li);\n    });\n    div.appendChild(ul);\n  } else {\n    div.innerHTML = '<p>You have no contacts in your address book</p>';\n  }\n};\n\n/*\nconst renderContacts = () => {\n  let contacts = JSON.parse(window.localStorage.getItem('contacts'))\n  let div = document.querySelector('.contact-list')\n\n  if(contacts) {\n    div.innerHTML = ''\n    const ul = document.createElement('ul')\n\n    contacts.forEach(contact => {\n      let li = document.createElement('li')\n      li.innerHTML = `\n        <span>${contact.name}</span>\n        <span>${contact.email}</span>\n        <span>${contact.phone}</span>\n        `\n        ul.appendChild(li)\n      })\n\n      div.appendChild(ul)\n      } else {\n          div.innerHTML = '<p>You have no contacts in your address book</p>'\n        }\n  }\n*/\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  renderContacts();\n\n  var addContactForm = document.querySelector('.new-contact-form');\n  var addContactBtn = document.querySelector('.add-contact');\n  var cancelBtn = document.querySelector('.cancel');\n  var saveContactBtn = document.querySelector('.save-contact');\n  var contactList = document.querySelector('.contact-list');\n\n  addContactBtn.addEventListener('click', function () {\n    cancelBtn.classList.remove('hide');\n    addContactForm.classList.remove('hide');\n    addContactBtn.classList.add('hide');\n    contactList.classList.add('hide');\n  });\n\n  cancelBtn.addEventListener('click', function () {\n    addContactBtn.classList.remove('hide');\n    addContactForm.classList.add('hide');\n    cancelBtn.classList.add('hide');\n    contactList.classList.remove('hide');\n  });\n\n  addContactForm.addEventListener('submit', function (event) {\n    event.preventDefault();\n    var localStorage = window.localStorage;\n\n    var _addContactForm$eleme = addContactForm.elements,\n        name = _addContactForm$eleme.name,\n        email = _addContactForm$eleme.email,\n        phone = _addContactForm$eleme.phone,\n        company = _addContactForm$eleme.company,\n        notes = _addContactForm$eleme.notes,\n        twitter = _addContactForm$eleme.twitter;\n\n\n    var contact = {\n      id: Date.now(),\n      name: name.value,\n      email: email.value,\n      phone: phone.value,\n      company: company.value,\n      notes: notes.value,\n      twitter: twitter.value\n    };\n\n    if (contact.name, contact.email, contact.phone) {\n      console.log('Saving the following contact: ' + JSON.stringify(contact));\n      contacts.push(contact);\n      localStorage.setItem('contacts', JSON.stringify(contacts));\n      renderContacts();\n    } else {\n      console.log('One or more fields are missing, please fill in all fields and try again!');\n    }\n  });\n});\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ })

/******/ });