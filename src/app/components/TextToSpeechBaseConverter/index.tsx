import useTTSBC from "./useTTSBC";

function TextToSpeechBaseConverter() {
  const { speakText } = useTTSBC();
  return (
    <div>
      <button onClick={speakText}>Speak</button>
      <textarea
        id="textToSpeak"
        placeholder="Enter text to speak..."></textarea>
    </div>
  );
}

export default TextToSpeechBaseConverter;
