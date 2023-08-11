'use client';
import { create } from 'zustand';

export const useColorStore = create<{ color: string}>((set) => ({
  color: 'green',
}))


export default function UsersLayout({ children }: React.PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <button
        onClick={() =>
          useColorStore.setState({
            color: 'red',
          })
        }
      >
        Change Color
      </button>
      {children}
    </main>
  );
}
