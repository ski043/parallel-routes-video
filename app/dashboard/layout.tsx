import React, { ReactNode } from "react";

const DashboardLayout = ({
  children,
  team,
  users,
}: {
  children: React.ReactNode;
  team: ReactNode;
  users: ReactNode;
}) => {
  const role = "admin";
  return (
    <div className="p-10">
      <h1>this is the layout title</h1>
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-10 mt-10">
        {role === "admin" ? <div>{team}</div> : <div>{users}</div>}
      </div>
    </div>
  );
};

export default DashboardLayout;
