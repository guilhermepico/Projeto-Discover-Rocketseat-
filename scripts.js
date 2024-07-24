function toggleMode() {

    const html = document.documentElement
    html.classList.toggle("light")


    const img = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
      img.setAttribute("src", "./assets/assets/avatar-light.png")
    }
    else {
      img.setAttribute("src", "./assets/assets/avatar-dark.png")
    }



    const alt = document.querySelector("#profile img")

    if(html.classList.contains("light")) {
      alt.setAttribute("alt", "Foto de Guilherme, usando um óculos escuro, sorrindo mostrando os dentes e com um fundo de praia num dia ensolarado")
    }
    else{
      alt.setAttribute("alt")
    }
}