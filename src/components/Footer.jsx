
const Footer = () => {
  return (
    <footer>
      <div className='logo-socials-cont'>
      <div className='logo-social-group'>
        <div className='logo-location'>
          <img src="/be_ba_bo_logo.png" alt="" />
          <div className='sub-location'>
            <h3>Head Office</h3>
            <p>Be Ba Bo Hair Studio © 2024. 123 Devon Street East, Central, New Plymouth 4310</p>
          </div>
        </div>
        <div className='social-links'>
          <a href="">bebabo.hairstudio@xtra.co.nz</a>
          <a href="">06 758 2341</a>
        </div>
      </div>

      <div className='socials-sitemap'>
        <div className='socials-group'>
          <h4> Socials </h4>
          <div>
           <p>Facebook</p>
           <p>Twitter</p>
           <p>LinkedIn</p>
           <p>Instagram</p>
          </div>
        </div>
        <div className='sitemap'>
          <h4> Sitemap </h4>
          <div>
            <p>Home</p>
            <p>About Us</p>
            <p>Our Services</p>
            <p>Contact Us</p>
            <p>Our Shop</p>
          </div>
        </div>
      </div>
      </div>

      <p className='copyright'>© 2024 Be Ba Bo Hair Studio All rights reserved.</p>
     
    </footer>
  );
};

export default Footer
