import React from "react";
import {
  makeStyles,
  withStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Alert from "@material-ui/lab/Alert";
import {
  Accordion,
  Grid,
  Box,
  Button,
  Chip,
  Container,
  Typography,
} from "@material-ui/core";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import BootstrapButton from "../../common/button";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const AntTabs = withStyles({
  root: {
    borderBottom: "2px solid grey",
  },
  indicator: {
    backgroundColor: "#fff",
  },
})(Tabs);

const AntTab = withStyles((theme: Theme) =>
  createStyles({
    root: {
      textTransform: "none",
      minWidth: 72,
      color: "#fff",
      //   fontWeight: theme.typography.fontWeightRegular,
      marginRight: theme.spacing(4),
      fontFamily: [
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(","),
      "&:hover": {
        color: "#fff",
        opacity: 1,
      },
      "&$selected": {
        color: "#fff",
        fontWeight: theme.typography.fontWeightMedium,
      },
      "&:focus": {
        color: "#fff",
      },
    },
    selected: {},
  })
)((props: StyledTabProps) => <Tab disableRipple {...props} />);

interface StyledTabProps {
  label: string;
}

const useStyles = makeStyles((theme: Theme) => ({
  demo1: {
    backgroundColor: "#2E3A46",
  },
  container: {
    display: "flex-column",
    justifyContent: "space-between",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  buttongroup: {
    display: "flex-row",
  },
  title: {
    display: "flex",
    alignItems: "center",
  },
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const StyleChip = withStyles({
    root: {
      backgroundColor: "teal",
      color: "#ffffff",
    },
  })(Chip);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className="demo1">
      <div>
        <AntTabs value={value} onChange={handleChange} aria-label="ant example">
          <AntTab label="Outline" />
          <AntTab label="Documentation" />
        </AntTabs>
      </div>
      <Alert
        severity="warning"
        style={{ backgroundColor: "#3D4B56", color: "#AA7626" }}
      >
        No Compilation issue
      </Alert>
      <div className={classes.container}>
        <div className={classes.title}>
          <div style={{ marginRight: 10 }}>
            <StyleChip label="View" />
          </div>
          <Typography variant="body2">dataset_5_from_script_builder</Typography>
        </div>
        {/* <CloseOutlinedIcon /> */}
      </div>
      <Accordion style={{ backgroundColor: "#3D4B56", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Dependencies</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion style={{ backgroundColor: "#3D4B56", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Compiled</Typography>
        </AccordionSummary>
      </Accordion>
      <Accordion style={{ backgroundColor: "#3D4B56", color: "#fff" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <div className={classes.container}>
            <Typography>Query</Typography>

            <Grid
              container
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <BootstrapButton
                style={{
                  marginRight: 10,
                  color: "#fff",
                  backgroundColor: "gray",
                }}
              >
                Execute query
              </BootstrapButton>
              <BootstrapButton
                style={{
                  marginRight: 10,
                  color: "#fff",
                  backgroundColor: "#41a5d3",
                }}
              >
                Run this node
              </BootstrapButton>
            </Grid>
          </div>
        </AccordionSummary>
      </Accordion>
    </div>
  );
}
