const menuBar = document.querySelector(".menu-bar");
const activeBar = document.querySelector(".active");
const openMenu = document.querySelector(".hamburgerBtn");

const closeMenu = document.querySelector(".close");

const rolledList = document.querySelectorAll(".arrow");

const uls = document.querySelectorAll(".rolled");

openMenu.addEventListener("click", ()=>{
    activeBar.classList.add("active-up");
    menuBar.classList.add("menu-bar-active");
})

closeMenu.addEventListener("click", ()=>{
    activeBar.classList.remove("active-up");
    menuBar.classList.remove("menu-bar-active");
})

rolledList.forEach(span =>{
    span.addEventListener("click", (e)=>{
        const spanE = e.target;
            uls.forEach(ul =>{
                if(ul.dataset.match === spanE.dataset.match){
                    ul.classList.toggle("ul-active");
                }
                
            })
    })
})


