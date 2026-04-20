const form = document.getElementById("name-form");
const welcome = document.getElementById("welcome");
const usernameSpan = document.getElementById("username");
const logoutBtn = document.getElementById("logout");
const submeter = document.getElementById("submeter");



// Verifica se já existe um utilizador guardado
const savedName = localStorage.getItem("username");

        if (savedName) {
            showWelcome(savedName);
        } else {
            showForm();
        }



    submeter.addEventListener("click", (e) => {
    e.preventDefault();

    const nameInput = document.getElementById("nome").value;
    localStorage.setItem("username", nameInput);
    showWelcome(nameInput);
});

logoutBtn.addEventListener("click", function () {
    localStorage.removeItem("username");
    showForm();
});


function showWelcome(name) {
    usernameSpan.textContent = name;
    form.style.display = "none";
    welcome.style.display = "block";
}

function showForm() {
    form.style.display = "block";
    welcome.style.display = "none";
}