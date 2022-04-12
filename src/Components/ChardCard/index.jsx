import "../../Styles/Css/main.css"

const CharCard = ({char}) => {

    return(      
        <div className={char.status === 'Alive'? "container--lista-blue" : "container--lista-red"}>
            <ul className="lista--geral">
                <li className="lista--img">
                    <img src={char.image} alt={char.name}/>                    
                </li>
                <li className="lista--nome">
                    <p>Nome: <span>{char.name}</span> </p>
                                       
                </li>
                <li className="lista--species">
                    <p>Espécie: <span>{char.species}</span></p>
                </li>
                <li className="lista--status">
                    <p> Status: <span>{char.status}</span> </p>
                </li>
            </ul>
        </div>
    )
}

export default CharCard