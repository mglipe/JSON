import ifpiFood from '../assets/ifpifood.png';
import user from '../assets/person.png';
import key from '../assets/key.png';
import doubleChess from '../assets/hamburguer.jpg';
import saladaBurgue from '../assets/xburguer.jpg';
import orionBurgue from '../assets/artesanal.jpg';
import megaPepperBurgue from '../assets/combo.jpg';
import burguinho from '../assets/sanduba.jpg';
import group from '../assets/group_FILL0_wght400_GRAD0_opsz48.png';
import time from '../assets/schedule_FILL0_wght400_GRAD0_opsz48.png';
import more from '../assets/expandmore.png';
import less from '../assets/expandless.png';
import burgDetails from '../assets/burgDetalhado.jpg';

const dados = {
  imagem: ifpiFood,
  descricao: "IFPI",
  complemento: "FOOD",
  iconUser: user,
  iconKey: key,
  createUser: "Não possui uma conta?"
}


const lista = [
  {
    id:0,
    titulo: "Double Chess",
    descricao: "2 blends de 160g de fraldinha, no pão de parmesão e orégano, 2 fatias de queijo cheddar, cebola caramelizada e molho",
    img: doubleChess,
    imgDetails: burgDetails,
    valor: 'R$: 23.50', 
  
  },
   {
    id:1,
    titulo: "Salada Burgue",
    descricao: "2 blends de 160g de fraldinha, no pão de parmesão e orégano, 2 fatias de queijo cheddar, cebola caramelizada e molho",
    img: saladaBurgue,
    imgDetails: burgDetails,
    valor: 'R$: 23.50', 
  
  },
   {
    id:2,
    titulo: "Orion Burgue",
    descricao: "2 blends de 160g de fraldinha, no pão de parmesão e orégano, 2 fatias de queijo cheddar, cebola caramelizada e molho",
    img: orionBurgue,
    imgDetails: burgDetails,
    valor: 'R$: 23.50', 
  
  },
   {
    id:3,
    titulo: "Mega Pepper Burgue",
    descricao: "2 blends de 160g de fraldinha, no pão de parmesão e orégano, 2 fatias de queijo cheddar, cebola caramelizada e molho",
    img: megaPepperBurgue,
    imgDetails: burgDetails,
    valor: 'R$: 23.50', 
  
  },
   {
    id:4,
    titulo: "Burguinho",
    descricao: "2 blends de 160g de fraldinha, no pão de parmesão e orégano, 2 fatias de queijo cheddar, cebola caramelizada e molho",
    img: burguinho,
    imgDetails: burgDetails,
    valor: 'R$: 23.50', 
  
  },
]

const icons = {
  time: time,
  group: group,
  less: more,
  more: less,
  timeDescription: "25 min",
  groupDescription: "1 pes",
}

export {dados, lista, icons};
