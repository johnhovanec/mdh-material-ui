import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import LayersIcon from "@material-ui/icons/Layers";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import Add from "@material-ui/icons/Add";
import ArrowRight from "@material-ui/icons/ArrowRight";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  nested: {
    paddingLeft: theme.spacing(0)
  },
  nested_topic: {
    paddingLeft: theme.spacing(3)
  },
  nested_subtopic: {
    paddingLeft: theme.spacing(5)
  }
}));

export default function NestedList() {
  const classes = useStyles();
  // Hack approach to setting state on menu items. We'll want a single object.
  const [open, setOpen] = React.useState(false);
  const [openTestingRates, setOpenTestingRates] = React.useState(false);
  const [openInterventions, setOpenInterventions] = React.useState(false);
  const [openSourcesExposure, setOpenSourcesExposure] = React.useState(false);
  const [openResources, setOpenResources] = React.useState(false);

  const handleClick = (e) => {
    var x = e.currentTarget.attributes["data-tag"]
      ? e.currentTarget.attributes["data-tag"].value
      : null;

    // Hack approach to setting open on menu items. We should be able to dynamically do this in a line or two.
    console.log(x);
    switch (x) {
      case "Testing Rates":
        setOpenTestingRates(!openTestingRates);
        break;
      case "Interventions":
        setOpenInterventions(!openInterventions);
        break;
      case "Sources of Exposure":
        setOpenSourcesExposure(!openSourcesExposure);
        break;
      case "Resources":
        setOpenResources(!openResources);
        break;
      default:
        setOpen(!open);
    }
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Health
        </ListSubheader>
      }
      className={classes.root}
      dense={true}
    >
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Asthma" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Birth Defects" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Cancer" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Carbon Monoxide" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Childhood Lead" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem
          button
          data-tag="Testing Rates"
          className={classes.nested_topic}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Testing Rates" />
          {openTestingRates ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openTestingRates} timeout="auto" unmountOnExit>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Trends" />
          </ListItem>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Equity and Disparity" />
          </ListItem>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Intervention Impact" />
          </ListItem>
        </Collapse>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem
          button
          data-tag="Sources of Exposure"
          className={classes.nested_topic}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Sources of Exposure" />
          {openSourcesExposure ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openSourcesExposure} timeout="auto" unmountOnExit>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Subtopic 1" />
          </ListItem>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Subtopic 2" />
          </ListItem>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Subtopic 3" />
          </ListItem>
        </Collapse>
      </Collapse>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <ListItem
          button
          data-tag="Interventions"
          className={classes.nested_topic}
          onClick={handleClick}
        >
          <ListItemIcon>
            <Add />
          </ListItemIcon>
          <ListItemText primary="Interventions" />
          {openInterventions ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openInterventions} timeout="auto" unmountOnExit>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Subtopic 1" />
          </ListItem>
          <ListItem button className={classes.nested_subtopic}>
            <ListItemIcon>
              <ArrowRight />
            </ListItemIcon>
            <ListItemText primary="Subtopic 2" />
          </ListItem>
        </Collapse>
      </Collapse>

      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="COPD" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Heart Attacks" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Heat-Related Events" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Injuries" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <LayersIcon />
        </ListItemIcon>
        <ListItemText primary="Occupational Health" />
      </ListItem>
    </List>
  );
}
