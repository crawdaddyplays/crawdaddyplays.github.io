import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import './madden.css'; // ← put the CSS above in this file
import rankings from './madden_rankings.json'
type AppOwnProps = { example: string }

const MaddenRankings = () => {
  return (
    <div className="container">
    <h1>MADDEN 1V1</h1>
    <div className="subtitle">RANKINGS</div>

    <table className="table">
    <thead className="thead">
    <tr>
    <th className="th">RANK</th>
    <th className="th">PLAYER</th>
    <th className="th">RECORD</th>
    </tr>
    </thead>
    <tbody>
    {rankings.map((player) => (
      <tr key={player.rank} className="row">
      <td className="td rank">{player.rank}.</td>
      <td className="td player">
      <img src={player.avatar} alt={player.name} className="avatar" />
      {player.special === 'banned' ? (
        <span className="banned">{player.name} (BANNED)</span>
      ) : (
        player.name
      )}
      </td>
      <td className="td record">{player.record}</td>
      </tr>
    ))}
    </tbody>
    </table>
    </div>
  );
};

export default MaddenRankings;

