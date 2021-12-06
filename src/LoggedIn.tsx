import { useState } from "react";

export const LoggedIn = () => {
const [isLoggedIn, setIsLoggedIn] = useState(false)

const handleLogin = () =>{
    setIsLoggedIn(true)
}
const handleLogout = () =>{
    setIsLoggedIn(false)
}
return(
    <div>
        <button onClick={handleLogin}>Submit</button>
        <button onClick={handleLogout}>Reset</button>
        <div>User is{isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
);

}