import React from "react"
import { Link } from "gatsby"
import Title from "../Globals/Title"

export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              nisi ullam odit nam impedit iste obcaecati, nobis, perferendis cum
              culpa eaque dolorem fuga, fugiat aspernatur in voluptatum
              recusandae repellendus vitae! Earum enim molestiae minima
              architecto et cumque numquam quis id rem deleniti non, ab
              recusandae ducimus doloremque exercitationem eos, incidunt
              dignissimos? Esse iste aut doloribus voluptate mollitia fuga magni
              facilis incidunt similique expedita veniam quisquam a officiis
              molestiae facere, illo adipisci ab repellat. Reprehenderit
              laudantium vitae alias obcaecati? Sapiente, atque.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
