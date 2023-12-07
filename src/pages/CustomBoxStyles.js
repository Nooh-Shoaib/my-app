import React from "react";
import { Link } from "react-router-dom";
import Layout from "../components/layout";
import Quote from "../components/beatQuote";
import { TabTitle } from "../utils/GeneralFunction";
let imagesArr = [
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599824426/reverse-tuck-box.jpg",
    label: "Reverse Tuck Style Boxes ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599824585/counter-display-box.jpg",
    label: " Counter Display Boxes",
  },
  {
    imageUrl:
      " https://s3.amazonaws.com/sireprinting.com/products/16528406221-2-3-bottom-tray%20Sire%20Printing.jpg",
    label: " 1-2-3 Bottom Trays",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599824729/gable-bag.jpg",
    label: "Custom Gable Bags ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599825711/roll-end-tuck-top-box.jpg",
    label: "Roll End Tuck Top Boxes ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599825847/angled-roll-side-tray.jpg",
    label: " Angled Roll Side Tray",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599825963/hexagon-box.jpg",
    label: " Hexagon Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599826047/seal-end-auto-bottom-box.jpg",
    label: "Seal End Auto Bottom Box ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599826131/gable-box.jpg",
    label: " Gable Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1599826214/paper-brief-case.jpg",
    label: " Paper Brief Case",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600705453/sleeve-and-tray-box.jpg",
    label: " Sleeve & Tray Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600707115/4%20Corner%20Box.jpg",
    label: " 4 Corner Box",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600707639/6%20Corner%20Box.jpg ",
    label: " 6 Corner Box",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600708221/Bookend%20Boxes.jpg ",
    label: " Bookend Boxes",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600708742/Double%20Wall%20Lid.jpg",
    label: " Double Wall Lid",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600709468/Double%20Wall%20Tray.jpg",
    label: " Double Wall Tray",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600710733/Fence%20Partitions.jpg ",
    label: " Fence Partitions",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600711109/Five%20Panel%20Hanger%20Box.jpg ",
    label: " Five Panel Hanger Box",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600711389/Foot%20Lock%20Tray.jpg ",
    label: "Foot Lock Tray ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600714643/Gravity%20Feed%20Dispenser%20Box.jpg",
    label: "Gravity Feed Dispenser Box ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600715245/Half%20Slotted%20Container.jpg",
    label: "Half Slotted Container ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600716610/Handle%20Pillow%20Box.jpg",
    label: " Handle Pillow Box Style",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600717619/Perforated%20Dispenser%20Box.jpg",
    label: "Perforated Dispenser Style Boxes ",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600718122/Pillow%20Box.jpg ",
    label: " Pillow Style Boxes",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600718580/Pillow%20Box%20Envelope.jpg",
    label: " Pillow Box Envelope Style Boxes",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600719934/Punch%20Partitions.jpg",
    label: "Punch Partitions ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600720596/Regular%20Slotted%20Container.jpg",
    label: "Regular Slotted Container ",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600723551/Seal%20End%20Boxes.jpg ",
    label: "Seal End Style Boxes ",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600727486/Self%20Lock%20Cake%20Boxes.jpg ",
    label: " Self Lock Cake Boxes",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600727907/Six%20Pack%20Bottle%20Carrier.jpg ",
    label: "Six Pack Bottle Carrier ",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600728275/Straight%20Tuck%20Box.jpg ",
    label: "Straight Tuck Box ",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600728847/Two%20Piece%20Box.jpg",
    label: " Two Piece Box",
  },
  {
    imageUrl:
      "https://res.cloudinary.com/sireprinting/image/upload/v1600729288/Tuck%20and%20Display%20Box.jpg ",
    label: " Tuck and Display Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600729591/Tuck%20and%20Tongue%20Box.jpg",
    label: " Tuck and Tongue Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600729880/Tuck%20Top%20Auto%20Bottom%20Box.jpg",
    label: " Tuck Top Auto Bottom Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600730175/Tuck%20Top%20Snap%20Bottom%20Box.jpg",
    label: " Tuck Top Snap Bottom Box",
  },
  {
    imageUrl:
      " https://res.cloudinary.com/sireprinting/image/upload/v1600714203/Four%20Pack%20Bottle%20Carrier.jpg",
    label: "Four Pack Bottle Carrier ",
  },


];

const pageTitle = "Custom Box Styles"
const homeLink = "/"
const banner = "https://res.cloudinary.com/sireprinting/image/upload/v1612174771/box-styles1.jpg";
const linkLabel = "Home";
const Label = "Custom Box Styles";


const Image = () => {
  return (<>
    <div className=" lg:w-2/3 md:w-2/3  mx-3">
      <h1 className="w-full text-center  my-12 text-4xl font-semibold">
        {pageTitle}
      </h1>
      <div className=" w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2   md:px-10 gap-4 py-0 px-1">
        {imagesArr.map((v, i) => {
          return (

            <div key={i} >

              <Link to="#">
                <div className="text-center  hover:scale-105 duration-500 hover:opacity-60 cursor-pointer">
                  <img src={v.imageUrl} alt={v.label} loading="lazy" />
                  <div>
                    <h2 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black text-sm  bg-amber-500">
                      {v.label}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>

          );
        })}
      </div>
    </div>
  </>
  );
};




const CBDPackaging = () => {
  const siteTitle = 'Guidance :: Best Custom Box Styles Guidelines ! You Will Never Miss ! | Sire Printing';

  TabTitle(siteTitle);

  return (
    <>
      <Layout>
        <div className="  bg-white ">
          <img src={banner} alt="" className="w-full" />
          <h2 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h2>
          <div className="py-24">

            <div className="py-10 lg:flex md:flex relative">
              <Image pageTitle={pageTitle} />
              <Quote />

            </div>
          </div>
          <div className="ml-3 lg:ml-16  py-10">
            <h2 className="text-4xl font-semibold  py-5 hidden lg:block"><big>Box Styles Description Title</big></h2>

          </div>
        </div>
      </Layout>
    </>
  );
};
export default CBDPackaging;

