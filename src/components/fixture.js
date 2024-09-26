import React from "react";
import { useParams } from "react-router-dom";
import BALLIMG from "../assets/images/1.png";
import { data } from "../lib/dummy-data";

export default function Fixture() {
  const params = useParams();
  const matchID = params.matchID;

  const results = data.response.filter((match) => {
    return match.fixture.id == matchID;
  });

  const fixture = results[0];

  return (
    <div className="pb-10 bg-[#002366] text-white"> {/* Deep Blue background */}
      <div key={fixture.fixture.id} className="bg-[#f0f0f0] text-black shadow-lg rounded-lg p-4"> {/* Light gray card */}
        <div align="center">
          <img src={fixture.league.logo} width={25} alt="logo" />
          <span className="text-xl font-bold text-[#002366]">{fixture.league.name}</span> {/* Deep Blue for league name */}
        </div>

        <div className="w-full flex p-1">
          <div className="w-[10%]" align="center">
            <img src={fixture.teams.home.logo} width={30} />
          </div>

          <div className="w-[32%] text-right font-semibold text-[#002366]">{fixture.teams.home.name}</div> {/* Deep Blue for home team name */}

          <div className="w-[16%] text-center text-lg font-bold text-neon-green"> {/* Neon Green text */}
            {fixture.goals.home} : {fixture.goals.away}
          </div>

          <div className="w-[32%] text-left flex font-semibold text-[#002366]">{fixture.teams.away.name}</div> {/* Deep Blue for away team name */}

          <div className="w-[10%]" align="center">
            <img src={fixture.teams.away.logo} width={30} />
          </div>
        </div>

        <div className="text-center text-neon-green font-bold">
          {fixture.fixture.status.elapsed}
        </div>
      </div>

      {/* Events Section */}
      <div align="center" className="grid grid-cols-1 divide-y mt-4">
        <h1 className="bg-[#002366] p-2 text-neon-green text-xl rounded-t-lg">Events</h1>

        {!fixture.events
          ? null
          : fixture.events.map((event) => (
              <div className="p-5" key={event.team.id}>
                {event.type === "Goal" ? (
                  <div>
                    <img src={BALLIMG} width={15} className="inline" />
                  </div>
                ) : (
                  <div className="badge badge-secondary text-black">{event.type}</div>
                )}
                {event.player.name}{" "}
                <img src={event.team.logo} width={20} className="inline" />
                <br />
                <div className="text-neon-green font-semibold">{event.time.elapsed}</div>
              </div>
            ))}
      </div>

      {/* Score Section */}
      <div align="center" className="grid grid-cols-1 divide-y mt-4">
        <h1 className="bg-[#002366] p-2 text-neon-green text-xl rounded-t-lg">Score</h1>

        <div className="p-2">
          First Half
          <br />
          {fixture.score.halftime.home} : {fixture.score.halftime.away}
        </div>

        {fixture.score.fulltime.home ? (
          <div className="p-2">
            Full Time
            <br />
            {fixture.score.fulltime.home} : {fixture.score.fulltime.away}
          </div>
        ) : null}

        {fixture.score.extratime.home ? (
          <div className="p-2">
            Extra Time
            <br />
            {fixture.score.extratime.home} : {fixture.score.extratime.away}
          </div>
        ) : null}

        {fixture.score.penalty.home ? (
          <div className="p-2">
            Penalty
            <br />
            {fixture.score.penalty.home} : {fixture.score.penalty.away}
          </div>
        ) : null}
      </div>

      {/* Match Details Section */}
      <div align="center" className="grid grid-cols-1 divide-y mt-4">
        <h1 className="bg-[#002366] p-2 text-neon-green text-xl rounded-t-lg">Match Details</h1>

        <div className="p-2">Stadium - {fixture.fixture.venue.name}</div>
        <div className="p-2">Referee - {fixture.fixture.referee}</div>
        <div className="p-2">Country - {fixture.league.country}</div>
        <div className="p-2">{fixture.league.round}</div>
        <div className="p-2">{fixture.league.season}</div>
      </div>
    </div>
  );
}
