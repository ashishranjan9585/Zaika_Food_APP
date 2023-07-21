import {useState , useEffect} from "react";
import RestaurantCard from "./RestaurantCard";
import {Link} from "react-router-dom";
import {filterData} from "../utils/helpers";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";
import NotFound from "./NotFound";

const Body = ({user}) => {
  const[allRestaurants , setAllRestaurants] = useState([]);
  const[filteredRestaurants ,setFilteredRestaurants] = useState([]);
  const[searchText , setSearchText] = useState("");

  useEffect(() => {
    getData();
  } , []);

  async function getData() {
    const url = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"

    );
    const json = await url.json();
    console.log(json?.data?.cards[2]?.data?.data?.cards);
    setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);

  }
  //online or offline 

  const onlineStatus = useOnline()
  console.log(onlineStatus)
  if(!onlineStatus){
    return <NotFound />
  }
  return (
    <div className="mx-8">
      <div className="flex flex-col justify-between items-center md:flex md:flex-row">
        <div className="text-sm flex gap-2 my-4">
          <input
          type="text"
          placeholder="Search for a Restaurants"
          className="w-65 text-xs border border-gray-300 focus:border-gray-600 transition-all duration-300 px-2 py-2 outline-none rounded"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value)
            const fData = filterData(searchText ,allRestaurants)
            setFilteredRestaurants(fData)
          }}
          />
          <button className="text-xs font-medium shadow-md px-2 py-2 outline-none rounded bg-red-400 hover:bg-red-600 transition-all duration-200 easy-in-out text-white"
          onClick={() =>{
            const fData = filterData(searchText ,allRestaurants)
            console.log(fData);
            setFilteredRestaurants(fData)
          }
          }
          >
            Search
          </button>
        </div>
        <div className="flex gap-12 cursor-pointer text-xs">
          <div className="flex gap-4 items-center">
          <img className="h-6" alt="illustration"  src="https://b.zmtcdn.com/data/o2_assets/c0bb85d3a6347b2ec070a8db694588261616149578.png?output-format=webp" loading="lazy" />
              <span className="">Delivery</span>

        </div>
        <div className="flex gap-4 items-center">
          <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/78d25215ff4c1299578ed36eefd5f39d1616149985.png?output-format=webp" loading="lazy" />
             <span className="whitespace-nowrap">Dining Out</span>

        </div>
        <div className="flex gap-4 items-center">
           <img className="h-6" alt="illustration" src="https://b.zmtcdn.com/data/o2_assets/01040767e4943c398e38e3592bb1ba8a1616150142.png?output-format=webp" loading="lazy" />
           <span className="">BeerNight</span>
        </div>
      </div>
      </div>
    <div className="flex flex-col md:flex-row justify-center items-center md:flex-wrap gap-2 my-2 md:my-0   ">
      {
        filteredRestaurants?.length == 0 ? <Shimmer /> :
        filteredRestaurants?.map((item) => {
      return  <Link to={'/restaurant/' + item.data.id} key={item?.data?.id}>
       <RestaurantCard {...item?.data} user={user} />
      </Link>
        })
      }
      </div> 
      </div>
  );
};
export default Body;