import React from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

import { Bell, Briefcase, MessageSquare, HandCoins } from "lucide-react";

function Header() {
  return (
    <header className="fixed px-10 items-center py-[18px] z-50 top-0 shadow-sm w-full backdrop-blur-md">
      <nav className="flex justify-between items-center">
        <div className="text-orange font-bold bg-gray-background py-5 px-7">
          Logo
        </div>
        <Tabs defaultValue="jobs" className="w-fit p-2 bg-background">
          <TabsList className="border-0.5 border-gray rounded-full bg-background">
            <TabsTrigger value="jobs" className="rounded-full text-gray-light">
              <Briefcase className="size-6 pr-1" />
              Jobs
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="rounded-2xl text-gray-light"
            >
              <MessageSquare className="size-6 pr-1" />
              Messages
            </TabsTrigger>
            <TabsTrigger
              value="paym1ents"
              className=" rounded-2xl text-gray-light"
            >
              <HandCoins className="size-6 pr-1" />
              Payments
            </TabsTrigger>
          </TabsList>
          <TabsContent value="jobs"></TabsContent>
          {/* <TabsContent value="messages">Check your Messages.</TabsContent>
          <TabsContent value="payments">Check Payment Details.</TabsContent>  */}
        </Tabs>
        <div className="flex items-center py-4 gap-2">
          <Bell />
          <img src="/atlassian.svg" alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
