import { useState } from 'react'

function HexToRGB() {
  const body = document.querySelector('body')

  const [form, setForm] = useState({
    hex: '#',
    rgb: ''
  })

  const hexToRgb = hex => {
    let rgb
    try {
      rgb = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i
        ,(m, r, g, b) => '#' + r + r + g + g + b + b)
        .substring(1).match(/.{2}/g)
        .map(x => parseInt(x, 16))
      rgb = `rgb(${rgb.join(', ')})`
      body.style.backgroundColor = rgb
    }
    catch (err) {
      rgb = 'error'
      body.style.backgroundColor = 'rgb(136, 8, 8)'
    }

    return rgb
  }


  const handleHex = (e) => {
    let hex = e.target.value
    let rgb = hexToRgb(hex)
    setForm((prevState) => {
      return {
        ...prevState,
        hex,
        rgb
      }
    })
  }

  return (
    <div className='converter'>
      <input
        id='hex'
        className='hex'
        name='hex'
        value={ form.hex }
        onInput={ handleHex }
      />
      <input
        id='rgb'
        className='rgb'
        name='rgb'
        value={ form.rgb }
        onInput={ handleHex }
      />
    </div>
  )
}

export default HexToRGB