import { Container } from "./Container";

export function Footer() {
  const newDate = new Date();
  const getYear = newDate.getFullYear();
  return (
    <footer className="dark:bg-darkBackground py-10 dark:text-primaryDark text-primaryLight">
      <Container>
        <div className="w-full text-center">
          <p>© {getYear} Denny Setyawan Huda. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
