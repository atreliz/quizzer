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

  	
	    $http.get('quizz.json').success(function(data) {
	      $scope.questions = data;
	    });
	


/*
	$scope.questions=[
		{
			title:'Como se sirve un cafe cat?',
			response:'D',
			id:0,
			options:[
					{value:'A',title:'Con leche fria'},
					{value:'B',title:'En taza grande'},
					{value:'C',title:'Con mucho azucar'},
					{value:'D',title:'Que mas da si es gratis'}
			]

		},
		{
			title:'Cuantos años tiene Matias?',
			response:'C',
			id:1,
			options:[
					{value:'A',title:'No ha nacido, no tiene años'},
					{value:'B',title:'Uno mas que Chuck Norris'},
					{value:'C',title:'La edad de Cristo'},
					{value:'D',title:'Infinito'}
			]

		},
		{
			title:'Como toma el cafe un catalan?',
			response:'A',
			id:2,
			options:[
					{value:'A',title:'No toma cafe, hace cafe'},
					{value:'B',title:'No toma cafe, pa ahorrar pal anillo'},
					{value:'C',title:'Lo toma en vaso de plastico'}
			]

		},
		{
			title:'Cuantas veces a perdido Alfonso al futbolin?',
			response:'B',
			id:3,
			options:[
					{value:'A',title:'Nunca ha ocurrido'},
					{value:'B',title:'Solo cuando deja ganar a otros'},
					{value:'C',title:'Una de cada 1000 veces'},
					{value:'C',title:'Null pointer exception'}
			]

		},
		{
			title:'Que tipo de Boxeo le gusta a Manu?',
			response:'A',
			id:4,
			options:[
					{value:'A',title:'El de Enanos'},
					{value:'B',title:'Mujeres desnudas'},
					{value:'C',title:'Mujeres Peludas'},
					{value:'D',title:'Tortugas luchadoras'}
			]

		},
		{
			title:'Que le gusta montar a Hulk?',
			response:'B',
			id:5,
			options:[
					{value:'A',title:'Un unicornio'},
					{value:'B',title:'Un elefante'},
					{value:'C',title:'Una mujer verde'},
					{value:'C',title:'Un 600'}
			]

		},
		{
			title:'De que sabor toma el batido, la tia buena numero 2, del bus 160?',
			response:'C',
			id:6,
			options:[
					{value:'A',title:'Vainilla'},
					{value:'B',title:'Chocolate'},
					{value:'C',title:'Fresa'},
					{value:'D',title:'Huevos con Aceite'}
			]

		},
		{
			title:'Que vigilaba Master durante su instruccion?',
			response:'C',
			id:7,
			options:[
					{value:'A',title:'El cajon de Bea'},
					{value:'B',title:'Las ondas que hacia Gonzalo con el palito del cafe'},
					{value:'C',title:'El extintor'},
					{value:'D',title:'Las bubas de Tamara'}
			]

		},
		{
			title:'Quien es John el Gato Hardesky?',
			response:'B',
			id:8,
			options:[
					{value:'A',title:'El padre de Lupin III'},
					{value:'B',title:'Robo la formula del Capitan America'},
					{value:'C',title:'Un rastas de podemos'},
					{value:'D',title:'Invento el Hardeskysmo Cuantico'}
			]

		},
		{
			title:'Quienes son Hasufel, Arod y Brego ?',
			response:'C',
			id:9,
			options:[
					{value:'A',title:'Nuevos Xmen'},
					{value:'B',title:'Unas librerias de JS'},
					{value:'C',title:'Caballos del Señor de los anillos'},
					{value:'D',title:'Nuevos fichajes de Adesis'}
			]

		},
		{
			title:'De que color es el sabel laser de Alex ?',
			response:'A',
			id:10,
			options:[
					{value:'A',title:'Morado'},
					{value:'B',title:'Azul'},
					{value:'C',title:'Verde'},
					{value:'D',title:'Rojo'}
			]

		}
	];
	*/


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

