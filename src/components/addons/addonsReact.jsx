

function useRecognition({
    lang = 'en-US', 
    interimResults = false, 
    maxAlternatives = 1,
    onResult,
    onError,
    onStart,
    onEnd
} = {}) {
    if (!('webkitSpeechRecognition' in window || 'SpeechRecognition' in window)) {
        console.error('Web Speech API is not supported in this browser.');
        alert('Your browser does not support Speech-to-Text.');
        return;
    }

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    // Set properties
    recognition.lang = lang;
    recognition.interimResults = interimResults;
    recognition.maxAlternatives = maxAlternatives;

    // Event listeners
    recognition.onstart = () => {
        console.log('Speech recognition started.');
        if (onStart) onStart();
    };

    recognition.onspeechend = () => {
        console.log('Speech recognition ended.');
        recognition.stop();
        if (onEnd) onEnd();
    };

    recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        console.log('Transcript:', transcript);
        if (onResult) onResult(transcript);
    };

    recognition.onerror = (event) => {
        console.error('Error occurred:', event.error);
        if (onError) onError(event.error);
    };

    // Start recognition
    recognition.start();
}
