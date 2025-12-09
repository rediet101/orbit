import { useMemo, useEffect, useState, useRef } from "react";

const Partners = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Sister Company logos (color - will be shuffled)
  const sisterCompanyLogos = [
    { name: "Ministry of Health Ethiopia", logo: "https://imgs.search.brave.com/3OYfR_K0dD-77N1LpNnOBpQmwClaIqnDFSk3G3Cek9o/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZDgyMy16VGJf/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc1OTI4NzMzNjE2/OQ", type: "color" },
    { name: "Ethiopian Food & Drug Authority", logo: "https://imgs.search.brave.com/5TBTvr2qJv9PtKmMWOYzrqbCztBRmvhylPhQWNlNuuk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YWFmZGEuZ292LmV0/L3VwbG9hZHMvRXZl/bnQvYWFhYS0yMDI1/LTAxLTEzLTY3ODUw/MDhlMDIzMjYucGhv/dG9fMjAyNC0xMS0y/OV8xNC01MC00OS5q/cGc", type: "color" },
    { name: "Ethiopian Public Health Institute", logo: "https://imgs.search.brave.com/VfZtJtHdiJovLpTa0IQs2G4O29NzAzK7GOfkf4V1YSo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc3F1YXJlc3Bh/Y2UtY2RuLmNvbS9j/b250ZW50L3YxLzY0/YjhmNDU1M2ZhOTI5/MjdkNjNhNGIwOS8x/NjkwMzczMzU5Mjkw/LTQ1Vlc4NEVWQUtI/S1ZMUzJZTkROL1Bp/Y3R1cmUzKzEucG5n", type: "color" },
    { name: "Tikur Anbesa Hospital", logo: "https://imgs.search.brave.com/osFkZlBUeOEhZAbWKcSHZxrjTaqkAMnZ2R2dnVX4kzc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/ZGVsdGF0ZWNoYWZy/aWNhLmNvbS9pbWFn/ZXMvY29tcGFuaWVz/L2xvZ29zL2Rvd25s/b2FkLnBuZw", type: "color" },
    { name: "St. Paul's Hospital", logo: "https://imgs.search.brave.com/96kHDtNxIiVeEfzl3slrU4DOHyYU9hSIPEgt1A0LzcQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pMC53/cC5jb20vd3d3LnNw/aXJoci5vcmcvd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDMv/U1BNTUMtbG9nby1B/TS1zbWFsbC5wbmc_/dz0xMDgwJnNzbD0x", type: "color" },
    { name: "Ethiopian Medical Association", logo: "https://imgs.search.brave.com/tltTl1vy_gXOwT2Yp53whvhlAdpapO4-uJWI-3fSToA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q0/RTFCQVFFNEo0T01t/RXA3WXcvY29tcGFu/eS1iYWNrZ3JvdW5k/XzEwMDAwLzAvMTY1/OTc4MzMyMTg2OC9l/dGhpb3BpYW5fbWVk/aWNhbF9hc3NvY2lh/dGlvbl9jb3Zlcj9l/PTIxNDc0ODM2NDcm/dj1iZXRhJnQ9NkFL/ZmUwYTFUZGNFZl9t/SWc1a1lrUmRjYzUz/OHVGdTFLczFoTFVh/MjZvaw", type: "color" },
  ];

  // Donor logos (color - will be shuffled)
  const donorLogos = [
    { name: "World Health Organization", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/WHO_logo.svg/1200px-WHO_logo.svg.png", type: "color" },
    { name: "USAID", logo: "https://imgs.search.brave.com/xV7VS6NgAQPxMASTbcJJgWKfyQiTLOc8P0PLS3Fbdg4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZ3Nj/aS5vcmVnb25zdGF0/ZS5lZHUvc2l0ZXMv/YWdzY2lkNy9maWxl/cy9tZWRpYS91c2Fp/ZC1sb2dvLXBuZy5w/bmc", type: "color" },
    { name: "Lions Clubs International", logo: "https://imgs.search.brave.com/9ApBYHqsaYxW8MrzUxo444G2_drLBAzIHfzRGhWdlgU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzBlL2My/L2MyLzBlYzJjMmM4/ZWYzNzlhMGUzZWEx/ZTRlODljY2U1NWUz/LmpwZw", type: "color" },
    { name: "Orbis International", logo: "https://imgs.search.brave.com/YPMv348zqAqSQG8VX3poZB_olKtGMCpx0cpRHPKUdBE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/d2lrLmNvbS9jb250/ZW50L3VwbG9hZHMv/aW1hZ2VzL29yYmlz/LWludGVybmF0aW9u/YWwzNTk4LmpwZw", type: "color" },
    { name: "Fred Hollows Foundation", logo: "https://imgs.search.brave.com/3dfohSNqMGt-XrOt2SrnM2-r4jGRfU5ROBwjOqLi7OY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aG9sbG93cy5vcmcv/Z2xvYmFsYXNzZXRz/L2dsb2JhbC1tZWRp/YS9oZWFkZXIvX2Zo/X3N0YWNrZWRfbG9n/b19yZ2IuanBnP3dp/ZHRoPTQ1MCZoZWln/aHQ9MzUw", type: "color" },
    { name: "CBM International", logo: "https://imgs.search.brave.com/6ldHG3cNqFTZXnE1eaZ7diGmfYcCjIXYBgTumPHkUVQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bW9oLmdvdi5ldC9z/aXRlcy9kZWZhdWx0/L2ZpbGVzL3N0eWxl/cy9tZWRpdW0vcHVi/bGljLzIwMjEtMDkv/dm9sdW50ZWVyc3Mu/cG5nP2l0b2s9NENJ/WUVnRlc", type: "color" },
  ];

  // Bank logos (grayscale - NOT shuffled)
  const bankLogos = [
    { name: "Commercial Bank of Ethiopia", logo: "https://imgs.search.brave.com/jXZfEUUCV_sOwL4odrBbKHEfzMMF2rUTPFpT8rklpLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuc2Vla2xvZ28u/Y29tL2xvZ28tcG5n/LzU0LzEvY29tbWVy/Y2lhbC1iYW5rLW9m/LWV0aGlvcGlhLWxv/Z28tcG5nX3NlZWts/b2dvLTU0NzUwNi5w/bmc", type: "grayscale" },
    { name: "Dashen Bank", logo: "https://imgs.search.brave.com/frCjnTTAfM20eelWmAtU5CA4fnUSOFMju_Oc-ubrwPw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZE5aN0pvTHNH/L3cvNDAwL2gvNDAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc0NDczNDI3ODEw/MQ", type: "grayscale" },
    { name: "Awash Bank", logo: "https://imgs.search.brave.com/FYqKH5ECy9xFfNDsR0GbaInM1EI2stCvrKJCOdywhQY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/Lmx1c2hhLmNvL2Qv/Y29tcGFueV83OTgx/NTk1N19sb2dvLmpw/Zw", type: "grayscale" },
    { name: "Bank of Abyssinia", logo: "https://imgs.search.brave.com/61H7moYgmeWgxWiLJ9LN8P9s6ifwpOQIJf6ayJyuRtQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hZGRp/c2ZvcnR1bmUubmV3/cy93cC1jb250ZW50/L3VwbG9hZHMvMjAx/OS8wOC9TY3JlZW5z/aG90LTIwMTktMDgt/MDMtMjIuNTkuNDQu/cG5n", type: "grayscale" },
    { name: "Wegagen Bank", logo: "https://imgs.search.brave.com/z4PVxsEQYDLbQlBy6t0SrEhTHT-2NEWLQrG9X5qXzYY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZmZv/eXNpcmEuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy8yMDIyLzA3/L1dlZ2FnZW4tQmFu/ay5wbmc", type: "grayscale" },
    { name: "Cooperative Bank of Oromia", logo: "https://imgs.search.brave.com/YLVa0GkKx1pU-0k-j9hmz9BxPIpHZXDUNlc9TvL8H8M/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy8w/LzBjL0Nvb3BlcmF0/aXZlX0Jhbmtfb2Zf/T3JvbWlhLnBuZw", type: "grayscale" },
    { name: "Nib International Bank", logo: "https://imgs.search.brave.com/A-sKIrqL7bTpPf4gtqsYRyi_NzcSThslZvWNAHXkwAA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bmliYmFua3NjLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/Mi8wMy9MT0dPLVNF/VFMtQU5ELVNUWUxF/LTAxLnBuZw", type: "grayscale" },
    { name: "Zemen Bank", logo: "https://imgs.search.brave.com/QQ0mhaOJsDe6zH4vSuGchzJ_-VIL_WzbyJvMbc2I6tg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9ldTIu/Y29udGFib3N0b3Jh/Z2UuY29tLzlmYjVl/OWI5YzlkZDQ5Mjg5/MzNlNmMxYjZkMzI0/NTA4OmZpcm1hLzIw/MjMvMDkvWmVtZW4t/QmFuay1Mb2dvLmpw/Zw", type: "grayscale" },
  ];

  // Shuffle and combine colorful logos (Sister Company + Donor)
  const allPartners = useMemo(() => {
    // Shuffle colorful logos together
    const colorfulLogos = [...sisterCompanyLogos, ...donorLogos].sort(() => Math.random() - 0.5);
    // Combine with banks (not shuffled)
    return [...colorfulLogos, ...bankLogos];
  }, []);

  // Intersection Observer for scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="bg-[#DFF3FF] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Header */}
        <div className={`text-center mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-blue-600">Partnering</span>{" "}
            <span className="text-[#0F5F4C]">Companies</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with our sister companies to bring telemedicine and integrated health services 
            to a broader community. Our clients include embassies, businesses, nonprofits, and individuals 
            who trust us for reliable, patient-focused care.
          </p>
        </div>

        {/* All Partners Grid - Mashed Together */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {allPartners.map((partner, index) => (
            <div
              key={index}
              className={`
                flex items-center justify-center p-4 bg-white rounded-xl shadow-md 
                hover:shadow-xl transition-all duration-500 
                hover:-translate-y-2 hover:scale-105
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
              `}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className={`
                  w-full h-16 object-contain transition-all duration-300
                  ${partner.type === 'grayscale' ? 'grayscale hover:grayscale-0' : ''}
                `}
              />
            </div>
          ))}
        </div>

        {/* View All Partners Button */}
        {/* <div className={`text-center mt-12 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button className="bg-blue-500 hover:bg-[#0F5F4C] text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            View all partners
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Partners;
