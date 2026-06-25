import React from "react";

const CookiesPolicy = () => (
  <main className="bg-white text-slate-900 antialiased min-h-screen">
    <section className="container mx-auto px-6 py-24">
      <div className="max-w-4xl">
        <h1 className="text-4xl font-bold text-slate-950 mb-6">Cookie Policy</h1>
        <p className="mb-6 text-lg leading-8 text-slate-700">
          Ideal Construction may use cookies to support website functionality, remember preferences and understand general website usage.
        </p>
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">What is a cookie?</h2>
            <p className="text-slate-700 leading-7">
              A cookie is a small file stored on your device by a website. It can help remember preferences and support website features.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">Why do we use cookies?</h2>
            <ul className="list-disc space-y-2 pl-6 text-slate-700 leading-7">
              <li>To support proper website operation.</li>
              <li>To remember navigation preferences.</li>
              <li>To understand site usage and improve the service.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">Your choices</h2>
            <p className="text-slate-700 leading-7">
              You can accept or refuse cookies through the cookie banner where available, or manage them through your browser settings.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-slate-950 mb-3">Data management</h2>
            <p className="text-slate-700 leading-7">
              Ideal Construction handles cookies in line with applicable rules and the choices expressed by users.
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
);

export default CookiesPolicy;
