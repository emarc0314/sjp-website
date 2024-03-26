import '../styles/Statements.css'
import CollaboratorCard from '../components/CollaboratorCard'

export default function Statements() {

  return <CollaboratorCard
    name="Students for Justice in Palestine"
    affiliation="Student Organization"
    image={require("../images/logo.png")}
  />
}