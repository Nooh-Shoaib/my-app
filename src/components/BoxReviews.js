import React from "react";
let revArr = [
  {
    label: "Sire-Printing Offers Premium-Quality Custom Boxes",
    text: "As we all know the logo is a brand identity of a company. At sireprinting.com, we provide premium-quality Custom Boxes that allow customers a huge relaxation of their products, people do not have to worry about the design, safety of their custom packaging boxes. Our main focus is to make our customers reputation high in the market. For a high reputation, you need to have high-quality custom boxes that engage customers and increase your sales as well. Our custom packaging boxes have extravagant color varieties with the latest design methodologies starting from spot UV to perforation that make custom printed boxes more elegant to consumers with no minimum limit. Apart from that, these custom boxes are available in various stocks which include cardboard stock, kraft stock, or rigid stock that are eco friendly and recycled as well. Last but not least our custom printing and packaging give the boxes an eye-catching look that will make it really worth in the marketplace. So sireprinting.com is an overall package where customers get custom printed boxes according to their choice and requirements.",
  },

  {
    label: "Stylish and Enticing Custom Boxes with Logo",
    text: "At sireprinting.com we provide meticulous care to make a stylish and enticing Custom Boxe with your Brand Logo. As we all know, logos are a brand identity of a company. So everyone wants custom boxes that have an elegant logo on it. Logos have a huge impact on brand representation and an attractive logo will provide satisfaction to the companys owner. Your satisfaction is our pride and we always keep customers satisfaction right on top. For that purpose, we used the latest instruments and techniques that give us custom printed boxes with logos. There is no chance that your logo will be displaced or having some defects with it. You can get printed boxes with a logo that will be your brand identity and you will definitely be proud of it.",
  },

  {
    label: "Make your Custom Boxes More Impressive",
    text: "If you want high-quality custom boxes that have glamorous design and impressive features in one place. So you are at the right place, sireprinting.com is here for you giving you custom boxes at a cheap rate. Our focus is to give our consumers impressive quality custom printed boxes that look alike a decorated material so that they can earn what they deserve? We make cheap custom boxes that are fit for your product and at the same time, they cannot harm it during delivery. So you got both these benefits right at the same place which is a big relief for any customers so get ready to get what you want?",
  },

  {
    label: "Best Company for Custom Packaging Boxes Wholesale ",
    text: "When we talk about Custom Packaging Boxes Wholesale, you can not find better than us. We have high-quality printing and packaging machines with all technical staff looking at it. We deliver custom packaging boxes according to your specifications and recommendations on the wholesale rate that are secure and do not harm your product inside it. It gives extra comfort to our customers which will strengthen our relations with customers. We at sireprinting.com proud to provide you all these services just because you can build your reputation in the marketplace and increase your sales in this hard span of time.",
  },

  {
    label: "We are Here to Provide 24/7 Customer Support",
    text: "We are passionate here to serve brands and businesses with high-quality custom printed packaging boxes having out of the box style, and elegant design. We are available 24/7 for your assistance on live chat by clearing each and every doubt in your mind in the shortest possible time. Our team makes it easy for you to understand that we deliver high standard quality products that reach your heart instantly. Order us now by filling the specification form or by calling us at ",
  },

  {
    label: "we will be more than happy to serve you any time.",
    text: "While maintaining our standard of delivering custom printed boxes for some time we can take care of small and large businesses as well. If you are new to the marketplace or struggling to get any space so we are here to support you in this difficult time. We provide relaxation to small businesses by giving them custom packaging printed boxes at an affordable price which will meet all the latest design standards and having premium quality which will grab your heart instantly. This will make us your large preference whenever you want custom packaging and printing",
  },
];

const BoxReviews = () => {
  return (
    <div>
      <div className="  grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2 lg:px-20  md:px-20 gap-7  my-14 ">
        {revArr.map((v, i) => {
          return (
            <div key={i} className="px-6 py-2 shadow-xl bg-white text-black ">
              <div className="">
                <h3 className="text-3xl py-3 font-semibold"> {v.label}</h3>
                <p className="py-2">{v.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BoxReviews;
