Webcam.set ({
    width: 350,
    height: 300,
    image_format : 'png',
    png_quality : 90
});

camera = document.getElementById ("camera");

Webcam.attach ( '#camera' );


function take_snapshot ()
{
    Webcam.snap (function(data_uri){
        document.getElementById ("result").innerHTML = '<img id "captured_image" src= "' +date_uri+"'/>';
    });
}

console.log ('m15 version:', m15.version);

classifier = m15.imgClassifier ('https://teachablemachine.withgoogle.com/models/v_s195bzE/model.json', modelLoaded);