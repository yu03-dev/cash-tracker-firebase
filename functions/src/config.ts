import { initializeApp, cert, ServiceAccount } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const serviceAccount = require("../.cert/next-study-d2f7f-firebase-adminsdk-ph0ss-33e4d251cc.json");

initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
});

export const auth = getAuth();
export const db = getFirestore();
