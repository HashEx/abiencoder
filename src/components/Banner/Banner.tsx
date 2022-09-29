import React, { useCallback, useMemo, useState } from 'react';
import useLocalStorage from '../../hooks/useLocalStorage';

import { getRandomIntInclusive } from '../../utils';

import CloseCircle from '../Icon/CloseCircle';

import './Banner.css';

const banners = [{
    id: 1,
    src: '/banners/maximize_banner_1030px.jpg',
    href: 'https://app.analytex.today/service/lending-protocols/optimization?utm_source=abi'
},{
    id: 2,
    src: '/banners/tgbot_banner_1030px.jpg',
    href: 'https://t.me/CheckMyTokenBot',
}]

const getBanner = (hiddenBanners: number[]) => {
    const activeBanners = banners.filter(banner => !hiddenBanners.includes(banner.id))
    if (!activeBanners.length) return null;
    const bannerIndex = getRandomIntInclusive(0, activeBanners.length - 1);
    return activeBanners[bannerIndex];
}

const Banner = () => {
    const [hiddenBanners, setHiddenBanners] = useLocalStorage<number[]>('HIDDEN_BANNERS', []);

    const banner = useMemo(() => getBanner(hiddenBanners), [hiddenBanners])

    const hideBanner = useCallback(() => {
        if (banner) {
            setHiddenBanners([...hiddenBanners, banner.id])
        }
    }, [banner])

    if (!banner) return null;

    return (
        <div className='banner'>
            <a href={banner.href} target="_blank">
                <img src={banner.src} />
            </a>
            <div className="banner__close" onClick={hideBanner}>
                <CloseCircle />
            </div>
        </div>
    )
}

export default Banner;