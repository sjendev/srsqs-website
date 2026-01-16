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
        title: "Metropolitan Tower",
        location: "Urban Core, London",
        year: "2023",
        category: "Architecture",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA2EbR6fQXZJvEO7NcweoF1B8zjqrfz15M6bqr2ciUI_uWVO5nk71WyS-Qu29kYOEsmIqTnaWtWmq5D3c4idKRlpafV6iHHiIq5UBva2OmP1OmDzj8hA0qNKL37nkgc84s3fatRjatYjyXyLqVO3Izc7k9pMnG4L6pMgBCbPV0rcTJSQZCRPzgqX9EjNN0bM-RCKCvqWhgnndh1FiNfVmWDuLVypDfBU6PVoWHzahn7u2MqAtFfmUeGjoOdhyMehcZJwkgOJbiJd30",
    },
    {
        id: 2,
        title: "Eco-Residential Hub",
        location: "Sustainable Living, Vancouver",
        year: "2022",
        category: "Project Management",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuChPUld0oDB_qIz_7tOxaL5gWMQe5HAoHURd0bHPfpiATKJK-BUa-kv0tryxrY7-tk801Edc19NbchXXG6XAezxwFWf_GjXhunm6wNvlJc8RlnJJoRc-_G6fWpa9Ae2EGWkmok-Q_Jjs9EnyCQ151rjJwgk_ac0jtRWnQ5FD2tamj-XGusB1rx003DbjLY4x2ylaIJzKHhAJzUpvMsi4Y-nc7FwF4CJcFvYs1j-dDlmUMtN_0f9drJu490eXHmLNyDS2ooqUFMPjNA",
    },
    {
        id: 3,
        title: "Grand Plaza Mall",
        location: "Commercial District, Dubai",
        year: "2023",
        category: "Quantity Surveying",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBQSk8xIPBFXEuIqkIhlwKENVNpscMVfBHaN75HrRM1EwJthUM2swh-bzPYhoAqagaTM7iNQY9A4z3cobqJSvyHF5WaSkovhBttTjgec8zLMq-pnsou4LM6OeNuulcHNmIA9-K5eTK0KwYtLAXa7CCPgQKDPeCZfpuS9RWojB0rchKHMPcHCDWDJH0Q13ct4_0OUM_W8WjT_HbqcqC-cQMHSvw3cBkhJsSZx_t5EUnvmUWvc4q2Bh9k8nnbrAtf49TamNdJI4QHxgo",
    },
    {
        id: 4,
        title: "Sustainable Art Museum",
        location: "Culture Hub, Berlin",
        year: "2024",
        category: "Architecture",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDx44eUEBjH8pomHxTlfvcSHYQEj-IB1MFGk3_Nt2QEaQkL0xrxha6eXmxJbhuSPzUscY44RrIu-nNGeU6aKGvOg6dIHaIyCoFT-tG_RiLC2AZLGWAe-r_Oo6PK_hUz9nRxZnZB25vs4zbfyLh0huBw20AClbG5mI4MY_tDodxOjZteyQRADrrGWiv374375uViozBxhWkafwOeYFIzp_qMcTRmve6UfUmDRWUWi8i5NzdNrWcO6RTkcL5LfziJOiUUF23XaqL0Xgc",
    },
    {
        id: 5,
        title: "Smart Infrastructure Initiative",
        location: "City Tech, Singapore",
        year: "2023",
        category: "Project Management",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBErN8mraVVK3DdFKMoHGYVTOK-OHIiN6Q9WvdeS9BKdP5TOuaioqP78CuS5yySJ8gkKLSlUtLLRJUbX1AWGdbWVEvnha9Q2ZVL1Q1thb1wrX2XiQr6xtQEWNpegswJayLOJ7i-khu1wti8cnmzDbvfsQ1hwe822NYu9xgxfSogawnGyjCwVj5Zo4X9Ho7u0XefBFbwROitlkPavOrQ8tQ6sKWlQP9VAq2sUqA4XiQiwYV5aa2DlgNQx3aWuVK3f9NNU6Acj_KYMZk",
    },
    {
        id: 6,
        title: "Industrial Logistics Park",
        location: "Logistics Zone, Rotterdam",
        year: "2024",
        category: "Quantity Surveying",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCl844onT5TE-vHj00ldaKOZ0EbTbklrA4zRBmwQ3FLNyk37lgPV_tbbgeRxLrzHTgbPbyIiOKvNcjJVsazZeYRMyM9q8MQqYGgkA6qnFsBxVNH4V5MPs5fmvkT1-Qob7irzj8Bq-soj4o9ntrYpDrKZETxcquvR9mtdAiS2-wVyoJHDPr6ZLTUzKB9nSrZDBiMuaK31vvKdZ3LzeeBt7ym-7vYiezFBq9n3wjg0hc3J3xFd0Ry4AH26uVUhgjtVGJ6hUVOyYB-jRg",
    },
    {
        id: 7,
        title: "Bridge Over Sky Valley",
        location: "Transport Link, Zurich",
        year: "2021",
        category: "Engineering",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC4zSUlrVs5aOJ5_yDtMiBiP_9a9nbXcmktMOXbY3VDFtnM2r641LZvvwSlu7fM2NM6NM_PARk2A0yMxVvp4Qyig2cFHmGr2iZm0bUgN1kJyRKGEnqrw_J8yi2ZHwrT57hlsyHH7_PywtTCYYHr8l9nrm3RgflAi_zHutnSmANDv9uUXn394diGk0-zF5cepO6rpbNrgrPAx-Sfu7trjCAmISVGVykBxPXQOSxXY6EigRXsYb9trulzU5ZKNwYnHSjeHM9-nZbQAe4",
    },
    {
        id: 8,
        title: "Solar Energy Farm",
        location: "Green Energy, Arizona",
        year: "2023",
        category: "Engineering",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBA-TFKJMisPD5nOB3Lgu9vdlEqEq98uOBRnlmOPljv2txQWOU2c_E-bmQc6gERc_KGUGTC69DVJzG6XO2X0TbVYdudkbzWFwtigcOrp5Oj5XmUKpVcLZ2uCclMmfCgkXV-CcWVU783hMv5k0kYVSlCPUh9xfHw3QKbHpWVIMyhzxTPxG4e6kqfPJaB1QdF1rMDsyHadD93xkRNDROiICH--52QzYDgwQDFnRiJV6LqvVnChmgHDkd4fPqa_ZW6CR-neSB3hqf760A",
    },
    {
        id: 9,
        title: "Safety Management for City Hospital",
        location: "Healthcare Compliance, Sydney",
        year: "2022",
        category: "OHS",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZFODV0HyeYS7iFhiFDmirGoGja4n8lIYDO0jpLTMmcc1cL7PK-vwjZN2hDFElpcj7rHitOiYf1Mlzz4ECj_1OR3-kcawVazR3IPpNfcUpThrO2GQ70GmYUZA-ElocBZPRScXEDYrpc_sG7Ah6Xk73Y9vnqJwl0ThvB4lde_sS6BojJoLldR8VTy85bvhgT2Fz3G36jTc81KioPr3hQq52UZ6Hasm4G39JBR8oQrZpZLsC7gnxOmZyZb3Jrq-Mx-U3IdaF4dP3lkM",
    },
    {
        id: 10,
        title: "Lords' Signature",
        location: "Architectural & SQ Project",
        year: "2024",
        category: "Quantity Surveying & Architecture",
        image: "/projects/lords-signature.webp",
    },
    {
        id: 11,
        title: "Callertonville",
        location: "Architectural & SQ Project",
        year: "2025",
        category: "Quantity Surveying & Architecture",
        image: "/projects/callertonville.webp",
    },
];

export const categories = [
    "All",
    "Quantity Surveying",
    "Architecture",
    "Engineering",
    "Project Management",
    "OHS",
];
