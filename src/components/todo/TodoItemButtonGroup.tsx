import Button from "../ui/Button";
import { css } from "@emotion/css";

interface ItemButtonGroupProps {
  onDeleteTodo: () => void;
  onChangeModifyMode: () => void;
}

interface EditButtonGroupProps {
  onSubmitTodo: () => void;
  onChangeModifyMode: () => void;
}

const ItemButtonGroup = ({
  onDeleteTodo,
  onChangeModifyMode,
}: ItemButtonGroupProps) => {
  return (
    <div
      className={css`
        text-align: right;
      `}
    >
      <Button
        width="50px"
        height="40px"
        color="rgb(138, 209, 146)"
        margin="0px 4px 0px 0px"
        borderRadius="5px"
        data-testid="modify-button"
        onClick={onChangeModifyMode}
      >
        수정
      </Button>
      <Button
        width="50px"
        height="40px"
        color="rgb(255, 97, 97)"
        borderRadius="5px"
        data-testid="delete-button"
        onClick={onDeleteTodo}
      >
        삭제
      </Button>
    </div>
  );
};

const EditButtonGroup = ({
  onSubmitTodo,
  onChangeModifyMode,
}: EditButtonGroupProps) => {
  return (
    <div
      className={css`
        text-align: right;
      `}
    >
      <Button
        width="50px"
        height="40px"
        color="rgb(138, 209, 146)"
        margin="0px 4px 0px 0px"
        borderRadius="5px"
        data-testid="submit-button"
        onClick={onSubmitTodo}
      >
        제출
      </Button>
      <Button
        width="50px"
        height="40px"
        color="rgb(255, 97, 97)"
        borderRadius="5px"
        data-testid="cancel-button"
        onClick={onChangeModifyMode}
      >
        취소
      </Button>
    </div>
  );
};

export { ItemButtonGroup, EditButtonGroup };
