import Head from 'next/head';
import { useState } from 'react';

export default function Home() {
  const [rc, setRc] = useState('');
  const [key, setKey] = useState('');

  // PRICE SYSTEM
  const [days, setDays] = useState(1);
  const prices = {
    1: 10,
    7: 50,
    30: 200
  };

  // 🔗 YOUR LIVE VEHICLE API
  const apiUrl = `https://akash-vehicle-info-api.vercel.app/?rc=${rc}&key=${key}`;

  return (
    <div style={page}>
      <Head>
        <title>AKASHHACKER | VEHICLE RC INFO API</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main style={card}>
        <h1 style={title}>🚗 VEHICLE RC INFORMATION SYSTEM</h1>

        <p style={subtitle}>
          ADVANCED VEHICLE DATA EXTRACTOR BY <b>AKASHHACKER</b>
        </p>

        {/* INPUTS */}
        <div style={inputWrap}>
          <input
            placeholder="ENTER VEHICLE RC NUMBER"
            value={rc}
            onChange={(e) => setRc(e.target.value.toUpperCase())}
            style={inputStyle}
          />
          <input
            placeholder="ENTER ACCESS KEY"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            style={inputStyle}
          />
        </div>

        {/* API STATUS */}
        <div style={statusBox}>
          <p>
            📡 <b>API STATUS:</b>{' '}
            <span style={{ color: '#00ff41' }}>OPERATIONAL</span>
          </p>
          <p>
            🔗 <b>YOUR ENDPOINT:</b>
            <br />
            <code style={{ color: '#00d4ff' }}>
              {rc && key
                ? apiUrl
                : 'https://akash-vehicle-info-api.vercel.app/?rc=AS01BB1209&key=YOURKEY'}
            </code>
          </p>
        </div>

        {/* EXECUTE */}
        <div style={{ marginTop: '35px' }}>
          <a
            href={rc && key ? apiUrl : '#'}
            onClick={(e) => {
              if (!rc || !key) {
                e.preventDefault();
                alert('Bhai, RC Number aur Key dono daalo!');
              }
            }}
            style={buttonStyle(rc && key)}
          >
            EXECUTE RC QUERY
          </a>
        </div>

        {/* PRICE + TELEGRAM */}
        <div style={pricingBox}>
          <h2>🔑 GET API ACCESS</h2>

          <select
            value={days}
            onChange={(e) => setDays(Number(e.target.value))}
            style={selectStyle}
          >
            <option value="1">1 Day Access</option>
            <option value="7">7 Days Access</option>
            <option value="30">30 Days Access</option>
          </select>

          <p style={{ marginTop: '15px', color: '#fff' }}>
            💰 Price: <b>₹{prices[days]}</b>
          </p>

          <a
            href={`https://t.me/AkashExploits1?text=Hi%20I%20want%20Vehicle%20RC%20API%20Key%20for%20${days}%20days.%20Price:%20₹${prices[days]}`}
            target="_blank"
            rel="noreferrer"
            style={buyBtn}
          >
            🚀 GENERATE API KEY
          </a>
        </div>
      </main>

      <footer style={footer}>
        © 2026 AKASHHACKER // VEHICLE DATA TERMINAL
      </footer>
    </div>
  );
}

/* ===== STYLES ===== */
const page = {
  backgroundColor: '#050505',
  color: '#00d4ff',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  fontFamily: 'Orbitron, sans-serif',
  padding: '20px'
};

const card = {
  border: '1px solid #00d4ff',
  padding: '50px',
  borderRadius: '20px',
  boxShadow: '0 0 30px rgba(0, 212, 255, 0.3)',
  backgroundColor: 'rgba(0, 212, 255, 0.02)',
  maxWidth: '750px',
  width: '100%',
  textAlign: 'center'
};

const title = { fontSize: '2.2rem', letterSpacing: '3px' };
const subtitle = { color: '#aaa', marginBottom: '30px' };

const inputWrap = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
  marginBottom: '30px'
};

const inputStyle = {
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #00d4ff',
  backgroundColor: '#111',
  color: '#00d4ff',
  textAlign: 'center',
  outline: 'none'
};

const statusBox = {
  backgroundColor: '#111',
  padding: '20px',
  borderRadius: '10px',
  borderLeft: '4px solid #00d4ff',
  textAlign: 'left'
};

const selectStyle = {
  width: '100%',
  padding: '12px',
  backgroundColor: '#111',
  color: '#00d4ff',
  border: '1px solid #00d4ff',
  borderRadius: '8px',
  textAlign: 'center'
};

const buttonStyle = (active) => ({
  textDecoration: 'none',
  color: '#000',
  backgroundColor: active ? '#00d4ff' : '#555',
  padding: '12px 30px',
  borderRadius: '50px',
  fontWeight: 'bold',
  cursor: active ? 'pointer' : 'not-allowed'
});

const pricingBox = {
  marginTop: '45px',
  padding: '30px',
  border: '1px dashed #00d4ff',
  borderRadius: '18px',
  backgroundColor: '#0b0b0b'
};

const buyBtn = {
  display: 'inline-block',
  marginTop: '20px',
  padding: '14px 40px',
  borderRadius: '50px',
  backgroundColor: '#00d4ff',
  color: '#000',
  fontWeight: 'bold',
  textDecoration: 'none'
};

const footer = {
  marginTop: '30px',
  fontSize: '0.7rem',
  color: '#555'
};
