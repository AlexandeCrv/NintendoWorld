

function clickar(){
    let text = document.getElementById('inpt').value
    let h1 = document.getElementById('pp')
    let capa = document.getElementById('imgp')
    let link = document.getElementById('link')

    if(text == 'donkey kong 1' || text == 'Donkey kong' || text == 'donkey kong'){
        h1.innerHTML = `O gorila Donkey Kong e seu sobrinho Diddy Kong enquanto eles partem para recuperar seu tesouro de bananas roubado do crocodilo King K. Rool e seu exército, os Kremlings . `
        capa.src = 'dk1.png'
        link.href = 'https://www.arcadeflix.com.br/2021/02/donkey-kong-country-snes.html'
        document.getElementById('section').style.height = '600px'
        document.body.style.height = '880px'
        document.getElementById('link').style.opacity = ' 5'
    }

    else if(text == 'donkey kong 2' || text == 'Donkey kong 2' || text == 'DONKEY KONG 2' ){
        h1.innerHTML = `A história gira em torno de Diddy Kong e sua namorada, Dixie Kong, que tentam resgatar Donkey Kong depois de ser sequestrado pelo vilão King K. Rool.`
        capa.src = 'dk2.png'
        link.href = 'https://www.arcadeflix.com.br/2021/02/donkey-kong-country-2-diddys-kong-quest-snes.html'
        document.getElementById('link').style.opacity = ' 5'
    }

    else if(text == 'donkey kong 3' || text == 'Donkey kong 3' || text == 'DONKEY KONG 3'){
        h1.innerHTML = 'Meses após que a Ilha dos Crocodilos é engolida pelo mar, Donkey Kong & Diddy Kong foram explorar as Ilhas DK, mas demoram muito a voltar por dois dias e Dixie Kong começa a procura deles entrando numa massa continental começando na caverna de Wrinkly Kong.'
        capa.src = 'dk3.png'
        link.href = 'https://www.arcadeflix.com.br/2021/04/donkey-kong-country-3-snes.html'
        document.getElementById('section').style.height = '600px'
        document.body.style.height = '900px'
        document.getElementById('link').style.opacity = ' 5'
    }

    else if (text == 'top gear' || text == 'Top gear' || text == 'TOP GUEAR'){
        h1.innerHTML = 'Top Gear foi um simulador de corridas lançado para o inesquecível Super Nintendo em 1992, pela Kemco.'
        capa.src =  'topgear.png'
        link.href = 'https://www.arcadeflix.com.br/2021/04/top-gear-snes.html'
        document.getElementById('link').style.opacity = ' 5'
    }

    else if (text == 'super mario bros' || text == 'Super mario bros' || text == 'SUPER MARIO BROS' || text == 'super mario' || text == 'MARIO' || text == 'mario' || text == 'mario bros' || text == 'mario bross' || text == 'Mario Bros' || text == 'MARIO Bros' || text == 'MARIO bros' || text == 'MARIO BROS'){
        h1.innerHTML = 'Mario e Luigi são encanadores em Nova York. Os dois acabam viajando por labirinto subterrâneo e vão parar em um universo paralelo. Enquanto Luigi se vê preso pelo violento Bowser, Mario terá que ajudar uma princesa a salvar seu reino e libertar seu irmão!'
        capa.src = 'smb.png'
        link.href = 'https://www.arcadeflix.com.br/2024/03/super-mario-bros-peach-edition-nes.html'
        document.getElementById('link').style.opacity = ' 5'
        document.getElementById('section').style.height = '600px'
        document.body.style.height = '900px'
    }

    else if (text == 'super mario world' || text == 'Super mario world' || text == 'SUPER MARIO BROS' || text == 'mario world' || text == 'Mario world'){
        h1.innerHTML = 'Na história de Super Mario World, Mario está em Dinossaur Land e após libertar Yoshi, ele descobre que a ilha foi invadida por Bowser (Rei Koopa) e seus filhos. Cabe então a Mario e Luigi, derrotar Bowser, destruindo os castelos que ele e seus filhos construíram, salvar a princesa e recuperar a Dinossaur Land.'
        capa.src = 'smw.png'
        link.href = 'https://www.arcadeflix.com.br/2021/10/super-mario-world.html'

        document.getElementById('link').style.opacity = ' 5'
    }

    else if(text == 'chrono trigger' ||text == 'Chrono Trigger' ||text == 'crono trigger'  ||text == 'Crono Trigger' || text == 'Crono'){
        h1.innerHTML = 'Chrono Trigger tem lugar em uma linha do tempo fictícia alternativa da Terra, e os personagens tem que viajar através do tempo para lutar contra os inimigos, fazer amigos, aliados de ganho, reunir equipamentos e obter mágica para sua busca.'
        capa.src = 'ct.png'
        link.href = 'https://www.arcadeflix.com.br/2023/05/chrono-trigger-snes.html'
        document.getElementById('link').style.opacity = ' 5'

    }

    else if (text == 'biblioteca' || text == 'Biblioteca'){
        h1.innerHTML = '<strong> <a   href = # > Donkey Kong  </a> <br> <a   href = # > Super Mario </a> <br> <a   href = # > Top gear </a> <br> <a href = # >   Chrono Trigger </a> <strong> ' 
        capa.src = 'moedas.png' 
        link.href = ''
        link.innerHTML = ""
        document.getElementById('pp').style.color = 
        document.getElementById('')


    }

    else {
        alert('Esse jogo não esta na nossa biblioteca  :( ')
    }
    
    
 }
