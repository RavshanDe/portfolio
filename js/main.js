const toggleBtn = document.querySelector("#toggle")
toggleBtn.addEventListener("click", () => {
    const listEl = document.querySelector(".lists")
    listEl.classList.toggle("dnone")
})