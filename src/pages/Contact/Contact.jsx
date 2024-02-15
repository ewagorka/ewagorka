import React from 'react'

import './Contact.css'

import { ContentRow } from '../../components';

const Contact = () => {
  return (
    <section>
      <div className="container contact-container">
        <div className="row">
          <ContentRow
            left={false}
            t={"Contact Me"}
            p={
              <>
                Have a question or want to chat? Feel free to reach out to me. 🙌  <br />
                You can contact me via email or connect with me on LinkedIn. I'd love to hear from you!
                <br /><br />
                Email: ewagorka99@gmail.com
                <br /><br />
                LinkedIn: <a href="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/">My Profile</a>
                <br /><br /><br />
                Looking forward to hearing with you!
              </>
            }>
          </ContentRow>
        </div>
      </div>
    </section>
  )

}

export default Contact