import UserItem from "./UserItem";



export interface User {
  id: string;
  username: string;
  avatar: string
}
const fetchUsers = async () => {
  const res =  await fetch('https://5d035943d1471e00149bab0a.mockapi.io/user');
  const users: User[] = await res.json();
  return users;
}


async function Users() {
  const users = await fetchUsers();
  return (
    <div>
      {users.map((user) => (
        <UserItem user={user} key={user.id} />
      ))}
    </div>
  );
}


export default Users
