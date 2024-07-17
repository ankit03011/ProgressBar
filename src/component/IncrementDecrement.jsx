import React from 'react';

function IncrementDecrement() {
    const [count, setCount] = React.useState(0);
    const [checkClick, setCheckClick] = React.useState("");

    function justClicked1() {
        setCount(prevCount => prevCount + 1);
        setCheckClick("You just clicked Increment Button");
    }

    function justClicked2() {
        setCount(prevCount => prevCount - 1);
        setCheckClick("You just clicked Decrement Button");
    }

    return (
        <>
        <input type='number' value={count} onChange={(e)=> setCount(e.target.value)}/>
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

export default IncrementDecrement;
