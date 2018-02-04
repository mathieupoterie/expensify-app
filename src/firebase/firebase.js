import * as firebase from 'firebase';

const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(config);


const database = firebase.database();

export { firebase, database as default };









// // database.ref('expenses')
// //   .once('value')
// //   .then((snapshot) =>{
// //      const expenses = [];
// //      snapshot.forEach((childSnapshot) => {
// //         expenses.push({
// //             id: childSnapshot.key,
// //             ...childSnapshot.val()
// //         });
// //      });
// //      console.log(expenses);
// //   });

// database.ref('expenses')
//   .on('value', (snapshot) =>{
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//     });
//     console.log(expenses);
//  });

// // const expenses = [
// //     {
// //         description: "1",
// //         note: 'note1',
// //         amount: 13,
// //         createdAt: 129093
// //     },
// //     {
// //         description: "2",
// //         note: 'note2',
// //         amount: 133,
// //         createdAt: 12984093
// //     },
// //     {
// //         description: "3",
// //         note: 'note3',
// //         amount: 123,
// //         createdAt: 14093
// //     }
// // ];

// // var count = 0;
// // expenses.map((expense) => {
// //     console.log("test!", count);
// //     count++;
// //     database.ref('expenses').push({
// //         ...expense
// //     })
// // });


