const Divider = ({ label }: { label: string }) => {
  return (
    <div className='flex items-center gap-4 w-full mb-16 lg:mb-20'>
      <span className='text-text font-semibold uppercase lg:text-2xl'>{label}</span>
      <div className='h-[2px] bg-blue-50 flex-1' />
    </div>
  );
};

export default Divider;
