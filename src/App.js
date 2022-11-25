import './app.css'
import { useEffect } from 'react';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'




/* key = 34780cfa */

const API_URL = 'http://www.omdbapi.com/?apikey=34780cfa';


function App() {
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        console.log(data);
    }


    useEffect(() => {
        searchMovies('Spiderman');

    }, [])
    return (
        <>
            <Header />
            <Nav />
            

        </>
    )
}

export default App;