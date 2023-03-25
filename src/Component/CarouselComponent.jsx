import Carousel from 'react-bootstrap/Carousel';
import CarouselImg1 from "../Images/CarouselImg1.png"
import CarouselImg2 from "../Images/CarouselImg2.png"
import CarouselImg3 from "../Images/CarouselImg3.png"
import CarouselImg4 from "../Images/CarouselImg4.png"
function CarouselComponent() {
  return (
    <Carousel fade wrap="true">
      <Carousel.Item interval={1500}>
        <img
          style={{height: "640px"}}
          className="d-block w-100"
          src={CarouselImg1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Our Impact</h3>
          <p>90% of our Grade 10 Students graduated successfully from school in 2022. Slowly but surely, change is happening</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          style={{height: "640px"}}
          className="d-block w-100"
          src={CarouselImg2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>The Fellowship</h3>
          <p>Become part of a movement of 4000+ Fellows across India and countless more globally who will be your lifelong partners in this work.</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          style={{height: "640px"}}
          className="d-block w-100"
          src={CarouselImg3}
          alt="Third slide"
        />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          style={{height: "640px"}}
          className="d-block w-100"
          src={CarouselImg4}
          alt="Second slide"
        />
      </Carousel.Item>

    </Carousel>
  );
}

export default CarouselComponent;