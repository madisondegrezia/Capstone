import "./FAQ.css";

export default function About() {
  return (
    <>
      <div className="faq-body">
        <div className="faq-container">
          <h1 className="faq-title">Frequently Asked Questions?</h1>
          <div className="tab">
            <input type="radio" name="acc" id="acc1" />
            <label htmlFor="acc1">
              <h2>01</h2>
              <h3>How do i list my restaurant?</h3>
            </label>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis mollitia velit nihil sed consequuntur explicabo
                ducimus aut odio nobis eius.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="radio" name="acc" id="acc2" />
            <label htmlFor="acc2">
              <h2>02</h2>
              <h3>How do i update my user account?</h3>
            </label>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                maxime doloribus assumenda saepe earum minus possimus dolorem
                dolores ipsam dignissimos temporibus omnis molestiae magni, illo
                facere totam ex perspiciatis sapiente? Id nostrum magnam tempore
                aliquam voluptatibus magni delectus, blanditiis itaque.
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="radio" name="acc" id="acc3" />
            <label htmlFor="acc3">
              <h2>03</h2>
              <h3>Can i list more than 1 restaurant?</h3>
            </label>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
                maxime
              </p>
            </div>
          </div>
          <div className="tab">
            <input type="radio" name="acc" id="acc4" />
            <label htmlFor="acc4">
              <h2>04</h2>
              <h3>Can i review the restaurant?</h3>
            </label>
            <div className="content">
              <p>Lorem ipsum</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
