import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <div className="grid-background"></div>
      <div className="min-h-screen container mx-auto">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
