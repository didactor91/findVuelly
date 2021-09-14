export function populateScreen(
  mainElement: HTMLElement,
  people: number,
  img: { url: string; height: number; width: number }
): void {
  const { url, height, width } = img

  const yRel = mainElement.clientHeight
  const xRel = mainElement.clientWidth

  console.log(xRel, yRel)

  for (let divs = 0; divs < people; divs++) {
    const imgWrapper = document.createElement('figure')
    const img = document.createElement('img')

    img.src = url
    img.style.height = '100%'
    img.style.width = '100%'

    const currentY: number = Math.floor(Math.random() * (yRel - 1.1 * height))

    const currentX: number = Math.floor(Math.random() * (xRel - 1.1 * width))

    imgWrapper.style.height = height + 'px'
    imgWrapper.style.width = width + 'px'
    imgWrapper.style.top = currentY + 'px'
    imgWrapper.style.left = currentX + 'px'
    imgWrapper.style.zIndex = '' + (Math.floor(Math.random() * 999999) + 1)
    imgWrapper.style.position = 'inherit'
    imgWrapper.style.margin = '0'
    imgWrapper.style.padding = '0'

    imgWrapper.appendChild(img)
    mainElement.appendChild(imgWrapper)
  }
}
