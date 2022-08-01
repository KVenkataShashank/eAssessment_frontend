import { useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import SCQPreview from "./questions/singleChoiceQuestion/Preview";

const UserSidebar = () => {

    const [isActive, setIsActive] = useState("singleQue");

    const navigate = useNavigate();

    const questionChangeHandler = (data) => {
        setIsActive(data)
    }
    // to retain the retain after refreshing
    const preview = localStorage.getItem("showPreview")
        ? JSON.parse(localStorage.getItem("showPreview"))
        : [];

    const [showPreview, setShowPreview] = useState(preview);

    useEffect(() => {
        const json = JSON.stringify(showPreview);
        window.localStorage.setItem("showPreview", json);
    }, [showPreview]);

    const handlePreview = () => {
        setShowPreview(prev => !prev);
        { showPreview ? navigate("/dashboard/questions/singleChoice/question") : navigate("/dashboard/questions/singleChoice/preview") }
    }
    
    return (
        <div>
            <div className="box m-2">
                <nav className="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="">My Drive</a></li>
                        <li><a href="">Demo Questions</a></li>
                        <li className="is-active"><a href="">Single Choice Question</a></li>
                    </ul>
                </nav>
                <div className="columns">
                    <div className="column is-6">
                        <h1 className="title is-4">Single Choice Question</h1>
                    </div>
                    {showPreview ? <div className="column is-6 has-text-right has-text-left-mobile">
                        <button className="button mx-1"><i className="fa-regular fa-star"></i></button>
                        <button className="button mx-1"><i className="fa-solid fa-arrows-rotate pr-1"></i>Preview again</button>
                        <button className="button mx-1" onClick={handlePreview}><i className="fa-solid fa-pen pr-1"></i>Edit</button>
                    </div>
                        : <div className="column is-6 has-text-right has-text-left-mobile">
                            <button className="button mx-1"><i className="fa-regular fa-star"></i></button>
                            <button className="button mx-1" onClick={handlePreview}><i className="fa-solid fa-eye pr-1"></i>Preview</button>
                            <button className="button mx-1 has-text-white has-background-grey-dark">Save</button>
                        </div>}
                    {/* <div className="column is-3 has-text-right has-text-left-mobile">
                        <button className="button mx-1"><i className="fa-regular fa-star"></i></button>
                        <button className="button mx-1" onClick={handlePreview}><i className="fa-solid fa-eye pr-1"></i>Preview</button>
                        <button className="button mx-1 has-text-white has-background-grey-dark">Save</button>
                    </div> */}
                </div>
            </div>

            <div className="columns is-centered m-2">
                <div className="column box is-3 m-3">
                    <aside className="menu">
                        {/* <p className="menu-label">
                            My Drive
                        </p>
                        <ul className="menu-list">
                            <li><a>Dashboard</a></li>
                            <li><a>Customers</a></li>
                        </ul> */}
                        <p className="menu-label">
                            My Drive
                        </p>
                        <ul className="menu-list">
                            <li>
                                <a href="" className="">Demo Questions</a>
                                <ul>
                                    <li onClick={() => { questionChangeHandler("singleQue") }}><Link className={isActive === "singleQue" && "is-active"} to="/dashboard/questions/singleChoice/question">Single Choice Question</Link></li>
                                    <li onClick={() => { questionChangeHandler("multiQue") }}><Link className={isActive === "multiQue" && "is-active"} to="/dashboard/questions/multipleChoice/question">Multiple Choice Question</Link></li>
                                    <li onClick={() => { questionChangeHandler("torFQue") }}><Link className={isActive === "torFQue" && "is-active"} to="/dashboard/questions/trueorfalse/question">True or False Question</Link></li>
                                    <li onClick={() => { questionChangeHandler("fIBQue") }}><Link className={isActive === "fIBQue" && "is-active"} to="/dashboard/questions/fillintheblanks/question">Fill in the Blanks Question</Link></li>
                                </ul>
                            </li>
                            {/* <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li> */}
                        </ul>
                        <ul className="menu-list">
                            <li>
                                <a href="" className="">Demo Tests</a>
                                <ul>
                                    <li><a href="">C++ Test</a></li>
                                    <li><a href="">Java Test</a></li>
                                    <li><a href="">Python Test</a></li>
                                </ul>
                            </li>
                            {/* <li><a>Invitations</a></li>
                            <li><a>Cloud Storage Environment Settings</a></li>
                            <li><a>Authentication</a></li> */}
                        </ul>
                        <p className="menu-label">
                            Other
                        </p>
                        <ul className="menu-list">
                            <li><a href="">Trash</a></li>
                            <li><a href="">Recent</a></li>
                            <li><a href="">Shared with me</a></li>
                        </ul>
                    </aside>
                </div>
                <div className="column is-9">
                    {showPreview ? <SCQPreview /> : <Outlet />}
                </div>
            </div>
        </div>
    )
}
export default UserSidebar