"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FiShare2 } from "react-icons/fi";
import { LiaUserSolid } from "react-icons/lia";
import { useParams } from "next/navigation";
import axios from "axios";
import ContentSkelton from "@/components/ContentSkelton";
import { BreadcrumbItem, Breadcrumbs } from "@heroui/react";

const SingleCaseStudy = () => {
  const { slug } = useParams();
  const [caseStudy, setCaseStudy] = useState<any>(null);

  useEffect(() => {
    const fetchCaseStudy = async () => {
      try {
        const { data } = await axios.get(
          `https://api.dentobees.com/case-landing/${slug}`
        );
        setCaseStudy(data);
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCaseStudy();
  }, [slug]);

  if (!caseStudy) {
    return (
      <div className="relative overflow-hidden z-0 bg-white">
        <div className="absolute Dentobees-Pages-Background -z-10"></div>
        <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center">
          <div className="w-full max-w-[1700px] flex flex-col gap-10">
            <ContentSkelton />
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="relative overflow-hidden z-0 bg-white">
      <div className="absolute Dentobees-Pages-Background -z-10"></div>

      <div className="Common-padding pt-[110px] md:pt-[130px] xl:pt-[150px] pb-[90px] md:pb-[110px] flex flex-col items-center">
        <div className="w-full max-w-[1700px] flex flex-col gap-10">
          <div className="flex flex-row gap-3 overflow-hidden overflow-x-scroll Hide-ScrollBar">
            <div className="">
              <Breadcrumbs className="font-bold">
                <BreadcrumbItem href="/" className="hover:underline">
                  Home
                </BreadcrumbItem>
                <BreadcrumbItem
                  href="/case-studies"
                  className="hover:underline"
                >
                  Case-Study
                </BreadcrumbItem>
                <BreadcrumbItem className="hover:underline">
                  {caseStudy?.caseStudyTitle}
                </BreadcrumbItem>
              </Breadcrumbs>
            </div>
            <div className="text-[20px] text-black cursor-not-allowed">
              <FiShare2 />
            </div>
          </div>
          <div className="flex flex-col gap-[30px] items-center">
            <h3 className="max-w-[900px] font-bold Large-heading text-[#332F2F] item-center text-center">
              {caseStudy?.caseStudyTitle}
            </h3>
            <div className="flex flex-col gap-6">
              <div className="flex justify-center">
                <Image
                  src={caseStudy?.image}
                  alt="Blog Image"
                  width={1240}
                  height={461}
                  className="w-[1240px] rounded-[16px]"
                />
              </div>
              <div className="flex justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex gap-1.5 items-center text-[#332F2F] ">
                    <div className="shrink-0 text-[18px]">
                      <LiaUserSolid />
                    </div>
                    <p>Author: Jhon Doe</p>
                  </div>
                  <div className="max-w-[250px] text-bold">{caseStudy?.caseStudyTitle}</div>
                </div>
                <div className="flex flex-col md:flex-row gap-1.5">
                  <b> Published Date:</b>
                  <b className="text-[#85969F]">{caseStudy?.publicationDate}</b>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center gap-10 text-center">
            <div
              className="font-normal Normal-text text-[#6A6565] max-w-[1240px] p-3 md:p-5 lg:p-6 border-[1px] lg:border-none bg-[#e7e7e7] backdrop-blur-[19%] rounded-[16px] text-justify"
              dangerouslySetInnerHTML={{ __html: caseStudy?.shortDescription }}
            />
            <div
              className="prose max-w-none text-[#6A6565] font-normal Normal-text"
              dangerouslySetInnerHTML={{
                __html: caseStudy?.caseStudyDescription
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCaseStudy;
