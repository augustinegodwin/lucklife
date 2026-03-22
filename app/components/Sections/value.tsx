import React from 'react'
import SectionHeader from '../sectionHeader'
import heart from '../../assets/icons/Heart.png'
import Star from '../../assets/icons/Star.png'
import Leaf from '../../assets/icons/Leaf.png'
import Shield from '../../assets/icons/Shield_Check.png'
import FeautreCard from '../feautreCard'
const feautres=[
  {
    id:1,
    title:'Natural care',
    description:'Our products are crafted with care, using only the finest natural ingredients to support your well-being.',
    icon:Leaf
  },
  {
    id:1,
    title:'Safe formulas',
    description:'Our products are crafted with care, using only the finest natural ingredients to support your well-being.',
    icon:Shield
  },
  {
    id:1,
    title:'Holistic healing',
    description:'Our products are crafted with care, using only the finest natural ingredients to support your well-being.',
    icon:heart
  },
  {
    id:1,
    title:'Trusted choice',
    description:'Our products are crafted with care, using only the finest natural ingredients to support your well-being.',
    icon:Star
  },
]
export default function Value() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
            <SectionHeader label='values' title='Why people rely on
lucklife for their wellbeing.' description='Discover top remote tech opportunities and land your next role with ease, through our streamlined process.'/>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-5'>
                {feautres.map((feature) => (
                    <FeautreCard key={feature.id} feature={feature} />
                ))}
            </div>
        </div>
    </section>
  )
}
