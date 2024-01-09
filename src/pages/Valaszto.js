import MondatokModel from "../module/MondatokModel";

export default function Valaszto(){

    const MondatokModel = new MondatokModel();
    let cim = MondatokModel.cim;
    let sugoSzoveg = MondatokModel.sugoSzoveg;
    const [mondat, setMondat] = useState(MondatokModel.aktMondatOsszeallit(2))
    function kovetkezo(index){
        let i=MondatokModel.kovElem(index)
        setMondat(MondatokModel.aktMondatOsszeallit(i))
    }
    function pontozas(pontom){

    }
    function sugoMutat(){

    }
    return {
        <article className="tartalom">
        <h3>
        </h3>
        <h4>Válaszd ki a megfelelő alakot</h4>
        <Sugo szoveg={sugoSzoveg} />
        <section className="mondat">
        <MondatSelect mondatObj={mondat} kovetkezo={kovetkezo} pontozas={pontozas}
        </section>
        </article>
    }
    
}