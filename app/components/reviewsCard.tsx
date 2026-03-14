interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}
export default function ReviewsCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div key={testimonial.id} className="bg-gray-200 rounded-[20px] p-5 flex flex-col">

        {/* Quote */}
        <p className="text-gray-600 flow text-sm leading-relaxed mb-8 text-body flex-grow">{testimonial.quote}</p>

        {/* Author Info */}
        <div>
          <p className="font-semibold text-gray-900 text-body text-sm">{testimonial.author}</p>
          <p className="text-gray-400 text-body text-[13px]">{testimonial.role}</p>
        </div>
      </div>
  )
}
