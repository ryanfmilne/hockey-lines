let player = document.getElementsByClassName('player');
let rosterPlayers = document.getElementsByClassName('roster-players');


for (var i = 0; i < player.length; i++) {
    player[i].onclick = function(target) {
        // pop up list of players
        openNav();
        let thePlayer = this;
        

        for (var i = 0; i < rosterPlayers.length; i++) {
            rosterPlayers[i].onclick = function(target) {
                // close up list of players
                closeNav();
                thePlayer.innerHTML = this.innerHTML;
                
            }
        }


    }
}


function reset() {
    player.innerHTML = "-";
}

/* Open */
function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  /* Close */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }