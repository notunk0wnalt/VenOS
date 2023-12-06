import Shortcut from "./components/shortcut";
import Card from "./src/components/card";
import Window from "./components/window";
import Bookmark from "./components/bookmark";

function App() {
  return(
    <>
      <main>
        <div className="desktop">
          <Shortcut appname="Saturn" icon="./assets/imgs/saturn.png"/>
          <Shortcut appname="File Explorer" icon="./assets/imgs/filexplorer.png" />
        </div>
      </main>
      .<footer>
          <Shortcut appname="Chrome" icon="cukoo" onclick="openApps()"/>
      </footer>
    </>
  );
};