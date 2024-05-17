const dispBurger = () => {

    var topB = document.getElementById("topB");
    var topBA = document.getElementById("topBA");

    var midB = document.getElementById("midB");
    var midBA = document.getElementById("midBA");

    var botB = document.getElementById("botB");
    var botBA = document.getElementById("botBA");

    if (topB) topB.style.width = "100%"
    if (topBA) topBA.style.width = "100%"
    if (midB) midB.style.width = "100%"
    if (midBA) midBA.style.width = "100%"
    if (botB) botB.style.width = "100%"
    if (botBA) botBA.style.width = "100%"

    if (topB) topB.style.background = "var(--light-purple)"
    if (topBA) topBA.style.background = "var(--light-purple)"
    if (midB) midB.style.background = "var(--light-purple)"
    if (midBA) midBA.style.background = "var(--light-purple)"
    if (botB) botB.style.background = "var(--light-purple)"
    if (botBA) botBA.style.background = "var(--light-purple)"
}

export default dispBurger