


const Navbar = ({purchase,price}) => {
  
    return (
        <div className="navbar items-center justify-center px-10 bg-base-100 flex">
        <div className="">
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="justify-around space-x-8 m-10 flex">
            <h3>Home</h3>
            <h3>Products</h3>
            <h3>Cart: {purchase.length}</h3>
            <h3>{price} $</h3>
        </div>
      </div>
        
    );
};

export default Navbar;