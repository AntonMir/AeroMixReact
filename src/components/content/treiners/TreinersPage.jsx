// react
import React from 'react'
// route
import { useParams } from "react-router-dom"
//components (carousel)
import TreinersCarousel from '@treiners/treinersCarousel/TreinersCarousel.jsx';
// components (treiners)
import VasilcovaViktoria from '@components/content/treiners/vasilcovaViktoria/VasilcovaViktoria.jsx'
import ZasipkinaOksana from '@components/content/treiners/zasipkinaOksana/ZasipkinaOksana.jsx'
import ZasipkinaJanna from '@components/content/treiners/zasipkinaJanna/ZasipkinaJanna.jsx'
import BondarenkoLidija from '@components/content/treiners/bondarenkoLidija/BondarenkoLidija.jsx'
import BojkovaKristina from '@components/content/treiners/bojkovaKristina/BojkovaKristina.jsx'
import LevinaAlexandra from '@components/content/treiners/levinaAlexandra/LevinaAlexandra.jsx'
import UdinIgor from '@components/content/treiners/udinIgor/UdinIgor.jsx'
// styles
import './treinersPage.scss'


export default function TreinersPage() {

    const currentTreiner = useParams();

	return (
        <section className="treinersPage">
            {currentTreiner.name === "vasilcovaViktoria" && <VasilcovaViktoria />}
            {currentTreiner.name === "zasipkinaOksana" && <ZasipkinaOksana />}
            {currentTreiner.name === "zasipkinaJanna" && <ZasipkinaJanna />}
            {currentTreiner.name === "levinaAlexandra" && <LevinaAlexandra />}
            {currentTreiner.name === "bondarenkoLidija" && <BondarenkoLidija />}
            {currentTreiner.name === "bojkovaKristina" && <BojkovaKristina />}
            {currentTreiner.name === "udinIgor" && <UdinIgor />}
            <TreinersCarousel />
        </section>
	)
}