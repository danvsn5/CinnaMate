import tmdb from '../../resources/images/tmdb.svg'
import github from '../../resources/images/github.svg'
import linkedin from '../../resources/images/linkedin.svg'

const Footer = () => {
  return (

    <footer>

      <div className="footer-bar">
        <div className='footer-bar-contents'>
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
                <img className='logo-img' src={github} alt="GitHub" />
              </a>

              <a href="https://www.linkedin.com/in/daniilv522/" className='git-link' target='_blank'>
                <img className='logo-img' src={linkedin} alt="LinkedIn" />
              </a>

            </div>


            <div className='github-referral'>
              <h6>See more about me in my GitHub profile and my LinkedIn
                <a href="https://github.com/danvsn5" className='git-link' target='_blank'> github.com/danvsn5</a>
                <a href="https://www.linkedin.com/in/daniilv522/" className='git-link' target='_blank'> linkedin.com/daniilv522</a></h6>
            </div>
          </div>
          <div className="footer-title"><h1>CinnaMate</h1></div>
        </div>
      </div>

    </footer>

  )
}

export default Footer