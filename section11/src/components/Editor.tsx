import { ReactElement, useState } from "react";
import { TodoDispatchContext, useTodoDispatch } from "../App";

interface Props {
    // children: ReactElement; 칠드런이 생길 시 설정
}

export default function Editor(props: Props) {
    const dispatch = useTodoDispatch();

    const [text, setText] = useState("");

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const onClickButton = () => {
        dispatch.onClickAdd(text);
        setText("");
    };

    return (
        <div>
            <input value={text} onChange={onChangeInput} />
            <button onClick={onClickButton}>추가</button>
        </div>
    );
}
