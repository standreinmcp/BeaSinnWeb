import './Service.css'; 

interface Props { 
    backgroundImage: string;
    label: string;
    key: number
}

const Service = ({backgroundImage, label, key}: Props) => { 
    return ( 
        <div className="serviceContainer">
            <div key={key} className='serviceContainerImage' style={{backgroundImage: `url(${backgroundImage})`}}> 
                <span className='serviceLabel'>{label}</span>
            </div>
        </div>
    )
}

export default Service; 