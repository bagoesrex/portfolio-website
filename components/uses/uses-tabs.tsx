"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SoftwareTab from "./software-tab";
import CodingTab from "./coding-tab";

const categories = ["All", "Everyday", "Software", "Browser", "Coding", "Website"];

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
                <p>Semua kategori</p>
            </TabsContent>

            <TabsContent value="Everyday">
                <p>Tools</p>
            </TabsContent>

            <TabsContent value="Software">
                <SoftwareTab />
            </TabsContent>

            <TabsContent value="Browser">
                <p>Browser</p>
            </TabsContent>

            <TabsContent value="Coding">
                <CodingTab />
            </TabsContent>

            <TabsContent value="Website">
                <p>Usefull website</p>
            </TabsContent>
        </Tabs>
    );
}
