import { get, getDatabase, ref } from 'firebase/database';
import React, { useState } from 'react';
import { app } from '../firebase.config';

const Read = () => {
    const [users, setUsers] = useState();
    const loadData = async() => {
        const db = getDatabase(app);
        const dbRef = ref(db, "userManagement/users");
        const snapshot = await get(dbRef);
        if(snapshot.exists){
            setUsers(Object.values(snapshot.val()))
        }
        else{
            alert("error")
        }
    }

    return (
        <div>
            <button onClick={loadData}>Load Data</button>
            {users?.map((user, i) => <p key={i}>{user.name}</p>)}
        </div>
    );
};

export default Read;