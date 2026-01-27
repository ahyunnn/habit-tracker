import AppLayout from "@/widgets/layout/AppLayout";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AppLayout>{children}</AppLayout>;
}
