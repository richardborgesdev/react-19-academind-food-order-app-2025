import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";

export default function Header(props) {
  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} alt="A restaurant" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly>Cart(0)</Button>
      </nav>
    </header>
  );
}
