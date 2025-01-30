// "use client";
// import "./globals.css";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
// import { useEffect, useState } from "react";
// import LoadingBar from "react-top-loading-bar";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import Link from "next/link";
// import { FaAngleDoubleUp } from "react-icons/fa";


//  export const metadata = {
//   title : 'Eagle Global Exim House',
//   description : "Eagle Global Exim House",
//   icons : {
//     icon:['/favicon.ico']
//   }
// }
// export default function RootLayout({ children }) {
//   const [progress, setProgress] = useState(0);
//   const pathname = usePathname();
//   useEffect(() => {
//     setProgress(40);
//     const timeout = setTimeout(() => setProgress(100), 500);
//     return () => clearTimeout(timeout);
//   }, [pathname]);
//   useEffect(() => {
//     AOS.init({ duration: 500 });
//   }, []);
//   function handleScrollToTop() {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   }
//   return (
//     <html lang="en">
//       <body>
//         <div>
//           <LoadingBar
//             color="red"
//             progress={progress}
//             waitingTime={400}
//             onLoaderFinished={() => setProgress(0)}
//           />
//           <Navbar />
//           <div className="fixed hover:cursor-pointer bottom-24 z-50 right-5">
//             <button onClick={handleScrollToTop} aria-label="Scroll to top">
//               <FaAngleDoubleUp className="text-customRed rounded-full border-customGray" size={50} />
//             </button>
//           </div>
//           <div className="fixed hover:cursor-pointer bottom-5 z-50 right-2">
//             <Link href="https://wa.me/917498552108">
//               <Image src="/images/whatsappimage.png" width={65} height={65} alt="Whatsapp" priority />
//             </Link>
//           </div>
//           <main>{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }






import RootLayout from "./Components/RootLayout";

export const metadata = {
  title: "Eagle Global Exim House",
  description: "Eagle Global Exim House",
  icons: {
    icon: ["/favicon.ico"],
  },
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  );
}

