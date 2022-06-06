import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fdata();
  }, []);

  const fdata = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products/");
      console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const sortdesc = async () => {
    try {
      const res = await axios.get(
        "https://fakestoreapi.com/products?sort=desc"
      );
      // console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const category = async (catg) => {
    try {
      const res = await axios.get(
        `https://fakestoreapi.com/products/category/${catg}`
      );
      // console.log(res);
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand text-white">FakeEcommerce</a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a className="nav-link" onClick={fdata} href="#">
                  Home
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => category("jewelery")}
                  href="#"
                >
                  jewelery
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => category("men's clothing")}
                  href="#"
                >
                  men's clothing
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  onClick={() => category("women's clothing")}
                  href="#"
                >
                  women's clothing
                </a>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownMenuLink"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Sort
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" onClick={sortdesc}>
                    Descending
                  </a>
                  <a className="dropdown-item" onClick={fdata}>
                    Ascending
                  </a>
                  {/* <a className="dropdown-item" href="#">
                    Something else here
                  </a> */}
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          {data.map((e) => {
            return (
              <div className="col-lg-4 col-xl-4 mx-auto " key={e.id}>
                <div class="card-deck">
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={e.image}
                      alt="Card image cap"
                    />
                    <div className="card-body">
                      <h5 className="card-title">{e.title}</h5>
                      {/* <p className="card-text">
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </p> */}
                      <a href="#" className="btn btn-primary">
                        Go somewhere
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
