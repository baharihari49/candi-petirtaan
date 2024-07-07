import { useTranslation } from "react-i18next";

export default function HomeStat() {
    const { t } = useTranslation();

    return (
        <div>
            {/* Bagian HomeStat */}
            <div className="p-4 bg-yellow-900">
                <div className="mx-auto max-w-screen-xl">
                    <div className="w-full">
                        <h1 className="mt-0 mb-4 text-2xl font-semibold text-center text-white">{t('home.stat.title')}</h1>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-base leading-6">
                            <div className="w-full">
                                <p className="mb-0 text-center text-white">
                                    {t('home.stat.desc_1')}
                                </p>
                            </div>
                            <div className="w-full">
                                <p className="mb-0 text-center text-white">
                                    {t('home.stat.desc_2')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bagian HomeTime */}
            <div className="p-4" style={{ backgroundColor: "#F2E0C8" }}>
                <div className="mx-auto max-w-screen-xl">
                    <div className="w-full">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-base leading-6">
                            {/* Kolom 1: Jam Operasional */}
                            <div className="w-full md:col-span-1 mt-14">
                                <h1 className="mt-0 mb-4 text-2xl font-semibold text-center text-gray-900">{t('home.time.title')}</h1>
                                <p className="mb-4 text-center text-gray-900">{t('home.time.desc')}</p>
                            </div>
                            
                            {/* Kolom 2: Gambar */}
                            <div className="w-full md:col-span-1 flex items-center justify-center hover:scale-110  shadow-lg rounded-lg ">
                                <img src="https://asset-2.tstatic.net/tribunnewswiki/foto/bank/images/Petirtaan-Jolotundo-1.jpg" alt="Petirtaan Jolotundo" className="max-w-full rounded-lg" />
                            </div>
                            
                            {/* Kolom 3: Tiket Masuk */}
                            <div className="w-full md:col-span-1 mt-10">
                                <h1 className="mt-0 mb-4 text-2xl font-semibold text-center text-gray-900">{t('home.time.subtitle')}</h1>
                                <p className="mb-2 text-center text-gray-900">{t('home.time.desc-1')}</p>
                                <p className="mb-4 text-center text-gray-900">{t('home.time.desc-2')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
