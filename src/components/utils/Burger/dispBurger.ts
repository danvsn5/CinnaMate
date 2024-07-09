const dispBurger = () => {

    const topB = document.getElementById("topB");
    const topBA = document.getElementById("topBA");

    const midB = document.getElementById("midB");
    const midBA = document.getElementById("midBA");

    const botB = document.getElementById("botB");
    const botBA = document.getElementById("botBA");

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