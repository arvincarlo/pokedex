import { useReducer } from "react";
import Card from "./components/Card";

const pokedex = [
    {
        id: 1,
        name: "Bulbasaur",
        type: ["Grass", "Poison"],
        abilities: ["Overgrow", "Chlorophyll"],
        moves: ["Vine Whip", "Razor Leaf", "Solar Beam", "Sleep Powder"],
    },
    {
        id: 4,
        name: "Charmander",
        type: ["Fire"],
        abilities: ["Blaze", "Solar Power"],
        moves: ["Ember", "Flamethrower", "Fire Spin", "Dragon Claw"],
    },
    {
        id: 7,
        name: "Squirtle",
        type: ["Water"],
        abilities: ["Torrent", "Rain Dish"],
        moves: ["Water Gun", "Bubble", "Hydro Pump", "Skull Bash"],
    },
    {
        id: 25,
        name: "Pikachu",
        type: ["Electric"],
        abilities: ["Static", "Lightning Rod"],
        moves: ["Thunder Shock", "Quick Attack", "Iron Tail", "Electro Ball"],
    },
    {
        id: 39,
        name: "Jigglypuff",
        type: ["Normal", "Fairy"],
        abilities: ["Cute Charm", "Competitive"],
        moves: ["Sing", "Double Slap", "Body Slam", "Hyper Voice"],
    },
    {
        id: 52,
        name: "Meowth",
        type: ["Normal"],
        abilities: ["Pickup", "Technician"],
        moves: ["Scratch", "Bite", "Fury Swipes", "Pay Day"],
    },
    {
        id: 63,
        name: "Abra",
        type: ["Psychic"],
        abilities: ["Synchronize", "Inner Focus"],
        moves: ["Teleport", "Confusion", "Psybeam", "Psychic"],
    },
    {
        id: 66,
        name: "Machop",
        type: ["Fighting"],
        abilities: ["Guts", "No Guard"],
        moves: ["Karate Chop", "Low Kick", "Seismic Toss", "Dynamic Punch"],
    },
    {
        id: 74,
        name: "Geodude",
        type: ["Rock", "Ground"],
        abilities: ["Rock Head", "Sturdy"],
        moves: ["Tackle", "Rock Throw", "Magnitude", "Earthquake"],
    },
    {
        id: 92,
        name: "Gastly",
        type: ["Ghost", "Poison"],
        abilities: ["Levitate"],
        moves: ["Lick", "Night Shade", "Hypnosis", "Dream Eater"],
    },
    {
        id: 133,
        name: "Eevee",
        type: ["Normal"],
        abilities: ["Run Away", "Adaptability"],
        moves: ["Tackle", "Quick Attack", "Bite", "Swift"],
    },
    {
        id: 147,
        name: "Dratini",
        type: ["Dragon"],
        abilities: ["Shed Skin", "Marvel Scale"],
        moves: ["Wrap", "Dragon Rage", "Thunder Wave", "Hyper Beam"],
    },
    {
        id: 152,
        name: "Chikorita",
        type: ["Grass"],
        abilities: ["Overgrow", "Leaf Guard"],
        moves: ["Tackle", "Razor Leaf", "Reflect", "Solar Beam"],
    },
    {
        id: 155,
        name: "Cyndaquil",
        type: ["Fire"],
        abilities: ["Blaze", "Flash Fire"],
        moves: ["Tackle", "Ember", "Flame Wheel", "Eruption"],
    },
    {
        id: 158,
        name: "Totodile",
        type: ["Water"],
        abilities: ["Torrent", "Sheer Force"],
        moves: ["Scratch", "Water Gun", "Bite", "Hydro Pump"],
    },
    {
        id: 172,
        name: "Pichu",
        type: ["Electric"],
        abilities: ["Static"],
        moves: ["Thunder Shock", "Charm", "Sweet Kiss", "Nuzzle"],
    },
    {
        id: 175,
        name: "Togepi",
        type: ["Fairy"],
        abilities: ["Hustle", "Serene Grace"],
        moves: ["Metronome", "Charm", "Ancient Power", "Yawn"],
    },
    {
        id: 183,
        name: "Marill",
        type: ["Water", "Fairy"],
        abilities: ["Thick Fat", "Huge Power"],
        moves: ["Tackle", "Bubble Beam", "Aqua Tail", "Play Rough"],
    },
    {
        id: 196,
        name: "Espeon",
        type: ["Psychic"],
        abilities: ["Synchronize", "Magic Bounce"],
        moves: ["Confusion", "Psybeam", "Morning Sun", "Psychic"],
    },
    {
        id: 197,
        name: "Umbreon",
        type: ["Dark"],
        abilities: ["Synchronize", "Inner Focus"],
        moves: ["Pursuit", "Feint Attack", "Moonlight", "Dark Pulse"],
    },
    {
        id: 200,
        name: "Misdreavus",
        type: ["Ghost"],
        abilities: ["Levitate"],
        moves: ["Growl", "Psywave", "Shadow Ball", "Pain Split"],
    },
    {
        id: 209,
        name: "Snubbull",
        type: ["Fairy"],
        abilities: ["Intimidate", "Run Away"],
        moves: ["Tackle", "Bite", "Charm", "Play Rough"],
    },
    {
        id: 215,
        name: "Sneasel",
        type: ["Dark", "Ice"],
        abilities: ["Inner Focus", "Keen Eye"],
        moves: ["Scratch", "Ice Shard", "Feint Attack", "Ice Punch"],
    },
    {
        id: 220,
        name: "Swinub",
        type: ["Ice", "Ground"],
        abilities: ["Oblivious", "Snow Cloak"],
        moves: ["Tackle", "Powder Snow", "Mud-Slap", "Ice Beam"],
    },
    {
        id: 228,
        name: "Houndour",
        type: ["Dark", "Fire"],
        abilities: ["Early Bird", "Flash Fire"],
        moves: ["Ember", "Bite", "Smog", "Flamethrower"],
    },
    {
        id: 246,
        name: "Larvitar",
        type: ["Rock", "Ground"],
        abilities: ["Guts"],
        moves: ["Bite", "Rock Slide", "Sandstorm", "Earthquake"],
    },
    {
        id: 252,
        name: "Treecko",
        type: ["Grass"],
        abilities: ["Overgrow", "Unburden"],
        moves: ["Pound", "Absorb", "Quick Attack", "Leaf Blade"],
    },
    {
        id: 255,
        name: "Torchic",
        type: ["Fire"],
        abilities: ["Blaze", "Speed Boost"],
        moves: ["Scratch", "Ember", "Peck", "Flamethrower"],
    },
    {
        id: 258,
        name: "Mudkip",
        type: ["Water"],
        abilities: ["Torrent", "Damp"],
        moves: ["Tackle", "Water Gun", "Mud-Slap", "Hydro Pump"],
    },
    {
        id: 280,
        name: "Ralts",
        type: ["Psychic", "Fairy"],
        abilities: ["Synchronize", "Trace"],
        moves: ["Growl", "Confusion", "Double Team", "Psychic"],
    },
];

const initialState = {
    isOpen: false,
    isCollapsed: false,
};

function reducer(state, action) {
    switch(action.type) {
        case "triggerOpen": 
            return {
                ...state,
                isOpen: action.payload
            }
        case "triggerCollapse": 
            return {
                ...state,
                isCollapsed: action.payload
            }
        default: return state;
    }
}

function App() {
    const [{isOpen, isCollapsed}, dispatch] = useReducer(reducer, initialState);
    
    const buttonText = !isOpen ? "Open" : "Close";
    const buttonStyle = !isOpen ? "bg-emerald-300" : "bg-orange-300";

    
    const pokedexList = isCollapsed ? pokedex.slice(0, 5) : pokedex;
    console.log(pokedexList);

    return (
        <div className="mx-auto w-1/2">
            <h1 className="text-3xl font-bold text-red-800">Pokedex Application</h1>
            <button className={`mx-auto my-4 text-2xl font-bold p-3 rounded-md ${buttonStyle}`} onClick={() => dispatch({type: "triggerOpen", payload: !isOpen})}>{buttonText} Pokedex</button>
            
            {isOpen && <button className="mx-auto my-4 text-2xl font-bold p-3 rounded-md" onClick={() => dispatch({type: "triggerCollapse", payload: !isCollapsed})}>{isCollapsed ? "Show More" : "Show Less"}</button>}

            {isOpen && <div>
                {pokedexList.map((pokemon, index) => (
                    <Card key={index} pokemon={pokemon}></Card>
                ))}
            </div>}
        </div>
    );
}

export default App;
