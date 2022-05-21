import React from 'react';
import { useGetPokemonByNameQuery } from '../../services/pokemon';

const Pokemon = () => {
  // Using a query hook automatically fetches data and returns query values
  const { data, error, isLoading } = useGetPokemonByNameQuery('pikachu');
  // Individual hooks are also accessible under the generated endpoints:
  // const { data, error, isLoading } = pokemonApi.endpoints.getPokemonByName.useQuery('bulbasaur')
  return (
    <div className='text-cyan-700 m-4'>
      <h1 className='text-xl font-semibold'>RTK Query</h1>
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <div className='flex space-x-1 items-center'>
          <h3 className='text-xl font-semibold'>
            Sprites: {data.species.name}
          </h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} />
        </div>
      ) : null}
    </div>
  );
};

export default Pokemon;
