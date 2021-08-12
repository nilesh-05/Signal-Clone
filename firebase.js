import * as firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyDIfztXia4JSnlpkGdeGccmtwD-pmUVGzA",
	authDomain: "signal-clone-2cee6.firebaseapp.com",
	projectId: "signal-clone-2cee6",
	storageBucket: "signal-clone-2cee6.appspot.com",
	messagingSenderId: "1082067024100",
	appId: "1:1082067024100:web:8f22d284eb1f7d8b64d4f1",
};

let app;
if (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
} else {
	app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
