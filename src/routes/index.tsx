import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <>
      <section class="flex items-center justify-center h-screen w-full bg-[#9B352B]">
        <h1 class="text-3xl font-bold text-[#F8EFCB]">Hello world!</h1>
      </section>
      <section class="flex items-center justify-center h-screen w-full bg-[#FFB81C]">
        <h1 class="text-3xl font-bold text-[#fdfdfd]">With Tailwind CSS</h1>
      </section>
      <section class="flex items-center justify-center h-screen w-full bg-[#00205B]">
        <h1 class="text-3xl font-bold text-[#fdfdfd]">Lenis Scroll & GSAP</h1>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
