interface WorkCardProps {
  item: {
    name: string;
    nameColor: string;
    imageUrl: string;
    details?: string[];
  };
}

const WorkCard = ({ item }: WorkCardProps) => {
  return (
    <div className='w-full md:w-3/4 bg-gray-50 p-5 lg:p-14 rounded-xl flex flex-col md:flex-row lg:items-center gap-3 lg:gap-10'>
      <img
        className='w-full md:w-1/2 lg:w-1/2 lg:max-h-96 object-contain object-center'
        src={item.imageUrl}
        alt={item.name}
      />
      <div className='md:w-1/2'>
        <h4 className={`font-semibold ${item.nameColor} mb-2 lg:text-3xl`}>{item.name}</h4>
        <ul className='list-disc ml-5 text-text marker:text-text marker:text-xs text-sm lg:marker:text-xl lg:text-xl'>
          {item?.details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default WorkCard;
