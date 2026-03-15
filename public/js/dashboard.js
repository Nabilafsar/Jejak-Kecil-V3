function toggleSidebar(){
    const sidebar = document.getElementById("sidebar")
    const logo = document.getElementById("logoText")

    const menuText = document.querySelectorAll(".menu-text")
    const menuItem = document.querySelectorAll(".menu-item")

    //ukuran sidebar
    sidebar.classList.toggle("w-72")
    sidebar.classList.toggle("w-24")

    //logo
    logo.classList.toggle("hidden")

    //text menu
    menuText.forEach(text=>{text.classList.toggle("hidden")})

    //center icon
    menuItem.forEach(item=>{item.classList.toggle("justify-center")})

    //status sidebar
    if(sidebar.classList.contains("w-24")){
        localStorage.setItem("sidebar","closed")
    }else{
        localStorage.setItem("sidebar","open")
    }
}

//load state sidebar
window.addEventListener("DOMContentLoaded", ()=>{
    const sidebar = document.getElementById("sidebar")
    const logo = document.getElementById("logoText")

    const menuText = document.querySelectorAll(".menu-text")
    const menuItem = document.querySelectorAll(".menu-item")

    const state = localStorage.getItem("sidebar")

    if(state === "closed"){
        sidebar.classList.remove("w-72")
        sidebar.classList.add("w-24")

        logo.classList.add("hidden")

        menuText.forEach(text=>{text.classList.add("hidden")})

        menuItem.forEach(item=>{item.classList.add("justify-center")})
    }
})