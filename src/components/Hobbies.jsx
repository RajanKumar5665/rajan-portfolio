import React from "react";

const hobbies = [
  {
    title: "Playing Chess",
    description:
      "I enjoy the strategic depth and mental challenge of chess. It sharpens my problem-solving skills and helps me stay focused.",
    icon: "♟️",
  },
  {
    title: "Going to the Gym",
    description:
      "Fitness is a big part of my life. Regular workouts keep me energetic, disciplined, and motivated to achieve my goals.",
    icon: "🏋️",
  },
  {
    title: "Playing Cricket",
    description:
      "Cricket teaches me teamwork, patience, and resilience. I love the excitement and camaraderie of the game.",
    icon: "🏏",
  },
  {
    title: "Listening to Music",
    description:
      "Music is my escape and inspiration. It helps me relax, focus, and fuels my creativity during work and study.",
    icon: "🎧",
  },
];

const Hobbies = () => (
  <section id="hobbies" className="scroll-mt-24 py-16">
    <h2 className="text-3xl font-bold mb-8 text-center text-cyan-400">Hobbies & Interests</h2>
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
      {hobbies.map((hobby) => (
        <div
          key={hobby.title}
          className="bg-stone-900/70 rounded-xl p-6 flex flex-col items-center shadow-lg hover:scale-105 transition-transform border border-stone-800"
        >
          <div className="text-5xl mb-4">{hobby.icon}</div>
          <h3 className="text-xl font-semibold mb-2 text-cyan-300">{hobby.title}</h3>
          <p className="text-stone-400 text-center text-sm">{hobby.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Hobbies;
