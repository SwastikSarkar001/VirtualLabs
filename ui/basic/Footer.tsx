import Link from "next/link";
import { MdCall, MdMailOutline } from "react-icons/md";
import { BiLogoFacebook, BiLogoLinkedin } from "react-icons/bi";
import { RiTwitterXFill } from "react-icons/ri";
import { SiInstagram, SiYoutube } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="mt-auto border-t-2 p-8 sm:p-12 sm:pb-4 border-violet-400/30 flex flex-col items-stretch gap-8 text-sm">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 items-center *:not-sm:mx-auto">
        <div className="flex flex-col sm:not-lg:justify-center sm:not-lg:justify-self-center gap-2 sm:not-lg:col-span-2">
          <Link href="/" className='flex gap-2 items-center not-lg:justify-center text-2xl text-violet-400'>
            <div className="font-bold">Virtual Labs</div>
          </Link>
          <div className="not-lg:text-center">
            <p>Engineering and Architecture Division</p>
            <p>Room No: B5-203,</p>
            <p>Vindhya C6, VLEAD,</p>
            <p>IIIT-H, Gachibowli,</p>
            <p>Hyderabad - 500032</p>
          </div>
        </div>
        <div className="flex flex-col gap-1 w-max lg:mx-auto">
          <Link className="flex items-center gap-2 *:first:text-[1.2em] text-neutral-300 hover:text-indigo-400 transition-colors" href='https://www.facebook.com/vlead.iiithyd' passHref target="_blank">
            <BiLogoFacebook /><div>/vlead.iiithyd</div>
          </Link>
          <Link className="flex items-center gap-2 *:first:text-[1.2em] text-neutral-300 hover:text-white transition-colors" href='https://twitter.com/TheVirtualLabs' passHref target="_blank">
            <RiTwitterXFill /><div>/TheVirtualLabs</div>
          </Link>
          <Link className="flex items-center gap-2 *:first:text-[1.2em] text-neutral-300 hover:text-red-400 transition-colors" href='https://www.youtube.com/@virtual-lab-experiments-ii4780' passHref target="_blank">
            <SiYoutube /><div>/@virtual-lab-experiments-ii4780</div>
          </Link>
          <Link className="flex items-center gap-2 *:first:text-[1.2em] text-neutral-300 hover:text-blue-400 transition-colors" href='https://www.linkedin.com/in/virtual-labs-008ba9136' passHref target="_blank">
            <BiLogoLinkedin /><div>/virtual-labs-008ba9136</div>
          </Link>
          <Link className="flex items-center gap-2 *:first:text-[1.2em] text-neutral-300 hover:text-fuchsia-500 transition-colors" href='https://www.instagram.com/thevirtuallabs' passHref target="_blank">
            <SiInstagram /><div>/thevirtuallabs</div>
          </Link>
        </div>
        <div className="flex flex-col *:flex *:items-center *:gap-2 sm:*:justify-end sm:*:text-right">
          <Link href='tel:011-64674687' passHref><MdCall className="size-[1.2em] text-green-500" /><p>General Information : 011-64674687</p></Link>
          <Link href='tel:+919177792945' passHref><MdCall className="size-[1.2em] text-green-500" /><p>Development/Outreach : +91-9177792945</p></Link>
          <Link href='mailto:support@vlabs.ac.in' passHref><MdMailOutline className="size-[1.2em] text-violet-500" /><p>support@vlabs.ac.in</p></Link>
        </div>
      </div>
      <div className="border-t-2 border-gray-500/30 pt-3 flex items-center justify-center">
        <p>© Virtual Labs 2025. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
