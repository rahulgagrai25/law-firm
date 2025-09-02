"use client";

type CaseStudy = {
  id: number;
  image: string;
  title: string;
  category: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    image: "/case_studies/1.png",
    title: "Giving Million Air Its Wings",
    category: "Financial",
  },
  {
    id: 2,
    image: "/case_studies/2.png",
    title: "Accident Insurance",
    category: "Accidental",
  },
  {
    id: 3,
    image: "/case_studies/3.png",
    title: "Making Sure It’s Closed",
    category: "Financial",
  },
  {
    id: 4,
    image: "/case_studies/4.png",
    title: "Corporate Law Advisory",
    category: "Corporate",
  },
  {
    id: 5,
    image: "/case_studies/5.png",
    title: "Family Legal Support",
    category: "Family",
  },
  {
    id: 6,
    image: "/case_studies/6.png",
    title: "Property Settlement",
    category: "Real Estate",
  },
];

export default function CaseStudies() {
  return (
    <section className="case-studies">
      <div className="case-study-ghost" aria-hidden>
        CASE STUDY
      </div>
      <div className="case-header">
        <h2 className="case-title">Case Studies</h2>
        <a href="#" className="view-all">
          VIEW ALL CASES →
        </a>
      </div>
        <div className="grid-box">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {caseStudies.map((item) => (
          <div key={item.id} className="case-card">
            <img src={item.image} alt={item.title} className="case-img" />
            <h3 className="case-card-title">{item.title}</h3>
            <p className="case-card-category">{item.category}</p>
          </div>
        ))}
      </div>
        </div>
      
    </section>
  );
}
