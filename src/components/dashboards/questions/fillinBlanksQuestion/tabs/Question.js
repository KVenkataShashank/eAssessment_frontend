import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import "../../styles/style.css"

const FBQuestionTab = () => {

    const editorRef = useRef(null);

    return (
        <>
            <div className="box">
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Title</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" defaultValue="Fill in the Blanks Question" placeholder="Enter title" />
                    </div>
                </div>
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
                <div>
                    <button className='button'>
                        <span className="icon has-text-info"><i className="fas fa-circle-plus fa-lg" aria-hidden="true"></i></span>
                        <span>Add gap</span>
                    </button>
                </div>
                <div className='mt-4'>
                    <Editor
                        apiKey='hrkl4137fuc3t9bf9y83rmmmh5aiex27hcqr06w79i6h5omr'
                        selector='textarea#image-tools'
                        onInit={(evt, editor) => editorRef.current = editor}
                        initialValue='<p><img width="10px" height="10px "src="https://cdn-icons.flaticon.com/png/512/1155/premium/1155696.png?token=exp=1657255514~hmac=d85a28804adb199fec86d2f3c4061017"> was the first man on the moon?</p>'
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
            <div className='box'>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-12 mb-1 p-1 has-text-left-mobile">
                        <p className='has-text-black is-size-5'>Edit gap</p>
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Solution</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" placeholder="Enter option" />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Alternatives</label>
                    </div>
                    <div className="column is-12-mobile is-4 mb-1 p-1">
                        <input className="input is-fullwidth-mobile" type="text" placeholder="Enter alternatives" />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Score</label>
                    </div>
                    <div className="column is-12-mobile is-1 mb-1 p-1">
                        <input className="input" type="number" defaultValue="1" />
                    </div>
                </div>
                <div className="columns is-vcentered p-0">
                    <div className="column is-12-mobile is-2 mb-1 p-1 has-text-right has-text-left-mobile">
                        <label class="label mr-6">Placeholder</label>
                    </div>
                    <div className="column is-12-mobile is-8 mb-1 p-1">
                        <div>
                            <input className="input is-fullwidth-mobile is-inline" type="text" defaultValue="This is the placeholder" />
                            <span className="icon has-text-info is-size-5 m-1 is-clickable"><i className="fas fa-circle-plus" aria-hidden="true"></i></span>
                        </div>
                    </div>
                </div>
                <div className='columns p-0'>
                    <div className='column is-12-mobile is-2 is-hidden-mobile'>
                    </div>
                    <div className='column is-12-mobile is-10 mb-1 p-1'>
                        <p class="is-size-6">The placeholder text is displayed until the learner enters some text.</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FBQuestionTab;