import React from 'react';
import PropTypes from 'prop-types';

const HowWork = () => {
  const howContent =
    "Sire Printing is a comprehensive services printing organization that offers high-grade by-products to a low price in the market. We provide businesses with custom printed boxes and custom packaging solutions that meet industry and product particular requirements, anything you want we can print and dispatch quickly and affordably. We are able to come across innovative ideas to produce boxes with fusion of internal fabrication & automation and are able to turn down setup cost for custom directions. We don't ask setup or Die charges to our clients for even short run demands. We love startup dealings and are prepared to assist in any way to become part of their victory. Feel Free to contact us at any time for more information and any query, we are here to assist you.";

  const howWorkArr = [
    {
      imgUrl: "https://s3.amazonaws.com/sireprinting.com/images/how-work.gif",
      alt: "How We Work",
    },
  ];

  return (
    <>
      <h2 className="text-black font-semibold lg:text-4xl text-2xl lg:px-12 md:px-12 px-10">
        Why Sire Printing is Rated as Best Custom Printing &<br /> Packaging Company
        in USA
      </h2>
      <div className="lg:flex">
        {howWorkArr.map((item, index) => (
          <React.Fragment key={index}>
            <p className="font-medium my-5 mx-2 lg:mx-12 mr-2 md:mx-12 text-lg text-justify">
              {howContent}
            </p>
            <img src={item.imgUrl} alt={item.alt} className="image-class" />
          </React.Fragment>
        ))}
      </div>
    </>
  );
};

HowWork.propTypes = {
  heading: PropTypes.string,
};

HowWork.defaultProps = {
  heading: 'Default Heading',
};

export default HowWork;
