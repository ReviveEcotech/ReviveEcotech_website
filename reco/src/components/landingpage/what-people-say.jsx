import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ rating, comment, author, location }) => {
  return (
    <div className="bg-[#013C5A] text-white p-6 rounded-3xl">
      <div className="flex mb-4">
        {[...Array(parseInt(rating))].map((_, index) => (
          <Image
            key={index}
            src="/landingpage/starfull.svg"
            alt="star"
            width={20}
            height={20}
            className="mr-1"
          />
        ))}
        {[...Array(5-parseInt(rating))].map((_, index) => (
          <Image
            key={index}
            src="/landingpage/starempty.svg"
            alt="star"
            width={20}
            height={20}
            className="mr-1"
          />
        ))}
      </div>
      <h3 className="text-xl text-black font-bold mb-4">AI+ is a game-changer!</h3>
      <p className="mb-4 text-sm">{comment}</p>
      <p className="text-sm text-black">{author} from {location}</p>
    </div>
  )
}

const Whatpeoplesay = () => {
  return (
    <div className='my-16 px-4 md:px-8 lg:px-12'>
      <div className='fontcolorgradient text-center mb-12'>
        What people say about us
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 xl:px-14'>
        <TestimonialCard
          comment="AI+ is a game-changer! Its advanced algorithms and intuitive interface make it easy to automate tasks. I'm amazed by the accuracy and speed of its results. Highly recommended!"
          author="Sarah"
          location="United States"
          rating="4"
        />
        <TestimonialCard
          comment="As an entrepreneur, AI+ has revolutionized my business. It helps me analyze data, streamline processes, and make informed decisions. It's an indispensable tool in today's competitive market. AI+ has exceeded my expectations. Its natural language processing capabilities are impressive. AI+ has exceeded my expectations. Its natural language processing capabilities are impressive."
          author="Luca"
          location="Italy"
          rating="5"
        />
        <TestimonialCard
          comment="AI+ has exceeded my expectations. Its natural language processing capabilities are impressive. It understands and responds to queries flawlessly, saving me time and effort."
          author="Emma"
          location="China"
          rating="5"
        />
        <TestimonialCard
          comment="I'm thrilled with AI+. Its machine learning algorithms have transformed my research. It quickly identifies patterns, providing valuable insights. It's a must-have for anyone in academia."
          author="Miguel"
          location="Mexico"
          rating="4"
        />
        <TestimonialCard
          comment="AI+ is a real game-changer in customer service. Its chatbot feature is so lifelike, customers often think they're talking to a human. It enhances user experience and boosts satisfaction."
          author="Sophie"
          location="France"
          rating="4"
        />
        <TestimonialCard
          comment="AI+ has taken my productivity to new heights. Its task automation and smart scheduling features have streamlined my work. It's an indispensable assistant that keeps me organized and efficient."
          author="Rajesh"
          location="India"
          rating="4"
        />
      </div>
    </div>
  )
}

export default Whatpeoplesay
