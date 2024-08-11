import { createContext } from "react";


  
type User = {
    name: string;
    email: string;
}

const UserContext = createContext<{user: User,setUser: (user: User) => void;}>({
    user : {
    name: "Dikshita",
    email: "dpatel60@syr.edu"
},
setUser: (user: User) => {}
});

export default UserContext; 