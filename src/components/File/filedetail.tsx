import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import BasicTable from "./detailtable";
import Chip from "@material-ui/core/Chip";
import { Button } from "@material-ui/core";
import RefreshOutlinedIcon from "@material-ui/icons/RefreshOutlined";
import FindInPageOutlinedIcon from "@material-ui/icons/FindInPageOutlined";
import PermDataSettingOutlinedIcon from "@material-ui/icons/PermDataSettingOutlined";
import Divider from "@material-ui/core/Divider/Divider";
import FileTreeView from "./detailtree";
import { withStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      margin: "auto",
      backgroundColor: "#24303C",
      // maxWidth: 500
    },
    image: {
      width: 128,
      height: 128,
    },
    img: {
      margin: "auto",
      display: "block",
      maxWidth: "100%",
      maxHeight: "100%",
    },
    container: {
      display: "flex",
      justifyContent: "space-between",
    },
    title: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(2),
    },
    FocusedItem: {
      color: theme.palette.grey[400],
    },
    whiteItem: {
      color: theme.palette.common.white,
    },
  })
);

export default function ComplexGrid() {
  const classes = useStyles();
  const StyleChip = withStyles({
    root: {
      backgroundColor: "teal",
      color: "#ffffff",
    },
  })(Chip);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} direction="column">
          <Grid item spacing={4}>
            <Button
              startIcon={<FindInPageOutlinedIcon />}
              className={classes.FocusedItem}
            >
              {" "}
              Query results
            </Button>
            <Button
              startIcon={<PermDataSettingOutlinedIcon />}
              className={classes.whiteItem}
            >
              {" "}
              Schemas
            </Button>
          </Grid>
          <Divider className={classes.whiteItem} variant="middle" />
          <Grid item container direction="row" spacing={2}>
            <Grid item xs={12} sm={3}>
              <Button
                endIcon={<RefreshOutlinedIcon />}
                className={classes.whiteItem}
              >
                {" "}
                Refresh
              </Button>

              <FileTreeView />
            </Grid>
            <Grid item xs={12} sm={9}>
              <div className={classes.container}>
                <div className={classes.title}>
                  <div style={{ marginRight: 10 }}>
                    <StyleChip label="View" />
                  </div>
                  <Typography variant="body2" className={classes.whiteItem}>
                    dataset_5_from_script_builder
                  </Typography>
                </div>
                <CloseOutlinedIcon className={classes.whiteItem} />
              </div>
              <BasicTable />
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
