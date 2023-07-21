 
 
 
 
 
import { Outlet } from "react-router-dom";
 
const About = () => {
   return (
    <div className="">
      <h1>This is About Page </h1>
      <p>Ashish Ranjan </p>
      <Outlet />
    </div>
   )
}
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 //import { Component } from "react";
 //const About = () => {
 //   return (
 //       <>
 //       <p>About page</p>
 //       <ProfileFunctionComponent name= {"Ashish from function component"} />
 //       <Profile name = {"Ashish from class component"} />
 //       {/* <Outlet /> */}
//     </>
 //   );
//};  

/*class About extends Component {
constructor(props){
    super(props);
    //console.log("Parent Constructor");

}

componentDidMount() {
    //Best place to make API call because it runs after
    //first render to load the data
    //console.log("Parent componentDidMount");

}

 render() {
  return (
    <>
    {/* {console.log("parent render ")} */
 //   <h1>About Me </h1>
  //  {/* <ProfileFunctionComponent name = "Ashish from function component" } /> */ }
  //  <Profile name= {"First child"} />
 //   {/* <Profile name = {"Second child"} /> */}

  //  </>
 // );
   
 //}
//}

/**
 * React life cycle sequense for the above components:
 *                        ====|
 * 1.Parent constructor         |
 * 2.Parent render              |
 *    3.First child constructor |  ==> Render phase
 *    4.First child render      |
 *    5.Second constructor      |
 *    6.Second render           |
 *                        ====|
 *
 *    [ DOM IS UPDATED FOR THE CHILDREN ]
 *                                   ===|
 *    7.First Child ComponentDidMount     |
 *    8.Second Child ComponentDidMount    |  ==> Commit phase
 * 9.Parent ComponentDidMount             |
 *                                   ===|
 */

export default About;
