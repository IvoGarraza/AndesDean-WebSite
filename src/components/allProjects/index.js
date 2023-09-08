import palais from '../../assets/images/Imagenes/palais1.png'
import custom from '../../assets/images/Imagenes/customHomes.png'
import housing from '../../assets/images/Imagenes/housing1.jpg'
import coca from '../../assets/images/Imagenes/cocacola1.png'
import gables from '../../assets/images/Imagenes/housing2.jpg'
import suncity from '../../assets/images/Imagenes/suncity1.jpg'
import CocaCola from './CocaCola'
import CustomHomes from './CustomHomes'
import HousingDelParque from './HousingDelParque'
import GablesRiversOaks from './GablesRiversOaks'
import SunCityMesquite from './SunCityMesquite'

export const projects = [
    {
        title:'Palais 550 Townhomes',
        type:'STRUCTURAL CALCULATIONS',
        location:'Midvale, Utah, US',
        period:'2022',
        team:'Andes Dean and Partners',
        component:<CocaCola/>,
        img:palais
    },
    {
        title:'Custom Homes',
        type:'STRUCTURAL CALCULATIONS',
        location:'Utah and Wyoming',
        period:'2021',
        team:'Andes Dean and Partners',
        component:<CustomHomes/>,
        img:custom
    },
    {
        title:'Housing del parque',
        type:'LIGHT STEEL FRAMING',
        location:'Córdoba, Argentina',
        period:'2020',
        team:'Andes Dean and Partners',
        component:<HousingDelParque/>,
        img: housing
    },
    {
        title:'Coca Cola Company Warehouse Extension',
        type:'PROJECTS & CONTRUCTION INSPECTIONS',
        location:'Córdoba, Argentina',
        perid:'2018',
        team:'Andes Dean and Partners',
        component:<CocaCola/>,
        img: coca
    },
    {
        title:'Gables Rivers Oaks',
        type:'BIM MODELING FOR DDs & COORDINATION',
        location:'Houston, Texas, US',
        period:'2011',
        team:'WSP Engeneering',
        component:<GablesRiversOaks/>,
        img: gables
    },
    {
        title:'Sun City Mesquite',
        type:'WOOD FRAMING DESIGN',
        location:'Mezquite, Nevada, US',
        period:'2007',
        team:'Pulte Homes Nevada',
        component:<SunCityMesquite/>,
        img: suncity
    }
]