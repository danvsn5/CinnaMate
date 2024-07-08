const hideBurger = () => {

    const topB = document.getElementById("topB");
    const topBA = document.getElementById("topBA");

    const midB = document.getElementById("midB");
    const midBA = document.getElementById("midBA");

    const botB = document.getElementById("botB");
    const botBA = document.getElementById("botBA");

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