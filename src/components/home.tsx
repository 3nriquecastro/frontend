import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="w-screen h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-3xl text-center space-y-8">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
          Keep Your Business Alive with AI
        </h1>
        <p className="text-xl text-muted-foreground">
          Enthos AI Assistant helps you manage and grow your business with
          intelligent automation and insights.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg">Sign In</Button>
          <Button size="lg" variant="outline">
            Register
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Home;
