import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
			<div className="footer__container container">
				<h1 className="footer__title">Minh Vy Ha</h1>

				<ul className="footer__list">
					<li>
						<a href="#about" className="footer__link">About</a>
					</li>

					<li>
						<a href="#work" className="footer__link">Work</a>
					</li>

					<li>
						<a href="#project" className="footer__link">Project</a>
					</li>
				</ul>

				<ul className="footer__social">
					<a
						href="https://www.linkedin.com/in/minhvyha/"
						target="_blank"
						className="footer__social-link"
					>
						<i className="bx bxl-linkedin-square"></i>
					</a>

					<a
						href="mailto:minhvy.ha@outlook.com"
						target="_blank"
						className="footer__social-link"
					>
						<i className="bx bxl-gmail"></i>
					</a>

					<a
						href="https://github.com/minhvyha"
						target="_blank"
						className="footer__social-link"
					>
						<i className="bx bxl-github"></i>
					</a>
					<a
						href="https://www.youtube.com/@M1nhDev"
						target="_blank"
						className="footer__social-link"
					>
						<i className="bx bxl-youtube"></i>
					</a>
				</ul>
				<span className="footer__copy">
					&#169; Minh Vy Ha. All rights resserved
				</span>
			</div>
		</footer>
  )
}

export default Footer