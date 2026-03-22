interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Emily K.',
    role: 'Customer',
  },
  {
    id: '2',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Raj S.',
    role: 'Repeat Buyer',
  },
  {
    id: '3',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Raj S.',
    role: 'Repeat Buyer',
  },
  {
    id: '4',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Linda T.',
    role: 'Wellness Coach',
  },
  {
    id: '1',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Emily K.',
    role: 'Customer',
  },
  {
    id: '2',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Raj S.',
    role: 'Repeat Buyer',
  },
  {
    id: '3',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Raj S.',
    role: 'Repeat Buyer',
  },
  {
    id: '4',
    quote: 'I found natural relief from stress after starting their herbal supplements. Highly recommend!',
    author: 'Linda T.',
    role: 'Wellness Coach',
  },
]
import ReviewsCard from '../reviewsCard'
import SectionHeader from '../sectionHeader'
export default function TextimonialSection() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
            <SectionHeader 
                label='TESTIMONIALS'
                title='Stories of everyday people
who found comfort.'
                description='Read authentic stories from people who simplified their path to wellness with our effective herbal formulas.'
                buttonValue='Join the story'
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    testimonials.map((testimonial) => (
                        <ReviewsCard key={testimonial.id} testimonial={testimonial} />
                    ))
                }
            </div>
        </div>
    </section>
  )
}
