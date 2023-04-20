onmessage = send();

function send(message) {

    const screen = document.getElementById('test');
    var i = 0;
    setInterval(function() {
      console.log("Hello, world!");
      i=i+1;
      screen.innerHTML=i;       
    },6000);
  }