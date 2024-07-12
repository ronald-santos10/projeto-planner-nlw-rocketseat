import { CircleCheck, CircleDashed, UserCog } from "lucide-react";
import { Button } from "../../../components/button";
import { useEffect, useState } from "react";
import { api } from "../../../lib/axios";
import { useParams } from "react-router-dom";

interface Participants {
  id: string;
  name: string | null;
  email: string;
  is_confirmed: boolean;
}


export function GuestsList() {
  const { tripId } = useParams();
  const [participants, setParticipants] = useState<Participants[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/participants`)
      .then((response) => setParticipants(response.data.participants));
  }, [tripId]);

  return (
    <div className="w-80 space-y-6">
      <h2 className="text-xl font-semibold">Convidados</h2>
      {participants.map((participant, index) => {
        return (
          <div key={participant.id} className="flex items-center justify-between gap-4">
            <div className="flex-1 space-y-1.5">
              <span className="font-medium">{participant.name ?? `Convidado ${index}`}</span>
              <p className="text-sm text-zinc-400 truncate ">
              {participant.email}
              </p>
            </div>
            {participant.is_confirmed ? (
              <CircleCheck className="size-5 text-lime-300"/>
            ) : (
              <CircleDashed className="size-5 text-zinc-400"/>
            )}
            
          </div>
        );
      })}
      <Button variant="secundary" size="full">
        <UserCog className="size-5" />
        Gerenciar convidados
      </Button>
    </div>
  );
}
