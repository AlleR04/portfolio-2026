
const expInfo = `
                <div class="exp1">
                    <h2 class="">Experiencia Relevante</h2>
                    <h4>TEGMETRO S.A.</h4>
                    <h4>Técnico en calibraciones</h4>
                    <li>Calibración de equipos de medición.</li>
                    <li>Mantenimiento y reparaciones.</li>
                    <li>Calibracion de instrumentos In - situ.</li>
                </div>
                

`

const expInfo2 = `
                <div class="exp1">
                    <h2 class="">Experiencia Relevante</h2>
                    <h4>MEGASYSCORP Ltda.</h4>
                    <h4>Técnico en reparaciones</h4>
                    <li>Mantenimiento de computadoras.</li>
                    <li>Mantenimiento de impresoras.</li>
                    <li>Instalacion de software y mantenimiento de software.</li>
                </div>
                

`

const expInfo3 = `
                <div class="exp1">
                    <h2 class="">Experiencia Relevante</h2>
                    <h4>Intcomex del Ecuador S.A.</h4>
                    <h4>Pasante Técnico</h4>
                    <li>Mantenimiento y reparación de equipos electronicos.</li>
                    <li>Instalación de camaras.</li>
                    <li>Ensambles de computadoras y laptops.</li>
                </div>
                

`
const expGallery = `
                <div class="gallery">
                    <div class="gallery-container">
                        <img src="./assets/2025_01.jpg" alt="">
                        <img src="./assets/2025_02.jpg" alt="">
                        <img src="./assets/2025_03.jpg" alt="">
                        <img src="./assets/2025_04.jpg" alt="">
                        
                    </div>
                </div>

`
const expGallery2 = `
                <div class="gallery">
                    <div class="gallery-container">
                        <img src="./assets/2024_01.jpg" alt="">
                        <img src="./assets/2024_02.jpg" alt="">
                        <img src="./assets/2024_03.jpg" alt="">
                        <img src="./assets/2024_04.jpg" alt="">
                    </div>
                </div>

`
const expGallery3 = `
                <div class="gallery">
                    <div class="gallery-container">
                        <img src="./assets/2022_01.jpg" alt="">
                        <img src="./assets/2022_02.jpg" alt="">
                        <img src="./assets/2022_03.jpg" alt="">
                        <img src="./assets/2022_04.jpg" alt="">
                    </div>
                </div>

`



let elementOne = document.querySelector(".year-1").addEventListener("mouseover", ()=>{
    const textSection = document.querySelector(".exp-info")
    textSection.innerHTML = expInfo
    textSection.innerHTML += expGallery
    
    
})
let elementTwo = document.querySelector(".year-2").addEventListener("mouseover", ()=>{

    const textSection = document.querySelector(".exp-info")
    textSection.innerHTML = expInfo2
    textSection.innerHTML += expGallery2
})
let elementThree = document.querySelector(".year-3").addEventListener("mouseover", ()=>{
    
    const textSection = document.querySelector(".exp-info")
    textSection.innerHTML = expInfo3
    textSection.innerHTML += expGallery3
})


