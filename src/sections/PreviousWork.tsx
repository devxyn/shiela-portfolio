import Divider from "@/components/Divider";
import WorkCard from "@/components/WorkCard";
import { prevWorks } from "@utils/data";

const PreviousWork = () => {
  return (
    <section id='previous-work' className='py-10'>
      <Divider label='Previous Work' />
      <div className='flex flex-col md:items-center gap-4 lg:gap-10'>
        {prevWorks.map((item, index) => (
          <WorkCard item={item} key={index} />
        ))}
      </div>
    </section>
  );
};

export default PreviousWork;
