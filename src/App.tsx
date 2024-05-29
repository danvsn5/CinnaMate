import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/margins/Header'
import Footer from './components/margins/Footer'
import PageHome from './components/pages/PageHome'
import PageBrowser from './components/pages/PageBrowser'
import PageMyMovies from './components/pages/PageMyMovies'
import PageMovie from './components/pages/PageMovie'
import './resources/fontawesome/css/fontawesome.css'
import './resources/fontawesome/css/solid.css'
import ScrollToTop from './components/utils/ScrollToTop'

function App() {
  return (


    <Router>
      <ScrollToTop/>
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
