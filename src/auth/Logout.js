import { STORAGE_KEY } from "./StorageKEY";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
//`auth` and `signOut` are imported but never used
export async function Logout() {
  // Remove user from localStorage
  localStorage.removeItem(STORAGE_KEY);
}
// Logout() only removes the user from localStorage but NEVER calls
//            Firebase signOut(). The user stays authenticated in Firebase.
//            This means if any component checks auth.currentUser, it will still
//            see the user as logged in after "logout".
//            Fix:
//            export async function Logout() {
//                localStorage.removeItem(STORAGE_KEY);
//                await signOut(auth);   // ← add this line
//            }
