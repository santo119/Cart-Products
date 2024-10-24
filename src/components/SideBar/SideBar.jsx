import About from "../About/About";
import Cart from "../Cart/Cart";



// eslint-disable-next-line react/prop-types
const SideBar = ({handlerIsActive, isActive, purchase,handleDeleteBtn, }) => {

    

    return (
        <div className="md:w-1/3 border-2 p-3 rounded-xl">
           <h1 className="text-3xl text-center">SideBar</h1>
           <hr />
           <div className="flex m-4">
                <button onClick={() => handlerIsActive("cart")} className={`${isActive.cart? 'bg-red-900 text-white rounded-lg px-4 py-3': 'btn'}`}>Cart</button>
                <button onClick={() => handlerIsActive("about")} className={`${isActive.cart? 'btn': 'bg-red-900 text-white rounded-lg px-4 py-3'}`}>About</button>
           </div>
           {isActive.cart?<Cart purchase ={purchase}
           handleDeleteBtn = {handleDeleteBtn}></Cart>: <About></About>}
        </div>
    );
};

export default SideBar;