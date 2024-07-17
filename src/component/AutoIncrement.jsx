import React, { useEffect } from 'react';

function AutoIncrement() {
    const [count, setCount] = React.useState(0);
    const [checkClick, setCheckClick] = React.useState("");
    const [msg, setMsg] = React.useState("")

    function justClicked1() {
        setCount(prevCount => prevCount + 1);
        setCheckClick("You just clicked Increment Button");
    }

    function justClicked2() {
        setCount(prevCount => prevCount - 1);
        setCheckClick("You just clicked Decrement Button");
    }

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //       setCount(prevCount => prevCount + 1);
    //     }, 1000); // Update count every 1 second
    
    //     return () => clearInterval(intervalId); // Cleanup function to stop the interval on unmount
    //   }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prevCount => {
                if (prevCount < 64) {
                    return prevCount + 1;
                } else {
                    clearInterval(interval);
                    setMsg("You Have Reached At End")
                    return prevCount;
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
        {/* <input type='number' value={count} onChange={(e)=> setCount(e.target.value)}/> */}
        <h2>{msg}</h2>
            {/* <div>Count = {count}</div> */}
            <div style={{marginTop:'100px'}}>{checkClick} {count} times</div>
            <div>
                <button style={{ width: "80px", height: "30px", background:'green', color:'white', cursor:'pointer', borderRadius:'10px', fontSize:'20px', marginRight:'10px' }} onClick={justClicked1}>+</button>
                {/* <span>You have clicked {count} times</span> */}
                <button style={{ width: "80px", height: "30px", background:'yellow', color:'black', cursor:'pointer', borderRadius:'10px', fontSize:'20px' }} onClick={justClicked2}>-</button>
            </div>
            <div style={{ width: "100%", height: "50px", display:'flex', flexDirection:'row', justifyContent:'center', marginTop:'50px'}}>
            <div style={{ width: "50%", height: "50px", display: 'flex', background:'black' }}>
                {
                    Array.from({ length: count }).map((_, index) => (
                        <div key={index} style={{ width: "10px", height: "50px", background: 'orange', marginRight: '2px' }}></div>
                    ))
                }
            </div>
            </div>
        </>
    );
}

export default AutoIncrement;
