import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { sendMessage } from "@/services/apis";

const Contact = () => {
  const [form, setForm] = useState({ senderName: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await sendMessage(form);
      toast.success(res.data.message);
      setForm({ senderName: "", subject: "", message: "" });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="overflow-x-hidden py-10 px-4 sm:px-6 lg:px-8">
      {/* Header with enhanced styles */}
      <div className="relative mb-8 text-center">
        <h1
          className="text-[2rem] sm:text-[2.75rem] md:text-[3rem] lg:text-[3rem] font-extrabold tracking-wide uppercase"
          style={{
            background: "linear-gradient(90deg, rgba(33,150,243,1) 0%, rgba(255,193,7,1) 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            display: "inline-block",
            position: "relative",
          }}
        >
          Contact <span className="text-[#ffba08]">Me</span>
        </h1>
        {/* <span className="absolute w-full h-1 top-7 sm:top-7 md:top-8 lg:top-11 z-[-1] bg-slate-200"></span> */}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto flex flex-col gap-6 bg-white shadow-lg rounded-lg p-6 sm:p-8 md:p-10 lg:p-12">
        <div className="flex flex-col gap-2">
          <Label className="text-lg text-gray-700 font-medium">Your Name</Label>
          <Input
            name="senderName"
            value={form.senderName}
            onChange={handleChange}
            placeholder="Enter your name"
            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-lg text-gray-700 font-medium">Subject</Label>
          <Input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Enter the subject"
            className="border-2 border-gray-300 p-3 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300"
          />
        </div>
        <div className="flex flex-col gap-2">
          <Label className="text-lg text-gray-700 font-medium">Message</Label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="border-2 border-gray-300 p-3 h-32 rounded-lg focus:border-blue-500 focus:outline-none transition-all duration-300 resize-none text-gray-700"
            style={{ color: "#333" }} // Ensures typing text is visible
          />
        </div>
        <div className="flex justify-center">
          <Button
            type="submit"
            disabled={loading}
            className="w-full sm:w-auto px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
