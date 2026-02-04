import App, { AppContext, AppInitialProps, AppProps } from 'next/app'

import './alerts.css'; // ← put the CSS above in this file
type AppOwnProps = { example: string }


const rankings = [
  { rank: '01', name: 'MINT', record: '7-2', avatar: 'https://via.placeholder.com/48/12A3FF/000?text=12', special: '' },
  { rank: '02', name: 'TUCCERR', record: '3-3', avatar: 'https://via.placeholder.com/48/ff69b4/000?text=T', special: '' },
  { rank: '03', name: 'CHILI', record: '3-2', avatar: 'https://via.placeholder.com/48/32CD32/000?text=C', special: '' },
  { rank: '04', name: 'KING OF TIME', record: '3-2', avatar: 'https://via.placeholder.com/48/FFD700/000?text=M', special: '' },
  { rank: '05', name: 'AYDDAYDAY', record: '3-1', avatar: 'https://via.placeholder.com/48/4169E1/000?text=PD', special: '' },
  { rank: '06', name: 'CRAWDADDYPLAYS', record: '3-2', avatar: 'https://via.placeholder.com/48/DC143C/000?text=CD', special: '' },
  { rank: '07', name: 'KEITH CHROS', record: '2-0', avatar: 'https://via.placeholder.com/48/7B68EE/000?text=K', special: '' },
  { rank: '08', name: 'VERN BASEBALL', record: '6-9', avatar: 'https://via.placeholder.com/48/9932CC/000?text=VB', special: '' },
  { rank: '09', name: 'DADDY BRAUN', record: '3-1', avatar: 'https://via.placeholder.com/48/00CED1/000?text=DB', special: '' },
  { rank: '10', name: 'LARRY', record: '1-4', avatar: 'https://via.placeholder.com/48/FFA500/000?text=L', special: '' },
  { rank: '11', name: 'PERN', record: '1-4', avatar: 'https://via.placeholder.com/48/228B22/000?text=P', special: '' },
  { rank: '12', name: 'NATHAN', record: '6-7', avatar: 'https://via.placeholder.com/48/8B4513/000?text=N', special: 'banned' },
];

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

