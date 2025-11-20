import React, { useState } from "react";
import "./style.css";
import { motion } from "framer-motion";
import { useFormHooks2 } from "@/app/hooks/useFormHooks2";

function ContactUs2Form() {
  // const [formData, setFormData] = useState({
  //   firstName: "",
  //   lastName: "",
  //   number: "",
  //   email: "",
  //   message: "",
  // });
  // let _name, _value;
  // function handleFormData(e) {
  //   _name = e.target.name;
  //   _value = e.target.value;
  //   setFormData({ ...formData, [_name]: _value });
  // }
  // function handleFormSubmit(e) {
  //   e.preventDefault();
  //   console.log({
  //     ...formData,
  //     fullName: formData.firstName + " " + formData.lastName,
  //   });
  //   setFormData({
  //     firstName: "",
  //     lastName: "",
  //     number: "",
  //     email: "",
  //     message: "",
  //   });
  // }
  const { formRef, formData, handleSubmit, handleFormData } = useFormHooks2();
  return (
    <div className="contact-form-div-of-contact-us-2 w-48% flex items-center justify-center 466px:w-full">
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className=" w-full flex items-start justify-center flex-col gap-4 792px:gap-4"
      >
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="h2-div-for-contact-form-div-of-contact-us-2 text-center"
        >
          <span className="span-for-contact-form-div-of-contact-us-2"></span>
          <h2 className=" bricolage_grotesque_head text-p1 font-p1 text-transparent bg-clip-text bg-color_linear_for_h2 792px:text-p2">
            Contact With Us
          </h2>
        </motion.div>
        <motion.h3
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className=" bricolage_grotesque_head text-h2 font-h2 leading-h2 relative w-full mb-2 1004px:text-h3 1004px:leading-h3 792px:text-h4"
        >
          Contact Form!
        </motion.h3>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="name-div-of-form-for-contact-form-div-of-contact-us-2 w-full flex items-center justify-center gap-4 792px:gap-4"
        >
          <input
            className=" border border-color_gray bg-white w-1/2 p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
            type="text"
            placeholder="First Name"
            value={formData.fname}
            name="fname"
            onChange={handleFormData}
            required
          />
          <input
            className=" border border-color_gray bg-white w-1/2 p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
            type="text"
            placeholder="Last Name"
            value={formData.lname}
            name="lname"
            onChange={handleFormData}
            required
          />
        </motion.div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          className="email-and-number-div-of-form-for-contact-form-div-of-contact-us-2 w-full flex items-center justify-center gap-4 792px:gap-4"
        >
          <input
            type="email"
            placeholder="Email"
            className=" border border-color_gray bg-white w-1/2 p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
            value={formData.email}
            name="email"
            onChange={handleFormData}
            required
          />
          <input
            className=" border border-color_gray bg-white w-1/2 p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
            type="text"
            placeholder="Number"
            value={formData.number}
            name="number"
            onChange={handleFormData}
            required
          />
        </motion.div>
        <motion.textarea
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          rows={4}
          placeholder="Message"
          className=" border border-color_gray bg-white resize-none w-full p-4 public_sans_body text-p1 font-p1 text-color_gray focus:outline-none 1004px:text-p2 1004px:p-2 792px:text-p3 792px:p-1"
          value={formData.message}
          name="message"
          onChange={(e) => handleFormData(e)}
        ></motion.textarea>

        <motion.button
          initial={{ opacity: 0, y: "50%" }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
          }}
          viewport={{ once: true }}
          type="submit"
          className=" bricolage_grotesque_head font-h5 text-h5 bg-color_blue px-7 py-4 text-white 
        relative z-0 flex items-center justify-center overflow-hidden 1004px:text-p1 792px:text-p2 400px:px-3 400px:py-2
        
        before:absolute before:inset-0
        before:-z-10 before:translate-x-[150%]
        before:translate-y-[150%] before:scale-[2.5]
        before:rounded-[100%] before:bg-color_orange
        before:transition-transform before:duration-700
        hover:before:translate-x-[0%]
        hover:before:translate-y-[0%]
        active:scale-75
        active:transition-all
        active:duration-700
              "
        >
          Send Message
        </motion.button>
      </form>
    </div>
  );
}

export default ContactUs2Form;
