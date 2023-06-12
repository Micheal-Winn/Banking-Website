import { Accordion, createStyles } from "@mantine/core";
import React from "react";



const QuestionSection = () => {
  return (
    <section id="payment" className="sm:min-h-screen lg:pb-6 flex flex-col justify-center overflow-hidden items-center 2xl:gap-[8rem] xl:gap-[6rem] lg:gap-[9rem] md:gap-[8rem] sm:gap-[6rem] gap-[4rem] text-center xl:mt-3">
      <div>
        <h2 className="text-[#5265CA] text-3xl sm:text-5xl mb-14 uppercase font-bold mt-6">Question</h2>
        <h3 className="w-[300px] sm:w-[600px] text-4xl sm:text-7xl font-bold">Frequently Asked Questions</h3>
      </div>
      <Accordion className="w-[90%] sm:w-[80%] md:w-[75%] lg:w-[60%]  2xl:w-[40%] text-left shadow-xl rounded-lg mb-6" variant="filled"   transitionDuration={500}
        styles={{
           
            item:{
                zIndex:1,

                '&[data-active]':{
                    transform:'scale(1.03)',
                    backgroundColor:"#FBF8FB",
                    zIndex: 10,
                    transition: 'transform 150ms ease',
                    color:'#5265CA',
                    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)'
                }
            },
            control:{

                '&[data-active]':{
                    color:'#5265CA',
                    
                }
            }
        }}
      >
        <Accordion.Item value="customization">
          <Accordion.Control className="text-sm sm:text-xl pl-3 pt-2">Customization</Accordion.Control>
          <Accordion.Panel className="text-sm sm:text-lg">
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control className="text-sm sm:text-xl pl-3 pt-2">Flexibility</Accordion.Control>
          <Accordion.Panel className="text-sm sm:text-lg">
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control className="text-sm sm:text-xl pl-3 pt-2">No annoying focus ring</Accordion.Control>
          <Accordion.Panel className="text-sm sm:text-lg">
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default QuestionSection;
