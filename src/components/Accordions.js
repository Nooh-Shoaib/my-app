import React from "react";

const Acc = (props) => {
        let faqs = [
                {
                        label:
                                "Can I personalize the boxes in any size, color,and style with custom printed logo/artwork?",
                        text: "Yes, we are adept in producing custom boxes in any size, color, and shape with your own artwork printed. For your acknowledgment, you can review product pages with different options available. In case you are not able to find your desired need you can contact our Packaging Experts serving you 24/7 on live chat support.",
                },
                {
                        label:
                                "Can I customize stickers and woven labels in either way like die-cut shape, color, and stock with custom printed logo/artwork?",
                        text: " Definitely! We are having a dynamic range of custom stickers available, discover the options, and unlock the features as needed. In case you are not able to find your desired need you can contact our Packaging Experts 24/7 on live chat support.",
                },
                {
                        label: "Is there a minimum quantity to order?",
                        text: ` We have set different minimum order quantity for product lines. Below are MOQ’s set according to product lines.<ol>  <li>  Minimum Order Quantity for custom boxes is set to 50.</li> <li> Minimum Order Quantity for custom stickers is set to 100. </li> <li> Minimum Order Quantity for Woven Labels/Patches is set to 50. </li> </ol>`,
                },
                {
                        label: "What is your turnaround time?",
                        text: " We do have three types of turnaround times that you can choose. <ol> <li>Standard Turnaround Time (10-12 Business days to ship after approval on Final Spec Sheet)</li> <li>Expedite Turnaround Time (7-8 Business days to ship after approval on Final Spec Sheet)</li> <li>Rush Turnaround Time (4-6 Business days to ship after approval on Final Spec Sheet) All your orders will be processed with Standard Turnaround Time as FREE Shipping & Handling is a part of it. But if your choice is other than this, there would be additional shipping charges (contact sales) varies on order type. </li>  </ol>",
                },
                {
                        label:
                                "How do I request a quote for the project? How soon do I receive the price quote? ",
                        text: "You can fill in any online form available on the website commonly used product page form, which will not only help you choose the specifications but also providing you the related information. Other online forms are also available like “Get a Free Quote” & “Beat My Quote”. You can directly Email us at <strong className={`text-amber-500`}>support@sireprinting.com</strong>, one of our packaging expert will be in touch with you for further assistance. Once your inquiry is submitted, the price quote will be sent your way no later than 24 hours.",
                },
                {
                        label: " What if I don’t have the Design/Artwork file ready to print?",
                        text: ' No Problem! You can unlock the feature of FREE Graphic Design Support by sending your inquiry or you can directly contact our Packaging Experts Team either through Live Chat or Email at <strong className="text-amber-500">support@sireprinting.com</strong>',
                },
                {
                        label: " How do I place my order?",
                        text: '  Once you agreed with the price and approve the final artwork, you will be sending your billing and shipping address to your packaging expert or email at <strong className="text-amber-500">support@sireprinting.com</strong> in order to setup a secure payment link for your online order processing. All you just need to click the payment link and complete the order online using PayPal or Credit Card.',
                },
                {
                        label: "Do you offer samples?",
                        text: " Generic Physical Sample Kit (to evaluate printing quality and stock) is always FREE with the orders amount of minimum $1000 if your order amount is less than $1000 you can still request a generic physical sample kit which will cost you $35. You can also request a physical sampling of your own boxes (Contact Sales for Pricing).",
                },
                {
                        label: "What do I expect once my order is placed?",
                        text: " You will get order confirmation email from your packaging expert. Next you will be expecting a Final Spe Sheet for your approval along with the final design file and 3D mockup of your box which you need to revie carefully as we would be needing your Approval on that before heading toward its production and shipping. Onc you approve the final spec sheet and artwork files your order will be forward to production.",
                },
                {
                        label: "Do you offer discounts on bulk quantity order?",
                        text: " Yes! The packaging industry has the simple formula “Price goes down as the quantity increases”. SirePrinting being a leading packaging company and offering its services more than a decade therefore wholesalers are welcome significantly. In order to serve this niche, we have specially made a department “Beat My Quote” where wholesalers can expect the better pricing from the market, all they just need to submit the requirements along with the market price quote you received and leave the rest on us and for sure we will beat the price for you.",
                },
        ];

        return (
                <>
                       <h2 className="text-center text-4xl pt-24 font-semibold text-black">
                                {props.heading}
                       </h2>
                        <section className=" py-12 container max-w-[1300px] mx-auto">
                                {faqs.map((v, i) => {
                                        return (
                                                <div key={i} className={`tab   py-0.5`}>
                                                        <input
                                                                type="checkbox"
                                                                name="accordion-1"
                                                                id={`cb${i}`}
                                                                className="hidden"
                                                        />
                                                        <label
                                                                htmlFor={`cb${i}`}
                                                                className={`tab__label  rounded-full  lg:text-lg `}
                                                        >
                                                                {v.label}
                                                        </label>
                                                        <div className={`tab__content`}>
                                                                <div className="accordion__body p-4" id="panel1 ">
                                                                        <div dangerouslySetInnerHTML={{ __html: v.text }} />
                                                                </div>
                                                        </div>
                                                </div>
                                        );
                                })}
                        </section>
                </>
        );
};

export default Acc;

// let email = " support@sireprinting.com"


