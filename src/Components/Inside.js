import React from 'react';

const Inside = () => {
    const items = ["Illustrated step-by-step recipes",
                    "Ready to cook ingredients", 
                    "QR codes for real-time videos",
                    "Guaranteed delicious meals!"
                ];
    return (
        <div>
            
            <div className="hero mt-4 mb-5">
  <div className="hero-content flex-col lg:flex-row-reverse">
    
    <div className='px-8'>
      <h1 className="text-5xl font-bold">What's inside each box?</h1>
      <p className="py-6 ps-12 text-xl font-semibold">
      <ul className="list-disc">
      {items.map((item, index) => (
        <li className='py-2' key={index}>{item}</li>
      ))}
    </ul>
      </p>
      <div className='text-center w-1/2 '>

              <p className='text-lg py-2 bg-green-600 rounded-full hover:bg-lime-200 text-white hover:text-black cursor-pointer border-solid hover:border-lime-500 font-bold'>BROWSE OUR KITS</p>
              </div>
      
    </div>
    <img src='https://i.ibb.co/Km8qG84/image600x600.jpg' className="w-full lg:w-1/3 rounded-lg lg:ms-6" alt='' />
  </div>
</div>
        </div>
    );
};

export default Inside;