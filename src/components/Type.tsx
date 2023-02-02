import Typewriter from "typewriter-effect";

export function Type() {
  return (
    <div className="text-3xl font-bold my-10 dark:text-primaryDark">
      <Typewriter
        options={{
          strings: [
            "A Frontend Web Developer",
            "An Esport Enthusiast",
            "An Human",
            "A Traveller",
          ],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
    </div>
  );
}
