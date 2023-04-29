
import { contact } from "@/app/utils/FeatureData/feature.data";
import links from "@/app/utils/links/data.json"
import { FooterLinks } from "./BottomFooter";
import ReportForm from "./ReportForm";



export function Footer() {
 
  return (
    <section className="h-screen flex flex-col justify-between overflow-hidden bg-blue-100">
      <div className="container flex pt-[2rem]">
        <div className="w-[50%] flex flex-col gap-20">
          <div className="flex flex-col gap-5">
            <h2 className="text-3xl font-bold uppercase">Get in touch</h2>
            <p className="text-base w-[80%] text-[#b1b5bc]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe,
              veniam inventore. Delectus odio assumenda, corporis, dolores
              labore quam non vitae quo nisi est perspiciatis cumque! Doloribus
              temporibus aliquid perferendis totam.
            </p>
          </div>

          <div className="flex flex-col gap-10">
            {contact.map((address,i)=>(
              <div key={i} className="flex items-center gap-6">
                <address.icon size={30} color="#5265CA"/>
                <p>{address.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-[50%]  h-auto pl-20">
            <ReportForm/> 
        </div>
      </div>
      <FooterLinks data={links}/>
    </section>
  );
}
