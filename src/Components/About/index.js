import Carousel from 'react-bootstrap/Carousel';
import './index.css'

function About() {
  return (
    <Carousel data-bs-theme="dark" className='about-container'>
      <Carousel.Item>
      <Carousel.Caption>
        <div className='about-section'>
          <h1>About our restaurent</h1>
          <p>🌟 Indulge in Culinary Excellence at AI CHEF MASTER 🌟</p>
          <p>Welcome to AI CHEF MASTER, where every moment is a celebration of flavor, ambiance, and impeccable service. Step into a world where culinary artistry meets warm hospitality, creating an experience that transcends the ordinary.</p>
          </div>
        </Carousel.Caption>
        
        <img
          className="d-block w-100 image"
          src="https://img.freepik.com/free-photo/big-event-hall-interior-restaurant_114579-2078.jpg?w=826&t=st=1706703498~exp=1706704098~hmac=021fd9846e5f684e98e2cf179d2054122b2c99892c6ba6a9042fadf716601d29"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://img.freepik.com/premium-photo/popular-val-s-restaurant-freret-street-shade-palm-tree-during-summer-day_724662-2034.jpg?w=740"
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className='about-section'>
          <h1>Our Dishes </h1>
          <p>Indulge in the rich flavors of our Grilled Atlantic Salmon Supreme, a culinary masterpiece inspired by coastal cuisine. Delight in the succulence of perfectly grilled salmon, seasoned with a harmonious blend of citrus-infused herbs. Served atop a bed of quinoa pilaf and drizzled with our house-made lemon dill sauce, this dish offers a symphony of flavors that transport you to the seaside. A healthy and delectable choice for seafood enthusiasts.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://img.freepik.com/premium-photo/interior-shot-stylish-restaurant_88135-5663.jpg?w=996"
          alt="Third slide"
        />
        <Carousel.Caption>
          <div  className='about-section'>
          <h1 >our interior</h1>
          <p>
          🌟 Step into Elegance at AI CHEF MASTER 🌟</p>
          <p>Welcome to AI CHEF MASTER, where sophistication meets comfort in a harmonious dance of design and ambiance. Our thoughtfully crafted interior is a testament to our commitment to creating a dining space that captivates the senses.</p>
          <p>💼 Versatile Spaces:
offers versatile spaces for private events, celebrations, and corporate gatherings. Our flexible layout can be tailored to suit your specific needs, ensuring every occasion is memorable.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default About;