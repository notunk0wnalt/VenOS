import Apps from "/src/apps/apps.jsx";
function Shortcut(props) {
  return(
    <div className="short">
      <img src={icons} />
      <h3>{shortcutName}</h3>
    </div>
  )
};
export default Shortcut