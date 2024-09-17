import './ComicPage.css'
import {
    useParams, Link
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
            <img id="ComicImage" className="p-0 mx-auto mb-3 d-block" src={`${process.env.PUBLIC_URL}${ComicData[id].image}`} alt={`Fight/Flight Comic ${ComicData[id].chapter} pg ${ComicData[id].page}`}/>
            <div id="ChapterSelect" className="d-flex my-4 justify-content-center fs-2">
                <Link to="/comic/0" className='rounded-5 px-3 py-2' onClick={() => { if(window.innerWidth > 1024) window.scrollTo(0, 0) }}><i className="bi bi-skip-backward-fill"></i></Link>
                <Link to={`/comic/${idHandler(parseInt(id) - 1)}`} className='rounded-5 px-3 py-2' onClick={() => { if(window.innerWidth > 1024) window.scrollTo(0, 0) }}><i className="bi bi-caret-left-fill"></i></Link>
                <figure className="mx-2" />
                <Link to={`/comic/${idHandler(parseInt(id) + 1)}`} className='rounded-5 px-3 py-2' onClick={() => { if(window.innerWidth > 1024) window.scrollTo(0, 0) }}><i className="bi bi-caret-right-fill"></i></Link>
                <Link to={`/comic/${ComicData.length-1}`} className='rounded-5 px-3 py-2' onClick={() => { if(window.innerWidth > 1024) window.scrollTo(0, 0) }}><i className="bi bi-skip-forward-fill"></i></Link>
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