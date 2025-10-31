// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRWyMaFowzUdoYGeWPGCP_tkS3YcxReUc",
  authDomain: "crudapp-df7d8.firebaseapp.com",
  projectId: "crudapp-df7d8",
  storageBucket: "crudapp-df7d8.firebasestorage.app",
  messagingSenderId: "1014605696448",
  appId: "1:1014605696448:web:7fe7f014c8ce96e915cc25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const produtosCollection = collection(db, "produtos");

export{
    db,
    produtosCollection,
    collection,
    addDoc,
    doc,
    getDoc,
    getDocs,
    query,
    orderBy,
    onSnapshot,
    updateDoc,
    deleteDoc,
    serverTimestamp
};

