import React from 'react';
import Link from 'next/link';

export default function DonatePage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16 text-center">
      <h1 className="text-4xl font-bold mb-6 text-gray-900">Support STEM Equity</h1>
      <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
        Your contribution helps LeadWise Foundation provide mentorship, advocacy, and resources to underrepresented talent in STEM. Together, we can fix the broken rung.
      </p>
      
      <div className="bg-blue-50 p-8 rounded-xl border border-blue-100 inline-block">
        <p className="text-xl font-semibold mb-4 text-blue-900">Donation Portal Coming Soon</p>
        <p className="text-gray-600 mb-6">We are currently setting up our secure payment gateway.</p>
        <Link 
          href="/contact" 
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us to Pledge
        </Link>
      </div>
    </div>
  );
}