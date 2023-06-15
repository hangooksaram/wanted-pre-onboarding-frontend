import React from "react";

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
    <React.Fragment>
      <button data-testid="modify-button" onClick={onChangeModifyMode}>
        수정
      </button>
      <button data-testid="delete-button" onClick={onDeleteTodo}>
        삭제
      </button>
    </React.Fragment>
  );
};

const EditButtonGroup = ({
  onSubmitTodo,
  onChangeModifyMode,
}: EditButtonGroupProps) => {
  return (
    <React.Fragment>
      <button data-testid="submit-butotn" onClick={onSubmitTodo}>
        제출
      </button>
      <button data-testid="cancel-button" onClick={onChangeModifyMode}>
        취소
      </button>
    </React.Fragment>
  );
};

export { ItemButtonGroup, EditButtonGroup };
