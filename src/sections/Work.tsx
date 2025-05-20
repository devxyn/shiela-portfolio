import Divider from "@components/Divider";

const Work = () => {
  return (
    <section id='work' className='work-section py-10 lg:py-20'>
      <Divider label='Work' />
      <div className='w-full flex flex-col md:flex-row-reverse gap-6 md:justify-between lg:items-center lg:justify-center'>
        <img className='w-full md:w-1/2 lg:w-1/2 object-center object-cover' src='/images/project.png' alt='Freshly' />
        <div className='flex flex-col gap-4 md:ml-10 lg:w-1/3'>
          <h4 className='text-text text-sm lg:text-xl'>Jan - Apr 2025</h4>
          <h3 className='font-semibold text-lg lg:text-3xl'>Freshly</h3>
          <p className='text-text text-sm lg:text-xl'>
            A mobile app that connects users to local palengke stores, making it easy to buy fresh produce from trusted
            suki stores nearby.
          </p>
          <div className='flex flex-row items-center gap-4'>
            <p className='bg-gray-50 px-4 py-1 rounded-xl text-sm lg:text-base'>Figma</p>
            <p className='bg-gray-50 px-4 py-1 rounded-xl text-sm lg:text-base'>Canva</p>
          </div>
          <div>
            <button className='bg-button-green px-3 pl-4 py-2 lg:px-8 lg:py-4 text-sm gap-1 rounded-lg md:rounded-xl cursor-pointer'>
              <a
                className='flex flex-row items-center justify-center lg:text-lg'
                href='https://www.figma.com/design/Ahmze9jFSMTyzRTwwXerPu/Freshly?node-id=0-1&t=mEyp3DU86kAKUsLZ-1'
                target='_blank'
                rel='noopener noreferrer'>
                View Project <img className='h-4' src='/icons/arrow-right.svg' alt='arrow-right' />
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
