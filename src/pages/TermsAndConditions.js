import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Layout from '../components/layout';

const TermsAndConditions = () => {
        const contentSections = [
                {
                        title: 'COMMENT TO PRIVACY',
                        content:
                                'When you avail any of the solutions we offer, you will have to comply with the abiding by terms and conditions. ...',
                },
                {
                        title: 'COPYRIGHT NOTICE',
                        content:
                                'By visiting and using our website, you fully understand and agree upon that Sireprinting.com wholly owns ...',
                },
                // Add more sections as needed
        ];

        const paymentSections = [
                {
                        title: 'PAYMENTS, ORDER PLACEMENTS, AND CANCELLATIONS',
                        content:
                                'We bill for our items in USD (U.S. Dollar) on our website. Payment will be obtained similarly. ...',
                },
                // Add more payment sections as needed
        ];

        const returnPolicySections = [
                {
                        title: 'RETURN & REFUND POLICY',
                        content:
                                'In case you discover any problems in the printing of your order or the item is not published according to your demands...',
                },
                // Add more return policy sections as needed
        ];

        // You can continue adding more arrays for other sections

        const contactInfo = {
                title: 'HOW TO GET IN TOUCH WITH SIREPRINTING.COM?',
                description: 'If there are any questions regarding this privacy plan, you might call us to use the details below.',
                phoneNumber: '(410) 834-9965',
                emailAddress: 'support@sireprinting.com',
        };

        return (
                <>
                        <Helmet>
                                <title>TermsAndConditions | sireprinting</title>
                        </Helmet>

                        <Layout>
                                {/* Your banner, header, and other common elements go here */}
                                {/* ... */}

                                <div className="lg:container mx-6 lg:mx-56 lg:w-[1320px] py-12">
                                        <h2 className="text-4xl font-bold my-12">Terms & Conditions</h2>

                                        {/* Map through contentSections array */}
                                        {contentSections.map((section, index) => (
                                                <div key={index}>
                                                        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-2 ">{section.title}</h2>
                                                        <p>{section.content}</p>
                                                </div>
                                        ))}

                                        {/* Map through paymentSections array */}
                                        {paymentSections.map((section, index) => (
                                                <div key={index}>
                                                        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-2 ">{section.title}</h2>
                                                        <p>{section.content}</p>
                                                </div>
                                        ))}

                                        {/* Map through returnPolicySections array */}
                                        {returnPolicySections.map((section, index) => (
                                                <div key={index}>
                                                        <h2 className="text-2xl font-semibold text-slate-900 mt-8 mb-2 ">{section.title}</h2>
                                                        <p>{section.content}</p>
                                                </div>
                                        ))}

                                        {/* Map through other sections as needed */}

                                        {/* Contact Information */}
                                        <h2 className="text-2xl mt-8 mb-2 font-semibold text-slate-900">{contactInfo.title}</h2>
                                        <p>{contactInfo.description}</p>
                                        <div className="my-5">
                                                <div className="font-bold">
                                                        <Link to={`tel:${contactInfo.phoneNumber}`}>Phone: {contactInfo.phoneNumber}</Link>
                                                </div>
                                                <div className="font-bold">
                                                        <Link to={`mailto:${contactInfo.emailAddress}`}>Email: {contactInfo.emailAddress}</Link>
                                                </div>
                                        </div>
                                </div>
                        </Layout>
                </>
        );
};

export default TermsAndConditions;
