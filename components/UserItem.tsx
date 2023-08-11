'use client';
import { User } from './Users';
import { useColorStore } from './UsersLayout';

interface Props {
  user: User;
}

const UserItem = ({ user }: Props) => {
  const color = useColorStore((state) => state.color);
  return (
    <div key={user.id}>
      <p style={{ color: color }}>{user.username}</p>
      <img src={user.avatar} alt={user.username} className="circle" />
    </div>
  );
};

export default UserItem;
