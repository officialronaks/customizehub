import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";

import {
    getFirestore,
    doc,
    getDoc
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDfymITNIldZOlFTyXSWlJdI5tXS1-7hLg",
    authDomain: "customizehub-prod.firebaseapp.com",
    projectId: "customizehub-prod",
    storageBucket: "customizehub-prod.firebasestorage.app",
    messagingSenderId: "210026228677",
    appId: "1:210026228677:web:bfc30418aff4a93848b9ac"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export {
    doc,
    getDoc
};