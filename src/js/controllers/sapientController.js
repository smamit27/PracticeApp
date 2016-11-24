let SapientController = function($scope){



var today = new Date();
var m_names = new Array("Jan", "Feb", "Mar", 
"Apr", "May", "Jun", "Jul", "Aug", "Sep", 
"Oct", "Nov", "Dec");

var year = today.getFullYear();
var month = today.getMonth();
var date = today.getDate();
//var datex= date + " " + m_names[month]+ " " + year;
$scope.test = [];

for(var i=0; i<30; i++){
      var day=new Date(year, month, date - i);
      var day1 = day.getFullYear();
      var day2 = day.getMonth();
      var day3 = day.getDate();
	  $scope.form = day3 + " " + m_names[day2]+ " " + day1;
      $scope.test.push($scope.form);


    } 
};
    

angular.module('sapientApp').controller('sapientCtrl',['$scope',SapientController]);