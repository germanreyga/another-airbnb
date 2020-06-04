import React from "react";
import DetailPhotos from "./DetailPhotos";
import DetailInfo from "./DetailInfo";

function StayDetail() {
  const property = {
    _id: 0,
    title: "Chez Amie",
    type: "Entire apartment",
    description: [
      "4 guests",
      "1 bedroom",
      "3 beds",
      "1 bath",
      "Wifi",
      "Washer",
    ],
    imgsUrls: [
      "https://shorttermrentalz.com/wp-content/uploads/2019/06/Airbnb-Luxe-1024x683.jpg",
      "https://cdn.thespaces.com/wp-content/uploads/2020/04/Airbnb-press-shot-Japanese-rental-3.jpg",
      "https://techcrunch.com/wp-content/uploads/2019/03/Screenshot-2019-03-21-at-10.13.20.png?w=730&crop=1",
      "https://www.wisebread.com/files/fruganomics/imagecache/605x340/blog-images/vacation_home_pool_509553708.jpg",
      "https://shorttermrentalz.com/wp-content/uploads/2019/06/Airbnb-Luxe-1024x683.jpg",
    ],
    price: 14855,
    rating: 5.0,
    reviews: 5,
  };

  return (
    <>
      <DetailPhotos
        photos={property.imgsUrls}
        title={property.title}
        rating={property.rating}
        reviews={property.reviews}
      />
      <DetailInfo type={property.type} description={property.description} />
    </>
  );
}

export default StayDetail;
