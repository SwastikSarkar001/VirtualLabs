import Image from "next/image";

export default function ParticipatingInstitutes() {
  return (
    <section className="flex flex-col items-stretch">
      <h1 className="text-4xl self-center">Participating Institutes</h1>
      {/* <div className="w-full overflow-x-hidden"> */}
        <div className="flex gap-4 *:flex *:flex-col *:items-center *:text-center *:gap-2">
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitkgp.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Kharagpur"
              priority
            />
            <div>IIT Kharagpur</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitr.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Roorkee"
              priority
            />
            <div>IIT Roorkee</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitg.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Guwahati"
              priority
            />
            <div>IIT Guwahati</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitd.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Delhi"
              priority
            />
            <div>IIT Delhi</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitb.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Bombay"
              priority
            />
            <div>IIT Bombay</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iitk.svg'
              width={150}
              height={150}
              alt="Logo of Indian Institute of Technology, Kanpur"
              priority
            />
            <div>IIT Kanpur</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/iiith.png'
              width={150}
              height={150}
              alt="Logo of International Institute of Information Technology, Hyderabad"
              priority
            />
            <div>IIIT Hyderabad</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/avv.svg'
              width={150}
              height={150}
              alt="Logo of Amrita Vishwa Vidyapeetham"
              priority
            />
            <div>Amrita Vishwa Vidyapeetham</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/dei.jpg'
              width={150}
              height={150}
              alt="Logo of Dayalbagh Educational Institute"
              priority
            />
            <div>Dayalbagh Educational Institute</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/nitk.png'
              width={150}
              height={150}
              alt="Logo of NITK Surathkal"
              priority
            />
            <div>NITK Surathkal</div>
          </div>
          <div>
            <Image
              className="grayscale invert"
              src='/institute-logos/coep.jpg'
              width={150}
              height={150}
              alt="Logo of COEP Technological University, Pune"
              priority
            />
            <div>COEP Technological University, Pune</div>
          </div>
        </div>
      {/* </div> */}
    </section>
  )
}