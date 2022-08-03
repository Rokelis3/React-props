import letter from '../images/letter.png';
import phoneImg from '../images/phone.png';

const Contacts = ({img, name, phone, email}) => {
    return(
        <div className="contact-card">
            <img src={img} alt="Kitten"/>
            <h3>{name}</h3>
            <div className="info-group">
                <img src={phoneImg} alt="Phone icon"/>
                <p>{phone}</p>
            </div>
            <div className="info-group">
                <img src={letter} alt="Mail icon"/>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Contacts;