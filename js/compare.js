/* http://tcorral.github.io/IM.js/ */
function confrontaCon(currentPic) {
	IM.setDebug(false);
	IM.setAsynchronous(true);
	IM.setTolerance(0);

	IM.compare(document.body,
		[
			    new IM.image(sketcher.toDataURL(black), dimens, dimens),
		       	new IM.image(currentPic, dimens, dimens),
		],
		function success(aCanvas, nElapsedTime, nPercentageMatch) {
		  // Code on success. All images have the same pixel info.
		  alert(nPercentageMatch.toString() + ": dovrebbe essere il punteggioottenuto");
		},
		function fail(oCanvas, nElapsedTime, nPercentageMatch) {
		 // Code on failing. Any image is different from others
		 alert("Come cazzo hai fatto a sbagliare TUTTO? I pixel sono quasi tutti neri, c'mon!!!");
		});
}