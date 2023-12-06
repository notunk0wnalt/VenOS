import Apps from "/src/apps/apps.jsx";
function Shortcut(props) {
  return(
    <div className="short">
      <img src={icon} />
      <h3>{appname}</h3>
    </div>
  )
};
export default Shortcut