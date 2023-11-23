import React from 'react'
import Layout from "../layout";
import { TabTitle } from "./utils/GeneralFunction";
import { Link } from "react-router-dom";

const pageTitle = "Terms & Conditions"
const homeLink = "/"
const phoneNumber = "(410) 834-9965";
const emailAddress = "support@sireprinting.com";
const banner = "https://s3.amazonaws.com/sireprinting.com/images/terms_conditions-min_yqkb7x.webp";
const linkLabel = "Home";
const Label = "Terms And Conditions  ";


const TermsAndConditions = () => {
  const siteTitle = 'Terms And Conditions | Sire Printing';

  TabTitle(siteTitle)
  return (

    <Layout>
      <img src={banner} className="w-full" />
     <h2 className="bg-slate-200 h-14 flex items-center"><Link to={homeLink} className="mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
      <div className='bg-white '>
        <div className='lg:container mx-6 lg:mx-56 lg:w-[1320px] py-12'>
         <h2 className='text-4xl font-bold my-12'>{pageTitle}</h2>
         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>COMMENT TO PRIVACY</h2>
          <p>When you avail any of the solutions we offer, you will have to comply with the abiding by terms and conditions. You are requested to read the following detailed version of our terms & conditions to save you and us from any inconvenience. It shall also be noted that Sireprinting.com preserves the right to change these terms and conditions without any prior notification. However, we fully encourage you to see this web page whenever you make a kind visit to Sireprinting.com. Sireprinting.com is the proprietor of all the products and items used for the manufacturing and production of our products. Likewise, our authority to disperse free specimens about the custom made boxes to showcase our proficiency and expertise.</p>


         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>COPYRIGHT NOTICE</h2>
          <p>By visiting and using our website, you fully understand and agree upon that Sireprinting.com wholly owns our website's features and substances. Comprising of but not limited to content material, all sorts of information, software application, photos, slides, presentations, portrayals, maps, icons, symbols, versions, farms, videos, and all other such materials that fall under our internet site contents are the sole property of Sireprinting.com, which also includes any media uploaded by the outsider providers. We do not allow duplication, copying, imitation, modifying, stockpiling, republishing, reproducing, transmitting, or retelecast of any general flow of our website materials unless done by our prior permission in the written form.</p>

         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>INDIVIDUAL USER CONDUCT FOR SIREPRINTING.COM</h2>
          <p>As a user of Sireprinting.com alone, you will be held accountable for the subject matter and substance that you post, send out, upload in any form, or naturally circulate to or with our website. You agree and permit that any material that you send out, transfer, present, or usually send on or through our site or is used in connection or combination with our web site contents will undoubtedly leave out and not include any web content, image, style, trademark, service mark or any copyrighted material of other events unless you have acquired the correct approvals from those individual owners for such use. You concur and also call for that you may not send a transfer, blog post or typically share or transfer to or using our site any material that is obscene, illegal, or restrict various clients from using our site or violate the intellectual property legal rights or various other unique benefits of Sireprinting.com or any third party. We have no command over the product or related material of any type shared by the clients of Sireprinting.com, and consequently, we do not verify the legitimacy, justness, or high ethical quality of the material. Sireprinting.com will not supervise any internet content which you locate profane, illegal, or oppressive. Sireprinting.com reserves the right to expel any product that is inappropriate, harmful, or against the law. Yet, it's not their commitment to eliminate such work which overlooks terms and conditions or which are considered as unacceptable. the company has all the right to update the sites web content as required. To appreciate our product and services, it is your crucial responsibility to offer the site the ideal details. Our website is planned for the use of individuals and also no other mechanized methods. Any abuse of our site, which overlooks the terms and conditions of Sireprinting.com, will undoubtedly be deemed illegal and legal action will indeed be required to prosecute the deceptive individuals. Using our site, you assert that you have all the necessary permission, right, and control to send the orders and accept Sireprinting.com to produce the products for your advantage. Using our websites and submitting your orders on our site, you consent and warrant that you are of sufficient authorized age to make limiting approved commitments during your time duration of using our website.</p>

         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>PAYMENTS, ORDER PLACEMENTS, AND CANCELLATIONS</h2>
          <p>We bill for our items in USD (U.S. Dollar) on our website. Payment will be obtained similarly. The organization begins dealing with your sent orders as soon as they have received the overall amount of cash you owe them, including taxes, delivery charges, etc. with some genuine repayment resources. To place your orders, you need to send us the final statement of the ordered services or product through phone call or email. Once you finalize your orders with us, it is sent to the printing division for printing functions. But, when the demands get involved in the printing stage, no changes will certainly be made when it comes to anything. Nevertheless, there is a 4-hour window for you to terminate your order after proof authorization. The cancellation fees are 25 $, and 5 % will certainly be subtracted from your order's full settlement. The longer you take to terminate, the more will certainly be the cost. It will cost you 50 % of your total payment if you purchase cancellation after 24 hrs. This expense will certainly cover the lost time and resources utilized of the business in making your order. Nonetheless, termination after 24 hours is not permitted.</p>

         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>RETURN & REFUND POLICY</h2>
          <p>In case you discover any problems in the printing of your order or the item is not published according to your demands, you have to notify the company within three working days, succeeding in getting your order. If there must be an incident of mistaken printing or unsolicited printing, we duplicate your initial order but do not use refunds. The management group does quality control check and monitoring. The customers are required to send the malfunctioning item's pictures to the organization using their cash within seven organization days to get the reprinted articles. Additionally, increased orders have costs that have no reimbursements. Design Orders: We do not use any compensation or credit scores for any orders of style services. Any layout order once positioned will certainly be last. Sales tax policy: We bill sales tax on all orders that involve us from the state of texas in the U.S. if you are tax excluded, please provide your tax exemption certification while positioning your order with us</p>

         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>ARTWORK AND FILES SUBMITTED BY CUSTOMERS</h2>
          <p>Our team of professionals produces a hard or electronic duplicate from all the artwork and files submitted by the site individuals as evidence. We require you to submit your artwork and documents in CMYK format with at the very least three hundred dots per inch resolution in the last dimension. If you do not fulfill this need, we will not be liable for printing as altered, obscure, pixilated, and adjustments in shades show up, transforming your files to CMYK layout. You alone are solely accountable for the precision and accuracy of your artwork and data. The alignment and also positioning of the pages of your sent documents are additionally your duty. In no other way we are liable for any harm, loss, or damage to your artwork/files entries. But, we will certainly take all the preventative measures we can to avoid loss of your artwork and files. You acknowledge that you are the owner of all the substances you post on our website, or you have taken the needed steps to acquire the legal use of any material posted to our site. We also protect the right to turn down any order that we consider to be immoral or a violation of a 3rd party's rights. You warrant total lawful responsibility for all the products that will certainly be published and refined in your place and your standards. We can decline any order without previous notice or stating factors. Please see that you do not post any harmful, obscene, offending, or profane material for printing custom boxes.</p>

         <h2 className='text-2xl font-semibold text-slate-900 mt-8 mb-2 '>PROOF AND COLOR PRECISION</h2>
          <p>We request you to thoroughly and also completely review your proof before approval. You will need to inspect it with the initial application for possible errors in duplication, spacing, structure, punctuation, bleeds, dimension, plants, and the final content. Make certain that your electronic proof does not show any problems in openness, overprinting, or changes in color from converting documents to CMYK. The appearance of the published colors may get impacted by the lamination or U.V. finish. In no other way we will be responsible for the laminated item's last color appearance. Any solutions or printing items you get will require you to authorize proof using electronic data or a hard copy. Unless you give this authorization of evidence, your order will not be sent to the printing press. So, it is your obligation to login in with your signed up account and examine the proof we require. We will certainly not be held accountable for any delays because of the non-approval of the evidence by our consumers or customers. the turnaround time that we have pointed out on our website will only begin after you have submitted the authorization of proof</p>

         <h2 className='text-2xl mt-8 mb-2 font-semibold text-slate-900'>CUSTOMERS ARE RESPONSIBLE FOR ALL CONSTITUENTS OF FINAL PROOF</h2>
          <p>The color to be printed is generated from the submitted artwork data. Still, it can not be precisely like that shade due to the built-in restrictions of the printing processes and adjoining image ink needs, the shade accuracy cannot be assured. When you put an order, you accept this disadvantage of the system. The staff members are recommended to try their finest to offer the closest color; however, the business is not liable for shade and color changes in-between anticipated and printed jobs. There will certainly be no reprinting done for such shade modifications that exist because of the system constraints. We are exempt from the matching color, ink, density on the published items which you approved. Nonetheless, the business guarantees the color precision and matching if you purchase a difficult proof from the company. It is to be notified that hard copy proof will certainly cost you much more otherwise. We typically provide a specific number of items orders and a small surplus without charging our customers for added money. When it comes to an under-run- your bill will certainly surmount to the amount you got. The most accepted trade method is supplying 5 % of the ordered amount, also or reduction, which is what we follow.</p>

         <h2 className='text-2xl mt-8 mb-2 font-semibold text-slate-900'>RATE OF PRODUCTION, DELIVERY ORDER AND SHIPMENT</h2>
          <p>After you have sent your artwork or documents, reviewed it, is approved by our prepress department, supported the press-ready evidence (online or in paper copy), and paid all the charges is when our turnaround time for printing as manufacturing rate starts. Throughout your order placement, we allow you to select the production rate, which tells the number of service days required to print your order and hand it over to the delivery firm for delivery. We should get your approval of proof before 10 am central standard time. Sireprinting.com has three manufacturing centers, TX, NJ, and also one in the Asian region. The production group determines the destination according to the nature of the job, price factors, and the fastest turnarounds. Nevertheless, the high quality of items, as well as the turnaround time, continues to be the same no matter the production place. If any details are demanding to have your boxes published within our centers, you must educate us before offering the last authorization. As soon as your order is processed for manufacturing, we will not be responsible for any insurance claims to change production place. Obtaining the orders printed as well as provided in time is our primary concern. Nevertheless, Sireprinting.com will not be responsible for any injury of consequence encountered due to a delay in delivery or shipment. You agree not to hold Sireprinting.com answerable for the hold-ups that might take IN load due to poor conditions beyond our control. In the event of hold-ups due to the shipping business, bad weather, customs problems to failure of tools throughout the printing process, or technical concerns, expedited charges will be given back. Note that the orders will not be terminated because of hold-ups in the printing process. You acknowledge paying all the fees and expenses on products that are shipped to their particular whereabouts. It is the client's responsibility to make the required plans for customized clearance for the eries that are not delivered in the USA. We provide conventional 12-14 organization days to be delivered (with 2-3 business days for Ground Shipping) to anyone placed per order within the USA without weight restriction or quantity. Having two additional locations will certainly suggest  charges. throughout shipment or shipment, we are not accountable for any loss, hold-up, damage, or burglary to the printed prcts. We also do not ensure delivery and shipping transportation times. Sireprinting.com will certainly not be in charge of any damages which occurred throughout delivery. Harmed or lost shipment cases can be filed after six business days from the day of package shipment. We will charge  handling and shipping charges for re-shipment if you offer us incorrect shipment distribution addresses or make errors while providing the total delivery address.</p>

         <h2 className='text-2xl mt-8 mb-2  font-semibold text-slate-900'>ALTERATIONS IN TERMS AND CONDITIONS</h2>
          <p>It is our right to alter and alter any part of our website in addition to the conditions whenever we want without prior notice. The adjustments made to any kind of area of our website, including the terms, will certainly be effective promptly. your continual application of our site after the adjustments will certainly suggest that you are in contract to whatever changes made</p>

         <h2 className='text-2xl mt-8 mb-2  font-semibold text-slate-900'>HOW TO GET IN TOUCH WITH SIREPRINTING.COM?</h2>
          <p>If there are any questions regarding this privacy plan, you might call us to use the details below.</p>
          <div className='my-5'>
            <div className='font-bold'><Link to={`tel:${phoneNumber}`}>Phone: (410) 834-9965</Link></div>
            <div className='font-bold'><Link to={`mailto:${emailAddress}`}>Email: support@sireprinting.com</Link></div>
          </div>

        </div>
      </div>

    </Layout>
  )
}
export default TermsAndConditions;