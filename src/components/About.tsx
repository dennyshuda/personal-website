import { Container } from "./Container";
import about from "../assets/about.png";

export function About() {
  return (
    <div className="dark:bg-darkBackground text-primaryLight dark:text-primaryDark -my-1 py-5">
      <Container>
        <div className="mb-10 md:w-3/12 border-b-4 dark:border-primaryDark border-secondaryLight py-2">
          <h1 className="text-3xl font-bold">
            ABOUT{" "}
            <span className="dark:text-secondaryDark text-secondaryLight">
              ME
            </span>
          </h1>
          <h3>My Introduction</h3>
        </div>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-5/12">
            <img
              className="w-full rounded-lg"
              src={about}
              alt="Denny Setyawan Huda"
            />
          </div>
          <div className="md:w-7/12">
            <div className="flex flex-col gap-y-4 md:flex-row md:justify-between mb-10 text-sm">
              <section className="md:w-3/12 border-2 border-secondaryLight dark:border-primaryDark text-center py-5 px-2 rounded-md">
                <svg
                  className="inline-block fill-primaryLight dark:fill-primaryDark"
                  width="18"
                  height="25"
                  viewBox="0 0 18 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M14.4186 16.1447V23.4962C14.4186 23.5908 14.3935 23.6838 14.3459 23.7656C14.2982 23.8473 14.2297 23.915 14.1474 23.9617C14.0651 24.0083 13.9718 24.0323 13.8772 24.0311C13.7826 24.03 13.6899 24.0038 13.6088 23.9551L9.06974 21.2315L4.53071 23.9551C4.44946 24.0038 4.35673 24.03 4.262 24.0312C4.16728 24.0323 4.07396 24.0082 3.9916 23.9614C3.90923 23.9146 3.84076 23.8468 3.7932 23.7649C3.74564 23.6829 3.72069 23.5898 3.7209 23.4951V16.1458C2.33678 15.0376 1.33103 13.5269 0.842646 11.8224C0.354261 10.1179 0.407354 8.30377 0.994587 6.63074C1.58182 4.95772 2.6742 3.50839 4.12076 2.48305C5.56732 1.45771 7.29664 0.906982 9.06974 0.906982C10.8428 0.906982 12.5722 1.45771 14.0187 2.48305C15.4653 3.50839 16.5577 4.95772 17.1449 6.63074C17.7321 8.30377 17.7852 10.1179 17.2968 11.8224C16.8084 13.5269 15.8027 15.0376 14.4186 16.1458V16.1447ZM5.86043 17.3996V20.6624L9.06974 18.7368L12.279 20.6624V17.3996C11.2594 17.812 10.1696 18.0234 9.06974 18.0222C7.96984 18.0234 6.88009 17.812 5.86043 17.3996ZM9.06974 15.8827C10.7721 15.8827 12.4047 15.2064 13.6084 14.0027C14.8121 12.799 15.4883 11.1664 15.4883 9.46405C15.4883 7.76173 14.8121 6.12913 13.6084 4.92541C12.4047 3.72169 10.7721 3.04545 9.06974 3.04545C7.36742 3.04545 5.73482 3.72169 4.5311 4.92541C3.32738 6.12913 2.65113 7.76173 2.65113 9.46405C2.65113 11.1664 3.32738 12.799 4.5311 14.0027C5.73482 15.2064 7.36742 15.8827 9.06974 15.8827Z" />
                </svg>
                <h1>Experience</h1>
                <p> &lt; 1 Years</p>
              </section>

              <section className="md:w-3/12 border-2 border-secondaryLight dark:border-primaryDark text-center py-5 px-2 rounded-md">
                <svg
                  className="inline-block fill-primaryLight dark:fill-primaryDark"
                  width="23"
                  height="20"
                  viewBox="0 0 23 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M19.1512 3.30229H15.907V2.2209C15.907 1.64729 15.6791 1.09717 15.2735 0.691572C14.8679 0.28597 14.3178 0.0581055 13.7442 0.0581055H9.41862C8.84501 0.0581055 8.2949 0.28597 7.8893 0.691572C7.48369 1.09717 7.25583 1.64729 7.25583 2.2209V3.30229H4.01164C3.15123 3.30229 2.32606 3.64409 1.71766 4.25249C1.10925 4.86089 0.767456 5.68607 0.767456 6.54648V16.279C0.767456 17.1394 1.10925 17.9646 1.71766 18.573C2.32606 19.1814 3.15123 19.5232 4.01164 19.5232H19.1512C20.0116 19.5232 20.8368 19.1814 21.4452 18.573C22.0536 17.9646 22.3954 17.1394 22.3954 16.279V6.54648C22.3954 5.68607 22.0536 4.86089 21.4452 4.25249C20.8368 3.64409 20.0116 3.30229 19.1512 3.30229ZM9.41862 2.2209H13.7442V3.30229H9.41862V2.2209ZM20.2326 16.279C20.2326 16.5658 20.1186 16.8409 19.9158 17.0437C19.713 17.2465 19.438 17.3604 19.1512 17.3604H4.01164C3.72484 17.3604 3.44978 17.2465 3.24698 17.0437C3.04418 16.8409 2.93025 16.5658 2.93025 16.279V10.2124L7.99118 11.9535C8.106 11.969 8.2224 11.969 8.33722 11.9535H14.8256C14.9429 11.9513 15.0593 11.9331 15.1716 11.8994L20.2326 10.2124V16.279ZM20.2326 7.93066L14.6526 9.79066H8.51025L2.93025 7.93066V6.54648C2.93025 6.25967 3.04418 5.98462 3.24698 5.78182C3.44978 5.57902 3.72484 5.46508 4.01164 5.46508H19.1512C19.438 5.46508 19.713 5.57902 19.9158 5.78182C20.1186 5.98462 20.2326 6.25967 20.2326 6.54648V7.93066Z" />
                </svg>
                <h1>Completed</h1>
                <p> 10+ Projects</p>
              </section>
              <section className="md:w-3/12 border-2 border-secondaryLight dark:border-primaryDark text-center py-5 px-2 rounded-md">
                <svg
                  className="inline-block fill-primaryLight dark:fill-primaryDark"
                  width="22"
                  height="23"
                  viewBox="0 0 22 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M11.0697 0.906982C5.17105 0.906982 0.37207 5.70596 0.37207 11.6047V16.0367C0.37207 17.1321 1.33165 18.0233 2.51161 18.0233H3.58137C3.86509 18.0233 4.13719 17.9106 4.33781 17.7099C4.53843 17.5093 4.65114 17.2372 4.65114 16.9535V11.4517C4.65114 11.168 4.53843 10.8959 4.33781 10.6952C4.13719 10.4946 3.86509 10.3819 3.58137 10.3819H2.61002C3.20481 6.24191 6.76714 3.04652 11.0697 3.04652C15.3723 3.04652 18.9347 6.24191 19.5295 10.3819H18.5581C18.2744 10.3819 18.0023 10.4946 17.8017 10.6952C17.6011 10.8959 17.4883 11.168 17.4883 11.4517V18.0233C17.4883 19.2032 16.5288 20.1628 15.3488 20.1628H13.2093V19.093H8.93021V22.3023H15.3488C17.7087 22.3023 19.6279 20.3832 19.6279 18.0233C20.8078 18.0233 21.7674 17.1321 21.7674 16.0367V11.6047C21.7674 5.70596 16.9684 0.906982 11.0697 0.906982Z" />
                </svg>
                <h1>Support</h1>
                <p>24/7</p>
              </section>
            </div>
            <p className="text-center md:text-left">
              Hi, my name is Denny. I love to solve the problem and implement
              idea with design and code. Interest to explore different styles of
              design and follow the design and technology trends for frontend
              development. I have experience in a variety of front-end
              technologies such as HTML, CSS, JavaScript, TypeScript, and React.
              I am skilled in creating responsive designs that adapt to
              different screen sizes and devices, and I am well-versed in
              optimizing web pages for speed and user experience. I have
              experience working with modern front-end libraries and frameworks
              such as React.js.
            </p>
          </div>
        </div>
      </Container>
    </div>
  );
}
