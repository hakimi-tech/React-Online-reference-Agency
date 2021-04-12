import React from 'react';

function Main() {
  return (

    <section className="text-gray-600 body-font mx-6">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Before they sold out
        <br className="hidden lg:inline-block" />readymade gluten 
      </h1>
      <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus in mollis nunc sed id semper.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Individual Login</button>
        <button className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-200 rounded text-lg">Free Demo</button>
      </div>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://image.freepik.com/free-vector/recruitment-isometric-web-banner_9209-4178.jpg" />
    </div>
  </div>
</section>
  )
}
export default Main;