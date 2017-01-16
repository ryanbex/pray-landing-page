$(document).ready(function() {
	var URL = '<api-gateway-stage-url>/contact';
	console.log('hello');

	$('#formcontactus').on('click', '#prayer-button', function () {
		console.log('hello2');
    	sendToGA('prayer-submitted');
		var data = {
			name: $('#form-name').val(),
			email: $('#form-email').val(),
			prayer: $('#form-prayer').val()
		}
		console.log(data);
		sendEmail(data);

	});

	function sendEmail(data) {
		console.log('hello again');
		$.ajax({
			type: 'POST',
			url: URL,
			dataType: 'json',
			contentType: 'application/json',
			data: JSON.stringify(data),
			success: function () {
				alert('Thank you for your feedback.');
				sendToGA('prayer-sent');
				resetForm();
			},
			error: function () {
				alert('Your prayer has been submitted.');
			 	resetForm();
			}
		});

	}

	function resetForm() {
		$('#form-name').val("");
		$('#form-email').val("");
		$('#form-prayer').val("");
	}

	function sendToGA(eventName) {
		ga('pray.send', 'event', 'buttons', 'click', eventName, 1);
		ga('bex.send', 'event', 'buttons', 'click', eventName, 1);
	}
});