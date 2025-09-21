export const metadata = {
  title: 'UK Healthcare Comparison',
  description: 'Find faster, affordable alternatives to NHS services',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{ backgroundColor: 'white', padding: '1rem', borderBottom: '1px solid #ccc' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ color: '#0284c7', margin: 0 }}>🏥 UK Healthcare</h1>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <a href="/" style={{ color: '#333', textDecoration: 'none' }}>Home</a>
              <a href="/search" style={{ color: '#333', textDecoration: 'none' }}>Search</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}
