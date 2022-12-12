const inputWrapper = document.querySelector("main form .inputWrapper.email")

const input = document.querySelector(
  "main form .inputWrapper.email input#email"
)

const inputIcon = document.querySelectorAll(
  "main form .inputWrapper.email svg path"
)

function focusinModification() {
  inputWrapper.style.outline = "var(--orange) 2px solid"
  for (const i of inputIcon) {
    i.style.fill = "var(--orange)"
  }
}

function focusoutModification() {
  inputWrapper.style.outline = ""
  for (const i of inputIcon) {
    i.style.fill = ""
  }
}

input.addEventListener("focusin", () => {
  focusinModification()
})

input.addEventListener("focusout", () => {
  focusoutModification()
})
