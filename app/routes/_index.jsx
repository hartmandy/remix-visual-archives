import HeroImage from "~/components/hero-image";
// export const meta = () => {
//   return [
//     { title: "New Remix App" },
//     { name: "description", content: "Welcome to Remix!" },
//   ];
// };

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.8" }}>
      <h1>Preserving the Past for a Better Future.</h1>
      <p>
        Visual Archives creates digital and accessible products for non-profits
        that promote inclusivity and accessibility.
      </p>
      <HeroImage />
    </div>
  );
}
