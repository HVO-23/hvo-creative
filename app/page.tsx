import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center justify-center gap-6 bg-[#F7F5F2]">
      <Button>Primary</Button>

      <Button variant="secondary">
        Secondary
      </Button>

      <Button variant="ghost">
        Ghost
      </Button>
    </main>
  );
}