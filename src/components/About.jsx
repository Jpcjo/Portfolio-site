import aboutSvg from "../assets/about2.svg";
import SectionTitle from "../components/SectionTile";
import React from "react";

const About = () => {
  return (
    <section className="bg-white py-28" id="about">
      <div className="align-element grid md:grid-cols-2 md:px-20 items-center gap-16">
        <img src={aboutSvg} alt="aboutDesign" className="w-full h-76" />
        <article>
          <SectionTitle text="why fay?" />
          <p className="text-slate-600 mt-8 leading-loose">
            Fay holds a BS in Mechanical Engineering and an MS in Interior
            Design. Following a successful career as a corporate designer in
            global companies, she transitioned to freelance design. Despite her
            accomplished background, Fay's commitment to learning persists.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            As a self-taught web developer, Fay has immersed herself in diverse
            projects since early 2023, thoroughly enjoying the experience. Her
            acute design instincts, strong interpersonal skills, and systematic
            problem-solving make her your best junior candidate.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
