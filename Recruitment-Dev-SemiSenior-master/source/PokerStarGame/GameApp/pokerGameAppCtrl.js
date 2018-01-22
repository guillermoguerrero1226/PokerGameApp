var pokerGameApp = angular.module('pokerGameApp', []);

pokerGameApp.controller('pokerGameAppCtrl', function ($scope, $http) {
    $scope.message = "POKER STAR GAME";
    $scope.show = true;
    $scope.showTable = false;
    $scope.backCard = true;
    $scope.frontCard = false;
    $scope.resultMessage = "Waiting..."
    $scope.cards = [];
    $scope.starGame = function () {


        $http.get('./Content/cards.json')
        .success(function (data) {
            $scope.deckOfCards = data;
            console.log("CARDS LOADED SUCCESSFULLY")
            console.log($scope.deckOfCards)
            $http.post('http://localhost:57788/api/Cards', $scope.deckOfCards)
                .success(function (data) {
                   console.log("CARDS LOADED!")
                   $scope.initialMessage = "CARDS ON THE TABLE"
                })
               .error(function (datos) {
                   $scope.initialMessage = "WITHOUT CARDS"
               })
        })
        .error(function (response) {
            console.log("THE CARDS DON´T LOADED")
            console.log(response)
        })
       
        //$http.get('http://localhost:57788/api/Cards')
        //.success(function (data) {
        //    console.log("HAND OF CARDS RECEIVED!")
        //    $scope.cards = data;
        //    console.log($scope.cards)
        //})
        //.error(function (datos) {
        //})
        $scope.show = false;
        $scope.showTable = true;
    }
    $scope.shuffle = function () {
        $scope.backCard = true;
        $scope.frontCard = false;
        $scope.resultMessage = "SHUFFLING...."
        $http.get('http://localhost:57788/api/Cards')
        
       .success(function (data) {
           console.log("CARDS LOADED!")
           $scope.cards = data;
           console.log($scope.cards)
           $scope.resultMessage = "CARDS ON THE TABLE"
       })
       .error(function (datos) {
       })
    }

    $scope.showCards = function () {
        
        $scope.frontCard = true;
        $scope.backCard = false;
        $scope.verifyCards();
        
    }

    $scope.verifyCards = function () {
        $scope.resultMessage = "NO PRIZE :(";
        if ($scope.countCards() == 1) {
            $scope.resultMessage = "YOU HAVE A PAIR :)";
        }

        if ($scope.countCards() == 2) {
            $scope.resultMessage = "YOU HAVE A DOUBLE PAIR :)";
        }
        if ($scope.countCards() == 3) {
            $scope.resultMessage = "YOU HAVE A TRIO :)";
        }
    }
    
    $scope.countCards = function () {
        var arr = [];
        var result = 0;
        for (var prop in $scope.cards) {
            arr.push($scope.cards[prop]);
        }
        for (var j = 0; j <= 4; j++) {
            for (var k = j + 1; k <= 4; k++) {
                if (arr[j].number == arr[k].number) {
                    result++;
                }
            }
            
        }
        console.log("RESULT::::>" + result);
        return result;

    }
    $scope.Isladder = function () {
        var arr = [];
        var result = 0;
        for (var prop in $scope.cards) {
            arr.push($scope.cards[prop]);
        }
        
    }

})