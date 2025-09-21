export default function HomePage() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      {/* Hero Section */}
      <section style={{ 
        background: 'linear-gradient(to right, #0284c7, #0369a1)', 
        color: 'white',
        padding: '4rem 0',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Find Faster Healthcare
          </h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Compare private and online alternatives to NHS services
          </p>
          
          {/* Search Form */}
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ display: 'flex', gap: '1rem', flexDirection: 'column' }}>
              <input
                type="text"
                placeholder="Search for services (e.g., GP consultation, physiotherapy)"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="Enter your location"
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  border: 'none',
                  fontSize: '1rem'
                }}
              />
              <button
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: 'white',
                  color: '#0284c7',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '4rem 0', backgroundColor: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Why Choose Our Platform?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Get the healthcare you need, when you need it
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e0f2fe', 
                width: '4rem', 
                height: '4rem', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                ⏰
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Faster Access</h3>
              <p style={{ color: '#6b7280' }}>
                Skip NHS waiting lists and find same-day or next-day appointments
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e0f2fe', 
                width: '4rem', 
                height: '4rem', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                ⭐
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Verified Providers</h3>
              <p style={{ color: '#6b7280' }}>
                All providers are verified professionals with real patient reviews
              </p>
            </div>

            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                backgroundColor: '#e0f2fe', 
                width: '4rem', 
                height: '4rem', 
                borderRadius: '50%', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center', 
                margin: '0 auto 1rem',
                fontSize: '2rem'
              }}>
                🔒
              </div>
              <h3 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '0.5rem' }}>Secure & Private</h3>
              <p style={{ color: '#6b7280' }}>
                Your medical data is protected with GDPR compliance
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section style={{ padding: '4rem 0', backgroundColor: '#f9fafb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#1f2937', marginBottom: '1rem' }}>
              Popular Services
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280' }}>
              Most searched healthcare services
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
            {[
              'GP Consultation',
              'Physiotherapy',
              'Mental Health',
              'Dermatology',
              'Dental Care',
              'Optometry',
              'Cardiology',
              'Pediatrics'
            ].map((service) => (
              <div key={service} style={{
                backgroundColor: 'white',
                borderRadius: '0.5rem',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                border: '1px solid #e5e7eb',
                padding: '1.5rem',
                textAlign: 'left',
                cursor: 'pointer'
              }}>
                <h3 style={{ fontWeight: '600', color: '#1f2937', marginBottom: '0.5rem' }}>{service}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                  Find qualified {service.toLowerCase()} providers
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '4rem 0', backgroundColor: '#0284c7', color: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Ready to Find Your Healthcare Provider?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
            Join thousands of patients who found faster, affordable care
          </p>
          <button
            style={{
              padding: '0.75rem 2rem',
              backgroundColor: 'white',
              color: '#0284c7',
              fontWeight: '600',
              borderRadius: '0.5rem',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem'
            }}
          >
            Start Searching Now
          </button>
        </div>
      </section>
    </div>
  )
}
