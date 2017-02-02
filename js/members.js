$("#signupForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();

    // Create variables with values from form
    var name = $("#first-name").val() + " " + $("#last-name").val();
    var phone = $("#phone").val().slice(1).replace(/[()-\s]/gi, '');
    var email = $("#email").val();
    var organization = $("#organization").val();
    var server = 'api';
    if ($("#test").prop('checked')) {
      server = 'test';
    } else if ($("#dev").prop('checked')) {
      server = 'dev';
    } else if ($("#stage").prop('checked')) {
      server = 'stage';
    } 

    // Show an alert if any of the fields are blank
  	if (name == "" || phone == "" || email == "") {
  		alert("Please fill out all fields");
  		return;
  	};

    var url = `https://${server}.pray.com/0.1/web/register`;

  	// Post the form to register user
  	$.post(url, { name: name, email : email, phone: phone, organization: organization}, 
  	    function(returnedData){
  			$('#myModal').modal('show');
  		}, 'json').fail(function() {
  			alert("There was an error, please try again later");
  	});

  	// Submit the form
      submitForm();
});

