const inputWrapperEmail = document.querySelector(
  "main form fieldset .inputWrapper.email"
)

const inputWrapperPassword = document.querySelector(
  "main form fieldset .inputWrapper.password"
)

const inputsWrappers = [inputWrapperEmail, inputWrapperPassword]

const inputEmail = document.querySelector(
  "main form fieldset .inputWrapper.email input#email"
)

const inputPassword = document.querySelector(
  "main form fieldset .inputWrapper.password input#password"
)

const inputs = [inputEmail, inputPassword]

const emailInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.email svg path"
)

const passwordInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.password svg path"
)

const inputsIcons = [emailInputIcon, passwordInputIcon]

function focusinModification(inputType) {
  inputsWrappers[inputType].style.outline = "var(--orange) 2px solid"
  for (const i of inputsIcons[inputType]) {
    i.style.fill = "var(--orange)"
  }
}

function focusoutModification(inputType) {
  inputsWrappers[inputType].style.outline = ""
  for (const i of inputsIcons[inputType]) {
    i.style.fill = ""
  }
}

inputs[0].addEventListener("focusin", () => {
  focusinModification(0)
})

inputs[0].addEventListener("focusout", () => {
  focusoutModification(0)
})

inputs[1].addEventListener("focusin", () => {
  focusinModification(1)
})

inputs[1].addEventListener("focusout", () => {
  focusoutModification(1)
})
