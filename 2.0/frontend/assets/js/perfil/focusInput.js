const inputWrapper = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp .top .inputWrapper"
)

const input = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp .top .inputWrapper input "
)

const inputIconEmail = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp.newEmail .top .inputWrapper .inputIcon path"
)

const inputIconCurrentPassword = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp.newPassword .top .inputWrapper.currentPassword .inputIcon path"
)

const inputIconNewPassword = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp.newPassword .top .inputWrapper.newPassword .inputIcon path"
)

const inputIconConfirmPassword = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp.newPassword .top .inputWrapper.confirmPassword .inputIcon path"
)

const inputIconCpf = document.querySelectorAll(
  "main form fieldset:nth-child(2) .inputWrapper .popUp.newCpf .top .inputWrapper .inputIcon path"
)

const inputIcons = [
  inputIconEmail,
  inputIconCurrentPassword,
  inputIconNewPassword,
  inputIconConfirmPassword,
  inputIconCpf,
]

function focusinModification(inputType) {
  inputWrapper[inputType].style.outline = "var(--orange) 2px solid"
  for (const i of inputIcons[inputType]) {
    i.style.fill = "var(--orange)"
  }
}

function focusoutModification(inputType) {
  inputWrapper[inputType].style.outline = ""
  for (const i of inputIcons[inputType]) {
    i.style.fill = ""
  }
}

input[0].addEventListener("focusin", () => {
  focusinModification(0)
})

input[0].addEventListener("focusout", () => {
  focusoutModification(0)
})

input[1].addEventListener("focusin", () => {
  focusinModification(1)
})

input[1].addEventListener("focusout", () => {
  focusoutModification(1)
})

input[2].addEventListener("focusin", () => {
  focusinModification(2)
})

input[2].addEventListener("focusout", () => {
  focusoutModification(2)
})

input[3].addEventListener("focusin", () => {
  focusinModification(3)
})

input[3].addEventListener("focusout", () => {
  focusoutModification(3)
})

input[4].addEventListener("focusin", () => {
  focusinModification(4)
})

input[4].addEventListener("focusout", () => {
  focusoutModification(4)
})
