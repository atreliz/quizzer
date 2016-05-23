var quizzerApp = angular.module('quizzerApp', [
  'ngRoute',
  'ngTouch',
  'quizzerControllers'
]);



//CONTROLLERS

var quizzerControllers = angular.module('quizzerControllers', []);

quizzerControllers.controller('MainCtrl', ['$scope', '$http',
  function ($scope, $http) {


  	var notaAprobado=0.7;

  	
	    $http.get('http://atreliz.github.io/quizzer/quizz2.json').success(function(data) {
	      $scope.questions = data;
	    });
	 
	

	$scope.currentQuestion=-1;
	$scope.responses=[];
	$scope.score=-1;



	//Calcualte Quizz Result
	$scope.checkResponses=function(questions,responses){
		var score=0;

		for(var i=0;i<questions.length;i++){
			if(questions[i].response==responses[i].value){
				score++;
			}

		}
		$scope.examok= score/questions.length >notaAprobado ? true:false;
		return score;

	};


	//Save responses 
	$scope.add=function(id,value){

		$scope.responses.push({id:id,value:value});
		$scope.currentQuestion++;


		//Detec end to buil QUIZ RESULT
		if($scope.responses.length==$scope.questions.length){
			//alert('end');
			$scope.score = $scope.checkResponses($scope.questions,$scope.responses);

		};

	};


  }]);

