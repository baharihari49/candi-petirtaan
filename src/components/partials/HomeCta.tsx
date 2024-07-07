import { IconBrandWhatsapp } from "@tabler/icons-react";
import { Button } from "../ui/button";
import { GoogleMapEmbed } from "./GoogleMapEmbed";
import { useTranslation } from "react-i18next";

export const HomeCta = () => {
    const { t } = useTranslation();

    return (
        <div className="relative flex flex-col justify-center items-center" style={{ backgroundColor: '#E8D3B8', minHeight: 'calc(100vh - 4rem)' }}>
            <div className="max-w-sm mx-auto sm:max-w-7xl grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16 px-4 sm:px-0">
                <div className="bg-[#E8D3B8] rounded-lg overflow-hidden shadow-lg text-center boxShadow: '0 0 20px rgba(0,0,0,0.5)', borderRadius: '10px'">
                    <div className="p-8 mt-5">
                        <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl mb-8">{t('about.title')}</h2>
                        <p className="text-white text-base">
                            {t('about.desc')}
                        </p>
                        <a href="https://wa.me/6281217067080" target="_blank" rel="noopener noreferrer">
                            <Button className="mt-4 w-48 text-sm bg-green-600 hover:bg-green-700 mt-8">
                                <IconBrandWhatsapp className="h-5 w-5 mr-2" />
                                Contact Us
                            </Button>
                        </a>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <div className="p-8">
                        <GoogleMapEmbed lat={-7.6092343} lng={112.5928383} />
                    </div>
                </div>
            </div>
        </div>
    );
};
