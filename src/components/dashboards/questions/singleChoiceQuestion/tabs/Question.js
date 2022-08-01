import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "../../styles/style.css"

const QuestionTab = () => {

    const editorRef = useRef(null);

    return (
        <>
            {/* <p class="is-size-4 has-text-weight-semibold has-text-black">Question</p> */}
            <div className="box">
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Title</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" defaultValue="Single Choice Question" placeholder="Enter title" />
                    </div>
                </div>
                <div className="columns p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Question</label>
                    </div>
                    <div className="column is-12-mobile is-10 mb-1 p-1">
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
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
                {/* <div className="columns is-centered p-0">
                    <div className="column is-12-mobile is-3 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Type</label>
                    </div>
                    <div className="column is-12-mobile is-9 mb-1 p-1">
                        <p class="has-text-black">Choice interaction</p>
                        <label class="radio has-text-black">
                            <input type="radio" name="type" />
                            <span className='pl-1'>Single Choice</span>
                        </label>
                    </div>
                </div> */}
                <div className="columns p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6 mt-1">Score</label>
                    </div>
                    <div className="column is-12-mobile is-1 mb-1 p-1">
                        <input className="input" type="number" defaultValue="4" />
                    </div>
                </div>
                <div className='columns p-0'>
                    <div className='column is-12-mobile is-2 is-hidden-mobile'>
                    </div>
                    <div className='column is-12-mobile is-10 mb-1 p-1'>
                        <p class="is-size-6">Question score. To define answer specific scores, please select the tab "Scoring"</p>
                    </div>
                </div>
            </div>

            <div className='box'>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile'>
                    <div className='column is-2 is-3-mobile m-0 is-hidden-mobile'>
                        <p className='has-text-black has-text-weight-bold has-text-centered'>Correct</p>
                    </div>
                    <div className='column is-3 is-1-mobile has-text-centered has-text-black m-0 is-hidden-desktop is-hidden-tablet'>
                        <span className="icon has-text-info"><i class="fas fa-check fa-lg" aria-hidden="true"></i></span>
                    </div>
                    <div className='column is-7 is-10-mobile m-0 has-text-centered-mobile'>
                        <p className='has-text-black has-text-weight-bold'>Answers</p>
                    </div>
                    <div className='column is-3 is-2-mobile has-text-centered m-0 is-hidden-mobile'>
                        <p className='has-text-black has-text-weight-bold'>Actions</p>
                    </div>
                    <div className='column is-3 is-1-mobile has-text-centered has-text-black m-0 is-hidden-desktop is-hidden-tablet'>
                        <span className="icon has-text-info"><i class="fas fa-tasks fa-lg" aria-hidden="true"></i></span>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile has-text-centered'>
                    <div className='column is-2 is-1-mobile m-0'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline1" type="radio" name="exampleRadioInline" defaultChecked="checked" />
                            <label htmlFor="exampleRadioInline1" />
                        </div>
                        {/* <label class="radio has-text-black">
                            <input type="radio" name="type" />
                        </label> */}
                    </div>
                    <div className='column is-7 is-10-mobile m-0'>
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 200,
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
                    <div className='column is-3 is-1-mobile has-text-centered m-0'>
                        <div>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile has-text-centered'>
                    <div className='column is-2 is-1-mobile m-0'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline2" type="radio" name="exampleRadioInline"/>
                            <label htmlFor="exampleRadioInline2" />
                        </div>
                    </div>
                    <div className='column is-7 is-10-mobile m-0'>
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 200,
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
                    <div className='column is-3 is-1-mobile m-0'>
                        <div>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile has-text-centered'>
                    <div className='column is-2 is-1-mobile m-0'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline3" type="radio" name="exampleRadioInline" />
                            <label htmlFor="exampleRadioInline3" />
                        </div>
                    </div>
                    <div className='column is-7 is-10-mobile m-0'>
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 200,
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
                    <div className='column is-3 is-1-mobile m-0'>
                        <div>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile has-text-centered'>
                    <div className='column is-2 is-1-mobile m-0'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline4" type="radio" name="exampleRadioInline" />
                            <label htmlFor="exampleRadioInline4" />
                        </div>
                    </div>
                    <div className='column is-7 is-10-mobile m-0'>
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 200,
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
                    <div className='column is-3 is-1-mobile m-0'>
                        <div>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns is-vcentered m-0 p-0 is-flex-mobile has-text-centered'>
                    <div className='column is-2 is-1-mobile m-0'>
                        <div className="field">
                            <input className="is-checkradio" id="exampleRadioInline5" type="radio" name="exampleRadioInline" />
                            <label htmlFor="exampleRadioInline5" />
                        </div>
                    </div>
                    <div className='column is-7 is-10-mobile m-0'>
                        <Editor
                            apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                            selector='textarea#image-tools'
                            onInit={(evt, editor) => editorRef.current = editor}
                            init={{
                                height: 200,
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
                    <div className='column is-3 is-1-mobile m-0'>
                        <div>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-up fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-chevron-down fa-lg" aria-hidden="true"></i></span>
                            <span class="icon has-text-info"><i class="fas fa-circle-minus fa-lg" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns'>
                    <div className='column is-2 is-1-mobile m-0 is-hidden-mobile'>
                    </div>
                    <div className='column is-7 is-12-mobile m-0 has-text-centered has-text-centered-mobile'>
                        <button className='button'>
                            <span className="icon has-text-info"><i className="fas fa-circle-plus fa-lg" aria-hidden="true"></i></span>
                            <span>New answer</span>
                        </button>
                    </div>
                    <div className='column is-3 is-1-mobile m-0 is-hidden-mobile'>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QuestionTab;