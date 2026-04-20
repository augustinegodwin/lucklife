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
       src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3938.8688463133646!2d7.327708875865248!3d9.14979523689408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e19006d770d2f%3A0x44666edf9b75d68b!2sLucklife%20Abuja!5e0!3m2!1sen!2sng!4v1713620000000!5m2!1sen!2sng"
      />
    </div>
  )
}
