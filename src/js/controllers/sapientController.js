
    

angular.module('sapientApp').controller('sapientCtrl',function($scope){



this.method = () => { 
        var today = new Date();
        var  monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
        "Oct", "Nov", "Dec");
        this.test = [];
        for(var i=0; i<30; i++){
            var day=new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
            this.form = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();
            this.test.push(this.form);
            } 
        }
this.method();




//     var today = new Date();
//  var monthNames = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", 
// "Oct", "Nov", "Dec");
// $scope.test = [];
// for(var i=0; i<30; i++){
//       var day=new Date(today.getFullYear(), today.getMonth(), today.getDate() - i);
// 	  $scope.form = day.getDate() + " " + monthNames[day.getMonth()] + " " + day.getFullYear();
//       $scope.test.push($scope.form);
//     } 

});