"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SoftwareTab from "./software-tab";
import CodingTab from "./coding-tab";
import EverydayTab from "./everyday-tab";
import WebsiteTab from "./website-tab";

const categories = ["All", "Everyday", "Software", "Coding", "Website"];

export default function UsesTabs() {
    return (
        <Tabs defaultValue="All" className="w-full">
            <TabsList className="grid grid-cols-6 w-full mb-4 bg-transparent">
                {categories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                        {category}
                    </TabsTrigger>
                ))}
            </TabsList>

            <TabsContent value="All">
                <div className="flex flex-col gap-8">
                    <EverydayTab />
                    <SoftwareTab />
                    <CodingTab />
                    <WebsiteTab />
                </div>
            </TabsContent>

            <TabsContent value="Everyday">
                <EverydayTab />
            </TabsContent>

            <TabsContent value="Software">
                <SoftwareTab />
            </TabsContent>

            <TabsContent value="Coding">
                <CodingTab />
            </TabsContent>

            <TabsContent value="Website">
                <WebsiteTab />
            </TabsContent>
        </Tabs>
    );
}
