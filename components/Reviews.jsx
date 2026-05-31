import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
 import "../styles/Musicly.css";

function Reviews() {

  const reviews = [
    {
      name: "Ali",
      text: "This is the best place for musicians",
      stars: 4,
    },
    {
      name: "Sara",
      text: "Amazing experience listening to this music",
      stars: 5,
    },
    {
      name: "John",
      text: "Perfect experience",
      stars: 5,
    },
  ];

  return (
    <section className="content-section container">

      <div className="left">
        <h2>Visitor Reviews</h2>

        {reviews.map((review, index) => (

          <div className="review" key={index}>

            <div className="review-row">

              <i className="bi bi-chat-quote-fill"></i>

              <p>
                <strong>{review.name}</strong>: {review.text}
              </p>

              <div className="stars">

                {[...Array(5)].map((_, i) => (

                  <i
                    key={i}
                    className={
                      i < review.stars
                        ? "bi bi-star-fill"
                        : "bi bi-star"
                    }
                  ></i>

                ))}

              </div>
            </div>
          </div>

        ))}
      </div>

    </section>
  );
}

export default Reviews;