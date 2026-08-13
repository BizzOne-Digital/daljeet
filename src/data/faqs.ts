import type { FAQ } from "@/types";

export const faqs: FAQ[] = [
  {
    id: "q1",
    category: "Quotes & Pricing",
    question: "How do quotes work?",
    answer:
      "Every space is different. Share your service type, property details, and location—we provide a personalized quote before any work is scheduled. There are no fixed public rates on this site.",
  },
  {
    id: "q2",
    category: "Quotes & Pricing",
    question: "Do you publish fixed prices online?",
    answer:
      "No. Pricing depends on service type, room count, materials, condition, access, and scope. Contact us for a free quote tailored to your job.",
  },
  {
    id: "q3",
    category: "Quotes & Pricing",
    question: "How does the 30% off offer work?",
    answer:
      "The promotional offer is available by request. Eligibility and terms are confirmed when we prepare your quote—terms may apply.",
  },
  {
    id: "q4",
    category: "Preparation",
    question: "How should I prepare for carpet cleaning?",
    answer:
      "Remove small items from carpeted areas, note stains or odours in advance, and ensure reasonable access. We can discuss furniture and parking during booking.",
  },
  {
    id: "q5",
    category: "Preparation",
    question: "How long do carpets take to dry?",
    answer:
      "Drying time varies by fibre, humidity, ventilation, and cleaning method. We provide guidance after service based on your specific conditions.",
  },
  {
    id: "q6",
    category: "Services",
    question: "Do you clean rugs, sofas, and mattresses too?",
    answer:
      "Yes. We offer rug, upholstery, and mattress cleaning in addition to carpet and commercial services. Each service is quoted based on size and condition.",
  },
  {
    id: "q7",
    category: "Services",
    question: "Can you help with stains and odours?",
    answer:
      "We treat many common stains and odours, but results depend on material, age, and cause. We set realistic expectations during inspection—no absolute guarantees.",
  },
  {
    id: "q8",
    category: "Access",
    question: "What about condo parking and building access?",
    answer:
      "Share loading, parking, and entry instructions when booking. We confirm access details before your appointment.",
  },
  {
    id: "q9",
    category: "Commercial",
    question: "Do you handle commercial and property-management jobs?",
    answer:
      "Yes. We serve offices, retail spaces, and property-management maintenance. Recurring schedules can be discussed during quoting.",
  },
  {
    id: "q10",
    category: "Epoxy",
    question: "Do you offer epoxy flooring consultations?",
    answer:
      "Yes. Epoxy projects begin with a consultation to assess surface condition, preparation needs, and finish options before quoting.",
  },
  {
    id: "q11",
    category: "Coverage",
    question: "What areas do you serve?",
    answer:
      "We serve the Greater Toronto Area including Brampton, Mississauga, Toronto, Vaughan, Caledon, Etobicoke, and nearby communities. Confirm your city when requesting a quote.",
  },
  {
    id: "q12",
    category: "Scheduling",
    question: "Are you available 24/7?",
    answer:
      "You can reach us 24 hours a day, 7 days a week to inquire or request a quote. Actual appointment times are scheduled based on availability.",
  },
  {
    id: "q13",
    category: "Scheduling",
    question: "Can I reschedule?",
    answer:
      "Yes. Contact us as early as possible if you need to change your booking request or confirmed appointment.",
  },
];

export const faqCategories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))];
