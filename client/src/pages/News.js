import React from "react";

const News = () => {
  const newsInfo = [
    {
      link: "https://www.pokemon.com/us/pokemon-news/test-your-knowledge-of-pokemons-villainous-teams-with-this-quiz/",
      imagePath:
        "https://assets.pokemon.com/assets/cms2/img/misc/_tiles/quiz/villains/villains-169.jpg",
      title: "Test Your Knowledge of Pokémon’s Villainous Teams with This Quiz",
      content:
        "Prepare for trouble and double down on your knowledge of Pokémon to see if you possess the nefarious knowledge needed to be a baddie.",
      date: "April 15, 2022",
    },
    {
      link: "https://www.pokemon.com/us/pokemon-news/ingo-special-costume-accelgor-come-to-pokemon-masters-ex/",
      imagePath:
        "https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-masters/04142022/pokemon-masters-ex-169.jpg",
      title: "Ingo (Special Costume)  Accelgor Come to Pokémon Masters EX",
      content:
        "This Bug-type sync pair arrives for the Curious Tea Party costume event and stars in their own sub-story.",
      date: "April 14, 2022",
    },
    {
      link: "https://www.pokemon.com/us/pokemon-news/watch-pokemon-tcg-top-deck-academy-season-2-episode-5/",
      imagePath:
        "https://assets.pokemon.com/assets/cms2/img/trading-card-game/_tiles/top-deck-academy/season02/05/top-deck-academy-169.jpg",
      title: "Watch Pokémon TCG Top Deck Academy Season 2, Episode 5",
      content:
        "Andrew Mahone uses Flaaffy, Victini VMAX, and Rillaboom to explain how to quickly power up your team with Energy cards.",
      date: "April 14, 2022",
    },
    {
      link: "https://www.pokemon.com/us/pokemon-news/spring-into-spring-as-tapu-bulu-debuts-in-pokemon-go/",
      imagePath:
        "https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/pokemon-go/04122022/pokemon-go-169.jpg",
      title: "Spring into Spring as Tapu Bulu Debuts in Pokémon GO",
      content:
        "Frolic through the flowers while you catch, hatch, and battle a beautiful bouquet of Pokémon.",
      date: "April 12, 2022",
    },
    {
      link: "https://www.pokemon.com/us/strategy/tapu-bulu-pokemon-go-raid-battle-tips/",
      imagePath:
        "https://assets.pokemon.com/assets/cms2/img/video-games/_tiles/strategy/go/tapu-bulu/pokemon-go-169.jpg",
      title: "Tapu Bulu Pokémon GO Raid Battle Tips",
      content:
        "Learn how to catch Tapu Bulu after winning a Raid Battle, and how best to use the Land Spirit Pokémon after you've caught it.",
      date: "April 12, 2022",
    },
  ];

  return (
    <>
      <main>
        <div>
          {newsInfo.map(({ link, imagePath, title, content, date }, i) => {
            return (
              <div key={i}>
                <a
                  style={{ display: "table" }}
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <div className="card" id="newscardid">
                    <div className="">
                      <img
                        alt="newsPic"
                        src={imagePath}
                        className="img-fluid rounded-start"
                        id="imgid"
                      />
                    </div>

                    <div className="col-md-8" id="newsid">
                      <div className="card-body" id="newsdivid">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{content}</p>
                        <p className="card-text h6 text-muted">{date}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
};

export default News;
