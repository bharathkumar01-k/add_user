import React, { useState, useRef } from "react";
import Card from "../UI/Card/Card";
import Button from "../UI/Button/Button";
import ErrorModal from "../UI/ErrorModal/ErrorModel";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [age, setAge] = useState("");
    const [error, setError] = useState();
    const addUserNameHandler = (event) => {
        setUserName(event.target.value);
    };
    const addAgeHandler = (event) => {
        setAge(event.target.value);
    };
    const submitFormHandler = (event) => {
        event.preventDefault();
        if (userName.trim().length === 0 || userName.trim().length === 0) {
            setError({
                title: "Validation Error",
                message:
                    "Please Enter Valid Name or Age (The boxes should not be empty)",
            });
            return;
        }
        if (+age < 1) {
            setError({
                title: "Validation Error",
                message: "Please Enter Age (Age Should be greater than 1)",
            });
            return;
        }
        props.onAddUser(userName, age);
        setUserName("");
        setAge("");
    };
    const errorHandler = () => {
        setError(null);
    };
    return (
        <Card className={styles.input}>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    buttonName="close"
                    onClose={errorHandler}
                />
            )}
            <form onSubmit={submitFormHandler}>
                <label htmlFor="username">Username</label>
                <input
                    id="username"
                    value={userName}
                    type="text"
                    onChange={addUserNameHandler}
                />
                <label htmlFor="age">Age</label>
                <input
                    id="age"
                    value={age}
                    type="text"
                    onChange={addAgeHandler}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
