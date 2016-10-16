$(document).ready(function() {
	var URL = '<api-gateway-stage-url>/contact';
	$console.log('hello');

	$('#formcontactus').submit(function (event) {
		$console.log('hello2');
		event.preventDefault();
    	ga('pray.send', 'event', 'buttons', 'click', 'prayer-submitted', 1);
		ga('bex.send', 'event', 'buttons', 'click', 'prayer-submitted', 1);
		var data = {
			name: $('#form-name').val(),
			email: $('#form-email').val(),
			prayer: $('#form-prayer').val()
		}

	});

	function sendEmail(data) {
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