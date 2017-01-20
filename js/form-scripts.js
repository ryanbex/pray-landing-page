$("#signupForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();

    // Create variables with values from form
    var name = $("#first-name").val() + " " + $("#last-name").val();
    var phone = $("#phone").val().slice(1).replace(/[()-\s]/gi, '');
    var email = $("#email").val();
    var organization = $("#organization").val();

    // Show an alert if any of the fields are blank
	if (name == "" || phone == "" || email == "") {
		alert("Please fill out all fields");
		return;
	};

	alert(organization);

	// Post the form to register user
	$.post('https://test.pray.com/0.1/web/register', { name: name, email : email, phone: phone, organization: organization}, 
	    function(returnedData){
			$('#myModal').modal('show');
		}, 'json').fail(function() {
			alert("There was an error, please try again later");
	});

	// Submit the form
    submitForm();
});

