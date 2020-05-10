import React from 'react';
import packageJson from '../../package.json';

const Footer = () => {
    return (
        <footer className="footer">
            <div>Version: {packageJson.version}</div>
            <a target="/" href="https://github.com/ahsanz024/react-bmi-calculator">https://github.com/ahsanz024/react-bmi-calculator</a>
        </footer>
    )
}

export default Footer;