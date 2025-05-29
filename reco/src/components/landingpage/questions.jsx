"use client"
import React, { useState } from 'react'
import Image from 'next/image';

// FAQ Item component with toggle functionality
const FaqItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="rounded-3xl mb-8 md:mb-11 bg-[#a7cb4f] px-4 md:px-11 py-3 md:py-6 space-y-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h3 className="font-bold text-[1.2rem] md:text-[1.7rem]">{question}</h3>
                {isOpen ?
                    <Image src="/landingpage/up.svg" width={30} height={30} alt="Phone Icon" /> :
                    <Image src="/landingpage/down.svg" width={30} height={30} alt="Phone Icon" />
                }
            </div>
            {isOpen && (
                <div className='text-[1rem] md:text-[1.5rem] font-mono'>
                    <p>{answer}</p>
                </div>
            )}
        </div>
    );
};

const Questions = () => {
    const faqData = [
        {
            question: "What do we do?",
            answer: "We are a recycling service that collects recyclable materials from households and businesses, sorts them, and sends them to manufacturers who can reuse them to create new products. Our goal is to reduce waste and promote sustainability."
        },
        {
            question: "How to become a partner?",
            answer: "We are always looking for partners who share our vision of sustainability. If you are a manufacturer or a business interested in collaborating with us, please reach out through our contact page. We would love to discuss potential partnerships and how we can work together."
        },
        {
            question: "How to Register in App",
            answer: "We have a user-friendly app available for both Android and iOS. You can download it from the Google Play Store or Apple App Store. Once registered, you can schedule pickups, track your recycling progress, and earn rewards."
        },
        {
            question: "How to get the App?",
            answer: "We have a user-friendly app available for both Android and iOS. You can download it from the Google Play Store or Apple App Store. Once registered, you can schedule pickups, track your recycling progress, and earn rewards."
        },
        {
            question: "Who are we?",
            answer: "We are a team of passionate individuals dedicated to making recycling easy and accessible for everyone. Our mission is to create a sustainable future by reducing waste and promoting responsible consumption."
        }
    ];

    return (
        <>
            <div className='my-2 md:my-4 bg-white text-black rounded-3xl mx-4 lg:mx-20 py-5 md:py-14 px-3 md:px-10'>
                <div className='flex flex-col items-center'>
                    <p className='text-2xl md:text-[2.5rem] font-bold flex justify-center mb-8'>
                        Frequently Asked Questions
                    </p>
                </div>

                <div className="sm:mx-8 md:mx-24">
                    {faqData.map((faq, index) => (
                        <FaqItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Questions;
