import React from "react";
import { Link } from "react-router-dom";

export default function Table({ data }) {
  return (
    <div className="bg-[#002366] text-white grid grid-cols-1 divide-y"> {/* Deep Blue background */}
      {data.response.map((fixture) => (
        <Link to={`/fixture/${fixture.fixture.id}`} key={fixture.fixture.id}>
          <div className="bg-[#1a1a40] text-white py-2 shadow-md  my-2 mx-4"> {/* Darker shade for each fixture */}
            <div align="center" className="mb-2">
              <img src={fixture.league.logo} width={25} alt="logo" />
              <span className="text-xl font-bold text-neon-green">{fixture.league.name}</span> {/* Neon Green for league name */}
            </div>

            <div className="text-center text-neon-green font-semibold mb-2">
              {fixture.fixture.status.long}
            </div>

            <div className="w-full flex p-1 text-white">
              <div className="w-[10%]" align="center">
                <img src={fixture.teams.home.logo} width={30} />
              </div>

              <div className="w-[32%] text-right font-semibold">{fixture.teams.home.name}</div>

              <div className="w-[16%] text-center text-neon-green text-lg font-bold"> {/* Neon Green for scores */}
                {fixture.goals.home} : {fixture.goals.away}
              </div>

              <div className="w-[32%] text-left font-semibold">{fixture.teams.away.name}</div>

              <div className="w-[10%]" align="center">
                <img src={fixture.teams.away.logo} width={30} />
              </div>
            </div>

            <div className="text-center text-neon-green font-bold">
              {fixture.fixture.status.elapsed} mins
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
