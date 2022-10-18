import { Outlet } from 'react-router-dom';

const Error: React.FC = () => {
  return (
    <main className="flex h-screen items-center justify-center bg-blue-200">
      <div>
        <Outlet />
      </div>
    </main>
  );
};

export default Error;
