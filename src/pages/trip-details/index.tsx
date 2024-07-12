import { Plus } from "lucide-react";

import { useState } from "react";
import { CreateActivityModal } from "./modals/create-activity-modal";
import { CreateLinkModal } from "./modals/create-link-modal";
import { ActivityList } from "./sections/activity-list";
import { GuestsList } from "./sections/guests-list";
import { Header } from "./sections/header";
import { ImportantLinks } from "./sections/important-links";
import { Button } from "../../components/button";


export function TripDetailsPage() {
  const [isCreateActivityModalOpen, setIsCreateActivityModalOpen] =
    useState(false);

  const [isCreateLinkModalOpen, setIsCreateLinkModalOpen] = useState(false);

  function openCreativeActivityModal() {
    setIsCreateActivityModalOpen(true);
  }

  function closeCreativeActivityModal() {
    setIsCreateActivityModalOpen(false);
  }

  function openCreativeLinkModal() {
    setIsCreateLinkModalOpen(true);
  }

  function closeCreativeLinkModal() {
    setIsCreateLinkModalOpen(false);
  }

  return (
    <div className="max-w-6xl px-6 py-10 mx-auto space-y-8">
      <Header />

      <main className="flex gap-16 px-4">
        <div className="flex-1 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-zinc-50 text-3xl font-semibold">Atividades</h2>

            <Button onClick={openCreativeActivityModal} variant="primary">
              <Plus />
              Cadastrar atividade
            </Button>
          </div>

          <ActivityList />
        </div>

        <div className="flex flex-col space-y-6">
          <ImportantLinks openCreativeLinkModal={openCreativeLinkModal} />

          <GuestsList />
        </div>
      </main>

      {isCreateActivityModalOpen && (
        <CreateActivityModal
          closeCreativeActivityModal={closeCreativeActivityModal}
        />
      )}

      {isCreateLinkModalOpen && (
        <CreateLinkModal closeCreativeLinkModal={closeCreativeLinkModal} />
      )}
    </div>
  );
}
