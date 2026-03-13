import React from 'react'
import SectionHeader from '../sectionHeader'
import FeautreCard from '../feautreCard'

export default function Value() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-360 w-full flex-col px-10 gap-33'>
            <SectionHeader label='values' title='Why people rely on
lucklife for their wellbeing.' description='Discover top remote tech opportunities and land your next role with ease, through our streamlined process.'/>
            <div className='grid grid-cols-4 gap-5'>
                <FeautreCard/>
                <FeautreCard/>
                <FeautreCard/>
                <FeautreCard/>
            </div>
        </div>
    </section>
  )
}
