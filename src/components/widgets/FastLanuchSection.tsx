const FastLanuchSection = () => {
  return (
    <div className="bg-[#E3F8F8] ">
      <div className="p-6 lg:px-14 w-full">
        <div className="flex justify-center ">
        <h2
          className="text-center text-DarkGray sm:text-5xl text-3xl 
                     font-bold md:leading-[1.20] leading-none max-w-2xl">
          Fast launch. Fast results.
          <span className="text-green font-covered_by_grace text-center font-medium px-2"> <br />
            Heres how.
          </span>
        </h2>
        </div>
            <div>
                <div className="flex gap-x-12 ">
                    <h4 className="text-4xl font-covered_by_grace text-green">01</h4>
                    <h2 className="text-3xl font-bold text-LightGray">Segment</h2>
                </div>
                <div className="flex gap-x-10 mt-10">
                    <h4 className="text-4xl font-covered_by_grace text-green">02</h4>
                    <h2 className="text-3xl font-bold text-LightGray">Design</h2>
                </div>
                <div  className="flex flex-col mt-10 relative">
                    <div className="flex gap-x-10">
                         <h4 className="text-4xl font-covered_by_grace text-green">03</h4>
                         <h2 className="text-3xl font-bold ">Send</h2> 
                    </div>
                    <div>
                        <p className="max-w-sm mt-1 text-LightGray pl-16">
                            One-off announcements or automatically triggered flows. Customers receive their personalized cards within a week.</p>
                    <div className="w-1 h-24 ml-2 bg-green absolute top-10"></div>
                    </div>
                    <div className="flex gap-x-10 mt-8 ">
                     <h4 className="text-4xl font-covered_by_grace text-green">04</h4>
                     <h2 className="text-3xl font-bold text-LightGray">Convert</h2>
                </div>
                </div>
               
                
                <div></div>
            </div>
      </div>
    </div>
  );
};

export default FastLanuchSection;
