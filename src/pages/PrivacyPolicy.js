import React from 'react'
import Layout from "../layout";
import { TabTitle } from "../utils/GeneralFunction";
import { Link } from "react-router-dom";

const pageTitle = "Privacy Policy"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/images/privacy_policy-min_m8yc0d.webp";
const linkLabel = "Home";
const Label = "Privacy Policy";

const PrivacyPolicy = () => {
        const siteTitle = 'Privacy Policy | Sire Printing';

        TabTitle(siteTitle)
        return (

                <Layout>
                        <img src={banner} className="w-full" />
                        <div className="bg-slate-200 h-14 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em> {Label}</em></span></div>
                        <div className='bg-white '>
                                <div className='lg:container mx-6 lg:mx-56 lg:w-[1320px] py-12'>
                                        <h2 className='text-4xl font-bold my-12'>{pageTitle}</h2>
                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'>PRIVACY AND SECURITY</h2>
                                        <p>Sireprinting.com is strictly committed to keeping the privacy of its consumers intact and secure. We never share, sell, or otherwise disclose details about our customers to any other party except as called for to process and ship acquisitions. We promise and make sure not to spam you, and we will not market your information.</p>


                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'>INFORMATION DATA ACCUMULATION</h2>
                                        <p>Sireprinting.com is the sole owner of the information accumulated on www.sireprinting.com. We gather info from our users, customers, and site visitors at several various factors on our Web site. Various domains of our web server collect individual info about the customer details gathered from different locations. All that information is kept in log data that contain site visitors' domain name, IP address information, internet browser name, date/time of browse through which the site was visited, referring/exit websites, the number of clicks as well as broad geographic/demographic info to produce the existing fads. It is worth mentioning that we will only reveal your information when needed by law or to protect our rate of interests and security and those of various other site visitors to our website, or when you permit us to do so. Your info can also be divulged when we have a good-faith belief that it is required to abide by a present judicial proceeding, a court order, or legal process offered on our site.</p>

                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'>COOKIES & LOG FILES</h2>
                                        <p>A cookie is an item of information saved on the user's computer system linked to info regarding the user who visited our site in any position. We utilize relentless cookies to facilitate user experience. A relentless cookie is a tiny text file saved on the individual's hard drive for an extended period. These cookies can be eliminated by complying with browser assistance file instructions at your computer about the specific browser being used. Like the majority of standard site web servers, we also make use of log files and documents. All that is meant for better user experience. That includes internet protocol (IP) addresses, the type of web browser used to access Sireprinting.com, internet service provider (ISP), referring/exit web pages, platform kind, date/time stamp, and also several clicks to assess patterns, administer the site, track individuals' activity in the aggregate, as well as gather wide market info for aggregate use. This data is not linked to directly identifiable details.</p>

                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'>REGISTRATION</h2>
                                        <p>To use Sireprinting.com, a customer must reveal his/her email and name to finish the registration procedure. In many cases, we use this information to speak to the user regarding our products and services, even if they have not ordered these specific products. All that is meant to make sure that our user is furnished with the kind of details they had in mind while accessing our support inbox or chat facility. It is assumed that any details accumulated for processing the order or any other question will certainly not be shared or exposed to any 3rd party customer and will meticulously be made use of just for client service purposes. It is all meant for satisfying delivery requests and also for calling the customers for comments and queries. Sireprinting.com does not deliberately gather info from youngsters under 13. Our site is strictly not purposefully prepared or propagated for use by youngsters. </p>

                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'> ORDER FORM REQUISITES</h2>
                                        <p>The order form has to be filled for the placement of any requisition or order by our clients. We inquire from the customer on our order form various details related to the product required. A customer has to offer to get in touch with details (such as name, email, shipping address) and pricing information and details (such as bank card number and expiration date). All that information is kept fully secure and intact. This info is made use of for bank card authorization as well as to load customers' orders. If we have a problem refining an order, the info is utilized to contact the individual who placed the order. There is no more use of that info other than Bank usage and order placement. </p>

                                        <h2 className='text-3xl font-semibold text-slate-900 my-6'> CUSTOMER SUPPORT</h2>
                                        <p>We use our website to offer our customers a flawless user experience not to be found anywhere. For that, we communicate with users often to offer asked for services and suggestions for improvements. Our production and customer care team makes use of live chat, email, and phone information to communicate with clients regarding problems associated with the in-process order. </p>

                                        <h2 className='text-3xl font-semibold text-slate-900 mt-6'>COMMUNICATIONS FROM THE SITE</h2>
                                        <h2 className='text-sm font-semibold text-slate-900 my-3'>Newsletters, Special Deals, and also Updates</h2>
                                        <p> Our registered and subscribed users and customers will periodically receive details on products, solutions, special bargains, and newsletters. For respect and to save our customers' time, we do not involve them in any such information exchange activity without prior permission from their side. You can even unsubscribe from any such deal if you do not want to receive such correspondence. Clients are automatically registered for our e-newsletter; we request details such as name and email address. Out of regard for our individual's privacy, we provide a means to opt-out of these communications. If you do not want to receive future newsletters, all you have to do is unsubscribe.</p>

                                        <h2 className='text-md my-8 font-semibold text-slate-900'> 3rd Party Intermediaries</h2>
                                        <p>We use an outdoor delivery firm to deliver orders and a charge card processing firm to cost customers for items and solutions. These businesses do not preserve, share, shop, or usage personally identifiable information for any second function. </p>

                                        <h2 className='text-md my-8 font-semibold text-slate-900'>Company Transitions</h2>
                                        <p>Suppose Sireprinting.com goes through an organizational transition, such as merging, being acquired by one firm, or offering a portion of its assets. In that case, users' individual information will, in many instances, be part of the possessions moved. Suppose as a result of a business shift, the customers' directly recognizable information will be made use of in a fashion different from that stated at the time of collection. In that case, they will certainly be provided a choice with our notification of adjustments section.</p>

                                        <h2 className='text-md my-8 font-semibold text-slate-900'>Choice/Opt-out</h2>
                                        <p>Our users and online customers are offered the opportunity to 'opt-out' of having their information used for objectives not directly about our site at the factor where we request info. For example, our order form has an 'opt-out' system, so users who buy an item from us but do not want any advertising and marketing material can maintain their email address off our checklists.</p>

                                        <h2 className='text-md my-8 font-semibold text-slate-900'>Hyperlinks</h2>
                                        <p>Our websites may consist of links to various other sites or used for internal linking to its relevant content. Please realize that we are not responsible for the personal privacy methods of such various other websites. We are only responsible for the linking made on our site within its pages. We urge our users and online customers to be conscious when they leave our website and review every Web site's privacy statements that collect directly recognizable information.</p>

                                        <h2 className='text-md my-8 font-semibold text-slate-900'>Security/SSL file Encryption</h2>
                                        <p>Our Websites take every safety measure to shield our users' info. When customers submit sensitive details via Sireprinting.com, their info is secured online and offline with as much care and responsibility as possible. When our registration/order kind asks users to enter sensitive information (such as charge card number and social security number), that information is encrypted and safeguarded with the most effective file encryption software application in the sector-- SSL. While on a safe web page, such as our order form, the lock icon under Web internet browsers such as Netscape Navigator and Microsoft Internet Explorer becomes secured, in contrast to un-locked, or open, when customers are just 'surfing.'. While we utilize SSL file encryption to safeguard sensitive information online, we also do everything to shield customer info offline. Our individuals' info, not simply the delicate info discussed above, is limited in our workplaces. Only staff members who require the details to perform a specific task (for example, our billing staff or a customer support agent) are granted personally identifiable information. Employees should enter their password to access user information. Lastly, the web servers that store personally identifiable details are in a high-security atmosphere at our co-location facility.</p>

                                        <h2 className='text-3xl mt-6 font-semibold text-slate-900'>SUPPLEMENTS OF INFORMATION</h2>
                                        <h2 className='text-md my-4 font-semibold text-slate-900'>Notice of Changes</h2>
                                        <p>Suppose we decide to transform our privacy policy. In that case, we will certainly post those modifications to this personal privacy declaration, the homepage, and also various other places we deem appropriate, so our users are always aware of what information we gather, how we use it, and under what scenarios, if any, we divulge it. We will use info by the privacy plan under which the info was gathered. Suppose nonetheless, we will use users' personally identifiable information in a way different from that specified one at the time of collection. In that case, we will certainly inform customers using email or any other specified and agreed upon the source. Users will have a choice regarding whether or not we utilize their information in this various manner. Suppose customers have opted out of all communication with the site or deleted/deactivated their account after that. In that case, they will certainly not be spoken to, neither will certainly their info be utilized in this new fashion. Also, suppose we make any product modifications in our privacy techniques that do not influence customer info already stored in our data source. In that case, we will certainly upload a noticeable note on our website, notifying individuals of the change.</p>

                                </div>
                        </div>

                </Layout>
        )
}
export default PrivacyPolicy;