import React from "react";
import "../app.css";
import MovingComponent from "react-moving-text";

function Main() {
  const base_url = "http://djacmarg.github.io/digital-resume";
  const erc_cert_link =
    "https://certificate.evidenz.io/check/BA55E42EE976F0FB2609A95B0DB41056161E238CD19C439E8B03F454B16EFDF9Yk9kOUNpb1FoR3gzQ0xycWZxRVAzdjc3RkZnMFJ4L2ZWKzR3Vnh3cU81bW0zL2Qy";
  return (
    <div className="container">
      <div className="hero">
        <img
          className="profile--pic"
          src="images/profile-img.JPG"
          alt="profile-img"
        />

        <div>
          <h1>Durotoye Oyerinde</h1>
          <h3>Full Stack Engineer</h3>
          <MovingComponent
            type="fadeInFromBottom"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="backwards"
          >
            A Full stack engineer with over 12 years in the industry.
            Experienced in the application & presentation layers, Building &
            Consumption of RESTful APIs and complex databases. Efficient in both
            Frontend and Backend technologies. Can handle LEMP, LAMP, MERN
            stacks, CMS, Android & iOS application developments. Able to
            Integrate third party APIs, Blockchain and payment gateways.
          </MovingComponent>
        </div>
      </div>

      <div className="sect">
        <h3 className="pd">TECH STACK & FRAMEWORKS</h3>
        <div className="stacks">
          <div className="stack">
            <span>LAMP | Linux Apache, MySQL & PHP </span>
          </div>
          <div className="stack">
            <span>LEMP | Linux NGINX, MySQL, PHP</span>
          </div>
          <div className="stack">
            <span>Git, Github, BitBucket</span>
          </div>
          <div className="stack">
            <span>MERN | MongoDB, Express, React, Node</span>
          </div>

          <div className="stack">
            <span>PHP Framework | Laravel, CodeIgniter</span>
          </div>
          <div className="stack">
            <span>REACT NATIVE</span>
          </div>
          <div className="stack">
            <span>Database | SQL, MySQL, MongoDB, SQLite, MS Acess</span>
          </div>

          <div className="stack">
            <span>HTML5, CSS3, TailwindCSS, Bootstrap</span>
          </div>
        </div>
      </div>

      <div className="sect">
        <h3 className="pd">WORK HISTORY</h3>
        <div className="wh">
          <h3>Techsolute Labs: Jan 2020 - Date | CEO & Tech Lead</h3>
          <ul>
            <li>
              Maintaining School Management Systems that I built for Clients.
            </li>
            <li>
              Am currently working on a gate pass mobile application using react
              native for Android & iOS devices.
            </li>
          </ul>
        </div>
        <div className="wh">
          <h3>VOCTIM: July 2017 - July 2019</h3>
          <MovingComponent
            type="fadeInFromBottom"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="backwards"
          >
            Taught AutoCAD and Engineering Design
          </MovingComponent>
        </div>
        <div className="wh">
          <h3>
            Meridian Consults (Pty) Limited Nov 2011 - June 2017 | ICT Lead
          </h3>

          <ul>
            <li>
              Design & Developed Database Management System Solutions for
              Clients
            </li>
            <li>Trained participants on records managements and database</li>
            <li>
              Redesigned and maintained the organization (Meridian Consults)
              website
            </li>
          </ul>
        </div>
      </div>

      <div className="sect">
        <h3 className="pd">FORMAL EDUCATION</h3>
        <p className="pd">
          Highest Formal Qualification: <br />
          Higher National Diploma Mechanical Engineering
        </p>
      </div>

      <div className="sect">
        <h3 className="pd">IT TRAINING & CERTS</h3>
        <ul className="pd">
          <li>
            Blockchain Development | Oct 2021{" "}
            <a href={`${erc_cert_link}`}>view or download</a>{" "}
          </li>
          <li>
            Android Developer | Oct 2019{" "}
            <a href={`${base_url}/downloadables/certs/android.pdf`}>
              view or download
            </a>
          </li>
        </ul>
      </div>
      <div className="sect">
        <h3 className="pd">Notable Projects:</h3>

        <div className="np">
          <h3>Eazitap: All in one smart card Integration [LEMP]</h3>
          <p className="pd">
            Eazitap is an attendance management solutions application Developed
            for a lagos based start up company in 2020 used by learning
            institutions. This application is 5 module application that
            interfaced School Admins, Sponsors, Parents and Students.
          </p>
        </div>

        <div className="np">
          <p className="pd">
            This application sends a realtime short message service (SMS) with
            the details such as students name, date and arrival/departure time
            to parents/guardian's phone immediately the student signed in with
            either their RFID card or fingerprints at the school premises.
          </p>
        </div>

        <div className="np">
          <h3>Sistema Record Professional [LAMP]</h3>
          <p className="pd">
            Sistema Record Management System SRECPRO is a complete school
            management solution software for management of school activities
            from administrative to attendance and to taken MCQs.
          </p>
          <p className="pd">
            This application is being used by schools in Swaziland and Nigeria
            since 2019. This application consist of these 7 modules [Admins,
            Teachers, Parents, Students, Library, Account & Transport]
          </p>
        </div>

        <div className="np">
          <h3>KiaHire</h3>
          <p className="pd">
            Esrow based freelance website that connects clients and developers
            in real time.
          </p>
        </div>
      </div>
      <div className="sect">
        <h3 className="pd">SOCIAL LINKS</h3>
        <p className="social">
          <a href="https://github.com/djacmarg">Github</a>
          <a href="https://facebook.com/durotoye.oyerinde">Facebook</a>
          <a href="https://www.linkedin.com/in/codoneer/">Linkedin</a>
          <a href="https://twitter.com/Djacmarg">Twitter</a>
        </p>
      </div>
      <div className="sect">
        <h3 className="pd">DOWNLOAD LINKS</h3>
        <p className="social">
          <a href={`${base_url}/downloadables/resume/resume.pdf`}>
            Resume (PDF)
          </a>

          <a href={`${erc_cert_link}`}> Blockchain Training Cert</a>
          <a href={`${base_url}/downloadables/certs/android.pdf`}>
            Android Training Cert
          </a>
        </p>
      </div>
      <div className="clearboth"></div>
    </div>
  );
}

export default Main;
