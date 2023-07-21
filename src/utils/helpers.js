export function filterData(searchText,allRestaurants){

  return (allRestaurants.filter((restaurant) => {
   return restaurant?.data?.name.toLowerCase()?.includes(searchText.toLowerCase());
  }));
 
} 