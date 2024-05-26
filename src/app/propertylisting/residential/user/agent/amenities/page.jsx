'use client';

import NavigationBroker from "@/components/propertyListing/Navigation/NavigationBroker";
import { useState } from "react";
import Image from "next/image";
import AmenitiesList from "@/components/propertyListing/Amenities";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import FileDropzone from "@/components/propertyListing/FileDropZone";
import { propertyFacing } from "@/components/propertyListing/constants";
import PropertyFacingButton from "@/components/propertyListing/Button/propertyFacingButton";
import PostModal from "@/components/propertyListing/PostModal";
import FeedbackModal from "@/components/propertyListing/FeedbackModal";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Page = () => {

    const [isGDPRChecked, setIsGDPRChecked] = useState(false);
    const [uploadedFiles, setUploadedFiles] = useState([]);
    const [selectedPropertyFacing, setSelectedPropertyFacing] = useState([]);
    const [isPostModalOpen, setIsPostModalOpen] = useState(false);
    const [isFeedbackModalOpen, setIsFeedbackModalOpen] = useState(false);

    const handleFilesDrop = (acceptedFiles) => {
        setUploadedFiles(acceptedFiles);
    };
    const handleGDPRCheckboxChange = () => {
        setIsGDPRChecked((prevChecked) => !prevChecked);
    };
    const handlePropertyFacingChange = (face) => {
        setSelectedPropertyFacing(face);
    };
    

    const openPostModal = () => {
        setIsPostModalOpen(true);
    };

    const closePostModal = () => {
        setIsPostModalOpen(false);
    };
    const handlePostSubmit = (e) => {
        e.preventDefault();
        openFeedbackModal();
        closePostModal();
    };
    const openFeedbackModal = () => {
        setIsFeedbackModalOpen(true);
    };

    const closeFeedbackModal = () => {
        setIsFeedbackModalOpen(false);
    };
    const handleFeedbackSubmit = (e) => {
        e.preventDefault();

    };

    return (
        <DndProvider backend={HTML5Backend}>
            <section className='mt-12 container mx-auto lg:w-4/5'>

                <NavigationBroker />
                <div className='flex flex-col md:flex-row px-4 items-start justify-center gap-10 md:gap-[2rem] container mx-auto my-10'>

                    <div className='h-full lg:w-[420px] rounded-xl p-5 border-2 border-[#dcf0fd] shadow-md'>

                        <h1 className="font-medium md:font-bold  text-xl mb-4">Add Amenties and Features</h1>
                        <AmenitiesList />
                        {/* <div className="flex flex-row items-center">
                            <p className="text-xl text-blue-600">More</p>
                            <MdKeyboardDoubleArrowDown size={20} color="blue" />
                        </div> */}
                        <h1 className="font-medium md:font-bold  text-xl my-3">
                            Property Facing
                        </h1>
                        {propertyFacing.map((face, idx) => (
                <PropertyFacingButton
                  key={idx}
                  heading={face}
                  onClick={() => handlePropertyFacingChange(face)}
                  isActive={selectedPropertyFacing === face}
                />
              ))}
                        <h1 className="font-medium md:font-bold  text-xl my-2">
                            Upload Floor Plan
                        </h1>
                        <FileDropzone onFilesDrop={handleFilesDrop} description={'Uploaded photo is maximum is of 5MB'} />
                    </div>

                    <div className='  sticky top-20 h-fit lg:w-[350px] xl:w-[400px] rounded-xl bg-[#e9f6fe] p-4 flex flex-col items-center mt-5'>
                        <ul className="list-disc pl-6 text-xl mt-5">
                            <li className="mb-2 text-lg">Mention attractive amenities and appealing details of your property.</li>
                            <li className="mb-2 text-lg">Add property proximity to transit Shopping, Market Areas, and more...</li>
                        </ul>
                        <Image src={'/propertyListing/assets/amenities.png'} alt='amenities' height={120} width={120} className='mt-5 mb-8' />
                        <h1 className='font-bold text-xl'>Need Help?</h1>
                        <p className='text-lg'>You Can Email Us</p>
                        <p className='text-lg text-blue-600 mb-5'>Contact@dealacres.com</p>
                    </div>
               
            </div>
            <div className="md:px-24">
                <h1 className=" font-heading">GDPR Agreement *</h1>
                <div className="flex flex-row items-start my-2 gap-2">
                    <input
                        type='checkbox'
                        className='input-checkbox'
                        checked={isGDPRChecked}
                        onChange={handleGDPRCheckboxChange}
                    />
                    <p className="text-xl">I agree to this website &quot;Deal Acres&quot; storing my submitted information; see more details below.</p>
                </div>
                <div className="bg-[#e1dff8] p-2 rounded-lg mb-4">
                    <p>The data based on a search query on Deal Acres has been made available for information/advertisement purposes. No warranty is implied for its accuracy. Nothing contained herein will be deemed to constitute any sort of legal advice, solicitation, marketing, offer of sale, an invitation to offer, or an invitation to get by the developer/builder or any other entity. You are advised to visit the relevant RERA website. And get more information about the builder and property directly. Before deciding on the project content displayed on dealacres.com. If you have any queries contact Deal Acres at contact@dealacres.com.</p>
                </div>
                 <button
                    onClick={openPostModal}
                    className={`w-full bg-blue-600 rounded-xl px-8 py-3 font-bold text-white mt-5 mb-10  hover:bg-white hover:border-2 hover:border-blue-600 hover:text-blue-600 ${!isGDPRChecked || uploadedFiles.length === 0 ? 'cursor-not-allowed bg-blue-400' : ''}`}
                    disabled={!isGDPRChecked || uploadedFiles.length === 0}
                >
                    Post Property</button>
                <PostModal isOpen={isPostModalOpen} onSubmit={handlePostSubmit} />
                <FeedbackModal isOpen={isFeedbackModalOpen} onClose={closeFeedbackModal} onSubmit={handleFeedbackSubmit} />

            </div>


        </section>
         </DndProvider >)

}


export default Page


