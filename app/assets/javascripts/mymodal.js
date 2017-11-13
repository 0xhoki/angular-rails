var hideModal;
hideModal = function (){
	var modal = document.getElementById('myModal2017');
	if(modal) {
	    $('#myModal2017').addClass("hidden");
	}
}
var disableUndo;
disableUndo = function(state, cnt = -1){
	$('#undo').toggleClass('disabled', state);
	if(cnt != -1){
		document.getElementById("undotext").innerHTML = "Undo&nbsp"+cnt.toString();
	}
}

var disableRedo;
disableRedo = function(state, cnt = -1){
	$('#redo').toggleClass('disabled', state);
	if(cnt != -1){
		document.getElementById("redotext").innerHTML = "Redo&nbsp"+cnt.toString();
	}
}
var ready;
ready = function() {
	// Get the modal
	var modal = document.getElementById('myModal2017');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn2017");

	// When the user clicks on the button, open the modal 
	if(btn){
			btn.onclick = function() {
		    modal.style.visibility = "visible";
		    $('#myModal2017').removeClass("hidden");
		}
	}

	// When the user clicks anywhere outside of the modal, close it
	window.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.visibility = "hidden";
	        $('#myModal2017').addClass("hidden");
	    }
	}


    var undoA = document.getElementById('undo');
    if(undoA){
    	disableUndo(true);

	}
	var redoA = document.getElementById('redo');
    if(redoA){
    	disableRedo(true);
	}
	if(modal) modal.style.visibility = "hidden";
}
$(document).ready(ready);
$(document).on('turbolinks:load', ready);