firebase.initializeApp({
  apiKey: 'AIzaSyCh9F3Q4OgXdzFCpb1tlKdcZmypXQejVbM',
  authDomain: 'localhost',
  projectId: 'ado-js'
});

var db = firebase.firestore();

/*db.collection("users").add({
    first: "Ada",
    last: "Lovelace",
    born: 1815
})
.then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});*/