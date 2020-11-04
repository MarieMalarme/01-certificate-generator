const canvas = document.getElementById('canvas')
const context = canvas.getContext('2d')

const w = 1754
const h = 1240
canvas.width = w
canvas.height = h

const font = new FontFace(
  'IBM Plex Mono',
  'url(https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@100&display=swap)',
)

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
    context.font = '90px IBM Plex Mono'
    display_text('name', 520, 695)
    display_text('level', 520, 1020)
    context.font = '35px IBM Plex Mono'
    display_text('xp', 155, 980)
    display_text('date', 155, 660)
  })
})

const button_save = document.querySelector('#button-save')
button_save.addEventListener('click', (e) => {
  const image = canvas
    .toDataURL('image/png')
    .replace('image/png', 'image/octet-stream')
  window.location.href = image
})

const display_image = () => {
  const pattern = context.createPattern(image, 'repeat')
  context.fillStyle = pattern
  context.fillRect(0, 0, w, h)
}

const display_text = (name, x, y) => {
  context.fillText(document.querySelector(`#input-${name}`).value, x, y)
}
