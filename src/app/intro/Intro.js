import './Intro.css';
import StyledText from "../text-utils/StyledText";

function Intro() {
  return (
    <div className='Intro'>
      <p>
        You're a <StyledText color='accent'>well-known hacker</StyledText> of a great <StyledText color='accent'>darknet</StyledText> community. Since an early age you've been interested in computers and the digital world. <StyledText color='idea'>Zeros and ones became neurones in your brain living via electrical impulses in your body and laptop.</StyledText>
        <br></br>
        <br></br>
        <StyledText color='accent'>You don't trust authorities</StyledText> and carefully choose each step on your path. <StyledText color='danger'>Individualism is your religion</StyledText>, belief in oneself abilities and creative potential defines your intentions and goals.
        <br></br>
        <br></br>
        <StyledText color='accent'>I think you're ready to start your day.</StyledText>
      </p>

      <a>Press SPACE to wake up</a>
    </div>
  )
}

export default Intro;
