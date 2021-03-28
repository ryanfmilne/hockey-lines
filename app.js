let position = document.getElementsByClassName('position');
let rosterPlayers = document.getElementsByClassName('roster-players');
let logo = document.getElementsByClassName('logo');



for (var i = 0; i < position.length; i++) {
    position[i].onclick = function(target) {
        // pop up list of players
        openNav();
        let thePosition = this;
        

        for (var i = 0; i < rosterPlayers.length; i++) {
            rosterPlayers[i].onclick = function(target) {

                let selectedPlayer = this.innerHTML;
                console.log(selectedPlayer);

                    // loop through positions to check for selectedPlayer
                    for (var i = 0; i < position.length; i++) {
                        if (position[i].innerHTML.includes(selectedPlayer)) {
                            // alert('yep!');
                            position[i].innerHTML = "-";
                        }
                    }


                // close up list of players
                closeNav();
                thePosition.innerHTML = this.innerHTML;        
            }
        }

    }
}


// click logo to reset // 
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('.logo')) return;

	// Log the clicked element in the console
	console.log(event.target);
    for (var i = 0; i < position.length; i++) {
        position[i].innerHTML = "-";
    }

}, false);



/* Open Roster */
 function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
/* Close Roster */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
