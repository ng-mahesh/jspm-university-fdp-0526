import React from "react";

const About: React.FC = ()=>{
    return (
  <div style={{ padding: '40px 20px', fontFamily: 'system-ui, sans-serif', color: '#333', maxWidth: '800px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '2.2rem', color: '#111', borderBottom: '2px solid #eaeaea', paddingBottom: '10px', marginBottom: '30px' }}>Our Story</h1>
    
    <section style={{ lineHeight: '1.6', fontSize: '1.05rem' }}>
      <p style={{ marginBottom: '20px' }}>
        Founded by a small group of passionate software engineers and designers, our journey began with a simple mission: to build web applications that are as powerful under the hood as they are elegant on the surface.
      </p>

      <p style={{ marginBottom: '20px' }}>
        Over the years, we have grown into a dedicated team pushing the boundaries of modern frontend development. We value technical excellence, open communication, and a relentless focus on solving user-centric problems.
      </p>

      <p style={{ marginBottom: '20px' }}>
        Whether optimizing state management, engineering scalable databases, or designing accessible user interfaces, we approach every challenge with curiosity and a commitment to high-quality code.
      </p>
    </section>
  </div>
);
}

export default About;