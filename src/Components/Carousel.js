import React from 'react';

const Carousel = () => {
    return (
        <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
  
      <img src="https://i.ibb.co/z2LzG0R/gettyimages-139496979-612x612.jpg" className="w-full" alt="" />
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    

    <div className='absolute'>
        <p className='text-2xl text-white  text-left mt-5 ms-5'>WELCOME TO FRESHLO</p>
    </div>
    <div className='absolute bottom-60 w-full text-center'>
    <div className='text-white'>
        <h1 className='text-6xl mb-5'>Freshlo</h1>
        <p className='text-3xl'>Get Fresh Groceries Delivered Right to</p>
        <p className='text-3xl'>Your Doorstep!</p>
        </div>
    </div>
    
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/3ckzrzT/images.jpg" className="w-full" alt=""/>
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    

    <div className='absolute'>
        <p className='text-2xl text-white  text-left mt-5 ms-5'>WELCOME TO FRESHLO</p>
    </div>
    <div className='absolute bottom-60 w-full text-center'>
    <div className='text-white'>
        <h1 className='text-6xl mb-5'>Freshlo</h1>
        <p className='text-3xl'>Get Fresh Groceries Delivered Right to</p>
        <p className='text-3xl'>Your Doorstep!</p>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/zmXnKyb/fruits03.jpg" className="w-full" alt="" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    

    <div className='absolute'>
        <p className='text-2xl text-white  text-left mt-5 ms-5'>WELCOME TO FRESHLO</p>
    </div>
    <div className='absolute bottom-60 w-full text-center'>
    <div className='text-white'>
        <h1 className='text-6xl mb-5'>Freshlo</h1>
        <p className='text-3xl'>Get Fresh Groceries Delivered Right to</p>
        <p className='text-3xl'>Your Doorstep!</p>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/hMgYzFR/download.jpg" className="w-full"alt="" />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
    

    <div className='absolute'>
        <p className='text-2xl text-white  text-left mt-5 ms-5'>WELCOME TO FRESHLO</p>
    </div>
    <div className='absolute bottom-60 w-full text-center'>
    <div className='text-white'>
        <h1 className='text-6xl mb-5'>Freshlo</h1>
        <p className='text-3xl'>Get Fresh Groceries Delivered Right to</p>
        <p className='text-3xl'>Your Doorstep!</p>
        </div>
    </div>
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Carousel;