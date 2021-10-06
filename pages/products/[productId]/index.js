import React from 'react';
import { useRouter } from 'next/router';

const ProductId = () => {

    const router=useRouter()
    const productId = router.query.productId;
    return (
        <div>

            <h1>Detail about product {productId}</h1>
            
        </div>
    );
};

export default ProductId;