// @flow
import React from 'react';

type Props = {
  forms: Array<Object>,
};

export const PokemonForms = (props: Props) => {
  const { forms } = props;
  return (
    <div>
      {forms.map((pokeForm) => (
        <div key={pokeForm.name}>
          {pokeForm.name}
        </div>
      ))}
    </div>
  );
};