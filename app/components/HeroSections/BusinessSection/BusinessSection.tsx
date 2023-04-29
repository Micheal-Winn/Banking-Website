import { businessService } from "@/app/utils/FeatureData/feature.data";
import TransactionSection from "./TransactionSection";

const BusinessSection = () => {
  return (
    <section className="box-border  h-auto 2xl:h-screen overflow-hidden flex flex-col pt-6 gap-8 bg-white">
      <div className="flex flex-col gap-3 text-center">
        <h2 className="text-[#5265CA] sm:text-base lg:text-xl uppercase tracking-widest font-bold text-center ">
          Easier
        </h2>
        <h3 className="text-center text-4xl lg:text-5xl font-bold">
          Banking that should be easier for all
        </h3>
        <p className="w-[85%] sm:w-[70%] lg:w-[45%] mx-auto text-[#C9D0DD] sm:text-sm  xl:text-lg">
          It is time to make the world of finance simpler,smarter and fit for
          modern life.You can get started modern banking instantly with our
          banking application !
        </p>
      </div>
      <div className="flex flex-col sm:flex-row  gap-5 lg:gap-10 lg:container  mx-auto w-[80%] sm:w-[90%] lg:w-[90%] xl:w-[55%]">
        {businessService.map((service) => (
          <>
            <div
              key={`${service.label}`}
              className="bg-white flex-1  flex-col pt-7 lg:pt-5 px-4 pb-6 text-center rounded-lg shadow-xl sm:shadow-lg"
            >
              <div
                className={`${service.bgcolor} w-[55px] h-[55px] mx-auto rounded-lg flex items-center justify-center mb-5`}
              >
                <service.icon size={"40px"} color="white" />
              </div>
              <h4 className="md:text-sm xl:text-lg mb-3">{service.label}</h4>
              <p className="text-[#C9D0DD] text-xs lg:text-sm w-[80%] sm:w-[95%] lg:w-[80%] mx-auto">{service.text}</p>
            </div>
          </>
        ))}
      </div>
          <TransactionSection/>
    </section>
  );
};

export default BusinessSection;
