import React from 'react';
import * as Form from '@radix-ui/react-form';

const ReportForm = () => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
       
    }

    return (
        <Form.Root className="w-[260px] sm:w-[350px] mx-auto md:mx-0 lg:w-[400px] py-8 sm:py-14 rounded-xl shadow-2xl px-4 sm:px-10" onSubmitCapture={handleSubmit}>
        <Form.Field className="grid mb-[10px] text-xl sm:text-2xl uppercase font-bod" name='title'>
            <Form.Label>Feedback</Form.Label>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="name">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[13px] sm:text-[15px] font-semibold leading-[35px] text-black uppercase">Name</Form.Label>
            <Form.Message className="text-[10px] sm:text-[13px] text-black opacity-[0.8]" match="valueMissing">
              Please enter your name
            </Form.Message>
            <Form.Message className="text-[10px] sm:text-[13px] text-black opacity-[0.8]" match="typeMismatch">
              Please provide a valid name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA9"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="email">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[13px] sm:text-[15px]  font-medium leading-[35px] text-black uppercase">Email</Form.Label>
            <Form.Message className="text-[10px] sm:text-[13px] text-black opacity-[0.8]" match="valueMissing">
              Please enter your email
            </Form.Message>
            <Form.Message className="text-[10px] sm:text-[13px] text-black opacity-[0.8]" match="typeMismatch">
              Please provide a valid email
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA9"
              type="email"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className="grid mb-[10px]" name="question">
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[13px] sm:text-[15px]  font-semibold leading-[35px] text-black uppercase">
              Question
            </Form.Label>
            <Form.Message className="text-[10px] sm:text-[13px] text-black opacity-[0.8]" match="valueMissing">
              Please enter a question
            </Form.Message>
          </div>
          <Form.Control asChild>
            <textarea
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-black shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-black selection:bg-blackA9 resize-none"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button  className="box-border text-white uppercase text-sm sm:text-base font-bold p-0 sm:p-2 w-full text-violet11 bg-[#5265CA] hover:bg-mauve3 inline-flex h-[40px] sm:h-[50px] items-center justify-center rounded-[4px]  px-[15px] leading-none shadow-md  focus:outline-none mt-[20px]">
            send
          </button>
        </Form.Submit>
      </Form.Root>
     )
}
;

export default ReportForm;