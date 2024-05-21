import AgentHeroSection from '@/components/single-agent-page/AgentHeroSection'
import React from 'react'
import { singleAgentData } from './dummyAgentData'
import HeadingBorder from '@/components/single-agent-page/HeadingBorder';
import FeaturedService from '@/components/single-agent-page/FeaturedService';
import AgentContactForm from '@/components/single-agent-page/AgentContactForm';
import Image from 'next/image';
import AgentFeedback from '@/components/single-agent-page/AgentFeedback';

import feedbackBg from '../../../../public/single-agent/feedback.webp'
import AgentServices from '@/components/single-agent-page/AgentServices';
import AgentListings from '@/components/single-agent-page/AgentListings';
import AgentLinks from '@/components/single-agent-page/AgentLinks/AgentLinks';
const SingleAgentPage = () => {

  const { name, img, contacts, languages, address, agentInfo, services, forSaleListings, forRentListings } = singleAgentData;
  return (
    <div>
      <div className='max-w-screen-lg px-2 min-[400px]:px-4 sm:px-6 mx-auto py-4 '>
        <AgentHeroSection img={img} name={name} contacts={contacts} languages={languages} address={address} />
      </div>

      <div className='max-w-screen-lg   mx-auto px-6 '>
        <div className='w-full md:w-[85%] mx-auto'>
        <h2 className='font-bold text-2xl inline-flex flex-col py-4'>
          About Agent
          <HeadingBorder />
        </h2>
        <p className=' text-sm text-justify pb-4'>
          {agentInfo}
        </p>
        </div>
      </div>

      <div className='max-w-screen-lg mx-auto px-2 sm:px-6 py-4 '>
        <AgentListings forRentListings={forRentListings} forSaleListings={forSaleListings} />

      </div>


      {/* services */}
      <div className='max-w-screen-lg mx-auto px-2 sm:px-6 mb-3'>
        <AgentServices services={services} />

      </div>

      <div className=' '>
        <FeaturedService />
      </div>
     
      <div className='max-w-screen-md  px-2 sm:px-6 flex gap-8 mx-auto   overflow-hidden  py-4 mt-5 mb-4 rounded-[2rem] shadow-md border-2'>
        
        <div className='w-1/2'>
          <AgentContactForm />
        </div>
        <div className='order-2 w-1/2  my-auto rounded-[2rem]  inline-flex items-center overflow-hidden shadow h-[260px] '>
          <Image src={`/about-us/${img}`} alt='abot-agent' className='rounded-[2rem] w-full h-auto object-cover sm:self-start ' width={300} height={300} />
        </div>
     

      </div>
      <div className='max-w-screen-md mx-auto px-2 sm:px-6  py-4 my-4 flex flex-row gap-4 items-center shadow-md border-2'>
        <div className='w-1/2 sm:w-[60%]'>
          <AgentFeedback />
        </div>
        <div className='h-1/2 order-2  w-1/2 sm:w-[40%] mx-auto md:mx-0 '>
          <Image src={feedbackBg} alt='feedback' className='w-full h-full' />
        </div>

      </div>

      {/* Agent Links*/}
      <div className='max-w-screen-xl mx-auto px-4 mb-5'>
      <AgentLinks />
      </div>
    </div>
  )
}

export default SingleAgentPage
