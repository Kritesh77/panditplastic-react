export const HEADER_MOBILE_NO = 9876543210;
export const FACEBOOK_PAGE_LINK = "#";
export const INSTAGRAM_PAGE_LINK = "#";
export const TWTITTER_PAGE_LINK = "#";

export const PORT = 3000;
export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://cruisenextphase3.vercel.app/"
    : "http://localhost:" + PORT;

export const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=918879890076";

export const DETAILEDVIEW_TABLE_COLOR = "#ff4c4c";

export const IconGradient = () => (
  <svg width="0" height="0">
    <linearGradient id="icon-gradient" x1="100%" y1="100%" x2="0%" y2="0%">
      <stop stopColor="#d92727" offset="0%" />
      <stop stopColor="#19478a" offset="100%" />
    </linearGradient>
  </svg>
);

export const toIndianDigits = (number) => {
  return number.toLocaleString("en-IN", {
    // maximumFractionDigits: 2,
    style: "currency",
    currency: "INR",
  });
};
