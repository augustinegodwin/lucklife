interface Testimonial {
  id: string
  quote: string
  author: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    quote: 'The bitters have completely transformed my morning routine. I feel more energized and focused.',
    author: 'Adesua Okoro',
    role: 'Wellness Enthusiast',
  },
  {
    id: '2',
    quote: 'I struggled with bloating for months until I tried their detox tea. The results were almost instant!',
    author: 'Chidi Ike',
    role: 'Fitness Coach',
  },
  {
    id: '3',
    quote: 'Authentic remedies that actually work. It is refreshing to find a brand that values traditional roots.',
    author: 'Aminu Bello',
    role: 'Repeat Buyer',
  },
  {
    id: '4',
    quote: 'Their sleep blend is a game changer. I finally get restful nights without feeling groggy the next day.',
    author: 'Funke Akindele',
    role: 'Lifestyle Blogger',
  },
  {
    id: '5',
    quote: 'The quality of these herbal supplements is top-notch. I have recommended them to all my colleagues.',
    author: 'Emeka Nwosu',
    role: 'Health Consultant',
  },
  {
    id: '6',
    quote: 'Finding natural relief for my joint pain was a priority, and these capsules delivered exactly that.',
    author: 'Zainab Idris',
    role: 'Yoga Instructor',
  },
  {
    id: '7',
    quote: 'I love the transparency regarding ingredients. It makes me feel safe about what I am putting in my body.',
    author: 'Tunde Bakare',
    role: 'Customer',
  },
  {
    id: '8',
    quote: 'Excellent customer service and even better products. My skin has never looked this clear and healthy.',
    author: 'Nneka Obi',
    role: 'Skincare Specialist',
  },
]
import ReviewsCard from '../reviewsCard'
import SectionHeader from '../sectionHeader'
export default function TextimonialSection() {
  return (
    <section id={"#testimony"} className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-180 lg:max-w-360 w-full flex-col px-4 md:px-10 gap-33'>
            <SectionHeader 
                label='TESTIMONIALS'
                title='Stories of everyday people
who found comfort.'
                description='Read authentic stories from people who simplified their path to wellness with our effective herbal formulas.'
                buttonValue='Join the story'
                action='/products'
            />
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
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
