import './Contact.css'; 

interface Props { 
    icon: any; 
    label: string;
    key: number, 
    iconStyle: {
        width: number,
        height: number
    }
}

const Contact = ({key, icon, label, iconStyle}: Props) => { 
    return ( 
        <div className='contactContainer' key={key}> 
            <img className='contactIcon' src={icon} alt={label} style={{...iconStyle}}/>
            <span className='contactLabel'>{label}</span>
        </div>
    )
}

export default Contact; 