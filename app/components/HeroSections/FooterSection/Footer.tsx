import { contact } from "@/app/utils/FeatureData/feature.data";
import links from "@/app/utils/links/data.json";
import { FooterLinks } from "./BottomFooter";
import ReportForm from "./ReportForm";

export function Footer() {
  //to make bg change by scrolling
  return (
    <section className="box-border  sm:h-auto md:h-screen flex flex-col justify-between overflow-hidden bg-blue-50">
      <div className="container flex flex-col md:flex-row pt-[2rem] sm:px-10 2xl:px-0 gap-10 md:gap-0">
        <div className="w-[100%] md:w-[50%] flex-col sm:flex md:flex-col gap-20 pl-2 sm:pl-0">
          <div className="flex flex-col gap-5  md:text-center">
            <h2 className="text-2xl sm:text-3xl font-bold uppercase">Get in touch</h2>
            <p className="text-xs sm:w-[100%] lg:w-[75%] xl:w-[90%] md:w-[85%] mx-auto xl:mx-0 xl:text-sm md:text-xs text-[#b1b5bc]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              veniam inventore. Delectus odio assumenda, corporis, dolores
              labore quam non vitae quo nisi est perspiciatis cumque! Doloribus
              temporibus aliquid perferendis totam.
            </p>
          </div>

          <div className="flex flex-col gap-6 mt-5 sm:mt-0 sm:gap-10 ">
            {contact.map((address, i) => (
              <div key={i} className="flex items-center  md:gap-6 ">
                <address.icon size={30} color="#5265CA" />
                <p className="pl-2 text-sm sm:text-base">{address.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-[50%]  lg:pl-20 sm:pl-0">
          <ReportForm />
        </div>
      </div>
      <FooterLinks data={links} />
    </section>
  );
}
