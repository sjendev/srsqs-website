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
                        title: "Lords' Signature",
                        category: "QS & Architectural",
                        image: "/projects/lords-signature.webp",
                        cta: "See Work"
                    },
                    {
                        title: "Callertonville",
                        category: "QS & Architectural",
                        image: "/projects/callertonville.webp",
                        cta: "See Work"
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
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBDHZDLaDqS6hq4kGtZZhKXYqFJ5s9eHU3B1K_qquAT0aj2aOStvCFkfKEi9bHpG5R2kJ6pWvIPx1VdYcfoXUOCTrvKfJi39fYOrS3r0RzvK064ehJFMrga_F3h8_wj0Vxk_zM2Ahxcquf8_TeiJYxsnxBb935UQYlJEaJbKPPI6UojNxY7b_uIoxhv_5cCEuMfQF0b6AFFLEAuYlt_Q3QymzwqW_Xx7o-neDA58WyT98fFa-5GmxyuXB7DShXQ2Pz8YxAtRm-CP9c",
                        cta: "Explore Service",
                        href: "/services"
                    },
                    {
                        title: "Architecture",
                        category: "Design & Planning",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgAzqYynHzBcN08bTCafShkZ7m2Pr_U7zNbYIRzmiJEGQeeMafvUGtMrWIqITz9Q1PkSOYzkTovg4sI6y0HaeM_EgRYWDfWBEXnY1JBXvc1fOJpPI4Mkdj_akemPOP-9dDGoV5NAvVvCFzS07aYKi1CKs9evNXj6pswAr4uEPYnX6a6U0z3QFGxtY9Xon2AL2tkIDUfz-_ti4v5K6gxgmq_TuriUxOQ_5aGx7GDfiRlrZrpRLwWndM1--YkaXw0OJC3F0XJpdlyqc",
                        cta: "Explore Service",
                        href: "/services"
                    },
                    {
                        title: "Engineering",
                        category: "Structural & Civil",
                        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDgFcM4sXIYTNxPT7tvRrboNbosNh8YD8BtlhKbQZD9mj_Os37U_Ss9nkRY0mFZ9l5TLBqwFQW2IwCoUPL8wIpuFPnYk8T1XixleRDBA_YPrn_Ti2TOZqRMdSGRna5wtFdQJzP3BLWPvtbdnTpKcq7jUJCxDBE-vCRnnB4oEXwVxvXg0Fz0ZyRKVVLRHSkJY8GzYN2Yl28JD1sF3QVUGupad_jUcPxKYO4WbSPMeJ90w2e5knK7XZXq-4BEu1GZK5y3seRsG3F64qM",
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
            line1: "The space",
            line2: "between",
            highlight: "precision",
            line3: "and profitability.",
        },
        description: "In the complex landscape of modern construction, SRSQS delivers rigorous cost management and strategic financial planning. We ensure your vision is built on a foundation of commercial viability.",
        ctas: [
            { label: "Work with Us", href: "#", primary: true, icon: "arrow_forward" },
            { label: "Explore Our Work", href: "/projects", primary: false },
        ],
        trust: "Trusted by 100+ Developers",
        images: [
            "/hero/hero-1.webp",
            "/hero/hero-2.webp",
            "/hero/hero-3.webp",
            "/hero/hero-4.webp",
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
        title: "The consultancy that gives your project the financial support it needs",
        description: "In an industry where margins matter, we provide the certainty you need to build with confidence. From initial feasibility to final account, we are your financial guardians.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLs90vmapCcQUEBy_OC5_cWQvQCqE35abtUuVfDl_FzceErAkRcMlPydqS3NwStfno8eFa6Ag4k1lj4O2LqwpARO2VgIlnvvbSLdvWscmSrpH8J9tR4QHTcx8KFkmyBa97D81P6DXIS2-nGa8uma1d8DZoU5unE6FzGEVzNDfxPhSQYu11go70dwR693zTxm-K7t3y1X7vgH6bWbCWbd7LX1dfAdcYfdAHLL9mBp-F6c3Ud5oBGz073GvhF_oPIWcj9mSwbyDwWRU",
        label: "Cost Management",
    },
    stats: {
        label: "Results",
        title: "Impact you can feel",
        description: "Rigorous cost control builds trust. That trust translates into project viability, reduced risk, and higher returns on investment for developers and stakeholders.",
        cta: "Learn more about us",
        items: [
            { value: "98%", label: "Budget accuracy on completed projects through meticulous forecasting." },
            { value: "35%", label: "Cost savings achieved through strategic value engineering." },
            { value: "100%", label: "On-time financial reporting keeping stakeholders fully informed." },
        ],
    },
    whatOthersMiss: {
        label: "What others miss",
        title: "Construction success isn't just about blueprints; it's about the bottom line. It starts with deeper insight into cost control, risk management, and the complexity of modern construction projects. SRSQS brings clarity to the financial chaos of development.",
        cta: "Let's Work Together",
        cards: [
            {
                title: "Cost Planning",
                description: "Accurate forecasting from day one. We translate architectural vision into a detailed cost framework that ensures commercial feasibility before ground is broken.",
                type: "plan",
            },
            {
                title: "Procurement & Tendering",
                description: "Sourcing shouldn't be a gamble. We develop robust procurement strategies and manage tendering to secure the best value, quality, and contractual protection.",
                type: "procure",
            },
            {
                title: "Project Controls",
                description: "Budgets don't keep themselves. We provide real-time monitoring, variance analysis, and proactive control to keep your project financially on track.",
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
            { id: "03", title: "Engineering", description: "Technical excellence in structural and civil design for robust and efficient built solutions." },
            { id: "04", title: "Project Management", description: "Strategy and oversight to ensure timelines, budgets, and quality standards are exceeded." },
            { id: "05", title: "OHS Consultancy", description: "Comprehensive health and safety compliance to protect your most valuable assets." },
        ],
    },
    projects: {
        label: "Projects",
        title: "Featured projects",
        description: "We believe in financial management that isn't just about counting costs, but creating value. See how we've helped major developments succeed.",
        cta: "View More Projects",
        items: [
            {
                tag: "Architectural",
                title: "Lords' Signature",
                shortDesc: "Lords' Signature - QS and Architectural Excellence for a premium architectural project.",
                categories: ["Quantity Surveying", "Architecture"],
                image: "/projects/lords-signature.webp",
            },
            {
                tag: "Architectural",
                title: "Callertonville",
                shortDesc: "Callertonville - QS and Architectural Excellence for a premium project.",
                categories: ["Quantity Surveying", "Architecture"],
                image: "/projects/callertonville.webp",
            },
        ],
    },
    strategy: {
        label: "Strategic Foundation",
        title: "The drive behind everything we build",
        description: "We don't just calculate costs — we engineer value. Success means higher predictability, lower risk, and stronger asset performance. Discover how we help developers build smarter.",
        items: [
            { title: "Accuracy", description: "We identify true costs early. By leveraging historical data and market analysis, we ensure your budget reflects reality, not just optimism.", icon: "analytics" },
            { title: "Ethics", description: "We operate with unshakeable integrity. Our advice is impartial, our reporting is transparent, and our commitment to your interests is absolute.", icon: "verified_user" },
            { title: "Engineering Value", description: "We don't just cut costs; we engineer value. We find smarter ways to achieve your design intent without compromising quality or function.", icon: "precision_manufacturing" },
            { title: "Risk Mitigation", description: "Construction is risky. We identify potential financial pitfalls early and implement robust controls to protect your capital and ensure project delivery.", icon: "shield", wide: true },
            { title: "Financial Stewardship", description: "We treat your capital as our own responsibility. We ensure every dollar spent is accounted for, justified, and contributes to the project's value.", icon: "account_balance" },
        ],
    },
    process: {
        label: "Our Process",
        title: "A framework that drives excellence",
        description: "Every project follows a disciplined financial pathway. Our proven framework ensures transparency, control, and commercial success from the first estimate to the final handshake.",
        cta: "Take the First Step",
        steps: [
            { id: 1, title: "INITIAL BUDGET", description: "We establish a realistic preliminary budget based on early concepts, benchmarking, and market data." },
            { id: 2, title: "PROCUREMENT STRATEGY", description: "We define the best route to market, manage tendering, and negotiate contracts that protect your interests." },
            { id: 3, title: "COST MONITORING", description: "Continuous financial tracking throughout construction to identify variances and implement corrective actions." },
            { id: 4, title: "VALUATIONS", description: "Regular assessment of work completed to certify progress payments accurately and fairly." },
            { id: 5, title: "FINAL ACCOUNT", description: "Detailed reconciliation of all costs, variations, and claims to close out the project finances definitively." },
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
