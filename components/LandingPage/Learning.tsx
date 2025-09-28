'use client'
import React from "react"
import { Image } from "@nextui-org/image";
import { FaPlay } from "react-icons/fa";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, } from "@heroui/react";

const Learning = () => {

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const targetRef = React.useRef(null);

    const youtubeUrl = "https://www.youtube.com/watch?v=h1245W4A0kI";
    const videoId = youtubeUrl.split("v=")[1];

    return (
        <>
            <div className="w-full  flex flex-col items-center">
                <div className='w-full max-w-[1700px] relative' id="learning">
                    <div className='relative overflow-hidden z-0 pt-7 lg:pt-10 pb-10 lg:pb-[50px] xl:pb-[60px] bg-[#041B15] rounded-[16px]'>
                        <div className="absolute xl:-mt-10 -z-10 hidden xl:block Dentobees-Learning-BackgroundOne"></div>
                        <div className="absolute -z-10 xl:hidden Dentobees-Learning-BackgroundTwo"></div>
                        <div className='Common-padding flex flex-col gap-7 md:gap-8 xl:gap-10 items-center'>
                            <div className='flex flex-col gap-4 md:gap-5 xl:gap-6 items-center'>
                                <h3 className='font-bold Sub-heading text-[#FFFFFF] text-center'>
                                    How it works
                                </h3>
                                <p className='sm:w-[480px] px-3 sm:px-0 font-normal Normal-text text-[#FFFFFF] text-center'>
                                    Discover how Dentobees streamlines your clinic operations, manage appointments, billing, records, and more easily!
                                </p>
                            </div>
                            <div className="w-full xl:max-w-[1050px]">
                                <div className='relative w-full h-[300px] flex justify-center Common-padding bg-[#094031] rounded-[26px] '>
                                    <div className="absolute Dentobees-Learning-Play-Background rounded-[26px]"></div>
                                    <button onClick={onOpen} className='video-main relative flex justify-center items-center cursor-pointer'>
                                        <div className="waves-block mt-7 md:mt-4 lg:mt-2 xl:mt-0 ml-7 md:ml-3 lg:ml-1 xl:-ml-1">
                                            <div className="waves2 wave-1 absolute w-[127px] md:w-[157px] lg:w-[167px] xl:w-[187px] h-[127px] md:h-[157px] lg:h-[167px] xl:h-[187px]"></div>
                                            <div className="waves2 wave-2 absolute w-[127px] md:w-[157px] lg:w-[167px] xl:w-[187px] h-[127px] md:h-[157px] lg:h-[167px] xl:h-[187px]"></div>
                                            <div className="waves2 wave-3 absolute w-[127px] md:w-[157px] lg:w-[167px] xl:w-[187px] h-[127px] md:h-[157px] lg:h-[167px] xl:h-[187px]"></div>
                                        </div>
                                        <div className="z-10">
                                            <FaPlay className='text-[#FFFFFF] text-[30px] md:text-[35px] lg:text-[40px] xl:text-[50px]' />
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='absolute -top-[70px] xl:-top-[60px] -right-[8px] md:-right-[20px] lg:-right-[30px] xl:-right-[40px]'>
                        <Image src="/Dentobees-Learning-Teeth.svg" alt="Teeth" width={105} height={149} className='w-[40px] md:w-[50px] lg:w-[80px] xl:w-[105px]' />
                    </div>
                </div>
            </div>

            <Modal size="3xl" ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className="rounded-[8px] bg-[#F7F6FB]">
                    {(onClose) => (
                        <>
                            <ModalHeader className="py-5 px-2.5 md:px-5 Small-heading">
                                How it works
                            </ModalHeader>
                            <ModalBody className="py-0">
                                <iframe
                                    width="450"
                                    height="355"
                                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full rounded-[8px]"
                                ></iframe>
                            </ModalBody>
                            <ModalFooter className="py-5 px-2.5 md:px-5">
                                <div className="flex gap-3 items-center">
                                    <button onClick={onClose} className="w-[120px] sm:w-[160px] py-2 Modal-cancel-button">Close</button>
                                    <button onClick={onClose} className="w-[120px] sm:w-[160px] py-2 Modal-submit-button">Done</button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default Learning