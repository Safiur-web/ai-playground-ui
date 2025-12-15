import Sidebar from "@/components/Sidebar";
import PromptEditor from "@/components/PromptEditor";
import ChatOutput from "@/components/ChatOutput";

export default function Home() {
  return (
    <main className="min-h-screen grid md:grid-cols-[300px_1fr]">

      {/* Sidebar */}
      <aside className="border-r p-4">
        <Sidebar />
      </aside>

      {/* Main Content */}
      <section className="p-6 space-y-6">
        <PromptEditor />
        <ChatOutput />
      </section>

    </main>
  );
}






