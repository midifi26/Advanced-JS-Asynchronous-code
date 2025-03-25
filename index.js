//RESUELVE TUS EJERCICIOS AQUI
//Ejercicio 1.- Declara una funcion getAllBreeds que devuelva un array de strings con todas las razas de perro > La función devuelve todas las razas de perro.
const url="https://dog.ceo/api/breeds/list/all";
function getAllBreeds () {
    return fetch(url)
    .then((res)=> res.json())
    .then((json)=>Object.keys(json.message))
    .catch(error => {
        console.error('Error fetching breads:', error)
    })
    
};
getAllBreeds().then((breeds) => {
    console.log(breeds);
});

//Ejercicio 2.- Obten una imagen random de una raza

const urlImages="https://dog.ceo/api/breeds/image/random";
function getRandomDog () {
    return fetch(urlImages)
    .then((res)=> res.json())
    .then((json)=>(json.message))
    .catch(error => {
        console.error('Error fetching breads:', error)
    })
    
};
getRandomDog().then((breeds) => {
    console.log(breeds);
});

// 3.- Declara una función **getAllImagesByBreed** que obtenga todas las imágenes de la raza komondor.

const urlKomodoro="https://dog.ceo/api/breed/komondor/images";
function getAllImagesByBreed () {
    return fetch(urlKomodoro)
    .then((res)=> res.json())
    .then((json)=>(json.message))
    .catch(error => {
        console.error('Error fetching breads:', error)
    })  
};
getAllImagesByBreed().then((images) => {
    console.log(images);
});


//4.- Declara una funcion **getAllImagesByBreed2(breed)** que devuelva las imágenes de la raza pasada por el argumento
function getAllImagesByBreed2 (breed) {
    let urlBreed ="https://dog.ceo/api/breed/" + breed+"/images";
    return fetch(urlBreed)
    .then((res)=> res.json())
    .then((json)=>(json.message))
    .catch(error => {
        console.error('Error fetching images:', error)
    })  
};
getAllImagesByBreed2('komondor').then((images) => {
    console.log(images);
});

//5.- Declarara una función **getGitHubUserProfile(username)** que obtenga el perfil de usuario de github a partir de su nombre de usuario. (https://api.github.com/users/{username}).

function getGitHubUserProfile(username){
    let urlUser="https://api.github.com/users/" + username;
    return fetch(urlUser)
    .then((res)=>res.json())
    .then((json)=>json)
    .catch(error => {
        console.error('Error fetching user profile:', error)
    })  
}
getGitHubUserProfile('Michelle Diaz').then((user) => {
    console.log(user);
});

//6.- Declara una función **printGithubUserProfile(username)** que reciba como argumento el nombre de un usuario (username), retorne {img, name} y pinte la foto y el nombre en el DOM.