import Player from './components/Player.jsx';
import TimerChallenge from './components/TimerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title='Soft' targetTime={1}/>
        <TimerChallenge title='Less Soft' targetTime={5}/>
        <TimerChallenge title='Hard' targetTime={7}/>
        <TimerChallenge title='Very Hard' targetTime={10}/>
        <TimerChallenge title='Erectly Hard' targetTime={15}/>
      </div>
    </>
  );
}

export default App;
