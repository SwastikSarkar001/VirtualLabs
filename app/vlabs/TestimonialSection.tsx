import { testimonials, TestimonialType } from "@/data/testimonials"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";

export default function TestimonialSection() {
  return (
    <div>
      <h1 className="text-4xl mb-12 font-bold text-center">
        Testimonials
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 justify-items-center mb-16">
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </div>
    </div>
  )
}

function Testimonial({ testimonial }: { testimonial: TestimonialType }) {
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
          <p className="text-sm">{testimonial.institute}</p>
        </div>
      </div>
    </div>
  )
}
