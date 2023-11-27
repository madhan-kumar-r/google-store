import "./Navbar.scss";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import GoogleIcon from "@mui/icons-material/Google";

function Navbar() {
  return (
    <div className="navbar">
      <div className="left">
        <img
          src="https://cdn-icons-png.flaticon.com/256/300/300221.png"
          alt="Google"
        />
      </div>
      <div className="right">
        <SearchIcon fontSize="medium" style={{ fill: "gray" }} />
        <HelpIcon fontSize="medium" style={{ fill: "gray" }} />
        <ShoppingCartIcon fontSize="medium" style={{ fill: "gray" }} />
        <AccountCircleIcon fontSize="medium" style={{ fill: "gray" }} />
      </div>
    </div>
  );
}

export default Navbar;
