import React from "react";
import { cn } from "@/lib/utils";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "../../components/ui/tabs";

import { Bell, Briefcase, MessageSquare, HandCoins } from "lucide-react";

function Header() {
  return (
    <header className="fixed px-10 items-center py-2 z-50 shadow-sm w-full backdrop-blur-md">
      <nav className="flex justify-between items-center">
        <div className="text-orange bg-gray-background py-4 px-7 flex">Logo</div>
        <Tabs defaultValue="jobs" className="w-[400px] bg-white">
          <TabsList className="border border-gray rounded-3xl py-6 bg-white ">
            <TabsTrigger value="jobs" className="rounded-2xl text-gray-light">
              <Briefcase className="size-6 pr-1"/>
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
        <div className="flex items-center gap-2">
          <Bell />
          <img src="/atlassian.svg" alt="" />
        </div>
      </nav>
    </header>
  );
}

export default Header;
