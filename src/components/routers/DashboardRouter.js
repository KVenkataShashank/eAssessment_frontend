import { Routes, Route } from "react-router-dom"
import UserSidebar from "../dashboards/UserSidebar"
import SingleChoiceQuestion from "../dashboards/questions/singleChoiceQuestion/SingleChoiceQuestion"
import SCQPreview from "../dashboards/questions/singleChoiceQuestion/Preview"
import DashboardHome from "../dashboards/home/DashboardHome"
import QuestionTab from "../dashboards/questions/singleChoiceQuestion/tabs/Question"
import ScoringTab from "../dashboards/questions/singleChoiceQuestion/tabs/Scoring"
import FeedbackTab from "../dashboards/questions/singleChoiceQuestion/tabs/Feedback"
import OptionsTab from "../dashboards/questions/singleChoiceQuestion/tabs/Options"
import MetadataTab from "../dashboards/questions/singleChoiceQuestion/tabs/Metadata"
import MultipleChoiceQuestion from "../dashboards/questions/multipleChoiceQuestion/MultipleChoiceQuestion"
import MulQuestionTab from "../dashboards/questions/multipleChoiceQuestion/tabs/Question"
import MulScoringTab from "../dashboards/questions/multipleChoiceQuestion/tabs/Scoring"
import MulFeedbackTab from "../dashboards/questions/multipleChoiceQuestion/tabs/Feedback"
import MulOptionsTab from "../dashboards/questions/multipleChoiceQuestion/tabs/Options"
import MulMetadataTab from "../dashboards/questions/multipleChoiceQuestion/tabs/Metadata"
import TrueorFalseQuestion from "../dashboards/questions/trueOrFalseQuestion/TrueOrFalseQuestion"
import TFQuestionTab from "../dashboards/questions/trueOrFalseQuestion/tabs/Question"
import TFScoringTab from "../dashboards/questions/trueOrFalseQuestion/tabs/Scoring"
import TFFeedbackTab from "../dashboards/questions/trueOrFalseQuestion/tabs/Feedback"
import TFOptionsTab from "../dashboards/questions/trueOrFalseQuestion/tabs/Options"
import TFMetadataTab from "../dashboards/questions/trueOrFalseQuestion/tabs/Metadata"
import FillinBlanksQuestion from "../dashboards/questions/fillinBlanksQuestion/FillinBlanksQuestion"
import FBQuestionTab from "../dashboards/questions/fillinBlanksQuestion/tabs/Question"
import FBScoringTab from "../dashboards/questions/fillinBlanksQuestion/tabs/Scoring"
import FBFeedbackTab from "../dashboards/questions/fillinBlanksQuestion/tabs/Feedback"
import FBMetadataTab from "../dashboards/questions/fillinBlanksQuestion/tabs/Metadata"

const DashboardRouter = () => {

    return (
        <div>
            <Routes>
                <Route path="" element={<UserSidebar />}>
                    <Route path="" element={<DashboardHome />} />
                    <Route path="questions">
                        <Route path="singleChoice" element={<SingleChoiceQuestion />}>
                            <Route path="question" element={<QuestionTab />} />
                            <Route path="scoring" element={<ScoringTab />} />
                            <Route path="feedback" element={<FeedbackTab />} />
                            <Route path="options" element={<OptionsTab />} />
                            <Route path="metadata" element={<MetadataTab />} />
                            <Route path="preview" element={<SCQPreview />} />
                        </Route>
                        <Route path="multipleChoice" element={<MultipleChoiceQuestion />}>
                            <Route path="question" element={<MulQuestionTab />} />
                            <Route path="scoring" element={<MulScoringTab />} />
                            <Route path="feedback" element={<MulFeedbackTab />} />
                            <Route path="options" element={<MulOptionsTab />} />
                            <Route path="metadata" element={<MulMetadataTab />} />
                        </Route>
                        <Route path="trueorfalse" element={<TrueorFalseQuestion />}>
                            <Route path="question" element={<TFQuestionTab />} />
                            <Route path="scoring" element={<TFScoringTab />} />
                            <Route path="feedback" element={<TFFeedbackTab />} />
                            <Route path="options" element={<TFOptionsTab />} />
                            <Route path="metadata" element={<TFMetadataTab />} />
                        </Route>
                        <Route path="fillintheblanks" element={<FillinBlanksQuestion />}>
                            <Route path="question" element={<FBQuestionTab />} />
                            <Route path="scoring" element={<FBScoringTab />} />
                            <Route path="feedback" element={<FBFeedbackTab />} />
                            <Route path="metadata" element={<FBMetadataTab />} />
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    )
}
export default DashboardRouter