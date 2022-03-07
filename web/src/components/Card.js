import React, { useState } from "react";
import styled from "styled-components";

const Tags = styled.div`
  display: inline;
  text-align: left;
  ul {
    display: flex;
  }
  li {
    display: inline;
    margin-left: 10px;
  }
  a {
    text-decoration: none;
    color: rgb(158, 158, 158);
    &:hover {
      text-decoration: underline;
      color: #2196f3;
    }
  }
`;

const Photo = styled.div`
  display: grid;
  grid-template-columns: max-content max-content max-content;
  grid-gap: 5px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  ul {
    display: flex;

    margin: 5px;
  }
  li {
    display: inline;

    margin: 5px;
  }
  img {
    overflow: hidden;
    box-shadow: 0 0 10px -5px;
    border-radius: 8px;
    height: 100px;
    width: 150px;
  }
`;

export default function Card({ data }) {
  const [showMore, setShowMore] = useState(false);
  let container = data.map((item) => item.title);

  return (
    <div>
      <ul className="w-full no-bullets list-group">
        {data.map((trips) => (
          <li key={trips.eid} className="w-full list-group-item m-4">
            <a
              href="#"
              className="flex flex-col items-center bg-white rounded-lg border shadow-md md:flex-row md:max-w-5xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              <img
                className="object-cover w-full h-96 rounded-t-lg md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                src={trips.photos[0]}
                alt=""
              ></img>
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {trips.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {showMore
                    ? trips.description
                    : `${trips.description.substring(0, 250)}`}
                  <button
                    className="btn info"
                    onClick={() => setShowMore(!showMore)}
                  >
                    {showMore ? "..Show less" : "Show more.."}
                  </button>
                </p>
                <Tags>
                  <ul className="no-bullets">
                    <span>หมวด</span>
                    {trips.tags.map((item) => (
                      <li key={item}>
                        <a
                          href={item}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </Tags>
                <Photo>
                  <ul className="no-bullets">
                    {trips.photos.slice(1).map((photos, index) => (
                      <li key={index}>
                        <img src={photos} alt="" />
                      </li>
                    ))}
                  </ul>
                </Photo>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
