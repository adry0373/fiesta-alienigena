function reconocer() {
    navigator.mediaDevices.getUserMedia({
        audio: true
    });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/lfFaG5_io/model.json', modelReady);

}

function modelReady() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.error(error);
    } else {
        console.log(results);
        random_numer_r = Math.floor(Math.random() * 255) + 1;
        random_numer_g = Math.floor(Math.random() * 255) + 1;
        random_numer_b = Math.floor(Math.random() * 255) + 1;

        document.getElementById("sonido").innerHTML = results[0].label;
        document.getElementById("porcentaje").innerHTML = (results[0].confidence * 100).toFixed(2) + "%"

        document.getElementById("resultado").style.color = "rgb(" + random_numer_r + "," + random_numer_g + "," + random_numer_r + ")"

        document.getElementById("presicion").style.color = "rgb(" + random_numer_r + "," + random_numer_g + "," + random_numer_r + ")"

        img1 = document.getElementById("img1")
        img2 = document.getElementById("img2")
        img3 = document.getElementById("img3")
        img4 = document.getElementById("img4")

        if (results[0].label == "Aplausos") {
            img1.src = "aliens-01.gif";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        } else if (results[0].label == "Campana") {
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.gif";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.png";

        }else if(results[0].label == "Chasquido"){
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.gif";
            img4.src = "aliens-04.png";
        }else{
            img1.src = "aliens-01.png";
            img2.src = "aliens-02.png";
            img3.src = "aliens-03.png";
            img4.src = "aliens-04.gif";
        }

    }
}
