"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

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

            {categories.map((category) => (
                <TabsContent key={category} value={category}>
                    <p>{category}</p>
                </TabsContent>
            ))}
        </Tabs>
    );
}
