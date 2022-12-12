const productAdded = document.querySelector(
  "main .product .end .addToCar .productAdded"
)

const addToCarButton = document.querySelector(
  "main .product .end .addToCar button"
)

addToCarButton.addEventListener("click", () => {
  show()
})

function show() {
  productAdded.classList.add("show")

  setTimeout(() => {
    productAdded.classList.remove("show")
  }, 4000)
}
