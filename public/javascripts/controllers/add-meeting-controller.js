meetingsApp.controller("AddMeetingController", function($scope, $http, $location, $routeParams, $resource, toastr){

	function isNewMeeting() {
		return $routeParams.meetingId == null
	}

	if(isNewMeeting()) {

		$scope.headerText = "Add Meeting";
		$scope.startTimeObj = new Date();
		$scope.endTimeObj = new Date();

		$scope.save = function($event) {
			var meeting = {};
			meeting.title = $scope.title;
			meeting.type = $scope.type;
			meeting.start = $scope.startTimeObj.toISOString();
			meeting.end = $scope.endTimeObj.toISOString();
			//meeting.agenda = $scope.agenda;
			$http({
				method: 'POST',
				url: 'meetings',
				data: meeting
			})
			.success(function(data, status, headers, config) {
				toastr.success('Meeting created successfully.');
				$location.path('view')
			})
			.error(function(data, status, headers, config) {
				toastr.error(data['message'], 'Could not create!');
			})
		}

	} else {
		$scope.headerText = "Edit Meeting";
		$http({
			method: 'GET',
			url: 'meetings/' + $routeParams.meetingId,
		})
		.success(function(data, status, headers, config) {
			$scope.title = data['title'];
			$scope.type = data['type'];
			$scope.status = data['status'];
			$scope.startTimeObj = new Date(data['start']);
			$scope.endTimeObj = new Date(data['end']);
			//$scope.agenda = data['agenda']
		})

		$scope.save = function($event) {
			var meeting = {};
			meeting.title = $scope.title;
			meeting.type = $scope.type;
			meeting.start = $scope.startTimeObj.toISOString();
			meeting.end = $scope.endTimeObj.toISOString();
			//meeting.agenda = $scope.agenda;

			$http({
			method: 'PUT',
			url: 'meetings/' + $routeParams.meetingId,
				data: meeting
			})
			.success(function(data, status, headers, config) {
				toastr.success('Meeting updated successfully.');
				$location.path('view')
			})
			.error(function(data, status, headers, config) {
				toastr.error(data['message'], 'Could not update!');
			})
		}
	}

	$scope.loadContacts = function(query) {
		return new Promise(function(resolve, reject) {
      var results = JSON.parse(contacts).filter(function(obj) {
  	    if (obj.name.toLowerCase().indexOf(query) > -1) { return true; }
      });
			resolve(b);
		});
	};

	$scope.back = function($event) {
		$location.path('view')
	}

	$scope.deleteMeeting = function($event) {
		$http({
			method: 'DELETE',
			url: 'meetings/' + $routeParams.meetingId,
		})
		.success(function(data, status, headers, config) {
			$location.path('view')
		})
	};

	// Types are hardcoded.
	$scope.types = ['DECISION', 'REVIEW', 'BRAINSTORM', 'INFORMATIONAL', 'STATUS', 'SCRUM']
	var contacts = '[ { "name": "John Wayne" }, { "name": "Peter Parker" }, { "name": "Tony Starks" }, { "name": "Clark Kent" } ]'

})
