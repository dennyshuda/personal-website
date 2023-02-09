import about from "../assets/about.png";
import { ProjectData } from "../data";
import { Container } from "./Container";

export function Projects() {
  return (
    <div className="dark:bg-darkBackground dark:text-primaryDark text-primaryLight py-5">
      <Container>
        <div className="mb-10 md:w-3/12 border-b-4 dark:border-primaryDark border-secondaryLight py-2">
          <h1 className="text-3xl font-bold">
            MY{" "}
            <span className="dark:text-secondaryDark text-secondaryLight">
              PROJECTS
            </span>
          </h1>
          <h3>Recent works</h3>
        </div>
        <div className="flex justify-center items-center gap-5 flex-wrap">
          {ProjectData.map((item) => {
            return (
              <div
                key={item.id}
                className="p-6 rounded-lg shadow-xl max-w-xs dark:bg-darkBackground bg-white dark:text-primaryDark text-primaryLight"
              >
                <img
                  className="rounded-lg border-4 border-primary dark:border-primaryDark"
                  src={item.imgUrl}
                  alt={item.title}
                />
                <div className="mt-2 space-y-3">
                  <h5 className="dark:text-primaryDark text-primary text-lg font-medium mb-2 ">
                    {item.title}
                  </h5>
                  <div>{item.description}</div>
                  <div className="space-x-3 text-primary dark:text-primaryDark">
                    <a
                      href={item.github}
                      target={"_blank"}
                      className=" inline-block px-6 py-2.5 border-2 border-primary dark:border-primaryDark font-medium text-xs leading-tight rounded-md"
                    >
                      GitHub
                    </a>
                    <a
                      href={item.demo}
                      target={"_blank"}
                      className=" inline-block px-6 py-2.5 border-2 border-primary dark:border-primaryDark font-medium text-xs leading-tight rounded-md"
                    >
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
