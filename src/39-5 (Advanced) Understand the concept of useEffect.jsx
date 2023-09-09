import { useEffect, useState } from "react"
import User from "./User"
export default function EffectHooks() {

    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []) //give dependency
    return (
        <>
            <div>
                {/* <h1>User:{users.length}</h1> */}
                {
                    users.map(user => console.log(user))
                }
            </div>
        </>
    )
}