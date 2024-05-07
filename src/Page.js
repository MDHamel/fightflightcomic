import './ComicPage.css'
import {
    useParams
  } from 'react-router-dom';


export function ComicPage({ComicData}) {
    const { id } = useParams();
    document.title = "Fight/Flight » " + ComicData[id].title;

    const idHandler = (altered_id) => {
        if(altered_id < 0){
            return 0;
        }
        else if(altered_id >= ComicData.length){
            return  ComicData.length - 1;
        }
        return altered_id;
    };
    
    return (
        <div id="ComicPage" className="my-4">
            <img id="ComicImage" className="img-fluid p-0 mx-auto mb-3 d-block" src={`${process.env.PUBLIC_URL}${ComicData[id].image}`} />
            <div id="ChapterSelect" className="d-flex my-4 justify-content-center fs-1">
                <a href="/comic/0"><i class="bi bi-skip-backward-fill"></i></a>
                <a href={`/comic/${idHandler(parseInt(id) - 1)}`}><i class="bi bi-caret-left-fill"></i></a>
                <figure className="mx-2" />
                <a href={`/comic/${idHandler(parseInt(id) + 1)}`}><i class="bi bi-caret-right-fill"></i></a>
                <a href={`/comic/${ComicData.length-1}`}><i class="bi bi-skip-forward-fill"></i></a>
            </div>
            <section className="container w-75">
                <p id="ComicTitle" className="fs-4 fw-bold mb-0 p-0">{ComicData[id].title}</p>
                <p id="ComicDate" className="small m-0">on {ComicData[id].date}</p>
                <p id="ComicChapter" className="small">Chapter: <span className='text-link'>{ComicData[id].chapter}</span> pg {ComicData[id].page}</p>
                {ComicData[id].desc.split("\n").map((text,i)=> {return <p id="ComicDesc" key={i} className="fs-6">{text}</p>})}
            </section>
        </div>
    )
}