'use client'

export function GoogleMap() {
  return (
    <div className="w-full h-full">
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2438.7584843750467!2d4.890451577062899!3d52.36776717179876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c609a7f5f5f5f5%3A0x0!2sAmsterdam!5e0!3m2!1sen!2snl!4v1234567890"
      />
    </div>
  )
}
