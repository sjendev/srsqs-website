export const siteData = {
    nav: {
        logo: "SRSQS",
        logoLight: "/logo-white.png",
        logoDark: "/logo-black.png",
        links: [
            { label: "Projects", href: "/projects", hasMegaMenu: true },
            { label: "Services", href: "/services", hasMegaMenu: true },
            { label: "About", href: "/about" },
            { label: "Insights", href: "#" },
        ],
        cta: { label: "Enquire now", href: "#" },
        megaMenu: {
            Projects: {
                title: "Our latest projects",
                linkAll: { label: "Explore All Projects", href: "/projects" },
                items: [
                    {
                        title: "Heidelberg",
                        category: "Education",
                        image: "/projects/heidelberg.webp",
                        cta: "See Work",
                        href: "/projects/heidelberg"
                    },
                    {
                        title: "Lords' Signature",
                        category: "Education",
                        image: "/projects/lords-signature.webp",
                        cta: "See Work",
                        href: "/projects/lords-signature"
                    },
                    {
                        title: "Callertonville",
                        category: "QS & Architectural",
                        image: "/projects/callertonville.webp",
                        cta: "See Work",
                        href: "/projects/callertonville"
                    }
                ]
            },
            Services: {
                title: "Expertise that performs",
                linkAll: { label: "View All Services", href: "/services" },
                items: [
                    {
                        title: "Quantity Surveying",
                        category: "Cost Management",
                        image: "/services/quantity-surveying.webp",
                        cta: "Explore Service",
                        href: "/services"
                    },
                    {
                        title: "Architecture",
                        category: "Design & Planning",
                        image: "/services/architecture.webp",
                        cta: "Explore Service",
                        href: "/services"
                    },
                    {
                        title: "Civil and Structural Engineering",
                        category: "Structural & Civil",
                        image: "/services/civil-structural.webp",
                        cta: "Explore Service",
                        href: "/services"
                    }
                ]
            }
        },
    },
    hero: {
        badge: "Now Estimating",
        title: {
            line1: "The convergence",
            line2: "of",
            highlight: "vision",
            line3: "and reality.",
        },
        description: "In the complex landscape of modern construction, SRSQS delivers integrated engineering, architecture, and cost management solutions. We ensure your vision is built on a foundation of technical excellence and commercial viability.",
        ctas: [
            { label: "Work with Us", href: "#", primary: true, icon: "arrow_forward" },
            { label: "Explore Our Work", href: "/projects", primary: false },
        ],
        trust: "Trusted by 100+ Developers",
        images: [
            "/hero/project-02a.webp",
            "/hero/project-05.webp",
            "/hero/team-abstract.webp",
            "/hero/team-onsite.webp",
        ],
    },
    partners: {
        title: "Trusted by industry leaders",
        items: [
            { name: "City of Ekurhuleni", image: "/clients/ekurhuleni.png" },
            { name: "PURCO SA", image: "/clients/purco.png" },
            { name: "Foskor", image: "/clients/foskor.png" },
            { name: "PRASA", image: "/clients/prasa.png" },
            { name: "CSIR", image: "/clients/csir.png" },
            { name: "Amazwi", image: "/clients/amazwi.png" },
            { name: "Coega", image: "/clients/coega.png" },
            { name: "National Lotteries Commission", image: "/clients/nlc.png" },
            { name: "Transnet", image: "/clients/transnet.png" },
            { name: "Independent Development Trust", image: "/clients/idt.png" },
            { name: "Rand Water", image: "/clients/randwater.png" },
            { name: "Department of Public Works", image: "/clients/public-works.png" },
        ],
    },
    consultancy: {
        title: "The multi-disciplinary partner ensuring your project's success",
        description: "In an industry where complexity is the norm, we provide the integrated expertise you need to build with confidence. From architectural concept to engineering execution and final account, we are your project guardians.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLs90vmapCcQUEBy_OC5_cWQvQCqE35abtUuVfDl_FzceErAkRcMlPydqS3NwStfno8eFa6Ag4k1lj4O2LqwpARO2VgIlnvvbSLdvWscmSrpH8J9tR4QHTcx8KFkmyBa97D81P6DXIS2-nGa8uma1d8DZoU5unE6FzGEVzNDfxPhSQYu11go70dwR693zTxm-K7t3y1X7vgH6bWbCWbd7LX1dfAdcYfdAHLL9mBp-F6c3Ud5oBGz073GvhF_oPIWcj9mSwbyDwWRU",
        label: "Integrated Solutions",
    },
    stats: {
        label: "Results",
        title: "Impact you can see",
        description: "Rigorous control, creative design, and precise engineering. Our integrated approach translates into project viability, reduced risk, and higher returns on investment for developers and stakeholders.",
        cta: "Learn more about us",
        items: [
            { value: "98%", label: "Budget accuracy on completed projects through meticulous forecasting." },
            { value: "35%", label: "Cost savings achieved through strategic value engineering." },
            { value: "100%", label: "On-time financial reporting keeping stakeholders fully informed." },
        ],
    },
    whatOthersMiss: {
        label: "What others miss",
        title: "Construction success isn't just about blueprints; it's about the holistic integration of design, cost, and engineering. It starts with a comprehensive understanding of the entire project lifecycle. SRSQS brings clarity to the complexity of development.",
        cta: "Let's Work Together",
        cards: [
            {
                title: "Integrated Design",
                description: "Design shouldn't happen in a silo. We merge architectural vision with engineering reality and cost constraints to ensure feasibility before ground is broken.",
                type: "plan",
            },
            {
                title: "Procurement & Tendering",
                description: "Sourcing shouldn't be a gamble. We develop robust procurement strategies and manage tendering to secure the best value, quality, and contractual protection.",
                type: "procure",
            },
            {
                title: "Total Project Control",
                description: "Budgets, timelines, and quality are inseparable. We provide real-time monitoring and proactive management across all disciplines to keep your project on track.",
                type: "control",
            },
        ],
    },
    services: {
        label: "Services",
        title: "Expertise that performs",
        description: "Every construction project is unique. That's why we develop tailored cost solutions built on market insight and engineering data. Our multidisciplinary approach protects your investment at every stage.",
        items: [
            { id: "01", title: "Quantity Surveying", description: "Precision in cost management from feasibility to final account, ensuring project viability." },
            { id: "02", title: "Architecture", description: "Innovative spatial design merging aesthetics with structural functionality and commercial reality." },
            { id: "03", title: "Civil and Structural Engineering", description: "Technical excellence in structural and civil design for robust and efficient built solutions." },
            { id: "04", title: "Electrical Engineering", description: "Advanced electrical systems design, including power distribution, lighting, and specialized building systems." },
            { id: "05", title: "Mechanical Engineering", description: "Comprehensive mechanical solutions including HVAC, fire protection, and industrial piping systems." },
            { id: "06", title: "Project Management", description: "Strategy and oversight to ensure timelines, budgets, and quality standards are exceeded." },
            { id: "07", title: "OHS Consultancy", description: "Comprehensive health and safety compliance to protect your most valuable assets." },
        ],
    },
    projects: {
        label: "Projects",
        title: "Featured projects",
        description: "We believe in management that isn't just about counting costs, but creating value through design and engineering. See how we've helped major developments succeed.",
        cta: "View More Projects",
        items: [
            {
                tag: "Education",
                title: "Heidelberg",
                shortDesc: "The construction of a modern student cafeteria at SEDCOL Heidelberg campus.",
                categories: ["Principal Agent", "Project Management", "All disciplines"],
                image: "/projects/heidelberg.webp",
                href: "/projects/heidelberg",
            },
            {
                tag: "Education",
                title: "Lords' Signature",
                shortDesc: "Design and Construction of a modern three-storey corporate office for SEDCOL TVET College.",
                categories: ["Principal Agent", "All disciplines", "Education"],
                image: "/projects/lords-signature.webp",
                href: "/projects/lords-signature",
            },
        ],
    },
    strategy: {
        label: "Strategic Foundation",
        title: "The drive behind everything we build",
        description: "We don't just execute — we engineer value. Success means higher predictability, lower risk, and stronger asset performance. Discover how we help developers build smarter.",
        items: [
            { title: "Precision", description: "We identify issues early. By leveraging multi-disciplinary expertise, we ensure your project reflects reality, not just optimism.", icon: "analytics" },
            { title: "Ethics", description: "We operate with unshakeable integrity. Our advice is impartial, our reporting is transparent, and our commitment to your interests is absolute.", icon: "verified_user" },
            { title: "Engineering Value", description: "We don't just follow plans; we engineer value. We find smarter ways to achieve your design intent without compromising quality or function.", icon: "precision_manufacturing" },
            { title: "Risk Mitigation", description: "Construction is risky. We identify potential technical and financial pitfalls early and implement robust controls to protect your capital and ensure project delivery.", icon: "shield", wide: true },
            { title: "Stewardship", description: "We treat your project as our own responsibility. We ensure every decision is accounted for, justified, and contributes to the project's value.", icon: "account_balance" },
        ],
    },
    process: {
        label: "Our Process",
        title: "A framework that drives excellence",
        description: "Every project follows a disciplined pathway. Our proven framework ensures transparency, control, and commercial success from the first concept to the final handshake.",
        cta: "Take the First Step",
        steps: [
            { id: 1, title: "CONCEPT & VIABILITY", description: "We establish a realistic preliminary strategy based on early concepts, benchmarking, and market data." },
            { id: 2, title: "DESIGN & DEVELOPMENT", description: "We define the technical specifications, manage tendering, and ensure designs are practical and efficient." },
            { id: 3, title: "CONSTRUCTION MONITORING", description: "Continuous tracking throughout construction to ensure quality, safety, and budget adherence." },
            { id: 4, title: "QUALITY ASSURANCE", description: "Regular assessment of work completed to certify progress and standard compliance." },
            { id: 5, title: "CLOSE-OUT", description: "Detailed reconciliation of all deliverables, manuals, and accounts to close out the project definitively." },
        ],
    },
    contact: {
        title: "Ready to start your next landmark project?",
        description: "Partner with our multi-disciplinary team of experts to deliver excellence. Request a consultation today.",
        review: {
            title: "Expert Review",
            description: "Every inquiry is reviewed by our senior technical team.",
            icon: "mark_email_read",
        },
        fields: [
            { id: "full-name", label: "Full Name", placeholder: "John Doe", type: "text" },
            { id: "company-name", label: "Company Name", placeholder: "Construction Ltd.", type: "text" },
            { id: "email", label: "Email Address", placeholder: "john@example.com", type: "email" },
            { id: "project-details", label: "Project Details", placeholder: "Briefly describe your project scope and requirements...", type: "textarea" },
        ],
        cta: "Submit Request",
    },
    footer: {
        logo: "SRSQS",
        logoLight: "/logo-white.png",
        navigation: [
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: "Projects", href: "/projects" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/#contact" },
        ],
        headquarters: [
            "31 Hans Van Rensburg St",
            "Polokwane Central",
            "Polokwane",
            "0699",
        ],
        legal: [
            { label: "Privacy Policy", href: "#" },
            { label: "Terms & Conditions", href: "#" },
        ],
        support: "Mon-Fri: 9am - 5pm",
        copyright: "© 2025 SRSQS. All Rights Reserved.",
        social: [
            { icon: "social_leaderboard", href: "#" },
            { text: "in", href: "#" },
            { icon: "photo_camera", href: "#" },
        ],
    },
};
