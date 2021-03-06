"use strict";
exports.__esModule = true;
function BatchConfiguration(graphqlTypes, models) {
    return {
        model: models.batch,
        actions: ['list', 'update', 'create'],
        list: {
            before: function (findOptions) {
                return findOptions;
            }
        }
    };
}
exports["default"] = BatchConfiguration;
