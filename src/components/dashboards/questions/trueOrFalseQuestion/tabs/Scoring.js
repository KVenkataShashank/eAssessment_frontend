import "../../styles/style.css"

const TFScoringTab = () => {
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
                            <label htmlFor="exampleRadioInline2">Points per answer</label>
                            <span className="is-block has-text-black is-size-7">Every selected score will be scored individually. The learner gets points for every correct answer.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="box ">
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <p className='has-text-black has-text-weight-bold'>Correct</p>
                    </div>
                    <div className='column is-3 is-6-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold'>Answers</p>
                    </div>
                    <div className='column is-3 is-3-mobile has-text-centered m-0'>
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
                    <div className='column is-3 is-6-mobile m-0'>
                        <p>True</p>
                    </div>
                    <div className='column is-3 is-3-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" defaultValue="4" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 has-text-centered'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInlin4" type="radio" name="exampleRadioInlin" />
                            <label htmlFor="exampleRadioInlin4" />
                        </div>
                    </div>
                    <div className='column is-3 is-6-mobile m-0'>
                        <p>False</p>
                    </div>
                    <div className='column is-3 is-3-mobile has-text-centered m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" defaultValue="0" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default TFScoringTab;