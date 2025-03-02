import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div>
        <h1>THIS IS HOME PAGE</h1>
        <h2>progress so far </h2>
        <Link to="./login">LOGIN PAGE</Link>
      </div>
      <div className="text">
        <Link to="./signup">Signup PAGE</Link>
      </div>
    </>
  );
}
