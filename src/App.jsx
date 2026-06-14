import './App.css'
import FadeIn from './FadeIn'

function App() {
  return (
    <>
      <nav className="nav">
        <div className="container nav-inner">
          <a className="nav-logo" href="#top">PS</a>
          <div className="nav-links">
            <a href="#summary">Summary</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#education">Education</a>
          </div>
        </div>
      </nav>

      <section id="top" className="section hero">
        <FadeIn className="container">
          <div className="eyebrow">Tech Support Specialist</div>
          <h1>Patrick Senter</h1>
          <p className="role">
            Resolving hardware, software, and mobile device issues for a
            high-volume healthcare environment, while maintaining a
            near-perfect track record for the people I support.
          </p>
          <div className="contact">
            <span>Seattle, WA</span>
            <a href="mailto:PatrickSenter@gmail.com">PatrickSenter@gmail.com</a>
          </div>
        </FadeIn>
      </section>

      <section id="summary" className="section section--alt summary">
        <FadeIn className="container">
          <h2>Summary</h2>
          <p>
            Tech support specialist with daily ServiceNow experience in a
            high-volume healthcare environment. Skilled at resolving
            hardware, software, and mobile device issues quickly while
            maintaining a 90+ Net Promoter Score from the people I
            support. Background in web design gives me an extra edge for
            troubleshooting systems end to end.
          </p>
          <div className="highlights">
            <div className="highlight">
              <span className="stat">90+</span>
              <span className="label">ServiceNow NPS</span>
            </div>
            <div className="highlight">
              <span className="stat">60–85</span>
              <span className="label">Tickets resolved weekly</span>
            </div>
            <div className="highlight">
              <span className="stat">30+ → Single digits</span>
              <span className="label">Ticket backlog reduction</span>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="skills" className="section">
        <FadeIn className="container">
          <h2>Skills</h2>
          <div className="skill-groups">
            <div className="skill-group">
              <h3>Operating Systems</h3>
              <ul>
                <li>Windows</li>
                <li>macOS</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Device Management</h3>
              <ul>
                <li>Microsoft Intune</li>
                <li>Jamf</li>
                <li>SCCM</li>
                <li>Active Directory</li>
                <li>iOS device deployment &amp; troubleshooting</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Support Tools &amp; Platforms</h3>
              <ul>
                <li>ServiceNow</li>
                <li>AssetTrack</li>
                <li>Bomgar</li>
                <li>Okta</li>
                <li>Workday</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Networking &amp; Security</h3>
              <ul>
                <li>VPN configuration</li>
                <li>Authentication</li>
                <li>Malware prevention</li>
                <li>Patch management</li>
                <li>Least-privilege principles</li>
              </ul>
            </div>
            <div className="skill-group">
              <h3>Web Technologies</h3>
              <ul>
                <li>HTML &amp; CSS</li>
                <li>JavaScript</li>
                <li>GitHub</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </div>
        </FadeIn>
      </section>

      <section id="experience" className="section section--alt">
        <FadeIn className="container">
          <h2>Experience</h2>

          <div className="job">
            <div className="job-header">
              <h3>Seattle Children's Hospital &amp; Denali Integrated Services</h3>
              <span className="dates">2025 – Present</span>
            </div>
            <div className="job-role">IT Support Professional</div>
            <ul>
              <li>
                Delivers in-person IT support at Seattle Children's Hospital's
                high-volume Tech Pod, resolving hardware and software issues
                for research staff and healthcare providers across laptops,
                mobile devices, and enterprise systems.
              </li>
              <li>
                Manages and resolves 60–85 weekly tickets using ServiceNow,
                consistently reducing backlog from 30+ tickets to single
                digits through effective triage and prioritization, while
                maintaining a 90+ Net Promoter Score from end
                users.
              </li>
              <li>
                Troubleshoots and deploys iOS mobile devices alongside Windows
                and macOS laptops as part of day-to-day support and lifecycle
                management.
              </li>
              <li>
                Supports imaging, deployment, and lifecycle management of
                Windows and macOS devices using Microsoft Intune, Jamf, SCCM,
                and Active Directory.
              </li>
              <li>
                Provides white-glove IT support to C-suite members, delivering
                high-priority issue resolution with discretion, speed, and
                professionalism.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h3>Self-Employed</h3>
              <span className="dates">2013 – 2025</span>
            </div>
            <div className="job-role">Web Technologist and Branding Specialist</div>
            <ul>
              <li>
                Helped clients with technology-based needs including website
                design and development, digital media, branding, and
                marketing.
              </li>
            </ul>
          </div>

          <div className="job">
            <div className="job-header">
              <h3>Engel &amp; Volkers San Francisco</h3>
              <span className="dates">2010 – 2012</span>
            </div>
            <div className="job-role">Developer and Marketing Specialist</div>
            <ul>
              <li>
                Assisted developers at corporate with UX testing of the
                company's brand new EVUSA CMS.
              </li>
              <li>Managed social media marketing and Search Engine Optimization.</li>
              <li>
                Crafted graphics and promotional items in line with the
                company's brand identity.
              </li>
            </ul>
          </div>
        </FadeIn>
      </section>

      <section id="education" className="section">
        <FadeIn className="container">
          <h2>Education</h2>
          <div className="education-list">
            <div className="education-item">
              <h3>Seattle University</h3>
              <div className="school-detail">School of New and Continuing Studies — Web Development</div>
            </div>
            <div className="education-item">
              <h3>Golden Gate University</h3>
              <div className="school-detail">Business Management with a Minor in Information Systems</div>
            </div>
          </div>
        </FadeIn>
      </section>

      <footer className="footer">&copy; {new Date().getFullYear()} Patrick Senter</footer>
    </>
  )
}

export default App
