let images = ["../public/assets/Dice1.png",
    "../public/assets/Dice2.png",
    "../public/assets/Dice3.png",
    "../public/assets/Dice4.png",
    "../public/assets/Dice5.png",
    "../public/assets/Dice6.png"];
let dice = document.querySelectorAll("img");

function roll() {
    dice.forEach(function (die) {
        die.classList.add("shake");
    });
    setTimeout(function () {
        dice.forEach(function (die) {
            die.classList.remove("shake");
        });

        let dieoneValue = Math.floor(Math.random() * 6)
            ;
        let dieTwoValue = Math.floor(Math.random() * 6)
            ;
        console.log(dieoneValue, dieTwoValue);
        document.querySelector("#die-1").setAttribute("src", images[dieoneValue]);
        document.querySelector("#die-2").setAttribute("src", images[dieTwoValue]);
        document.querySelector("#total").innerHTML = "Your roll is " + ((dieoneValue + 1 + dieTwoValue + 1));
    },
        1000
    );

}
roll();