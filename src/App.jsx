import { useEffect, useState } from "react";
import { Input } from "./components/ui/input";
import {
  first151Pokemon,
  getFullPokedexNumber,
  getPokedexNumber,
} from "./utils";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "./components/ui/button";
import CustomSidebarTrigger from "./components/CustomSidebarTrigger";
import StatColourBar from "./components/StatColourBar";
import { Card, CardContent, CardHeader, CardTitle } from "./components/ui/card";

function App() {
  // need a way to load all of the information
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const [searchString, setSearchString] = useState("");

  const { name, height, weight, abilities, stats, types, moves, sprites } =
    pokemonInfo || {}; // just in case there is no data
  // THIS NEEDS TO BE CLEANED UP
  const usableSprites = Object.keys(sprites || {}).filter((val) => {
    if (!sprites[val]) {
      return false;
    }
    if (["versions", "other"].includes(val)) {
      return false;
    }
    return true;
  });

  const filteredPokemonList = first151Pokemon.filter((val, valIndex) => {
    if (getFullPokedexNumber(valIndex).includes(searchString)) {
      return true;
    }
    if (val.toLowerCase().includes(searchString.toLowerCase())) {
      return true;
    }
    return false;
  });

  useEffect(() => {
    // check if already loading and that there is a localStorage loaded too
    if (loading || !localStorage) {
      return;
    }

    // setup the cache
    let cache = {};
    // try and load from local storage
    if (localStorage.getItem("pokedex")) {
      cache = JSON.parse(localStorage.getItem("pokedex"));
    }

    // check if selected pokemon already in cache and that the pokemon ins't empty
    if (selectedPokemon in cache && cache[selectedPokemon]) {
      console.log(
        `Loaded pokemon (${selectedPokemon}) from cache (${cache[selectedPokemon]?.name})`
      );
      setPokemonInfo(cache[selectedPokemon]);
      return; // make sure to exit
    }

    // fetch selected pokemon data from the API
    async function fetchPokemonData() {
      try {
        // get info
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(
          selectedPokemon
        )}`;
        const result = await fetch(url);
        const pokemonData = await result.json();
        setPokemonInfo(pokemonData);
        cache[selectedPokemon] = pokemonData; // why can't I put pokemnonInfo here if I have updated the value

        localStorage.setItem("pokedex", JSON.stringify(cache));
      } catch (err) {
        console.log(err);
      } finally {
        console.log(
          `Succesfully fetched pokemon (${selectedPokemon}, ${cache[selectedPokemon]?.name})`
        );
        setLoading(false);
      }
    }

    fetchPokemonData();
  }, [selectedPokemon]);

  if (loading || !pokemonInfo) {
    return (
      <div>
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <Input
              value={searchString}
              onChange={(e) => {
                setSearchString(e.target.value);
              }}
              placeholder="Pokemon ### or name"
            />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Pokemons</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {filteredPokemonList.map((pokemon, pokemonIndex) => {
                    const truePokemonIndex = first151Pokemon.indexOf(pokemon);
                    return (
                      <SidebarMenuItem key={pokemonIndex}>
                        <SidebarMenuButton
                          isActive={pokemonIndex === selectedPokemon}
                          onClick={() => {
                            console.log(truePokemonIndex);
                            setSelectedPokemon(truePokemonIndex);
                          }}
                        >
                          <span>
                            {getFullPokedexNumber(truePokemonIndex)} {pokemon}
                          </span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    );
                  })}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <SidebarInset>
          <CustomSidebarTrigger />
          {/* {if (loading){
            return (<p>hi</p>)
          }} // why can't I put this here */}
          <div className="flex justify-center items-center space-x-4">
            <div>
              <img className="h-80 w-80" src={sprites?.front_default} />
            </div>
            <div>
              <h3 className="text-2xl text-center font-semibold leading-none tracking-tight">
                #{getFullPokedexNumber(selectedPokemon)} {name}
              </h3>
              <div>
                {types.map((type, typeIndex) => {
                  return (
                    <div key={typeIndex}>
                      <p>some card with {type?.type?.name}</p>
                    </div>
                  );
                })}
              </div>
              <p>Height: {height}</p>
              <p>Weight: {weight}</p>
            </div>
          </div>
          <div className="items-center space-x-4">
            {stats.map((statObj, statIndex) => {
              const { stat, base_stat } = statObj;
              return (
                <div key={statIndex}>
                  {/* <p>{stat?.name.replaceAll('-',' ')}: {base_stat}</p> */}
                  <StatColourBar value={base_stat} statType={stat?.name} />
                  {/* <p>add a loading bar of how good this is</p> */}
                </div>
              );
            })}
          </div>
          <Card>
            <CardHeader>
              <CardTitle>
                #{getFullPokedexNumber(selectedPokemon)} {name}
              </CardTitle>
            </CardHeader>
            <CardContent></CardContent>
            <div>
              {types.map((type, typeIndex) => {
                return (
                  <div key={typeIndex}>
                    <p>some card with {type?.type?.name}</p>
                  </div>
                );
              })}
            </div>
            <div>
              {usableSprites.map((spriteKey, spriteIndex) => {
                return (
                  <img
                    key={spriteIndex}
                    src={sprites[spriteKey]}
                    alt={`${name}-img-${spriteKey}`}
                  />
                );
              })}
            </div>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {stats.map((statObj, statIndex) => {
                  const { stat, base_stat } = statObj;
                  return (
                    <div key={statIndex}>
                      {/* <p>{stat?.name.replaceAll('-',' ')}: {base_stat}</p> */}
                      <StatColourBar value={base_stat} statType={stat?.name} />
                      {/* <p>add a loading bar of how good this is</p> */}
                    </div>
                  );
                })}
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Moves</CardTitle>
            </CardHeader>
            <CardContent>
              <div>
                {moves.map((move, moveIndex) => {
                  return (
                    <Button key={moveIndex}>
                      {move?.move?.name.replaceAll("-", " ")}
                    </Button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
