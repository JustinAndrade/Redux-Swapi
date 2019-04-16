import React from "react";
import { connect } from "react-redux";
import Loader from 'react-loader-spinner';

import { CharacterList } from "../components";
// import actions
import { getCharacter } from '../actions';

class CharacterListView extends React.Component {
  constructor() {
    super();
  }
  
  componentDidMount() {
    // call our action
      this.props.getCharacter();
  }
  
  render() {
      console.log(this.props)
      // return something here to indicate that you are fetching data
    return (
      <div className="CharactersList_wrapper">
      {this.props.isLoading && (
        <Loader type='Ball-Triangle' color='#00BFFF' height='90' width='60' />
      )}
        {this.props.characters && (
           <CharacterList characters={this.props.characters} />
        )}
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

const mapStateToProps = state => ({
  characters: state.characters,
  isLoading: state.isLoading
});

export default connect(
  mapStateToProps, /* mapStateToProps replaces null here */
  { getCharacter }
)(CharacterListView);
