import "./App.css";

export default function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;

  return (
    <footer className="footer">
      {isOpen ? (
        <p>We’re currently open</p>
      ) : (
        <p>Sorry we’re closed</p>
      )}
    </footer>
  );
}
