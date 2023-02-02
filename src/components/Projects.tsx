import about from "../assets/about.png";
import { Container } from "./Container";

export function Projects() {
  return (
    <div className="dark:bg-[#0C151D] dark:text-white py-5">
      <Container>
        <div className="mb-10 md:w-3/12 border-b-4 border-primary py-2">
          <h1 className="text-3xl font-bold">
            My <span className="text-primary">Projects</span>
          </h1>
          <h3>Recent works</h3>
        </div>

        <div className="flex justify-center items-center gap-5 flex-col flex-wrap md:flex-row">
          <div className="p-6 rounded-lg shadow-lg bg-white max-w-xs">
            <img
              className="rounded-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
            <div className="mt-2">
              <h5 className="text-gray-900 text-lg font-medium mb-2">
                Movie App
              </h5>
              <div className="space-x-3">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white max-w-xs">
            <img
              className="rounded-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
            <div className="mt-2">
              <h5 className="text-gray-900 text-lg font-medium mb-2">
                Movie App
              </h5>
              <div className="space-x-3">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg bg-white max-w-xs">
            <img
              className="rounded-lg"
              src="https://mdbootstrap.com/img/new/standard/nature/184.jpg"
              alt=""
            />
            <div className="mt-2">
              <h5 className="text-gray-900 text-lg font-medium mb-2">
                Movie App
              </h5>
              <div className="space-x-3">
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  GitHub
                </button>
                <button
                  type="button"
                  className=" inline-block px-6 py-2.5 border-2 border-primary text-primary font-medium text-xs leading-tight rounded-full"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
