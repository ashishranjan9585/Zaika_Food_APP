import {Link} from "react-router-dom";
//import {useContext} from "../utils/useOnline";
import { useContext } from "react";
import { useSelector } from "react-redux";
import UserContext from "../utils/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  //const isOnline = UseOnline();
  const myInfo = useContext(UserContext)
  const cartItems = useSelector(store => store.cart.items)
  return (
    <div className="flex justify-between items-center px-6 md:px-8 py-2 shadow bg-black  text-white">
      <Link to = "/">
        <img className="h-12" data-testid='logo' src="https://content.jdmagicbox.com/comp/patna/d6/0612px612.x612.171014143712.n2d6/catalogue/zaika-kankarbagh-patna-restaurants-xsfgv.jpg?clr=#442222" />
        </Link>
      <ul className="flex gap-6 md:gap-12 text-sm font-medium">
        <li><Link to = "/" className= "hover:text-red-300 transition-all duration-300 ease-in-out">Home</Link></li>
        <li><Link to = "/about" className= "hover:text-red-300 transition-all duration-300 ease-in-out">About</Link></li>
        <li><Link to = "/contact" className= "hover:text-red-300 transition-all duration-300 ease-in-out">Contact</Link></li>
        <li><Link to = "/cart" className= "relative"><FontAwesomeIcon icon={faCartShopping} />
      </Link></li>
      </ul>
       {/* <div className="">{isOnline ? '🟢' : '🔴'}</div> */}
            {/* <span>{myInfo.name}</span> */}
    </div>
  );
};
export default Header;