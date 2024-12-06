import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";

const UsersRoute = () => {
  return (
    <Card className="h-[400px]">
      <CardHeader>
        <CardTitle>Here you will see Users</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <p>user 1</p>
          <p>user 2</p>
          <p>user 3</p>
          <p>user 4</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default UsersRoute;
