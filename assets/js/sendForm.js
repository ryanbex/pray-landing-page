$(document).ready(function() {
	var URL = '<api-gateway-stage-url>/contact';
	console.log('hello');

	$('#formcontactus').on('click', '#prayer-button', function () {
		console.log('hello2');
    	ga('pray.send', 'event', 'buttons', 'click', 'prayer-submitted', 1);
		ga('bex.send', 'event', 'buttons', 'click', 'prayer-submitted', 1);
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
				ga('pray.send', 'event', 'buttons', 'click', 'prayer-sent', 1);
				ga('bex.send', 'event', 'buttons', 'click', 'prayer-sent', 1);
				document.getElementById("contactForm").reset();
			},
			error: function () {
				alert('Your prayer has been submitted.');
			 	document.getElementById("contactForm").reset();
			}
		});

	}
});