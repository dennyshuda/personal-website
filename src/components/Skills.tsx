import { Container } from "./Container";
import {
  SiJavascript,
  SiTypescript,
  SiGit,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiBootstrap,
  SiGithub,
} from "react-icons/si";
import { SiHtml5, SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";

export function Skills() {
  return (
    <div className="dark:bg-darkBackground py-5 dark:text-primaryDark text-primaryLight">
      <Container>
        <div className="mb-10 md:w-3/12 border-b-4 dark:border-primaryDark border-secondaryLight py-2">
          <h1 className="text-3xl font-bold">
            MY{" "}
            <span className="dark:text-secondaryDark text-secondaryLight">
              SKILLS
            </span>
          </h1>
          <h3>My Technologies</h3>
        </div>
        <div className="flex gap-5 flex-wrap justify-center md:justify-between text-secondaryLight dark:text-primaryDark">
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiHtml5 />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <DiCss3 />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiJavascript />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiTypescript />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiGit />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiBootstrap />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiReact />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiTailwindcss />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiNextdotjs />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiNodedotjs />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiBootstrap />
          </div>
          <div className="shadow-md transition-all delay-75 hover:border-2 hover:scale-110 text-8xl rounded-3xl p-5">
            <SiGithub />
          </div>
        </div>
      </Container>
    </div>
  );
}
