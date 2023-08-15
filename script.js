let input = document.querySelector('input')
const MyKey = 'be04969215f645cf10850507f6e1884b'

function Valor() {
  let cidade = input.value // Capturando o valor do input quando o botão for clicado
  const ApiClima = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${MyKey}`

  fetch(ApiClima)
    .then(response => response.json())
    .then(data => {
      const temperaturaKelvin = data.main.temp
      const umidade = data.main.humidity
      const velocidadeVento = data.wind.speed

      let weathertoday = document.querySelector('#InfoClima')
      const Temperatura = temperaturaKelvin - 272.15
      weathertoday.textContent = `${Temperatura.toFixed(0)}°C`
    })
    .catch(error => {
      console.error('Ocorreu um erro:', error)
    })

  //Dependo da hora e da temperatura o Giff vai Mudar
  // hora
  let datetoday = new Date()
  let hora = datetoday.getHours()
  let imagemClimatica = document.querySelector('.imagemClima')
  if (Temperatura <= 20) {
    if (hora >= 6 && hora < 18) {
      imagemClimatica.setAttribute(
        'src',
        './Assets/WeatherAnimation/DiaNublado.gif'
      )
    } else {
      imagemClimatica.setAttribute(
        'src',
        './Assets/WeatherAnimation/NoiteDublada.gif'
      )
    }
  } else if (Temperatura >= 30) {
    imagemClimatica.setAttribute(
      'src',
      './Assets/WeatherAnimation/DiadeSol.gif'
    )
  } else if (Temperatura >= 20) {
    imagemClimatica.setAttribute(
      'src',
      './Assets/WeatherAnimation/NubladoVento.gif'
    )
  }
}
