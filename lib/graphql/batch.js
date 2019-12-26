"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var models_1 = __importDefault(require("./../models"));
var models = models_1["default"]();
function BatchConfiguration(outputTypes) {
    return {
        model: models.batch,
        actions: ['list'],
        list: {
            before: function (findOptions) {
                return findOptions;
            }
        }
    };
}
exports["default"] = BatchConfiguration;