export default function Copyright(){
    const data = new Date();
    let getYear = data.getFullYear()
    return(
        <>
            <span className="footer__coper">
                Сайт Смоленского сообщества 2020 - {getYear}
            </span>
        </>
    )
}