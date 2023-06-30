import React from 'react';

const Pricing = () => {
    return (
        <div className='bg-lime-400 '>
            <h3 className='text-5xl text-white  text-left py-16 ms-16'>PRICING</h3>
            <section className='grid grid-cols-3 m-10 pb-16 gap-8'>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
              <div className='mt-10 text-center mx-24 '>

              <p className='text-3xl bg-orange-400 rounded-md hover:bg-orange-200 cursor-pointer hover:font-bold'>$20.00</p>
              </div>
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/QfTvP4K/images-3.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Comfort Congee</h2>
    <p>An Asian favorite</p>
    
  </div>
</div>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-300 ease-in-out  bg-base-100 shadow-xl">
              <div className='mt-10 text-center mx-24 '>

              <p className='text-3xl bg-orange-400 rounded-md hover:bg-orange-200 cursor-pointer hover:font-bold'>$19.00</p>
              </div>
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/8x9vTBP/images-1.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Vegan Feast</h2>
    <p>Healthy & wholesome
</p>
    
  </div>
</div>
            <div className="card border border-gray-100 hover:border-green-600 transition duration-500 ease-in-out  bg-base-100 shadow-xl">
              <div className='mt-10 text-center mx-24 '>

              <p className='text-3xl bg-orange-400 rounded-md hover:bg-orange-200 cursor-pointer hover:font-bold'>$21.50</p>
              </div>
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/c2yZm07/images-2.jpg" alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Spicy Laksa</h2>
    <p>Hearty with a zing</p>
    
  </div>
</div>
            </section>
        </div>
    );
};

export default Pricing;