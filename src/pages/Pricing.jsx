import React from 'react';

import Header from '../partials/Header';
import PageIllustration from '../partials/PageIllustration';
import PricingTables from '../partials/PricingTables';
import Faqs from '../partials/Faqs';
import Testimonials from '../partials/Testimonials';
import Cta from '../partials/Cta';
import Footer from '../partials/Footer';

function Pricing() {
  return (
    <div style={{backgroundColor:'white', color:'black'}}className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="grow">

        {/*  Page illustration */}
        <div className="relative max-w-6xl mx-auto h-0 pointer-events-none" aria-hidden="true">
          <PageIllustration />
        </div>

        {/*  Page sections */}
    
        <Testimonials />
       

      </main>

      {/*  Site footer */}
      

    </div>
  );
}

export default Pricing;