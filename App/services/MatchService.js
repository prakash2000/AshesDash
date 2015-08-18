app.service("MatchService",["$http", "$q",
        function ($http, $q) {
            var self = this;
			self.save = function (religion) {
                var deferred = $q.defer();

                $http
                    .post("api/administrator/religion/save", angular.toJson(religion))
                    .success(function (res) {
                        deferred.resolve(res);
                    })
                    .error(function (error) {
                        deferred.reject(error);
                    });

                return deferred.promise;
            };
 }]);