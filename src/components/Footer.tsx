import tmdb from '../resources/images/tmdb.svg'
import github from '../resources/images/github.svg'

const Footer = () => {
  return (

    <footer>

      <div className="footer-bar">
        <div className="attribution">
          <div className="tmdb-logo">
            <a href="https://www.themoviedb.org/" target='_blank'>
              <img src={tmdb} alt="TMDB" />
            </a>
          </div>
          <div className="text-attribution">
            <h6>CinnaMate uses TMDB and the TMDB APIs but is not endorsed, certified or otherwise approved by TMBD</h6>
          </div>
        </div>

        <div className="github">
          <div className="github-logo">
            <a href="https://github.com/danvsn5" className='git-link' target='_blank'>
              <img src={github} alt="GitHub" />
            </a>
          </div>
          <div className='github-referral'>
            <h6>See my GitHub profile and other repositories at
              <a href="https://github.com/danvsn5" className='git-link' target='_blank'> github.com/danvsn5</a>
            </h6>
          </div>
        </div>
        <div className="footer-title"><h1>CinnaMate</h1></div>

      </div>

    </footer>

  )
}

export default Footer