const controle=document.getElementById("control");
const filtro=document.getElementById("filter");
const img=document.getElementById("cachorro");

const getFilter= () => filtro.value ?? 'none';

const getIntesify = () => controle.value ?? 0;

const getMetric = filter => {
    if(filter == 'blur') return 'px';
    if(filter == 'hue-rotate') return 'deg';
    return '%';
}

const setFilter = () => {
    const selectedFilter = getFilter()
    const intensity = getIntesify()
    const metric = getMetric(selectedFilter)

    console.log(`${selectedFilter}(${intensity}${metric})`)
    img.style.filter=`${selectedFilter}(${intensity}${metric})`
}
filtro.addEventListener("click", setFilter)
controle.addEventListener("click",setFilter)