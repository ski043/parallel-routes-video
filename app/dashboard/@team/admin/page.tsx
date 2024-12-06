import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const AdminUsers = () => {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Here you will se team members</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p>Admin 1</p>
          <p>Admin 2</p>
          <p>Admin 3</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default AdminUsers;
