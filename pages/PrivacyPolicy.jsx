import React from 'react';
import { ShieldCheck, Eye, Database, Lock, Mail } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className=" bg-[#fbfbfb] min-h-screen font-sans">
      <div className="container max-w-[1600px] px-6 mx-auto bg-white  shadow-2xl border-t-[10rem]  border-[#8B0000]">
        <div className="mb-16 pt-12">
          <h1 className="text-5xl font-serif italic text-[#8B0000] mb-4">Privacy Policy</h1>
          <div className="h-1 w-20 bg-[#8B0000]"></div>
          <p className="mt-6 pt-6 text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold">
            Personal data protection
          </p>
        </div>

        <div className="prose prose-red max-w-none">
          <p className="text-gray-600 mb-12 italic border-l-4 border-gray-100 pl-6">
            Ideal Construction uses personal data only to respond to requests, manage project communication and improve the website experience.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Database className="text-[#8B0000]" size={20} />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2 w-full">
                  1. Data Collected
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                We may collect information submitted through contact forms, including name, email address, phone number and project details.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Eye className="text-[#8B0000]" size={20} />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2 w-full">
                  2. Use of Data
                </h2>
              </div>
              <ul className="text-gray-600 leading-relaxed text-sm space-y-2 list-none">
                <li className="flex items-start gap-2">• Responding to quote requests</li>
                <li className="flex items-start gap-2">• Managing project communication</li>
                <li className="flex items-start gap-2">• Preparing follow-up information</li>
                <li className="flex items-start gap-2">• Improving website usability</li>
              </ul>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="text-[#8B0000]" size={20} />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2 w-full">
                  3. Retention
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">
                Data is kept only for as long as necessary to process requests, maintain client communication and meet applicable legal obligations.
              </p>
            </section>

            <section className="mb-10">
              <div className="flex items-center gap-3 mb-6">
                <ShieldCheck className="text-[#8B0000]" size={20} />
                <h2 className="text-sm font-bold uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2 w-full">
                  4. Your Rights
                </h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm mb-4">
                You may request access, correction or deletion of your personal data by contacting Ideal Construction.
              </p>
              <div className="bg-gray-50 p-4 border border-gray-100 flex items-center gap-4">
                <Mail className="text-[#8B0000]" size={16} />
                <span className="text-xs font-bold uppercase tracking-widest">contact@ideal-construction74.fr</span>
              </div>
            </section>

            <section className="mb-10 col-span-1 md:col-span-2">
              <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
                5. Cookie Policy
              </h2>
              <div className="bg-gray-50 p-6">
                <p className="text-gray-600 leading-relaxed text-sm mb-4">
                  Ideal Construction may use cookies to support website operation and understand general site usage.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 border border-gray-100 rounded">
                    <p className="text-[10px] font-bold uppercase text-[#8B0000] mb-2">Consent</p>
                    <p className="text-[11px] text-gray-500">Requested where non-essential cookies are used.</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-100 rounded">
                    <p className="text-[10px] font-bold uppercase text-[#8B0000] mb-2">Duration</p>
                    <p className="text-[11px] text-gray-500">Limited to the period needed for their purpose.</p>
                  </div>
                  <div className="bg-white p-4 border border-gray-100 rounded">
                    <p className="text-[10px] font-bold uppercase text-[#8B0000] mb-2">Control</p>
                    <p className="text-[11px] text-gray-500">Cookie settings can be managed in your browser.</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-[9px] uppercase tracking-[0.3em] text-gray-400">
          <p>© 2026 Ideal Construction. All rights reserved.</p>
          <button onClick={() => window.scrollTo(0,0)} className="hover:text-[#8B0000] mt-4 md:mt-0">Back to top</button>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
