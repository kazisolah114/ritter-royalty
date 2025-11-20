import { ContactHeroSection, DirectContactCard, OfficeShowcaseSection, OurPartnersSection, ResponseTimeSection } from '@/components/contact';
import React from 'react';

const ContactPage = () => {
    return (
        <main>
            <ContactHeroSection />
            <DirectContactCard />
            <ResponseTimeSection />
            <OfficeShowcaseSection />
            <OurPartnersSection />
        </main>
    );
};

export default ContactPage;