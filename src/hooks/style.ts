import { createStyles, makeStyles, Theme } from "@material-ui/core";
const drawerWidth = 240;
export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",

      backgroundColor: "#3D4B56",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      background: "#24303C",
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      background: "#202934",
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },

    content: {
      color: "#ffffff",
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      flexGrow: 1,
      // padding: theme.spacing(3),
      //   fontWeight: theme.typography.fontWeightMedium,
      "$expanded > &": {
        fontWeight: theme.typography.fontWeightRegular,
      },
    },
    group: {
      marginLeft: 0,
      "& $content": {
        paddingLeft: theme.spacing(2),
      },
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
      padding: theme.spacing(1),
      backgroundColor: "#2E3A46",
    },
    title: {
      display: "flex",
      alignItems: "center",
      marginLeft: "20px",
      marginTop: "50px",
    },
    FocusedItem: {
      color: theme.palette.grey[400],
    },
    whiteItem: {
      color: theme.palette.common.white,
    },
    expanded: {},
    selected: {},
    fileMenu: {
      backgroundColor: "#3D4B56",
    },
  })
);
