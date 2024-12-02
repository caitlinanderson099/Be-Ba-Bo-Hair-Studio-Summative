import ProductList from '../components/ProductList';
import PageHeader from '../components/PageHeader';
import { useState } from 'react';
import axios from 'axios';
import Seo from '../components/Seo';

const formEndPoint = import.meta.env.VITE_APP_WP_API_LOYALTY_FORM_ENDPOINT;


const Shop = () => {

    const [loading, setLoading] = useState(true); // State for loading


    return (
        <>
         {/* SEO */}
         <Seo title="Our Shop - Be Ba Bo" description="This is shop page for Be Ba Bo Hair Studio" />
        <div className='shop-page'>
            <PageHeader title='Our Shop' image_url={'/shop-bg.jpg'}/>
            <div className='shop-content'>
                <h2 className='page-title'> Shop All Products </h2>
                {/* Product Grid */}
                <div id="productCont">
                    <ProductList/>
                </div>
            </div>   
        </div>
        </>
    );
};

export default Shop;