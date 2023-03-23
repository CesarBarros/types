// Type definitions for faker-br 0.4.1
// Project: https://github.com/tamnil/Faker-br
// Definitions by: Cesar Barros <https://github.com/CesarBarros>
// Definitions: https://github.com/CesarBarros/types

// disable automatic export
export {};

type addressProps = {
  city(): string;
  stateAbbr(): string;
};

type brProps = {
  cpf(): string;
  cnpj(): string;
};

export const address: addressProps;
export const br: brProps;
