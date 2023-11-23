import React from "react";
import Post from './2ndpageComponents/Post';
import Layout from "../layout";
import { Link } from "react-router-dom";
import { TabTitle } from "./utils/GeneralFunction";
export default function Blogs() {

  TabTitle('Blogs | Sire Printing')
  const postData = [
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698370311-advantages-of-rigid-boxes.avif",
      title: " Unlocking The Elegance: The Art And Advantages Of Rigid Boxes",
      author: " Rigid Boxes ",
      date: "28 0ct",
      info: "When it comes to packaging, there's an art to it - an art that combines aesthetics, functionality, and...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698369858-eco-friendly-packaging-9-sustainable-packaging-ideas-for-2023.avif",
      title: " Eco-Friendly Packaging: 9 Sustainable Packaging Ideas For 2023",
      author: " Custom Retail Packaging",
      date: "28 0ct",
      info: " In an era where environmental consciousness is at an all-time high. Businesses are increasingly recognizing the importance of...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698283462-mastering.avif",
      title: "Mastering The Art Of Lipstick Packaging Customization: Your Comprehensive Guide ",
      author: "Cosmetic Packaging ",
      date: "27 Oct",
      info: "In the world of cosmetics, first impressions matter, and lipstick is no exception. It's the small, colorful tube...  ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698282863-custom-mug-boxes.avif",
      title: " Custom Mug Boxes: The Journey from Standard to Spectacular",
      author: " Custom Retail Packaging",
      date: "27 0ct",
      info: " Custom Mug Boxes have undergone a remarkable transformation from standard, Utilitarian packaging to spectacular, personalised containers that speak...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698197097-custom-cookie-boxes-1.avif",
      title: "Custom Cookie Boxes: Elevating Your Bakery's Branding And Sales ",
      author: " Food Packaging ",
      date: "26 0ct",
      info: " In the world of baking, the taste of your cookies undoubtedly takes centre stage, but there's another critical...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698196526-luxury-custom-pillow-boxes.avif",
      title: "Luxury Custom Pillow Boxes: 5 Stunning Benefits That Stand Out ",
      author: "  Custom Retail Packaging ",
      date: "26 0ct",
      info: "In the dynamic world of product packaging, where the first impression is everything, Custom Pillow Boxes have emerged... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698111570-8-great-reasons-for-picking-eye-catching-custom-soap-boxes.avif",
      title: "8 Great Reasons For Picking Eye-Catching Custom Soap Boxes ",
      author: "Soap Packaging Boxes ",
      date: "25 0ct",
      info: " In the world of soap packaging, the choices you make can significantly impact your brand's success. Custom Soap...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1698111028-satin-lined-boxes.avif",
      title: "Satin Lined Boxes: Elevating Packaging to a New Level ",
      author: "Rigid Boxes ",
      date: "25 0ct",
      info: "In the realm of packaging, Satin Lined Boxes are a luxurious and versatile choice that has gained popularity... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697850599-wholesale-bakery-boxes-unbox-sweet-success.avif",
      title: "Unbox Sweet Success With Wholesale Bakery Boxes ",
      author: "  Food Packaging",
      date: "24 0ct",
      info: " Bakeries are synonymous with indulgence, and they understand that taste is paramount. But in the highly competitive world...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697849604-boost-sales-with-7-innovative.avif",
      title: " Boost Sales With 7 Innovative Custom Lip Gloss Box Ideas",
      author: "   Cosmetic Packaging",
      date: "24 0ct",
      info: " In the highly competitive cosmetics industry, the presentation of your lip gloss can make or break a sale....",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697843083-cereal-boxes.avif",
      title: " Crunching Creativity: Custom Cereal Boxes That Pop!",
      author: "   Food Packaging",
      date: "21 0ct",
      info: "Are you ready to explore the fascinating world of Custom Cereal Boxes? These imaginative containers not only house... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1697737047-start-bringing-your-aromas-with-stunning-incense-packaging-solutions.avif ",
      title: "Start Bringing Your Aromas With Stunning Incense Packaging Solutions! ",
      author: "  Custom Retail Packaging",
      date: "21 0ct",
      info: " When it comes to incense, the aromatic experience goes hand in hand with the visual appeal. The right...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697676820-unveiling-the-ultimate-pre-roll-packaging-solutions.avif",
      title: "Unveiling The Ultimate Pre Roll Packaging Solutions! ",
      author: " CBD Packaging",
      date: "20 0ct",
      info: "In the world of cannabis and tobacco products, packaging plays a significant role in brand recognition, product protection,... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697497954-elevate-your-brand-with-custom-cbd-boxes-stand-out-in-style.avif",
      title: " Elevate Your Brand with Custom CBD Boxes: Stand Out in...",
      author: " Cosmetic Packaging",
      date: "19 0ct",
      info: "As competition within the CBD industry heats up, businesses need ways to differentiate themselves and leave an indelible... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1697491174-summer-sale.avif ",
      title: "Custom Cream Boxes: Elevate Your Brand With Luxury And Quality ",
      author: " Food Packaging ",
      date: "19 0ct",
      info: "In today's competitive business landscape, standing out is imperative for brand success. When it comes to the cosmetic... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1697478003-the-rising-trend-of-burger-boxes-wholesale.avif ",
      title: " The Rising Trend Of Burger Boxes Wholesale",
      author: "Custom Retail Packaging ",
      date: "16 0ct",
      info: "The fast-food industry is no stranger to innovation, and Burger Boxes Wholesale have become an increasingly popular trend.... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1697240727-the-power-of-custom-candle-boxes-in-marketing-1.avif",
      title: " The Power Of Custom Candle Boxes In Marketing",
      author: "  Custom Packaging Boxes",
      date: "16 0ct",
      info: " In the bustling marketplace, creating a standout brand presence is more than just offering a unique product. It's...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1696535644-the-magic-of-christmas-boxes-sireprinting.png ",
      title: " The Magic of Christmas Gift Boxes: An Overview",
      author: " Custom Packaging Boxes",
      date: "16 0ct",
      info: " Every year, as the festive season approaches, the magic of Christmas resonates in the form of gifts. And...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1672163803on%20site.png.jpg ",
      title: " Popular Packaging Boxes That Can Transform Your Brand | 2023...",
      author: "  CBD Packaging",
      date: "13 0ct",
      info: " The importance of packaging is undeniable. If you want customers to become loyal to you, they must feel...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1665620570Vape%20Cartridge%20Packaging.jpg",
      title: " Boost Your Vape Cartridge Packaging Through Re-branding",
      author: "Cosmetic Packaging ",
      date: "05 0ct",
      info: "Vape cartridge packaging is a popular way of selling. As time passes by, the product faces high demand... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1648773719Custom%20Candy%20Boxes%20(1).png ",
      title: "Help Your Business To Boost Itself With Custom Essential Oil... ",
      author: "  Custom Retail Packaging ",
      date: "27 Dec",
      info: " Companies that manufacture herbal products are quite concerned about the packaging that will be used to protect their...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1648751664Custom%20Candy%20Boxes.png ",
      title: " Surround Yourself With Custom Candy Packaging, Not Negativity",
      author: " CBD Packaging",
      date: "13 0ct",
      info: " Do you wish to give your desserts a glistening appearance? If you answered yes, the best alternative for...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1648749312Blunt%20Boxes.png",
      title: "Don't Confuse Being Stimulating Custom Blunt Boxes With Being Blunt",
      author: " Cosmetic Packaging",
      date: "01 Apr",
      info: " Obtaining outstanding Custom Printed Packaging concepts that promote the product and have the ability to inspire a brand is incredibly...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1648748257Custom%20Mascara%20Boxes.png",
      title: "With Custom Mascara Packaging Adding Little Mascara To Your Lashes... ",
      author: "   Food Packaging ",
      date: "31 Mar",
      info: " Mascara is an eye care product that makes eyelashes darker, longer, stronger, more curled, and more prominent with...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1648683375Burger%20Boxes.png",
      title: "Hit The Sweet Spot With Custom Printed Burger Boxes And...",
      author: "Rigid Boxes ",
      date: "31 Mar",
      info: " Burgers, how can everyone not love these entertaining, juicy, and mouth-filling wonders? Anyway, I have never met such...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1648680826Rigid%20Boxes.png ",
      title: "Luxury Boxes Wholesale Gives The Joy Of Living ",
      author: " CBD Packaging",
      date: "31 Mar",
      info: "Custom rigid boxes are luxury boxes that are thicker than standard packaging boxes and are used for expensive... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1648492495CBD%20Gum%20Packaging%20Boxes.png ",
      title: " Get Exceptional Growth With Chewing Gum Boxes",
      author: "  CBD Packaging ",
      date: "30 Mar",
      info: " According to many pieces of research, chewing gum boosts memory, reduces stress, and can help to lower weight....",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1648491548Tea%20Packaging%20Boxes.png ",
      title: "With Custom Tea Boxes Everything Is Possible ",
      author: "  Soap Packaging Boxes",
      date: "30 Mar",
      info: " Tea has always been everyone's favorite relaxing and soothing drink. It serves medicinal purposes and recreational purposes too....",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1648490875Die%20-cut%20soap%20packaging%20boxes.png",
      title: "Let Soap For A Good Day With Custom Window Soap... ",
      author: "  Custom Retail Packaging",
      date: "28 Mar",
      info: " The first impression is vital because it can attract attention and lead prospects to lose interest in the...",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1647985392CUSTOM%20FACE%20MASKS%20BOXES.png",
      title: " Stunning Designs For Custom Face Mask Boxes Wholesale That Represents...",
      author: " Soap Packaging Boxes",
      date: "28 Mar",
      info: " Whether plain or surgical, face masks have long been in great demand among pharmaceutical firms, hospitals, and clinics....",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1647983341Handmade%20Soap%20Packaging%20Boxes.png",
      title: " Garner A Lot Of Attention With Soap Boxes For Homemade...",
      author: "  CBD Packaging",
      date: "28 Mar",
      info: "Hand washing and cleaning should be comfortable. The Handmade Soap Boxes are made from saturated fats and glycerine. They are... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1647652586CBD%20Concentrate%20Packaging.png ",
      title: " Marijuana Concentrate Packaging That Keeps The Product Fresh For A...",
      author: "  CBD Packaging ",
      date: "22 Mar",
      info: "Cannabis concentrates are usually high concentrations of Marijuana Concentrate Packaging can have greater physical and psychological consequences than... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1647482153Marijuana%20Concentrate%20Packaging.png",
      title: " Unique Custom Cannabis Concentrate Packaging That Helps You To Grow",
      author: "   Food Packaging",
      date: "22 Mar",
      info: " The marijuana business is growing massively due to its medicinal value. Using the majority of the country now...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1647479484How%20Burger%20Boxes%20Make%20A%20Difference.png ",
      title: " Get Custom Printed Burger Boxes To Make Your Product Unique...",
      author: "CBD Packaging ",
      date: "19 Mar",
      info: "In fast food, burgers are a favourite of all foodies. People always like foods that are whole and... ",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1647476679Hemp%20CAndle%20packaging%20boxes.png ",
      title: "Custom Hemp Candle Boxes With Resplendent Designs ",
      author: "  Custom Retail Packaging ",
      date: "17 Mar",
      info: "Hemp candles are popular because of their relaxing and moisturizing effects when applied to the skin. Hemp candles... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1647044404Bath.png",
      title: "Custom Bath Bomb Packaging Boxes Enhance Your Sales With Style ",
      author: "Soap Packaging Boxes ",
      date: "17 Mar",
      info: "Bath bombs are concentrated foam baths made from a combination of wet and dry components such as essential... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1647047732Bath%20(1).png",
      title: " Why Do You Need Kraft Soap Packaging For Your Brand",
      author: "  Custom Retail Packaging ",
      date: "17 Mar",
      info: " Kraft cardboard is durable and sturdy and will not be easily shredded or torn in transit; buying plain...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1646759498Custom%20Candle%20Boxes.png ",
      title: " Give a Magnificent Touch to your Custom Printed Candle Boxes...",
      author: "  Custom Packaging Boxes",
      date: "12 Mar",
      info: " Top-notch products need high-grade packaging solution which gives their products an artistic touch that is matchless. Hit the...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1646702216Custom%20Packaging%20Boxes.png ",
      title: " Get Maximum Benefit From Cheap Custom Printed Packaging Boxes Wholesale",
      author: "CBD Packaging ",
      date: "12 Mar",
      info: "Imagine yourself in the supermarket, browsing the many things on the shelf, or recalling your most recent buy.... ",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1646701618Best%20Custom%20Cigarette%20Boxes%20That%20Sells!.png",
      title: " Appealing Custom Cigarette Boxes For Your Brand With Secure Packaging",
      author: " Soap Packaging Boxes",
      date: "8 Mar",
      info: " In recent times we have seen a sudden growth in cigarette demand nevertheless many public awareness campaigns are...",
    },
    {
      imgSrc: "https://s3.amazonaws.com/sireprinting.com/blogs/1646354404SOAP%20PACKAGING%20BOXES%20(1).png ",
      title: " Custom Soap Packaging Boxes Your Ultimate Solution!",
      author: " Cosmetic Packaging ",
      date: "8 Mar",
      info: " When it comes to hygiene, soaps are considered the most important and consumed product in households and groceries....",
    },
    {
      imgSrc: " https://s3.amazonaws.com/sireprinting.com/blogs/1646349757Custom%20Eyeliner%20boxes%20for%20makeup%20enthusiast%20(1).png",
      title: " Custom Eyeliner Boxes for Makeup Enthusiasts",
      author: "  Cosmetic Packaging",
      date: "8 Mar",
      info: "Today's Cosmetics industry is one of the most quickly growing and ever-expanding days by day. Every other day... ",
    },


  ];
  const pageTitle = " Blogs"
  const homeLink = "/"
  const linkLabel = "Home";
  const Label = "Blogs";

  return (

    <div className="bg-white">
      <Layout>
        <img src="https://sireprinting.com/frontend-theme/assets/images/blog.gif" className="w-full" />
       <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
       <h2 className=" flex justify-center my-12 text-4xl font-semibold">{pageTitle}</h2>
        <div className=" lg:max-w-[1320px] mx-auto grid lg:grid-cols-2 grid-cols-1 md:grid-cols-2  lg:gap-y-7  lg:gap-x-12 md:px-3  ">
          {postData.map((post, index) => (
            <Post key={index} content={post} />
          ))}
        </div>
      </Layout>
    </div>
  );
}
