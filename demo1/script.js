

$(()=>{
	
	navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || window.navigator.mozGetUserMedia;

	let video1 = document.getElementById('video1');
	
	navigator.mediaDevices.getUserMedia({video: true, audio: false})
		.then(function (stream) { // success
			video1.srcObject = stream;
		}).catch(function (error) { // error
			console.error('mediaDevice.getUserMedia() error:', error);
			$('#err').html('エラー出てるよ');
			return;
		});

});
