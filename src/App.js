import Header from "./Header";
import Pizza from "./Pizza";
import "./App.css";

const pizzas = [
  { name: "Margherita", price: 9,  image: "/pizzas/margherita.jpg" },
  { name: "Pepperoni",  price: 12, image: "/pizzas/pepperoni.jpg" },
  { name: "Hawaiian",   price: 10, image: "/pizzas/hawaiian.jpg" },
];

export default function App() {
  return (
    <div className="container">
      <Header />
      <h2>Our best pizzas</h2>
      <div className="grid">
        {pizzas.map(p => (
          <Pizza key={p.name} {...p} />
        ))}
      </div>
    </div>
  );
}
