import React from 'react'

export default function contactUs() {
  return (
    <>
    <section id="ContactUs">
        {/* business */}
        <div className="businessMDiv">
          <div className="businessMDivleft">
            <p className="LetsTalkBusiness">
              Let’s Talk <span>Business</span>
            </p>
            <p className="LetsTalkBusinessSubtitle">
              We'd love to hear from you! Whether you are curious about how our
              society works, how you can participate in our webinars and events,
              any recent updates or anything that interest you - we're ready to
              answer any and all of your questions!
            </p>
          </div>
          <div className="businessMDivright">
            <form method="POST" name="google-sheet">
              <div>
                <label htmlFor="Name">Name:</label>
                <input type="text" name="Name" id="" required="" />
              </div>
              <div>
                <label htmlFor="Email">Email:</label>
                <input type="email" name="Email" id="" required="" />
              </div>
              <div>
                <label htmlFor="Message" id="message">
                  Message:
                </label>
                <textarea
                  name="Message"
                  id=""
                  cols={30}
                  rows={10}
                  required=""
                  defaultValue={""}
                />
              </div>
              <button type="submit" name="submit" id="send">
                Send
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
