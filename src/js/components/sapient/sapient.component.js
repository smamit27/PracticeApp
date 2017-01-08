angular.module("sapientApp").component("sapientAppComp",{
    
    templateUrl:"js/components/sapient/sapient.template.html",
    controller:function($http,$scope){
    $http.get("json/cart.json").then((response) =>{
        $scope.sapientLength = response.data.productsInCart.length;
        $scope.ProductDetail = response.data.productsInCart;
        $scope.getDataProduct();
    });
    $scope.quantity = 1;
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
    $scope.editOverlay = (data) => {
        $scope.modalDataImages = data;
        $scope.modalDataShow = true;

    }
    $scope.closeOverlay = ()=>{
         $scope.modalDataShow = false;
    }
    $scope.deleteOverlay = (data) =>{
        let index = $scope.ProductDetail.indexOf(data);
        $scope.ProductDetail.splice(index,1);
        $scope.sapientLength  = $scope.ProductDetail.length;
        $scope.getDataProduct();
     }
  }

});
