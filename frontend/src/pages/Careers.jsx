import React from 'react';
import '../Styles/CareersPage.css';



const CareersPage = () => {
  return (
    <div className="careers-page">
      {/* Hero Section (from Lattice design) */}
      <section className="hero-section">
        <div className="hero-content">
          <h1>Help build engaged, high-performing teams — including ours</h1>
          <p>
            Lattice is the #1 AI-enhanced people platform that turns managers into leaders, 
            employees into high-performers, and companies into the best places to work.
          </p>
          <button className="see-positions-btn">See open positions</button>
        </div>
        {/* <div className="hero-image">
          <img src={img1} alt="Lattice office" />
        </div> */}
      </section>

       {/* Our Daily Values Section */}
       <section className="values-section">
        <span className='text-6xl flex items-center justify-center '>Our daily values</span>
        <p className="values-subtitle mt-10">We’re looking for people who align with our value framework.</p>
        <div className="values-grid  mt-10 ">
          <div className="value-card">
            <h3>How we see each other</h3>
            <p>
              Ship, shipmate, self<br />
              We are one team, working towards a common goal.
            </p>
          </div>
          <div className="value-card">
            <h3>How we work</h3>
            <p>
              Chop wood, carry water<br />
              The best work is done when we fall in love with the process of becoming great.
            </p>
          </div>
          <div className="value-card">
            <h3>How we see ourselves</h3>
            <p>
              Clear eyes<br />
              We approach our work, colleagues, and customers with clarity and honesty.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We're a passionate team dedicated to transforming how companies engage 
          and grow their employees. Join us in creating innovative solutions 
          that make work meaningful. We're a passionate team dedicated to transforming how companies engage 
          and grow their employees. Join us in creating innovative solutions 
          that make work meaningful.We're a passionate team dedicated to transforming how companies engage 
          and grow their employees. Join us in creating innovative solutions 
          that make work meaningful.
        </p>
      </section>

      {/* Auto-scrolling Image Carousel Section */}
      {/* <section className="carousel-section">
        <div className="carousel-container">
          <div className="carousel-track">
            <img src={img1} alt="Team 1" className="carousel-item item1" />
            <img src={img1} alt="Team 2" className="carousel-item item2" />
            <img src={img1} alt="Team 3" className="carousel-item item3" />
            <img src={img1} alt="Team 4" className="carousel-item item4" />
            <img src={img1} alt="Team 5" className="carousel-item item5" />
            <img src={img1} alt="Team 6" className="carousel-item item6" />
            <img src={img1} alt="Team 7" className="carousel-item item7" />
            <img src={img1} alt="Team 8" className="carousel-item item8" />
            <img src={img1} alt="Team 9" className="carousel-item item1" />
            <img src={img1} alt="Team 10" className="carousel-item item2" />
            <img src={img1} alt="Team 11" className="carousel-item item3" />
            <img src={img1} alt="Team 12" className="carousel-item item4" />
            <img src={img1} alt="Team 13" className="carousel-item item5" />
            <img src={img1} alt="Team 14" className="carousel-item item6" />
            <img src={img1} alt="Team 15" className="carousel-item item7" />
            <img src={img1} alt="Team 16" className="carousel-item item8" />
          </div>
        </div>
      </section> */}

     

      <div className=" flex justify-between mt-30 ">
      

        {/* Benefits Section */}
      <section className="benefits-section m-50  -mt-20">
        <h2>Why Work With Us</h2>

       
        {/* <ul>
          <li>Competitive compensation and equity</li>
          <li>Flexible remote work options</li>
          <li>Comprehensive health benefits</li>
          <li>Continuous learning opportunities</li>
        </ul> */}


      </section>

   



{/* Job Application Form Section */}
<div className=" h-25 w-1500 absolute bg-[#555] ml-250 pt-200 mt-50 rounded-full     "></div>
<section className="job-application-section ">
  <h2>Job Application Form</h2>
  <p>Please Fill Out the Form Below to Submit Your Job Application!</p>

  <form className="job-application-form">
    <div className="form-group">
      <label>Name <span>*</span></label>
      <div className="name-fields">
        <input type="text" placeholder="First Name" required />
        <input type="text" placeholder="Last Name" required />
      </div>
    </div>

    <div className="form-group">
      <label>Email <span>*</span></label>
      <input type="email" placeholder="ex: myname@example.com" required />
    </div>

    <div className="form-group">
      <label>Phone Number <span>*</span></label>
      <input type="tel" placeholder="(+91) 00000-00000" required />
    </div>

    <div className="form-group">
      <label>Applied Position</label>
      <input type="text" placeholder="Applied Position" />
    </div>

    <div className="form-group">
      <label>Earliest Possible Start Date</label>
      <input type="date" />
    </div>

    <div className="form-group">
      <label>Upload Resume <span>*</span></label>
      <div className="file-upload">
        <input type="file" required />
        <p>Upload a File</p>
        <span>Drag and drop files here</span>
      </div>
    </div>

    <button type="submit" className="apply-btn">Apply</button>
  </form>
</section>
      </div>



   {/* Reminder Section */}
   <section className="reminder-section !-mt-120">
  <div className="reminder-box">
    <span className="reminder-icon">⚠️</span>
    <div className="reminder-content">
      <h3>Reminder:</h3>
      <p>
        Job application and offer scams are an ongoing and cross-industry issue. 
        Always ensure communications or offers are from official sources:
      </p>
      <ul>
        <li>Lattice email addresses</li>
        <li>Greenhouse recruiting</li>
        <li>ModernLoop scheduling</li>
      </ul>
      <p>Stay vigilant and contact us directly if you have any doubts or questions.</p>
    </div>
  </div>
</section>



      {/* Footer */}
      <footer className="careers-footer">
        <p>Ready to make an impact? Join us today!</p>
      </footer>
    </div>
  );
};

export default CareersPage;
