import React from "react";

const Home: React.FC = ()=>{
   return (
  <div style={{ padding: '40px 20px', fontFamily: 'system-ui, sans-serif', color: '#333', maxWidth: '600px', margin: '0 auto' }}>
    <h1 style={{ fontSize: '2.2rem', color: '#111', marginBottom: '10px' }}>Get in Touch</h1>
    <p style={{ color: '#666', marginBottom: '30px' }}>Have questions or want to collaborate? Drop us a message below.</p>

    <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: '500', fontSize: '0.95rem' }}>Name</label>
        <input type="text" placeholder="John Doe" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: '500', fontSize: '0.95rem' }}>Email</label>
        <input type="email" placeholder="john@example.com" style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label style={{ fontWeight: '500', fontSize: '0.95rem' }}>Message</label>
        <textarea rows="4" placeholder="Your message here..." style={{ padding: '10px', borderRadius: '6px', border: '1px solid #ccc', fontSize: '1rem', resize: 'vertical' }}></textarea>
      </div>

      <button type="submit" style={{ padding: '12px', backgroundColor: '#111', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '1rem', cursor: 'pointer', fontWeight: '500', marginTop: '10px' }}>
        Send Message
      </button>
    </form>
  </div>
);
}

export default Home;