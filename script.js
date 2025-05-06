/*Slider*/
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();
}, 5000)

function nextImage(){
    count++;
    if(count > 3){
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}

// Initialize Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyD22fEjlLSGUBFKwMuRKOb73qkCXy-siU8",
  authDomain: "projeto-tcc-db505.firebaseapp.com",
  projectId: "projeto-tcc-db505",
  storageBucket: "projeto-tcc-db505.appspot.com", // Corrigido
  messagingSenderId: "444348966791",
  appId: "1:444348966791:web:d1282d48bbe8b3d0059522",
  measurementId: "G-1QJXVJY5Y8"
};

// Inicializações após as importações
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
auth.languageCode = 'pt';

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});

document.addEventListener("DOMContentLoaded", () => {
  const googleLogin = document.getElementById("google-login-btn");
  if (googleLogin) {
    googleLogin.addEventListener("click", () => {
      signInWithPopup(auth, provider)
        .then((result) => {
          const user = result.user;
          console.log("Usuário autenticado com sucesso:", user);
          window.location.href = "Index.html"; // Verifique se o caminho está correto (case sensitive)
        })
        .catch((error) => {
          console.error("Erro no login com Google:", error.message);
          // Adicione feedback visual para o usuário
          alert("Erro no login: " + error.message);
        });
    });
  }
});