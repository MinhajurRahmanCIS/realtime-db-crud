import { get, getDatabase, ref } from 'firebase/database';
import React, { useState } from 'react';
import { app } from '../firebase.config';

const UpdateRead = () => {
    const [users, setUsers] = useState();
    const loadData = async () => {
        const db = getDatabase(app);
        const dbRef = ref(db, "userManagement/users");
        const snapshot = await get(dbRef);
        if (snapshot.exists) {
            const myData = snapshot.val();
            const temp = Object.keys(myData).map(usersId => {
                return {
                    ...myData[usersId],
                    id: usersId
                }
            })
            setUsers(temp)
        }
        else {
            alert("error")
        }
    }

    return (
        <div>
            <button onClick={loadData}>Load Data</button>
            {
                users?.map((user, i) => <p key={i}>{user.name} : {user.id}</p>)
           }
        </div>
    );
};

export default UpdateRead;