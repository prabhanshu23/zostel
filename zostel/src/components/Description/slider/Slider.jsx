import { Carousel } from "react-responsive-carousel";

export const Slider = () => {
  return (
    <>
      <Carousel autoPlay={false} showThumbs={false} infiniteLoop={true} >
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://img.cdn.zo.xyz/zostel/gallery/images/637ioYdjRjuxfmFycddzHA/deluxe-private-room-20201112102620.jpg?w=1280"
          />
        </div>
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://img.cdn.zo.xyz/zostel/gallery/images/nt3HPg1pQc-ltpYbj9fZWA/deluxe-private-room-20210315060448.jpg?w=1280"
          />
        </div>
        <div>
          <img
          style={{height:"240px",borderRadius:"8px 0px 0px 8px"}}
            alt=""
            src="https://img.cdn.zo.xyz/zostel/gallery/images/5VIuax7JQqi87YGZ0QbvxQ/deluxe-private-room-20210315060457.jpg?w=1280"
          />
        </div>
      </Carousel>
    </>
  );
};
