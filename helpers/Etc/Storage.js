var _Storage = (function () {
    var methods = {};
    angular.forEach(['get', 'set', 'remove'], function (methodName) {
        methods[methodName] = function () {
            var deferred = $.Deferred(),
                args = Array.prototype.slice.call(arguments);

            args.push(function (result) {
                deferred.resolve(result);
            });
            ConfigStorage[methodName].apply(ConfigStorage, args);

            return deferred;
        };
    });

    return {
        get: methods['get'],
        set: methods['set'],
        remove: methods['remove']
    }
})();