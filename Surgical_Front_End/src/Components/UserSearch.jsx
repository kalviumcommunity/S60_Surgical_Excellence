import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UserSearch() {
    const [users, setUsers] = useState([]);
    const [records, setRecords] = useState([]);
    const [selectedUser, setSelectedUser] = useState("");

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get("http://localhost:7777/user/search");
                setUsers(response.data.arrOfUsers);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };
        fetchUsers();
    }, []);

    useEffect(() => {
        const fetchRecords = async () => {
            try {
                const response = await axios.get(`http://localhost:7777/user/get`);
                console.log("Fetched records:", response.data.arrOfdata);
                setRecords(response.data.arrOfdata);
            } catch (error) {
                console.error("Error fetching records:", error);
            }
        };
        if (selectedUser) {
            console.log("Selected User:", selectedUser);
            fetchRecords();
        }
    }, [selectedUser]);
    


    const handleUserChange = (event) => {
        console.log(event.target.value)
        setSelectedUser(event.target.value);
    };

    return (
        <div className="min-h-screen bg-no-repeat bg-cover bg-[url('./assets/hospitalBg.jpg')]">
            <div className="ml-[40%]">
                {users.length > 0 && (
                    <select className="options mt-[20%] border border-5 border-red-500 border-dashed w-[40%] h-[50px]" onChange={handleUserChange}>
                        <option value="">Select User</option>
                        {users.map((user) => (
                            <option value={user.email} key={user._id}>
                                {user.email}
                            </option>
                        ))}
                    </select>
                )}
            </div>
            <div className="mt-[4%]">
                {records.length > 0 && selectedUser && (
                    <div>
                        {records
                            .filter((record) => {return record.Added_by === selectedUser})
                            .map((record) => (
                                <div className="bg-pink-300 mt-14 p-4 rounded-lg grid gap-10 w-[40%] ml-[32%]" key={record._id}>
                                    <div className="ml-[20%]">
                                    <h1>{record.name}</h1>
                                    <br/>
                                    <img className="w-3/4" src={record.img} alt="" />
                                    <h3>{record.description}</h3>
                                    <br/>
                                    <h5>surgeryname:{record.surgery_name}</h5>
                                    </div>
                                </div>
                            ))}
                    </div>
                )}
            </div>
            
        </div>
    );
}
