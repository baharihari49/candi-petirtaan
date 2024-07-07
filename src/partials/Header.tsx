import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Dialog, DialogPanel } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { IconChevronDown, IconWorld } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { t, i18n } = useTranslation();

    const navigation = [
        { name: t('navigation.home'), href: '/' },
        { name: t('navigation.gallery'), href: '/gallery' },
        { name: t('navigation.facility'), href: '/facility' },
        { name: t('navigation.about'), href: '/about-us' },
    ];

    return (
        <header className="bg-gray-900"> {/* Changed background color to #3C381E */}
            <nav className="w-full flex items-center justify-between py-6 px-4 sm:px-0" aria-label="Global">
                <div className="flex lg:flex-1">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Jolotundo</span>
                        <span className="text-lg font-semibold text-white">Candi Petirtaan Jolotundo</span>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-12">
                    {navigation.map((item) => (
                        <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-white hover:text-gray-200">
                            {item.name}
                        </a>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="flex items-center gap-2 bg-[#3C381E] hover:bg-[#171F13]">
                                <IconWorld className="h-5 w-5 text-white" />
                                <span className="text-white">{i18n.language.toUpperCase()}</span>
                                <IconChevronDown className="h-4 w-4 text-white" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-[#3C381E]">
                            <DropdownMenuItem
                                onClick={() => { i18n.changeLanguage("en"); }}
                                className="hover:bg-[#010101] text-white"
                            >
                                English
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                onClick={() => { i18n.changeLanguage("id"); }}
                                className="hover:bg-[#010101] text-white"
                            >
                                Indonesia
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </nav>
            <Dialog className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
                <div className="fixed inset-0 z-10" />
                <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                    <div className="flex items-center justify-between">
                        <a href="#" className="-m-1.5 p-1.5 ">
                            <span className="sr-only">Jolotundo</span>
                            <span className="text-lg font-semibold text-white" style={{ marginRight: '5px' }}>Candi Petirtaan Jolotundo</span>

                        </a>
                        <button
                            type="button"
                            className="-m-2.5 rounded-md p-2.5 text-gray-700"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <span className="sr-only">Close menu</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                    </div>
                    <div className="mt-6 flow-root">
                        <div className="-my-6 divide-y divide-gray-500/10">
                            <div className="space-y-2 py-6">
                                {navigation.map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-yellow-900"
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                            <div className="py-6">
                                <DropdownMenu>
                                <DropdownMenuContent align="end" className="w-48 bg-[#3C381E]">
                                        <DropdownMenuItem
                                            onClick={() => { i18n.changeLanguage("en"); }}
                                            className="hover:bg-[#010101] text-white"
                                        >
                                            English
                                        </DropdownMenuItem>
                                        <DropdownMenuItem
                                            onClick={() => { i18n.changeLanguage("id"); }}
                                            className="hover:bg-[#010101] text-white"
                                        >
                                            Indonesia
                                        </DropdownMenuItem>
                                    </DropdownMenuContent>
                                </DropdownMenu>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </Dialog>
        </header>
    );
};
