

const navigation = {
    solutions: [
        { name: 'Marketing', href: '#' },
        { name: 'Analytics', href: '#' },
        { name: 'Commerce', href: '#' },
        { name: 'Insights', href: '#' },
    ],
    support: [
        { name: 'Pricing', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Guides', href: '#' },
        { name: 'API Status', href: '#' },
    ],
    company: [
        { name: 'About', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Jobs', href: '#' },
        { name: 'Press', href: '#' },
        { name: 'Partners', href: '#' },
    ],
    legal: [
        { name: 'Claim', href: '#' },
        { name: 'Privacy', href: '#' },
        { name: 'Terms', href: '#' },
    ],
    social: [
        {
            name: 'Facebook',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'Instagram',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
        {
            name: 'X',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                </svg>
            ),
        },
        {
            name: 'YouTube',
            href: '#',
            icon: (props: any) => (
                <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
                    <path
                        fillRule="evenodd"
                        d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z"
                        clipRule="evenodd"
                    />
                </svg>
            ),
        },
    ],
}

export const Footer = () => {
    return (
        
        <footer className="bg-gray-900 py-8 relative overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-16 pointer-events-none" style={{ zIndex: -1 }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fill-opacity="1" d="M0,160L26.7,149.3C53.3,139,107,117,160,133.3C213.3,149,267,203,320,229.3C373.3,256,427,256,480,229.3C533.3,203,587,149,640,160C693.3,171,747,245,800,245.3C853.3,245,907,171,960,138.7C1013.3,107,1067,117,1120,149.3C1173.3,181,1227,235,1280,229.3C1333.3,224,1387,160,1413,128L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            </div>
            <div className="mx-auto max-w-7xl px-4 sm:px-0">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8 relative z-10">
                    {/* Column 1: Alamat / Address */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-semibold leading-6 text-gray-300">Alamat / Address</h3>
                        <p className="text-sm leading-6 text-gray-300">
                            Area Hutan, Hutan, Kec. Trawas, Kabupaten Mojokerto, Jawa Timur 61375
                        </p>
                    </div>

                    {/* Column 2: Media Social / Social Media */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-semibold leading-6 text-gray-300">Media Social / Social Media</h3>
                        <div className="flex flex-col space-y-2">
                            <a href="https://www.youtube.com/@balaipelestariankebudayaanXI" className="text-gray-400 hover:text-gray-500">YouTube</a>
                            <a href="https://www.instagram.com/bpk_wilayah_11/" className="text-gray-400 hover:text-gray-500">Instagram</a>
                            <a href="https://www.facebook.com/profile.php?id=100011432788435&locale=ga_IE&paipv=0&eav=AfZTacgLsOwukGLgpv397e7b5ilve38TgbqefCs1DXt_JiC3EtznYzDZ3IBfKnubO6A&_rdr" className="text-gray-400 hover:text-gray-500">Facebook</a>
                        </div>
                    </div>

                    {/* Column 3: Hubungi Kami / Contact Us */}
                    <div className="space-y-8">
                        <h3 className="text-sm font-semibold leading-6 text-gray-300">Hubungi Kami / Contact Us</h3>
                        <p className="text-sm leading-6 text-gray-300">
                            Balai Pelestarian Kebudayaan Wilayah XI,
                            Direktorat Jenderal Kebudayaan Republik Indonesia
                            Jl. Majapahit No. 141-143, Trowulan, Mojokerto, Jawa Timur.
                            Email: bpk.wil11@kemendikbud.go.id,
                            purbakala.jatim@yahoo.com
                            Telepon/ Fax: (0321)495515
                        </p>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-700 pt-8">
                    <p className="text-xs leading-5 text-gray-500">&copy; 2024 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>

            {/* Wave effect */}
            
        </footer>
    );
};
