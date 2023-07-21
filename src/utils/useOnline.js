import { useState , useEffect} from "react";
const useOnline  = () => {
    //it should return status  - return boolean value 
//usestate will be use  
 const[isOnline , setIsOnline] = useState(true);

 //write a logic 

 useEffect(() => {
    const handleOnline = () => {
        setIsOnline(true);
    };
    const handleOffline = () => {
        setIsOnline(false);
    };
    window.addEventListener("online" , handleOnline);
    window.addEventListener("offline" , handleOffline);
    
    //unmounting
  return () => {
        window.removeEventListener("online" , handleOnline);
        window.removeEventListener("online" , handleOffline);
    };
 } ,[]);
 
  return isOnline;
}

export default useOnline;