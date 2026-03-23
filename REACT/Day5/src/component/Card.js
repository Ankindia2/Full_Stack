// Card
function Card(props) {
  return (
    <div
      className="card"
      style={{ border: "2px solid black", padding: "2px" }}
    >
      <img
        
         src="https://www.pngkey.com/png/detail/52-523758_vector-free-tshirt-t-shirt.png" 

        height="180px"
        width="200px"
        alt="product"
      />

      <div style={{ textAlign: "center" }}>
        <h2>{props.cloth}</h2>
        <h2>{props.offer}</h2>
        <h3>Shop Now</h3>
        <h3>Price:{props.price}</h3>
      </div>
    </div>
  );
}

export default Card;