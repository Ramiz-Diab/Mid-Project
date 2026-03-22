import { createContext, useState } from "react";
import { getCurrentUser } from "../auth/getCurrentUser";
import { setCurrentUser } from "../auth/Role";
import { Logout } from "../auth/Logout";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext(null);
//AuthContext is exported from BOTH this file and src/context/AuthContext.jsx.
//             Two contexts with the same name in the same folder is very confusing.
//             Delete AuthContext.jsx (it's empty/unused) and keep only this one.
export function AuthProvider({ children }) {
  const [AuthUser, SetAuthUser] = useState(getCurrentUser());

  const login = (userObj) => {
    setCurrentUser(userObj);
    SetAuthUser(userObj);
    // login() calls setCurrentUser() to save to localStorage and SetAuthUser()
    //             to update state — but it does NOT call Firebase signIn. Firebase auth
    //             is handled separately in LoginModal.jsx. This means the app's auth state
    //             is split: Firebase handles real auth, localStorage+context handles UI state.
    //             If they ever get out of sync the app breaks. Consider syncing both in one place
  };
  const logout = () => {
    Logout();

    SetAuthUser(null);
  };
  return (
    <AuthContext.Provider value={{ AuthUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
