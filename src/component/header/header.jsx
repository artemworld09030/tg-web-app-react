import React from 'react';

const Header = () => {
    const tg = window.Telegram.WebApp;

    const noClose = () => {
        tg.close( )
    }

    return (
        <div className={'header'}>
            <button className={noClose}>Закрыть</button>
            <span className={'usernsme'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;