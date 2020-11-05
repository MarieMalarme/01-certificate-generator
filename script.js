const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const w = 1754
const h = 1240
canvas.width = w
canvas.height = h

const image = new Image()
image.src = './image.jpg'
image.onload = () => display_image()

const inputs = ['name', 'level', 'xp', 'date']
inputs.map((name) => {
  const input = document.querySelector(`#input-${name}`)
  input.addEventListener('keyup', (e) => {
    context.clearRect(0, 0, w, h)
    display_image()
    context.fillStyle = 'white'
    context.font = '90px ibm-plex-sans'
    display_text('name', 520, 695)
    display_text('level', 520, 1020)
    context.font = '35px ibm-plex-sans'
    display_text('xp', 155, 980)
    display_text('date', 155, 660)
  })
})

const button_save = document.querySelector('#button-save')
button_save.addEventListener('click', (e) => {
  const student_name = document.querySelector('#input-name').value
  const file_name = `01_certificate-${student_name
    .replace(/\./g, '')
    .split(' ')
    .join('_')}`
  button_save.setAttribute('download', file_name)
  const image = canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')
  e.target.href = image
})

const display_image = () => {
  const pattern = context.createPattern(image, 'repeat')
  context.fillStyle = pattern
  context.fillRect(0, 0, w, h)
}

const display_text = (name, x, y) => {
  context.fillText(document.querySelector(`#input-${name}`).value, x, y)
}
