function Bookmark(props) {
  return (
    <a href={link}>
      <div className="bookmark">
        <img src={tabicon} />
        <h4>{tabname}</h4>
      </div>
    </a>
  );
}
export default Bookmark;
