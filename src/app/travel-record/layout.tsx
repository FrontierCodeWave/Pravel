export default function RecordLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <div className="min-h-dvh bg-gray-100">
      {children}
      {modal}
    </div>
  );
}
