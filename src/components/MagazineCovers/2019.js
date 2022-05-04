import August from '../../images/2019/Aug2019.jpg';
import September from '../../images/2019/Sept2019.jpg';
import October from '../../images/2019/Oct2019.jpg';
import November from '../../images/2019/Nov2019.jpg';
import December from '../../images/2019/Dec2019.jpg';

const Twenty19 = () => {
    return (
        <div class="magYear">
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_1b9c56614fee47e08b8d972e6607b452.pdf" download>           
                <img src={August} alt="August2019" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_da36f17927cb4681998267a4874ecc6d.pdf" download>
                <img src={September} alt="September2019" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_3b0a7abfec7846a0b99306ab3c0a4dcf.pdf" download>                
                <img src={October} alt="October2019" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_4e5da22aa39441c1b233564b78472345.pdf" download>
                <img src={November} alt="November2019" />
            </a>
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/e8a143_34d968ad12f94b0aba33c80b637a06c5.pdf" download>
                <img src={December} alt="December20" />
            </a>
        </div>
    )
}

export default Twenty19;