const SCQPreview = () => {
    return (
        <div className="box">
            <div className="columns is-flex-mobile is-vcentered has-background-white-ter" style={{ borderRadius: "5px" }}>
                <div className="column is-9">
                    <p className="has-text-black has-text-weight-medium is-size-5">Single Choice Question</p>
                </div>
                <div className="column is-3 has-text-right">
                    <span className="button is-static is-rounded is-outlined mr-2 is-small has-text-black">Points: 4</span>
                    <span className="button is-static is-rounded is-outlined is-small has-text-black">No answer</span>
                </div>
            </div>
            <div><p className="has-text-black is-size-5 mb-2">Who was the first man on the moon?</p></div>
            <div className="columns is-vcentered">
                <div className="column is-9 is-10-mobile m-0">
                    <div className="is-hidden-tablet">
                        <figure className="image is-128x128">
                            <img src="https://cdn.mos.cms.futurecdn.net/iw85gV7SH2LsRAZA3czVAB.jpg"></img>
                        </figure>
                    </div>
                    <div className="field">
                        <input className="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline1">Neil Armstrong</label>
                    </div>
                    <div className="field mt-4">
                        <input className="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline2">K.V.Shashank</label>
                    </div>
                    <div className="field mt-4">
                        <input className="is-checkradio" id="exampleRadioInline3" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline3">Aftabhusen Kazi</label>
                    </div>
                    <div className="field mt-4">
                        <input className="is-checkradio" id="exampleRadioInline4" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline4">Aayushi gawande</label>
                    </div>
                    <div className="field mt-4">
                        <input className="is-checkradio" id="exampleRadioInline5" type="radio" name="exampleRadioInline" />
                        <label htmlFor="exampleRadioInline5">Pradeep Namdev</label>
                    </div>

                </div>
                <div className="column is-3 is-2-mobile is-hidden-mobile">
                    <div className="card">
                        <div className="card-image">
                            <figure className="image is-3by2">
                                <img src="https://cdn.mos.cms.futurecdn.net/iw85gV7SH2LsRAZA3czVAB.jpg"></img>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div><button className="button mt-2">Submit all responses</button></div>

        </div>
    );
}

export default SCQPreview;