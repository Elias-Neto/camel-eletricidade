const otherLoginOptionsButtons = document.querySelectorAll(
  "main .otherLoginOptions a"
)

const otherLoginOptionsPaths = document.querySelectorAll(
  "main .otherLoginOptions a svg path"
)

function mouseoverModification(button) {
  otherLoginOptionsButtons[button].style.background = "var(--orange)"
  otherLoginOptionsPaths[button].style.fill = "#fff"
}

function mouseoutModification(button) {
  otherLoginOptionsButtons[button].style.background = "#3f445a"
  otherLoginOptionsPaths[button].style.fill = "#F28705"
}

otherLoginOptionsButtons[0].addEventListener("mouseover", () => {
  mouseoverModification(0)
})

otherLoginOptionsButtons[0].addEventListener("mouseout", () => {
  mouseoutModification(0)
})

otherLoginOptionsButtons[1].addEventListener("mouseover", () => {
  mouseoverModification(1)
})

otherLoginOptionsButtons[1].addEventListener("mouseout", () => {
  mouseoutModification(1)
})
