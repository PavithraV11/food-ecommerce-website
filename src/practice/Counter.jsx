function Counter() {
    let count=0
    let addButton= ()=>{
        count++;
        console.log(count)
    }
    return (
        <div>
            <h2>Count:{count}</h2>
            <button onClick={addButton}>Add</button>
        </div>
    )
}
export default Counter