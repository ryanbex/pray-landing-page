  window.onload = refreshCounter;
  function handleSubscription() {
      ga('pray.send', 'event', 'buttons', 'click', 'subscribe', 1);
      ga('bex.send', 'event', 'buttons', 'click', 'subscribe', 1);
      subscribe(email);
  }

  function subscribe(email) {
      $.ajax({
        method: "PUT",
        headers: {
          'Content-Type' : 'application/json'
        },
        url: "https://l4dn8puutj.execute-api.us-east-1.amazonaws.com/prod/api/v1/email",
        data: email
      }).done(function( response ) {
          console.log( response );
          document.getElementById("result").innerHTML = "";
          document.getElementById("result").innerHTML = "You've prayed!";
      });
  }