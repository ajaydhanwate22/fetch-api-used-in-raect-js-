import React from 'react'

export default function Contact() {
  return (
    <>
      <section className="section">
    <div className="container">
      <h1 className="title">fabform.io bulma form</h1>
      <div className="columns">
        <div className="column is-half">
          <form action="https://fabform.io/f/{insert-your-form-id}" method="post">
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input className="input" type="text" placeholder="Your Name"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Email</label>
              <div className="control">
                <input className="input" type="email" placeholder="Your Email"/>
              </div>
            </div>
            <div className="field">
              <label className="label">Message</label>
              <div className="control">
                <textarea className="textarea" placeholder="Your Message"></textarea>
              </div>
            </div>
            <div className="field">
              <div className="control">
                <button className="button is-primary">Submit</button>
                <p>Powered by <a href="https://fabform.io" target="_blank">fabform.io</a></p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>

   
    </>
  )
}
