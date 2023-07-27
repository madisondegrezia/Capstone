import { Form } from "react-router-dom"
import "./HomeStyle.css"

export default function Home() {
  return (
    <div className="home-page">
      <Form method="get" className="search-bar">
      <input id="search-res" className="border-2" placeholder="Search For Restaurants..."/>
      </Form>

      <div className="restaraunt-cards">
        cards go here!
      </div>
    </div>
  )
}
