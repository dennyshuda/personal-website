import { Container } from "./Container";
import { Logo } from "../data/index";

export function Skills() {
  return (
    <div className="dark:bg-[#0C151D] dark:text-white py-5">
      <Container>
        <div className="mb-10 md:w-3/12 border-b-4 border-primary py-2">
          <h1 className="text-3xl font-bold">Skills</h1>
          <h3>My technologies</h3>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-y-10">
          {Logo.map((item) => {
            return (
              <a
                key={item.id}
                className="w-3/12 text-center"
                href={item.link}
                target={"_blank"}
              >
                <img
                  className="inline-block w-6/12 fill-black"
                  src={item.imgUrl}
                  alt={item.title}
                />
              </a>
            );
          })}
        </div>
      </Container>
    </div>
  );
}
