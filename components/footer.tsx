export default function Footer() {
  return (
    <footer className="flex justify-center">
      <h1 className="text-sm font-light">
        &#169; Eagle Investing - All rights reserved {new Date().getFullYear()}
      </h1>
    </footer>
  );
}
