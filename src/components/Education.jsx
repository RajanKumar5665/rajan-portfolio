import React from "react";

const educationData = [
  {
    period: "Class 3rd - 10th",
    title: "Hostel Life",
    description:
      "Lived in a hostel, learning independence and discipline during my formative years.",
    result: "Passed 10th with 67%",
  },
  {
    period: "Class 11th - 12th (2019-2021)",
    title: "Vision Academy, Patna (BSEB/Bihar Board)",
    description:
      "Studied Science at Vision Academy, Patna. Developed a strong foundation in core subjects and time management skills.",
    result: "Passed 12th with 74%",
  },
  {
    period: "2021 - Present",
    title: "B.Tech CSE, Budge Budge Institute of Technology",
    description:
      "Currently in final year, final semester. Gained hands-on experience in computer science and engineering, with a CGPA of 7.0.",
    result: "Final Year (7.0 CGPA)",
  },
];

const Education = () => (
  <section id="education" className="scroll-mt-24 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Education</h2>
    <div className="flex flex-col gap-8 max-w-3xl mx-auto">
      {educationData.map((edu, idx) => (
        <div
          key={edu.title}
          className="bg-stone-900/70 rounded-xl p-6 shadow-lg border-l-4 border-cyan-400 relative"
        >
          <div className="absolute -left-2 top-6 w-4 h-4 bg-cyan-400 rounded-full border-2 border-stone-900"></div>
          <div className="ml-6">
            <h3 className="text-xl font-semibold text-cyan-300 mb-1">{edu.title}</h3>
            <span className="text-stone-400 text-sm mb-2 block">{edu.period}</span>
            <p className="text-stone-400 mb-2">{edu.description}</p>
            <span className="text-cyan-200 font-medium">{edu.result}</span>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Education;
