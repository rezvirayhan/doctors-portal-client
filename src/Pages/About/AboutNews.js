import React from "react";
import news1 from "../../assets/news_1.jpg";
import news2 from "../../assets/news_2.jpg";
import news3 from "../../assets/news_3.jpg";
import news4 from "../../assets/news_4.jpg";

const AboutNews = () => {
  return (
    <div>
      <div className="p-5">
        <h1 className="text-6xl text-center">
          <span>Latest</span>{" "}
          <span
            style={{
              color: "crimson",
              fontWeight: "800",
              fontStyle: "oblique",
            }}
          >
            Medicare news
          </span>
        </h1>
        <p className="text-xl mt-2 text-center">
          Read our latest news from the company or general medical news. Feel
          free to ask questions in comments for any news you find interesting.
        </p>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div class="card w-92 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={news1} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Professional staff!</h2>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added.?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-92 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={news2} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Affordable prices!</h2>
              <p>
                Podcasting operational change management inside of workflows.?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-92 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={news3} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Consultations!</h2>
              <p>
                Collaboratively administrate turnkey channels whereas virtual
                e-tailers.?
              </p>
            </div>
          </div>
        </div>
        <div>
          <div class="card w-92 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
              <img src={news4} alt="" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
              <h2 class="card-title">Great services!</h2>
              <p>
                Collaboratively administrate turnkey channels whereas virtual
                e-tailers.?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutNews;
