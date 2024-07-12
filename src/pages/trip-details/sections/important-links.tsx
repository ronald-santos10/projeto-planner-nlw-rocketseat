import { Link2, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "../../../components/button";
import { api } from "../../../lib/axios";

interface ImportantLinksProps {
  openCreativeLinkModal: () => void;
}

interface Link {
  id: string;
  title: string;
  url: string;
}

export function ImportantLinks({ openCreativeLinkModal }: ImportantLinksProps) {

  const { tripId } = useParams();
  const [links, setLinks] = useState<Link[]>([]);

  useEffect(() => {
    api
      .get(`/trips/${tripId}/links`)
      .then((response) => setLinks(response.data.links));
  }, [tripId]);

  return (
    <div className="w-80 space-y-6">
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Links importantes</h2>
        <div className="space-y-4">
          {links.map((item) => {
            return (
              <div key={item.id} className="flex items-center justify-between gap-4">
                <div className="flex-1 space-y-1.5">
                  <span className="block font-medium">{item.title}</span>
                  <a
                    href={item.url}
                    target="blank"
                    className="block text-xs text-zinc-400 truncate hover:text-zinc-200"
                  >
                    {item.url}
                  </a>
                </div>
                <Link2 className="size-5 text-zinc-400" />
              </div>
            );
          })}
        </div>
        <Button variant="secundary" size="full" onClick={openCreativeLinkModal}>
          <Plus className="size-5" />
          Cadastrar novo link
        </Button>
        <div className="w-full h-px bg-zinc-800" />
      </div>
    </div>
  );
}
