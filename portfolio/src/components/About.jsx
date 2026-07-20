import useInView from "../hooks/useInView";

export default function About() {
    const [ref, visible] = useInView({ threshold: 0.2 });

    return (
        <section id="about" className={`fade-in ${visible ? "visible" : ""}`} ref={ref} style={styles.section}>
            <h2>About Me</h2>
            <p>I love building interactive websites.</p>
        </section>
    );
}

const styles = {
    section: {
        padding: "80px 20px",
        minHeight: "100vh",
    },
};
