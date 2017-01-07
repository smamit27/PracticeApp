angular.module('sapientApp').component('sapientAppComp',{
    
    templateUrl:"js/components/sapient/sapient.template.html",
    controller:function($http,$scope){
         $http.get("json/cart.json")
    .then(function(response) {
        $scope.sapientLength = response.data.productsInCart.length;
        $scope.ProductDetail = response.data.productsInCart;
        
         $scope.total = 0;
            for(var i = 0; i < $scope.ProductDetail.length; i++){
                var product = $scope.ProductDetail[i];
                $scope.total += product.p_price;  
              
                
            }
            if($scope.ProductDetail.length == 3){
                    var a = ($scope.total * 5)/100;
                    console.log(a);

            }
            else if( $scope.ProductDetail.length >3 && $scope.ProductDetail.length <= 6){
                var a = ($scope.total * 10)/100;
                    console.log(a);
            }
            else if($scope.ProductDetail.length >7 && $scope.ProductDetail.length <= 10){
                var a = ($scope.total * 10)/100;
                    console.log(a);
            }

            return $scope.total;
            
    
      
         

    });
    $scope.EditData = (data) => 
    {
        $scope.modalDataImages = data;
        $scope.modalDataShow = true;

    }
    $scope.closeData = ()=>{
         $scope.modalDataShow = false;
    }
    $scope.deleteData = (data) =>{
        let index = $scope.ProductDetail.indexOf(data);
        console.log(index);
        $scope.ProductDetail.splice(index,1);
        $scope.sapientLength  = $scope.ProductDetail.length;        

    }

    }

});
