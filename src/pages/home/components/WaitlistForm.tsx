import { useState } from "react";
import emailjs from "@emailjs/browser";
import HeroImage from "../../../assets/waitlistImage.webp"; // use the same or another photo
import toast from "react-hot-toast";

type Props = {
  onSuccess?: () => void;
};

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  instagramId: string;
  message?: string; // optional, kept for template flexibility
};

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string;
const BACKEND_URL = import.meta.env.VITE_BACKEND_URL as string;

const initialState: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  instagramId: "",
  message: "",
};

export default function WaitlistForm({ onSuccess }: Props) {
  const [formData, setFormData] = useState<FormData>(initialState);
  const [status, setStatus] = useState<string>("");
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const validate = () => {
    if (!formData.firstName.trim()) return "First name is required.";
    if (!formData.email.trim()) return "Email is required.";
    const emailOk = /\S+@\S+\.\S+/.test(formData.email);
    if (!emailOk) return "Please enter a valid email.";
    return "";
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validate();
    if (err) {
      setStatus(err);
      return;
    }

    setLoading(true);
    setStatus("Sending...");

    try {
      // 1) Send to Google Sheets backend (your API)
      const response = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.status === "success") {
        // 2) Send via EmailJS (optional if envs present)
        if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              name: `${formData.firstName} ${formData.lastName}`.trim(),
              email: formData.email,
              phone: formData.phone,
              instagramId: formData.instagramId,
              message: formData.message || "New waitlist signup",
            },
            EMAILJS_PUBLIC_KEY
          );
        }

        setStatus("Message sent successfully!");
        setFormData(initialState);
        toast.success("Submitted Successfully ");
        if (onSuccess) onSuccess();
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="grid waitlist_modal_bg border-gray-500 border grid-cols-1 md:grid-cols-2 rounded-[30px] h-[689px] overflow-hidden">
      {/* Left: Form */}
      <div className=" pt-[112px] flex flex-col justify-start items-start px-[56px]">
        <h3 className="text-white mb-[46px] font-bold text-xl md:text-[32px] text-start font-db-sans ">
          Join La Waitlist
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4 ">
          <input
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            placeholder="Nom"
            className="w-full text-[16px] bg-[#FFFFFF1A] rounded-full  text-white placeholder-white/60 px-[26px] py-[14px] outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
          <input
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Nom de Famille"
            className="w-full text-[16px] bg-[#FFFFFF1A] rounded-full  text-white placeholder-white/60 px-[26px] py-[14px] outline-none focus:ring-2 focus:ring-fuchsia-400"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Courriel"
            className="w-full text-[16px] bg-[#FFFFFF1A] rounded-full  text-white placeholder-white/60 px-[26px] py-[14px] outline-none focus:ring-2 focus:ring-fuchsia-400"
            required
          />
          <input
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g +87 762 77552"
            className="w-full text-[16px] bg-[#FFFFFF1A] rounded-full  text-white placeholder-white/60 px-[26px] py-[14px] outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
          <input
            name="instagramId"
            value={formData.instagramId}
            onChange={handleChange}
            placeholder="Instagram ID (Business Account)"
            className="w-full  text-[16px] bg-[#FFFFFF1A] rounded-full  text-white placeholder-white/60 px-[26px] py-[14px] outline-none focus:ring-2 focus:ring-fuchsia-400"
          />
          <div className="pt-[36px]">
            <button
              type="submit"
              disabled={loading}
              className=" inline-flex text-[24px] font-bold items-center justify-center rounded-full px-8 py-5 w-full join_now_bg text-white hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Sending..." : "Join Now →"}
            </button>
          </div>

          {!!status && (
            <p
              className={`text-sm ${
                status.includes("success")
                  ? "text-emerald-400"
                  : "text-rose-300"
              }`}
            >
              {status}
            </p>
          )}
        </form>
      </div>

      {/* Right: Image */}
      <div className="relative w-[655px]">
        <img
          src={HeroImage}
          alt="Waitlist Visual"
          className="h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>
    </div>
  );
}
