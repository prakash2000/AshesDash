// (function () {
//   var ListCtrl= ['$scope',function($scope)
//     {
//       $scope.Allmatches = [
//         { place: "Cardiff",    date: "8th-12th July" },
//         { place: "Lords",      date: "15th-19th July" },
//         { place: "Wellington", date: "22th-26th July" },
//         { place: "Yorkshire",  date: "29th-2nd August" },
//         { place: "Manchester", date: "5th-9th August" }   
//       ];
//     }];
//     angular
//     .module('ashes2015')
//     .controller('MatchListCtrl','ListCtrl');
// }());
app.controller("MatchListCtrl", function($scope) {     
  $scope.Allmatches = [
    { place: "Cardiff",    date: "8th-12th July"},
    { place: "Lords",      date: "15th-19th July" },
    { place: "Wellington", date: "22th-26th July" },
    { place: "Yorkshire",  date: "29th-2nd August" },
    { place: "Manchester", date: "5th-9th August" }   
  ];
});
app.controller("MatchSaveCtrl",function($scope,$firebaseArray)
  {    
    $scope.save=function(){
      if($scope.NewMatchForm.$valid)
      {
        var ref = new Firebase("https://ashes-2015.firebaseio.com/");
        $scope.data = $firebaseArray(ref);
        console.log($scope.data);
        // $scope.data.$add({Team:"Australia"});
        // $scope.data = $firebaseObject(ref);
        // console.log($scope.data);
        var list=$firebaseArray(ref);
        list.$add({"Teams":{"England":{"Result":{"Win":"3","Loss":"1" }},"Australia":{"Result":{"Win":"1","Loss":"3" }} }}).then(function(ref) {
          var id = ref.key();
          console.log();
          console.log("added record with id " + id);
          list.$indexFor(id); // returns location in the array
        });
      }
      else
      $scope.NewMatchForm.$setDirty();
    }   
       
  });