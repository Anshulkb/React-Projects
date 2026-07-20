import useInView from "../hooks/useInView";

export default function Hero() {
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <section id="hero" className={`fade-in ${visible ? "visible" : ""}`} ref={ref} style={styles.hero}>
            <h1>Hi, I'm Your Name</h1>
            <p>Frontend Developer | UI/UX Enthusiast</p>
        </section>
    );
}

const styles = {
    hero: {
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "1.5rem",
    },
};
