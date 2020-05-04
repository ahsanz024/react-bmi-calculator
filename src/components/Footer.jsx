import React from 'react';
import packageJson from '../../package.json';

const Footer = () => {
    return (
        <footer className="Footer">
            <div>Version: {packageJson.version}</div>
            <a href="https://github.com/ahsanz024/react-bmi-calculator">https://github.com/ahsanz024/react-bmi-calculator</a>
        </footer>
    )
}

export default Footer;