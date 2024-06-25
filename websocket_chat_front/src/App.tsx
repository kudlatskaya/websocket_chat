import {useEffect, useState} from 'react'
import './App.css'
import {io} from "socket.io-client";

function App() {

    useEffect(() => {
        const socket = io("http://localhost:3009");
    }, []);

    const [messages, setMessages] = useState([
        {message: "Hello1", id: "123f321", user: {id: "456d654", name: "userName1"}},
        {message: "Hello2", id: "321f123", user: {id: "654f456", name: "userName1"}}
    ])

    return (
        <>
            <p>Клиент</p>
            <div className={"messages"}>
                {
                    messages.map(m => {
                        return <div>
                            <b>{m.user.name}:</b>
                            <p>{m.message}</p>
                            <hr/>
                        </div>
                    })
                }
            </div>
            <textarea name="" id="" cols={30} rows={10}></textarea>
            <button className={"button "}>Send</button>
        </>
    )
}

export default App
