import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Users,
  UserRoundCheck,
  MessageSquare,
  Eye,
  Trash2,
} from "lucide-react";

function Jobs() {
  return (
    <div className="h-screen lex flex-col relative top-20 ">
      <Tabs defaultValue="account">
        <TabsList className="flex gap-2 justify-between bg-white  ml-24 my-4 w-[500px]  ">
          <TabsTrigger
            value="job_preview"
            className="data-[state=active]:bg-background data-[state=active]:text-orange text-gray-medium"
          >
            Job Preview
          </TabsTrigger>
          <TabsTrigger
            value="applicants"
            className="data-[state=active]:bg-background data-[state=active]:text-orange text-gray-medium"
          >
            Applicants
          </TabsTrigger>
          <TabsTrigger
            value="match"
            className="data-[state=active]:bg-background data-[state=active]:text-orange text-gray-medium"
          >
            Match
          </TabsTrigger>
          <TabsTrigger
            value="messages"
            className="data-[state=active]:bg-background data-[state=active]:text-orange text-gray-medium"
          >
            Messages
          </TabsTrigger>
        </TabsList>
        <Separator />

        <TabsContent value="job_preview">
          <div className="flex w-full">
            <div className="flex flex-col w-full ">
              <div className="flex items-center gap-4 pl-24 pt-8 mb-6">
                <h1 className=" font-semibold text-2xl text-bold">
                  Senior Product Designer
                </h1>
                <p className="text-gray-medium text-sm ">posted 2 days ago</p>
                <Badge className=" text-green-text border border-green-border bg-green-background py-0">
                  <span className="relative bottom-1.5 pr-1 text-green-dot font-extrabold text-xl ">
                    .
                  </span>
                  Open
                </Badge>
              </div>
              <div className=" text-gray-dark flex gap-5 pl-24 mb-8">
                <p className="flex justify-center ">
                  <MapPin className="mr-2 ml-0" />
                  Delaware, USA
                </p>
                <span className="font-extrabold text-gray_text text-xl relative bottom-1.5">
                  .
                </span>
                <p className="flex items-center">
                  <img src="/coins-stacked.svg" alt="img" className="mr-2" />
                  $300k-$400k
                </p>
              </div>
              <Separator />
              <div className="pl-24 my-8 flex gap-16">
                <div>
                  <h1 className="text-gray-medium-dark mb-2">
                    Skills Required
                  </h1>
                  <div className="flex flex-col items-start gap-2 ">
                    <Badge
                      variant="outline"
                      className="text-slate rounded-md py-1 px-1.5"
                    >
                      <img src="/Figma.svg" alt="figma-img" className="mr-1" />
                      Figma
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-slate rounded-md py-1 px-1.5"
                    >
                      <img
                        src="/Adobe Illustrator.svg"
                        alt="adobe-illustator-img"
                        className="mr-1"
                      />
                      Adobe Illustrator
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-slate rounded-md py-1 px-1.5"
                    >
                      <img
                        src="/Adobe XD.svg"
                        alt="adobe-xd-img"
                        className="mr-1"
                      />
                      Adobe XD
                    </Badge>
                  </div>
                </div>
                <div>
                  <h1 className="text-gray-medium-dark mb-2">
                    Preferred Language
                  </h1>
                  <p className="text-bold  font-semibold">English</p>
                </div>
                <div>
                  <h1 className="text-gray-medium-dark mb-2">Type</h1>
                  <p className="text-bold font-semibold">Full time</p>
                </div>
                <div>
                  <h1 className="text-gray-medium-dark mb-2">
                    Years of Experience
                  </h1>
                  <p className="text-bold font-semibold">
                    3+ Years of Experience
                  </p>
                </div>
              </div>
              <Separator />
              <div className="pl-24 my-8">
                <h1 className="text-gray-medium-dark">About the job</h1>
                <ol className=" list-decimal list-inside text-bold">
                  <li>Handle the UI/UX research design</li>
                  <li>
                    Work on researching on latest web applications designs &
                    trends
                  </li>
                  <li>Work on conceptualizing and visualizing</li>
                  <li>
                    Work on creating graphics content and other graphic related
                    works
                  </li>
                </ol>
                <h2 className="text-bold">
                  Benefits:
                  <ol className=" list-disc list-inside text-bold">
                    <li>Health insurance</li>
                    <li>Provident Fund</li>
                  </ol>
                </h2>
                <h2 className="text-bold">
                  Schedule:
                  <ol className=" list-disc list-inside text-bold">
                    <li>Day shift</li>
                  </ol>
                </h2>
                <h2 className="text-bold">
                  Supplemental pay types:
                  <ol className=" list-disc list-inside text-bold">
                    <li>Performance bonus</li>
                    <li>Yearly bonus</li>
                  </ol>
                </h2>
                <h2 className="text-bold">Work Location: In person</h2>
              </div>
              <Separator />

              <div className="pl-24 my-8 gap-4">
                <div className="flex items-center gap-3 p-3 pl-0">
                  <img src="/Rectangle 43.svg" alt="atlasian-img" />
                  <h1 className="text-atlassian-text">Atlassian</h1>
                </div>
                <div className="grid grid-cols-2 gap-6 max-w-3xl">
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                  <div>
                    <p className="text-gray-medium-dark">Company size</p>
                    <h1 className="text-bold">1k - 2k Employees</h1>
                  </div>
                </div>
              </div>
            </div>
            <Separator className="h-auto" orientation="vertical" />
            <div className="w-1/4">
              <div className="mx-6 mt-8 mb-6">
                <div className="flex justify-between gap-4">
                  <Button variant="outline" className="text-orange w-40">
                    <Trash2 className="size-4 mr-3" />
                    Delete job
                  </Button>
                  <Button variant="outline" className="text-orange w-40">
                    <Pencil className="size-4 mr-3" /> Edit job
                  </Button>
                </div>
                <div className="p-2">
                  <div className="flex justify-between items-center text-bold">
                    <h1 className="flex gap-2.5 py-2.5">
                      <Users />
                      Applicants
                    </h1>
                    <p className=" font-semibold ">400</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-bold">
                    <h1 className="flex gap-2.5 py-2.5">
                      <UserRoundCheck />
                      Matches
                    </h1>
                    <p className=" font-semibold ">100</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-bold">
                    <h1 className="flex gap-2.5 py-2.5">
                      <MessageSquare />
                      Messages
                    </h1>
                    <p className=" font-semibold ">147</p>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center text-bold">
                    <h1 className="flex gap-2.5 py-2.5">
                      <Eye />
                      Views
                    </h1>
                    <p className=" font-semibold ">800</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="applicants"></TabsContent>
        <TabsContent value="match"></TabsContent>
        <TabsContent value="messages"></TabsContent>
      </Tabs>
    </div>
  );
}

export default Jobs;
