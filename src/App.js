import "./App.css";
import Banner from "./Banner";
import Navbar from "./Navbar";
import requests from "./request";
import Row from "./Row";

export default function App() {
    return (
        <div className="app">
            {/* Navbar */}
            <Navbar />
            {/* Banner */}
            <Banner />
            {/* movie list/categories */}
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
                isLargeRow
            />
            <Row title="TRENDING Now" fetchUrl={requests.fetchTrending} />
            <Row title="TOP RATED" fetchUrl={requests.fetchTopRated} />
            <Row title="ACTION MOVIES" fetchUrl={requests.fetchActionMovies} />
            <Row title="COMEDY MOVIES" fetchUrl={requests.fetchComedyMovies} />
            <Row title="HORROR MOVIES" fetchUrl={requests.fetchHorrorMovies} />
            <Row
                title="ROMANCE MOVIES"
                fetchUrl={requests.fetchRomanceMovies}
            />
            <Row title="DOCUMENTARIES" fetchUrl={requests.fetchDocumentaries} />
        </div>
    );
}
