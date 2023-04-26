import { businessService } from "@/app/utils/FeatureData/feature.data";

const BusinessSection = () => {
  return (
    <section className="container min-h-screen">
      <div>
        <h2 className="text-[#5265CA] sm:text-base lg:text-xl uppercase tracking-widest font-bold">
          Easier
        </h2>
        <h3>Banking that should be easier for all</h3>
        <p>
          It is time to make the world of finance simpler,smarter and fit for
          modern life.You can get started modern banking instantly with our
          banking application !
        </p>
      </div>
      <div>
        {businessService.map((service)=>(
        <>
            <div key={`${service.label}`}>
                <div className={`${service.bgcolor}`}>
                    <service.icon size={'45px'} color="white"/>
                </div>
                <h4>{service.label}</h4>
                <p>{service.text}</p>
            </div>
        </>
        ))}
      </div>
    </section>
  );
};

export default BusinessSection;
