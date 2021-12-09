import React from "react";
import { useEffect, useState } from "react";
import Joke from "./Joke";
import Title from "./Title";

export default function Random() {
  const [random, setRandom] = useState("");

  useEffect(() => {
    fetch("https://sv-jokes.herokuapp.com/random")
      .then((res) => res.json())
      .then((data) => {
        setRandom(data);
      });
  }, []);
  return (
    <Title title="Random Joke">
      <Joke jokeString={random} />
    </Title>
  );
}
