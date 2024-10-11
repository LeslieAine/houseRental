import React from 'react'

const ContactPage = () => {
  return (
    <main className="ms-container">
        <div className="ms-section__block">
          <div className="ms-page-title">
            <h2 className="page-header">Let's work together</h2>
            <p className="page-desc">Assertively synthesize state of the art testing procedures via sticky niches.</p>
          </div>
        </div>
        <div className="ms-section__block">
          <div id="contact" className="row">
          <div className="col-md-6">
            <div className="row">
                <div className="col-md-6">
                  <h6>the office</h6>
                  <p>25 Parker St. London WC2B 5PJ UK</p>
                </div>
                <div className="col-md-6">
                  <h6>telephone</h6>
                  <p>+44 (0)20 7830 1387</p>
                </div>
                <div className="col-md-6">
                  <h6>email</h6>
                  <p>test@mail.com</p>
                </div>
                <div className="col-md-6 cont-soc">
                  <h6>social</h6>
                  <p>
                    <a href="#" className="socicon-facebook"></a>
                    <a href="#" className="socicon-instagram"></a>
                    <a href="#" className="socicon-twitter"></a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <h6>Get in touch</h6>
              <form id="validForm">
                <div className="row">
                  <div className="form-group col-md-6">
                    <input type="text" name="name" className="form-control" id="cl" placeholder="Your name" autoComplete="off" />
                  </div>
                  <div className="form-group col-md-6">
                    <input type="email" name="email" className="form-control" placeholder="Email address" autoComplete="off" />
                  </div>
                  <div className="form-group col-md-12">
                    <input type="text" name="subject" className="form-control" placeholder="Subject" />
                  </div>
                  <div className="form-group col-md-12">
                    <textarea name="message" className="form-control" id="message" placeholder="Your message"></textarea>
                  </div>
                  <div className="col-md-12">
                    <div className="ms-button" data-title="send">Send
                      <input type="submit" value="send" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            </div>
        </div>
      </main>
  )
}

export default ContactPage