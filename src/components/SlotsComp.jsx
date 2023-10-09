const SlotsComp = ({val1,val2,val3})=> {
    const isWinner = val1 == val2 && val2 == val3;
    // const result = isWinner ? "You Win":"You Lose";
    const styling = {color: isWinner ? 'green':'red'};
    return (
    <div>   
        <p>{val1} {val2} {val3}</p>
        <h2 style={styling}>{isWinner ? "You Win":"You Lose"}</h2>
        <h3 style={{color:'white'}}>{isWinner ? "Congrats!!!":""}</h3>
    </div>        
    )
}
export default SlotsComp;