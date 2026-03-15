let targetIndex = null;

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

function loadUser() {

    const users = JSON.parse(localStorage.getItem("registerUsers")) || [];
    const tbody = document.getElementById("tableBody");

    if (users.length === 0) {

        tbody.innerHTML = `
        <div class="flex items-center justify-center h-[350px] text-gray-400 text-sm">
            Belum ada data user.
        </div>`;

        return;
    }

    tbody.innerHTML = users.map((u,index)=>`

    <div class="grid grid-cols-[80px_1fr_1fr_265px] items-center text-sm text-gray-700 py-3 px-3 border-b border-[#f0f2f8] hover:bg-[#f5f7ff] transition">

        <span class="text-center">${index+1}</span>

        <span class="text-center">
            ${u.email}
        </span>

        <span class="text-center">
            ${u.password}
        </span>

        <div class="flex justify-center gap-2">

            <button onclick="editUser(${index})"
            class="bg-[#e3f2fd] text-[#1565c0] text-xs font-semibold px-3 py-1 rounded-md hover:opacity-75">
                Edit
            </button>

            <button onclick="deleteUser(${index})"
            class="bg-[#fce4ec] text-[#c62828] text-xs font-semibold px-3 py-1 rounded-md hover:opacity-75">
                Hapus
            </button>

        </div>

    </div>

    `).join("");

}

function editUser(index){

    targetIndex = index;

    document.getElementById("newPassword").value="";
    document.getElementById("confirmPassword").value="";

    document.getElementById("editModal").classList.remove("hidden");
    document.getElementById("editModal").classList.add("flex");

}

function closeEdit(){

    document.getElementById("editModal").classList.add("hidden");
    document.getElementById("editModal").classList.remove("flex");

    targetIndex=null;

}

function confirmEdit(){

    const newPass=document.getElementById("newPassword").value.trim();
    const confirmPass=document.getElementById("confirmPassword").value.trim();

    if(!newPass || !confirmPass){

        alert("Password tidak boleh kosong!");
        return;

    }

    if(newPass!==confirmPass){

        alert("Password tidak cocok!");
        return;

    }

    const users=JSON.parse(localStorage.getItem("registerUsers")) || [];

    users[targetIndex].password=newPass;

    localStorage.setItem("registerUsers",JSON.stringify(users));

    closeEdit();
    loadUser();

}

function deleteUser(index){

    targetIndex=index;

    document.getElementById("deleteModal").classList.remove("hidden");
    document.getElementById("deleteModal").classList.add("flex");

}

function closeDelete(){

    document.getElementById("deleteModal").classList.add("hidden");
    document.getElementById("deleteModal").classList.remove("flex");

    targetIndex=null;

}

function confirmDelete(){

    const users=JSON.parse(localStorage.getItem("registerUsers")) || [];

    users.splice(targetIndex,1);

    localStorage.setItem("registerUsers",JSON.stringify(users));

    closeDelete();
    loadUser();

}

loadUser();