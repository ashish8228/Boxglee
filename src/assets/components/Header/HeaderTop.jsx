import React from "react";
import { FaFacebookF, FaYoutube, FaInstagram, FaTiktok, FaPinterest } from "react-icons/fa";

const HeaderTop = () => {

  const link = ["Our Story", "Our History", "Our Team", "FAQs",]
  const socialLinks = [
    {
      name: "Facebook",
      url: "https://www.facebook.com/ColonialCandle/",
      icon: <FaFacebookF className="icon" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/channel/UCf0SCosURVy4VKKbcFbUY3g",
      icon: <FaYoutube className="icon" />,
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/colonialcandle/",
      icon: <FaInstagram className="icon" />,
    },
    {
      name: "TikTok",
      url: "https://tiktok.com/@colonialcandle",
      icon: <FaTiktok className="icon" />,
    },
    {
      name: "Pinterest",
      url: "https://in.pinterest.com/colonialcandle/",
      icon: <FaPinterest className="icon" />,
    },
  ];

  return (
    <div className="bg-[#091f40] text-white ">
      <div className="max-w-350  mx-auto hidden md:flex items-center justify-between py-1 px-7.5">
        {/* Left section Social icons  */}
        <div>
          <ul className="social inline-flex flex-wrap">
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a
                  className=" flex items-center justify-center mt-2 mr-2"
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}

                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Right section about us  */}
        <div>
          <ul className="flex items-center justify-center gap-4">
            {link.map((val) => (
              <li key={val}>
                <a href="" className="text-[13px]">{val}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default HeaderTop