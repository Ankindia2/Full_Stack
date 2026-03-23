// Header
function Header() {
  return (
    <div className="heading">
      <img
        className="images"
        src="https://aartisto.com/wp-content/uploads/2020/11/myntra.png" height="80px"width="75px"></img>
    

      <div className="option">
        <button className="but">Men</button>
        <button className="but">Women</button>
        <button className="but">Kids</button>
        <button className="but">Home and Living</button>
        <button className="but">Beauty</button>
        <button className="but">Studio</button>
      </div>

      <input placeholder="Search for Product brands and more" />

      <div className="profile">
        <button>Profile</button>
        <button>Wishlist</button>
        <button>Bag</button>
      </div>
    </div>
  );
}

export default Header;