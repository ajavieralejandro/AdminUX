
import firebase from 'firebase/app';
import "firebase/firestore";
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyBmCHEZG3BryLi8J68KUXLGFiodmZJdDCo",
    authDomain: "adminux-87506.firebaseapp.com",
    databaseURL: "https://adminux-87506.firebaseio.com",
    projectId: "adminux-87506",
    storageBucket: "adminux-87506.appspot.com",
    messagingSenderId: "593996098473",
    appId: "1:593996098473:web:6569b1e4428d58a05e32b8",
    measurementId: "G-916E0LVKFP"
  };

  firebase.initializeApp(firebaseConfig);
  const firestore = firebase.firestore();


 //Insercion en la base de datos

export const addCourseToCollection = async (
  Course
) => {
  const collectionRef = firestore.collection("Cursos");
  console.log("Estoy recibiendo de firebase : ");
  console.log(collectionRef);
  //Asegura que las inserciones en la base de datos sean completas
  const batch = firestore.batch();
  /*objectsToAdd.forEach(obj => {
    const docRef = collectionRef.doc();
    batch.set(docRef, obj);
  });*/
  return await batch.commit();
};