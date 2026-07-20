import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Section({ id, bgColor, title, children }) {
    const sectionRef = useRef();

    useEffect(() => {
        gsap.from(sectionRef.current, {
            opacity: 0,
            y: 50,
            duration: 1,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse",
            },
        });
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`${bgColor} h-screen flex items-center justify-center`}
        >
            <div className="text-white text-center">
                <h1 className="text-5xl font-bold">{title}</h1>
                {children}
            </div>
        </section>
    );
}
