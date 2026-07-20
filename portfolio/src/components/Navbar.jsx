export default function Navbar() {
    return (
        <nav style={styles.nav}>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
        </nav>
    );
}

const styles = {
    nav: {
        position: "fixed",
        top: 0,
        width: "100%",
        background: "#fff",
        padding: "15px",
        display: "flex",
        justifyContent: "center",
        gap: "30px",
        boxShadow: "0 2px 15px rgba(0,0,0,0.1)",
        zIndex: 1000,
    },
};
