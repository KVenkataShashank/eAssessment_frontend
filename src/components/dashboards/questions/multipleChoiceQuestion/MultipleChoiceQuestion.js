import { Link, Outlet } from "react-router-dom";
import { useState } from "react"

const MultipleChoiceQuestion = () => {

    const [isActive, setIsActive] = useState("questionTab")

    const tabChangeHandler = (data) => {
        setIsActive(data);

    }

    return (
        <div>
            <div className="tabs is-toggle is-fullwidth box">
                <ul>
                    <li onClick={() => { tabChangeHandler("questionTab") }} className={isActive === "questionTab" && "is-active"}>
                        <Link to="question">
                            <span class="icon is-small has-text-primary"><i class="fas fa-question-circle" aria-hidden="true"></i></span>
                            <span class="has-text-weight-medium ">Question and Answer</span>
                        </Link>
                    </li>
                    <li onClick={() => { tabChangeHandler("scoreTab") }} className={isActive === "scoreTab" && "is-active"}>
                        <Link to="scoring">
                            <span class="icon is-small has-text-primary"><i class="fas fa-check-circle" aria-hidden="true"></i></span>
                            <span class="has-text-weight-medium ">Scoring</span>
                        </Link>
                    </li>
                    <li onClick={() => { tabChangeHandler("feedbackTab") }} className={isActive === "feedbackTab" && "is-active"}>
                        <Link to="feedback">
                            <span class="icon is-small has-text-primary"><i class="fas fa-comments" aria-hidden="true"></i></span>
                            <span class="has-text-weight-medium ">Feedback</span>
                        </Link>
                    </li>
                    <li onClick={() => { tabChangeHandler("optionsTab") }} className={isActive === "optionsTab" && "is-active"}>
                        <Link to="options">
                            <span class="icon is-small has-text-primary"><i class="fa fa-cog" aria-hidden="true"></i></span>
                            <span class="has-text-weight-medium ">Options</span>
                        </Link>
                    </li>
                    <li onClick={() => { tabChangeHandler("metadataTab") }} className={isActive === "metadataTab" && "is-active"}>
                        <Link to="metadata">
                            <span class="icon is-small has-text-primary"><i class="fas fa-info-circle" aria-hidden="true"></i></span>
                            <span class="has-text-weight-medium ">Metadata</span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default MultipleChoiceQuestion;