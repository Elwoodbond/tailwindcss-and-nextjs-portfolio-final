import React from "react"
import Image from "next/image"
import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Bootstrap" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "JQuery" },
  { skill: "Node.js" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              I have a passion for
              learning and a desire to always discover more about the world
              around me. I am excited to see where my career takes me and am
               open to new opportunities both remote and in the Tampa Bay 
              area.
              <br />
              <br />
              Keep up to date with my projects and progress on my GitHub and LinkedIn pages.
              <br />
              <br />
          <div className="justify-center space-x-2 mb-1 flex flex-row text-center text-4xl font-bold mb-6">
          <a href="https://github.com/Elwoodbond" rel="noreferrer" target="_blank">
            <AiOutlineGithub
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>


          <a href="https://www.linkedin.com/in/elwood-bond-038b9b1a6" rel="noreferrer" target="_blank">
            <AiOutlineLinkedin
              className="hover:-translate-y-1 transition-transform cursor-pointer text-neutral-500 dark:text-neutral-100"
              size={30}
            />
          </a>
          </div>
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
