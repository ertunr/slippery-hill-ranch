export default function Home() {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "auto", fontFamily: "Arial" }}>
      <h1>Slippery Hill Ranch</h1>
      <p>Off-Grid Escape • Adventure Stays • Nature Living</p>

      <h2>About</h2>
      <p>
        Welcome to Slippery Hill Ranch. We offer private off-grid land for
        peaceful retreats, camping, and adventure stays.
      </p>

      <h2>What We Offer</h2>
      <ul>
        <li>Tiny cabins and glamping stays</li>
        <li>Off-grid solar-powered experience</li>
        <li>Private nature access</li>
      </ul>

      <h2>Stay With Us</h2>
      <p>Booking coming soon</p>

      <h2>Join Our List</h2>
      <input placeholder="Enter your email" />
      <button style={{ marginLeft: 10 }}>Sign up</button>

      <footer style={{ marginTop: 40 }}>
        © 2026 Slippery Hill Ranch
      </footer>
    </div>
  );
}
