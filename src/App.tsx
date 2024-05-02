import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import PageHome from './components/PageHome'
import PageBrowser from './components/PageBrowser'
import PageMyMovies from './components/PageMyMovies'
import PageMovie from './components/PageMovie'
import './resources/fontawesome/css/fontawesome.css'
import './resources/fontawesome/css/solid.css'


function App() {
  return (


    <Router>

      <Header />

      <Routes>

        <Route path="/" Component={PageHome}>
        </Route>

        <Route path="/browser" Component={PageBrowser}>
        </Route>

        <Route path="/movies" Component={PageMyMovies}>
        </Route>

        <Route path="/yourmovie" Component={PageMovie}>
        </Route>

      </Routes>

      <Footer />
    </Router>

  )
}

export default App
