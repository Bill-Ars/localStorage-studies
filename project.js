const name_form = document.getElementById("name-form");
const welcomeContainer = document.getElementById("welcome");
const logoutbtn = document.getElementById("logout");
const usernameSpan = document.getElementById("username");

// SUBMIT DO FORM
name_form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("nome");

    localStorage.setItem("name", nameInput.value);

    nameInput.value = "";

    checkName();
});

// VERIFICA SE HÁ NOME GUARDADO
function checkName() {
    const userName = localStorage.getItem("name");

    if (userName) {
        name_form.style.display = "none";
        welcomeContainer.style.display = "block";

        // MOSTRAR O NOME
        usernameSpan.textContent = userName;
    } else {
        name_form.style.display = "block";
        welcomeContainer.style.display = "none";
    }
}

// LOGOUT
logoutbtn.addEventListener("click", () => {
    localStorage.removeItem("name");
    checkName();
});

// EXECUTA AO CARREGAR A PÁGINA
checkName();