import React, {useEffect, useState} from 'react';
import './Header.css';

export default (props) => {
    const [blackHeader, setBlackHeader] = useState({});

    useEffect(() => {

        const scroll = () => {
            if(window.scrollY > 10){
                setBlackHeader({background: '#141414'});

            } else {
                setBlackHeader({});
            }
        }

        window.addEventListener('scroll', scroll);

        return () => {
            window.removeEventListener('scroll', scroll);
        }

    }, [])



    return (
        <header style={blackHeader}>
            <a className="logo" href="/">
                <img className="logo" src="https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png"></img>
            </a>

            <a className="user" href="/">
                <img className="logo" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"></img>
            </a>
        </header>
    )
}