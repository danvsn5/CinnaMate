import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Margin/Header'
import Footer from './components/Margin/Footer'
import PageHome from './components/Page/PageHome'
import PageBrowser from './components/Page/PageBrowser'
import PageMyMovies from './components/Page/PageMyMovies'
import PageMovie from './components/Page/PageMovie'
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
