'use strict';

angular.module('sbAdminApp').controller('CyberCtrl', cyberCtrl);

function cyberCtrl($http) {
    var vm = this;
	
	var index = 0;
	
	vm.center = {
		lat: 59.91,
		lng: 10.75,
		zoom: 12
	};
	
	vm.markers = {
		demo: {
			lat: 32.32,
			lng: 45.232,
			message: "hello world",
			focus: true,
			draggable: false
		}
	};
	vm.geoTwitt = geoTwitt;
	vm.showMap = false;
	vm.showT = false;
	vm.Thing = Thing;
	activate()
	
	///////////
	function Thing(){
		vm.showT = !vm.showT;
		vm.showMap = false;
	}
	function geoTwitt(){
		vm.showMap = !vm.showMap;
		vm.showT = false;
	}
	function activate(){
		$http.get('app/cyber/data.json').then(function(data){	
			angular.forEach(data.data.result.places , function(item){	
				angular.forEach(item.bounding_box.coordinates , function(item){
					
					angular.forEach(item , function(innerItem){
						vm.markers['marker' + index] = {
									lat: innerItem[0],
									lng: innerItem[1],
									message: "hello world",
									focus: true,
									draggable: false
					};
					
					index++;
					
					console.log(vm.markers);
					});
						
				});
			});
		});
	}
}
