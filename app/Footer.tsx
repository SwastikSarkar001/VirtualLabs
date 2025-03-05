import Link from "next/link";
import { PiFlaskFill } from "react-icons/pi";
import { HiLocationMarker } from "react-icons/hi";
import { MdCall, MdMailOutline } from "react-icons/md";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 p-8 sm:p-16 sm:pb-8 border-violet-400/30 flex flex-col items-stretch gap-8 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="flex flex-col gap-2 sm:not-lg:col-span-2">
          <Link href="/" className='flex gap-2 items-center text-2xl text-violet-400'>
            <div className="font-bold">Virtual Labs</div>
          </Link>
          <div>
            <p>Engineering and Architecture Division</p>
            <p>Room No:B5-203,</p>
            <p>Vindhya C6, VLEAD,</p>
            <p>IIIT-H, Gachibowli,</p>
            <p>Hyderabad - 500032</p>
          </div>
          {/* <p className="text-gray-400">Virtual Labs is an initiative to provide remote access to labs in various disciplines of science and engineering. These virtual labs cater to students at the undergraduate level, post-graduate level as well as to research scholars.</p> */}
        </div>
        {/* <div className="flex gap-2 w-full justify-center">
          <HiLocationMarker className="size-[1.75em] text-rose-600" />
          <div>
            <p>Engineering and Architecture Division</p>
            <p>Room No:B5-203,</p>
            <p>Vindhya C6, VLEAD,</p>
            <p>IIIT-H, Gachibowli,</p>
            <p>Hyderabad - 500032</p>
          </div>
        </div> */}
        <div className="flex flex-col *:flex *:items-center *:gap-2 *:justify-end">
          <Link href='tel:011-64674687' passHref><MdCall className="size-[1.2em] text-green-500" /><p>General Information : 011-64674687</p></Link>
          <Link href='tel:+919177792945' passHref><MdCall className="size-[1.2em] text-green-500" /><p>Development/Outreach : +91-9177792945</p></Link>
          <Link href='mailto:support@vlabs.ac.in' passHref><MdMailOutline className="size-[1.2em] text-violet-500" /><p>support@vlabs.ac.in</p></Link>
        </div>
        {/* <div className="flex flex-col gap-2">
          <h2 className="text-xl">Follow Us</h2>
          <div className="flex gap-2">
            <a href="https://facebook.com">Facebook</a>
            <a href="https://twitter.com">Twitter</a>
            <a href="https://instagram.com">Instagram</a>
          </div>
        </div> */}
      </div>
      <div className="border-t-2 border-gray-500/30 pt-4 flex items-center justify-between">
        <p>© Virtual Labs 2025. All Rights Reserved.</p>
        <div className="flex gap-2 sm:gap-4 text-[1.05em]">
          <Link href='https://www.facebook.com/vlead.iiithyd' passHref target="_blank"><BiLogoFacebook /></Link>
          <Link href='https://twitter.com/TheVirtualLabs' passHref target="_blank"><RiTwitterXFill /></Link>
          <Link href='https://www.youtube.com/@virtual-lab-experiments-ii4780' passHref target="_blank"><SiYoutube /></Link>
          <Link href='https://www.linkedin.com/in/virtual-labs-008ba9136' passHref target="_blank"><BiLogoLinkedin /></Link>
          <Link href='https://www.instagram.com/thevirtuallabs?igsh=dWdsdWl0aHczNTkx' passHref target="_blank"><SiInstagram /></Link>
        </div>
      </div>
    </footer>
  )
}
