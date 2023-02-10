import StyledText from '../text-utils/StyledText';
import './Start.css';

function Start() {
  return (
    <div className='Start'>
      <h1>Cyber dilemma</h1>

      <p>
        Live a day of a <StyledText color='accent'>cyber hacker's life</StyledText> and face a <StyledText color='danger'>challenge</StyledText>. You will be required to make multiple decisions which will determine a game ending. <StyledText color='idea'>Each decision affects where you finish your path.</StyledText>
      </p>

      <a>Press SPACE to start</a>
    </div>
  );
}

export default Start;
