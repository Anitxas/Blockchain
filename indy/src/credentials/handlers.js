'use strict';
const indy = require('../../index.js');

//Un request se hace para asegurarse de la identidad del receptor, y se deberá identificar usando la credencial(credential).

exports.request = function (message) {
    return indy.credentials.acceptRequest(message.origin, message.message);
};

exports.credential = function(message) {
    return indy.credentials.acceptCredential(message.origin, message.message);
};
