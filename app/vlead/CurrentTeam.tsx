import Image from "next/image";
import { logos } from "@/data/teams";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat-font",
});




export default function CurrentTeam() {
    return (
        <div className="mx-auto max-w-[100rem] self-stretch px-4 md:px-16">
            <h1 className={`text-4xl mb-12 font-bold text-center py-5 ${montserrat.className}`}>
                Current Team
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-16 justify-items-center py-20 mb-16">
                {logos.map(logo => (
                    <div
                        key={logo.id}
                        className="flex flex-col items-center bg-gray-800 p-4 shadow-lg rounded-tl-4xl rounded-tr-md rounded-br-4xl rounded-bl-md my-10 py-15 relative"
                    >
                        {/* Circular Image */}
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 overflow-hidden border-2 border-purple-500 rounded-full">
                            <Image 
                                src={logo.src} 
                                alt={logo.name} 
                                width={128} 
                                height={128} 
                                className="object-cover" 
                            />
                        </div>
                        {/* Name */}
                        <h2 className="mt-10 text-2xl font-bold text-center text-white">{logo.name}</h2>
                        {/* Subheading */}
                        <p className="text-lg font-medium text-center text-white">{logo.subheading}</p>
                        {/* Text */}
                        <p className="text-center mx-2 py-2   text-white">{logo.text}</p>
                        {/* Button */}
                        <button className="mt-7 bg-violet-000 hover:bg-violet-900 outline-solid outline-purple-900 text-white font-bold py-2.5  px-8 rounded-full ">
                            {logo.buttonText}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}