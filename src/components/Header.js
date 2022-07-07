import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({onClick}) => {

  return (
    <header className="Header">
     
      <Button color="green" onClick={onClick} text="Add" />
    </header>
  );
};
Header.defaultProps = {
  title: "Task tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};
//css in js
// const headingStyle = {color:'red',backgroundColor:'black'}

export default Header;
