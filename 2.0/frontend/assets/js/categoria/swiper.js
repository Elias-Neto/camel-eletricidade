const swiper = new Swiper("main .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  spaceBetween: 30,
  slidesPerView: 1,
  allowTouchMove: false,
  centeredSlides: true,
})

const arandelas = document.querySelector("main .swiper ul li.arandelas")

const balizadores = document.querySelector("main .swiper ul li.balizadores")

const fitasLed = document.querySelector("main .swiper ul li.fitasLed")

const lampadasFlourescente = document.querySelector(
  "main .swiper ul li.lampadasFluorescentes"
)

const lampadasLed = document.querySelector("main .swiper ul li.lampadasLed")

const li = [
  arandelas.classList,
  balizadores.classList,
  fitasLed.classList,
  lampadasFlourescente.classList,
  lampadasLed.classList,
]

const section = document.querySelector("main section.swiper")

const productUl = document.querySelector("main section.products ul")

function isActive() {
  const productImg = document.querySelectorAll(
    "main .products ul li a .imageContainer img"
  )

  const productName = document.querySelectorAll(
    "main .products ul li a .productName"
  )

  const divPrice = document.querySelectorAll("main .products ul li a .price")

  const productPrice = document.querySelectorAll(
    "main .products ul li a  .price .productPrice"
  )

  const productPromotionPrice = document.querySelectorAll(
    "main .products ul li a .price .productPromotionPrice"
  )

  for (classList of li) {
    switch (classList[1]) {
      case "arandelas":
        for (_class of classList) {
          if (_class == "swiper-slide-active") {
            for (img of productImg) {
              img.setAttribute("src", "../assets/images/categoria/arandela.png")
            }
            for (_name of productName) {
              _name.innerText = "Arandela X"
            }
            for (div of divPrice) {
              div.classList.add("promotion")
            }
            for (price of productPrice) {
              price.innerText = "R$ 100"
            }
            for (promotionPrice of productPromotionPrice) {
              promotionPrice.innerText = "R$ 74,99"
            }
          }
        }
        break
      case "balizadores":
        for (_class of classList) {
          if (_class == "swiper-slide-active") {
            for (img of productImg) {
              img.setAttribute(
                "src",
                "../assets/images/categoria/balizador.png"
              )
            }
            for (_name of productName) {
              _name.innerText = "Balizador Y"
            }
            for (div of divPrice) {
              div.classList.remove("promotion")
            }
            for (price of productPrice) {
              price.innerText = "R$ 50,00"
            }
            for (promotionPrice of productPromotionPrice) {
              promotionPrice.innerText = ""
            }
          }
        }
        break
      case "fitasLed":
        for (_class of classList) {
          if (_class == "swiper-slide-active") {
            for (img of productImg) {
              img.setAttribute("src", "../assets/images/categoria/fitaLed.png")
            }
            for (_name of productName) {
              _name.innerText = "Fita Led Z"
            }
            for (div of divPrice) {
              div.classList.remove("promotion")
            }
            for (price of productPrice) {
              price.innerText = "R$ 29,99"
            }
            for (promotionPrice of productPromotionPrice) {
              promotionPrice.innerText = ""
            }
          }
        }
        break
      case "lampadasFluorescentes":
        for (_class of classList) {
          if (_class == "swiper-slide-active") {
            for (img of productImg) {
              img.setAttribute(
                "src",
                "../assets/images/categoria/lampadaFluorescente.png"
              )
            }
            for (_name of productName) {
              _name.innerText = "Lâmpada Fluorescente A"
            }
            for (div of divPrice) {
              div.classList.add("promotion")
            }
            for (price of productPrice) {
              price.innerText = "R$ 40,00"
            }
            for (promotionPrice of productPromotionPrice) {
              promotionPrice.innerText = "R$ 35,00"
            }
          }
        }
        break
      case "lampadasLed":
        for (_class of classList) {
          if (_class == "swiper-slide-active") {
            for (img of productImg) {
              img.setAttribute(
                "src",
                "../assets/images/categoria/lampadaLed.png"
              )
            }
            for (_name of productName) {
              _name.innerText = "Lâmpada LED B"
            }
            for (div of divPrice) {
              div.classList.remove("promotion")
            }
            for (price of productPrice) {
              price.innerText = "R$ 67,00"
            }
            for (promotionPrice of productPromotionPrice) {
              promotionPrice.innerText = ""
            }
          }
        }
        break
      default:
        break
    }
  }
}

section.addEventListener("click", () => {
  isActive()
})

const productListItem = document.createElement("li")

productListItem.innerHTML = `
      <li>
        <a href="../produto/">
          <div class="imageContainer">
            <img
              src=""
              alt="Imagem do produto"
            />
          </div>
          <span class="productName"></span>
          <div class="price promotion">
            <span class="productPrice"></span>
            <span class="productPromotionPrice"></span>
          </div>
        </a>
      </li>
`

function addListItem(amount) {
  productUl.innerHTML = ""
  for (let i = 0; i < amount; i++) {
    let clone = productListItem.cloneNode(true)
    productUl.appendChild(clone)
  }
}

let windowWidth = window.innerWidth

document.body.onload = () => {
  if (windowWidth <= 425) {
    addListItem(4)
    isActive()
  } else if (windowWidth > 425 && windowWidth <= 1024) {
    addListItem(8)
    isActive()
  } else if (windowWidth > 1024) {
    addListItem(15)
    isActive()
  }
}
