// dataConfig.js - The Single Source of Truth
export const siteConfig = {
  // Brand Foundation
  brand: {
    drname: "Dr. Heena Firdouz",
    drCred: "MD Dermatology | Fellow, American Academy of Dermatology",
    drsubname: "Firdouz",
    drImage: "/images/doctor.jpg",
    drBio: [
        "With over a decade of specialized practice, Dr. Heena Firdouz has transformed the dermatological landscape in Mumbai. Her approach transcends conventional treatment—she views each patient as a unique canvas requiring personalized artistry.",
        "Trained at Johns Hopkins and King's College London, she brings global standards to Indian skin. Her clinic, DermaLux, represents the convergence of medical rigor and luxury experience.",
        "Beyond the clinic, Dr. Firdouz is a sought-after speaker on ethnic skin dermatology and has published extensively on laser treatments for melanin-rich complexions.",
      ],
    tagline: "Where Science Meets Skin Artistry",
    clinicName: "DermaLux Clinic",
    founded: 2012,
    description: "Premium dermatological care combining medical expertise with aesthetic precision",
  },

  // Contact & Location
  contactDetails: {
    address: {
      street: "42, Emerald Heights, Near City Center Mall",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400076",
      country: "India",
      mapsUrl: "https://maps.google.com",
    },
    phone: {
      primary: "+91 98765 43210",
      secondary: "+91 22 1234 5678",
      display: "+91 98765 43210",
    },
    email: {
      primary: "care@drheenafirdouz.com",
      booking: "appointments@drheenafirdouz.com",
    },
    hours: {
      monday: "10:00 AM - 7:00 PM",
      tuesday: "10:00 AM - 7:00 PM",
      wednesday: "10:00 AM - 7:00 PM",
      thursday: "10:00 AM - 7:00 PM",
      friday: "10:00 AM - 7:00 PM",
      saturday: "10:00 AM - 4:00 PM",
      sunday: "Closed",
    },
    social: {
      instagram: "https://instagram.com/drheenafirdouz",
      facebook: "https://facebook.com/drheenafirdouz",
      linkedin: "https://linkedin.com/in/drheenafirdouz",
      youtube: "https://youtube.com/drheenafirdouz",
    },
  },

  /* // Navigation Architecture
  navigation: {
    main: [
      { label: "Home", href: "/", id: "home" },
      { label: "Services", href: "/services", id: "services" },
      { label: "Contact", href: "/contact", id: "contact" },
    ],
    cta: {
      label: "Book Consultation",
      href: "/contact",
    },
  }, */

  // Home Page Narrative
  home: {
    /*meta: {
      title: "Dr. Heena Firdouz | Premium Dermatology & Aesthetic Care",
      description: "Experience transformative skin and hair treatments with Mumbai's leading dermatologist. Science-backed, artistry-driven.",
    }, */
    
    /*
    hero: {
      headline: {
        line1: "Reveal Your",
        line2: "Radiance",
        line3: "Within",
      }, 
      subheadline: "Advanced dermatological care where medical precision meets aesthetic artistry. Discover treatments tailored to your unique skin story.",
      ctaPrimary: {
        label: "Begin Your Journey",
        href: "/services",
      },
      ctaSecondary: {
        label: "Meet Dr. Firdouz",
        href: "#about",
      },
      image: {
        src: "/images/hero-clinic.jpg",
        alt: "Modern dermatology clinic interior with warm lighting",
      },
      stats: [
        { value: "12+", label: "Years Experience" },
        { value: "15K+", label: "Happy Clients" },
        { value: "98%", label: "Success Rate" },
      ],
    }, */

    specialties: {
      //sectionTitle: "Signature Treatments",
      //sectionSubtitle: "Curated solutions for your most pressing skin concerns",
      services: [
        {
          id: "laser-rejuvenation",
          title: "Laser Rejuvenation",
          description: "Multi-wavelength laser technology targeting pigmentation, fine lines, and texture irregularities with zero downtime protocols.",
          icon: "Sparkles",
          image: "/images/laser-treatment.png",
          duration: "45-60 min",
          price: "From ₹8,000",
        },
        {
          id: "hair-restoration",
          title: "Hair Restoration",
          description: "Advanced PRP therapy and mesotherapy combining growth factors with precision delivery systems for natural hair revival.",
          icon: "Leaf",
          image: "/images/hair-treatment.png",
          duration: "60-90 min",
          price: "From ₹12,000",
        },
        {
          id: "laser-hair-removal",
          title: "Laser Hair Removal",
          description: "Permanent hair removal for all skin types using diode and Nd:YAG lasers..",
          icon: "Shield",
          image: "/images/laser-hair-removal.png",
          duration: "30-45 min",
          price: "From ₹5,000",
        },
        {
          id: "anti-aging",
          title: "Age-Defying Therapy",
          description: "Non-invasive lifting and tightening using ultrasound and radiofrequency for natural, gradual rejuvenation.",
          icon: "Clock",
          image: "/images/anti-aging.png",
          duration: "60-75 min",
          price: "From ₹15,000",
        },
      ],
    },

    /*
    about: {
      sectionTitle: "The Doctor",
      headline: "Heena Firdouz",
      credentials: "MD Dermatology | Fellow, American Academy of Dermatology",
      bio: [
        "With over a decade of specialized practice, Dr. Heena Firdouz has transformed the dermatological landscape in Mumbai. Her approach transcends conventional treatment—she views each patient as a unique canvas requiring personalized artistry.",
        "Trained at Johns Hopkins and King's College London, she brings global standards to Indian skin. Her clinic, DermaLux, represents the convergence of medical rigor and luxury experience.",
        "Beyond the clinic, Dr. Firdouz is a sought-after speaker on ethnic skin dermatology and has published extensively on laser treatments for melanin-rich complexions.",
      ],
      image: {
        src: "/images/dr-heena.jpg",
        alt: "Dr. Heena Firdouz in professional attire",
      },
      values: [
        {
          title: "Evidence-Based",
          description: "Every treatment backed by peer-reviewed research",
        },
        {
          title: "Personalized",
          description: "Protocols tailored to your skin's unique biology",
        },
        {
          title: "Holistic",
          description: "Addressing root causes, not just symptoms",
        },
      ],
    },*/

    testimonials: {
      sectionTitle: "Client Stories",
      sectionSubtitle: "Real transformations, real confidence",
      reviews: [
        {
          id: 1,
          name: "Priya Malhotra",
          role: "Business Executive",
          image: "/images/testimonial-1.jpg",
          quote: "After years of struggling with hormonal acne, Dr. Firdouz's approach was the first that actually understood my skin. Six months later, I finally feel confident without makeup.",
          treatment: "Acne Solutions",
          rating: 5,
        },
        {
          id: 2,
          name: "Arjun Mehta",
          role: "Creative Director",
          image: "/images/testimonial-2.jpg",
          quote: "The hair restoration treatment exceeded every expectation. The attention to detail, the follow-ups, the results—this is healthcare as it should be.",
          treatment: "Hair Restoration",
          rating: 5,
        },
        {
          id: 3,
          name: "Sarah Khan",
          role: "Model",
          image: "/images/testimonial-3.jpg",
          quote: "Dr. Firdouz doesn't just treat skin; she sculpts confidence. Her laser work is subtle, natural, and absolutely transformative.",
          treatment: "Laser Rejuvenation",
          rating: 5,
        },
      ],
    },

    cta: {
      headline: "Your Skin Deserves",
      headlineAccent: "Excellence",
      subtext: "Begin your transformation with a comprehensive skin analysis and personalized treatment roadmap.",
      buttonText: "Schedule Consultation",
      backgroundImage: "/images/cta-background.jpg",
    },
  },

  // Services Page Architecture
  services: {
    meta: {
      title: "Our Services | Premium Skin & Hair Treatments",
      description: "Comprehensive dermatological services from medical treatments to aesthetic procedures.",
    },

    hero: {
      headline: "Curated",
      headlineAccent: "Care",
      subheadline: "From medical dermatology to aesthetic refinement, every service is delivered with precision and artistry.",
      image: "/images/services-hero.jpg",
    },

    categories: [
      {
        id: "skin-treatments",
        title: "Skin Treatments",
        description: "Medical and aesthetic solutions for every skin concern",
        color: "rose",
        treatments: [
          {
            id: "acne-management",
            title: "Acne Management",
            description: "Comprehensive protocols including chemical peels, LED therapy, and medical-grade skincare regimens.",
            duration: "45 min",
            sessions: "6-8 sessions",
            price: "₹5,000 - ₹15,000",
          },
          {
            id: "pigmentation-correction",
            title: "Pigmentation Correction",
            description: "Targeted treatments for melasma, sun spots, and post-inflammatory hyperpigmentation.",
            duration: "30 min",
            sessions: "4-6 sessions",
            price: "₹6,000 - ₹18,000",
          },
          {
            id: "scar-revision",
            title: "Scar Revision",
            description: "Microneedling, subcision, and laser therapies for acne scars and surgical marks.",
            duration: "60 min",
            sessions: "3-5 sessions",
            price: "₹10,000 - ₹25,000",
          },
          {
            id: "eczema-psoriasis",
            title: "Eczema & Psoriasis Care",
            description: "Long-term management strategies combining biologics, phototherapy, and lifestyle modifications.",
            duration: "30 min",
            sessions: "Ongoing",
            price: "₹3,000 - ₹8,000",
          },
        ],
      },
      {
        id: "aesthetic-procedures",
        title: "Aesthetic Procedures",
        description: "Non-surgical enhancements for natural beauty refinement",
        color: "amber",
        treatments: [
          {
            id: "botox-fillers",
            title: "Botox & Fillers",
            description: "Neurotoxins and hyaluronic acid fillers for wrinkle reduction and facial contouring.",
            duration: "30-45 min",
            sessions: "Every 4-6 months",
            price: "₹15,000 - ₹45,000",
          },
          {
            id: "thread-lift",
            title: "Thread Lift",
            description: "PDO threads for non-surgical lifting and collagen stimulation.",
            duration: "60 min",
            sessions: "Annual maintenance",
            price: "₹35,000 - ₹75,000",
          },
          {
            id: "prp-facial",
            title: "PRP Facial (Vampire Facial)",
            description: "Platelet-rich plasma therapy for skin rejuvenation and glow enhancement.",
            duration: "60 min",
            sessions: "3 sessions",
            price: "₹12,000 - ₹20,000",
          },
        ],
      },
      {
        id: "hair-solutions",
        title: "Hair Solutions",
        description: "Medical and cosmetic treatments for hair loss and scalp health",
        color: "emerald",
        treatments: [
          {
            id: "prp-hair",
            title: "PRP Hair Restoration",
            description: "Growth factor therapy stimulating dormant follicles for natural hair regrowth.",
            duration: "60 min",
            sessions: "6-8 sessions",
            price: "₹12,000 - ₹20,000",
          },
          {
            id: "mesotherapy",
            title: "Mesotherapy",
            description: "Micro-injections of vitamins and minerals directly to the scalp.",
            duration: "45 min",
            sessions: "8-10 sessions",
            price: "₹8,000 - ₹15,000",
          },
          {
            id: "scalp-treatments",
            title: "Scalp Treatments",
            description: "Medical management of dandruff, psoriasis, and seborrheic dermatitis.",
            duration: "30 min",
            sessions: "4-6 sessions",
            price: "₹3,000 - ₹7,000",
          },
        ],
      },
      {
        id: "laser-therapies",
        title: "Laser Therapies",
        description: "Advanced laser technologies for skin transformation",
        color: "violet",
        treatments: [
          {
            id: "laser-hair-reduction",
            title: "Laser Hair Reduction",
            description: "Permanent hair reduction for all skin types using diode and Nd:YAG lasers.",
            duration: "30-60 min",
            sessions: "6-8 sessions",
            price: "₹5,000 - ₹20,000",
          },
          {
            id: "fractional-laser",
            title: "Fractional Laser Resurfacing",
            description: "CO2 and Erbium lasers for deep skin renewal and scar treatment.",
            duration: "45 min",
            sessions: "3-5 sessions",
            price: "₹15,000 - ₹35,000",
          },
          {
            id: "tattoo-removal",
            title: "Tattoo Removal",
            description: "Q-switched laser technology for safe, effective tattoo fading.",
            duration: "30 min",
            sessions: "6-12 sessions",
            price: "₹5,000 - ₹15,000",
          },
        ],
      },
    ],

    testimonials: {
      sectionTitle: "Proven Results",
      reviews: [
        {
          id: 4,
          name: "Rohan Kapoor",
          role: "Entrepreneur",
          quote: "The PRP hair treatment changed my life. Dr. Firdouz explained every step, and the results speak for themselves.",
          treatment: "PRP Hair Restoration",
        },
        {
          id: 5,
          name: "Ananya Sharma",
          role: "Architect",
          quote: "Subtle, natural, perfect. Exactly what I wanted from my fillers. No one knows, everyone compliments.",
          treatment: "Botox & Fillers",
        },
      ],
    },

    cta: {
      headline: "Not Sure",
      headlineAccent: "Where to Start?",
      subtext: "Book a comprehensive skin analysis. We'll map the perfect treatment journey for your unique concerns.",
      buttonText: "Book Analysis",
    },
  },

  // Contact Page
  contact: {
    meta: {
      title: "Contact | Book Your Consultation",
      description: "Schedule your appointment with Dr. Heena Firdouz. Premium dermatology care in Mumbai.",
    },

    hero: {
      headline: "Let's",
      headlineAccent: "Connect",
      subheadline: "Ready to transform your skin? Reach out to schedule your personalized consultation.",
    },

    form: {
      title: "Request Appointment",
      subtitle: "Fill in your details and we'll confirm within 24 hours",
      fields: {
        name: {
          label: "Full Name",
          placeholder: "Your name",
          required: true,
        },
        email: {
          label: "Email Address",
          placeholder: "your@email.com",
          required: true,
        },
        phone: {
          label: "Phone Number",
          placeholder: "+91 98765 43210",
          required: true,
        },
        service: {
          label: "Interested Service",
          placeholder: "Select a service",
          options: [
            "General Consultation",
            "Acne Treatment",
            "Hair Restoration",
            "Anti-Aging",
            "Laser Treatment",
            "Other",
          ],
          required: true,
        },
        date: {
          label: "Preferred Date",
          placeholder: "Select date",
          required: true,
        },
        message: {
          label: "Additional Notes",
          placeholder: "Tell us about your concerns...",
          required: false,
        },
      },
      submitButton: "Request Appointment",
      successMessage: "Thank you! We'll contact you within 24 hours to confirm.",
    },

    info: {
      title: "Visit Us",
      cards: [
        {
          title: "Location",
          content: ["42, Emerald Heights", "Near City Center Mall", "Mumbai, Maharashtra 400076"],
          icon: "MapPin",
        },
        {
          title: "Contact",
          content: ["+91 98765 43210", "care@drheenafirdouz.com"],
          icon: "Phone",
        },
        {
          title: "Hours",
          content: ["Mon-Fri: 10AM - 7PM", "Saturday: 10AM - 4PM", "Sunday: Closed"],
          icon: "Clock",
        },
      ],
    },

    map: {
      embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.1234567890123!2d72.12345678901234!3d19.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDA3JzI0LjQiTiA3MsKwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin",
    },
  },

  // Global UI Elements
  ui: {
    loadingText: "Loading Experience...",
    scrollIndicator: "Scroll to explore",
    menuOpen: "Menu",
    menuClose: "Close",
    bookNow: "Book Now",
    learnMore: "Learn More",
    viewAllServices: "View All Services",
    backToHome: "Back to Home",
  },

  // Footer
  footer: {
    tagline: "Transforming skin, transforming lives.",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Service", href: "/terms" },
    ],
    newsletter: {
      title: "Stay Updated",
      placeholder: "Your email address",
      button: "Subscribe",
      description: "Receive skincare tips and exclusive offers",
    },
    copyright: "© 2024 Dr. Heena Firdouz. All rights reserved.",
    credits: "Crafted with care in Mumbai",
  },
};