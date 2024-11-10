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
} from "@/components/ui/sidebar";
import { Button } from "./components/ui/button";

function App() {
  // need a way to load all of the information
  const [selectedPokemon, setSelectedPokemon] = useState(0);
  const [pokemonInfo, setPokemonInfo] = useState(null);
  const [loading, setLoading] = useState(false);

  const {name, id, weight} = pokemonInfo || {} // just in case there is no data

  useEffect(() => {
    console.log(pokemonInfo);
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

    // check if selected pokemon already in cache
    if (selectedPokemon in cache) {
      setPokemonInfo(cache[selectedPokemon]);
    }

    // fetch selected pokemon data from the API
    async function fetchPokemonData() {
      console.log("Trying to fetch data from API");
      try {
        // get info
        setLoading(true);
        const url = `https://pokeapi.co/api/v2/pokemon/${getPokedexNumber(
          selectedPokemon
        )}`;
        const result = await fetch(url);
        const pokemonData = await result.json();
        setPokemonInfo(pokemonData);
        cache[selectedPokemon] = pokemonInfo;

        localStorage.setItem("pokedex", JSON.stringify(cache));
      } catch (err) {
        console.log(err);
      } finally {
        console.log("Succesfully fetched");
        setLoading(false);
      }
    }

    fetchPokemonData;
  }, [selectedPokemon]);

  return (
    <>
      <SidebarProvider>
        <Sidebar>
          <SidebarHeader>
            <Input placeholder="Pokemon ### or name" />
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Pokedex</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {first151Pokemon.map((pokemon, pokemonIndex) => {
                    return (
                      <SidebarMenuItem key={pokemonIndex}>
                        <SidebarMenuButton asChild>
                          <a href="#">
                            <span>
                              {getFullPokedexNumber(pokemonIndex)} {pokemon}
                            </span>
                          </a>
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
          <div>
            <h4>
              #{getFullPokedexNumber(selectedPokemon)} {name}
            </h4>
            <p>{id}</p>
            <p>{weight}</p>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}

export default App;
