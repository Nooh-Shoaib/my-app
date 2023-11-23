import React from "react";
import { Link } from "react-router-dom";
import Layout from "../layout";
import Quote from "./2ndpageComponents/beatQuote";
import { TabTitle } from "./utils/GeneralFunction";
let imagesArr = [
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1645123048Custom%20Face%20Mask%20Boxes%20SirePrinting.png ",
		label: "Custom Face Mask Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600970240/Phone%20Charger%20Boxes.png",
		label: "Phone Charger Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628210009Kraft%20Soap%20Boxes%20SirePrinting02.png",
		label: "Kraft Soap Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601332825/Black%20Kraft%20Boxes.png",
		label: "Black Kraft Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628203009Die-Cut-Soap-Boxes-Sire-Printing-01.png",
		label: " Die Cut Soap Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1665622319Mailer-Boxes-with-Handle-Sire%20Printing%2001.png ",
		label: "Mailer Boxes with Handles ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632879803small-pillow-boxes-sire-printing.png",
		label: "Small Pillow Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612313141/custom%20food%20boxes.png",
		label: " Custom Food Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632959533sushi-boxes-sire-printing-05.png",
		label: " Sushi Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640140622Small%20Mailer%20Boxes%20Sire%20Printing%2001.png",
		label: " Small Mailer Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1664586049Incense%20Boxes%20Sire%20Printing%2002.png ",
		label: "Incense Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1664588402Kraft%20Window%20Boxes%20SIre%20Printing%20001.png",
		label: " Kraft Window Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632957661Candle%20Boxes%20Sire%20Printing.png ",
		label: " Candle Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632874083Bath%20Bomb%20Boxes%20Sire%20Printing%2001.png",
		label: "Bath Bomb Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1628213163White-Soap-Boxes-Sire-Printing.png ",
		label: "White Soap Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632873761Bakery-Boxes-Sire-Printing-02.png ",
		label: "Bakery Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632931919Candy-Boxes%20Sire%20Printing%2001.png",
		label: " Candy Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632957575Mug%20Boxes%20Sire%20Printing%2001.png ",
		label: " Mug Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632938297Collapsible%20Rigid%20Boxes%20Sire%20Printing%2001.png ",
		label: " Collapsible Rigid Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632953890Jewelry-Boxes-Sire%20Printing%2001.png",
		label: "Jewelry Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1599871575/handle-pillow-boxes.png",
		label: " Handle Pillow Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632879554Custom%20Pillow%20Boxes%20Sire%20Printing%2006.png ",
		label: " Pillow Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1697921214-one-piece-mailer-boxes-sire-printing-4.avif ",
		label: " One Piece Mailer Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632878721Window%20Pillow%20Boxes%20Sire%20Printing%2001.png",
		label: " Window Pillow Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1663453152Holographic-Pillow-Boxes-SirePrinting-04.png",
		label: "Holographic Pillow Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1645121923custom-cd-jackets-sire%20printing.png",
		label: " Custom CD Jackets",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600201102/dental-floss-boxes.png ",
		label: " Dental Floss Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1663452826Black-Pillow-Boxes-SirePrinting05.png",
		label: " Black Pillow Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600204336/pillow-gift-boxes.png",
		label: " Pillow Gift Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632957797Pro-Cut-Stickers-SirePrinting01.png",
		label: " Pro Cut Stickers",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600204695/lettering-stickers.png",
		label: "Lettering Stickers ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628203431Handmade-Soap-Boxes-Sire-Printing.png",
		label: "Handmade Soap Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1628204613Soap%20Sleeve%20Packaging%20Sire%20Printing%2001.png ",
		label: " Custom Printed Soap Sleeves",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600386148/Brand%20Woven%20Labels.png",
		label: " Brand Woven Labels",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600799500/Center%20Fold%20Woven%20Labels.png ",
		label: " Center Fold Woven Labels",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600799962/Hem%20Labels.png",
		label: "Hem Labels ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600800814/Text%20Woven%20Labels.png",
		label: "Text Woven Labels ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600804737/Woven%20Logo%20Labels.png",
		label: " Woven Logo Labels",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600971258/Playing%20Card%20Boxes.png",
		label: " Playing Card Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1696512663-tea-boxes.png",
		label: " Tea Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600983200/Vial%20Glass%20Bottle%20Boxes.png",
		label: " Vial Glass Bottle Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600983839/Hand%20Sanitizer%20Boxes.png",
		label: " Hand Sanitizer Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600986569/Aroma%20Boxes.png",
		label: " Aroma Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600988450/Apparel%20Boxes.png ",
		label: "Apparel Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600992933/Shot%20Glass%20Boxes.png ",
		label: "Shot Glass Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601334928/Kraft%20Sleeve%20Boxes.png",
		label: "Kraft Sleeve Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1601335406/Kraft%20Handle%20Boxes.png",
		label: "Kraft Handle Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601485150/Christmas%20Pillow%20Boxes.png",
		label: " Merry Christmas Pillow Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1654548469Large%20Pillow%20Boxes%20Sire%20Printing%2001.png",
		label: " Large Pillow Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1654377311Clear%20Pillow%20Boxes%20Sire%20Printing%2006.png",
		label: " Clear Pillow Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1654375989Kraft%20Pillow%20Boxes%20Sire%20Printing%2003.png",
		label: " Kraft Pillow Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1654374016Foiled%20Pillow%20Boxes%20Sire%20Printing%2003.png ",
		label: " Foiled Pillow Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1654372755Standing%20Pillow%20Boxes%20Sire%20Printing%2001.png ",
		label: " Standing Pillow Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601679264/Kraft%20Rigid%20Boxes.png",
		label: " Kraft Rigid Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601929467/Pillow%20Box%20Mailers.png",
		label: "Pillow Box Mailers ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1628210686Bar-Soap-Boxes-Sire-Printing-06.png ",
		label: "Bar Soap Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632874578black-soap-boxes-sireprinting-06.png",
		label: " Black Soap Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632935470Christmas-Gift-Boxes-Sire-Printing.png",
		label: " Christmas Gift Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632932853Christmas-Cake-Boxes-Sire-Printing.png",
		label: " Christmas Cake Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632932346Christmas-Apple-Boxes-Sire-Printing-01.png ",
		label: "Christmas Apple Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632935353Christmas-Gable-Boxes-Sire-Printing-06.png",
		label: " Christmas Gable Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632935227Christmas-Favor-Boxes-Sire-Printing-03.png",
		label: "Christmas Favor Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632935618Christmas%20Ornament%20Boxes%2007.png",
		label: "Christmas Ornament Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632935749Christmas-Treat--Boxes-SirePrintig01.png",
		label: "Christmas Treat Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632933414Christmas-Cookie-Boxes-Sire-Printing-01.png",
		label: "Christmas Cookie Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632935140Christmas-Cupcake-Boxes-Sire-Printing-01.png ",
		label: "Christmas Cupcake Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632874949Burger-Boxes-Sire-Printing-01.png ",
		label: "Burger Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1645126269Cereal-Boxes-Sire-Printing-01.png ",
		label: " Cereal Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632941376Paperboard-Crepe-Cones-Sire-Printing-02.png",
		label: " Crepe Cone Holders",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632941473Cup-Cake-Boxes-Sire-Printing-01.png ",
		label: " Cupcake Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632950144Donut-Boxes-Sire-Printing.png ",
		label: " Donut Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632951920Food-Packaging-Sleeves%20Sire%20Printing%2001.png",
		label: "Food Packaging Sleeves ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632959428small-rigid-boxes-sireprinting-01.png",
		label: " Small Rigid Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632959323Satin-Lined-Rigid-Boxes-Sire-Printing.png",
		label: " Satin Lined Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612919456/rigid-cigarette-boxes.png",
		label: " Rigid Cigarette Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632954735luxury%20cigar%20boxes%20Sire%20Printing%2001.png ",
		label: "Luxury Cigar Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1608771525/Beard%20Balm%20Boxes.png",
		label: "Beard Balm Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1608773455/Body%20Oil%20Boxes.png ",
		label: "Body Oil Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632940793Cosmetic-Sleeves-Packaging-Sire-Printing-01.png",
		label: " Cosmetic Sleeves",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1608774531/Eyelash%20Glue%20Boxes.png",
		label: " Eyelash Glue Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632951787face-wash-box-packaging-sire-printing-01.png",
		label: " Face Wash Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1628201847Face%20Wash%20Bar%20Boxes%20Sire%20Printing%2001.png ",
		label: " Face Wash Bar Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1609539295/Hair%20Products%20Boxes.png ",
		label: "Hair Products Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1609624535/Hair%20Spray%20Boxes.png ",
		label: "Hair Spray Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632954230Lip-Liner-Boxes-Sire-Printing-06.png ",
		label: "Lip Liner Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1609626915/Baby%20Shoes%20Boxes.png",
		label: "Baby Shoes Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1609627190/Business%20Cards%20Boxes.png",
		label: "Business Cards Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632875158Cake-Boxes-Sire-Printing-02.png",
		label: "Cake Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1612312941/Chocolate%20Boxes.png  ",
		label: " Chocolate Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632952030Food-Trays-Sire-Printing-02.png",
		label: "Food Trays ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612313409/ice%20cream%20boxes.png",
		label: "Ice Cream Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612313558/k%20cup%20coffee%20boxes.png",
		label: " K Cup Coffee Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1612313700/Macaron%20Boxes.png",
		label: " Macaron Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632928784Cell%20Phone%20Boxes%20Sire%20Printing%2001.png ",
		label: " Cell Phone Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1628206006Soap-Gift-Boxes-SirePrinting%2001.png",
		label: " Soap Gift Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600197589/lipstick-boxes.png ",
		label: " Lipstick Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776830SirePrinting-Tincture-Boxes-01.png",
		label: " Custom Tincture Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627776966Custom-Cigarette-Boxes-SirePrinting%2001.png ",
		label: " Custom Cigarette Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600198880/lip-gloss-boxes.png",
		label: " Lip Gloss Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627779660CBD%20Oil%20Boxes%20SirePrinting%2001.png",
		label: " CBD Oil Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632941243Cream%20Boxes%20Sire%20Printing%2001.png",
		label: "Cream Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627835995Pre-Rolls-Boxes-SirePrinting%2001.png",
		label: " CBD Pre Rolls Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632873549Anti%20Aging%20Cream%20Boxes%20Sire%20Printing%2001.png",
		label: " Anti Aging Cream Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627780198Vape-Oil-Cartridge-Boxes-SirePrinting%2001.png",
		label: "Vape Oil Cartridge Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632951291Eyeliner-Boxes-05.png",
		label: " Eyeliner Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1599825847/angled-roll-side-tray.jpg ",
		label: "Angled Roll Side Tray ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1602200995/cbd-gummies-boxes.png ",
		label: "CBD Gummies Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627831709Pre-Rolls-Cones-Boxes-SirePrinting%2001.png",
		label: "Custom Pre Rolled Cones Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632951542Eyeshadow-Boxes-Sire%20Printing%2001.png ",
		label: " Eyeshadow Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1599825963/hexagon-box.jpg",
		label: " Hexagon Box",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627832313Medical-Cannabis-Boxes-SirePrinting%2001.png",
		label: "Medical Cannabis Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632950784EyeLash%20Boxes%20Sire%20Printing%2001.png",
		label: " Eyelash Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1599826047/seal-end-auto-bottom-box.jpg ",
		label: " Seal End Auto Bottom Box",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632950613eye-brow-pencil-boxes-04.png",
		label: "Eyebrow Pencil Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1599826131/gable-box.jpg ",
		label: "Gable Box ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1599826214/paper-brief-case.jpg",
		label: "Paper Brief Case ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602285970/cbd-isolate-boxes.png",
		label: " CBD Isolate Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600705453/sleeve-and-tray-box.jpg",
		label: " Sleeve & Tray Box",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1640142509CBD%20Edible%20Product%20Packaging%20Boxes%20Sireprinting%2001.png",
		label: "CBD Edibles Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632874791Bronzer-Boxes-Sire-Printing%2001.png ",
		label: "Bronzer Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600707115/4%20Corner%20Box.jpg",
		label: " 4 Corner Box",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632876553Cannabis-Flower-Boxes-Sire-Printing-03.png",
		label: " Cannabis Flower Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1666574001beauty-mask-boxes-sire-printing-01.png",
		label: " Beauty Face Mask Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600707639/6%20Corner%20Box.jpg",
		label: "6 Corner Box ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776386CBD-Bath-Bomb-Boxes-01.png",
		label: "CBD Bath Bomb Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600708221/Bookend%20Boxes.jpg",
		label: " Bookend Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632874425Beard%20Oil%20Boxes%20Sire%20Printing%2001.png",
		label: " Beard Oil Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627830898CBD-Concentrate-Boxes-SirePrinting%2001.png",
		label: " CBD Concentrate Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600708742/Double%20Wall%20Lid.jpg",
		label: " Double Wall Lid",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632954123Lip-Balm-Boxes-Sire%20Printing%2001.png ",
		label: "Lip Balm Boxes ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627776596CBD-Extract-Boxes-03.png",
		label: "CBD Extract Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600709468/Double%20Wall%20Tray.jpg",
		label: "Double Wall Tray ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600198647/nail-polish-boxes.png ",
		label: "Nail Polish Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600710733/Fence%20Partitions.jpg",
		label: " Fence Partitions",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627779425CBD-Essential-Oil-Boxes-01.png ",
		label: "CBD Essential Oil Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600197196/foundation-boxes.png ",
		label: "Foundation Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600711109/Five%20Panel%20Hanger%20Box.jpg ",
		label: " Five Panel Hanger Box",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627830624Child-Resistant-Boxes-SirePrinting%2001.png ",
		label: "Child Resistant Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600733840/mascara-boxes.png",
		label: " Mascara Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600711389/Foot%20Lock%20Tray.jpg ",
		label: " Foot Lock Tray",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627830764Custom-Cannabis-Boxes-SirePrinting%2001.png",
		label: " Custom Cannabis Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600714643/Gravity%20Feed%20Dispenser%20Box.jpg",
		label: "Gravity Feed Dispenser Box ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632953042Hair%20Extension%20Boxes%20Sire%20Printing%2001.png",
		label: " Hair Extension Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627830290CBD-Roll-On-Boxes-SirePrinting%2001.png",
		label: "CBD Roll On Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600715245/Half%20Slotted%20Container.jpg",
		label: " Half Slotted Container",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1601945322/e-liquid-boxes.png",
		label: " E Liquid Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632951680Face-Serum-Boxes-Sire%20Printing%2001.png",
		label: " Face Serum Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600716610/Handle%20Pillow%20Box.jpg ",
		label: " Handle Pillow Box Style",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632950451Essential-Oil-Boxes-01.png ",
		label: " Essential Oil Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600717619/Perforated%20Dispenser%20Box.jpg",
		label: "Perforated Dispenser Style Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1602287217/cbd-lollipop-boxes.png",
		label: " CBD Lollipop Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600718122/Pillow%20Box.jpg",
		label: " Pillow Style Boxes",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632877609CBD-Gum-Boxes-SirePrinting-02.png",
		label: "CBD Gum Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600718580/Pillow%20Box%20Envelope.jpg",
		label: " Pillow Box Envelope Style Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640205840CBD%20Lotion%20Packaging%20Boxes%20SirePrinting01.png ",
		label: "CBD Lotion Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600719934/Punch%20Partitions.jpg ",
		label: " Punch Partitions",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1602289803/cbd-pain-cream-boxes.png ",
		label: "CBD Pain Cream Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600720596/Regular%20Slotted%20Container.jpg",
		label: "Regular Slotted Container ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600723551/Seal%20End%20Boxes.jpg",
		label: "Seal End Style Boxes ",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600727486/Self%20Lock%20Cake%20Boxes.jpg",
		label: " Self Lock Cake Boxes",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1640139160CBD%20Chocolate%20Boxes%20Sire%20Printing%2001.png ",
		label: " CBD Chocolate Boxes",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1600727907/Six%20Pack%20Bottle%20Carrier.jpg",
		label: "Six Pack Bottle Carrier ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1602897966/cbd-pills-boxes.png ",
		label: " CBD Pills Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600728275/Straight%20Tuck%20Box.jpg ",
		label: "Straight Tuck Box ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627774764CBD-Serum-Boxes-Sire-Printing-01.png ",
		label: "CBD Serum Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600728847/Two%20Piece%20Box.jpg ",
		label: " Two Piece Box",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1632927910CBD-Sleeves-Packaging-Sire-Printing-01.png",
		label: " CBD Sleeves Packaging",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600729288/Tuck%20and%20Display%20Box.jpg ",
		label: " Tuck and Display Box",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1632878086CBD-Salve-Boxes-Sire-Printing-04.png ",
		label: " Custom CBD Salve Boxes",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600729591/Tuck%20and%20Tongue%20Box.jpg ",
		label: "Tuck and Tongue Box ",
	},
	{
		imageUrl:
			" https://s3.amazonaws.com/sireprinting.com/products/1627775036cbd-syringe-boxes-sire-printing-03.png",
		label: "CBD Syringes Boxes ",
	},
	{
		imageUrl:
			"https://res.cloudinary.com/sireprinting/image/upload/v1600729880/Tuck%20Top%20Auto%20Bottom%20Box.jpg ",
		label: " Tuck Top Auto Bottom Box",
	},
	{
		imageUrl:
			" https://res.cloudinary.com/sireprinting/image/upload/v1623463877/cbd-topical-boxes.png",
		label: "CBD Topical Boxes ",
	},
	{
		imageUrl:
			"https://s3.amazonaws.com/sireprinting.com/products/1627778736CBD-Candy-Boxes-SirePrinting-01.png ",
		label: "CBD Candy Boxes ",
	},
        {
                imageUrl:
                        " https://res.cloudinary.com/sireprinting/image/upload/v1600730175/Tuck%20Top%20Snap%20Bottom%20Box.jpg",
                label: " Tuck Top Snap Bottom Box"
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627778644Cannabis-Perfume-Boxes-SirePrinting-01.png ",
                label: " Cannabis Perfume Boxes"
        },
        {
                imageUrl:
                        "https://res.cloudinary.com/sireprinting/image/upload/v1600714203/Four%20Pack%20Bottle%20Carrier.jpg ",
                label: " Four Pack Bottle Carrier"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627778989CBD-Muscle-Rub%20Boxes%2001.png",
                label: " CBD Muscle Rub Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627831048CBD%20Kush%20Cannabis%20Boxes%20SirePrinting%2001.png",
                label: "CBD Kush Cannabis Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1628213921Hemp-Soap-Boxes-SirePrinting%2001.png",
                label: "Hemp Soap Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627836225Vape-Juice-Bottle-Boxes-SirePrinting%2001.png",
                label: "Vape Juice Bottle Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640226703Raw%20CBD%20Oil%20Box%20Packaging%20Sire%20Printing%2001.png",
                label: "Raw CBD Oil Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627779934Custom-Vape-Boxes-SirePrinting%2001.png",
                label: " Custom Vape Boxes"
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627836715Pod-Vape-Boxes-SirePrinting%2001.png ",
                label: "Pod Vape Boxes "
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627836895Vape-Accessories-Boxes-SirePrinting%2001.png ",
                label: "Vape Accessories Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627836476Vape-Pen-Boxes-SirePrinting%2001.png",
                label: " Vape Pen Boxes"
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640141713CBD%20Dab%20Wax%20Packaging%20Boxes%20Sireprinting%2001.png ",
                label: "CBD Dab Wax Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640222592Vape%20Charger%20Packaging%20SirePrinting%2001.png",
                label: "Vape Battery Charger Boxes "
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1632876405Hemp%20Candle%20Boxes%20Sire%20Printing%2001.png ",
                label: "Hemp Candle Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640207992Hemp%20Cereal%20Packaging%20Boxes%20Sire%20Printing%2003.png",
                label: "Custom Hemp Cereal Boxes "
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640217782Hemp%20Cookie%20Boxes%20Sire%20Printing%2001.png ",
                label: " Hemp Cookie Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640219681Hemp%20Protien%20Bar%20Display%20Boxes%20Sire%20Printing%2001.png",
                label: "Hemp Protein Bar Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1640218601Hemp%20Flour%20Packaging%20Boxes%20SirePrinting%2001.png",
                label: " Custom Hemp Flour Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632954809CBD-Supplement-Boxes-Sire-Printing-01.png",
                label: "CBD Supplement Boxes "
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627835289Hemp-Pre-Rolled-Boxes-SirePrinting%2001.png",
                label: "Hemp Pre Rolled Boxes "
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1640207162DIe%20Cut%20CBD%20Boxes%20SirePrinting%2001.png ",
                label: " Die Cut CBD Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627831925Hemp-Tea-Boxes-SirePrinting%2001.png",
                label: " Hemp Tea Boxes"
        },
        {
                imageUrl:
                        "https://s3.amazonaws.com/sireprinting.com/products/1627831230Custom-Hemp-Boxes-SirePrinting%2001.png ",
                label: " Custom Hemp Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1632877371CBD%20beard%20Oil%20Boxes%20Sire%20Printing%2002.png",
                label: " CBD Beard Oil Boxes"
        },
        {
                imageUrl:
                        " https://s3.amazonaws.com/sireprinting.com/products/1627775703CBD-pet-tincture-boxes-Sire-Printing.png",
                label: " CBD Pet Products Boxes "
        },
      
];

const pageTitle = "Custom Packaging Boxes"
const homeLink = "/"
const banner = "https://s3.amazonaws.com/sireprinting.com/categories/1669766247Custom%20Packaging%20Boxes%20Sire%20Printing.jpg";
const linkLabel = "Home";
const Label = "Custom Packaging Boxes";

const Image = ({pageTitle}) => {
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
									<h1 className="font-medium py-2 px-3 lg:py-4  text-[0.6rem] text-black text-sm  bg-amber-500">
										{v.label}
									</h1>
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


const CustomPackagingBoxes = () => {
	const siteTitle = 'Custom CBD Boxes with Logo | CBD Packaging Wholesale | Sire Printing';

	TabTitle(siteTitle);

	return (
		<>
			<Layout>
				<div className="  bg-white ">
					<img src={banner} alt="" />
					<h1 className="bg-slate-200 h-12 flex items-center"><Link to={homeLink} className=" mx-7 font-semibold">{linkLabel}</Link><span className="text-xs">&raquo;&nbsp;&nbsp;</span><span className="text-amber-500 font-semibold"><em>{Label}</em></span></h1>
					<div className="py-10 lg:flex md:flex relative">
						<Image pageTitle={pageTitle} />
						<Quote />
						
					</div>
					<div className="text-4xl mx-8 my-4">Custom Packaging Boxes</div>
                                        <div className="pb-10 mx-8">Custom Packaging Boxes</div>
				</div>
			</Layout>
		</>
	);
};
export default CustomPackagingBoxes;














