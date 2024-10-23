import { Component } from "react";
import { loadBugs } from "../store/bugs";
import { connect } from "react-redux";

// Subscribing and unsubscribing happens under the hood, do not need to sub/unsubscribe manually
class Bugs extends Component {
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>{bug.description}</li>
        ))}
      </ul>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: state.entities.bugs.list,
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
});

// Container
// Presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
