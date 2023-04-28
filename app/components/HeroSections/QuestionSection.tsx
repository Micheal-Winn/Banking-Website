import { Accordion, createStyles } from "@mantine/core";
import React from "react";

const useStyles = createStyles((theme) => ({
    root:{
        borderRadius:theme.radius.lg,
        
    },
    item:{
        borderRadius:theme.radius.md,
        zIndex:0,
        backgroundColor:"#FBF8FB",

        '&[data-active]':{
            transform:'scale(1.03)',
            backgroundColor:"white",
            zIndex:1
        }
    }
}))

const QuestionSection = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center gap-[8rem] text-center">
      <div>
        <h2 className="text-[#5265CA] text-4xl mb-14 uppercase font-bold">Question</h2>
        <h3 className="w-[450px] text-6xl font-bold">Frequently Asked Questions</h3>
      </div>
      <Accordion className="w-[40%] text-left shadow-lg" variant="filled" radius="md"  defaultValue="customization" transitionDuration={500}
        styles={{
            item:{
                zIndex:0,

                '&[data-active]':{
                    transform:'scale(1.03)',
                    backgroundColor:"#FBF8FB",
                    zIndex: 1,
                    transition: 'transform 150ms ease',
                }
            }
        }}
      >
        <Accordion.Item value="customization">
          <Accordion.Control className="text-xl p-3 text-">Customization</Accordion.Control>
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
