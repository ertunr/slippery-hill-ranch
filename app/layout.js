export const metadata = {
  title: "Slippery Hill Ranch",
  description: "Off-grid stays and adventure escapes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: "Arial, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
