import { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "../../styles/style.css";

const FBFeedbackTab = () => {

    const editorRef = useRef(null);
    const [fields, setFields] = useState([{ value: null }]);


    function handleAdd() {
        const values = [...fields];
        values.push({ value: null });
        setFields(values);
    }

    function handleRemove(i) {
        const values = [...fields];
        values.splice(i, 1);
        setFields(values);
    }
    return (
        <>
            <p className="has-text-black is-size-5">Feedback for whole question</p>
            <div className="box">
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Correct answer title</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" defaultValue="Awesome! You did it!" placeholder="Enter title" />
                    </div>
                </div>
                <div className="columns p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Correct answer feedback</label>
                    </div>
                    <div className="column is-12-mobile is-9 mb-1 p-1">
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>Your answer is right</p>"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'bold italic underline blocks | undo redo | alignleft aligncenter alignright alignjustify table image media code | bullist numlist outdent indent | removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Wrong answer title</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" defaultValue="Oops! Better luck next time!" placeholder="Enter title" />
                    </div>
                </div>
                <div className="columns p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Wrong answer feedback</label>
                    </div>
                    <div className="column is-12-mobile is-9 mb-1 p-1">
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>Your answer is wrong</p>"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'bold italic underline blocks | undo redo | alignleft aligncenter alignright alignjustify table image media code | bullist numlist outdent indent | removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                </div>
            </div>
            <p className="has-text-black is-size-5">Individual Feedback</p>
            <div>
                {fields.map((field, idx) => {
                    return (
                        <div key={`${field}-${idx}`} className="box">
                            <div className="columns is-vcentered p-0">
                                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                                    <label class="label mr-6">Title</label>
                                </div>
                                <div className="column is-12-mobile is-4 mb-1 p-1">
                                    <input className="input is-fullwidth-mobile" type="text" defaultValue="Negative marking" placeholder="Enter title" />
                                </div>
                            </div>
                            <div className="columns is-vcentered p-0">
                                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                                    <label class="label mr-6">Conditions</label>
                                </div>
                                <div className="column is-12-mobile is-9 mb-1 p-1">
                                    <div>
                                        <div className="select is-normal">
                                            <select style={{ width: "150px" }} className="is-inline">
                                                <option selected>Score</option>
                                                <option>Answer</option>
                                                <option>Attempts</option>
                                            </select>
                                        </div>
                                        <div className="select is-normal">
                                            <select style={{ width: "60px" }} className="is-inline mx-1">
                                                <option>&#61;</option>
                                                <option>&#62;</option>
                                                <option>&#8805;</option>
                                                <option selected>&#60;</option>
                                                <option>&#8804;</option>
                                            </select>
                                        </div>
                                        <div className="is-inline">
                                            <input className="input" style={{ width: "200px" }} type="number" defaultValue="4" />
                                        </div>
                                        <div className="is-inline is-size-5 m-1 is-clickable">
                                            <span className="icon has-text-info" style={{ marginTop: "7px" }}><i className="fas fa-circle-plus" aria-hidden="true"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="columns p-0">
                                <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                                    <label class="label mr-6">Feedback</label>
                                </div>
                                <div className="column is-12-mobile is-8 mb-1 p-1">
                                    <Editor
                                        apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                                        selector='textarea#image-tools'
                                        onInit={(evt, editor) => editorRef.current = editor}
                                        initialValue="<p>Your answer is wrong</p>"
                                        init={{
                                            height: 300,
                                            menubar: false,
                                            plugins: [
                                                'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                                'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                                'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                            ],
                                            toolbar: 'bold italic underline blocks | undo redo | alignleft aligncenter alignright alignjustify table image media code | bullist numlist outdent indent | removeformat | help',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                        }}
                                    />
                                </div>
                                <div className='has-text-centered-mobile'>
                                    <span class="icon is-clickable has-text-info" style={{ marginTop: "5px" }}><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                                    <span class="icon is-clickable has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                                    <span class="icon is-clickable has-text-info" onClick={() => handleRemove()}><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                                </div>
                            </div>
                            {/* <div className='mb-1'></div> */}
                        </div>
                    );
                })}
                <div className='has-text-centered'>
                    <button className='button has-background-grey-dark has-text-white' onClick={() => handleAdd()}>Add new feedback</button>
                </div>
                {/* <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Title</label>
                    </div>
                    <div className="column is-12-mobile is-9 mb-1 p-1">
                        <input className="input" type="text" style={{ width: "500px" }} defaultValue="Negative marking" placeholder="Enter title" />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Conditions</label>
                    </div>
                    <div className="column is-12-mobile is-9 mb-1 p-1">
                        <div>
                            <div className="select is-normal">
                                <select style={{ width: "150px" }} className="is-inline">
                                    <option selected>Score</option>
                                    <option>Answer</option>
                                    <option>Attempts</option>
                                </select>
                            </div>
                            <div className="select is-normal">
                                <select style={{ width: "60px" }} className="is-inline mx-1">
                                    <option>&#61;</option>
                                    <option>&#62;</option>
                                    <option>&#8805;</option>
                                    <option selected>&#60;</option>
                                    <option>&#8804;</option>
                                </select>
                            </div>
                            <div className="is-inline">
                                <input className="input" style={{ width: "200px" }} type="number" defaultValue="4" />
                            </div>
                            <div className="is-inline is-size-5 m-1 is-clickable">
                                <span className="icon" style={{ marginTop: "7px" }}><i className="fas fa-circle-plus" aria-hidden="true"></i></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="columns p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Feedback</label>
                    </div>
                    <div className="column is-12-mobile is-8 mb-1 p-1">
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            initialValue="<p>Your answer is wrong</p>"
                            init={{
                                height: 300,
                                menubar: false,
                                plugins: [
                                    'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
                                    'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
                                    'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
                                ],
                                toolbar: 'bold italic underline blocks | undo redo | alignleft aligncenter alignright alignjustify table image media code | bullist numlist outdent indent | removeformat | help',
                                content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                            }}
                        />
                    </div>
                    <div>
                        <span class="icon is-clickable" style={{ marginTop: "5px" }}><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                        <span class="icon is-clickable"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                        <span class="icon is-clickable"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                    </div>
                </div> */}
            </div>
        </>
    );
}

export default FBFeedbackTab;