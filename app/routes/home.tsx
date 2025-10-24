import Navbar from "~/components/Navbar";
import type { Route } from "./+types/home";
import { resumes } from "constants/index";
import ResumeCard from "~/components/ResumeCard";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { usePuterStore } from "~/lib/puter";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resume Analyzer" },
    { name: "description", content: "Ai Resume analyzer" },
  ];
}

export default function Home() {
  const { auth } = usePuterStore();
  const navigate = useNavigate();
  useEffect(() => {
    if (!auth.isAuthenticated) navigate("/auth?next=/");
  }, [auth.isAuthenticated]);
  return (
    <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar></Navbar>
      {/* {window.puter.ai.chat()} */}
      <section className="main-section">
        <div className="page-heading py-16">
          <h1>Track your Applications & Resume Ratings</h1>
          <h2>Review your submissions and check AI-powered feedback.</h2>
        </div>

        {resumes.length > 0 && <div className=""></div>}
        <div className="resume-section"></div>
        {resumes.map((resume) => (
          <ResumeCard key={resume.id} resume={resume}></ResumeCard>
        ))}
      </section>
    </main>
  );
}
