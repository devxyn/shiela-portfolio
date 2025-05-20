const Hero = () => {
  return (
    <section
      id='hero'
      className='hero-section h-screen flex flex-col items-center justify-center gap-10 bg-cover bg-center'
      style={{
        backgroundImage: "url('/images/background.png')",
      }}>
      <div className='headline-container'>
        <h1 className='text-5xl lg:text-7xl text-center font-light leading-normal'>
          I’m <span className='italic font-semibold'>Shiela!</span>
        </h1>
        <h2 className='text-5xl lg:text-7xl text-center font-light leading-normal'>
          a UI/UX <span className='italic font-semibold'>Designer,</span>
        </h2>
        <h2 className='text-5xl lg:text-7xl text-center font-light leading-normal'>based in Manila.</h2>
      </div>
      <a href='#work'>
        <button className='cursor-pointer flex flex-row items-center justify-center bg-button-green px-12 py-4 font-semibold gap-1 rounded-xl lg:text-xl'>
          Work <img className='h-5' src='/icons/arrow-down.svg' alt='arrow-down' />
        </button>
      </a>
    </section>
  );
};

export default Hero;
