//SKILLS
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaCss3Alt } from 'react-icons/fa';
import {FaReact} from 'react-icons/fa';
import {FaNodeJs} from 'react-icons/fa';
import {FaSass} from 'react-icons/fa';
import {DiPhotoshop} from 'react-icons/di'
import {FaGitAlt} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {DiMongodb} from 'react-icons/di'
import { SiGraphql} from 'react-icons/si' /**GrGraphQl */
import {SiRedux} from 'react-icons/si' 
import {DiWordpress} from 'react-icons/di'
//personal
import { FaPeopleCarry } from 'react-icons/fa';
import { MdSyncProblem } from 'react-icons/md';
import { IoMdAnalytics } from 'react-icons/io';
import { FaComments } from 'react-icons/fa';
import { FaGamepad } from 'react-icons/fa';
import { FaMicroscope } from 'react-icons/fa';
import { FaRegLaughBeam } from 'react-icons/fa';
import { FaPaw } from 'react-icons/fa'; 
import { GiCoffeeCup } from 'react-icons/gi';

export const iconData = [    [{
    icon: FaHtml5,
    text: "html5"
},
{
    icon: FaCss3Alt,
    text: "css3"
},
{
    icon: IoLogoJavascript,
    text: "javaScript"
},{
    icon: FaReact,
    text: "react"
},{
    icon: SiRedux,
    text: "redux"
},{
    icon: FaNodeJs,
    text: "node.js"
},
{
    icon: DiMongodb,
    text: "mongo db"
},
{
    icon:  SiGraphql,
    text: "GraphQL"
},
{
    icon: DiPhotoshop,
    text: "photoshop"
},
{
    icon: FaSass,
    text: "Saas"
},
{
    icon: FaGitAlt,
    text: "git"
},
{
    icon: FaGithub,
    text: "github"
},
{
    icon: DiWordpress,
    text: "wordpress"
}
],[
    
    {
        icon: FaPeopleCarry,
        text: "Team player"
    },{
        icon: MdSyncProblem,
        text: "problem solver"
    },{
        icon: IoMdAnalytics,
        text: "analytical"
    },{
        icon: FaComments,
        text: "easy-going"
    },{
        icon: FaRegLaughBeam,
        text: "humorous"
    },{
        icon: FaGamepad,
        text: "gamer"
    },
    {
        icon: FaMicroscope,
        text: "biologist"
    },
    {
        icon: FaPaw,
        text: "animal lover"
    },
    {
        icon: GiCoffeeCup,
        text: "coffe lover"
    }
]];

export const projects =[
    {
        name: 'UNIQUE SHOP',
        project: 'https://unique-shop.herokuapp.com/',
        image: `${process.env.PUBLIC_URL}/images/unique.jpg`,
        code: 'https://github.com/Jolene986/unique-shop',
        tags:['React', 'Redux', 'Styled Components', 'Stripe']
    },
    {
        name: 'PLANTBOOK',
        project: 'https://plantbook-7d437.web.app/',
        image: `${process.env.PUBLIC_URL}/images/plantbook.jpg`,
        code: 'https://github.com/Jolene986/plantbook',
        tags:['React', 'Redux', 'Material UI', 'Firebase', 'Node']
    },
    {
        name: 'BIOLOGY QUIZ',
        project: 'http://bioloski-kviz.herokuapp.com/',
        image: `${process.env.PUBLIC_URL}/images/kviz.jpg`,
        code: 'https://github.com/Jolene986/zavrsni-rad',
        tags:['React', 'Node', 'Express', 'MongoDB']
        
    },
    {
        name: 'ME-TRAVEL',
        project: 'https://me-travel.netlify.com/',
        image: `${process.env.PUBLIC_URL}/images/travel.jpg`,
        code: 'https://github.com/Jolene986/me-travel',
        tags:['React', 'Contentful']
    },
    {
        name: 'FRONTEND SWAPI',
        project: 'https://swapifront.herokuapp.com/',
        image: `${process.env.PUBLIC_URL}/images/swapi.jpg`,
        code: 'https://github.com/mmarkovic85/swapi-frontend',
        tags:['React', 'Node','Sass','Webpack']
    },
    {
        name: 'NAMESTAJ 4 SOBE',
        project: 'https://namestaj4sobe.rs/',
        image: `${process.env.PUBLIC_URL}/images/4sobe.jpg`,
        tags:['WordPress'],
        code:''
    },
    {
        name: 'AREA NAMESTAJ',
        project: 'https://areanamestaj.rs/',
        image: `${process.env.PUBLIC_URL}/images/area.jpg`,
        code:'',
        tags:['WordPress']
    },
   
     {
        name: 'CDA',
        project: "",
        image: `${process.env.PUBLIC_URL}/images/cda.jpg`,
        code:'',
        tags:['SEO', 'WordPress']
    },
    {
        name: 'TC PROMENADA ',
        project: '',
        image: `${process.env.PUBLIC_URL}/images/tcp.jpg`,
        code:'',
        tags:[ 'Digital signage', 'WordPress']
    }

    
]
