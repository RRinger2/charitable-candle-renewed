'use client';

export default function AboutPage() {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About Charitable Candle</h1>
        <p className="text-lg text-gray-600">Lighting the way to a better world</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            At Charitable Candle, we believe in the power of small actions to create big change. 
            Every candle we sell helps fund education and healthcare initiatives in underserved communities.
          </p>
          <p className="text-gray-600">
            Our mission is to create beautiful, sustainable candles while making a positive impact 
            on the world. We're committed to transparency and ensuring that our charitable efforts 
            make a real difference in people's lives.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Impact</h2>
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium text-gray-900">Education Support</h3>
              <p className="text-gray-600">
                We've helped build and maintain schools, provide educational materials, and support 
                teacher training programs in communities that need it most.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-900">Healthcare Initiatives</h3>
              <p className="text-gray-600">
                Our contributions have funded medical supplies, health education programs, and 
                access to basic healthcare services in underserved areas.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 animate-fade-in-up">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
        <div className="prose max-w-none text-gray-600">
          <p className="mb-4">
            Charitable Candle began with a simple idea: create something beautiful that also does good. 
            Our founder, inspired by the warmth and comfort that candles bring to homes, wanted to extend 
            that warmth to communities in need.
          </p>
          <p className="mb-4">
            What started as a small operation has grown into a movement of conscious consumers who 
            believe in the power of ethical shopping. Each candle we create is made with sustainable 
            materials and a commitment to quality.
          </p>
          <p>
            Today, we're proud to have helped thousands of people through our charitable initiatives, 
            and we're just getting started. Join us in our mission to light up the world, one candle at a time.
          </p>
        </div>
      </div>
    </div>
  );
} 