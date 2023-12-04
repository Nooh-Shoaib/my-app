import React from 'react'
import Layout from "../layout";
import { TabTitle } from './utils/GeneralFunction';
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

const pageTitle = "About Us"
const homeLink = "/"
const linkLabel = "Home";
const Label = "About Us ";

const AboutUs = () => {
  const siteTitle = '  About Us | Sire Printing';

  TabTitle(siteTitle);

  return (<>
  <Helmet>
        <title> About Us | Sire Printing</title>
        <meta name="description" content="This Is About Our Website" />
      </Helmet>
    <Layout>
     <h2 className="bg-slate-200 h-14 flex items-center"><Link to={homeLink} className="mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em> {Label}</em></span></h2>
      <div className='bg-white '>
        <div className='lg:container  mx-6 lg:mx-56  py-24'>
         <h2 className='text-4xl font-bold '>{pageTitle}</h2>
          <p className='leading-6	'> Based in Brooklyn NY, Sireprinting.com is a family-owned printing and packaging company having a strict emphasis on providing environmentally friendly<br/> printing and packaging solutions to its esteemed clients. In 8 years, we have earned an excellent reputation in the packaging industry. Today, we are widely <br/>known as the most economical company with the fastest turnaround time in the product packaging business sector. Our reliable prevailing tendency and <br/>strong ambitions are the most precious asset that distinguishes us from our competitors.</p>


         <h2 className='text-2xl font-semibold'>HOW DO WE SERVE YOU?</h2>
          <p className='leading-6	'>We at sireprinting.com provide personalized and economical packaging & printing for all the personal and professional requirements of our clients. We have<br/> advanced high-end technology to guarantee that all the product packaging boxes we produce have top-notch quality without putting a dent in our client’s<br/> wallet. Our seasoned and highly committed team of proficient designers furnish your products with fantastic artwork and eye-dazzling layouts. No matter<br/> which category of the boxes you place an order for, we can fully fulfill all your needs and requirements. Moreover, our production and customer support<br/> team is also positively courteous and dexterous; for that reason, all the work published under our belt is delivered in very little time. Printing and also <br/>shipment within time are the top core qualities of our firm.</p>

         <h2 className='text-2xl font-semibold'>CUSTOMIZED PRODUCT PACKAGING SERVICES</h2>
          <p className='leading-6	'>Every order you place at sireprinting.com is professionally dealt with deep care and concentration to ensure premium quality and striking results. As<br/> mentioned previously, we have a great zeal to promote environment-friendly product packaging that is not dangerous to the environment. Kraft boxes, <br/>Cardboard boxes, Rigid & Corrugated boxes, Window boxes, Die-cut boxes, and a complete range of packages for special occasions and celebrations events<br/> are our specific fields of interest and packaging know-how. Aside from these, our company is known for all sorts of product categories, whether these are<br/> gaming boxes, medicinal product packaging, or any other niche you deal in or produce under your banner. You need to state a reason for the package, and <br/>we will see to it according to your demand. Due to years of experience in the packaging and printing industry, we have developed a unique and matchless <br/>command in catchy customization. When it comes to customization options, we have a vast range of accessories and add ons, including UV, glossy/ matte, <br/>and many other options. You can also acquire options like Windows, embossing, debossing, die-cutting, lamination, or any other according to your brand <br/>requirements. We offer the most varied series of custom-made packaging options that you can get from us based on your needs and requirements. Whether<br/> you want custom pillow present boxes or tailored kraft boxes for your hemp packaging, window screen boxes, or paper bags to guarantee a tidy environment<br/> with eye-catching brand representation, we have it all covered.</p>

         <h2 className='text-2xl font-semibold'>CLIENT SATISFACTION, OUR MOST PRECIOUS ASSET</h2>
          <p className='leading-6	'>We utilize the environment and customer-friendly raw material for printing boxes without compromising the top quality. Our competent and experienced <br/>employees enable you to experience flawless printing. We can effectively cater to tiny in addition to bulk orders within the stipulated amount of time. We <br/>likewise offer a unique price cut provided now and then to maintain our consumers happiness level. We have something for everyone and each occasion,<br/> services, and product. You can have a look at our high-quality packaging items on our internet site.</p>
        </div>
      </div>

    </Layout>
    </>
  )
}
export default AboutUs;