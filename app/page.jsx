import Hero from "@/components/Hero";
import BlogSection from "@/components/BlogSection";

export default function Home() {
  return (
    <main className="flex min-h-screen space-y-8 my-8 flex-col">
      <Hero />
      <BlogSection />
    </main>
  );
}