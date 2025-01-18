import "./App.css";
import data from "./assets/data.json";

function App() {
  return (
    <section className="container">
      {data.map((elem, index) => {
        return (
          <div className="programe">
            <div className="time-photo">
              <h2>{elem.time}</h2>
              <div className="photo">
                <img key={elem.image} src={elem.image} />
              </div>
            </div>

            <div className="content">
              <h3 key={elem.title}>{elem.title}</h3>
              <h4>{elem.type}</h4>

              <div className="hour">
                <p>{elem.duration} </p>
                <p>{elem.direct && <div className="direct">Direct</div>}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
export default App;
