import '../css/Main.css'
export default function Main() {
    return <>

        <div className="main">
            <div className="left">
                <h2>Recorded Items</h2>
            </div>
            <div className="right">
                <h3>Recording Status</h3>
                preview
                <div className='recording-area'>


                </div>
                <div className='options'>
                    Video<input type="radio" name="" id="" /> |
                    Audio <input type="radio" name="" id="" /> |
                    Screen <input type="radio" name="" id="" /> |
                    Video + Audio<input type="radio" name="" id="" /> |
                    Screen + Audio<input type="radio" name="" id="" />
                </div>
                <button>Start Recording</button>

            </div>
        </div>

    </>
}