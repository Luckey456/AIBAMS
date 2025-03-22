import React from 'react';

const About = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About AIBAMS</h1>
          <p className="text-xl text-gray-600">Leading the future of asset management with AI</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-600 mb-6">
              At AIBAMS, we're on a mission to revolutionize how businesses manage their assets. 
              By combining cutting-edge AI technology with intuitive design, we're making asset 
              management more efficient, intelligent, and accessible than ever before.
            </p>
          </div>
          <div className="bg-gray-200 h-64 rounded-lg">
            {/* Placeholder for team/office image */}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="p-6 rounded-lg border border-gray-200">
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const values = [
  {
    title: "Innovation",
    description: "We constantly push the boundaries of what's possible with AI and asset management."
  },
  {
    title: "Reliability",
    description: "Our platform is built on robust technology you can count on, 24/7."
  },
  {
    title: "Customer Focus",
    description: "Your success is our success. We're committed to providing exceptional support."
  }
];

export default About; 