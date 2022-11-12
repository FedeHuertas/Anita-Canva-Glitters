import './App.css';
import Countdown from "react-countdown-simple";

function App() {
  const style={
    position: "relative",
    width: "100%",
    height: "0",
    paddingTop: "140.9524%",
    paddingBottom: "0",
    boxShadow: "0 2px 8px 0 rgba(63,69,81,0.16)",
    marginTop: "1.6em",
    marginBottom: "0.9em",
    overflow: "hidden",
    borderRadius: "8px",
    willChange: "transform"
  }

  const style2={
    position: "absolute",
    width: "100%",
    height: "100%",
    top: "0",
    left: "0",
    border: "none",
    padding: "0",
    margin: "0"
  } 

  const fecha = new Date('Dec 10 2022').toISOString();
  
  return (
<div className='container' >
  <audio
    className='audio'
    autoPlay
    controls
  >
    <source src="https://res.cloudinary.com/dhjbyazal/video/upload/v1667783604/Anita/y2mate.com_-_Nicki_Nicole_Baby_Official_Video_64kbps_eeu2kg.mp3" type='audio/mp3' />
  </audio>
  <h1 className='desliza' >Deslizá →</h1>
  <div style={style}>
    <iframe loading="lazy" style={style2}
      src="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRGmODlsc&#x2F;view?embed" allowfullscreen="allowfullscreen" allow="fullscreen">
    </iframe>
    <a href="https:&#x2F;&#x2F;www.canva.com&#x2F;design&#x2F;DAFRGmODlsc&#x2F;view?utm_content=DAFRGmODlsc&amp;utm_campaign=designshare&amp;utm_medium=embeds&amp;utm_source=link" target="_blank" rel="noopener">Mis 15 - Anita Calivar </a> 
  </div>
  <Countdown targetDate={fecha} renderer={({ days, hours, minutes, seconds }) => (
                    <div className='countdownContainer'>
                      <span>Faltan: </span>
                        <table className='tabla'>
                            <tr>
                                <td>
                                    {days}
                                </td>
                                <td>
                                    {hours}
                                </td>
                                <td>
                                    {minutes}
                                </td>
                                <td>
                                    {seconds}
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Dias
                                </td>
                                <td>
                                    Horas
                                </td>
                                <td>
                                    Min
                                </td>
                                <td>
                                    Seg
                                </td>
                            </tr>
                        </table>
                    </div>
                )}/>
</div>
  );
}

export default App;
