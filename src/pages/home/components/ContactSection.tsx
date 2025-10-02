import React, { useState } from "react";
import PhoneIcon from "@/assets/phone.svg";
import MailIcon from "@/assets/Email.svg";
import InstaIcon from "@/assets/InstaFull.svg";
import TiktokIcon from "@/assets/TikTokFUll.svg";
import GlobeIcon from "@/assets/webIcon.svg";
import emailjs from "@emailjs/browser";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState(""); // To show submission status

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      // 1️⃣ Send to Google Sheets backend
      const response = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      const result = await response.json();

      if (result.status === "success") {
        // 2️⃣ Send email via EmailJS
        if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
          await emailjs.send(
            EMAILJS_SERVICE_ID,
            EMAILJS_TEMPLATE_ID,
            {
              name: `${formData.firstName} ${formData.lastName}`,
              email: formData.email,
              phone: formData.phone,
              message: formData.message,
            },
            EMAILJS_PUBLIC_KEY
          );
        }

        // ✅ Success message
        setStatus("Message sent successfully!");
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    }
  };
  return (
    <section className="py-16 px-4 md:py-24">
      <div
        className="mx-auto  relative z-20  w-full max-w-6xl rounded-[22px] border border-white/10
                   bg-[radial-gradient(140%_160%_at_10%_10%,rgba(239,32,151,0.18),rgba(255,255,255,0)_42%),#0E1113]
                   shadow-[0_40px_120px_-20px_rgba(0,0,0,0.6)] p-4 md:p-6 lg:p-8"
      >
        <div className="flex md:flex-row flex-col gap-6 md:gap-10 xl:gap-40">
          {/* Left: Form */}
          <div className="rounded-2xl  md:max-w-[450px] xl:max-w-[508px]">
            <h3 className="text-[22px] md:text-[24px] font-semibold text-zinc-100 mb-5">
              Laisse–nous un message
            </h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">Nom</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Nom"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400 border border-white/10 px-3 outline-none focus:border-[#47C7FF] transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">
                    Nom de Famille
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Nom de Famille"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400 border border-white/10 px-3 outline-none focus:border-[#47C7FF] transition"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">Courriel</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Courriel"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400 border border-white/10 px-3 outline-none focus:border-[#47C7FF] transition"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-zinc-300">
                    Numéro de Téléphone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. +1 647 267 7862"
                    className="h-11 w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400 border border-white/10 px-3 outline-none focus:border-[#47C7FF] transition"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-zinc-300">Message</label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="w-full rounded-md bg-white/5 text-zinc-100 placeholder:text-zinc-400 border border-white/10 p-3 outline-none focus:border-[#47C7FF] transition resize-none"
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center w-full justify-center rounded-full px-6 py-3 font-semibold text-white bg-[linear-gradient(167.84deg,#28B6FF_-76.16%,#015673_126.95%)] shadow-[0_14px_40px_-10px_rgba(40,182,255,0.55)] hover:opacity-95 transition"
              >
                Envoyez un message
              </button>

              {status && <p className="mt-2 text-sm text-white/80">{status}</p>}
            </form>
          </div>

          {/* Right: Contact card */}
          <aside
            className="rounded-2xl md:w-[500px] lg:w-[464px] p-[1.2px]
                      contactbg"
          >
            <div
              className="rounded-2xl h-full
                        
                         border border-white/10 px-5 py-6 md:px-6 md:py-7 shadow-[0_20px_60px_-20px_rgba(239,32,151,0.45)]"
            >
              <h4 className="text-[18px] font-semibold text-white mb-4">
                Contactez–nous
              </h4>
              <ul className="space-y-3 text-zinc-100/90">
                <li className="flex items-center gap-3">
                  <PhoneIcon />
                  <span>(514) 378–1226</span>
                </li>
                <li className="flex items-center gap-3">
                  <MailIcon />
                  <span>missmuse.lashes@gmail.com</span>
                </li>
              </ul>

              <div className="my-5 h-px w-full bg-white/15" />

              <h4 className="text-[18px] font-semibold text-white mb-3">
                Découvrez–nous
              </h4>
              <ul className="space-y-3 text-zinc-100/90">
                <li className="flex items-center gap-3">
                  <InstaIcon />
                  <span>@missmuselashes</span>
                </li>
                <li className="flex items-center gap-3">
                  <TiktokIcon />
                  <span>@missmuselashes</span>
                </li>
                <li className="flex items-center gap-3">
                  <GlobeIcon />
                  <span>missmuse.ca</span>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
