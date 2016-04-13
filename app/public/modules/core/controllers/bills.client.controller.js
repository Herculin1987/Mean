(function() {
    'use strict';

    angular.module('app.core').controller('BillController', BillController);

    BillController.$inject = ['$scope', '$location', '$timeout', 'Bills', 'Socket'];
    function BillController($scope, $location, $timeout, Bills, Socket) {

        $scope.start_now = function () {
            $location.path('/insert');
        };

        $scope.phone_number = '';

        $scope.numbers = function (num) {
            $scope.phone_number += num;
        };

        $scope.delete_number = function () {
            $scope.phone_number = $scope.phone_number.slice(0, -1);
        };

        $scope.insert_number = function () {
            $location.path('/bill');
        };

        $scope.bill_status = false;
        $scope.bills = {
            status: 'inserted',
            amount: '$0'
        };
        
        $scope.find = function() {
            Bills.query();
        };

        Socket.on('credit', function (data) {
            console.log('stdout: ' + data);
            var data_json = data.credit.replace("\n", "");
            var data_obj = JSON.parse(data_json);
            if(data_obj.status == "Escrowed " || data_obj.status == "Stacked Idling "){
                var bill_status = "";
                var bill_amount = "";
                if(data_obj.status == "Escrowed "){
                    bill_status = "escrowed";
                }else if(data_obj.status == "Stacked Idling "){
                    bill_status = "inserted";
                    $scope.bill_status = true;
                }
                switch (data_obj.credit){
                    case 1:
                        bill_amount = "$1";
                        break;
                    case 2:
                        bill_amount = "$2";
                        break;
                    case 3:
                        bill_amount = "$5";
                        break;
                    case 4:
                        bill_amount = "$10";
                        break;
                    case 5:
                        bill_amount = "$20";
                        break;
                    case 6:
                        bill_amount = "$50";
                        break;
                }
                $scope.bills.status = bill_status;
                $scope.bills.amount = bill_amount;
            }
        });

        $scope.bill_finish = function () {
            $location.path('/thanks');
        };

        $scope.go_to = function () {
            $timeout(function () {
                $location.path('/welcome');
            }, 7000);
        };

    }

})();
