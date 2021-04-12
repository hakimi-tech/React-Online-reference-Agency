import React from 'react';
import "./Navbar.css";
function Navbar() {
  return (

    <header className=" nav-bar text-white body-font h-18">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" href="#">
         <img  className =" w-14 h-14 object contain"alt ="#" src="https://reputationaire.com/assets/reputationaire.png" />
        </a>
        <nav className="md:mr-auto md:ml-1 md:py-1 md:pl-1 flex flex-wrap items-center text-base justify-center">
          <li className="list-none">
            <a className="mr-5 hover:text-gray-900" href="https://reptuationaire.com"> Product
              <i class="text-l  m-1 fas fa-angle-down"></i>
            </a>
            <ul class="hidden flex-wrap list-none pl-2 mb-0 mt-0">
              <li>
                <a class="text-blueGray-500 hover:text-blueGray-800 text-sm block mb-2 mx-4 no-underline" href="/learning-lab/tailwind-starter-kit/documentation/css/buttons/small/filled">Small Filled</a>
              </li>
              <li>
                <a class="text-blueGray-500 hover:text-blueGray-800 text-sm block mb-2 mx-4 no-underline" href="/learning-lab/tailwind-starter-kit/documentation/css/buttons/regular/filled">Regular Filled</a>
              </li>
              <li>
                  <a class="text-blueGray-500 hover:text-blueGray-800 text-sm block mb-2 mx-4 no-underline" href="/learning-lab/tailwind-starter-kit/documentation/css/buttons/large/filled">Large Filled</a>
              </li>
            </ul>
          </li>
          <a className="mr-5 hover:text-gray-900" href="https://app.reptuationaire.com">About</a>
          <a className="mr-5 hover:text-gray-900" href="https://app.reptuationaire.com">Contact</a>
        </nav>
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 mx-3  focus:outline-none hover:bg-indigo-600 rounded text-lg">Individual Login</button>
        <button className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6  focus:outline-none hover:bg-green-200 rounded text-lg ">Free Demo</button>
      </div>
    </header>
  )
}
export default Navbar;

