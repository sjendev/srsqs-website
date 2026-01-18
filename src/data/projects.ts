export interface Project {
    id: number;
    title: string;
    location: string;
    year: string;
    category: string;
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Lords' Signature",
        location: "Architectural & SQ Project",
        year: "2024",
        category: "Quantity Surveying & Architecture",
        image: "/projects/lords-signature.webp",
    },
    {
        id: 2,
        title: "Callertonville",
        location: "Architectural & SQ Project",
        year: "2025",
        category: "Quantity Surveying & Architecture",
        image: "/projects/callertonville.webp",
    },
];

export const categories = [
    "All",
    "Quantity Surveying & Architecture",
];
