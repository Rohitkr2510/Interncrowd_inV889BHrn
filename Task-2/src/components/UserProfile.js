import classes from './UserProfile.module.css';
import { ReactFragment } from 'react';
const UserProfile = () => {
  return (
    <div>
      
    <section id="about">
      <h2>About Us</h2>
      <p>We are a web development company that specializes in creating high-quality and user-friendly websites for our clients. Our team of experts have years of experience in web development and design, and we use the latest technologies to bring your ideas to life. </p>
    </section>
    <section id="services">
      <h2>Our Services</h2>
      <ul>
        <li>Web Design</li>
        <li>Web Development</li>
        <li>E-commerce Development</li>
        <li>Search Engine Optimization</li>
      </ul>
    </section>
    <section id="portfolio">
      <h2>Our Portfolio</h2>
      <div class="portfolio-item">
        <img src="1.jpg" alt="Website 1"></img>
        <h3>Website 1</h3>
        <p>A brief description of the website</p>
      </div>
      <div class="portfolio-item">
        <img src="2.jpg" alt="Website 2"></img>
        <h3>Website 2</h3>
        <p>A brief description of the website</p>
      </div>
      <div class="portfolio-item">
        <img src="./3.jpg" alt="Website 3"></img>
        <h3>Website 3</h3>
        <p>A brief description of the website</p>
      </div>
    </section>
    <section id="contact">
      <h2>Get in Touch</h2>
      <form>
        <label>Name:</label>
        <input type="text" name="name" required></input>
        <label>Email:</label>
        <input type="email" name="email" required></input>
        <label>Message:</label>
        <textarea name="message" required></textarea>
        <input type="submit" value="Submit"></input>
      </form>
    </section>
    <footer>
      <p>Copyright Web Development Company &copy; 2023</p>
    </footer>
    </div>
    
  );
};

export default UserProfile;
