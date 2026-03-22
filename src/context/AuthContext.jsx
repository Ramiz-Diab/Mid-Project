import { createContext } from "react";

export const AuthContext = createContext(null);

//  This file exports an AuthContext that is NEVER used anywhere in the project.
//            Context.jsx exports its own AuthContext with the same name, and that is
//            the one all components import. This empty file is dead code causing confusion.
//            Delete this file entirely to avoid accidental wrong imports.
