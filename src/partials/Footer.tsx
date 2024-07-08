import footerImage from '../components/images/svg/Vector.png'; // Pastikan path ke gambar footerImage sudah benar
import { useTranslation } from 'react-i18next';

export const Footer = () => {

  const { t } = useTranslation();

  return (
    <footer
      className="relative overflow-hidden pt-96 xl:pt-40 bg-[#F2E0C8]"
      style={{
        backgroundImage: `url(${footerImage})`, // Gunakan sintaks url() untuk menampilkan gambar sebagai background
        backgroundSize: 'cover', // Sesuaikan backgroundSize jika perlu
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-0 mb-10">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8 z-10">
          {/* Column 1: Alamat / Address */}
          <div className="space-y-8">
            <h3 className="text-sm font-semibold leading-6 text-gray-300">
             {t("footer.address.title")}
            </h3>
            <p className="text-sm leading-6 text-gray-300">
              {t("footer.address.address")}
            </p>
          </div>

          {/* Column 2: Media Social / Social Media */}
          <div className="space-y-8">
            <h3 className="text-sm font-semibold leading-6 text-gray-300">
              {t("footer.mediaSocial.title")}
            </h3>
            <div className="flex flex-col space-y-2">
              <a
                href="https://www.youtube.com/@balaipelestariankebudayaanXI"
                className="text-gray-400 hover:text-gray-500"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/bpk_wilayah_11/"
                className="text-gray-400 hover:text-gray-500"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100011432788435&locale=ga_IE&paipv=0&eav=AfZTacgLsOwukGLgpv397e7b5ilve38TgbqefCs1DXt_JiC3EtznYzDZ3IBfKnubO6A&_rdr"
                className="text-gray-400 hover:text-gray-500"
              >
                Facebook
              </a>
            </div>
          </div>

          {/* Column 3: Hubungi Kami / Contact Us */}
          <div className="space-y-8">
            <h3 className="text-sm font-semibold leading-6 text-gray-300">
              {t("footer.contactUs.title")}
            </h3>
            <p className="text-sm leading-6 text-gray-300">
              {t("footer.contactUs.content")}
            </p>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-xs leading-5 text-gray-500">
            &copy; 2024 Your Company, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
