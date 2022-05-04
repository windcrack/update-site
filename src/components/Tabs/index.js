import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServiceOnGroup from '../ServiceOnGroup';
import PreambulsGroup from "../PreambulsGrop";
import Subcommittees from "../Subcommittees";
import './tabs.css';
// images
import img1 from '../../assets/img/pream/1.png';
import img2 from '../../assets/img/pream/2.png';
import img3 from '../../assets/img/pream/3.png';
import img4 from '../../assets/img/pream/4.png';
import img5 from '../../assets/img/pream/5.png';
import img6 from '../../assets/img/pream/6.png';
import img7 from '../../assets/img/pream/7.png';
import img8 from '../../assets/img/pream/8.png';
import img9 from '../../assets/img/pream/9.jpeg';
import img10 from '../../assets/img/pream/10.png';

const dataService = [
    {name: 'Секретарь', aLot: "1 год", clear: "не менее 1(одного) года", subInfo: "псевдо-латинский текст, который используется для веб дизайна."},
    {name: 'Казначей', aLot: "1 год", clear: "2(два) года чистоты", subInfo: "Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий."},
    {name: 'Литком', aLot: "1 год", clear: "от 6(шести) месяцев", subInfo: "Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий."},
]
const preambuls = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]

export default function TabsMember(){
    return(
        <Tabs className="tabs-lists">
            <TabList className="tabs-nav">
                <Tab selectedClassName="tab-active" className="tabs-item">Возможные служения на группах</Tab>
                <Tab selectedClassName="tab-active" className="tabs-item">Преамбулы группы</Tab>
                <Tab selectedClassName="tab-active" className="tabs-item">Подкомитеты</Tab>
            </TabList>
            <TabPanel>
                <ServiceOnGroup data={dataService} />
            </TabPanel>
            <TabPanel>
                <PreambulsGroup number={preambuls} />
            </TabPanel>
            <TabPanel>
                <Subcommittees />
            </TabPanel>
        </Tabs>
    )
}