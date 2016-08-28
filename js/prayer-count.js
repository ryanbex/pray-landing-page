  window.onload = refreshCounter;
  function clickCounter() {
      ga('pray.send', 'event', 'buttons', 'click', 'pray', 1);
      ga('bex.send', 'event', 'buttons', 'click', 'pray', 1);
      generalPrayerCounter();
      prayerEventCounter();
      
  }

  function generalPrayerCounter() {
      $.ajax({
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        url: "https://wsmtet5y0c.execute-api.us-east-1.amazonaws.com/prod/prayer-count",
        data: 'general'
      }).done(function( response ) {
          console.log( response );
          document.getElementById("result").innerHTML = "";
          document.getElementById("result").innerHTML = "You've prayed!";
      });
  }

  function prayerEventCounter() {
      $.ajax({
        method: "POST",
        headers: {
          'Content-Type' : 'application/json'
        },
        url: "https://wsmtet5y0c.execute-api.us-east-1.amazonaws.com/prod/prayer-count",
        data: 'italy-earthquake'
      }).done(function( response ) {
          console.log( response );
          document.getElementById("result").innerHTML = "";
          document.getElementById("result").innerHTML = "You've prayed!";
      });
  }

  function refreshCounter() {
      $.ajax({
        url: "https://wsmtet5y0c.execute-api.us-east-1.amazonaws.com/prod/prayer-count",
        data: { prayerEvent: "general"}
      }).done(function( response ) {
        document.getElementById("result").innerHTML = response.Item.prayerCount + " Prayers";
      });
  }

  window.setInterval(function(){
    refreshCounter();
  }, 2000);