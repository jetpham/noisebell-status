'use client';

import { Status } from "@/components/Status"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 gap-6">
      <Status status="open" />
    </div>
  );
}