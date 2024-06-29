import Header from "@/components/Header";
import { getTranslations } from "next-intl/server";

export default async function Index() {
  const t = await getTranslations("Index");

  return (
    <main>
      <Header />
    </main>
  );
}
