document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");
    
    form.addEventListener("submit", (e) =>{
        const input = document.getElementById("input-email");
        const messageError = document.getElementById("error-message");
    
    if (!input.value || !input.checkValidity()) {
        // Si NO es valido =>
        messageError.textContent = "Please enter a valid email address";
        messageError.classList.add("error-message");
        e.preventDefault();
    } else {
        // Si es valido =>
        messageError.textContent = "";
        messageError.classList.remove("input-error");
    } 
})
});