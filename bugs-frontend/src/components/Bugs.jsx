import { Component } from "react";
import { getUnresolvedBugs, loadBugs, resolveBug } from "../store/bugs";
import { connect } from "react-redux";

// Subscribing and unsubscribing happens under the hood, do not need to sub/unsubscribe manually
class Bugs extends Component {
  // Only exists in class components not function components
  componentDidMount() {
    this.props.loadBugs();
  }

  render() {
    return (
      <ul>
        {this.props.bugs.map((bug) => (
          <li key={bug.id}>
            {bug.description}
            <button onClick={() => this.props.resolveBug(bug.id)}>
              Resolve
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

// bugs: state.entities.bugs.list
const mapStateToProps = (state) => ({
  bugs: getUnresolvedBugs(state),
});

const mapDispatchToProps = (dispatch) => ({
  loadBugs: () => dispatch(loadBugs()),
  resolveBug: (id) => dispatch(resolveBug(id)),
});

// Container
// Presentation (Bugs)
export default connect(mapStateToProps, mapDispatchToProps)(Bugs);
