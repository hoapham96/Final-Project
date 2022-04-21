import React from 'react';

const Home = () => {

  return (
    <main>
      <div className="Intro">
        <div className="containers justify-flex-start ">
          <h1>Introduction</h1>

          <p class="bio-text">
                The app is a form of Porkmon environment that enables users to search and select desired cards, browse news and makes new friends. it allows individual expression of feelings, taught and perspectives. 
            </p>
        </div>
        <div className="image-fill ">
          <img className='eevee' alt="pikachu" src="https://cdn2.myminifactory.com/assets/object-assets/5f0c5ee8d58d9/images/720X720-eevee2-2.jpg" />
        </div>
      </div>
      
    </main>
  );
};

export default Home;
