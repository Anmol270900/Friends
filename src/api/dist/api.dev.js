"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.apiCall = void 0;

var apiCall = function apiCall(link) {
  return fetch(link).then(function (response) {
    return response.json();
  });
};

exports.apiCall = apiCall;