AOS.init();

const dataDoEvento = new Date("Mar 12, 2023 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diasAteOEvento = distanciaAteEvento / (1000 * 60 * 60 * 24);
    alert(diasAteOEvento);
    
}, 1000);