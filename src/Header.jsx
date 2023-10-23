function Header({title, count}) {
   
    return (
        <>
            <h1 className="text-center p-5" 
            style={{ color: (count > 5) ? `red`
            : 
            `black`}}>{title}</h1>
           
        </>
        
    )
}

export default Header