const panels = document.querySelectorAll(".panel")

function expand() {
    this.classList.toggle("open")
}

function toggleText(e) {
    if (e.propertyName.includes("flex")) {
        this.classList.toggle("open-active")
    }

}

panels.forEach(panel => panel.addEventListener("click", expand))
panels.forEach(panel => panel.addEventListener("transitionend", toggleText))