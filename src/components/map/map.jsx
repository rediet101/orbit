import React from 'react'

const Map = () => {
  return (
    
      <div className="relative h-100 w-full overflow-hidden rounded-3xl shadow-inner">
            <iframe
              src="https://maps.google.com/maps?q=Nifas+Silk+Lafto+Sub-city,+Addis+Ababa&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Orbit Optical Location"
              className="grayscale hover:grayscale-0 transition-all duration-500"
            />
           
          </div>
 
  )
}

export default Map
