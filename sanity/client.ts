import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION;

if (!projectId) throw new Error("Missing NEXT_PUBLIC_SANITY_PROJECT_ID in .env.local");
if (!dataset) throw new Error("Missing NEXT_PUBLIC_SANITY_DATASET in .env.local");
if (!apiVersion) throw new Error("Missing NEXT_PUBLIC_SANITY_API_VERSION in .env.local");

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
});
