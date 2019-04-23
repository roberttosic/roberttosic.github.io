/*
	Directive by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			wide:      [ '1281px',  '1680px' ],
			normal:    [ '981px',   '1280px' ],
			narrow:    [ '841px',   '980px'  ],
			narrower:  [ '737px',   '840px'  ],
			mobile:    [ '481px',   '736px'  ],
			mobilep:   [ null,      '480px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

})(jQuery);



// Get the modal
var modal = document.getElementById('demonModal');

// Get the button that opens the modal
var btn = document.getElementById("demon");
var btn2 = document.getElementById("demon2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[1];

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    modal.style.display = "block";
}


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
   
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
    else if (event.target == modalVR)
    {
        modalVR.style.display = "none";
    }
    else if (event.target == modalSound)
    {
        modalSound.style.display = "none";
    }
}


var modalVR = document.getElementById('vrModal');

var vrbtn = document.getElementById("vr");
var vrbtn2 = document.getElementById("vr2");
var span2 = document.getElementsByClassName("close")[0];

vrbtn.onclick = function() {
  modalVR.style.display = "block";
}
vrbtn2.onclick = function() {
   modalVR.style.display = "block";
}

span2.onclick = function() {
  modalVR.style.display = "none";
   
}


var modalSound = document.getElementById('soundModal');

var soundbtn = document.getElementById("sound");
var soundbtn2 = document.getElementById("sound2");
var span3 = document.getElementsByClassName("close")[2];

soundbtn.onclick = function() {
  modalSound.style.display = "block";
}
soundbtn2.onclick = function() {
   modalSound.style.display = "block";
}

span3.onclick = function() {
  modalSound.style.display = "none";
   
}



