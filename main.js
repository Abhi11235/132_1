prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("");

function modelLoaded()
{
    console.log('modelLoad');
}

function check()
{
    img=document.getElementById('capture_image');
    classifier.classify(img, gotResult);
}

function gotResult(error,results) {
    if(error) {
        console.og(error);
    }else{
        console.log(results);
        
        if(results [0].label=="Mask")
        {
            document.getElementById("update_emoji").inerHTML= "&#x1F637";
        }
       }
}


//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 


//define function gotResult(error, results)
