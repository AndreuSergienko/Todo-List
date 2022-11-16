import { initializeApp } from 'firebase/app';
import {
	getFirestore,
	collection,
	doc,
	addDoc,
	updateDoc,
	deleteDoc,
	getDocs
} from 'firebase/firestore';
import { API_KEY } from '../../constants/envValues';

export class Database {
	constructor() {
		const firebaseConfig = {
			apiKey: API_KEY,
			authDomain: 'it-academy-todo-list.firebaseapp.com',
			projectId: 'it-academy-todo-list',
			storageBucket: 'it-academy-todo-list.appspot.com',
			messagingSenderId: '943690172117',
			appId: '1:943690172117:web:83e4bc6d8902ebb5f6c45c',
			measurementId: 'G-WS01QDRLD0',
		};

		const app = initializeApp(firebaseConfig);
		this._database = getFirestore(app);
	}

	create(collectionKey, body) {
		const collectionRef = collection(this._database, collectionKey);

		return addDoc(collectionRef, body);
	}

	read(collectionKey) {
		const collectionRef = collection(this._database, collectionKey);

		return getDocs(collectionRef).then((documents) => {
			return documents.docs.map((doc) => {
				return {
					...doc.data(),
					id: doc.id,
				};
			});
		});
	}

	update(collectionKey, id, body) {
		const documentRef = doc(this._database, collectionKey, id);

		return updateDoc(documentRef, body);
	}

	delete(collectionKey, id) {
		const documentRef = doc(this._database, collectionKey, id);

		return deleteDoc(documentRef);
	}

	static getInstance() {
		if (!Database.instance) {
			Database.instance = new Database();
		}

		return Database.instance;
	}
}
