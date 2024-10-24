import { useEffect, useState } from "react";


const AllProducts = ({handlePurchaseProduct}) => {


    const [products,setProducts] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])

    return (
        <div className="md:w-2/3 ">
            <h1 className="text-3xl mt-4">AllProducts: {products.length}</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mr-4 text-center  items-center justify-center ">
                {
                    products.map((product) => 
                        <div key={product.id} className="card bg-base-100 rounded-xl border-2">
                            <figure className="px-8 pt-8 items-center justify-center">
                                <img className="md:h-52 w-[200px] rounded-xl ml-12"
                                src={product.image}
                                alt="Shoes" />
                            </figure>
                            <div className="card-body">
                                <h2 className="card-title text-xl p-3">{product.title}</h2>
                                <p> Price: {product.price} $</p>
                                <div className="card-actions justify-end mt-4 mb-3">
                                <button onClick={() => handlePurchaseProduct(product)} className="btn bg-[#7A82AB] p-3 rounded-xl">Add Purchase</button>
                                </div>
                            </div>
                            </div>
                    )}
            </div>
            
        </div>
    );
};

export default AllProducts;