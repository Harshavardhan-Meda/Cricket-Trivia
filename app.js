var app = angular.module('quizApp', ['chart.js']);

app.controller('quizCtrl',['$scope','$window',function($scope,$window){
    $scope.questions = [
		{
			qid: "ques1",
			question: "1. When was the last time India won the Cricket World Cup ?",
			options: [2003, 1989, 1964, 2017],
			answer: 2003,
			result:""
		},
		{
			qid: "ques2",
			question: "2.What is the highest individual score by a batsman in Test Cricket ?",
			options: [375, 435, 530, 342],
			answer: 375,
			result:""
		},
		{
			qid: "ques3",
			question: "3. Who has won the most number of Cricket World Cups ?",
			options: ["India", "Australia", "England", "West Indies"],
			answer: "Australia",
			result:""
		},
		{
			qid: "ques4",
			question: "4. How many international centuries dose Sachine Tendulkar has under his name ?",
			options: [49, 50, 34, 47],
			answer: 49,
			result:""
		}
	];
    
    var use_ans = [];
    $scope.GetValue= function(nx){
    	use_ans.push(nx);
    };

    var rigth = 0;
    var wrong = 0;

$scope.labels = ['Result'];
  $scope.series = ['Correct', 'In Correct'];
  $scope.submit = function(){
  		right = 0; wrong = 0;
    	for(var i=0;i<$scope.questions.length; i++){
    		if($scope.questions[i].answer == use_ans[i]){
    			rigth += 1;
    		}
    		else {
    			wrong += 1;
    			$scope.questions[i].result = "Wrong";
    		}
    	}

    	$scope.data = [
    		[rigth],
    		[wrong]
    	]
    }
    
    $scope.reset = function(quiz) {
	  $scope.ddlques = '?';
	  wrong = 0; right = 0;
	  $scope.data = [];
	  for(var i=0;i<$scope.questions.length; i++){
	  	$scope.questions[i].result = "";
	  }
	  use_ans = [];
	  //$scope.quiz.qid.$pristine = true;
      quiz.$setPristine();
      $window.location.reload();
      //$scope.quiz.$setPristine();
 
}
}]);



