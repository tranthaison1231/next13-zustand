
import Users from '@/components/Users';
import UsersLayout from '@/components/UsersLayout';
import { Suspense } from 'react';

export default function Home() { 
  return (
    <UsersLayout> 
      <Suspense fallback={<h1> Loading </h1>}>
        <Users /> // server component
      </Suspense>
    </UsersLayout>
  );
}

