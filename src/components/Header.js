import PropTypes from "prop-types";
import Button from "./Button";
const Header = ({title, onAdd}) => {

  return (
    <header className="Header">
      <h1 /*style={headingStyle}*/>{title}</h1>
      <Button color="green" onClick={onAdd} text="Add" />
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
