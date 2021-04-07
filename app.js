let position = document.getElementsByClassName('position');
let rosterPlayers = document.getElementsByClassName('roster-players');
let logo = document.getElementsByClassName('logo');
let refreshButton = document.querySelector("#refresh-btn")


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

// Refresh button open dialog //
refreshButton.addEventListener("click", openClearDialog)


// click logo to reset // 
document.addEventListener('click', function (event) {

	// If the clicked element doesn't have the right selector, bail
	if (!event.target.matches('#confirm')) return;

	// Log the clicked element in the console
	console.log(event.target);
    for (var i = 0; i < position.length; i++) {
        position[i].innerHTML = "-";
    }

    closeClearDialog();

}, false);


/* Cancel Button */
let cancelButton = document.querySelector("#cancel");
cancelButton.addEventListener('click', function() {
    closeClearDialog();
});

/* Open Clear Dialog */
function openClearDialog() {
    document.getElementById("clearDialog").style.height = "100px";
    document.getElementById("clearDialog").style.padding = "6px 0px";
  }

/* Close Clear Dialog */
function closeClearDialog() {
    document.getElementById("clearDialog").style.height = "0%";
    document.getElementById("clearDialog").style.padding = "0";
  }



/* Open Roster */
 function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
/* Close Roster */
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }


  
/* Disable Zoom */
document.addEventListener('gesturestart', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gesturechange', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});

document.addEventListener('gestureend', function(e) {
    e.preventDefault();
    // special hack to prevent zoom-to-tabs gesture in safari
    document.body.style.zoom = 0.99;
});
