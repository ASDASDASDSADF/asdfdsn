        // script.js
        function crearEstrellaFugaz() {
            const estrella = document.createElement("div");
            estrella.className = "estrella-fugaz";
            estrella.style.left = Math.random() * 100 + "vw";
            estrella.style.animationDuration = Math.random() * 2 + 1 + "s";
            document.querySelector(".lluvia").appendChild(estrella);
        
            setTimeout(() => {
                estrella.remove();
            }, 2000);
        }

        setInterval(crearEstrellaFugaz, 200);

        document.addEventListener("DOMContentLoaded", function() {
            document.body.style.display = "none";
            setTimeout(function() {
              document.body.style.display = "block";
            }, 3000);
          });
          
          