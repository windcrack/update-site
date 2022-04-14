import './contacts.css'

export default function Contact(){
    return(
        <div className="contact">
            <span className="contact__text">
                Позвонить нам:
            </span>
            <ul className="contact__phone">
                <li><a className='contact__link' href="/">+7 903 649-07-88</a></li>
                <li><a className='contact__link' href="/">+7 481 263-07-88</a></li>
            </ul>
        </div>
    )
}