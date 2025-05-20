import Divider from "@components/Divider";

const About = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/src/assets/ShielaMaePalad_UIUX_Designer.pdf";
    link.download = "ShielaMaePalad_UIUX_Designer.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='about' className='py-10'>
      <Divider label='About' />
      <div className='lg:flex lg:flex-col lg:justify-center lg:items-center'>
        <div id='profile' className='flex items-center md:justify-center gap-5 md:gap-10 mb-6 lg:mb-10'>
          <img className='w-24 md:w-40 lg:w-64 object-contain object-center' src='/images/profile.png' alt='Profile' />
          <div className='md:w-1/2'>
            <h4 className='text-sm md:text-base lg:text-4xl font-500 lg:font-semibold md:font-semibold mb-2'>
              Hi, I’m Shiela!
            </h4>
            <p className='text-xs md:text-sm lg:text-2xl text-text'>
              I am currently exploring opportunities to grow as a UI/UX designer.{" "}
            </p>
          </div>
        </div>
        <div className='profile-details-contanier flex flex-col md:flex-row md:justify-center lg:justify-around gap-6 md:gap-0 md:ml-20 lg:ml-0 lg:w-2/3'>
          <div className='education-details md:w-1/2 lg:w-full'>
            <h3 className='font-semibold mb-2 lg:text-3xl'>Education</h3>
            <div className='mb-2'>
              <h4 className='font-500 mb-1 lg:text-xl'>UI/UX Design Essentials</h4>
              <p className='text-xs text-text lg:text-base'>CIIT College of Arts and Technology</p>
              <p className='text-xs text-text lg:text-base'>Jan - Mar 2025</p>
            </div>
            <div className='mb-2'>
              <h4 className='font-500 mb-1 lg:text-xl'>Behavioral Science</h4>
              <p className='text-xs text-text lg:text-base'>University of Caloocan City</p>
              <p className='text-xs text-text lg:text-base'>2019 - 2023</p>
            </div>
          </div>
          <div id='experience' className='experience-details md:w-1/2'>
            <div className='mb-6'>
              <h3 className='font-semibold mb-2 lg:text-3xl'>Experience</h3>
              <div>
                <h4 className='font-500 mb-1 lg:text-xl'>Design and Student Coordinator</h4>
                <p className='text-xs text-text lg:text-base'>Torchbearers Philippines</p>
                <p className='text-xs text-text lg:text-base'>Aug 2023 - Apr 2025</p>
              </div>
            </div>

            <div>
              <button
                className='flex flex-row items-center justify-center bg-button-green px-3 pl-4 py-2 text-sm lg:px-6 lg:py-4 lg:text-lg lg:pl-7 font-500 gap-1 rounded-xl cursor-pointer'
                onClick={handleDownload}>
                Download CV
                <img className='h-5' src='/icons/download-icon.svg' alt='download-icon' />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
