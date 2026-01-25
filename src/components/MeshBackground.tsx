"use client";

import { motion } from "framer-motion";

export default function MeshBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none overflow-hidden">
            {/* Background blobs */}
            <motion.div
                className="absolute top-[-10%] left-[-5%] w-[60%] h-[70%] bg-primary/20 blur-[120px] rounded-full"
                animate={{
                    x: [0, 50, -20, 0],
                    y: [0, -30, 40, 0],
                    scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute bottom-[-10%] right-[-5%] w-[50%] h-[60%] bg-primary/15 blur-[100px] rounded-full"
                animate={{
                    x: [0, -40, 30, 0],
                    y: [0, 20, -50, 0],
                    scale: [1, 0.9, 1.2, 1],
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            <motion.div
                className="absolute top-[20%] right-[10%] w-[40%] h-[50%] bg-primary/10 blur-[140px] rounded-full"
                animate={{
                    x: [0, 30, -40, 0],
                    y: [0, 50, -20, 0],
                    scale: [1, 1.2, 0.8, 1],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                }}
            />
            {/* Texture overlay (optional) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(36,36,36,0.4)_100%)] opacity-50" />
        </div>
    );
}
