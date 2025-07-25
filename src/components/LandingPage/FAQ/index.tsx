"use client";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const questionsAndAnswers: FAQItem[] = [
    {
      question: "Question 1",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 2",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 3",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 4",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
    {
      question: "Question 5",
      answer: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, fuga hic animi maiores quos sint dolorem consequatur voluptas asperiores adipisci quidem deleniti saepe eius voluptatem laborum ad veritatis alias id!"
    },
  ];

  return (
    <div className="lg:w-[65%] mx-auto py-[80px] lg:px-0 px-[20px]">
      <div className="block p-[5px] mx-auto font-[600] text-[15px] bg-transparent border border-[rgb(17,17,17,10%)] w-fit rounded-full overflow-hidden"><span className="shadow-[0px_7px_10px_0px_rgba(42,_51,_70,_13%)] bg-white px-[16px] py-[6px] block text-[#5E5F6E] rounded-full">FAQ</span></div>
      <h4 className="lg:text-[46px] text-[36px] font-bold-GilroySemiBold tracking-[-0.5px] lg:leading-[52.9px] text-[#161518] text-center my-[24px]">Vos Questions, Nos Réponses</h4>
      <p className="text-[#999999] text-[18px] mb-0 text-center mb-[40px] lg:w-[50%] mx-auto">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium</p>
      <div>
        {questionsAndAnswers.map((item, index) => (
          <div key={index} className="bg-white text-[#020816] rounded-[16px] border border-[rgb(241,241,241,25%)] shadow-[0px_16px_16px_-8px_rgba(42,_51,_70,_12%)] mb-[8px] px-[24px] py-[14px] text-[15.25px]">
            <div className="flex items-center justify-between cursor-pointer" onClick={() => handleToggle(index)}>
              <span className="block font-[400]">{item.question}</span>
              <span className="block text-[20px]">{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="mt-5">
                <p>{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
