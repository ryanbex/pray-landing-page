$(document).ready(function() {
	console.log('inside');
    "use strict"; // Start of use strict
	$("#maitre-submit-button").click( function() {
		ga('pray.send', 'event', 'buttons', 'click', 'signup', 1);
		ga('bex.send', 'event', 'buttons', 'click', 'signup', 1);
		var email = $("input[type=email]").val();
		console.log( 'submit button fired' );
		if (email) {
			subscribe(email);
		}
	});

	function subscribe(email) {
		console.log( 'subscribe function fired' );
		$.ajax({
			method: "PUT",
			headers: {
			  'Content-Type' : 'application/json'
			},
			url: "https://l4dn8puutj.execute-api.us-east-1.amazonaws.com/prod/api/v1/email",
			data: email
		}).done(function( response ) {
			console.log( response );
			ga('pray.send', 'event', 'buttons', 'click', 'signup-success', 1);
			ga('bex.send', 'event', 'buttons', 'click', 'signup-success', 1);
		});
	}
}); // End of use strict

