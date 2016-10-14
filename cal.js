


describe('controller', function() {

   modalInstance = {                    // Create a mock object using spies
         close: jasmine.createSpy('modalInstance.close'),
         dismiss: jasmine.createSpy('modalInstance.dismiss'),
         result: {
         then: jasmine.createSpy('modalInstance.result.then')
        }
      }; 
  beforeEach(module('myApp'));
  var $controller;
  beforeEach(inject(function(_$controller_){
  // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));
  describe('Add', function() {
    it('array contains the object', function() {
      var $scope = {};
      var controller = $controller('PopupCont', { $scope: $scope ,$uibModalInstance: modalInstance});
   
     $scope.id="500";
     $scope.name="tassk2"

    
     $scope.add_data();

     
      expect(obj).toContain({task_ID:"500",task_name:"tassk2"})
    });
});


 describe('remove', function() {
    it('array not contains the element', function() {
      var $scope = {};
      var controller = $controller('myCtrl', { $scope: $scope });
   

    
     $scope.remove(0);

     
      expect(obj).not.toContain({task_ID:"100",task_name:"Task 1"});
    });
});



});

