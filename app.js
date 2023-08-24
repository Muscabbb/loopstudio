const menue = document.querySelector(".menu");
let counter = 0;

menue.addEventListener('click', () => {
    console.log("Click")
    // make acounter
    counter++;


    document.querySelector(".fa-solid").classList.remove("fa-bars")

    document.querySelector(".fa-solid").classList.add
    ("fa-xmark")

    document.querySelector(".ul").classList.add("active")
    document.querySelector(".ul").classList.remove("ull")

    document.querySelector(".menu-active").classList.add("overlay")

    if(counter >=2 ){

        document.querySelector(".fa-solid").classList.remove("fa-xmark")    

        document.querySelector(".ul").classList.remove("active")

        document.querySelector(".ul").classList.add("ull")

        document.querySelector(".menu-active").classList.remove("overlay")

        document.querySelector(".fa-solid").classList.add("fa-bars")

        counter = 0;
    }

})