// @flow
import React from 'react';

type Props = {
  abilities: Array<Object>,
};

export const PokemonAbilities = (props: Props) => {
  const { abilities } = props;
  return (
    <div>
      {abilities.map((pokeAbility) => (
        <div key={pokeAbility.ability.name}>
          {pokeAbility.ability.name}
        </div>
      ))}
    </div>
  );
};