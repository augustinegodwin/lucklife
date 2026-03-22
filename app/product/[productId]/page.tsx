type SingleProp = {
  params: {
    productId: number;
  };
};
export default async function ProductData({params: { productId }}:SingleProp) {
  return (
    <div className="w-full pt-40">
            <section className='w-full flex justify-center pb-22.5'>
                    <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
                        <h2 className="w-full leading-[1.1px] font-semibold text-[44px] txt-heading">
            This is a singke product apge
            
          </h2>
            </div>
        </section>
        </div>
  );
}
