// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import UserMenu from 'src/components/User/Menu';
import { getMyInfos, getTechs } from 'src/store/reducer/user';

// Action Creators
const mapStateToProps = (state) => ({
  user: state.user,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  getMyInfos: () => {
    const action = getMyInfos();
    dispatch(action);
  },
  getTechs: () => {
    const action = getTechs();
    dispatch(action);
  },
});

// Container
const UserMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(UserMenu);

// == Export
export default UserMenuContainer;
