import "../../styles/style.css"

const FBScoringTab = () => {
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
                        <input className="input is-fullwidth-mobile" type="number" defaultValue="0" />
                    </div>
                </div>
            </div>
            <div className="box">
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold has-text-centered'></p>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold'>Possible Responses</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold'>Value</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <p className='has-text-black has-text-weight-bold'>Score</p>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                        <p>Gap1</p>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Correct Solution</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Solution Text</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Alternatives</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Alternative1</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Alternative2</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                        <p>Gap2</p>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Correct Solution</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Solution Text</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Alternatives</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Alternative1</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Alternative2</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                        <p>Gap3</p>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Correct Solution</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Solution Text</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-2-mobile m-0 has-text-centered'>
                    </div>
                    <div className='column is-4 is-4-mobile m-0'>
                        <p>Alternatives</p>
                    </div>
                    <div className='column is-3 is-4-mobile m-0'>
                        <p>Alternative1</p>
                    </div>
                    <div className='column is-3 is-2-mobile m-0'>
                        <input className="input is-small" style={{ width: "100px" }} type="number" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default FBScoringTab;