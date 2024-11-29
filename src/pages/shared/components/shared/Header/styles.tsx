import styled from "styled-components";

export const Container = styled.header`
  background: var(--primary);
  display: flex;
  justify-content: center;
  align-items: center;

  justify-content: space-between;
  flex-direction: row;

  height: 80px;
  padding-left: 2rem;
`;

export const Content = styled.div``;

export const RightContent = styled(Content)`
  background: white;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;

  padding: 0 2rem;

  div {
    display: flex;
  }

  h1 {
    font-weight: 600;
  }

  p {
    margin-top: -5px;
    font-size: 0.8rem;
  }

  section {
    margin-left: 0.5rem;
  }
`;
export const LeftContent = styled.div`
  width: 360px;
  background: var(--primary);

  display: flex;
  flex-direction: row;
  align-items: center;

  color: var(--text-color);

  h1 {
    font-size: 1.5rem;
    font-weight: 700;
    color: white;
    margin-left: 0.5rem;
  }
`;

export const TabsList = styled.section`
  a {
    margin: 0 0.5rem;
    height: 100%;
    &:hover {
      font-size: 1.2rem;
    }
  }

  .active {
    font-weight: 600;
    color: var(--primary);
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 30px;
`;
