var meetingsApp = angular.module('meetingsApp', [
	'ngRoute',
	'ngResource',
	'ui.calendar',
	'ui.bootstrap',
	'kendo.directives',
	'ngTagsInput',
	'textAngular',
	'toastr',
	'ngAnimate'
])

meetingsApp.config(['$routeProvider',
	function($routeProvider) {
		$routeProvider
			.when('/view', {
				templateUrl: 'views/view-meetings.html',
				controller: 'ViewMeetingsController'
			})
		.when('/add', {
			templateUrl: 'views/add-meeting.html',
			controller: 'AddMeetingController'
		})
		.when('/edit/:meetingId', {
			templateUrl: 'views/add-meeting.html',
			controller: 'AddMeetingController'
		})
		.otherwise({
			redirectTo: '/view'
		});
	}
]);
