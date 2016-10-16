var URL = '<api-gateway-stage-url>/contact'
$console.log('hello');
$('#formcontactus').submit(function (event) {
	event.preventDefault();
 
	var data = {
		name: $('#form-name').val(),
		email: $('#form-email').val(),
		prayer: $('#form-prayer').val()
	}
 
	$.ajax({
		type: 'POST',
		url: URL,
		dataType: 'json',
		contentType: 'application/json',
		data: JSON.stringify(data),
		success: function () {
			alert('Thank you for your feedback.');
			document.getElementById("contactForm").reset();
		},
		error: function () {
			alert('Your prayer has been submitted.');
		 	document.getElementById("contactForm").reset();
		}
	});
});