/* http://tcorral.github.io/IM.js/ */
function confrontaCon(currentPic) {
	IM.setDebug(false);
	IM.setAsynchronous(false);
	IM.setTolerance(100);

	$('#imgappr').html('<canvas id="compare" style:"visible:hidden;"/>');
	var can = document.getElementById('compare');
	can.width = dimens;
	can.height = dimens;

    var ctx = can.getContext('2d');

	//set background color
	//ctx.fillStyle = 'green';
	//draw background / rect on entire this.canvas.get(0)
	//ctx.fillRect(0,0,dimens,dimens);

    var img = new Image();
	img.onload = function(){
	    ctx.drawImage(img, 0, 0, dimens, dimens);
	}

	img.src = currentPic;

	IM.compare(
		[
			    document.getElementById("sketch"),
		       	document.getElementById("compare")
		],
		function success(aCanvas, nElapsedTime, nPercentageMatch) {
		  // Code on success. All images have the same pixel info.
		  if (nPercentageMatch) {
		  	punti += Math.floor(nPercentageMatch);
		  	livello += 1;
		  	$("#punteggio").html(punti.toString()  + " Points!");
		  	$("#livello").html("Level "+livello.toString());
		  }
		  $('#imgappr').html('');
		},
		function fail(oCanvas, nElapsedTime, nPercentageMatch) {
		 // Code on failing. Any image is different from others
		 //alert(nPercentageMatch.toString()  + " Points! FAIL")
		 $('#imgappr').html('');
		});
}