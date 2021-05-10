const { useState } = React;

const image1 = "../images/IMG_1353.JPG";
const image2 = "../images/IMG_1354.JPG";
const image3 = "../images/IMG_1350.JPG";
const image4 = "../images/YJPF1433.jpg";
const image5 = "../images/EZNS4431.jpg";
const image6 = "../images/IMG_4754_edit.jpg";
const image7 = "../images/IMG_4828.JPG";
const image8 = "../images/IMG_4833.JPG";
const image9 = "../images/IMG_1425.JPG";
const image10 = "../images/IMG_4842_edit.jpg";
const image11 = "../images/KXCR3299_edit.jpg";
const image12 = "../images/IMG_1351_edit.jpg";
const image13 = "../images/IMG_1352.JPG";
const image14 = "../images/IMG_4734.JPG";
const image15 = "../images/jump_log_cover_rotate.jpg";
const image16 = "../images/20190806_151303.jpg";
const image17 = "../images/jump_log_edit.jpg";
const image18 = "../images/airborne_cert_edit.jpg";
const image19 = "../images/20190806_204741.jpg";
const image20 = "../images/DBSL_cert_edit.jpg";
const image21 = "../images/IDIS_cert_edit.jpg";

// image array
const images = [
    image1, image2, image3, image4, image5, image6, image7, 
    image8, image9, image10, image11, image12, image13, image14, 
    image15, image16, image17, image18, image19, image20, image21
];

const imageCards = images.map((image) => (
    <img className="image-card" src={image} />
));
const [imageToShow, setImageToShow] = useState("");
const [lightboxDisplay, setLightBoxDisplay] = useState(false);