$("#signupForm").submit(function(event){
    // cancels the form submission
    event.preventDefault();

    // Create variables with values from form
    var phone = $("#phone").val().slice(1).replace(/[()-\s]/gi, '');
    var name = $("#name").val();
    var description = $("#description").val();
    var affiliation = $("#affiliation").val();
    var street = $("#street-address").val();
    var city = $("#city").val();
    var state = $("#state").val();
    var zipcode = $("#zipcode").val();

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
  alert(server);

  var url = `https://${server}.pray.com/0.1/organizations`;
  var organization = {
    name: name, 
    email : email, 
    phone: phone, 
    description: description,
    affiliation: affiliation,
    street: street,
    city: city,
    state: state,
    zipcode: zipcode
  };
  // Post the form to register user
  $.post(url, organization, 
      function(returnedData){
      $('#myModal').modal('show');
    }, 'json').fail(function() {
      alert("There was an error, please try again later");
  });

  // Submit the form
    submitForm();
});

