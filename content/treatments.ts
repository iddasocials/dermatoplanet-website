export type SubTreatment = { name: string; description: string };

export type Treatment = {
  name: string;
  description: string;
  sub?: SubTreatment[];
};

export type Category = {
  slug: string;
  title: string;
  intro: string;
  icon: string; // lucide icon key resolved in the UI
  treatments: Treatment[];
};

export const treatmentCategories: Category[] = [
  {
    slug: "skin",
    title: "Skin Treatments",
    icon: "sparkles",
    intro:
      "We offer advanced, evidence-based skin treatments personally tailored to enhance your features and address concerns like pigmentation, acne, dullness, and uneven texture. From medical-grade chemical peels to customized skin analysis, each treatment is designed to rejuvenate and restore healthy, radiant skin.",
    treatments: [
      {
        name: "Advanced Skin Analyzer",
        description:
          "A digital diagnostic tool (AI technology) that evaluates your skin condition in depth, helping us create a highly personalized treatment plan.",
      },
      {
        name: "Chemical Peels",
        description:
          "Medical-grade exfoliation treatments that improve skin texture, pigmentation, acne, and overall radiance.",
        sub: [
          {
            name: "Glycolic Acid Peel",
            description: "A superficial peel that brightens dull skin and improves uneven texture.",
          },
          {
            name: "Lactic Acid Peel",
            description:
              "A gentle hydrating peel ideal for sensitive skin, enhancing glow and mild pigmentation.",
          },
          {
            name: "Mandelic Acid Peel",
            description: "Perfect for sensitive skin, this peel targets pigmentation with minimal irritation.",
          },
          {
            name: "TCA Peel",
            description:
              "A medium-depth peel that treats acne scars, pigmentation, and deeper skin imperfections.",
          },
          {
            name: "Phenol Peel",
            description:
              "A deep resurfacing peel for severe pigmentation, wrinkles, and advanced skin rejuvenation.",
          },
          {
            name: "Yellow / Retinol Peel",
            description:
              "A powerful anti-ageing peel that boosts collagen, improves texture, and reduces pigmentation.",
          },
          {
            name: "Black Peel",
            description:
              "A revitalizing peel that targets acne-prone and oily skin, refining texture and clarity.",
          },
          {
            name: "Bio RePeel",
            description:
              "An advanced no-peel treatment that rejuvenates, tightens, and brightens skin with minimal downtime.",
          },
          {
            name: "Pink / Intimate Area Peel",
            description: "Specialized peel designed to lighten and rejuvenate sensitive intimate areas.",
          },
          {
            name: "Underarm Peel",
            description:
              "Targets pigmentation and uneven tone in the underarm area for smoother, brighter skin.",
          },
          {
            name: "Cosmelan Peel",
            description: "A gold-standard depigmentation treatment for melasma and stubborn pigmentation.",
          },
          {
            name: "Lip Peel",
            description: "A gentle peel to lighten dark lips, smooth texture, and restore natural color.",
          },
        ],
      },
    ],
  },
  {
    slug: "facials",
    title: "Facials",
    icon: "smile",
    intro:
      "Our signature facials combine clinical expertise with luxury skincare to deeply cleanse, hydrate, and revitalize your skin. Whether it’s a Hydrafacial, Korean glass-skin facial, or advanced medi-facial, each session delivers instant glow with long-term skin benefits.",
    treatments: [
      {
        name: "Hydrafacial (DAE JU)",
        description:
          "A multi-step treatment that cleanses, exfoliates, extracts, and hydrates for instantly glowing skin.",
      },
      {
        name: "Medi Facial",
        description: "Clinically customized facial using active ingredients to target specific skin concerns.",
      },
      {
        name: "Korean Facial",
        description:
          "A glow-enhancing treatment focused on hydration, glass-skin effect, and skin barrier repair.",
      },
      {
        name: "Carbon Facial / Black Doll Facial",
        description: "Laser-based facial that deeply cleans pores, controls oil, and improves skin clarity.",
      },
      {
        name: "Vampire Facial (PRP Facial)",
        description:
          "Uses your own platelet-rich plasma to boost collagen, improve texture, and rejuvenate skin.",
      },
      {
        name: "Hollywood Facial",
        description: "A laser toning facial that gives an instant bright, red-carpet glow with no downtime.",
      },
      {
        name: "Photo Facial",
        description: "Light-based treatment that reduces pigmentation, redness, and uneven skin tone.",
      },
    ],
  },
  {
    slug: "anti-ageing",
    title: "Anti-Ageing",
    icon: "heart-pulse",
    intro:
      "Advanced, evidence-based treatments that restore firmness and a youthful glow — smoothing fine lines, tightening skin, and stimulating your body’s own collagen for natural, long-lasting results.",
    treatments: [
      {
        name: "HIFU (High-Intensity Focused Ultrasound)",
        description: "Non-surgical facelift that tightens and lifts skin by stimulating deep collagen.",
      },
      {
        name: "RF (Radiofrequency)",
        description: "Skin tightening treatment that improves laxity and boosts collagen production.",
      },
      {
        name: "Microneedling",
        description: "Stimulates collagen and improves acne scars, pores, and overall skin texture.",
      },
      {
        name: "Botox",
        description: "Injectable treatment that relaxes facial muscles to reduce wrinkles and fine lines.",
      },
      {
        name: "Fillers",
        description:
          "Restore volume, enhance facial contours, and improve symmetry with natural-looking results.",
      },
      {
        name: "Thread Lift",
        description: "A minimally invasive procedure that lifts sagging skin and improves facial definition.",
      },
      {
        name: "PRP Needling",
        description: "Combination of microneedling with PRP to accelerate skin healing and collagen production.",
      },
      {
        name: "PDRN Skin Booster",
        description:
          "Advanced injectable that deeply hydrates, repairs, and rejuvenates skin at a cellular level.",
      },
    ],
  },
  {
    slug: "cosmetic",
    title: "Cosmetic Procedures",
    icon: "brush",
    intro:
      "Enhance your features with precision-driven cosmetic treatments such as permanent makeup, lip blush, microblading, and eyeliner definition. Designed for subtle yet impactful results, these procedures bring out your natural beauty with long-lasting elegance.",
    treatments: [
      {
        name: "Permanent Makeup",
        description: "Semi-permanent enhancement of facial features for a polished, effortless look.",
      },
      {
        name: "Eyeliner",
        description: "Defines the eyes with long-lasting pigment for a fuller, more expressive appearance.",
      },
      {
        name: "Lip Blush",
        description: "Enhances lip color, shape, and symmetry with a natural tint.",
      },
      {
        name: "Eyebrow Microblading",
        description: "Creates natural-looking fuller brows with precise, hair-like strokes.",
      },
    ],
  },
  {
    slug: "hair",
    title: "Hair Treatments",
    icon: "scissors",
    intro:
      "Comprehensive solutions for hair loss and thinning, addressing both male and female pattern hair loss. From PRP and GFC to advanced regenerative therapies and nutritional support, our treatments aim to restore hair strength, density, and confidence.",
    treatments: [
      {
        name: "Hair Transplant",
        description: "Surgical restoration of hair using your own follicles for permanent results.",
      },
      {
        name: "Hair Loss Treatments (Male & Female Pattern)",
        description: "Customized protocols to control hair fall and promote regrowth.",
      },
      {
        name: "PRP (Platelet-Rich Plasma)",
        description:
          "Uses growth factors from your blood to stimulate hair follicles and improve density.",
      },
      {
        name: "GFC (Growth Factor Concentrate)",
        description: "Advanced hair treatment with concentrated growth factors for faster, effective results.",
      },
      {
        name: "Exosomes / Stem Cell Therapy",
        description: "Next-generation regenerative treatment that enhances hair growth and scalp health.",
      },
      {
        name: "QR678",
        description:
          "An advanced, patented, non-surgical hair growth therapy that uses targeted growth factors and peptides to nourish the scalp, stop hair fall, and stimulate new follicles.",
      },
      {
        name: "Mesosome Therapy",
        description: "Targeted delivery of nutrients and growth factors to strengthen hair roots.",
      },
      {
        name: "Microneedling (for Hair)",
        description: "Improves scalp circulation and enhances absorption of hair growth solutions.",
      },
      {
        name: "Hair Growth Boosters",
        description: "Specialized serums and therapies to strengthen and thicken hair.",
      },
      {
        name: "Nutritional Support",
        description: "Personalized supplementation to address internal causes of hair loss.",
      },
    ],
  },
  {
    slug: "laser",
    title: "Laser",
    icon: "zap",
    intro:
      "Precision laser technology for smooth, clear, even-toned skin — from long-term hair reduction to pigmentation, scar, and tattoo removal with minimal downtime.",
    treatments: [
      {
        name: "4D Laser Hair Reduction (LHR)",
        description: "Advanced laser technology for long-term hair reduction with precision and safety.",
      },
      {
        name: "PICO Laser",
        description:
          "Super Pico Flash laser targets pigmentation, acne scars, and tattoo removal with minimal downtime.",
      },
    ],
  },
];
