import FocusTrap from 'focus-trap-react';
import * as S from './DeleteModal.styles';

interface DeleteModalProps {
	isOpen: boolean;
	toggleModal: () => void;
}

function DeleteModal({ isOpen, toggleModal }: DeleteModalProps) {
	return (
		<>
			{isOpen && (
				<>
					<S.Background />
					<FocusTrap>
						<S.Container>
							<S.Title>Delete Comment</S.Title>
							<S.Description>
								Are you sure you want to delete this comment? This will remove
								this comment and can't be undone.
							</S.Description>
							<S.ActionContainer>
								<S.CancelButton onClick={toggleModal}>
									NO, CANCEL
								</S.CancelButton>
								<S.DeleteButton onClick={toggleModal}>
									YES, DELETE
								</S.DeleteButton>
							</S.ActionContainer>
						</S.Container>
					</FocusTrap>
				</>
			)}
		</>
	);
}

export default DeleteModal;
