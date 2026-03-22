import { STORAGE_KEY } from "./StorageKEY";

export function getCurrentUser() {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : null;
}
// getCurrentUser() reads from localStorage only. It has no connection
//            to Firebase Auth's actual session state (auth.currentUser).
//            If a user's Firebase session expires or they log out on another tab,
//            localStorage still returns the old user object.
//            Consider always cross-checking with auth.currentUser from Firebase.
