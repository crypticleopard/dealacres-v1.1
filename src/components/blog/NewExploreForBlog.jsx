import React from 'react'
import Image from 'next/image'


const Card = ({ index, imageUrl, heading, bgColor }) => {


    return (
        <div key={index} className={`h-[7.5rem] w-[95%] border flex flex-col items-center justify-center gap-3 p-2 rounded-xl text-black bg-${bgColor}`}>
            <p className='font-bold text-center text-xs xl:text-[0.82rem]'>{heading}</p>
            <Image src={imageUrl} width={40} height={60} alt={heading} />
        </div>
    );
};

const NewExploreForBlog = () => {
   
    const cardData = [
        
        {
            imageUrl: 'https://media-public.canva.com/N3bz0/MAFi_QN3bz0/1/t.png',
            heading: 'Rent Agreement',
            bgColor: "[#b6eafa]"
        },
        {
            imageUrl: 'https://media-public.canva.com/nB8Ek/MAFfqznB8Ek/1/t.png',
            heading: 'Home Loan',
            bgColor: "[#1a42de]"
        },
        {
            imageUrl: 'https://media-public.canva.com/FX_B4/MAFaqXFX_B4/1/t.png',
            heading: 'Property Valuer',
            bgColor: "[#CB6CE6]"
        },
        {
            imageUrl: 'https://media-public.canva.com/zLeFA/MAFKtnzLeFA/1/t.png',
            heading: 'Legal Services',
            bgColor: "[#4682a9]"
        },
        {
            imageUrl: 'https://media-public.canva.com/iA9GI/MAERBHiA9GI/1/t.png',
            heading: 'Chartered Accountant',
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
            imageUrl: '/homePage/homeDecor.webp',
            heading: 'Home Decor',
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
            imageUrl: '/homePage/homeInterior.webp',
            heading: 'Home Interior',
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
            imageUrl: '/homePage/vastu_sastra.png',
            heading: 'Vastu Sartar',
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
            imageUrl: '/homePage/construction.webp',
            heading: 'Construction Contractor',
            bgColor: "[#e1ae60]"
        },
        {
            imageUrl: '/homePage/modular.webp',
            heading: 'Modular Kitchen',
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
           
            heading: "Carpentar",
            imageUrl: "/ServiceIcons/Carpenter.png",
            color:"rgb(49, 132, 62)",
            bgColor: "rgb(49, 132, 62, 0.10)"
        },
        {
            heading: "Painting Service",
            imageUrl: "/ServiceIcons/PaintingService.png",
            color:"rgb(137, 129, 33)",
            bgColor: "rgb(137, 129, 33, 0.10)"
        },
        {
            
            heading: "Electrician",
            imageUrl: "/ServiceIcons/Electrician.png",
            color:"rgb(186, 112, 79)",
            bgColor: "rgb(186, 112, 79, 0.10)"
        },
        
        {
           
            heading: "Security System",
            imageUrl: "/ServiceIcons/SecuritySystem.png",
            color:"rgb(7, 214, 46)",
            bgColor: "rgb(7, 214, 46, 0.10)"
        },
        {
          
            heading: "Packer & Movers",
            imageUrl: "/ServiceIcons/PackerMover.png",
            color:"rgb(206, 206, 90)",
            bgColor: "rgb(206, 206, 90, 0.10)"
        },
        {
       
            heading: "Pest Control",
            imageUrl: "/ServiceIcons/PestControl.png",
            color:"rgb(255, 105, 105)",
            bgColor: "rgb(255, 105, 105, 0.10)"
        },
        {
    
            heading: "Solar Product Dealer",
            imageUrl: "/ServiceIcons/Solar.svg",
            color:"rgb(225, 174, 96)",
            bgColor: "rgb(225, 174, 96, 0.10)"
        },
       
        {
        
            heading: "Plumbing Contractor",
            imageUrl: "/ServiceIcons/Plumbing.png",
            color:"rgb(70, 130, 169)",
            bgColor: "rgb(70, 130, 169, 0.10)"
        },
        {
           
            heading: "Sanitary Dealer",
            imageUrl: "/ServiceIcons/SanitaryDealer.svg",
            bgColor: "#0061fd"
        },
       
        {
      
            heading: "Flooring & Marble Dealer",
            imageUrl: "/ServiceIcons/Flooring.png",
            bgColor: "rgb(70, 69, 140, 0.10)"
        },
    ];
  return (
    <div className='flex flex-row w-full items-center gap-4 mb-10'>
        <div className='p-4 bg-red-100 w-[45%] rounded-md '>
        <h2 className='text-3xl'><span className=' text-amber-500 text-5xl'>Explore</span> Our Services</h2>
        <p className='text-base mt-2 text-gray-700'>Make your life easier with our services</p>
        <Image src="/estateblog.webp"  alt='estate blog'  width={280} height={280} className='my-3' />
        <h2 className='text-2xl font-bold'>Get assistance in selling faster</h2>
        <p className='text-base mt-2 text-gray-700'>Dedicated Relationship manager to<br/> help you business faster.</p>
        <p className='text-2xl font-bold text-blue-600 mt-4'>List Your Business</p>
        </div>
        <div className='grid grid-cols-5 w-[55%] gap-2'>
               
                {cardData.map((card, index) => (
                    <Card key={index} imageUrl={card.imageUrl} heading={card.heading} bgColor={card.bgColor} />
                ))}
            </div>

    </div>
  )
}

export default NewExploreForBlog