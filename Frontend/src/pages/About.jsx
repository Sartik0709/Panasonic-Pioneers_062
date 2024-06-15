 import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <h1>About PETPAL</h1>
        <p>
          Founded in 2019, <a href="/" target="_blank" rel="noopener noreferrer">PETPAL</a> is the India’s largest network of 5-star pet care service providers.
        </p>
        <p>
          Whether you need in-home pet grooming, pet boarding, pet training, dog walking, pet insurance, pet relocation, or vet on call, PETPAL connects pet parents with pet care heroes who’ll treat their pet like family.
        </p>
        <p>
          We understand your pet is family. And you can trust us to keep your pet happy, healthy, and sweet as ever.
        </p>
        <p>
          But it’s not just about pet love. PETPAL is also committed to making pet care safe, easy, and affordable so that everyone can experience the unconditional love of a pet. Whatever you and your furr babies are into, we’re into it too. And we’ve got your back. Anytime. Anywhere.
        </p>
        <p>
        PETPAL donates a portion of every service to Pet NGO’s & Rescue shelters through this program. We also provide meals to shelter dogs in India.
        </p>
      </div>
      <div className="about-stats">
        <h2>Millions of services booked. Thousands of wagging tails.</h2>
        <div className="stats-grid">
          <div className="stats-item">
            <h3>35+</h3>
            <p>Cities</p>
          </div>
          <div className="stats-item">
            <h3>1500+</h3>
            <p>PetCare Heroes</p>
          </div>
          <div className="stats-item">
            <h3>96%</h3>
            <p>5-star reviews</p>
          </div>
        </div>
        <h2>5-Star Petcare Heroes in your neighborhood</h2>
        <ul className="features">
          <li>Background or identity checks</li>
          <li>Reservation protection</li>
          <li>Ongoing service education</li>
          <li>Trust and safety experts</li>
          <li>PETPAL Guarantee</li>
          <li>24/7 support</li>
          <li>Verified reviews</li>
        </ul>
      </div>
   
    </div>
    
  );
}

export default About;
