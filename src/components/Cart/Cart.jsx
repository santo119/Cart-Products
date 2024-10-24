

const Cart = ({purchase, handleDeleteBtn}) => {

    
    return (
        <div>
            <h1 className="text-3xl p-3 text-center border-b border-t-2">Purchase Products: {purchase.length}</h1>

            <div className="gap-6 m-4 p-3">
                
                    <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Prices</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                        {
                             purchase.map((product,index) =>
                                <tr key={index} className=" hover">
                             <th>{index + 1}</th>
                             <td><img className="w-[40px] rounded-full" src={product.image} alt="" /></td>
                             <td className="text-xs">Quality Control Specialist</td>
                             <td className="pl-5">{product.price}$</td>
                             <td>
                                <div className="ml-3">
                                    <button onClick={() => handleDeleteBtn(product.id)} className="bg-rose-900 p-2 rounded-xl text-white">Delete</button>
                                </div>
                             </td>
                           </tr>
                            )}
                       
                    </tbody>
                    </table>
                   
               
            </div>
        </div>
    );
};

export default Cart;