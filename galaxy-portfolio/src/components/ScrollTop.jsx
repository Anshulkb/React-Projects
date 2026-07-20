import React, { useState, useEffect } from "react";

export default function ScrollTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) setVisible(true);
            else setVisible(false);
        };
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return visible ? (
        <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 z-50 bg-white text-black p-3 rounded-full shadow-lg hover:bg-gray-200 transition"
        >
            ↑
        </button>
    ) : null;
}
