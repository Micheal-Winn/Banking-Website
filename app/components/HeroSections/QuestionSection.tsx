import { Accordion, createStyles } from "@mantine/core";
import React from "react";



const QuestionSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center overflow-hidden items-center gap-[8rem] text-center">
      <div>
        <h2 className="text-[#5265CA] text-5xl mb-14 uppercase font-bold">Question</h2>
        <h3 className="w-[550px] text-7xl font-bold">Frequently Asked Questions</h3>
      </div>
      <Accordion className="w-[40%] text-left shadow-lg rounded-lg" variant="filled"   transitionDuration={500}
        styles={{
           
            item:{
                zIndex:0,

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
          <Accordion.Control className="text-xl p-3">Customization</Accordion.Control>
          <Accordion.Panel>
            Colors, fonts, shadows and many other parts are customizable to fit
            your design needs
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="flexibility">
          <Accordion.Control className="text-xl p-3">Flexibility</Accordion.Control>
          <Accordion.Panel>
            Configure components appearance and behavior with vast amount of
            settings or overwrite any part of component styles
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="focus-ring">
          <Accordion.Control className="text-xl p-3">No annoying focus ring</Accordion.Control>
          <Accordion.Panel>
            With new :focus-visible pseudo-class focus ring appears only when
            user navigates with keyboard
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </section>
  );
};

export default QuestionSection;
