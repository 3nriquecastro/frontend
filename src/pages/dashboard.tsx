import DashboardLayout from "@/components/layout/DashboardLayout";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Welcome to Enthos</h1>
        <div className="rounded-lg border bg-card p-8">
          <h2 className="text-2xl font-semibold mb-4">AI Assistant</h2>
          <p className="text-muted-foreground">
            Start a conversation with your AI business assistant
          </p>
        </div>
      </div>
    </DashboardLayout>
  );
}
