
// 1. Inserir dado
localStorage.setItem("name", "Mateus");

// 2 - restart sem perder dados

// 3 - resgar item 
const name = localStorage.getItem("name");
console.log(name);


//4. resgate de item que nao existe

const lastName = localStorage.getItem("lastname");

console.log(lastName);

if(!lastName){
    console.log("Sem sobrenome");
}


// 5 - Remover item

localStorage.removeItem("name");

// 6 - Limpar todos os items

localStorage.setItem("a", 1);
localStorage.setItem("b", 1);

console.log(typeof localStorage.getItem("a"));
localStorage.clear();




// 7 - Session storage
sessionStorage.setItem("number", 123);

// 8 - reiniciar e perder dados

const n = sessionStorage.getItem("number");
console.log(n);


sessionStorage.removeItem("number");

sessionStorage.clear();

// 9 - salvar objecto

const person = {
    name: "Mateus",
    age: 31,
    job: "Programmer",
};

//localStorage.setItem("person", person);

localStorage.setItem("person", JSON.stringify(person));

const getPerson = localStorage.getItem("person");
console.log(getPerson);
const personObj = JSON.parse(getPerson);
console.log(personObj);