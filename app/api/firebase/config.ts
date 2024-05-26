// import { initializeApp,getApps, getApp } from "firebase/app";
// import {getAuth} from "firebase/auth";

// const firebaseConfig = {
//     apiKey:process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain:process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId:process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket:process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId:process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

// //initialize firebase(ssr version)
// //Firebase JavaScript SDK에서 제공하는 이 기능은 현재 실행 환경에서 이미 초기화된 Firebase 앱이 있는지 확인
// //0이면 아직 초기화된 Firebase 앱이 없다는 의미
// //getApp(): 앱이 이미 존재하는 경우 기존 Firebase 앱 인스턴스를 검색
// const app=!getApps().length ? initializeApp(firebaseConfig):getApp();

// const auth=getAuth(app);