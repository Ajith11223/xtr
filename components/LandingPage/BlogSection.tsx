'use client'
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Card, CardBody, CardFooter } from "@heroui/react";
import axios from "axios";

interface Blog {
    _id: string;
    slug?: string;
    articleTitle: string;
    shortDescription: string;
    image?: string;
}

const BlogSection = () => {

    const [blogData, setBlogData] = useState<Blog[]>([]);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const { data } = await axios.get('https://api.dentobees.com/landing/home/front')
                setBlogData(data)
                return data
            } catch (error) {
                console.log(error)
            }
        }
        fetchBlogs()
    }, [])

    return (
        <div className="py-12 md:py-[50px] xl:py-[60px] flex flex-col items-center">
            <div className="w-full max-w-[1700px] flex flex-col gap-7">
                <div className="flex gap-5 items-center justify-between">
                    <h3 className="font-bold text-[32px] md:text-[38px] leading-[36.08px] md:leading-[44.08px] tracking-[-0.04em] text-B1">
                        Blogs
                    </h3>
                    <Link href="/blogs" className="py-[11px] px-6 Green-button">
                        View All
                    </Link>
                </div>
                <div className="flex xl:grid xl:grid-cols-3 gap-5 overflow-hidden overflow-x-scroll Hide-ScrollBar">
                    {blogData.slice(0, 3).map((item, index) => (
                        <div key={index} className="flex w-full justify-center">
                            <Link href={`blogs/${item.slug}`} className='w-[300px] sm:w-[400px] cursor-pointer'>
                                <Card isPressable className="p-0 flex flex-col gap-2.5 border-none shadow-none rounded-[14px]">
                                    <CardBody className="p-0">
                                        <div className="rounded-[14px]">
                                            <Image
                                                src={item.image || "/fallback-image.jpg"} // fallback if no image
                                                alt={item.articleTitle}
                                                width={400}
                                                height={279}
                                                className="object-cover rounded-[14px]"
                                            />
                                        </div>
                                    </CardBody>
                                    <CardFooter className="p-0">
                                        <div className='w-full h-[80px] md:h-[85px] lg:h-[90px] px-3 md:px-[21px] pt-[14px] bg-[#00D299] rounded-[14px] text-left'>
                                            <p className='font-bold text-[20px] md:text-[24px] lg:text-[26px] leading-[26.48px] md:leading-[28.48px] lg:leading-[30.48px] tracking-[-0.04em] text-[#3E3A3A] pr-[5%] line-clamp-2'>
                                                {item.articleTitle}
                                            </p>
                                        </div>
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

export default BlogSection