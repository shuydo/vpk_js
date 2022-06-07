import React from 'react';
import ReactDOM from 'react-dom';

// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import firebaseConfig from './utils/firebaseConfig';

import Context from './utils/context';
import App from './App';

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

// ========== 2 ==============
// firebase.initializeApp({
//   apiKey: 'AIzaSyDSfTPV8JkjUIY6FYK9SMc_O-iI8h1o9hw',
//   authDomain: 'chat-react-810f5.firebaseapp.com',
//   projectId: 'chat-react-810f5',
//   storageBucket: 'chat-react-810f5.appspot.com',
//   messagingSenderId: '1033626114142',
//   appId: '1:1033626114142:web:3430c38d49a29798d57ccf',
//   measurementId: 'G-SWE72J3VQK',
// });

// ============ VP ================
// firebase.initializeApp({
//   apiKey: 'AIzaSyA--njCClCpuCua3iFIgJQEulcfQ3Ttqjk',
//   authDomain: 'test-project-2022-06-01.firebaseapp.com',
//   projectId: 'test-project-2022-06-01',
//   storageBucket: 'test-project-2022-06-01.appspot.com',
//   messagingSenderId: '931854290773',
//   appId: '1:931854290773:web:0f519a5aa2447ee47969dc',
//   measurementId: 'G-JDVPQNRP2L',
// });

ReactDOM.render(
  <Context.Provider value={{ firebase, auth, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById('root'),
);
