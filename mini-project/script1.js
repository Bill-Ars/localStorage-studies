const lightBtn = document.getElementById("lightBtn");
const darkBtn = document.getElementById("darkBtn");

// Função para aplicar tema
function setTheme(theme) {
    document.body.className = theme;

    // Guardar no localStorage
    localStorage.setItem("theme", theme);
}

// Evento botão claro
lightBtn.addEventListener("click", () => {
    setTheme("light");
});

// Evento botão escuro
darkBtn.addEventListener("click", () => {
    setTheme("dark");
});

// 🔁 Ao carregar página → recuperar tema
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
    setTheme(savedTheme);
} else {
    setTheme("light"); // padrão
}