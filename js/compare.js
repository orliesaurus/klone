/* http://tcorral.github.io/IM.js/ */
function confrontaCon(currentPic) {
	IM.setDebug(false);
	IM.setAsynchronous(false);
	IM.setTolerance(100);

	$('#imgappr').html('<canvas id="compare" style:"visible:hidden;"/>');
	var can = document.getElementById('compare');
    var ctx = can.getContext('2d');
    var img = new Image();
	img.onload = function(){
	    can.width = img.width;
	    can.height = img.height;
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
		  alert(nPercentageMatch.toString()  + " Points!")
		  $('#imgappr').html('');
		},
		function fail(oCanvas, nElapsedTime, nPercentageMatch) {
		 // Code on failing. Any image is different from others
		 console.log("Come cazzo hai fatto a sbagliare TUTTO? I pixel sono quasi tutti neri, c'mon!!!");
		 $('#imgappr').html('');
		});
}