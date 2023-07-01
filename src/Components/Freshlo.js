import React from 'react';

const Freshlo = () => {
    return (
        <div className='bg-lime-400 '>
            <h3 className='text-5xl text-white  text-left py-16 ms-16'>PRICING</h3>
            <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mx-10 pb-16 gap-8'>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
              
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/qBxWVjB/istockphoto-1391096563-612x612.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-0">Hearty, wholesome meals for</h2>
    <p className='text-xl font-semibold'>the whole family</p>
    <p className='text-lg px-8 pt-3 bg-green-600 rounded-full hover:bg-lime-200 text-white hover:text-black cursor-pointer  font-bold'>TRY OUR FAMILY <br />FEAST KITS</p>
  </div>
</div>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
             
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/hVSx7h3/images-4.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-0">Vegan favorites with a</h2>
    <p className='text-xl font-semibold'>delicious twist</p>
    <p className='text-lg px-8 py-3 bg-green-600 rounded-full hover:bg-lime-200 text-white hover:text-black cursor-pointer  font-bold'>VIEW OUR VEGAN <br />OPTIONS</p>
  </div>
</div>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-500 ease-in-out  bg-base-100 shadow-xl">
              
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/92HXhgN/19206061-detail.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title mb-0">Asian delights to take you on</h2>
    <p className='text-xl font-semibold'>a culinary trip</p>
    <p className='text-lg px-8 pt-3 bg-green-600 rounded-full hover:bg-lime-200 text-white hover:text-black cursor-pointer  font-bold'>EAT YOUR WAY TO <br />ASIA</p>
  </div>
</div>
            </section>
        </div>
    );
};

export default Freshlo;