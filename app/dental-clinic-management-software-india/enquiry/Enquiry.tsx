"use client";
import React from "react";
import { Button, useDraggable } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FiPlay } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

interface FormData {
  name: string;
  mobile: string;
  email: string;
  clinicName: string;
  clinicLocation: string;
}

export default function Enquiry({ onClose, onOpen, isOpen }: any) {
  const router = useRouter();
  const targetRef = React.useRef(null);
  const formRef = React.useRef<HTMLFormElement>(null);
  const { moveProps } = useDraggable({
    targetRef,
    canOverflow: true,
    isDisabled: !isOpen
  });

  // Validation schema using Yup
  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    mobile: Yup.string()
      .required("Mobile number is required")
      .matches(/^\d{10}$/, "Please enter a valid 10-digit mobile number"),
    email: Yup.string().email("Please enter a valid email address"),
    clinicName: Yup.string(),
    clinicLocation: Yup.string()
  });

  const initialValues: FormData = {
    name: "",
    mobile: "",
    email: "",
    clinicName: "",
    clinicLocation: ""
  };

  const submitToGoogleSheet = async (formData: FormData): Promise<boolean> => {
    const scriptUrl =
      "https://script.google.com/macros/s/AKfycbyGTr1_3Ugj9Uzs6f6TnTyrgLtTgVLXnsoycDuUSl_1dx9lqbtVeV4Cer-pBIONRcLoTQ/exec";

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("mobile", formData.mobile);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("clinicName", formData.clinicName);
      formDataToSend.append("clinicLocation", formData.clinicLocation);
      formDataToSend.append("timestamp", new Date().toISOString());

      const response = await fetch(scriptUrl, {
        method: "POST",
        body: formDataToSend,
        mode: "no-cors"
      });

      return true;
    } catch (error) {
      console.error("Error submitting to Google Sheet:", error);
      return false;
    }
  };

  const handleSubmit = async (values: FormData, { setSubmitting }: any) => {
    try {
      const success = await submitToGoogleSheet(values);
      if (success) {
        router.push(
          "/dental-clinic-management-software-india/enquiry/demo-video"
        );
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setSubmitting(false);
    }
  };

  const handleClose = () => {
    router.push("/dental-clinic-management-software-india");
    if (onClose) onClose(); // Call the onClose prop if it exists
  };

  const handleThumbnailPlayClick = () => {
    if (formRef.current) {
      formRef.current.dispatchEvent(
        new Event("submit", { cancelable: true, bubbles: true })
      );
    }
  };



  return (
    <>
      <div className="">
        <div className="w-full bg-[#F1F0FF] pt-[95px] md:pt-[100px] pb-[72px] items-center">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form
                ref={formRef}
                className="flex flex-col gap-3 p-5 rounded-[16px]"
                id="fill-form"
              >
                <div className="flex flex-row gap-1 items-center">
                  <h5 className="text-[#1D5A49] Small-heading">
                    Watch Demo! <span className="Medium-text">(19m 42s)</span>{" "}
                  </h5>
                </div>
                <div className="relative flex justify-center items-center">
                  <Image
                    src="/Meta-Dentobees-Thumbnail.png"
                    alt="Image"
                    width={200}
                    height={95}
                    className="w-full rounded-[16px]"
                  />
                  <div className="absolute">
                    <div className="video-main relative flex justify-center items-center cursor-pointer">
                      <button 
                        type="button"
                        onClick={handleThumbnailPlayClick}
                        className="z-10 bg-[#35F99C] p-2 rounded-[100%] cursor-pointer"
                        disabled={isSubmitting}
                      >
                        <FiPlay className="text-[#FFFFFF] text-[30px] pl-1" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="Label-text">
                    Name<span className="Error-text">*</span>
                  </label>
                  <Field
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="Input-field Input-text"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="Error-text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="mobile" className="Label-text">
                    Mobile Number<span className="Error-text">*</span>
                  </label>
                  <Field
                    name="mobile"
                    type="tel"
                    placeholder="Enter 10-digit mobile number"
                    className="Input-field Input-text"
                    maxLength={10}
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="Error-text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="Label-text">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Enter email"
                    className="Input-field Input-text"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="Error-text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="clinicName" className="Label-text">
                    Clinic Name
                  </label>
                  <Field
                    name="clinicName"
                    type="text"
                    placeholder="Enter clinic name"
                    className="Input-field Input-text"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="clinicLocation" className="Label-text">
                    Clinic Location
                  </label>
                  <Field
                    name="clinicLocation"
                    type="text"
                    placeholder="Enter clinic location"
                    className="Input-field Input-text"
                  />
                </div>
                <div className="mt-0 px-0 py-5 grid grid-cols-2 gap-3">
                  {" "}
                  <Button
                    type="button"
                    onPress={handleClose}
                    className="w-full py-[22px] border-[1px] border-[#A8A4A4] hover:border-[#278F73] font-medium Normal-text text-[#3E3A3A] hover:text-white bg-white hover:bg-[#278F73] transition-all duration-300 rounded-[12px]"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    isDisabled={isSubmitting}
                    className="py-[22px] px-2 Meta-green-button flex items-center justify-center gap-2"
                  >
                    <div className="shrink-0">
                      <Image
                        src="/Meta-Dentobees-Playbutton-Image.svg"
                        alt="Watch Demo Icon"
                        width={22}
                        height={22}
                      />
                    </div>
                    <p className="font-bold underline">
                      {isSubmitting ? "Processing..." : "Play Video"}
                    </p>
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
}
