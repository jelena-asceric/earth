const buttons = document.querySelectorAll('.btn');
const images = document.querySelectorAll('.images');
const changeText = document.querySelector('.change-text');
  
  buttons.forEach(button => {
    button.addEventListener('click', el => {
            buttons.forEach(buttonInArray => {
                if(buttonInArray.id !== button.id) {
                    buttonInArray.classList.remove('active')
                }
                else {
                    button.classList.add('active');
                }
            })

            images.forEach(image => {
                if(button.id == 'third-btn') {
                    if(image.id == 'bit-map'){
                       image.classList.remove('hidden-image')
                       changeText.innerHTML = `
                         The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. 
                         Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.
                        `;   
                    } else {
                        image.classList.add('hidden-image')
                    }
                } else if(button.id == 'second-btn') {
                    if(image.id == 'image-mask') {
                        image.classList.remove('hidden-image');
                        changeText.innerHTML = `
                        Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. 
                        The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.
                        `;
                      } else {
                        image.classList.add('hidden-image')
                      }
                } else {
                    image.classList.add('hidden-image');   
                    changeText.innerHTML = `
                        Third planet from the Sun and the only known planet to harbor life.
                        About 29.2% of Earth's surface is land with remaining 70.8% is covered with water.
                        Earth's distance from the Sun, physical properties and geological history have allowed life
                        to evolve and thrive.
                    `;
                }
            })
    })
  })

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu')

hamburger.addEventListener('click', () => {
    menu.classList.toggle('show');
    hamburger.classList.toggle('show');
})
