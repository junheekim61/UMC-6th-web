import PropTypes from "prop-types";
import * as S from "./ListStyle.js";

const List = ({ task, status, handleButtonClick }) => {
  return (
    <S.ListLayout>
      <S.TextBox>{task}</S.TextBox>
      <S.ButtonBox>
        <S.Button onClick={handleButtonClick}>{status}</S.Button>
      </S.ButtonBox>
    </S.ListLayout>
  );
};

List.propTypes = {
  task: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleButtonClick: PropTypes.func.isRequired,
};

export default List;
