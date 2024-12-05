import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Script from 'next/script';
import Image from 'next/image';
import LoadingIcons from 'react-loading-icons';
import { AiOutlineSend } from 'react-icons/ai';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Footer from './ui/footer';
import Navbar from './ui/header';

interface LayoutProps {
  children?: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {



  return (
    <>
      <Head>
        <title>Seylan Ai Image Generator</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossOrigin="anonymous"></link>
      </Head>
      <Script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></Script>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossOrigin="anonymous"></Script>


      <main className={`container-fluid m-0 p-0`} style={{ margin: '0px !important' }}>
        <Navbar />
        {children}
        <Footer />
      </main>

    </>
  );
}
