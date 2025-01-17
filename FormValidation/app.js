let id = (id) => document.getElementById(id)
let classes = (classes) => document.getElementsByClassName(classes)

let userName = id("userName"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("bi-check-circle-fill"),
  failureIcon = classes("bi-exclamation-circle-fill")

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {
    errorMsg[serial].innerHTML = message
    id.style.border = "2px solid red"
    failureIcon[serial].style.opacity = "1"
    successIcon[serial].style.opacity = "0"
  } else {
    errorMsg[serial].innerHTML = ""
    id.style.border = "2px solid green"
    failureIcon[serial].style.opacity = "0"
    successIcon[serial].style.opacity = "1"
  }
}
form.addEventListener("submit", (e) => {
  e.preventDefault()
  engine(userName, 0, "Username cannot be blank")
  engine(email, 1, "Email cannot be blank")
  engine(password, 2, "Password cannot be blank")
})
