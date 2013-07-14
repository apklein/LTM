// capture callback
var captureSuccess = function(mediaFiles) {
    var i, path, len;
    for (i = 0, len = mediaFiles.length; i < len; i += 1) {
        path = mediaFiles[i].fullPath;
        // do something interesting with the file
        $('#cameraPic').attr('src',path).css({'background-size':  '100%', 'background-repeat': 'no-repeat', 'width': '100px'});
        navigator.notification.alert(path, null, 'File Path');
    }
};

// capture error callback
var captureError = function(error) {
    navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
};

function capturePhoto(){
    navigator.device.capture.captureImage(captureSuccess, captureError,        {
        encodingType:navigator.camera.EncodingType.PNG
    });      
}
