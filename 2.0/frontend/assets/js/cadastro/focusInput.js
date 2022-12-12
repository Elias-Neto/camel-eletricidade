const inputWrapperEmail = document.querySelector(
  "main form fieldset .inputWrapper.email"
)
const inputWrapperName = document.querySelector(
  "main form fieldset .inputWrapper.name"
)
const inputWrapperPassword = document.querySelector(
  "main form fieldset .inputWrapper.password"
)
const inputWrapperConfirmPassword = document.querySelector(
  "main form fieldset .inputWrapper.confirmPassword"
)

const inputsWrappers = [
  inputWrapperEmail,
  inputWrapperName,
  inputWrapperPassword,
  inputWrapperConfirmPassword,
]

const inputEmail = document.querySelector(
  "main form fieldset .inputWrapper.email input#email"
)
const inputName = document.querySelector(
  "main form fieldset .inputWrapper.name input#name"
)
const inputPassword = document.querySelector(
  "main form fieldset .inputWrapper.password input#password"
)
const inputConfirmPassword = document.querySelector(
  "main form fieldset .inputWrapper.confirmPassword input#confirmPassword"
)

const inputs = [inputEmail, inputName, inputPassword, inputConfirmPassword]

const emailInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.email svg path"
)

const nameInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.name svg path"
)

const passwordInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.password svg path"
)

const confirmPasswordInputIcon = document.querySelectorAll(
  "main form fieldset .inputWrapper.confirmPassword svg path"
)

const inputsIcons = [
  emailInputIcon,
  nameInputIcon,
  passwordInputIcon,
  confirmPasswordInputIcon,
]

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

inputs[2].addEventListener("focusin", () => {
  focusinModification(2)
})

inputs[2].addEventListener("focusout", () => {
  focusoutModification(2)
})

inputs[3].addEventListener("focusin", () => {
  focusinModification(3)
})

inputs[3].addEventListener("focusout", () => {
  focusoutModification(3)
})
