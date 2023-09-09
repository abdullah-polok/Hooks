export default function User(user) {
    const { id, name, email } = user
    console.log(id, name, email)
    return (
        <div>
            <h1>name:{name}</h1>
            <p>email:{email}</p>
        </div>
    )
}