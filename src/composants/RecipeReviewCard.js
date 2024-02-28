import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Button } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useState, useEffect} from 'react';
import { useTheme } from '@emotion/react';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const [index, setIndex] = useState(0); // Index de l'élément actuel dans le tableau




  const [data, setData] = useState([
    { 
      title: "Cloud egg on toast", 
      des: "Le plat anglais idéal pour un brunch",
      image: "../images/Cloudegg.webp",
      content: "Pour 2 personnes<br/>Temps de préparation : 5 minutes<br/>Temps de cuisson : 10 minutes<br/>Coût : pour toutes les bourses", 
      p1: "Ingrédients :<br/>- 2 œufs<br/>- Sel, poivre<br/>- 2 tranches de pain de campagne<br/>- Basilic (pour décorer)", 
      p2: "1. Séparer les blancs des jaunes. Monter les blancs en neige à l'aide d'un fouet électrique. Assaisonner.",
      p3: "2. Sur une plaque antiadhésive allant au four disposer les blancs en neige en deux tas. À l’aide d'une cuiller, creuser une légère cavité pour pouvoir y déposer le jaune d'œuf par la suite. Cuire les blancs 8 à 10 minutes à 230°.",
      p4: "3. Sortir la plaque du four et déposer les jaunes dans les petites cavités. Poursuivre la cuisson 3 minutes.<br/>4. Placer les clouds eggs sur des tranches de pain grillées et décorer avec du basilic. Déguster sans attendre."
    }
,

{
  title: "Omelette «fluffy» à la tomate",
  des: "MIAM!!!",
  image: "/images/fluffy.webp",

  content: "Pour 2 personnes<br/>Temps de préparation : 5 minutes<br/>Temps de cuisson : 5 minutes<br/>Coût : pour toutes les bourses",
  p1: "Ingrédients :<br/>- 3 œufs<br/>- Sel, poivre<br/>- Un filet d'huile neutre<br/>- 2 C A S de sauce tomate<br/>- 1 C A S de parmesan<br/>- 1 C A S de fromage râpé<br/>- 1/2 C A C de ciboulette",
  p2: "1. Séparer le blanc des jaunes. Dans un saladier, à l'aide d'un fouet électrique, monter les blancs en neige. Saler, poivrer.<br/>2. Dans un second saladier placer les jaunes. Les détendre avec un fouet. Ajouter un tiers des blancs en neige et fouetter. Ajouter le reste des blancs délicatement en mélangeant à l'aide d'une maryse.",
  p3: "3. Faire chauffer une poêle à feu doux et ajouter un filet d'huile. Verser les œufs et couvrir. Cuire 3 minutes. Plier l'omelette en deux.",
  p4: "4. Garnir de sauce tomate, parmesan, et fromage râpé. Passer éventuellement 1 minute au grill pour faire fondre le fromage. Saupoudrer de ciboulette et servir sans attendre."
},
{
  title: "Chia pudding au granola",
  des: "Brunch gourmand sans prise de tête",
  image: "/images/chia.webp",

  content: "Pour 2 personnes<br/>Temps de préparation : 10 minutes<br/>Temps de repos : 1 heure",
  p1: "Ingrédients :<br/>- 50 cl de lait végétal<br/>- 50 g de graines de chia<br/>- 1 C A C de vanille en poudre<br/>- 2 C A S de sirop d'agave<br/>- 150 g de granola<br/>- 250 g de fruits rouges",
  p2: "1. Verser le lait sur les graines de chia avec la vanille et le sirop d'agave. Mélanger toutes les 10 minutes pendant 30 minutes puis filmer au contact et réserver au frais pendant 1 heure.",
  p3: "2. Déposer du granola au fond d'un bol, recouvrir de pudding de chia et décorer avec des fruits rouges.",
  p4: "Astuce : préparer le pudding de chia la veille pour qu'il gonfle toute la nuit. Déguster bien frais au petit-déjeuner."
},
{
  title: "Pancakes healthy",
  des: "Une délicieuse recette pour un petit-déjeuner sain",
  image: "/images/sarasin.webp",

  content: "Pour 2 personnes<br/>Temps de préparation : 5 minutes<br/>Temps de cuisson : 10 minutes",
  p1: "Ingrédients :<br/>- 120 g de farine de sarrasin<br/>- 100 g de compote de pommes sans sucre ajouté<br/>- 1 œuf<br/>- 20 cl de lait végétal<br/>- 1 C A C d'extrait de vanille<br/>- 1/2 C A C de levure chimique<br/>- Pour le toppings : fruits frais, fruits secs, confiture, sirop d'agave, beurre de cacahuètes…",
  p2: "1. Mélanger la farine, la compote, l'œuf, le lait végétal, l'extrait de vanille et la levure jusqu'à l'obtention d'une préparation homogène et lisse.<br/>2. Cuire les pancakes dans une poêle antiadhésive quelques minutes de chaque côté.",
  p3: "3. Servir avec un (ou plusieurs) topping au choix !",
  p4: "Astuce : Vous pouvez ajouter des fruits frais ou secs, de la confiture, du sirop d'agave ou du beurre de cacahuètes comme topping pour ajouter encore plus de saveur à vos pancakes."
},
{
  title: "Porridge aux bananes et au beurre de cacahuètes",
  des: "Un délicieux petit déjeuner pour bien commencer la journée",
  image: "/images/banana.jpg",

  content: "Pour 2 personnes<br/>Temps de préparation : 5 minutes<br/>Temps de cuisson : 10 minutes",
  p1: "Ingrédients :<br/>- 500 ml de lait<br/>- 6 C A S de flocons d'avoine<br/>- 2 bananes bien mûres + 1 pour la décoration<br/>- 2 C A S de sucre non raffiné<br/>- 2 C A S de beurre de cacahuètes",
  p2: "1. Verser le lait et les flocons d'avoine dans une casserole et porter le tout à ébullition en mélangeant régulièrement. Aux premiers bouillons, baisser le feu.<br/>2. Ajouter les bananes écrasées et le sucre et laisser épaissir pendant 2 à 3 minutes.",
  p3: "3. Servir dans des bols individuels et déposer des rondelles de banane et une cuillère à soupe de beurre de cacahuètes.",
  p4: "Déguster tiède ce porridge healthy."
}
  ]);
  
  // Affichage dans le composant
  
  
  
  


  const avancercarte = () => {
   // Incrémenter l'index de 1 et utiliser le modulo pour boucler à travers les éléments
   setIndex((index + 1) % data.length);
  }

  const retourcarte = () => {
    // Incrémenter l'index de 1 et utiliser le modulo pour boucler à travers les éléments
    setIndex((index - 1 + data.length) % data.length);
  }

  const theme= useTheme(); 


  return (



<>  


<Button sx={{mt:'80px'}}

onClick={(mydej, i) => {

retourcarte();

  
}}



>
<ArrowBackIosNewIcon  sx={{ color:theme.palette.appco.main ,fontSize:'50px'}} />

</Button>


<Card sx={{ maxWidth: 350 }}>
  <CardHeader
    avatar={
      <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe" src="/images/brunch.jpg">
        
      </Avatar>
    }
    // action={
    //   <IconButton aria-label="settings">
    //     <MoreVertIcon />

    //   </IconButton>
    // }
    title=     {data[index].title}
  
    subheader={data[index].des}
  />
  <CardMedia
    component="img"
    height="194"
    image= {data[index].image}
    alt="Paella dish"
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
    <div dangerouslySetInnerHTML={{ __html: data[index].content}} />


    </Typography>
  </CardContent>
  <CardActions disableSpacing>

 
    {/* <IconButton aria-label="add to favorites">
      <FavoriteIcon />
    </IconButton> */}
    {/* <IconButton aria-label="share">
      <ShareIcon />
    </IconButton> */}
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >

      <Typography sx={{color:theme.palette.appco.main}}  component="h6"> Lisez & savourez...</Typography>
     
      <ExpandMoreIcon />
    </ExpandMore>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit> 
    <CardContent>
      <Typography paragraph>Recette:</Typography>
      <Typography paragraph>
     
     
      <div dangerouslySetInnerHTML={{ __html: data[index].p1 }} />

      </Typography>
      <Typography paragraph>
       

      <div dangerouslySetInnerHTML={{ __html: data[index].p2 }} />

      </Typography>
      <Typography paragraph>
      

      <div dangerouslySetInnerHTML={{ __html: data[index].p3 }} />

      </Typography>
      <Typography>

      <div dangerouslySetInnerHTML={{ __html: data[index].p4 }} />



      </Typography>
    </CardContent>
  </Collapse>
</Card> 



<Button sx={{mt:'80px'}}

onClick={(mydej, i) => {

avancercarte();

  
}}



>
< ArrowForwardIosIcon sx={{ color:theme.palette.appco.main ,fontSize:'50px'}} />

</Button>
    

    

    
    
     </>

   
  );
}