import React from 'react';

const Works = () => {
    const divStyle = {
        backgroundImage: `url(https://i.ibb.co/RyDh65q/intro-1585162312.jpg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      };
      
    return (
        <div className='text-white  card rounded-none bg-black opacity-80 ' style={divStyle}>
            
            <h2 className='text-4xl pt-10 font-bold text-center'>HOW IT WORKS</h2>
            <section className='grid grid-cols-3 m-28 gap-8 text-3xl'>
                <div>
                    <h4 className='text-center mb-9 text-white w-12 p-1 rounded-3xl bg-lime-700 '>1</h4>
                    <p>Visit freshlo.ca to <br />
                        browse our available <br />
                        Fresh Groceries.</p>
                </div>
                <div>
                    <h4 className='text-center mb-9 text-white w-12 p-1 rounded-3xl bg-lime-700 '>2</h4>
                    <p>Select your chosen <br />
                    Groceries, input your <br />
                    delivery address, and <br />
                    pay securely online.</p>
                </div>
                <div>
                    <h4 className='text-center mb-9 text-white w-12 p-1 rounded-3xl bg-lime-700 '>3</h4>
                    <p>The Fresh Groceries will <br />
                    be at your doorstep at <br />
                    your chosen time the<br />
                    following day.</p>
                </div>
            </section>
        </div>
    );
};

export default Works;