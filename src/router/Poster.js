import React, { useState, useEffect } from "react";
import { getMemoOneCall, postMemo, putMemo} from "../api/BaseApi";
import { useParams, useNavigate } from "react-router";
import { Modal, InputGroup, FormControl, Button, Form } from "react-bootstrap";

const OnePoster = ({id, title, content}) => {
    const [changeTitle, setChangeTitle] = useState('');
    const [changeContent, setChangeContent] = useState('');
    const [showModalSwitch, setShowModalSwitch] = useState(false);
    const [showModalChange, setShowModalChange] = useState(false);
    const [isEditable, setIsEditable] = useState(false);
    const [switchChecked, setSwitchChecked] = useState(false);
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    const handleClose = () => {
        if (showModalSwitch)
            setShowModalSwitch(false)
        else if (showModalChange)
            setShowModalChange(false)
    }

    const handleSwitchChange = () => {
        setSwitchChecked(!switchChecked);
        setIsEditable(!isEditable);
    }

    const putMemoExce = async() => {
        if (changeTitle.trim() === '' || changeContent.trim() === '' || !isEditable) {
            // title 또는 content가 비어있을 경우 Toast를 보여줌
            setShowModalSwitch(true);
            // 3초 후에 Toast를 자동으로 닫음
            setTimeout(() => {
                setShowModalSwitch(false);
            }, 3000);
            return;
        } else if (changeTitle === title && changeContent === content) {
            // title 또는 content가 비어있을 경우 Toast를 보여줌
            setShowModalChange(true);
            // 3초 후에 Toast를 자동으로 닫음
            setTimeout(() => {
                setShowModalChange(false);
            }, 3000);
            return;
        }
        const param = {"title" : changeTitle, "content": changeContent, "id": id}
        await putMemo(param).then();
        navigate('/board');
    }

    useEffect(() => {
        setChangeTitle(title);
        setChangeContent(content);
    }, [title, content]);

    return (
        <div>
            <p style={{visibility:"hidden"}}>{id}</p>
            <Modal show={showModalSwitch} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>알림</Modal.Title>
                </Modal.Header>
                <Modal.Body>수정 여부를 변경 후, 제목과 내용을 입력하세요.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                         확인
                    </Button>
                </Modal.Footer>
            </Modal>
            <Modal show={showModalChange} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>알림</Modal.Title>
                </Modal.Header>
                <Modal.Body>변경된 내용이 존재하지 않습니다. 다시 확인 해주세요.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                         확인
                    </Button>
                </Modal.Footer>
            </Modal>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">제목</InputGroup.Text>
                <FormControl
                    type="text"
                    placeholder="제목을 입력하세요"
                    value={changeTitle}
                    onChange={(e) => setChangeTitle(e.target.value)}
                    readOnly={!isEditable}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">내용</InputGroup.Text>
                <FormControl
                    as="textarea"
                    rows={5}
                    placeholder="내용을 입력하세요"
                    value={changeContent}
                    onChange={(e) => setChangeContent(e.target.value)}
                    readOnly={!isEditable}
                />
            </InputGroup>
            <Form.Check
                type="switch"
                id="custom-switch"
                label="수정 On/Off"
                checked={switchChecked}
                onChange={handleSwitchChange}
            />
            <Button variant="success" type="submit" onClick={() => putMemoExce()}>
                수정
            </Button>
            <Button variant="secondary" type="button" onClick={handleGoBack}>
                이전
            </Button>
        </div>
    )
}

const NewPoster = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();
    
    const handleGoBack = () => {
        navigate(-1);
    }

    const handleClose = () => {
        setShowModal(false);
      }; 

    const postMemoExce = async() => {
        if (title.trim() === '' || content.trim() === '') {
            // title 또는 content가 비어있을 경우 Toast를 보여줌
            setShowModal(true);
            // 3초 후에 Toast를 자동으로 닫음
            setTimeout(() => {
                setShowModal(false);
            }, 3000);

            return;
        }
        const param = {"title" : title, "content": content}
        await postMemo(param).then();
        navigate('/board');
    };

    return (
        <div>
            <p style={{visibility:"hidden"}}>그냥 맞추기용</p>
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>알림</Modal.Title>
                </Modal.Header>
                <Modal.Body>제목과 내용을 입력하세요.</Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                         확인
                    </Button>
                </Modal.Footer>
            </Modal>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">제목</InputGroup.Text>
                <FormControl
                type="text"
                placeholder="제목을 입력하세요"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
            </InputGroup>

            <InputGroup className="mb-3">
                <InputGroup.Text id="inputGroup-sizing-default">내용</InputGroup.Text>
                <FormControl
                as="textarea"
                rows={5}
                placeholder="내용을 입력하세요"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                />
            </InputGroup>

            <Button variant="primary" type="submit" onClick={() => postMemoExce()}>
                게시
            </Button>
            <Button variant="secondary" type="button" onClick={handleGoBack}>
                이전
            </Button>
        </div>
    )
}

// const Buttons = ({id}) => {
//     const navigate = useNavigate();

//     const handleGoBack = () => {
//         navigate(-1);
//     };

//     console.log(!isNaN(Number(id)))

//     return (
//         <div>
//             {isNaN(Number(id)) ? (
//                 <Button variant="primary" type="submit" onClick={handleGoBack}>
//                     게시
//                 </Button>
//                 ) : (
//                 <Button variant="success" type="submit" onClick={handleGoBack}>
//                     수정
//                 </Button>
//             )}
//             <Button variant="secondary" type="button" onClick={handleGoBack}>
//                 이전
//             </Button>
//         </div>
//     )
// }

const Poster = () => {
    const { id } = useParams();
    const [memoOne, setMemoOne] = useState([]);
    const navigate = useNavigate(); 

    useEffect(() => {
        const getDetailPage = async (id) => {
            if (!isNaN(Number(id)))
                await getMemoOneCall(id).then((res) => {
                    setMemoOne([res.data])
                    if (Array.isArray(res.data.length) === 0)
                        navigate('/poster/new')
                });
            else
                navigate('/poster/new')
        };
        getDetailPage(id);
    }, [id, navigate]);

    return (
        <div>
            {id !== 'new' ? (
                memoOne.length > 0 ? (
                    memoOne.map((item, index) => (
                        <OnePoster {...item} key={index}/>
                ))
            ) : (
                <p>왜?</p>
            )
            ) : (
                <NewPoster/>
            )}
        </div>
    );
}

export default Poster;