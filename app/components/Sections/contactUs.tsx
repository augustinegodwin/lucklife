import React from 'react'
import SectionHeader from '../sectionHeader'
import ContactGrid from '../contactGrid'

export default function ContactUs() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-180 lg:max-w-360 w-full flex-col px-5 md:px-10 gap-33'>   
            <SectionHeader
                label='Contact  Us'
                title='Reach out for expert help with your wellness.'
                description='Get in touch with our experts to learn how our safe, natural formulas can enhance your daily vitality'
            />
            <ContactGrid/>
        </div>
    </section>
  )
}
