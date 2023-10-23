import CountDisplay from './CountDisplay.jsx';

function Counter({count, setCount}) {
    

    return (
        <div className="text-center">
           
            <CountDisplay count={count} />
            <button onClick={()=> setCount(count + 1)} className="btn btn-secondary">Increment</button>
            <button onClick={()=> setCount(count - 1)} disabled={count <= 0} className="btn btn-dark">Decrement</button>

        </div>
        
    )
}

export default Counter