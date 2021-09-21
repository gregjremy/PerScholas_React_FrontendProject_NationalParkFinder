import { Link } from 'react-router-dom'
import React from 'react';


function NavBar() {
  return (
    <nav id="nav-bar">
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/parksbystate">Parks By State</Link>
          </li>
        </ul>
      </nav>
  );
};

export default NavBar;

// to start our query parameters we do?
// if we wanted to add multiple PARAMETERS we use the &
// api.giphy.com/v1/gifs/random?api_key=jJJmaXOWKHCL1CPMuUUL55obZQv2zZJG














// import React from 'react';



// const Home = () => {
//     return (
//         <div>
//             To The Home Page!            
//         </div>
//     );
// };



// const ParksByState = () => {
//     return (
//         <div>
//             To the ParksByState Page! TODO:Need to route
//         </div>
//     );
// };



// const ParksByActivity = () => {
//     return (
//         <div>
//             To the ParksByActivity page! TODO:Need to route
//         </div>
//     );
// };



// const NavBar = () => {
//     return (
//         <div className='navBar'>
//             <Home />
//             <ParksByState />
//             <ParksByActivity />
//         </div>
//     );
// };

// export default NavBar;