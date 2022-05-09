import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import { red } from "@mui/material/colors";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Napolitana from "../../assets/img/Napolitana.jpg";
import BuonAppetito from "../../assets/Logo/BuonAppetito.jpg"
import accounting from "accounting"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
 

const ExpandMore = styled((props) => {
 const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCarrito() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src={BuonAppetito}>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
             {accounting.formatMoney (900, "$")}
          </IconButton>
        }
        title="Pizza Napolitana"
        subheader="Grande - 8 porciones"
      />
      <CardMedia
        component="img"
        height="194"
        image={Napolitana}
        alt="Pizza Napolitana"
      />
      <CardContent>
       Descripcion del Producto
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <AddShoppingCartIcon />
          Comprar
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
         Mas informacion de la Pizza
        </CardContent>
      </Collapse>
    </Card>
  );
}
