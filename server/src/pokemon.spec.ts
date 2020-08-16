import { expect } from 'chai';
import { filterAndJoinTextEntries, PokemonSpecies } from './pokemon';

describe('Pokemon', () => {
  it('filterAndJoinTextEntries - "en" language only', () => {
    const entries: PokemonSpecies["flavor_text_entries"] = [
      {
        flavor_text: "a",
        language: {
          name: "en",
          url: ""
        },
        version: {
          name: "",
          url: ""
        }
      },
      {
        flavor_text: "b",
        language: {
          name: "en",
          url: ""
        },
        version: {
          name: "",
          url: ""
        }
      },
      {
        flavor_text: "c",
        language: {
          name: "hu",
          url: ""
        },
        version: {
          name: "",
          url: ""
        }
      },
      {
        flavor_text: "d",
        language: {
          name: "en",
          url: ""
        },
        version: {
          name: "",
          url: ""
        }
      }
    ]
    expect(filterAndJoinTextEntries(entries)).to.equal("a<br>b<br>d");
  });
});
