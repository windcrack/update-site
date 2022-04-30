import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ServiceOnGroup from '../ServiceOnGroup';
import PreambulsGroup from "../PreambulsGrop";
import Subcommittees from "../Subcommittees";
import './tabs.css'

const dataService = [
    {name: 'Секретарь', aLot: "1 год", clear: "не менее 1(одного) года", subInfo: "псевдо-латинский текст, который используется для веб дизайна."},
    {name: 'Казначей', aLot: "1 год", clear: "2(два) года чистоты", subInfo: "Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий."},
    {name: 'Литком', aLot: "1 год", clear: "от 6(шести) месяцев", subInfo: "Товарищи! консультация с широким активом влечет за собой процесс внедрения и модернизации существенных финансовых и административных условий."},
]

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
                <PreambulsGroup />
            </TabPanel>
            <TabPanel>
                <Subcommittees />
            </TabPanel>
        </Tabs>
    )
}