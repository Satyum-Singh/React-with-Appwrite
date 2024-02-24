function Card({ username }) {
    return (
        <div>
            <img src="https://plus.unsplash.com/premium_photo-1680553492268-516537c44d91?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <h1 className='text-2xl bg-green-500 p-3 rounded'> Card for photo of {username}</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum distinctio nobis molestias assumenda id incidunt temporibus, rem perspiciatis vel quod dolor. Perspiciatis, quis. Animi aliquam, nam consequuntur voluptatum odit dignissimos.</p>
        </div>
    )
}

export default Card
