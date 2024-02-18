import React from 'react'

import './Contact.css'

import { ContentRow } from '../../components';
import Button from 'react-bootstrap/Button';

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
                <p>Have a question or want to chat? Feel free to reach out to me. 🙌  <br /></p>
                <br />
                <p>Looking forward to hearing with you!</p>
                <br /><br />
                <a href="https://www.linkedin.com/in/ewa-g%C3%B3rka-9003b2167/" className="CTA"> LinkedIn Profile</a>
              </>
            }>
          </ContentRow>
        </div>
      </div>
    </section>
  )

}

export default Contact