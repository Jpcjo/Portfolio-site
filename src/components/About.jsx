import aboutSvg from "../assets/about2.svg";
import SectionTitle from "../components/SectionTile";
import React from "react";

const About = () => {
  return (
    <section className="bg-white py-28" id="about">
      <div className="align-element grid md:grid-cols-2 md:px-20 items-center gap-16">
        <img src={aboutSvg} alt="aboutDesign" className="w-full h-76" />
        <article>
          <SectionTitle text="why hire fay?" />
          <p className="text-slate-600 mt-8 leading-loose">
            Fay earned her BS in Mechanical Engineering , and MS in Interior
            Design. She since has been working as a corporate designer within
            numerous companies globally, and subsequently become a freelance
            designer. However, her dedication towards learning hasn't simply
            stopped there.
          </p>
          <p className="text-slate-600 mt-8 leading-loose">
            She is a self-taught web developer, has laid hands on various
            projects since early 2023 and is loving it! Her keen senses for
            design, equipped interpersonal skills and methodical problem-solving
            approaches subject her to be one of the best-suited junior
            candidates for your company.
          </p>
        </article>
      </div>
    </section>
  );
};

export default About;
