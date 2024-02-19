import '../styles/Footer.css'


export default function Footer() {
  let insta = require('../images/insta.png');
  let mail = require('../images/mail.png')

  return <nav className="foot">
    <div className="claim">
      <h1 className="title"> Students for Justice in Palestine at Cornell</h1>
      <h4> This organization is a registered student organization of Cornell University.</h4>
    </div>
    <ul className="media">
      <li>
        <a href="https://www.instagram.com/sjp.atcornell?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank">
          <img src={insta} className="socials" href="/"></img>
        </a>
      </li>
      <li>
        <a href="mailto:sjpcornell@gmail.com">
          <img src={mail} className="socials" href=""></img>
        </a>
      </li>
    </ul>
  </nav >
}
