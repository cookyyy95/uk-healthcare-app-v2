'use client'
import { useState, useEffect } from 'react'

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [location, setLocation] = useState('')
  const [providers, setProviders] = useState([])
  const [loading, setLoading] = useState(false)
  const [filters, setFilters] = useState({
    providerType: '',
    maxPrice: '',
    minRating: ''
  })

  // Sample providers data
  const sampleProviders = [
    {
      id: 1,
      practiceName: 'Central London Medical Centre',
      firstName: 'John',
      lastName: 'Smith',
      title: 'Dr',
      providerType: 'GP',
      phone: '020 7123 4567',
      email: 'dr.smith@healthcare.com',
      address: {
        street: '123 Harley Street',
        city: 'London',
        postcode: 'W1G 6BA'
      },
      services: [
        { name: 'GP Consultation', price: 80, duration: 30 },
        { name: 'Blood Test', price: 45, duration: 15 },
        { name: 'Vaccination', price: 65, duration: 20 }
      ],
      rating: { average: 4.8, count: 127 },
      description: 'Experienced GP providing comprehensive healthcare services in central London.',
      languages: ['English', 'French'],
      isVerified: true
    },
    {
      id: 2,
      practiceName: 'London Physiotherapy Clinic',
      firstName: 'Sarah',
      lastName: 'Jones',
      title: 'Ms',
      providerType: 'Private',
      phone: '020 7234 5678',
      email: 'physio.jones@healthcare.com',
      address: {
        street: '456 Oxford Street',
        city: 'London',
        postcode: 'W1C 1JN'
      },
      services: [
        { name: 'Physiotherapy Assessment', price: 90, duration: 45 },
        { name: 'Sports Massage', price: 70, duration: 60 },
        { name: 'Online Consultation', price: 50, duration: 30 }
      ],
      rating: { average: 4.6, count: 89 },
      description: 'Specialized physiotherapy services for sports injuries and rehabilitation.',
      languages: ['English', 'Spanish'],
      isVerified: true
    },
    {
      id: 3,
      practiceName: 'Mental Health & Wellness Centre',
      firstName: 'David',
      lastName: 'Brown',
      title: 'Dr',
      providerType: 'Specialist',
      phone: '020 7345 6789',
      email: 'mentalhealth@wellness.com',
      address: {
        street: '789 Regent Street',
        city: 'London',
        postcode: 'W1B 4NF'
      },
      services: [
        { name: 'Mental Health Consultation', price: 120, duration: 60 },
        { name: 'Therapy Session', price: 100, duration: 50 },
        { name: 'Crisis Support', price: 150, duration: 30 }
      ],
      rating: { average: 4.9, count: 156 },
      description: 'Comprehensive mental health services with experienced professionals.',
      languages: ['English', 'German'],
      isVerified: true
    }
  ]

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    
    // Simulate search delay
    setTimeout(() => {
      let filteredProviders = [...sampleProviders]
      
      // Filter by search query
      if (searchQuery) {
        filteredProviders = filteredProviders.filter(provider => 
          provider.practiceName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          provider.firstName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          provider.lastName.toLowerCase().includes(searchQuery.toLowerCase()) ||
          provider.services.some(s => s.name.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      }
      
      // Filter by location
      if (location) {
        filteredProviders = filteredProviders.filter(provider => 
          provider.address.city.toLowerCase().includes(location.toLowerCase()) ||
          provider.address.postcode.toLowerCase().includes(location.toLowerCase())
        )
      }
      
      // Filter by provider type
      if (filters.providerType) {
        filteredProviders = filteredProviders.filter(provider => 
          provider.providerType === filters.providerType
        )
      }
      
      // Filter by max price
      if (filters.maxPrice) {
        filteredProviders = filteredProviders.filter(provider => 
          provider.services.some(s => s.price <= parseInt(filters.maxPrice))
        )
      }
      
      // Filter by min rating
      if (filters.minRating) {
        filteredProviders = filteredProviders.filter(provider => 
          provider.rating.average >= parseFloat(filters.minRating)
        )
      }
      
      setProviders(filteredProviders)
      setLoading(false)
    }, 1000)
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(price)
  }

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} style={{ color: i < Math.floor(rating) ? '#fbbf24' : '#d1d5db' }}>
        ★
      </span>
    ))
  }

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f9fafb' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {/* Search Header */}
        <div style={{ backgroundColor: 'white', borderRadius: '0.5rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', padding: '2rem', marginBottom: '2rem' }}>
          <form onSubmit={handleSearch}>
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.5rem' }}>
              <input
                type="text"
                placeholder="Search for services or providers"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
              <input
                type="text"
                placeholder="Enter your location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                style={{
                  flex: 1,
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
              <button
                type="submit"
                style={{
                  padding: '0.75rem 2rem',
                  backgroundColor: '#0284c7',
                  color: 'white',
                  fontWeight: '600',
                  borderRadius: '0.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '1rem'
                }}
              >
                {loading ? 'Searching...' : 'Search'}
              </button>
            </div>

            {/* Filters */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
              <select
                value={filters.providerType}
                onChange={(e) => setFilters(prev => ({ ...prev, providerType: e.target.value }))}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              >
                <option value="">All Provider Types</option>
                <option value="GP">GP</option>
                <option value="Private">Private</option>
                <option value="Specialist">Specialist</option>
              </select>
              
              <input
                type="number"
                placeholder="Max Price (£)"
                value={filters.maxPrice}
                onChange={(e) => setFilters(prev => ({ ...prev, maxPrice: e.target.value }))}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              />
              
              <select
                value={filters.minRating}
                onChange={(e) => setFilters(prev => ({ ...prev, minRating: e.target.value }))}
                style={{
                  padding: '0.75rem',
                  border: '1px solid #d1d5db',
                  borderRadius: '0.5rem',
                  fontSize: '1rem'
                }}
              >
                <option value="">Any Rating</option>
                <option value="4">4+ Stars</option>
                <option value="3">3+ Stars</option>
                <option value="2">2+ Stars</option>
              </select>
            </div>
          </form>
        </div>

        {/* Results */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
          {/* Provider List */}
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem', color: '#1f2937' }}>
              {loading ? 'Searching...' : `${providers.length} providers found`}
            </h2>

            {providers.length === 0 && !loading ? (
              <div style={{ textAlign: 'center', padding: '3rem', color: '#6b7280' }}>
                <p style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>No providers found</p>
                <p>Try adjusting your search criteria</p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {providers.map((provider) => (
                  <div key={provider.id} style={{
                    backgroundColor: 'white',
                    borderRadius: '0.5rem',
                    boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #e5e7eb',
                    padding: '1.5rem'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                      <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.25rem', color: '#1f2937' }}>
                          {provider.practiceName}
                        </h3>
                        <p style={{ color: '#6b7280', marginBottom: '0.25rem' }}>
                          {provider.title} {provider.firstName} {provider.lastName}
                        </p>
                        <p style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          {provider.providerType} • {provider.address.city}, {provider.address.postcode}
                        </p>
                      </div>
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.25rem' }}>
                          {renderStars(provider.rating.average)}
                          <span style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                            ({provider.rating.count})
                          </span>
                        </div>
                        {provider.isVerified && (
                          <span style={{ fontSize: '0.75rem', color: '#059669', fontWeight: '500' }}>
                            ✓ Verified
                          </span>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1rem' }}>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Services</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                          {provider.services.slice(0, 3).map((service, index) => (
                            <div key={index} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem' }}>
                              <span style={{ color: '#6b7280' }}>{service.name}</span>
                              <span style={{ fontWeight: '500' }}>{formatPrice(service.price)}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#374151' }}>Contact</h4>
                        <div style={{ fontSize: '0.875rem', color: '#6b7280' }}>
                          <div>📞 {provider.phone}</div>
                          <div>✉️ {provider.email}</div>
                        </div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                      <button
                        onClick={() => alert(`Viewing details for ${provider.practiceName}`)}
                        style={{
                          flex: 1,
                          padding: '0.5rem 1rem',
                          backgroundColor: '#0284c7',
                          color: 'white',
                          fontWeight: '500',
                          borderRadius: '0.375rem',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        View Details
                      </button>
                      <button
                        onClick={() => alert(`Booking appointment with ${provider.practiceName}`)}
                        style={{
                          padding: '0.5rem 1rem',
                          backgroundColor: '#059669',
                          color: 'white',
                          fontWeight: '500',
                          borderRadius: '0.375rem',
                          border: 'none',
                          cursor: 'pointer'
                        }}
                      >
                        Book Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div>
            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              padding: '1.5rem',
              marginBottom: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                Search Tips
              </h3>
              <ul style={{ fontSize: '0.875rem', color: '#6b7280', lineHeight: '1.6' }}>
                <li>• Use specific service names for better results</li>
                <li>• Include your postcode for location-based searches</li>
                <li>• Check provider ratings and reviews</li>
                <li>• Compare prices before booking</li>
                <li>• Verify provider credentials</li>
              </ul>
            </div>

            <div style={{
              backgroundColor: 'white',
              borderRadius: '0.5rem',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
              border: '1px solid #e5e7eb',
              padding: '1.5rem'
            }}>
              <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>
                Popular Searches
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {[
                  'GP Consultation',
                  'Physiotherapy',
                  'Mental Health Support',
                  'Dermatology',
                  'Dental Check-up'
                ].map((search) => (
                  <button
                    key={search}
                    onClick={() => {
                      setSearchQuery(search)
                      handleSearch({ preventDefault: () => {} })
                    }}
                    style={{
                      textAlign: 'left',
                      fontSize: '0.875rem',
                      color: '#0284c7',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: '0.25rem 0'
                    }}
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
