//template_fb480o3
// service_hwfimab
// pQ5b4IPl1Mf3RdptR
let isModalOpen = false
let contrastToggle = false

function toggleContrast() {
    contrastToggle = !contrastToggle
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading')
    const success = document.querySelector('.modal__overlay--success')
    loading.classList += " modal__overlay--visible"

    emailjs 
        .sendForm(
            'service_hwfimab',
            'template_fb480o3',
            event.target,
            'pQ5b4IPl1Mf3RdptR'
        ).then(() => {
            // throw new Error("error")
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly at etsncamacho@gmail.com"
            )
        })
}

function toggleModal() {

    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
    }
    isModalOpen = true;

    document.body.classList += " modal--open"
}