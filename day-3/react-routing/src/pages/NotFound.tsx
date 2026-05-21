import React from "react";

const NotFound: React.FC = ()=>{
    return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '80vh', fontFamily: 'system-ui, sans-serif', color: '#111', backgroundColor: '#fff', padding: '20px', textAlign: 'center' }}>
    <style>
      {`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulse {
          0% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(1.1); opacity: 0.4; }
          100% { transform: scale(1); opacity: 0.2; }
        }
      `}
    </style>

    <div style={{ position: 'relative', marginBottom: '40px' }}>
      <h1 style={{ fontSize: '9rem', fontWeight: '900', margin: '0', lineHeight: '1', background: 'linear-gradient(135deg, #0070f3, #00dfd8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', animation: 'float 4s ease-in-out infinite' }}>
        404
      </h1>
      <div style={{ position: 'absolute', bottom: '-10px', left: '50%', transform: 'translateX(-50%)', width: '120px', height: '12px', background: '#000', borderRadius: '50%', filter: 'blur(4px)', animation: 'pulse 4s ease-in-out infinite' }}></div>
    </div>

    <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '15px' }}>
      Lost in Space?
    </h2>
    
    <p style={{ fontSize: '1.05rem', color: '#666', maxWidth: '450px', lineHeight: '1.6', margin: '0 auto 30px' }}>
      The page you are looking for might have been removed, had its name changed, or is temporarily unavailable. Let's get you back on track.
    </p>

    <button 
      onClick={() => window.location.href = '/'}
      style={{ padding: '12px 28px', background: '#111', color: '#fff', border: 'none', borderRadius: '30px', fontSize: '1rem', fontWeight: '500', cursor: 'pointer', boxShadow: '0 4px 14px rgba(0,0,0,0.15)', transition: 'transform 0.2s' }}
      onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
      onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
    >
      Return Home
    </button>
  </div>
);
}

export default NotFound;