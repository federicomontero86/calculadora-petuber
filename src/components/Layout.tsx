import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "transparent",
      }}
    >
      <div
        style={{
          maxWidth: 400,
          width: "100%",
          padding: 16,
          border: "1px solid #ccc",
          borderRadius: 8,
          background: "#242424",
          boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          color: "#fff",
        }}
      >
        <h1>Petuber Trip Quotation</h1>
        {children}
      </div>
    </div>
  );
}
