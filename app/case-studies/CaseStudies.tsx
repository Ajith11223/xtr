'use client'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import axios from 'axios';
import BlogCardSkeleton from '@/components/BlogCardSkeleton';
import { Card, CardBody, CardFooter } from "@heroui/react";

interface CaseStudy {
  _id: string;
  slug?: string;
  caseStudyTitle: string;
  shortDescription: string;
  image?: string;
}

const CaseStudies = () => {
  const [caseStudy, setCaseStudy] = useState<CaseStudy[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const { data } = await axios.get('https://api.dentobees.com/case-study');
        setCaseStudy(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetch();
  }, []);

  return (
    <div className='relative overflow-hidden z-0 bg-white'>
      <div className='absolute Dentobees-Pages-Background -z-10'></div>
      <div className='min-h-[900px] Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center gap-6 md:gap-8'>
        <h2 className="w-full Page-Heading text-center">Case Studies</h2>
        <div className='w-full max-w-[1700px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-[34px]'>
          {loading ?
            Array.from({ length: 3 }).map((_, index) => <BlogCardSkeleton key={index} />
            ) :
            caseStudy.map((item, index) => (
              <div key={index} className="w-full cursor-pointer Hover-effect">
                <Link href={`/case-studies/${item?.slug}`} className="w-full max-w-[390px] flex flex-col gap-[18px] cursor-pointer Hover-effect" >
                  <Card isPressable className="border-[1px] border-[#81D5B999] shadow-none flex flex-col gap-[18px] p-2.5 bg-[#FFFFFFB2] backdrop-blur-[19%]">
                    <CardBody className="p-0">
                      <Image src={item.image || '/default-image.jpg'} alt={item.caseStudyTitle} width={390} height={250} className="w-full rounded-[16px] object-cover" />
                    </CardBody>
                    <CardFooter className="p-0 pb-3 flex flex-col gap-2.5 items-start font-bold">
                      <h5 className="h-[48px] md:h-[56px] Small-heading text-black text-left line-clamp-2"> {item.caseStudyTitle}</h5>
                      <p className="Small-text text-[#A8A4A4] text-left line-clamp-2">{item.shortDescription}</p>
                    </CardFooter>
                  </Card>
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default CaseStudies