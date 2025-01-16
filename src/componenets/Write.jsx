import React, { useState } from 'react';
import { getDatabase, push, ref, set } from "firebase/database";
import { app } from '../firebase.config';
const Write = () => {
    let [name, setName] = useState("");
    let [age, setAge] = useState("");

    const saveData = async () => {
        const db = getDatabase(app);
        const newDocRef = push(ref(db, "userManagement/users"));
        set(newDocRef, {
            name: name,
            age: age
        })
            .then(() => {
                alert("User Added!");
                setName("");
                setAge("");
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={age} onChange={e => setAge(e.target.value)} />
            <button onClick={saveData}>Submit</button>
        </div>
    );
};

export default Write;