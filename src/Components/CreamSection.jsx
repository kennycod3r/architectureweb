export default function CreamSection() {
  return (
    <section className="cream fc">
      <div className="container">
        <h2>
          We Are <i>here</i> For You
        </h2>
        <div>
          <ul className="card-container">
            <li>
              <img
                className="cardimg"
                src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW9kZXJuJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
                alt="Cozy House"
              />
              <h3>
                {" "}
                Supporting the Cancer Care Center's "Beacon of Hope" Lodge.
              </h3>
              <p className="dark-grey">
                <i>ontarrio</i>, Canada.
              </p>
              <div className="flex small-btn-container">
                <button className="small">small</button>
                <button className="small ash">unforgetable experience</button>
              </div>
            </li>
            <li>
              <img
                className="cardimg"
                src="https://images.unsplash.com/photo-1608303588026-884930af2559?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Zmxvb3IlMjBwbGFuc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Exterior"
              />
              <h3>Tailored Floor Plans for Every Unique Space</h3>
              <p className="dark-grey">Headquaters, wuse.</p>
              <button className="small">small</button>
            </li>
            <li>
              <img
                className="cardimg"
                src="https://images.unsplash.com/photo-1596541513035-630fea51dbb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29uc3RydWN0aW9uJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D"
                alt="Construction Building"
              />
              <h3>Residential - modelling</h3>
              <p className="dark-grey">lagos, Nigeria</p>
              <div className="flex small-btn-container">
                <button className="small">small</button>
                <button className="small ash">unforgetable experience</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
