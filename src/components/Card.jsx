function Card({pokemon}) {
    const {id, name, type, abilities, moves} = pokemon;
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg w-600 mt-4">
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">#{id} {name}</div>
            </div>
            <div className="px-6 pb-2">
                Type: {type.map((type, index) => (
                    <li key={index}>{type}</li>
                ))}
                Moves: 
                {moves.map((move, index) => (
                    <li key={index}>{move}</li>   
                ))}
                Abilities:
                {abilities.map((ability, index) => (
                    <li key={index}>{ability}</li>
                ))}    
            </div>
        </div>
    )
}

export default Card
