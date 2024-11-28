import ProductList from '../components/ProductList';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import axios from 'axios';

const formEndPoint = import.meta.env.VITE_APP_WP_API_LOYALTY_FORM_ENDPOINT;


const Shop = () => {

    const [loading, setLoading] = useState(true); // State for loading


    const LoyaltyForm = () => {
        const [submitted, setSubmitted] = useState(false);
        const [error, setError] = useState(false);
        const [name, setName] = useState('');
        const [email, setEmail] = useState('');

        const handleSubmit = (event) => {
            event.preventDefault();
            const testForm = new FormData();
                testForm.append('your-name', name);
                testForm.append('your-email', email);

            axios.post(formEndPoint, testForm, {
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                }
            })

            .then(function (response) {
                console.log(response);
                setSubmitted(true);
              })
              .catch(function (error) {
                console.log(error);
                setError(true);
              });
        }
        if (submitted) {
            return (
              <div className='success-message'>
                <h3>Thank you for signing up to our loyalty programme!</h3>
                <p>A loyalty card will be sent to your provided email address:)</p>
              </div>
            );
          }
        
          if (error) {
            return (
              <div className='error-message'>
                <h3>Error! Couldn't sign you up</h3>
                <p>Please try again later:(</p>
              </div>
            )
          }

          return (
            <form 
                onSubmit={handleSubmit}
                method="POST"
            >
                <div className='form-inputs'>
                    {/* Full Name */}
                    <div className='form-input'>
                        <label htmlFor="name">Full Name:</label>
                        <input 
                            type="text" 
                            name='name'
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            required
                        />
                    </div>

                    {/* Email Address */}
                    <div className='form-input'>
                        <label htmlFor="email">Email Address:</label>
                        <input 
                            type="email" 
                            name="email"
                            onChange={(event) => setEmail(event.target.value)}
                            value={email}
                            required
                        />
                    </div>
                    <button
                        className='regular-button'
                        type='submit'
                    >
                        Sign Up
                    </button>
                </div>
            </form>
            )
    };

    return (
        <>
        <div className='shop-page'>
            <PageHeader title='Our Shop' image_url={'/shop-bg.jpg'}/>
            <div className='shop-content'>
                <h2 className='page-title'> Shop All Products </h2>
                {/* Product Grid */}
                <div id="productCont">
                    <ProductList/>
                </div>

                {/* Loyalty Section */}
                <div className='loyalty-section'>
                    <h2 className='page-title'> Get 10% Off Your 10th Appointment! </h2>
                    <p>We value your trust in our salon, and to show our appreciation, we’re thrilled to offer 10% off your 10th appointment! Every visit brings you closer to this special reward.
                    Book your next appointment and let us pamper you while you earn your way to a well-deserved discount! Because great hair deserves great perks.</p>
                    <div className='loyalty-form'>
                        <LoyaltyForm/>
                    </div>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Shop;