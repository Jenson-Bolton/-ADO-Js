firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });

firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });

var form = document.getElementById("signup-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

document.getElementById("signup").addEventListener("click", function() {
  firebase.createUserWithEmailAndPassword(document.getElementById("user-email").value, document.getElementById("user-password").value);
  console.log(document.getElementById("user-email").value, document.getElementById("user-password").value)
});