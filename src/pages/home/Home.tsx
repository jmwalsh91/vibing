import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../components/cards/Card";

type Props = {};

const asciiTitle = [
  `@@@  @@@  @@@  @@@@@@@   @@@@@@@@   @@@@@@@@   @@@@@@   @@@@@@@   @@@       @@@  @@@  @@@  `,
  `@@@  @@@  @@@  @@@@@@@@  @@@@@@@@  @@@@@@@@@  @@@@@@@@  @@@@@@@@  @@@       @@@  @@@@ @@@  `,
  `@@!  @@@  @@!  @@!  @@@  @@!       !@@        @@!  @@@  @@!  @@@  @@!       @@!  @@!@!@@@  `,
  `!@!  @!@  !@!  !@   @!@  !@!       !@!        !@!  @!@  !@   @!@  !@!       !@!  !@!!@!@!  `,
  `@!@  !@!  !!@  @!@!@!@   @!!!:!    !@! @!@!@  @!@  !@!  @!@!@!@   @!!       !!@  @!@ !!@!  `,
  `!@!  !!!  !!!  !!!@!!!!  !!!!!:    !!! !!@!!  !@!  !!!  !!!@!!!!  !!!       !!!  !@!  !!!  `,
  `:!:  !!:  !!:  !!:  !!!  !!:       :!!   !!:  !!:  !!!  !!:  !!!  !!:       !!:  !!:  !!!  `,
  ` ::!!:!   :!:  :!:  !:!  :!:       :!:   !::  :!:  !:!  :!:  !:!   :!:      :!:  :!:  !:!  `,
  `  ::::     ::   :: ::::   :: ::::   ::: ::::  ::::: ::   :: ::::   :: ::::   ::   ::   ::  `,
  `   :      :    :: : ::   : :: ::    :: :: :    : :  :   :: : ::   : :: : :  :    ::    :  `,
];

export default function Home({}: Props) {
  return (
    <div className="bg-bg w-screen h-screen flex flex-col justify-center ">
      <pre className="text-xl text-main text-bold  ml-11">
        {asciiTitle.map((line) => {
          return (
            <>
              {line}
              <br />
            </>
          );
        })}
      </pre>
      <Card className="w-96 h-96">
        <CardHeader>
        </CardHeader>
        <CardContent>
          <img src="/src/assets/images/island.png" alt="vite logo" />
        </CardContent>
        <CardFooter>hi</CardFooter>
      </Card>
  <div className="h-96 flex justify-center">
      <img src="/src/assets/images/island.png" alt="vite logo" />
  </div>
    </div>
  );
}
