'use client'
import React, { Component } from "react";
import Image from 'next/image';
import styles from './header.module.css'

export default class Header extends Component {
    render() {
        return (
            <header className="sticky top-0 left-0 right-0 z-50">
                <nav id={styles.site_header} className="text-white backdrop-blur px-4 lg:px-6 py-5">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="/" className="flex items-center">
                            <span className="self-center text-2xl font-bold whitespace-nowrap dark:text-white">
                                V
                                <span className="font-normal">C</span>
                            <span className="text-[var(--accent-color)]">.</span></span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="https://www.linkedin.com/in/vcalderonoyarce/" target="_blank" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                <Image src="/img/linkedin.svg" alt="LinkedIn" width="20" height="20"></Image>
                            </a>
                            <a href="https://www.linkedin.com/in/vcalderonoyarce/" target="_blank" className="hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 lg:px-4 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
                                <Image src="/img/threads_logo.svg" alt="LinkedIn" width="20" height="20"></Image>
                            </a>

                        </div>

                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="/" className="block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Inicio</a>
                                </li>
                                <li>
                                    <a href="/about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Acerca de</a>
                                </li>
                                <li>
                                    <a href="/blog" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Blog</a>
                                </li>
                                <li>
                                    <a href="/contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent">Contacto</a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </header>
        )
    }
}
