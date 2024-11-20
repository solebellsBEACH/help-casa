import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  ActivitiesContainer,
  ActivityList,
  ActivityItem,
  ActivityAvatar,
  ActivityInfo,
  ViewMoreButton,
  CreateServiceButton,
} from "./style";
import { Activity } from "./types";

const Activities: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  const loadActivities = async () => {
    try {
      const response = await axios.get("/api/activities");
      setActivities(response.data);
    } catch (error) {
      console.error("Erro ao carregar atividades:", error);
    }
  };

  useEffect(() => {
    loadActivities();
  }, []);

  return (
    <ActivitiesContainer>
      <h2
        style={{ marginBottom: "10px", fontSize: "1.5em", fontWeight: "bold" }}
      >
        Atividades
      </h2>
      <ActivityList>
        {activities.map((activity) => (
          <ActivityItem key={activity.id}>
            <ActivityAvatar
              src="https://via.placeholder.com/50"
              alt="Activity"
            />
            <ActivityInfo>
              <p>
                <strong>{activity.name}</strong>
              </p>
              <p>{activity.role}</p>
            </ActivityInfo>
            <ViewMoreButton>Ver Mais</ViewMoreButton>
          </ActivityItem>
        ))}
      </ActivityList>
      <CreateServiceButton>Criar Serviço</CreateServiceButton>
    </ActivitiesContainer>
  );
};

export default Activities;
