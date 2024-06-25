import React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

import { Bell } from "lucide-react";

function Header() {
  return (
    <header className="fixed px-10 items-center py-2 z-50 shadow-sm w-full backdrop-blur-md">
      <nav className="flex justify-evenly items-center">
        <div className="text-orange bg-gray py-4 px-7 flex">Logo</div>
        <Tabs defaultValue="jobs" className="w-[400px] bg-white">
          <TabsList className="border-gray rounded-2xl bg-white">
            <TabsTrigger value="jobs" className= "rounded-2xl">
              Jobs
            </TabsTrigger>
            <TabsTrigger value="messages" className="  rounded-2xl">
              Messages
            </TabsTrigger>
            <TabsTrigger value="payments" className=" rounded-2xl">
              Payments
            </TabsTrigger>
          </TabsList>
          {/* <TabsContent value="jobs">You can see Jobs here.</TabsContent>
          <TabsContent value="messages">Check your Messages.</TabsContent>
          <TabsContent value="payments">Check Payment Details.</TabsContent> */}
        </Tabs>
        <div className="flex items-center gap-2">
          <Bell />
          <img src="/atlassian.svg" alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
