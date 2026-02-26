import { Link } from "react-router-dom";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <nav className="flex justify-between items-center">
      <Link to="/">
        <img src="/logo.png" alt="logo" className="h-20 object-cover" />
      </Link>

      <Button variant="outline" size="lg">
        Login
      </Button>
    </nav>
  );
};

export default Header;
