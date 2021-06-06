const specialCodes = [
    { code: 'JrSygOrion', link: 'KKLJTfLCUl8', desc: "" },
    { code: 'BwpSpecial', link: 'HqV7bwXG1FU', desc: "Thank You Korang Semua <3 <br> Semoga kita keep in touch lagi sampai bila2<br> &#10084;<br> Jadikan pengalaman bermakna kita bersama satu kelebihan yang bukan sia2 ye :)" },
    { code: 'F1TBuilding', link: 'wuuB0sAOmgA', desc: "" },
    { code: 'Migty2k18', link: 'DaOgV7u3EFo', desc: "" },
    { code: 'Fam<3Orion', link: 'JH_Ouo6G3bk', desc: "" },
    { code: '02Hero', link: '_66CmgQwTlA', desc: "" },
    { code: 'SuaraOrion', link: 'hPc4nstbcEc', desc: "" },
    { code: 'KitaYgUpdate', link: 'lANoAK9pNQI', desc: "" },
    { code: '101Comel', link: 'fkvfM1SUCEY', desc: "" },
    { code: 'Munyanyo', link: 'UOLJUMj8HUE', desc: "" },
    { code: 'FinalChapter', link: 'h0Zl0APddkE', desc: "" },
    { code: 'PeersSpecial', link: '--TAv0b4JGE', desc: "" },
    { code: 'CitraWarisan', link: 'noGA-8FoOA4', desc: "" },
    { code: 'OurGen', link: 'zqmi3AJE90A', desc: "" }
]

function checkForCode(input) {
    for (let i = 0; i < specialCodes.length; i++) {
        if (input === specialCodes[i].code) {
            return true
        }
    }
    return false
}

function getObject(input) {
    for (let i = 0; i < specialCodes.length; i++) {
        if (input === specialCodes[i].code) {
            return specialCodes[i];
        }
    }
}


export { checkForCode, getObject }