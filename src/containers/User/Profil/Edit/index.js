// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import EditUserProfil from 'src/components/User/Profil/Edit';

// Action Creators
import { sendRequest } from 'src/store/reducer/userEdit';
import { changeState, sendMyTechs } from 'src/store/reducer/user';
import { getMyInfos } from 'src/store/reducer/user';

const mapStateToProps = (state, ownProps) => ({
  //**** get the state of UserCOntainer, nott EditUserContainer ****/
  currentUser: state.user,
});


const mapDispatchToProps = (dispatch, ownProps) => ({
  sendRequest: (currentUserDatas) => {
    const action = sendRequest(currentUserDatas);
    dispatch(action);
  },
  changeState: (value) => {
    const action = changeState(value);
    dispatch(action);
  },
  getMyInfos: () => {
    const action = getMyInfos();
    dispatch(action);
  },
  sendMyTechs: (t, userId) => {
    const action = sendMyTechs(t, userId);
    dispatch(action);
  }
});

// Container
const EditUserProfilContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(EditUserProfil);

// == Export
export default EditUserProfilContainer;
