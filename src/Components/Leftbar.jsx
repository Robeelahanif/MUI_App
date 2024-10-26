import { Container, styled, Typography } from "@mui/material";
import { 
  Bookmark, 
  List, 
  ExitToApp, 
  Home, 
  Person, 
  PhotoCamera, 
  PlayCircleOutline, 
  Settings, 
  Storefront, 
  TabletMac 
} from "@mui/icons-material";
// import { palette } from '@mui/system';
// import { theme } from "../theme";

const LeftbarContainer = styled(Container)({
  height: "100vh",
  color: "black",
  paddingTop: "50px",
  top: 0,
  "@media (max-width: 600px)": {
    backgroundColor: "#1976d2" , 
    color: "white", 
    alignItems: "center",
    border: "1px solid #ece7e7", 
  },
 
});

const LeftbarItem = styled("div")({
  display: "flex",
  alignItems: "center",
  paddingTop: "20px",
  cursor: "pointer",
  marginBottom: (theme) => theme.spacingUnit * 9,
  "@media (max-width: 600px)": {
    marginBottom: (theme) => theme.spacingUnit * 3,
    cursor: "pointer",
  },
  "@media (max-width: 350px)": {
    textAlign:"center",
    color: "white",
  },
});

const LeftbarText = styled(Typography)({
  fontWeight: 500,
  "@media (max-width: 600px)": {
    display: "none",
  },
});

const Leftbar = () => {
  return (
    <LeftbarContainer>
      <LeftbarItem>
          <Home sx={{ marginRight: 1 }} />
        <LeftbarText>Homepage</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <Person sx={{ marginRight: 1 }} />
        <LeftbarText>Friends</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <List sx={{ marginRight: 1 }} />
        <LeftbarText>Lists</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <PhotoCamera sx={{ marginRight: 1 }} />
        <LeftbarText>Camera</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <PlayCircleOutline sx={{ marginRight: 1 }} />
        <LeftbarText>Videos</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <TabletMac sx={{ marginRight: 1 }} />
        <LeftbarText>Apps</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <Bookmark sx={{ marginRight: 1 }} />
        <LeftbarText>Collections</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <Storefront sx={{ marginRight: 1 }} />
        <LeftbarText>Market Place</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <Settings sx={{ marginRight: 1 }} />
        <LeftbarText>Settings</LeftbarText>
      </LeftbarItem>
      <LeftbarItem>
        <ExitToApp sx={{ marginRight: 1 }} />
        <LeftbarText>Logout</LeftbarText>
      </LeftbarItem>
    </LeftbarContainer>
  );
};

export default Leftbar;
