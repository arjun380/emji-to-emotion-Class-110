//https://teachablemachine.withgoogle.com/models/76hOAAq5A/

prediction1 = '';
prediction2 = '';

Webcam.set(
    {
        width:360,
        height:250,
        image_format : 'png',
        png_quality:90
    });
    camera = document.getElementById("camera");

    Webcam.attach( '#camera' );
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">'; 
        });
    }
console.log('ml5 verson'+ ml5.version)

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/76hOAAq5A/modle.json',modelLoaded);

    function modleLoaded()
 {
     console.log('Modle Loaded!');
 }    

function speak(){
    var synth = window.speechSynthesis;
    speak_data_1 = "The first predection is"+ prediction1;
    speak_data_2 = " And the  second predection is"+ prediction2;
var utterThis = new SpeechSynthesisisUtterance(speak_data_1+speak_data_2);
synth.speak(utterThis);
}