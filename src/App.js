import Leftbar from './Components/Leftbar';
import Navbar from './Components/Navbar';
import Grid from '@mui/material/Grid';
import Feed from './Components/Feed';
import Rightbar from './Components/Rightbar';
import Add from './Components/Add';
const styles = {
  right: {
    position: "sticky",
    "@media (max-width: 600px)": {
      display: "none",
    },
  },
}
function App() {
  return (
    <div className="App">
         <Navbar />
         <Grid container spacing = {2}>
            <Grid item sm={2} xs={2}>
            <Leftbar/>
            </Grid>
            <Grid item sm={7} xs={10}>
              <Feed />
            </Grid>
            <Grid item sm={3} sx={styles.right} >
              <Rightbar />
            </Grid>
        </Grid>
        <Add/>
    </div>
  );
}

export default App;
