import { Button } from "@/components/ui/button";
import { CustomLightbox } from "@/components/ui/custom-lighbox";
import { IconBowlSpoon, IconHome, IconHome2, IconLayoutBoard, IconToiletPaper } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SlideImage } from "yet-another-react-lightbox";

export const Facility = () => {

    const { t } = useTranslation();
    const [facility, setFacility] = useState<string>("facility.toilet");

    const facilities: Record<string, JSX.Element> = {
        "facility.toilet": <IconToiletPaper className="h-4 w-4 mr-2" />,
        "facility.guesthouse": <IconHome className="h-4 w-4 mr-2" />,
        "facility.information": <IconLayoutBoard className="h-4 w-4 mr-2" />,
        "facility.gazebo": <IconHome2 className="h-4 w-4 mr-2" />,
        "facility.foodcourt": <IconBowlSpoon className="h-4 w-4 mr-2" />,
    }

    const images: Record<string, Array<SlideImage>> = {
        "facility.toilet": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/toilet.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/toilet_1.jpeg",
                height: 256,
                width: 384,
            }
        ],
        "facility.guesthouse": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/guest_house.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/guesthouse_1.jpeg",
                height: 256,
                width: 384,
            }
        ],
        "facility.gazebo": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/gazebo.jpg",
                height: 256,
                width: 384,
            }
        ],
        "facility.foodcourt": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/foodcourt.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/foodcourt_1.jpg",
                height: 256,
                width: 384,
            },
        ],
        "facility.information": [
            {
                src: "/src/components/images/informasi/WhatsApp Image 2024-07-07 at 12.27.12.jpeg",
                height: 256,
                width: 384,
            },
            {
                src: "/src/components/images/informasi/WhatsApp Image 2024-07-07 at 12.27.13 (1).jpeg",
                height: 256,
                width: 384,
            },
            {
                src: "/src/components/images/informasi/WhatsApp Image 2024-07-07 at 12.27.13.jpeg",
                height: 256,
                width: 384,
            },
        ]
    }

    return (
        <div style={{ backgroundColor: '#713F12', paddingTop: '5rem', paddingBottom: '8rem'}}>
            <div className="max-w-7xl mx-auto px-4 sm:px-0">
                <h2 className="text-xl font-bold tracking-tight text-white sm:text-4xl mb-8 pt-5">{t('facility.title')}</h2>
                <div className="grid grid-cols-12 gap-4" style={{ backgroundColor: '#713F12', padding: '1rem', boxShadow: '0 0 20px rgba(0,0,0,0.5)', borderRadius: '10px' }}>
                    <div className="col-span-12 sm:col-span-3 space-y-0 sm:space-y-2 space-x-2 sm:space-x-0 flex flex-row sm:flex-col items-center sm:items-start justify-start overflow-x-scroll sm:overflow-hidden text-white">
                        {
                            Object.keys(facilities).map((e) =>
                                <Button 
                                    key={e}
                                    className={`w-56 flex items-center justify-start hover:text-white transition-colors duration-300 ${facility === e ? 'text-white' : 'text-black'}`} 
                                    onClick={() => setFacility(e)} 
                                    variant={facility === e ? 'default' : 'outline' }
                                >
                                    {facilities[e]} {t(`${e}.title`)}
                                </Button>
                            )
                        }
                    </div>
                    <div className="col-span-12 sm:col-span-9 space-y-4 text-white">
                        <div className="max-w-xl space-y-4 rounded-md">
                            <p className="text-xl font-semibold">{t(`${facility}.title`)}</p>
                            {/* <img className="h-64 w-96 object-cover rounded-lg" src={images[facility]} alt="" /> */}
                            <CustomLightbox images={images[facility]} />
                            <p>{t(`${facility}.desc`)}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
    
    
    
    
    
    

    
    
    
    
    
}