import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState(Number);
    const addUserNameHandler = (event) => {
        setUserName(event.target.value);
    };
    const addAgeHandler = (event) => {
        setAge(event.target.value);
    };
    const submitFormHandler = (event) => {
        event.preventDefault();
        console.log("username", userName);
        console.log("age", age);
    };
    return (
        <Card className={styles.input}>
            <form onSubmit={submitFormHandler}>
                <label>Username</label>
                <input type="text" onChange={addUserNameHandler} />
                <label>Age</label>
                <input type="text" onChange={addAgeHandler} />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
