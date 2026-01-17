import {
  FaFacebookF,
  FaYoutube,
  FaInstagram,
  FaTiktok,
  FaPinterest,
} from "react-icons/fa";

const footerLinks = {
  company: [
    { label: "Our Story", url: "/pages/about-us" },
    { label: "Our History", url: "/pages/colonial-candle-history" },
    { label: "Our Team", url: "/pages/our-team" },
    { label: "In The Press", url: "https://colonialcandle.com/pages/media-coverage-press-release" },
    { label: "Blog", url: "/blogs/news" },
    { label: "Fragrance Review", url: "https://forms.office.com/..." },
  ],
  policy: [
    { label: "Returns & Exchanges", url: "/pages/return-policy" },
    { label: "Shipping Rates", url: "/pages/shipping-information" },
    { label: "Privacy Policy", url: "/pages/privacy" },
    { label: "Terms & Conditions", url: "/pages/terms-condition" },
    { label: "Accessibility Statement", url: "/pages/accessibility-statement" },
  ],
  contact: [
    { label: "Contact Us", url: "/pages/contact" },
    { label: "Wholesale Inquiries", url: "https://wholesale.colonialcandle.com" },
    { label: "International Inquiries", url: "/pages/international-inquiries" },
    { label: "Help & FAQs", url: "/pages/faqs" },
    { label: "Become an Affiliate", url: "https://www.shareasale.com/..." },
  ],
  brands: [
    { label: "M. Baker", url: "/collections/m-baker-core" },
    { label: "Manly Indulgence", url: "https://www.manlyindulgence.com" },
    { label: "Wellness by Carolina", url: "/pages/wellness-candles" },
    { label: "Freshens Odor-eliminating Candles", url: "/collections/freshens" },
  ],
};

const socialLinks = [
  { icon: <FaFacebookF />, url: "https://facebook.com/ColonialCandle" },
  { icon: <FaYoutube />, url: "https://youtube.com/channel/UCf0SCosURVy4VKKbcFbUY3g" },
  { icon: <FaInstagram />, url: "https://instagram.com/colonialcandle" },
  { icon: <FaTiktok />, url: "https://tiktok.com/@colonialcandle" },
  { icon: <FaPinterest />, url: "https://in.pinterest.com/colonialcandle/" },
];

const Footer = () => {
  return (
    <footer className="bg-[#0a1f40] text-white">
      <div className="container mx-auto px-4 py-10 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8  flex-wrap">
          {/* Company */}
          <div>
            <h6 className="font-semibold text-[18px] mb-4">Company</h6>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policy */}
          <div>
            <h6 className="font-semibold text-[18px]  mb-4">Policy</h6>
            <ul className="space-y-2">
              {footerLinks.policy.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h6 className="font-semibold text-[18px]  mb-4">Contact Us</h6>
            <ul className="space-y-2">
              {footerLinks.contact.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Affiliate Brands */}
          <div>
            <h6 className="font-semibold text-[18px]  mb-4">Affiliate Brands</h6>
            <ul className="space-y-2">
              {footerLinks.brands.map((link) => (
                <li key={link.label}>
                  <a href={link.url}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h6 className="font-semibold text-[18px]  mb-4">Newsletter</h6>
            <p className="mb-4">Sign up for exclusive offers, original stories, events and more.</p>
            <form className="flex mb-4 flex-col">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-3 py-2 bg-white mb-4 text-black focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-[#232323] cursor-pointer tracking-[1.12px] text-[14px] w-max hover:bg-black uppercase px-6.25 py-4.25 text-white"
              >
                Subscribe
              </button>
            </form>
            <div className="flex space-x-4">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-400"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="text-center border-t border-gray-600 mt-10 pt-6 flex flex-col md:flex-row items-center justify-between">
          <span>© 2026 <a href="/" className="underline">Colonial Candle</a>.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
