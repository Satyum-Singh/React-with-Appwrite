import UserContext from "../context/UserContext"
import { useContext } from "react"

function Profile() {
    const { user } = useContext(UserContext)
    if (!user) return <h1>Not Logged In</h1>
    return (
        <>
            <h3>Profile : {user.username}</h3>
        </>
    )
}

export default Profile