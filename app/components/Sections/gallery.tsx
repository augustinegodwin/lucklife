import GalleryGrid from "../galleryGrid";
import SectionHeader from "../sectionHeader";

export default function Gallery() {
  return (
    <section className='w-full flex justify-center pb-22.5'>
        <div className='flex max-w-360 w-full flex-col px-10 gap-33'>   
            <SectionHeader label='GALLERY' title='Take a glimpse into the world of lucklifers' description='Explore our gallery to see how our natural products are making a difference in their wellness journeys.'/>
            <GalleryGrid/>
        </div>
    </section>
  )
}
