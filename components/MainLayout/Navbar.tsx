'use client'
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Navbar as NextUINavbar, NavbarContent, NavbarMenu, NavbarMenuToggle, NavbarBrand, NavbarItem, } from "@nextui-org/navbar";
import { Image } from "@nextui-org/image";
import { IoMdLogIn } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
    { href: "/", name: "Home" },
    { href: "#", name: "About us" },
    { href: "#", name: "Features" },
    { href: "#", name: "Contact" },
];

const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.innerWidth >= 1024) {
                setIsScrolled(window.scrollY > 0);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const bottomVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    };

    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === href;
        }
        return pathname.startsWith(href);
    };

    return (
        <div className={`flex w-full ${isScrolled ? "justify-center" : ""}`}>
        <div
          className={`fixedNavbar mx-3 md:mx-8 lg:mx-12 xl:mx-20 2xl:mx-24 mt-4 md:mt-6 lg:mt-7 transform transition-all duration-500 ${
            isScrolled ? "w-fit top-0" : "top-0 left-0 right-0"
          }`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={bottomVariants}
          >
            <NextUINavbar
              maxWidth="full"
              className="bg-white backdrop-blur-[41px] rounded-[16px]"
            >
              <NavbarContent>
                <div
                  className={`flex w-full gap-6 lg:gap-7 xl:gap-8 items-center transition-all duration-500 ${
                    isScrolled ? "justify-normal" : "justify-between"
                  }`}
                >
                  {/* Logo */}
                  <NavbarBrand as="li" className="gap-3 max-w-fit">
                    <Link href="/" className="cursor-pointer relative">
                      {/* Mobile */}
                      <div className={`md:hidden w-[205px] h-[58px]`}>
                        <Image
                          src="/xtrnew.jpeg"
                          alt="xtr"
                          className="object-contain"
                          width={"150px"}
                          height={'60px'}
                        />
                      </div>
  
                      {/* Tablet */}
                      <div
                        className={`hidden md:block lg:hidden transition-all duration-500 ${
                          isScrolled ? "w-[120px] h-[40px]" : "w-[185px] h-[58px]"
                        } relative`}
                      >
                        <Image
                          src="/xtrnew.jpeg"
                          alt="xtr"
                          className="object-contain"
                          width={"150px"}
                          height={'50px'}
                        />
                      </div>
  
                      {/* Desktop */}
                      <div
                        className={`hidden lg:block transition-all duration-500 ${
                          isScrolled ? "w-[160px] h-[40px]" : "w-[233px] h-[40px]"
                        } relative`}
                      >
                        {
                            isScrolled ? 
                            <Image
                              src="/xtrnew.jpeg"
                              alt="xtr"
                              className="object-contain"
                              width={"150px"}
                              height={'50px'}
                            />:
                            <Image
                            src="/xtrnew.jpeg"
                            alt="xtr"
                            className="object-contain"
                            
                          />
                        }
                      </div>
                    </Link>
                  </NavbarBrand>
  
                  {/* Desktop nav links */}
                  <div className="hidden lg:flex gap-5 lg:gap-[30px] items-center">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`cursor-pointer hover:underline transition-all duration-100 ${
                          isScrolled
                            ? "text-[14px] lg:text-[16px] leading-[19px] lg:leading-[21.59px]"
                            : "text-[16px] lg:text-[18px] leading-[21px] lg:leading-[24.59px]"
                        } ${
                          isActive(item.href)
                            ? "font-bold text-black underline"
                            : "font-normal hover:font-bold text-[#3F3A3A] hover:text-[#B3422E]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
  
                  {/* Desktop login */}
                  <NavbarItem className="hidden lg:flex gap-2">
                    <Link
                      href="#"
                      target="_blank"
                      className={`flex gap-1.5 items-center font-normal text-white bg-[#B3422E] hover:bg-[#006C4F] transition-all duration-300 rounded-[40px] cursor-pointer ${
                        isScrolled
                          ? "py-1.5 px-3 text-[14px] lg:text-[16px] leading-[19px] lg:leading-[23px]"
                          : "py-2 px-7 text-[16px] lg:text-[18px] leading-[21px] lg:leading-[27px]"
                      }`}
                    >
                      <IoMdLogIn
                        className={`${isScrolled ? "text-[18px]" : "text-[20px]"}`}
                      />
                    </Link>
                  </NavbarItem>
                </div>
              </NavbarContent>
  
              {/* Mobile toggle */}
              <NavbarContent className="lg:hidden basis-1 pl-4" justify="end">
                <NavbarMenuToggle className="text-black" />
              </NavbarContent>
  
              {/* Mobile menu */}
              <NavbarMenu className="bg-white">
                <div className="mt-7 flex flex-col gap-6">
                  <div className="flex flex-col gap-2">
                    {navItems.map((item, index) => (
                      <Link
                        key={index}
                        href={item.href}
                        className={`w-fit text-[18px] leading-[24.59px] transition-all duration-300 cursor-pointer ${
                          isActive(item.href)
                            ? "font-bold text-B1"
                            : "font-normal hover:font-bold text-[#3F3A3A] hover:text-B1"
                        }`}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
  
                  <div>
                    <Link
                      href="#"
                      target="_blank"
                      className="w-fit flex gap-1.5 items-center py-2 px-5 font-normal text-[18px] leading-[27px] text-white bg-[#B3422E] hover:bg-[#006C4F] transition-all duration-300 rounded-[40px]"
                    >
                      <IoMdLogIn className="text-[20px]" />
                      <p>Login</p>
                    </Link>
                  </div>
                </div>
              </NavbarMenu>
            </NextUINavbar>
          </motion.div>
        </div>
      </div>
    )
}

export default Navbar