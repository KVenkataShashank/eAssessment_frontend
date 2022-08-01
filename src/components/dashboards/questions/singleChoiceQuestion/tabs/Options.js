// import "../../styles/bulma-switch.css"

const OptionsTab = () => {
    return (
        <div className="box">
            <div className="columns is-vcentered p-0">
                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                    <label class="label mr-6">Shuffle</label>
                </div>
                <div className="column is-12-mobile is-9 mb-1 p-1">
                    {/* <label className="checkbox pl-2">
                        <input type="checkbox" />
                    </label> */}
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="check" />
                    </label>
                </div>
            </div>
            <div className="columns is-centered p-0">
                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                    <label class="label mr-6">Orientation</label>
                </div>
                <div className="column is-12-mobile is-9 mb-1 p-1">
                    {/* <label class="radio has-text-black is-block ml-2">
                        <input type="radio" name="type" />
                        <span className='pl-1'>Vertical</span>
                    </label> */}
                    <div className="field">
                        <input className="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" defaultChecked="checked" />
                        <label htmlFor="exampleRadioInline1">Vertical</label>
                    </div>
                    <div className="field">
                        <input className="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline2">Horizontal</label>
                    </div>
                    {/* <label class="radio has-text-black pt-1">
                        <input type="radio" name="type" />
                        <span className='pl-1'>Horizontal</span>
                    </label> */}
                </div>
            </div>
        </div>
    );
}

export default OptionsTab;