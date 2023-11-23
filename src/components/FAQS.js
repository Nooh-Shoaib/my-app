

import React, { useState } from "react";
import PropTypes from "prop-types";

const faqItems = [
  {
    label:
      'Can I personalize the boxes in any size, color, and style with custom printed logo/artwork?',
    content:
      'Yes, we are adept in producing custom boxes in any size, color, and shape with your own artwork printed. For your acknowledgment, you can review product pages with different options available. In case you are not able to find your desired need you can contact our Packaging Experts serving you 24/7 on live chat support.'
  },
  {
    label:
      'Can I customize stickers and woven labels in either way like die-cut shape, color, and stock with custom printed logo/artwork?',
    content:
      'Definitely! We are having a dynamic range of custom stickers available, discover the options, and unlock the features as needed. In case you are not able to find your desired need you can contact our Packaging Experts 24/7 on live chat support.'
  },
  {
    label: 'Is there a minimum quantity to order?',
    content:
      'We have set different minimum order quantity for product lines. Below are MOQ’s set according to product lines. Minimum Order Quantity for custom boxes is set to 50. Minimum Order Quantity for custom stickers is set to 100. Minimum Order Quantity for Woven Labels/Patches is set to 50.'
  },
  {
    label: 'What is your turnaround time?',
    content:
      'We do have three types of turnaround times that you can choose. Standard Turnaround Time (10-12 Business days to ship after approval on Final Spec Sheet). Expedite Turnaround Time (7-8 Business days to ship after approval on Final Spec Sheet). Rush Turnaround Time (4-6 Business days to ship after approval on Final Spec Sheet) All your orders will be processed with Standard Turnaround Time as FREE Shipping & Handling is a part of it. But if your choice is other than this, there would be additional shipping charges (contact sales) varies on order type.'
  },
  {
    label:
      'How do I request a quote for the project? How soon do I receive the price quote?',
    content:
   
    ' <div><p>You can fill in any online form available on the website commonly used product page form, which will not only help you choose the specifications but also providing you the related information. Other online forms are also available like “Get a Free Quote” & “Beat My Quote”.</p> <p>You can also get online assistance through our Live Chat Support, where 24/7 sales representative serving you proactively. You can chat with them and provide your packaging needs for a quick price quote.</p> <p> You can directly Email us at <strong className={`text-amber-500`}><a href="mailto:support@sireprinting.com">support@sireprinting.com.</a></strong>, one of our packaging expert will be in touch with you for further assistance. Once your inquiry is submitted, the price quote will be sent your way no later than 24 hours.</p></div>'
  },
  {
    label: 'What if I don’t have the Design/Artwork file ready to print?',
    content:
      'No Problem! You can unlock the feature of FREE Graphic Design Support by sending your inquiry or you can directly contact our Packaging Experts Team either through Live Chat or Email at<Link to="mailto:support@sireprinting.com">support@sireprinting.com</a>.'
  },
  {
    label: 'How do I place my order?',
    content:
      'Once you agreed with the price and approve the final artwork, you will be sending your billing and shipping address to your packaging expert or email at<Link to="mailto:support@sireprinting.com">support@sireprinting.com</a> in order to setup a secure payment link for your online order processing. All you just need to click the payment link and complete the order online using PayPal or Credit Card.'
  },
  {
    label: 'Do you offer samples?',
    content:
      'Generic Physical Sample Kit (to evaluate printing quality and stock) is always FREE with the orders amount of minimum $1000 if your order amount is less than $1000 you can still request a generic physical sample kit which will cost you $35. You can also request a physical sampling of your own boxes (Contact Sales for Pricing).'
  },
  {
    label: 'What do I expect once my order is placed?',
    content:
      'You will get order confirmation email from your packaging expert. Next you will be expecting a Final Spec Sheet for your approval along with the final design file and 3D mockup of your box which you need to review carefully as we would be needing your Approval on that before heading toward its production and shipping. Once you approve the final spec sheet and artwork files your order will be forwarded to production.'
  },
  {
    label: 'Do you offer discounts on bulk quantity orders?',
    content:
      'Yes! The packaging industry has the simple formula “Price goes down as the quantity increases”. SirePrinting being a leading packaging company and offering its services for more than a decade, therefore, wholesalers are welcome significantly. In order to serve this niche, we have specially made a department “Beat My Quote” where wholesalers can expect better pricing from the market. All they need to do is submit the requirements along with the market price quote they received, and leave the rest to us, and for sure, we will beat the price for you.'
  },
];

export default function FAQS(props) {
  const initialExpandedState = {};
  faqItems.forEach((_item, index) => {
    initialExpandedState[index] = false;
  });

  const [expandedState, setExpandedState] = useState(initialExpandedState);

  const toggleStyle = (itemIndex) => {
    setExpandedState((prevState) => ({
      ...prevState,
      [itemIndex]: !prevState[itemIndex],
    }));

    
    console.log(`FAQ item ${itemIndex} is ${expandedState[itemIndex] ? 'collapsed':'expanded'  }`);
  };

  return (
    <>
     <h2 className="text-center text-4xl pt-24 font-semibold text-black">
        {props.heading}
     </h2>
      <section className="py-12 container max-w-[1300px] mx-auto">
        {faqItems.map((item, index) => (
          <div className="tab py-0.5" key={index}>
            <input
              type="checkbox"
              onClick={() => toggleStyle(index)}
              name={`accordion-${index}`}
              id={`cb${index}`}
              className="hidden"
            />
            <label
              htmlFor={`cb${index}`}
              className={`tab__label  rounded-full lg:text-lg hover:text-amber-500`}
              style={{
                color: expandedState[index] ? "white" : "black",
                backgroundColor: expandedState[index]
                  ? "rgb(245 158 11)"
                  : "white",
              }}
            >
              {item.label}
            </label>
           

            <div className="tab__content">
              <div className="accordion__body p-4 " id={`panel${index}`}>
                <div dangerouslySetInnerHTML={{ __html: item.content }} />
              </div>
              
            </div>
            <hr/>
          </div>
        ))}
      </section>
    </>
  );
}

FAQS.propTypes = {
  heading: PropTypes.string.isRequired,
};


// const toggleStyle = (itemIndex) => {
//   setExpandedState((prevState) => ({
//     ...prevState,
//     [itemIndex]: !prevState[itemIndex],
//   }));
//   console.log(`FAQ item ${itemIndex} is ${expandedState[itemIndex] ? 'collapsed':'expanded'  }`);
//   const newBackgroundColor = expandedState[itemIndex] ? "white" : "rgb(245, 158, 11)";
//   const updatedStyle = document.getElementById(`cb${itemIndex}`).style;
//   updatedStyle.backgroundColor = newBackgroundColor;
// };
