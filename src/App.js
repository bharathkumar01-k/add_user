import React, { useState } from "react";
import AddUser from "./Components/AddUser/AddUser";
import ListUsers from "./Components/ListUsers/ListUsers";

function App() {
    const [usersList, setUsersList] = useState([]);
    const addUserHandler = (userName, userAge) => {
        setUsersList((prevList) => {
            return [
                ...prevList,
                {
                    name: userName,
                    age: userAge,
                    id: Math.random().toString(),
                },
            ];
        });
    };
    return (
        <div>
            <AddUser onAddUser={addUserHandler} />
            <ListUsers users={usersList} />
        </div>
    );
}

export default App;
