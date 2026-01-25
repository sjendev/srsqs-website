export interface Project {
    id: number;
    title: string;
    location: string;
    year: string;
    category: string;
    image: string;
    href: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Heidelberg",
        location: "Heidelberg, Gauteng",
        year: "2025",
        category: "Education",
        image: "/projects/heidelberg.webp",
        href: "/projects/heidelberg",
    },
    {
        id: 2,
        title: "Lords' Signature",
        location: "Mayerton, Gauteng",
        year: "2024",
        category: "Education",
        image: "/projects/lords-signature.webp",
        href: "/projects/lords-signature",
    },
    {
        id: 3,
        title: "Callertonville",
        location: "Architectural & SQ Project",
        year: "2025",
        category: "Quantity Surveying & Architecture",
        image: "/projects/callertonville.webp",
        href: "/projects/callertonville",
    },
    {
        id: 4,
        title: "Krugersdorp",
        location: "Krugersdorp Central Campus, Gauteng",
        year: "2025",
        category: "Public / Education",
        image: "/projects/krugersdorp.webp",
        href: "/projects/krugersdorp",
    },
    {
        id: 5,
        title: "Marapyane",
        location: "Mpumalanga",
        year: "2025",
        category: "Construction",
        image: "/projects/marapyane.webp",
        href: "/projects/marapyane",
    },
    {
        id: 6,
        title: "Randfontein",
        location: "Randfontein Campus, Gauteng",
        year: "2025",
        category: "Public / Education",
        image: "/projects/randfontein.webp",
        href: "/projects/randfontein",
    },
];

export const categories = [
    "All",
    "Quantity Surveying & Architecture",
];
