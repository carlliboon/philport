"use client";

// Import the functions you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbN5GiIrxJhCV8vaM7cgLaPkkgtLibApM",
  authDomain: "shopify-support-pro-db.firebaseapp.com",
  databaseURL: "https://shopify-support-pro-db-default-rtdb.firebaseio.com",
  projectId: "shopify-support-pro-db",
  storageBucket: "shopify-support-pro-db.firebasestorage.app",
  messagingSenderId: "929259790458",
  appId: "1:929259790458:web:b11808219a3214ce0f5bc3",
  measurementId: "G-65FFMDEMJW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const rtdb = getDatabase(app);

export { db, auth, rtdb };
