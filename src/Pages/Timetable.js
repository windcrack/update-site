import GroupName from "../components/GroupName";
import React, { useState } from 'react';
const groupData = [
    {
        name: "Феникс",
        addressGroup: "ул. 25 Сентября, 30В",
        infoMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2301.6914183452077!2d32.07298641600323!3d54.76781207498948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ce587834966977%3A0x26732cbcfc5dfc7d!2z0YPQuy4gMjUg0KHQtdC90YLRj9Cx0YDRjywgMzDQkiwg0KHQvNC-0LvQtdC90YHQuiwg0KHQvNC-0LvQtdC90YHQutCw0Y8g0L7QsdC7LiwgMjE0MDMx!5e0!3m2!1sru!2sru!4v1649429348071!5m2!1sru!2sru",
        info: [
            {weekDay: 'Вторник', timeLong: '1 час 30 минут', timeStart: '19:00', timeEnd: '20:30', subInfo: false},
            {weekDay: 'Среда', timeLong: '1 час 30 минут', timeStart: '18:00', timeEnd: '19:30', subInfo: false},
            {weekDay: 'Чертверг', timeLong: '1 час 30 минут', timeStart: '19:00', timeEnd: '20:30', subInfo: false},
            {weekDay: 'Суббота', timeLong: '1 час 30 минут', timeStart: '15:00', timeEnd: '16:30', subInfo: "Рабочее собрание: проходит в это день недели в начале месяца"},
            {weekDay: 'Воскресенье', timeLong: '1 час 30 минут', timeStart: '15:00', timeEnd: '16:30', subInfo: false},
        ],
    },
    {
        name: "Маяк",
        addressGroup: "ул.Кашена 1, 7-й этаж, офис 702 ( бизнесцентр К1 ).",
        infoMap: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2300.1452146246183!2d32.04421751600415!3d54.79499127291716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46cef7f655e0728f%3A0xb3b4b151462f4d94!2z0YPQuy4g0JrQsNGI0LXQvdCwLCAxLCDQodC80L7Qu9C10L3RgdC6LCDQodC80L7Qu9C10L3RgdC60LDRjyDQvtCx0LsuLCAyMTQwMTI!5e0!3m2!1sru!2sru!4v1649429394590!5m2!1sru!2sru",
        info:[
            {weekDay: 'Понедельник', timeLong: '1 час 30 минут', timeStart: '19:00', timeEnd: '20:25', subInfo: false},
            {weekDay: 'Среда', timeLong: '1 час 30 минут', timeStart: '19:00', timeEnd: '20:25', subInfo: false},
            {weekDay: 'Пятница', timeLong: '1 час 30 минут', timeStart: '19:00', timeEnd: '20:25', subInfo: false},
            {weekDay: 'Суббота', timeLong: '1 час 30 минут', timeStart: '18:00', timeEnd: '19:30', subInfo: false},
            {weekDay: 'Воскресенье', timeLong: '1 час 30 минут', timeStart: '18:00', timeEnd: '19:30', subInfo: false},
        ],
    },
    {
        name: "Собрание группы Смоленск",
        addressGroup: "",
        infoMap: "",
        info:[
            {weekDay: 'Каждый день', timeLong: '1 час 30 минут', timeStart: '21:00', timeEnd: '22:15', subInfo: "Рабочее собрание: каждую субботу в начале месяца после группы"},
        ]
    }
]



export default function Timetable(){

    return(
        <section className="container">
            <h1 className="title title__main">Расписание групп смоленского сообщества</h1>
            {groupData.map((item, idx) => <GroupName
                key={idx}
                groupName={item.name}
                address={item.addressGroup}
                infoGroup={item.info}
                mapGroup={item.infoMap}
            />)}
            {/* <Modal active={modalActive} setActive={setModalActive}>
                {groupData.map((item, i) =>
                    <p key={i}>{item.info.subInfo !== '' ? item.info.subInfo : null }</p>
                )}
            </Modal> */}
        </section>
    )
}
