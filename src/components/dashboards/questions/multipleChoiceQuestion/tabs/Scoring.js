import "../../styles/style.css";

const MulScoringTab = () => {
    return (
        <>
            <div className="box">
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Maximum Score</label>
                    </div>
                    <div className="column is-12-mobile is-1 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="number" defaultValue="4" />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Minimum Score</label>
                    </div>
                    <div className="column is-12-mobile is-1 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="number" defaultValue="0.0" />
                    </div>
                </div>

                <div className="columns is-centered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Scoring Method</label>
                    </div>
                    <div className="column is-12-mobile is-10 mb-1 p-1">
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" defaultChecked="checked" />
                            <label htmlFor="exampleRadioInline1">All answers must be correct</label>
                            <span className="is-block has-text-black is-size-7">Only answer which is fully correct will be scored with the maximum score.</span>
                        </div>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline" />
                            <label htmlFor="exampleRadioInline2">Points per answer (selected answers)</label>
                            <span className="is-block has-text-black is-size-7">Every selected answer will be scored individually. The learner gets points for every correct and selected answer. Incorrectly selected answers will subtract points.</span>
                        </div>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline3" type="radio" name="exampleRadioInline" />
                            <label htmlFor="exampleRadioInline3">Points per answer (selected and unselected answers)</label>
                            <span className="is-block has-text-black is-size-7">Every selected option will be scored individually. The learner gets points for every correct and selected answer as well as for every incorrect and unselected answer. For each correct answer, which was not selected as well as for each incorrect answer, which was selected, points will be subtracted.</span>
                        </div>
                        {/* <label class="radio has-text-black is-block ml-2">
                            <input type="radio" name="type" />
                            <span className='pl-1'>All answers must be correct</span>
                            <span className="is-block is-size-7 pt-1">Only answer which is fully correct will be scored with the maximum score.</span>
                        </label>
                        <label class="radio has-text-black pt-4">
                            <input type="radio" name="type" />
                            <span className='pl-1'>Points per answer (selected answers)</span>
                            <span className="is-block is-size-7 pt-1">Every selected answer will be scored individually. The learner gets points for every correct and selected answer. Incorrectly selected answers will subtract points.</span>
                        </label>
                        <label class="radio has-text-black pt-4">
                            <input type="radio" name="type" />
                            <span className='pl-1'>Points per answer (selected and unselected answers)</span>
                            <span className="is-block is-size-7 pt-1">Every selected option will be scored individually. The learner gets points for every correct and selected answer as well as for every incorrect and unselected answer. For each correct answer, which was not selected as well as for each incorrect answer, which was selected, points will be subtracted.</span>
                        </label> */}
                    </div>
                </div>
            </div>
            <div className="box">
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Points per answer</label>
                    </div>
                    <div className="column is-12-mobile is-1 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="number" defaultValue="1" />
                    </div>
                </div>
                <div className="columns is-centered is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Points reduction</label>
                    </div>
                    <div className="column is-12-mobile is-10 mb-1 p-1">
                        {/* <label class="checkbox">
                            <input type="checkbox" /> for correct answers
                            <span className="is-block is-size-7 pt-1">For each correct and unselected answer, as well as for each incorrect and selected answer, partial points will be deducted.</span>
                        </label> */}
                        <label className="switch">
                            <input type="checkbox" />
                            <span className="check mr-2" /> for correct answers
                        </label>
                        <p className="is-size-7">For each correct and unselected answer, as well as for each incorrect and selected answer, partial points will be deducted.</p>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold has-text-centered'>Correct</p>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold'>Answers</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <p className='has-text-black has-text-weight-bold'>Score</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <p className='has-text-black has-text-weight-bold'>Score</p>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin3" type="radio" name="exampleRadioInlin" defaultChecked="checked" />
                            <label htmlFor="exampleRadioInlin3" />
                        </div>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p>Neil Armstrong</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin4" type="radio" name="exampleRadioInlin" />
                            <label htmlFor="exampleRadioInlin4" />
                        </div>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p>Java is Object Oriented Language</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin5" type="radio" name="exampleRadioInlin" />
                            <label htmlFor="exampleRadioInlin5" />
                        </div>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p>CDAC Works for 10 National Level Clients in India for India</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin6" type="radio" name="exampleRadioInlin" />
                            <label htmlFor="exampleRadioInlin6" />
                        </div>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p>India and China relations are not good because of Pakistan and America... That is causing border tension</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin7" type="radio" name="exampleRadioInlin" />
                            <label htmlFor="exampleRadioInlin7" />
                        </div>
                    </div>
                    <div className='column is-6 is-5-mobile m-0'>
                        <p>Python is a popular programming language</p>
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                    <div className='column is-2 is-2-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className="columns mt-5">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6 pt-2">Maximum number</label>
                    </div>
                    <div className="column is-12-mobile is-10 mb-1 p-1">
                        <input className="input" style={{ width: "104px" }} type="number" defaultValue="2" />
                        <span className='pl-2'>selected answers</span>
                        <span className="is-block is-size-7 pt-1">If the learner selects more answers, no points will be awarded. Enter 0 if no restriction to the number of selected answers has to be applied.</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default MulScoringTab;