export function UserCard({name, email , role = 'admin' | 'user', avatarUrl = ''}) {
    return (
        <>
            <p>{name}</p>
            <p>{email}</p>
            {role == 'admin' && <Admin></Admin>}
            {avatarUrl != '' && <p>{name[0]}</p>}
        </>
    )
}

function Admin(){
    return (
        <><p>Admin</p></>
    )
}