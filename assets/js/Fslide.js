
  const cont1 = document.querySelector('.sun1')
  const cont2 = document.querySelector('.sun2')
  var button1 = document.getElementById("button1");
  var button2 = document.getElementById("button2");
  let sliderf = document.querySelector('.FQ-slider');

  window.onload = function() {
    button1.classList.add("btn-activet");
  }

  button1.addEventListener("click", function() {
    activeBtn()
    
  });

  button2.addEventListener("click", () => {
    activeBtn2()
    
  });

    function activeBtn() {
      button1.classList.add("btn-activet");
      button2.classList.remove("btn-activet");
      cont1.classList.remove("active_One")
      cont2.classList.remove("active_Tow")
    }

  function activeBtn2() {
      button1.classList.remove("btn-activet");
      button2.classList.add("btn-activet");
      cont1.classList.add("active_One")
      cont2.classList.add("active_Tow")
    }

    var interval = setInterval(function() {
      activeBtn()
        }, 4000);

    var interval = setInterval(function() {
      activeBtn2()
        }, 8000);

        document.getElementById("stop").addEventListener("mouseover", function() {
          clearInterval(interval);
        });

        document.getElementById("stop").addEventListener("mouseout", function(){
          var interval = setInterval(function() {
            activeBtn()
              }, 4000);
      
          var interval = setInterval(function() {
            activeBtn2()
              }, 8000);
        });
        
