import { Container } from "./Container";

export function Footer() {
  const newDate = new Date();
  const getYear = newDate.getFullYear();
  return (
    <footer className="dark:bg-[#0C151D] dark:text-white  py-10">
      <Container>
        <div className="w-full text-center">
          <p>© {getYear} Denny Setyawan Huda. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
