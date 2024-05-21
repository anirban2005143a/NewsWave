import { useState, useEffect, useRef } from "react";
import Navbar from "./component/navbar";
import Card from "./component/card";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [progress, setProgress] = useState(0);
  const [pagesize, setpagesize] = useState(25);
  const [query, setquery] = useState("everything");
  const [category, setcategory] = useState("india");
  const [heading, setheading] = useState("Today's NEWS");
  const [pagenumber, setpagenumber] = useState(1);
  const [totalData, settotalData] = useState(undefined);
  const [card, setcard] = useState([])
  const [newsapi, setnewsapi] = useState(
    `https://newsapi.org/v2/${query}?q=${category}&page=${pagenumber}&pageSize=${pagesize}&apiKey=215d1b8d94fd451c89a1f57a32e9f0a2`
  );

  function fetchdata(url) {
    fetch(url)
      .then(res => res.json())
      .then((data) => {
        setcard(data.articles);
        settotalData(data.totalResults);
      }).then(setProgress(70))
  }

  useEffect(() => {
    setcard([]);
    setProgress(10)
    // document.getElementById("loading-btn").style.display = "flex";
    
    setTimeout(() => {
      fetchdata(newsapi);
    }, 1500);
    setTimeout(() => {
      setProgress(100)
    }, 1700);
    
  }, [newsapi]);

  return (
    <>
      <LoadingBar color="#f11946" progress={progress} height={2.5} />
      <Navbar
        setcard={setcard}
        pageSize={pagesize}
        setpagesize={setpagesize}
        setnewsapi={setnewsapi}
        category={category}
        setcategory={setcategory}
        setquery={setquery}
        setheading={setheading}
        heading={heading}
      />
      <div className="container" style={{marginTop:"55px"}}>
        <p
          style={{
            backgroundColor: "#04049c",
            width: "58%",
            marginLeft: "auto",
            marginRight: "auto",
            color: "white",
            fontSize: "30px",
            fontWeight: 400,
            textAlign: "center",
            fontFamily: "roboto",
            borderRadius: "10px",
          }}
        >
          NewsWave - {heading}
        </p>
      </div>

      <div
        style={{
          width: "100%",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        {card.map((item) => {
          if (item.title !== "Removed" && item.urlToImage != null) {
            // document.getElementById("loading-btn").style.display = "none";
            return (
              <Card
                key={item.url}
                imgurl={item.urlToImage}
                title={item.title}
                url={item.url}
                desc={item.description}
                author={item.author}
                date={item.publishedAt}
                source={item.source.name}
              />
            );
          }
        })}
      </div>
      {/* <div
        id="loading-btn"
        className="container mt-4"
        style={{ display: "none", justifyContent: "center" }}
      >
        <Spinner />
      </div> */}

      <div
        className=" my-3 mt-4 px-5"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <button
          disabled={pagenumber == 1}
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#04049c" }}
          onClick={() => {
            let count = pagenumber;
            setpagenumber(pagenumber - 1);
            setnewsapi(
              `https://newsapi.org/v2/${query}?q=${category}&page=${count - 1}&pageSize=${pagesize}&apiKey=215d1b8d94fd451c89a1f57a32e9f0a2`
            );
          }}
        >
          &larr; Previous
        </button>
        <button
          disabled={
            1 > totalData / pagesize > 0 || pagenumber >= totalData / pagesize
          }
          type="button"
          className="btn btn-primary"
          style={{ backgroundColor: "#04049c" }}
          onClick={() => {
            let count = pagenumber;
            setpagenumber(pagenumber + 1);
            setnewsapi(
              `https://newsapi.org/v2/${query}?q=${category}&page=${count + 1}&pageSize=${pagesize}&apiKey=215d1b8d94fd451c89a1f57a32e9f0a2`
            );
          }}
        >
          Next &rarr;
        </button>
      </div>
    </>
  );
}

export default App;
