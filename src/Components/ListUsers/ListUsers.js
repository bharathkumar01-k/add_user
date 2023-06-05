import React from "react";
import Card from "../UI/Card/Card";
import styles from "./ListUsers.module.css";

const ListUsers = (props) => {
    const users = props.users.map((user) => (
        <li key={user.id}>
            {user.name} ({user.age} years old)
        </li>
    ));
    console.log(users);
    return (
        <Card className={styles.users}>
            <ul>{users}</ul>
        </Card>
    );
};
export default ListUsers;
