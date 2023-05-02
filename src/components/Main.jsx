import { useReactMediaRecorder } from "react-media-recorder";
import '../css/Main.css'
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
export default function Main() {
    const [recordingChoice, setRecordingChoice] = useState({
        videoChoice: false,
        audioChoice: false,
        screenChoice: false
    })
    //hello abhi
    const videoRef = useRef(null);

    const { videoChoice, audioChoice, screenChoice } = recordingChoice

    const { status, startRecording, pauseRecording, stopRecording, mediaBlobUrl, previewStream } =
        useReactMediaRecorder({ video: videoChoice, audio: audioChoice, screen: screenChoice });


    const inputHandler = (value) => {
        if (value === 'video') {
            setRecordingChoice({ audioChoice: false, videoChoice: true, screenChoice: false })
        }
        else if (value === 'audio') {
            setRecordingChoice({ audioChoice: true, videoChoice: false, screenChoice: false })
        } else if (value === 'screen') {
            setRecordingChoice({ audioChoice: false, videoChoice: false, screenChoice: true })
        } else if (value === 'video-audio') {
            setRecordingChoice({ audioChoice: true, videoChoice: true, screenChoice: false })
        } else if (value === 'screen-audio') {
            setRecordingChoice({ audioChoice: true, videoChoice: false, screenChoice: true })
        }
    }

    useEffect(() => {
        if (previewStream && videoRef.current) {
            videoRef.current.srcObject = previewStream;
        }
    }, [previewStream]);


    return <>
        <div className="main">
            <div className="left">
                <h2>Recorded Items</h2>
                <div className="recorded-item">

                    {mediaBlobUrl && (
                        <>
                            <video src={mediaBlobUrl} controls autoPlay loop style={{ height: '100%', width: '100%' }} />
                            <a href={mediaBlobUrl} download>download</a>
                        </>
                    )}
                </div>

            </div>
            <div className="right">
                <h3>Recording Status: {status}</h3>
                preview
                <div className='recording-area'>
                    {
                        status === 'recording' ?
                            <video ref={videoRef} autoPlay loop style={{ height: '100%', width: '100%', backgroundColor: 'black' }} /> : null
                    }
                </div>

                <div className='options'>
                    <input type="radio" name="recordingOption" id="video" value='video' onChange={(e) => inputHandler(e.target.value)} />
                    <label htmlFor="video">Video</label> |
                    <input type="radio" name="recordingOption" id="" value='audio' onChange={(e) => inputHandler(e.target.value)} /> Audio |
                    <input type="radio" name="recordingOption" id="" value='screen' onChange={(e) => inputHandler(e.target.value)} /> Screen |
                    <input type="radio" name="recordingOption" id="" value='video-audio' onChange={(e) => inputHandler(e.target.value)} /> Video + Audio |
                    <input type="radio" name="recordingOption" id="" value='screen-audio' onChange={(e) => inputHandler(e.target.value)} /> Screen + Audio
                </div>
                <div className="btn">
                    <button onClick={startRecording} >Start Recording</button>
                    <button onClick={stopRecording} >Stop Recording</button>
                </div>

            </div>
        </div>

    </>
}