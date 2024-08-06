import React from "react";

const About = () => {
  return (
    <>
      <div className="flex flex-wrap gap-2 sm:gap-x-6 mt-9 items-center justify-center">
        <h2 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          Highest rate
        </h2>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              Estor
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        dolore natus impedit adipisci porro vel tempora cupiditate similique
        velit dolores perferendis culpa optio deleniti repellat modi ipsum,
        quaerat odit amet dignissimos quidem non! Ab voluptatem inventore
        corporis voluptatum culpa magni quod, dolorum repudiandae quo debitis
        est dolor et adipisci aut velit labore?
      </p>
    </>
  );
};

export default About;
