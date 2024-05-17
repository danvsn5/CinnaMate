const hideBurger = () => {

    var topB = document.getElementById("topB");
    var topBA = document.getElementById("topBA");

    var midB = document.getElementById("midB");
    var midBA = document.getElementById("midBA");

    var botB = document.getElementById("botB");
    var botBA = document.getElementById("botBA");

    if (topB) topB.style.width = "35px"
    if (topBA) topBA.style.width = "35px"
    if (midB) midB.style.width = "30px"
    if (midBA) midBA.style.width = "30px"
    if (botB) botB.style.width = "35px"
    if (botBA) botBA.style.width = "35px"

    if (topB) topB.style.background = "#ffffff"
    if (topBA) topBA.style.background = "#ffffff"
    if (midB) midB.style.background = "#ffffff"
    if (midBA) midBA.style.background = "#ffffff"
    if (botB) botB.style.background = "#ffffff"
    if (botBA) botBA.style.background = "#ffffff"
}

export default hideBurger