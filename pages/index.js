export default function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Bem-vindo à EducaWeb 🚀</h1>
      <p>Seu portal de cursos digitais de desenvolvimento web e marketing!</p>
      <a href="https://www.hotmart.com" target="_blank" rel="noopener noreferrer">
        <button style={{
          backgroundColor: "#0070f3",
          color: "#fff",
          padding: "10px 20px",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          marginTop: "20px"
        }}>
          Comprar Curso
        </button>
      </a>
    </div>
  );
}
