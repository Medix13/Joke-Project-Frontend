import React from "react";
import Joke from "./Joke";
import Title from "./Title";
import "./Popular.css";
import { useEffect, useState } from "react";

export default function Popular() {
  const [popularJoke, setPopularJoke] = useState([]);
  useEffect(() => {
    fetch("https://sv-jokes.herokuapp.com/popular")
      .then((res) => res.json())
      .then((data) => {
        setPopularJoke(data);
      });
  }, []);
  return (
    <Title title="Popular Joke">
      {popularJoke.map((joke) => (
        <Joke key={joke} jokeString={joke} />
      ))}
    </Title>
  );
}
