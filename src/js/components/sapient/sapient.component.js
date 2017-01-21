angular.module("sapientApp").component("sapientAppComp",{
    
    templateUrl:"js/components/sapient/sapient.template.html",
    controller:function($http,$scope){
    //Get Json From Json File//    
    $http.get("json/cart.json").then((response) =>{
        $scope.sapientLength = response.data.productsInCart.length;
        $scope.ProductDetail = response.data.productsInCart;
        $scope.getDataProduct();
    });
    //Get Json From Json File End//  
    //Set The Quantity//
    $scope.quantity = 1;
     //Set The Quantity End//

     //Write Logic for Discount//
    $scope.getDataProduct = () =>{
        $scope.total = 0;
            for(let value of $scope.ProductDetail){
                $scope.total += value.p_price;
            }
            if($scope.ProductDetail.length >= 1 &&  $scope.ProductDetail.length == 2 ){
                    $scope.discount= 0;
            }
             if($scope.ProductDetail.length == 3 ){
                    $scope.discount= ($scope.total * 5)/100;
            }
            else if( $scope.ProductDetail.length > 3 && $scope.ProductDetail.length <= 6){
                $scope.discount = ($scope.total * 10)/100;
            }
            else if($scope.ProductDetail.length > 6 && $scope.ProductDetail.length <= 10){
                $scope.discount = ($scope.total * 25)/100;
            }
            if($scope.ProductDetail.length == 0){
                $scope.zeroLength =  true;
                $scope.dataShow = true
            }
            $scope.sum =   $scope.total - $scope.discount;
            return $scope.total;
            
    }
     //Write Logic for Discount End//
     
    // editOverlay//
    $scope.editOverlay = (data) => {
        $scope.modalDataImages = data;
        $scope.modalDataShow = true;

    }
      // editOverlay End//

      //closeOverlay//
    $scope.closeOverlay = ()=>{
         $scope.modalDataShow = false;
    }
    //closeOverlay End//

    //deleteOverlay//
    $scope.deleteOverlay = (data) =>{
        let index = $scope.ProductDetail.indexOf(data);
        $scope.ProductDetail.splice(index,1);
        $scope.sapientLength  = $scope.ProductDetail.length;
        $scope.getDataProduct();
     }
        //deleteOverlay End//
  }

});
