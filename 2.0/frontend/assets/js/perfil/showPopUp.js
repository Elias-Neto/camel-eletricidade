const closeButton = document.querySelectorAll(
  "main form fieldset:nth-child(2) .popUp .top svg.closeButton"
)

const changeButton = document.querySelectorAll(
  "main form fieldset:nth-child(2) .subWrapper span"
)

const popUpElement = document.querySelectorAll(
  "main form fieldset:nth-child(2) .popUp"
)

const popUpOverlay = document.querySelector(".popUpOverlay")

let hide = false

changeButton[0].addEventListener("click", () => {
  popUp(0)
})

closeButton[0].addEventListener("click", () => {
  popUp(0)
})

changeButton[1].addEventListener("click", () => {
  popUp(1)
})

closeButton[1].addEventListener("click", () => {
  popUp(1)
})

changeButton[2].addEventListener("click", () => {
  popUp(2)
})

closeButton[2].addEventListener("click", () => {
  popUp(2)
})

function showPopUp(inputType) {
  popUpElement[inputType].classList.add("show")
  popUpOverlay.classList.add("show")
}

function hidePopUp(inputType) {
  popUpElement[inputType].classList.remove("show")
  popUpOverlay.classList.remove("show")
}

function popUp(inputType) {
  if (hide) {
    hidePopUp(inputType)
    hide = false
  } else {
    showPopUp(inputType)
    hide = true
  }
}

popUpOverlay.addEventListener("click", () => {
  for (const p of popUpElement) {
    p.classList.remove("show")
  }
  popUpOverlay.classList.remove("show")
  hide = false
})
