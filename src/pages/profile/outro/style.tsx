import styled from "styled-components";

export const Container = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background: var(--secondary);
`;

export const LogoutButton = styled.button`
  background-color: #da9a22;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
  cursor: pointer;
  border-radius: 5px;
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const UserInfoContainer = styled.div`
  flex: 2;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const UserDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 10px;
`;

export const Details = styled.p`
  font-size: 1.1em;
  line-height: 1.6;
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-right: 30px;
`;

export const EditButton = styled.button`
  background-color: #da9a22;
  border: none;
  color: white;
  padding: 10px 20px;
  margin-top: 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-left: 30%;
`;

export const ActivitiesContainer = styled.div`
  flex: 1;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const ActivityList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const ActivityAvatar = styled.img`
  width: 50px;
  border-radius: 50%;
`;

export const ActivityInfo = styled.div`
  flex-grow: 1;
`;

export const ViewMoreButton = styled.button`
  background-color: #da9a22;
  border: none;
  color: white;
  padding: 8px 15px;
  cursor: pointer;
  border-radius: 5px;
`;

export const CreateServiceButton = styled.button`
  background-color: #da9a22;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  display: block;
  margin: 20px auto;
`;

export const HistoryButton = styled.button`
  background-color: #da9a22;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin: 10px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Permite rolagem quando o conteúdo for maior que a tela */
`;

export const ModalContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  width: 90%; /* Usa a largura da tela, mas respeitando um máximo */
  max-width: 600px; /* Limita a largura máxima */
  max-height: 90vh; /* Limita a altura do modal a 90% da altura da tela */
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto; /* Permite rolar caso o conteúdo seja maior que a altura do modal */
`;

export const ModalTitle = styled.h3`
  font-size: 1.5em;
  text-align: center;
`;

export const ModalInput = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%; /* Faz os campos de input ocuparem toda a largura disponível */
`;

export const ModalButton = styled.button`
  background-color: #da9a22;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  &:hover {
    background-color: #c88e1b;
  }
`;

export const RatingButton = styled.button`
  padding: 10px 20px;
  background-color: #f59e0b;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 5px;
  &:hover {
    background-color: #d97706;
  }
`;

export const ActionButtonsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;
  justify-content: center;
`;
