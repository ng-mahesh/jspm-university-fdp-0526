import React from "react";

const Home: React.FC = () => {
  return (
    <div
      style={{
        padding: "40px 20px",
        fontFamily: "system-ui, sans-serif",
        color: "#333",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1 style={{ fontSize: "2.5rem", color: "#111", marginBottom: "10px" }}>
          Welcome to Our Digital Space
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Crafting seamless digital experiences with modern web technologies.
        </p>
      </header>

      <section style={{ lineHeight: "1.6", fontSize: "1.05rem" }}>
        <p style={{ marginBottom: "20px" }}>
          We believe that great software empowers people. Our platform is built
          from the ground up to provide fast, reliable, and intuitive tools that
          help teams streamline their daily workflows and eliminate repetitive
          friction.
        </p>

        <p style={{ marginBottom: "20px" }}>
          By focusing on performance and clean design, we ensure that you spend
          less time fighting complex interfaces and more time focusing on what
          truly matters to your core business goals.
        </p>

        <p style={{ marginBottom: "30px" }}>
          Explore our features, dive into our resources, and discover how our
          latest updates can transform your productivity. We are continuously
          evolving to meet the demands of a fast-paced digital landscape.
        </p>
      </section>

      <div style={{ textAlign: "center" }}>
        <button
          style={{
            padding: "12px 24px",
            backgroundColor: "#0070f3",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            fontSize: "1rem",
            cursor: "pointer",
            fontWeight: "500",
          }}
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
