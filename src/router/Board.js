import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getMemoAllCall } from "../api/BaseApi";
import { Table, Button } from "react-bootstrap";

const MemoItem = ({id, title}) => {
    const navigate = useNavigate();
    return (
        <tr onClick={() => navigate("/poster/"+id)} eventKey={title} as={id} to={id}>
            <td>{id}</td>
            <td>{title}</td>
        </tr>
    )
}

const FuncButton = () => {
    const navigate = useNavigate();
    return (
        <Button type="button" onClick={() => navigate("/poster/new")}>작성</Button>
    )
}

const List = () => {
    const [memoAll, setMemoAll] = useState([]);

    useEffect(() => {
        const getMemoAll = async () => {
            await getMemoAllCall().then((res) => setMemoAll(res.data))
        };
        getMemoAll();
    }, [])

    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <th>id</th>
                    <th>title</th>
                </thead>
                <tbody>
                    {memoAll.slice().sort((a, b) => a.id - b.id).map((item, index) => (
                        <MemoItem {...item} key={index} />
                    ))}
                </tbody>
            </Table>
            <FuncButton></FuncButton>
        </div>
    );
}

export default List;