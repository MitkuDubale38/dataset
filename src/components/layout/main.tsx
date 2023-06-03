import React from "react";
import {
  Button,
  Chip,
  Divider,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { PropTypes } from "../../App";
import FileTreeView from "../File/filetree";
import Editor from "../File/Editor";
import ComplexGrid from "../File/filedetail";
import CustomizedTabs from "../File/Editordetail";
import BootstrapButton from "../../common/button";
import { withStyles } from "@material-ui/styles";
function Main(props: PropTypes) {
  const FilesTitle = ["dataform", "package-lock", "package"];
  const StyleChip = withStyles({
    root: {
      backgroundColor: "teal",
      color: "#ffffff",
    },
  })(Chip);
  return (
    <Grid container xs direction="row">
      <Grid item xs={3} sm={2} spacing={5}>
        <Typography variant="h6" className={props.classes.title}>
          <b>Files</b>
        </Typography>
        <div className={props.classes?.fileMenu}>
          <List>
            {FilesTitle.map((row, index) => (
              <ListItem key={index}>
                <ListItemAvatar>
                  <StyleChip
                    label="config"
                    color="default"
                    style={{ marginRight: "10px" }}
                  />
                </ListItemAvatar>
                <ListItemText primary={row} />
              </ListItem>
            ))}
          </List>
          <FileTreeView />
        </div>
      </Grid>
      <Grid item xs container direction="column">
        <Grid item xs container direction="row">
          <Grid item xs>
            <div className={props.classes.container}>
              <Typography variant="body2" className={props.classes.whiteItem}>
                definitions/1_simple_examples/dataset_2_with_ref.sql
              </Typography>
              <BootstrapButton
                style={{
                  marginRight: 10,
                  color: "#fff",
                  backgroundColor: "#41a5d3",
                }}
                size="small"
              >
                Save
              </BootstrapButton>
            </div>
            <Divider />
            <Editor />
          </Grid>
          <Grid item xs={12} md={4} lg={4}>
            <CustomizedTabs />
          </Grid>
        </Grid>
        <Grid item xs>
          <ComplexGrid />
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Main;
