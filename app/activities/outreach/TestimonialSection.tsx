import { outreachTestimonials, OutreachTestimonialType } from "@/data/testimonials"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({
  subsets: ["latin"],
});

export default function TestimonialSection() {
  return (
    <div>
      <h1 className={`text-4xl mb-16 font-bold text-center ${montserrat.className}`}>
        Testimonials
      </h1>
      <div className="grid grid-cols-1 gap-8 md:gap-16 justify-items-center mb-16">
        {outreachTestimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

function Testimonial({ testimonial }: { testimonial: OutreachTestimonialType }) {
  return (
    <div className="p-0.5 rounded-2xl bg-linear-0 from-zinc-500 to-gray-800/50 relative overflow-hidden">
      <div className="absolute size-60 rounded-full bg-violet-500/70 -translate-1/2 left-1/2 -z-1 blur-xl" />
      <div className="flex backdrop-blur-lg bg-gray-800/60 rounded-2xl flex-col gap-8 items-center justify-center h-full p-6">
        <p className="font-extralight text-lg">
          <ImQuotesLeft className="inline-block mr-2 mb-1" />
          {testimonial.testimonial}
          <ImQuotesRight className="inline-block ml-2 mb-1" />
        </p>
        <div className="self-end text-right">
          <h2 className="font-semibold">— {testimonial.name}</h2>
          <p className="text-sm">{testimonial.designation}</p>
        </div>
      </div>
    </div>
  )
}
