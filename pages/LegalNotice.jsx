import React from 'react';

const LegalNotice = () => {
  return (
    <div className=" bg-[#fbfbfb] min-h-screen font-sans ">
      <div className="container max-w-[1600px] px-6 mx-auto bg-white  shadow-2xl border-t-[10rem]  border-[#8B0000]">
        <div className="mb-16">
          <h1 className="text-5xl font-serif italic text-[#8B0000] mb-4">Legal Notice</h1>
          <div className="h-1 w-20 bg-[#8B0000]"></div>
          <p className="mt-6 text-gray-400 uppercase tracking-[0.3em] text-[10px] font-bold">
            Ideal Construction legal information
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <section className="mb-10">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
              1. Website Publisher
            </h2>
            <div className="text-gray-600 leading-relaxed text-sm space-y-2">
              <p>This website is published by:</p>
              <p className="text-black font-bold text-lg">IDEAL CONSTRUCTION</p>
              <p>Legal form: SASU</p>
              <p>Share capital: €1,500</p>
              <p>SIREN: 929 160 125</p>
              <p>SIRET: 929 160 125 00019</p>
              <p>RCS: Thonon-les-Bains</p>
              <p>Registered office: 14 Ter avenue du Chatelard, 74200 Thonon-les-Bains, France</p>
              <p>VAT: FR20 929160125</p>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
              2. Contact
            </h2>
            <div className="text-gray-600 leading-relaxed text-sm">
              <p>Ideal Construction</p>
              <p>14 Ter avenue du Chatelard</p>
              <p>74200 Thonon-les-Bains, France</p>
              <p>contact@ideal-construction74.fr</p>
              <p>+33 6 66 73 25 06</p>
            </div>
          </section>

          <section className="mb-10 col-span-1 md:col-span-2 bg-gray-50 p-6 border-l-4 border-gray-200">
            <h2 className="text-sm font-bold mb-4 uppercase tracking-widest text-[#8B0000]">
              3. Website Content
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm italic">
              The information on this website presents Ideal Construction services. Project visuals may include illustration photos when no confirmed project information is available.
            </p>
          </section>

          <section className="mb-10 col-span-1 md:col-span-2">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
              4. Cookies and Personal Data
            </h2>
            <div className="text-gray-600 leading-relaxed text-sm space-y-4">
              <p>
                This website may use cookies required for proper operation and, where applicable, audience measurement. Personal data submitted through forms is used to respond to requests.
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Access:</strong> You may request access, correction or deletion of your personal data.</li>
                <li><strong>Consent:</strong> Non-essential cookies are subject to user consent where required.</li>
                <li><strong>Contact:</strong> To exercise your rights, write to contact@ideal-construction74.fr.</li>
              </ul>
            </div>
          </section>

          <section className="mb-10">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
              5. Disputes
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              Any dispute relating to this website or the services presented is handled according to applicable French law.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-sm font-bold mb-6 uppercase tracking-widest text-[#8B0000] border-b border-gray-100 pb-2">
              6. Intellectual Property
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">
              The logo, texts and images on this website belong to Ideal Construction or their respective rights holders. Reproduction without permission is prohibited.
            </p>
          </section>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-100 text-center">
          <button
            onClick={() => window.print()}
            className="text-[10px] uppercase tracking-widest text-gray-400 hover:text-[#8B0000] transition-colors"
          >
            Print legal notice
          </button>
        </div>
      </div>
    </div>
  );
};

export default LegalNotice;
