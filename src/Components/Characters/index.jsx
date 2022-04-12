import CharCard from "../ChardCard"

const Characters = ({characterList}) => {

    return (

        <div>
            <div  className="container--geral--card">            
            {characterList.map((el) => (
            <CharCard key={el.id} char={el}/>
            ))}
            </div>
        </div>
        
        
    )
}

export default Characters