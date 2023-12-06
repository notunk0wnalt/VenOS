import '/css/window.css'
import Bookmark from "./bookmark";
import "/src/css/window.css";
function Window(props) {
  return(
    <div className="window">
      <header>
        <div className="searchbar">
          <input type="text" id="windowsearchQ" value="searchQuery" placeholder="Search" />
          <button id="submitSearch" onClick={searchQuery()}>
            
          </button>
        </div>
        <div id="bookmark-bar">
          <Bookmark tabname="Youtube" icon="https://youtube.com/favicon.ico" link="https://youtube.com"/>
        </div>
      </header>
      <main>
        <iframe src={site} frameborder="0"></iframe>
      </main>
    </div>
  );
};
export default Window