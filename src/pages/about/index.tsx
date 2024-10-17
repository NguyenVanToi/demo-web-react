
import { useNavigate } from 'react-router-dom';

import './../../styles/about.scss';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="page about">
      <div className="container wrap-btn-back">
        <button className='btn btn-back' onClick={() => navigate(-1)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6" /></svg>
          <span>Back</span>
        </button>
      </div>
      <div className="wrap-content">
        <div className="container content">
          <div className="information">
            <h1>Hi There,</h1>
            <h1>I'm <span className="text-primary">Tony Nguyen</span></h1>
            <h2>I am a web developer</h2>
            <ul className="social">
              <li>
                <a href="mailto: toinv2610@gmail.com" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/tới-nguyễn-văn-37a6aa291" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/deadlock2610/" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                </a>
              </li>
          </ul>
          <p className="description">
            I'm a Full Stack Developer with 6 years of experience in building scalable web applications and hybrid mobile apps using React, Angular, and Ionic. Skilled in leveraging modern web technologies to optimize performance and scalability. Certified in AWS and Azure, with foundational knowledge of cloud platforms and a strong interest in expanding my expertise. Proven ability to collaborate effectively across distributed teams in remote environments.
          </p>
        </div>
        <div className="avatar">
          <img src="/assets/images/my_avatar.jpeg" alt="avatar" />
        </div>
      </div>
    </div>
    </div >
  )
}

export default AboutPage;