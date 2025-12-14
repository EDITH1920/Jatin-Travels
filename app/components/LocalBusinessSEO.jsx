"use client";

export default function LocalBusinessSEO() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Jatin Travels",
    "url": "https://jatin-travels.vercel.app",
    "logo": "https://jatin-travels.vercel.app/logo.png",
    "image": "https://jatin-travels.vercel.app/logo.png",
    "telephone": "+91-9179053619",
    "priceRange": "₹₹",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Korba",
      "addressLocality": "Korba",
      "addressRegion": "Chhattisgarh",
      "postalCode": "495677",
      "addressCountry": "IN"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Chhattisgarh"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "00:00",
        "closes": "23:59"
      }
    ],
    "sameAs": [
      "https://wa.me/919179053619"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
