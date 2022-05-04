import February from '../../images/2022/Feb2022.jpg';
import March from '../../images/2022/March2022.jpg';
import April from '../../images/2022/April2022.jpg';

const Twenty22 = () => {
    return (
        <div class="magYear">
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/d0423d_bdeb1a4ee5934cbab66cd989da873f0a.pdf" download><img src={February} alt="February2022" /></a>
            <a target="_blank" rel="noreferrer" href="https://5a762039-a2a6-4fbe-8d01-b55e1afce865.filesusr.com/ugd/d0423d_1c4693518a9b4bfeb6a12dbd03e347af.pdf" download><img src={March} alt="March2022" /></a>
            <a target="_blank" rel="noreferrer" href="https://acrobat.adobe.com/link/review?uri=urn:aaid:scds:US:e0c93944-4d90-3afa-ae4d-4756dd03a655" download><img src={April} alt="April2022" /></a>
        </div>
    )
}

export default Twenty22;