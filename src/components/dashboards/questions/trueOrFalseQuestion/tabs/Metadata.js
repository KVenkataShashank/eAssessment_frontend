const TFMetadataTab = () => {
    return (
        <div className="box">
            <div className="columns is-centered is-vcentered p-0">
                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                    <label class="label mr-6">Typical learning time</label>
                </div>
                <div className="column is-12-mobile is-9 mb-1 p-1">
                    <div className="pt-2 is-inline-block">
                        <p className="mr-3 is-inline">Minutes</p>
                        <input className="input is-size-7" style={{ maxWidth: "100px" }} type="number" defaultValue="0" />
                    </div>
                    <div className="is-inline-block">
                        <p className="mx-3 is-inline">Seconds</p>
                        <input className="input is-size-7" style={{ maxWidth: "100px" }} type="number" defaultValue="10" />
                    </div>
                </div>
            </div>
            <div className="columns is-centered is-vcentered p-0">
                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                    <label class="label mr-6">Difficulty</label>
                </div>
                <div className="column is-12-mobile is-9 mb-1 p-1">
                    <div className="select is-normal">
                        <select style={{ width: "300px" }}>
                            <option>Very easy</option>
                            <option selected>Easy</option>
                            <option>Medium</option>
                            <option>Difficult</option>
                            <option>Very difficult</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TFMetadataTab;