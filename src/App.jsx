import React from  'react';
const SlotM=(props)=>{
// let x='😄';
// let y='😄';
// let z='😄';

// let x=props.x;
// let y=props.y;
// let z=props.z;
let{x,y,z}=props;

if((x===y) &&(y===z)){
    return(
        <>
        <div classname='slotinner'>
            <h1>
                {x} {y} {z}
            </h1>
            <h1>This is Matching</h1>
        </div>
        </>
    );
    } else{
    return(
        <>
        <div classname='slotinner'>
            <h1>
                {x} {y} {z}
            </h1>
            <h1>This is not Matching</h1>
        </div>
        </>
    );
}
}


const App =() =>
{

    return(
    <>
    <h1 className="heading_style">  
    :🎰 welcome to {" "} 
    <span style={{fontWeight: "bold"}}> Slot machine game</span>:🎰 {" "}
    </h1>
    <div className="slotmachine">
    <SlotM x="😄" y="😄" z="😄"/>
    <SlotM x="🍌"y="🍌"z="🍌"/>
    <SlotM x="🎅" y="🎅"z="😄"/>
    <SlotM x="🍎" y="🍎"z="🍎"/>
    <SlotM x="🍏" y="🍏"z="🍏"/>
    </div>
    </>  
    );
};
export default App;