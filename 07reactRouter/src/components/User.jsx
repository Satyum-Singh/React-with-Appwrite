import { useParams } from "react-router-dom"

function User() {
  const { userid } = useParams()
  return (
    <div>
      <h1 className="bg-orange-500 text-black text-3xl text-center py-5">User : {userid}</h1>
    </div>
  )
}

export default User