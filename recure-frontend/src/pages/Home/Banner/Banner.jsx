import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Banner = () => {
  return (
    <Carousel>
      <div className="w-full">
        <div className="w-full bg-gradient-to-r from-black/60 absolute " />
        <img className="w-full rounded-xl" src="/images/banner1.jpg" />
      </div>
      <div>
        <div className="w-full bg-gradient-to-r from-black/60 absolute " />
        <img className="w-full rounded-xl" src="/images/banner2.jpg" />
      </div>
      <div>
        <div className="bg-gradient-to-r from-black/60  absolute " />
        <img className="w-full rounded-xl" src="/images/banner.jpg" />
      </div>
    </Carousel>
  );
};

export default Banner;
