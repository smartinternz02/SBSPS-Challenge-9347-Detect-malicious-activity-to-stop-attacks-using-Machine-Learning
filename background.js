chrome.extension.onRequest.addListener(function(prediction){
    if (prediction==1){
        alert("Warning: Malicious website detected !!");
    }else if (prediction==-1){
        alert("Website is good to go.... SAFE!!!");
    }
});