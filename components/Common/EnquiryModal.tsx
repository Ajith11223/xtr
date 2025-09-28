"use client";
import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button
} from "@heroui/react";
import Image from "next/image";
import { Spinner } from "@heroui/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  mobile: Yup.string()
    .required("Mobile number is required")
    .matches(/^[0-9]{10}$/, "Must be a valid 10-digit number"),
  email: Yup.string().email("Invalid email"),
  clinicName: Yup.string(),
  clinicLocation: Yup.string()
});

export default function EnquiryModal({ isOpen, onClose, submitLoading }: any) {
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const initialValues = {
    name: "",
    mobile: "",
    email: "",
    clinicName: "",
    clinicLocation: ""
  };

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyA-e10eJjNWudnnOzn93COdvHM5qD3UHXsIBKUGLyvzKEGPombsgrAYeczqk4E2plaew/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: new URLSearchParams(values).toString()
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setSubmitStatus({
        success: true,
        message: "Thank you! Your enquiry has been submitted successfully."
      });
      resetForm();

      setTimeout(() => {
        onClose();
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      console.error("Submission failed:", error);
      setSubmitStatus({
        success: false,
        message: "Submission failed. Please try again later."
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal size="4xl" isOpen={isOpen} onClose={onClose} placement="top-center">
      <ModalContent className="bg-[#F1F0FF]">
        <ModalHeader className="py-0 px-0 mx-2.5 md:mx-5 xl:mx-6 pt-5 pb-[14px] flex flex-col gap-1 border-b-[1px] border-[#FFFFFF]">
          <h5 className="Modal-heading">Book For A Demo</h5>
        </ModalHeader>
        <ModalBody className="mt-3 px-2.5 md:px-5 xl:px-6 py-0">
          {submitStatus ? (
            <div
              className={`p-4 rounded-lg text-center ${
                submitStatus.success
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {submitStatus.message}
            </div>
          ) : (
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting, handleSubmit }) => (
                <Form>
                  <div className="flex flex-col gap-5">
                  <div className="md:grid md:grid-cols-2 gap-5">
                    <div className="flex flex-col gap-3">
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
                    </div>
                    <div className="hidden md:flex justify-center">
                      <Image
                        src="/Dentobees-Enquiry.svg"
                        alt="Enquiry illustration"
                        width={367}
                        height={367}
                        priority
                      />
                    </div>
                  </div>
                  
                  {/* <ModalFooter className="mt-3 lg:mt-0 px-0 py-5"> */}
                    <div className="flex items-center gap-3 pb-4">
                      <Button
                        onPress={onClose}
                        className="w-[140px] md:w-[180px] py-[22px] border-[1px] border-[#00D299] font-medium Normal-text text-[#00D299] hover:text-[#EEEEEE] bg-[#FFFFFF] hover:bg-[#278F73] transition-all duration-300 rounded-[12px]"
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        color="primary"
                        onPress={() => handleSubmit()}
                        isLoading={isSubmitting || submitLoading}
                        className="w-[140px] md:w-[180px] py-[22px] border-[1px] border-[#C8CDD9] font-medium Normal-text text-[#EEEEEE] bg-[#00D299] hover:bg-[#278F73] transition-all duration-300 rounded-[12px]"
                      >
                        Submit
                      </Button>
                    </div>
                    </div>
                  {/* </ModalFooter> */}
                </Form>
              )}
            </Formik>
          )}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
