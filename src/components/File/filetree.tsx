import React from "react";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem, { TreeItemProps } from "@material-ui/lab/TreeItem";
import Typography from "@material-ui/core/Typography";
import Folder from "@material-ui/icons/Folder";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { SvgIconProps } from "@material-ui/core/SvgIcon";
import InfoIcon from "@material-ui/icons/Info";
import { withStyles } from "@material-ui/styles";
import Chip from "@material-ui/core/Chip";

declare module "csstype" {
  interface Properties {
    "--tree-view-color"?: string;
    "--tree-view-bg-color"?: string;
  }
}

type StyledTreeItemProps = TreeItemProps & {
  bgColor?: string;
  color?: string;
  labelIcon: React.ElementType<SvgIconProps>;
  labelInfo?: string;
  labelText: string;
};

const useTreeItemStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // color: " #24303C",
      // "&:hover > $content": {
      //   backgroundColor: theme.palette.action.hover
      // },
      // "&:focus > $content, &$selected > $content": {
      //   backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
      //   color: "var(--tree-view-color)"
      // },
      // "&:focus > $content $label, &:hover > $content $label, &$selected > $content $label": {
      //   backgroundColor: "transparent"
      // }
    },
    content: {
      color: "#ffffff",
      borderTopRightRadius: theme.spacing(2),
      borderBottomRightRadius: theme.spacing(2),
      paddingRight: theme.spacing(1),
      // fontWeight: theme.typography.fontWeightMedium,
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
    expanded: {},
    selected: {},
    label: {
      fontWeight: "inherit",
      color: "inherit",
    },
    labelRoot: {
      display: "flex",
      alignItems: "center",
      padding: theme.spacing(0.5, 0),
    },
    labelIcon: {
      marginRight: theme.spacing(1),
    },
    labelText: {
      fontWeight: "inherit",
      flexGrow: 1,
    },
  })
);

function StyledTreeItem(props: StyledTreeItemProps) {
  const classes = useTreeItemStyles();

  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <LabelIcon color="inherit" className={classes.labelIcon} />
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        "--tree-view-color": color,
        "--tree-view-bg-color": bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}
const StyleChip = withStyles({
  root: {
    backgroundColor: (props) => props.iconBgColor,
    color: "#ffffff",
  },
})(Chip);
export default function FileTreeView() {
  const Files = [
    {
      Name: "models",
      value: [
        {
          Name: "1_Simple_examples",
          value: [
            {
              label: "SQL",
              Name: "dataset_1",

              iconBgColor: "#8c9f69",
            },
            {
              label: "SQL",
              Name: "dataset_2_with_ref",

              iconBgColor: "#8c9f69",
            },
          ],
        },
        {
          Name: "2_advanced_examples",
          value: [
            {
              label: "SQL",
              Name: "dataset_3_increase",

              iconBgColor: "#8c9f69",
            },
            {
              label: "JS",
              Name: "dataset_4_increase",
              iconBgColor: "#f4d074",
            },
          ],
        },
        {
          Name: "3_Operations_and_",
          value: [
            {
              label: "ops",
              Name: "grant_access",
              iconBgColor: "#578c98",
            },
            {
              label: "assert",
              Name: "simple_assertion",
              iconBgColor: "#9e7f71",
            },
          ],
        },
      ],
    },
    {
      Name: "models_2",
      value: [],
    },
  ];
  return (
    <TreeView
      defaultExpanded={["3"]}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{ width: 24 }} />}
    >
      {Files.map((row, index) => (
        <StyledTreeItem
          nodeId={(index++).toString()}
          key={index}
          labelText={row.Name}
          labelIcon={Folder}
        >
          {row.value.length > 0 && row.value !== undefined
            ? row.value.map((row_item, index_two) => (
                <StyledTreeItem
                  key={index_two}
                  nodeId={(index++).toString()}
                  labelText={row_item.Name}
                  labelIcon={Folder}
                  color="#1a73e8"
                  bgColor="#e8f0fe"
                >
                  {row_item.value.length > 0 && row_item.value !== undefined
                    ? row_item.value.map((item_value, index_three) => (
                        <StyledTreeItem
                          key={index_three}
                          nodeId={(index++).toString()}
                          labelText={item_value.Name}
                          labelIcon={() => {
                            return (
                              <StyleChip
                                iconBgColor={item_value.iconBgColor}
                                label={item_value.label}
                                style={{ marginRight: "10px" }}
                              ></StyleChip>
                            );
                          }}
                          color="#1a73e8"
                          bgColor="#e8f0fe"
                        />
                      ))
                    : null}
                </StyledTreeItem>
              ))
            : null}
        </StyledTreeItem>
      ))}
    </TreeView>
  );
}
