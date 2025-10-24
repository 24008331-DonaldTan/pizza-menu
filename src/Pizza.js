export default function Pizza({ name, price, image }) {
  // images in /public are served from the root ("/")
  const src = process.env.PUBLIC_URL + image; // e.g. "/pizzas/margherita.jpg"
  return (
    <div className="pizza">
      <img src={src} alt={name} width="180" />
      <h3>{name}</h3>
      <p>${price}</p>
    </div>
  );
}
