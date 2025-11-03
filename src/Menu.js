import Pizza from "./Pizza";
import "./App.css";

export default function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu</h2>
      <div className="grid">
        <Pizza name="Margherita" price={9} image="/pizzas/margherita.jpg" />
        <Pizza name="Pepperoni" price={12} image="/pizzas/pepperoni.jpg" />
      </div>
    </div>
  );
}
