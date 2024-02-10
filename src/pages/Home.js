import '../styles/Home.css'

export default function Home() {
  return <div className="home">
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={require('../images/logo.png')} ></img>
      </div>
      <h1 className="title"> Students for Justice in Palestine at Cornell</h1>
    </div>
  </div>
}
