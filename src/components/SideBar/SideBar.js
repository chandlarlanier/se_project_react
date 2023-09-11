import avatar from '../../images/avatar.svg';

const SideBar = () => {
  return (
    <div className="profile__side-bar">
      <img className="profile__avatar" src={avatar} alt="User avatar" />
      <div className="profile__name">Terrence Tegegne</div>
    </div>
  );
};

export default SideBar;
