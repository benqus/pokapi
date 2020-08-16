import styled from 'styled-components';
import { Search } from '@styled-icons/material';

export const AppContainer = styled.div`
  background: #F2F2F2;
  width: 100vw;
  height: 100vh;
  position: relative;

  * {
    box-sizing: border-box;
  }

  > header {
    position: absolute;
    top: 1em;
    left: 1em;
    font-family: 'Montserrat', Arial, sans-serif;

    h1 {
      padding: 0;
      margin: 0;
    }
  }
`;

export const MainContainer = styled.article`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  max-width: 35em;
  max-height: 65vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-bottom: .5em;
`;

export const InfoText = styled.p`
  font-size: 12px;
  font-family: 'Montserrat', Arial, sans-serif;
  text-transform: lowercase;
  text-align: right;
  padding: .5em .5em .5em .5em;
  margin: 0;
`;

export const SearchForm = styled.form`
  position: relative;
  font-size: 20px;
`;

export const SearchInput = styled.input`
  border: 2px solid #FFFFFF;
  background: #FFFFFF;
  box-shadow: 0 2px 1px rgba(0, 0, 0, .15);
  border-radius: .5em;
  padding: .5em;
  width: 100%;
  text-indent: 1.25em;
  font-family: 'Montserrat', Arial, sans-serif;
  font-weight: 300;
  font-size: inherit;
  outline: none;
  color: grey;

  &:focus {
    border: 2px solid grey;
  }
`;

export const SearchIcon = styled(Search)`
  position: absolute;
  top: 50%;
  left: .5em;
  width: 1em;
  height: 1em;
  transform: translateY(-50%);
  color: grey;
`;

export const PokemonCard = styled.section`
  position: relative;
  background: #FFFFFF;
  box-shadow: 0 2px 1px rgba(0, 0, 0, .15);
  border-radius: .5em;
  padding: .5em;
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
  font-family: 'Open-Sans', Arial, sans-serif;

  > .favorite {
    position: absolute;
    top: 1em;
    right: 1em;
  }

  > .scrollable {
    flex: 1;
    overflow: auto;
  }
`;

export const FavoriteButton = styled.button`
  background: none;
  padding: 0;
  border: none;
  outline: none;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
